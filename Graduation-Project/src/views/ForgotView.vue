<template>
  <simple-nav></simple-nav>
  <div class="container mt-5">
    <div class="row justify-content-center align-items-center mb-5 ">
      <div class="col-lg-7 addNew">
        <h1 class="text-center my-5">Forgot Password</h1>
        <div class="row justify-content-center">

          <input type="email" class="col-lg-7 mb-4 inputText" style="background-color: #d4d4d4"
            placeholder="Please Enter Your Email" v-model="email" />
        </div>
        <div class="row justify-content-center align-items-center mt-3">
          <button class="col-lg-3 mb-5 text-center main-btn" type="submit" @click="SendAnEmail">
            Send an Email
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import SimpleNav from '@/components/SimpleNav.vue';
import CryptoJS from 'crypto-js';
export default {
  data() {
    return {
      email: null,
      userID: null,
    }
  },
  methods: {
    SendAnEmail() {
      const userEmail = this.email;
      const link = `http://localhost:5173/resetpassword/${this.userID}`

      const url = `http://localhost:8080/api/user/resetPassword?${userEmail}&${link}`;

      axios
        .post(url)
        .then((response) => {
          // const setCookieHeader = response.headers['set-cookie'];

          // // Do something with the header value
          // console.log(setCookieHeader);
          if (response.data.error) {
            this.error = true;
          } else {
            this.flag = true;
            // delay
            this.user = response.data;
          }
        })
        .catch((err) => {
          // Handle errors
          console.error(err);
        });
    }
  }, beforeMount() {
    this.userID = localStorage.getItem('userID')
    const encryptedData = CryptoJS.AES.encrypt('Your Token', 'Secret Key').toString();

    // Decrypt
    const bytes = CryptoJS.AES.decrypt(encryptedData, 'Secret Key');
    const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
    console.log(decryptedData)
  },
  components: {
    SimpleNav
  }
};
</script>

<style>
.addNew {
  background-color: var(--nav);
  color: white;
  border-radius: 25px;
}

.inputText {
  border-radius: 20px;
  border: none;
  height: 40px;
  font-weight: bold;
  outline: none;
  transition: 0.4s;

}

.main-btn {
  background-color: var(--lightblue) !important;
  color: white !important;
  font-weight: 500 !important;
  border-radius: 15px !important;
  padding: 0.5rem 1.5rem !important;
  border: none;
  height: 50px;
}

.main-btn:hover {
  color: var(--darkblue) !important;
  font-weight: 700 !important;
}

.inputText:focus,
.inputText:active {
  transform: scaleX(1.02);
}

.inputText::-webkit-input-placeholder {
  color: #222;
}
</style>
