"use client";

import { useEffect, useState } from "react";
import { Restaurent } from "./types";

export function useRestaurantUtils() {
  const [restaurants, setRestaurants] = useState<Restaurent[]>([]);

  useEffect(() => {
    fetch("restohunt.netlify.app/data/restaurants.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => setRestaurants(data.restaurants))
      .catch((err) => console.error("Error:", err));
  }, []);

  return {
    getAll: () => restaurants,
    getById: (id: string) =>
      restaurants.find((restaurant: any) => restaurant.id == id),
  };
}
