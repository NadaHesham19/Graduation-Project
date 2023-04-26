<template>
    <NavBar/>
    <div class="upper" >
        <div class="texts">Book your room now:</div>
        <form>
            <div class="info">
                <div class="location">
                        <div class="locate write">Location: {{ location }}</div>
                        <div class="selection">
                          <select v-model="Data.location">
                            <option disabled value=""> </option>
                            <option>Nasr city</option>
                            <option>Masr ElGedida</option>
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
                <div class="time">
                    <label for="datetime" class="write">Date and Time:</label>
                    <input type="datetime-local" id="datetime" v-model="Data.dateAndtime">
                </div>
            </div>
            <div class="decision">
                    <button class="buttons" type="submit">Search</button>
                    <button class="buttons" @click="resetForm()">Reset</button>
                    
            </div>
        </form>
        
        

        
        <!--<div class="text">Book Your room now:</div>
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
        <div class="decision">
            <button class="buttons">Search</button>
            <button class="buttons">Reset</button>
            
        </div>-->

    </div>  
    
    <div class="lower">
        <BookNewCards/>
        
    </div>
    <Footer/>
</template>

<script>
    import NavBar from '../components/NavBar.vue'
    import Footer from '../components/Footer.vue'
    import dropDown from '../components/dropdown.vue';
    import BookNewCards from '@/components/BookNewCards.vue';
    import axios from "axios";

    export default{
    name: "BookNowView",
    components:{
    NavBar,
    Footer,
    dropDown,
    BookNewCards
    },
    data(){
        return{
            Data:{
                location:'',
                capacity:'',
                dateAndtime:''
            }
        }
    },
    methods:{
        bookPost(){
            axios.post('http://localhost:5173/api/bookings',this.Data)
            .then((response) => {
                this.Data=response.data
            })
            .error((error)=> console.log(error))
        },
        resetForm() {
          this.$refs.form.reset();
        }
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
  }

  .texts{
    color:var(--darkblue);
    font-weight: bold;
    font-size: 30px;
    padding-top:20px;
  }

  .info{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top:20px;
    column-gap: 40px;

  }
  .location{
    display: flex;
    flex-direction: row;
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
 }

 .decision{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /*display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;*/
    
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

  /*.upper{
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

.decision{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    
}
.buttons{
    border-radius: 25px;
    color: var(--light);
    background-color:var(--lightblue);
    border: none;
    text-align: center;
    width:200px;
    height: 50px;
    margin-top: 15px;
    font-family: 'Roboto';
    font-size: 20px;

}

.buttons:hover ,
.buttons:active {
 color: var(--darkblue) !important;
 font-weight: 700 !important;
 cursor: pointer;

}*/

</style>

