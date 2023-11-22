import { RegisterForm } from "./components/RegisterForm";

const Register = (props) => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full sm:max-w-[400px] sm:mx-auto">
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
