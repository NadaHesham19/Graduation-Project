<template>
  <NavBar></NavBar>
  <div class="ourspaces-section pb-5">
    <div class="head d-flex container pt-5 mb-5 pt-5">
      <h4 class="mt-5 pt-5">Suggested Spaces</h4>
    </div>
    <div class="row justify-content-evenly">
      <div class="col-4" v-for="(space) in pagedSpaces" :key="space.spaceId">
        <SpaceCard :space="space" v-model="user.address" />
      </div>
    </div>
    <div class=" row numbers mt-5 mb-5 text-center">
      <v-pagination active-color="#007CC7" color="#007CC7" v-model="currentPage" :length="totalPages" :total-visible="7"
        prev-icon="mdi-chevron-left" next-icon="mdi-chevron-right"></v-pagination>
    </div>
  </div>
  <!--<div class="col-4" v-for="(space, index) in spaces" :key="index">
    <SpaceCard :space="space" />
  </div>-->
  <!----Booking----->
  <!--<div class="reserve">
    <div class="tit">
      Book Your Room Now
    </div>
    <form>
      <div class="info1">
        <label for="location" class="req">Location:</label>
        <select id="location" name="location" v-model="location">
          <option value="" disabled selected>Please select a place</option>
          <option value="NasrCity" required>Nasr City</option>
          <option value="MasrElGedida" required>Masr ElGedida</option>
          <option value="Sheraton" required>Sheraton</option>
          <option value="Maadi" required>Maadi</option>
          <option value="october" required>6th October</option>
        </select>

        <div class="capacity">
          <label for="num" class="write">Capacity:</label>
          <input type="number" id="num number" min="1" max="50" class="cap" required v-model="capacity">
        </div>


        <div class="date">
          <label for="date" class="write">Choose Date:</label>
          <input type="date" id="date" required v-model="date">
        </div>
      </div>

      <div class="info2">
        <div class="start">
          <label for="time" class="write start">Start Time:</label>
          <input type="time" id="time" required v-model="startTime">
        </div>

        <div class="end">
          <label for="time" class="write start">End Time:</label>
          <input type="time" id="time" required v-model="endTime">
        </div>
      </div>

      <div class="decision">
        <button class="searchbtn" type="submit" @click.prevent="displayComponent()">Search</button>
        <button class="resbtn" type="reset" @change="onChange(index)">Reset</button>
      </div>
    </form>

    <div class="onsearch w-100" v-if="display">
      <AvailableOnSearch/>
    </div>
  </div>-->
  <v-alert color="error" icon="$error" title="You're not logged in" text="Please Try again" v-if="this.authorizationFlag"
    class="alert align-items-center container">
    <button class="goButton" @click="redirectPage()">Go to Log In</button>
  </v-alert>

  

  <Footer />
</template>

<script>
import NavBar from '../components/NavBar.vue';
import Footer from '../components/Footer.vue';
import SuggestionsCard from '../components/SuggestionsCard.vue';
import AvailableOnSearch from '../components/AvailableOnSearch.vue';
import SpaceCard from '../components/SpaceCard.vue';
import axios from 'axios';
export default ({
  components: {
    NavBar,
    SuggestionsCard,
    Footer,
    AvailableOnSearch,
    SpaceCard
  },
  data() {
    return {
      /*Data: {
        location: '',
        capacity: '',
        date: '',
        startTime: '',
        endTime: '',
      },
      display: false,*/
      spaces: [],
      currentPage: 1,
      spacesPerPage: 6,
      searchTerm: '',
      //address: '',
      authorizationFlag: false,
      securityFlag: localStorage.getItem('securityFlag'),
      user:null,
      userAddress:''


    }
  },
  props: [
    
  ],
  methods: {
    redirectPage() {
      this.$router.push('/')
    },
    /*onChange(index) {
      this.selected[index] = ''
    },

    displayComponent() {
      this.display = true;
    },*/
  },

  created() {
    /*axios.get('http://localhost:8080/api/room/allrooms')
      .then((response) => {
        this.Data = response.data
        console.log(response.data)
      })
      .catch((error) =>
        console.log(error)
      )
    this.final = Data.filter((item) => {
      this.location == item.address,
        this.capacity == item.type,
        this.date == item.date,
        this.startTime == item.startTime,
        this.endTime == item.endTime
    });
  },
  //to get suggested rooms
  beforeMount() {
    axios.get('http://localhost:8080/api/spaces')
      .then((response) => {
        this.suggest = response.data
        console.log(response.data)
      })
      .catch((error) =>
        console.log(error)
      )
    axios.get(`http://localhost:8080/api/user/${this.userID}`)
      .then((response) => {
        this.user = response.data
        console.log(response.data)
      })
      .catch((error) =>
        console.log(error)
      )
    this.appear = this.suggest.filter(this.suggest.address == this.user.address)
    appear.forEach(item =>
      spaceId = item.spaceId,
      axios.get(`http://localhost:8080/api/room/getBySpace/${spaceId}`)
      .then((response) => {
        this.rooms = response.data
        console.log(response.data)
      })
      .catch((error) =>
        console.log(error)
      )
    )*/


    //-------------
    /*axios.get(`http://localhost:8080/api/spaces/suggested?city=${this.Data.location}`)
    .then((response) => {
        this.final = response.data
        console.log(response.data)
      })
      .catch((error) =>
        console.log(error)
      )*/
  },
  computed: {
    totalPages() {
      const filteredSpaces = this.spaces.filter(space => space.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
      return Math.ceil(filteredSpaces.length / this.spacesPerPage);
    },

    pagedSpaces() {
      let filteredSpaces = this.spaces;
      if (this.searchTerm) {
        filteredSpaces = this.spaces.filter(space => space.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
      }
      const startIndex = (this.currentPage - 1) * this.spacesPerPage;
      const endIndex = startIndex + this.spacesPerPage;
      return filteredSpaces.slice(startIndex, endIndex);
    },
  },
  beforeMount() {
    this.userId = localStorage.getItem('userID')
    axios.get(`http://localhost:8080/api/user/${this.userId}?flag=${this.securityFlag}`)
    .then((response) => {
        this.user = response.data
        this.userAddress = this.user.address
        console.log(this.userAddress)

        console.log(response.data)
      //console.log(this.user.address)   //mafesh haga henaaa fe error
      })
      
      .catch((err) => {
        // Handle errors
        if (err.response.data.message === "Unauthorized request") {
          this.authorizationFlag = true
          console.log(this.authorizationFlag)
        }
      })
      
    axios.get(`http://localhost:8080/api/spaces/suggested?city=cairo&flag=${this.securityFlag}`)  //ghayrtha 3shan a test
      .then((response) => {
        this.spaces = response.data
        console.log(response.data)
        console.log(this.user.address)   //mafesh haga henaaa fe error
      })
      .catch((err) => {
        // Handle errors
        if (err.response.data.message === "Unauthorized request") {
          this.authorizationFlag = true
          console.log(this.authorizationFlag)
        }
      })
  },
})






/*bookPost(){
    axios.post('http://localhost:5173/api/bookings',this.Data)
    .then((response) => {
        this.Data=response.data
    })
    .error((error)=> console.log(error))
},*/



</script>

<style>
.goButton {
  background-color: var(--light) !important;
  color: black !important;
  border-radius: 15px !important;
  height: 40px !important;
  width: 100px !important;
  font-weight: 500 !important;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;

}

.alert {
  width: 400px;
  display: flex;
  border-radius: 25px;
}

body {
  padding: 0;
  margin: 0;
  font-family: "Roboto", sans-serif;
  background-color: var(--background);
}


.reserve {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  flex-wrap: wrap;
  column-gap: 10px;
  padding-bottom: 30px;
}

.tit {
  color: var(--darkblue);
  font-weight: bold;
  font-size: 30px;
  padding-top: 10px;
  padding-bottom: 20px;
}

.info1 {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  column-gap: 30px;

}

.info2 {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  column-gap: 30px;
}

.decision {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.searchbtn {
  border-radius: 25px;
  color: var(--light) !important;
  background-color: var(--lightblue);
  border: none;
  text-align: center;
  width: 200px;
  height: 50px;
  margin-top: 25px;
  font-family: 'Roboto';
  font-size: 20px;
}

.resbtn {
  border-radius: 25px;
  color: var(--light) !important;
  background-color: var(--lightblue);
  border: none;
  text-align: center;
  width: 200px;
  height: 50px;
  margin-top: 25px;
  font-family: 'Roboto';
  font-size: 20px;
  margin-bottom: 20px;

}

.searchbtn:hover,
.resbtn:hover .searchbtn:active,
.resbtn:active {
  color: var(--darkblue) !important;
  font-weight: 700 !important;
  cursor: pointer;

}

input[type=number] {
  width: 100px;
  border-color: black;
}

.ourspaces-section {
  background-color: var(--background);

}
</style>