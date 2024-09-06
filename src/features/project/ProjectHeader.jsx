import { HiArrowRight } from "react-icons/hi";
import UseMoveBack from "../../hooks/useMoveBack";

function ProjectHeader({project}){
const moveBack = UseMoveBack()
  return (
    <div className="flex items-center gap-x-4">
      <button onClick={moveBack} >
        <HiArrowRight className="w-5 h-5 text-secondary-700" />
      </button>
      <h1 className="font-black text-secondary-700 text-xl" >درخواست برای {project.title}</h1>
    </div>
  );
}

export default ProjectHeader;
 