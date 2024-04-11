import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-secondary-300 p-5 rounded-3xl flex justify-between items-center">
      <div className="flex items-center gap-x-4">
        <NavLink to="">صفحه اصلی</NavLink>
        <NavLink to="">ورود</NavLink>
        <NavLink to="">ثبت نام</NavLink>
        <NavLink to="">ایجاد پروژه</NavLink>
      </div>
      <div>logo</div>
    </div>
  );
}

export default Navbar;
