<template>
  <Button @click="openModal">
    <i class="fas fa-user-friends"></i> Start Group order
  </Button>
  <Modal :isOpen="isOpen" @toggle-modal="openModal">
    <h1>Group Orders on Grigora</h1>
    <p>
      Group orders are the most convenient way to order food on Grigora as a
      group. Follow these three (3) easy steps:
    </p>
    <div class="flex-item">
      <div class="image">
        <img src="../../assets/images/group-order.bfd56fe8.svg" alt="" />
      </div>
      <div class="text">
        <h3>1. Start Group Order</h3>
        <p>Set a per person spending limit and start a group order.</p>
      </div>
    </div>
    <div class="flex-item">
      <div class="text">
        <h3>2. Invite Others</h3>
        <p>
          Share the group order link with others so can easily add their
          favourite items to the same order.
        </p>
      </div>
      <div class="image">
        <img src="../../assets/images/invite-others.8d95c40c.svg" alt="" />
      </div>
    </div>
    <div class="flex-item">
      <div class="image">
        <img src="../../assets/images/deliver.f90d5337.svg" alt="" />
      </div>
      <div class="text">
        <h3>3. Get Food Delivered Together</h3>
        <p>
          Checkout and delivery are simple, so you can focus on enjoying your
          meal.
        </p>
      </div>
    </div>
  </Modal>
</template>

<script>
import Button from "../Hero/Button";
import Modal from "../Modals/Modal";
export default {
  name: "GroupOrder",
  components: {
    Button,
    Modal,
  },
  data() {
    return { isOpen: false };
  },
  methods: {
    openModal() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style lang="scss" scoped>
p {
  text-align: left;
}
.flex-item {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  margin-top: 3em;
  padding: 0 1em;
  justify-content: center;

  .text {
    grid-row: 2;
  }
  .image {
    grid-row: 1;
  }

  .image {
    padding: 0 1em;
    margin: 0 auto;
    img {
      width: 100%;
    }
    width: 50%;
  }
  .text {
    width: 100%;
    h3 {
      font-size: 18px;
      margin-bottom: 0.5em;
    }
  }
}
</style>
