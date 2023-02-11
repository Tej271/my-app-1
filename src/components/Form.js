import React, { useState } from "react";
import { validEmail } from "../reg";
import axios from "axios";

const Form = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  return (
    <div className="Form">
      <div className="Form-content">
        <label>Name: </label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Mobile No.: </label>
        <input
          type="number"
          name="mobile"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <label>Email-id: </label>
        <input
          type="email"
          name="email-id"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);

            if (!validEmail.test(email)) {
              setEmailError(true);
            } else {
              setEmailError(false);
            }
          }}
        />
        {emailError ? (
          <p className="emailError" style={{ color: "red" }}>
            Plese Enter a valid Email-id
          </p>
        ) : (
          ""
        )}
      </div>
      <div className="btn-register">
        <button
          type="submit"
          onClick={() => {
            let obj = { name: name, number: number, email: email };
            axios
              .post("http://localhost:3004/users", obj)
              .then(() => console.log("Updated"))
              .catch(() => console.log("ERROR"));

            setName("");
            setNumber("");
            setEmail("");
            setEmailError(false);
          }}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Form;
