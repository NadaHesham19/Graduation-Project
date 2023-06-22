<template>
    <AdminNav></AdminNav>
    <div class="container">

        <h1 class="my-4 text-center ">History</h1>

        <div class="my-5 row justify-content-center align-items-center">
            <div class="col-lg-4 my-3">
                
            </div>

        </div>
    </div>



    <div class="container mt-5 pt-5">

        <div class="row justify-content-center align-items-between" v-for="booking in pagedBookings" :key="booking">

            <HistoryCard class="slide my-3 col-lg-10" :booking="booking" />
        </div>
        <div class=" row numbers mt-5 mb-5 text-center">
            <v-pagination active-color="#007CC7" color="#007CC7" v-model="currentPage" :length="totalPages"
                :total-visible="7" prev-icon="mdi-chevron-left" next-icon="mdi-chevron-right"></v-pagination>
        </div>
    </div>

    <Footer class="mt-5"></Footer>
</template>

<script>
import AdminNav from '../components/AdminNav.vue';
import HistoryCard from '../components/HistoryCard.vue'
import Footer from '../components/Footer.vue'
import axios from 'axios'
export default {
    data() {
        return {

        
            currentPage: 1,
            bookingsPerPage: 4,
            searchTerm: '',
            bookings:[],
        }

    },
    components: {
        AdminNav, HistoryCard, Footer
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
    },
    computed: {
        totalPages() {
            const filteredBookings = this.bookings.filter(booking => booking.spaceName.toLowerCase().includes(this.searchTerm.toLowerCase()));
            return Math.ceil(filteredBookings.length / this.bookingsPerPage);
        },

        pagedBookings() {
            let filteredBookings = this.bookings;
            if (this.searchTerm) {
                filteredBookings = this.bookings.filter(booking => booking.spaceName.toLowerCase().includes(this.searchTerm.toLowerCase()));
            }
            const startIndex = (this.currentPage - 1) * this.bookingsPerPage;
            const endIndex = startIndex + this.bookingsPerPage;
            return filteredBookings.slice(startIndex, endIndex);
        },
    },
}
</script>

<style scoped>
</style>
