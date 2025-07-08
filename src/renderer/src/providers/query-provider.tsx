import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const QueryClient = new QueryClient({
  defaultOptions: {
    queries: {
        staleTime: 0,
        gcTime: Infinity,
        retry: 1,
        refetchonWindowFocus: false,
    },
    mutations: {
      retry: 1,
    },
    },
});
export function QueryProvider({ children }: { children: React.ReactNode }) {
    return (
        <QueryClientProvider client={QueryClient}>
        {children}
        </QueryClientProvider>
    );
    }
export default QueryProvider;
export type { QueryClient } from "@tanstack/react-query";
export type { QueryClientProviderProps } from "@tanstack/react-query";