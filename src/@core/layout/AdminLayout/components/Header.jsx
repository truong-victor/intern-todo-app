import { useAuthContext } from "../../../provider/AuthProvider";
function Header() {
  const { user,logout } = useAuthContext();
  console.log("🚀 ~ file: Header.jsx:4 ~ Header ~ user:", user);
  return (
    <>
      <div className="flex justify-between items-center  text-black px-6 py-4">
        {user?.email}
        <button
          className="border-2 border-solid border-blue-500 p-1.5 text-blue-500 font-semibold"
          onClick={logout}
        >
          Log out
        </button>
      </div>
    </>
  );
}

export default Header;
