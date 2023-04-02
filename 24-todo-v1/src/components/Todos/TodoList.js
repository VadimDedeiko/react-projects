import Todo from "./Todo";
import styles from './TodoList.module.css'
function TodoList({todos, deleteTodo}) {
  return (
    <div className={styles.todoListContainer}>
      {!todos.length && <h2>Todo List is Empty</h2>}
      {todos.map((todo, index) =>
        <Todo key={index} todo={todo} index={index} deleteTodo={deleteTodo}></Todo>)}
    </div>
  )
}

export default TodoList;
