import React, { useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import { useNavigate } from 'react-router-dom';

export default function Create() {
  let [title, setTitle] = React.useState("");
  let [description, setDescription] = React.useState("");
  let [newCategory, setNewCategory] = React.useState("");
  let [categories, setCategories] = React.useState([]);

  let { setPostData, data: book, loading } = useFetch('http://localhost:3000/books', "POST");
  let navigate = useNavigate();

  let addCategory = (e) => {
    e.preventDefault();
    setCategories(prev => [newCategory, ...prev])
    setNewCategory('');
  }

  let addBook = (e) => {
    e.preventDefault();

    let data = {
      title,
      description, 
      categories
    }
    setPostData(data);
  }

  useEffect(() => {
    console.log(book)
    if (book) {
      navigate('/');
    }
  }, [book])

  return (
    <div>
      <form className="w-full max-w-lg mx-auto mt-2vc" onSubmit={addBook}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
              Book Title
            </label>
            <input value={title} onChange={e => setTitle(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="Book Title"/>
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
              Book Description
            </label>
            <textarea value={description} onChange={e=> setDescription(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" placeholder="Book Description"></textarea>
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
              Category
            </label>
            <div className='flex items-center space-x-2'>
              <input value={newCategory} onChange={e => setNewCategory(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" placeholder="Category"/>
              <button type='button' onClick={addCategory} className='bg-indigo-600 hover:bg-indigo-700 p-3 rounded-lg mb-3'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
                  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex flex-wrap">
              {categories.map(c => (
              <span key={c} className="mx-1 my-1 text-white rounded-full px-2 py-1 text-sm bg-indigo-600"> {c} </span>
              ))}
          </div>
        </div>

        <button className="flex items-center gap-2 text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg transition-colors duration-200 w-full justify-center">
          {loading && (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 animate-spin" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm3.707-8.707a1 1 0 0 0-1.414-1.414l-4 4a1 1 0 0 0 0 1.414l4-4z" clipRule="evenodd" />
            </svg>
          )}
          <span>Create Book</span>
        </button>
      </form>
    </div>
  )
}
