<template>
  <NavBar/>
  <div class="container my-5 ">
    <h5 v-if="errorMsg">{{errorMsg}}</h5>
  
    <div class="request">
      <div class="title t">Requests</div>
      <hr />
      <div class="info" v-for="item in info" v-bind:key="item.spaceName">
        <div class="title" >{{ item.spaceName }}</div>
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
      <div class="title t">Status</div>
      <hr />
      <div class="information" v-for="item in info" v-bind:key="item.status"  >
        <button class="accept " disabled v-if="info.status=='accepted'">{{item.status}}</button>
        <button class="decline " disabled  v-else-if="info.status=='declined'">{{item.status}}</button>
        <button class=" pend" disabled v-else>{{item.status}}</button>
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
  data(){
    return{
      info:[
        {
          name:'',
          spaceName:'',
          status:['accepted' , 'declined' , 'pending'],
          errorMsg:''

        }
      ]
    }
  },
  methods:{
    getRequest(){
      axios.get('')
      .then((response)=>{
        this.info = response.data
      })
      .error((error)=>{
        this.errorMsg ='Error happened'
      })
    },
    created(){
      this.getRequest();
    }
  },
  /*props: [
    "FirstSpacename",
    "SecondSpacename",
    "ThirdSpacename",
    "FirstClientname",
    "SecondClientname",
    "ThirdClientname",
    "status",
  ],  */

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
  grid-template-columns: auto auto auto auto;
  background-color: var(--darkblue);
  border-radius: 30px;
  height: fit-content;
  width: fit-content;
  padding-bottom: 50px;
}
.title {
  color: var(--light);
  font-size: 20px;
}
.t {
  font-weight: bold;
  font-size: 20px;
}

hr {
  color: var(--light);
}

.status {
  display: flex;
  flex-direction: column;
}

.information {
  display: flex !important;
  flex-direction: column !important;
  justify-content: flex-start !important;
  align-items: center !important;
  align-content: center !important;
  row-gap: 100px !important;
}

.accept {
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
}
</style>


