import { useAuthContext } from "../../../provider/AuthProvider";
function Header() {
  const { user } = useAuthContext();
  console.log("🚀 ~ file: Header.jsx:4 ~ Header ~ user:", user);
  return (
    <div className="flex items-center bg-blue-600 text-white p-6">
      {user?.email}
    </div>
  );
}

export default Header;
