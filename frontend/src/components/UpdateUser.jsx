import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
const UpdateUser = () => {
  const { id } = useParams();
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [email, setEmail] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3001/getUser/" + id)
      .then((result) => {
        setName(result.data.name);
        setAge(result.data.age);
        setEmail(result.data.email);
      })
      .catch((err) => console.log(err));
  }, []);

  const submit = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3001/updateUser/" + id, { name, email, age })
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
          <div className="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
            <label for="exampleInputEmail1" class="form-label">
              Full name
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            ></input>
            <label for="exampleInputEmail1" class="form-label">
              Age
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={age}
              onChange={(e) => {
                setAge(e.target.value);
              }}
            ></input>
          </div>
          <button className="btn btn-primary me-3" type="submit">
            Update
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

export default UpdateUser;
