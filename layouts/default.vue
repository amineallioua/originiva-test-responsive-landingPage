<template>
    <div>
        <div class=" w-full h-20  absolute flex  px-10  justify-between items-center z-50 " >
            
            <div class=" flex items-center pl-5 " >
            <span class=" text-[34px] p-0  text-white sm:text-[#A06056] font-bold font-merriweather " >antic </span>
            <ul class="  gap-8 ml-5  text-[18px] lg:flex hidden Varta " >
                <li>Products</li>
                <li>Rooms</li>
                <li>Services</li>
                <li>Inspirations</li>
            </ul>
            </div>  


            <button @click="togglesidebar" :class="[ 'lg:hidden border-2 absolute text-[20px] font-[700] text-white  border-white   rounded-[50%]  h-[50px] w-[50px] right-10'  ,isopen ? 'hidden' : 'block' ]" > - </button>

       
            <nuxt-img 
            class="mr-10 lg:block hidden "
      src="Contact.svg" 
      alt="My Image" 
      width="50" 
      height="50" 
      quality="85" 
      blur="10" 
    />
       
            
        </div>
        <div  :class="[
    ' md:w-[40%] h-full w-[70%]  fixed top-0 b right-0 z-50 bg-[#A06056] opacity-80 flex overflow-hidden justify-between px-10 pt-10 transition-all duration-500 ease-in-out',
    isopen ? 'right-0' : 'md:right-[-40%] right-[-70%] '
  ]" >
            <button @click="togglesidebar" class="  border-2 text-[20px] font-[700] text-white  border-white   rounded-[50%]  h-[50px] w-[50px] right-10 " > > </button>
            <ul class="  relative right-0 ml-5  text-[25px] text-white  " >
                <li  class=" mb-10  "  >Products</li>
                <li class=" mb-10  ">Rooms</li>
                <li class=" mb-10  ">Services</li>
                <li class=" mb-10  ">Inspirations</li>
            </ul>
                
               

        </div>
        <slot/>
    </div>
</template>
<script setup >
let isopen = ref(false)
const togglesidebar = ()=>{
    isopen.value=!isopen.value

}

</script>