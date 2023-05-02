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
    <div class="ourspaces-section pb-5  mb-5 ">
        <div class="head d-flex container mb-5 pt-5">
            <h4>Our Spaces</h4>
        </div>
        <div class="row justify-content-evenly">
            <div class="col-lg-3" v-for="(space, index) in spaces" :key="index">
                <SpaceCard :space="space" />
            </div>
        </div>

        <v-pagination v-model="currentPage" :total-pages="totalPages" color="primary"></v-pagination>
    </div>
</template>


<script>
import NavBar from '../components/NavBar.vue'
import SpaceCard from '../components/SpaceCard.vue'
// import VPagination from 'vuetify/lib/components/VPagination';

export default {

    components: {
        NavBar, SpaceCard,
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

.icon {
    color: var(--darkblue);
}

/* .title {
    padding-top: 120px !important;
    margin-left: 90px !important;
    margin-right: 100px !important;
} */
</style>