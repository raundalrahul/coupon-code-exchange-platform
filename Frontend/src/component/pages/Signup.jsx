import React, { useState } from "react";
import InputControl from "../InputControl";
import { Link, useNavigate } from "react-router-dom";
import {createUserWithEmailAndPassword,updateProfile} from 'firebase/auth'
import { auth } from "../../firebase";
function Signup() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
  });

  const[errorMsg, setErrorMsg]=useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled]=useState(false);
  const handleSubmission = ()=>{
    if(!values.name || !values.email || !values.pass){
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");
    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth,values.email, values.pass)
    .then(async(res)=>{
        setSubmitButtonDisabled(false);
        const user = res.user;
        await updateProfile(user,{
          displayName:values.name,
        });
        navigate("/");
      }).catch((err)=>{
        setSubmitButtonDisabled(false)
        setErrorMsg(err.message)
      });   
  }
  return (
    <>
      <div>
        <h1>Signup</h1>
        <InputControl
          label="Name"
          placeholder="Enter Name"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }
        />

        <InputControl
          label="Email"
          placeholder="Enter Email"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        <InputControl
          label="Password"
          placeholder="Enter Password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
        />
      </div>
      <div>
        <button onClick={handleSubmission}
        disabled={submitButtonDisabled}
        >Signup</button>
        <p>
          Already Have an account ?{" "}
          <span>
            <b>{errorMsg}</b>
            <Link className="colorbc" to="/login">
              Login
            </Link>
          </span>
        </p>
      </div>
    </>
  );
}

export default Signup;
