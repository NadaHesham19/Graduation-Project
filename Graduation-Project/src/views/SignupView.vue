<template>
  <simple-nav></simple-nav>
  <div class="form-modal">
    <div class="form-toggle">
      <button id="login-toggle" @click="toggleLogin()">Sign in</button>
      <button id="signup-toggle" @click="toggleSignup()">sign up</button>
    </div>

    <div id="login-form">
      <form action="index.html">
        <input type="email" placeholder="Enter email" v-model="signinEmail" required />

        <input type="password" placeholder="Enter password" v-model="signinPassword" required />
        <button type="submit" class="btn login" @click.prevent="checkIfAccountExists()">
          Sign in
        </button>
        <p><router-link to="/forgot">Forgot Your Password ?</router-link></p>
      </form>
    </div>

    <div id="signup-form">
      <form action="">
        <input type="text" placeholder="First Name" required v-model="firstName" />
        <input type="text" placeholder="Last Name" required v-model="lastName" />
        <input type="email" placeholder="Email" required v-model="email" />
        <input type="text" placeholder="Address" required v-model="location" />
        <input type="tel" placeholder="Phone number" required v-model="phoneNumber" />
        <input :type="type" placeholder="Birthdate" v-model="birthdate" @focus="this.type = 'date'"
          @blur="this.type = 'text'" />
        <input ref="password" type="password" placeholder="Password" v-model="password" required />

        <div v-if="passwordValidation.errors.length > 0 && password.length > 0">
          <span v-for="error in passwordValidation.errors" :key="error" class="error">
            {{ error }}
          </span>
        </div>
        <input type="password" placeholder="Confirm Password" v-model.lazy="checkPassword" required />
        <div class="error" v-if="notSamePasswords">
          <p>Passwords don't match.</p>
        </div>
        <button type="submit" class="btn signup" @click.prevent="CreateAccount()">
          Create an account
        </button>
      </form>
    </div>
  </div>
  <router-view></router-view>
</template>

<script>
import SimpleNav from '@/components/SimpleNav.vue';
import axios from 'axios'


export default {
  data() {
    return {
      type: "text",
      rules: [
        { message: "One lowercase letter required.", regex: /[a-z]+/ },
        { message: "One uppercase letter required.", regex: /[A-Z]+/ },
        { message: "8 characters minimum.", regex: /.{8,}/ },
        { message: "One number required.", regex: /[0-9]+/ },
      ],
      //data for password validation
      checkPassword: "",
      passwordVisible: false,
      submitted: false,
      signinEmail: "",
      signinPassword: "",

      //users from api
      users: null,
      userID: 0,

      // user Data for Signup
      firstName: null,
      lastName: null,
      email: null,
      phoneNumber: null,
      location: null,
      birthdate: null,
      password: "",
    };
  },
  components: {
    SimpleNav
  },
  methods: {
    toggleSignup() {
      document.getElementById("login-toggle").style.backgroundColor = "#007cc7";
      document.getElementById("login-toggle").style.color = "#ffff";
      document.getElementById("signup-toggle").style.backgroundColor =
        "#12232e";
      document.getElementById("signup-toggle").style.color = "#ffff";
      document.getElementById("login-form").style.display = "none";
      document.getElementById("signup-form").style.display = "block";
    },
    toggleLogin() {
      document.getElementById("login-toggle").style.backgroundColor = "#12232E";
      document.getElementById("login-toggle").style.color = "#ffff";
      document.getElementById("signup-toggle").style.backgroundColor =
        "#007cc7";
      document.getElementById("signup-toggle").style.color = "#ffff";
      document.getElementById("signup-form").style.display = "none";
      document.getElementById("login-form").style.display = "block";
    },
    CreateAccount() {
      axios.post("http://localhost:8080/api/user", { email: this.email, firstName: this.firstName, lastName: this.lastName, password: this.password, mobileNo: this.phoneNumber, address: this.location, points: 0, birthDate: this.birthdate })
       
        .catch((err) => {
          // Handle errors
          console.error(err);
          
        });
    },
    resetPasswords() {
      this.password = "";
      this.checkPassword = "";
      this.submitted = true;
      setTimeout(() => {
        this.submitted = false;
      }, 2000);
    },
    checkIfAccountExists() {
      // request for data base
      // from response if doesn't exist route to home
      //if not display error message
      for (let i = 0; i < this.users.length; i++) {
        if (this.users[i].email == this.signinEmail && this.users[i].password == this.signinPassword && this.users != null) {
          // this.userID = this.users[i].userId
          // console.log(this.userID)
          localStorage.setItem('userID', this.users[i].userId);
          this.$router.push("/home")

        } else if (this.signinEmail == "Admin@info.com" && this.signinPassword == "Root1234") {
          this.$router.push({ name: "profile" })
        } else {
          console.log("error")
          // must show error message
        }
      }

    },
  },
  computed: {
    notSamePasswords() {
      if (this.passwordsFilled) {
        return this.password !== this.checkPassword;
      } else {
        return false;
      }
    },
    passwordsFilled() {
      return this.password !== "" && this.checkPassword !== "";
    },
    passwordValidation() {
      let errors = [];
      for (let condition of this.rules) {
        if (!condition.regex.test(this.password)) {
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
  beforeMount() {
    axios.get("http://localhost:8080/api/user")
      .then((response) => {
        // Handle response
        this.users = response.data;
        console.log(this.users)
      })
      .catch((err) => {
        // Handle errors
        console.error(err);
      });
  }
};
</script>

<style >
/* @import "~@fortawesome/fontawesome-free/css/all.min.css"; */

.form-modal {
  border-radius: 25px;
  position: relative;
  width: 450px;
  height: auto;
  margin-top: 4em;
  left: 50%;
  transform: translateX(-50%);
  background: var(--nav);
  box-shadow: 0 3px 20px 0px rgba(0, 0, 0, 0.1);
}

.form-modal button {
  cursor: pointer;
  position: relative;
  text-transform: capitalize;
  font-size: 1em;
  z-index: 2;
  outline: none;
  transition: 0.2s;
}

.form-modal .btn {
  border-radius: 20px;
  border: none;
  font-weight: bold;
  font-size: 1.2em;
  padding: 0.8em 1em 0.8em 1em !important;
  transition: 0.5s;
  border: 1px solid #ebebeb;
  margin-bottom: 0.5em;
  margin-top: 0.5em;
}

.form-modal .login,
.form-modal .signup {
  background: var(--lightblue);
  color: #fff;
  border: none;
}

.form-toggle {
  position: relative;
  width: 100%;
  height: auto;
}

.form-toggle button {
  width: 50%;
  float: left;
  padding: 1.5em;
  margin-bottom: 1.5em;
  border: none;
  transition: 0.2s;
  font-size: 1.1em;
  font-weight: bold;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
}

.form-toggle button:nth-child(1) {
  border-bottom-right-radius: 20px;
}

.form-toggle button:nth-child(2) {
  border-bottom-left-radius: 20px;
}

#signup-toggle {
  background-color: var(--lightblue);
  color: white;
}

#login-toggle {
  background: var(--nav);
  color: #ffff;
}

.form-modal form {
  position: relative;
  width: 90%;
  height: auto;
  left: 50%;
  transform: translateX(-50%);
}

#login-form,
#signup-form {
  position: relative;
  width: 100%;
  height: auto;
  padding-bottom: 1em;
}

#signup-form {
  display: none;
}

#login-form button,
#signup-form button {
  width: 100%;
  margin-top: 0.5em;
  padding: 0.6em;
}

.form-modal input {
  position: relative;
  width: 100%;
  font-size: 1em;
  padding: 1.2em 1.7em 1.2em 1.7em;
  margin-top: 0.6em;
  margin-bottom: 0.6em;
  border-radius: 20px;
  border: none;
  background: #ebebeb;
  outline: none;
  font-weight: bold;
  transition: 0.4s;
}

.form-modal input:focus,
.form-modal input:active {
  transform: scaleX(1.02);
}

.form-modal input::-webkit-input-placeholder {
  color: #222;
}

.form-modal p {
  font-size: 16px;
  font-weight: bold;
}

.form-modal p a {
  color: white;
  text-decoration: none;
  transition: 0.2s;
}

.form-modal p a:hover {
  color: var(--lightblue);
}

.form-modal i {
  position: absolute;
  left: 10%;
  top: 50%;
  transform: translateX(-10%) translateY(-50%);
}

.sign-link {
  text-decoration: none;
  color: #fff;
}

.login:hover {
  background-color: var(--light) !important;
  color: var(--lightblue) !important;
}

.signup:hover {
  background-color: var(--light) !important;
  color: var(--lightblue) !important;
}

.error {
  color: red;
}
</style>
