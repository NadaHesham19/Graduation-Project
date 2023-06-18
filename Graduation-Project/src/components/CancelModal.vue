<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent width="auto">
      <template v-slot:activator="{ props }">
        <button
          color="primary"
          v-bind="props"
          class="btn mx-auto cancel-btn main-btn"
        >
          Cancel <i class="mx-1 fa-solid fa-xmark"></i>
        </button>
      </template>
      <v-card>
        <v-card-title class="text-h5"> Cancel </v-card-title>
        <v-card-text
          >Are you sure you want to cancel this booking ?</v-card-text
        >
        <v-card-actions>
          <v-spacer></v-spacer>
          <button class="btn cancel-btn mx-2" @click="Cancel" style="width: 70px;">Yes</button>
          <button class="btn main-btn mx-2" @click="dialog = false" >No</button>
        </v-card-actions>
      
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },
  props:[

  ]

,
  methods: {
    Cancel(){
      fetch(`http://localhost:8080/api/bookings/${roomId}`, { method: 'DELETE' })
    .then(() => this.status = 'Delete successful');
    this.dialog=false
    }
  },

 
};
</script>

<style>
.cancel-btn {
  background-color: rgb(169, 11, 11);
  color: #fff;
  border-radius: 15px;
  height: 50px;
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

.cancel-btn:hover {
  color: var(--darkblue) !important;
  font-weight: 700 !important;
}
</style>
