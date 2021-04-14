<template>
  <div class="featured">
    <h2><span class="c-red">Featured</span> Items</h2>
    <p class="text-muted text-sm">Vendors featured items</p>
    <br />
    <div class="featured-list">
      <div v-for="card in featuredList" class="list-item" :key="card.title">
        <Card :card="card" />
      </div>
    </div>
  </div>
</template>

<script>
import Card from "./Card";
export default {
  name: "Featured",
  components: {
    Card,
  },
  data() {
    return {
      featuredList: [],
    };
  },
  inject: ["demoData"],
  created() {
    this.featuredList = this.demoData.value.featured_items;
  },
};
</script>

<style lang="scss" scoped>
.featured {
  margin-top: 1.2em;
}
.featured-list {
  overflow-x: auto;
  display: flex;
  .list-item {
    width: 85%;
    margin-right: 1em;
  }
}
</style>
