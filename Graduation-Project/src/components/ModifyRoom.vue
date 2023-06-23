<template>
    <div class="card text-white m-5">
        <img :src="imageSrc" class="card-img-top" alt="..." />
        <div class="card-body">
            <h5 class="card-title fw-bolder"> {{ room.name }}</h5>
            <p class="card-text">Type: {{ room.type }}</p>

            <p class="card-text">Price: {{ room.price }}</p>
            <div class="d-flex justify-content-center">

                <div class="col-5 ">
                    <button @click="deleteRoom" class="btn mx-auto  deletebtn">Delete <i
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
            authorizationFlag: false,
            securityFlag: localStorage.getItem('securityFlag')
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

                .delete(`http://localhost:8080/api/room/${this.room.id}?flag=${this.securityFlag}`)
                .then((response) => {
                    console.log(response);
                    // this.$emit('deleted', this.space.spaceId);
                    window.location.reload();
                })
                .catch((err) => {
                    // Handle errors
                    if (err.response.data.message === "Unauthorized request") {
                        this.authorizationFlag = true
                        console.log(this.authorizationFlag)
                    }
                })


            // this.isVisible = false;
        },
        redirectPage() {
            this.$router.push('/')
        }
    },
};


</script>

<style>
.goButton {
    background-color: var(--light) !important;
    color: black !important;
    border-radius: 15px !important;
    height: 40px !important;
    width: 100px !important;
    font-weight: 500 !important;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;

}

.alert {
    width: 400px;
    display: flex;
    border-radius: 25px;
}


.card {
    background-color: var(--darkblue) !important;
    border-radius: 30px !important;

}

.card img {
    border-radius: 30px;
    width: 100%;
    height: 200px;
}

.deletebtn {
    width: 130px !important;
    background-color: #C82333 !important;
    color: white !important;
    font-weight: 500 !important;
    border-radius: 15px !important;
    padding: 0.5rem 1.5rem !important;
    border: none;
    height: 50px;
}

.deletebtn:hover {
    color: var(--darkblue) !important;
    font-weight: 700 !important;

}
</style>
