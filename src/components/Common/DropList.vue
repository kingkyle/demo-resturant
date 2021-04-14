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
