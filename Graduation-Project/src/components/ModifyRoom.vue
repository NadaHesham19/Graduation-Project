<template>
    <div class="card text-white m-5">
        <img :src="imageSrc" class="card-img-top" alt="..." />
        <div class="card-body">
            <h5 class="card-title fw-bolder"> {{ room.name }}</h5>
            <p class="card-text">Type: {{ room.type }}</p>

            <p class="card-text">Price: {{ room.price }}</p>
            <div class="d-flex justify-content-center">

                <div class="col-5 ">
                    <button @click="deleteRoom" class="btn mx-auto main-btn deletebtn">Delete <i
                            class="fa-solid fa-x ms-2"></i></button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import BookCard from "./BookCard.vue";

export default {
    data() {
        return {
            imageSrc: "",
            spaceId: this.$route.params.id,
        };
    }, components: { BookCard },
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
        deleteRoom() {

            axios

                .delete(`http://localhost:8080/api/room/${this.room.id}`)
                .then((response) => {
                    console.log(response);
                    // this.$emit('deleted', this.space.spaceId);
                    window.location.reload();
                })
                .catch((error) => {
                    console.error(error);
                });


            // this.isVisible = false;
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
