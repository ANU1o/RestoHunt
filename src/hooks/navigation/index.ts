"use client";
import { useRouter } from "next/navigation";

export function useNavigationUtils() {
  const router = useRouter();

  return {
    goToHome: () => router.push("/"),
    goToPreview: (id: Number | undefined) => router.push(`/Preview/${id}`),
  };
}
