<template>
  <simple-nav></simple-nav>
  <div class="container mt-5">

    <div class="row justify-content-center align-items-center mb-5 ">
      <div class="col-lg-7 addNew">
        <h1 class="text-center my-5">Reset Password</h1>
        <div class="row justify-content-center">

          <input type="password" class="col-lg-7 mb-4 inputText" style="background-color: #d4d4d4"
            placeholder="New Password" v-model="newPass" required />
          <div v-if="passwordValidation.errors.length > 0 && newPass.length > 0" class="col-lg-7 mb-4">
            <span v-for="error in passwordValidation.errors" :key="error" class="error">
              {{ error }}
            </span>
          </div>

        </div>
        <div class="row justify-content-center">
          <input type="password" class="col-lg-7 mb-4 inputText" style="background-color: #d4d4d4"
            placeholder="Confirm Your Password" v-model.lazy="newpassCon" required />
          <div class="error col-lg-7" v-if="notSamePasswords">
            <p>Passwords don't match</p>
          </div>
        </div>

        <div class="row justify-content-center align-items-center mt-3">
          <button class="col-lg-3 mb-5 text-center main-btn" type="submit" @click="ResetPassword()">
            Update
          </button>
        </div>
      </div>
    </div>
    <v-alert color="success" icon="$success" title="Submitted Successfully" text="Data is updated successfully"
      id="hideme" v-if="flag"></v-alert>
    <v-alert color="error" icon="$error" title="Submission Failed" text="Please Try again" id="hideme"
      v-if="error"></v-alert>
  </div>
  <v-alert color="error" icon="$error" title="You're not logged in" text="Please Try again" 
            v-if="this.authorizationFlag" class="alert align-items-center container">
            <button class="goButton" @click="redirectPage()">Go to Log In</button>
          </v-alert>
</template>
  
<script>
import SimpleNav from '@/components/SimpleNav.vue';
import axios from 'axios';
export default {
  data() {
    return {
      newPass: '',
      newpassCon: '',
      //success and failure
      flag: false,
      error: false,
      rules: [
        { message: "One lowercase letter required.", regex: /[a-z]+/ },
        { message: "One uppercase letter required.", regex: /[A-Z]+/ },
        { message: "8 characters minimum.", regex: /.{8,}/ },
        { message: "One number required.", regex: /[0-9]+/ },
      ],
      userEmail: '',
      authorizationFlag: false,
      securityFlag : localStorage.getItem('securityFlag')
    }
  },
  methods: {
    redirectPage(){
      this.$router.push('/')
    }
,
    ResetPassword() {
      //user id will be from the url

      axios.patch(`http://localhost:8080/api/user/updatePassword?email=${this.userEmail}&flag=${this.securityFlag}`,
        {
          password: this.newPass
        })
        .then((res) => {
          if (res.data.error) {
            this.error = true
          } else {
            this.flag = true;
            setTimeout(() => {
              this.$router.push('/')
            }, 2000);

          }
          console.log(res.data)
        })
        .catch((err) => {
        // Handle errors
        if(err.response.data.message === "Unauthorized request"){
          this.authorizationFlag = true
          console.log(this.authorizationFlag)
        }
      })

    },
    decryptValue(encodedValue) {
      const base64 = encodedValue.replace(/_/g, '/').replace(/-/g, '+');
      const decrypted = atob(base64);
      return decrypted;
    },

  },


  computed: {
    notSamePasswords() {
      if (this.passwordsFilled) {
        return this.newPass !== this.newpassCon;
      } else {
        return false;
      }
    },
    passwordsFilled() {
      return this.newPass !== "" && this.newpassCon !== "";
    },
    passwordValidation() {
      let errors = [];
      for (let condition of this.rules) {
        if (!condition.regex.test(this.newPass)) {
          errors.push(condition.message);
        }
      }
      if (errors.length === 0) {
        return { valid: true, errors };
      } else {
        return { valid: false, errors };
      }
    },
  },
  // userid from the url
 beforeMount() {
    // Access the userID parameter from the URL
    const encryptedEmail = this.$route.params.email;
    // const bytes = CryptoJS.AES.decrypt(encryptedEmail, 'secretkey');
    
    this.userEmail = this.decryptValue(encryptedEmail);
    

  },

  components: {
    SimpleNav
  }
};
</script>
  
<style>
.goButton{
  background-color: var(--light)!important;
  color: black!important;
  border-radius: 15px !important;
  height: 40px !important;
  width:100px !important;
  font-weight: 500 !important;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top:10px;

}
.alert{
  width:400px;
  display: flex;
  border-radius: 25px;
}
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
  