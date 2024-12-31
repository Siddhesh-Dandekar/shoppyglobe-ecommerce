import Header from './components/header';
import ProductList from './components/productlist';
import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import appStore from './utilis/configurestore';

function App() {
  return (
    <>
      <Provider store={appStore}>
        <Header />
        <Outlet />
      </Provider>

    </> 
  )
}

export default App
