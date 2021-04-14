<template>
  <div class="more-info" @click="toggleModal">
    <i class="far fa-question-circle"></i>
    MORE INFO
  </div>
  <Modal :isOpen="isOpen" @toggle-modal="toggleModal">
    <div class="modal-body">
      <h2>{{ demoData.value.restaurant_name }}</h2>
      <div class="items">
        <div class="icon">
          <i class="fas fa-map-marker-alt"></i>
        </div>
        <div class="info">
          <h3 class="title">Address</h3>
          <p>{{ demoData.value.address }}</p>
        </div>
      </div>
      <div class="items">
        <div class="icon">
          <i class="far fa-clock"></i>
        </div>
        <div class="info">
          <h3 class="title">Opening Time</h3>
          <p>{{ demoData.value.opening_time }}</p>
        </div>
      </div>
      <div class="items">
        <div class="icon">
          <i class="far fa-clock"></i>
        </div>
        <div class="info">
          <h3 class="title">Closing TIme</h3>
          <p>{{ demoData.value.closing_time }}</p>
        </div>
      </div>
      <div class="items">
        <div class="icon">
          <i class="far fa-star"></i>
        </div>
        <div class="info">
          <h3 class="title">Average Rating</h3>
          <p>{{ demoData.value.total_rating.toFixed(1) }} Stars</p>
        </div>
      </div>
    </div>
  </Modal>
</template>

<script>
import Modal from "./Modal";
export default {
  name: "StoreInfo",
  components: {
    Modal,
  },

  data() {
    return { isOpen: false };
  },
  inject: ["demoData"],
  methods: {
    toggleModal() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style lang="scss" scoped>
.more-info {
  cursor: pointer;
  &:hover {
    background: rgba(255, 255, 255, 0.151);
  }
}
.modal-body {
  padding: 1em;
  h2 {
    margin-bottom: 2em;
    margin-top: -1em;
  }
  .items {
    margin-top: 1.5em;
    display: flex;
    .icon {
      color: rgb(224, 151, 14);
      font-size: 20px;
      width: 10%;
    }
    .info {
      .title {
        margin-bottom: 0.3em;
      }
    }
    &:last-child {
      margin-bottom: 1.5em;
    }
  }
}

@media only screen and (min-width: 768px) {
  .modal-body {
    h2 {
      font-size: 2em;
      margin-bottom: 1em;
      margin-top: -1em;
    }
  }
}
</style>
