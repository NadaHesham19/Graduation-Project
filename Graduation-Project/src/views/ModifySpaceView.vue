<template>
    <AdminNav />
    <!-- <p>{{ spaceId }}</p> -->
    <div class="details pt-4">
        <div class="container mt-5 pt-5">
            <div class="row align-items-center justify-content-evenly">
                <div class="col-6">
                    <!-- <h2 class="mb-5 pb-5 fw-bold">{{ spaceDetails.name }}</h2> -->
                    <input class=" ms-2 name" type="text" ref="name" v-model="spaceDetails.name" />
                    <span class="editable mx-2"><i class="fa-solid fa-pen-to-square" @click="EnableEdit('name')"></i></span>
                    <ul class="list-unstyled lh-lg ms-5 mb-5">
                        <li class="align-items-center m-3 fs-4 "><i class=" me-3 fa-solid fa-circle-info fs-3 "></i>
                            <input class=" ms-2" type="text" ref="desc" v-model="spaceDetails.description" />
                            <span class="editable mx-2"><i class="fa-solid fa-pen-to-square"
                                    @click="EnableEdit('desc')"></i></span>
                        </li>
                        <li class="align-items-center m-3 fs-4 "><i class="fa-solid fa-location-dot me-3 p-1"></i>

                            <input class=" ms-2" type="text" ref="address" v-model="spaceDetails.address" />
                            <span class="editable mx-2"><i class="fa-solid fa-pen-to-square"
                                    @click="EnableEdit('address')"></i></span>
                        </li>
                        <li class="align-items-center m-3 fs-4 "><i class="fa-solid fa-location-dot me-3 p-1"></i>

                            <input class=" ms-2" type="text" ref="district" v-model="spaceDetails.district" />
                            <span class="editable mx-2"><i class="fa-solid fa-pen-to-square"
                                    @click="EnableEdit('district')"></i></span>
                        </li>
                        <li class="align-items-center m-3 fs-4 "><i class="fa-solid fa-phone me-3"></i>

                            <input class=" ms-2" type="text" ref="number" v-model="spaceDetails.contactNumber" />
                            <span class="editable mx-2"><i class="fa-solid fa-pen-to-square"
                                    @click="EnableEdit('number')"></i></span>
                        </li>
                        <!-- <li class="align-items-center m-3 fs-4 "><i class="fa-solid fa-star me-3"></i>

                            <input class=" ms-2" type="text" ref="rating" v-model="spaceDetails.ratingAverage" />
                            <span class="editable mx-2"><i class="fa-solid fa-pen-to-square"
                                    @click="EnableEdit('rating')"></i></span>
                        </li> -->
                        <!-- <li class="align-items-center m-3 fs-4 "><i class="fa-solid fa-wifi me-3"></i>


                            <input class=" ms-2" type="text" ref="wifi" v-model="wifi" />
                            <span class="editable mx-2"><i class="fa-solid fa-pen-to-square"
                                    @click="EnableEdit('wifi')"></i></span>
                        </li> -->
                        <li class="align-items-center m-3 fs-4 "><i class="fa-solid fa-clock me-3"></i>

                            <input class=" ms-2" type="text" ref="start" v-model="spaceDetails.startTime" />
                            <span class="editable mx-2"><i class="fa-solid fa-pen-to-square"
                                    @click="EnableEdit('start')"></i></span>
                        </li>
                        <li class="align-items-center m-3 fs-4 "><i class="fa-solid fa-clock me-3"></i>

                            <input class=" ms-2" type="text" ref="end" v-model="spaceDetails.endTime" />
                            <span class="editable mx-2"><i class="fa-solid fa-pen-to-square"
                                    @click="EnableEdit('end')"></i></span>
                        </li>
                        <!-- <li class="align-items-center m-3 fs-4 "><i class="fa-solid fa-dollar-sign me-3"></i>

                            <input class=" ms-2" type="text" ref="min" v-model="spaceDetails.minPrice" />
                            <span class="editable mx-2"><i class="fa-solid fa-pen-to-square"
                                    @click="EnableEdit('min')"></i></span>
                        </li>
                        <li class="align-items-center m-3 fs-4 "><i class="fa-solid fa-dollar-sign me-3"></i>

                            <input class=" ms-2" type="text" ref="max" v-model="spaceDetails.maxPrice" />
                            <span class="editable mx-2"><i class="fa-solid fa-pen-to-square"
                                    @click="EnableEdit('max')"></i></span>
                        </li> -->
                        <!-- <li class="align-items-center m-3 fs-4 "><i class="fa-solid fa-mug-saucer me-3"></i>

                            <input class=" ms-2" type="text" ref="drink" v-model="spaceDetails.drinks" />
                            <span class="editable mx-2"><i class="fa-solid fa-pen-to-square"
                                    @click="EnableEdit('drink')"></i></span>
                        </li>
                        <li class="align-items-center m-3 fs-4 "><i class="fa-solid fa-tree me-3"></i>

                            <input class=" ms-2" type="text" ref="out" v-model="spaceDetails.outdoors" />
                            <span class="editable mx-2"><i class="fa-solid fa-pen-to-square"
                                    @click="EnableEdit('out')"></i></span>
                        </li> -->
                        <div class="row justify-content-center mt-5 pt-5">
                            <button class="main-btn col-lg-3 savebtn " type="submit" @click="SaveEditting">
                                Save
                            </button>
                        </div>

                    </ul>
                </div>
                <div class="col-6 mb-5">
                    <img class="img-fluid image mt-5 " :src="imageSrc" alt="" width="520">

                </div>
            </div>

            <div class="row mt-5 pt-5">
                <div class=" search pt-5">
                    <h3 class="mb-5 pb-5 fw-bold mt-5 pt-5">Search for your room:</h3>
                    <div class="pb-5 ms-5">
                        <i class="fa-solid fa-magnifying-glass search-icon"></i>
                        <form class="d-flex searchform" @submit.prevent>
                            <input class="form-control searchinput me-2 " type="search" aria-label="Search"
                                v-model="searchTerm" />
                            <button class="btn btn-outline-success main-btn search-btn" type="submit" @click="search">
                                Search
                            </button>
                        </form>
                    </div>
                    <div class="row justify-content-evenly">
                        <div class="col-4" v-for="(room) in pagedRooms" :key="room.id">
                            <ModifyRoom :room="room" />
                        </div>
                    </div>
                    <div class=" row numbers mt-5 mb-5 text-center">
                        <v-pagination active-color="#007CC7" color="#007CC7" v-model="currentPage" :length="totalPages"
                            :total-visible="7" prev-icon="mdi-chevron-left" next-icon="mdi-chevron-right"></v-pagination>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <v-alert color="error" icon="$error" title="You're not logged in" text="Please Try again" 
            v-if="this.authorizationFlag" class="alert align-items-center container">
            <button class="goButton" @click="redirectPage()">Go to Log In</button>
          </v-alert>
    <Footer />
</template>

<script>
import AdminNav from '../components/AdminNav.vue';
import ModifyRoom from '../components/ModifyRoom.vue';
import Footer from '../components/Footer.vue';
import { VPagination } from 'vuetify/components/VPagination';
//import Reviews from '../components/Reviews.vue';
import axios from "axios";



export default {
    data() {
        return {
            spaceId: this.$route.params.id,
            spaceDetails: {},
            latitude: null,
            longitude: null,
            location: [],
            map: null,
            marker: null,
            rooms: [],
            currentPage: 1,
            roomsPerPage: 3,
            searchTerm: '',
            imageSrc: "",
            rating: 0,
            comment: "",
            userID: null,
            wifi: "Offers free Wi-Fi",
            authorizationFlag: false,
            securityFlag: localStorage.getItem('securityFlag')

        }
    },
    components: {
        AdminNav, ModifyRoom, Footer,
        // Reviews
    },

    mounted() {
        this.fetchImage();
    },
    beforeMount() {

        axios
            .get(`http://localhost:8080/api/spaces/${this.spaceId}?flag=${this.securityFlag}`,

            )
            .then((response) => {
                console.log(response.data)
                this.spaceDetails = response.data;
            })
            .catch((err) => {
                // Handle errors
                if (err.response.data.message === "Unauthorized request") {
                    this.authorizationFlag = true
                    console.log(this.authorizationFlag)
                }
            })
        axios
            .get(`http://localhost:8080/api/room/getBySpace/${this.spaceId}?flag=${this.securityFlag}`,)
            .then((response) => {
                console.log(response.data)
                this.rooms = response.data;
            })
            .catch((err) => {
                // Handle errors
                if (err.response.data.message === "Unauthorized request") {
                    this.authorizationFlag = true
                    console.log(this.authorizationFlag)
                }
            })
        axios
            .get(`http://localhost:8080/api/spaces/getCoordinates/?spaceId=${this.spaceId}?flag=${this.securityFlag}`,
            )
            .then((response) => {
                console.log(response.data, "location")
                this.location = response.data;
                this.latitude = this.location[0];
                this.longitude = this.location[1];
                this.initializeMap();


            })
            .catch((err) => {
                // Handle errors
                if (err.response.data.message === "Unauthorized request") {
                    this.authorizationFlag = true
                    console.log(this.authorizationFlag)
                }
            })
        this.userID = localStorage.getItem("userID");
    },
    computed: {
        ratings() {
            return this.rating = this.spaceDetails.ratingAverage;
        },

        totalPages() {
            const filteredRooms = this.rooms.filter(room => {
                const searchTerm = this.searchTerm.toLowerCase();
                return room.name.toLowerCase().includes(searchTerm) ||
                    room.number.toString().includes(searchTerm);
            });
            return Math.ceil(filteredRooms.length / this.roomsPerPage);
        },
        pagedRooms() {
            let filteredRooms = this.rooms;
            if (this.searchTerm) {
                filteredRooms = this.rooms.filter(room => {
                    const searchTerm = this.searchTerm.toLowerCase();
                    return room.name.toLowerCase().includes(searchTerm) ||
                        room.number.toString().includes(searchTerm);
                });
            }
            const startIndex = (this.currentPage - 1) * this.roomsPerPage;
            const endIndex = startIndex + this.roomsPerPage;
            return filteredRooms.slice(startIndex, endIndex);
        },
    }, methods: {
        redirectPage(){
      this.$router.push('/')
    },
        EnableEdit(field) {
            this.$refs[field].focus();
        },
        SaveEditting() {
            axios.patch(`http://localhost:8080/api/spaces/${this.spaceId}?flag=${this.securityFlag}`,
                {
                    address: this.spaceDetails.address,
                    district: this.spaceDetails.district,
                    name: this.spaceDetails.name,
                    description: this.spaceDetails.description,

                    contactNumber: this.spaceDetails.contactNumber,
                    minPrice: this.spaceDetails.minPrice,
                    maxPrice: this.spaceDetails.maxPrice,
                    startTime: this.spaceDetails.startTime,
                    endTime: this.spaceDetails.endTime,
                    drinks: this.spaceDetails.drinks,

                    outdoors: this.spaceDetails.outdoors,
                    ratingAverage: this.spaceDetails.ratingAverage,
                }).then((res) => {
                    console.log(res);
                    window.location.reload()
                })
                .catch((err) => {
                    // Handle errors
                    if (err.response.data.message === "Unauthorized request") {
                        this.authorizationFlag = true
                        console.log(this.authorizationFlag)
                    }
                })


        }
        , submit() {

            console.log("Rating:", this.rating);
            console.log("Comment:", this.comment);
            console.log("spaceId:", this.spaceId);
            console.log("userId:", this.userID);

            axios
                .post(`http://localhost:8080/api/ratings?flag=${this.securityFlag}`, {
                    comment: this.comment,
                    rating: this.rating,
                    space: { spaceId: this.spaceId },
                    user: { userId: this.userID }
                })

                .catch((err) => {
                    // Handle errors
                    if (err.response.data.message === "Unauthorized request") {
                        this.authorizationFlag = true
                        console.log(this.authorizationFlag)
                    }
                })

            this.rating = 0;
            this.comment = "";
        },
        initializeMap() {
            this.map = new google.maps.Map(document.getElementById('map'), {
                center: { lat: this.latitude, lng: this.longitude },
                zoom: 12
            });

            this.marker = new google.maps.Marker({
                position: { lat: this.latitude, lng: this.longitude },
                map: this.map
            });
        },
        search() {
            this.currentPage = 1;
        },
        displayBooleanValue(value) {
            return value ? "Yes" : "No";
        },
        fetchImage() {
            axios
                .get(`http://localhost:8080/api/images/space/${this.spaceId}/0`, {
                    responseType: "arraybuffer",
                })
                .then((response) => {
                    const blob = new Blob([response.data], { type: "image/jpeg" }); // Create a Blob 
                    this.imageSrc = URL.createObjectURL(blob); //  URL for the Blob
                })
                .catch((error) => {
                    console.error(error);
                });
        },
    },

}
</script>

<style scoped>
.goButton{
    background-color: var(--light)!important;
    color: black!important;
    border-radius: 15px !important;
    height: 40px !important;
    width:100px !important;
    font-weight: 500 !important;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top:10px;
  
  }
  .alert{
    width:400px;
    display: flex;
    border-radius: 25px;
  }
.details {
    color: #203467;
    background-color: var(--background);
    line-height: 1.5;
}

.image {
    border-radius: 15px;
}

.map {
    width: 900px;
    height: 450px;
    margin: auto;
    border-radius: 15px;
}

.name {
    font-size: 40px;
    font-weight: 600;
}

.searchinput {

    width: 340px !important;
    height: 55px !important;

    background: #d9d9d9 !important;
    border-radius: 50px !important;
    padding-left: 45px !important;
}

.search-btn {

    width: 106px !important;
    height: 55px !important;
    margin-left: -110px;
    border-radius: 50px !important;
}

.search-icon {
    position: absolute;
    top: 858px;
    left: 150px !important;
    z-index: 1;
    left: 40px;
    color: var(--darkblue);
}

.commentbtn {
    width: 105px !important;
    margin-top: 100px !important;
    margin-left: -350px;
    border-radius: 50px !important;
}

.location {
    margin-top: 30px;
}

.editable {
    cursor: pointer;
    font-size: 20px;
}

input {
    color: #203467;
}

.savebtn {
    border-radius: 50px !important;
    font-weight: 700 !important;

}
</style>