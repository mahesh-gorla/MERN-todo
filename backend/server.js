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
mongoose.connect('mongodb://127.0.0.1:27017/todos', { useNewUrlParser: true });
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
    todo.save()
    .then(todo => {
		res.status(200).json({ todo: 'todo added succesfully' });
    });
    .catch(err => {
        res.status(400).send('adding new todo failed')
    });
    
});
app.use('/todos', todoRoutes);

app.listen(PORT, () => {
	console.log(`Server started at port ${PORT}`);
});
