import { HiCollection, HiUsers, HiViewGrid } from "react-icons/hi";
import Stat from "../../ui/Stat";

function Stats({ users, proposals, projects }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <Stat
        color="green"
        title="پروپوزال ها "
        value={proposals}
        icon={<HiViewGrid className="w-20 h-20" />}
      />
      <Stat
        color="primary"
        title="پروژه ها"
        value={projects}
        icon={<HiCollection className="w-20 h-20" />}
      />
      <Stat
        color="orange"
        title="کاربران"
        value={users}
        icon={<HiUsers className="w-20 h-20" />}
      />
    </div>
  );
}

export default Stats;
