<template>
  <Header />
  <Home />
</template>

<script>
import Header from "./components/Header/Header";
import Home from "./views/Home";
export default {
  name: "App",
  components: {
    Header,
    Home,
  },
};
</script>

<style lang="scss">
@import url("https://use.typekit.net/txm8xae.css");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css");

body {
  margin: 0;
  padding: 0;
  font-family: muli, sans-serif;
  font-size: 14px;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
  padding: 0;
}

.main-container {
  max-width: 1400px;
  margin: 0 auto;
}

.container {
  padding: 2em;
  max-width: 500px;
  margin: 0 auto;
}

.dot {
  height: 8px;
  width: 8px;
  background: #fff;
  text-align: center;
  margin: auto 8px;
  border-radius: 50%;
}

.c-red {
  color: red;
}

.text-muted {
  color: rgb(197, 194, 194);
}

.text-sm {
  font-size: 12px;
}

.text-grey {
  color: rgb(126, 115, 115);
}

.mt-3 {
  margin-top: 4em;
}

.text-dark {
  color: #333;
}

.text-bold {
  font-weight: 600;
}

.text-center {
  text-align: center;
}
</style>
