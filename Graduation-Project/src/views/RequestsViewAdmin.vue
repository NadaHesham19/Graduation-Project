<template>
   <AdminNav></AdminNav>
   
   <div class="container my-5">
       <div class="request">
           <div class="title t">Requests</div>
           <hr>
           <div class="info">
               <div class="title">{{FirstSpacename}}</div>
               
           </div>
       </div>
       <div class="name">
           <div class="title t">Name</div>
           <hr>
           <div class="info">
               <div class="title">{{FirstClientname}}</div>
              
           </div>
       </div>
       <div class="details">
           <div class="title t">Details</div>
           <hr>
           <div class="info">
               <div class="title det">Location:{{FirstLocation}}
                   <br>
                   Number of rooms: {{ Numberofrooms }}
               </div>
               
           </div>
       </div>
      <div class="status">
           <div class="title t">Action</div>
           <hr>
           <div class="info b">
               <button class="accept" @click="openPopup">Accept</button>
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
               </div>
               
           </div>
       </div>
   </div>
   
    
</template>

<style scoped>
    body{
        padding: 0;
        margin: 0;
        font-family: "Roboto", sans-serif;    
        background-color: var(--background);
    
    }
    .container{
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
       justify-content:flex-start;
       align-items: center;
       align-content: center;
   }
    

   .accept{
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
   }

</style>

<script>
import AdminNav from '../components/AdminNav.vue'
    export default{
    name: "RequestsViewAdmin",
    components:{
   AdminNav
    },
    props:[
        'FirstSpacename',
        'FirstClientname',
        'FirstLocation',
        'Numberofrooms'
    ],
    methods:{
        openPopup(){
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
        }
        


    }

}
</script>