import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Create = () => {
  const [student, setStudent] = useState({
    id: null,
    name: "",
    email: "",
    phone: "",
    marks: 0,
    passFail: "",
  });

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("btn Clicked");
    const headers = { "Access-Control-Allow-Origin": "*" };

    axios
      .post(
        "http://localhost:3000/details",
        {
          ...student,
        },
        headers
      )
      .then(() => navigate("/"));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setStudent({ ...student, [name]: value });
  };

  return (
    <>
      <div className="container mt-5">
        <h1> Create Data</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              name="name"
              value={student.name}
              onChange={handleInputChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              value={student.email}
              onChange={handleInputChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Phone</label>
            <input
              type="text"
              name="phone"
              value={student.phone}
              onChange={handleInputChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Marks</label>
            <input
              type="number"
              name="marks"
              value={student.marks}
              onChange={handleInputChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label>Pass/Fail:</label>
            <select
              name="passFail"
              value={student.passFail}
              onChange={(e) => handleInputChange(e)}
              className="form-control"
            >
              <option value="">Select</option>
              <option value="Pass">Pass</option>
              <option value="Fail">Fail</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Create;
