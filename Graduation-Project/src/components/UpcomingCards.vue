<template>
    <div class="card text-white">
      <img src="" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title fw-bolder">{{ booking.spaceName}}</h5>
        <p class="card-text">Date: {{ booking.date }}</p>
        <p class="card-text">Time: {{ booking.startTime }} : {{ booking.endTime}}</p>
        <p class="card-text">Payment Method: {{ booking.paymentMethod}}</p>
        <div class="text-center">
          <!-- <button class="btn mx-auto cancel-btn main-btn">
            Cancel <i class="mx-1 fa-solid fa-xmark"></i>
          </button> -->
          <div class="d-none" >{{ booking.id }}</div>
          <CancelModal />
        </div>
      </div>
    </div>
</template>

<script>
import CancelModal from './CancelModal.vue';
export default {
  data() {
    return {
      
    };
  },
  props: [
    'booking'
  ],
  computed: {
        // firstImgSrc() {
        //     return this.booking.room.image;
        // },
    },
    components:{
      CancelModal
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
