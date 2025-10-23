// Cloudinary configuration for image management
export const cloudinaryConfig = {
  cloudName: process.env.CLOUDINARY_CLOUD_NAME,
  apiKey: process.env.CLOUDINARY_API_KEY,
  apiSecret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
};

// Helper function to generate Cloudinary image URLs
export function getCloudinaryUrl(publicId: string, transformations?: string) {
  const baseUrl = `https://res.cloudinary.com/${cloudinaryConfig.cloudName}`;
  const imageUrl = transformations 
    ? `${baseUrl}/image/upload/${transformations}/${publicId}`
    : `${baseUrl}/image/upload/${publicId}`;
  return imageUrl;
}

// Common image transformations for fitness website
export const imageTransforms = {
  hero: "w_1200,h_600,c_fill,q_auto,f_auto",
  thumbnail: "w_300,h_200,c_fill,q_auto,f_auto",
  profile: "w_400,h_400,c_fill,q_auto,f_auto,r_max",
  gallery: "w_600,h_400,c_fill,q_auto,f_auto",
} as const;

// Generate optimized image URL with common transformations
export function getOptimizedImageUrl(
  publicId: string, 
  transform: keyof typeof imageTransforms = "thumbnail"
) {
  return getCloudinaryUrl(publicId, imageTransforms[transform]);
}