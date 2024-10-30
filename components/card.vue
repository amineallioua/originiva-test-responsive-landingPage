<template>
    <div
      class="w-[300px] sm:w-[460px] h-[232px] sm:h-[350px] mr-[30px] relative flex"
    >
      <h1
        class="absolute text-[#A06056] text-[35px] text-center w-[290px] h-[60px] font-[400] md:text-[55px] left-[5px] top-[86px] sm:top-[145px] sm:left-[85px] font-merriweather"
      >
        {{ name }}
      </h1>
      <div class="w-1/2 overflow-hidden h-full">
        <nuxt-img class="w-[100%] object-cover h-[100%]" :src="image"> </nuxt-img>
      </div>
      <div class="text-[#706458E5] w-1/2 font-[400] text-[18px] pl-10 Varta">
        new arrivals
      </div>
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