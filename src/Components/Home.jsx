import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    axios
      .get("http://localhost:3000/details")
      .then((response) => setData(response.data));
  };

  const setLocalStorage = (id, name, email, phone, marks, passFail) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("phone", phone);
    localStorage.setItem("marks", marks);
    localStorage.setItem("passFail", passFail);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between my-3">
        <h2>Students Data</h2>
        <Link to={"/create"}>
          <button className="btn btn-info">Create</button>
        </Link>
      </div>
      <table className="table  striped hover ">
        <thead>
          <tr>
            <th>#</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>PHONE</th>
            <th>MARKS</th>
            <th>PASS / FAIL</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.marks}</td>
                <td>{item["passFail"]}</td>
                <td>
                  <Link to={"/update"}>
                    <button
                      className="btn btn-success"
                      onClick={() =>
                        setLocalStorage(
                          item.id,
                          item.name,
                          item.email,
                          item.phone,
                          item.marks,
                          item.passFail
                        )
                      }
                    >
                      Edit
                    </button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
