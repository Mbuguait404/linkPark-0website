// Client-side Cloudinary upload using unsigned preset

const CLOUD_NAME = "lancolatech";
const UPLOAD_PRESET_UNSIGNED = "x7pljng0"; // provided unsigned preset

export type CloudinaryResourceType = "image" | "raw" | "auto";

interface UploadResult {
	secure_url: string;
	public_id: string;
	original_filename?: string;
	format?: string;
}

function getUploadUrl(resourceType: CloudinaryResourceType = "auto"): string {
	return `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/${resourceType}/upload`;
}

export async function uploadToCloudinary(file: File, resourceType: CloudinaryResourceType = "auto"): Promise<UploadResult> {
	const form = new FormData();
	form.append("file", file);
	form.append("upload_preset", UPLOAD_PRESET_UNSIGNED);

	const res = await fetch(getUploadUrl(resourceType), {
		method: "POST",
		body: form,
	});

	if (!res.ok) {
		const text = await res.text();
		throw new Error(`Cloudinary upload failed: ${res.status} ${text}`);
	}

	return (await res.json()) as UploadResult;
}

export async function uploadImage(file: File) {
	return uploadToCloudinary(file, "image");
}

export async function uploadRaw(file: File) {
	return uploadToCloudinary(file, "raw");
}


