import React, { useState } from 'react'

const Signin = () => {
    const [inputs, setInputs] = useState({});
    const handleChange = (e)=>{
        setInputs({...inputs, [e.target.name]: e.target.value})
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        const formData = new FormData();
        
        formData.append('email', inputs.email);
        formData.append('password', inputs.password);

        if(inputs.password !== inputs.cnf_password){
            alert('Passwords do not match');
            return
        }
        fetch('http://localhost:8000/users/register_admin/', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data =>{ 
            console.log(data)
            return window.location.href = '/';
        })
        .catch(error => console.error(error));
        setInputs({});
    }
  return (
    <form className="w-4/12 mx-auto border border-gray-200 p-4 rounded-md mt-8 pb-12" onSubmit={handleSubmit}>
      <h1 className="text-center text-2xl mb-4">Create Admin</h1>
      <section className="flex flex-col items-center gap-4">
        <input
          type="text"
          name='email'
          value={inputs.email || ''}
          onChange={handleChange}
          placeholder="Email"
          className="border border-gray-200 p-2 rounded  w-10/12  focus:outline-0"
        />
        <input
          type="text"
          name='first_name'
          value={inputs.first_name || ''}
          onChange={handleChange}
          placeholder="First Name"
          className="border border-gray-200 p-2 rounded  w-10/12  focus:outline-0"
        />
        <input
          type="text"
          name='last_name'
          value={inputs.last_name || ''}
          onChange={handleChange}
          placeholder="Last Name"
          className="border border-gray-200 p-2 rounded  w-10/12  focus:outline-0"
        />
        <input
          type="password"
          name='password'
          value={inputs.password || ''}
          onChange={handleChange}
          placeholder="Password"
          className="border border-gray-200 p-2 rounded  w-10/12  focus:outline-0"
        />
        <input
          type="password"
          name='cnf_password'
          value={inputs.cnf_password || ''}
          onChange={handleChange}
          placeholder="Confirm Password"
          className="border border-gray-200 p-2 rounded  w-10/12  focus:outline-0"
        />
        <button className="bg-[#8F87F1]  p-2 text-white w-10/12 rounded active:bg-[#7F87F1]  focus:outline-0" type='submit'>
          Signin
        </button>
      </section>
    </form>
  )
}

export default Signin