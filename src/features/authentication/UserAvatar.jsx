import useUser from "./useUser.js";

function UserAvatar() {
  const { user } = useUser();

  return (
    <div className="flex gap-x-2 items-center text-secondary-600">
      <img
        className="w-7 h-7 object-cover object-center rounded-full"
        src="/user.jpg"
        alt="user avatar image"
      />
      <span>{user?.name}</span>
    </div>
  );
}

export default UserAvatar;
