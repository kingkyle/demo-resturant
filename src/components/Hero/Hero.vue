<template>
  <div class="hero-section">
    <div class="container">
      <div class="hero-flex">
        <div>
          <img :src="demoData.value.restaurant_image" class="store-logo" />
        </div>
        <div class="store-info">
          <div class="store-details">
            <h3 class="store-title">{{ demoData.value.restaurant_name }}</h3>
            <p class="store-description">
              {{ demoData.value.cuisines }}
            </p>
            <div class="store-rev">
              <div class="rating">
                <i class="far fa-star"></i>
                {{ demoData.value.total_rating.toFixed(1) }} ({{
                  demoData.value.total_review
                }}
                REVIEWS)
              </div>
              <div class="dot"></div>
              <div class="distance">1.58 KM away</div>
            </div>
            <div class="store-time">
              <p>CLOSED</p>
              <div class="dot"></div>
              <div class="more-info">
                <i class="far fa-question-circle"></i>
                MORE INFO
              </div>
            </div>
          </div>
          <div class="order-details">
            <div class="cost">
              <ul>
                <li>
                  <p class="title">Min. Order</p>
                  <p class="info">N200</p>
                </li>
                <li>
                  <p class="title">Prep. Time</p>
                  <p class="info">
                    {{ demoData.value.estimated_preparing_time }} mins
                  </p>
                </li>
                <li>
                  <p class="title">Delivery Fee</p>
                  <p class="info">From N{{ demoData.value.delivery_fee }}</p>
                </li>
              </ul>
            </div>
            <div class="type">
              <ul>
                <li>
                  <DropList
                    :title="delivery"
                    background="#fff"
                    color="#333"
                    borderColor="#333"
                    v-slot="scope"
                  >
                    <div class="text-dark">
                      <div
                        class="list-item"
                        @click="
                          handleDelivery('Delivery');
                          scope.close();
                        "
                      >
                        Delivery
                      </div>
                      <div
                        class="list-item"
                        @click="
                          handleDelivery('PickUp Order');
                          scope.close();
                        "
                      >
                        PickUp Order
                      </div>
                    </div>
                  </DropList>
                </li>
                <li>
                  <GroupOrder />
                </li>
                <li>
                  <BookTable />
                </li>
              </ul>
            </div>
          </div>
          <div class="order-menu">
            <p>Choose a menu</p>
            <DropList
              :title="menu"
              color="red"
              borderColor="red"
              v-slot="scope"
              @menu-select="handleMenuSelect"
            >
              <div
                class="list-item text-dark"
                v-for="(data, index) in demoData.value.all_data"
                :key="index"
                @click="
                  scope.handleMenu(index);
                  handleMenu(data.category_name);
                  scope.close();
                "
              >
                <span class="text-bold">{{ data.category_name }}</span> [{{
                  data.start_time
                }}
                - {{ data.end_time }}]
              </div>
            </DropList>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DropList from "../Common/DropList";
import GroupOrder from "../Modals/GroupOrder";
import BookTable from "../Modals/BookTable";
export default {
  name: "Hero",
  components: {
    DropList,
    GroupOrder,
    BookTable,
  },
  data() {
    return {
      delivery: "Delivery",
      menu: "Full Menu",
    };
  },
  inject: ["demoData"],
  methods: {
    handleDelivery(id) {
      this.delivery = id;
    },
    handleMenu(id) {
      this.menu = id;
    },
    handleMenuSelect(id) {
      this.$emit("menu-select", id);
    },
  },
};
</script>

<style lang="scss" scoped>
.hero-section {
  background: linear-gradient(to left, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url("../../assets/images/1603881081.jpeg") center no-repeat;
  background-size: cover;
  min-height: 300px;

  .hero-flex {
    display: block;
    text-align: center;

    .store-logo {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      margin: 1em auto 0 auto;
    }
    .store-info {
      text-align: center;
      width: 100%;
      color: #fff;
      .store-details {
        padding-bottom: 1.5em;
        border-bottom: 1px solid rgba(221, 221, 221, 0.452);
        .store-title {
          font-size: 1.8em;
          margin-bottom: 0.7em;
        }
        .store-rev {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 1.5em 0;
          font-size: 12px;
          .rating {
            i {
              margin-right: 0.5em;
            }
          }
        }
        .store-time {
          display: flex;
          width: 100%;
          align-items: center;
          justify-content: center;
          p {
            color: red;
          }
        }
      }
      .order-details {
        margin-top: 0.5em;
        display: block;

        .cost {
          margin-top: 1em;
          text-align: center;
          ul {
            display: flex;
            justify-content: center;
            align-items: center;
            list-style: none;
            margin: 0;
            padding: 0;
            li {
              margin-right: 2em;
              .title {
                font-size: 13px;
                color: red;
              }
              .info {
                font-size: 17px;
                font-weight: 500;
              }
            }
          }
        }

        .type {
          ul {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0;
            list-style: none;
            li {
              margin-right: 0.5em;
              font-size: 14px;
              &:last-child {
                display: none;
              }
              &:first-child {
                width: 40%;
              }
              &:nth-child(2) {
                width: 60%;
              }
            }
          }
        }
      }
      .order-menu {
        width: 70%;
        margin: 0 auto;

        p {
          color: red;
          font-size: 14px;
          text-align: center;
        }
        margin-top: 1em;
      }
    }
  }
}

.list-item {
  text-align: left;
  cursor: pointer;
  padding: 1em;
  &:hover {
    background: #ddd;
  }
}

@media only screen and (min-width: 500px) {
  .hero-section {
    .hero-flex {
      .store-info {
        .order-details {
          .type {
            margin-top: 2em;
            ul {
              li {
                &:first-child {
                  width: 30%;
                }
                &:nth-child(2) {
                  width: 40%;
                }
                &:last-child {
                  display: block;
                  width: 30%;
                }
              }
            }
          }
        }
        .order-menu {
          width: 50%;
        }
      }
    }
  }
}

@media only screen and (min-width: 768px) {
  .hero-section {
    .hero-flex {
      display: flex;
      padding: 0 2em;

      .store-logo {
        padding-right: 1em;
      }
      .store-info {
        text-align: left;

        .store-details {
          .store-title {
            font-size: 2.4em;
            margin-bottom: 0.1em;
          }
          .store-rev {
            justify-content: flex-start;
            font-size: 14px;
            margin: 2.3em 0;
          }
          .store-time {
            justify-content: flex-start;
          }
        }
        .order-details {
          display: flex;
          justify-content: space-between;
          align-items: center;

          .cost {
            margin-top: 0.2em;
            ul {
              li {
                .title {
                  text-align: left;
                  font-size: 14px;
                }
                .info {
                  font-size: 20px;
                  font-weight: 500;
                  text-align: left;
                }
              }
            }
          }
          .type {
            width: 40%;
            margin-top: 0.3em;
          }
        }
        .order-menu {
          width: 25%;
          margin: auto 0;
        }
      }
    }
  }
}
</style>
