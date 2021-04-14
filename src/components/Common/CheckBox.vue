<template>
  <div :class="['check-box', isChecked ? 'checked' : '']" @click="handleCheck">
    <div class="check">
      <div class="empty">
        <i class="far fa-square"></i>
      </div>
      <div class="checked">
        <i class="far fa-check-square"></i>
      </div>
      <p class="name">Straw</p>
    </div>
    <div class="amount">
      <p>+N500</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CheckBox",
  props: {
    name: String,
    amount: String,
  },
  data() {
    return { isChecked: false };
  },
  methods: {
    handleCheck() {
      this.isChecked = !this.isChecked;
      this.$emit("check-item");
    },
  },
};
</script>

<style lang="scss" scoped>
.check-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 5px;
  height: 40px;
  padding: 1em 1.5em;
  margin: 0.5em 0;
  cursor: pointer;
  &:hover {
    background: #ddd;
  }
  &.checked {
    .check {
      .empty {
        display: none;
      }
      .checked {
        display: block;
        color: orange;
      }
    }
  }

  .check {
    display: flex;
    align-items: center;
    i {
      font-size: 22px;
      margin-top: 1px;
      margin-right: 1em;
    }
    .checked {
      display: none;
    }
    .name {
      font-weight: 500;
      font-size: 15px;
    }
  }
  .amount {
    color: rgb(128, 122, 122);
  }
}
</style>
