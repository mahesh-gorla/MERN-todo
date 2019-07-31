import React, { Component } from 'react';
import axios from 'axios';
import Todo from './todo';
export default class TodoList extends Component {
	state = {
		todos: []
	};
	componentDidMount() {
		axios
			.get('http://localhost:4000/todos/')
			.then(res => {
				this.setState({
					todos: res.data
				});
			})
			.catch(err => {
				console.log(err);
			});
	}
	todoList() {
		return this.state.todos.map((todo, index) => {
			return <Todo todo={todo} key={index} />;
		});
	}
	render() {
		return (
			<div className='container'>
				<h3>Todos List</h3>
				<table className='table table-striped' style={{ marginTop: 20 }}>
					<thead>
						<tr>
							<th>Description</th>
							<th>Responsibility</th>
							<th>Priority</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>{this.todoList()}</tbody>
				</table>
			</div>
		);
	}
}
