<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" persistent width="500">
            <template v-slot:activator="{ props }">
                <button v-bind="props" class="btn mx-auto my-3 main-btn">
                    Book <i class="mx-1 fa-regular fa-calendar"></i>
                </button>
            </template>
            <v-card height="530">
                <v-card-title>
                    <h1 class="text-h4 mt-3">Book</h1>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <b class="mb-5">Please Enter date and time</b>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="10" md="8">
                                <VueDatePicker :model-value="date" :min-date="new Date()" :enable-time-picker="false"
                                    @update:model-value="date = $event" />
                            </v-col>
                        </v-row>
                        <v-row class="mt-5 time">
                            <v-col cols="12" sm="6" md="4">
                                <label for="start time">Start Time</label>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <input class="mt-2" type="time" v-model="start" list="timeOptions"
                                    :disabled="disabledTimes.includes(start)" />
                                <datalist id="timeOptions">
                                    <option value="01:00"></option>
                                    <option value="01:30"></option>
                                    <option value="02:00"></option>
                                    <option value="02:30"></option>
                                    <option value="03:00"></option>
                                    <option value="03:30"></option>
                                    <option value="04:00"></option>
                                    <option value="04:30"></option>
                                    <option value="05:00"></option>
                                    <option value="05:30"></option>
                                    <option value="06:00"></option>
                                    <option value="06:30"></option>
                                    <option value="07:00"></option>
                                    <option value="07:30"></option>
                                    <option value="08:00"></option>
                                    <option value="08:30"></option>
                                    <option value="09:00"></option>
                                    <option value="09:30"></option>
                                    <option value="10:00"></option>
                                    <option value="10:30"></option>
                                    <option value="11:00"></option>
                                    <option value="11:30"></option>
                                    <option value="12:00"></option>
                                    <option value="12:30"></option>
                                    <option value="13:00"></option>
                                    <option value="13:30"></option>
                                    <option value="14:00"></option>
                                    <option value="14:30"></option>
                                    <option value="15:00"></option>
                                    <option value="15:30"></option>
                                    <option value="16:00"></option>
                                    <option value="16:30"></option>
                                    <option value="17:00"></option>
                                    <option value="17:30"></option>
                                    <option value="18:00"></option>
                                    <option value="18:30"></option>
                                    <option value="19:00"></option>
                                    <option value="19:30"></option>
                                    <option value="20:00"></option>
                                    <option value="20:30"></option>
                                    <option value="21:00"></option>
                                    <option value="21:30"></option>
                                    <option value="22:00"></option>
                                    <option value="22:30"></option>
                                    <option value="23:00"></option>
                                    <option value="23:30"></option>
                                    <option value="00:00"></option>
                                    <option value="00:30"></option>
                                </datalist>
                            </v-col>
                        </v-row>
                        <v-row class="mt-5">
                            <v-col cols="12" sm="6" md="4">
                                <label for="End Time">End Time </label>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <input class="mt-2" type="time" v-model="end" list="timeOptions"
                                    :disabled="disabledTimes.includes(end)" />
                                <datalist id="timeOptions">
                                    <option value="01:00"></option>
                                    <option value="01:30"></option>
                                    <option value="02:00"></option>
                                    <option value="02:30"></option>
                                    <option value="03:00"></option>
                                    <option value="03:30"></option>
                                    <option value="04:00"></option>
                                    <option value="04:30"></option>
                                    <option value="05:00"></option>
                                    <option value="05:30"></option>
                                    <option value="06:00"></option>
                                    <option value="06:30"></option>
                                    <option value="07:00"></option>
                                    <option value="07:30"></option>
                                    <option value="08:00"></option>
                                    <option value="08:30"></option>
                                    <option value="09:00"></option>
                                    <option value="09:30"></option>
                                    <option value="10:00"></option>
                                    <option value="10:30"></option>
                                    <option value="11:00"></option>
                                    <option value="11:30"></option>
                                    <option value="12:00"></option>
                                    <option value="12:30"></option>
                                    <option value="13:00"></option>
                                    <option value="13:30"></option>
                                    <option value="14:00"></option>
                                    <option value="14:30"></option>
                                    <option value="15:00"></option>
                                    <option value="15:30"></option>
                                    <option value="16:00"></option>
                                    <option value="16:30"></option>
                                    <option value="17:00"></option>
                                    <option value="17:30"></option>
                                    <option value="18:00"></option>
                                    <option value="18:30"></option>
                                    <option value="19:00"></option>
                                    <option value="19:30"></option>
                                    <option value="20:00"></option>
                                    <option value="20:30"></option>
                                    <option value="21:00"></option>
                                    <option value="21:30"></option>
                                    <option value="22:00"></option>
                                    <option value="22:30"></option>
                                    <option value="23:00"></option>
                                    <option value="23:30"></option>
                                    <option value="00:00"></option>
                                    <option value="00:30"></option>
                                </datalist>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <button class="btn cancel-btn mx-2" variant="text" @click="dialog = false">
                        Cancel
                    </button>
                    <button class="btn main-btn mx-2" variant="text" @click="rebookPoints" :disabled="value">
                        Pay by Points
                    </button>
                    <button class="btn main-btn mx-2" variant="text" @click="rebookCash">
                        Pay by Cash
                    </button>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
export default {
    data: () => ({
        dialog: false,
        date: null,
        menu: false,
        start: null,
        end: null,

    }), props: ['spaceId'],
    mounted() {
        console.log(this.spaceId, "id")

    },
    methods: {
        book() {
            this.dialog = false;
        },
        availableTime() { },
        save(date) {
            this.$refs.menu.save(date);
        },
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
        }
    },
    watch: {
        menu(val) {
            val && setTimeout(() => (this.$refs.picker.activePicker = "YEAR"));
        },
    },
    components: {
        VueDatePicker,
    }, computed: {
        disabledTimes() {
            const startTime = '10:00:00';
            const endTime = '12:00:00';
            const timeOptions = [
                '01:00', '01:30', '02:00', '02:30', '03:00', '03:30', '04:00', '04:30', '05:00',
                '05:30', '06:00', '06:30', '07:00', '07:30', '08:00', '08:30', '09:00', '09:30',
                '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00',
                '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30',
                '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00',
                '23:30', '00:00', '00:30'
            ];

            // Filter out the time options that are outside the specified range
            const disabledTimes = timeOptions.filter(time => {
                const timeValue = this.convertTime12to24(time);
                return timeValue < startTime || timeValue > endTime;
            });
            console.log(disabledTimes)
            return disabledTimes;
        }
    }
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

.time {
    margin-top: 60px !important;
}

h1,
b,
label {
    color: var(--darkblue) !important;
}
</style>
