import React, { useState } from "react";

const AddToDo = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setdesc] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Please fill all fields");
    } 
    else {
      props.addTodo(title, desc);
      setTitle("");
      setdesc("");
    }
  };
  return (
    <div className="container">
      <h3 className="text-center my-3">Add ToDo </h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title of ToDo
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className="form-control"
            id="title"
            aria-describedby="textHelp"
          />
          {/* <div id="textHelp" className="form-text">We'll never share your email with anyone else.</div> */}
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Title description{" "}
          </label>
          <input
            type="text"
            value={desc}
            onChange={(e) => {
              setdesc(e.target.value);
            }}
            className="form-control"
            id="desc"
          />
        </div>

        <button type="submit" className="btn btn-sm btn-primary mb-3">
          Add ToDo
        </button>
      </form>
    </div>
  );
};

export default AddToDo;
