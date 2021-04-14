<template>
  <header>
    <div class="header main-container">
      <a href="/">
        <img
          src="../../assets/images/logo.cea1d44b.svg"
          alt="logo"
          class="logo"
        />
      </a>
      <Location />
      <div class="header-search-auth">
        <Search />
        <SignIn />
      </div>
      <div class="header-menu">
        <i class="fas fa-bars"></i>
      </div>
    </div>
  </header>
</template>

<script>
import Location from "./Location";
import SignIn from "./SignIn";
import Search from "./Search";
export default {
  name: "Header",
  components: {
    Location,
    SignIn,
    Search,
  },
};
</script>

<style lang="scss" scoped>
header {
  background: #fff;
  height: 50px;
  padding: 0.5em 1em;
  box-shadow: 1px 1px 1px #ddd;
  position: sticky;
  top: 0;
  z-index: 100;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header-search-auth {
    display: none;
  }

  .logo {
    height: 40px;
  }

  .header-menu {
    i {
      cursor: pointer;
    }
  }
}
</style>
