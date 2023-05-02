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
                :total-visible="7"></v-pagination>
        </div>
    </div>
    <Footer />
</template>


<script>
import NavBar from '../components/NavBar.vue'
import SpaceCard from '../components/SpaceCard.vue'
import Footer from '../components/Footer.vue'
import { VPagination } from 'vuetify/components/VPagination';

export default {

    components: {
        NavBar, SpaceCard, Footer
    }, data() {
        return {
            spaces: [
                {
                    id: 1,
                    name: "Space 1",
                    desc: "Description of space ",
                    imgSrc: "image1.jpg",
                },
                {
                    id: 2,
                    name: "Space 2",
                    desc: "Description of space 1",
                    imgSrc: "image1.jpg",
                },
                {
                    id: 3,
                    name: "Space 3",
                    desc: "Description of space 1",
                    imgSrc: "image1.jpg",
                },
                {
                    id: 4,
                    name: "Space 4",
                    desc: "Description of space 1",
                    imgSrc: "image1.jpg",
                },
                {
                    id: 5,
                    name: "Space 5",
                    desc: "Description of space 1",
                    imgSrc: "image1.jpg",
                },
                {
                    id: 6,
                    name: "Space 6",
                    desc: "Description of space 1",
                    imgSrc: "image1.jpg",
                },
                {
                    id: 7,
                    name: "Space 7",
                    desc: "Description of space 1",
                    imgSrc: "image1.jpg",
                },
                {
                    id: 8,
                    name: "Space 8",
                    desc: "Description of space 1",
                    imgSrc: "image1.jpg",
                },
                {
                    id: 9,
                    name: "Space 9",
                    desc: "Description of space 1",
                    imgSrc: "image1.jpg",
                },
                {
                    id: 10,
                    name: "Space 10",
                    desc: "Description of space 1",
                    imgSrc: "image1.jpg",
                },
                {
                    id: 11,
                    name: "Space 12",
                    desc: "Description of space 1",
                    imgSrc: "image1.jpg",
                },
                {
                    id: 13,
                    name: "Space 13",
                    desc: "Description of space 1",
                    imgSrc: "image1.jpg",
                },
                {
                    id: 14,
                    name: "Space 14",
                    desc: "Description of space 1",
                    imgSrc: "image1.jpg",
                },
            ],
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
    }, mounted() {

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