<template>
    <div class="card text-white my-4" >
        <div class="row justify-content-center">
            <div class="col-lg-5 ps-0">
                <img :src="imageSrc" class="h-100 w-100 " alt="..." />
            </div>
            <div class="card-body col-lg-7">
                <h5 class="card-title fw-bolder text-center">{{ booking.spaceName}}</h5>
                <!-- <p class="card-text ">Name: {{ user.firstName }} {{ user.lastName }}</p> -->
                <p class="card-text">Date: {{booking.date}}</p>
                <p class="card-text ">Time: {{ booking.startTime }} : {{ booking.endTime }}</p>
                <p class="card-text ">Price: {{ booking.price }}</p>
                <p class="card-text ">Payment Method: {{ booking.paymentMethod }}</p>
                <div class="d-none">{{ booking.roomId }}</div>

            </div>
        </div>
    </div>
</template>

<script>
import axios from'axios';
export default {
    data() {
        return {
            imageSrc:"",
        };
    },
    props: [
   'booking' ,
    ],
    beforeMount(){
        axios
      .get(`http://localhost:8080/api/images/room/${this.booking.roomId}/0`, {
        responseType: "arraybuffer",
      })
      .then((response) => {
        const blob = new Blob([response.data], { type: "image/png" }); // Create a Blob
        this.imageSrc = URL.createObjectURL(blob); //  URL for the Blob
        
      })
      .catch((error) => {
        console.error(error);
      });
    }
};
</script>

<style>
.icon {
    color: var(--darkblue);
}

.title {
    padding-top: 120px !important;
    margin-left: 90px !important;
    margin-right: 100px !important;
}

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

.cancel-btn {
    background-color: rgb(169, 11, 11);
    color: #fff;
    border-radius: 15px;
    height: 50px;
    font-weight: 500 !important;
    border: none;
}
</style>
