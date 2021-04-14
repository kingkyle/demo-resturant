<template>
  <Hero @menu-select="handleContent" />
  <SubHeader />
  <div class="container">
    <div class="main">
      <div class="content">
        <Content />
      </div>
      <div class="cart">
        <Cart />
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Hero from "../components/Hero/Hero";
import SubHeader from "../components/Header/SubHeader";
import Footer from "../components/Header/Footer";
import { apiData } from "../utils/apiData";
import { computed } from "@vue/runtime-core";
export default {
  name: "Home",
  components: {
    Hero,
    SubHeader,
    Footer,
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
