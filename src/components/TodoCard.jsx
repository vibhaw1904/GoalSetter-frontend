import './TodoCard.css'
import { useState } from 'react';
const TodoCard=({data,deleteHandler,editHandler,taskId})=>{
    const{text}=data;
    const [edit,setEdit]=useState(false);
    const [newGoal,setNewGoal]=useState({text:data.text});


    const handleSubmit=(e)=>{
        e.preventDefault();
        editHandler(newGoal.text,taskId);
        setEdit(false);
    }
    return (

        <div className='conatiner-todos'>
             <div className='todos'>
            <div className="goal">
                {
                    edit?(
                        <form action="" onSubmit={handleSubmit}>
                            <input type="text" value={newGoal.text} onChange={(e)=>setNewGoal({text:e.target.value})}/>
                            <button> Save</button>
                        </form>
                    ):
                
                <li>{text}</li>
    }
            </div>
            <div className="btn-container">
                <button  data-taskid={taskId} onClick={deleteHandler}>delete</button>
                <button onClick={()=>setEdit(true)}>edit</button>
            </div>
        </div>
        </div>
                    
    )
}
export default TodoCard;