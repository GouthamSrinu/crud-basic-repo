import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001")
      .then((result) => setUsers(result.data))
      .catch((err) => console.log(err));
  }, []);
  const handleClick = (id) => {
    axios
      .delete("http://localhost:3001/deleteUser/" + id)
      .then((result) => {
        console.log(result.data);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="w-75">
        <Link to="/create" className="btn btn-warning  ">
          + Add
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Actions </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.age}</td>
                  <td>
                    <Link
                      to={`/update/${user._id}`}
                      className="btn btn-primary me-2"
                    >
                      Edit
                    </Link>
                    <Link
                      type="/delete"
                      className="btn btn-danger me-2"
                      onClick={(e) => handleClick(user._id)}
                    >
                      Delete
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
