import React, {useState} from "react";
import useToken from "../hooks/useToken";

const AdminLogin = () => {
  if (localStorage.getItem("token")) {
    return window.location.href = "/dashboard";
  }
  const [inputs, setInputs] = useState({});
  const { setToken } = useToken();

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", inputs.email);
    formData.append("password", inputs.password);
    try {
      fetch("http://127.0.0.1:8000/token/", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          setToken(data.access);        
          return window.location.href = "/dashboard";
        })
        .catch((error) => console.error(error));
    } catch (error) {
      console.error(error);
    }
    setInputs({});
  }
  return (
    <form className="w-4/12 mx-auto border border-gray-200 p-4 rounded-md mt-8 pb-12" onSubmit={handleSubmit}>
      <h1 className="text-center text-2xl mb-4">Admin</h1>
      <section className="flex flex-col items-center gap-4">
        <input
          type="text"
          placeholder="Email"
          name="email"
          onChange={handleChange}
          value={inputs.email || ""}
          className="border border-gray-200 p-2 rounded  w-10/12  focus:outline-0"
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
          value={inputs.password || ""}
          className="border border-gray-200 p-2 rounded  w-10/12  focus:outline-0"
        />
        <button className="bg-[#8F87F1]  p-2 text-white w-10/12 rounded active:bg-[#7F87F1]  focus:outline-0" type="submit">
          Login
        </button>
      </section>
    </form>
  );
};

export default AdminLogin;
