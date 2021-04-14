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
