<template>
  <div>
    <div
      :class="['card', card.status == '0' ? 'offline' : '']"
      @click="toggleModal"
    >
      <div
        class="image"
        :style="{
          backgroundImage: `url(${card.image})`,
        }"
      ></div>

      <div class="details">
        <div>
          <h3 class="title">{{ card.name }}</h3>
          <div class="text-sm text-grey desc">
            {{ card.description }}
          </div>
          <div class="rating">
            <span><i class="fas fa-star"></i></span>
            <p>{{ card.avg_ratings }}</p>
          </div>
        </div>
        <div class="bottom">
          <div class="price">N{{ card.price }}</div>
          <div class="status">
            {{ card.status !== "1" ? "Not Available" : "" }}
          </div>
        </div>
      </div>
    </div>
    <CardDataModal
      :data="card"
      :isOpen="isOpen"
      v-show="showModal"
      @toggle-modal="toggleModal"
    />
  </div>
</template>

<script>
import CardDataModal from "../Modals/CardDataModal";
export default {
  name: "Card",
  components: {
    CardDataModal,
  },
  props: {
    card: Object,
  },
  data() {
    return { isOpen: false };
  },
  methods: {
    toggleModal() {
      this.isOpen = !this.isOpen;
    },
  },
  computed: {
    showModal() {
      return this.isOpen;
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  height: 110px;
  border: 1px solid #ddd;
  border-radius: 5px;
  display: flex;
  padding: 1em;
  cursor: pointer;
  &.offline {
    background: #fff;
    cursor: no-drop;
    z-index: 0;
    opacity: 1;
    .image {
      opacity: 0.5;
    }
    .details {
      opacity: 0.5;
    }
  }

  .image {
    width: 40%;
    background-size: cover;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    overflow: hidden;
  }

  .details {
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 1em;
    .title {
      font-weight: 600;
      font-size: 14px;
    }
    .desc {
      text-overflow: ellipsis;
      font-size: 11px;
      white-space: nowrap;
      overflow: hidden;
    }
    .rating {
      i {
        margin-right: 0.5em;
      }
      span {
        font-size: 0.6em;
        margin-top: -1px;
      }
      p {
        font-size: 0.7em;
      }
      background: rgb(187, 142, 149);
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 15px;
      border-radius: 5px;
      color: white;
      margin: 0.3em 0;
      padding: 0.1em;
    }
    .bottom {
      display: flex;
      justify-content: space-between;
      .price {
        font-weight: 600;
      }
      .status {
        color: red;
        font-weight: 500;
        font-size: 12px;
      }
    }
  }
}
</style>
