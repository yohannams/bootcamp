import { React } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{margin:'auto',width:'80%'}}>
        <div class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
            <ul class="flex flex-wrap -mb-px">
                <li class="mr-2">
                    <Link to="/" class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Home</Link>
                </li>
                <li class="mr-2">
                    <Link to="/tugas15" class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Materi</Link>
                </li>
                <li class="mr-2">
                    <Link to="/create" class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Create</Link>
                </li>
            </ul>
        </div>
    </div>
  );
};

export default Navbar;
