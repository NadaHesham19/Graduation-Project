<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <router-link class="navbar-brand logo" to="/spacesadmin">
        <img class="img-fluid pb-1 ps-0" width="83.5" src="../assets/Your-Space-logos_white.png" alt="" />
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fa-solid fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="navbar-nav ms-auto mb-2 mb-lg-0">
          <router-link class="nav-link nav-item" aria-current="page" to="/spacesadmin">Our Spaces</router-link>

          <router-link class="nav-link nav-item" aria-current="page" to="/allbookingsadmin">All Bookings</router-link>

          <router-link class="nav-link nav-item" aria-current="page" to="/historyadmin">History</router-link>

          <router-link class="nav-link nav-item" aria-current="page" to="/reviewadmin">Requests</router-link>
                <router-link class="nav-item nav-link" to="/" style="font-size: 15px" @click="logOut">
                  Log Out</router-link>

        </div>
      </div>
    </div>
  </nav>
</template>
  
<script>
export default {
  methods:{
    logOut(){
      // localStorage.removeItem('userID');
      localStorage.setItem('securityFlag',false);
    }
  }
}
</script>
  
<style scoped>
.navbar {
  background-color: var(--nav) !important;
}

.nav-link:hover,
.nav-link:focus,
.active {
  color: var(--active) !important;
}

.navbar a {
  color: white;
  font-weight: 600;
  margin-left: 2rem;
}

.logo {
  margin-left: 15px !important;
}


.navbar .navbar-toggler {
  color: white;
  font-size: 25px;
  border-color: white;
}

nav a.router-link-exact-active {
  color: var(--active) !important;

}
</style>
  