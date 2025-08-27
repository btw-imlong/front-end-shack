// lib/api.ts
const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://hopeful-crown-f1e9853770.strapiapp.com/api";

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
// lib/api.ts
export async function getProducts(
  categoryName: string = "",
  search: string = ""
) {
  // Base URL
  let url = `http://localhost:1337/api/products?populate=*`;

  // Add category filter if provided
  if (categoryName) {
    url += `&filters[category][name][$containsi]=${encodeURIComponent(
      categoryName
    )}`;
  }

  // Add search filter if provided
  if (search) {
    url += `&filters[name][$containsi]=${encodeURIComponent(search)}`;
  }

  // Fetch from Strapi
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch products");

  return await res.json();
}
