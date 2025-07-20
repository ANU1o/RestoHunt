import { Restaurent } from "./types";

export async function fetchRestaurants(): Promise<Restaurent[]> {
  const res = await fetch(
    new URL("/data/restaurants.json", process.env.BASE_URL).toString()
  );
  if (!res.ok) {
    throw new Error("Failed to load restaurant data");
  }

  const data = await res.json();
  return data.restaurants;
}
