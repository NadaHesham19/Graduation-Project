<template>
    <NavBar />
    <!-- <p>{{ spaceId }}</p> -->
    <div class="details pt-4">
        <div class="container mt-5 pt-5">
            <div class="row align-items-center justify-content-evenly">
                <div class="col-6">
                    <h2 class="mb-5 pb-5 fw-bold">The Space</h2>
                    <ul class="list-unstyled lh-lg ms-5 mb-5">
                        <li class="align-items-center m-3 fs-4 "><i class=" me-3 fa-solid fa-circle-info fs-3 "></i>
                            description is here
                        </li>
                        <li class="align-items-center m-3 fs-4 "><i class="fa-solid fa-location-dot me-3 p-1"></i>
                            address is here
                        </li>
                        <li class="align-items-center m-3 fs-4 "><i class="fa-solid fa-phone me-3"></i>
                            phone number is here
                        </li>
                        <li class="align-items-center m-3 fs-4 "><i class="fa-solid fa-star me-3"></i>
                            rating is here
                        </li>
                        <li class="align-items-center m-3 fs-4 "><i class="fa-solid fa-wifi me-3"></i>
                            Offers free Wi-Fi
                        </li>
                        <li class="align-items-center m-3 fs-4 "><i class="fa-solid fa-clock me-3"></i>
                            open hours
                        </li>
                        <li class="align-items-center m-3 fs-4 "><i class="fa-solid fa-dollar-sign me-3"></i>
                            price range
                        </li>
                        <li class="align-items-center m-3 fs-4 "><i class="fa-solid fa-bell me-3"></i>
                            Services is here
                        </li>
                    </ul>
                </div>
                <div class="col-6 mb-5">
                    <img class="img-fluid image" src="../assets/main.jpeg" alt="">
                </div>
            </div>
            <div class="row mt-5 pt-5">
                <div class="location">
                    <h3 class="mb-5 pb-5 fw-bold">Our Locations:</h3>
                    <div class="map p-5">map is here</div>
                </div>
            </div>
            <div class="row mt-5 pt-5 search"></div>
        </div>
    </div>
</template>

<script>
import NavBar from '../components/NavBar.vue';
export default {
    data() {
        return {
            spaceId: this.$route.params.id,
            spaceDetails: {
                //   spaceId: 1,
                address: "nasrcity",
                district: "cairo",
                roomNumbers: 4,
                description: "test123",
                name: "nadine",
                contactNumber: "123",
                minPrice: 10,
                maxPrice: 20,
                startTime: "10:00:00",
                endTime: "12:00:00",
                drinks: true,
                owner: "weza",
                outdoors: false,
                ratingAverage: 4
            }
        }
    },
    components: { NavBar },
    // created() {
    //     this.spaceId = this.$route.params.id;
    // },

}
</script>

<style scoped>
.details {
    color: #203467;
    background-color: var(--background);
    line-height: 1.5;
}

.image {
    border-radius: 15px;
}
</style>