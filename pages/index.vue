<template>
  <section class="h-screen relative w-full flex items-center bg-[#F3EEE8]">
    <div class="xl:w-1/2 xl:pl-[150px] w-full h-screen xl:h-[100vh] flex items-center z-20">
      <div
        class="md:w-[700px]  xl:w-[410px] mx-5 lg:mx-[15%] md:mx-14 mt-[250px] md:mt-[25%] lg:mt-[20%]  xl:m-0 xl:text-left text-center"
      >
        <p
          class="text-[14px] tracking-[1px] xl:text-[#A06056] text-white font-[700] mb-[50px] font-varta"
        >
          HOME DESIGN 
        </p>
        <h1
          class="xl:text-[50px] inline-block leading-[60px]  tracking-wide text-[35px] md:text-[50px]  xl:text-[#A06056] mb-8 text-white font-[400] font-merriweather"
        >
          Elegance for Interiors & Exteriors
        </h1>
        <p
          class="text-[18px] leading-none xl:text-[22px] font-[400] xl:text-[#706458E5] text-white mb-8 font-varta"
        >
          We provide everyone with modern, trendy, quality furniture
        </p>
        <button
          @click="scroll"
          class="border-2 text-[20px] font-[700] text-white xl:text-[#A06056] xl:border-[#A06056] border-white rounded-[50%]  h-[50px] w-[50px]"
        >
          <i class="fa-solid fa-chevron-down"></i>
        </button>
      </div>
    </div>
    <div
      class="absolute xl:relative xl:w-1/2 w-full h-screen overflow-hidden"
    >
      <div class="xl:hidden absolute inset-0 bg-black opacity-50"></div>
      <nuxt-img
        class="w-full h-full object-cover"
        src="background.jpeg"
        :placeholder="500"
      ></nuxt-img>
    </div>
  </section>

  <section
    class="w-full md:pl-14 lg:pl-[60px] px-8 overflow-hidden xl:pl-[150px] py-[48px] lg:py-[70px] md:py-[30px] bg-[#F3EEE8]"
  >
    <h1
      class="text-[35px] lg:text-[55px] text-[#706458] mb-[20px] lg:mb-[48px] font-merriweather"
    >
      Find your room
    </h1>
    <div class="lg:flex w-auto">
      <p
        class="text[18px] md:w-[365px] lg:mr-20 lg:m-0 mb-8 lg:mb-10 font-[400] text-[#706458E5] font-varta"
      >
        Dining room, bedroom, bathroom or office. Find what you need
      </p>
 
    </div>
    <div class="flex mt-[28px] md:mt-[48px]">
      <button
        class="md:ml-[280px] md:hidden flex items-center mr-[200px] text-[#A06056] text-[20px] font-[700] font-karla"
        @click="goNext"
      >
        Next <span class="text-[12px] ml-2" >  <i class="fa-solid fa-chevron-right"></i></span>
      </button>
      <p class="text-[#706458] font-varta text-[18px] opacity-50 font-[400]">
        0{{ currentPage + 1  }} / 0{{ totalSlides }}
      </p>
      <button
        class="md:ml-[280px] hidden  md:flex items-center ml-[200px] text-[#A06056] text-[20px] font-[700] font-karla"
        @click="goNext"
      >
        Next <span class="text-[12px] ml-2  items-center " >  <i class="fa-solid fa-chevron-right"></i></span>
      </button>
    </div>
  </section>

  <section
    class="w-full md:pl-14 px-8 xl:pl-[150px] gap-[48px] items-start overflow-hidden lg:pl-[60px] pt-[48px] md:pt-[65px] pb-[50px] bg-[#F3EEE8] lg:flex"
  >
    <div class="lg:w-1/2 w-auto ">
      <h1
        class="text-[35px] max-w-[458px] inline-block leading-none m-0 p-0  lg:text-[55px] text-[#706458] font-[400] font-merriweather"
      >
        We stay by your side to design your projects
      </h1>
      <p
        class="text-[#A06056]  text-[17px] mt-[30px] mb-5 lg:mb-0 font-[700] font-karla"
      >
        Find out more  <span class="text-[12px]  " >  <i class="fa-solid fa-chevron-right"></i></span>
      </p>
    </div>
    <div class="md:grid md:grid-cols-2 md:gap-7 md:h-auto md:mt-0 mt-[41px]">
  <div class="lg:m-auto md:mb-0 mb-[40px] md:h-auto h-auto md:p-[1px] lg:p-[1px] max-w-[290px] align-top">
    <h3 class="text-[25px] font-[600] mb-[12px] text-[#A06056] font-varta leading-tight">
      Our Advices
    </h3>
    <p class="text-[18px] font-[400] text-[#706458E5] font-varta leading-snug">
      What if you took advantage of this rather special period to rethink your interior? You spend more time at home so you might as well feel good there.
    </p>
  </div>
  <div class="lg:m-auto md:mb-0 mb-[40px]  h-[170px] md:p-[1px] lg:p-[1px] max-w-[290px] align-top">
    <h3 class="text-[25px] font-[600] mb-[12px] text-[#A06056] font-varta leading-tight">
      Click and Collect
    </h3>
    <p class="text-[18px] font-[400] text-[#706458E5] font-varta leading-snug">
      Adapted and contactless. Free from € 200 of purchases in stores offering the service.
    </p>
  </div>
  <div class="lg:m-auto md:mb-0 mb-[40px] md:p-[1px] h-auto lg:p-[1px] max-w-[290px] align-top">
    <h3 class="text-[25px] font-[600] mb-[12px] text-[#A06056] font-varta leading-tight">
      Conception Service
    </h3>
    <p class="text-[18px] font-[400] text-[#706458E5] font-varta leading-snug">
      Personalized service with an expert advisor for your interior and exterior decoration or layout projects.
    </p>
  </div>
  <div class="lg:m-auto md:mb-0 md:p-[1px] h-auto lg:p-[1px] max-w-[290px] align-top">
    <h3 class="text-[25px] mb-[12px] font-[600] text-[#A06056] font-varta leading-tight">
      Installation Service
    </h3>
    <p class="text-[18px] font-[400] text-[#706458E5] font-varta leading-snug">
      Our furniture packaged in flat packs are designed for easy assembly. But you can call on our partner.
    </p>
  </div>
</div>

  </section>

  <section
    class="w-full  overflow-hidden lg:pl-[60px] xl:pl-[150px] py-[48px] md:py-[70px]"
  >
    <div class="xl:flex mb-[64px] px-8 md:px-14 lg:pl-0 justify-between lg:h-[130px] lg:pr-[150px]">
      <div class="w-auto h-auto">
        <h2
          class="text-[35px] font-[400] text-[#121212] mb-[15px] font-merriweather"
        >
          Be aware of the latest trends
        </h2>
        <p class="text-[18px] font-[400] text-[#706458E5] mb-[16px] font-varta">
          Stay informed of new trends, but also of our various offers.
        </p>
        <p class="text-[17px] font-[700] text-[#A06056] font-karla">
          Learn more <span class="text-[12px]" >  <i class="fa-solid fa-chevron-right"></i></span>
        </p>
      </div>
      <div
        class="xl:flex flex-row lg:h-[50px] border-gray-300 lg:mb-0 md:mb-10 rounded-lg mt-10"
      >
        <input
          type="email"
          placeholder="email@adress.com"
          class="px-4 py-2 w-full xl:w-[300px] h-[50px] text-[#706458E5] text-[18px] font-[400] bg-[#F3EEE84D]"
        />
        <button
          class="bg-[#534B42] xl:mt-0 mt-4 xl:ml-[16px] text-[17px] font-[700] h-[50px] w-[290px] md:w-full xl:w-[143px] font-karla tracking-wider  text-white px-4 py-2"
        >
          Subscribe
        </button>
      </div>
    </div>

    <h1
      class="text-[35px] px-8 md:px-14 font-[400] text-[#534B42] lg:hidden font-merriweather"
    >
      Inspirations
    </h1>

    <p
      class="md:w-[350px] px-8 md:pl-14 mt-5 text-[18px] font-[400] text-[#706458E5] lg:hidden font-varta"
    >
      Our experts are keen to stay on top of trends in order to offer you new
      inspirations for your interior and exterior every day. Remember that to
      inspire you we have to inspire ourselves and we want to share that with
      you.
    </p>

    <div class="grid grid-cols-2  px-[12px] md:px-[36px] w-fit mt-10 lg:hidden justify-center">
      <photos
        v-for="object in objects"
        :key="object.id"
        :name="object.name"
        :image="object.image"
      />
    </div>
    <div
      class="w-full xl:mt-5 lg:mt-[180px] my-5 lg:block hidden overflow-hidden"
    >
      <swiper @swiper="onSwiperInit1" @slideChange="onSlideChange1" class="w-full" v-bind="swiperOptions1">
        <swiper-slide v-for="object in objects" :key="object.id">
          <photos :name="object.name" :image="object.image" />
        </swiper-slide>
      </swiper>
    </div>
    <div class="lg:flex xl:pr-[150px] mt-[40px] justify-between relative">
      <h1
        class="lg:block tracking-wider   hidden text-[45px] w-[360px] text-[#534B42] font-[300] font-merriweather"
      >
        Inspirations
      </h1>

      <p
        class="lg:block hidden w-[359px] mt-5 text-[18px] font-[400] text-[#706458] font-varta lg:p-0 p-5"
      >
        Our experts are keen to stay on top of trends in order to offer you new
        inspirations for your interior and exterior every day. Remember that to
        inspire you we have to inspire ourselves and we want to share that with
        you.
      </p>

      <div class="w-[360px] mt-5 relative">
        <div class="mb-5 lg:flex absolute w-full lg:left-16  hidden">
          <button
            @click="goprev1"
            class="w-[40px] h-[40px] border-2 mr-2 border-[#A06056] rounded-[50%] text-[20px] font-[700] text-[#A06056]"
          >
            <i class="fa-solid fa-chevron-left"></i>
          </button>
          <button
            @click="goNext1"
            class="w-[40px] h-[40px] border-2 border-[#A06056] rounded-[50%] text-[20px] font-[700] text-[#A06056]"
          >
            <i class="fa-solid fa-chevron-right"></i>
          </button>
        </div>
        <p
          class="md:block w-full absolute lg:left-16  top-16 hidden text-[#706458] opacity-50 text-[18px] font-[400]"
        >
          0{{ currentPage1 + 1 }} / 0{{ totalSlides1 }}
        </p>
      </div>
    </div>
  </section>

  <section
    class="w-full bg-[#F3EEE8] overflow-hidden relative px-8  md:pl-[56px] xl:px-[150px] lg:px-[60px] pt-[48px] md:pt-[70px] pb-[64px]"
  >
    <div
      class="lg:flex md:grid-cols-4 md:grid justify-between gap-[48px]"
      id="footer"
    >
      <h2
        class="text-[34px] tracking-[1px] text-[#534B42] font-[700] xl:relative xl:w-auto xl:top-0 md:absolute md:w-full md:pr-[75px] md:top-3 md:text-center xl:text-left text-center font-merriweather"
      >
        antic
      </h2>

      <div class="mb-10 mt-5 lg:h-[187px] md:mt-0 font-varta">
        <h3>Products</h3>
        <p>Furniture</p>
        <p>Decoration</p>
        <p>Storage</p>
        <p>Baby and child</p>
        <p>Connected home</p>
      </div>

      <div class="mb-10 lg:h-[187px] font-varta">
        <h3>Rooms</h3>
        <p>Living room</p>
        <p>Dining room</p>
        <p>Cooked</p>
        <p>Bedroom</p>
        <p>Bathroom</p>
        <p>Office</p>
        <p>Laundry</p>
        <p>Garage</p>
      </div>

      <div class="mb-10 font-varta">
        <h3>Services</h3>
        <p>Click and collect</p>
        <p>Conception</p>
        <p>Installation</p>
        <p>Advices</p>
        <p>Gift card</p>
      </div>

      <div class="mb-10 font-varta">
        <h3>About</h3>
        <p>Our story</p>
        <p>Our stores</p>
        <p>Our stores</p>
      </div>

      <div class="lg:w-[250px] md:col-span-4 w-auto font-varta">
        <h3>We respect our planet</h3>
        <nuxt-img
          src="footer.png"
          class="mt-5 lg:w-[240px] w-[300px] h-[180px] md:w-[500px] md:h-auto lg:h-[180px] mb-5"
        >
        </nuxt-img>
        <span class="text-[16px] md:text-center text-[#706458] font-[400]"
          >We’re taking positive steps to reduce our impact on the planet. For
          us, that means retailing responsibly.</span
        >
        <h4 class="text-[17px] text-[#A06056] font-[700] mt-5 font-karla">
          Learn more  <span class="text-[12px]" >  <i class="fa-solid fa-chevron-right"></i></span>
        </h4>
      </div>
    </div>
    <div
      class="flex text-[32px] justify-center gap-[24px] text-[#706458] mt-10 md:mt-[48px]"
    >
    <i class="fa-brands fa-square-facebook"></i>
    <i class="fa-brands fa-square-twitter"></i>
    <i class="fa-brands fa-linkedin"></i>
    <i class="fa-brands fa-square-instagram"></i>
    </div>

    <div
      class="lg:flex justify-between mt-10 md:mt-[20px] text-[#706458B2] font-varta"
    >
      <span class="lg:block hidden"> © 2021 Agence Dnd </span>
      <div class="md:flex lg:justify-normal md:justify-between gap-3 grid grid-cols-2">
        <p>Privacy policy</p>
        <p>Term of service</p>
        <p>Language</p>
      </div>
      <span class="lg:hidden mt-8 block"> © 2021 Agence Dnd </span>
    </div>
  </section>
</template>
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import { ref } from "vue";

const mySwiper = ref(null);
const currentPage = ref(0); // Track current slide index
const totalSlides = ref(0); // Total number of slides

const mySwiper1 = ref(null);
const currentPage1 = ref(0); // Track current slide index
const totalSlides1 = ref(0); // Total number of slides
const scroll = () => {
  window.scrollBy({
    top: window.innerHeight,
    behavior: "smooth"
  });
};

const rooms = [
  {
    id: 1,
    name: "Bedroom",
    image: "Background.png"
  },
  {
    id: 2,
    name: "Living room",
    image: "livingroom.jpg"
  },
  {
    id: 3,
    name: "Bedroom 1",
    image: "Background.png"
  },
  {
    id: 4,
    name: "Bedroom 2",
    image: "Background.png"
  },
  {
    id: 5,
    name: "Bedroom 3",
    image: "Background.png"
  },
  {
    id: 6,
    name: "Bedroom 4",
    image: "Background.png"
  },
];

const objects = [
  {
    id: 1,
    name: "Chair",
    image: "chair.jpeg" // Replace with actual image URL
  },
  {
    id: 2,
    name: "Cooked ",
    image: "kitchen.jpeg" // Replace with actual image URL
  },
  {
    id: 3,
    name: "Living Room",
    image: "couch.jpeg" // Replace with actual image URL
  },
  {
    id: 3,
    name: "Table",
    image: "salon.jpeg" // Replace with actual image URL
  }
];

const onSwiperInit = (swiperInstance) => {
  mySwiper.value = swiperInstance;
  totalSlides.value = swiperInstance.slides.length;
};
const onSwiperInit1 = (swiperInstance) => {
  mySwiper1.value = swiperInstance;
  totalSlides1.value = swiperInstance.slides.length;
};
const onSlideChange = () => {
  if (mySwiper.value) {
    currentPage.value = mySwiper.value.realIndex;
    console.log('Current page:', mySwiper.value.realIndex + 1);
  }
};
const onSlideChange1 = () => {
  if (mySwiper1.value) {
    currentPage1.value = mySwiper1.value.realIndex;
    console.log('Current page:', mySwiper1.value.realIndex + 1);
  }
};

  const  goNext =()=>{
    if (mySwiper.value) {
      mySwiper.value.slideNext();}
  }

const goNext1 = () => {
  if (mySwiper1.value) {
    mySwiper1.value.slideNext();
  }
};
const goprev1 = () => {
  if (mySwiper1.value) {
    mySwiper1.value.slidePrev();
  }
};

const swiperOptions = {
  loop: true,  // Change this to false for testing
  slidesPerView: "auto",
  spaceBetween: 30,
  pagination: {
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    770: {
      slidesPerView: "auto",
      spaceBetween: 30,
    },
  },
};

const swiperOptions1 = {
  spaceBetween: 0,
  slidesPerView: "auto",
  loop: true,
  pagination: {
    clickable: true
  }
};
</script>
<style scoped>
#footer h3 {
  font-size: 25px;
  font-family: 'Varta', sans-serif;
  font-weight: 600;
  color: #534b42;
  margin-bottom: 10px;
}

/* Change color on small devices */
@media (max-width: 640px) { /* Adjust breakpoint as needed */
  #footer h3 {
    color: #121212;
  }
}
.swiper-slide {
  display: flex;
  width: 100%; /* Or the intended width */
  height: 100%; /* Or the intended height */
  overflow: hidden;
}


#footer p {
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 400;
  color: #706458;
  font-family: 'Varta', sans-serif;
}
.swiper-slide {
  width: fit-content;
  margin-right: 30px;
}
input::placeholder {
  color: #706458E5;
  font-size: 18px;
  font-weight:400;
  font-family: 'Varta', sans-serif;
  opacity:90%;
}
</style>
