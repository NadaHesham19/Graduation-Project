<template>
  <SimpleNav/>
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
            v-model="description"
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
          <label class="col-lg-5 mb-4">Start Time</label>
          <input
            type="time"
            class="col-lg-4 mb-4 inputText"
            data-role="timepicker"
            style="background-color: #d4d4d4"
            v-model="startTime"
          />
        </div>
        <div class="row justify-content-center">
          <label class="col-lg-5 mb-4">End Time</label>
          <input
            type="time"
            class="col-lg-4 mb-4 inputText"
            pattern="[0-9]{2}:[0-9]{2}"
            style="background-color: #d4d4d4"
            v-model="EndTime"
          />
        </div>

        <div class="row justify-content-center">
          <label class="col-lg-5 mb-4 ms-1 " style="">Serves Drinks</label>
          <input
            type="radio"
            value="true"
            class="col-lg-1 mb-4 mx-4"
            style="background-color: #d4d4d4"
            v-model="drinks"
          />True
          <input
            type="radio"
            class="col-lg-1 mb-4 mx-4 "
            value="false"
            style="background-color: #d4d4d4"
            v-model="drinks"
            
          />False
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
          <label class="col-lg-5 mb-4 ms-1 " style="">Outdoor Space Available?</label>
          <input
            type="radio"
            value="true"
            class="col-lg-1 mb-4 mx-4"
            style="background-color: #d4d4d4"
            v-model="out"
          />True
          <input
            type="radio"
            class="col-lg-1 mb-4 mx-4 "
            value="false"
            style="background-color: #d4d4d4"
            v-model="out"
            
          />False
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
    <v-alert color="success" icon="$success" title="Submitted Successfully" text="The data is submitted successfully"
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
import NavBar from "../components/NavBar.vue";
import axios from "axios";
import SimpleNav from '@/components/SimpleNav.vue';
export default {
  data() {
    return {
      name: "",
      address: "",
      numberOfRooms: "",
      district: "",
      description: "",
      contNum: "",
      startTime: "",
      EndTime: "",
      drinks: "",
      owner: "",
      out: "",
      userID:'',
      flag: false,
      errorMessage: "",
      error:false,
      authorizationFlag: false,
      securityFlag : localStorage.getItem('securityFlag')
    };
  },
  components: {
   SimpleNav,
  },
  methods: {
    redirectPage(){
      this.$router.push('/')
    },
     convertTime12to24(time12h){ 
        const [time, modifier] = time12h.split(" ");

        let [hours, minutes] = time.split(":");

        if (hours === "12") {
          hours = "00";
        }

        if (modifier === "PM") {
          hours = parseInt(hours, 10) + 12;
        }

        return `${hours}:${minutes}:00`;
      },
    AddnewSpace() {
    
      axios
        .post(`http://localhost:8080/api/spaces?flag=${this.securityFlag}`, {
          name: this.name,
          address: this.address,
          roomNumbers: this.numberOfRooms,
          district: this.district,
          description: this.description,
          contactNumber: this.contNum,
          startTime: this.convertTime12to24(this.startTime),
          endTime: this.convertTime12to24(this.EndTime),
          drinks: this.drinks,
          owner: this.owner,
          outdoors: this.out,
          user:{userId:this.userID},
        })
        .then((response) => {
          if (response.data.error) {
            this.errorMessage = response.data.message;
           
          } else {
            this.flag=true
            setTimeout(() => {
              this.$router.push("/");
          }, 3000);
           
          }
        })
        .catch((err) => {
        // Handle errors
        if(err.response.data.message === "Unauthorized request"){
          this.authorizationFlag = true
          console.log(this.authorizationFlag)
        }
      })
     
    },
  },
  beforeMount() {

    axios
      .get(`http://localhost:8080/api/spaces?flag=${this.securityFlag}`)
      .then((response) => {
        // Handle response
        this.users = response.data;
        console.log(this.users);
      })
      .catch((err) => {
        // Handle errors
        if(err.response.data.message === "Unauthorized request"){
          this.authorizationFlag = true
          console.log(this.authorizationFlag)
        }
      })

      this.userID=this.$route.params.id
      console.log(this.userID)
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
.success {
  background-color: green;
  color: white;
  height: 50px;
  font-size: 28px;
  font-style: bold;
  border-radius: 10px;
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
