<template>
    <NavBar />
    <div class="searchsec container-fluid position-relative">
        <img class="img-fluid w-100" src="../assets/main.jpeg" alt="" />
        <i class="fa-solid fa-magnifying-glass search-icon"></i>
        <form class="d-flex searchform">
            <input class="form-control searchinput me-2" type="search" aria-label="Search" />
            <button class="btn btn-outline-success main-btn search-btn" type="submit">
                Search
            </button>
        </form>
    </div>

    <div class="ourspaces-section pb-5">
        <div class="container mb-5">
            <div class="title d-flex justify-content-between align-items-center mb-5">
                <h4>Our Spaces</h4>
            </div>
            <SpaceCard />
        </div>
    </div>
</template>


<script>
import NavBar from '../components/NavBar.vue'
import SpaceCard from '../components/SpaceCard.vue'


export default {

    components: {
        NavBar, SpaceCard
    }

}
</script>

<style>
.searchinput {
    position: absolute !important;
    width: 416px !important;
    height: 55px !important;
    left: 22px !important;
    top: 60px !important;
    background: #d9d9d9 !important;
    border-radius: 50px !important;
    padding-left: 45px !important;
}

.search-btn {
    position: absolute !important;
    width: 110px !important;
    height: 55px !important;
    left: 328px !important;
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
</style>