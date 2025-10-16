import apiClient from "./apiClient";

// Minimal types for admissions create-only flow
export interface Admission {
	id: string;
	[key: string]: unknown;
}

export interface CreateAdmissionInput {
	studentName: string;
	[key: string]: unknown;
}

const BASE = "/admissions";

export async function createAdmission(input: CreateAdmissionInput): Promise<Admission> {
	return apiClient.post<Admission, CreateAdmissionInput>(`${BASE}`, input);
}

export default {
	createAdmission,
};

