import { LoginForm } from "./components/LoginForm";

const login = (props) => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full sm:max-w-[400px] sm:mx-auto">
        <LoginForm />
      </div>
    </div>
  );
};

export default login;
