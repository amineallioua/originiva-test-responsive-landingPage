<template>
    <div
      class="lg:w-[458px] overfloww-hidden relative object-cover  lg:h-[550px] md:w-[308px] md:h-[400px] w-[145px] lg:m-0 mb-10 ml-5 h-[175px]"
    >
      <nuxt-img :src="image"       :placeholder="500"     class="lg:w-[150%] h-full w-full lg:absolute bottom-[-100px] object-cover lg:h-[150%]  "></nuxt-img>
  
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
  