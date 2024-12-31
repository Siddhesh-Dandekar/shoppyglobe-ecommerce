import { useEffect, useState } from "react";
import useFetch from "../utilis/useFetch.js";
import ProductItem from "./productitem.jsx";
import { Link } from "react-router-dom";


function ProductList() {
    const [product, setProduct] = useState([]);
    const [filterData, setFilterData] = useState(product);
    const { data, error, loading } = useFetch('https://dummyjson.com/products'); // Fetching data with our custom fetch hook

    useEffect(() => {
        if (data) {
            setProduct(data.products);
            setFilterData(data.products);
        }
    }, [data])

    //Filtering on basis of user input
    function handlesearch(text) {
        setFilterData(product.filter(x => x.title.toLowerCase().includes(text.toLowerCase())));
    }

    //if data is still in fetching progress we will load this part of code
    if (loading) {
        return (
            <><div className='flex space-x-2 justify-center items-center bg-white h-screen dark:invert'>
                <span className='sr-only'>Loading...</span>
                <div className='h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.3s]'></div>
                <div className='h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.15s]'></div>
                <div className='h-8 w-8 bg-black rounded-full animate-bounce'></div>
            </div></>
        )
    }

    //If data is failed due to any reason we will load this part of code
    if (error) {
        return (
            <div className="bg-gray-100 m-2 h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Failed to Fetch the Request</h1>
                <p className="text-gray-600 mb-5">There was an error processing your request</p>
            </div>
        </div>
        )
    }

    //if data fetching is successful we will load this part fo code
    return (
        <main className="bg-white">
            <div className="w-full py-2 px-4 flex">
                <input type="text" id="add" onChange={(e) => handlesearch(e.target.value)} className="border rounded-sm border-gray-400 w-full p-2" placeholder="Search for products, brands and more" />
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-4 justify-center py-2">
                {/* Rendering multiple same components but with different data*/}
                {filterData.map(x => <ProductItem key={x.id} item={x} />)}
            </div>
        </main>
    )
}

export default ProductList;