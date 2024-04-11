import { HiSave, HiSearch, HiUser } from "react-icons/hi";

function Section2() {
  return (
    <div>
      <div className="shadow-sm">
        <div>
          <HiUser />
          <p>ساختن اکانت</p>
          <p>ابتدا نیاز دارید که برای خود اکانتی ایجاد کنید</p>
        </div>
        <div>
          <HiSearch />
          <p>جستجو برای کار</p>
          <p>بهترین پروژه های فریلنسی مناسب خود را پیدا کنید</p>
        </div>
        <div>
          <HiSave />
        </div>
      </div>
    </div>
  );
}

export default Section2;
