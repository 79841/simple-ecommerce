"use client";
import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { reduxStore } from "./store";

type TProvidersProps = PropsWithChildren;
export const Providers = ({ children }: TProvidersProps) => {
  return <Provider store={reduxStore}>{children}</Provider>;
};
