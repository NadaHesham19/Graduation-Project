<template>
    <div class="card text-white m-5">
        <img :src="firstImgSrc" class="card-img-top" alt="..." />
        <div class="card-body">
            <h5 class="card-title fw-bolder"> {{ space.name }}</h5>
            <p class="card-text">{{ space.description }}</p>
            <p class="card-text">Ratings: {{ space.ratingAverage }}</p>

            <div class="text-center">
                <router-link to="/space" class="btn mx-auto main-btn">Visit</router-link>

            </div>
        </div>
    </div>
</template>

<script>
export default {

    props: [
        'space'
    ],
    computed: {
        firstImgSrc() {
            return this.space.images;
        },
    }
};


</script>

<style>
.card {
    background-color: var(--darkblue) !important;
    border-radius: 30px !important;
    /* width: 25rem !important; */
}

.card img {
    border-radius: 30px;
    width: 100%;
    height: 200px;
}
</style>
