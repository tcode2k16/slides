webpackJsonp([0,2],[,,,,,,,,,,function(t,e,i){i(95);var a=i(0)(i(50),i(132),"data-v-97a93696",null);t.exports=a.exports},,,,,,,,,,,,,,,,,,,,,,function(t,e,i){i(82);var a=i(0)(null,i(119),"data-v-31d5e3c4",null);t.exports=a.exports},function(t,e,i){"use strict";var a=i(11),s=i.n(a),n=i(135),r=i.n(n),l=i(100),o=i.n(l),c=i(104),d=i.n(c),v=i(109),u=i.n(v),h=i(107),f=i.n(h),m=i(110),p=i.n(m);s.a.use(r.a),e.a=new r.a({routes:[{path:"/index",name:"Index",component:o.a},{path:"/intro",name:"intro",component:d.a},{path:"/oedipus_formative",name:"oedipus_formative",component:u.a},{path:"/test",name:"test",component:p.a},{path:"/leader_summative",name:"leader_summative",component:f.a}]})},function(t,e,i){"use strict";var a=i(11),s=i.n(a),n=i(137),r=i.n(n);s.a.use(r.a),e.a=new r.a.Store({state:{}})},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,i){i(91);var a=i(0)(i(40),i(128),null,null);t.exports=a.exports},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(9),s=i.n(a);e.default={mounted:function(){s()(".ct").on("mouseover",function(){s()(".bauble").addClass("light"),s()(".star").addClass("star-light")}),s()(".ct").on("mouseout",function(){s()(".bauble").removeClass("light")})}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(10),s=i.n(a),n=i(99),r=i.n(n);e.default={components:{SwipeView:s.a,Christmas:r.a},methods:{share:function(){}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(10),s=i.n(a),n=i(103),r=i.n(n),l=i(102),o=i.n(l),c=i(101),d=i.n(c),v=i(105),u=i.n(v);e.default={components:{Fox:r.a,Factory:o.a,Earth:d.a,Tree:u.a,SwipeView:s.a},methods:{toIndex:function(){this.$router.push("/index")}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(113),s=i.n(a),n=i(114),r=i.n(n),l=i(32),o=i.n(l),c=i(112),d=i.n(c),v=i(108),u=i.n(v),h=i(106),f=i.n(h);e.default={name:"LeaderSummative",components:{AnimatedSwipeView:s.a,RedFlower:o.a,Quote:d.a,YinYang:u.a,FlipView:r.a,King:f.a},data:function(){return{svg:{test:null}}},mounted:function(){}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(20),s=i.n(a),n=i(19),r=i.n(n),l=i(9),o=i.n(l),c=i(98),d=i.n(c),v=i(10),u=i.n(v),h=i(32),f=i.n(h);e.default={components:{SwipeView:u.a,RedFlower:f.a},data:function(){return{svg:{fallSvg:null,king:null,intro:null}}},mounted:function(){this.svg.fallSvg=new d.a("fall",{duration:300}),this.svg.king=new d.a("king",{duration:300}),this.svg.intro=new d.a("intro",{duration:300})},methods:{updateAnimation:function(t,e){var i=o()(".view"),a=!0,n=!1,l=void 0;try{for(var c,d=r()(s()(this.svg));!(a=(c=d.next()).done);a=!0){var v=c.value;this.svg[v]&&this.svg[v].stop().reset().play()}}catch(t){n=!0,l=t}finally{try{!a&&d.return&&d.return()}finally{if(n)throw l}}for(var u=0;u<i.length;u+=1){var h=o()(i[u]);u===-e?h.addClass("animation"):h.hasClass("animation")&&h.removeClass("animation")}return!0}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(111),s=i.n(a);e.default={components:{DarkCircle:s.a}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(20),s=i.n(a),n=i(19),r=i.n(n),l=i(9),o=i.n(l),c=i(10),d=i.n(c);e.default={name:"AnimatedSwipeView",props:["bar","onChange","svg"],components:{SwipeView:d.a},data:function(){return{currentIndex:0}},methods:{onAnimate:function(t,e){var i=o()(".view"),a=i[-t],s=i[-e],n=a.dataset.animationCount?a.dataset.animationCount:0,r=s.dataset.animationCount?s.dataset.animationCount:0,l=t-e>=0;if(l){if(this.currentIndex>=n)return o()(a).removeClass("anim"+n),o()(s).addClass("anim0"),this.currentIndex=0,this.flipPage(a,s),!0;o()(a).addClass("anim"+(this.currentIndex+1)),o()(a).removeClass("anim"+this.currentIndex),this.currentIndex+=1}else{if(this.currentIndex<=0)return o()(a).removeClass("anim0"),o()(s).addClass("anim"+r),this.currentIndex=r,this.flipPage(a,s),!0;o()(a).addClass("anim"+(this.currentIndex-1)),o()(a).removeClass("anim"+this.currentIndex),this.currentIndex-=1}return!1},addAnimationTag:function(t,e){o()(t).removeClass("animation"),o()(e).addClass("animation")},restartSvg:function(){if(this.svg){var t=!0,e=!1,i=void 0;try{for(var a,n=r()(s()(this.svg));!(t=(a=n.next()).done);t=!0){var l=a.value;this.svg[l]&&this.svg[l].stop().reset().play()}}catch(t){e=!0,i=t}finally{try{!t&&n.return&&n.return()}finally{if(e)throw i}}}},flipPage:function(t,e){this.addAnimationTag(t,e),this.restartSvg(),this.onChange&&this.onChange()}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["before","next"]}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(9),s=i.n(a),n=i(97),r=i.n(n),l=i(115),o=i.n(l);e.default={components:{ProgressBar:o.a},props:["bar","bt","bn","onChange"],data:function(){return{main:null,len:0,transform:0}},mounted:function(){this.main=new r.a(s()(".swipe")[0]),this.len=s()(".main>.view").length,s()(".main").css("width",this.len+"00vw"),this.main.on("swipeleft",this.next),this.main.on("swiperight",this.before),s()(window).keydown(this.onKeydown.bind(this)),this.onChange&&this.onChange(this.transform,this.transform)},methods:{onKeydown:function(t){39===t.keyCode?this.next():37===t.keyCode&&this.before()},before:function(){this.update(Math.min(0,this.transform+1))},next:function(){this.update(Math.max(-this.len+1,this.transform-1))},update:function(t){this.onChange&&!this.onChange(this.transform,t)||(this.transform=t,s()(".main").css("transform","translate("+this.transform+"00vw,0px)"))},haveBt:function(){return this.bt&&this.transform!==this.bn}}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,function(t,e,i){i(89);var a=i(0)(i(41),i(126),"data-v-5850e486",null);t.exports=a.exports},function(t,e,i){i(88);var a=i(0)(i(42),i(125),"data-v-52abb054",null);t.exports=a.exports},function(t,e,i){i(87);var a=i(0)(null,i(124),"data-v-4ca32068",null);t.exports=a.exports},function(t,e,i){i(93);var a=i(0)(null,i(130),null,null);t.exports=a.exports},function(t,e,i){i(84);var a=i(0)(null,i(121),"data-v-3e6cb3ed",null);t.exports=a.exports},function(t,e,i){i(86);var a=i(0)(i(43),i(123),"data-v-4ae98d8a",null);t.exports=a.exports},function(t,e,i){i(94);var a=i(0)(null,i(131),"data-v-82b19820",null);t.exports=a.exports},function(t,e,i){var a=i(0)(null,i(133),null,null);t.exports=a.exports},function(t,e,i){i(85);var a=i(0)(i(44),i(122),"data-v-4a5bcce6",null);t.exports=a.exports},function(t,e,i){i(83);var a=i(0)(null,i(120),null,null);t.exports=a.exports},function(t,e,i){i(90);var a=i(0)(i(45),i(127),"data-v-5b4d5cf0",null);t.exports=a.exports},function(t,e,i){var a=i(0)(i(46),i(118),null,null);t.exports=a.exports},function(t,e,i){var a=i(0)(null,null,null,null);t.exports=a.exports},function(t,e,i){i(92);var a=i(0)(i(47),i(129),"data-v-75a75073",null);t.exports=a.exports},function(t,e,i){i(80);var a=i(0)(i(48),i(116),"data-v-1426edd2",null);t.exports=a.exports},function(t,e,i){i(96);var a=i(0)(null,i(134),"data-v-ee76b428",null);t.exports=a.exports},function(t,e,i){i(81);var a=i(0)(i(49),i(117),null,null);t.exports=a.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("SwipeView",{attrs:{bar:t.bar,onChange:t.onAnimate}},[t._t("default")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"bar flex"},[i("div",{staticClass:"block"},[i("i",{staticClass:"fa fa-chevron-left leftbt",attrs:{"aria-hidden":"true"},on:{click:function(e){t.before()}}})]),t._v(" "),i("div",{staticClass:"block"},[i("i",{staticClass:"fa fa-chevron-right rightbt",attrs:{"aria-hidden":"true"},on:{click:function(e){t.next()}}})])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("DarkCircle")},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"hr"},[i("div",{staticClass:"line  line-left"}),t._v(" "),i("div",{staticStyle:{display:"inline-block","vertical-align":"middle","line-height":"0",width:"79px",height:"27px"},attrs:{"data-width":"79","data-height":"27","data-src":"http://gardenestudio.com.br/img/ornamento-small.svg","data-27-bottom":"@data-v:0","data-80-center":"@data-v:1","data-v":"1"}},[i("svg",{attrs:{height:"27",version:"1.1",width:"79",xmlns:"http://www.w3.org/2000/svg"}},[i("desc",[t._v("Created with Snap")]),i("defs"),t._v(" "),i("svg",{attrs:{version:"1.1",id:"Layer_2",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"79",height:"27",viewBox:"0 0 78.2 26.4","enable-background":"new 0 0 78.2 26.4","xml:space":"preserve"}},[i("path",{attrs:{fill:"none",stroke:"#c4415d","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10",d:"\n    M57.3,13.1c-3.2,10.4,10.4,16.1,16.8,8.7c7.1-8.2,0.6-17.8-7-20.1c-19.6-5.2-31.9,18-49,23.1C9.3,27.5-1.7,20.4,1.6,9.8\n    c3.8-12.4,23.3-9,19.3,4","data-length":"166.65574645996094",id:"symbol"}}),t._v(" "),i("desc",[t._v("Created with Snap")]),i("defs")])])]),t._v(" "),i("div",{staticClass:"line line-right"})])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"466",height:"466",id:"YinYang"}},[i("circle",{attrs:{cx:"233",cy:"233",r:"231"}}),t._v(" "),i("path",{attrs:{d:"M 233,459 a 226 226 0 0 1 0,-452 a 113 113 0 0 1 0,226 z",fill:"#fff"}}),t._v(" "),i("circle",{attrs:{cx:"233",cy:"346",r:"113",fill:"#000"}}),t._v(" "),i("circle",{attrs:{cx:"233",cy:"120",r:"30"}}),t._v(" "),i("circle",{attrs:{cx:"233",cy:"346",r:"30",fill:"#fff"}})])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c||e;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"fox"},[i("div",{staticClass:"head"},[i("div",{staticClass:"eye"}),t._v(" "),i("div",{staticClass:"eye"})]),t._v(" "),i("div",{staticClass:"ear"}),t._v(" "),i("div",{staticClass:"ear"}),t._v(" "),i("div",{staticClass:"nose"}),t._v(" "),i("div",{staticClass:"body"}),t._v(" "),i("div",{staticClass:"tail"})])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"LeaderSummative"}},[i("AnimatedSwipeView",{attrs:{bar:!0,svg:t.svg}},[i("div",{staticClass:"view gradient"},[i("div",{staticClass:"Vcontainer"},[i("div",{staticClass:"Vcontainer Card"},[i("h1",[t._v("Leader’s pride")]),t._v(" "),i("RedFlower"),t._v(" "),i("h3",[t._v("The key element to success")])],1)])]),t._v(" "),i("div",{staticClass:"view"},[i("div",{staticClass:"Hcontainer"},[i("div",{staticClass:"HalfCard Vcontainer"},[i("div",{staticClass:"Vcontainer"},[i("Quote",[t._v('"If you build an army of 100 lions and their leader is a dog, in any fight, the lions will die like a dog. But if you build an army of 100 dogs and their leader is a lion, all dogs will fight like a lion"'),i("br"),t._v("  - "),i("b",[t._v("Napoleon Bonaparte")])])],1)]),t._v(" "),i("img",{staticClass:"halfImage",attrs:{src:"/static/LeaderSummative/napoleon.jpg",alt:""}})])]),t._v(" "),i("div",{staticClass:"view",attrs:{"data-animation-count":"1"}},[i("div",{staticClass:"Hcontainer",staticStyle:{"align-items":"center",top:"0",position:"absolute","z-index":"10"}},[i("YinYang")],1),t._v(" "),i("div",{staticClass:"Hcontainer"},[i("div",{staticClass:"Half Vcontainer",staticStyle:{"background-color":"#000",color:"#fff","justify-content":"flex-start","padding-top":"30vh"}},[i("h3",[t._v("Succeeful Leader")]),t._v(" "),i("ul",{staticStyle:{margin:"50px 150px","font-size":"2rem"}},[i("li",[t._v("Confident")]),t._v(" "),i("li",[t._v("Possess pride")]),t._v(" "),i("li",[t._v("Humble")])])]),t._v(" "),i("div",{staticClass:"Half Vcontainer",staticStyle:{"background-color":"#fff","justify-content":"flex-start","padding-top":"30vh"}},[i("h3",[t._v("Failed Leader")]),t._v(" "),i("ul",{staticStyle:{margin:"50px 150px","font-size":"2rem"}},[i("li",[t._v("Too ambitious")]),t._v(" "),i("li",[t._v("Drowns in pride")])])])])]),t._v(" "),i("div",{staticClass:"view"},[i("div",{staticClass:"Hcontainer"},[i("div",{staticClass:"HalfCard Vcontainer"},[i("div",{staticClass:"Vcontainer"},[i("RedFlower"),t._v(" "),i("h5",[t._v("Oedipus turned from a great leader to a leader that failed because he was not able to control his pride and turned it from his advantage to the very thing that led to his downfall.")]),t._v(" "),i("RedFlower")],1)]),t._v(" "),i("img",{staticClass:"halfImage",attrs:{src:"/static/LeaderSummative/oedipus.jpg",alt:""}})])]),t._v(" "),i("div",{staticClass:"view",attrs:{"data-animation-count":"1"}},[i("div",{staticClass:"Hcontainer"},[i("div",{staticClass:"HalfCard Vcontainer"},[i("div",{staticClass:"Vcontainer"},[i("Quote",[t._v("“I must follow the people for I am their leader”"),i("br"),t._v("  - "),i("b",[t._v("Mahatma Gandhi")])]),t._v(" "),i("br"),i("br"),t._v(" "),i("Quote",[t._v("“Even when [Gandhi] was fighting what was in effect a color war, he did not think of people in terms of race or status.”"),i("br"),t._v("  - "),i("b",[t._v("George Orwell")])])],1)]),t._v(" "),i("img",{staticClass:"halfImage",attrs:{src:"/static/LeaderSummative/gandhi.jpg",alt:""}})])]),t._v(" "),i("div",{staticClass:"view"},[i("div",{staticClass:"Hcontainer"},[i("div",{staticClass:"HalfCard Vcontainer"},[i("div",{staticClass:"Vcontainer"},[i("RedFlower"),t._v(" "),i("h5",[t._v("Marissa Mayer "),i("br"),i("br"),t._v(" the former executive of Google and current CEO of Yahoo")]),t._v(" "),i("RedFlower")],1)]),t._v(" "),i("img",{staticClass:"halfImage",attrs:{src:"/static/LeaderSummative/mayer.jpg",alt:""}})])]),t._v(" "),i("div",{staticClass:"view gradient",attrs:{"data-animation-count":"1"}},[i("div",{staticClass:"Hcontainer"},[i("FlipView",{staticClass:"Card",staticStyle:{height:"315px !important",width:"560px !important",padding:"0px","background-color":"transparent"}},[i("div",{slot:"front"},[i("div",{staticClass:"Hcontainer"},[i("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/jaKoMCujc2k?start=838",frameborder:"0",allowfullscreen:""}})],1)]),t._v(" "),i("div",{slot:"back"},[i("div",{staticClass:"Hcontainer"},[i("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/NEEug_1XEcc?start=110",frameborder:"0",allowfullscreen:""}})],1)])])],1)]),t._v(" "),i("div",{staticClass:"view",attrs:{"data-animation-count":"1"}},[i("div",{staticClass:"Vcontainer",staticStyle:{position:"absolute","z-index":"10"}},[i("div",{staticClass:"Vcontainer Card popup"},[i("RedFlower"),t._v(" "),i("h3",[t._v("A successful leader should be confident enough to lead the people, while still remains humble when facing challenges.")]),t._v(" "),i("RedFlower")],1)]),t._v(" "),i("div",{staticClass:"Hcontainer"},[i("img",{staticStyle:{width:"33.333333%"},attrs:{src:"/static/LeaderSummative/oedipus.jpg",alt:""}}),t._v(" "),i("img",{staticStyle:{width:"33.333333%"},attrs:{src:"/static/LeaderSummative/gandhi.jpg",alt:""}}),t._v(" "),i("img",{staticStyle:{width:"33.333333%"},attrs:{src:"/static/LeaderSummative/mayer.jpg",alt:""}})])]),t._v(" "),i("div",{staticClass:"view"},[i("div",{staticClass:"Hcontainer"},[i("div",{staticClass:"Vcontainer Half"},[i("img",{staticStyle:{height:"50%"},attrs:{src:"/static/LeaderSummative/leader1.jpg",alt:""}}),t._v(" "),i("img",{staticStyle:{height:"50%"},attrs:{src:"/static/LeaderSummative/leader2.jpg",alt:""}})]),t._v(" "),i("div",{staticClass:"Vcontainer Half"},[i("img",{staticStyle:{height:"50%"},attrs:{src:"/static/LeaderSummative/leader3.jpg",alt:""}}),t._v(" "),i("div",{staticStyle:{height:"50%"}},[i("div",{staticClass:"Vcontainer"},[i("RedFlower"),t._v(" "),i("h3",[t._v("Leaders are everwhere")]),t._v(" "),i("RedFlower")],1)])])])]),t._v(" "),i("div",{staticClass:"view city"},[i("div",{staticClass:"Vcontainer Card"},[i("h3",[t._v("Be a confident and humble leader")]),t._v(" "),i("br"),i("br"),t._v(" "),i("h5",[t._v("Thank you!")])])])])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("SwipeView",{attrs:{bar:!0}},[i("div",{staticClass:"view v1"},[i("Factory"),t._v(" "),i("div",{staticClass:"text white"},[i("h3",[t._v("Our world is polluted")])])],1),t._v(" "),i("div",{staticClass:"view v2"},[i("Fox"),t._v(" "),i("div",{staticClass:"text"},[i("h3",[t._v("The animals are dying")])])],1),t._v(" "),i("div",{staticClass:"view v3"},[i("Tree"),t._v(" "),i("div",{staticClass:"text"},[i("h3",[t._v("The plants are suffering")])])],1),t._v(" "),i("div",{staticClass:"view v4"},[i("Earth"),t._v(" "),i("div",{staticClass:"text white"},[i("h3",[t._v("You can make a difference")]),t._v(" "),i("div",{staticClass:"bt",on:{click:t.toIndex}},[t._v("Take action")])])],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c||e;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"warp"},[i("div",{staticClass:"earth"},[i("div",{staticClass:"earth--shadow"})])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("SwipeView",{attrs:{bar:!1,bt:!0,bn:-3}},[i("div",{staticClass:"view v1"},[i("Christmas"),t._v(" "),i("div",{staticClass:"text white"},[i("h4",[t._v("Daily Challenge")])])],1),t._v(" "),i("div",{staticClass:"view v2"},[i("Christmas"),t._v(" "),i("div",{staticClass:"text white"},[i("h4",{staticStyle:{"padding-left":"10px","padding-right":"10px"}},[t._v("Step 1: recycle something that relates to Christmas")])])],1),t._v(" "),i("div",{staticClass:"view v3"},[i("Christmas"),t._v(" "),i("div",{staticClass:"text white"},[i("h4",[t._v("Step 2: take a photo or video of it")])])],1),t._v(" "),i("div",{staticClass:"view v4"},[i("Christmas"),t._v(" "),i("div",{staticClass:"text white"},[i("h4",[t._v("Step 3: share it :)")])]),t._v(" "),i("div",{staticStyle:{top:"80%",width:"100vw",position:"absolute"}},[i("div",{staticClass:"bt",on:{click:t.share}})])],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c||e;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"warp"},[i("div",{staticClass:"ct"},[i("div",{staticClass:"star"}),t._v(" "),i("div",{staticClass:"pressie"},[i("div",{staticClass:"cover"}),t._v(" "),i("div",{staticClass:"wrap"}),t._v(" "),i("div",{staticClass:"ribbon"})]),t._v(" "),i("div",{staticClass:"tree"},[i("div",{staticClass:"base"}),t._v(" "),i("div",{staticClass:"layer"},[i("div",{staticClass:"line"}),t._v(" "),i("div",{staticClass:"bauble one"})]),t._v(" "),i("div",{staticClass:"layer two"},[i("div",{staticClass:"line two"}),t._v(" "),i("div",{staticClass:"bauble two"}),t._v(" "),i("div",{staticClass:"socks"},[i("div",{staticClass:"top"}),t._v(" "),i("div",{staticClass:"foot"})])]),t._v(" "),i("div",{staticClass:"layer three"},[i("div",{staticClass:"line three"}),t._v(" "),i("div",{staticClass:"bauble three"}),t._v(" "),i("div",{staticClass:"socks two"},[i("div",{staticClass:"top"}),t._v(" "),i("div",{staticClass:"foot two"})])])]),t._v(" "),i("div",{staticClass:"layer four"},[i("div",{staticClass:"bauble four"}),t._v(" "),i("div",{staticClass:"star two"}),t._v(" "),i("div",{staticClass:"line four"})])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("SwipeView",{attrs:{bar:!0,onChange:t.updateAnimation}},[i("div",{staticClass:"view"},[i("div",{staticClass:"Vcontainer"},[i("h1",[t._v("Pride and Success")]),t._v(" "),i("RedFlower"),t._v(" "),i("h3",[t._v("What makes a leader successful?")])],1)]),t._v(" "),i("div",{staticClass:"view"},[i("div",{staticClass:"Hcontainer"},[i("div",{staticClass:"side Vcontainer"},[i("RedFlower"),t._v(" "),i("div",{staticClass:"container"},[i("h1",[t._v("Claim")]),t._v(" "),i("br"),t._v(" "),i("h3",[t._v("A great leader should be confident to lead his people while being humble and modest in his actions.")])]),t._v(" "),i("RedFlower")],1),t._v(" "),i("svg",{attrs:{id:"intro","data-name":"Layer 5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1036.4 1255.6"}},[i("title",[t._v("octopusnew")]),i("path",{attrs:{fill:"none",stroke:"#34495e","stroke-miterlimit":"10","stroke-width":"8",d:"M5.4 807l212-60.7v-67.7l100-67 26-89.2-41.3-95.6 3-89.2 39-30.4V191.6l91.6-80 115-21.8 152 39 117 113.2 28.4 69.6-17.8 100L813 542l-45.7 104.3 80.5 39.2 26 56.5-19.5 21.7 67.4 67.4 107.6 27L713 1252H189L5.5 807z"}}),i("path",{attrs:{fill:"none",stroke:"#34495e","stroke-miterlimit":"10","stroke-width":"8",d:"M428.4 399l-25.7 102.4 56.7 14m-194 131.2v182l80.2 67.7 119.5-13 383-197.8"}}),i("path",{attrs:{fill:"none",stroke:"#f1c40f","stroke-miterlimit":"10","stroke-width":"8",d:"M343.3 287.6L465 268l137 45.7 222.4 142.6 6-44.7-163-156.6L487 196.3l-144-4.7v96z"}}),i("path",{attrs:{fill:"none",stroke:"#f1c40f","stroke-miterlimit":"10","stroke-width":"8",d:"M343.3 191.3l11-121.2 27.2 101 17.3-135 25 137L465 18l30.6 163 91.2-134.7 8.8 167.4 84.7-115.2v143l87-99.5-8.7 156.5 71.8-107-21.8 159.2 71.8-115.2-50 176"}}),i("path",{attrs:{fill:"none",stroke:"#34495e","stroke-miterlimit":"10","stroke-width":"8",d:"M611.8 374.6l-25 54.3 25 37-12.5 63-42.8 74 41.3 43 52-35M176 807l19.6 141L313 1061h118l113-127M332 563l28-5.3 49-9.6 87 63 34 160"}}),i("path",{attrs:{fill:"none",stroke:"#34495e","stroke-miterlimit":"10","stroke-width":"8",d:"M464.5 589l-24.3 57.6-86-30.6 15-60m-9.5 24l95.3 31.6m-73.5 14l-7.7 182"}}),i("path",{attrs:{fill:"none",stroke:"#34495e","stroke-miterlimit":"10","stroke-width":"8",d:"M440.2 807.6L413.5 637l26.7 9.6 89.4 125-40.3 36H373.8L313 753.2 354.4 616m-37-4.4L313 753.2m35.6-377.6s33.2-21.2 50.8-.8m55.6 1.5s38.6-8.2 48 17"}}),i("circle",{attrs:{cx:"377.7",cy:"393.4",r:"5",fill:"#34495e",stroke:"#34495e","stroke-miterlimit":"10","stroke-width":"10"}}),i("circle",{attrs:{cx:"469.6",cy:"398.4",r:"5",fill:"#34495e",stroke:"#34495e","stroke-miterlimit":"10","stroke-width":"10"}})])])]),t._v(" "),i("div",{staticClass:"view"},[i("div",{staticClass:"Hcontainer"},[i("div",{staticClass:"side Vcontainer"},[i("RedFlower"),t._v(" "),i("div",{staticClass:"container"},[i("h1",[t._v("Oedipus: initial success")]),t._v(" "),i("br"),t._v(" "),i("blockquote",[t._v("\n          “But we do rate you first of men, both in the common crises of our lives and face-to-face encounters with the gods” (43)\n        ")])],1),t._v(" "),i("RedFlower")],1),t._v(" "),i("svg",{attrs:{id:"king","data-name":"Layer 7",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1028.4 1226.3"}},[i("title",[t._v("octopusclimb")]),i("path",{attrs:{d:"M536.8 1096.2h43s-30.2-82.3-21.5-84.5 21.5-100 21.5-100l24-176-76-126L634.3 564l37 13 15.2-28-17.5-35 37-32.7 54.5 17.4 13 41.3-37 37 13 30.4 32.6 17.4 16 30.4L732 764l52 24.8 4.5 131.6 26 8.7-54.3 29 2.2-130h-32.8l-30.2 39-41.4 23-28 85-19.6 121.5-4.3 35-63-15z",fill:"none",stroke:"#2C3E52","stroke-miterlimit":"10","stroke-width":"8"}}),i("path",{attrs:{fill:"none",stroke:"#2C3E52","stroke-miterlimit":"10","stroke-width":"8",d:"M573.8 633.2h41L594.3 677l-20.5-43.8zm6 278.5l78.5-21.7m13-313.2l43.5 37.4h48.5l-13.8 62.5-34.7 63.3v32.2l15 55M38.8 1224l67.3-92.7 94-84.8 11-52.2L385 901l54.2-59 61-15 101-68M748 738l102-20 98-33 79-8.5m0 289l-84 41.5-100 30.4-95.3 65.2-36 45.6-117.2 28.3-223-8.8-141.3-74"}}),i("path",{attrs:{d:"M943 1007.4s-39-52.2-45.6-52.2-104.2-14.8-104.2-14.8m-32.4-.2h-119M830 890l80.4-30.4 116.4-15.3m-1024 76l55.5-53 15.2-61 43.4-20.7 19-26.2 74-51.8L230 501l-30.4-32.7 6.5-58.7 114-50 224 52 143.6 87m61 67.4l130 74 50.7 52",fill:"none",stroke:"#2C3E52","stroke-miterlimit":"10","stroke-width":"8"}}),i("path",{attrs:{fill:"none",stroke:"#2C3E52","stroke-miterlimit":"10","stroke-width":"8",d:"M306 537.8l82.7-43.5 93.5-24 204.3 79 50 27.7M106 973.8l98-42.5 54.3-76 106.5 12v-129l82.6-46.3 126.4 46.3 6 35M447.4 692l-7.7-210.7M251.4 175l-32.6-41.5V94.2l32.6-19.4L277.8 90v35.2L251.4 175z"}}),i("path",{attrs:{d:"M165.8 75.5L144.6 110l22.2 15v41l-11 43.4 26 39V290l37 28 11 80.8 32-14.2V329l27 2v42l31-13.6 23-48 65.4 48S382.8 374 391 376l136.8 32 114-9.5 59.5-50 35.2-80.5-19.2-82.4-30.8-60.6h-28.7l13.5 17-13 2.2 28.3 30.6 30.7 89-46 80.4-43 26-107 11L528 340l87 11-72-50-76-106.7-61-19.4-61.5-40-38.7 19.2v-30l.3-33L293 57l-26-30h-19L219 5l-24 22-15 32.5z",fill:"none",stroke:"#2C3E52","stroke-miterlimit":"10","stroke-width":"8"}}),i("path",{attrs:{fill:"none",stroke:"#2C3E52","stroke-miterlimit":"10","stroke-width":"8",d:"M166.8 166.2l37 67.3 44.5 30.4 29.5-49 28-60v41l37 54 78.5 52 106.5 37"}}),i("path",{attrs:{fill:"none",stroke:"#2C3E52","stroke-miterlimit":"10","stroke-width":"8",d:"M218.8 318.3l43.8-15.3 28.3-26 36-48.5"}})])])]),t._v(" "),i("div",{staticClass:"view"},[i("div",{staticClass:"Hcontainer"},[i("div",{staticClass:"side Vcontainer"},[i("RedFlower"),t._v(" "),i("div",{staticClass:"container"},[i("h1",[t._v("Oedipus: downfall")]),t._v(" "),i("br"),t._v(" "),i("blockquote",[t._v("“You pray to the gods? Let me grant your prayers” (245)")]),t._v(" "),i("br"),t._v(" "),i("blockquote",[t._v("“You’re blind to the corruption of your life, to the house you live in, those you live with” (471)")])],1),t._v(" "),i("RedFlower")],1),t._v(" "),i("svg",{attrs:{id:"fall","data-name":"Layer 2",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 815.4 1219.7"}},[i("title",[t._v("octopusfall")]),i("path",{attrs:{fill:"none",stroke:"#2c3e50","stroke-miterlimit":"10","stroke-width":"8",d:"M6.2 1215.7l164.2-363.2 97.8-61 74-110.7L98.5 533l6.6-280.4L222.8 70 366 4.8l152.2 145.6-24 50L640 252.6l-19.6 52.2 30.4 97.8 78.3 65.2L603 522l-65.2 56.7L553 763.5l95.6 43.3 161 409H6z"}}),i("path",{attrs:{fill:"none",stroke:"#2c3e50","stroke-miterlimit":"10","stroke-width":"8",d:"M268.2 791.6L461.7 907 603 1104.7l37 111H481l-100-259-210.8-104.3 97.8-61zm-97.8-215l41.3-211L277 204.8l131-160m-20.2 220.8l20-58.7 60.4-43.8"}}),i("path",{attrs:{d:"M309.5 378.7s-34.8-15.2-41.3-15.2-32.6 47.8-32.6 47.8L289 481l85.7 10.7m43.5-10.7l82.6 23.8 153-4.6",fill:"none",stroke:"#2c3e50","stroke-miterlimit":"10","stroke-width":"8"}}),i("path",{attrs:{id:"blood",fill:"none",stroke:"#e74c3c","stroke-miterlimit":"10","stroke-width":"8",d:"M457.3 254.8l50 67.3L529 440l17.5 84.7-61 100 50 239.2 76.2 32.5 15.2 61"}}),i("path",{attrs:{fill:"none",stroke:"#2c3e50","stroke-miterlimit":"10","stroke-width":"8",d:"M357.3 1080.8l-39 26-63 19.7m-111-82.5L90 1070l-32.7 76M636 354.7l-41.7 35-13 28M440 837.4l-93.5-89.2"}})])])]),t._v(" "),i("div",{staticClass:"view"},[i("div",{staticClass:"Vcontainer"},[i("h1",[t._v("The End")]),t._v(" "),i("RedFlower"),t._v(" "),i("h3",[t._v("Thank you")])],1)])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"Quote"}},[i("blockquote",[t._t("default")],2)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c||e;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"logo"}},[i("div",{attrs:{id:"tower-1"}}),t._v(" "),i("div",{attrs:{id:"tower-2"}}),t._v(" "),i("div",{attrs:{id:"tower-3"}}),t._v(" "),i("div",{attrs:{id:"wall"}}),t._v(" "),i("div",{attrs:{id:"floor"}}),t._v(" "),i("div",{attrs:{id:"cloud"}})])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c||e;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"warp"},[i("div",{staticClass:"bg"},[i("div",{staticClass:"table"},[i("div",{staticClass:"bowl"},[i("div",{staticClass:"cable"},[i("div",{staticClass:"leaf-1"}),t._v(" "),i("div",{staticClass:"leaf-2"}),t._v(" "),i("div",{staticClass:"leaf-3"}),t._v(" "),i("div",{staticClass:"leaf-4"})])])])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"swipe"},[i("div",{staticClass:"main"},[t._t("default")],2),t._v(" "),t.haveBt()?i("div",{staticClass:"mainbt"},[i("div",{staticClass:"bt",on:{click:t.next}},[t._v("\n      Next\n      "),i("i",{staticClass:"fa fa-chevron-right",attrs:{"aria-hidden":"true"}})])]):t._e(),t._v(" "),t.bar?i("ProgressBar",{attrs:{before:t.before,next:t.next}}):t._e()],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("svg",{attrs:{id:"intro","data-name":"Layer 5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1036.4 1255.6"}},[i("title",[t._v("octopusnew")]),i("path",{attrs:{fill:"none",stroke:"#34495e","stroke-miterlimit":"10","stroke-width":"8",d:"M5.4 807l212-60.7v-67.7l100-67 26-89.2-41.3-95.6 3-89.2 39-30.4V191.6l91.6-80 115-21.8 152 39 117 113.2 28.4 69.6-17.8 100L813 542l-45.7 104.3 80.5 39.2 26 56.5-19.5 21.7 67.4 67.4 107.6 27L713 1252H189L5.5 807z"}}),i("path",{attrs:{fill:"none",stroke:"#34495e","stroke-miterlimit":"10","stroke-width":"8",d:"M428.4 399l-25.7 102.4 56.7 14m-194 131.2v182l80.2 67.7 119.5-13 383-197.8"}}),i("path",{attrs:{fill:"none",stroke:"#f1c40f","stroke-miterlimit":"10","stroke-width":"8",d:"M343.3 287.6L465 268l137 45.7 222.4 142.6 6-44.7-163-156.6L487 196.3l-144-4.7v96z"}}),i("path",{attrs:{fill:"none",stroke:"#f1c40f","stroke-miterlimit":"10","stroke-width":"8",d:"M343.3 191.3l11-121.2 27.2 101 17.3-135 25 137L465 18l30.6 163 91.2-134.7 8.8 167.4 84.7-115.2v143l87-99.5-8.7 156.5 71.8-107-21.8 159.2 71.8-115.2-50 176"}}),i("path",{attrs:{fill:"none",stroke:"#34495e","stroke-miterlimit":"10","stroke-width":"8",d:"M611.8 374.6l-25 54.3 25 37-12.5 63-42.8 74 41.3 43 52-35M176 807l19.6 141L313 1061h118l113-127M332 563l28-5.3 49-9.6 87 63 34 160"}}),i("path",{attrs:{fill:"none",stroke:"#34495e","stroke-miterlimit":"10","stroke-width":"8",d:"M464.5 589l-24.3 57.6-86-30.6 15-60m-9.5 24l95.3 31.6m-73.5 14l-7.7 182"}}),i("path",{attrs:{fill:"none",stroke:"#34495e","stroke-miterlimit":"10","stroke-width":"8",d:"M440.2 807.6L413.5 637l26.7 9.6 89.4 125-40.3 36H373.8L313 753.2 354.4 616m-37-4.4L313 753.2m35.6-377.6s33.2-21.2 50.8-.8m55.6 1.5s38.6-8.2 48 17"}}),i("circle",{attrs:{cx:"377.7",cy:"393.4",r:"5",fill:"#34495e",stroke:"#34495e","stroke-miterlimit":"10","stroke-width":"10"}}),i("circle",{attrs:{cx:"469.6",cy:"398.4",r:"5",fill:"#34495e",stroke:"#34495e","stroke-miterlimit":"10","stroke-width":"10"}})])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"flip-container",attrs:{ontouchstart:"this.classList.toggle('hover');"}},[i("div",{staticClass:"flipper"},[i("div",{staticClass:"front"},[t._t("front",[i("h1",[t._v("hi")])])],2),t._v(" "),i("div",{staticClass:"back"},[t._t("back",[i("h1",[t._v("this is the back")])])],2)])])},staticRenderFns:[]}},,,,,function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(11),s=i.n(a),n=i(39),r=i.n(n),l=i(33),o=i(34),c=i(37),d=(i.n(c),i(38)),v=(i.n(d),i(36)),u=(i.n(v),i(35));i.n(u);new s.a({el:"#app",
router:l.a,store:o.a,template:"<App/>",components:{App:r.a}})}],[139]);
//# sourceMappingURL=app.7c94b0138e9ee13da5bb.js.map