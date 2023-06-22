<template>
    <AdminNav></AdminNav>
    <div class="container">

        <h1 class="my-4 text-center ">History</h1>

        <div class="my-5 row justify-content-center align-items-center">
            <div class="col-lg-4 my-3">
                <!-- <SearchSection></SearchSection> -->
            </div>

        </div>
    </div>



    <div class="container mt-5 pt-5">

        <div class="row justify-content-center align-items-between" v-for="booking in bookings" :key="booking">

            <HistoryCard class="slide my-3 col-lg-10" :booking="booking" />
        </div>

    </div>

    <Footer class="mt-5"></Footer>
</template>

<script>
import AdminNav from '../components/AdminNav.vue';
import HistoryCard from '../components/HistoryCard.vue'
import Footer from '../components/Footer.vue'
import SearchSection from '../components/SearchSection.vue'
import axios from 'axios'
export default {
    data() {
        return {

            
            bookings:[],
        }

    },
    components: {
        AdminNav, HistoryCard, Footer, SearchSection
    }, 
    beforeMount(){
         axios.get("http://localhost:8080/api/bookings/admin/pastBookings")
      .then((response) => {
        // Handle response
        this.bookings = response.data;
        // console.log(this.bookings)
      })
      .catch((err) => {
        // Handle errors
        console.error(err);
      });
    }
}
</script>

<style scoped>
</style>
