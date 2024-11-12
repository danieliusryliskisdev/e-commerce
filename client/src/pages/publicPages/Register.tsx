import React, { useState, ChangeEvent } from "react";
import { useRegisterMutation } from "../../redux/api/authApi";
import { Logout } from "../../components/Logout";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const Register = () => {
  const [register] = useRegisterMutation();
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await register(formData).unwrap();

      localStorage.setItem("user", JSON.stringify(response));

      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-bold text-center text-blue-600">
          Register
        </h2>

        <div className="space-y-4">
          <div>
            <label
              className="block text-gray-700 font-semibold"
              htmlFor="firstName"
            >
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your first name"
            />
          </div>

          <div>
            <label
              className="block text-gray-700 font-semibold"
              htmlFor="lastName"
            >
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your last name"
            />
          </div>

          <div>
            <label
              className="block text-gray-700 font-semibold"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label
              className="block text-gray-700 font-semibold"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-2 mt-4 font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          Register
        </button>
      </form>
      <Logout />
    </div>
  );
};
