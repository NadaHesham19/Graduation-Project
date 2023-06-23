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
    <v-alert color="error" icon="$error" title="You're not logged in" text="Please Try again" 
            v-if="this.authorizationFlag" class="alert align-items-center">
            <button class="goButton" @click="redirectPage()">Go to Log In</button>
          </v-alert>
          <v-alert color="error" icon="$error" title="You're not logged in" text="Please Try again" 
            v-if="this.authorizationFlag" class="alert align-items-center container">
            <button class="goButton" @click="redirectPage()">Go to Log In</button>
          </v-alert>
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
            searchTerm: '',
            authorizationFlag: false,

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
        },
        redirectPage(){
      this.$router.push('/')
    }

    },
    beforeMount() {
        this.securityFlag = localStorage.getItem('securityFlag')
        axios
            .get(`http://localhost:8080/api/spaces?flag=${this.securityFlag}`)
            .then((response) => {
                console.log(response.data)
                this.spaces = response.data;
            })
            .catch((err) => {
                // Handle errors
                if (err.response.data.message === "Unauthorized request") {
                    this.authorizationFlag = true
                    console.log(this.authorizationFlag)
                }
            });
    }

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