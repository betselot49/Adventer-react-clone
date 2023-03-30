import { useState } from "react"

function SignUp() {
    const [message, setMessage] = useState(null);
    const [firstname, setFirstname] = useState(null);
    const [lastname, setLastname] = useState(null);
    const [password, setPassword] = useState({
        value: null,
        isTouched: false
    });
    const [email, setEmail] = useState(null);


    return (
        <div className="Main-wrapper">
            <form>
                <fieldset>
                    <h2 className="sign-up-header">Sign up for free</h2>
                    <div className="field">
                        <label>First name <sup>*</sup></label>
                        <input 
                            value={firstname}
                            placeholder="First name"
                            onChange={(e) => {
                                setFirstname(e.target.value)
                            }}
                        />
                    </div>
                    <div className="field">
                        <label>Last name <sup>*</sup></label>
                        <input 
                            value={lastname}
                            placeholder="Last name"
                            onChange={(e) => {
                                setLastname(e.target.value)
                            }}
                        />
                    </div>
                    <div className="field">
                        <label>Email address <sup>*</sup></label>
                        <input 
                            value={email}
                            placeholder="Eamil address"
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                        />
                    </div>
                    <div className="field">
                        <label>Password <sup>*</sup></label>
                        <input 
                            value={password}
                            type="password"
                            placeholder="password"
                            onChange={(e) => {
                                setPassword({...password, value: e.target.value})
                                // validPassword() ? setMessage("Strong password") : ("Password must be at least 8 characters long & contain at least 1 uppercase letter, 1 lowercase letter, and 1 number.")
                            }}
                            onBlur={() => {
                                setPassword({...password, isTouched: true})
                            }}
                        />
                        {/* {password.isTouched && !validPassword() ? (<PasswordErrorMessage message={message}/>) : null} */}
                    </div>
                    <button className="sign-in" type="submit">Sign in</button>
                </fieldset>
            </form>
        </div>
    )
}

export default SignUp

// import React from 'react'

// function SignUp() {
//   return (
//     <h1>Hello world</h1>
//   )
// }

// export default SignUp
