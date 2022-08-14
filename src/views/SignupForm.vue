<template>
  <v-container>
    <v-row>
      <v-col offset="3" cols="6">
        <v-card elevation="1" class="mx-auto">
          <v-card-title> Sign Up Now </v-card-title>
          <v-card-text>
            <v-form>
              <v-text-field
                rounded
                solo
                outlined
                prepend-inner-icon="mdi-email"
                label="Email"
                v-model="email"
                :error-messages="emailErrors"
                @input="$v.email.$touch()"
                @blur="$v.email.$touch()"
              />
              <v-text-field
                rounded
                solo
                outlined
                prepend-inner-icon="mdi-lock"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPassword = !showPassword"
                :type="showPassword ? 'text' : 'password'"
                label="Password"
                v-model="password"
                :error-messages="passwordErrors"
                @input="$v.password.$touch()"
                @blur="$v.password.$touch()"
              />
              <v-text-field
                rounded
                solo
                outlined
                prepend-inner-icon="mdi-lock"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPassword = !showPassword"
                :type="showPassword ? 'text' : 'password'"
                label="Confirm Password"
                v-model="password_confirmation"
                :error-messages="passwordConfirmationErrors"
                @input="$v.password_confirmation.$touch()"
                @blur="$v.password_confirmation.$touch()"
              />
              <v-autocomplete
                prepend-inner-icon="mdi-lock"
                :items="browsers"
                rounded
                solo
                outlined
                v-model="selected_browser"
                :error-messages="selectedBrowserErrors"
                @input="$v.selected_browser.$touch()"
                @blur="$v.selected_browser.$touch()"
              ></v-autocomplete>
              <v-dialog
                ref="dialog"
                v-model="modal"
                :return-value.sync="date"
                persistent
                width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    rounded
                    solo
                    outlined
                    prepend-inner-icon="mdi-calendar"
                    label="Picker in dialog"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    v-model="date"
                    :error-messages="dateErrors"
                    @input="$v.date.$touch()"
                    @blur="$v.date.$touch()"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="date" scrollable>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="modal = false">
                    Cancel
                  </v-btn>
                  <v-btn text color="primary" @click="$refs.dialog.save(date)">
                    OK
                  </v-btn>
                </v-date-picker>
              </v-dialog>
              <v-file-input
                rounded
                solo
                outlined
                prepend-inner-icon="mdi-file"
                placeholder="Upload your documents"
                label="File input"
                multiple
                prepend-icon=""
                v-model="files"
                :error-messages="fileErrors"
                @input="$v.files.$touch()"
                @blur="$v.files.$touch()"
              >
                <template v-slot:selection="{ text }">
                  <v-chip small label color="primary">
                    {{ text }}
                  </v-chip>
                </template>
              </v-file-input>
              <v-btn rounded color="primary" type="submit"> Sign Up </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { validationMixin } from "vuelidate";
import {
  required,
  maxLength,
  email,
  sameAs,
  minLength,
  requiredIf,
} from "vuelidate/lib/validators";
export default {
  mixins: [validationMixin],
  validations: {
    email: { required, email },
    password: { required, minLength: minLength(8) },
    password_confirmation: { required, sameAsPassword: sameAs("password") },
    selected_browser: { required },
    date: { required },
    files: {
      required: requiredIf(function (nestedModel) {
        return this.files.length == 0; // New changes
      }),
    },
  },
  name: "SignUp",
  data() {
    return {
      email: "",
      password: "",
      password_confirmation: "",
      selected_browser: "",
      date: "",
      files: [],
      showPassword: false,
      browsers: ["Chrome", "Safari"],
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      modal: false,
    };
  },
  mounted() {},
  methods: {
    submitForm() {},
  },
  computed: {
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.minLength &&
        errors.push("Must be atleast 8 characters long");
      !this.$v.password.required && errors.push("Password is required");
      return errors;
    },
    passwordConfirmationErrors() {
      const errors = [];
      if (!this.$v.password_confirmation.$dirty) return errors;
      !this.$v.password_confirmation.required &&
        errors.push("Password is required");
      !this.$v.password_confirmation.sameAsPassword &&
        errors.push("Password must be same");
      return errors;
    },
    selectedBrowserErrors() {
      const errors = [];
      if (!this.$v.selected_browser.$dirty) return errors;
      !this.$v.selected_browser.required && errors.push("Browser is required");
      return errors;
    },
    dateErrors() {
      const errors = [];
      if (!this.$v.date.$dirty) return errors;
      !this.$v.date.required && errors.push("Date is required");
      return errors;
    },
    fileErrors() {
      const errors = [];
      if (!this.$v.files.$dirty) return errors;
      !this.$v.files.required && errors.push("File is required");
      return errors;
    },
  },
};
</script>

<style>
</style>