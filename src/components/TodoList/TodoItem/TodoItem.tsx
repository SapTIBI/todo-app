import { useEffect, useState } from 'react';
import './TodoItem.css'

interface TodoItemData {
    title: string;
    description: string;
    deadline: string;
    isActive: boolean;
}

interface TodoItemProps {
    data: TodoItemData;
    onDelete: () => void
}

const TodoItem:  React.FC<TodoItemProps> = ({data, onDelete}) => {
// const TodoItem = (data: TodoItem, onDelete: () => void) => {

    const [isActive, setIsActive] = useState(data.isActive);
    const handleComplete = () => {
        setIsActive(false);
    };

    const itemClass = isActive ? 'todo-isActive' : 'todo-isNotActive';
    return (
        <div className={`todo-item ${itemClass}`}>
            <div className="todo-item-wrapper">
                <div className="todo-label">
                    <h4>todo: </h4>
                    {data.title}
                </div>
                <div className="todo-description">
                    <h4>доп.описание: </h4>
                    {data.description}
                </div>
                <div className="todo-other-info">
                    <div className="other-info">
                        <div className="status-info">
                            <h4>статус: </h4>
                            {isActive ? 'не завершено' : 'завершено'}
                        </div>
                        <div className="deadline-info">
                            <h4>дедлайн: </h4>
                            {data.deadline} 
                        </div>
                    </div>
                    <div className="todo-item-buttons">
                        {isActive && ( 
                            <button onClick={handleComplete}>
                                <img className='todo-item-btn' src='/Check.png' alt="Check" />
                            </button>
                        )}
                        <button onClick={onDelete}><img className='todo-item-btn' src='/delete.png'/></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TodoItem