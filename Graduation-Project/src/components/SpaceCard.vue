<template>
    <div class="card text-white m-5">
        <img :src="firstImgSrc" class="card-img-top" alt="..." />
        <div class="card-body">
            <h5 class="card-title fw-bolder"> {{ space.name }}</h5>
            <p class="card-text">Desc: {{ space.desc }}</p>
            <!-- <p class="card-text">Time: {{ firstStartTime }} : {{ firstEndTime }}</p>
            <p class="card-text">Room Details: {{ firstDetails }}</p> -->
            <div class="text-center">
                <button href="#" class="btn mx-auto main-btn">Visit</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    props: [
        'space'
    ],
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
