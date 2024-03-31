import { HiArrowRight } from "react-icons/hi";
import useMoveBack from "../hooks/useMoveBack";

function NotFound() {
  const handleBack = useMoveBack();
  return (
    <div className="container xl:max-w-screen-xl">
      <div className="sm:max-w-sm flex justify-center pt-10">
        <div>
          <h1 className="text-xl font-bold text-secondary-300 mb-8">
            صفحه ای که دنبالش بودید پیدا نشد
          </h1>
          <button onClick={handleBack} className="flex items-center gap-x-2">
            <HiArrowRight className="w-6 h-6 text-primary-900" />
            <span className="text-lg">برگشت</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
