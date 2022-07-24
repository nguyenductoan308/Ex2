import React from 'react';
import TodoItem from '../Todo_Item/todoItem';
import PropTypes from 'prop-types';
import './style.css'

TodoList.propTypes = {
    
};

function TodoList(props) {
    return (
        <div className='card__group'>
            <TodoItem title={'Task 1'} creator={'Toan'} desc={'This a task This a task This a task This a task..'} />
            <TodoItem title={'Task 2'} creator={'Nam'} desc={'This a task This a task This a task This a task..'} />
            <TodoItem title={'Task 3'} creator={'Vũ'} desc={'This a task This a task This a task This a task..'} />
            <TodoItem title={'Task 4'} creator={'Mẫn'} desc={'This a task This a task This a task This a task..'} />
        </div>
    );
}

export default TodoList; 
