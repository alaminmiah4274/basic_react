import { useForm } from "react-hook-form";

const HookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleHookForm = (data) => {
    console.log(data);
  };

  return (
    <div className="w-1/2 mx-auto">
      <form onSubmit={handleSubmit(handleHookForm)}>
        <div className="mb-3">
          <label className="text-gray-500 font-bold block mb-2" htmlFor="name">
            Name
          </label>
          <input
            {...register("name", { required: true, minLength: 5 })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            id="name"
          />
          {errors.name?.type === "required" && (
            <span className="text-red-500 text-sm">this field is required</span>
          )}
          {errors.name?.type === "minLength" && (
            <span className="text-red-500 text-sm">
              minimum character length is 5
            </span>
          )}
        </div>

        <div className="mb-3">
          <label className="text-gray-500 font-bold block mb-2" htmlFor="age">
            Age
          </label>
          <input
            {...register("age", { required: true, min: 18 })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            id="age"
          />
          {errors.age?.type === "min" && (
            <span className="text-red-500 text-sm">minimum age is 18</span>
          )}
          {errors.age?.type === "required" && (
            <span className="text-red-500 text-sm">this field is required</span>
          )}
        </div>

        <button className="px-2 py-1 bg-blue-500 text-white rounded-sm">
          Submit
        </button>
      </form>
    </div>
  );
};

export default HookForm;

/*
Nested object destructuring:

const person = {name: "john milton", age: 86, address: {city: "london", country: "england"}}

const {name, age, address: {city, country}} = person;

*/
