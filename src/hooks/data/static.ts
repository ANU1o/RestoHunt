import fs from "fs";
import path from "path";
import { Restaurent } from "./types";

export async function fetchRestaurants(): Promise<Restaurent[]> {
  const filePath = path.join(
    process.cwd(),
    "public",
    "data",
    "restaurants.json"
  );
  const fileContents = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(fileContents);
  return data.restaurants;
}
