import { Link } from "react-router-dom";
import { useRouteError } from "react-router-dom";

function Error() {
    return (
        <div className="bg-gray-100 h-screen flex items-center justify-center p-2">
            <div className="text-center flex flex-col items-center">
                <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGhwem5waHlhcHNnYzF4NWhrc2pyN3h2dzFxMWRqMzMxcjg4dWF0cyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LBPi9kAlVrYkf4bmPs/giphy.webp" className="mix-blend-darken" width="200px" alt="" />
                <h1 className="text-9xl font-bold text-gray-800">404</h1>
                <p className="text-2xl font-light text-gray-600 mt-4">Oops! Page not found</p>
                <p className="text-gray-500 mt-4 mb-8">The page you are looking for might have been removed or is temporarily unavailable.</p>
                <Link to="/"><button href="/" className="px-2 py-1 rounded text-xl  inter-tight-f bg-gray-400 border-black  hover:border-lime-500">
                    Home Page
                </button></Link>
            </div>
        </div>

    )
}

export default Error;