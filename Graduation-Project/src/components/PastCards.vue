<template>
 <div class="card text-white">
      <img :src="firstImgSrc" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title fw-bolder">{{ booking.room.space }}</h5>
        <p class="card-text">Date: {{ booking.date }}</p>
        <p class="card-text">Time: {{ booking.startTime }} : {{ booking.endTime}}</p>
        <p class="card-text">Room Details: {{ booking.room.name }}</p> 
      <div class="text-center">
        <button class="btn mx-auto main-btn ">Rebook <i class="mx-1 fa-regular fa-calendar"></i></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
data() {
  return {
    firstImgSrc:this.booking.room.image,
  };
},
props: [
 'booking',
],
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
