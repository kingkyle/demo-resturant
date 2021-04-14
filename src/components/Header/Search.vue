<template>
  <div class="search">
    <div class="search-input">
      <label :class="[isSmall ? 'small' : '']"
        >Search for Vendors and Cuisines</label
      >
      <input
        v-model="searchText"
        autocomplete="off"
        type="text"
        name="searchText"
        :class="[isSmall ? 'small' : '']"
      />
    </div>
    <div class="search-btn">
      <i class="fas fa-search"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      searchText: "",
    };
  },
  computed: {
    isSmall() {
      return this.searchText.trim().length !== 0 ? true : false;
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../assets/css/_root.scss";

.search {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 65%;
  border: 1px solid #ddd;
  height: 40px;
  border-radius: 5px;
  transition: border-color 0.2s ease-in-out;
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

  .search-btn {
    text-align: center;
    width: 10%;
    cursor: pointer;

    i {
      height: 30px;
      width: 30px;
      display: flex;
      // font-weight: 500;
      align-items: center;
      justify-content: center;
      &:hover {
        background: rgb(240, 238, 238);
        border-radius: 50%;
      }
    }
  }
}
</style>
