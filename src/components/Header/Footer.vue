<template>
  <footer>
    <div class="container">
      <div class="footer-content">
        <div>
          <h4>LEGAL</h4>
          <ul>
            <li>Terms Of Service</li>
            <li>Privacy Policy</li>
            <li>Attributions & Disclaimers</li>
          </ul>
        </div>
        <div>
          <h4>COMPANY</h4>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Blog</li>
          </ul>
        </div>
        <div>
          <h4>CONTACT</h4>
          <ul>
            <li>Support</li>
            <li>Partner with us</li>
            <li><span>Email:</span> hello@grigora.ng</li>
            <li><span>Tel:</span> +234 901 066 9160</li>
          </ul>
        </div>
        <div class="download-app">
          <div class="app-link">
            <img src="../../assets/images/download.svg" alt="" />
          </div>
          <div class="app-link">
            <img src="../../assets/images/download-1.svg" alt="" />
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="copyright">
          <img src="../../assets/images/logo-white.8141e5a5.svg" alt="" />
          <p>&copy; 2021 Grigora Limited. All rights reserved</p>
        </div>
        <div class="socials">
          <ul>
            <li><i class="fab fa-instagram"></i></li>
            <li><i class="fab fa-facebook"></i></li>
            <li><i class="fab fa-twitter"></i></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
footer {
  margin-top: 10em;
  background: #191e24;

  .footer-content {
    padding: 2em 2em;
    margin: 0 auto;
    color: #fff;
    display: block;

    h4 {
      color: #96979a;
    }
    ul {
      list-style: none;
      padding-left: 5px;

      li {
        margin-bottom: 1em;
        font-size: 12px;
        span {
          color: #8d8f92;
        }
      }
    }
    .download-app {
      width: 170px;
      text-align: center;
      margin: 3em auto 0 auto;
      .app-link {
        margin-bottom: 1.5em;

        img {
          display: block;
          width: 100%;
        }
      }
    }
  }
  .footer-bottom {
    display: grid;
    justify-content: center;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    margin: 6em auto 1em auto;
    text-align: center;

    .copyright {
      grid-row: 2;
      display: grid;
      justify-content: center;
      color: rgb(134, 132, 132);
      align-items: center;
      img {
        width: auto;
        margin: 0 auto;
        height: 30px;
      }
      p {
        font-size: 11px;
      }
    }
    .socials {
      grid-row: 1;
      margin: 0.5em auto 1.5em auto;
      width: 150px;
      cursor: pointer;
      ul {
        display: flex;
        list-style: none;
        justify-content: space-between;
        color: #fff;
        padding: 0;
        margin: 0;
      }
    }
  }
}

@media only screen and (min-width: 768px) {
  footer {
    .footer-content {
      display: flex;
      padding: 3em 0;
      justify-content: space-between;
      align-items: center;
      width: 1000px;
      margin: 0 auto;
      .download-app {
        width: 170px;
        margin: 3em 0 0 0;
        .app-link {
          margin-bottom: 1.5em;
          img {
            display: block;
            width: 100%;
          }
        }
      }
    }
    .footer-bottom {
      display: flex;
      justify-content: space-between;
      width: 800px;
      margin: 0 auto;
      margin-top: 6em;

      .copyright {
        display: flex;
        color: rgb(134, 132, 132);
        align-items: center;
        img {
          width: auto;
          height: 30px;
          margin-right: 2em;
        }
        p {
          font-size: 11px;
        }
      }
      .socials {
        width: 150px;
        margin-right: 100px;
        cursor: pointer;
        margin: 0.5em 0;
        ul {
          display: flex;
          list-style: none;
          justify-content: space-between;
          color: #fff;
        }
      }
    }
  }
}
</style>
