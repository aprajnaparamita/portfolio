import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import { ROUTE_PATHS } from "@/lib/index";
import { Layout } from "@/components/Layout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Skills from "@/pages/Skills";
import Experience from "@/pages/Experience";
import UsefulSites from "@/pages/UsefulSites";
import Contact from "@/pages/Contact";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      retry: 1,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner position="bottom-right" theme="dark" />
        <HashRouter>
          <Layout>
            <Routes>
              <Route path={ROUTE_PATHS.HOME} element={<Home />} />
              <Route path={ROUTE_PATHS.ABOUT} element={<About />} />
              <Route path={ROUTE_PATHS.SKILLS} element={<Skills />} />
              <Route path={ROUTE_PATHS.EXPERIENCE} element={<Experience />} />
              <Route path={ROUTE_PATHS.USEFUL_SITES} element={<UsefulSites />} />
              <Route path={ROUTE_PATHS.CONTACT} element={<Contact />} />
              <Route
                path="*"
                element={
                  <div className="flex flex-col items-center justify-center min-h-[60vh] text-primary">
                    <h1 className="text-4xl font-mono mb-4">ERROR 404: RESOURCE_NOT_FOUND</h1>
                    <p className="font-mono opacity-70">The requested path does not exist in this sector.</p>
                    <button
                      onClick={() => window.history.back()}
                      className="mt-8 px-6 py-2 border border-primary text-primary hover:bg-primary/10 transition-colors font-mono"
                    >
                      [ GO BACK ]
                    </button>
                  </div>
                }
              />
            </Routes>
          </Layout>
        </HashRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
