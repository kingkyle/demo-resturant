<template>
  <div class="category mt-3" :id="id">
    <h2>{{ title }}</h2>
    <p class="text-muted text-sm">{{ desc ? desc : title }}</p>
    <br />
    <div class="category-list">
      <div v-for="card in categoryList" class="list-item" :key="card.title">
        <Card :card="card" />
      </div>
    </div>
  </div>
</template>

<script>
import Card from "./Card";
export default {
  name: "Category",
  inject: ["demoData"],
  components: {
    Card,
  },
  props: {
    title: String,
    desc: { type: String },
    categoryList: Array,
    id: String,
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.category-list {
  .list-item {
    width: 100%;
    margin-bottom: 0.5em;
  }
}
</style>
