import { Restaurent } from "./types";

export async function fetchRestaurants(): Promise<Restaurent[]> {
  const res = await fetch("/data/restaurants.json");
  if (!res.ok) {
    throw new Error("Failed to load restaurant data");
  }

  const data = await res.json();
  return data.restaurants;
}
