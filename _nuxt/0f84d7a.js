(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{172:function(t,e,r){var content=r(245);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(107).default)("3001ca5f",content,!0,{sourceMap:!1})},179:function(t,e,r){"use strict";var o={name:"default"},n=r(25),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Header"),t._v(" "),r("Nuxt"),t._v(" "),r("Footer")],1)}),[],!1,null,"7d33f3f2",null);e.a=component.exports;installComponents(component,{Header:r(257).default,Footer:r(258).default})},180:function(t,e,r){r(181),t.exports=r(182)},244:function(t,e,r){"use strict";r(172)},245:function(t,e,r){var o=r(106)(!1);o.push([t.i,".__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:flex;justify-content:center;align-items:center;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}",""]),t.exports=o},257:function(t,e,r){"use strict";r.r(e);var o={name:"Header.vue"},n=r(25),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._v("header")])}),[],!1,null,"15fa0eee",null);e.default=component.exports},258:function(t,e,r){"use strict";r.r(e);var o={name:"Footer"},n=r(25),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._v("footer")])}),[],!1,null,"0b37b8b8",null);e.default=component.exports},33:function(t,e,r){"use strict";var o={name:"NuxtError",props:{error:{type:Object,default:null}},computed:{statusCode:function(){return this.error&&this.error.statusCode||500},message:function(){return this.error.message||"<%= messages.client_error %>"}},head:function(){return{title:this.message,meta:[{name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0"}]}}},n=(r(244),r(25)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"__nuxt-error-page"},[r("div",{staticClass:"error"},[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"90",height:"90",fill:"#DBE1EC",viewBox:"0 0 48 48"}},[r("path",{attrs:{d:"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"}})]),t._v(" "),r("div",{staticClass:"title"},[t._v(t._s(t.message))]),t._v(" "),404===t.statusCode?r("p",{staticClass:"description"},[void 0===t.$route?r("a",{staticClass:"error-link",attrs:{href:"/"}},[t._v("<% messages.back_to_home %>")]):r("NuxtLink",{staticClass:"error-link",attrs:{to:"/"}},[t._v("<%= messages.back_to_home %>")])],1):t._e(),t._v(" "),t._m(0)])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"logo"},[r("a",{attrs:{href:"https://nuxtjs.org",target:"_blank",rel:"noopener"}},[t._v("<%= messages.nuxtjs %>")])])}],!1,null,null,null);e.a=component.exports}},[[180,6,1,7]]]);