/**
 * Resolves Buy links against NEXT_PUBLIC_SHOPIFY_STORE_URL.
 * Set the env var to your storefront root (e.g. https://your-store.myshopify.com or a custom domain).
 * Use buyUrl as a full https URL, or a path like /products/your-product-handle.
 */
export function shopifyBuyUrl(pathOrUrl: string | undefined): string {
  if (!pathOrUrl || pathOrUrl === "#") return "#";
  const trimmed = pathOrUrl.trim();
  if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) return trimmed;
  const base = (process.env.NEXT_PUBLIC_SHOPIFY_STORE_URL ?? "").replace(/\/$/, "");
  if (!base) return "#";
  const path = trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
  return `${base}${path}`;
}
