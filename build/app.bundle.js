!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";function o(e,t,n,o){var r={top:0,right:10,bottom:0,left:0};c3.generate({bindto:e,padding:r,data:{x:"x",columns:[["x",2e3,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018],o],type:"line",labels:{format:{}}},legend:{show:!1},point:{show:!0,r:function(e){return e.x==t?2.5:0}},color:{pattern:["#3580A3"]},axis:{y:{show:!1,max:n,min:0,padding:{bottom:0,top:0},tick:{count:6,values:[0,500,1e3,1500,2e3],format:d3.format(",.1f")}},x:{show:!1,padding:{right:0,left:0},tick:{count:4,values:[2e3,2006,2012,2018],multiline:!1}}},grid:{focus:{show:!1}},tooltip:{contents:function(e,t,n,o){return'<div class="chart-tooltip blue4"><span class="tooltip-label">'+e[0].x+':</span><span class="tooltip-value">'+n(e[0].value)+"</span></div>"}}})}var r=n(1);(0,function(e){return e&&e.__esModule?e:{default:e}}(r).default)({}),$.urlParam=function(e){var t=new RegExp("[?&]"+e+"=([^&#]*)").exec(window.location.href);return null!=t?t[1]||0:null};var i=$.urlParam("chart");null!=i&&($(".slide").hide(),$("#"+i).show()),"all"==i&&$(".slide").show(),function(){var e={top:20,right:60,bottom:20,left:60};c3.generate({bindto:"#chartTrend",padding:e,data:{x:"x",columns:[["x",2e3,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018],["Rate",1173.755547,1082.244291,1097.98798,1201.689795,1261.767782,1437.152931,1671.520994,1458.945415,1253.168807,1116.653866,1063.051195,945.6703612,1036.365731,1021.105508,1008.81896,1084.803778,1104.650055,1077.504096,null]],axes:{Rate:"y",Overall:"y2"},type:"line",labels:{format:{}}},legend:{show:!1},point:{show:!0,r:function(e){return 2017==e.x?6:2.5}},color:{pattern:["#3580A3","#333333"]},axis:{y:{max:2e3,min:0,padding:{bottom:0,top:0},tick:{count:6,values:[0,500,1e3,1500,2e3],format:d3.format(",.1f")}},y2:{show:!1,max:2e4,min:0,padding:{bottom:0,top:0},tick:{count:6,values:[0,5e3,1e4,15e3,2e4],format:d3.format(",.1f")}},x:{padding:{right:0,left:0},tick:{count:4,values:[2e3,2006,2012,2018],multiline:!1}}},grid:{focus:{show:!1}},regions:[{axis:"x",start:2011,end:2016,class:"hottest"}],tooltip:{contents:function(e,t,n,o){return'<div class="chart-tooltip gray3"><span class="tooltip-label">'+e[0].x+'</span></div><div class="chart-tooltip blue4"><span class="tooltip-label">Rate:</span><span class="tooltip-value">'+n(e[0].value)+"</span></div>"}}})}(),o("#violent",2017,2e3,["Rate",1173.755547,1082.244291,1097.98798,1201.689795,1261.767782,1437.152931,1671.520994,1458.945415,1253.168807,1116.653866,1063.051195,945.6703612,1036.365731,1021.105508,1008.81896,1084.803778,1104.650055,1077.504096,null]),o("#overall",2016,2e4,["Rate",19245.04336,18978.62705,18188.39822,16800.89983,16035.30335,16765.0647,17998.04109,17192.67048,15773.16337,14428.57475,14352.36736,13524.27212,13888.19082,13601.60424,12756.24707,13377.14567,11515.83991,null,null]),o("#arson",2016,100,["Rate",70.04375121,67.98345387,69.50614058,65.39452517,63.80753138,57.51706813,63.40696446,49.48198546,40.49921693,35.94601374,31.10476818,36.09428859,30.62763083,30.67805995,28.69140449,28.12005323,20.71665333,null,null]),o("#mtv",2017,2e3,["Rate",1018.77068,1074.922996,917.951398,940.6348501,970.7112971,1017.252541,956.7750084,827.2769445,625.1746208,479.969795,492.7099833,463.0381594,488.4714456,396.8194584,378.5806508,421.8007985,478.1498838,568.6364156,null]),o("#homicide",2017,50,["Rate",13.06786403,11.24341737,12.28116018,12.03259263,14.12133891,12.1224314,14.69185762,12.11277769,10.25296631,4.913483893,10.19399965,9.539204843,10.99453415,9.976604862,7.780719862,12.1207126,8.810530727,9.763020536,null]),o("#rape",2017,200,["Rate",116.0426326,106.4202528,100.6009929,104.6312403,107.7405858,110.649427,122.9476506,122.4163703,101.2480423,107.3208324,134.874457,96.42331382,116.2279324,99.26721837,100.4199157,108.1167564,111.9175525,122.1568179,null]),o("#assault",2016,1e3,["Rate",526.6349205,452.8743927,508.7535929,503.7994219,541.3179916,637.3303827,739.7479187,664.656461,611.8457646,562.9818124,508.1316751,425.6547891,454.7025193,444.7071617,442.2852947,503.4944014,544.109803,null]),o("#burglary",2017,2e3,["Rate",1193.357343,1074.922996,1166.448916,1179.978812,1252.876569,1431.994449,1510.683816,1593.216844,1436.184256,1231.991435,1260.396573,1318.988432,1252.853343,1153.295522,1005.658042,864.4492227,817.474378,895.5785423,null]),o("#larceny",2017,4e3,["Rate",3898.143841,3812.564388,3856.545597,3231.797434,2810.40795,3361.524434,3397.169884,3415.54559,3287.613648,2946.0215,2987.103284,3195.375806,3351.238718,3315.724626,3303.401877,2940.000048,2905.57016,3132.977102,null]),o("#robbery",2017,1e3,["Rate",518.0101302,511.7062278,476.3522341,581.2265397,598.5878661,677.0506898,794.133567,659.7598062,529.8220341,441.4377371,409.8510631,414.0530534,454.4407447,467.1545226,458.3330294,461.0719073,439.812169,422.6673525,null]),d3.json("./data/rates.json",function(e,t){function n(e,t,n){for(var o=d3.scale.linear().domain([0,30]).range(["#D1E6E1","#0D4673"]),r=0;r<n.length;r++)if(e.properties.neighbor_1==n[r].neighbor_1)return o(n[r].rate)}function o(e,t,n){for(var o="",r=0,i=d3.scale.linear().domain([0,30]).range(["#D1E6E1","#0D4673"]),a=0;a<n.length;a++)e.properties.neighbor_1==n[a].neighbor_1&&(o=i(n[a].rate),r=n[a].rate);return"<div>"+e.properties.Name+"</div><div><span class='legendary' style='background-color:"+o+"'>"+d3.format(",.1f")(r)+"</span> per 10,000 people</div>"}var r=t.rates,i=$("#country svg");$(window).on("resize",function(){var e=i.parent().width();i.attr("width",e),i.attr("height",e/1.6)}),function(e,t,r,i,a,l,s,c,u){function d(e){var t;if(e&&p!==e){var n=v.centroid(e);n[0],n[1],t=1,p=e}else t=1,p=null;y.selectAll("path").classed("faded",!1).classed("active",p&&function(e){return e===p}),y.transition().duration(750).style("stroke-width",1.5/t+"px")}if("country"==l)var p,f=800,h=500,m=d3.geo.albersUsa().scale(1e3).translate([400,260]);else if("us"==l)var p,f=800,h=500,m=d3.geo.albersUsa().scale(2e3).translate([330,430]);else if("mn"==l)var p,f=350,h=500,m=d3.geo.albersUsa().scale(5037).translate([50,970]);else if("metro"==l)var m=d3.geo.mercator().scale([8e4]).center([-93.070335,44.930977]);var v=d3.geo.path().projection(m),g=d3.select(e+" svg").attr("width",f).attr("height",h);g.append("rect").attr("class","background").attr("width",f).attr("height",h);var y=g.append("g");d3.json("shapefiles/"+i,function(e,t){d3.json("shapefiles/us_states_topo.json",function(e,r){y.append("g").attr("class","states").selectAll("path").data(t.features).enter().append("path").attr("d",v).attr("id",function(e){return e.properties.Name.replace(new RegExp(" ","g"),"-")}).style("fill",function(e){return n(e,a,s)}).on("mousedown",function(e,t){}).style("stroke-width",".5px").style("stroke","#fff").call(d3.helper.tooltip(function(e,t){return o(e,a,s)})),y.append("path").attr("id","state-borders").attr("d",v)})}),d3.behavior.zoom().on("zoom",function(){y.attr("transform","translate("+d3.event.translate.join(",")+")scale("+d3.event.scale+")"),y.selectAll("circle").attr("d",v.projection(m)),y.selectAll("path").attr("d",v.projection(m))}),$(".zoom").click(function(){d(),$("#filter input").val(""),$("#districtName").html("Midwest"),$(".district").removeClass("selected"),$(".card, .card div").show()}),d3.helper={},d3.helper.tooltip=function(e){return function(t){var n,o=d3.select("body").node();t.on("mouseover",function(t,r){d3.select("body").selectAll("div.tooltip").remove(),n=d3.select("body").append("div").attr("class","tooltip");var i=d3.mouse(o);n.style("left",i[0]+10+"px").style("top",i[1]-15+"px").style("position","absolute").style("z-index",1001),e(t,r)}).on("mousemove",function(t,r){var i=d3.mouse(o);n.style("left",i[0]+10+"px").style("top",i[1]-15+"px");var a=e(t,r)||"";n.html(a)}).on("mouseout",function(e,t){n.remove()})}}}("#map",0,0,"minneapolis_neighborhoods.json","state","metro",r);var a=i.parent().width();i.attr("width",a),i.attr("height",a/1.6)}),d3.json("shapefiles/minneapolis_neighborhoods.json",function(e,t){d3.json("data/incidents.geojson",function(e,n){mapboxgl.accessToken="pk.eyJ1Ijoic2hhZG93ZmxhcmUiLCJhIjoiS3pwY1JTMCJ9.pTSXx_LFgR3XBpCNNxWPKA";var o=new mapboxgl.Map({container:"mapSearch",style:"mapbox://styles/shadowflare/ciqzo0bu20004bknkbrhrm6wf",center:[-93.264313,44.973269],zoom:10,minZoom:10,hash:!1});o.addControl(new mapboxgl.NavigationControl),o.scrollZoom.disable(),o.doubleClickZoom.disable(),o.on("load",function(){o.addSource("nb",{type:"geojson",data:t}),o.addLayer({id:"nb-layer",interactive:!0,source:"nb",layout:{},type:"fill",paint:{"fill-antialias":!0,"fill-opacity":.7,"fill-color":"#888888","fill-outline-color":"rgba(0, 0, 0, 1)"}},"building"),o.addSource("incidents",{type:"geojson",data:n})})})}),function(e){d3.json("data/time.json",function(t,n){var o=n.time;d3.select(e).selectAll(".row").data(o).enter().append("div").attr("class","row").on("click",function(e){}).html(function(e){var t=[];t[0]=e.h0,t[1]=e.h1,t[2]=e.h2,t[3]=e.h3,t[4]=e.h4,t[5]=e.h5,t[6]=e.h6,t[7]=e.h7,t[8]=e.h8,t[9]=e.h9,t[10]=e.h10,t[11]=e.h11,t[12]=e.h12,t[13]=e.h13,t[14]=e.h14,t[15]=e.h15,t[16]=e.h16,t[17]=e.h17,t[18]=e.h18,t[19]=e.h19,t[20]=e.h20,t[21]=e.h21,t[22]=e.h22,t[23]=e.h23;for(var n=d3.scale.linear().domain([0,2500]).range(["#D1E6E1","#0D4673"]),o="",r="",i=0;i<24;i++)r=3==i||7==i||11==i||15==i||19==i?"divide":"",o+="<div class='time "+r+"' style='background-color:"+n(t[i])+"'></div>";return"<div class='type'>"+e.community+"</div>"+o})})}("#chartTime")},function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n(2),a=function(e){return e&&e.__esModule?e:{default:e}}(i),l=function(){function e(t){o(this,e),this.options=t||{},this.options.pym=void 0===this.options.pym||this.options.pym,this.options.useView=void 0===this.options.useView||this.options.useView,this.options.views=this.options.views||{develop:/localhost.*|127\.0\.0\.1.*/i,staging:/staging/i},this.parseQuery(),this.setView(),this.options.pym&&(this.pym=_.isUndefined(window.pym)?void 0:new pym.Child({polling:500}))}return r(e,[{key:"setView",value:function(){if(this.options.useView){var e=void 0;if(_.find(this.options.views,function(t,n){return e=n,window.location.href.match(t)?n:void 0}),e){var t=document.createElement("div"),n=document.getElementsByTagName("body")[0];t.className="site-view site-view-"+e,n.insertBefore(t,n.childNodes[0])}}}},{key:"parseQuery",value:function(){this.query=a.default.parse(document.location.search),this.query.pym&&"true"===this.query.pym&&(this.options.pym=!0)}},{key:"deepClone",value:function(e){return JSON.parse(JSON.stringify(e))}},{key:"isEmbedded",value:function(){if(!_.isUndefined(this.embedded))return this.embedded;try{this.embedded=window.self!==window.top}catch(e){this.embedded=!0}return this.embedded}},{key:"hasLocalStorage",value:function(){if(!_.isUndefined(this.localStorage))return this.localStorage;try{window.localStorage.setItem("test","test"),window.localStorage.removeItem("test"),this.localStorage=!0}catch(e){this.localStorage=!1}return this.localStorage}},{key:"hasGeolocate",value:function(){return window.navigator&&"geolocation"in window.navigator}},{key:"geolocate",value:function(e){this.hasGeolocate()?window.navigator.geolocation.getCurrentPosition(function(t){e(null,{lat:t.coords.latitude,lng:t.coords.longitude})},function(){e("Unable to find your position.")}):e("Geolocation not available")}},{key:"goTo",value:function(e){var t=_.isElement(e)?e:e[0]&&_.isElement(e[0])?e[0]:document.getElementById(e);t&&(this.isEmbedded()&&this.pym?this.pym.scrollParentToChildEl(t):t.scrollIntoView({behavior:"smooth"}))}},{key:"gaPageUpdate",value:function(e){e=e||document.location.pathname+document.location.search+document.location.hash,window.ga&&(window.ga("set","page",e),window.ga("send","pageview"))}}]),e}();t.default=function(e){return new l(e)}},function(e,t,n){"use strict";function o(e){switch(e.arrayFormat){case"index":return function(t,n,o){return null===n?[i(t,e),"[",o,"]"].join(""):[i(t,e),"[",i(o,e),"]=",i(n,e)].join("")};case"bracket":return function(t,n){return null===n?i(t,e):[i(t,e),"[]=",i(n,e)].join("")};default:return function(t,n){return null===n?i(t,e):[i(t,e),"=",i(n,e)].join("")}}}function r(e){var t;switch(e.arrayFormat){case"index":return function(e,n,o){if(t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),!t)return void(o[e]=n);void 0===o[e]&&(o[e]={}),o[e][t[1]]=n};case"bracket":return function(e,n,o){return t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0===o[e]?void(o[e]=[n]):void(o[e]=[].concat(o[e],n)):void(o[e]=n)};default:return function(e,t,n){if(void 0===n[e])return void(n[e]=t);n[e]=[].concat(n[e],t)}}}function i(e,t){return t.encode?t.strict?l(e):encodeURIComponent(e):e}function a(e){return Array.isArray(e)?e.sort():"object"==typeof e?a(Object.keys(e)).sort(function(e,t){return Number(e)-Number(t)}).map(function(t){return e[t]}):e}var l=n(3),s=n(4);t.extract=function(e){return e.split("?")[1]||""},t.parse=function(e,t){t=s({arrayFormat:"none"},t);var n=r(t),o=Object.create(null);return"string"!=typeof e?o:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach(function(e){var t=e.replace(/\+/g," ").split("="),r=t.shift(),i=t.length>0?t.join("="):void 0;i=void 0===i?null:decodeURIComponent(i),n(decodeURIComponent(r),i,o)}),Object.keys(o).sort().reduce(function(e,t){var n=o[t];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?e[t]=a(n):e[t]=n,e},Object.create(null))):o},t.stringify=function(e,t){t=s({encode:!0,strict:!0,arrayFormat:"none"},t);var n=o(t);return e?Object.keys(e).sort().map(function(o){var r=e[o];if(void 0===r)return"";if(null===r)return i(o,t);if(Array.isArray(r)){var a=[];return r.slice().forEach(function(e){void 0!==e&&a.push(n(o,e,a.length))}),a.join("&")}return i(o,t)+"="+i(r,t)}).filter(function(e){return e.length>0}).join("&"):""}},function(e,t,n){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}},function(e,t,n){"use strict";function o(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var r=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,l,s=o(e),c=1;c<arguments.length;c++){n=Object(arguments[c]);for(var u in n)i.call(n,u)&&(s[u]=n[u]);if(r){l=r(n);for(var d=0;d<l.length;d++)a.call(n,l[d])&&(s[l[d]]=n[l[d]])}}return s}}]);
//# sourceMappingURL=app.bundle.js.map