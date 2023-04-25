<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <router-link class="navbar-brand logo" to="/home">
        <img
          class="img-fluid pb-1 ps-0"
          width="83.5"
          src="../assets/Your-Space-logos_white.png"
          alt=""
        />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fa-solid fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="navbar-nav ms-auto mb-2 mb-lg-0">
          <router-link class="nav-link nav-item" aria-current="page" to="/home"
            >Home</router-link
          >

          <router-link class="nav-link nav-item" aria-current="page" to="/ourspaces"
            >Our Spaces</router-link
          >

          <router-link class="nav-link nav-item" aria-current="page" to="/booknow"
            >Book Now</router-link
          >

          <router-link class="nav-link nav-item" to="/bookings"
            >Your Bookings</router-link
          >
 
          <div class="menu-item"  @click="isOpen = !isOpen">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  New Spaces
                </a>
                <transition name="fade" apear>
                  <div class="sub-menu" v-if="isOpen">
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <router-link class="dropdown-item" to="/addnewspace">Add New Space</router-link>
                </div >
                  <hr class="dropdown-divider text-white" />
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <router-link class="dropdown-item" to="/reviewrequest">Review Request</router-link>
                  
                </div>
                  </div>
                </transition>
              </div>

          <router-link class="nav-link nav-item" to="/about"
            >About us</router-link
          >

          <router-link class="nav-link nav-item" to="/profile"
            ><i
              class="icon fa-regular fa-circle-user ms-5 ms-sm-0 me-3 text-white"
            ></i
          ></router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data(){
return{
   isOpen: false,
}
  }
};
</script>

<style>
.navbar,
.dropdown-menu {
  background-color: var(--nav) !important;
}
.dropdown-item {
  margin: 0 !important;
}
.dropdown-item:hover {
  background-color: var(--nav) !important;
  color: var(--active) !important;
}
.nav-link:hover,
.dropdown-menu:hover,
.nav-link:focus,
.dropdown-menu:focus,
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
.dropdown-toggle::after {
  display: none !important;
}
.icon {
  width: 25px;
  height: 25px;
}
.icon:hover {
  color: var(--active) !important;
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
