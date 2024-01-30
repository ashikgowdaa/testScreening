import { Outlet } from 'react-router-dom';
import Footer from './Components/Footer';
import APIContext from './Context/APIContext';

const Layout = () => {
  return (
    <> 
       <APIContext>
    <Outlet/>
       </APIContext>
    </>
  )
}

export default Layout