import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
    //UseSelector is to Reflect any changes made in Store
    const cart = useSelector(item => item.cart)
    return (
        <>
            <header className="w-full flex sticky top-0 justify-center navshadow flex-col bg-gray-300 z-10 mb-1">
                <div className="sm:absolute z-0 left-4 top-3 w-auto justify-center sm:justify-normal sm:pt-0 pt-2 flex handjet-font text-2xl ">
                    <img width="30" height="30" src="https://img.icons8.com/color/48/aliexpress.png" alt="shoppy-globe" />
                    <span>SHOPPY GLOBE</span>
                </div>
                <nav className="w-full flex text-sm items-center justify-center p-4 list-none">
                    <ul className="flex items-center gap-4 font-semibold ">
                        <Link to="/"><li className="">HOME</li></Link>
                        <Link to="/cart"><li className="flex items-center gap-1 relative"><img width="25" height="25" src="https://img.icons8.com/parakeet-line/25/shopping-cart.png" alt="shopping-cart"/><span className="bg-red-600 text-white rounded-full px-[6px] absolute -top-2 right-8">{cart.items.length}</span> CART</li></Link>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header; 