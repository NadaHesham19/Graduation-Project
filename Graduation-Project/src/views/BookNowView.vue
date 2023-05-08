<template>
    <NavBar/>
    <SuggestionsCard/>
    <div class="upper" >
        <div class="texts">Book your room now:</div>
        <form>
            <div class="info1">
                <div class="location">
                        <label class="locate write">Location: {{ location }}</label>
                        <div class="selection" >
                          <select  v-model="Data.location" >
                            <option disabled selected>No Choice Selected</option>
                            <option>Nasr city</option>
                            <option >Masr ElGedida</option>
                            <option>Sheraton</option>
                            <option>New Cairo</option>
                            <option>6th October</option>
                            <option>Maadi</option>
                          </select>
                        </div>
                </div>
                <div class="cap">
                    <label for="num" class="write">Capacity:</label>
                    <input type="number" id="num number" min="1" max="50" class="capacity" v-model="Data.capacity">
                </div>
                <div class="date">
                    <label for="date" class="write">Choose Date:</label>
                    <input type="date" id="date" v-model="Data.date">
                </div>
              </div>
              <div class="info2">
                <div class="starttime">
                  <label for="time" class="write start">Start Time:</label>
                  <input type="time" id="time" v-model="Data.startTime">
              </div>
              <div class="endtime">
                  <label for="time" class="write end" >End Time:</label>
                  <input type="time" id="time" v-model="Data.endTime">
              </div>   
            </div>
            <div class="decision">
              <button class="buttons" type="submit" @click.prevent="openAvailable">Search</button>
              <button class="buttons res" type="reset" @change="onChange(index)"

              >Reset</button>
            </div>
        </form>

    </div>  
    <div class="lower">
      <div class="available" id="available">
        <AvailableOnSearch/>
      </div>
    </div>
    <Footer/>
</template>

<script>
    import NavBar from '../components/NavBar.vue'
    import Footer from '../components/Footer.vue'
    import dropDown from '../components/dropdown.vue';
    import AvailableOnSearch from '../components/AvailableOnSearch.vue';
    import SuggestionsCard from '../components/SuggestionsCard.vue';
    import axios from "axios";
    
    

    export default{
    name: "BookNowView",
    components:{
    NavBar,
    Footer,
    dropDown,
    AvailableOnSearch,
    SuggestionsCard,
    
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
            visibility:false
            
        }
    },
    methods:{

      onChange(index){
         this.selected[index] = ''
         }
        /*bookPost(){
            axios.post('http://localhost:5173/api/bookings',this.Data)
            .then((response) => {
                this.Data=response.data
            })
            .error((error)=> console.log(error))
        },
        resetForm() {
          this.$refs.form.reset();
        },
        openAvailable(){
            let avaiability = document.getElementById('available');
            avaiability.classList.add('open-available');
        },*/
    }
    
 }
</script>



<style scoped>
body{
    padding: 0;
    margin: 0;
    font-family: "Roboto", sans-serif;    
    background-color: var(--background);
  }

  .upper{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    flex-wrap: wrap;
    column-gap: 10px;
  }

  .texts{
    color:var(--darkblue);
    font-weight: bold;
    font-size: 30px;
    padding-top:20px;
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
  .location{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .locate{
    margin-top: 5px;
  }
  .selection{
    margin-left:10px;
    margin-top:10px;
    
  }

  .write{
    font-weight: bold;
    color: var(--darkblue);
    font-size:20px;
  
  }

  input[type=number]{
    width: 100px;
    border-color: black;
 }


 .decision{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    
}
.buttons{
    border-radius: 25px;
    color: var(--light);
    background-color:var(--lightblue);
    border: none;
    text-align: center;
    width:200px;
    height: 50px;
    margin-top: 25px;
    font-family: 'Roboto';
    font-size: 20px;
    

}

.buttons:hover ,
.buttons:active {
 color: var(--darkblue) !important;
 font-weight: 700 !important;
 cursor: pointer;

}

.res{
  margin-bottom: 20px;
}

.available{
  visibility: hidden;
}

.open-available{
  visibility: visible;
 }

</style>

