# React Project "ShoppyGlobe E-commerce Application"

# Live Preview
> https://shoppyglobe-ecommerce.netlify.app/

# Project Objective

 1. Component Structure:
 > App:Themain component.
 > Header: Display the navigation menu and shopping cart icon
 > ProductList: Displays a list of products.
 > ProductItem: Represents a single product including an “Add to Cart” button.
 > Product Detail: Show detailed information about a selected product.
 > Cart:Displays the items added to the cart with options to modify quantities or
 remove items.
 > CartItem: Represents a single item in the cart.
 > NotFound:Display a 404 page for unknown routes.
 Props: 
 > Utilize props to pass data from parent components to child components.
 > Ensure components are functional and reusable with appropriate prop types.

2. Data Fetching with useEffect: 
 > ProductList Component: Use useEffect to fetch the list of products from an API
 endpoint ('https://dummyjson.com/products') when the component mounts.
 Store the fetched data in the component’s state.Create custom hook for fetching
 product list. 
 > ProductDetail Component: Use useEffect to fetch details of a selected product
 based on route parameters when the component mounts. Store the fetched data
 in the component’s state. 
 > Error Handling: Implement error handling to manage failed data fetch requests
 gracefully. 
 > Redux: Implement Redux for more complex state management.
 Create actions, reducers, and selectors to manage the state of cart items.
 > Implement a search feature to filter products in the ProductList. 

3. Event Handling: 
 > Add a button in each ProductItem to add the product to the cart.
 > Add a button in each CartItem to remove the product from the cart.
 Ensure that add product and remove product functionality is implemented
 correctly using redux.

4. React Routing: 
 > Implement routing using React Router.
 > Create routes for Home, Product Detail, Cart, and Checkout pages.
 > Useroute parameters for product details.

5. React Lists: 
 > Renderthe list of products in the ProductList component.
 > Renderthe list of cart items in the Cart component.
 > Ensure that you provide a unique key to each list.
 Performance Optimization: 
 > Implement code splitting and lazy loading for components using React.lazy and
 Suspense.

6.Styling: 
 > Apply css for styling.
 > Ensure the application is responsive and works well on different screen sizes.

# How to Run this Project

Step 1 : Clone the Project
> Link : https://github.com/Siddhesh-Dandekar/shoppyglobe-ecommerce.git

Step 2 : Install all the Packages
> npm install

Step 3 : Run Project
> npm run dev 