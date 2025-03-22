import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import useToken from '../hooks/useToken'
import EditBook from './EditBook'

const Dashboard = () => {
  if(!localStorage.getItem('token')) return window.location.href = '/'
  
  const {token} = useToken()
  const [books, setBooks] = useState([])
  useEffect(() => {
    fetch('http://127.0.0.1:8000/books', {method: 'GET', headers: {Authorization: `Bearer ${JSON.parse(token)}`}})
      .then((response) => response.json())
      .then((data) => {
        setBooks(data)
      })
      .catch((error) => console.error(error))
  },[])

  const handleDelete = (id) => {
    let result = confirm('Are you sure you want to delete this book?')
    if(!result) return

    fetch(`http://127.0.0.1:8000/books/${id}/`, {method: 'DELETE', headers: {Authorization: `Bearer ${JSON.parse(token)}`}})
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        return window.location.href = '/dashboard';
      })
      .catch((error) => console.error(error))
  }
  return (
    <main className='w-10/12 mx-auto'>
      <table className="table-auto w-10/12 mx-auto my-10">
        <thead>
          <tr>
            <th className="bg-[#8F87F1] text-left p-2 text-white font-normal">Title</th>
            <th className="bg-[#8F87F1] text-left p-2 text-white font-normal">Genre</th>
            <th className="bg-[#8F87F1] text-left p-2 text-white font-normal">Author</th>
            <th className="bg-[#8F87F1] text-left p-2 text-white font-normal">Language</th>
            <th className="bg-[#8F87F1] text-left p-2 text-white font-normal">Action</th>
          </tr>
        </thead>
        <tbody>
          {books && books.map((book, index) => (
            <tr key={index}>
              <td className="p-2 border text-blue-400"><Link to={`/editbook/${book.id}`}>{book.title}</Link></td>
              <td className="p-2 border">{book.genre}</td>
              <td className="p-2 border">{book.author}</td>
              <td className="p-2 border">{book.language}</td>
              <td className="p-2 border flex justify-around">
                <button className='bg-red-500 text-white py-2 px-4 rounded-md' onClick={() => handleDelete(book.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </main>
  )
}

export default Dashboard