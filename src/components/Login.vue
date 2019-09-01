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
        v-bind:type="'password'"
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
    {{ loginError }}
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
      showAlert: false
    }
  },
  methods: {
    login: function () {
      const vm = this
      const payload = {
        email: this.email,
        password: this.password
      }

      this.$store.dispatch('logInUser', payload).then(() => {
        if (vm.isLoggedIn) {
          this.$router.push({path: '/'})
        } else {
          vm.showAlert = true
        }
      })
    },
    cancel: function () {
      console.log('Cancel login')
    }
  },
  computed: {
    isLoggedIn: function () {
      return this.$store.getters.isLoggedIn
    },
    loginError: function () {
      return this.$store.getters.loginError
    }
  }
}
</script>

<style>

</style>
