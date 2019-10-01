<template>
  <div>
    <p>Using mustaches: {{ rawHtml }}</p>
    <p>
      Using v-html directive:
      <span v-html="rawHtml"></span>
    </p>

    <p v-if="visible">Text</p>
    <p v-if="num == 3">Num 3</p>

    <div v-if="isValid">valid content</div>
    <div v-else>invalid content</div>

    <div v-if="type === 'A'">A</div>
    <div v-else-if="type === 'B'">B</div>
    <div v-else-if="type === 'C'">C</div>
    <div v-else>Not A/B/C</div>

    <template v-if="ok">
      <h1>Title</h1>
      <p>Paragraph 1</p>
      <p>Paragraph 2</p>
    </template>

    <div>    
    <p>Filtered</p>
    <div v-for="elem in filteredElems" :key="elem.id">{{elem.desc}}</div>
    </div>

    <div>
    <p>All</p>
    <div v-for="elem in elems" :key="elem.id">{{elem.desc}}</div>
    </div>

    <p>List</p>
    <ul v-if="elems.length">
      <li v-for="elem in elems" :key="elem.id">{{elem.desc}}</li>
    </ul>
    <p v-else>No elems!</p>

  </div>
</template>

<script>
export default {
  name: "app",
  data: () => {
    return {
      rawHtml: '<span style="color:red">This should be red.</span>',
      visible: true,
      num: 3,
      isValid: true,
      elems: [
        { id: 0, desc: "Elem1", checked: true },
        { id: 1, desc: "Elem2", checked: true },
        { id: 2, desc: "Elem3", checked: false }
      ],
      type: "A",
      ok: false
    };
  },
  computed: {
      filteredElems: function(){ 
        return this.elems.filter(elem => elem.checked);
      }
  },
  methods: {
    setName: function(name) {
      this.name = name;
    }
  }
};
</script>