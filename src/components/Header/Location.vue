<template>
  <div class="l-wrapper">
    <div class="location" @click="toggle">
      <i class="fas fa-map-marker-alt"></i>
      Wuse 2, Abuja
      <i class="fas fa-angle-down"></i>
    </div>
    <div
      class="drop-wrapper"
      v-if="isOpen"
      @click="close($event)"
      ref="dropWrapper"
    >
      <div class="location-drop">
        <div class="search">
          <div class="search-input">
            <label :class="[isSmall ? 'small' : '']"
              >Search for a new location</label
            >
            <input
              v-model="searchText"
              autocomplete="off"
              type="text"
              name="searchText"
              :class="[isSmall ? 'small' : '']"
            />
          </div>
        </div>
        <div class="detect">
          <span><i class="far fa-compass"></i></span> Detect Current Location
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Location",
  data() {
    return { isOpen: false, searchText: "" };
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    },
    close(e) {
      if (this.$refs.dropWrapper == e.target) {
        this.isOpen = false;
      }
    },
  },
  computed: {
    isSmall() {
      return this.searchText.trim().length !== 0 ? true : false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/_root.scss";
.l-wrapper {
  width: 60%;
  .location {
    height: 40px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
    transition: background 0.2s ease-in-out;
    color: rgb(73, 73, 73);

    i {
      margin: 0 0.5em;
    }

    &:hover {
      background: #e8e8e8;
    }
  }
  .drop-wrapper {
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: rgba(20, 20, 20, 0.308);
    z-index: 999;
    .location-drop {
      box-shadow: 1px 1px 2px 0 rgba(51, 51, 51, 0.267);
      background: white;
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 5px;
      width: 90%;
      margin-top: 17px;

      .search {
        margin: 1em;
        border: 1px solid #ddd;
        border-radius: 3px;
        &:hover {
          border-color: #333;
        }
        &:focus-within {
          border-color: $primaryWarning;
          border-width: 2px;
          .search-input {
            label {
              font-size: 10px;
              padding-bottom: 30px;
              padding-top: 1em;
              color: $primaryWarning;
            }
            input {
              padding-top: 10px;
              padding-left: 0.8em;
              height: 30px;
            }
          }
        }

        .search-input {
          display: flex;
          align-items: center;
          height: 40px;
          width: 90%;
          text-align: center;
          label {
            position: absolute;
            padding-left: 1em;
            color: #333;
            font-size: 14px;
            transition: all 0.3s ease-in-out;
            &.small {
              font-size: 10px;
              padding-bottom: 30px;
              padding-top: 1em;
            }
          }
          input {
            position: relative;
            width: 100%;
            border: none;
            outline: none;
            height: 25px;
            background: none;
            &.small {
              padding-top: 10px;
              padding-left: 0.8em;
              height: 30px;
            }
          }
        }
      }
    }
    .detect {
      display: flex;
      align-items: center;
      padding: 0.7em 1em;
      cursor: pointer;
      span {
        color: $primaryWarning;
        font-size: 20px;
        margin-right: 1em;
      }
      &:hover {
        background: #ddd;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
      }
    }
  }
}
</style>
