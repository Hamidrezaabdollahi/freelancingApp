import useCategories from "../../../hooks/useCategories";
import FilterDropDown from "../../../ui/FilterDropDown";
import FilterButtons from '../../../ui/FilterButtons';

function ProjectsHeader() {
  const { transformedCategories } = useCategories();
  const sortOptions = [
    { value: "latest", label: "جدید ترین" },
    { value: "earliest", label: "قدیمی ترین" },
  ]
  const statusOptions = [
    { value: "OPEN", label: "باز" },
    { value: "ALL", label: "همه" },
    { value: "CLOSED", label: "بسته" },
  ]

  return (
    <div className="flex items-center justify-between text-secondary-700 mb-8">
      <h1 className="text-bold font-black text-lg">لیست پروژه ها</h1>
      <FilterDropDown
        filterField="category"
        options={[
          { value: "ALL", label: "دسته بندی (همه)" },
          ...transformedCategories,
        ]}
      />
      <FilterDropDown
        filterField="sort"
        options={sortOptions}
      />
     <FilterButtons
       filterField="status"
       options={statusOptions}
     />
    </div>
  );
}

export default ProjectsHeader;
