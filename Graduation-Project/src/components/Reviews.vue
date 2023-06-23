<template>
    <v-row justify="">
        <v-dialog v-model="dialog" persistent width="500">
            <template v-slot:activator="{ props }">
                <button v-bind="props" class="btn my-3 mt-5 pt-5 rev ">
                    View Reviews
                </button>
            </template>
            <v-card height="530">
                <v-card-title>
                    <h1 class="text-h4 mt-3">Reviews</h1>
                </v-card-title>
                <v-card-text>
                    <ul>
                        <li v-for="review in orderedReviews" :key="review.ratingId">
                            <h5> {{ usernames[review.userId] }}</h5>
                            <p>Rating: {{ review.rating }}</p>
                            <p>Comment: {{ review.comment }}</p>
                        </li>
                    </ul>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <button class="btn cancel-btn mx-2" variant="text" @click="dialog = false">
                        Cancel
                    </button>
                </v-card-actions>


            </v-card>
        </v-dialog>
    </v-row>
    <v-alert color="error" icon="$error" title="You're not logged in" text="Please Try again" 
            v-if="this.authorizationFlag" class="alert align-items-center container">
            <button class="goButton" @click="redirectPage()">Go to Log In</button>
          </v-alert>
</template>

<script>
import axios from "axios";
export default {
    data: () => ({
        dialog: false,
        date: null,
        menu: false,
        user: {},
        reviews: [],
        usernames: {},
        authorizationFlag: false,
        securityFlag: localStorage.getItem('securityFlag')

    }), props: ['spaceId', 'userID'],
    mounted() {
        console.log(this.spaceId, "review", this.userID)

    },
    methods: {
        redirectPage(){
      this.$router.push('/')
    }

    },

    computed: {
        orderedReviews() {
            // Order the reviews by rating in descending order
            return this.reviews.sort((a, b) => b.rating - a.rating);
        },
    }, beforeMount() {
        axios
            .get(`http://localhost:8080/api/ratings/space/${this.spaceId}?flag=${this.securityFlag}`)
            .then((response) => {
                console.log(response.data)
                this.reviews = response.data;
                const userIds = this.reviews.map((review) => review.userId);
                console.log(userIds);
                userIds.forEach(userId => {
                    axios
                        .get(`http://localhost:8080/api/user/${userId}?flag=${this.securityFlag}`)
                        .then((response) => {
                            console.log(response.data)
                            this.user = response.data;
                            console.log(this.user.username);
                            this.usernames[this.user.userId] = this.user.username;
                            console.log(this.usernames, "names")
                        })
                        .catch((err) => {
                            // Handle errors
                            if (err.response.data.message === "Unauthorized request") {
                                this.authorizationFlag = true
                                console.log(this.authorizationFlag)
                            }
                        })

                });

            })
            .catch((err) => {
                            // Handle errors
                            if (err.response.data.message === "Unauthorized request") {
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
.cancel-btn {
    background-color: rgb(169, 11, 11);
    color: #fff;
    border-radius: 15px;
    height: 50px;
    font-weight: 500 !important;
    border: none;
    width: 150px !important;
    margin-left: 330px !important;
    margin-bottom: 20px !important;
}

.main-btn {
    background-color: var(--lightblue) !important;
    color: white !important;
    font-weight: 500 !important;
    border-radius: 15px !important;
    padding: 0.5rem 1.5rem !important;
    border: none;
    height: 50px !important;
}

.main-btn:hover {
    color: var(--darkblue) !important;
    font-weight: 700 !important;
}

.cancel-btn:hover {
    color: var(--darkblue) !important;
    font-weight: 700 !important;

}

.time {
    margin-top: 60px !important;
}

h1,
b,
label {
    color: var(--darkblue) !important;
}

.rev {
    margin-left: 230px;
    text-decoration: underline;
    text-underline-offset: 3px;
}
</style>