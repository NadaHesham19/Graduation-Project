<template>
  <NavBar></NavBar>
  <div class="aboutusbody">
      <div class="intro">
        <img src="../assets/aboutus.jpg" alt="aboutus" class="image w-100">
        <h1 class="text">About Us</h1>
      </div>
      <div class="details">
        <div class="who">
          <div class="question">Who Are We?</div>
          <div class="answer">We are a group of students studing Computer Engineering in Ain shams University 
              and we decided to develop a website to help students , teachers , businessmen 
              and all the people to book a room for their meetings.</div>
        </div>
        <div class="goal">
          <div class="question">Our Goals</div>
          <div class="answer">To make this website an easy website for people to book rooms.</div>
        </div>
      </div>
  </div>
  <Footer/>
</template>

<style scoped>
body{
  padding: 0;
  margin: 0;
  font-family: "Roboto", sans-serif;    
  background-color: var(--background);
}
.aboutusbody{
  display: flex;
  flex-direction: column;
}

.intro {
    position: relative;
    text-align: center;
    color: var(--background);
}

.image{
    width:100%;
    height:500px;   
}

.text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: 'Roboto';
    font-weight: bold;
    font-size: 60px;
}

.details{
  font-family: 'Roboto';

}

.question{
    font-size: 35px;
    text-align: center;
    color: var(--darkblue);
    padding:50px 0px 25px 0px;
}

.answer{
    font-size: 20px;
    text-align: center;
    padding: 0px 50px 40px 50px;  
}

</style>

<script>
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'
  export default{
      name:'AboutView',
      components:{
    NavBar , Footer
  }
}
</script>