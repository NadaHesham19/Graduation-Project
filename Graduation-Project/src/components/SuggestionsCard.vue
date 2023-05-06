<template>
    <div class="container mt-5">
      <div class="row w-100">
        <h5 class="col-lg-3 mt-3">Suggestions:</h5>
      </div>
      <div class="row justify-content-between align-items-center">
        <i class="fa-solid fa-angle-left col-lg-1 arow" style="height: 45px"></i>
        <div class="col-lg-4 my-5">
          <div class="card text-white">
            <img :src="firstImgSrc" class="card-img-top" alt="..." />
            <div class="card-body">
              <div class="c fw-bolder"> Room:{{firstTitle}}</div>
              <p class="c"> Details:{{firstDetails}}</p>
              
              <div class="text-center">
                <button
                  class="btn mx-auto book-btn"
                  
                >
                  Book 
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 my-5">
          <div class="card text-white">
            <img :src="secondImageSrc" class="card-img-top" alt="..." />
            <div class="card-body">
              <div class="c fw-bolder">Room: {{secondTitle}}</div>
              <p class="c"> Details: {{secondDetails}}</p>
              <div class="text-center">
                <button
                  class="btn mx-auto book-btn"
              
                >
                  Book 
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
        'firstTitle',
        'secondTitle',
        'firstDetails',
        'secondDetails',
        'firstImgSrc',
        'secondImageSrc'],
  };
  </script>
  
  <style scoped>
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
  .c{
    color:var(--light);
    font-weight: bold;
    font-size: 15px;
    margin-top:50px;
    
  }

  .book-btn {
    background-color: var(--lightblue);
    color: #fff;
    border-radius: 15px;
    height: 50px;
    font-weight: 500 !important;
    border: none;
    text-align: center;
  }
  .book-btn:hover ,
  .book-btn:active {
  color: var(--darkblue) !important;
  font-weight: 700 !important;
  cursor: pointer;
  background-color: var(--lightblue);

}
  </style>
  