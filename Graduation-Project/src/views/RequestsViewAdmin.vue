<template>
    <AdminNav></AdminNav>

    <div class="container ">
        <div class="headings">
            <div class="request">Request</div>
            <div class="name">Name</div>
            <div class="details">Details</div>
            <div class="action">Action</div>
        </div>
        <hr />
        <div class="info" v-for="item  in req">
            <div class="spacename align-self-start justify-content-start" :key="requestId">{{ item.requestId }}</div>
            <div class="person align-self-start justify-content-start " :key="name">{{ item.name }}</div>
            <div class="dets">
                <div class="location align-self-start justify-content-start" :key="address">Location: {{ item.address }}
                </div>
                <div class="numberofrooms align-self-start justify-content-start" :key="noOfRooms">Number Of Rooms: {{
                    item.noOfRooms }} </div>
            </div>
            <div class="decide align-self-start justify-content-start">
                <div class="box">
                    <AcceptModal  :requestId="item.requestId"/>
                    <DeclineModal  :requestId="item.requestId"/>

                </div>

            </div>
        </div>

    </div>

    <!--<div class="container my-5">
        <div class="request">
            <div class="title t">Requests</div>
            <hr>
            <div class="info" v-for="item in req" v-bind:key="item.spaceName">
                <div class="title">{{item.spaceName}}</div>
                
            </div>
        </div>
        <div class="name">
            <div class="title t">Name</div>
            <hr>
            <div class="info"  v-for="item in req" v-bind:key="item.userName">
                <div class="title">{{item.userName}}</div>
               
            </div>
        </div>
        <div class="details">
            <div class="title t">Details</div>
            <hr>
            <div class="info" v-for="item in req">
                <div class="title det">Location:{{req.location}}
                    <br>
                    Number of rooms: {{ req.noOfRooms }}
                </div>
            </div>
        </div>
       <div class="status">
            <div class="title t">Action</div>
            <hr>
            <div class="info b" v-for="item in req">
             <AcceptModal/>
             <DeclineModal/>
                /*<button class="accept" @click="openPopup">Accept</button>
                <button class="decline" @click="openPopup">Decline</button>
                <div class="popup" id="popup">
                 <div class="pop">Are you sure you want to accept this request?</div>
                     <button type="button" class="btn yes" @click="closePopup()">Yes</button>
                     <button type="button" class="btn no" @click="closePopup()" >No</button>
                </div>
                
                <div class="popup2" id="popup2">
                 <div class="pop">Are you sure you want to decline this request?</div>
                     <button type="button" class="btn yes" @click="closePopup()">Yes</button>
                     <button type="button" class="btn no" @click="closePopup()" >No</button>
                </div>*/
             
            </div>
        </div>
    </div>-->
    <v-alert color="error" icon="$error" title="You're not logged in" text="Please Try again" 
            v-if="this.authorizationFlag" class="alert align-items-center container">
            <button class="goButton" @click="redirectPage()">Go to Log In</button>
          </v-alert>
</template>
 
<script>
import AcceptModal from '../components/AcceptModal.vue';
import AdminNav from '../components/AdminNav.vue'
import DeclineModal from '../components/DeclineModal.vue';
import axios from 'axios'
export default {
    name: "RequestsViewAdmin",
    components: {
        AdminNav,
        AcceptModal,
        DeclineModal
    },
    data() {
        return {
            req: [
                {
                    requestId:'',
                    name: '',
                    address: '',
                    noOfRooms: ' '

                },
            ],
            authorizationFlag: false,




        }
    },

    methods: {
        redirectPage(){
      this.$router.push('/')
    },

        /*openPopup(){
            let popup = document.getElementById('popup');
            popup.classList.add('open-popup');
        },
        closePopup(){
            let popup = document.getElementById('popup');
            popup.classList.remove('open-popup');
        },
        openPopup(){
            let popup = document.getElementById('popup2');
            popup.classList.add('open-popup');
        },
        closePopup(){
            let popup = document.getElementById('popup2');
            popup.classList.remove('open-popup');
        }*/




    },
    beforeMount() {
        this.securityFlag = localStorage.getItem('securityFlag')
        axios.get(`http://localhost:8080/api/admin/requests/?status=pending&flag=${this.securityFlag}`)
            .then((response) => {
                this.req = response.data
                console.log(response.data)
            })
            .catch((err) => {
        // Handle errors
        if(err.response.data.message === "Unauthorized request"){
          this.authorizationFlag = true
          console.log(this.authorizationFlag)
        }
      })
    },
};
</script>
 
<style scoped>
.goButton{
    background-color: var(--light)!important;
    color: black!important;
    border-radius: 15px !important;
    height: 40px !important;
    width:100px !important;
    font-weight: 500 !important;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top:10px;
  
  }
  .alert{
    width:400px;
    display: flex;
    border-radius: 25px;
  }
body {
    padding: 0;
    margin: 0;
    font-family: "Roboto", sans-serif;
    background-color: var(--background);

}

.container {
    display: grid !important;
    grid-template-rows: auto auto auto auto !important;
    background-color: var(--darkblue);
    border-radius: 30px;
    height: fit-content;
    width: 2000px;
    padding-bottom: 50px;
    column-gap: 50px;
    row-gap: 50px;
    margin-top: 30px;
}

.headings {
    color: var(--light);
    display: grid;
    grid-template-columns: auto auto auto auto;
    padding-top: 40px;
    font-size: 20px;
    margin-left: 50px;

}

hr {
    color: var(--light);

}

.info {
    display: grid;
    grid-template-columns: auto auto auto auto;
    color: var(--light);
    font-size: 15px;
    margin-left: 100px;


}

.decide {
    display: grid;
    grid-template-rows: auto auto;
    row-gap: 10px;
}

.spacename,
.person,
.dets {
    display: flex;
    flex-direction: column;
    align-content: center;
}

.box {
    display: grid;
    grid-template-rows: auto auto;
    row-gap: 15px;
}

/*.request{
         padding-left:10px;
     }
 
     .spacename , .dets , .person{
         margin-left:25px;
     }
 */





/*.container{
        display: grid;
        grid-template-columns: auto auto auto auto;
        background-color: var(--darkblue);
        border-radius: 30px;
        height: fit-content;
        width:1500px;
        padding-bottom:50px;
        
     }
     .title{
        color:var(--light);
        font-size:20px;
     }
     .t{
        font-weight: bold;
        font-size:20px;
     }
 
     hr{
        color: var(--light);
     }
 
     
 
     .status{
        display: flex;
        flex-direction: column;
     }
 
    .b{
        display: flex;
        flex-direction: column;
        justify-content:center;
        align-items: center;
        align-content: center;
        gap:20px;
        padding-top:120px;
    }
     
 
    //.accept{
        color:var(--light);
        background-color: green;
        height:50px;
        width:100px;
        margin-top:100px;
    }
    .decline{
        color:var(--light);
        background-color: red;
        height:50px;
        width:100px;
       
 
    }
    .popup{
     width:400px;
     background-color: var(--background);
     border-radius:6px;
     position: absolute;
     top:50%;
     left: 50%;
     transform: translate(-50%,-50%);
     visibility: hidden;
    }
 
    .popup2{
     width:400px;
     background-color: var(--background);
     border-radius:6px;
     position: absolute;
     top:50%;
     left: 50%;
     transform: translate(-50%,-50%);
     visibility: hidden;
    }
 
    .pop{
     font-size:20px;
     font-family: 'Roboto';
     margin-top: 10px;
     margin-left: 10px;
    }
 
    .yes{
     background-color: green;
     border-radius: 5px;
     color:var(--light);
    }
 
    .no{
     background-color: red;
     border-radius: 5px;
     color:var(--light);
    }
 
    .btn{
     text-align: center;
     cursor: pointer;
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     margin-left:170px;
     margin-top:10px;
     margin-bottom: 10px;
 
 
    }
 
    .yes:hover , .yes:active{
     color: rgb(90, 87, 87);
     background-color: green;
 
    }
    .no:hover , .no:active{
     color: rgb(90, 87, 87);
     background-color: red;
 
    }
    .open-popup{
     visibility: visible;
    }*/
</style>