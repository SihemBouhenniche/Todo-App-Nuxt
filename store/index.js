// TODO : Let suppoose that we have backend and it returns these lists
export const state = () => ({
  todos: [],
})

// contains your actions
export const actions = {
  async loadTodos({ commit }) {
    //const todos = require('~/utils/todos.utils').todos
    const todos = await this.$axios.$get('/api/todos')
    commit('setTodos', todos)
  },
  async createTodo({ commit }, paylod) {
    const todo = await this.$axios.$post('/api/todos', paylod)
    commit('pushTodo', todo)
  },
  async deleteTodos({ commit }) {
    await this.$axios.$delete('/api/todos')
    commit('setTodos', [])
  },
  async deleteOneTodo({ commit }, paylod) {
    await this.$axios.$delete(`/api/todos/${paylod.id}`)
    commit('popTodo', paylod.id)
  },
}
// contains your mutations
export const mutations = {
  setTodos(state, value) {
    state.todos = value
  },
  pushTodo(state, value) {
    state.todos.push(value)
  },
  popTodo(state, value) {
    const objWithIdIndex = state.todos.findIndex((obj) => obj.id === value)
    state.todos.splice(objWithIdIndex, 1)
  },
}
// your root getters
export const getters = {
  getTodos(state) {
    return state.todos
  },
}
