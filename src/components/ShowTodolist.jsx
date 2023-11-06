import { useState,useEffect } from "react";
import TodoCard from "./TodoCard";
import axios from "axios";
import './ShowTodolist.css'
const ShowTodo=()=>{
    const[goal,setGoal]=useState([]);
    const token=localStorage.getItem('token');


    const editHandler=(newText,taskId)=>{
        const updateGoals={text:newText}
        
        axios.put(`http://localhost:5000/api/goals/${taskId}`,updateGoals,{
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
        .then((res)=>{
            setGoal((data) =>
            data.map((goal) => ({ ...goal, text: newText } ))
          );
        }).catch((err)=>{
            console.log('error updating goals',err.message)
        })
    }
   
    useEffect(()=>{
        axios.get('http://localhost:5000/api/goals',{headers:{
            Authorization:`Bearer ${token}`
        }})
        .then((res)=>{
            console.log(res.data)
            setGoal(res.data)
        })
        .catch((err)=>{
            console.log('not found')
            console.log(err)
        })
    },[token])
    const handleDelete=(e)=>{
        
              
        axios.delete(`http://localhost:5000/api/goals/${taskId}`,{headers:{
            Authorization:`Bearer ${token}`
        }})
        .then(()=>{
            setGoal((data)=>{
                return data.filter((goal)=>goal._id!==taskId)
            })
        })
        
        .catch((error) => {
            console.log('Error deleting goal:', error.message);
          });
    }
    
    return(
        <div className="component">
            <section>
                <ul className="list">
                {
                    goal.map((data,index)=>{
                        return(<TodoCard key={index} taskId={data._id} data={data} deleteHandler={handleDelete} editHandler={editHandler}/>)
                        
                    })
                }
                  
                </ul>
            </section>
        </div>
    )
}
export default ShowTodo;