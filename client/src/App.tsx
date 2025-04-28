import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Switch, Route } from "wouter";
import HomePage from "@/pages/HomePage";
import ProjectsPage from "@/pages/ProjectsPage";
import ResearchPage from "@/pages/ResearchPage";
import BlogPage from "@/pages/BlogPage";
import CVPage from "@/pages/CVPage";
import ContactPage from "@/pages/ContactPage";
import NotFound from "@/pages/not-found";
import { ThemeProvider } from "@/components/ui/theme-provider";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/projects" component={ProjectsPage} />
      <Route path="/research" component={ResearchPage} />
      <Route path="/blog" component={BlogPage} />
      <Route path="/cv" component={CVPage} />
      <Route path="/contact" component={ContactPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
