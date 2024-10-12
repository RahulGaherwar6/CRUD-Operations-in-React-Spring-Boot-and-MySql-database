import React, { useState } from "react";
import './Form.css'

function Form() {
  const [info, setInfo] = useState({
    name: "",
    rollno:null,
    age: null,
    address: "",
  });

  const [submitdata, setSubmitData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // setInfo({
    //  ..info,
    //   [e.target.name] : e.target.value
    //      })
    //
    //
    setInfo({
      ...info,
      [name]: value,
    });

    console.log(info);
  };

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitData([...submitdata, info]);
    setInfo({
      name: "",
      rollno: null,
      age: null,
      address: "",
    })
  }

  function handleDelete(rollnoo) {
    let data = submitdata.filter((no) => no.rollno !== rollnoo);
    setSubmitData(data);
  }

  return (
    <div className="main">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Enter name:</label>
          <input type="text" name="name" id="name" value={info.name}
          onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="rollno">Enter rollno:</label>
          <input
            type="number"
            name="rollno"
            id="rollno"
            value={info.rollno}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="age">Enter age:</label>
          <input type="number" name="age"  value={info.age}
          id="age" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="address">Enter address:</label>
          <input
            type="text"
            name="address"
            id="address"
            value={info.address}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit"> Submit</button>
        </div>
      </form>

      <div>
        {submitdata &&
          submitdata.map((ele, index) => (
            <>
              <ul key={index}>
                <li>{ele.name}</li>
                <li>{ele.rollno}</li>
                <li>{ele.age}</li>
                <li>{ele.address}</li>
                <button onClick={() => handleDelete(ele.rollno)}>Delete</button>
              </ul>
            </>
          ))}
      </div>
    </div>
  );
}

export default Form;
