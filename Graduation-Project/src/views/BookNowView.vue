<template>
  <NavBar></NavBar>
  <SuggestionsCard/>
  <!----Booking----->
  <div class="reserve">
    <div class="tit">
      Book Your Room Now
    </div>
    <form>
    <div class="info1">
        <label for="location" class="req">Location:</label>
        <select id="location" name="location">
          <option value="" disabled selected>Please select a place</option>
          <option value="NasrCity" required>Nasr City</option>
          <option value="MasrElGedida" required>Masr ElGedida</option>
          <option value="Sheraton" required>Sheraton</option>
          <option value="Maadi" required>Maadi</option>
          <option value="october" required>6th October</option>
        </select>
        
        <div class="capacity">
          <label for="num" class="write">Capacity:</label>
          <input type="number" id="num number" min="1" max="50" class="cap" required>
        </div>
        

        <div class="date">
          <label for="date" class="write">Choose Date:</label>
          <input type="date" id="date" required>
        </div>
    </div>

    <div class="info2">
        <div class="start">
          <label for="time" class="write start">Start Time:</label>
          <input type="time" id="time" required> 
        </div>

        <div class="end">
          <label for="time" class="write start">End Time:</label>
          <input type="time" id="time" required >
        </div>
      </div>

        <div class="decision">
          <button class="searchbtn" type="submit" @click.prevent="displayComponent()">Search</button>
          <button class="resbtn" type="reset" @change="onChange(index)">Reset</button>
        </div>
    </form>

    <div class="onsearch w-100" v-if="display">
      <AvailableOnSearch/>
    </div>
  </div>

  <Footer/>

</template>

<script>
import NavBar from '../components/NavBar.vue';
import Footer from '../components/Footer.vue';
import SuggestionsCard from '../components/SuggestionsCard.vue';
import AvailableOnSearch from '../components/AvailableOnSearch.vue';
export default({
  components:{
    NavBar,
    SuggestionsCard,
    Footer,
    AvailableOnSearch
},
  data(){
        return{
            Data:{
                location:'',
                capacity:'',
                date:'',
                startTime:'',
                endTime:'',
            },
            display:false
            
        }
    },
    methods:{

      onChange(index){
         this.selected[index] = ''
         },

         displayComponent() {
                this.display = true;
        }
        /*bookPost(){
            axios.post('http://localhost:5173/api/bookings',this.Data)
            .then((response) => {
                this.Data=response.data
            })
            .error((error)=> console.log(error))
        },*/
          
        },
    }
)

</script>

<style>

body{
  padding: 0;
  margin: 0;
  font-family: "Roboto", sans-serif;    
  background-color: var(--background);
 }


.reserve{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  flex-wrap: wrap;
  column-gap: 10px;
  padding-bottom:30px;
}

.tit{
  color:var(--darkblue);
  font-weight: bold;
  font-size: 30px;
  padding-top:10px;
  padding-bottom: 20px;
}

.info1{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top:20px;
  align-items: center;
  justify-content: center;
  column-gap: 30px;

}

.info2{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top:20px;
  align-items: center;
  justify-content: center;
  column-gap: 30px;
}

.decision{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.searchbtn{
  border-radius: 25px;
  color: var(--light) !important;
  background-color:var(--lightblue);
  border: none;
  text-align: center;
  width:200px;
  height: 50px;
  margin-top: 25px;
  font-family: 'Roboto';
  font-size: 20px;
}

.resbtn{
  border-radius: 25px;
  color: var(--light) !important;
  background-color:var(--lightblue);
  border: none;
  text-align: center;
  width:200px;
  height: 50px;
  margin-top: 25px;
  font-family: 'Roboto';
  font-size: 20px;
  margin-bottom: 20px;

}

.searchbtn:hover , .resbtn:hover
.searchbtn:active , .resbtn:active{
color: var(--darkblue) !important;
font-weight: 700 !important;
cursor: pointer;

}

input[type=number]{
  width: 100px;
  border-color: black;
}



</style>