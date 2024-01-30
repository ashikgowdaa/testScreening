import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../src/Css/TestScreen/TestScreen.css';
import { Button } from '@mui/material';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor:'#fff',
  border:0,
  p: 4,
};

const CameraComponent = () => {

  const questionsArray = [
    {
      questionText: "What is the capital of France?",
      options: [
        "Berlin",
        "Madrid",
        "Paris",
        "Rome"
      ]
    },
    {
      questionText: "Which planet is known as the Red Planet?",
      options: [
        "Earth",
        "Mars",
        "Venus",
        "Jupiter"
      ]
    },
    {
      questionText: "What is the largest mammal?",
      options: [
        "Elephant",
        "Blue Whale",
        "Giraffe",
        "Hippopotamus"
      ]
    },
    {
      questionText: "Who wrote 'Romeo and Juliet'?",
      options: [
        "Charles Dickens",
        "William Shakespeare",
        "Jane Austen",
        "Emily Brontë"
      ]
    },
    {
      questionText: "Which country is known as the Land of the Rising Sun?",
      options: [
        "China",
        "South Korea",
        "Japan",
        "Vietnam"
      ]
    },
    {
      questionText: "What is the capital of Australia?",
      options: [
        "Sydney",
        "Melbourne",
        "Canberra",
        "Brisbane"
      ]
    },
    {
      questionText: "In which year did the Titanic sink?",
      options: [
        "1905",
        "1912",
        "1920",
        "1931"
      ]
    },
    {
      questionText: "Who painted the Mona Lisa?",
      options: [
        "Vincent van Gogh",
        "Leonardo da Vinci",
        "Pablo Picasso",
        "Claude Monet"
      ]
    },
    {
      questionText: "In which year did the Titanic sink?",
      options: [
        "1905",
        "1912",
        "1920",
        "1931"
      ]
    },
    // Add more questions as needed
  ];

 

  
  const calenderFunction =()=>{
    for(let i = 0;i<=questionsArray.length; i++){
      console.log(i,"<<<<<")
    }
  }
  
 

  

  const [stream, setStream] = useState(null);
  const [recording, setRecording] = useState(false);
  const [activeCamera ,setActiveCamera] =useState(false)
  const [elapsedTime,setElapsedTime]=useState(0)
const [optionAns,setOptionAns]=useState([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const videoRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const recordedChunksRef = useRef([]);
const navigate = useNavigate()



const startTimer =() => {
  let intervalId;
  intervalId = setInterval((prevElapsedTime) => {
    setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
    // Check if elapsed time exceeds the limit (e.g., 0.1 minutes)
    if (prevElapsedTime + 1 >= 0.1 * 60) {
      clearInterval(intervalId);
      setElapsedTime(0); // Reset elapsed time to zero
    }
  }, 1000);

  return () => clearInterval(intervalId); // Cleanup function to clear interval on unmount
};

useEffect(() => {
  if (elapsedTime >= 30* 60) {
    stopCamera()
    setElapsedTime(0); // Reset elapsed time to zero
    // handleDownload();
  }
}, [elapsedTime]);

const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
};

  useEffect(() => {
    if (stream && !recording) {
      startRecording();
    } else if (!stream && recording) {
      stopRecording();
    }
  }, [stream, recording]);

  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: true
      });
  
      setStream(mediaStream);
      setActiveCamera(true);
   setTimeout(()=>{   
     if (videoRef.current) {
      videoRef.current.srcObject = mediaStream;
      startTimer();
    }
  },[100])
  
      mediaStream.addEventListener('inactive', () => {
        alert('Camera is no longer active');
        setActiveCamera(false);
      });
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };
  

  const stopCamera = () => {
    if (stream) {
      // Stop all tracks in the stream
      stream.getTracks().forEach((track) => track.stop());
      setStream(null);
      // navigate('/lastPage')
    }

  };

const startRecording = () => {
    if (stream && !recording) {
      // Create a new MediaRecorder with the video stream
      mediaRecorderRef.current = new MediaRecorder(stream);

      // Event handler for dataavailable event
      mediaRecorderRef.current.addEventListener('dataavailable', (event) => {
        if (event.data.size > 0) {
          recordedChunksRef.current.push(event.data);
        }
      });

      // Event handler for stopping recording
      mediaRecorderRef.current.addEventListener('stop', () => {
        // Combine recorded chunks into a Blob
        const blob = new Blob(recordedChunksRef.current, { type: 'video/webm' });

        // Create a download link and trigger a click to download the video
        const a = document.createElement('a');
        document.body.appendChild(a);
        a.style = 'display: none';
        const url = URL.createObjectURL(blob);
        a.href = url;
        a.download = 'recorded-video.webm';
        a.click();
        window.URL.revokeObjectURL(url);

        // Reset recorded chunks
        recordedChunksRef.current = [];
        setRecording(false); // Set recording state to false
      });

      // Start recording
      mediaRecorderRef.current.start();
      setRecording(true); 
      // Set recording state to true
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && recording) {
      mediaRecorderRef.current.stop();
    }
  };

  

  const handleCheck =(param)=>{
const newsetAnswer=[...optionAns];
newsetAnswer[currentQuestionIndex] = param;
setOptionAns(newsetAnswer)    
  }
const handleSubmit=()=>{
console.log(optionAns)
}
  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };
  const currentQuestion = questionsArray[currentQuestionIndex];
  const handleQuestionClick = (index) => {
    setCurrentQuestionIndex(index);
  };
  return (
    <>
 

{
  activeCamera ?
   <div className="main_container"  >
 
  <div className="question_wrapper">
      {currentQuestion && (
        <div className='question_container'>
          <h1>{currentQuestion.questionText}</h1>
          <ul>
            {currentQuestion.options.map((option, index) => (
              <div className="" key={index}>
                   <div className="">
                   <input
                      type="checkbox"
                      value={`checkbox ${index}`}
                      checked={optionAns[currentQuestionIndex] === option}
                      onClick={() => handleCheck(option)}
                    />{' '}
                    <span>{option}</span>
            </div>
            </div>
            ))}
          </ul>
        </div>
      )}

 {currentQuestionIndex < questionsArray.length - 1 && (
   <div className="flex justify-center">

    <Button onClick={handleNextQuestion}>Next Question</Button>
  </div>
    )}
    {
      currentQuestionIndex == questionsArray.length - 1 &&(
        <div className="flex justify-center">
    <Button 
    onClick={()=>{navigate('/lastPage');
    // stopCamera()
    handleSubmit()
    }}>Submit</Button>
  </div>
      )
    }
  </div>
  <div className="vedio_main_container">
    <div className='video_Wrapper'>
    <video ref={videoRef}  autoPlay />
    <div className="time_card">
      <h1>Time Left</h1>
    {<h1>{formatTime(elapsedTime)}</h1>}
    </div>
  </div>
  <div className='question_calender'>

          {questionsArray.map((_, index) => (
            <>
                 <div className='round_number' key={index} onClick={() => handleQuestionClick(index)}>
              {index + 1}
            </div>
            </>
       
          ))}
       

  </div>
  </div>
  </div> :  
  <div className="modal_main_container">
    <div className="modal">

  <h2 style={{fontWeight:'700'}}>Start Your Test by Clicking Below </h2>
  <p style={{fontWeight:'700',color:'red'}}  >*Please Provide Permission to Webcam</p>
  <Button onClick={startCamera}> Start test</Button>
    </div>
  </div> 
}
      
    </>
  
  )
};

export default CameraComponent;
