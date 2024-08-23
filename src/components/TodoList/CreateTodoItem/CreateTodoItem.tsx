import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { TodoItemData } from '../../../TodoStore';

import './CreateTodoItem.css'

interface CreateTodoModalProps {
  onSave: (newTodo: TodoItemData) => void;
  onClose: () => void;
}

const CreateTodoModal: React.FC<CreateTodoModalProps> = observer(({ onSave, onClose }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');

    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    }
    const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(event.target.value);
    }
    const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDate(event.target.value);
    }

    const handleSave = () => {
    const newTodo: TodoItemData = {
        id: Date.now(),
        title: title,
        description: description,
        deadline: date,
        isActive: true,
    };
    onSave(newTodo);
    handleClose();
    };

    const handleClose = () => {
    setTitle('');
    setDescription('');
    onClose();
    };

    return (
    <div className="modal">
        <div className="modal-wrapper">
        <div className="modal-content">
            <span className="close" onClick={handleClose}>
            &times;
            </span>
            <div className="modal-data-inputs">
                <div className="data-title">
                    <p>название todo:</p>
                    <input value={title} type="text" onChange={handleTitleChange} className="title-input" id="title-input" placeholder="todo title" />
                </div>
                <div className="data-description">
                    <p>описание todo:</p>
                    <textarea value={description} className="description-textarea" onChange={handleDescriptionChange} id="description-textarea" placeholder="todo description" />
                </div>
                <div className="data-date">
                    <p>дедлайн todo:</p>
                    <input value={date} type="date" onChange={handleDateChange} className="date-input" id="date-input" placeholder="todo date" />
                </div>
            </div>
            <button className='modal-add-todo' onClick={handleSave}>Добавить</button>
            </div>
        </div>
    </div>
    );
});

export default CreateTodoModal;