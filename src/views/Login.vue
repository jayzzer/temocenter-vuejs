<template>
  <v-container fluid class="h-100">
    <div class="d-flex align-center justify-center h-100">
      <v-card max-width="400" class="flex-grow-1">
        <v-card-title>Вход</v-card-title>
        <v-card-text>
          <v-form
            ref="login"
            v-model="valid"
            @submit.prevent="submit"
          >
            <v-alert
              dense
              outlined
              type="error"
              v-if="!!authError"
            >
              {{authError}}
            </v-alert>

            <v-text-field
              id="login-field"
              v-model="loginData.username"
              label="Логин"
              :rules="loginRules"
              dense
            ></v-text-field>

            <v-text-field
              id="password-field"
              v-model="loginData.password"
              label="Пароль"
              type="password"
              :rules="passRules"
            ></v-text-field>

            <v-btn
              id="submit-btn"
              class="mt-3"
              type="submit"
              color="primary"
              block
            >
              Войти
            </v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'Login',
  data: () => ({
    valid: true,
    loginData: {
      username: '',
      password: '',
    },
    authError: '',
    loginRules: [
      (v) => !!v || 'Введите логин',
    ],
    passRules: [
      (v) => !!v || 'Введите пароль',
    ],
  }),
  methods: {
    submit() {
      if (!this.$refs.login.validate()) {
        return;
      }

      const { username, password } = this.loginData;
      if (username !== 'demo' || password !== 'demo') {
        this.authError = 'Неверный логин или пароль';
        return;
      }

      this.authError = '';

      localStorage.setItem('isAuth', 'true');
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
  .h-100 {
    height: 100%;
  }
</style>
