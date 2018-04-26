export default {
  name: 'todo',
  components: {},
  props: [],
  data() {
    return {
      todos: null,
      newItem: null
    }
  },
  computed: {

  },
  mounted() {

  },
  methods: {
    async add() {
      try {
        let addedItem = await this.$http.post(`http://localhost:3000/todos`, {
          value: this.newItem
        })
        this.todos.push(addedItem.data)
        this.newItem = null
      } catch (error) {
        console.log(error);
      }
    },
    async remove(index, id) {
      try {
        await this.$http.delete(`http://localhost:3000/todos/` + id)
        this.todos.splice(index, 1)
      } catch (error) {
        console.log(error);
      }
    }
  },

  async created() {
    try {
      let response = await this.$http.get("http://localhost:3000/todos");
      console.log(response.data);
      this.todos = response.data;
    } catch (error) {
      console.log(error);
    }
  }
}
