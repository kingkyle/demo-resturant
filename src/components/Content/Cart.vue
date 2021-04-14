<template>
  <div class="cart-container">
    <div class="empty"></div>
  </div>
</template>

<script>
export default {
  name: "Cart",
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/_root.scss";

.cart-container {
  background: $primaryWhiteShade;
  width: 100%;
  box-shadow: -2px 2px 5px 0px #ddd;
  min-height: 250px;
  .empty {
    font-size: 13px;
    display: flex;
    align-items: flex-end;
    color: rgb(201, 198, 198);
    width: 50%;
    margin: 0 auto;
    text-align: center;
    background: url("../../assets/images/empty-cart.77c72e7c.png") no-repeat top;
    background-size: 160px 150px;
    min-height: 200px;
    &::before {
      content: "Your cart is empty right now \...but not for long.";
    }
  }
}
</style>
