<template>
    <NavBar />
    <div class="container mt-5">
        <div class="row justify-content-center align-items-center mb-5 w-100">
            <div class="col-lg-9 addNew">
                <h1 class="text-center my-5">Book</h1>

                <div class="row justify-content-center">
                    <label class="col-lg-5 mb-4">Room Name</label>
                    <input type="tel" class="col-lg-4 mb-4 inputText" style="background-color: #d4d4d4" v-model="name"
                        disabled />
                </div>
                <div class="row justify-content-center">
                    <label class="col-lg-5 mb-4">Date</label>
                    <input type="date" class="col-lg-4 mb-4 inputText" style="background-color: #d4d4d4" v-model="date"
                        :min="getCurrentDate()" />
                </div>
                <div class="row justify-content-center" v-if="inputDateError">
                    <p class="col-lg-4 mb-2 text-danger error">*Please enter a specific Date.</p>
                </div>

                <div class="row justify-content-center">
                    <label class="col-lg-5 mb-4">Start Time</label>
                    <input type="text" class="col-lg-4 mb-4 inputText" ref="startTimeInput"
                        style="background-color: #d4d4d4" v-model="startTime" />
                </div>
                <div class="row justify-content-center" v-if="inputStartError">
                    <p class="col-lg-4 mb-2 text-danger error">*Please enter a start time.</p>
                </div>
                <div class="row justify-content-center">
                    <label class="col-lg-5 mb-4">End Time</label>
                    <input type="text" class="col-lg-4 mb-4 inputText" ref="endTimeInput" style="background-color: #d4d4d4"
                        v-model="endTime" />
                </div>
                <div class="row justify-content-center" v-if="inputEndError">
                    <p class="col-lg-4 mb-2 text-danger error">*Please enter an end time.</p>
                </div>
                <div class="row justify-content-center align-items-center mt-3">
                    <button class="col-lg-3 mb-5 text-center main-btn" type="submit" @click="book">
                        Book By Cash
                    </button>
                </div>
                <div class="row justify-content-center align-items-center mt-3">
                    <button class="col-lg-3 mb-5 text-center main-btn" type="submit" @click="bookPoints">
                        Book By Points
                    </button>
                </div>
            </div>
        </div>
        <v-alert color="success" icon="$success" title="Booked Successfully" text="Your Booking is successfull" id="hideme"
            v-if="flag"></v-alert>
        <v-alert color="error" icon="$error" title= "Room is Booked at this time" text="Please Try again and try another time slot"
            id="hideme" v-if="error"></v-alert>


        <v-alert color="error" icon="$error" title="There Is No Enough Points" text="Please Try again" id="hideme"
            v-if="noPoints"></v-alert>
        <v-alert color="error" icon="$error" title="You're not logged in" text="Please Try again"
            v-if="this.authorizationFlag" class="alert align-items-center container">
            <button class="goButton" @click="redirectPage()">Go to Log In</button>
        </v-alert>




    </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import axios from "axios";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

export default {
    data() {
        return {
            name: "",
            date: "",
            startTime: "",
            endTime: "",
            roomId: "",
            flag: false,
            errorMessage: "",
            error: false,
            userID: localStorage.getItem("userID"),
            room: null,
            space: null,
            spaceName: '',
            user: null,
            userPoints: 0,
            noPoints: false,
            authorizationFlag: false,
            securityFlag: localStorage.getItem('securityFlag'),
            spaceId: '',
            dateGood: '',
            inputDateError: false,
            inputStartError: false,
            inputEndError: false,
        };
    },
    components: {
        NavBar,
        flatpickr,
    },
    methods: {

        redirectPage() {
            this.$router.push('/')
        },

        calculateTotalPrice(startTime, endTime, pricePerUnit) {
            // Convert time strings to Date objects
            const startDate = new Date(`1970/01/01 ${startTime}`);
            const endDate = new Date(`1970/01/01 ${endTime}`);

            // Calculate the duration in minutes
            const duration = (endDate - startDate) / (1000 * 60);

            // Calculate the total price
            const totalPrice = (duration / 30) * pricePerUnit;

            // Return the total price
            return totalPrice;
        }
        , formatDate(date) {
            var parts = date.split("-");
            var year = parts[0];
            var month = parts[1];
            var day = parts[2];

            return day + "-" + month + "-" + year;

        },
        book() {
            this.inputDateError = false;
            this.inputEndError = false;
            this.inputStartError = false;
            if (!this.date) {
                this.inputDateError = true;
                return;
            }
            if (!this.startTime) {
                this.inputStartError = true;
                return;
            }
            if (!this.endTime) {
                this.inputEndError = true;
                return;
            }
            this.price = this.calculateTotalPrice(this.startTime, this.endTime, this.room.price)
            this.dateGood = this.formatDate(this.date);
            axios

                .post(`http://localhost:8080/api/bookings?flag=${this.securityFlag}`, {
                    startTime: this.startTime,
                    endTime: this.endTime,
                    date: this.dateGood,
                    roomId: this.roomId,
                    userId: this.userID,
                    spaceName: this.spaceName,
                    qrScan: false,
                    paymentMethod: "Cash",
                    price: this.price,
                })
                .then((response) => {
                    if (response.data.error) {
                        this.errorMessage = response.data.message;
                    } else {
                        this.flag = true;
                    }
                })
                .catch((err) => {
                    // Handle errors
                    this.error=true;
                    if (err.response.data.message === "Unauthorized request") {
                        this.authorizationFlag = true
                        console.log(this.authorizationFlag)
                    }
                });
                setTimeout(() => {
                this.flag = false;
                this.error = false;
                this.noPoints = false;
            }, 3000);
        },

        bookPoints() {
            this.inputDateError = false;
            this.inputEndError = false;
            this.inputStartError = false;
            if (!this.date) {
                this.inputDateError = true;
                return;
            }
            if (!this.startTime) {
                this.inputStartError = true;
                return;
            }
            if (!this.endTime) {
                this.inputEndError = true;
                return;
            }
            this.price = this.calculateTotalPrice(this.startTime, this.endTime, this.room.price);
            if (this.useerPoints >= this.price) {
                axios
                    .post(`http://localhost:8080/api/bookings?flag=${this.securityFlag}`, {
                        startTime: this.startTime,
                        endTime: this.endTime,
                        date: this.data,
                        roomId: this.roomId,
                        userId: this.userID,
                        spaceName: this.spaceName,
                        qrScan: false,
                        paymentMethod: "Points",
                        price: this.price,
                    })
                    .then((response) => {
                        if (response.data.error) {
                            this.errorMessage = response.data.message;
                        } else {
                            this.flag = true;
                        }
                    })
                    .catch((err) => {
                        // Handle errors
                          this.error=true
                        if (err.response.data.message === "Unauthorized request") {
                            this.authorizationFlag = true
                            console.log(this.authorizationFlag)
                        }
                    })
            }
            else {
                this.noPoints = true;
            }
            setTimeout(() => {
                this.flag = false;
                this.error = false;
                this.noPoints = false;
            }, 3000);


        },
        getCurrentDate() {
            const today = new Date();
            const year = today.getFullYear();
            const month = (today.getMonth() + 1).toString().padStart(2, "0");
            const day = today.getDate().toString().padStart(2, "0");
            return `${year}-${month}-${day}`;
        },
    },
    mounted() {
        flatpickr(this.$refs.startTimeInput, {
            enableTime: true,
            noCalendar: true,
            dateFormat: "H:i:ss",
            time_24hr: true,
            minuteIncrement: 30,
        });
        flatpickr(this.$refs.endTimeInput, {
            enableTime: true,
            noCalendar: true,
            dateFormat: "H:i:ss",
            time_24hr: true,
            minuteIncrement: 30,
        });
    },
    beforeMount() {
        this.roomId = this.$route.params.id;
        //get room 
        axios
            .get(`http://localhost:8080/api/room/${this.roomId}?flag=${this.securityFlag}`)
            .then((response) => {
                // Handle response
                this.room = response.data;
                this.name = this.room.name;
                console.log(this.name)

            })
            .catch((err) => {
                // Handle errors

                if (err.response.data.message === "Unauthorized request") {
                    this.authorizationFlag = true
                    console.log(this.authorizationFlag)
                }
            })




        //get user 
        axios
            .get(`http://localhost:8080/api/user/${this.userID}?flag=${this.securityFlag}`)
            .then((response) => {
                // Handle response
                this.user = response.data;
                this.userPoints = this.user.points;
            })
            .catch((err) => {
                // Handle errors

                if (err.response.data.message === "Unauthorized request") {
                    this.authorizationFlag = true
                    console.log(this.authorizationFlag)
                }
            })


        // get space
        axios
            .get(`http://localhost:8080/api/spaces/room/${this.roomId}?flag=${this.securityFlag}`)
            .then((response) => {
                // Handle response
                this.space = response.data;
                this.spaceName = this.space.name;
                this.spaceId = this.space.spaceId



            })
            .catch((err) => {
                // Handle errors

                if (err.response.data.message === "Unauthorized request") {
                    this.authorizationFlag = true
                    console.log(this.authorizationFlag)
                }
            });
    },
};
</script>

<style>
.goButton {
    background-color: var(--light) !important;
    color: black !important;
    border-radius: 15px !important;
    height: 40px !important;
    width: 100px !important;
    font-weight: 500 !important;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;

}

.alert {
    width: 400px;
    display: flex;
    border-radius: 25px;
}

.addNew {
    background-color: var(--darkblue);
    color: white;
    border-radius: 25px;
}

.error {
    margin-left: 410px !important;
}

.inputText {
    border-radius: 25px;
    border: none;
    height: 40px;
}

.main-btn {
    background-color: var(--lightblue) !important;
    color: white !important;
    font-weight: 500 !important;
    border-radius: 15px !important;
    padding: 0.5rem 1.5rem !important;
    border: none;
    height: 50px;
}

.main-btn:hover {
    color: var(--darkblue) !important;
    font-weight: 700 !important;
}

.success {
    background-color: green;
    color: white;
    height: 50px;
    font-size: 28px;
    font-style: bold;
    border-radius: 10px;
}

#hideme {
    animation: hideAnimation 0s ease-in 2.5s;
    animation-fill-mode: forwards;
}

@keyframes hideAnimation {
    to {
        visibility: hidden;
        width: 0;
        height: 0;
    }
}
</style>
