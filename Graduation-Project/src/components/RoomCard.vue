<template>
    <div class="card text-white m-5">
        <img :src="firstImgSrc" class="card-img-top" alt="..." />
        <div class="card-body">
            <h5 class="card-title fw-bolder"> {{ room.name }}</h5>
            <p class="card-text">Type: {{ room.type }}</p>
            <p class="card-text">Capacity: {{ room.number }}</p>
            <p class="card-text">Price: {{ room.price }}</p>

            <div class="text-center">
                <button class="btn mx-auto main-btn">Book</button>
            </div>
        </div>
    </div>
</template>

<script>

export default {

    props: [
        'room'
    ],
    computed: {
        firstImgSrc() {
            return this.room.images;
        },
    }
};


</script>

<style>
.card {
    background-color: var(--darkblue) !important;
    border-radius: 30px !important;

}

.card img {
    border-radius: 30px;
    width: 100%;
    height: 200px;
}
</style>
