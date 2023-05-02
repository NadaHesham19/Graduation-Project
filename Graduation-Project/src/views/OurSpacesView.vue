<template>
    <NavBar />
    <div class="searchsec container-fluid position-relative">
        <img class="img-fluid w-100  ps-5" src="../assets/main1.jpeg" alt="" />
        <i class="fa-solid fa-magnifying-glass search-icon"></i>
        <form class="d-flex searchform">
            <input class="form-control searchinput me-2" type="search" aria-label="Search" />
            <button class="btn btn-outline-success main-btn search-btn" type="submit">
                Search
            </button>
        </form>
    </div>
    <div class="ourspaces-section pb-5">
        <div class="head d-flex container pt-5 mb-5 pt-5">
            <h4 class="mt-5 pt-5">Our Spaces</h4>
        </div>
        <div class="row justify-content-evenly">
            <div class="col-4" v-for="(space, index) in pagedSpaces" :key="index">
                <SpaceCard :space="space" />
            </div>
        </div>
        <div class=" row numbers mt-5 mb-5 text-center">
            <v-pagination active-color="#007CC7" color="#007CC7" v-model="currentPage" :length="totalPages"
                :total-visible="7" prev-icon="mdi-menu-left" next-icon="mdi-menu-right"></v-pagination>
        </div>
    </div>
    <Footer />
</template>


<script>
import NavBar from '../components/NavBar.vue'
import SpaceCard from '../components/SpaceCard.vue'
import Footer from '../components/Footer.vue'
import { VPagination } from 'vuetify/components/VPagination';
import axios from "axios";

export default {

    components: {
        NavBar, SpaceCard, Footer
    }, data() {
        return {
            spaces: [],
            currentPage: 1,
            spacesPerPage: 6,

        };
    },
    computed: {
        totalPages() {
            return Math.ceil(this.spaces.length / this.spacesPerPage);
        },
        pagedSpaces() {
            const startIndex = (this.currentPage - 1) * this.spacesPerPage;
            const endIndex = startIndex + this.spacesPerPage;
            return this.spaces.slice(startIndex, endIndex);
        },
    }, beforeMount() {
        axios
            .get("http://localhost:8080/api/spaces")
            .then((response) => {
                // Handle response
                console.log(response);
                this.spaces = response.data;
            })
            .catch((err) => {
                // Handle errors
                console.error(err);
            });
    }

}
</script>

<style scoped>
.searchinput {
    position: absolute !important;
    width: 340px !important;
    height: 55px !important;
    left: 22px !important;
    top: 60px !important;
    background: #d9d9d9 !important;
    border-radius: 50px !important;
    padding-left: 45px !important;
}

.search-btn {
    position: absolute !important;
    width: 106px !important;
    height: 55px !important;
    left: 265px !important;
    top: 60px !important;
    border-radius: 50px !important;
}

.search-icon {
    position: absolute;
    top: 80px;
    z-index: 1;
    left: 40px;
    color: var(--darkblue);
}

.ourspaces-section {
    background-color: var(--background);

}
</style>