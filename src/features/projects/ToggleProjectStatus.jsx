/* eslint-disable react/prop-types */
import useToggleProjectStatus from "./useToggleProjectStatus.js";
import Loading from "../../ui/Loading.jsx";
import Toggle from "../../ui/Toggle.jsx";

function ToggleProjectStatus({ project }) {
  const { toggleProjectStatus, isUpdating } = useToggleProjectStatus();

  const toggleHandler = () => {
    const status = project.status === "OPEN" ? "CLOSED" : "OPEN";
    toggleProjectStatus({ id: project._id, data: { status } });
  };

  return (
    <div className="w-[5rem]">
      {isUpdating ? (
        <Loading height={20} width={50} />
      ) : (
        <Toggle
          label={project.status === "OPEN" ? "باز" : "بسته"}
          onChange={toggleHandler}
          enabled={project.status === "OPEN"}
        />
      )}
    </div>
  );
}

export default ToggleProjectStatus;
