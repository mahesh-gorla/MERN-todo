import React, { Component } from 'react';
import axios from 'axios';

export default class CreateTodo extends Component {
	onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
	onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this);
	onChangePriority = this.onChangePriority.bind(this);
	onSubmit = this.onSubmit.bind(this);
	state = {
		todo_description: ' ',
		todo_responsible: ' ',
		todo_priority: ' ',
		todo_compleated: false
	};
	onChangeTodoDescription(e) {
		this.setState({
			todo_description: e.target.value
		});
	}
	onChangeTodoResponsible(e) {
		this.setState({
			todo_responsible: e.target.value
		});
	}
	onChangePriority(e) {
		this.setState({
			todo_priority: e.target.value
		});
	}
	onChangeTodoCompleted(e) {
		this.setState({
			todo_compleated: !this.state.todo_compleated
		});
	}
	onSubmit(e) {
		e.preventDefault();
		console.log(`Form submitted:`);
		console.log(`Todo Descriptiom: ${this.state.todo_description}`);
		console.log(`Todo Responsible: ${this.state.todo_responsible}`);
		console.log(`Todo Priority: ${this.state.todo_priority}`);
		console.log(`Todo Compleated: ${this.state.todo_compleated}`);

		const newTodo = {
			todo_description: this.state.todo_description,
			todo_responsible: this.state.todo_responsible,
			todo_priority: this.state.todo_priority,
			todo_compleated: this.state.todo_compleated
		};

		axios.post('http://localhost:4000/todos/add', newTodo).then(res => {
			console.log(res.data);
		});
		this.setState({
			todo_description: ' ',
			todo_responsible: ' ',
			todo_priority: ' ',
			todo_compleated: false
		});
	}
	render() {
		return (
			<div className='container'>
				<div style={{ marginTop: 20 }}>
					<h3>Create new Todo</h3>
					<form onSubmit={this.onSubmit}>
						<div className='form-group'>
							<label>Description:</label>
							<input
								type='text'
								className='form-control'
								value={this.state.todo_description}
								onChange={this.onChangeTodoDescription}
							/>
						</div>
						<div className='form-group'>
							<label>Responsible:</label>
							<input
								type='text'
								className='form-control'
								value={this.state.todo_responsible}
								onChange={this.onChangeTodoResponsible}
							/>
						</div>
						<div className='form-group'>
							<div className='form-check form-check-inline'>
								<input
									className='form-check-input'
									type='radio'
									name='priorityOptions'
									id='priorityLow'
									value='Low'
									checked={this.state.todo_priority === 'Low'}
									onChange={this.onChangePriority}
								/>
								<label className='form-check-label'>Low</label>
							</div>
							<div className='form-check form-check-inline'>
								<input
									className='form-check-input'
									type='radio'
									name='priorityOptions'
									id='priorityMedium'
									value='Medium'
									checked={this.state.todo_priority === 'Medium'}
									onChange={this.onChangePriority}
								/>
								<label className='form-check-label'>Medium</label>
							</div>
							<div className='form-check form-check-inline'>
								<input
									className='form-check-input'
									type='radio'
									name='priorityOptions'
									id='priorityHigh'
									value='High'
									checked={this.state.todo_priority === 'High'}
									onChange={this.onChangePriority}
								/>
								<label className='form-check-label'>High</label>
							</div>
						</div>
						<div className='form-group'>
							<input
								type='submit'
								value='Create Todo'
								className='btn btn-primary'
							/>
						</div>
					</form>
				</div>
			</div>
		);
	}
}
