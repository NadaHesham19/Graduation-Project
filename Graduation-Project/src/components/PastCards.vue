<template>

 <div class="card text-white">
      <img :src="firstImgSrc" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title fw-bolder">{{ booking.spaceName }}</h5>
        <p class="card-text">Date: {{ booking.date }}</p>
        <p class="card-text">Time: {{ booking.startTime }} : {{ booking.endTime}}</p>
        <p class="card-text">Payment Method: {{ booking.paymentMethod }}</p> 
      <div class="text-center">
        <div class="d-none" >{{ booking.id}}</div>
        <!-- <button class="btn mx-auto main-btn ">Rebook <i class="mx-1 fa-regular fa-calendar"></i></button> -->
        <RebookModal />
      </div>
    </div>
  </div>
</template>

<script>
import RebookModal from './RebookModal.vue';
export default {
  data() {
    return {

    };
  },
  components: {
    RebookModal
  },
  props: [
    'booking',
  ],
  computed: {
    firstImgSrc() {
      return this.booking.room.image;
    },
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
</style>
