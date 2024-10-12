import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditData() {
  const { id } = useParams();
  const numId = Number(id);
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    rollno: null,
    marks: null,
    name: "",
  });

  useEffect(() => {
    fetchStudentById(numId);
    // console.log(typeof(numId) , numId)
    console.log(userInfo);
  }, []); // Added dependency to run when importedData changes

  function fetchStudentById(id) {
    axios
      .get(`http://localhost:8080/getStudentById/${id}`)
      .then((res) => setUserInfo(res.data))
      .catch((err) => console.log(err));

    //console.log(userInfo)
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setUserInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  }

  function handleEdit() {
    console.log("Editing user info:", userInfo);
   // console.log("Editing name:", userInfo.name);
    // Implement API call or any other logic here

    // axios
    //   .put(`http://localhost:8080/update/${id}`)
    //   .then((res) => console.log(res.data))
    //   .catch((err) => console.log(err));

    // Define the data to update
    const {  marks, name } = userInfo;
    console.log("Editing name:",name)
    const data = {
      marks: marks,
      name: name,
    };

    // Define the request options
    const requestOptions = {
      method: "PUT", // Specify the request method
      headers: { "Content-Type": "application/json" }, // Specify the content type
      body: JSON.stringify(data), // Send the data in JSON format
    };

    // Make the request
    fetch(`http://localhost:8080/update/${id}`, requestOptions)
      //.then((response) => response.json()) // Parse the response as JSON
      .then((data) => console.log(data)) // Do something with the data
      .catch((error) => console.error(error)); // Handle errors
  }

  function handleSubmit(e) {
    e.preventDefault(); // Prevent default form submission
    handleEdit(); // Call the edit function
    setUserInfo({
      rollno: null,
      marks: null,
      name: "",
    })
    navigate("/ShowInfo");
  }

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card p-3 w-25">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="rollno" className="form-label">
              Roll no
            </label>
            <input
              type="number"
              className="form-control"
              id="rollno"
              name="rollno"
              value={userInfo.rollno}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="marks" className="form-label">
              Marks
            </label>
            <input
              type="number"
              className="form-control"
              id="marks"
              name="marks"
              value={userInfo.marks}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={userInfo.name}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditData;
