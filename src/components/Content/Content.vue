<template>
  <Promo />
  <Featured />
  <div v-for="category in contentList" :key="category.id">
    <div v-for="card in category" :key="card.id">
      <Category
        :title="card.name"
        :desc="card.description"
        :categoryList="card.data"
        :id="`cuisine-${card.id}`"
      />
    </div>
  </div>
</template>

<script>
import Featured from "./Featured";
import Promo from "./Promo";
import Category from "./Category";
import { groupBy } from "../../utils/common";
export default {
  name: "Content",
  components: {
    Promo,
    Featured,
    Category,
  },
  data() {
    return {
      categoryList: [],
    };
  },
  inject: ["demoData", "contentData"],
  computed: {
    contentList() {
      const popularItems = this.contentData.value.data;
      const res = groupBy("name")(popularItems);
      for (const i in res) {
        const data = this.demoData.value.items.filter(
          (c) => c.cuisine_id == res[i][0].id
        );
        res[i][0].data = data;
      }
      return res;
    },
  },
};
</script>
