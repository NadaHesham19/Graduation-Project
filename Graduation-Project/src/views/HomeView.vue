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

     <!--ChatBot-->
     <button class="open-button" @click="openForm()"><i class="far fa-comment" ></i></button>
     <div class="chat-popup" id="myForm">
        <form action="/action_page.php" class="form-container">
          <h5>Welcome, How can we help you?</h5>

          <label for="msg"><b>Message</b></label>
          <textarea placeholder="Type message.." name="msg" required></textarea>

          <button type="submit" class="btn">Send</button>
          <button type="button" class="btn cancel" @click="closeForm()">Close</button>
        </form>
      </div>
     <Footer/>
</template>

<style scoped>
body{
 padding: 0;
 margin: 0;
 font-family: "Roboto", sans-serif;    
 background-color: var(--background);
 box-sizing: border-box;
 
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
.b1:active,
.open-button:hover,
.open-button:active{
  color: var(--darkblue) !important;
  font-weight: 700 !important;
  cursor: pointer;
}



.open-button {
  border-radius: 50px;
  background-color: var(--lightblue);
  color: var(--light);
  padding: 16px 20px;
  border: none;
  cursor: pointer;
  position: fixed;
  bottom: 23px;
  right: 28px;
  width: 50px;
  height: 50px;
  
}

/* The popup chat - hidden by default */
.chat-popup {
  display: none;
  position: fixed;
  bottom: 0;
  right: 15px;
  border: 3px solid #f1f1f1;
  z-index: 9;
}

/* Add styles to the form container */
.form-container {
  max-width: 300px;
  padding: 10px;
  background-color: white;
}

/* Full-width textarea */
.form-container textarea {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  border: none;
  background: #f1f1f1;
  resize: none;
  min-height: 200px;
}

/* When the textarea gets focus, do something */
.form-container textarea:focus {
  background-color: #ddd;
  outline: none;
}

/* Set a style for the submit/send button */
.form-container .btn {
  background-color: green;
  color: white;
  padding: 16px 20px;
  border: none;
  cursor: pointer;
  width: 100%;
  margin-bottom:10px;
  opacity: 0.8;
}

/* Add a red background color to the cancel button */
.form-container .cancel {
  background-color: red;
}

/* Add some hover effects to buttons */
.form-container .btn:hover, .btn:active {
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
  },
  methods:{
    openForm() {
      document.getElementById("myForm").style.display = "block";
},

closeForm() {
    document.getElementById("myForm").style.display = "none";
} 
    
    

  

  }
   
}
</script>
