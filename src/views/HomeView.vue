<script lang="ts">
import digitalArrOld from './old/digital.js'

export default {
  data() {
    return { 
      showAbout:false,
      windowWidth: window.innerWidth,
      currentArr: [],
     }
  },
  mounted() {
    this.currentArr = digitalArrOld;
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
    routeCC() {
      window.open('https://calebwelch1.github.io/c-collection'); 
    },
    routeLittleLemon() {
      window.open('https://github.com/calebwelch1/little-lemon-react-native'); 
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
    <div class="portfolio-header">
      <div style="margin-left: auto; margin-right: auto; display:flex; flex-direction:column;">
        <h1 style="font-size:5.5rem; margin-bottom: 5px;">Caleb Welch</h1>
        <div style="display:flex; flex-direction: row;">
          <!-- <p style="font-size:1.1rem; margin-left:auto; margin-right: auto;">projects by
          <a style="color:white; margin:none;padding:none; height: 1rem;" href="https://calebwelch1.github.io/portfolio/">Caleb Welch</a>
          </p> -->
        </div>
        <div class="flex-row justify-around">
          <!-- link arr -->
          <div>
            <a href="https://www.instagram.com/therealcalebwelch/" target="_blank" class="h-3 w-3"
            style="border-radius: 9999px; margin: 1rem;">
              <img class="h-2 w-2 filter-white" src="./icons/instagram.svg" style="margin-top:0.4rem; margin: 1rem;" alt="images made by https://www.flaticon.com"/>
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
      </div>
    </div>
    <div style=" background: white; display: flex; flex-direction: column; height: 78vh; overflow-y: scroll; overflow-x:hidden;">
      <div class="justify-around flex-wrap" style="display:flex;flexDirection:row;gap:5rem;">
      <img
      id="myImg"
      style="height: 200px; width: 200px;"
      :src="imageObj['src']"
      :alt="imageObj['alt']"
      @click="imgOnClick(imageObj['src'],imageObj['alt'])"
      v-for="imageObj in currentArr" :key="imageObj"
      />
      <div id="myModal" class="modal">
        <span class="close" style="height: 9rem; width: 9rem; font-Size: 9rem;" @click="spanOnClick">&times;</span>
        <img class="modal-content" id="img01">
        <div id="caption" class="caption" ></div>
    </div>
   </div>
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

.portfolio-container {
  height:100%; width: 100%; display: flex; flex-direction: column; overflow:hidden;
}

.portfolio-header {
  background: black; color:white; display: flex; flex-direction:row; height: 38vh;
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
  z-index: 1; /* Sit on top */
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

@media only screen and (max-width: 700px){
  .modal-content {
    width: 100%;
  }
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
</style>

