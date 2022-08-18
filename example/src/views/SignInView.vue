<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";

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

  <RInput
    label="Email"
    type="email"
    v-model="form.email"
    @keyup.enter="signIn"
  />
  <RInput
    label="Password"
    type="password"
    v-model="form.password"
    @keyup.enter="signIn"
  />

  <div class="flex justify-between items-center">
    <RButton variant="primary" @click="signIn">Sign In</RButton>
  </div>
</template>
