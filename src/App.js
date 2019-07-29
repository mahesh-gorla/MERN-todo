/* eslint-disable jsx-a11y/anchor-has-content */
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
				<h2>MERN-Stack App</h2>
				<p>
					It's a Todo application made by{' '}
					<a
						className='navbar-brand'
						href='https://mahesh-portfolio.netlify.com/'
						target='_blank'
					>
						Mahesh
					</a>
				</p>
				<nav className='navbar navbar-expand-sm navbar-light bg-light'>
					<div className='collapse navbar-collapse' id='navbarSupportedContent'>
						<ul className='navbar-nav mr-auto'>
							<li className='navbar-item active'>
								<Link to='/' className='nav-link mr-auto'>
									Todos
								</Link>
							</li>
							<li className='navbar-item'>
								<Link to='/edit/1' className='nav-link mr-auto'>
									Edit
								</Link>
							</li>
							<li className='navbar-item'>
								<Link to='/create' className='nav-link mr-right'>
									Create
								</Link>
							</li>
						</ul>
					</div>
				</nav>
			</div>
			<Route path='/' exact component={TodosList} />
			<Route path='/edit/:id' component={EditTodo} />
			<Route path='/create' component={CreateTodo} />
		</Router>
	);
}

export default App;
