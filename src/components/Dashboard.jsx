import CreateTodo from "./CreateTodo"
import ShowTodo from "./ShowTodolist"
import './Dashboard.css'
const Dashboard=()=>{
    return (
        <div className="dashboard">
        <CreateTodo/>
        <ShowTodo/>
        </div>
    )
}
export default Dashboard;