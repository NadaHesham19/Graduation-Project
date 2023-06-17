<template>
    <AdminNav></AdminNav>
    <div class="container">

        <h1 class="my-4 text-center ">History</h1>

        <div class="my-5 row justify-content-center align-items-center">
            <div class="col-lg-4 my-3">
                <SearchSection></SearchSection>
            </div>

        </div>
    </div>



    <div class="container mt-5 pt-5">

        <div class="row justify-content-center align-items-between" v-for="booking in bookings" :key="booking">

            <HistoryCard class="slide my-3 col-lg-10" :firstTitle="booking.room.space" :firstDate="booking.date"
                :firstStartTime="booking.startTime" :firstDetails="booking.room.name" :firstEndTime="booking.endTime"
                :firstUserName="booking.user.firstName" />
        </div>

    </div>

    <Footer class="mt-5"></Footer>
</template>

<script>
import AdminNav from '../components/AdminNav.vue';
import HistoryCard from '../components/HistoryCard.vue'
import Footer from '../components/Footer.vue'
import SearchSection from '../components/SearchSection.vue'
export default {
    data() {
        return {

            bookings: [
                {
                    "id": 4,
                    "startTime": "12:00:00",
                    "endTime": "20:00:00",
                    "date": "15-03-2023",
                    "room": {
                        "roomId": 1,
                        "number": 0,
                        "name": "room1",
                        "activity": null,
                        "type": null,
                        "price": 0.0,
                        "image": null,
                        "space": "Space 4"
                    },
                    "user": {
                        "userId": 1,
                        "email": "test",
                        "firstName": "Nada",
                        "lastName": null,
                        "password": null,
                        "mobileNo": null,
                        "address": null,
                        "birthDate": null,
                        "bio": null,
                        "points": 0,
                        "picture": null
                    }
                },
                {
                    "id": 5,
                    "startTime": "12:00:00",
                    "endTime": "14:00:00",
                    "date": "15-03-2023",
                    "room": {
                        "roomId": 1,
                        "number": 0,
                        "name": "room2",
                        "activity": null,
                        "type": null,
                        "price": 0.0,
                        "image": null,
                        "space": "Space 3"
                    },
                    "user": {
                        "userId": 1,
                        "email": "test",
                        "firstName": "Ahmed",
                        "lastName": null,
                        "password": null,
                        "mobileNo": null,
                        "address": null,
                        "birthDate": null,
                        "bio": null,
                        "points": 0,
                        "picture": null
                    }
                },
                {
                    "id": 6,
                    "startTime": "12:00:00",
                    "endTime": "14:00:00",
                    "date": "15-03-2023",
                    "room": {
                        "roomId": 1,
                        "number": 0,
                        "name": "room3",
                        "activity": null,
                        "type": null,
                        "price": 0.0,
                        "image": null,
                        "space": "Space 1"
                    },
                    "user": {
                        "userId": 1,
                        "email": "test",
                        "firstName": "Farah",
                        "lastName": null,
                        "password": null,
                        "mobileNo": null,
                        "address": null,
                        "birthDate": null,
                        "bio": null,
                        "points": 0,
                        "picture": null
                    }
                },
                {
                    "id": 9,
                    "startTime": "12:00:00",
                    "endTime": "20:00:00",
                    "date": "15-03-2024",
                    "room": {
                        "roomId": 1,
                        "number": 0,
                        "name": "room4",
                        "activity": null,
                        "type": null,
                        "price": 0.0,
                        "image": null,
                        "space": "Space 2"
                    },
                    "user": {
                        "userId": 3,
                        "email": "test",
                        "firstName": "Nadine",
                        "lastName": null,
                        "password": null,
                        "mobileNo": null,
                        "address": null,
                        "birthDate": null,
                        "bio": null,
                        "points": 0,
                        "picture": null
                    }
                }
            ],
        }

    },
    components: {
        AdminNav, HistoryCard, Footer, SearchSection
    }
}
</script>

<style scoped>
</style>
