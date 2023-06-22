<template>
    <NavBar />
    <!-- <p>{{ spaceId }}</p> -->
    <div class="details pt-4">
        <div class="container mt-5 pt-5">
            <div class="row align-items-center justify-content-evenly">
                <div class="col-6">
                    <h2 class="mb-5 pb-5 fw-bold">{{ spaceDetails.name }}</h2>
                    <ul class="list-unstyled lh-lg ms-5 mb-5">
                        <li class="align-items-center m-3 fs-4 "><i class=" me-3 fa-solid fa-circle-info fs-3 "></i>
                            {{ spaceDetails.description }}
                        </li>
                        <li class="align-items-center m-3 fs-4 "><i class="fa-solid fa-location-dot me-3 p-1"></i>
                            {{ spaceDetails.address }}, {{ spaceDetails.district }}
                        </li>
                        <li class="align-items-center m-3 fs-4 "><i class="fa-solid fa-phone me-3"></i>
                            {{ spaceDetails.contactNumber }}
                        </li>
                        <li class="align-items-center m-3 fs-4 "><i class="fa-solid fa-star me-3"></i>
                            {{ spaceDetails.ratingAverage }}
                        </li>
                        <li class="align-items-center m-3 fs-4 "><i class="fa-solid fa-wifi me-3"></i>
                            Offers free Wi-Fi
                        </li>
                        <li class="align-items-center m-3 fs-4 "><i class="fa-solid fa-clock me-3"></i>
                            {{ spaceDetails.startTime }} - {{ spaceDetails.endTime }}
                        </li>
                        <li class="align-items-center m-3 fs-4 "><i class="fa-solid fa-dollar-sign me-3"></i>
                            {{ spaceDetails.minPrice }} - {{ spaceDetails.maxPrice }}
                        </li>
                        <li class="align-items-center m-3 fs-4 "><i class="fa-solid fa-mug-saucer me-3"></i>
                            Drinks: {{ displayBooleanValue(spaceDetails.drinks) }}
                        </li>
                        <li class="align-items-center m-3 fs-4 "><i class="fa-solid fa-tree me-3"></i>
                            Outdoors: {{ displayBooleanValue(spaceDetails.outdoors) }}
                        </li>
                    </ul>
                </div>
                <div class="col-6 mb-5">
                    <img class="img-fluid image mt-5 " :src="imageSrc" alt="" width="520">

                </div>
            </div>

            <div class="text-center">
                <v-rating v-model="rating" hover half-increments></v-rating>
                <pre>{{ rating }}</pre>
            </div>

            <div class="row mt-5 pt-5">
                <div class="location">
                    <h3 class="mb-5 pb-5 fw-bold">Our Locations:</h3>
                    <div class="map p-5" id="map"></div>
                </div>
            </div>
            <div class="row mt-5 pt-5">
                <div class=" search pt-5">
                    <h3 class="mb-5 pb-5 fw-bold mt-5 pt-5">Search for your room by name or capacity:</h3>
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
                            <RoomCard :room="room" />
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
    <Footer />
</template>

<script>
import NavBar from '../components/NavBar.vue';
import RoomCard from '../components/RoomCard.vue';
import Footer from '../components/Footer.vue';
import { VPagination } from 'vuetify/components/VPagination';
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
            rating: 2.5
        }
    },
    components: { NavBar, RoomCard, Footer },

    mounted() {
        this.fetchImage();
    },
    beforeMount() {
        axios
            .get(`http://localhost:8080/api/spaces/${this.spaceId}`)
            .then((response) => {
                console.log(response.data)
                this.spaceDetails = response.data;
            })
            .catch((err) => {
                console.error(err);
            });
        axios
            .get(`http://localhost:8080/api/room/getBySpace/${this.spaceId}`)
            .then((response) => {
                console.log(response.data)
                this.rooms = response.data;
            })
            .catch((err) => {
                console.error(err);
            });
        axios
            .get(`http://localhost:8080/api/spaces/getCoordinates/?spaceId=${this.spaceId}`)
            .then((response) => {
                console.log(response.data, "location")
                this.location = response.data;
                this.latitude = this.location[0];
                this.longitude = this.location[1];
                this.initializeMap();


            })
            .catch((err) => {
                console.error(err);
            });
    },
    computed: {

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
    top: 1526px;
    left: 150px !important;
    z-index: 1;
    left: 40px;
    color: var(--darkblue);
}
</style>