// A tiny fetch wrapper that always adds the tenant id header and base URL

const TENANT_ID = "68dbe02484ca2a3c1a671f87";

// Prefer environment variable if available, else fall back to relative API path
const DEFAULT_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "https://print-shop-api-mu.vercel.app" || "http://localhost:3001";

export type HttpMethod = "GET" | "POST" | "PATCH" | "PUT" | "DELETE";

export interface RequestOptions<TBody = unknown> {
	method?: HttpMethod;
	body?: TBody;
	headers?: Record<string, string>;
	signal?: AbortSignal;
}

export interface ApiErrorPayload {
	message?: string;
	code?: string | number;
	errors?: unknown;
}

export class ApiError extends Error {
	status: number;
	body?: ApiErrorPayload | unknown;

	constructor(message: string, status: number, body?: unknown) {
		super(message);
		this.name = "ApiError";
		this.status = status;
		this.body = body;
	}
}

function buildHeaders(extra?: Record<string, string>): HeadersInit {
	const base: Record<string, string> = {
		"Content-Type": "application/json",
		"X-Tenant-Id": TENANT_ID,
	};
	return { ...base, ...extra };
}

function buildUrl(path: string): string {
	if (!path) return DEFAULT_BASE_URL;
	const hasProtocol = /^https?:\/\//i.test(path);
	if (hasProtocol) return path;
	return `${DEFAULT_BASE_URL}${path}`;
}

export async function apiFetch<TResponse = unknown, TBody = unknown>(
	path: string,
	options: RequestOptions<TBody> = {}
): Promise<TResponse> {
	const { method = "GET", body, headers, signal } = options;

	const response = await fetch(buildUrl(path), {
		method,
		headers: buildHeaders(headers),
		body: body !== undefined && method !== "GET" ? JSON.stringify(body) : undefined,
		signal,
		credentials: "include",
	});

	const contentType = response.headers.get("content-type") || "";
	const isJson = contentType.includes("application/json");
	const payload = isJson ? await response.json().catch(() => undefined) : undefined;

	if (!response.ok) {
		const message = (payload as ApiErrorPayload)?.message || `Request failed with status ${response.status}`;
		throw new ApiError(message, response.status, payload);
	}

	return (payload as TResponse) as TResponse;
}

export const apiClient = {
	get: <T>(path: string, headers?: Record<string, string>, signal?: AbortSignal) =>
		apiFetch<T>(path, { method: "GET", headers, signal }),
	post: <T, B = unknown>(path: string, body: B, headers?: Record<string, string>, signal?: AbortSignal) =>
		apiFetch<T, B>(path, { method: "POST", body, headers, signal }),
	patch: <T, B = unknown>(path: string, body: B, headers?: Record<string, string>, signal?: AbortSignal) =>
		apiFetch<T, B>(path, { method: "PATCH", body, headers, signal }),
	put: <T, B = unknown>(path: string, body: B, headers?: Record<string, string>, signal?: AbortSignal) =>
		apiFetch<T, B>(path, { method: "PUT", body, headers, signal }),
	delete: <T>(path: string, headers?: Record<string, string>, signal?: AbortSignal) =>
		apiFetch<T>(path, { method: "DELETE", headers, signal }),
};

export default apiClient;


