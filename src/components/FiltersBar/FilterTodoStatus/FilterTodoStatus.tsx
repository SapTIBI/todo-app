import React, { useState } from 'react';
import './FilterTodoStatus.css';

interface FilterTodoStatusProps {
  onFilterChange: (filter: 'all' | 'active' | 'completed') => void;
}

const FilterTodoStatus: React.FC<FilterTodoStatusProps> = ({ onFilterChange }) => {
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

  const handleFilterChange = (newFilter: 'all' | 'active' | 'completed') => {
    setFilter(newFilter);
    onFilterChange(newFilter);
  };

  return (
    <div className="filter-todo-status">
        <h3>Статус:</h3>
        <div className="filter-circles">
        <div
            className={`filter-circle ${filter === 'all' ? 'active' : ''}`}
            onClick={() => handleFilterChange('all')}
            style={{ backgroundColor: '#ccc' }}
        />
        <div
            className={`filter-circle ${filter === 'completed' ? 'active' : ''}`}
            onClick={() => handleFilterChange('completed')}
            style={{ backgroundColor: '#F1DADD' }}
        />
        <div
            className={`filter-circle ${filter === 'active' ? 'active' : ''}`}
            onClick={() => handleFilterChange('active')}
            style={{ backgroundColor: '#D3F9C6' }}
        />
        </div>
    </div>
  );
};

export default FilterTodoStatus;