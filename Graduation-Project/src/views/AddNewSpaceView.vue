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
          />
        </div>
        <div class="row justify-content-center">
          <label class="col-lg-5 mb-4">Location </label>
          <input
            type="text"
            class="col-lg-4 mb-4 inputText"
            style="background-color: #d4d4d4"
            v-model="location"
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
        <div class="row justify-content-center align-items-center mt-3">
          <button class="col-lg-3 mb-5 text-center main-btn" type="submit" @click="AddnewSpace">
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import axios from 'axios';
export default {
    data(){
        return{
          name:'',
          location:'',
          numberOfRooms:'',
          userID:localStorage.getItem('userID'),
        }
    }, 
    components:{
        NavBar
    },
    methods:{
      AddnewSpace(){
        axios.post("http://localhost:8080/api/requests", { name: this.name, address: this.location, noOfRooms:this.numberOfRooms,status:'Pending', userId:this.userID })
       
       .catch((err) => {
         // Handle errors
         console.error(err);
         
       });
      }
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
</style>
