<template>
  <nav-bar></nav-bar>
  <div class="container my-5 ">
  
    <div class="request">
      <div class="title t">Requests</div>
      <hr />
      <div class="info">
        <div class="title">{{ FirstSpacename }}</div>
        <div class="title">{{ SecondSpacename }}</div>
        <div class="title">{{ ThirdSpacename }}</div>
      </div>
    </div>
    <div class="name">
      <div class="title t">Name</div>
      <hr />
      <div class="info">
        <div class="title">{{ FirsClientname }}</div>
        <div class="title">{{ SecondClientname }}</div>
        <div class="title">{{ ThirdClientname }}</div>
      </div>
    </div>
    <div class="status">
      <div class="title t">Status</div>
      <hr />
      <div class="info b">
        <button class="accept" disabled>{{ Accepted }}</button>
        <button class="decline" disabled>{{ Declined }}</button>
        <button class="pend" disabled>{{ Pending }}</button>
      </div>
    </div>
  </div>
  <Footer />
</template>

<style scoped>
body {
  padding: 0;
  margin: 0;
  font-family: "Roboto", sans-serif;
  background-color: var(--background);
}
.container {
  display: grid;
  grid-template-columns: auto auto auto auto;
  background-color: var(--darkblue);
  border-radius: 30px;
  height: fit-content;
  width: fit-content;
  padding-bottom: 50px;
}
.title {
  color: var(--light);
  font-size: 20px;
}
.t {
  font-weight: bold;
  font-size: 20px;
}

hr {
  color: var(--light);
}

.status {
  display: flex;
  flex-direction: column;
}

.b {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  row-gap: 100px;
}

.Accepted {
  color: var(--light);
  background-color: green;
  height: 50px;
  width: 100px;
  margin-top: 100px;
}
.Declined {
  color: var(--light);
  background-color: red;
  height: 50px;
  width: 100px;
}
.Pending {
  color: var(--light);
  background-color: rgb(188, 236, 92);
  height: 50px;
  width: 100px;
}
</style>

<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";

import SimpleNav from "@/components/SimpleNav.vue";
export default {
  name: "RequestsViewAdmin",
  components: {
    NavBar,
    Footer,
  },
  props: [
    "FirstSpacename",
    "SecondSpacename",
    "ThirdSpacename",
    "FirstClientname",
    "SecondClientname",
    "ThirdClientname",
    "Accepted",
    "Declined",
    "Pending",
  ],
};
</script>
