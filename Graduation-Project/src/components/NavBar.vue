<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <router-link class="navbar-brand logo" to="/home">
        <img class="img-fluid pb-1 ps-0" width="83.5" src="../assets/Your-Space-logos_white.png" alt="" />
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fa-solid fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="navbar-nav ms-auto mb-2 mb-lg-0">
          <router-link class="nav-link nav-item nav-anchor" aria-current="page" to="/home">Home</router-link>

          <router-link class="nav-link nav-item nav-anchor" aria-current="page" to="/ourspaces">Our Spaces</router-link>

          <router-link class="nav-link nav-item nav-anchor" aria-current="page" to="/booknow">Book Now</router-link>

          <router-link class="nav-link nav-item nav-anchor" to="/bookings">Your Bookings</router-link>

          <li class="dropdown">
            <router-link to="" class="dropdown-toggle nav-link nav-item" @mouseover="isDropdownOpen = true">
              New Spaces
            </router-link>
            <ul class="dropdown-menu" :class="{ show: isDropdownOpen }" @mouseleave="isDropdownOpen = false">
              <li class="text-center">
                <router-link class="nav-item nav-link item-drop" to="/addnewspace" style="font-size: 15px">Add New
                  Space</router-link>
              </li>
              <li class="text-center">
                <router-link class="nav-item nav-link item-drop" to="/reviewrequest" style="font-size: 15px">Review
                  Request</router-link>
              </li>
            </ul>
          </li>

          <router-link class="nav-link nav-item nav-anchor" to="/about">About us</router-link>

          <li class="dropdown">
            <router-link to="/profile" class="dropdown-toggle nav-link nav-item" @mouseover="isProfileOpen = true">
              <i class="icon fa-regular fa-circle-user ms-sm-0 mx-5 text-white user"></i>
            </router-link>
            <ul class="dropdown-menu " :class="{ show: isProfileOpen }" @mouseleave="isProfileOpen = false">
              <li class="">
                <router-link class="nav-item nav-link item-drop " to="/" style="font-size: 15px" @click="logout">
                  Log Out</router-link>
              </li>
            </ul>
          </li>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isDropdownOpen: false,
      isProfileOpen: false,
    };
  },
  methods: {
    logout() {
      history.pushState(null, document.title, location.href);
      window.addEventListener('popstate', function (event) {
        history.pushState(null, document.title, location.href);
      });
    }
  }
};
</script>

<style scoped>
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

.nav-anchor.router-link-exact-active {
  color: var(--active) !important;
}

.item-drop {
  margin: 0 !important;
}
</style>
