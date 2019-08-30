<template>
<v-container>
  <v-layout row wrap>
    <v-flex xs12>
      <h2>Login to Venom</h2>
    </v-flex>
    <v-spacer></v-spacer>
    <v-flex xs12 sm6 offset-sm3>
      <v-text-field
        label="E-mail"
        v-model="email"
        v-bind:rules="emailRules"
        required>
      </v-text-field>
    </v-flex>
    <v-flex xs12 sm6 offset-sm3>
      <v-text-field
        label="Password"
        v-model="password"
        v-bind:rules="passwordRules"
        v-bind:type="password"
        required>
      </v-text-field>
    </v-flex>
    <v-flex xs12 sm6 offset-sm3>
      <v-btn v-on:click="cancel">Cancel</v-btn>
      <v-btn color="primary" v-on:click="login">Login</v-btn>
    </v-flex>
  </v-layout>
  <v-snackbar
    :timeout="6000"
    :top="true"
    v-model="showAlert">
    {{ message }}
  </v-snackbar>
</v-container>
</template>

<script>
export default {
  data: function () {
    return {
      email: '',
      emailRules: [
        v => !!v || 'Email is required'
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Password is required'
      ],
      showAlert: false,
      message: ''
    }
  },
  methods: {
    login: function () {
      const vm = this
      if (vm.password === '111') {
        this.$router.push({path: '/'})
      } else {
        // incorrect password!
        vm.showAlert = true
        vm.message = 'Email or password is invalid'
      }
    },
    cancel: function () {
      console.log('Cancel login')
    }
  }
}
</script>

<style>

</style>
