<template>
  <simple-nav></simple-nav>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-lg-4 col-sm-6">
        <h4 class="text-center profile-text">Booking Details</h4>
      </div>
      <div class="row justify-content-center w-100">
        <div class="col-lg-8 col-sm-10">
          <label for="" class="">Space Name:</label>
          <span class="">{{ booking.spaceName }} </span>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-8 col-sm-10">
          <label class="" for="">Start Time:</label>
          <span class="">{{ booking.startTime }} </span>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-8 col-sm-10">
          <label class="" for="">End Time:</label>
          <span class="">{{ booking.endTime }}</span>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-lg-8 col-sm-10">
          <label class="" for="">Date:</label>
          <span class="">{{ booking.date }} </span>
        </div>
      </div>
    </div>
    <div class="row justify-content-center my-5">
      <button class="main-btn col-lg-2 my-5 mx-2" type="submit" @click="aprrove">
        Approve
      </button>
    </div>
  </div>
</template>

<script>
import SimpleNav from "@/components/SimpleNav.vue";
// import  useJwt  from 'jwt-decode';

export default {
  data() {
    return {
      booking: null,
      id: "",
    };
  },
  // beforeMount() {
  //   // const decode = () => {
  //   //   //Take token from window local storage
  //   //   let token =
  //   //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
  //   //   try {
  //   //     let decoded = VueJwtDecode.decode(token);
  //   //     console.log(decoded);
  //   //   } catch (err) {
  //   //     console.log("token is null: ", err);
  //   //   }
  //   // };
  //   // const encodedJwt = ref('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiaWF0IjoxNTE2MjM5MDIyfQ.L8i6g3PfcHlioHCCPURC9pmXT7gdJpx3kOoyAfNUwCc')
  //   // const { header, payload } = useJwt(encodedJwt)
  //   // // return { header, payload }
  //   // console.log(header)
  //   // console.log(payload)
  // },
  beforeMount() {
    // Access ID from the URL
    this.id = this.$route.params.id;
      // axios
    //   .get("http://localhost:8080/api/user")
    //   .then((response) => {
    //     // Handle response
    //     this.booking = response.data;
    //     console.log(this.booking);
    //   })
    //   .catch((err) => {
    //     // Handle errors
    //     console.error(err);
    //   });

  },
  components: {
    SimpleNav,
  },
  methods:{
    approve(){
 
    axios.post(`http://localhost:8080/api/bookings/scan/${this.id}`,{})
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
