<template>
    <NavBar></NavBar>
    <div class="container mt-5">
      <div class="row justify-content-center align-items-center mb-5 w-100">
        <div class="col-lg-9 addNew">
          <h1 class="text-center my-5">Add Extra Information</h1>
          <div class="row justify-content-center">
            <label class="col-lg-5 mb-4">Space Name</label>
            <input
              type="text"
              class="col-lg-4 mb-4 inputText"
              style="background-color: #d4d4d4"
              v-model="name"
            />
          </div>
          <div class="row justify-content-center">
            <label class="col-lg-5 mb-4">Address</label>
            <input
              type="text"
              class="col-lg-4 mb-4 inputText"
              style="background-color: #d4d4d4"
              v-model="address"
            />
          </div>
          <div class="row justify-content-center">
            <label class="col-lg-5 mb-4">District </label>
            <input
              type="text"
              class="col-lg-4 mb-4 inputText"
              style="background-color: #d4d4d4"
              v-model="district"
            />
          </div>
          <div class="row justify-content-center">
            <label class="col-lg-5 mb-4">Number of rooms</label>
            <input
              type="text"
              class="col-lg-4 mb-4 inputText"
              style="background-color: #d4d4d4"
              v-model="numberOfRooms"
            />
          </div>
          <div class="row justify-content-center">
            <label class="col-lg-5 mb-4">Description</label>
            <input
              type="text"
              class="col-lg-4 mb-4 inputText"
              style="background-color: #d4d4d4"
              v-model="decription"
            />
          </div>
          <div class="row justify-content-center">
            <label class="col-lg-5 mb-4">Contact Number</label>
            <input
              type="tel"
              class="col-lg-4 mb-4 inputText"
              style="background-color: #d4d4d4"
              v-model="contNum"
            />
          </div>
          <div class="row justify-content-center">
            <label class="col-lg-5 mb-4">Minimum Price</label>
            <input
              type="text"
              class="col-lg-4 mb-4 inputText"
              style="background-color: #d4d4d4"
              v-model="minPrice"
            />
          </div>
          <div class="row justify-content-center">
            <label class="col-lg-5 mb-4">Maximum Price</label>
            <input
              type="text"
              class="col-lg-4 mb-4 inputText"
              style="background-color: #d4d4d4"
              v-model="maxPrice"
            />
          </div>
          <div class="row justify-content-center">
            <label class="col-lg-5 mb-4">Start Time</label>
            <input
              type="time"
              class="col-lg-4 mb-4 inputText"
              style="background-color: #d4d4d4"
              v-model="startTime"
            />
          </div>
          <div class="row justify-content-center">
            <label class="col-lg-5 mb-4">End Time</label>
            <input
              type="time"
              class="col-lg-4 mb-4 inputText"
              style="background-color: #d4d4d4"
              v-model="EndTime"
            />
          </div>
          <div class="row justify-content-center">
            <label class="col-lg-5 mb-4">Serves Drinks</label>
            
            <input
              type="text"
              class="col-lg-4 mb-4 inputText"
              style="background-color: #d4d4d4"
              v-model="drinks"
            />
        
          </div>
          <div class="row justify-content-center">
            <label class="col-lg-5 mb-4">Owner</label>
            <input
              type="text"
              class="col-lg-4 mb-4 inputText"
              style="background-color: #d4d4d4"
              v-model="owner"
            />
          </div>
          <div class="row justify-content-center">
            <label class="col-lg-5 mb-4">Outdoor Space Available?</label>
            <input
              type="text"
              class="col-lg-4 mb-4 inputText"
              style="background-color: #d4d4d4"
              v-model="out"
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
        errorMessage: "",
      };
    },
    components: {
      NavBar,
    },
    methods: {
      AddnewSpace() {
        axios
          .post("http://localhost:8080/api/spaces", {
            name: this.name,
            address: this.location,
            noOfRooms: this.numberOfRooms,
            status: "Pending",
            userId: this.userID,
          })
          .then((response) => {
            if (response.data.error) {
              this.errorMessage = response.data.message;
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
    background-color: var(--nav);
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
  </style>
  