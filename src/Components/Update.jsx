import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Create = () => {
  const [student, setStudent] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    marks: "",
    passFail: "",
  });

  const navigate = useNavigate();

  const handleUpdateData = () => {
    setStudent((prevStudent) => ({
      ...prevStudent,
      
      id: localStorage.getItem("id"),
      name: localStorage.getItem("name"),
      email: localStorage.getItem("email"),
      phone: localStorage.getItem("phone"),
      marks: localStorage.getItem("marks"),
      passFail: localStorage.getItem("passFail"),
    }));
  };

  useEffect(() => {
    handleUpdateData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("btn Clicked");

    axios
      .put(`http://localhost:3000/details/${student.id}`, {
        ...student,
      })
      .then(() => navigate("/"));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setStudent({ ...student, [name]: value });
  };

  return (
    <>
      <div className="container mt-5">
        <h1> Update Data</h1>
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
