<template>
  <div class="bg-gray-100 flex justify-center items-center h-screen">
    <!-- Left: Image -->
    <div class="w-1/2 h-screen hidden lg:block">
      <img src="@/assets/pc.jpg" alt="Registration Image" class="object-cover w-full h-full">
    </div>
    <!-- Right: Registration Form -->
    <div class="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
      <h1 class="text-2xl font-semibold mb-4">Register</h1>
      <form action="#" method="POST">
        <!-- Name Input -->
        <div class="mb-4">
          <label for="name" class="block text-gray-600">Name</label>
          <input type="text" id="name" name="name"
            class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            autocomplete="off">
        </div>
        <!-- Last Name Input -->
        <div class="mb-4">
          <label for="lastname" class="block text-gray-600">Last Name</label>
          <input type="text" id="lastname" name="lastname"
            class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            autocomplete="off">
        </div>
        <!-- Email Input -->
        <div class="mb-4">
          <label for="email" class="block text-gray-600">Email</label>
          <input type="email" id="email" name="email"
            class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            autocomplete="off">
        </div>
        <!-- Password Input -->
        <div class="mb-4">
          <label for="password" class="block text-gray-600">Password</label>
          <input type="password" id="password" name="password"
            class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            autocomplete="off">
        </div>
        <!-- Confirm Password Input -->
        <div class="mb-4">
          <label for="confirm-password" class="block text-gray-600">Confirm Password</label>
          <input type="password" id="confirm-password" name="confirm-password"
            class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            autocomplete="off">
        </div>
        <!-- Terms Checkbox -->
        <div class="mb-4 flex items-center">
          <input type="checkbox" id="terms" name="terms" class="text-blue-500">
          <label for="terms" class="text-gray-600 ml-2">I agree to the Terms and Conditions</label>
        </div>
        <!-- Register Button -->
        <button type="submit"
          class="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full">Register</button>
      </form>
      <!-- Login Link -->
      <div class="mt-6 text-blue-500 text-center">
        <button class="hover:underline">
          <router-link to="/login">Already have an account? Login here</router-link>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
