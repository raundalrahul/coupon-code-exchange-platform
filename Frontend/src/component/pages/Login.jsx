import React,{useState} from "react";
import InputControl from "../InputControl";
import { Link, useNavigate } from "react-router-dom";
import {signInWithEmailAndPassword} from 'firebase/auth'
import { auth } from "../../firebase";

function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
   email: "",
    pass: "",
  });

  const[errorMsg, setErrorMsg]=useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled]=useState(false);
  const handleSubmission = ()=>{
    if(!values.email || !values.pass){
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");
    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth,values.email, values.pass)
    .then(async(res)=>{
        setSubmitButtonDisabled(false);
        navigate("/home");
      }).catch((err)=>{
        setSubmitButtonDisabled(false)
        setErrorMsg(err.message)
      });   
  }
  return (
    <>
      <div>
        <h1>Login</h1>
        <InputControl label="Email"
        onChange= {event=>setValues(prev=>({
          ...prev, email:event.target.value
        }))}
        placeholder="Enter Email" />
        <InputControl label="Password"
        onChange= {event=>setValues(prev=>({
          ...prev, pass:event.target.value
        }))}
        placeholder="Enter Password" />
      </div>
      <div>
        <b>{errorMsg}</b>
        <button disabled={submitButtonDisabled} onClick={handleSubmission}>Login</button>
        <p>
            Already Have an account ? {" "}
            <span>
                <Link className="colorbc" to="/signup">Signup
                </Link>
            </span>
        </p>
      </div>
    </>
  );
}

export default Login;
