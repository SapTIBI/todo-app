import { useEffect, useState } from 'react';
import TodoItem from './TodoItem/TodoItem';
import './TodoList.css'


interface TodoItemData {
    id: number;
    title: string;
    description: string;
    deadline: string;
    isActive: boolean;
}

interface TodoListProps {
    todoItemsList: TodoItemData[];
}

const TodoList: React.FC<TodoListProps> = ({ todoItemsList}) => {

    const [todos, setTodos] = useState<TodoItemData[]>(todoItemsList);

    const handleDelete = (index: number) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    };
    return (
        <div className="todo-content">
            <div className="todo-settings-part">
                <div className="create-new-todo">
                    <button className='createNewBtn'>Создать новый пост</button>
                </div>
                <div className="todo-filters">
                    <h3>Фильтры</h3>
                    <div className="isActive-filter">
                        <h4>Сделано</h4>

                    </div>
                </div>
            </div>
            <div className="todo-list">
                {todos.map( (todoitem, index) => {
                return (
                    <TodoItem 
                    key={todoitem.id}
                    data={todoitem}
                    onDelete={() => handleDelete(index)} 
                    />
                )})}
            </div>
           
                
        </div>
    );
}

export default TodoList