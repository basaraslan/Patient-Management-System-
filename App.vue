<template>
<div id="app">
  <div id="nav">
    <navbar>
    <router-link to="/">Home</router-link> |
    <router-link to="/login">Log In</router-link> |
    <router-link to="/appointment">Get an Appointment</router-link> |
    <router-link to="/faq">FAQ</router-link>
    <router-view />
    </navbar>
  </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: lightblue;
}
body {
  margin: 0px;
  height: 100%;
  background: #221E1D;
}

#nav {
  padding: 30px;
  background: #221E1D;
  color:#ECEAE0;
 
  a {
    font-weight: bold;
    color:lightgrey;

    &.router-link-exact-active {
      color: #ECEAE0;
    }
  }
}
</style>
