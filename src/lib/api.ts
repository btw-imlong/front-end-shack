// lib/api.ts
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337/api";

// Generic fetcher
async function fetchAPI(endpoint: string, options: RequestInit = {}) {
  try {
    const res = await fetch(`${API_URL}${endpoint}`, {
      headers: { "Content-Type": "application/json" },
      ...options,
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch ${endpoint}`);
    }

    return res.json();
  } catch (error) {
    console.error("API fetch error:", error);
    throw error;
  }
}

// ========= Collection APIs =========
export async function getCategories() {
  return fetchAPI("/a-categories?populate=*"); // prepare for media/relations later
}

export async function getProducts() {
  return fetchAPI("/products?populate=*");
}

export async function getPartners() {
  return fetchAPI("/partners?populate=*");
}

export async function getBrands() {
  return fetchAPI("/brand-infos?populate=*");
}

export async function getStores() {
  return fetchAPI("/store-infos?populate=*");
}

export async function getReviews() {
  return fetchAPI("/reviews?populate=*");
}

export async function getImages() {
  return fetchAPI("/image-urls?populate=*");
}

export async function getContacts() {
  return fetchAPI("/contact-messages?populate=*");
}
