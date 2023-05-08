<template>
 <div class="container">
    <div class="location">Location: {{ location }}</div>

    <div class="selection">
      <select v-model="location">
        <option disabled value="" selected>No choice Selected</option>
        <option>Nasr city</option>
        <option>Masr ElGedida</option>
        <option>Sheraton</option>
        <option>New Cairo</option>
        <option>6th October</option>
        <option>Maadi</option>
      </select>
    </div>

  </div>
    
</template>

<style scoped>
body{
  padding: 0;
  margin: 0;
  font-family: "Roboto", sans-serif;    
   
}

.container{
  display: flex;
  flex-direction: row;
  
}

.location{
  font-weight: bold;
  color: var(--darkblue);
  font-size:20px;
  
}
.selection{
  margin-left:10px;
}


</style>

<script>

    export default{
        name:"dropdown",
        
  }
    
</script>