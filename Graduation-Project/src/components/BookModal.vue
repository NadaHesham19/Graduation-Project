<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent width="500">
      <template v-slot:activator="{ props }">
        <button v-bind="props" class="btn mx-auto my-3 main-btn">
          Book <i class="mx-1 fa-regular fa-calendar"></i>
        </button>
      </template>
      <v-card>
        <v-card-title>
          <h1 class="text-h5">Book</h1>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <b>Please Enter date and time</b>
            </v-row>
            <v-row>
              <v-col cols="12" sm="10" md="8">
                <datepicker @selected="availableTime"></datepicker>
              </v-col>
            </v-row>
            <v-row>

              <v-col cols="12" sm="6" md="4">
                <label for="start time">Start Time</label>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <input type="time" v-model="start" />

              </v-col>
            </v-row>
            <v-row>

              <v-col cols="12" sm="6" md="4">
                <label for="End Time">End Time</label>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <input type="time" v-model="End" />

              </v-col>

            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <button class="btn cancel-btn mx-2" variant="text" @click="dialog = false">
            Cancel
          </button>
          <button class="btn main-btn mx-2" variant="text" @click="Booked()">
            Book
          </button>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
  
<script>
import Datepicker from "vuejs3-datepicker";
import axios from 'axios'
export default {
  data: () => ({
    dialog: false,
    date: null,
    menu: false,
    start: null,
    end: null,
    times: [
      "09:00",
      "10:00",
      "11:00",
      "12:00",
      "13:00",
      "14:00",
      "15:00",
      "16:00",
    ],
    disabledTimes: ["10:00", "12:00", "14:00"], // set the times that should be disabled
    selectedTime: "",
    jsessionId: localStorage.getItem('jsessionidValue')

  }),
  methods: {
    created() {
      axios.get('http://localhost:8080/api/spaces',
        {
          headers: {
            'Cookie': this.jsessionId,
          }

        },).filter(
          location == this.address,
          Capacity == this.type,
          date == this.date,
          startTime == this.startTime,
          endTime == this.endTime
        )
    },
  },
};
</script>
  
<style scoped>
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
  