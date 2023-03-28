exports.ids = [4];
exports.modules = {

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(53);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(12).default
module.exports.__inject__ = function (context) {
  add("6c946b55", content, false, context)
};

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Certification_vue_vue_type_style_index_0_id_4b3df987_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Certification_vue_vue_type_style_index_0_id_4b3df987_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Certification_vue_vue_type_style_index_0_id_4b3df987_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Certification_vue_vue_type_style_index_0_id_4b3df987_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Certification_vue_vue_type_style_index_0_id_4b3df987_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(11);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".certification-image{display:block;height:auto;margin:0 auto;max-width:100%;width:1000px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Certification.vue?vue&type=template&id=4b3df987&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "certification"
  }, [_vm._ssrNode("<img" + _vm._ssrAttr("src", `/cert_pic?username=${_vm.userName}&score=${_vm.score}&levelmsg=${_vm.levelMsg}`) + " width=\"1000\" height=\"700\" class=\"certification-image\"> " + (!_vm.editingUserName ? "<button class=\"menuBtn primary\">" + _vm._ssrEscape("\n    " + _vm._s(_vm.$t('common.enter_your_name')) + "\n  ") + "</button>" : "<!---->") + " " + (!_vm.editingUserName ? "<a" + _vm._ssrAttr("href", `https://www.facebook.com/sharer/sharer.php?u=https://pitchtest.boggy.tw/${encodeURI(_vm.userName).replace(/%/g, '=')}/${encodeURI(_vm.score).replace(/%/g, '=')}/${encodeURI(_vm.levelMsg).replace(/%/g, '=')}`) + " target=\"_blank\" class=\"menuBtn primary\">" + _vm._ssrEscape("\n    " + _vm._s(_vm.$t('common.share_to_fb')) + "\n  ") + "</a>" : "<!---->") + " " + (_vm.editingUserName ? "<div class=\"userNameModel\"><form><input" + _vm._ssrAttr("placeholder", _vm.$t('common.enter_your_name')) + " type=\"text\" required=\"required\"" + _vm._ssrAttr("value", _vm.tempUserName) + "> <button class=\"menuBtn primary\">" + _vm._ssrEscape("\n        " + _vm._s(_vm.$t('common.submit')) + "\n      ") + "</button></form></div>" : "<!---->"))]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Certification.vue?vue&type=template&id=4b3df987&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Certification.vue?vue&type=script&lang=js&
/* harmony default export */ var Certificationvue_type_script_lang_js_ = ({
  data() {
    return {
      // certBg: null,
      userName: '',
      tempUserName: '',
      editingUserName: false
    };
  },
  props: {
    score: {
      type: Number,
      default: 0
    }
  },
  computed: {
    levelMsg() {
      if (this.score <= 50) {
        return this.$t('common.level_msg_6');
      } else if (this.score > 50 && this.score <= 60) {
        return this.$t('common.level_msg_5');
      } else if (this.score > 60 && this.score <= 70) {
        return this.$t('common.level_msg_4');
      } else if (this.score > 70 && this.score <= 80) {
        return this.$t('common.level_msg_3');
      } else if (this.score > 80 && this.score <= 90) {
        return this.$t('common.level_msg_2');
      } else {
        return this.$t('common.level_msg_1');
      }
    }
  },
  // watch: {
  //   userName: {
  //     immediate: true,
  //     handler () {
  //       this.drawCert()
  //     }
  //   },
  //   score: {
  //     immediate: true,
  //     handler () {
  //       this.drawCert()
  //     }
  //   }
  // },
  methods: {
    // async loadCertBg () {
    //   return new Promise((resolve, reject) => {
    //     this.certBg = new Image()
    //     this.certBg.onload = () => {
    //       resolve()
    //     }
    //     this.certBg.onerror = () => {
    //       reject()
    //     }
    //     this.certBg.src = '/images/cert_bg.jpg'
    //   })
    // },
    // async drawCert () {
    //   if (!this.$refs.canvas || !this.$refs.canvas.getContext) {
    //     return
    //   }

    //   if (!this.certBg) {
    //     await this.loadCertBg()
    //   }

    //   let canvas = this.$refs.canvas
    //   let context = canvas.getContext('2d')
    //   context.drawImage(this.certBg, 0, 0)
    //   context.font = '60px Serif'
    //   context.textAlign = 'center'
    //   context.fillText(this.userName, canvas.width / 2, 360)
    //   context.font = '50px Serif'
    //   context.fillText(this.score, 290, 490)
    //   context.font = '25px San Serif'
    //   context.fillText(this.levelMsg, 590, 480)

    //   this.$refs.image.src = canvas.toDataURL()
    // },
    editUserName() {
      this.editingUserName = true;
    },
    saveUserName() {
      this.editingUserName = false;
      this.userName = this.tempUserName;
      this.$cookies.set('userName', this.tempUserName);
      this.$emit('userNameChanged');
    }
  },
  mounted() {
    this.userName = this.tempUserName = this.$cookies.get('userName') || 'your name';
    // this.drawCert()
  }
});
// CONCATENATED MODULE: ./components/Certification.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Certificationvue_type_script_lang_js_ = (Certificationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Certification.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(52)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Certificationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "4675f567"
  
)

/* harmony default export */ var Certification = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=certification.js.map