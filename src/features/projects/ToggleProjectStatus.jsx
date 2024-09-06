
import useToggleProjectStatus from "./useToggleProjectStatus";
import Toggle from "../../ui/Toggle";

function ToggleProjectStatus({ project }) {
   const enabled =  project.status === "OPEN" ? true : false


  const { toggleProjectStatus } = useToggleProjectStatus();
  const toggleHandler = () => {
    const status = project.status === "OPEN" ? "CLOSED" : "OPEN";
    toggleProjectStatus(
      {
        id: project._id,
        data: { status },
      }
    );
  };

  return (
    <div className="w-[5rem]">
      <Toggle 
      label={project.status === "OPEN" ? "باز" : "بسته"}
      onChange={toggleHandler}
      enabled={enabled}
      />
    </div>
  );
}
  
export default ToggleProjectStatus;
