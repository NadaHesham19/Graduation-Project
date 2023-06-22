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
import RequestsViewAdmin from "../views/RequestsViewAdmin.vue";
import BookingsAdminView from "../views/BookingsAdminView.vue";
import HistoryAdminView from "../views/HistoryAdminView.vue";
import SpaceView from "../views/SpaceView.vue";
import ResetPassword from "../views/ResetPassword.vue"
import QrCodeView from "../views/QrCode.vue"
import ExtraAddNewView from"../views/ExtraAddNewView.vue"


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
      component: RequestsViewAdmin,
    },
    {
      path: "/allbookingsadmin",
      name: "allbookingsadmin",
      component: BookingsAdminView,
    },
    {
      path:"/historyadmin",
      name:"histiryadmin",
      component:HistoryAdminView
    },
    {
      path: '/space/:id',
      name: 'space',
      component: SpaceView
    },
    {
      path: '/resetpassword/:email',
     name: 'reset',
     component: ResetPassword
   },
   {
    path:'/qrcode/:id',
    name:'QrCode',
    component:QrCodeView
   },
   {
    path:'/extraaddnew/:id',
    name:'ExtraAddNew',
    component:ExtraAddNewView
   }
  ],
});

export default router;
