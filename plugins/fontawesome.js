// ~/plugins/fontawesome.js
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'; // Import the arrow-down icon
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Add all icons to the library
library.add(faFacebook, faTwitter, faLinkedin, faInstagram, faArrowDown);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon);
});
