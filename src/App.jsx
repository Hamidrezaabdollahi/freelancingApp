import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Auth from "./pages/Auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import CompleteProfile from "./pages/CompleteProfile";
import Home from "./pages/Home";
import NoteFound from "./pages/NotFound";
import OwnerDashboard from "./pages/OwnerDashbord";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import { DarkModeProvider } from "./Context/DarkmodeContext";
import OwnerLayout from "./features/owner/OwnerLayout";
import FreelancerDashboard from "./pages/FreelancerDashboard";
import Proposals from "./pages/Proposals";
import SubmittedProjects from "./pages/SubmittedProjects";
import FreelancerLayout from "./features/freelancer/FreelancerLayout";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ProtectedRoote from "./ui/ProtectedRoote";
import NotAccess from "./ui/NotAccess";
import AdminLayout from "./features/admin/AdminLayout";
import AdminDashboard from "./pages/AdminDashboard";
import Users from "./ui/Users";

const quertClient = new QueryClient();

function App() {
  return (
    <DarkModeProvider>
      <QueryClientProvider client={quertClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Toaster />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NoteFound />} />
          <Route path="/not-access" element={<NotAccess />} />

          <Route
            path="/owner"
            element={
              <ProtectedRoote>
                <OwnerLayout />
              </ProtectedRoote>
            }
          >
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<OwnerDashboard />} />
            <Route path="projects" element={<Projects />} />
            <Route path="projects/:id" element={<Project />} />
          </Route>

          <Route
            path="/admin"
            element={
              <ProtectedRoote>
                <AdminLayout />
              </ProtectedRoote>
            }
          >
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="users" element={<Users />} />
            
          </Route>

          <Route
            path="/admin"
            element={
              <ProtectedRoote>
                <AdminLayout />
              </ProtectedRoote>
            }
          >
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<OwnerDashboard />} />
            <Route path="projects" element={<SubmittedProjects />} />
            <Route path="proposals" element={<Proposals />} />
          </Route>

          <Route
            path="/freelancer"
            element={
              <ProtectedRoote>
                <FreelancerLayout />
              </ProtectedRoote>
            }
          >
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<FreelancerDashboard />} />
            <Route path="proposals" element={<Proposals />} />
            <Route path="projects" element={<SubmittedProjects />} />
          </Route>
          <Route path="/auth" element={<Auth />} />
          <Route path="/complete-profile" element={<CompleteProfile />} />
        </Routes>
      </QueryClientProvider>
    </DarkModeProvider>
  );
}

export default App;
