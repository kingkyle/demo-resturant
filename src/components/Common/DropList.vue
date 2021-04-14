<template>
  <div
    class="dropdown"
    @click="toggleDropDown"
    :style="{ borderColor, width, color, background }"
    ref="widthBox"
  >
    <div class="text" :style="{ borderColor }">{{ title }}</div>
    <div class="arrow" :class="[isOpen ? 'open' : '']">
      <i class="fas fa-angle-down fa-lg"></i>
    </div>
  </div>
  <div
    :class="[isOpen ? 'show' : '', 'drop-modal']"
    :style="{ minWidth: matchWidth }"
  >
    <slot :close="toggleDropDown" :handleMenu="handleMenu" />
  </div>
</template>

<script>
export default {
  name: "DropList",
  props: {
    title: String,
    borderColor: {
      type: String,
      default: "#fff",
    },
    width: {
      type: String,
      default: "auto",
    },
    background: { type: String, default: "none" },
    color: { type: String, default: "white" },
  },
  data() {
    return { isOpen: false, boxWidth: "" };
  },
  methods: {
    toggleDropDown() {
      this.isOpen = !this.isOpen;
    },
    handleMenu(id) {
      this.$emit("menu-select", id);
    },
  },
  mounted() {
    this.boxWidth = this.$refs.widthBox.clientWidth - 0 + "px";
  },
  computed: {
    matchWidth() {
      return this.boxWidth;
    },
  },
  emits: ["menu-select"],
};
</script>

<style lang="scss" scoped>
.dropdown {
  width: 100%;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  border: 1px solid #fff;
  border-radius: 25px;
  padding: 0.06em 1em;

  .text {
    text-align: center;
    width: 75%;
  }
  .arrow {
    text-align: center;
    border-left: 1px solid rgba(221, 221, 221, 0.637);
    width: 25%;

    transition: transform 0.4s ease-in-out;
    &.open {
      transform-origin: center;
      transform: rotateX(180deg);
    }
  }
}
.drop-modal {
  background: #fff;
  border-radius: 5px;
  color: #333;
  box-shadow: 0px 1px 5px 0px rgba(51, 51, 51, 0.219);
  position: absolute;
  z-index: 999;
  visibility: hidden;
  opacity: 0;
  transition: opacity 1s ease-in-out;

  &.show {
    display: block;
    visibility: visible;
    opacity: 1;
  }
}
</style>
