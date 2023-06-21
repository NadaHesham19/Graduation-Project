<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent width="auto">
      <template v-slot:activator="{ props }">
        <button
          color="primary"
          v-bind="props"
          class="btn mx-auto main-btn "
        >
          Accept 
        </button>
      </template>
      <v-card>
        <v-card-title class="text-h5"> Accept </v-card-title>
        <v-card-text class="question"
          >Are you sure you want to accept this request ?</v-card-text
        >
        <v-card-actions>
          <v-spacer></v-spacer>
          <button class="btn accept-btn mx-2" @click="Accept()" >Yes</button>
          <button class="btn main-btn mx-2" @click="dialog = false">No</button>
        </v-card-actions>
      
      </v-card>
    </v-dialog>
  </v-row>
  <div >{{requestId}}</div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      dialog: false,
      userID:localStorage.getItem('userID'),
      requestId: '',
      /*status: 'approved'*/
      
    };
  },
  props:[
    'requestId'

  ]

,
  methods: {
    Accept(){
      const url = `http://localhost:8080/api/admin/requests/?status=approved&requestID=${this.requestId}`
      axios.post(url)
      .then((response)=>{
      this.status = 'approved'
      console.log(this.status)
    })
    this.dialog=false
    console.log(this.dialog)
    
    .catch((err) => {
      // Handle errors
      console.error(err);
    });
  },
 
},
};
</script>

<style>

.accept-btn {
  background-color: rgb(169, 11, 11) !important;
  color: #fff !important;
  border-radius: 15px !important;
  height: 50px !important;
  width:70px !important;
  font-weight: 500 !important;
  border: none;
}

.main-btn {
  background-color: var(--lightblue) !important;
  color: white !important;
  font-weight: 500 !important;
  border-radius: 15px !important;
  padding: 0.5rem 1.5rem !important;
  border: none;
  height: 50px !important;
}

.main-btn:hover {
  color: var(--darkblue) !important;
  font-weight: 700 !important;
}

.accept-btn:hover {
  color: var(--darkblue) !important;
  font-weight: 700 !important;
}

.question{
  font-family: 'Roboto';
}
</style>