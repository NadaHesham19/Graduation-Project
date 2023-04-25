<template>
  <div class="container mt-5">
    <div class="row">
      <h5 class="col-lg-3 mt-3">Past Bookings</h5>
    </div>
    <div class="row justify-content-between align-items-center">
      <i class="fa-solid fa-angle-left col-lg-1 arow" style="height: 45px"></i>
      <div class="col-lg-4 my-5">
        <div class="card text-white">
          <img :src="firstImgSrc" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title fw-bolder">{{firstTitle}}</h5>
            <p class="card-text">Date: {{firstDate}}</p>
            <p class="card-text">Time: {{firstTime}}</p>
            <p class="card-text">Room Details: {{firstDetails}}</p>
            <div class="text-center">
              <button
                class="btn mx-auto cancel-btn"
                
              >
                Cancel <i class="mx-1 fa-solid fa-xmark"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 my-5">
        <div class="card text-white">
          <img :src="secondImageSrc" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title fw-bolder">{{secondTitle}}</h5>
            <p class="card-text">Date: {{secondDate}}</p>
            <p class="card-text">Time: {{seconTime}}</p>
            <p class="card-text">Room Details: {{secondDetails}}</p>
            <div class="text-center">
              <button
                class="btn mx-auto cancel-btn"
            
              >
                Cancel <i class="mx-1 fa-solid fa-xmark"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <i class="fa-solid fa-angle-right col-lg-1 arow" style="height: 45px"></i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
  props:[
    'firstTime',
      'seconTime',
      'firstLocation',
      'secondLocation',
      'firstTitle',
      'secondTitle',
      'firstDetails',
      'secondDetails',
      'firstDate',
      'secondDate',
      'firstImgSrc',
      'secondImageSrc'],
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
