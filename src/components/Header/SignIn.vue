<template>
  <div class="login">
    <button><i class="far fa-user"></i> Sign In/Sign Up</button>
  </div>
</template>

<script>
export default {
  name: "SignIn",
};
</script>

<style lang="scss" scoped>
.login {
  width: 35%;
  margin-left: 1em;
  display: flex;
  justify-content: flex-start;
  button {
    display: block;
    height: 40px;
    background: #be5241;
    color: #fff;
    border: none;
    cursor: pointer;
    width: 100%;
    font-size: 14px;
    font-weight: 500;
    border-radius: 5px;
    box-shadow: 1px 1px 5px 1px #ddd;
    i {
      margin-right: 1em;
    }
    &:hover {
      background: #d45f4c;
    }
  }
}
</style>
