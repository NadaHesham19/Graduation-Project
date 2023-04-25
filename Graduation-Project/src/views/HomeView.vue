<template>
<nav-bar></nav-bar>
  <div class="body">
       <img src="../assets/HomePage.jpg" alt="homepage" class="homepage w-100">
       <div class="services">Check Our Services</div>
       <div class="bodycontainer">
         <div class="cards ourspaces">
           <div class="left">
             <img src="../assets/Card1.jpg" alt="spaces" class="image">  
           </div>
           <div class="right">
             <div class="text">Now you can check our available spaces</div>
             <router-link to="/ourspaces">
               <button class="b1">Our Spaces</button>
             </router-link>
           </div>
         </div>
         <div class="cards yourbookings">
           <div class="left">
             <img src="../assets/Card2.jpg" alt="bookings" class="image">  
           </div>
           <div class="right">
             <div class="text">You can check your previous bookings<br>Just press:</div>
             <router-link to="/bookings">
              <button class="b1">Your Bookings</button>
             </router-link>
           </div>
         </div>
         <div class="cards addnewspaces">
           <div class="left">
             <img src="../assets/Card3.jpg" alt="newspaces" class="image">  
           </div>
           <div class="right">
             <div class="text">And also you can help us<br> add new<br> spaces</div>
             <router-link to="/addnewspace">
              <button class="b1">Add new spaces</button>
             </router-link>
           </div>
         </div>
       </div>
     </div>
     <Footer/>
</template>

<style scoped>
body{
 padding: 0;
 margin: 0;
 font-family: "Roboto", sans-serif;    
 background-color: var(--background);
}
.homepage{
 height:645.25px;
 width: 100%;
}
.services{
   font-family: 'Roboto';
   font-size: 45px;
   text-align: center;
   display: flex;
   justify-content: center;
   padding:50px;
   color: var(--darkblue);
}

.bodycontainer{
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: center;
   flex-direction: column;
 
}

.cards{
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: center;
   width: 900px;
   height: 450px;
   border-radius: 30px;
   background-color: var(--darkblue);
   margin-bottom: 50px;
     
}

.image{
   width:450px;
   height: 450px;
   border-radius: 30px;
   margin-right:450px;
}

.right{
   display: flex;
   flex-direction: column;
   align-items: center;
   align-content: center;
   margin-left: -350px;
   margin-right: 60px; 
}

.text{
 color: var(--light);
 font-size: 50px;
 font-family: 'Roboto';
 font-weight: bold;
 margin-top: 20px;
 margin-left:-50px;
}

.b1{
   border-radius: 25px;
   color: var(--light);
   background-color:var(--lightblue);
   border: none;
   text-align: center;
   width:220px;
   height: 64.3px;
   margin-top: 40px;
   margin-left:-180px;
   font-family: 'Roboto';
   font-size: 20px;
}

.b1:hover ,
.b1:active{
 color: var(--darkblue) !important;
 font-weight: 700 !important;
 cursor: pointer;

}
</style>

<script>
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'
 export default{
   name: "HomeView",
   components:{
    NavBar , Footer
  }
   
}
</script>
