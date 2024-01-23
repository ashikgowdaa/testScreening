import React from "react";
import "../Css/Disclaimer/Disclaimer.css";
import TransitionsModal from "./Modal/Modal";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import { ScreeningContext } from "../Context/APIContext";
import { Button } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
const DDisclaimerPage = () => {
  const questions = [
    {
      label:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ullam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nemo fugiat quae consectetur ab quos assumenda minima voluptates dolor delectus?",
    },
    {
      label:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ullam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nemo fugiat quae consectetur ab quos assumenda minima voluptates dolor delectus?",
    },
    {
      label:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ullam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nemo fugiat quae consectetur ab quos assumenda minima voluptates dolor delectus?",
    },
    {
      label:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ullam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nemo fugiat quae consectetur ab quos assumenda minima voluptates dolor delectus?",
    },
    {
      label:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ullam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nemo fugiat quae consectetur ab quos assumenda minima voluptates dolor delectus?",
    },
  ];

  const Navigate = useNavigate();
  const { open, handleOpen, handleClose } = useContext(ScreeningContext);
  
  const modalContent = (
    <div className="modal_container">
      <Typography
        id="transition-modal-title"
        variant="h6"
        component="h6"
        style={{ fontSize: "1rem", textAlign: "center", fontWeight: 550 }}
      >
        By Clicking Below Button Your Directed To Test Page
      </Typography>
      <Button
        onClick={() => Navigate("/TestScreen")}
        variant="contained"
        disableElevation
      >
        Submit
      </Button>
    </div>
  );

  return (
    <>
      <div className="disclaimer_Wrapper">
        <div className="disclaimer_container">
          <h5 className="text-center heading">Disclaimer Page</h5>
          <div className="list-wrapper">
            <ul>
              {questions.map((value, index) => {
                return (
                  <li key={index} className="list_container">
                    {value.label}
                  </li>
                );
              })}
            </ul>
            <div className="input_container">
              <input type="checkbox" onClick={handleOpen} />
              <p>
                I have read the above Rules & Regulations and I agree to abide
                by them
              </p>
            </div>
          </div>
        </div>
        <TransitionsModal modalContent={modalContent} />
      </div>
    </>
  );
};

export default DDisclaimerPage;
