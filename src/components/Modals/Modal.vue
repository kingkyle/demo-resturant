<template>
  <div class="overlay" v-show="showModal">
    <div class="modal-wrapper">
      <div class="modal">
        <div
          :class="['modal-container', showModal ? 'show' : '']"
          :style="{ width: width, maxHeight: maxHeight, overflowY: overflowY }"
          ref="modalRef"
        >
          <div class="modal-header">
            <div class="header-text">
              <!-- <slot name="header"></slot> -->
            </div>
            <div class="close" @click="closeModal">&times;</div>
          </div>
          <div class="modal-body">
            <slot></slot>
          </div>
          <div class="modal-footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    isOpen: { type: Boolean, default: false },
    width: {
      type: String,
    },
    maxHeight: { type: String, default: "85vh" },
    overflowY: { type: String, default: "auto" },
  },
  computed: {
    showModal() {
      if (this.isOpen) {
        document.body.style.position = "fixed";
        document.body.style.width = "100vw";
        // document.body.style.top = `-${window.scrollY}px`;
        return true;
      }
      document.body.style.position = "";
      document.body.style.width = "100%";
      // document.body.style.top = `${window.scrollY}px`;
      return false;
    },
  },
  methods: {
    closeModal() {
      this.$refs.modalRef.classList.remove("show");
      this.$refs.modalRef.classList.add("hide");
      setTimeout(() => {
        this.$emit("toggle-modal");
      }, 300);
    },
  },
  emits: ["toggle-modal"],
};
</script>

<style lang="scss" scoped>
.overlay {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  opacity: 1;
  transition: opacity 0.3s ease;
  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;

    .modal-container {
      width: 100%;
      height: 100vh;
      min-height: 100vh;
      margin: 0px auto;
      background-color: #fff;

      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
      overflow-y: auto;
      transform: scale(0);
      transition: all 1s;
      animation-duration: 0.5s;
      animation-name: slidein;
      animation-fill-mode: forwards;
      &.show {
        animation-duration: 0.5s;
        animation-name: slidein;
        animation-fill-mode: forwards;
        @keyframes slidein {
          from {
            transform: scale(0);
          }
          to {
            transform: scale(1);
          }
        }
      }
      &.hide {
        animation-duration: 0.5s;
        animation-name: slideout;
        animation-fill-mode: forwards;
        @keyframes slideout {
          from {
            transform: scale(1);
            opacity: 1;
          }
          80% {
            opacity: 0;
          }
          to {
            transform: scale(0);
          }
        }
      }

      .modal-header {
        align-items: center;
        display: flex;
        justify-content: space-between;
        padding: 1em;
        .close {
          width: 30px;
          height: 30px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 20px;
          border-radius: 3px;
          cursor: pointer;
          color: #333;
          &:hover {
            background: rgb(223, 219, 219);
          }
        }
      }

      .modal-body {
        color: #333;
        padding: 0 1em;
      }
    }
  }
}
</style>
