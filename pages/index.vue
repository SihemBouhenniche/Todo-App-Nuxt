<template>
  <section>
    <h1 class="text-h3">Todos list</h1>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="info" nuxt to="/create-todo">Create Todo</v-btn>
      <v-btn color="error" @click="deleteTodos">Delete All</v-btn>
    </v-card-actions>
    <v-row class="mt-4">
      <v-col v-for="(todo, i) in todos" :key="i" cols="12" sm="6" md="4" lg="3">
        <todo-item :todo="todo"></todo-item>
      </v-col>
    </v-row>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'IndexPage',
  fetchOnServer: false,
  async fetch() {
    await this.$store.dispatch('loadTodos')
  },
  computed: {
    ...mapGetters({
      todos: 'getTodos',
    }),
  },
  methods: {
    async deleteTodos() {
      await this.$store.dispatch('deleteTodos')
    },
  },
}
</script>
