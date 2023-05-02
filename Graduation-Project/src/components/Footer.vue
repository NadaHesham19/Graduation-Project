<template>
  <div class="footer">
    <div class="container">
      <div class="row pb-5 align-items-center w-100">
        <div class="col-8">
          <img src="../assets/Your-Space-logos_white.png" width="300px" height="100px" alt="" class="footerlogo" />
        </div>
        <div class="col-4 contact">
          <h4 class="mb-2">Contact us</h4>
          <ul class="list-unstyled lh-lg">
            <li>
              <i class="fa-solid fa-location-dot me-3"></i> Nasr city , 7th
              district
            </li>
            <li><i class="fa-brands fa-facebook me-3"></i>Your space</li>
            <li><i class="fa-brands fa-youtube me-3"></i>Yourspace</li>
            <li><i class="fa-solid fa-phone me-3"></i>+201275777096</li>
            <li>
              <i class="fa-solid fa-envelope me-3"></i>Yourspace@gmail.com
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.footer {
  background-color: var(--nav);
  color: white;

}

.contact {
  padding-top: 100px;
  padding-left: -250px !important;
}

.footerlogo {
  margin-top: 50px;
  margin-left: 50px;
}
</style>