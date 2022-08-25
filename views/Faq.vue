<template>
<div class="hello">
  <div class="card-wrapper">
    <h4>What does the site do</h4>

    <p>
      The site mainly generates an appointment when the desired information is
      provided from patient like hospital name, doctor name, and appointment
      hour.
    </p>
  </div>
  <div class="card-wrapper">
    <h4>What is the aim of this website?</h4>

    <p>
      The aim of the project is to help patients to get an appointment from a
      website instead of going to the hospital physically. Also we have an
      informative page about various diseases to make patients informed.
    </p>
  </div>
  <div class="card-wrapper">
    <h4>How can I log-in the system?</h4>

    <p>
      As a patient, in order to log-in the system, patients should enter their
      11-digit ID Number and password. By pressing the appointment button,
      patients can start their appointment process, which he/she should select
      appropriate doctor, date, and hospital according to its city.
    </p>
  </div>
  <div class="card-wrapper">
    <h4>Can I make an appointment from my phone?</h4>

    <p>
      Yes, patients can get their appointment if and only if there is an internet-connected device that they have.
    </p>
  </div>
  <div class="card-wrapper">
    <h4>Can I select my own doctor as I wish for my appointment?</h4>

    <p>
      Yes, if the timeline and availability is OK, then you can.
    </p>
  </div>
  </div>
</template>
<script>
export default {
    name:'Faq'
}
</script>
<style lang="scss" scoped>
h4 {
  margin-top: 5px;
  margin-bottom: 5px;
  color: #000000;
}
.headerMessage {
  margin-top: 50px;
  margin-bottom: 0px;
}
p {
  font-size: 12px;
  font-weight: bold;
  text-align: left;
  color: #000000;
}

ul {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #000000;
  font-size: 12px;
}
.card-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-bottom: 4px solid #63aa9c;
  width: 100%;
  margin-top: 10px;
  
  //border-radius: 50px 0 50px 0;
}
.card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
a {
  color: #42b983;
}
.hello {
  margin-top: 30px;
  margin-bottom: 30px;
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: #eceae0;
  border-radius: 20px;
}
</style>
