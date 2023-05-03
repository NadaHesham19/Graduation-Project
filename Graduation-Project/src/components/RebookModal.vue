<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      width="1024"
    >
      <template v-slot:activator="{ props }">
        <v-btn
          v-bind="props"
          class="btn mx-auto main-btn"
        >
        Rebook <i class="mx-1 fa-regular fa-calendar"></i>
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <h1 class="text-h5">Please enter the date and time</h1>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Date"
                  required
                  type="datetime-local"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
              
                ></v-text-field>
              </v-col>
            
              
               
            </v-row>
          </v-container>
         
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            class="btn cancel-btn"
            variant="text"
            @click="dialog = false"
          >
            Cancel
          </v-btn>
          <v-btn
           class="btn main-btn"
            variant="text"
            @click="dialog = false"
          >
            Book
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  export default {
    data: () => ({
      dialog: false,
    }),
  }
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

</style>