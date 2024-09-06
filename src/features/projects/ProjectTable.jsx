import Loading from "../../ui/Loading";
import Empty from "../../ui/Empty";
import useOwnerProjects from "./useOwnerProjects";
import Table from "../../ui/Table";
import ProjectTBodyRow from "./ProjectTBodyRow";
import ProjectsHeader from "./ProjectsHeader";

function ProjectTable() {
  const { isLoading, projects } = useOwnerProjects();
  if (isLoading) return <Loading />;
  if (!projects.length) return <Empty resourceName="پروژه ای" />;
  return (
    <>
      <ProjectsHeader />
      <div className="bg-secondary-0 overflow-x-auto">
        <Table>
          <Table.Header>
            <Table.Row>
              <th>#</th>
              <th>عنوان</th>
              <th>دسته بندی</th>
              <th>بودجه</th>
              <th>ددلاین</th>
              <th>تگ ها</th>
              <th>فریلنسر</th>
              <th>وضعیت</th>
              <th>عملیات</th>
              <th>درخواست ها</th>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {projects.map((project, index) => (
              <ProjectTBodyRow
                key={project._id}
                project={project}
                index={index}
              />
            ))}
          </Table.Body>
        </Table>
      </div>
    </>
  );
}

export default ProjectTable;
