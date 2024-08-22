import React, { useState } from 'react';
import './FiltersBar.css';
import FilterTodoStatus from './FilterTodoStatus/FilterTodoStatus';

interface FiltersBarProps {
  todoItemsList: TodoItemData[];
  onFilterChange: (filterStatus: 'all' | 'active' | 'completed') => void;
}

interface TodoItemData {
  title: string;
  description: string;
  deadline: string;
  isActive: boolean;
}

const FiltersBar: React.FC<FiltersBarProps> = ({ todoItemsList, onFilterChange }) => {
  const [filterStatus, setFilterStatus] = useState<'all' | 'active' | 'completed'>('all');

  const handleFilterChange = (newFilterStatus: 'all' | 'active' | 'completed') => {
    setFilterStatus(newFilterStatus);
    onFilterChange(newFilterStatus);
  };

  return (
    <div className="filters-bar">
      <FilterTodoStatus onFilterChange={handleFilterChange} />
    </div>
  );
};

export default FiltersBar;