<template>
<NavBar></NavBar>
  <div class="container mt-5">
    <div class="row justify-content-center align-items-center mb-5 w-100">
      <div class="col-lg-9 addNew">
        <h1 class="text-center my-5">Add New Spaces</h1>
        <div class="row justify-content-center">
          <h4 class="col-lg-5 mb-4">Name :</h4>
          <input
            type="text"
            class="col-lg-4 mb-4 inputText"
            style="background-color: #d4d4d4"
          />
        </div>
        <div class="row justify-content-center">
          <h4 class="col-lg-5 mb-4">Location :</h4>
          <input
            type="text"
            class="col-lg-4 mb-4 inputText"
            style="background-color: #d4d4d4"
          />
        </div>
        <div class="row justify-content-center">
          <h4 class="col-lg-5 mb-4">Number of rooms :</h4>
          <input
            type="text"
            class="col-lg-4 mb-4 inputText"
            style="background-color: #d4d4d4"
          />
        </div>
        <div class="row justify-content-center align-items-center mt-3">
          <button class="col-lg-3 mb-5 text-center main-btn" type="submit">
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
export default {
    data(){
        return{

        }
    }, 
    components:{
        NavBar
    }
};
</script>

<style>

.addNew {
  background-color: var(--nav);
  color: white;
  border-radius: 25px;
}
.inputText {
  border-radius: 25px;
  border: none;
  height: 40px;
}
.main-btn {
  background-color: var(--lightblue) !important;
  color: white !important;
  font-weight: 500 !important;
  border-radius: 15px !important;
  padding: 0.5rem 1.5rem !important;
  border: none;
  height: 50px;
}

.main-btn:hover {
  color: var(--darkblue) !important;
  font-weight: 700 !important;
}
</style>
