<template >
          <v-card width="400px" class="mx-auto mt-4">
        <v-card-title>
          <h1 class="dispaly-1">Login</h1>
        </v-card-title>
        <v-spacer></v-spacer>
        <v-card-text>
          <v-form>
            <v-text-field prepend-icon="mdi-account" label="Username" />
            <v-text-field
              prepend-icon="mdi-lock"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showPassword = !showPassword"
              :type="showPassword ? 'text' : 'password'"
              label="Password"
            />
          </v-form>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="success" variant="outlined" rounded>Register</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="info" variant="outlined" rounded>Login</v-btn>
        </v-card-actions>
      </v-card>
</template>
<script>
export default {
    name: 'Login',
data() {
    return {
        showPassword: false
    }
}
}
</script>