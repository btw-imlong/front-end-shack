export const API_URL = "https://hopeful-crown-f1e9853770.strapiapp.com/api";

// Generic fetcher
async function fetchAPI(endpoint: string, options: RequestInit = {}) {
  try {
    const res = await fetch(`${API_URL}${endpoint}`, {
      headers: { "Content-Type": "application/json" },
      ...options,
      next: { revalidate: 60 }, // ✅ ISR cache (optional)
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
  return fetchAPI("/a-categories?populate=*");
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

// ========= Products =========
export async function getProducts(
  categoryName: string = "",
  search: string = ""
) {
  let url = `/products?populate=*`;

  if (categoryName) {
    url += `&filters[category][name][$containsi]=${encodeURIComponent(
      categoryName
    )}`;
  }

  if (search) {
    url += `&filters[name][$containsi]=${encodeURIComponent(search)}`;
  }

  return fetchAPI(url);
}

// ✅ Get a single product by Strapi documentId
export async function getProductByDocumentId(documentId: string) {
  const url = `/products?populate=*&filters[documentId][$eq]=${documentId}`;
  return fetchAPI(url);
}
