<template>
<simple-nav></simple-nav>
  <div class="container mt-5">
    <div class="row justify-content-center align-items-center mb-5 w-100">
      <div class="col-lg-9 addNew">
        <h1 class="text-center my-5">Forgot Password</h1>
        <div class="row justify-content-center">
          
          <input
            type="email"
            class="col-lg-7 mb-4 inputText"
            style="background-color: #d4d4d4"
            placeholder="Please Enter Your Email"
          />
        </div>
        <div class="row justify-content-center align-items-center mt-3">
          <button class="col-lg-3 mb-5 text-center main-btn" type="submit" @click="SendAnEmail">
            Send an Email
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SimpleNav from '@/components/SimpleNav.vue';
export default {
data(){
    return{

    }
},
methods:{
    SendAnEmail(){

    }
},
components:{
  SimpleNav
}
};
</script>

<style>

 .addNew{
    background-color: var(--nav);
    color: white;
    border-radius: 25px;
  }
  .inputText{
    border-radius: 20px;
    border: none;
    height: 40px;
    font-weight: bold;
   outline: none;
   transition: 0.4s;
   
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
.inputText:focus , .inputText:active{
transform: scaleX(1.02);
}

.inputText::-webkit-input-placeholder {
  color: #222;
}
</style>
