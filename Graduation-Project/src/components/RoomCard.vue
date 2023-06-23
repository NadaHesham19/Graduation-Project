<template>
    <div class="card text-white m-5">
        <img :src="imageSrc" class="card-img-top" alt="..." />
        <div class="card-body">
            <h5 class="card-title fw-bolder"> {{ room.name }}</h5>
            <p class="card-text">Type: {{ room.type }}</p>
            <!-- <p class="card-text">Capacity: {{ room.number }}</p> -->
            <p class="card-text">Price: {{ room.price }}</p>
            <div class="d-flex justify-content-center">
                <button @click="book" class="btn mx-auto my-3 main-btn">
                    Book Now <i class="mx-1 fa-regular fa-calendar"></i>
                </button>
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
            spaceId: this.$route.params.id,
        };
    },
    props: [
        'room'
    ],
    mounted() {
        this.fetchImage();
    }, methods: {
        fetchImage() {
            axios
                .get(`http://localhost:8080/api/images/room/${this.room.id}/0`,
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
        book() {
            this.$router.push(`/addbooking/${this.room.id}`)
        }
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