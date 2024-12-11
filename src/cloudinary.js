import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "abraomukas",
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default function teamPhoto(width, height) {
  const url = cloudinary.url("cloudinary-group", {
    transformation: [
      { quality: "auto", fetch_format: "auto" },
      { crop: "fill", gravity: "auto", width: width, height: height },
    ],
  });

  return url.secure_url;
}
