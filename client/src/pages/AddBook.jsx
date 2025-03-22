import React, { useState } from "react";
import useToken from "../hooks/useToken";

const AddBook = () => {
    const { token } = useToken()
    const [inputs, setInputs] = useState({})

    const handleChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        
        formData.append("title", inputs.title);
          formData.append("author", inputs.author);
        formData.append("isbn", inputs.isbn);
        formData.append("genre", inputs.genre);
        formData.append("language", inputs.language);
        formData.append("pages", inputs.pages);
        formData.append("description", inputs.description);

        fetch("http://127.0.0.1:8000/books/", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${JSON.parse(token)}`,
            },
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                return window.location.href = "/dashboard";
            })
            .catch((error) => console.error(error));
        setInputs({});
    }
  return (
    <main className="w-10/12 mx-auto">
      <h1 className="text-2xl text-center">Add Book</h1>
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
            Create Book Record
          </button>
        </section>
      </form>
    </main>
  );
};

export default AddBook;
