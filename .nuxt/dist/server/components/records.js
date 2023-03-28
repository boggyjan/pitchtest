exports.ids = [9];
exports.modules = {

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(69);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(12).default
module.exports.__inject__ = function (context) {
  add("de2b9600", content, false, context)
};

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Records_vue_vue_type_style_index_0_id_7c6682d4_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Records_vue_vue_type_style_index_0_id_7c6682d4_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Records_vue_vue_type_style_index_0_id_7c6682d4_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Records_vue_vue_type_style_index_0_id_7c6682d4_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Records_vue_vue_type_style_index_0_id_7c6682d4_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(11);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".recordList .recordNav{margin:20px 0;text-align:center}.recordList .recordNav button{background:transparent;border:1px solid #999;border-radius:100px;color:#888;padding:2px 15px}.recordList .recordNav button.active{background:rgba(103,212,183,.067);border:1px solid #67d4b7;color:#4db79b}.recordList ul{background:#fafafa;border-radius:20px;height:calc(100vh - 380px);list-style:none;margin:0;overflow-y:auto;padding:10px}.recordList ul li{align-items:center;border-bottom:1px dashed #ccc;display:flex;padding:20px}.recordList ul li .rank{background:#aaa;border-radius:100px;color:#fff;height:30px;left:-15px;line-height:30px;min-width:30px;position:relative;text-align:center}.recordList ul li:first-child .rank{background:#eb0}.recordList ul li:nth-child(2) .rank{background:#9cc}.recordList ul li:nth-child(3) .rank{background:#c66}.recordList ul li .name{flex:1.5}.recordList ul li .score{flex:1.3}.recordList ul li .date,.recordList ul li .time{color:#888;font-size:12px}.recordList ul li .date{flex:1;text-align:center}.recordList .no-record{background:#fafafa;border-radius:20px;padding:10px;text-align:center}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Records.vue?vue&type=template&id=7c6682d4&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "recordList modal"
  }, [_vm._ssrNode("<div class=\"modalHeader\">" + _vm._ssrEscape("\n    " + _vm._s(_vm.$t('common.records')) + "\n  ") + "</div> <div class=\"modalBody\"><div class=\"recordNav\"><button" + _vm._ssrClass(null, {
    active: _vm.showingRecordType === 0
  }) + ">" + _vm._ssrEscape("\n        " + _vm._s(_vm.$t('common.local_records')) + "\n      ") + "</button> <button" + _vm._ssrClass(null, {
    active: _vm.showingRecordType === 1
  }) + ">" + _vm._ssrEscape("\n        " + _vm._s(_vm.$t('common.global_records')) + "\n        Top 100\n      ") + "</button></div> " + (_vm.displayScoreRecords.length ? "<ul>" + _vm._ssrList(_vm.displayScoreRecords, function (record, idx) {
    return "<li><div class=\"rank\">" + _vm._ssrEscape("\n          " + _vm._s(idx + 1) + "\n        ") + "</div> " + (_vm.showingRecordType === 1 ? "<div class=\"name\">" + _vm._ssrEscape("\n          " + _vm._s(record.name) + "\n        ") + "</div>" : "<!---->") + " <div class=\"score\">" + _vm._ssrEscape("\n          " + _vm._s(record.score) + "\n          " + _vm._s(_vm.$t('common.point')) + "\n          ") + "<div class=\"time\">" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('common.took_n_sec', {
      n: record.duration / 1000
    })) + "\n          ") + "</div></div> <div class=\"date\">" + _vm._ssrEscape("\n          " + _vm._s(new Date(record.date).toLocaleString('ja-JP', {
      hour12: false
    })) + "\n        ") + "</div></li>";
  }) + "</ul>" : "<div class=\"no-record\">" + _vm._ssrEscape("\n      " + _vm._s(_vm.$t('common.no_record_yet')) + "\n    ") + "</div>") + "</div> <div class=\"modalFooter\"><button class=\"menuBtn primary\">" + _vm._ssrEscape("\n      " + _vm._s(_vm.$t('common.close')) + "\n    ") + "</button></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Records.vue?vue&type=template&id=7c6682d4&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Records.vue?vue&type=script&lang=js&
/* harmony default export */ var Recordsvue_type_script_lang_js_ = ({
  data() {
    return {
      // show game records
      // 0 is local
      // 1 is global
      showingRecordType: 0,
      scoreRecords: [],
      globalScoreRecords: []
    };
  },
  props: ['scoreCookieKey'],
  computed: {
    displayScoreRecords() {
      return this.showingRecordType === 0 ? this.scoreRecords : this.globalScoreRecords;
    }
  },
  methods: {
    changeType(type = 0) {
      this.showingRecordType = type;
    }
  },
  async fetch() {
    this.scoreRecords = this.$cookies.get(this.scoreCookieKey) || [];
    // get global records
    try {
      let scoreReq = await this.$axios.get('api/score');
      this.globalScoreRecords = scoreReq.data.list;
    } catch (err) {
      console.log(err);
    }
  }
});
// CONCATENATED MODULE: ./components/Records.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Recordsvue_type_script_lang_js_ = (Recordsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Records.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(68)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Recordsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "798aeeaf"
  
)

/* harmony default export */ var Records = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=records.js.map