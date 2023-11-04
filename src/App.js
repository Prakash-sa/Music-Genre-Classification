import React, { Component , useState, useEffect,useRef} from 'react';
import AudioAnalyser from './AudioAnalyser';

var a;
const App=()=> {
  const [buttonName, setButtonName] = useState("Play");

  const [recording, setRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState(null);
  const mediaRecorder = useRef(null);
  const [audio, setAudio] = useState();
  const [audior,setAudioR]=useState();

  useEffect(() => {
    if (a) {
      a.pause();
      a = null;
      setButtonName("Play");
    }
    if (audio) {
      a = new Audio(audio);
      a.onended = () => {
        setButtonName("Play");
      };
    }
  }, [audio]);

  const handleClick = () => {
    if (buttonName === "Play") {
      console.log(a)
      a.play();
      setButtonName("Pause");
    } else {
      a.pause();
      setButtonName("Play");
    }
  };

  const addFile = (e) => {
    if (e.target.files[0]) {
      setAudio(URL.createObjectURL(e.target.files[0]));
    }
  };


  const startRecording =()=> {
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then((stream) => {
        setAudioR(stream)
        const recorder = new MediaRecorder(stream);
        setRecording(true);

        recorder.ondataavailable = (event) => {
          if (event.data.size > 0) {
            const blob = new Blob([event.data], { type: 'audio/wav' });
            setAudioBlob(blob);
          }
        };

        recorder.onstop = () => {
          setRecording(false);
        };

        recorder.start();
        mediaRecorder.current = recorder;
      })
      .catch((error) => {
        console.error('Error accessing the microphone:', error);
      });
  };

  const stopRecording = () => {
    if (mediaRecorder.current) {
      mediaRecorder.current.stop();
      setAudioR(null)
    }
  };

  const saveRecording = () => {
    const url = URL.createObjectURL(audioBlob);
    setAudio(url)
    // const a = document.createElement('a');
    // a.href = url;
    // a.download = 'recorded-audio.wav';
    // document.body.appendChild(a);
    // a.click();
    // document.body.removeChild(a);
  };

  const getMicrophone=async()=> {
    const audio = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: false
    });

    setAudioR(audio)
  }

  const stopMicrophone=()=> {
    audior.getTracks().forEach(track => track.stop());
    setAudioR(null)
  }

  const toggleMicrophone=()=> {
    if (audior) {
      stopMicrophone();
    } else {
      getMicrophone();
    }
  }

    return (
      <div className="App">
        <div className="controls">

          <input type="file" onChange={addFile} />
          {recording ? (
            <button onClick={stopRecording}>Stop Recording</button>
          ) : (
            <button onClick={startRecording}>Start Recording</button>
          )}
          {audioBlob && <button onClick={saveRecording}>Save Recording</button>}

          <button onClick={handleClick}>{buttonName}</button>
        </div>
        {audior ? <AudioAnalyser audio={audior} /> : ''}
      </div>
    );
}

export default App;
