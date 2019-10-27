<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ message }}</h2>
    <h3>{{ value }}</h3>
  </div>
</template>

<script lang="ts">
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    val: [Number, String],
  },
  computed: {
    message(): string {
      return this.msg;
    },
    value(): string | number {
      return this.val;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
