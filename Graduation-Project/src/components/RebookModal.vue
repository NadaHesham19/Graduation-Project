<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent width="500" >
      <template v-slot:activator="{ props }">
        <button v-bind="props" class="btn mx-auto my-3 main-btn">
          Rebook <i class="mx-1 fa-regular fa-calendar"></i>
        </button>
      </template>
      <v-card>
        <v-card-title>
          <h1 class="text-h5">Rebook</h1>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row class="my-3">
              <b>Please Enter date and time</b>
            </v-row>
            <v-row class="my-3">
              <v-col cols="12" sm="10" md="8">

                <VueDatePicker :model-value="date" :min-date="new Date()" :enable-time-picker="false"
                  @update:model-value="getAvailableTime" v-model="date"/>

                <VueDatePicker :min-date="new Date()" :enable-time-picker="false" @update:model-value="getAvailableTime()"
                  v-model="selectedDate" />
                <!-- <datepicker :inline="true" :icon-color="red"/> -->

              </v-col>
            </v-row>
            <v-row class="my-3">
              <v-col cols="12" sm="6" md="4">
                <label for="start time" class="time-dropdown__label">Start Time</label>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <select id="time" v-model="selectedStartTime" :disabled="flag" class="time-dropdown__select">
                  <option v-for="time in times" :value="start" class="time-dropdown__option">
                    {{ time }}
                  </option>
                </select>
              </v-col>
            </v-row>
            <v-row class="my-3">
              <v-col cols="12" sm="6" md="4">
                <label for="End Time" class="time-dropdown__label" >End Time</label>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <select id="time" v-model="selectedEndTime" :disabled="flag" class="time-dropdown__select">
                  <option v-for=" (time, index ) in times" :key="index" :value="end" class="time-dropdown__option"
                    :disabled="booked">
                    {{ time }}
                  </option>
                </select>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <button class="btn cancel-btn mx-2 my-5" variant="text" @click="dialog = false">
            Cancel
          </button>
          <button class="btn main-btn mx-2 my-5" variant="text" @click="rebookPoints" :disabled="value">
            Pay by Points
          </button>
          <button class="btn main-btn mx-2" variant="text" @click="rebookCash">
            Pay by Cash
          </button>
        </v-card-actions>
      </v-card>
      <div class="d-none">{{ roomId }}</div>
    </v-dialog>
  </v-row>
</template>

<script>
import VueDatePicker from '@vuepic/vue-datepicker';
import Datepicker from 'vuejs3-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import axios from 'axios'
import { ref } from 'vue';
import moment from 'moment';
export default {
  data: () => ({
    value: true,
    dialog: false,
    menu: false,
    start: null,
    end: null,

    flag:true,
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

    flag: true,
    selectedDate: '19-11-2023',
    booked: false,
    // times: [
    //   "09:00",
    //   "10:00",
    //   "11:00",
    //   "12:00",
    //   "13:00",
    //   "14:00",
    //   "15:00",
    //   "16:00",
    // ],
    // disabledTimes: ["10:00", "12:00", "14:00"], // set the times that should be disabled
    selectedStartTime: "",
    selectedEndTime: "",
    disabledTimes: [],
    times: [],
    disabled: [],
    userID: localStorage.getItem('userID'),
  }),
  components: {
    VueDatePicker, Datepicker
  },
  props: [
    'roomId'
  ],
  methods: {
    rebookPoints() {
      this.dialog = false;

    },
    rebookRoom() {
      this.dialog = false;
    },
    availableTime() { },

    convertTime12to24(time12h) {
      const [time, modifier] = time12h.split(" ");

      let [hours, minutes] = time.split(":");

      if (hours === "12") {
        hours = "00";
      }

      if (modifier === "PM") {
        hours = parseInt(hours, 10) + 12;
      }

      return `${hours}:${minutes}:00`;
    },

    // formatDate(dateString) {
    //   const dateParts = dateString.split(' ');
    //   const day = dateParts[2];
    //   const monthName = dateParts[1];
    //   const year = dateParts[3];

    //   const months = {
    //     Jan: '01', Feb: '02', Mar: '03', Apr: '04', May: '05', Jun: '06',
    //     Jul: '07', Aug: '08', Sep: '09', Oct: '10', Nov: '11', Dec: '12'
    //   };

    //   const month = months[monthName];

    //   return `${day}-${month}-${year}`;
    // },
    getAvailableTime() {
      // this.selectedDate=this.date,
      //api call to get disabled time
      console.log(this.selectedDate)
      console.log(this.roomId)
      axios
        .get(`http://localhost:8080/api/bookings/roomBookings/${this.roomId}?date=${this.selectedDate}`)
        .then((response) => {
          // Handle response
          this.disabledTimes = response.data;

          console.log(this.disabledTimes)
        })
        .catch((err) => {
          // Handle errors
          console.error(err);
        });

      // this.flag=false
      

    },
  },
  watch: {
    menu(val) {
      val && setTimeout(() => (this.$refs.picker.activePicker = "YEAR"));
    },
  }, 
  beforeMount() {
    axios
      .get(`http://localhost:8080/api/user/${this.userID}`)
      .then((response) => {

        // Handle response
        this.user = response.data;
        if (this.user.points > 10) {
          this.value = false
        }
      })
      .catch((err) => {
        // Handle errors
        console.error(err);
      });

    for (var hour = 0; hour < 24; hour++) {
      for (var minute = 0; minute < 60; minute += 30) {
        var timeStr = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        this.times.push(timeStr);
        this.disabled.push(false)
      }
    }
  },
  components: {
    VueDatePicker,
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

.time-dropdown__label {
  font-weight: bold;
  margin-bottom: 5px;
}

.time-dropdown__select {
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  width: 200px;
  margin-bottom: 10px;
}

.time-dropdown__option {
  padding: 5px;
}

.time-dropdown__selected {
  font-style: italic;
}
</style>
