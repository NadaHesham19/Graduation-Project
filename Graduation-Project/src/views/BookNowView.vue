<template>
    <nav-bar></nav-bar>
    <div class="upper">
        <div class="text">Book Your room now:</div>
        <div class="info">
            <div class="locate">
                <dropDown/>
            </div>
            <div class="cap">
                <label for="num">Capacity:</label>
                <input type="number" id="num number" min="1" max="50">
            </div>
             <div class="time">
                <label for="datetime">Date and Time:</label>
                <input type="datetime-local" id="datetime">
            </div>
        </div>
        <div class="decide">
            <button class="btn main-btn b1 mx-2">Search</button>
            <button class="btn main-btn b2 mx-2">Reset</button>
            
        </div>
    </div>  
    
    <div class="lower">
        <BookNewCards/>
        
    </div>
    <Footer/>
</template>



<style scoped>
body{
    padding: 0;
    margin: 0;
    font-family: "Roboto", sans-serif;    
  }
  .upper{
    background-color: var(--background);
    height:300px;
    width:auto;
    text-align: center;
    
  }

.text{
    color:var(--darkblue);
    font-weight: bold;
    font-size: 30px;
    margin-top:50px;
    margin-left:70px;
}

.info{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.locate{
   margin-top: 20px;
}
.cap , .time{
    font-weight: bold;
    color: var(--darkblue);
    font-size:20px;
    margin-top:13px;
    padding-left:30px;
    
}
input[type=number]{
    width:150px;
    height:25px;
    margin-left:10px;
}
.btn{
    display: flex;
    flex-direction: row;
    margin-top: 50px;
    gap:20px;
}
/*.b1 , .b2{
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
.b1:active ,
.b2:hover ,
.b2:active{
 color: var(--darkblue) !important;
 font-weight: 700 !important;
 cursor: pointer;

}*/

</style>

<script>
    import NavBar from '../components/NavBar.vue'
    import Footer from '../components/Footer.vue'
    import dropDown from '../components/dropdown.vue';
    import BookNewCards from '@/components/BookNewCards.vue';
    export default{
    name: "BookNowView",
    components:{
    NavBar,
    Footer,
    dropDown,
    BookNewCards
}
    
 }
</script>