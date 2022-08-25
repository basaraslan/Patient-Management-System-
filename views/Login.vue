<template>
  <div class="about">
    <h1>Login Page</h1>
    <form>
      <div class="inputHolder">
      <label>ID: </label>
      <input type="text">
      </div>
      <div class="inputHolder">
        <label>Password: </label>
      <input type="password">
      <label>Are you a doctor or any employee of hospital ?</label>
      <input class='checkbox' type="checkbox">
      </div>
      <button>Log In</button>
    </form>
  </div>
</template>


<style scoped lang='scss'>
.about{
  padding: 20px;
 border-radius: 25px;
  background: #ECEAE0;
  color: #221E1D;
}
form{
  width: 100%;
  
}
button {
  background: #fffffe;
  padding-top: 7.5px;
  padding-bottom: 7.5px;
  border-radius: 4px;
  border: 0px solid transparent;
  align-self: flex-end;
  transition: background-color 0.2s ease-in;
  color: #000000;
  transition: color 0.2s ease-in;
  margin-right: 30px;
  &:hover {
    background: #fa255e;
    color: #fffffe;
  }
}
.checkbox{
  justify-self: flex-start;
  
}

*{
  display: flex;
  flex-direction: column;
  margin: 5px;
  align-items: flex-start;
}
.inputHolder{
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.inputHolder input{
  width: auto;
  height: 20px;
  border-radius: 4px;
  border: 1px solid lightsalmon;
}

</style>




