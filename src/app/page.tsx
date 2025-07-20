"use client";

import { CardLayout, Hero, HotelCard } from "@/components";
import { useRestaurantUtils } from "@/hooks";
import { Container } from "react-bootstrap";

export default function Home() {
  const { getAll } = useRestaurantUtils();
  const restaurents = getAll();

  return (
    <div>
      <Hero />
      <Container className="my-5">
        <h1 className="display-1 bg-primary text-light text-center p-5 shadow-sm">
          Explore
        </h1>
        <CardLayout>
          {restaurents.map(
            ({ id, name, photograph, neighborhood, cuisine_type }) => (
              <HotelCard
                key={id}
                {...{
                  id,
                  name,
                  photograph,
                  neighborhood,
                  cuisine_type,
                }}
              />
            )
          )}
        </CardLayout>
      </Container>
    </div>
  );
}
