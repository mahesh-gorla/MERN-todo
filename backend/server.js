const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const todoRoutes = express.Router();
const PORT = 4000;
const mongoose = require('mongoose');
let Todo = require('./todoModel');
app.use(cors());
app.use(bodyParser.json());
mongoose.connect(
	'mongodb+srv://mahesh123:mahesh123@cluster0-2hkh1.mongodb.net/test?retryWrites=true&w=majority',
	{ useNewUrlParser: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
	console.log(`MongoDB connected succesfully..`);
});

todoRoutes.route('/').get((req, res) => {
	Todo.find((err, todos) => {
		if (err) {
			console.log(err);
		} else {
			res.json(todos);
		}
	});
});
todoRoutes.route('/:id').get((req, res) => {
	let id = req.params.id;
	Todo.findById(id, (err, todo) => {
		res.json(todo);
	});
});

todoRoutes.route('/add').post((req, res) => {
	let todo = new Todo(req.body);
	todo
		.save()
		.then(todo => {
			res.status(200).json({ todo: 'todo added succesfully' });
		})
		.catch(err => {
			res.status(400).send('adding new todo failed');
		});
});
todoRoutes.route('/update/:id').post((req, res) => {
	Todo.findById(req.params.id, (err, todo) => {
		if (!todo) res.status(404).send('data is not found');
		else {
			todo.todo_description = req.body.todo_description;
			todo.todo_responsible = req.body.todo_responsible;
			todo.todo_priority = req.body.todo_priority;
			todo.todo_compleated = req.body.todo_compleated;

			todo
				.save()
				.then(todo => {
					res.json('Todo updated');
				})
				.catch(err => {
					res.status(400).send('Update not Possible');
				});
		}
	});
});
app.use('/todos', todoRoutes);

app.listen(PORT, () => {
	console.log(`Server started at port ${PORT}`);
});
