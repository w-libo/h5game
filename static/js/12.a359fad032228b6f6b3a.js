webpackJsonp([12],{UQy0:function(e,t){},mrsp:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={name:"register",data:function(){return{bg:s("Npve"),selected:"",nuserNamer:"",psowed:"",psowedTwo:"",show:!1,downIcon:!0,fouIco:!0,isSelect:null}},components:{tabs:s("2rxR").a},methods:{registerBtn:function(){return""===this.nuserNamer?(document.getElementById("userYhm").setAttribute("style","border: 1px solid red;"),!1):(document.getElementById("userYhm").setAttribute("style","border: 1px solid #4d2e2a;"),""===this.psowed?(document.getElementById("userPsd").setAttribute("style","border: 1px solid red;"),!1):(document.getElementById("userPsd").setAttribute("style","border: 1px solid #4d2e2a;"),""===this.psowedTwo||this.psowed!==this.psowedTwo?(document.getElementById("userPsdTwo").setAttribute("style","border: 1px solid red;"),!1):(document.getElementById("userPsdTwo").setAttribute("style","border: 1px solid #4d2e2a;"),null===this.isSelect?(this.isSelect=!1,!1):void this.$router.push({path:"/"}))))},isIcoBtn:function(){this.show=!0,this.downIcon=!this.downIcon,this.fouIco=!0,this.isSelect=!0},isIcoBtnFase:function(){this.show=!1,this.downIcon=!0,this.fouIco=!this.fouIco,this.isSelect=!0}}},i={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{style:{backgroundImage:"url("+e.bg+")"},attrs:{id:"register"}},[o("ul",{staticClass:"registerBox"},[o("router-link",{attrs:{to:"/register"}},[o("li",{staticClass:"registerTxt"},[e._v("注册")])]),e._v(" "),o("router-link",{attrs:{to:"/login"}},[o("li",{staticClass:"loginTxt"},[e._v("登录")])])],1),e._v(" "),o("form",{staticClass:"formRegister",attrs:{action:""}},[o("div",{staticClass:"neiGit"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.nuserNamer,expression:"nuserNamer"}],staticClass:"icoUser",attrs:{type:"text",id:"userYhm",placeholder:"用户名"},domProps:{value:e.nuserNamer},on:{input:function(t){t.target.composing||(e.nuserNamer=t.target.value)}}})]),e._v(" "),o("div",{staticClass:"neiGit"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.psowed,expression:"psowed"}],staticClass:"icoPswod",attrs:{type:"password",id:"userPsd",placeholder:"密码"},domProps:{value:e.psowed},on:{input:function(t){t.target.composing||(e.psowed=t.target.value)}}})]),e._v(" "),o("div",{staticClass:"neiGit"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.psowedTwo,expression:"psowedTwo"}],staticClass:"icoPswodTwo",attrs:{type:"password",id:"userPsdTwo",placeholder:"确认密码"},domProps:{value:e.psowedTwo},on:{input:function(t){t.target.composing||(e.psowedTwo=t.target.value)}}})]),e._v(" "),o("div",{staticClass:"dailiBootm"},[e.show?o("div",{staticClass:"dailiRight"},[e._v("代理返利 "),e._m(0),e._v("‰")]):e._e(),e._v(" "),o("div",{staticClass:"dailiLeft"},[e._v("\n          是否为代理  \n          "),o("i",{directives:[{name:"show",rawName:"v-show",value:e.downIcon,expression:"downIcon"}],staticClass:"isIco",class:{errorRed:!1===e.isSelect},on:{click:e.isIcoBtn}}),o("i",{directives:[{name:"show",rawName:"v-show",value:!e.downIcon,expression:"!downIcon"}],staticClass:"isIco activeImg",class:{errorRed:!1===e.isSelect},on:{click:e.isIcoBtn}},[o("img",{attrs:{src:s("b3aN"),alt:""}})]),e._v("  是 \n          "),o("i",{directives:[{name:"show",rawName:"v-show",value:e.fouIco,expression:"fouIco"}],staticClass:"isIco",class:{errorRed:!1===e.isSelect},on:{click:e.isIcoBtnFase}}),o("i",{directives:[{name:"show",rawName:"v-show",value:!e.fouIco,expression:"!fouIco"}],staticClass:"isIco activeImg",class:{errorRed:!1===e.isSelect},on:{click:e.isIcoBtnFase}},[o("img",{attrs:{src:s("b3aN"),alt:""}})]),e._v("  否 \n        ")])]),e._v(" "),o("div",{staticClass:"registerBtn",on:{click:e.registerBtn}},[e._v("注册")])]),e._v(" "),o("tabs",{attrs:{selected:e.selected}})],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"txtBoc"},[t("input",{staticClass:"txt",attrs:{type:"text"}})])}]};var r=s("C7Lr")(o,i,!1,function(e){s("UQy0")},"data-v-331b5720",null);t.default=r.exports}});
//# sourceMappingURL=12.a359fad032228b6f6b3a.js.map