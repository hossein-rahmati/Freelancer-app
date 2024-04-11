import { Link } from "react-router-dom";

function Section1() {
  return (
    <div className="flex items-center">
      <div>
        <img src="/public/Working_remotely.png" alt="working-remotely" />
      </div>
      <div className="flex flex-col gap-y-8">
        <p className="text-5xl font-bold text-secondary-900">
          آیا به دنبال فریلنسر هستید؟
        </p>
        <p className="text-secondary-500 text-xl">
          بهترین و با تجربه ترین فریلنسر ها را برای پروژه خود استخدام کنید
        </p>
        <Link to="/owner">
          <button className="btn btn--primary max-w-60 w-full">
            ثبت پروژه
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Section1;
