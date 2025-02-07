import { strapi } from "@strapi/sdk-js";

const STRAPI_URL = import.meta.env.STRAPI_URL || "http://localhost:1337";
const STRAPI_AUTH_TOKEN = import.meta.env.STRAPI_AUTH_TOKEN || "";

// Create a new instance of the Strapi SDK
const strapiSdk = strapi({
  baseURL: `${STRAPI_URL}/api`,
  auth: STRAPI_AUTH_TOKEN,
});

export default strapiSdk;

export async function getHomeContent() {
  const content = await strapiSdk.single("home").find({
    populate: ["heroHeader.actions"],
  });

  return content?.data as any;
}

export async function getSingleContent(key: string) {
  const content = await strapiSdk.single(key).find({
    populate: "*",
  });

  return content?.data as any;
}
