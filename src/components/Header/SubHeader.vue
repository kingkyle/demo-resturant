<template>
  <div class="m-header">
    <div class="container m-header-flex">
      <div class="m-links">
        <div
          v-for="link in menuList"
          :key="link.name"
          class="m-link"
          :id="link.linkId"
          @click="scrollPage(link.id, $event)"
        >
          <div class="link-text">{{ link.name }}</div>
          <div class="link-border"></div>
        </div>
      </div>

      <div class="m-cart">
        <i class="fas fa-shopping-cart"></i>&nbsp; Cart (0)
      </div>
    </div>
  </div>
</template>

<script>
import { groupBy } from "../../utils/common";
export default {
  name: "SubHeader",
  inject: ["contentData"],
  data() {
    return {
      categoryList: [],
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.updateCatList();
  },
  updated() {
    this.updateCatList();
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  computed: {
    menuList() {
      const popularItems = this.contentData.value.data;
      let res = [];
      const group = groupBy("name")(popularItems);
      for (const i in group) {
        const id = "cuisine-" + group[i][0].id;
        res.push({
          name: i,
          id,
          linkId: "l-" + id,
        });
      }
      return res;
    },
  },
  methods: {
    scrollPage(id, event) {
      const elem = document.getElementById(id);
      this.activeLink(event.target.parentElement.id);
      window.scrollTo({
        top: elem.offsetTop + -150,
        left: 0,
        behavior: "smooth",
      });
    },
    activeLink(id) {
      document.querySelectorAll(".m-link").forEach((l) => {
        if (l.id !== id) {
          l.classList.remove("active");
        } else {
          l.classList.add("active");
        }
      });
    },
    handleScroll() {
      const y = Math.round(window.scrollY);
      this.categoryList.forEach((c) => {
        if (y >= c.offset - 20 && y <= c.offset + 20) {
          return this.activeLink(c.linkId);
        }
      });
    },
    updateCatList() {
      this.categoryList = this.menuList.map((c) => {
        return { ...c, offset: document.getElementById(c.id).offsetTop - 150 };
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/_root.scss";

.m-header {
  background: $primaryWhiteShade;
  position: sticky;
  top: 55px;
  height: 60px;
  z-index: 100;
  .m-header-flex {
    &.container {
      padding: 0;
    }
    display: flex;
    align-items: center;
    .m-links {
      margin-left: 0.5em;
      width: 100%;
      display: flex;
      .m-link {
        cursor: pointer;
        font-weight: 500;
        padding: 0 1em;
        .link-text {
          font-size: 16px;
          text-align: center;
          height: 55px;
          display: flex;
          align-items: center;
        }
        .link-border {
          border-radius: 10px;
          width: 30px;
        }
        &.active {
          font-weight: 600;
          color: $primaryColor;
          .link-border {
            border-bottom: 5px solid $primaryColor;
          }
        }
        &:hover {
          background: #e8e8e9;
        }
      }
    }
    .m-cart {
      display: none;
      border-left: 1px solid rgb(77, 76, 76);
      padding: 0.2em 1.5em;
    }
  }
}
</style>
