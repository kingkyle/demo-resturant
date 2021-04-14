<template>
  <div class="promo">
    <h2>Ongoing <span class="c-red">Promos</span></h2>
    <p class="text-muted text-sm">Apply promo at checkout</p>
    <img
      src="../../assets/images/1596661950.jpeg"
      alt=""
      class="promo-banner"
    />
    <p class="tag">WELCOME PROMO</p>
  </div>
</template>

<script>
export default {
  name: "Promo",
};
</script>

<style lang="scss" scoped>
.promo {
  width: 60%;
}
.promo-banner {
  padding: 1em 1em 0 1em;
  width: 100%;
}
.tag {
  text-align: center;
  font-weight: 600;
}
</style>
