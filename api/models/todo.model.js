const mongoose = require('mongoose')

const TodoSchema = mongoose.Schema(
  {
    title: String,
    subtitle: String,
    description: String,
    color: String,
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Todo', TodoSchema)
