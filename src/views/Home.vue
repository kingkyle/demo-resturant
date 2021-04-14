<template>
  <Header />
</template>

<script>
import Header from "../components/Header/Header";
import { apiData } from "../utils/apiData";
export default {
  name: "Home",
  components: {
    Header,
  },
  data() {
    return { storeData: null, content: null };
  },
  beforeMount() {
    this.storeData = apiData;
    this.content = apiData.all_data[0];
  },
};
</script>

<style lang="scss" scoped></style>
