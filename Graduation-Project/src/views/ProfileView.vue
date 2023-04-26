<template>
  <NavBar></NavBar>

  <div class="container my-5">
    <h1 class="text-center my-5 profile-text">Profile</h1>
    <div class="row justify-content-center w-100">
      <div class="col-lg-4 col-sm-6">
        <div class="row justify-content-center w-100">
          <h2 class="text-center profile-text">
            Bio
            <span class="editable mx-2"
              ><i class="fa-solid fa-pen-to-square" @click="EnableEdit"></i
            ></span>
          </h2>
          <div class="col-lg-8 text-center editable-data">{{ user.bio }}</div>
        </div>
      </div>
      <div class="col-lg-4 col-sm-6">
        <div class="row justify-content-center w-100">
          <img :src="imgSrc" alt="" class="profile-image" />
        </div>
      </div>
      <div class="col-lg-4 col-sm-6">
        <h2 class="text-center profile-text">Details</h2>
        <div class="row justify-content-center w-100">
          <div class="col-lg-8">
            <label for="" class="">Name:</label>
            <span class=""
              >{{ user.firstName }} {{ user.lastName
              }}<span class="editable mx-2"
                ><i
                  class="fa-solid fa-pen-to-square"
                  @click="EnableEdit"
                ></i></span
            ></span>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <label class="" for="">Email:</label>
            <span class=""
              >{{ user.email }}
              <span class="editable mx-2"
                ><i
                  class="fa-solid fa-pen-to-square"
                  @click="EnableEdit"
                ></i></span
            ></span>
          </div>
        </div>

        <div class="row justify-content-center">
          <div class="col-lg-8">
            <label class="" for="">Birthdate:</label>
            <span class=""
              >{{ user.birthDate }}
              <span class="editable mx-2"
                ><i
                  class="fa-solid fa-pen-to-square"
                  @click="EnableEdit"
                ></i></span
            ></span>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <label class="" for="">Location:</label>
            <span class=""
              >{{ user.address }}
              <span class="editable mx-2"
                ><i
                  class="fa-solid fa-pen-to-square"
                  @click="EnableEdit"
                ></i></span
            ></span>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <label class="" for="">Points:</label>
            <span class="">{{ user.points }}</span>
          </div>
        </div>
      </div>
      <div class="row justify-content-center my-5">
        <button
          class="bttn-profile col-lg-2 my-5"
          type="submit"
          @click="SaveEditting"
        >
          Save
        </button>
      </div>
    </div>
  </div>

  <Footer></Footer>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
import axios from "axios";
export default {
  data() {
    return {
      // userBio:"Hello I am Nadodaa",
      imgSrc:
        "https://hips.hearstapps.com/hmg-prod/images/cute-cat-photos-1593441022.jpg?crop=1.00xw:0.753xh;0,0.153xh&resize=1200:*",
      // userName:"Nada Taalab",
      // userEmail:"Nadoda@info.com",
      // userBirthdate:"1999-11-19",
      // userLocation:"Nasr City",
      // userPoints:250,
      // editing:false,
      // tempValue:null,
      user: null,
    };
  },
  components: {
    NavBar,
    Footer,
  },
  methods: {
    EnableEdit() {
      this.tempValue = this.userBio;
      this.editing = true;
    },
    disableEditting() {
      this.tempValue = null;
      this.editing = false;
    },
    SaveEditting() {
      this.value = this.tempValue;
      this.disableEditing();
    },
  },
  beforeMount() {
    //  axios.get('http://localhost:8080/api/user/[2]').then(response => this.user = response.data.total)
    // console.log(this.user)

    // const getData = async () => {
    // 	const response = await axios.get(
    // 		`http://localhost:8080/api/user/2`
    // 	);
    // };
    // console.log(getData)

    axios
      .get("http://localhost:8080/api/user/1")
      .then((response) => {
        // Handle response
        this.user = response.data;
      })
      .catch((err) => {
        // Handle errors
        console.error(err);
      });
  },
};
</script>

<style>
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
  color: #fff;
  border: none;
  border-radius: 20px;
  height: 40px;
  font-weight: bold;
}
.bttn-profile:hover {
  background-color: var(--light);
  color: var(--lightblue);
}
.editable {
  cursor: pointer;
  font-size: 15px;
}
</style>
