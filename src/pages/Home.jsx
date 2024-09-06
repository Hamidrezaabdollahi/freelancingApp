import { useNavigate } from "react-router-dom";
import useUser from "../hooks/useUser";

function Home() {
  const navigate = useNavigate()
  const {user} = useUser()
  return (
    <div className="h-screen bg-secondary-0">
      <div className="container flex flex-col items-center justify-center xl:max-w-screen-xl pt-4">
        <h1 className="text-secondary-700 w-full  text-center py-5 rounded-lg bg-secondary-100">به صفحه اصلی خوش آمدید </h1>
        <button
         onClick={()=>navigate(`/${user.role.toLowerCase()}`)}
         className="btn--primary mt-4 rounded-lg transition-all duration-300"
         >ورود به صفحه کاربر</button>
      </div>
    </div>
  );
}

export default Home;
