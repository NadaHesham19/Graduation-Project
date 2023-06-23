<template>
    <div class="card text-white m-5">
        <img :src="imageSrc" class="card-img-top" alt="..." />
        <div class="card-body">
            <h5 class="card-title fw-bolder"> {{ space.name }}</h5>
            <p class="card-text ms-2 mt-4">{{ space.address }}</p>
            <p class="card-text"><i class="fa-solid fa-star ms-2 me-1"></i> {{ space.ratingAverage }}</p>
            <div class="text-center">
                <router-link :to="{ name: 'space', params: { id: space.spaceId } }"
                    class="btn mx-auto main-btn">Visit</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {

    data() {
        return {
            imageSrc: "",
        };
    }
    , props: [
        'space'
    ],

    mounted() {
        this.fetchImage();
    },

    methods: {
        fetchImage() {
            axios
                .get(`http://localhost:8080/api/images/space/${this.space.spaceId}/0`,

                    {
                        responseType: "arraybuffer",
                    })

                .then((response) => {
                    const blob = new Blob([response.data], { type: "image/jpeg" }); // Create a Blob 
                    this.imageSrc = URL.createObjectURL(blob); //  URL for the Blob
                })
                .catch((error) => {
                    console.error(error);
                });
        },
    },

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
