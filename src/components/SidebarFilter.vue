<template>
  <p class="text-decoration-none">
    <a
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseExample"
        aria-expanded="false"
        aria-controls="collapseExample"
    >main_colour</a
    >
  </p>
  <div class="collapse" id="collapseExample">
    <ul class="list-group list-group-flush">
      <li class="list-group-item border-0" v-for="color in main_colour" :key="color">
        <div class="form-check">
          <input
              class="form-check-input"
              type="checkbox"
              :value="color"
              :id="color"
              v-model="checkedCategories"
              @change="$emit('filterChange', makeFilter())"
          />
          <label class="form-check-label" :for="color"> {{ color }} </label>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SidebarFilter",
  emits: ["filterChange"],
  data() {
    return {
      checkedCategories: [],
      main_colour: ["red", "green", "Bachelor"],
      styles: ["Loft", "Bachelor", "Provence", "Scandinavian", "Modern", "Hi-Tech", "Mediterranian"],
    };
  },
  methods: {
    makeFilter: function () {
      let filterString = "";
      for (const colour of this.checkedCategories) {
        filterString = filterString + "%2C" + colour.toLowerCase();
      }
      const l = filterString.slice(3)
      return "?colours=" + l;
    },
  },
}

</script>

<style scoped></style>