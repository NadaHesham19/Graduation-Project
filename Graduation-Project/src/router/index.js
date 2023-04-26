import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import SignupView from "../views/SignupView.vue";
import ForgotView from "../views/ForgotView.vue";
import AddNewSpaceView from "../views/AddNewSpaceView.vue";
import BookingsView from "../views/BookingsView.vue";
import ProfileView from "../views/ProfileView.vue";
import ReviewRequestView from "../views/ReviewRequestView.vue";
import BookNowView from "../views/BookNowView.vue";
import OurSpacesView from "../views/OurSpacesView.vue";
import RequestsViewAdmin from '../views/RequestsViewAdmin.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "signup",
      component: SignupView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/home",
      name: "home",
      component: HomeView,
    },
    {
      path: "/forgot",
      name: "forgot",
      component: ForgotView,
    },
    {
      path: "/addnewspace",
      name: "addnew",
      component: AddNewSpaceView,
    },
    {
      path: "/bookings",
      name: "bookings",
      component: BookingsView,
    },
    {
      path: "/profile",
      name: "profile",
      component: ProfileView,
    },
    {
      path: "/reviewrequest",
      name: "reviewrequest",
      component: ReviewRequestView,
    },
    {
      path: "/booknow",
      name: "booknow",
      component: BookNowView,
    },
    {
      path: "/ourspaces",
      name: "ourspaces",
      component: OurSpacesView,
    },
    {
      path: "/reviewadmin",
      name: "reviewadmin",
      component :RequestsViewAdmin,
    }
  ],
});

export default router;
