<template>
  <form id="registration-form" @submit="checkForm">
    <div id="registration-input">
      <span class="form-label">firstName:</span>
      <input id="firstName" v-model="firstName" type="text" name="firstName">

      <span class="form-label">lastName:</span>
      <input id="lastName" v-model="lastName" type="text" name="lastName">

      <span class="form-label">email:</span>
      <input id="email" v-model="email" type="text" name="email">


      <span class="form-label">password:</span>
      <input id="password" v-model="password" type="password" name="password">


      <span class="form-label">confirm password:</span>
      <input id="confirmPassword" v-model="confirmPassword" type="password" name="confirmPassword">

    </div>

    <div id="registration-actions">
      <input type="submit" value="Create Account">
    </div>
    <div v-if="errors.length" id="form-errors">
      <p>Please correct the following error(s):</p>
      <ul>
        <li v-for="error in errors">{{ error }}</li>
      </ul>
    </div>
  </form>
</template>

<script>
export default {
  name: "Registration",
  data() {
    return {
      errors: [],
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      confirmPassword: null
    }
  },
  methods: {
    validateFirstName() {
      if (!this.firstName) {
        this.errors.push('firstname is required')
      } else if (this.firstName.trim().length < 1) {
        this.errors.push('firstname should not be blank')
      }
    },

    validateLastName() {
      if (!this.lastName) {
        this.errors.push('lastName is required')
      } else if (this.lastName.trim().length < 1) {
        this.errors.push('lastName should not be blank')
      }
    },
    validateEmail() {
      if (!this.email) {
        this.errors.push("email is required");
      } else if (this.email.length < 1) {
        this.errors.push('email should not be blank');
      } else {
        let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let valid = re.test(this.email);
        if (!valid){
          this.errors.push('email is not valid')
        }
      }
    },
    checkForm(e) {
      e.preventDefault();

      this.errors = [];

      this.validateFirstName();
      this.validateLastName();
      this.validateEmail();
    }
  }
}
</script>

<style scoped>

#registration-form {
  margin-top: 50px;
  margin-left: 100px;
}

#registration-input {
  padding: 10px 10px 10px 10px;
  width: 500px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 10px;
  border-radius: 10px;
  background-color: lightblue;
  font-family: Arial, serif;
}

#registration-actions {
  margin-top: 10px;
}

#form-errors {
  margin-top: 10px;
  background-color: lightcoral;
  width: 500px;
  padding-left: 10px;
  padding-top: 1px;
  padding-bottom: 1px;
  border-radius: 10px;
}
</style>