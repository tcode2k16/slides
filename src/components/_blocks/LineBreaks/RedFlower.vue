<template>
  <div class="hr">
      <div class="line  line-left"></div>
      <div data-width="79" data-height="27" data-src="http://gardenestudio.com.br/img/ornamento-small.svg" style="display: inline-block; vertical-align: middle; line-height: 0; width: 79px; height: 27px;" data-27-bottom="@data-v:0" data-80-center="@data-v:1" data-v="1"><svg height="27" version="1.1" width="79" xmlns="http://www.w3.org/2000/svg"><desc>Created with Snap</desc><defs></defs><!--?xml version="1.0" encoding="utf-8"?-->
    <!-- Generator: Adobe Illustrator 18.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

    <svg version="1.1" id="Layer_2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="79" height="27" viewBox="0 0 78.2 26.4" enable-background="new 0 0 78.2 26.4" xml:space="preserve">
    <path fill="none" stroke="#c4415d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
      M57.3,13.1c-3.2,10.4,10.4,16.1,16.8,8.7c7.1-8.2,0.6-17.8-7-20.1c-19.6-5.2-31.9,18-49,23.1C9.3,27.5-1.7,20.4,1.6,9.8
      c3.8-12.4,23.3-9,19.3,4" data-length="166.65574645996094" id="symbol"></path>
    <desc>Created with Snap</desc><defs></defs></svg>
    </svg></div>
      <div class="line line-right"></div>
    </div>
</template>

<style scoped>
.hr {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  margin: 50px 0px;
}
.line-left {
  margin-right: 20px;
  transform-origin: 100% 50%;
}
.line-right {
  margin-left: 20px;
  transform-origin: 0 50%;
}
.animation .line {
  animation: drawLine 1s ease 0.6s;
  animation-fill-mode: forwards;
}
.animation #symbol {
  animation: drawSymbol 1s ease 0.6s;
  animation-fill-mode: forwards;
}
.line {
  width: 260px;
  height: 2px;
  display: inline-block;
  background: #d94362;
  border-radius: 1000px;
  vertical-align: middle;
  transform: scale(0, 1);
}
#symbol {
  stroke-dasharray: 0, 166.656;
}
@keyframes drawSymbol {
  from { stroke-dasharray: 0, 166.656; }
  to { stroke-dasharray: 166.656, 166.656; }
}
@keyframes drawLine {
  from { transform: scale(0, 1); }
  to { transform: scale(1, 1); }
}

</style>
