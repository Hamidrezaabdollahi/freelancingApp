import { HiArrowRight } from "react-icons/hi";
import UseMoveBack from "../hooks/useMoveBack";

function NotFound() {
    const moveBack = UseMoveBack()
  return (
    <div className=" mx-auto pt-10 bg-secondary-100  w-full h-screen">
      <div className="mx-4 sm:max-w-sm ">
        <button onClick={moveBack} className="flex items-center justify-center gap-x-2">
          <HiArrowRight className="w-6 h-6 text-primary-900" />
          <span className="text-lg text-secondary-500">برگشت</span>
        </button>
        <h1 className="text-xl font-bold text-secondary-500 my-8 text-center">
          صفحه مورد نظر یافت نشد
        </h1>
      </div>
    </div>
  );
}

export default NotFound;
