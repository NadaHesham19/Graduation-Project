<template>
  <NavBar></NavBar>

  <div class="container my-5">
   
    <h1 class="text-center my-5 profile-text">Profile</h1>
    <div class="row justify-content-center w-100">
      <div class="col-lg-4 col-sm-6">
        <div class="row justify-content-center w-100">
          <h2 class="text-center profile-text">
            Bio
            <span class="editable mx-2"><i class="fa-solid fa-pen-to-square" @click="EnableEdit('userbio')"></i></span>
          </h2>
          <!-- <div class="col-lg-8 text-center editable-data">{{ user.bio }}</div> -->
          <input class="col-lg-8 text-center" type="text" ref="userbio" v-model="user.bio" />
        </div>
      </div>
      <div class="col-lg-4 col-sm-6">
        <div class="row justify-content-center w-100">
          <img :src="imgSrc" alt="" class="profile-image col-lg-10" />
        
        </div>
      </div>
      <div class="col-lg-4 col-sm-6">
        <h2 class="text-center profile-text">Details</h2>
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="row">
              <label for="" class="px-1">First Name</label>
            </div>
            <div class="row justify-content-between">
              <input class="col-lg-10" ref="firstname" v-model="user.firstName" />
              <span class="editable mx-2 col-lg-1"><i class="fa-solid fa-pen-to-square"
                  @click="EnableEdit('firstname')"></i></span>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="row">
              <label for="" class="px-1">Last Name</label>
            </div>
            <div class="row">
              <input class="col-lg-10" v-model="user.lastName" ref="lastname" />
              <span class="editable mx-2 col-lg-1"><i class="fa-solid fa-pen-to-square"
                  @click="EnableEdit('lastname')"></i></span>
            </div>
          </div>
        </div>

        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="row">
              <label for="" class="px-1">Email</label>
            </div>
            <div class="row">
              <input class="col-lg-10" v-model="user.email" ref="email" type="email" />
              <span class="editable mx-2 col-lg-1"><i class="fa-solid fa-pen-to-square"
                  @click="EnableEdit('email')"></i></span>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="row">
              <label for="" class="px-1">Username</label>
            </div>
            <div class="row">
              <input class="col-lg-10" v-model="user.username" ref="username" />
              <span class="editable mx-2 col-lg-1"><i class="fa-solid fa-pen-to-square"
                  @click="EnableEdit('username')"></i></span>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="row">
              <label for="" class="px-1">Mobile Number</label>
            </div>
            <div class="row">
              <input class="col-lg-10" v-model="user.mobileNo" ref="mobileno" type="text" />
              <span class="editable mx-2 col-lg-1"><i class="fa-solid fa-pen-to-square"
                  @click="EnableEdit('mobileno')"></i></span>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="row">
              <label for="" class="px-1">Birthdate</label>
            </div>
            <div class="row">
              <input class="col-lg-10" v-model="user.birthDate" ref="birth" />
              <span class="editable mx-2 col-lg-1"><i class="fa-solid fa-pen-to-square"
                  @click="EnableEdit('birth')"></i></span>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="row">
              <label for="" class="px-1">Location</label>
            </div>
            <div class="row">
              <input class="col-lg-10" v-model="user.address" ref="address" />
              <span class="editable mx-2 col-lg-1"><i class="fa-solid fa-pen-to-square"
                  @click="EnableEdit('address')"></i></span>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="row justify-content-start align-items-start">
              <label class="col-lg-4 px-1" for="">Points:</label>
              <input type="text" v-model="user.points" class="col-lg-4" disabled />
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center my-5">
        <button class="main-btn col-lg-2 my-5" type="submit" @click="SaveEditting">
          Save
        </button>
      </div>

      <v-alert color="success" icon="$success" title="Submitted Successfully" text="Data is updated successfully"
      id="hideme" v-if="flag"></v-alert>
    <v-alert color="error" icon="$error" title="Username or email already exists" text="Please Try Valid username or email" id="hideme"
      v-if="error"></v-alert>
    </div>
  </div>
  <v-alert color="error" icon="$error" title="You're not logged in" text="Please Try again" 
            v-if="this.authorizationFlag" class="alert align-items-center container">
            <button class="goButton" @click="redirectPage()">Go to Log In</button>
          </v-alert>

  <Footer></Footer>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
import axios from "axios";
export default {
  data() {
    return {
      // userBio:this.user.bio,
      imgSrc:"https://i.stack.imgur.com/l60Hf.png",
      user: null,
      userID: localStorage.getItem('userID'),
      flag: false,
      error: false,
      userMobile: '',
      securityFlag: localStorage.getItem('securityFlag'),
      authorizationFlag: false,

    };
  },
  components: {
    NavBar,
    Footer,
  },
  methods: {
    redirectPage(){
      this.$router.push('/')
    },
    EnableEdit(field) {
      this.$refs[field].focus();
    },
    SaveEditting() {

      axios.put(`http://localhost:8080/api/user/${this.userID}?flag=${this.securityFlag}`,
        {
          firstName: this.user.firstName, lastName: this.user.lastName, email: this.user.email, username: this.user.username, mobileNo: this.user.mobileNo, birthDate: this.user.birthDate, address: this.user.address, bio: this.user.bio , userId:this.userID
        }).then((res) => {
          if (res.data.error) {
            this.error = true
          } else {
            this.flag = true
          }
         
        })
        .catch((err) => {
        // Handle errors
        this.error = true
        if(err.response.data.message === "Unauthorized request"){
          this.authorizationFlag = true
          console.log(this.authorizationFlag)
        }
      })
      setTimeout(() => {
        this.flag = false
        this.error = false
      }, 3000);
      window.location.reload()
    }
  },
  beforeMount() {

    axios
      .get(`http://localhost:8080/api/user/${this.userID}?flag=${this.securityFlag}`)
      .then((response) => {
        // Handle response
        this.user = response.data;
        console.log(this.user)
        if(this.user.bio.length == 0){
      this.userBio = "Please enter your bio"
        }
      })
      .catch((err) => {
        // Handle errors
        console.log(err)
        if(err.response.data.message === "Unauthorized request"){
          this.authorizationFlag = true
          console.log(this.authorizationFlag)
        }
      });

      axios
      .get(`http://localhost:8080/api/images/user/${this.userID}`)
        .then((response) => {
        const blob = new Blob([response.data], { type: "image/png" }); // Create a Blob
        this.imgSrc = URL.createObjectURL(blob); //  URL for the Blob

      })
        // Handle response
       
      .catch((err) => {
        // Handle errors
        console.error(err);
      });

  },
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
.profile-image {
  width: 200px;
  height: 200px;
  border-radius: 50%;
}

.profile-text {
  color: var(--nav);
}

label {
  font-weight: bold;
  margin: 5px;
}

.bttn-profile {
  background: var(--lightblue);
  color: #fff !important;
  border: none;
  border-radius: 20px;
  height: 40px;
  font-weight: bold;
}

.bttn-profile:hover {
  background-color: var(--light);
  color: var(--lightblue) !important;
}

.editable {
  cursor: pointer;
  font-size: 15px;
}

#hideme {
  animation: hideAnimation 0s ease-in 1.5s;
  animation-fill-mode: forwards;
}

@keyframes hideAnimation {
  to {
    visibility: hidden;
    width: 0;
    height: 0;
  }
}
</style>
