import { useState } from "react";
import Form from "./component/Form";

function Cascading() {
  let arr = [
    {
      id: 1,
      city: "Mumbai",
    },
    {
      id: 2,
      city: "Pune",
    },
    {
      id: 3,
      city: "Akola",
    },
    {
      id: 4,
      city: "Latur",
    },
    {
      id: 5,
      city: "Solapur",
    },
  ];

  let arr2 = [
    {
      id: 1,
      doctor: "Rahul",
      cityid: 2,
    },
    {
      id: 2,
      doctor: "Ajay",
      cityid: 1,
    },
    {
      id: 3,
      doctor: "Kapil",
      cityid: 4,
    },
    {
      id: 4,
      doctor: "Sunil",
      cityid: 5,
    },
    {
      id: 5,
      doctor: "Rohit",
      cityid: 4,
    },
    {
      id: 6,
      doctor: "Vaibhav",
      cityid: 1,
    },
    {
      id: 7,
      doctor: "Prasad",
      cityid: 2,
    },
    {
      id: 7,
      doctor: "Kandarkar",
      cityid: 3,
    },
  ];

  const [cityId, setcityId] = useState(0);

  const handleChange = (e) => {
    setcityId(Number(e.target.value));
  };

  return (
    <>
      <div>
        <select onChange={handleChange} name="city">
          <option>Select city</option>
          {arr.map((ele) => {
            return (
              <option value={ele.id} key={ele.id}>
                {" "}
                {ele.city}{" "}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        {arr2
          .filter((item) => item.cityid === cityId)
          .map((ele, index) => (
            <ul key={index}>
              <li>
                {++index} {ele.doctor}
              </li>
            </ul>
          ))}
      </div>
      <Form />
    </>
  );
}

export default Cascading;

