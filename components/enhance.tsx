"use client";

import { useEffect } from "react";
import { syncEnhanced } from "@/lib/motion";

export function Enhance() {
  useEffect(() => {
    const queries = [
      window.matchMedia("(prefers-reduced-motion: reduce)"),
      window.matchMedia("(max-width: 900px)"),
      window.matchMedia("(max-height: 680px)"),
    ];
    const apply = () => syncEnhanced();
    apply();
    queries.forEach((query) => query.addEventListener("change", apply));
    window.addEventListener("resize", apply);
    return () => {
      queries.forEach((query) => query.removeEventListener("change", apply));
      window.removeEventListener("resize", apply);
    };
  }, []);

  return null;
}
