<template>
    <AdminNav />
    <div class="searchsec container-fluid position-relative">
        <img class="img-fluid w-100  ps-5" src="../assets/main1.gif" alt="" />
        <i class="fa-solid fa-magnifying-glass search-icon"></i>
        <form class="d-flex searchform" @submit.prevent>
            <input class="form-control searchinput me-2" type="search" aria-label="Search" v-model="searchTerm" />
            <button class="btn btn-outline-success main-btn search-btn" type="submit" @click="search">
                Search
            </button>
        </form>
    </div>
    <div class="ourspaces-section pb-5">
        <div class="head d-flex container pt-5 mb-5 pt-5">
            <h4 class="mt-5 pt-5">Our Spaces</h4>
        </div>
        <div class="row justify-content-evenly">
            <div class="col-4" v-for="(space) in pagedSpaces" :key="space.spaceId">
                <SpaceCardAdmin :space="space" />
            </div>
        </div>
        <div class=" row numbers mt-5 mb-5 text-center">
            <v-pagination active-color="#007CC7" color="#007CC7" v-model="currentPage" :length="totalPages"
                :total-visible="7" prev-icon="mdi-chevron-left" next-icon="mdi-chevron-right"></v-pagination>
        </div>
    </div>
    <Footer />
</template>


<script>
import AdminNav from '../components/AdminNav.vue';
import SpaceCardAdmin from '../components/SpaceCardAdmin.vue';
import Footer from '../components/Footer.vue';
import { VPagination } from 'vuetify/components/VPagination';
import axios from "axios";

export default {

    components: {
        AdminNav, SpaceCardAdmin, Footer
    }, data() {
        return {
            spaces: [],
            currentPage: 1,
            spacesPerPage: 6,
            searchTerm: ''

        };
    },
    computed: {
        totalPages() {
            const filteredSpaces = this.spaces.filter(space => space.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
            return Math.ceil(filteredSpaces.length / this.spacesPerPage);
        },

        pagedSpaces() {
            let filteredSpaces = this.spaces;
            if (this.searchTerm) {
                filteredSpaces = this.spaces.filter(space => space.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
            }
            const startIndex = (this.currentPage - 1) * this.spacesPerPage;
            const endIndex = startIndex + this.spacesPerPage;
            return filteredSpaces.slice(startIndex, endIndex);
        },
    },

    methods: {
        search() {
            this.currentPage = 1;
        }
    },
    beforeMount() {
        this.jsessionId = localStorage.getItem('jsessionidValue')
        axios
            .get("http://localhost:8080/api/spaces", {


            },)
            .then((response) => {
                console.log(response.data)
                this.spaces = response.data;
            })
            .catch((err) => {
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