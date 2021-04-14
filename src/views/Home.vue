<template>
  <Hero />
  <SubHeader />
</template>

<script>
import Hero from "../components/Hero/Hero";
import SubHeader from "../components/Header/SubHeader";
import { apiData } from "../utils/apiData";
import { computed } from "@vue/runtime-core";
export default {
  name: "Home",
  components: {
    Hero,
    SubHeader,
  },
  data() {
    return { storeData: null, content: null };
  },
  beforeMount() {
    this.storeData = apiData;
    this.content = apiData.all_data[0];
  },
  provide() {
    return {
      demoData: computed(() => this.storeData),
      contentData: computed(() => this.content),
    };
  },
};
</script>

<style lang="scss" scoped></style>
