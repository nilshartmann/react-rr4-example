import React from 'react';
import ReactDOM from 'react-dom';

class TodoList extends React.Component {
	constructor() {
		super();

		// initialize state with some todos
		this.state = {
			todos: [
				{
					id: 1,
					description: 'Write React Example',
					prio: 1
				},
				{
					id: 2,
					description: 'Refactor React Example',
					prio: 1
				},
				{
					id: 3,
					description: 'Make sure list works',
					prio: 1
				}
			]
		}
	}

	updateTodo(todoId) {
		// increase the todo with the specified id
		const newTodos = this.state.todos.map(todo => {
			return todo.id === todoId ?
				// selected Todo: increase prio
				{  id: todo.id, description: todo.description, prio: todo.prio + 1 }
				:
				// 'other' todo: return unchanged
				todo;
		});

		this.setState({todos: newTodos});
	}

	render() {
		return (
			<div>
				<ol>
					{this.state.todos.map(todo => <li key={todo.id}>{todo.description} Prio: {todo.prio} (id: {todo.id})</li>)}
				</ol>
				<button onClick={() => this.updateTodo(1)}>Increase Prio on Todo 1</button>
				<button onClick={() => this.updateTodo(2)}>Increase Prio on Todo 2</button>
				<button onClick={() => this.updateTodo(3)}>Increase Prio on Todo 3</button>
			</div>
		);
	}
}

ReactDOM.render(<TodoList />, document.getElementById('mount'));
