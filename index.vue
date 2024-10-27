<template>
  <section class="h-screen relative w-full flex items-center bg-[#F3EEE8]">
    <div class="xl:w-1/2 xl:pl-[150px] w-full h-screen xl:h-[50vh] z-20">
      <div class="max-w-[420px] mx-[25%] mt-[45%] lg:text-left text-center">
        <p
          class="text-[14px] xl:text-[#A06056] text-white font-[700] mb-[50px] font-Varta"
        >
          HOME DESIGN
        </p>
        <h1
          class="text-[35px] lg:text-[50px] xl:text-[#A06056] mb-8 text-white font-[400] font-merriweather"
        >
          Elegance for Interiors & Exteriors
        </h1>
        <p
          class="text-[18px] lg:text-[22px] font-[400] xl:text-[#706458E5] text-white mb-8 font-Varta"
        >
          We provide everyone with modern, trendy, quality furniture
        </p>
        <button
          @click="scroll"
          class="border-2 text-[20px] font-[700] text-white lg:text-[#A06056] lg:border-[#A06056] border-white rounded-[50%] mt-5 h-[50px] w-[50px]"
        >
          >
        </button>
      </div>
    </div>
    <div
      class="absolute xl:relative xl:w-1/2 w-full h-screen overflow-hidden bg-red-500"
    >
      <nuxt-img class="w-full h-full object-cover" src="Picture.png"></nuxt-img>
    </div>
  </section>

  <section
    class="w-full md:pl-20 lg:pl-[60px] xl:pl-[150px] py-[65px] bg-[#F3EEE8]"
  >
    <h1
      class="text-[35px] lg:text-[55px] text-[#706458] mb-[48px] font-merriweather"
    >
      Find your room
    </h1>
    <div class="lg:flex w-auto">
      <p
        class="text[18px] w-[165px] lg:m-0 mb-10 font-[400] text-[#706458E5] font-Varta"
      >
        Dining room, bedroom, bathroom or office. Find what you need
      </p>
      <swiper
        :breakpoints="swiperOptions.breakpoints"
        @swiper="onSwiperInit"
        @slideChange="onSlideChange"
        v-bind="swiperOptions"
        class="lg:w-[950px] m-0"
      >
        <swiper-slide> <card /> </swiper-slide>
        <swiper-slide> <card /> </swiper-slide>
        <swiper-slide> <card /> </swiper-slide>
        <swiper-slide> <card /> </swiper-slide>
      </swiper>
    </div>
    <div class="flex">
      <p class="text-[#706458E5] text-[18px] font-[400]">
        {{ currentPage + 1 }} / {{ totalSlides }}
      </p>
      <button
        class="ml-[210px] text-[#A06056] text-[20px] font-[700] font-Karla"
        @click="goNext"
      >
        Next >
      </button>
    </div>
  </section>

  <section
    class="w-full md:px-20 xl:px-[150px] lg:px-[60px] pt-[65px] pb-[50px] bg-[#F3EEE8] lg:flex"
  >
    <div class="lg:w-1/2 w-auto lg:pr-[150px]">
      <h1
        class="text-[35px] max-w-[458px] lg:text-[55px] text-[#706458] font-[400] font-merriweather"
      >
        We stay by your side to design your projects
      </h1>
      <p class="text-[#A06056] text-[17px] mt-[30px] font-[700] font-Karla">
        Find out more >
      </p>
    </div>
    <div class="md:grid md:grid-cols-2 md:grid-rows-2">
      <div class="lg:m-auto p-2 h-[229px] lg:p-[15px] max-w-[290px]">
        <h3 class="text-[25px] font-[600] mb-[12px] text-[#A06056] font-Varta">
          Our Advices
        </h3>
        <p class="text-[18px] font-[400] font-Varta">
          What if you took advantage of this rather special period to rethink
          your interior? You spend more time at home so you might as well feel
          good there.
        </p>
      </div>
      <div class="lg:m-auto p-2 h-[229px] lg:p-[15px] max-w-[290px]">
        <h3 class="text-[25px] font-[600] mb-[12px] text-[#A06056] font-Varta">
          Click and Collect
        </h3>
        <p class="text-[18px] font-[400] font-Varta">
          Adapted and contactless. Free from € 200 of purchases in stores
          offering the service.
        </p>
      </div>
      <div class="lg:m-auto p-2 h-auto lg:p-[15px] max-w-[290px]">
        <h3 class="text-[25px] font-[600] mb-[12px] font-Varta text-[#A06056]">
          Conception Service
        </h3>
        <p class="text-[18px] font-[400] font-Varta">
          Personalized service with an expert advisor for your interior and
          exterior decoration or layout projects.
        </p>
      </div>
      <div class="lg:m-auto p-2 h-auto lg:p-[15px] max-w-[290px]">
        <h3 class="text-[25px] mb-[12px] font-[600] text-[#A06056] font-Varta">
          Installation Service
        </h3>
        <p class="text-[18px] font-[400] font-Varta">
          Our furniture packaged in flat packs are designed for easy assembly.
          But you can call on our partner.
        </p>
      </div>
    </div>
  </section>

  <section class="w-full px-20 lg:pl-[60px] xl:pl-[150px] py-[70px]">
    <div class="lg:flex mb-[64px] justify-between h-[130px] pr-[150px]">
      <div>
        <h2
          class="text-[35px] font-[400] text-[#121212] mb-[15px] font-merriweather"
        >
          Be aware of the latest trends
        </h2>
        <p class="text-[18px] font-[400] text-[#706458E5] mb-[10px] font-Varta">
          Stay informed of new trends, but also of our various offers.
        </p>
        <p class="text-[17px] font-[700] text-[#A06056] font-Karla">
          Learn more >
        </p>
      </div>
      <div
        class="flex items-center border h-[50px] border-gray-300 rounded-lg overflow-hidden mt-[40px]"
      >
        <input
          type="email"
          placeholder="email@adress.com"
          class="px-4 py-2 w-[300px] outline-none"
        />
        <button
          class="bg-[#534B42] text-[17px] font-[700] h-[50px] w-[140px] text-white px-4 py-2"
        >
          Subscribe
        </button>
      </div>
    </div>

    <h1 class="text-[45px] font-[300] mt-10 md:hidden font-merriweather">
      Inspirations
    </h1>

    <p class="md:w-[350px] mt-10 text-center md:hidden font-Varta">
      Our experts are keen to stay on top of trends in order to offer you new
      inspirations for your interior and exterior every day. Remember that to
      inspire you we have to inspire ourselves and we want to share that with
      you.
    </p>

    <div class="grid w-full grid-cols-2 gap-9 mt-10 lg:hidden">
      <photos />
      <photos />
      <photos />
      <photos />
      <photos />
    </div>
    <div class="w-full my-5 lg:block hidden">
      <swiper @swiper="onSwiperInit1" class="w-full" v-bind="swiperOptions1">
        <swiper-slide> <photos /> </swiper-slide>
        <swiper-slide> <photos /> </swiper-slide>
        <swiper-slide> <photos /> </swiper-slide>
        <swiper-slide> <photos /> </swiper-slide>
        <swiper-slide> <photos /> </swiper-slide>
      </swiper>
    </div>
    <div
      class="lg:flex md:grid md:grid-cols-2 md:grid-rows-2 lg:pr-[150px] mt-[40px] justify-between relative"
    >
      <h1
        class="md:block hidden text-[45px] w-[360px] text-[#534B42] font-[300] font-merriweather"
      >
        Inspirations
      </h1>

      <p
        class="md:block hidden w-[359px] text-center text-[18px] font-[400] text-[#706458] font-Varta lg:p-0 p-5"
      >
        Our experts are keen to stay on top of trends in order to offer you new
        inspirations for your interior and exterior every day. Remember that to
        inspire you we have to inspire ourselves and we want to share that with
        you.
      </p>

      <div class="w-[360px] relative">
        <div class="mb-5 md:flex absolute lg:right-10 hidden">
          <button
            @click="goprev1"
            class="w-[40px] h-[40px] border-2 mr-2 border-[#A06056] rounded-[50%] text-[20px] font-[700] text-[#A06056]"
          >
            <
          </button>
          <button
            @click="goNext1"
            class="w-[40px] h-[40px] border-2 border-[#A06056] rounded-[50%] text-[20px] font-[700] text-[#A06056]"
          >
            >
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
    class="w-full bg-[#F3EEE8] relative px-10 xl:px-[150px] lg:px-[60px] pt-[70px] pb-[64px]"
  >
    <div
      class="lg:flex md:grid-cols-3 md:grid justify-between gap-[48px]"
      id="footer"
    >
      <h2
        class="text-[34px] text-[#534B42] font-[700] xl:block md:absolute md:w-full md:pr-[75px] md:top-3 md:text-center xl:text-left text-center font-merriweather"
      >
        antic
      </h2>

      <div class="mb-10 mt-5 lg:text-left md:text-center lg:mt-0 font-Varta">
        <h3>Products</h3>
        <p>Furniture</p>
        <p>Decoration</p>
        <p>Storage</p>
        <p>Baby and child</p>
        <p>Connected home</p>
      </div>

      <div class="mb-10 font-Varta lg:text-left md:text-center">
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

      <div class="mb-10 font-Varta lg:text-left md:text-center">
        <h3>Services</h3>
        <p>Click and collect</p>
        <p>Conception</p>
        <p>Installation</p>
        <p>Advices</p>
        <p>Gift card</p>
      </div>

      <div class="mb-10 font-Varta lg:text-left md:text-center">
        <h3>About</h3>
        <p>Our story</p>
        <p>Our stores</p>
        <p>Our stores</p>
      </div>

      <div class="lg:w-[250px] w-auto font-Varta">
        <h3>We respect our planet</h3>
        <nuxt-img
          src="footer.png"
          class="mt-5 lg:w-[240px] w-[300px] h-[180px] mb-5"
        >
        </nuxt-img>
        <span class="text-[16px] text-[#706458] font-[400]"
          >We’re taking positive steps to reduce our impact on the planet. For
          us, that means retailing responsibly.</span
        >
        <h4 class="text-[17px] text-[#A06056] font-[700] mt-5 font-Karla">
          Learn more >
        </h4>
      </div>
    </div>
    <div
      class="flex text-[32px] justify-center gap-[24px] text-[#706458] mt-[48px]"
    >
      <font-awesome-icon :icon="['fab', 'facebook']" />
      <font-awesome-icon :icon="['fab', 'twitter']" />
      <font-awesome-icon :icon="['fab', 'linkedin']" />
      <font-awesome-icon :icon="['fab', 'instagram']" />
    </div>

    <div
      class="lg:flex justify-between mt-[20px] lg:text-left md:text-center text-[#706458B2] font-Varta"
    >
      <span> © 2021 Agence Dnd </span>
      <div class="lg:flex gap-7 grid grid-cols-2">
        <p>Privacy policy</p>
        <p>Term of service</p>
        <p>Language</p>
      </div>
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

const onSwiperInit = (swiperInstance) => {
  mySwiper.value = swiperInstance;
  totalSlides.value = swiperInstance.slides.length;
};
const onSwiperInit1 = (swiperInstance) => {
  mySwiper1.value = swiperInstance;
  totalSlides1.value = swiperInstance.slides.length;
};

const goNext = () => {
  if (mySwiper.value) {
    mySwiper.value.slideNext();
    console.log(currentPage.value);
    // Access slideNext() directly on the Swiper instance
  }
  const onSlideChange = (swiper) => {
    currentPage.value = swiper.activeIndex;
    console.log(currentPage.value);
  };
};
const goNext1 = () => {
  if (mySwiper1.value) {
    mySwiper1.value.slideNext();
    if (currentPage1.value == totalSlides1.value - 1) {
      currentPage1.value = 0;
      console.log("hgbhjbjbh");
      return;
    }
    currentPage1.value++;
    // Access slideNext() directly on the Swiper instance
  }
};
const goprev1 = () => {
  if (mySwiper1.value) {
    mySwiper1.value.slidePrev();
    if (currentPage1.value == 0) {
      currentPage1.value = totalSlides1.value - 1;
      console.log("hgbhjbjbh");
      return;
    }
    currentPage1.value--;
    // Access slideNext() directly on the Swiper instance
  }
};

const swiperOptions = {
  loop: true,
  pagination: {
    clickable: true
  },
  breakpoints: {
    // When the window width is >= 320px
    0: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    // When the window width is >= 640px
    840: {
      slidesPerView: 2,
      spaceBetween: 30
    }
    // When the window width is >= 1024px
  }
};
const swiperOptions1 = {
  spaceBetween: 0,
  slidesPerView: 2,
  loop: true,
  pagination: {
    clickable: true
  },
  breakpoints: {
    // When the window width is >= 320px
    0: {
      slidesPerView: 1,
      spaceBetween: 0
    },

    1000: {
      slidesPerView: 1.5,
      spaceBetween: 0
    },
    1080: {
      slidesPerView: 1.8,
      spaceBetween: 0
    },
    1260: {
      slidesPerView: 2,
      spaceBetween: 0
    },
    // When the window width is >= 640px
    1400: {
      slidesPerView: 2.5,
      spaceBetween: 0
    },
    1500: {
      slidesPerView: 2.6,
      spaceBetween: 0
    },

    1600: {
      slidesPerView: 2.8,
      spaceBetween: 0
    },

    1700: {
      slidesPerView: 3,
      spaceBetween: 0
    }
    // When the window width is >= 1024px
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
.swiper-wrapper {
  margin: 0px;
}
</style>
