import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const CreateUser = () => {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [email, setEmail] = useState();
  const navigate = useNavigate();
  const submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/createUser", { name, email, age })
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="w-75">
        <form onSubmit={submit}>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
            <label for="exampleInputEmail1" class="form-label">
              Full name
            </label>
            <input
              type="name"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => {
                setName(e.target.value);
              }}
            ></input>
            <label for="exampleInputEmail1" class="form-label">
              Age
            </label>
            <input
              type="age"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => {
                setAge(e.target.value);
              }}
            ></input>
          </div>
          <button className="btn btn-primary me-3" type="submit">
            Submit
          </button>
          <button
            className="btn btn-secondary me-3"
            type="submit"
            onClick={(e) => {
              navigate("/");
            }}
          >
            Back
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
