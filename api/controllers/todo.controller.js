const Todo = require('../models/todo.model')

// Create and Save a new Todo
exports.create = (req, res) => {
  const { title = '', subtitle = '', description = '', color = '' } = req.body
  // Validate request
  if (!title || !description) {
    res.status(400).send({ message: 'title, description can not be empty!' })
  }

  // Create a Todo
  const todo = new Todo({
    title: title,
    subtitle: subtitle ? subtitle : undefined,
    description: description,
    color: color ? color : undefined,
  })

  // Save Todo in the database
  todo
    .save(todo)
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the Todo.',
      })
    })
}

// Retrieve all Todos from the database.
exports.findAll = (req, res) => {
  Todo.find({})
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving todos.',
      })
    })
}

// Find a single Todo with an id
exports.findOne = (req, res) => {
  const id = req.params.id

  Todo.findById(id)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: 'Not found Todo with id ' + id })
      else res.send(data)
    })
    .catch((err) => {
      res.status(500).send({ message: 'Error retrieving Todo with id=' + id })
    })
}

// Update a Todo by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: 'Data to update can not be empty!',
    })
  }

  const id = req.params.id
  const todo = req.body

  Todo.findByIdAndUpdate(id, todo)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Todo with id=${id}. Maybe Todo was not found!`,
        })
      } else res.send({ message: 'Todo was updated successfully.' })
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error updating Todo with id=' + id,
      })
    })
}

// Delete a Todo with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id

  Todo.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Todo with id=${id}. Maybe Todo was not found!`,
        })
      } else {
        res.send({
          message: 'Todo was deleted successfully!',
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Could not delete Todo with id=' + id,
      })
    })
}

// Delete all Todos from the database.
exports.deleteAll = (req, res) => {
  Todo.deleteMany({})
    .then((data) => {
      res.send({
        message: `${data.deletedCount} Todos were deleted successfully!`,
      })
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while removing all todos.',
      })
    })
}
