import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './TodoList.scss';

export class TodoList extends React.Component {
  state = {
    title: '',
    completed: 'all',
  };

  render() {
    const { todos, selectUser, selectedUserId } = this.props;
    const { completed } = this.state;

    const filteredTodos = todos
      .filter(todo => todo.title && todo.title.toLowerCase()
        .includes(this.state.title.toLowerCase()))
      .filter((todo) => {
        if (completed === 'completed') {
          return todo.completed;
        }

        if (completed === 'uncompleted') {
          return !todo.completed;
        }

        return todo;
      });

    return (
      <div className="TodoList">
        <h2>Todos:</h2>

        <div className="TodoList__list-container">
          <form className="d-flex gap-3 mb-3 ms-5">
            <input
              type="text"
              value={this.state.title}
              placeholder="Title"
              onChange={(event) => {
                this.setState({
                  title: event.target.value,
                });
              }}
            />
            <select
              name="todos"
              value={this.state.completed}
              onChange={(event) => {
                this.setState({ completed: event.target.value });
              }}
            >
              <option value="all">All</option>
              <option value="uncompleted">uncompleted</option>
              <option value="completed">Completed</option>
            </select>
          </form>
          <ul className="TodoList__list">
            {filteredTodos.map(todo => (
              <li
                key={todo.id}
                className={classNames('TodoList__item',
                  {
                    'TodoList__item--checked': todo.completed,
                    'TodoList__item--unchecked': !todo.completed,
                  })}
              >
                <label>
                  <input type="checkbox" checked={todo.completed} />
                  <p>{todo.title}</p>
                </label>

                <button
                  type="button"
                  className={
                    classNames('button', 'TodoList__user-button',
                      { 'TodoList__user-button--selected':
                    todo.userId === selectedUserId })
                    }
                  onClick={() => {
                    selectUser(todo.userId);
                  }}
                >
                  User&nbsp;#
                  {todo.userId}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      userId: PropTypes.number,
      id: PropTypes.number,
      title: PropTypes.string,
      completed: PropTypes.bool,
    }),
  ).isRequired,
  selectUser: PropTypes.func.isRequired,
  selectedUserId: PropTypes.number.isRequired,
};
