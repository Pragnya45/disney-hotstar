"use client";
import { store } from "./Redux";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import { SkeletonTheme } from "react-loading-skeleton";

export const persistor = persistStore(store);
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export default function Providers({ children }) {
  return (
    <Provider store={store}>
      <PersistGate loading={false} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <Toaster position="top-center" richColors />
          <SkeletonTheme baseColor="#252833" highlightColor="#52525233">
            {children}
          </SkeletonTheme>
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
}
