import { Outlet } from 'react-router-dom';
import Footer from './Components/Footer';
import APIContext from './Context/APIContext';

const Layout = () => {
  return (
    <> 
       <APIContext>
    <Outlet/>
       </APIContext>
    <Footer/>
    </>
  )
}

export default Layout