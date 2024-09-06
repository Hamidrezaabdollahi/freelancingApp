import useUser from "../../hooks/useUser";

function UserAvatar() {
  const { user } = useUser();
  return (
    <div className="flex items-center justify-center gap-x-2 text-secondary-700">
      <img
        className="w-7 h-7 rounded-full object-cover object-center"
        src="/user.jpg"
        alt="user_account"
      />
      <span>{user?.name}</span>
    </div>
  );
}

export default UserAvatar;
