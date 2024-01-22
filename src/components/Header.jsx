import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-indigo-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl">
            <span className="text-indigo-500">Mink</span>
            <span className="text-indigo-700">Estate</span>
          </h1>
        </Link>
        <form className="bg-indigo-100 p-3 rounded-xl flex items-center">
          <input 
            type="text" 
            placeholder="Search...." 
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-indigo-500" />
        </form>
        <ul className="flex gap-4">
          <Link to="/">
            <li className="hidden sm:inline text-indigo-700 hover:underline">Home</li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-indigo-700 hover:underline">About</li>
          </Link>
          <Link to="/signin">
          <li className="hidden sm:inline text-indigo-700 hover:underline">Sign In</li>
          </Link>          
        </ul>
      </div>
    </header>
  )
}
