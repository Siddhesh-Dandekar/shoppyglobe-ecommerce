import { useSelector } from "react-redux";
import { Navigate  } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { clearCart } from "../utilis/cartslice";

function Checkout(){
  
    const productinfo = useSelector(item => item.cart.items);
    const subtotal = productinfo.map(x => x.total).reduce((accumulator, currentValue) => accumulator + currentValue, 0).toFixed(2);
    //Calculating Subtotal of all items available in cart

    //if cart is empty which will result equivalent to the subtotal 0 we will redirect this page to home
    if (subtotal == 0) { return <Navigate to="/" />; }

    //After completing checkout cart will get clear
    const dispatch = useDispatch();
    function checkoutcomplete(){
        dispatch(clearCart())
    }
    return (<>
    <div className="font-[sans-serif] lg:flex lg:items-center lg:justify-center lg:h-screen">
      <div className="bg-purple-100 p-8 w-full max-w-5xl max-lg:max-w-xl mx-auto rounded-md">
        <h2 className="text-3xl font-extrabold text-gray-800 text-center">Checkout</h2>

        <div className="grid lg:grid-cols-3 gap-6 max-lg:gap-8 mt-16">
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold text-gray-800">Choose your payment method</h3>

            <div className="grid gap-4 sm:grid-cols-2 mt-4">
              <div className="flex items-center">
                <label htmlFor="paypal" className="flex gap-2 cursor-pointer">
                  <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/upi_logo_icon_169316.png" className="w-20" alt="paypalCard" />
                </label>
              </div>
            </div>

            <form className="mt-8" onSubmit={checkoutcomplete}>
              <div className="grid sm:col-span-2 sm:grid-cols-2 gap-4">
                <div>
                  <input required type="email" placeholder="Enter UPI ID"
                    className="px-4 py-3.5 bg-white text-gray-800 w-full text-sm border rounded-md focus:border-[#007bff] outline-none" />
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                <button type="submit"
                  className="px-7 py-3.5 text-sm tracking-wide bg-blue-600 text-white rounded-md hover:bg-blue-700">Submit</button>
              </div>
            </form>
          </div>

          <div className="bg-white p-6 rounded-md max-lg:-order-1">
            <h3 className="text-lg font-bold text-gray-800">Summary</h3>
            <ul className="text-gray-800 mt-6 space-y-3">
              <li className="flex flex-wrap gap-4 text-sm">Sub total <span className="ml-auto font-bold">${subtotal}</span></li>
              <li className="flex flex-wrap gap-4 text-sm">Shipping charges<span className="ml-auto font-bold">$5.00</span></li>
              <hr />
              <li className="flex flex-wrap gap-4 text-base font-bold">Total <span className="ml-auto">${Number(subtotal)+5}</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </>)
}

export default Checkout;