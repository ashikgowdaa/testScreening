
import { createBrowserRouter,createRoutesFromElements,RouterProvider,Route } from 'react-router-dom';

import Layout from './Layout';
import UserFrom from './Components/UserFrom';
import Disclaimer from './Components/DDisclaimerPage'
import TestScreen from './Components/TestScreen';
import LastPage from './Components/LastPage';
function App() {

  const Router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<UserFrom/>}/>
      <Route path='disclaimerPage' element={<Disclaimer/>}/>
      <Route path='TestScreen' element={<TestScreen/>}/>
      <Route path='lastPage' element={<LastPage/>}/>
    </Route>
  ))
  return (
    <>
    <RouterProvider router={Router} />
    </>
  )
}

export default App
