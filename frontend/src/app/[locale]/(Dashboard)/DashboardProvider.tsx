"use client";

import { ReactNode, useState } from "react";
import { TitleContext } from "./dashboard/TitleContext"; 

export default function DashboardProvider({ children }: { children: ReactNode }) {
  const [title, setTitle] = useState("");

  return (
    <TitleContext.Provider value={{ title, setTitle }}>
      {children}
    </TitleContext.Provider>
  );
}
