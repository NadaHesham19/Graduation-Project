<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" persistent width="500">
            <template v-slot:activator="{ props }">
                <button v-bind="props" class="btn mx-auto my-3 main-btn addbtn">
                    Add Room
                </button>
            </template>
            <v-card>
                <v-card-title>
                    <h1 class="text-h5">Add Room:</h1>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12" sm="6" md="4">
                                <label for="name">Name:</label>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <input class="mt-1" id="name" type="text" v-model="name" />
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="6" md="4">
                                <label for="capacity">Capacity:</label>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <input class="mt-1" id="capacity" type="text" v-model="number" />
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="6" md="4">
                                <label for="activity">Activity:</label>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <input class="mt-1" id="activity" type="text" v-model="activity" />
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="6" md="4">
                                <label for="type">Type:</label>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <input class="mt-1" id="type" type="text" v-model="type" />
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="6" md="4">
                                <label for="price">Price:</label>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <input class="mt-1" id="price" type="text" v-model="price" />
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <button class="btn cancel-btn mx-2" variant="text" @click="dialog = false">
                        Cancel
                    </button>
                    <button class="btn main-btn mx-2" variant="text" @click="add()">
                        Add
                    </button>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
    <v-alert color="error" icon="$error" title="You're not logged in" text="Please Try again" v-if="this.authorizationFlag"
        class="alert align-items-center">
        <button class="goButton" @click="redirectPage()">Go to Log In</button>
    </v-alert>
</template>
  
<script>
import axios from 'axios'
export default {
    data: () => ({
        // spaceId: this.$route.params.id,
        dialog: false,
        date: null,
        menu: false,
        number: null,
        name: "",
        activity: "",
        type: "",
        price: null,
        authorizationFlag: false,
        securityFlag: localStorage.getItem('securityFlag')
    }),
    props: ['spaceId'],
    mounted() {
        console.log(this.spaceId, "iddddd in add")
    },
    methods: {
        add() {

            console.log("id", this.spaceId);
            console.log("name", this.name);
            console.log("number:", this.number);
            console.log("activity:", this.activity);
            console.log("type:", this.type);
            console.log("price:", this.price);

            axios
                .post(`http://localhost:8080/api/room?flag=${this.securityFlag}`, {
                    number: this.number,
                    name: this.name,
                    activity: this.activity,
                    type: this.type,
                    price: this.price,
                    spaceId: this.spaceId
                })

                .catch((err) => {
                    // Handle errors
                    if (err.response.data.message === "Unauthorized request") {
                        this.authorizationFlag = true
                        console.log(this.authorizationFlag)
                    }
                })

            this.number = null;
            this.name = "";
            this.activity = "";
            this.type = "";
            this.price = null;

            window.location.reload();

        },
    },
};
</script>
  
<style scoped>
.goButton {
    background-color: var(--light) !important;
    color: black !important;
    border-radius: 15px !important;
    height: 40px !important;
    width: 100px !important;
    font-weight: 500 !important;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;

}

.alert {
    width: 400px;
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

.addbtn {
    width: 200px;
    height: 60px !important;
    border-radius: 50px !important;
}
</style>
  