import HeaderMenu from "./HeaderMenu.jsx";
import UserAvatar from "../features/authentication/UserAvatar.jsx";
import useUser from "../features/authentication/useUser.js";

function Header() {
  const { isLoading } = useUser();

  return (
    <div className="bg-secondary-0 py-4 px-8 border-b border-b-secondary-200">
      <div
        className={`container flex justify-end items-center xl:max-w-screen-lg gap-x-8 ${isLoading ? "blur-sm opacity-50" : ""}`}
      >
        <UserAvatar />
        <HeaderMenu />
      </div>
    </div>
  );
}

export default Header;
