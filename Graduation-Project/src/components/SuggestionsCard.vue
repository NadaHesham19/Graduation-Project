<template>
  <div class="container mt-5">
    <div class="row w-100">
      <h5 class="col-lg-3 mt-3">Suggestions</h5>
    </div>
    <div class="row justify-content-between align-items-center">
      <i class="fa-solid fa-angle-left col-lg-1 arow" style="height: 45px"></i>
      <div class="col-lg-4 my-5">
        <div class="card text-white">
          <img class="card-img-top" alt="..." /> <!--:src="firstImgSrc"-->
          <div class="card-body" v-for="item in space">
            <div class="c fw-bolder" :key="name"> Space Name:{{ item.name }}</div>
            <div class="c" > Details:
            <div class="ad" :key="address">Address: {{ item.address }}</div>
            <div  class="ad" :key="ratingAverage">Rating: {{ item.ratingAverage }}</div>
            </div>
            <div class="text-center">
              <button class="book-btn" > Visit </button>
            </div>
          </div>
        </div>
      </div>
      <i class="fa-solid fa-angle-right col-lg-1 arow" style="height: 45px"></i>
    </div>
  </div>
  <v-alert color="error" icon="$error" title="You're not logged in" text="Please Try again" 
  v-if="this.authorizationFlag" class="alert align-items-center">
  <button class="goButton" @click="redirectPage()">Go to Log In</button>
</v-alert>
</template>
  
<script>
import BookModal from './BookModal.vue'
import axios from 'axios'
export default {
  components: {
    BookModal

  },
  data() {
    return {
      user: [
        {
          userID: localStorage.getItem('userID'),
          address: ''

        }
      ],
      space: [
        {
        name: '',
        address: '',
        ratingAverage: '',
       }
      ],
      authorizationFlag: false,

    };
  },
  props: [
    'address'
   

  ],
  /*computed: {
    firstImgSrc() {
      return this.room.images;
    },
  },*/
  methods: {
    redirectPage(){
      this.$router.push('/')
    }

  },
  beforeMount() {
    this.securityFlag = localStorage.getItem('securityFlag')
    axios.get(`http://localhost:8080/api/spaces/suggested?city=${this.address}&flag=${this.securityFlag}`)
      .then((response) => {
        this.final = response.data
        console.log(response.data)
      })
      .catch((err) => {
        // Handle errors
        if(err.response.data.message === "Unauthorized request"){
          this.authorizationFlag = true
          console.log(this.authorizationFlag)
        }
      })
  }

};
</script>
  
<style scoped>

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
.icon {
  color: var(--darkblue);
}

.title {
  padding-top: 120px !important;
  margin-left: 90px !important;
  margin-right: 100px !important;
}

.card {
  background-color: var(--darkblue) !important;
  border-radius: 30px !important;
  /* width: 25rem !important; */
}

.card img {
  border-radius: 30px;
  width: 100%;
  height: 200px;
}

.c {
  color: var(--light);
  font-weight: bold;
  font-size: 20px;
  margin-top: 50px;

}

.ad{
  font-family:'Roboto';
  font-size:15px;

}

.book-btn {
  background-color: var(--lightblue);
  color: #fff;
  border-radius: 15px;
  height: 50px;
  font-weight: 500 !important;
  border: none;
  text-align: center;
  width:70px;
}

.book-btn:hover,
.book-btn:active {
  color: var(--darkblue) !important;
  font-weight: 700 !important;
  cursor: pointer;
  background-color: var(--lightblue);

}
</style>
  