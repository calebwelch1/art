<script lang="ts">
import digitalArrOld from './old/digital.js'
import twentytwentythree from './new/2023.js'
import closetou from '../assets/portfolioOLD/DigitalPaintings/close-to-u.jpg'
// declare var require: any
// const digitalArrOld = require('./old/digital.js')

interface MyObject {
    src: any;
    alt: string;
  }

export default {
  data() {
    return { 
      showAbout:false,
      windowWidth: window.innerWidth,
      currentArr: [] as MyObject[],
      closetou,
      title: '2023',
     }
  },
  mounted() {
    // this.currentArr = digitalArrOld;
    this.currentArr = twentytwentythree;
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    })
  },
  beforeDestroy() { 
    window.removeEventListener('resize', this.onResize); 
  },
  methods: {  
    onResize() {
      this.windowWidth = window.innerWidth
    },
    onClickTwentyThree() {
      this.title = '2023'
      this.currentArr = twentytwentythree;
    },
    onClickOld() {
      this.title = '-2022'
      this.currentArr = digitalArrOld;
    },
    imgOnClick(src: any,alt: any){
      const modal = document.getElementById("myModal");
      // const originalImg = document.getElementById("myImg");
      const modalImgSrc = (<HTMLInputElement>document.getElementById("img01"));
      const modalImg = document.getElementById("img01");
      const captionText = document.getElementById("caption");
      modal!.style.display = "block";
      // modalImg!.src = src;
      modalImgSrc.src = src;
      captionText!.innerHTML = alt;
    },
    spanOnClick(){
    const modal = document.getElementById("myModal");
    modal!.style.display = "none";
    },
  },
  };
</script>

<template>
  <main>
    <html lang="en">
<body>
  
  <div class="portfolio-container">
    <div class="portfolio-header" style="overflow-y: hidden; overflow-x: hidden; z-index: 2;">
      <div class="color-overlay"></div>
      <!-- <figure id="thumbnail" class="loading content-fill link-arr center-header" style="overflow: hidden; z-index: 3;">
        <img :src="closetou" data-image-focal-point="0.5,0.5" data-parent-ratio="1.7" style="font-size: 0px; left: 0px; top: -3.39787px; width: auto; height: 663.796px; position: relative; overflow: hidden;" alt="portraits_santiago_twice.jpg" class="" data-image-resolution="2500w">
      </figure> -->
      <h2 class="show-small-screen center-header" style=" font-size: 5rem; position: absolute; z-index: 25; width: 100vw; top: 8%; opacity: 1; color:#fff; margin-left: -1rem;" >Caleb</h2>
      <h2 class="center-header" style=" font-size: 5rem; position: absolute; z-index: 25; width: 100vw; top: 38%; opacity: 0.8" >{{ title }}</h2>
      <div style="margin-left: auto; margin-right: auto; display:flex; flex-direction:row; position: absolute; z-index: 25; width: 100vw; left:calc(100vw/6)!important; top: 2%;">
          <!-- link arr -->
            <a href="https://www.instagram.com/therealcalebwelch/" target="_blank" class="hide-small-screen"
            style="border-radius: 9999px; margin: 1rem; margin-top: 1.4rem; text-decoration: none;">
              <p style="margin-top: 0.5rem; margin: 1rem; font-size: 1.6rem;">Instagram</p>
            </a>
            <a href="https://www.linkedin.com/in/caleb-welch-502851121/" target="_blank" class="hide-small-screen"
            style="border-radius: 9999px; margin: 1rem; margin-top: 1.4rem; text-decoration: none;">
            <p style="margin-top: 0.5rem; margin: 1rem; font-size: 1.6rem;">linkedin</p>

            </a>
           <h1 style="font-size:5.5rem; margin-bottom: 0rem; margin-top: 1.2rem; margin-left: 4vw; margin-right: 4vw;" class="hide-small-screen">Caleb Welch</h1>
            <a href="https://github.com/calebwelch1" target="_blank" class="hide-small-screen"
            style="border-radius: 9999px; margin: 1rem; margin-top: 1.4rem; text-decoration: none;">
            <p style="margin-top: 0.5rem; margin: 1rem; font-size: 1.6rem;">github</p>
            </a>
      </div>
    </div>
    <div style=" background: #777069; display: flex; flex-direction: column; height: 78vh; overflow-y: scroll; overflow-x:hidden;">
      <div style="margin-left: auto; margin-right: auto; display:flex; flex-direction:row; gap: 2.5rem; margin-top: 1.5rem;">
      <button class="portfolio-button" @click="onClickTwentyThree"> 2023 </button>
      <button class="portfolio-button" @click="onClickOld"> 2022 - and prior </button>
      </div>
      <div class="justify-around flex-wrap" style="display:flex;flexDirection:row;gap:2.5rem; margin-left: 15vw; margin-right: 15vw; margin-top: 2.5vh;">
      <img
      id="myImg"
      style="height: auto; width: auto; max-width: 200px; max-height: 200px;"
      :src="imageObj['src']"
      :alt="imageObj['alt']"
      @click="imgOnClick(imageObj['src'],imageObj['alt'])"
      v-for="(imageObj, index) in currentArr" :key="index"
      />
      <div id="myModal" class="modal">
        <span class="close" style="height: 9rem; width: 9rem; font-Size: 9rem;" @click="spanOnClick">&times;</span>
        <img class="modal-content" id="img01" style="position: absolute; left: 10%;">
        <div id="caption" class="caption" style="position:absolute; right: 10%; top: 30%;"></div>
    </div>
   </div>
  </div>
     <div style="margin-left: auto; margin-right: auto; display:flex; flex-direction:row;">
          <!-- link arr -->
            <a href="https://www.instagram.com/therealcalebwelch/" target="_blank" class="h-3 w-3"
            style="border-radius: 9999px; margin: 1rem;">
              <img class="h-2 w-2 filter-white" src="./icons/instagram.svg" style="margin-bottom:-8rem; margin: 1rem;" alt="images made by https://www.flaticon.com"/>
            </a>
            <a href="https://www.linkedin.com/in/caleb-welch-502851121/" target="_blank" class="h-3 w-3"
            style="border-radius: 9999px; margin: 1rem;">
              <img class="h-2 w-2 filter-white" src="./icons/linkedin.svg" style="margin-top:0.4rem; margin: 1rem;" alt="images made by https://www.flaticon.com"/>
            </a>
            <a href="https://github.com/calebwelch1" target="_blank" class="h-3 w-3"
            style="border-radius: 9999px; margin: 1rem;">
              <img class="h-2 w-2 filter-white" src="./icons/github.png" style="margin-top:0.4rem; margin: 1rem;" alt="images made by https://www.flaticon.com"/>
            </a>
      </div>
</div>

</body>
</html>
  </main>
</template>
<style lang="scss">
body,
html {
  height: 100%;
  background: #110101;
  overflow: hidden;
}
a {color:#fff;}
a:visited {color:#777069;}

.portfolio-container {
  height:100%; width: 100%; display: flex; flex-direction: column; overflow:hidden;
}

.portfolio-header {
  // background-color: rgba(10, 4, 0, 0.5);
  position: relative;
  color:white; display: flex; flex-direction:row; height: 48vh;
}

.transparent-background {
  background:rgb(118, 90, 63);
  opacity: 0.5;
}

.project-container {
  display: flex; flex-direction: row; justify-content: space-between; gap: 5vw; margin-top: 2%; margin-bottom: 2%; width: 90%; margin-left: auto; margin-right: auto; font-size: 1.3rem; height: 60vh;
}

.project-image-position {
  z-index: 5; height: 75%; width: 80%; position: absolute; bottom: -5%; right: -3%;
}

.project-gradient-square-size {
  position:absolute; flex: 40; height: 100%; width: 100%;
}

.project-image-container {
  flex:40; position:relative; height: 90%; width: 100%;
}

.project-text-container {
  display: flex; flex-direction: column; justify-content: space-between; flex: 60;
}

@media (max-width: 1360px) {
  .project-container {
  display: flex; flex-direction: column; justify-content: space-between; gap: 5vw; margin-top: 2%; margin-bottom: 2%; width: 80%; margin-left: auto; margin-right: auto; font-size: 1.3rem; height: 100rem;
}

.project-image-container {
  position:relative; border: 1px solid red; height: 90rem; width: 100%; display:block;
}

.project-text-container {
  display: flex; flex-direction: column; justify-content: space-between;
}

.project-image-position {
  z-index: 5; height: 90%; width: 80%; position: absolute; bottom: -5%; right: -3%;
}
  }
.split-slideshow {
  position: relative;
}
// under 1260
// portfolio CSS
.justify-around{	justify-content: space-around}
.flex-wrap	{flex-wrap: wrap}
#myImg {
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
}
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 100; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.9); /* Black w/ opacity */
}

/* Modal Content (image) */
.modal-content {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
}

/* Caption of Modal Image */
#caption {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
  text-align: center;
  color: #ccc;
  padding: 10px 0;
  height: 150px;
}

@media screen and (min-width: 800px) {
  .caption {
  display:inline;
  }
}

/* Add Animation */
.modal-content, #caption {  
  -webkit-animation-name: zoom;
  -webkit-animation-duration: 0.6s;
  animation-name: zoom;
  animation-duration: 0.6s;
}

#myImg:hover {opacity: 0.7;}

.close {
  position: absolute;
  top: 15px;
  right: 35px;
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  transition: 0.3s;
}

.close:hover,
.close:focus {
  color: #bbb;
  text-decoration: none;
  cursor: pointer;
}

.show-small-screen {
  display: none;
}

.center-header{
  left:calc(100vw/2.2)!important;
}


@media only screen and (max-width: 1300px){
  .hide-small-screen {
    display: none !important;
  }
  .show-small-screen {
  display: block;
}
.center-header{
  left:calc(100vw/2.5)!important;
}
}

@media only screen and (max-width: 800px){
  .modal-content {
    width: 100%;
  }

  .link-arr {
    display: none !important;
  }

  .hide-small-screen {
    display: none !important;
  }

  .show-small-screen {
  display: block;
}

.center-header{
  left:calc(100vw/2.7)!important;
}
}

.portfolio-button {
  height: 2.5rem;
  width: auto;
  background: rgba(42,28,14, 1);
  color: white;
  border-radius: 0.2rem;
  font-size: 1.2rem;
  margin-left: auto;
  margin-right: auto;
  font-weight:600;
  letter-spacing:0.2em;
  padding-left: 0.3rem;
  padding-right: 0.3rem;
  border:none;
  cursor:pointer;
  transition: background-color 0.2s, transform 0.1s;
}

.portfolio-button:hover {
  background-color: #333; /* Slightly darker color on hover */
}

.portfolio-button:active {
  background-color: #222; /* Even darker color on button press */
  transform: translateY(2px); /* Slight vertical shift to simulate button press */
}

.h-5 {
  height: 5rem;
}

.w-5 {
  width: 5rem;
}

.h-3 {
  height: 3.5rem;
}

.w-3 {
  width: 3.5rem;
}

.h-2 {
  height: 2.5rem;
}

.w-2 {
  width: 2.5rem;
}

.filter-white{
  filter: invert(100%) sepia(4%) saturate(7482%) hue-rotate(233deg) brightness(113%) contrast(95%);
}

.color-overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(42,28,14,.6);
    z-index: 20;
}

#thumbnail {
    position: absolute;
    top: calc(100vh/8)!important;
    // left:calc(100vw/5.9)!important;
    bottom: 0;
    right: 0;
    margin: 16 40 16 5;
}
</style>

