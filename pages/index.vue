<template>
  <section class="h-screen relative w-full flex items-center bg-[#F3EEE8]">
    <div class="xl:w-1/2 xl:pl-[150px] w-full h-screen xl:h-[50vh] z-20">
      <div
        class="md:w-[700px] xl:w-[410px] mx-5 lg:mx-[15%] md:mx-14 mt-[60%] md:mt-[45%] xl:m-0 xl:text-left text-center"
      >
        <p
          class="text-[14px] md:text-[20px] xl:text-[#A06056] text-white font-[700] mb-[50px] font-varta"
        >
          HOME DESIGN
        </p>
        <h1
          class="xl:text-[50px] text-[35px] md:text-[50px] lg:text-[70px] xl:text-[#A06056] mb-8 text-white font-[400] font-merriweather"
        >
          Elegance for Interiors & Exteriors
        </h1>
        <p
          class="text-[18px] lg:text-[30px] xl:text-[22px] font-[400] xl:text-[#706458E5] text-white mb-8 font-varta"
        >
          We provide everyone with modern, trendy, quality furniture
        </p>
        <button
          @click="scroll"
          class="border-2 text-[20px] font-[700] text-white xl:text-[#A06056] xl:border-[#A06056] border-white rounded-[50%] mt-5 h-[50px] w-[50px]"
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
        aspect-ratio="16/9" 
        src="background.jpeg"
        :placeholder="500"
      ></nuxt-img>
    </div>
  </section>

  <section
    class="w-full md:pl-14 lg:pl-[60px] px-8 overflow-hidden xl:pl-[150px] py-[48px] md:py-[30px] bg-[#F3EEE8]"
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
      <swiper
        :breakpoints="swiperOptions.breakpoints"
        @swiper="onSwiperInit"
        @slideChange="onSlideChange"
        v-bind="swiperOptions"
        class="lg:w-auto"
      >
        <swiper-slide v-for="room in rooms" :key="room.id">
          <card :name="room.name" , :image="room.image" />
        </swiper-slide>
      </swiper>
    </div>
    <div class="flex mt-[28px] md:mt-[48px]">
      <button
        class="md:ml-[280px] md:hidden mr-[200px] text-[#A06056] text-[20px] font-[700] font-karla"
        @click="goNext"
      >
        Next <i class="fa-solid fa-chevron-right"></i>
      </button>
      <p class="text-[#706458E5] text-[18px] font-[400]">
        {{ currentPage + 1  }} / {{ totalSlides }}
      </p>
      <button
        class="md:ml-[280px] hidden md:block ml-[200px] text-[#A06056] text-[20px] font-[700] font-karla"
        @click="goNext"
      >
        Next <i class="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  </section>

  <section
    class="w-full md:px-14 px-8 xl:px-[150px] overflow-hidden lg:px-[60px] pt-[48px] md:pt-[65px] pb-[50px] bg-[#F3EEE8] lg:flex"
  >
    <div class="lg:w-1/2 w-auto lg:pr-[150px]">
      <h1
        class="text-[35px] max-w-[458px] lg:text-[55px] text-[#706458] font-[400] font-merriweather"
      >
        We stay by your side to design your projects
      </h1>
      <p
        class="text-[#A06056] text-[17px] mt-[30px] mb-5 lg:mb-0 font-[700] font-karla"
      >
        Find out more <i class="fa-solid fa-chevron-right"></i>
      </p>
    </div>
    <div class="md:grid md:grid-cols-2 md:mt-0 mt-[41px] md:grid-rows-auto">
      <div
        class="lg:m-auto md:mb-0 mb-[40px] md:p-2 md:h-[229px] lg:p-[15px] max-w-[290px]"
      >
        <h3 class="text-[25px] font-[600] mb-[12px] text-[#A06056] font-varta">
          Our Advices
        </h3>
        <p class="text-[18px] font-[400] font-varta">
          What if you took advantage of this rather special period to rethink
          your interior? You spend more time at home so you might as well feel
          good there.
        </p>
      </div>
      <div
        class="lg:m-auto md:mb-0 mb-[40px] md:p-2 md:h-[229px] lg:p-[15px] max-w-[290px]"
      >
        <h3 class="text-[25px] font-[600] mb-[12px] text-[#A06056] font-varta">
          Click and Collect
        </h3>
        <p class="text-[18px] font-[400] font-varta">
          Adapted and contactless. Free from € 200 of purchases in stores
          offering the service.
        </p>
      </div>
      <div
        class="lg:m-auto md:mb-0 mb-[40px] md:p-2 h-auto lg:p-[15px] max-w-[290px]"
      >
        <h3 class="text-[25px] font-[600] mb-[12px] font-varta text-[#A06056]">
          Conception Service
        </h3>
        <p class="text-[18px] font-[400] font-varta">
          Personalized service with an expert advisor for your interior and
          exterior decoration or layout projects.
        </p>
      </div>
      <div class="lg:m-auto md:mb-0 md:p-2 h-auto lg:p-[15px] max-w-[290px]">
        <h3 class="text-[25px] mb-[12px] font-[600] text-[#A06056] font-varta">
          Installation Service
        </h3>
        <p class="text-[18px] font-[400] font-varta">
          Our furniture packaged in flat packs are designed for easy assembly.
          But you can call on our partner.
        </p>
      </div>
    </div>
  </section>

  <section
    class="w-full px-8 md:px-14 overflow-hidden lg:pl-[60px] xl:pl-[150px] py-[48px] md:py-[70px]"
  >
    <div class="xl:flex mb-[64px] justify-between lg:h-[130px] lg:pr-[150px]">
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
          Learn more <i class="fa-solid fa-chevron-right"></i>
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
          class="bg-[#534B42] xl:mt-0 mt-4 xl:ml-[16px] text-[17px] font-[700] h-[50px] w-[290px] md:w-full xl:w-[143px] text-white px-4 py-2"
        >
          Subscribe
        </button>
      </div>
    </div>

    <h1
      class="text-[35px] font-[400] text-[#534B42] lg:hidden font-merriweather"
    >
      Inspirations
    </h1>

    <p
      class="md:w-[350px] mt-5 text-[18px] font-[400] text-[#706458E5] lg:hidden font-varta"
    >
      Our experts are keen to stay on top of trends in order to offer you new
      inspirations for your interior and exterior every day. Remember that to
      inspire you we have to inspire ourselves and we want to share that with
      you.
    </p>

    <div class="grid grid-cols-2 w-fit mt-10 lg:hidden justify-center">
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
        class="lg:block hidden text-[45px] w-[360px] text-[#534B42] font-[300] font-merriweather"
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
        <div class="mb-5 lg:flex absolute lg:right-16 hidden">
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
          class="md:block absolute lg:right-[90px] top-16 hidden text-[#706458E5] text-[18px] font-[400]"
        >
          {{ currentPage1 + 1 }} / {{ totalSlides1 }}
        </p>
      </div>
    </div>
  </section>

  <section
    class="w-full bg-[#F3EEE8] overflow-hidden relative px-8 md:px-10 xl:px-[150px] lg:px-[60px] pt-[48px] md:pt-[70px] pb-[64px]"
  >
    <div
      class="lg:flex md:grid-cols-4 md:grid justify-between gap-[48px]"
      id="footer"
    >
      <h2
        class="text-[34px] text-[#534B42] font-[700] xl:relative xl:w-auto xl:top-0 md:absolute md:w-full md:pr-[75px] md:top-3 md:text-center xl:text-left text-center font-merriweather"
      >
        antic
      </h2>

      <div class="mb-10 mt-5 lg:h-[187px] lg:mt-0 font-varta">
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
          Learn more >
        </h4>
      </div>
    </div>
    <div
      class="flex text-[32px] justify-center gap-[24px] text-[#706458] mt-10 md:mt-[48px]"
    >
      <font-awesome-icon :icon="['fab', 'facebook']" />
      <font-awesome-icon :icon="['fab', 'twitter']" />
      <font-awesome-icon :icon="['fab', 'linkedin']" />
      <font-awesome-icon :icon="['fab', 'instagram']" />
    </div>

    <div
      class="lg:flex justify-between mt-10 md:mt-[20px] text-[#706458B2] font-varta"
    >
      <span class="lg:block hidden"> © 2021 Agence Dnd </span>
      <div class="lg:flex gap-3 grid grid-cols-2">
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
    name: "bedroom",
    image: "Background.png"
  },
  {
    id: 2,
    name: "living room",
    image: "livingroom.jpg"
  },
  {
    id: 3,
    name: "bedroom 1",
    image: "Background.png"
  },
  {
    id: 4,
    name: "bedroom 2",
    image: "Background.png"
  },
  {
    id: 5,
    name: "bedroom 3",
    image: "Background.png"
  },
  {
    id: 6,
    name: "bedroom 4",
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
  font-size: 23px;
  font-weight: 600;
  color: #534b42;
  margin-bottom: 10px;
}
#footer p {
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 400;
  color: #706458;
}
.swiper-slide {
  width: fit-content;
  margin-right: 30px;
}
</style>
