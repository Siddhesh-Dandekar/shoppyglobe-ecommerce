import { addItem } from "../utilis/cartslice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function ProductItem(props) {
    //Dispatch functin is used to dispatch any action with it
    const dispatch = useDispatch();

    //Extracting all the items from props
    const { id, title, brand, thumbnail, price, rating, discountPercentage , availabilityStatus} = props.item;

    //Add Product Function to dispatch our action and store them in cart slice
    function addproduct(){
        dispatch(addItem({
            productid:id,
            productname: title,
            productprice: price,
            productquantity: 1,
            productdiscount: discountPercentage,
            productimage: thumbnail,
            total: (price - (price * discountPercentage)/100),
        }))
    }
    return (
        <>
            <div className="max-w-44 sm:max-w-52 min-h-full flex flex-col justify-between hover:shadow hover:scale-[1.02] duration-500 text-sm h-auto inter-tight-f border border-gray-300 hover:bg-gray-100 overflow-hidden bg-white">
               <Link to={`/productdetail/${id}`}> 
               <div className="relative">
                    <img src={thumbnail} alt="" className="min-w-full h-60 " />
                    <span className="absolute bottom-1 left-2 bg-lime-300 px-1 rounded-sm font-semibold text-xs">{(rating).toFixed(1)} ★</span>
                    {availabilityStatus == 'Low Stock' ? <span className="text-white absolute font-semibold text-xs right-2 px-1 bg-red-700 bottom-1">LOW STOCK</span> : ''}
                </div>

                <div className="py-1 px-2" >
                    <h1 className="text-base font-semibold">{brand}</h1>
                    <h2 className="text-gray-800 whitespace-nowrap w-full overflow-hidden text-ellipsis">{title}</h2>
                    <span><b>${(price - (price * discountPercentage)/100).toFixed(2)}</b><span><del className="pl-1 text-gray-600 text-xs">${price}</del></span><b><span className=" text-lime-700 text-xs"> {discountPercentage}% off</span></b></span><br />
                </div>
                </Link>
                <button onClick={addproduct} className="border w-full gap-1 bg-orange-300 py-1 text-base rounded-sm font-semibold flex items-center justify-center"><img width="25" height="25" src="https://img.icons8.com/parakeet-line/48/shopping-cart.png" alt="shopping-cart"/>Add to Cart</button>
            </div>
        </>
    )
}

export default ProductItem;