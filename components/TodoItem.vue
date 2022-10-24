<!-- Please remove this file from your project -->
<template>
  <v-card>
    <v-progress-linear
      value="100"
      height="20"
      :color="todo.color"
    ></v-progress-linear>

    <v-card-title> {{ todo.title }} </v-card-title>

    <v-card-subtitle> {{ todo.subtitle }} </v-card-subtitle>

    <v-card-text> {{ todo.description }} </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="error" @click="deleteOneTodo(todo._id)">Delete</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'TodoItem',
  props: {
    todo: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    async deleteOneTodo(id) {
      await this.$store.dispatch('deleteOneTodo', { id: id })
    },
  },
}
</script>
