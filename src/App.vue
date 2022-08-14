<template>
  <v-app>
    <!-- navbar -->
    <v-app-bar
      app
      color="primary"
      elevate-on-scroll
      
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Title</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn
        v-for="link in links"
        :key="`${link.label}-header-link`"
        text
        rounded
        color="white"
        :to="link.url"
      >
        {{ link.label }}
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn icon @click="toggleThemeMode">
        <v-icon>mdi-brightness-6</v-icon>
      </v-btn>
    </v-app-bar>
  

    <!-- login form -->
    <v-main>
      <router-view />
    </v-main>

    <!-- footer -->
    <v-spacer></v-spacer>
    <v-footer color="primary lighten-1">
      <v-row justify="center" no-gutters>
        <v-btn
          :to="link.url"
          v-for="link in links"
          :key="`${link.label}-footer-link`"
          color="white"
          text
          rounded
          class="my-2"
        >
          {{ link.label }}
        </v-btn>
        <v-col class="primary lighten-2 py-4 text-center white--text" cols="12">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    showPassword: false,
    links: [
      {
        label: "Login",
        url: "/login",
      },
      {
        label: "About",
        url: "/about",
      },
      {
        label: "dashboard",
        url: "/Dashboard",
      },
      {
        label: "Sign Up",
        url: "/signup",
      },
    ],
  }),
  methods: {
    toggleThemeMode(){
      console.log('test')
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    }
  }
};
</script>
