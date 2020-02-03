import React, { useState } from "react";
// import axios from 'axios';

export default function Form() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChanges = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // axios
    //     .post('https://reqres.in/api/users', formData)
    //     .then(res=>{
    //         console.log(res.data)
    //     })
    //     .catch(err=>{console.log(`ERROR THROWN AT: ${err}`)})
    //     setFormData({email: '', password: ''});
  };

  return (
    <form
      className="align-self-center mt-5"
      id="resetthis"
      onSubmit={handleSubmit}
    >
      <div>
        <input
          type="email"
          className="form-control"
          onChange={handleChanges}
          placeholder="Enter Email..."
          name="email"
          required
        />
        <input
          type="password"
          className="form-control mt-3"
          onChange={handleChanges}
          placeholder="Enter Password..."
          name="password"
          required
        />
        <button className="w-100 btn btn-primary mt-3" type="submit">
          Submit
        </button>
        {/* <pre>{JSON.stringify(formData, null, 2)}</pre> */}
      </div>
    </form>
  );
}
