<template>
  <div class="appointment">
    <h1>Get an Appointment</h1>
    <NewPatient @add-new="submitAppointment"></NewPatient>

    <PatientList :patients="patients" />
  </div>
</template>

<script>
import PatientList from "../components/PatientList.vue";
import NewPatient from "../components/NewPatient.vue";
export default {
  data() {
    return {
      enteredID: "",
      enteredName: "",

      enteredDate: "",
      enteredTime: "",
      enteredHospital: "",
      enteredDoctor: "",
      patients: [
        
      ],
    };
  },
  components: {
    PatientList,
    NewPatient,
  },
  emits: ["add-new"],
  methods: {
    submitAppointment(id, name, surName, date, time, hospitalName, doctor) {
      const newPatientData = {
        id: id,
        name: name,
        surName: surName,
        chosenDate: date,
        chosenTime: time,
        chosenDoctor: doctor,
        chosenHospital: hospitalName,
      };
      this.patients.push(newPatientData);
    },
  },
};
</script>

<style scoped>
.appointment {
  background: #eceae0;
  border-radius: 25px;
  color: #221E1D;
}
form {
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
}
* {
  display: flex;
  flex-direction: column;
  margin: 5px;
  align-items: flex-start;
}
.inputHolder {
  width: 60%;
  display: flex;
  flex-direction: column;
}
.inputHolder input {
  width: 100%;
  height: 20px;

  border: 1px solid lightsalmon;
}
.date-style {
  height: 20px;
  width: 250px;
  font-size: 12px;
  display: flex;
  flex-direction: row;
}
</style>
