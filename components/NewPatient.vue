<template>
  <form @submit.prevent="submitAppointment">
    <div class="inputHolder">
      <label> Personal ID : </label>
      <input v-model="enteredID" type="text" />
    </div>
    <div class="inputHolder">
      <label> Name : </label>
      <input v-model="enteredName" type="text" />
    </div>
    <div class="inputHolder">
      <label> Surname : </label>
      <input v-model="enteredSurName" type="text" />
    </div>

    <div class="inputHolder">
      <label> Which hospital do you want to go ? </label>
      <select @change="(e) => (enteredHospital = e.target.value)">
        <option :value="hospital" v-for="hospital in hospitals" :key="hospital">
          {{ hospital }}
        </option>
      </select>
    </div>
    <div class="date">
      <label> Date : </label>
      <input class="date-style" v-model="enteredDate" type="date" />
      <label> Time : </label>
      <input class="date-style" v-model="enteredTime" type="time" />
    </div>
    <div class="inputHolder">
      <label> Which doctor do you want take your examiniation from ?</label>
      <select @change="(e) => (enteredDoctor = e.target.value)">
        <option :value="doctor" v-for="doctor in doctors" :key="doctor">
          {{ doctor }}
        </option>
      </select>
    </div>
    <button>Take Appointment</button>
  </form>
</template>
<script>
export default {
  data() {
    return {
      doctors: [
        "DOCTORS",
        "Alexander Max - Heart Surgeon",
        "Maximillian Ray - Brain Surgeon",
        "Tyler Klay - General Surgeon",
        "Serena Williams - Neurologist",
        "Novak Djokovic - Psychiatric",
      ],
      hospitals: [
        "HOSPITALS",
        "Liv Hospital - Kizilay",
        "Medical Park - Batikent",
        "Yildirim Hospital - Yenimahalle",
        "Ibn-i Sina Hospital - Ulus",
        "Ankara Central Hospital - Asti",
        "Medical Park - Cayyolu",
        "Ankara Magnet Hospital - Cankaya",
        "MiddleEast Hospital - Yenimahalle",
      ],
      enteredID: "",
      enteredName: "",
      enteredSurName: "",
      enteredHospital: "",
      enteredDate: "",
      enteredTime: "",
      enteredDoctor: "",
    };
  },
  name: "NewPatient",
  emits: ["add-new"],
  methods: {
    submitAppointment() {
      this.$emit(
        "add-new",
        this.enteredID,
        this.enteredName,
        this.enteredSurName,
        this.enteredHospital,
        this.enteredDate,
        this.enteredTime,
        this.enteredDoctor
      );
      this.enteredID = "";
      this.enteredName = "";
      this.enteredSurName = "";
      this.enteredHospital = "";
      this.enteredDate = "";
      this.enteredTime = "";
      this.enteredDoctor = "";
    },
  },
};
</script>
<style scoped lang="scss">
form {
  width: 100%;
  display: flex;
}

* {
  color: #000000;
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
.date-style {
  height: 20px;
  width: 250px;
  font-size: 12px;
  display: flex;
  flex-direction: row;
}
input:focus {
  outline: none;
}
</style>
