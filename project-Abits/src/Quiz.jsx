import React, { useState,useEffect } from "react";
import { useNavigate, useNavigation } from "react-router-dom";
// import Welcome from "./welcome";
import { Link } from "react-router-dom";
// import QuizModel from "./mongo"; 
import Cookies from 'js-cookie';

const Quiz = () => {
  const [a1, setA1] = useState(null);
  const [a2, setA2] = useState(null);
  const [a3, setA3] = useState(null);
  const [a4, setA4] = useState(null);
  const [a5, setA5] = useState(null);
  const [a6, setA6] = useState(null);
  const [a7, setA7] = useState(null);
  const [a8, setA8] = useState(null);
  const [a9, setA9] = useState(null);
  const [a10, setA10] = useState(null);

  const navigation = useNavigate();


  const handleOptionChange = (questionId, optionValue) => {
    switch (questionId) {
      case "q1":
        setA1(optionValue);
        break;
      case "q2":
        setA2(optionValue);
        break;
      case "q3":
        setA3(optionValue);
        break;
      case "q4":
        setA4(optionValue);
        break;
      case "q5":
        setA5(optionValue);
        break;
      case "q6":
        setA6(optionValue);
        break;
      case "q7":
        setA7(optionValue);
        break;
      case "q8":
        setA8(optionValue);
        break;
      case "q9":
        setA9(optionValue);
        break;
      case "q10":
        setA10(optionValue);
        break;
      default:
        break;
    }
  };
  const [timer, setTimer] = useState({ minutes: 0, seconds: 0}); // in seconds
  // const navigation1 = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        const newSeconds = (prevTimer.seconds + 1) % 60;
        const newMinutes = Math.floor((prevTimer.seconds + 1) / 60);
        return { minutes: newMinutes, seconds: newSeconds };
      });
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  const handleSubmit = async (event) => {
    event.preventDefault();
  const userConfirmed = window.confirm("Click OK to submit the quiz. Click Cancel to continue.");
  if(userConfirmed){
    const selectedOptionsObject = {
      q1: a1,
      q2: a2,
      q3: a3,
      q4: a4,
      q5: a5,
      q6: a6,
      q7: a7,
      q8: a8,
      q9: a9,
      q10: a10,
    };
  
    const correctAnswers = {
      q1: 'b',
      q2: 'b',
      q3: 'c',
      q4: 'b',
      q5: 'c',
      q6: 'c',
      q7: 'a',
      q8: 'b',
      q9: 'b',
      q10: 'c',
    };
  
    let score = 0;
    for (const questionId in correctAnswers) {
      if (correctAnswers[questionId] === selectedOptionsObject[questionId]) {
        score += 1;
      }
    }
    //alert(Your score: ${score} out of 10);
    //alert(AAgu ra bugga);


    
    try {
      const cookies=Cookies.get();
      console.log(cookies)
      const {jwtoken}=cookies;
      console.log(jwtoken)
      console.log("Helllo")
      const response = await fetch("http://localhost:8000/scoreupdata", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ jwtoken, score,duration: timer}),
      });
      navigation(`/welcome/${score}`, { state: { score } });

    } catch (error) {
      console.error("Error submitting quiz:", error.message);
    }
  }else{
    handleContinueQuiz();
  }
  };



  return (
    
    <div className='quiz-body66'>
        <div className="timer" >
           <p>Time: {timer.minutes} min {timer.seconds} secs</p>
        </div>
        <div className="container66" style={{ position: 'relative' }}>
          <h1 className="quiz-heading66">Quiz: Multiple Choice</h1>

          
          <form id="quiz-form66" onSubmit={handleSubmit}>
            {/* Question 1 */}
            <div className="question-card66" style={{borderRadius:'20px'}}>
              <div className="card-body">
                <h5 className="card-title">1. What is Cyber Crime?</h5>
                <div className="form-check66">
                  <input className="check-input66" type="radio" name="q1" id="q1a" defaultValue="a" onChange={() => handleOptionChange("q1", "a")} />
                  <label className="check-label" htmlFor="q1a">Traditional crime only</label>
                </div>
                <div className="form-check66">
                  <input className="check-input66" type="radio" name="q1" id="q1b" defaultValue="b" onChange={() => handleOptionChange("q1", "b")} />
                  <label className="check-label" htmlFor="q1b">Crime that occurs on the Internet</label>
                </div>
                <div className="form-check66">
                  <input className="check-input66" type="radio" name="q1" id="q1c" defaultValue="c" onChange={() => handleOptionChange("q1", "c")} />
                  <label className="check-label" htmlFor="q1c">Physical theft only</label>
                </div>
                <div className="form-check66">
                  <input className="check-input66" type="radio" name="q1" id="q1d" defaultValue="d" onChange={() => handleOptionChange("q1", "d")} />
                  <label className="check-label" htmlFor="q1d">Cybersecurity awareness</label>
                </div>
              </div>
            </div>
            {/* Question 2 */}
            <div className="question-card66">
              <div className="card-body">
                <h5 className="card-title">2. Which of the following is an example of Cyber Crime?</h5>
                <div className="form-check66">
                  <input className="check-input66" type="radio" name="q2" id="q2a" defaultValue="a" onChange={() => handleOptionChange("q2", "a")} />
                  <label className="check-label" htmlFor="q2a">Speeding</label>
                </div>
                <div className="form-check66">
                  <input className="check-input66" type="radio" name="q2" id="q2b" defaultValue="b" onChange={() => handleOptionChange("q2", "b")} />
                  <label className="check-label" htmlFor="q2b">Identity Theft</label>
                </div>
                <div className="form-check66">
                  <input className="check-input66" type="radio" name="q2" id="q2c" defaultValue="c" onChange={() => handleOptionChange("q2", "c")}/>
                  <label className="check-label" htmlFor="q2c">Jaywalking</label>
                </div>
                <div className="form-check66">
                  <input className="check-input66" type="radio" name="q2" id="q2d" defaultValue="d" onChange={() => handleOptionChange("q2", "d")}/>
                  <label className="check-label" htmlFor="q2d">Online shopping</label>
                </div>
              </div>
            </div>
            {/* Question 3 */}
            <div className="question-card66">
              <div className="card-body">
                <h5 className="card-title">3. Why is Cyber Crime on the rise?</h5>
                <div className="form-check66">
                  <input className="check-input66" type="radio" name="q3" id="q3a" defaultValue="a" onChange={() => handleOptionChange("q3", "a")} />
                  <label className="check-label" htmlFor="q3a">Difficult to accomplish</label>
                </div>
                <div className="form-check66">
                  <input className="check-input66" type="radio" name="q3" id="q3b" defaultValue="b" onChange={() => handleOptionChange("q3", "b")}/>
                  <label className="check-label" htmlFor="q3b">High risks of getting caught</label>
                </div>
                <div className="form-check66">
                  <input className="check-input66" type="radio" name="q3" id="q3c" defaultValue="c" onChange={() => handleOptionChange("q3", "c")}/>
                  <label className="check-label" htmlFor="q3c">Low risks of getting caught and high returns</label>
                </div>
                <div className="form-check66">
                  <input className="check-input66" type="radio" name="q3" id="q3d" defaultValue="d" onChange={() => handleOptionChange("q3", "d")}/>
                  <label className="check-label" htmlFor="q3d">Strict online regulations</label>
                </div>
              </div>
            </div>
            {/* Question 4 */}
            <div className="question-card66">
              <div className="card-body">
                <h5 className="card-title">4. What is a tumbler in the context of Cyber Crime?</h5>
                <div className="form-check66">
                  <input className="check-input66" type="radio" name="q4" id="q4a" defaultValue="a" onChange={() => handleOptionChange("q4", "a")}/>
                  <label className="check-label" htmlFor="q4a">A dance move</label>
                </div>
                <div className="form-check66">
                  <input className="check-input66" type="radio" name="q4" id="q4b" defaultValue="b" onChange={() => handleOptionChange("q4", "b")}/>
                  <label className="check-label" htmlFor="q4b">A cryptocurrency transaction anonymization service</label>
                </div>
                <div className="form-check66">
                  <input className="check-input66" type="radio" name="q4" id="q4c" defaultValue="c" onChange={() => handleOptionChange("q4", "c")} />
                  <label className="check-label" htmlFor="q4c">A type of browser</label>
                </div>
                <div className="form-check66">
                  <input className="check-input66" type="radio" name="q4" id="q4d" defaultValue="d" onChange={() => handleOptionChange("q4", "d")} />
                  <label className="check-label" htmlFor="q4d">A social media platform</label>
                </div>
              </div>
            </div>
            {/* Question 5 */}
            <div className="question-card66">
              <div className="card-body">
                <h5 className="card-title">5. Who are Cyber Criminals?</h5>
                <div className="form-check66">
                  <input className="check-input66" type="radio" name="q5" id="q5a" defaultValue="a" onChange={() => handleOptionChange("q5", "a")}/>
                  <label className="check-label" htmlFor="q5a">Only state-sponsored groups</label>
                </div>
                <div className="form-check66">
                  <input className="check-input66" type="radio" name="q5" id="q5b" defaultValue="b" onChange={() => handleOptionChange("q5", "b")}/>
                  <label className="check-label" htmlFor="q5b">Only kids in their rooms</label>
                </div>
                <div className="form-check66">
                  <input className="check-input66" type="radio" name="q5" id="q5c" defaultValue="c" onChange={() => handleOptionChange("q5", "c")}/>
                  <label className="check-label" htmlFor="q5c">Anyone, including state-sponsored groups, hacking groups, and individuals</label>
                </div>
                <div className="form-check66">
                  <input className="check-input66" type="radio" name="q5" id="q5d" defaultValue="d" onChange={() => handleOptionChange("q5", "d")}/>
                  <label className="check-label" htmlFor="q5d">Only professionals in the IT industry</label>
                </div>
              </div>
            </div>
            {/* Question 6 */}
            <div className="question-card66">
              <div className="card-body">
                <h5 className="card-title">6. How do Cyber Criminals stay anonymous?</h5>
                <div className="form-check66">
                  <input className="check-input66" type="radio" name="q6" id="q6a" defaultValue="a" onChange={() => handleOptionChange("q6", "a")}/>
                  <label className="check-label" htmlFor="q6a">Using fake names</label>
                </div>
                <div className="form-check66">
                  <input className="check-input66" type="radio" name="q6" id="q6b" defaultValue="b" onChange={() => handleOptionChange("q6", "b")}/>
                  <label className="check-label" htmlFor="q6b">Through mistakes made by law enforcement</label>
                </div>
                <div className="form-check66">
                  <input className="check-input66" type="radio" name="q6" id="q6c" defaultValue="c" onChange={() => handleOptionChange("q6", "c")}/>
                  <label className="check-label" htmlFor="q6c">Trivial means and by avoiding complacency</label>
                </div>
                <div className="form-check66">
                  <input className="check-input66" type="radio" name="q6" id="q6d" defaultValue="d" onChange={() => handleOptionChange("q6", "d")}/>
                  <label className="check-label" htmlFor="q6d">Publicly sharing their activities</label>
                </div>
              </div>
            </div>
            {/* Question 7 */}
            <div className="question-card66">
              <div className="card-body">
                <h5 className="card-title">7. What is the Dark Web?</h5>
                <div className="form-check66">
                  <input className="check-input66" type="radio" name="q7" id="q7a" defaultValue="a" onChange={() => handleOptionChange("q7", "a")}/>
                  <label className="check-label" htmlFor="q7a">A hidden part of the internet accessible only through specific software</label>
                </div>
                <div className="form-check66">
                  <input className="check-input66" type="radio" name="q7" id="q7b" defaultValue="b" onChange={() => handleOptionChange("q7", "b")}/>
                  <label className="check-label" htmlFor="q7b">The public face of government websites</label>
                </div>
                <div className="form-check66">
                  <input className="check-input66" type="radio" name="q7" id="q7c" defaultValue="c" onChange={() => handleOptionChange("q7", "c")}/>
                  <label className="check-label" htmlFor="q7c">A new web browser</label>
                </div>
                <div className="form-check66">
                  <input className="check-input66" type="radio" name="q7" id="q7d" defaultValue="d" onChange={() => handleOptionChange("q7", "d")}/>
                  <label className="check-label" htmlFor="q7d">An online shopping website</label>
                </div>
              </div>
            </div>
            {/* Question 8 */}
            <div className="question-card66">
              <div className="card-body">
                <h5 className="card-title">8. How can one access the Dark Web?</h5>
                <div className="form-check66">
                  <input className="check-input66" type="radio" name="q8" id="q8a" defaultValue="a" onChange={() => handleOptionChange("q8", "a")}/>
                  <label className="check-label" htmlFor="q8a">Through any regular browser</label>
                </div>
                <div className="form-check66">
                  <input className="check-input66" type="radio" name="q8" id="q8b" defaultValue="b" onChange={() => handleOptionChange("q8", "b")}/>
                  <label className="check-label" htmlFor="q8b">By using the Tor Browser and accessing .onion websites</label>
                </div>
                <div className="form-check66">
                  <input className="check-input66" type="radio" name="q8" id="q8c" defaultValue="c" onChange={() => handleOptionChange("q8", "c")}/>
                  <label className="check-label" htmlFor="q8c">By using Google Chrome and accessing .com websites</label>
                </div>
                <div className="form-check66">
                  <input className="check-input66" type="radio" name="q8" id="q8d" defaultValue="d" onChange={() => handleOptionChange("q8", "d")}/>
                  <label className="check-label" htmlFor="q8d">Through a special government portal</label>
                </div>
              </div>
            </div>
            {/* Question 9 */}
            <div className="question-card66">
              <div className="card-body">
                <h5 className="card-title">9. What is the Tor Browser used for?</h5>
                <div className="form-check66">
                  <input className="check-input66" type="radio" name="q9" id="q9a" defaultValue="a" onChange={() => handleOptionChange("q9", "a")}/>
                  <label className="check-label" htmlFor="q9a">Accessing regular websites</label>
                </div>
                <div className="form-check66">
                  <input className="check-input66" type="radio" name="q9" id="q9b" defaultValue="b" onChange={() => handleOptionChange("q9", "b")}/>
                  <label className="check-label" htmlFor="q9b">Anonymizing and encrypting internet traffic</label>
                </div>
                <div className="form-check66">
                  <input className="check-input66" type="radio" name="q9" id="q9c" defaultValue="c" onChange={() => handleOptionChange("q9", "c")}/>
                  <label className="check-label" htmlFor="q9c">Playing online games</label>
                </div>
                <div className="form-check66">
                  <input className="check-input66" type="radio" name="q9" id="q9d" defaultValue="d" onChange={() => handleOptionChange("q9", "d")}/>
                  <label className="check-label" htmlFor="q9d">Creating social media accounts</label>
                </div>
              </div>
            </div>
            {/* Question 10 */}
            <div className="question-card66">
              <div className="card-body">
                <h5 className="card-title">10. Why should individuals take caution when navigating the Dark Net?</h5>
                <div className="form-check66">
                  <input className="check-input66" type="radio" name="q10" id="q10a" defaultValue="a" onChange={() => handleOptionChange("q10", "a")}/>
                  <label className="check-label" htmlFor="q10a">It's illegal</label>
                </div>
                <div className="form-check66">
                  <input className="check-input66" type="radio" name="q10" id="q10b" defaultValue="b" onChange={() => handleOptionChange("q10", "b")}/>
                  <label className="check-label" htmlFor="q10b">Websites may not be interesting</label>
                </div>
                <div className="form-check66">
                  <input className="check-input66" type="radio" name="q10" id="q10c" defaultValue="c" onChange={() => handleOptionChange("q10", "c")}/>
                  <label className="check-label" htmlFor="q10c">Anonymizing features attract criminal activities</label>
                </div>
                <div className="form-check66">
                  <input className="check-input66" type="radio" name="q10" id="q10d" defaultValue="d" onChange={() => handleOptionChange("q10", "d")}/>
                  <label className="check-label" htmlFor="q10d">It requires a high level of technical expertise</label>
                </div>
              </div>
            </div>
            <div className="submit-button-container">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
            
          </form>

          

        </div>
      </div>

  );
}

export default Quiz;