
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/components/AuthContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import GraduationProjects from "./pages/GraduationProjects";
import UniversityGraduates from "./pages/UniversityGraduates";
import VocationalGraduates from "./pages/VocationalGraduates";
import SearchProjects from "./pages/SearchProjects";
import Auth from "./pages/Auth";
import AddProject from "./pages/AddProject";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/add-project" element={<AddProject />} />
            <Route path="/graduation-projects" element={<GraduationProjects />} />
            <Route path="/university-graduates" element={<UniversityGraduates />} />
            <Route path="/vocational-graduates" element={<VocationalGraduates />} />
            <Route path="/search" element={<SearchProjects />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
