export default {
  namespace: true,
  //data
  state: {
    todos: [
      { id: 1, text: "buy a car1", checked: false },
      { id: 2, text: "buy a car2", checked: false },
      { id: 3, text: "buy a car3", checked: false },
    ],
  },
  //action에서 보내오는 데이터를 mutation을 통해 state의 데이터를 변경
  mutations: {
    ADD_TODO(state, value) {
      state.todos.push({
        id: Math.random(),
        text: value,
        checked: false,
      });
    },
    TOGGLE_TODO(state, payload) {
      const index = state.todos.findIndex((todo) => {
        return todo.id === payload.id;
      });
      state.todos[index].checked = payload.checked;
    },
    DELETE_TODO(state, todoId) {
      state.todos = state.todos.filter((todo) => todo.id !== todoId);
    },
  },
  //methods
  actions: {
    addTodo({ commit }, value) {
      setTimeout(() => {
        commit("ADD_TODO", value);
      }, 1000);
    },
    toggleTodo({ commit }, payload) {
      setTimeout(() => {
        commit("TOGGLE_TODO", payload);
      }, 1000);
    },
    deleteTodo({ commit }, todoId) {
      setTimeout(() => {
        commit("DELETE_TODO", todoId);
      }, 1000);
    },
  },
  //computed
  getters: {
    numberOfCompletedTodo: (state) => {
      return state.todos.filter((todo) => todo.checked).length;
    },
  },
};
