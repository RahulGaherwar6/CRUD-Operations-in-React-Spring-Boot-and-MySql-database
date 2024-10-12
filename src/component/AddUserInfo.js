import React, { useState } from "react";
import axios from "axios";
import "./AddUserInfo.css";
import { useNavigate } from "react-router-dom";

function AddUserInfo() {
  const navigate = useNavigate();
  const [showError, setShowError] = useState(true);
 // const [ButtonPresent, setButtonPresent] = useState(true);
   
  const [data, setData] = useState({
    rollno: null,
    marks: null,
    name: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post("http://localhost:8080/save", data)
      .then((res) => {
        if (res.data === "") {
          setShowError(false);
        } else {
          setShowError(true);
          navigate("/ShowInfo");
        }
      })
      .catch((err) => console.log(err));

    setData({
      rollno: 0,
      marks: 0,
      name: "",
    });
  }
 const checkData = data.rollno && data.marks && data.name ;
    
  return (
    <>
      <div className="container mt-5 d-flex justify-content-center">
        <div className="card p-3 w-25 ">
          <form onSubmit={handleSubmit}>
            <div class="mb-3">
              <label for="rollno" class="form-label">
                Roll no
              </label>
              <input
                type="number"
                class="form-control"
                id="rollno"
                name="rollno"
                value={data.rollno}
                aria-describedby="emailHelp"
                onChange={handleChange}
              />
            </div>
            <div class="mb-3">
              <label for="marks" class="form-label">
                marks
              </label>
              <input
                type="number"
                class="form-control"
                id="marks"
                name="marks"
                value={data.marks}
                onChange={handleChange}
              />
            </div>
            <div class="mb-3">
              <label for="name" class="form-label">
                name
              </label>
              <input
                type="text"
                class="form-control"
                id="name"
                name="name"
                value={data.name}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              class="btn btn-primary"
              disabled={!checkData}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="para mt-4 text-danger">
        { !showError ? <p>This id is already present </p> : <p></p>}
      </div>
    </>
  );
}

export default AddUserInfo;
