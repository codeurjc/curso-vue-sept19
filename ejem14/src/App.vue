<template>
  <div>
    <input type="text" v-model="name" />
    <br>
    <textarea v-model="name"></textarea>
    <p>{{name}}</p>

    <br>

    <input type="checkbox" v-model="vue" /> Vue
    <input type="checkbox" v-model="javascript" /> JS

    <br>

    <span v-for="item in items" :key="item.id">
      <input type="checkbox" v-model="item.selected" />
      {{item.value}}
    </span>

    <input type="radio" name="gender" v-model="gender" value="Male"> Male
    <input type="radio" name="gender" v-model="gender" value="Female"> Female

  </div>
</template>

<script>
export default {
  name: "app",
  data: function() {
    return {
      name: "",
      vue: true,
      javascript: false,
      items: [
        { id:0, value: "Item1", selected: true },
        { id:1, value: "Item2", selected: false }
      ],
      gender: "Female"
    };
  },
  methods: {
    update: function(city){
      // eslint-disable-next-line
      console.log(city);
    }
  }
};
</script>