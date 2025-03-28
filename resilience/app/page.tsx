"use client";
import Dashboard from "./dashboard/page";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  router.push("/dashboard");
}
