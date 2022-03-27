(function(){"use strict";var e={1507:function(e,t,n){var o=n(9242),r=n(3396);const i={class:"container"},l=(0,r._)("h2",{class:"form-add__title title"},"Новый блок",-1),c={class:"form-add__input-wrapper"},a={class:"form-add__select-wrapper"},s={class:"error",ref:"error"},u={class:"form-add__button-wrapper"},d={class:"form-cv card"},p={ref:"cv"},f={key:0,class:"form-cv__title title"},m={class:"container"},v={class:"download-button__wrapper"};function h(e,t,n,h,g,b){const y=(0,r.up)("AppSelect"),A=(0,r.up)("AppTextArea"),k=(0,r.up)("AppFileInput"),w=(0,r.up)("AppButton"),C=(0,r.up)("CvItem");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",i,[(0,r._)("form",{class:"form-add card",onSubmit:t[3]||(t[3]=(0,o.iM)(((...e)=>b.addBlock&&b.addBlock(...e)),["prevent"]))},[l,(0,r._)("div",c,[(0,r._)("div",a,[(0,r.Wm)(y,{options:g.types,modelValue:g.curBlockType,"onUpdate:modelValue":t[0]||(t[0]=e=>g.curBlockType=e)},null,8,["options","modelValue"])]),"Фото"!==g.curBlockType?((0,r.wg)(),(0,r.j4)(A,{key:0,modelValue:g.curContent,"onUpdate:modelValue":t[1]||(t[1]=e=>g.curContent=e),placeholder:"Введите текст блока",onOnEnter:b.addBlock},null,8,["modelValue","onOnEnter"])):((0,r.wg)(),(0,r.j4)(k,{key:1,"file-name":g.fileName,onOnChange:t[2]||(t[2]=e=>b.onFileSelected(e))},null,8,["file-name"])),(0,r.wy)((0,r._)("span",s,"Поле не должно быть пустым",512),[[o.F8,g.isEmpty]])]),(0,r._)("div",u,[(0,r.Wm)(w,{type:"submit",text:"Добавить"})])],32),(0,r._)("div",d,[(0,r._)("div",p,[g.blocks.length?((0,r.wg)(!0),(0,r.iD)(r.HY,{key:1},(0,r.Ko)(g.blocks,((e,n)=>((0,r.wg)(),(0,r.j4)(C,{key:e.id,item:e,index:n,onDelete:t[4]||(t[4]=e=>b.deleteBlock(e)),onToDown:t[5]||(t[5]=e=>b.itemDown(e)),onToUp:t[6]||(t[6]=e=>b.itemUp(e))},null,8,["item","index"])))),128)):((0,r.wg)(),(0,r.iD)("h2",f,"Ваше резюме"))],512)])]),(0,r._)("div",m,[(0,r._)("div",v,[(0,r.Wm)(w,{text:"Скачать PDF",onOnClick:b.downloadPDF},null,8,["onOnClick"])])])],64)}const g=["value","placeholder"];function b(e,t,n,i,l,c){return(0,r.wg)(),(0,r.iD)("textarea",{rows:"1",ref:"textarea",value:n.modelValue,placeholder:n.placeholder,onInput:t[0]||(t[0]=(...e)=>c.onInput&&c.onInput(...e)),onKeypress:t[1]||(t[1]=(0,o.D2)((0,o.iM)(((...e)=>c.onEnter&&c.onEnter(...e)),["prevent"]),["enter"]))},null,40,g)}var y={name:"AppTextArea",emits:["update:modelValue","onEnter"],props:{modelValue:{type:String,require:!0},placeholder:{type:String,require:!1,default:""}},computed:{inputValue(){return this.modelValue}},methods:{onInput(e){let t=Math.ceil(e.target.value.length/28);e.target.style.height=22*(t||1)+2+"px",e.target.style.height=e.target.scrollHeight+2+"px",this.$emit("update:modelValue",e.target.value)},onEnter(){this.$emit("onEnter")}},watch:{inputValue(e){e.length||(this.$refs.textarea.style.height="24px")}}},A=n(89);const k=(0,A.Z)(y,[["render",b],["__scopeId","data-v-32d975fa"]]);var w=k,C=n(7139);const _=["type"];function O(e,t,n,o,i,l){return(0,r.wg)(),(0,r.iD)("button",{type:n.type,onClick:t[0]||(t[0]=t=>e.$emit("onClick"))},(0,C.zw)(n.text),9,_)}var x={name:"AppButton",emits:["onClick"],props:{text:{type:String,require:!1,default:"Button"},type:{type:String,require:!1,default:"button"}}};const I=(0,A.Z)(x,[["render",O],["__scopeId","data-v-bfd8222e"]]);var S=I;const D={class:"select__selected"},B=["onClick"];function E(e,t,n,o,i,l){return(0,r.wg)(),(0,r.iD)("div",{class:"select",onClick:t[0]||(t[0]=(...e)=>l.toggleList&&l.toggleList(...e))},[(0,r._)("div",D,(0,C.zw)(i.currentOption),1),(0,r._)("div",{class:(0,C.C_)(["select__list",{open:i.isOpen}])},[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.options,(e=>((0,r.wg)(),(0,r.iD)("div",{class:"select__item",key:e,onClick:t=>l.changeCurrent(e)},(0,C.zw)(e),9,B)))),128))],2)])}var T={name:"AppSelect",emits:["update:modelValue"],props:{options:{type:Array,require:!1,default:["Example 1","Example 2","Example 3"]},modelValue:String},data(){return{currentOption:this.options[0],isOpen:!1}},methods:{changeCurrent(e){this.currentOption=e},toggleList(){const e=()=>{this.isOpen&&document.body.removeEventListener("click",e),this.isOpen=!this.isOpen};this.isOpen||document.body.addEventListener("click",e)},closeList(){this.isOpen&&(this.isOpen=!1)}},watch:{currentOption:{handler(e){this.$emit("update:modelValue",e)},immediate:!0}}};const j=(0,A.Z)(T,[["render",E],["__scopeId","data-v-0274323a"]]);var V=j;function U(e,t,n,o,i,l){return(0,r.wg)(),(0,r.j4)((0,r.LL)(n.item.component),{content:n.item.content},{default:(0,r.w5)((()=>[(0,r._)("button",{"data-html2canvas-ignore":"",class:"close",onClick:t[0]||(t[0]=(...e)=>l.toggleContextMenu&&l.toggleContextMenu(...e))}," ●●● "),(0,r._)("div",{class:(0,C.C_)(["context-menu",{open:i.contextOpen}])},[(0,r._)("span",{onClick:t[1]||(t[1]=e=>l.deleteItem(n.item.id))},"Удалить"),(0,r._)("span",{onClick:t[2]||(t[2]=t=>!!n.index&&e.$emit("toUp",n.index))},"Вверх"),(0,r._)("span",{onClick:t[3]||(t[3]=t=>e.$emit("toDown",n.index))},"Вниз")],2)])),_:1},8,["content"])}function P(e,t,n,o,i,l){return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("h2",null,(0,C.zw)(n.content),1),(0,r.WI)(e.$slots,"default",{},void 0,!0)])}var F={name:"CvTitle",props:{content:{type:String,require:!0}}};const N=(0,A.Z)(F,[["render",P],["__scopeId","data-v-73168eac"]]);var L=N;function M(e,t,n,o,i,l){return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("h3",null,(0,C.zw)(n.content),1),(0,r.WI)(e.$slots,"default",{},void 0,!0)])}var z={name:"CvSubtitle",props:{content:{type:String,require:!0}}};const q=(0,A.Z)(z,[["render",M],["__scopeId","data-v-77dbf173"]]);var G=q;function H(e,t,n,o,i,l){return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("div",{class:"img",style:(0,C.j5)({backgroundImage:`url(${n.content})`})},null,4),(0,r.WI)(e.$slots,"default",{},void 0,!0)])}var $={name:"CvPhoto",props:{content:{type:String,require:!0}}};const R=(0,A.Z)($,[["render",H],["__scopeId","data-v-17bdb89b"]]);var J=R;function W(e,t,n,o,i,l){return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("p",null,(0,C.zw)(n.content),1),(0,r.WI)(e.$slots,"default",{},void 0,!0)])}var Z={name:"CvText",props:{content:{type:String,require:!0}}};const K=(0,A.Z)(Z,[["render",W],["__scopeId","data-v-39aff265"]]);var Q=K,Y={name:"CvItem",emits:["delete","toDown","toUp"],props:{item:{type:Object,require:!0},index:{type:Number,require:!0}},components:{CvTitle:L,CvSubtitle:G,CvPhoto:J,CvText:Q},data(){return{contextOpen:!1}},methods:{toggleContextMenu(){const e=()=>{this.contextOpen&&document.body.removeEventListener("click",e),this.contextOpen=!this.contextOpen};this.contextOpen||document.body.addEventListener("click",e)},deleteItem(e){this.$emit("delete",e)},toDown(e){this.$emit("toDown",e)}}};const X=(0,A.Z)(Y,[["render",U],["__scopeId","data-v-6fdb6955"]]);var ee=X,te=n(9841);const ne=e=>((0,r.dD)("data-v-19f26e1e"),e=e(),(0,r.Cn)(),e),oe=ne((()=>(0,r._)("label",{for:"file"},[(0,r._)("img",{src:te,alt:"download-icon",width:"32"}),(0,r._)("span",null,"Загрузить фото")],-1))),re={key:0};function ie(e,t,n,o,i,l){return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("input",{type:"file",id:"file",onChange:t[0]||(t[0]=t=>e.$emit("onChange",t))},null,32),oe,n.fileName?((0,r.wg)(),(0,r.iD)("small",re,(0,C.zw)(n.fileName),1)):(0,r.kq)("",!0)])}var le={name:"AppFileInput",props:{fileName:{type:String,require:!1,default:""}}};const ce=(0,A.Z)(le,[["render",ie],["__scopeId","data-v-19f26e1e"]]);var ae=ce,se=n(1164),ue=n(2269),de=n.n(ue),pe={name:"App",components:{AppTextArea:w,AppButton:S,AppSelect:V,CvItem:ee,AppFileInput:ae},mounted(){this.blocks=JSON.parse(localStorage.getItem("blocks"))||[]},data(){return{types:["Заголовок","Подзаголовок","Фото","Текст"],curContent:"",fileName:"",curBlockType:"",blocks:[],isEmpty:!1}},computed:{curBlockComponent(){switch(this.curBlockType){case"":return"";case"Заголовок":return"CvTitle";case"Подзаголовок":return"CvSubtitle";case"Фото":return"CvPhoto";case"Текст":return"CvText"}}},methods:{addBlock(){this.curContent.length?(this.isEmpty=!1,this.blocks.push({id:Math.random().toString(32).substring(2,6),component:this.curBlockComponent,content:this.curContent}),localStorage.setItem("blocks",JSON.stringify(this.blocks)),this.curContent="",this.fileName=""):(this.isEmpty=!0,this.$refs.error.style.animation="1s error",setTimeout((()=>{this.$refs.error.style.animation="none"}),500))},deleteBlock(e){this.blocks=this.blocks.filter((t=>t.id!==e)),localStorage.setItem("blocks",JSON.stringify(this.blocks))},itemDown(e){if(e!==this.blocks.length-1){let t=this.blocks.splice(e,1);const n=[...this.blocks];this.blocks=[...n.slice(0,e+1),...t,...n.slice(e+1)]}localStorage.setItem("blocks",JSON.stringify(this.blocks))},itemUp(e){let t=this.blocks.splice(e,1);const n=[...this.blocks];this.blocks=[...n.slice(0,e-1),...t,...n.slice(e-1)],localStorage.setItem("blocks",JSON.stringify(this.blocks))},downloadPDF(){const e=new se.kH("p","px","a4"),t=this.$refs.cv,n={allowTaint:!0,backgroundColor:"#ffffff",scale:2,windowWidth:1920};de()(t,n).then((t=>{const n=t.toDataURL("image/png");e.addImage(n,"PNG",20,20,.35*t.width,.35*t.height),e.save("Cv.pdf")}))},onFileSelected(e){const t=e.target.files[0];this.fileName=t.name;const n=new FileReader;n.readAsDataURL(t),n.onload=()=>{this.curContent=n.result}}}};const fe=(0,A.Z)(pe,[["render",h]]);var me=fe;const ve=(0,o.ri)(me);ve.mount("#app")},9841:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAHwSURBVFiF7ZdPSxRxGMc/z7M6G7rnDsUQSEbp0m4FTiF06Bx4qkNrEEUG0RJ4id5A0CFfgIdO+g7sNaSd3AhZMIKUtUOHhRolXdzHwxhqg/ibYdy59D0Nzzy/7/c7z+/fPMI+bHW1yKD3DOQBUAYGyRabwBdM5tn6MyvDw9sAAmDr6+cp2AegkrHoMbBldvWu+H5Loi8vLvVO/JCJzZ2bGpW91+IAUmXgzFMFqfVe/C+spsBIbvpCuQ8oJR1n37/SnX0LW2EUGCihU6+QCxeTUpU06QgAmo0DcYiem41UVKkMmGPs1Axkif8GcjcgtrHmtH5230zDzx9urGfPUXj9zinVuQIycs01FblSdc51NqATk8itOyeLj91GJ9xPd/c1IILee4JcHz8+pRKg96dA3GmTLUJRtPYcqQbxV6M30Id1KBQSUSbfBaro5Isj8yyXyuijl4nFIcEuiGFnm+77mcjT42nwiqlo0hvICLkfRH3/BuxbE2ssQaeTrVJ/P1IJkKHLR8KxCpyKOECng33+FAvnPgUxA1IJwPOyV/I85OpYLCy2sfabFP+FGeGXAis5iYOxopjM5WYAmd9vzbxFEPc7NBPYMu0wONScdhd6Z+KgOVUA8f0W7TDApI6xCIQnMKRBiNhHTOq0w0B8vwWwBzlDiw1BDOm3AAAAAElFTkSuQmCC"}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,i){if(!o){var l=1/0;for(u=0;u<e.length;u++){o=e[u][0],r=e[u][1],i=e[u][2];for(var c=!0,a=0;a<o.length;a++)(!1&i||l>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[a])}))?o.splice(a--,1):(c=!1,i<l&&(l=i));if(c){e.splice(u--,1);var s=r();void 0!==s&&(t=s)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[o,r,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(o,r){if(1&r&&(o=this(o)),8&r)return o;if("object"===typeof o&&o){if(4&r&&o.__esModule)return o;if(16&r&&"function"===typeof o.then)return o}var i=Object.create(null);n.r(i);var l={};e=e||[null,t({}),t([]),t(t)];for(var c=2&r&&o;"object"==typeof c&&!~e.indexOf(c);c=t(c))Object.getOwnPropertyNames(c).forEach((function(e){l[e]=function(){return o[e]}}));return l["default"]=function(){return o},n.d(i,l),i}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{617:"945523da",902:"44177c9a"}[e]+".js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="VueCvGenerator:";n.l=function(o,r,i,l){if(e[o])e[o].push(r);else{var c,a;if(void 0!==i)for(var s=document.getElementsByTagName("script"),u=0;u<s.length;u++){var d=s[u];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+i){c=d;break}}c||(a=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.setAttribute("data-webpack",t+i),c.src=o),e[o]=[r];var p=function(t,n){c.onerror=c.onload=null,clearTimeout(f);var r=e[o];if(delete e[o],c.parentNode&&c.parentNode.removeChild(c),r&&r.forEach((function(e){return e(n)})),t)return t(n)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=p.bind(null,c.onerror),c.onload=p.bind(null,c.onload),a&&document.head.appendChild(c)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/VueCvGenerator/"}(),function(){var e={143:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=i);var l=n.p+n.u(t),c=new Error,a=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),l=o&&o.target&&o.target.src;c.message="Loading chunk "+t+" failed.\n("+i+": "+l+")",c.name="ChunkLoadError",c.type=i,c.request=l,r[1](c)}};n.l(l,a,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,i,l=o[0],c=o[1],a=o[2],s=0;if(l.some((function(t){return 0!==e[t]}))){for(r in c)n.o(c,r)&&(n.m[r]=c[r]);if(a)var u=a(n)}for(t&&t(o);s<l.length;s++)i=l[s],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(u)},o=self["webpackChunkVueCvGenerator"]=self["webpackChunkVueCvGenerator"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(1507)}));o=n.O(o)})();
//# sourceMappingURL=app.5484b3f2.js.map