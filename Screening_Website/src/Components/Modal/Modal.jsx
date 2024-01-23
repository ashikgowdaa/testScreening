// TransitionsModal.js
import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import { useContext } from 'react';
import {ScreeningContext} from '../../Context/APIContext';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height:300,
  bgcolor: 'background.paper',
  p: 2,
borderRadius:3
};

const TransitionsModal = ({ modalContent }) => {
    const {open  ,handleClose} = useContext(ScreeningContext);


  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style} style={{  boxShadow: '0 3px 10px rgb(0, 0, 0)'}}>
            <div className="flex justify-end p-0" style={{borderBottom:'2px solid rgb(87,0,127) '}}>
            <img onClick={handleClose} width="30" height="30" src="https://img.icons8.com/color/48/close-window.png" alt="close-window"/>
            </div>
            {modalContent}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default TransitionsModal;
