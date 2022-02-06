<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";

import MInput from "../components/MInput.vue";
import MButton from "../components/MButton.vue";
import MLink from "../components/MLink.vue";

const router = useRouter();

const form = reactive({
  email: "sample@anhhao.me",
  password: "defaultpassword",
});

const signIn = () => {
  console.log(`You are signing in with account: ${JSON.stringify(form)}`);
  router.push("/dashboard");
};
</script>

<template>
  <h1 class="text-xl text-center font-medium tracking-wide">Sign In</h1>

  <MInput label="Email" type="email" v-model="form.email" />
  <MInput label="Password" type="password" v-model="form.password" />

  <div class="flex justify-between items-center">
    <MButton variant="primary" @click="signIn">Sign In</MButton>
    <MLink to="/">Forget your password?</MLink>
  </div>

  <div class="mt-4 text-gray-500">
    Don't have an account? <MLink to="/">Signup?</MLink>
  </div>
</template>
