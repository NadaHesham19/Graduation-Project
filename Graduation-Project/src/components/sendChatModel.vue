<template>
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent width="auto">
        <template v-slot:activator="{ props }">
          <button
            color="primary"
            v-bind="props"
            class="btn mx-auto send-btn main-btn"
          >
            Send 
          </button>
        </template>
        <v-card>
          <v-card-title class="text-h5"> Sent </v-card-title>
          <v-card-text
            >Thank You for Contacting us, Our Technical Team'll Contact You Soon. </v-card-text
          >
          <v-card-actions>
            <v-spacer></v-spacer>
            <button class="btn main-btn mx-2" style="width: 100px;" @click="dialog = false">Ok</button>
            
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
      
    },
  
   
  };
  </script>
  
  <style>
  .main-btn {
    background-color: var(--lightblue) !important;
    color: white !important;
    font-weight: 500 !important;
    border-radius: 15px !important;
    padding: 0.5rem 1.5rem !important;
    border: none;
    height: 50px !important;
  }
  
  .main-btn:hover , .main-btn:active {
    color: var(--darkblue) !important;
    font-weight: 700 !important;
  }

  </style>
  