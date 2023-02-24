import React, { type ComponentType } from "react";

import { MainLayout } from "@/layouts/MainLayout";

export function withLayout<T extends object>(Component: ComponentType<T>) {
  return (props: T) => (
    <MainLayout>
      <Component {...props} />
    </MainLayout>
  );
}
