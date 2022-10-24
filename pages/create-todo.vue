<template>
  <v-row>
    <v-col class="text-center">
      <template>
        <v-form ref="form" v-model="valid">
          <v-text-field
            v-model="form.title"
            :counter="20"
            :rules="titleRules"
            label="Title"
            required
          ></v-text-field>

          <v-text-field
            v-model="form.subtitle"
            :counter="40"
            :rules="subtitleRules"
            label="Subtitle"
            required
          ></v-text-field>

          <v-textarea
            v-model="form.description"
            :counter="200"
            :rules="descriptionRules"
            label="Description"
            required
          ></v-textarea>

          <v-select
            v-model="form.color"
            :items="items"
            :rules="[(v) => !!v || 'Color is required']"
            label="Color"
            required
          ></v-select>
          <v-card-actions>
            <v-btn color="error" class="mr-4" @click="reset">
              Reset Form
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn
              :disabled="!valid"
              color="info"
              class="mr-4"
              @click="submit"
            >
              Submit
            </v-btn>
          </v-card-actions>
        </v-form>
      </template>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'CreateTodo',
  data: () => ({
    valid: true,
    form: {
      color: 'red',
    },
    titleRules: [
      (v) => !!v || 'Title is required',
      (v) => (v && v.length <= 20) || 'Title must be less than 20 characters',
    ],
    subtitleRules: [
      (v) => !!v || 'Subtitle is required',
      (v) =>
        (v && v.length <= 40) || 'Subtitle must be less than 40 characters',
    ],
    descriptionRules: [
      (v) => !!v || 'Description is required',
      (v) =>
        (v && v.length <= 200) || 'Subtitle must be less than 200 characters',
    ],
    items: ['red', 'green', 'blue', 'pink'],
  }),

  methods: {
    async submit() {
      await this.$store.dispatch('createTodo', this.form)
      this.$router.push('/')
    },
    reset() {
      this.$refs.form.reset()
    },
  },
}
</script>
