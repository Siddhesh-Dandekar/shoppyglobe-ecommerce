import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import useFetch from "../utilis/useFetch";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utilis/cartslice";


function ProductDetail() {
    const dispatch = useDispatch()
    const param = useParams(); // Receive the params through url
    const { data, error, loading } = useFetch(`https://dummyjson.com/products/${param.productid}`); //fetching information
    const [productdetail, setProductDetail] = useState([])
    const [Images, setImages] = useState([])
    const [imagetype, setImagetype] = useState(0);
    useEffect(() => {
        if (data) {
            setProductDetail(data);
            setImages(data.images);
        }
    }, [data])

    //This function is used to change product view if available
    function changeImageType(text) {
        let imagelength = Images.length;
        if (text == 'next') {
            if (imagetype < imagelength - 1) {
                setImagetype(imagetype + 1)
            }
        }
        else if (text == 'prev') {
            if (imagetype > 0) {
                setImagetype(imagetype - 1)
            }
        }

    }
    //we are adding the product into our cart
    function addproduct() {
        dispatch(addItem({
            productid: productdetail.id,
            productname: productdetail.title,
            productprice: productdetail.price,
            productquantity: 1,
            productdiscount: productdetail.discountPercentage,
            productimage: productdetail.thumbnail,
            total: (productdetail.price - (productdetail.price * productdetail.discountPercentage) / 100),
        }))
    }

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

    if (error) {
        return (
            <div className="bg-gray-100 m-2 h-screen flex items-center justify-center">
                <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Failed to Fetch the Request</h1>
                    <p className="text-gray-600 mb-5">There was an error processing your request</p>
                    <Link to="/"><button className="inline-block py-3 px-6 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold">Go
                        back to homepage</button></Link>
                </div>
            </div>
        )
    }
    return (
        <>
            <div className="m-1 items-center bg-violet-100 h-auto flex ">
                <div className="flex flex-col md:flex-row w-full  bg-white px-5 py-5 rounded-sm">
                    <div className="max-h-96 select-none">
                        <img src={Images[imagetype]} className="w-52 aspect-square m-auto md:m-0 md:min-w-64 lg:min-w-80 h-4/5 border border-gray-300" alt="" />
                        {Images.length == 1 ? '' : <div className="flex justify-center w-full select-none gap-4 my-2">
                            <button onClick={() => changeImageType('prev')} className="bg-gray-300  px-1 rounded-full">⬅</button>
                            <button onClick={() => changeImageType('next')} className="bg-gray-300  px-1 rounded-full" >➡</button>
                        </div>}
                        <div className="flex">
                            <Link to="/" className="w-full "><button className="border min-h-full w-full gap-1 bg-orange-300 py-1 text-base rounded-sm font-semibold flex items-center justify-center"><img width="24" height="24" src="https://img.icons8.com/material-outlined/24/home--v2.png" alt="home--v2"/> Home</button></Link>
                            <button onClick={addproduct} className="border w-full gap-1 bg-orange-300 py-1 text-base rounded-sm font-semibold flex items-center justify-center"><img width="25" height="25" src="https://img.icons8.com/parakeet-line/48/shopping-cart.png" alt="shopping-cart" />Add to Cart</button>
                        </div>

                    </div>


                    <div className="md:pr-4 md:pl-8 lg:px-8 inter-tight-f select-none w-full">
                        <h1 className="text-3xl lg:text-4xl"><b>{productdetail.title}</b></h1>
                        <span className="text-xl text-gray-600">{productdetail.brand}</span>
                        <br />
                        <span className="bg-lime-400 text-xs px-1 rounded-sm font-semibold ">{productdetail.rating} 🟊</span>
                        <h2 className="mb-1 text-xs">{productdetail.sku}</h2>
                        <h3 className="text-2xl"><b>${(productdetail.price - (productdetail.price * productdetail.discountPercentage) / 100).toFixed(2)}</b><span><del className="pl-1 text-gray-600 text-base">${productdetail.price}</del></span><b><span className=" text-lime-700 text-base"> {productdetail.discountPercentage}% off</span></b></h3>
                        <div className="border p-1 select-text">
                            <span className="font-semibold">Description</span>
                            <br />
                            <span> {productdetail.description}</span><br />
                        </div>
                        <br />
                        <table className="w-full mx-1 text-sm ">
                            <thead className="font-semibold text-lg">
                                <tr>Delivery</tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="font-bold text-gray-600">Shipping</td>
                                    <td>{productdetail.shippingInformation}</td>
                                </tr>
                                <tr>
                                    <td className="font-bold text-gray-600">Return Policy</td>
                                    <td>{productdetail.returnPolicy}</td>
                                </tr>
                                <tr>
                                    <td className="font-bold text-gray-600">Warranty</td>
                                    <td>{productdetail.warrantyInformation}</td>
                                </tr>
                                <tr className="font-semibold text-lg h-10 flex items-end">Specifications</tr>
                                <tr>
                                    <td className="font-bold text-gray-600">Brand</td>
                                    <td>{productdetail.brand}</td>
                                </tr>
                                <tr>
                                    <td className="font-bold text-gray-600">SKU</td>
                                    <td>{productdetail.sku}</td>
                                </tr>
                                <tr>
                                    <td className="font-bold text-gray-600">Weight</td>
                                    <td>{productdetail.weight}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </>
    )
}
export default ProductDetail;