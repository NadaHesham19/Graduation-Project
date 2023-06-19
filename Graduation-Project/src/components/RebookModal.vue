<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent width="500">
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
            <v-row>
              <b >Please Enter date and time</b>
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
          <button
            class="btn cancel-btn mx-2"
            variant="text"
            @click="dialog = false"
          >
            Cancel
          </button>
          <button class="btn main-btn mx-2" variant="text" @click="rebookRoom">
            Book
          </button>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import Datepicker from "vuejs3-datepicker";
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
  }),
  methods: {
    rebookRoom() {
      this.dialog = false;
    },
    availableTime() {},
    save(date) {
      this.$refs.menu.save(date);
    },
    convertTime12to24(time12h){ 
        const [time, modifier] = time12h.split(" ");

        let [hours, minutes] = time.split(":");

        if (hours === "12") {
          hours = "00";
        }

        if (modifier === "PM") {
          hours = parseInt(hours, 10) + 12;
        }

        return `${hours}:${minutes}:00`;
      }
  },
  watch: {
    menu(val) {
      val && setTimeout(() => (this.$refs.picker.activePicker = "YEAR"));
    },
  },
  components: {
    Datepicker,
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
