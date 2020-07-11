<template>
  <v-app>
    <v-app-bar
      app
      absolute
      color="primary"
      dark
    >
      <router-link to="/">
        <div class="text-h4">Gallery</div>
      </router-link>
      <v-spacer></v-spacer>
      <v-btn v-if="isAuth" color="error" @click="logout">Выход</v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'App',
  computed: {
    ...mapState([
      'isAuth',
    ]),
  },
  methods: {
    ...mapActions({
      userLogout: 'logout',
    }),
    logout() {
      this.userLogout();

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
