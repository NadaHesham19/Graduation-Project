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
          jsessionId:''
          

        }
      ],

    }
  },
  methods: {

  },

  beforeMount() {
    this.userId = localStorage.getItem('userID')
    this.jsessionId = localStorage.getItem('jsessionidValue')

    axios.get(`http://localhost:8080/api/requests/users/${this.userId}`,
      {
        headers:{
          'Cookie': this.jsessionId,
        }
          
      },
    )
      .then((response) => {
        this.info = response.data
        console.log(response.data)
      })
      .catch((err) => {
        // Handle errors
        console.error(err);
      });
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
