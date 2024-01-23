import { createContext, useState } from "react"
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export const ScreeningContext = createContext() 

const APIContext = ({children}) => {
const Navigate = useNavigate();
const PostUrl = ''    
// modal states
const [open, setOpen] = useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);



    const [candiateDetails,setCandidateDeatils]=useState('');
    
const handlePostData = () =>{
  Navigate('disclaimerPage')
    console.log(candiateDetails)
axios.post(PostUrl).then((res)=>{
if(res.status === 200){
    alert("Data Pushed Successfuly")
}
}  
).catch((err)=>{
    alert('Error in Sending Data',err)
})
}
  return (
  <>
  <ScreeningContext.Provider value={{candiateDetails,setCandidateDeatils,handlePostData,handleClose,handleOpen,open,setOpen}}>
    {children}
  </ScreeningContext.Provider>
  </>
  )
}

export default APIContext