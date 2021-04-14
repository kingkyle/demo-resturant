<template>
  <div v-if="!loading">
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
  </div>
  <Footer />
</template>

<script>
import Hero from "../components/Hero/Hero";
import SubHeader from "../components/Header/SubHeader";
import Content from "../components/Content/Content";
import Footer from "../components/Header/Footer";
import Cart from "../components/Content/Cart";
import { apiData } from "../utils/apiData";
import { computed } from "@vue/runtime-core";
export default {
  name: "Home",
  components: {
    Hero,
    SubHeader,
    Content,
    Cart,
    Footer,
  },
  data() {
    return { storeData: null, content: null, loading: false };
  },
  async beforeMount() {
    this.loading = true;
    try {
      const res = await fetch(
        "https://us-central1-grigora-alt.cloudfunctions.net/details",
        { mode: "no-cors" }
      );
      const data = await res.json();
      this.storeData = data;
      this.content = apiData.all_data[0];
      this.loading = false;
    } catch (error) {
      this.storeData = apiData;
      this.content = apiData.all_data[0];
      this.loading = false;
    }
  },
  provide() {
    return {
      demoData: computed(() => this.storeData),
      contentData: computed(() => this.content),
    };
  },
  methods: {
    handleContent(id) {
      this.content = this.storeData.all_data[id];
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding: 0;
}
.main {
  display: block;
  .content {
    padding: 0.5em 1.5em;
  }
  .cart {
    display: none;
    width: calc(30% - 3em);
  }
}
@media only screen and (min-width: 768px) {
  .main {
    display: flex;

    .content {
      padding: 0.5em 3em;
      width: 75%;
    }
    .cart {
      display: block;
      width: calc(30% - 3.5em);
    }
  }
}
</style>
