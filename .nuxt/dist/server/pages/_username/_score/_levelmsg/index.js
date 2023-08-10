exports.ids = [11,5,7];
exports.modules = {

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(56);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(12).default
module.exports.__inject__ = function (context) {
  add("4da83904", content, true, context)
};

/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo.577e8dd.svg";

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_386283ac_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_386283ac_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_386283ac_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_386283ac_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_386283ac_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(11);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".footer{color:#6cc5be;font-size:12rem;margin-top:80px;padding:20px 0;text-align:center}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Header.vue?vue&type=template&id=7466e2a8&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "header"
  }, []);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Header.vue?vue&type=template&id=7466e2a8&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Header.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3a3f6620"
  
)

/* harmony default export */ var Header = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer.vue?vue&type=template&id=386283ac&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "footer"
  }, [_vm._ssrNode(_vm._ssrEscape("\n  Copyright © " + _vm._s(new Date().getFullYear()) + " Boggy Jang.\n"))]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Footer.vue?vue&type=template&id=386283ac&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Footer.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(55)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "7ca42e04"
  
)

/* harmony default export */ var Footer = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(79);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(12).default
module.exports.__inject__ = function (context) {
  add("0e456965", content, true, context)
};

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_643dd1ff_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_643dd1ff_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_643dd1ff_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_643dd1ff_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_643dd1ff_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(11);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "html{background-attachment:fixed;background-color:#dcfefb;background-image:linear-gradient(180deg,#5cd4ca,#dcfefb);font-size:.9999999px;height:100%}:root{--primary:#eca523}body{color:#435e5f;font-size:16rem;margin:50px}.pitchTestApp{font-family:\"Varela Round\",sans-serif;margin:0 auto;max-width:800px;position:relative}.pitchTestApp h1{color:#fff;font-size:40rem;font-weight:700;margin:0 0 50px}.pitchTestApp button{cursor:pointer;outline:none}.pitchTestApp .backBtn{cursor:pointer;left:-40px;position:absolute;top:-40px;width:40px}.pitchTestApp .menuBtn,.pitchTestApp input{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:#fff;border:0;border-radius:10px;box-shadow:0 0 10px rgba(0,0,0,.05);box-sizing:border-box;color:#435e5f;display:block;font-family:\"Varela Round\",sans-serif;font-size:16rem;font-weight:500;margin:20px 0;opacity:.9;outline:none;padding:20px;text-align:center;-webkit-text-decoration:none;text-decoration:none;width:100%}.pitchTestApp .menuBtn:hover,.pitchTestApp input:hover{opacity:1}.pitchTestApp .menuBtn:focus,.pitchTestApp input:focus{box-shadow:0 0 0 4px #5ed4ca}.pitchTestApp .menuBtn:disabled,.pitchTestApp input:disabled{color:hsla(0,0%,100%,.4)}.pitchTestApp .menuBtn.primary,.pitchTestApp input.primary{background:#eca523;background:var(--primary);color:#fff}.pitchTestApp input{box-shadow:inset 0 0 0 4px rgba(94,212,202,.4)}.pitchTestApp input:focus{box-shadow:inset 0 0 0 4px #5ed4ca}.pitchTestApp .modal{background:#fff;border-radius:20px;bottom:50px;box-shadow:0 5px 20px rgba(51,177,166,.4);display:flex;flex-direction:column;left:20%;padding:20px;position:fixed;right:20%;top:50px;z-index:1}@media(max-width:800px){.pitchTestApp .modal{left:20px;right:20px}}.pitchTestApp .modal .modalHeader{margin-bottom:15px}.pitchTestApp .modal .modalBody{flex:1;overflow-y:auto}@keyframes logoAnimation{0%{transform:rotate(0deg) scaleX(1) scaleY(1);transform-origin:center center}30%{transform:rotate(0deg) scaleX(1) scaleY(1)}40%{transform:rotate(2turn) scaleX(1) scaleY(1);transform-origin:center center}70%{transform:rotate(2turn) scaleX(1) scaleY(1);transform-origin:center bottom}75%{transform:rotate(2turn) scaleX(1.5) scaleY(.5)}80%{transform:rotate(2turn) scaleX(.8) scaleY(1.25)}85%{transform:rotate(2turn) scaleX(1.11) scaleY(.85)}90%{transform:rotate(2turn) scaleX(.97) scaleY(1.05)}95%{transform:rotate(2turn) scaleX(1.01) scaleY(.99)}to{transform:rotate(2turn) scaleX(1) scaleY(1);transform-origin:center bottom}}@keyframes answerAnimation{0%{transform:rotate(0deg) scale(1)}50%{transform:rotate(4turn) scale(1)}80%{transform:rotate(4turn) scale(.8)}to{transform:rotate(4turn) scale(10)}}.shareCertification h1{text-align:center}.shareCertification .logo{animation:logoAnimation 5s infinite;width:200px}.shareCertification .image{border:10px solid #fff;box-shadow:0 2px 10px #5cd4ca;height:auto;margin-left:-10px;max-width:100%;width:1000px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/_username/_score/_levelmsg/index.vue?vue&type=template&id=643dd1ff&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "pitchTestApp shareCertification"
  }, [_c('Header'), _vm._ssrNode(" <h1><img" + _vm._ssrAttr("src", __webpack_require__(48)) + _vm._ssrAttr("alt", _vm.$t('common.head_title')) + " class=\"logo\"></h1> <img" + _vm._ssrAttr("src", `/cert_pic?username=${_vm.userName}&score=${_vm.score}&levelmsg=${_vm.levelMsg}`) + " width=\"1000\" height=\"700\" class=\"image\"> "), _c('nuxt-link', {
    staticClass: "menuBtn primary",
    attrs: {
      "to": _vm.localePath('index')
    }
  }, [_vm._v("\n    " + _vm._s(_vm.$t('common.start_game')) + "\n    " + _vm._s(_vm.$t('common.head_title')) + "\n  ")]), _vm._ssrNode(" "), _c('Footer')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/_username/_score/_levelmsg/index.vue?vue&type=template&id=643dd1ff&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/_username/_score/_levelmsg/index.vue?vue&type=script&lang=js&
/* harmony default export */ var _levelmsgvue_type_script_lang_js_ = ({
  head() {
    const userName = this.$route.params.username;
    const score = this.$route.params.score;
    const levelMsg = this.$route.params.levelmsg;
    const displayUserName = decodeURI(this.$route.params.username.replace(/\=/g, '%'));
    const displayScore = decodeURI(this.$route.params.score.replace(/\=/g, '%'));
    const displayLevelMsg = decodeURI(this.$route.params.levelmsg.replace(/\=/g, '%'));
    const title = `${displayUserName} - ${displayScore} ${this.$t('common.point')} - ${this.$t('common.head_title')}`;
    const desc = this.$t('common.head_desc');
    const showCertPic = userName && score && levelMsg;
    let image = showCertPic ? `https://pitchtest.boggy.tw/cert_pic?username=${userName}&score=${score}&levelmsg=${levelMsg}` : 'https://pitchtest.boggy.tw/images/sns_share_pic.jpg';
    let url = 'https://pitchtest.boggy.tw/';
    return {
      title: title,
      meta: [{
        hid: 'description',
        name: 'description',
        content: desc
      }, {
        hid: 'twitter:type',
        name: 'twitter:type',
        content: 'summary_large_image'
      }, {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: title
      }, {
        hid: 'twitter:description',
        name: 'twitter:description',
        desc
      }, {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: image
      }, {
        hid: 'og:type',
        name: 'og:type',
        content: 'website'
      }, {
        hid: 'og:title',
        name: 'og:title',
        content: title
      }, {
        hid: 'og:description',
        name: 'og:description',
        content: desc
      }, {
        hid: 'og:image',
        name: 'og:image',
        content: image
      }, {
        hid: 'og:url',
        name: 'og:url',
        content: url
      }, {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: 'PitchTest'
      }],
      htmlAttrs: {
        lang: this.$i18n.locales.filter(item => item.code === this.$i18n.locale)[0].iso
      }
    };
  },
  data() {
    const userName = this.$route.params.username;
    const score = this.$route.params.score;
    const levelMsg = this.$route.params.levelmsg;
    return {
      userName,
      score,
      levelMsg
    };
  }
});
// CONCATENATED MODULE: ./pages/_username/_score/_levelmsg/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var _score_levelmsgvue_type_script_lang_js_ = (_levelmsgvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/_username/_score/_levelmsg/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(78)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _score_levelmsgvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "6580f1ae"
  
)

/* harmony default export */ var _levelmsg = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Header: __webpack_require__(58).default,Footer: __webpack_require__(59).default})


/***/ })

};;
//# sourceMappingURL=index.js.map