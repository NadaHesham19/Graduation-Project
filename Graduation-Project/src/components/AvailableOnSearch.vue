<template>


  <div class="container mt-5">
    <div class="row w-100">
      <h5 class="col-lg-3 mt-3">Available Rooms</h5>
    </div>
    <div class="row justify-content-between align-items-center">
      <i class="fa-solid fa-angle-left col-lg-1 arow" style="height: 45px"></i>
      <div class="col-lg-4 my-5">
        <div class="card text-white">
          <img :src="firstImgSrc" class="card-img-top" alt="..." />
          <div class="card-body">
            <div class="c fw-bolder"> Room Name:{{room.name}}</div>
            <p class="c"> Details:
              <h5>Activity: {{room.activity}}</h5>
              <h5>Type: {{room.type}}</h5>
              <h5>Price: {{room.price}}</h5>
            </p>
            
            <div class="text-center">
              <BookModal/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BookModal from './BookModal.vue';
import axios from 'axios';
export default {
  components:{
    BookModal
  },
    data() {
        return {
            data: [
                {
                    img: "",
                    room: "",
                    details: ""
                }
            ],
           

        };
    },
    props: [
        "room"
    ],
    
    computed: {
        firstImgSrc() {
            return this.room.images;
        },
    },
    components: { BookModal }
}
  
</script>

<style scoped>

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
