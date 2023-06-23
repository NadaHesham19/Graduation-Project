<template>
  <NavBar></NavBar>
  <div class="container mt-5">
    <div class="row justify-content-center align-items-center mb-5 w-100">
      <div class="col-lg-9 addNew">
        <h1 class="text-center my-5">Add New Spaces</h1>
        <div class="row justify-content-center">
          <label class="col-lg-5 mb-4">Space Name </label>
          <input
            type="text"
            class="col-lg-4 mb-4 inputText"
            style="background-color: #d4d4d4"
            v-model="name"
            required
          />
        </div>
        <div class="row justify-content-center">
          <label class="col-lg-5 mb-4">Location </label>
          <input
            type="text"
            class="col-lg-4 mb-4 inputText"
            style="background-color: #d4d4d4"
            v-model="location"
            required
          />
        </div>
        <div class="row justify-content-center">
          <label class="col-lg-5 mb-4">Number of rooms</label>
          <input
            type="text"
            class="col-lg-4 mb-4 inputText"
            style="background-color: #d4d4d4"
            v-model="numberOfRooms"
            required
          />
        </div>
        <div class="row justify-content-center align-items-center mt-3">
          <button
            class="col-lg-3 mb-5 text-center main-btn"
            type="submit"
            @click="AddnewSpace"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
    <div class="row justify-content-center align-items-center mt-3 ">
 
<v-alert
  color="success"
  icon="$success"
  title="Submitted Successfully"
  text="The Request is submitted successfully"
  id="hideme"
  v-if="flag"
></v-alert>
<v-alert
  color="error"
  icon="$error"
  title="Submission Failed"
  text="Please Try again"
  id="hideme"
  v-if="error"
></v-alert>
</div>
  </div>
  
</template>

<script>
import NavBar from "../components/NavBar.vue";
import axios from "axios";

export default {
  data() {
    return {
      name: "",
      location: "",
      numberOfRooms: "",
      userID: localStorage.getItem("userID"),
      flag: false,
      error: false,
    };
  },
  components: {
    NavBar,
  },
  methods: {
    
    AddnewSpace() {
      // if(this.name.length!=0 && this.location.length!=0 && this.noOfRooms.length !=0){
       axios
        .post("http://localhost:8080/api/requests", {

          name: this.name,
          address: this.location,
          noOfRooms: this.numberOfRooms,
          status: "Pending",
          userId: this.userID,
        })
        .then((response) => {
          if (response.data.error) {
            this.error=true
          } else {
            (this.name = ""),
              (this.location = ""),
              (this.numberOfRooms = ""),
              (this.flag = true)
          }
        })
        .catch((err) => {
          // Handle errors
          console.error(err);
        });
        setTimeout(() => {
        this.flag = false
        this.error = false
      }, 3000);
      // }
    },

   
  },
  beforeMount() {
    axios
      .get("http://localhost:8080/api/requests")

      .then((response) => {
        // Handle response
        this.users = response.data;
        console.log(this.users);
      })
      
      .catch((err) => {
        // Handle errors
        console.error(err);
      });
  },
};
</script>

<style>
.addNew {
  background-color: var(--darkblue);
  color: white;
  border-radius: 25px;
}
.inputText {
  border-radius: 25px;
  border: none;
  height: 40px;
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
.success{
  background-color: green;
  color: white;
  height: 50px;
  font-size: 28px;
  font-style: bold;
  border-radius:10px;
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
