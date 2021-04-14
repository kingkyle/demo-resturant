<template>
  <Modal :isOpen="isOpen" maxHeight="95vh" overflowY="hidden">
    <template v-slot:header>
      <p class="c-red text-bold text-center notice" v-if="data.status === '0'">
        This item is currently not available to be ordered. You can still choose
        other available items
      </p>
    </template>
    <template v-slot:default>
      <div class="modal-body">
        <div
          class="image"
          :style="{
            backgroundImage: `url(${data.image})`,
          }"
        ></div>

        <h2 class="title">{{ data.name }}</h2>
        <p class="desc text-center text-sm">{{ data.description }}</p>
        <div class="r-r">
          <div class="rating">
            <i class="far fa-star"></i>{{ data.avg_ratings }}
          </div>
          <div class="review">Show Reviews</div>
        </div>

        <div class="add-items">
          <div v-for="category in data.item_categories" :key="category.id">
            <div class="name">
              <h4>
                {{ category.name }} [Select a maximum of
                {{ category.max }} item(s)]
              </h4>
              <p class="text-sm text-muted" v-if="category.required === '0'">
                Optional
              </p>
            </div>
            <div v-for="item in category.item_sub_category" :key="item.id">
              <CheckBox
                :name="item.name"
                :amount="item.add_on_price"
                :key="item.id"
                @add-item="addonItem"
                @remove-item="removeAddonItem"
              />
            </div>
          </div>
        </div>
        <div class="remove-items" v-if="data.item_removeables.length > 0">
          <div class="name">
            <h4>Removeable Items</h4>
            <p>Remove items you don't want</p>
          </div>
          <div v-for="item in data.item_removeables" :key="item.id">
            <CheckBox
              :name="item.name"
              :amount="item.add_on_price"
              :remove="true"
              :key="item.id"
            />
          </div>
        </div>
      </div>
    </template>
    <template v-slot:footer>
      <div class="modal-footer">
        <div class="counter">
          <div :class="['sub', counter <= 1 ? 'stop' : '']" @click="subCounter">
            <i class="fas fa-minus-circle"></i>
          </div>
          <input type="number" readonly v-model="counter" />
          <div class="add" @click="addCounter">
            <i class="fas fa-plus-circle"></i>
          </div>
        </div>
        <div class="add-to-cart">
          <button :disabled="data.status === '0' ? true : false">
            Add to Cart - N{{ addTotal }}
          </button>
        </div>
      </div>
    </template>
  </Modal>
</template>

<script>
import Modal from "./Modal";
import CheckBox from "../Common/CheckBox";
export default {
  name: "CardDataModal",
  components: {
    Modal,
    CheckBox,
  },
  props: {
    data: Object,
    isOpen: Boolean,
  },
  mounted() {
    this.total = Number(this.data.price);
  },
  data() {
    return { counter: 1, total: 0, addon: 0 };
  },
  computed: {
    addTotal() {
      return (this.total + this.addon) * this.counter;
    },
  },
  methods: {
    addCounter() {
      this.counter = this.counter + 1;
    },

    subCounter() {
      if (this.counter > 1) {
        this.counter = this.counter - 1;
      }
    },

    addonItem(id) {
      this.addon = this.addon + id;
    },

    removeAddonItem(id) {
      this.addon = this.addon - id;
    },
  },
};
</script>

<style lang="scss" scoped>
.notice {
  margin: 0em 0 3em 0;
}
.modal-body {
  height: 100%;
  overflow-y: scroll;
  height: 70vh;
  padding: 1em;
  &::-webkit-scrollbar {
    display: block;
  }
  &::-webkit-scrollbar-thumb {
    background: #888;
  }
  &::-webkit-scrollbar {
    width: 0.7em;
  }

  .image {
    padding: 1em 0;
    width: 170px;
    height: 150px;
    margin: 0 auto;
    background-size: cover;
    background-position: 50% 50%;
    border-radius: 10px;
  }

  .title {
    text-align: center;
    font-size: 25px;
  }

  .r-r {
    padding: 0.5em 0;
    display: flex;
    justify-content: center;
    .rating {
      margin-right: 1em;
      color: red;
      i {
        margin-right: 0.5em;
        font-size: 12px;
        margin-top: -7px;
      }
    }
    .review {
      font-weight: 600;
      color: red;
      font-size: 12px;
    }
  }

  .add-items {
    margin-top: 4em;
    margin-bottom: 7em;
    .name {
      display: flex;
      justify-content: space-between;
      align-items: center;
      h4 {
        margin: 0;
        font-size: 15px;
      }
    }
  }
  .remove-items {
    border-top: 1px solid #ddd;
    margin-bottom: 10em;
    .name {
      padding: 0.5em 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      h4 {
        margin: 0;
        font-size: 15px;
      }
    }
  }
}
.modal-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  border-top: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 1em;
  z-index: 999;

  .counter {
    display: flex;
    align-items: center;
    .sub,
    .add {
      margin: 0 0.5em;
      border-radius: 5px;
      cursor: pointer;
      height: 35px;
      width: 35px;
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
        background: #ddd;
      }
    }
    .sub {
      margin-left: 0;
      &.stop {
        cursor: no-drop;
        opacity: 0.5;
      }
    }
    i {
      font-size: 20px;
    }

    input {
      width: 30px;
      height: 35px;
      font-size: 16px;
      font-weight: 600;
      color: rgb(189, 181, 181);
      border: 1px solid rgb(202, 196, 196);
      text-align: center;
      border-radius: 5px;
      outline: none;
      cursor: no-drop;
      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
      -moz-appearance: textfield;
    }
  }

  .add-to-cart {
    button {
      background: rgb(218, 144, 7);
      border: none;
      border-radius: 5px;
      cursor: pointer;
      outline: none;
      width: 220px;
      height: 35px;
      box-shadow: 0px 2px 10px 1px rgba(51, 51, 51, 0.301);
      font-weight: 500;
      font-size: 14px;
      &:disabled {
        cursor: no-drop;
        opacity: 0.8;
      }
    }
  }
}
</style>
