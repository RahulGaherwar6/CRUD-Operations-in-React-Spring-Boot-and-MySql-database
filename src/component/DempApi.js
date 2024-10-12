import React, { useEffect, useState } from "react";
import axios from "axios";
import DeleteModel from "./DeleteModel";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import EditData from "./EditData";

function DempApi() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [render, SetRender] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    // axios
    //   .get("http://localhost:8080/getStudents")
    //   .then((res) => setData(res.data))
    //   .catch((err) => console.log(err));

    axios
      .get("http://localhost:8080/getStudents")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleDelete(id) {
    let arr = data.filter((ele) => ele.rollno !== Number(id));
    deleteStudentById(id, arr);
  }

  function deleteStudentById(id, arr) {
    axios
      .delete(`http://localhost:8080/deleteStudentById/${id}`)
      .then((data) => {
        console.log(data.status);
        setData(arr);
        toast.success(
          toast("🦄 Wow so easy!", {
            position: "top-middle",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
          })
        );
      })
      .catch((err) => {
        console.log(err);
        toast.warn("There is technical glitch in software...!");
      });
  }

  function goToMainPAge() {
    navigate("/");
  }

  // function clickButton(rollno) {
  //   navigate("/EditData", { state: rollno });
  //   SetRender(false);
  // }

  function clickButton(rollno) {
    navigate(`/EditData/${rollno}`, { state: data }); // Pass selected student data and setData function
  }

  return (
    <>
      <div className="container">
        <div>
          <button className="btn btn-primary " onClick={goToMainPAge}>
            Add User Info
          </button>
        </div>
        <table className="table table-dark table-striped mt-5">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Roll_No</th>
              <th scope="col">Name</th>
              <th scope="col">Marks</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((element, index) => {
                const modalId = `deleteModal${element.rollno}`; // Create a unique ID for each modal
                return (
                  <tr key={element.rollno}>
                    <th scope="row">{++index}</th>
                    <td>{element.rollno}</td>
                    <td>{element.name}</td>
                    <td>{element.marks}</td>
                    <td>
                      <DeleteModel
                        handleDelete={handleDelete}
                        rollno={element.rollno}
                        modalId={modalId}
                      />
                      <Link
                        to={`/EditData/${element.rollno}`}
                        className="btn btn-primary  text-decoration-none"
                      >
                        Edit data
                      </Link>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default DempApi;
