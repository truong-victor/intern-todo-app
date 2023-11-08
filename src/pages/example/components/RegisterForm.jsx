import { useForm } from "react-hook-form";
import { registerApi } from "../api";
import { toast } from "react-toastify";

const RegisterForm = (props) => {
  const methodForm = useForm({
    mode: "onTouched",
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methodForm;

  const onSubmit = handleSubmit(async (data) => {
    try {
      const result = await registerApi(data);

      console.log(result);

      toast.success(result.msg);
    } catch (err) {
      toast.error("something went wrong");
    }
  });

  return (
    <div className="flex flex-col gap-12 w-full mx-auto max-w-[500px] bg-gray-400 rounded-lg p-4 mt-[20vh]">
      <h1 className="text-center text-blue-500 text-12"></h1>
      <div className="flex flex-col gap-12">
        <form onSubmit={onSubmit}>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                {...register("email", {
                  required: "Trường này là bắt buộc",
                })}
                type="text"
                // id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="John"
              />
              {errors?.email?.message && (
                <span className="text-red-700">{errors?.email?.message}</span>
              )}
            </div>
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Name
              </label>
              <input
                {...register("name", { required: "Trường này là bắt buộc" })}
                type="text"
                // id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="John TT"
              />
              {errors?.name?.message && (
                <span className="text-red-700">{errors?.name?.message}</span>
              )}
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                {...register("password", {
                  required: "Trường này là bắt buộc",
                })}
                type="password"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              {errors?.password?.message && (
                <span className="text-red-700">
                  {errors?.password?.message}
                </span>
              )}
            </div>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
