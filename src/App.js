import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodosList from './components/todo-list-component';
import EditTodo from './components/edit-todo-component';
import CreateTodo from './components/create-todo-component.js';

function App() {
	return (
		<Router>
			<div className='container'>
				<h2>MERN-Stack Todo App</h2>
				<p>It's a Todo application made by Mahesh</p>
				<nav className='navbar navbar-expand-lg navbar-light bg-light'>
					<span>
						<Link to='/'>MERN Todo App</Link>
					</span>
					<div className='collapse nav-collapse'>
						<ul className='navbar-nav mr-auto'>
							<li className='navbar-item'>
								<Link to='/' className='nav-link'>
									Todos
								</Link>
							</li>
							<li className='navbar-item'>
								<Link to='/create' className='nav-link'>
									Create Todo
								</Link>
							</li>
						</ul>
					</div>
				</nav>
			</div>
			<Route path='/' component={TodosList} />
			<Route path='/edit/:id' component={EditTodo} />
			<Route path='/create' component={CreateTodo} />
		</Router>
	);
}

export default App;
