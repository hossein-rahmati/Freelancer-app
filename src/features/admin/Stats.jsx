import Stat from "../../ui/Stat.jsx";
import { HiCollection, HiCurrencyDollar, HiUser } from "react-icons/hi";

function Stats({ proposals, projects, users }) {
  return (
    <div className="grid grid-cols-3 gap-8">
      <Stat
        color="primary"
        title="کاربران"
        value={users}
        icon={<HiUser className="w-20 h-20" />}
      />
      <Stat
        color="green"
        title="درخواست ها"
        value={proposals}
        icon={<HiCurrencyDollar className="w-20 h-20" />}
      />
      <Stat
        color="yellow"
        title="پروژه ها"
        value={projects}
        icon={<HiCollection className="w-20 h-20" />}
      />
    </div>
  );
}

export default Stats;
