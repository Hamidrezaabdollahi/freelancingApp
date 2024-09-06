import useProjects from "../../hooks/useProjects";
import Loading from "../../ui/Loading";
import useProposals from "../proposals/useProposals";
import DashboardHeader from "./DashboardHeader";
import Stats from "./Stats";
import useUsers from "./useUsers";

function DashboardLayout() {
  const { isLoading: projectsLoading, projects } = useProjects();
  const { isLoading: proposalsLoading, proposals } = useProposals();
  const { isLoading: usersLoading, users } = useUsers();
  if (projectsLoading || proposalsLoading || usersLoading) return <Loading />;
  return (
    <div>
      <DashboardHeader />
      <Stats users={users.length} proposals={proposals.length} projects={projects.length} />
    </div>
  );
}

export default DashboardLayout;
