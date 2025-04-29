import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HashRouter, Routes, Route } from "react-router-dom"; // <-- CHANGED
import HomePage from "@/pages/HomePage";
import ProjectsPage from "@/pages/ProjectsPage";
import ResearchPage from "@/pages/ResearchPage";
import BlogPage from "@/pages/BlogPage";
import CVPage from "@/pages/CVPage";
import ContactPage from "@/pages/ContactPage";
import NotFound from "@/pages/not-found";
import { ThemeProvider } from "@/components/ui/theme-provider";

function AppRoutes() { // Renamed to AppRoutes to avoid confusion
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/research" element={<ResearchPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/cv" element={<CVPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<NotFound />} /> {/* Fallback for 404 */}
    </Routes>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <HashRouter> {/* <-- CHANGED */}
            <AppRoutes />
          </HashRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
