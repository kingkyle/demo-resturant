<template>
  <Button @click="toggleModal">Book a table</Button>
  <Modal :isOpen="isOpen" @toggle-modal="toggleModal">
    <div class="book-table">
      <h1>Table Booking</h1>
      <p class="text-muted">Book a table at Demo Restaurant</p>
    </div>
  </Modal>
</template>

<script>
import Button from "../Hero/Button";
import Modal from "./Modal";
export default {
  name: "BookTable",
  components: {
    Button,
    Modal,
  },
  data() {
    return { isOpen: false };
  },
  methods: {
    toggleModal() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style lang="scss" scoped></style>
