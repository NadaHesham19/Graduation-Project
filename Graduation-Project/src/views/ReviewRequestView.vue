<template>
  <NavBar />
  <div class="container my-5">
    <div class="request">
      <div class="title t">Requests</div>
      <hr />
      <div class="info" v-for="item in info" v-bind:key="item.requestId">
        <div class="title">{{ item.requestId }}</div>
      </div>
    </div>
    <div class="name">
      <div class="title t">Name</div>
      <hr />
      <div class="info" v-for="item in info" v-bind:key="item.name">
        <div class="title">{{ item.name }}</div>
      </div>
    </div>
    <div class="status">
      <div class="title t s">Status</div>
      <hr />
      <div class="information" v-for="item in info" v-bind:key="item.status">
        <!--<div class="title" v-if="item.status=='approved'" :style="{'background-color':accept.backgroundColor ,'height':accept.height + 'px' , 'width':accept.width +'px' , 'margin-top':accept.marginTop+'px'}">{{item.status}}</div>
        <div class="title" v-else-if="item.status=='declined'" :style="decline">{{item.status}}</div>
        <div class="title" v-else :style="pend">{{item.status}}</div>-->
        <button class="accepted title titleA" disabled v-if="item.status == 'approved'">
          {{ item.status }}
        </button>
        <button class="declined title titleD" disabled v-else-if="item.status == 'declined'">
          {{ item.status }}
        </button>
        <button class="pending title titleP" disabled v-else>
          {{ item.status }}
        </button>

        <!--<button class="accept "  v-if="item.status=='approved'">{{item.status}}</button>
        <button class="decline "  v-else-if="item.status=='declined'">{{item.status}}</button>
        <button class=" pend"  v-else>{{item.status}}</button>-->
      </div>
    </div>
  </div>
  <v-alert color="error" icon="$error" title="You're not logged in" text="Please Try again" 
            v-if="this.authorizationFlag" class="alert align-items-center container">
            <button class="goButton" @click="redirectPage()">Go to Log In</button>
          </v-alert>
  <Footer />
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
import axios from 'axios'

export default {
  name: "RequestsViewAdmin",
  components: {
    NavBar,
    Footer,
  },
  data() {
    return {
      info: [
        {
          name: '',
          requestId: '',
          status: '',
          userId: '',
          /*errorMsg:''*/
          
        }
      ],
      //securityFlag: false,
      authorizationFlag: false,

    }
  },
  methods: {
    redirectPage(){
      this.$router.push('/')
    }

  },

  beforeMount() {
    this.userId = localStorage.getItem('userID')
    this.securityFlag = localStorage.getItem('securityFlag')
     
    axios.get(`http://localhost:8080/api/requests/users/${this.userId}?flag=${this.securityFlag}`,
     
    )
      .then((response) => {
        this.info = response.data
        console.log(response.data)
        console.log(this.securityFlag)
      })
      .catch((err) => {
        // Handle errors
        if(err.response.data.message === "Unauthorized request"){
          this.authorizationFlag = true
          console.log(this.authorizationFlag)
        }
      })
        
        

          
      
  },
};
</script>

<style scoped>
body {
  padding: 0;
  margin: 0;
  font-family: "Roboto", sans-serif;
  background-color: var(--background);
}

.container {
  display: grid;
  grid-template-columns: auto auto auto;
  background-color: var(--darkblue);
  border-radius: 30px;
  height: fit-content;
  width: fit-content;
  padding-bottom: 50px;
}

.title {
  color: var(--light);
  font-size: 20px;
  text-align: center;
}

.titleA {
  color: rgb(66, 216, 66);
  font-size: 20px;
  text-align: center;
}

.titleD {
  color: rgb(248, 15, 15);
  font-size: 20px;
  text-align: center;
}

.titleP {
  color: grey;
  font-size: 20px;
  text-align: center;
}

.t {
  font-weight: bold;
  font-size: 20px;
}

hr {
  color: var(--light);
}

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


/*#hideme {
  animation: hideAnimation 0s ease-in 1.5s;
  animation-fill-mode: forwards;
}

@keyframes hideAnimation {
  to {
      visibility: hidden;
      width: 0;
      height: 0;
  }
}*/

/*.accept {
  color: var(--light) !important;
  background-color: green !important;
  height: 50px !important;
  width: 100px !important;
  margin-top: 100px !important;
  visibility: hidden;
}
.decline {
  color: var(--light) !important;
  background-color: red !important;
  height: 50px !important;
  width: 100px !important;
  visibility: hidden;
}
.pend {
  color: var(--light) !important;
  background-color: rgb(136, 136, 13) !important;
  height: 50px !important;
  width: 100px !important;
  visibility: hidden;
}*/
</style>
