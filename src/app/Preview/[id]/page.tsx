import { fetchRestaurants } from "@/hooks/data/static";
import PreviewClient from "./PreviewClient";

export async function generateStaticParams() {
  const restaurants = await fetchRestaurants();
  return restaurants.map((r) => ({ id: String(r.id) }));
}

export default function PreviewPage() {
  return <PreviewClient />;
}
