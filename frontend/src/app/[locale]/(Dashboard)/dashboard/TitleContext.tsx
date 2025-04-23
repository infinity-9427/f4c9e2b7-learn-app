"use client";

import  {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";

type TitleContextType = {
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
};

export const TitleContext = createContext<TitleContextType>({
  title: "",
  setTitle: () => {},
});

export function useTitleContext() {
  return useContext(TitleContext);
}
