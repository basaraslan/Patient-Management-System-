<template>
  <div class="list-wrapper">
    <ul>
      <li :key="patient" v-for="patient in patients">
        {{ patient.name }} {{ patient.surName }} , {{ patient.chosenDate }} ,
        {{ patient.chosenTime }},{{patient.chosenHospital}}, {{patient.chosenDoctor}}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "PatientList",
  data() {
    return {};
  },
  props: {
    patients: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
<style lang="scss" scoped>
.list-wrapper{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-self: center;
  padding: 20px;
  align-items: flex-start;
  & ul{
    text-align: left;
    width: 90%;
    background-color: lightskyblue;
    border-radius: 25px;
    & li{
      
      list-style: none;
      padding: 5px;
      margin:10px
    }
  }
}
</style>
