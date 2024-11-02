<template>
    <div>
      <div
        class="w-full pt-[70px] h-20 absolute flex justify-between items-center z-50"
      >
        <div class="flex items-center lg:mt-2 md:pl-16 pl-8 xl:pl-[150px]">
          <span
            class="text-[34px] tracking-wider p-0 text-white lg:text-[#A06056] font-bold font-merriweather"
            >antic
          </span>
          <ul
            class="gap-[24px] ml-[32px] text-[18px] mt-1 font-[400] text-white xl:text-[#706458] lg:flex hidden font-Varta"
          >
            <li>Products</li>
            <li>Rooms</li>
            <li>Services</li>
            <li>Inspirations</li>
          </ul>
        </div>
  
        <button
          @click="togglesidebar"
          :class="[
            'lg:hidden  absolute text-[30px] font-[700] text-white     rounded-[50%]  h-[50px] w-[50px] right-10 transition-all duration-500 ease-in-out ',
            isopen ? 'hidden' : 'block'
          ]"
        >
          <i class="fas fa-bars icon"></i>
        </button>
  
        <button
          class="mr-10 p-[2px] lg:block hidden rounded-[50%] border-white border-2 h-[50px] w-[50px] text-white text-[26px]"
        >
          <i class="fa-solid fa-comments"></i>
        </button>
      </div>
      <div
        :class="[
          ' md:w-[40%] h-full w-[70%]  fixed top-0 b right-0 z-50 bg-[#A06056] opacity-80  overflow-hidden justify-between px-10 pt-10 transition-all duration-500 ease-in-out',
          isopen ? 'right-0' : 'md:right-[-40%] right-[-70%] '
        ]"
      >
        <button
          @click="togglesidebar"
          class="right-10 top-12 absolute text-[30px] font-[700] text-white rounded-[50%] h-[50px] w-[50px]"
        >
          <i class="fas fa-bars icon"></i>
        </button>
        <ul class="relative right-0 ml-5 mt-[100px] text-[25px] text-white">
          <li class="mb-10">Products</li>
          <li class="mb-10">Rooms</li>
          <li class="mb-10">Services</li>
          <li class="mb-10">Inspirations</li>
        </ul>
      </div>
      <slot />
    </div>
  </template>
  <script setup>
  import "@fortawesome/fontawesome-free/css/all.css";
  
  let isopen = ref(false);
  const togglesidebar = () => {
    isopen.value = !isopen.value;
  };
  </script>