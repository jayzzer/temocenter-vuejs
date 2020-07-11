<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <router-link to="/">
        <div class="text-h4">Gallery</div>
      </router-link>
      <v-spacer></v-spacer>
      <v-btn color="error" @click="logout">Выход</v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  methods: {
    logout() {
      localStorage.removeItem('isAuth');

      this.$router.push('/login');
    },
  },
};
</script>

<style>
  #app a {
    color: white;
    text-decoration: none;
  }
</style>
