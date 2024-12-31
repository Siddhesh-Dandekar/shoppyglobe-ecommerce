import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { decreaseQuantity, increaseQuantity ,removeitem } from "../utilis/cartslice";
import { Link } from "react-router-dom";

function CartItem() {
    const productinfo = useSelector(item => item.cart.items);
    const subtotal = productinfo.map(x => x.total).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const dispatch = useDispatch();
    function updatequantity(id) {
        dispatch(increaseQuantity(id));
    }
    function reducequantity(id) {
        dispatch(decreaseQuantity(id))
    }
    function removepro(id){
        dispatch(removeitem(id));
    }
    return (
        <>
            <div className="w-full inter-tight-f px-2 sm:px-5 py-4">
                <h1 className="text-xl mb-4">Shopping Cart</h1>
                <div className="w-full flex flex-col gap-5">
                    <table className="border-gray-500 border-2 w-full text-center">
                        <thead className="border-2 h-9 border-gray-500 ">
                            <tr className="text-xs sm:text-base text-gray-700" >
                                <th>Image</th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className="text-xs sm:text-base">
                            {productinfo.map(p => {
                                return (
                                    <tr key={p.productid} className="border border-black">
                                        <td><img className="mx-auto border my-1" src={p.productimage} alt="" width="50" /></td>
                                        <td>{p.productname}</td>
                                        <td className="list-none"><li>${(p.productprice - (p.productprice * p.productdiscount)/100).toFixed(2)} <span className="text-lime-700 text-xs font-semibold">{p.productdiscount}% Off</span></li>
                                            <li><del>${p.productprice}</del></li></td>
                                        <td><button onClick={() => updatequantity(p.productid)} disabled={p.productquantity > 4 ? true : false} className="bg-gray-300 px-1">+</button > {p.productquantity} <button onClick={() => reducequantity(p.productid)} disabled={p.productquantity <= 1 ? true : false} className="px-1 bg-gray-300">-</button></td>
                                        <td>${(p.total).toFixed(2)}</td>
                                        <td><button onClick={() => removepro(p.productid)} className="bg-red-500 text-white px-1">Remove</button></td>
                                    </tr>
                                )

                            })}
                        </tbody>
                    </table>
                    <div className="w-full rounded-sm bg-gray-300 border flex flex-col gap-2 p-5 border-gray-300">
                        <div className="flex gap-2 text-lg font-semibold justify-between">
                            <span>Subtotal</span>
                            <span>${(subtotal).toFixed(2)}</span>
                        </div>
                        <span>Shipping and taxes will be calculated at checkout.</span>
                        <Link to="/cart/checkout"><button className="w-fit px-2 text-lg rounded-sm bg-blue-400" disabled={subtotal == 0 ? true : false} >Checkout</button></Link>

                    </div>
                </div>
            </div>
        </>
    )
}

export default CartItem