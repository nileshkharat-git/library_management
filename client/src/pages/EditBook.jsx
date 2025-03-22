import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useToken from "../hooks/useToken";

const EditBook = () => {
  const { id } = useParams()
  const [inputs, setInputs] = useState({});
  const { token } = useToken()

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/books/${id}/`, { method: "GET", headers: { Authorization: `Bearer ${JSON.parse(token)}`} })
      .then((response) => response.json())
      .then((data) => setInputs(data));
  }, [])
  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    for(const [key, value] of Object.entries(inputs)) {
      formData.append(key, value);
    }
    fetch(`http://127.0.0.1:8000/books/${id}/`, { method: "PATCH", headers: { Authorization: `Bearer ${JSON.parse(token)}`, }, body: formData,})
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        return window.location.href = "/dashboard";
      })
      .catch((error) => console.error(error));
  }
  return (
    <main className="w-10/12 mx-auto">
      <h1 className="text-2xl text-center">Edit Book</h1>
      <form
        className="w-4/12 mx-auto border border-gray-200 p-4 rounded-md mt-8 pb-12"
        onSubmit={handleSubmit}
      >
        <section className="flex flex-col items-center gap-4">
          <input
            type="text"
            placeholder="Title"
            name="title"
            onChange={handleChange}
            value={inputs.title || ""}
            className="border border-gray-200 p-2 rounded  w-10/12  focus:outline-0"
          />
          <input
            type="text"
            placeholder="Author"
            name="author"
            onChange={handleChange}
            value={inputs.author || ""}
            className="border border-gray-200 p-2 rounded  w-10/12  focus:outline-0"
          />
          <input
            type="text"
            placeholder="ISBN"
            name="isbn"
            onChange={handleChange}
            value={inputs.isbn || ""}
            className="border border-gray-200 p-2 rounded  w-10/12  focus:outline-0"
          />
          <input
            type="text"
            placeholder="Genre"
            name="genre"
            onChange={handleChange}
            value={inputs.genre || ""}
            className="border border-gray-200 p-2 rounded  w-10/12  focus:outline-0"
          />
          <input
            type="text"
            placeholder="Language"
            name="language"
            onChange={handleChange}
            value={inputs.language || ""}
            className="border border-gray-200 p-2 rounded  w-10/12  focus:outline-0"
          />
          <input
            type="text"
            placeholder="Pages"
            name="pages"
            onChange={handleChange}
            value={inputs.pages || ""}
            className="border border-gray-200 p-2 rounded  w-10/12  focus:outline-0"
          />
          <input
            type="text"
            placeholder="Description"
            name="description"
            onChange={handleChange}
            value={inputs.description || ""}
            className="border border-gray-200 p-2 rounded  w-10/12  focus:outline-0"
          />

          <button
            className="bg-[#8F87F1]  p-2 text-white w-10/12 rounded active:bg-[#7F87F1]  focus:outline-0"
            type="submit"
          >
            Update
          </button>
        </section>
      </form>
    </main>
  );
};

export default EditBook;
