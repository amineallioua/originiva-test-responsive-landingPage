<template>
    <div
      class="lg:w-[458px] overfloww-hidden lg:h-[550px] md:w-[308px] md:h-[400px] w-[145px] lg:m-0 mb-10 ml-5 h-[175px]"
    >
      <nuxt-img :src="image" class="w-full object-cover h-full"></nuxt-img>
  
      <h1 class="mt-2 text-[15px] font-[400] text-[#121212]">{{ name }}</h1>
    </div>
  </template>
  <script setup>
  import { defineProps } from "vue";
  
  // Define props
  const props = defineProps({
    name: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    }
  });
  </script>
  