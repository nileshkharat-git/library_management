import React, {useEffect, useState} from "react";

const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/books/book_list", {method: "GET"})
      .then((response) => response.json())
      .then((data) => {
        setBooks(data)
      })
      .catch((error) => console.error(error))

  }, [])
  return (
    <main>
      <h1 className="text-2xl text-center">Books</h1>
      <table className="table-auto w-10/12 mx-auto">
        <thead>
          <tr>
            <th className="bg-[#8F87F1] text-left p-2 text-white font-normal">Title</th>
            <th className="bg-[#8F87F1] text-left p-2 text-white font-normal">Genre</th>
            <th className="bg-[#8F87F1] text-left p-2 text-white font-normal">Author</th>
            <th className="bg-[#8F87F1] text-left p-2 text-white font-normal">Language</th>
            <th className="bg-[#8F87F1] text-left p-2 text-white font-normal w-6/12">Description</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr>
              <td className="p-2 border">{book.title}</td>
              <td className="p-2 border">{book.genre}</td>
              <td className="p-2 border">{book.author}</td>
              <td className="p-2 border">{book.language}</td>
              <td className="p-2 border">{book.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default Books;
