<template>
  <div>
    <input
      type="text"
      class="w-100 p-2"
      placeholder="Type Todo"
      @keyup.enter="addTodo"
      v-model="todoText"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      todoText: "",
    };
  },
  methods: {
    addTodo(e) {
      this.$store.dispatch("todo/addTodo", e.target.value);
      //   this.$store.commit("ADD_TODO", e.target.value);
      //   this.$emit("add-todo", {
      //     id: Math.random(),
      //     text: e.target.value,
      //     checked: false,
      //   });
      this.todoText = "";
    },
  },
};
</script>

<style></style>
