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

                <div class="row justify-content-center">
                    <label class="col-lg-5 mb-4">Start Time</label>
                    <input type="text" class="col-lg-4 mb-4 inputText" ref="startTimeInput"
                        style="background-color: #d4d4d4" v-model="startTime" />
                </div>

                <div class="row justify-content-center">
                    <label class="col-lg-5 mb-4">End Time</label>
                    <input type="text" class="col-lg-4 mb-4 inputText" ref="endTimeInput" style="background-color: #d4d4d4"
                        v-model="endTime" />
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
        <v-alert color="success" icon="$success" title="Submitted Successfully" text="The data is submitted successfully"
            id="hideme" v-if="flag"></v-alert>
        <v-alert color="error" icon="$error" title="Submission Failed" text="Please Try again" id="hideme"
            v-if="error"></v-alert>
        <v-alert color="error" icon="$error" title="There is no enough points" text="Please Try again" id="hideme"
        v-if="noPoints"></v-alert>
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
            user:null,
            userPoints:0,
            noPoints:false,
        };
    },
    components: {
        NavBar,
        flatpickr,
    },
    methods: {
        computePrice(stTime, enTime, price) {
            return (enTime - stTime) * price
        },
        book() {
            // console.log(this.startTime)
            // console.log(this.endTime)
            // console.log(this.date)
            // console.log(this.userId)
            // console.log(this.spaceName)
            // console.log(this.room.spaceId)




            this.price = this.computePrice(this.startTime, this.endTime, this.room.price)
            console.log(this.price)
            axios
                .post("http://localhost:8080/api/spaces", {
                    startTime: this.startTime,
                    endTime: this.endTime,
                    date: this.data,
                    roomId: this.roomId,
                    userId: this.userID,
                    spaceName: this.spaceName,
                    qrScan: false,
                    paymentMethod: "Cash",
                    price: this.price,
                    spaceId: this.room.spaceId
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
                    this.error = false;
                    console.error(err);
                });
            
        },

        bookPoints() {
            this.price = this.computePrice(this.startTime, this.endTime, this.room.price);
            if (this.useerPoints >= this.price){
                  axios
                    .post("http://localhost:8080/api/bookings", {
                        startTime: this.startTime,
                        endTime: this.endTime,
                        date: this.data,
                        roomId: this.roomId,
                        userId: this.userID,
                        spaceName: this.spaceName,
                        qrScan: false,
                        paymentMethod: "Points",
                        price: this.price,
                        spaceId: this.room.spaceId
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
                        this.error = false;
                        console.error(err);
                    });
                }
                else{
                 this.noPoints=true;
                }
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
            .get(`http://localhost:8080/api/room/${this.roomId}`)
            .then((response) => {
                // Handle response
                this.room = response.data;
                this.name = this.room.name;
                //get space 
                axios
                    .get(`http://localhost:8080/api/spaces/${this.room.spaceId}`)
                    .then((response) => {
                        // Handle response
                        this.space = response.data;
                        this.Spacename = this.space.name;
                    })
                    .catch((err) => {
                        // Handle errors
                        console.error(err);
                    });


            })
            .catch((err) => {
                // Handle errors
                console.error(err);
            });




            //get user 
            axios
                    .get(`http://localhost:8080/api/user/${this.userID}`)
                    .then((response) => {
                        // Handle response
                        this.user = response.data;
                        this.userPoints = this.user.points;
                    })
                    .catch((err) => {
                        // Handle errors
                        console.error(err);
                    });

    },
};
</script>

<style>
.addNew {
    background-color: var(--darkblue);
    color: white;
    border-radius: 25px;
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
    animation: hideAnimation 0s ease-in 1.5s;
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
