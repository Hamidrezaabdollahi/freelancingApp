import Loading from "../../../ui/Loading";
import Empty from "../../../ui/Empty";
import Table from "../../../ui/Table";
import useProjects from "../../../hooks/useProjects";
import ProjectTBodyRow from "./ProjectTBodyRow";

function ProjectsTable() {
  const { isLoading, projects } = useProjects();
  if (isLoading) return <Loading />;
  if (!projects.length) return <Empty resourceName="پروژه ای" />;
  return (
    <Table>
      <Table.Header>
        <Table.Row>
          <th>#</th>
          <th>عنوان</th>
          <th>بودجه</th>
          <th>ددلاین</th>
          <th>وضعیت</th>
          <th>عملیات</th>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {projects.map((project, index) => (
          <ProjectTBodyRow key={project._id} project={project} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default ProjectsTable;
