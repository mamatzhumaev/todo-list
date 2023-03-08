import TodoForm from "./todo-form/todo-form";
import TodoList from "./todo-list/todo-list";

const Home = () => {
    return (
        <div className="Home">
            Home
            <TodoForm />
            <TodoList />
        </div>
    )
}

export default Home
