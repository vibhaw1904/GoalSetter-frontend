import { useState } from "react";
import axios from "axios";
import './CreateTodo.css'
const CreateTodo = () => {
  const [data, setData] = useState({ text: "" });
  

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const goal = {
      text: data.text,
    }

    const token = localStorage.getItem('token');

    axios.post('http://localhost:5000/api/goals', goal, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((res) => {
        setData({ text: "" }); 
      })
      .catch((error) => {
        console.log('Couldn\'t add');
        console.log(error.message);
      });
  }

  return (
    <div className="container">
      <form action="" onSubmit={handleSubmit}>
        <div className="task">
          <label htmlFor="goals">Add your goals</label>
          <input
            type="text"
            id="goals"
            name="text"
            value={data.text}
            onChange={handleChange}
          />
        </div>
        <div className="btn-task">
          <button type="submit">Add task</button>
        </div>
      </form>
    </div>
  );
}

export default CreateTodo;
