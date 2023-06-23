<template>
    <div class="card text-white m-5">
        <img :src="imageSrc" class="card-img-top" alt="..." />
        <div class="card-body">
            <h5 class="card-title fw-bolder"> {{ space.name }}</h5>
            <p class="card-text ms-2 mt-4">{{ space.address }}</p>
            <p class="card-text"><i class="fa-solid fa-star ms-2 me-1"></i> {{ space.ratingAverage.toFixed(1) }}</p>
            <div class="row d-flex justify-content-evenly ">
                <div class="col-5">
                    <router-link :to="{ name: 'modifyspace', params: { id: space.spaceId } }"
                        class="btn mx-auto main-btn modifybtn">Modify<i
                            class="fa-regular fa-pen-to-square ms-2"></i></router-link>
                </div>
                <div class="col-5">
                    <button @click="deleteSpace" class="  btn mx-auto  deletebtn">Delete <i
                            class="fa-solid fa-x ms-2"></i></button>
                </div>
            </div>
        </div>
    </div>
    <v-alert color="error" icon="$error" title="You're not logged in" text="Please Try again" 
            v-if="this.authorizationFlag" class="alert align-items-center container">
            <button class="goButton" @click="redirectPage()">Go to Log In</button>
          </v-alert>
</template>

<script>
import axios from "axios";

export default {

    data() {
        return {
            imageSrc: "",
            authorizationFlag: false,
            securityFlag : localStorage.getItem('securityFlag')
            // jsessionId: localStorage.getItem('jsessionidValue'),
            // isVisible: true

        };
    }
    , props: [
        'space'
    ],

    mounted() {
        this.fetchImage();
    },

    methods: {
        redirectPage(){
      this.$router.push('/')
    },
        fetchImage() {
            axios
                .get(`http://localhost:8080/api/images/space/${this.space.spaceId}/0`,

                    {
                        responseType: "arraybuffer",
                    })
                .then((response) => {
                    const blob = new Blob([response.data], { type: "image/jpeg" }); // Create a Blob 
                    this.imageSrc = URL.createObjectURL(blob); //  URL for the Blob
                })
                .catch((error) => {
                    console.error(error);
                });
        },
        deleteSpace() {

            axios

                .delete(`http://localhost:8080/api/spaces/${this.space.spaceId}?flag=${this.securityFlag}`)
                .then((response) => {
                    console.log(response);
                    this.$emit('deleted', this.space.spaceId);
                    window.location.reload();
                })
                .catch((err) => {
        // Handle errors
        if(err.response.data.message === "Unauthorized request"){
          this.authorizationFlag = true
          console.log(this.authorizationFlag)
        }
      })


            // this.isVisible = false;
        },
    },

};


</script>

<style>

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
.card {
    background-color: var(--darkblue) !important;
    border-radius: 30px !important;

}

.card img {
    border-radius: 30px;
    width: 100%;
    height: 200px;
}

.deletebtn {
    width: 130px !important;
    background-color: #C82333 !important;
    color: white !important;
    font-weight: 500 !important;
    border-radius: 15px !important;
    padding: 0.5rem 1.5rem !important;
    border: none;
    height: 50px;
}

.deletebtn:hover {
    color: var(--darkblue) !important;
    font-weight: 700 !important;

}

.modifybtn {
    width: 130px !important;

}
</style>
