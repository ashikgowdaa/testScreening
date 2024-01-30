import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { ScreeningContext } from "../Context/APIContext";
import { useContext, useEffect, useState } from "react";
import "../Css/Userform/Userfrom.css";
import { useNavigate } from "react-router-dom";

const UserFrom = () => {
const Navigate =useNavigate();
  const fields = [
    {
      type: "string",
      name: "first_name",
      title: "First Name",
    },
    {
      type: "string",
      name: "last_name",
      title: "Last name",
    },
    {
      type: "number",
      name: "mobile_number",
      title: "Mobile Number",
    },
    {
      type: "email",
      name: "email",
      title: "Email",
    },
    {
      type: "number",
      name: "Salary",
      title: "Salary",
    },
  ];


  const { candiateDetails, setCandidateDeatils, handlePostData } =
    useContext(ScreeningContext);

  const handleChange = (event) => {
    setCandidateDeatils({
      ...candiateDetails,
      [event.target.name]: event.target.value,
    });
  };
  
  return (
    <>
      <div className="banner ">
        <div className="banner_image_content">
          <img
            src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.632798143.1705622400&semt=sph"
            alt=""
          />
        </div>
        <div className="banner_overlay"></div>
      </div>
      <div className=" py-3 form_wrapper h">
        <div className="w-2/4 flex justify-center items-center mx-auto columns-2 mb-3 ">
          <div className=" w-full flex flex-col justify-center items-center p-4 gap-5 bg-white form_container">
            <div className="text-3xl font-semibold">Candidate Details</div>
            {fields.map((item, index) => {
              return (
                <div
                  key={index}
                  className="w-2/4 flex flex-col items-center gap-3 "
                >
                  <label className="w-full text-start flex items-center ">
                    {item.title}
                  </label>
                  <TextField
                    className="w-full"
                    id="outlined-basic"
                    label={`Enter Your ${item.title}`}
                    name={item.name}
                    value={candiateDetails.name}
                    onChange={(e) => handleChange(e)}
                    variant="outlined"
                  />
                </div>
              );
            })}
            <div className="">
              <Button
                variant="contained"
                onClick={handlePostData}
                style={{
                  background: "rgb(87,0,127)",
                  fontWeight: "600",
                  letterSpacing: "2px",
                  padding: "0.5rem 3rem",
                }}
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserFrom;
