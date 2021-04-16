<template>
  <button><slot></slot></button>
</template>

<script>
export default {
  name: "Button",
};
</script>

<style scoped lang="scss">
button {
  border: 1px solid #fff;
  border-radius: 25px;
  background: none;
  color: #fff;
  height: 40px;
  text-align: center;
  font-family: inherit;
  font-size: 13px;
  cursor: pointer;
  outline: none;
  display: block;
  width: 100%;
  &:hover {
    background: rgba(255, 255, 255, 0.085);
  }
}
</style>
