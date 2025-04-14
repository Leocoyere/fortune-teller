import { createContext, useContext } from "react";
import { Card } from "@/lib/types/types";

export const CardContext = createContext<Card | null>(null);

export const useCard = () => {
  const ctx = useContext(CardContext);
  if (!ctx) throw new Error("useCard must be used inside a provider");
  return ctx;
};