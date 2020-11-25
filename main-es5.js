function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _patients_response__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./patients-response */
    "./src/app/patients-response.ts");
    /* harmony import */


    var _threshold_response__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./threshold-response */
    "./src/app/threshold-response.ts");
    /* harmony import */


    var file_saver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! file-saver */
    "./node_modules/file-saver/dist/FileSaver.min.js");
    /* harmony import */


    var file_saver__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _data_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./data-loader.service */
    "./src/app/data-loader.service.ts");
    /* harmony import */


    var _cy_graph_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./cy-graph.service */
    "./src/app/cy-graph.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["cy"];

    function AppComponent_option_41_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var pat_r16 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", pat_r16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", pat_r16.name, " (", pat_r16.subtype, ")");
      }
    }

    function AppComponent_span_42_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Cancer Subtype: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Metastasis free Survival: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.selectedMetastaticPatient.subtype);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.selectedMetastaticPatient.mfsYears, " years");
      }
    }

    function AppComponent_option_50_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var pat_r17 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", pat_r17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", pat_r17.name, " (", pat_r17.subtype, ")");
      }
    }

    function AppComponent_span_51_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Cancer Subtype: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Metastasis free Survival: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.selectedNonmetastaticPatient.subtype);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r3.selectedNonmetastaticPatient.mfsYears, " years");
      }
    }

    function AppComponent_ul_58_Template(rf, ctx) {
      if (rf & 1) {
        var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Metastatic:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 85);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_ul_58_Template_input_ngModelChange_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r18.thresholds.metastatic.selected = $event;
        })("change", function AppComponent_ul_58_Template_input_change_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r20.updateThreshold(ctx_r20.thresholds);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 86);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 87);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Non-Metastatic:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 91);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_ul_58_Template_input_ngModelChange_21_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r21.thresholds.nonmetastatic.selected = $event;
        })("change", function AppComponent_ul_58_Template_input_change_21_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r22.updateThreshold(ctx_r22.thresholds);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 86);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 87);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 92);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Both Patients:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 94);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_ul_58_Template_input_ngModelChange_34_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r23.thresholds.selected = $event;
        })("change", function AppComponent_ul_58_Template_input_change_34_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r24.updateThreshold(ctx_r24.thresholds);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 86);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 87);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "legend");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Select some patients from the upper menu");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx_r4.selectedMetastaticPatient !== undefined && ctx_r4.selectedNonmetastaticPatient === undefined ? "block" : "none");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r4.thresholds.metastatic.selected / ctx_r4.thresholds.multiplier);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("min", ctx_r4.thresholds.metastatic.threshold * ctx_r4.thresholds.multiplier);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("max", ctx_r4.thresholds.metastatic.max * ctx_r4.thresholds.multiplier);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.thresholds.metastatic.selected);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.thresholds.metastatic.threshold, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.thresholds.metastatic.max, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx_r4.selectedMetastaticPatient === undefined && ctx_r4.selectedNonmetastaticPatient !== undefined ? "block" : "none");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r4.thresholds.nonmetastatic.selected / ctx_r4.thresholds.multiplier);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("min", ctx_r4.thresholds.nonmetastatic.threshold * ctx_r4.thresholds.multiplier);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("max", ctx_r4.thresholds.nonmetastatic.max * ctx_r4.thresholds.multiplier);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.thresholds.nonmetastatic.selected);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.thresholds.nonmetastatic.threshold, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.thresholds.nonmetastatic.max, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx_r4.selectedMetastaticPatient !== undefined && ctx_r4.selectedNonmetastaticPatient !== undefined ? "block" : "none");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r4.thresholds.selected / ctx_r4.thresholds.multiplier);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("min", ctx_r4.thresholds.minThreshold * ctx_r4.thresholds.multiplier);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("max", ctx_r4.thresholds.maxThreshold * ctx_r4.thresholds.multiplier);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.thresholds.selected);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.thresholds.minThreshold, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.thresholds.maxThreshold, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx_r4.selectedMetastaticPatient === undefined && ctx_r4.selectedNonmetastaticPatient === undefined ? "block" : "none");
      }
    }

    function AppComponent_i_71_Template(rf, ctx) {
      if (rf & 1) {
        var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_i_71_Template_i_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r25.resetNodeSearch();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_i_72_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 96);
      }
    }

    function AppComponent_th_81_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 42);
      }
    }

    function AppComponent_div_83_Template(rf, ctx) {
      if (rf & 1) {
        var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 97);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_83_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r27.updateNodeSort(ctx_r27.selectedMetastaticPatient.subtype);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r8.selectedMetastaticPatient.subtype, " (", ctx_r8.subtypeCounts[ctx_r8.selectedMetastaticPatient.subtype], ") ");
      }
    }

    function AppComponent_th_84_Template(rf, ctx) {
      if (rf & 1) {
        var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_th_84_Template_th_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r29.updateNodeSort(ctx_r29.selectedNonmetastaticPatient.subtype);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r9.selectedNonmetastaticPatient.subtype, " (", ctx_r9.subtypeCounts[ctx_r9.selectedNonmetastaticPatient.subtype], ") ");
      }
    }

    function AppComponent_tr_88_td_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "td", 98);
      }
    }

    function AppComponent_tr_88_td_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 98);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var node_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r33.nodeInfo[node_r31.id][ctx_r33.selectedNonmetastaticPatient.subtype]);
      }
    }

    function AppComponent_tr_88_Template(rf, ctx) {
      if (rf & 1) {
        var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 97);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_tr_88_Template_tr_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);

          var node_r31 = ctx.$implicit;

          var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r35.highlightNode(node_r31.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 98);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_tr_88_td_3_Template, 1, 0, "td", 99);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 98);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppComponent_tr_88_td_6_Template, 2, 1, "td", 99);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 98);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var node_r31 = ctx.$implicit;

        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", ctx_r10.selectedNode.includes(node_r31.id));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](node_r31.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.selectedNonmetastaticPatient === undefined || ctx_r10.selectedMetastaticPatient === ctx_r10.selectedNonmetastaticPatient);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.selectedMetastaticPatient !== undefined ? ctx_r10.nodeInfo[node_r31.id][ctx_r10.selectedMetastaticPatient.subtype] : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.selectedNonmetastaticPatient !== undefined && ctx_r10.selectedMetastaticPatient !== ctx_r10.selectedNonmetastaticPatient);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.nodeInfo[node_r31.id].all);
      }
    }

    function AppComponent_div_102_strong_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "( ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b", 104);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Low");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, ", ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b", 105);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Normal");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, ", ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b", 106);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "High");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, ") ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_102_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 107);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 108);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 109);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 110);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 2, ctx_r39.patients.geMin, "1.1-1"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 5, ctx_r39.patients.geMax, "1.1-1"));
      }
    }

    function AppComponent_div_102_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 107);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 108);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 111);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 110);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r40.thresholds.minThreshold);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r40.thresholds.maxThreshold);
      }
    }

    function AppComponent_div_102_Template(rf, ctx) {
      if (rf & 1) {
        var _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 100);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 101);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_div_102_Template_input_ngModelChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42);

          var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r41.layoutNodeColor = $event;
        })("change", function AppComponent_div_102_Template_input_change_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42);

          var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r43.updateNodeColor(ctx_r43.layoutNodeColor);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 102);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_div_102_strong_5_Template, 11, 0, "strong", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppComponent_div_102_div_6_Template, 8, 8, "div", 103);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppComponent_div_102_div_7_Template, 6, 2, "div", 103);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var opt_r37 = ctx.$implicit;

        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "nodeColorBy", opt_r37, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r11.layoutNodeColor)("value", opt_r37)("checked", ctx_r11.layoutNodeColor === opt_r37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("for", "nodeColorBy", opt_r37, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("by ", ctx_r11.layoutNodeColorOptions[opt_r37], " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", opt_r37 === "geLevel" && ctx_r11.layoutNodeColor === opt_r37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", opt_r37 === "ge" && ctx_r11.layoutNodeColor === opt_r37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", opt_r37 === "rel" && ctx_r11.layoutNodeColor === opt_r37);
      }
    }

    function AppComponent_div_123_Template(rf, ctx) {
      if (rf & 1) {
        var _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 112);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 113);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_div_123_Template_input_ngModelChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46);

          var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r45.layoutNodeSize = $event;
        })("change", function AppComponent_div_123_Template_input_change_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46);

          var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r47.updateNodeSize(ctx_r47.layoutNodeSize);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 114);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var opt_r44 = ctx.$implicit;

        var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "nodeSizeBy", opt_r44, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r12.layoutNodeSize)("value", opt_r44)("checked", ctx_r12.layoutNodeSize === opt_r44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("for", "nodeSizeBy", opt_r44, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("by ", ctx_r12.layoutNodeSizeOptions[opt_r44], "");
      }
    }

    var _c1 = function _c1(a0) {
      return {
        "height.px": a0
      };
    };

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(httpClient, dataLoader, cyGraph) {
        _classCallCheck(this, AppComponent);

        this.httpClient = httpClient;
        this.dataLoader = dataLoader;
        this.cyGraph = cyGraph;
        this.title = 'Patient Specific Molecular Sub-Networks Responsible for Metastasis in Breast Cancer';
        this.sideBarShown = true;
        this.activeMenuItem = {
          nodes: false,
          patient: true,
          threshold: false,
          layout: true,
          download: false,
          impressum: false
        };
        this.objectKeys = Object.keys;
        this.patients = {
          metastatic: [],
          nonmetastatic: [],
          geMin: 0,
          geMax: 15
        };
        this.layoutNodeSize = 'rel';
        this.layoutNodeColor = 'geLevel';
        this.layoutNodeSizeOptions = {
          rel: 'Relevance',
          ge: 'Gene Expression'
        };
        this.layoutNodeColorOptions = {
          geLevel: 'Gene Expression Level ',
          ge: 'Gene Expression',
          rel: 'Relevance'
        };
        this.layoutAllNodes = false;
        this.layoutMtbNodes = true;
        this.downloadFormat = 'png';
        this.downloadTransparent = false;
        this.downloadScaleImageBy = 1.0;
        this.nodes = [];
        this.searchNode = '';
        this.selectedNode = [];
        this.layoutOnlyShared = false;
        this.nodeSort = 'name';
      }

      _createClass(AppComponent, [{
        key: "XOR",
        value: function XOR(a, b) {
          return (a || b) && !(a && b);
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {}
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.dataLoader.getThresholds().subscribe(function (data) {
            _this.thresholds = new _threshold_response__WEBPACK_IMPORTED_MODULE_2__["ThresholdResponse"](data);

            _this.cyGraph.setThreshold(_this.thresholds); // console.log('Multiplier1: ' + this.thresholds.multiplier);

          });
          this.dataLoader.getPatients().subscribe(function (data) {
            // console.log('Loaded patients:');
            // console.log(data);
            _this.patients = new _patients_response__WEBPACK_IMPORTED_MODULE_1__["PatientsResponse"](data, _this.dataLoader);

            _this.cyGraph.setGeRange(_this.patients.geMin, _this.patients.geMax);
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this2 = this;

          // console.log("Init Graph: " + this.layoutNodeSize);
          this.dataLoader.getNetwork().subscribe(function (network) {
            _this2.subtypeCounts = network.occ;
            _this2.nodeInfo = {};
            network.nodes.forEach(function (node) {
              _this2.nodeInfo[node.data.id] = node.occ;
            });

            _this2.cyGraph.initGraph(_this2.cyDiv, network, _this2.layoutNodeSize, _this2.layoutNodeColor);
          });
        }
      }, {
        key: "setMetastaticPatient",
        value: function setMetastaticPatient(pat) {
          this.cyGraph.setMetastaticPatient(pat);
          this.updateNetwork();
        }
      }, {
        key: "setNonMetastaticPatient",
        value: function setNonMetastaticPatient(pat) {
          this.cyGraph.setNonMetastaticPatient(pat);
          this.updateNetwork();
        }
      }, {
        key: "toggleMenu",
        value: function toggleMenu(name) {
          if (name === 'nodes') {
            this.updateNetwork();
          }

          this.activeMenuItem[name] = !this.activeMenuItem[name];
        }
      }, {
        key: "updateNodeSize",
        value: function updateNodeSize(by) {
          // console.log('Change Node Size: ' + by);
          this.cyGraph.setSizeBy(by);
          this.updateNetwork();
        }
      }, {
        key: "updateNodeColor",
        value: function updateNodeColor(by) {
          // console.log('Change Node Color: ' + by);
          this.cyGraph.setColorBy(by);
          this.updateNetwork();
        }
      }, {
        key: "updateAllNodes",
        value: function updateAllNodes(shown) {
          if (this.layoutOnlyShared && shown) {
            this.layoutOnlyShared = false;
            this.cyGraph.setShowOnlySharedNodes(false);
          }

          this.cyGraph.setShowAllNodes(shown);
          this.updateNetwork();
        }
      }, {
        key: "updateMtbNodes",
        value: function updateMtbNodes(shown) {
          // console.log('MTB: ' + shown);
          this.cyGraph.setShowMtbNodes(shown);
        }
      }, {
        key: "updateSharedNodes",
        value: function updateSharedNodes(shown) {
          if (this.layoutAllNodes && shown) {
            this.layoutAllNodes = false;
            this.cyGraph.setShowAllNodes(false);
          }

          this.cyGraph.setShowOnlySharedNodes(shown);
          this.updateNetwork();
        }
      }, {
        key: "updateThreshold",
        value: function updateThreshold(thresholds) {
          this.cyGraph.updateThreshold(thresholds);
          this.updateNetwork();
        }
      }, {
        key: "updateNodeSort",
        value: function updateNodeSort(column) {
          this.nodeSort = column;
          this.updateNetwork();
        }
      }, {
        key: "updateNetwork",
        value: function updateNetwork() {
          var _this3 = this;

          var nodes = this.cyGraph.getNetwork();

          if (this.searchNode !== '') {
            nodes = nodes.filter(function (node) {
              return node.id.toLowerCase().indexOf(_this3.searchNode.toLowerCase()) !== -1;
            });
          }

          if (this.nodeSort === 'name') {
            nodes = nodes.sort(function (a, b) {
              return a.id.localeCompare(b.id);
            });
          } else {
            nodes = nodes.sort(function (a, b) {
              return _this3.nodeInfo[b.id][_this3.nodeSort] - _this3.nodeInfo[a.id][_this3.nodeSort];
            });
          }

          this.nodes = nodes;
        }
      }, {
        key: "resetNodeSearch",
        value: function resetNodeSearch() {
          this.searchNode = '';
          this.updateNetwork();
        }
      }, {
        key: "highlightNode",
        value: function highlightNode(node) {
          // console.log('Highlight node: ' + node);
          if (node === undefined) {
            this.selectedNode = [];
          } else {
            var index = this.selectedNode.indexOf(node);

            if (index > -1) {
              this.selectedNode.splice(index, 1);
            } else {
              this.selectedNode.push(node);
            }
          }

          this.cyGraph.highlightNode(this.selectedNode);
        }
      }, {
        key: "downloadImage",
        value: function downloadImage(type) {
          // console.log(type);
          var image = this.cyGraph.getImage(type, this.downloadTransparent, this.downloadScaleImageBy);
          var filename = 'test.' + type;

          if (this.selectedMetastaticPatient === undefined && this.selectedNonmetastaticPatient === undefined) {
            filename = 'PPI_network.' + type;
          } else if (this.selectedMetastaticPatient !== undefined && this.selectedNonmetastaticPatient === undefined) {
            filename = this.selectedMetastaticPatient.name + '.' + type;
          } else if (this.selectedMetastaticPatient === undefined && this.selectedNonmetastaticPatient !== undefined) {
            filename = this.selectedNonmetastaticPatient.name + '.' + type;
          } else {
            filename = this.selectedMetastaticPatient.name + '_vs_' + this.selectedNonmetastaticPatient.name + '.' + type;
          }

          Object(file_saver__WEBPACK_IMPORTED_MODULE_3__["saveAs"])(image, filename);
        }
      }, {
        key: "fitGraphToViewport",
        value: function fitGraphToViewport() {
          this.cyGraph.fitGraphToViewport();
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_loader_service__WEBPACK_IMPORTED_MODULE_5__["DataLoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cy_graph_service__WEBPACK_IMPORTED_MODULE_6__["CyGraphService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      viewQuery: function AppComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.cyDiv = _t.first);
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 184,
      vars: 75,
      consts: [["lang", "en"], ["charset", "utf-8"], ["http-equiv", "X-UA-Compatible", "content", "IE=edge"], ["name", "viewport", "content", "width=device-width, initial-scale=1"], ["name", "description", "content", "Responsive sidebar template with sliding effect and dropdown menu based on bootstrap 3"], ["rel", "stylesheet", "href", "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css", "integrity", "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm", "crossorigin", "anonymous"], ["href", "https://use.fontawesome.com/releases/v5.13.0/css/all.css", "rel", "stylesheet"], [1, "page-wrapper", "chiller-theme"], ["id", "show-sidebar", "href", "#", 1, "btn", "btn-lg", "btn-dark", 3, "click"], [1, "fas", "fa-bars"], ["id", "sidebar", 1, "sidebar-wrapper"], [1, "sidebar-content"], [1, "sidebar-brand"], ["href", "#"], ["id", "close-sidebar", 3, "click"], [1, "fas", "fa-times"], [1, "sidebar-menu"], [1, "header-menu"], [1, "sidebar-dropdown"], ["href", "#", 3, "click"], [1, "fas", "fa-hospital-user"], [1, "sidebar-submenu"], [1, "row", "custom-form-group"], [1, "col-6"], [1, "form-control", 3, "ngModel", "ngModelChange", "change"], ["selected", "", 1, "dropdown-item", 3, "ngValue"], ["class", "dropdown-item", 3, "ngValue", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "fas", "fa-sort-amount-up"], [1, "fas", "fa-project-diagram"], [1, "sidebar-search"], [1, "input-group"], ["type", "text", "placeholder", "Search...", "autofocus", "", 1, "form-control", "search-menu", 3, "ngModel", "ngModelChange", "input"], [1, "input-group-append"], [1, "input-group-text", "search-icon"], ["class", "far fa-times-circle", 3, "click", 4, "ngIf"], ["class", "fa fa-search", "aria-hidden", "true", 4, "ngIf"], ["type", "button", "disabled", "", 1, "btn", "btn-secondary"], [1, "list-group"], [1, "table", "table-hover", "table-dark"], ["scope", "col", 1, "w25", 3, "click"], ["scope", "col", "class", "w25", 4, "ngIf"], ["scope", "col", 1, "w25"], [3, "click", 4, "ngIf"], ["scope", "col", "class", "w25", 3, "click", 4, "ngIf"], [3, "selected", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [1, "fas", "fa-palette"], [1, "form-group"], ["class", "custom-control custom-radio ", 4, "ngFor", "ngForOf"], [1, "switch"], ["type", "checkbox", 1, "primary", 3, "ngModel", "ngModelChange", "change"], [1, "slider", "round"], [1, "circle"], ["class", "custom-control custom-radio custom-control-inline", 4, "ngFor", "ngForOf"], [1, "row", "mb-3", "custom-form-group"], [1, "col-12"], [1, "btn", "btn-block", "btn-secondary", 3, "click"], [1, "fas", "fa-arrow-circle-down"], ["data-toggle", "buttons", 1, "btn-group", "btn-group-toggle", "col-6"], [1, "btn", "btn-secondary"], ["type", "radio", "name", "options", "id", "downloadFormat1", "value", "png", 3, "ngModel", "checked", "ngModelChange"], ["type", "radio", "name", "options", "id", "downloadFormat2", "value", "jpg", 3, "ngModel", "checked", "ngModelChange"], [1, "col-6", "text-right"], [1, "btn", "btn-secondary", "btn-small", 3, "click"], [1, "input-group", "mb-3", "custom-form-group"], [1, "input-group-prepend"], ["id", "scaleImage", 1, "input-group-text"], ["type", "text", "id", "scaleImage-input", "aria-describedby", "scaleImage", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "checkbox", 1, "primary", 3, "ngModel", "ngModelChange"], ["href", "http://mypathsem.bioinf.med.uni-goettingen.de/"], ["href", "http://mypathsem.bioinf.med.uni-goettingen.de/impressum"], ["href", "http://mypathsem.bioinf.med.uni-goettingen.de/datenschutz"], [1, "sidebar-footer"], [1, "page-content"], [1, "container-fluid", 2, "height", "100%"], ["page", ""], [1, "row"], ["heading", ""], [1, "row", 3, "ngStyle"], ["cy", ""], [1, "dropdown-item", 3, "ngValue"], ["id", "basic-addon1", 1, "input-group-text"], ["type", "text", "id", "metastatic-input", "aria-describedby", "basic-addon3", "disabled", "", 1, "form-control", 3, "value"], [1, "form-group", "custom-form-group"], ["type", "range", "id", "customRange1", 1, "custom-range", 3, "min", "max", "ngModel", "ngModelChange", "change"], [1, "row", "justify-content-between"], [1, "col-4"], [1, "col-4", "text-right"], ["id", "basic-addon2", 1, "input-group-text"], ["type", "text", "id", "non-metastatic-input", "aria-describedby", "basic-addon3", "disabled", "", 1, "form-control", 3, "value"], ["type", "range", "id", "customRange2", 1, "custom-range", 3, "min", "max", "ngModel", "ngModelChange", "change"], ["id", "basic-addon3", 1, "input-group-text"], ["type", "text", "id", "both-patients-input", "aria-describedby", "basic-addon3", "disabled", "", 1, "form-control", 3, "value"], ["type", "range", "id", "customRange3", 1, "custom-range", 3, "min", "max", "ngModel", "ngModelChange", "change"], [1, "far", "fa-times-circle", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-search"], [3, "click"], [1, "w25"], ["class", "w25", 4, "ngIf"], [1, "custom-control", "custom-radio"], ["type", "radio", "name", "customRadioNodeColor", 1, "custom-control-input", 3, "id", "ngModel", "value", "checked", "ngModelChange", "change"], [1, "custom-control-label", "layout-list-label", 3, "for"], ["class", "color-legend", "align", "center", 4, "ngIf"], [2, "background-color", "#599eff", "color", "#383838"], [2, "background-color", "#e8e857", "color", "#383838"], [2, "background-color", "#ff3d6a", "color", "#383838"], ["align", "center", 1, "color-legend"], [1, "from"], [1, "mid-ge"], [1, "to"], [1, "mid-rel"], [1, "custom-control", "custom-radio", "custom-control-inline"], ["type", "radio", "name", "customRadioNodeSize", 1, "custom-control-input", 3, "id", "ngModel", "value", "checked", "ngModelChange", "change"], [1, "custom-control-label", 3, "for"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "meta", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "meta", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Sidebar template");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "link", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "link", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_12_listener() {
            return ctx.sideBarShown = true;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "nav", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Explore the Networks");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_19_listener() {
            return ctx.sideBarShown = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Settings");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_27_listener() {
            return ctx.toggleMenu("patient");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Patients");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Metastatic Patient:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "select", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_select_ngModelChange_38_listener($event) {
            return ctx.selectedMetastaticPatient = $event;
          })("change", function AppComponent_Template_select_change_38_listener() {
            return ctx.setMetastaticPatient(ctx.selectedMetastaticPatient);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "option", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, AppComponent_option_41_Template, 2, 3, "option", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, AppComponent_span_42_Template, 10, 2, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Non-Metastatic Patient:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "select", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_select_ngModelChange_47_listener($event) {
            return ctx.selectedNonmetastaticPatient = $event;
          })("change", function AppComponent_Template_select_change_47_listener() {
            return ctx.setNonMetastaticPatient(ctx.selectedNonmetastaticPatient);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "option", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, AppComponent_option_50_Template, 2, 3, "option", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, AppComponent_span_51_Template, 10, 2, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_53_listener() {
            return ctx.toggleMenu("threshold");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "i", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Threshold");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, AppComponent_ul_58_Template, 43, 26, "ul", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_60_listener() {
            return ctx.toggleMenu("nodes");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "i", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Nodes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "input", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_68_listener($event) {
            return ctx.searchNode = $event;
          })("input", function AppComponent_Template_input_input_68_listener() {
            return ctx.updateNetwork();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, AppComponent_i_71_Template, 1, 0, "i", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, AppComponent_i_72_Template, 1, 0, "i", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "button", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "ul", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "table", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "th", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_th_click_79_listener() {
            return ctx.updateNodeSort("name");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Protein");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](81, AppComponent_th_81_Template, 1, 0, "th", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "th", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](83, AppComponent_div_83_Template, 2, 2, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](84, AppComponent_th_84_Template, 2, 2, "th", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "th", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_th_click_85_listener() {
            return ctx.updateNodeSort("all");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](88, AppComponent_tr_88_Template, 9, 7, "tr", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "ul", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "button", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_90_listener() {
            return ctx.highlightNode(undefined);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "unselect");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "li", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_93_listener() {
            return ctx.toggleMenu("layout");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "i", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Layout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "li", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "legend");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Color Nodes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](102, AppComponent_div_102_Template, 8, 9, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "li", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "legend");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Show All Nodes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "label", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "input", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_107_listener($event) {
            return ctx.layoutAllNodes = $event;
          })("change", function AppComponent_Template_input_change_107_listener() {
            return ctx.updateAllNodes(ctx.layoutAllNodes);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "span", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "legend");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Show MTB results ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "label", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "input", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_113_listener($event) {
            return ctx.layoutMtbNodes = $event;
          })("change", function AppComponent_Template_input_change_113_listener() {
            return ctx.updateMtbNodes(ctx.layoutMtbNodes);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "span", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "legend");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, " Show Only Shared Nodes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "label", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "input", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_118_listener($event) {
            return ctx.layoutOnlyShared = $event;
          })("change", function AppComponent_Template_input_change_118_listener() {
            return ctx.updateSharedNodes(ctx.layoutOnlyShared);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "span", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "li", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "legend");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Set Node Size");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](123, AppComponent_div_123_Template, 4, 6, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "li", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "button", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_126_listener() {
            return ctx.fitGraphToViewport();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, " Fit Graph To Viewport ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "legend");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Select some patients from the upper menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "li", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_132_listener() {
            return ctx.toggleMenu("download");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "i", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Download");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "li", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "label", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "input", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_141_listener($event) {
            return ctx.downloadFormat = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, " PNG ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "label", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "input", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_144_listener($event) {
            return ctx.downloadFormat = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, " JPEG ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "button", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_147_listener() {
            return ctx.downloadImage(ctx.downloadFormat);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, " Download ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "span", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Scale Image by ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "input", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_154_listener($event) {
            return ctx.downloadScaleImageBy = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "li", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "legend");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Transparent Background ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "label", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "input", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_159_listener($event) {
            return ctx.downloadTransparent = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "span", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "a", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "MyPathSem Project");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "a", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "Impressum");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "a", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "Datenschutz");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_172_listener() {
            return ctx.toggleMenu("impressum");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, " Impressum ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "main", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 75, 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 77, 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](181, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](182, "div", 79, 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](176);

          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](178);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("toggled", ctx.sideBarShown);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.activeMenuItem.patient);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx.activeMenuItem.patient ? "block" : "none");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedMetastaticPatient);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.patients.metastatic);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedMetastaticPatient !== undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedNonmetastaticPatient);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.patients.nonmetastatic);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedNonmetastaticPatient !== undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.activeMenuItem.threshold);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx.activeMenuItem.threshold ? "block" : "none");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.thresholds !== undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.activeMenuItem.nodes);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx.activeMenuItem.nodes ? "block" : "none");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchNode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchNode.length !== 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchNode.length === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.nodes.length);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedNonmetastaticPatient === undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedMetastaticPatient !== undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedNonmetastaticPatient !== undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" All (", ctx.subtypeCounts !== undefined ? ctx.subtypeCounts["all"] : "", ") ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.nodes);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx.selectedNode.length === 0 ? "none" : "block");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.activeMenuItem.layout);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx.activeMenuItem.layout ? "block" : "none");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx.selectedMetastaticPatient !== undefined || ctx.selectedNonmetastaticPatient !== undefined ? "block" : "none");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.objectKeys(ctx.layoutNodeColorOptions));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx.selectedMetastaticPatient !== undefined || ctx.selectedNonmetastaticPatient !== undefined ? "block" : "none");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.layoutAllNodes);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.layoutMtbNodes);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx.selectedMetastaticPatient !== undefined && ctx.selectedNonmetastaticPatient !== undefined ? "block" : "none");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.layoutOnlyShared);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx.XOR(ctx.selectedMetastaticPatient !== undefined, ctx.selectedNonmetastaticPatient !== undefined) ? "block" : "none");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.objectKeys(ctx.layoutNodeSizeOptions));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx.selectedMetastaticPatient === undefined && ctx.selectedNonmetastaticPatient === undefined ? "block" : "none");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.activeMenuItem.download);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx.activeMenuItem.download ? "block" : "none");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.downloadFormat === "png");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.downloadFormat)("checked", ctx.downloadFormat === "png");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.downloadFormat === "jpg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.downloadFormat)("checked", ctx.downloadFormat === "jpg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.downloadScaleImageBy);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx.downloadFormat !== "jpg" ? "block" : "none");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.downloadTransparent);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx.activeMenuItem.impressum ? "block" : "none");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](73, _c1, _r13.offsetHeight - _r14.offsetHeight - 50));
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RadioControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgStyle"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RangeValueAccessor"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DecimalPipe"]],
      styles: ["@-webkit-keyframes swing {\n  0% {\n    transform: rotate(0deg);\n  }\n  10% {\n    transform: rotate(10deg);\n  }\n  30% {\n    transform: rotate(0deg);\n  }\n  40% {\n    transform: rotate(-10deg);\n  }\n  50% {\n    transform: rotate(0deg);\n  }\n  60% {\n    transform: rotate(5deg);\n  }\n  70% {\n    transform: rotate(0deg);\n  }\n  80% {\n    transform: rotate(-5deg);\n  }\n  100% {\n    transform: rotate(0deg);\n  }\n}\n\n@keyframes swing {\n  0% {\n    transform: rotate(0deg);\n  }\n  10% {\n    transform: rotate(10deg);\n  }\n  30% {\n    transform: rotate(0deg);\n  }\n  40% {\n    transform: rotate(-10deg);\n  }\n  50% {\n    transform: rotate(0deg);\n  }\n  60% {\n    transform: rotate(5deg);\n  }\n  70% {\n    transform: rotate(0deg);\n  }\n  80% {\n    transform: rotate(-5deg);\n  }\n  100% {\n    transform: rotate(0deg);\n  }\n}\n\n@-webkit-keyframes sonar {\n  0% {\n    transform: scale(0.9);\n    opacity: 1;\n  }\n  100% {\n    transform: scale(2);\n    opacity: 0;\n  }\n}\n\n@keyframes sonar {\n  0% {\n    transform: scale(0.9);\n    opacity: 1;\n  }\n  100% {\n    transform: scale(2);\n    opacity: 0;\n  }\n}\n\nbody[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n\n.page-wrapper[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%], .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-brand[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:after, .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .sidebar-submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before, .sidebar-wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .page-wrapper[_ngcontent-%COMP%]   .page-content[_ngcontent-%COMP%], .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   input.search-menu[_ngcontent-%COMP%], .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%], .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], #show-sidebar[_ngcontent-%COMP%], #close-sidebar[_ngcontent-%COMP%] {\n  transition: all 0.3s ease;\n}\n\n\n\n.page-wrapper[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n\n.page-wrapper[_ngcontent-%COMP%]   .theme[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  display: inline-block;\n  border-radius: 4px;\n  margin: 2px;\n}\n\n.page-wrapper[_ngcontent-%COMP%]   .theme.chiller-theme[_ngcontent-%COMP%] {\n  background: #1e2229;\n}\n\n\n\n.page-wrapper.toggled[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%] {\n  left: 0px;\n}\n\n@media screen and (min-width: 768px) {\n  .page-wrapper.toggled[_ngcontent-%COMP%]   .page-content[_ngcontent-%COMP%] {\n    padding-left: 370px;\n  }\n}\n\n\n\n#show-sidebar[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 0;\n  top: 10px;\n  border-radius: 0 4px 4px 0px;\n  width: 35px;\n  transition-delay: 0.3s;\n  font-size: 1.0rem;\n  line-height: 1.1;\n  padding-left: 8px;\n}\n\n.page-wrapper.toggled[_ngcontent-%COMP%]   #show-sidebar[_ngcontent-%COMP%] {\n  left: -40px;\n}\n\n\n\n.sidebar-wrapper[_ngcontent-%COMP%] {\n  width: 370px;\n  height: 100%;\n  max-height: 100%;\n  position: fixed;\n  top: 0;\n  left: -410px;\n  z-index: 999;\n}\n\n.sidebar-wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n}\n\n.sidebar-wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n\n\n.sidebar-content[_ngcontent-%COMP%] {\n  max-height: calc(100% - 30px);\n  height: calc(100% - 30px);\n  overflow-y: scroll;\n  overflow-x: hidden;\n  position: relative;\n}\n\n.sidebar-content.desktop[_ngcontent-%COMP%] {\n  overflow-y: hidden;\n}\n\n\n\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-brand[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  display: flex;\n  align-items: center;\n}\n\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-brand[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-weight: bold;\n  flex-grow: 1;\n}\n\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-brand[_ngcontent-%COMP%]   #close-sidebar[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font-size: 20px;\n}\n\n\n\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%] {\n  padding: 20px;\n  overflow: hidden;\n}\n\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   .user-pic[_ngcontent-%COMP%] {\n  float: left;\n  width: 60px;\n  padding: 2px;\n  border-radius: 12px;\n  margin-right: 15px;\n  overflow: hidden;\n}\n\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   .user-pic[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  -o-object-fit: cover;\n     object-fit: cover;\n  height: 100%;\n  width: 100%;\n}\n\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%] {\n  float: left;\n}\n\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-role[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-status[_ngcontent-%COMP%] {\n  font-size: 11px;\n  margin-top: 4px;\n}\n\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-status[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 8px;\n  margin-right: 4px;\n  color: #5cb85c;\n}\n\n\n\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n}\n\n\n\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%] {\n  padding-bottom: 10px;\n}\n\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .header-menu[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 14px;\n  padding: 15px 20px 5px 20px;\n  display: inline-block;\n}\n\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  text-decoration: none;\n  position: relative;\n  padding: 8px 30px 8px 20px;\n}\n\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  font-size: 12px;\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n  text-align: center;\n  border-radius: 4px;\n}\n\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover    > i[_ngcontent-%COMP%]::before {\n  display: inline-block;\n  -webkit-animation: swing ease-in-out 0.5s 1 alternate;\n          animation: swing ease-in-out 0.5s 1 alternate;\n}\n\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:after {\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 900;\n  content: \"\\f105\";\n  font-style: normal;\n  display: inline-block;\n  font-style: normal;\n  font-variant: normal;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-align: center;\n  background: 0 0;\n  position: absolute;\n  right: 15px;\n  top: 14px;\n}\n\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .sidebar-submenu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding: 5px 0;\n}\n\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .sidebar-submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding-left: 25px;\n  padding-right: 25px;\n  font-size: 13px;\n}\n\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .sidebar-submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before {\n  content: \"\\f111\";\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 400;\n  font-style: normal;\n  display: inline-block;\n  text-align: center;\n  text-decoration: none;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  margin-right: 10px;\n  font-size: 8px;\n}\n\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span.label[_ngcontent-%COMP%], .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span.badge[_ngcontent-%COMP%] {\n  float: right;\n  margin-top: 8px;\n  margin-left: 5px;\n}\n\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .sidebar-submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%], .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .sidebar-submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  float: right;\n  margin-top: 0px;\n}\n\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-submenu[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:after {\n  transform: rotate(90deg);\n  right: 17px;\n}\n\n\n\n.sidebar-footer[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  bottom: 0;\n  display: flex;\n}\n\n.sidebar-footer[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  text-align: center;\n  height: 30px;\n  line-height: 30px;\n  position: relative;\n}\n\n.sidebar-footer[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   .notification[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n}\n\n.badge-sonar[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: #980303;\n  border-radius: 50%;\n  height: 8px;\n  width: 8px;\n  position: absolute;\n  top: 0;\n}\n\n.badge-sonar[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  border: 2px solid #980303;\n  opacity: 0;\n  border-radius: 50%;\n  width: 100%;\n  height: 100%;\n  -webkit-animation: sonar 1.5s infinite;\n          animation: sonar 1.5s infinite;\n}\n\n\n\n.page-wrapper[_ngcontent-%COMP%]   .page-content[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  padding-left: 0px;\n  padding-top: 20px;\n}\n\n.page-wrapper[_ngcontent-%COMP%]   .page-content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  padding: 20px 40px;\n}\n\n.page-wrapper[_ngcontent-%COMP%]   .page-content[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n  height: 100%;\n}\n\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 5px;\n  height: 7px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-button {\n  width: 0px;\n  height: 0px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #525965;\n  border: 0px none #ffffff;\n  border-radius: 0px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #525965;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:active {\n  background: #525965;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n  border: 0px none #ffffff;\n  border-radius: 50px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-track:hover {\n  background: transparent;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-track:active {\n  background: transparent;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-corner {\n  background: transparent;\n}\n\n\n\n.chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%] {\n  background: #31353D;\n}\n\n.chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%] {\n  border-top: 1px solid #3a3f48;\n}\n\n.chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   input.search-menu[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\n  border-color: transparent;\n  box-shadow: none;\n}\n\n.chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-role[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-status[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   input.search-menu[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-brand[_ngcontent-%COMP%] > a[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] {\n  color: #818896;\n}\n\n.chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover > a[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown.active[_ngcontent-%COMP%] > a[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-brand[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover, .chiller-theme[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  color: #b8bfce;\n}\n\n.page-wrapper.chiller-theme.toggled[_ngcontent-%COMP%]   #close-sidebar[_ngcontent-%COMP%] {\n  color: #bdbdbd;\n}\n\n.page-wrapper.chiller-theme.toggled[_ngcontent-%COMP%]   #close-sidebar[_ngcontent-%COMP%]:hover {\n  color: #ffffff;\n}\n\n.chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .sidebar-submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:before, .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   input.search-menu[_ngcontent-%COMP%]:focus + span[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #16c7ff;\n  text-shadow:0px 0px 10px rgba(22, 199, 255, 0.5);\n}\n\n.chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   input.search-menu[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\n  background: #3a3f48;\n}\n\n.chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .header-menu[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #6c7b88;\n}\n\n.chiller-theme[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%] {\n  background: #3a3f48;\n  box-shadow: 0px -1px 5px #282c33;\n  border-top: 1px solid #464a52;\n}\n\n.chiller-theme[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:first-child {\n  border-left: none;\n}\n\n.chiller-theme[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0Usd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0Usd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSx1QkFBdUI7RUFDekI7QUFDRjs7QUE1QkE7RUFDRTtJQUNFLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0Usd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0Usd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSx1QkFBdUI7RUFDekI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UscUJBQXFCO0lBQ3JCLFVBQVU7RUFDWjtFQUNBO0lBQ0UsbUJBQW1CO0lBQ25CLFVBQVU7RUFDWjtBQUNGOztBQVRBO0VBQ0U7SUFDRSxxQkFBcUI7SUFDckIsVUFBVTtFQUNaO0VBQ0E7SUFDRSxtQkFBbUI7SUFDbkIsVUFBVTtFQUNaO0FBQ0Y7O0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7O0FBQ0E7Ozs7Ozs7Ozs7O0VBZUUseUJBQXlCO0FBQzNCOztBQUVBLCtDQUErQzs7QUFFL0M7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBLG1EQUFtRDs7QUFFbkQ7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRTtJQUNFLG1CQUFtQjtFQUNyQjtBQUNGOztBQUNBLHNEQUFzRDs7QUFDdEQ7RUFDRSxlQUFlO0VBQ2YsT0FBTztFQUNQLFNBQVM7RUFDVCw0QkFBNEI7RUFDNUIsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLFdBQVc7QUFDYjs7QUFDQSxrREFBa0Q7O0FBRWxEO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLE1BQU07RUFDTixZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUEsa0RBQWtEOztBQUVsRDtFQUNFLDZCQUE2QjtFQUM3Qix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUEsMERBQTBEOztBQUUxRDtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFDQSwyREFBMkQ7O0FBRTNEO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usb0JBQWlCO0tBQWpCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsY0FBYztBQUNoQjs7QUFFQSxnRUFBZ0U7O0FBRWhFO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBLDhEQUE4RDs7QUFFOUQ7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLDJCQUEyQjtFQUMzQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHFEQUE2QztVQUE3Qyw2Q0FBNkM7QUFDL0M7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsb0JBQW9CO0VBQ3BCLG1DQUFtQztFQUNuQyxrQ0FBa0M7RUFDbEMsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0NBQWtDO0VBQ2xDLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsbUNBQW1DO0VBQ25DLGtDQUFrQztFQUNsQyxrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixXQUFXO0FBQ2I7O0FBRUEsc0VBQXNFOztBQUV0RTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsU0FBUztFQUNULGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtBQUNSOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsTUFBTTtBQUNSOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLHlCQUF5QjtFQUN6QixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0NBQThCO1VBQTlCLDhCQUE4QjtBQUNoQzs7QUFFQSxzRUFBc0U7O0FBRXRFO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQSx3Q0FBd0M7O0FBRXhDO0VBQ0UsVUFBVTtFQUNWLFdBQVc7QUFDYjs7QUFDQTtFQUNFLFVBQVU7RUFDVixXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsd0JBQXdCO0VBQ3hCLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLHVCQUF1QjtFQUN2Qix3QkFBd0I7RUFDeEIsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUdBLDhGQUE4Rjs7QUFFOUY7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7OztFQUdFLDZCQUE2QjtBQUMvQjs7QUFFQTs7RUFFRSx5QkFBeUI7RUFDekIsZ0JBQWdCO0FBQ2xCOztBQUVBOzs7Ozs7O0VBT0UsY0FBYztBQUNoQjs7QUFFQTs7Ozs7RUFLRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7Ozs7RUFJRSxjQUFjO0VBQ2QsZ0RBQWdEO0FBQ2xEOztBQUVBOzs7O0VBSUUsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixnQ0FBZ0M7RUFDaEMsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAa2V5ZnJhbWVzIHN3aW5nIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTBkZWcpO1xuICB9XG4gIDMwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgNDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTBkZWcpO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgNjAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg1ZGVnKTtcbiAgfVxuICA3MCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDgwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTVkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc29uYXIge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgyKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5ib2R5IHtcbiAgZm9udC1zaXplOiAwLjlyZW07XG59XG4ucGFnZS13cmFwcGVyIC5zaWRlYmFyLXdyYXBwZXIsXG4uc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLWJyYW5kID4gYSxcbi5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItZHJvcGRvd24gPiBhOmFmdGVyLFxuLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1tZW51IC5zaWRlYmFyLWRyb3Bkb3duIC5zaWRlYmFyLXN1Ym1lbnUgbGkgYTpiZWZvcmUsXG4uc2lkZWJhci13cmFwcGVyIHVsIGxpIGEgaSxcbi5wYWdlLXdyYXBwZXIgLnBhZ2UtY29udGVudCxcbi5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItc2VhcmNoIGlucHV0LnNlYXJjaC1tZW51LFxuLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1zZWFyY2ggLmlucHV0LWdyb3VwLXRleHQsXG4uc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLW1lbnUgdWwgbGkgYSxcbiNzaG93LXNpZGViYXIsXG4jY2xvc2Utc2lkZWJhciB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tcGFnZS13cmFwcGVyLS0tLS0tLS0tLS0tLS0tLSovXG5cbi5wYWdlLXdyYXBwZXIge1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4ucGFnZS13cmFwcGVyIC50aGVtZSB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBtYXJnaW46IDJweDtcbn1cblxuLnBhZ2Utd3JhcHBlciAudGhlbWUuY2hpbGxlci10aGVtZSB7XG4gIGJhY2tncm91bmQ6ICMxZTIyMjk7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLXRvZ2dlbGVkIHNpZGViYXItLS0tLS0tLS0tLS0tLS0tKi9cblxuLnBhZ2Utd3JhcHBlci50b2dnbGVkIC5zaWRlYmFyLXdyYXBwZXIge1xuICBsZWZ0OiAwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5wYWdlLXdyYXBwZXIudG9nZ2xlZCAucGFnZS1jb250ZW50IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDM3MHB4O1xuICB9XG59XG4vKi0tLS0tLS0tLS0tLS0tLS1zaG93IHNpZGViYXIgYnV0dG9uLS0tLS0tLS0tLS0tLS0tLSovXG4jc2hvdy1zaWRlYmFyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICB0b3A6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDAgNHB4IDRweCAwcHg7XG4gIHdpZHRoOiAzNXB4O1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjNzO1xuICBmb250LXNpemU6IDEuMHJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuMTtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG59XG4ucGFnZS13cmFwcGVyLnRvZ2dsZWQgI3Nob3ctc2lkZWJhciB7XG4gIGxlZnQ6IC00MHB4O1xufVxuLyotLS0tLS0tLS0tLS0tLS0tc2lkZWJhci13cmFwcGVyLS0tLS0tLS0tLS0tLS0tLSovXG5cbi5zaWRlYmFyLXdyYXBwZXIge1xuICB3aWR0aDogMzcwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IC00MTBweDtcbiAgei1pbmRleDogOTk5O1xufVxuXG4uc2lkZWJhci13cmFwcGVyIHVsIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG5cbi5zaWRlYmFyLXdyYXBwZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tc2lkZWJhci1jb250ZW50LS0tLS0tLS0tLS0tLS0tLSovXG5cbi5zaWRlYmFyLWNvbnRlbnQge1xuICBtYXgtaGVpZ2h0OiBjYWxjKDEwMCUgLSAzMHB4KTtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzMHB4KTtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnNpZGViYXItY29udGVudC5kZXNrdG9wIHtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tc2lkZWJhci1icmFuZC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4uc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLWJyYW5kIHtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLWJyYW5kID4gYSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmbGV4LWdyb3c6IDE7XG59XG5cbi5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItYnJhbmQgI2Nsb3NlLXNpZGViYXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS1zaWRlYmFyLWhlYWRlci0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4uc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLWhlYWRlciB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItaGVhZGVyIC51c2VyLXBpYyB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogNjBweDtcbiAgcGFkZGluZzogMnB4O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItaGVhZGVyIC51c2VyLXBpYyBpbWcge1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1oZWFkZXIgLnVzZXItaW5mbyB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4uc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLWhlYWRlciAudXNlci1pbmZvID4gc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLWhlYWRlciAudXNlci1pbmZvIC51c2VyLXJvbGUge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItaGVhZGVyIC51c2VyLWluZm8gLnVzZXItc3RhdHVzIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBtYXJnaW4tdG9wOiA0cHg7XG59XG5cbi5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItaGVhZGVyIC51c2VyLWluZm8gLnVzZXItc3RhdHVzIGkge1xuICBmb250LXNpemU6IDhweDtcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gIGNvbG9yOiAjNWNiODVjO1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tc2lkZWJhci1zZWFyY2gtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4uc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLXNlYXJjaCA+IGRpdiB7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tc2lkZWJhci1tZW51LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbi5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItbWVudSB7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG4uc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLW1lbnUgLmhlYWRlci1tZW51IHNwYW4ge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiAxNXB4IDIwcHggNXB4IDIwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1tZW51IHVsIGxpIGEge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogOHB4IDMwcHggOHB4IDIwcHg7XG59XG5cbi5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItbWVudSB1bCBsaSBhIGkge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4uc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLW1lbnUgdWwgbGkgYTpob3ZlciA+IGk6OmJlZm9yZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYW5pbWF0aW9uOiBzd2luZyBlYXNlLWluLW91dCAwLjVzIDEgYWx0ZXJuYXRlO1xufVxuXG4uc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLW1lbnUgLnNpZGViYXItZHJvcGRvd24gPiBhOmFmdGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgRnJlZVwiO1xuICBmb250LXdlaWdodDogOTAwO1xuICBjb250ZW50OiBcIlxcZjEwNVwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcbiAgdGV4dC1yZW5kZXJpbmc6IGF1dG87XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IDAgMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTVweDtcbiAgdG9wOiAxNHB4O1xufVxuXG4uc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLW1lbnUgLnNpZGViYXItZHJvcGRvd24gLnNpZGViYXItc3VibWVudSB1bCB7XG4gIHBhZGRpbmc6IDVweCAwO1xufVxuXG4uc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLW1lbnUgLnNpZGViYXItZHJvcGRvd24gLnNpZGViYXItc3VibWVudSBsaSB7XG4gIHBhZGRpbmctbGVmdDogMjVweDtcbiAgcGFkZGluZy1yaWdodDogMjVweDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLW1lbnUgLnNpZGViYXItZHJvcGRvd24gLnNpZGViYXItc3VibWVudSBsaSBhOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTExXCI7XG4gIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IEZyZWVcIjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBmb250LXNpemU6IDhweDtcbn1cblxuLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1tZW51IHVsIGxpIGEgc3Bhbi5sYWJlbCxcbi5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItbWVudSB1bCBsaSBhIHNwYW4uYmFkZ2Uge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1tZW51IC5zaWRlYmFyLWRyb3Bkb3duIC5zaWRlYmFyLXN1Ym1lbnUgbGkgYSAuYmFkZ2UsXG4uc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLW1lbnUgLnNpZGViYXItZHJvcGRvd24gLnNpZGViYXItc3VibWVudSBsaSBhIC5sYWJlbCB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuXG4uc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLW1lbnUgLnNpZGViYXItc3VibWVudSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItbWVudSAuc2lkZWJhci1kcm9wZG93bi5hY3RpdmUgPiBhOmFmdGVyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICByaWdodDogMTdweDtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXNpZGUtZm9vdGVyLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuLnNpZGViYXItZm9vdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgYm90dG9tOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uc2lkZWJhci1mb290ZXIgPiBhIHtcbiAgZmxleC1ncm93OiAxO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogMzBweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnNpZGViYXItZm9vdGVyID4gYSAubm90aWZpY2F0aW9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG59XG5cbi5iYWRnZS1zb25hciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZDogIzk4MDMwMztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBoZWlnaHQ6IDhweDtcbiAgd2lkdGg6IDhweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG59XG5cbi5iYWRnZS1zb25hcjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3JkZXI6IDJweCBzb2xpZCAjOTgwMzAzO1xuICBvcGFjaXR5OiAwO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGFuaW1hdGlvbjogc29uYXIgMS41cyBpbmZpbml0ZTtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXBhZ2UtY29udGVudC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuLnBhZ2Utd3JhcHBlciAucGFnZS1jb250ZW50IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuXG4ucGFnZS13cmFwcGVyIC5wYWdlLWNvbnRlbnQgPiBkaXYge1xuICBwYWRkaW5nOiAyMHB4IDQwcHg7XG59XG5cbi5wYWdlLXdyYXBwZXIgLnBhZ2UtY29udGVudCB7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4vKi0tLS0tLXNjcm9sbCBiYXItLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDVweDtcbiAgaGVpZ2h0OiA3cHg7XG59XG46Oi13ZWJraXQtc2Nyb2xsYmFyLWJ1dHRvbiB7XG4gIHdpZHRoOiAwcHg7XG4gIGhlaWdodDogMHB4O1xufVxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6ICM1MjU5NjU7XG4gIGJvcmRlcjogMHB4IG5vbmUgI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xufVxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICM1MjU5NjU7XG59XG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICM1MjU5NjU7XG59XG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMHB4IG5vbmUgI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbn1cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2s6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2s6YWN0aXZlIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG46Oi13ZWJraXQtc2Nyb2xsYmFyLWNvcm5lciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1jaGlsbGVyLXRoZW1lLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbi5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiAjMzEzNTNEO1xufVxuXG4uY2hpbGxlci10aGVtZSAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLWhlYWRlcixcbi5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItc2VhcmNoLFxuLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1tZW51IHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMzYTNmNDg7XG59XG5cbi5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItc2VhcmNoIGlucHV0LnNlYXJjaC1tZW51LFxuLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1zZWFyY2ggLmlucHV0LWdyb3VwLXRleHQge1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4uY2hpbGxlci10aGVtZSAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLWhlYWRlciAudXNlci1pbmZvIC51c2VyLXJvbGUsXG4uY2hpbGxlci10aGVtZSAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLWhlYWRlciAudXNlci1pbmZvIC51c2VyLXN0YXR1cyxcbi5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItc2VhcmNoIGlucHV0LnNlYXJjaC1tZW51LFxuLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1zZWFyY2ggLmlucHV0LWdyb3VwLXRleHQsXG4uY2hpbGxlci10aGVtZSAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLWJyYW5kPmEsXG4uY2hpbGxlci10aGVtZSAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLW1lbnUgdWwgbGkgYSxcbi5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLWZvb3Rlcj5hIHtcbiAgY29sb3I6ICM4MTg4OTY7XG59XG5cbi5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItbWVudSB1bCBsaTpob3Zlcj5hLFxuLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1tZW51IC5zaWRlYmFyLWRyb3Bkb3duLmFjdGl2ZT5hLFxuLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1oZWFkZXIgLnVzZXItaW5mbyxcbi5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItYnJhbmQ+YTpob3Zlcixcbi5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLWZvb3Rlcj5hOmhvdmVyIGkge1xuICBjb2xvcjogI2I4YmZjZTtcbn1cblxuLnBhZ2Utd3JhcHBlci5jaGlsbGVyLXRoZW1lLnRvZ2dsZWQgI2Nsb3NlLXNpZGViYXIge1xuICBjb2xvcjogI2JkYmRiZDtcbn1cblxuLnBhZ2Utd3JhcHBlci5jaGlsbGVyLXRoZW1lLnRvZ2dsZWQgI2Nsb3NlLXNpZGViYXI6aG92ZXIge1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciB1bCBsaTpob3ZlciBhIGksXG4uY2hpbGxlci10aGVtZSAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLWRyb3Bkb3duIC5zaWRlYmFyLXN1Ym1lbnUgbGkgYTpob3ZlcjpiZWZvcmUsXG4uY2hpbGxlci10aGVtZSAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLXNlYXJjaCBpbnB1dC5zZWFyY2gtbWVudTpmb2N1cytzcGFuLFxuLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1tZW51IC5zaWRlYmFyLWRyb3Bkb3duLmFjdGl2ZSBhIGkge1xuICBjb2xvcjogIzE2YzdmZjtcbiAgdGV4dC1zaGFkb3c6MHB4IDBweCAxMHB4IHJnYmEoMjIsIDE5OSwgMjU1LCAwLjUpO1xufVxuXG4uY2hpbGxlci10aGVtZSAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLW1lbnUgdWwgbGkgYSBpLFxuLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1tZW51IC5zaWRlYmFyLWRyb3Bkb3duIGRpdixcbi5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItc2VhcmNoIGlucHV0LnNlYXJjaC1tZW51LFxuLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1zZWFyY2ggLmlucHV0LWdyb3VwLXRleHQge1xuICBiYWNrZ3JvdW5kOiAjM2EzZjQ4O1xufVxuXG4uY2hpbGxlci10aGVtZSAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLW1lbnUgLmhlYWRlci1tZW51IHNwYW4ge1xuICBjb2xvcjogIzZjN2I4ODtcbn1cblxuLmNoaWxsZXItdGhlbWUgLnNpZGViYXItZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogIzNhM2Y0ODtcbiAgYm94LXNoYWRvdzogMHB4IC0xcHggNXB4ICMyODJjMzM7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNDY0YTUyO1xufVxuXG4uY2hpbGxlci10aGVtZSAuc2lkZWJhci1mb290ZXI+YTpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xufVxuXG4uY2hpbGxlci10aGVtZSAuc2lkZWJhci1mb290ZXI+YTpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }, {
          type: _data_loader_service__WEBPACK_IMPORTED_MODULE_5__["DataLoaderService"]
        }, {
          type: _cy_graph_service__WEBPACK_IMPORTED_MODULE_6__["CyGraphService"]
        }];
      }, {
        cyDiv: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['cy']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/cy-graph.service.ts":
  /*!*************************************!*\
    !*** ./src/app/cy-graph.service.ts ***!
    \*************************************/

  /*! exports provided: CyGraphService */

  /***/
  function srcAppCyGraphServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CyGraphService", function () {
      return CyGraphService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var cytoscape__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! cytoscape */
    "./node_modules/cytoscape/dist/cytoscape.cjs.js");
    /* harmony import */


    var cytoscape__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(cytoscape__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _data_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./data-loader.service */
    "./src/app/data-loader.service.ts");

    var CyGraphService =
    /*#__PURE__*/
    function () {
      function CyGraphService(dataLoader) {
        _classCallCheck(this, CyGraphService);

        this.dataLoader = dataLoader;
        this.colors = {
          red: '#ff3d6a',
          yellow: '#e8e857',
          // yellow: '#d6d656',
          blue: '#599eff',
          green: '#0b0',
          gray: '#888',
          highlight: '#333'
        };
        this.showAllNodes = false;
        this.showOnlySharedNodes = false;
      }

      _createClass(CyGraphService, [{
        key: "initGraph",
        value: function initGraph(cyDiv, network, sizeBy, colorBy) {
          var _this4 = this;

          this.sizeBy = sizeBy;
          this.colorBy = colorBy; // console.log("In the init of cyService");

          this.dataLoader.getNetwork().subscribe(function (network) {
            // console.log("init cytoscape");
            var layer = {};
            var numberOfLayers = 11;
            network.nodes.forEach(function (node, i) {
              if (i < 1) {
                layer[node.data.id] = numberOfLayers; //1
              } else if (i < 5) {
                //5=4+1
                layer[node.data.id] = numberOfLayers - 1; //4
              } else if (i < 17) {
                //17=12+5
                layer[node.data.id] = numberOfLayers - 2; //12=4*3
              } else if (i < 37) {
                //53=36+17
                layer[node.data.id] = numberOfLayers - 3; //36=12*3
              } else if (i < 61) {
                //161=108+53
                layer[node.data.id] = numberOfLayers - 4; //108=36*3
              } else if (i < 93) {
                layer[node.data.id] = numberOfLayers - 5;
              } else if (i < 133) {
                layer[node.data.id] = numberOfLayers - 6;
              } else if (i < 173) {
                layer[node.data.id] = numberOfLayers - 7;
              } else if (i < 225) {
                layer[node.data.id] = numberOfLayers - 8;
              } else if (i < 285) {
                layer[node.data.id] = numberOfLayers - 9;
              } else if (i < 335) {
                layer[node.data.id] = numberOfLayers - 10;
              } else {
                layer[node.data.id] = numberOfLayers - 11;
              }
            }); // console.log('Layer: ' + network.nodes[1].layer);

            _this4.cy = cytoscape__WEBPACK_IMPORTED_MODULE_1___default()({
              container: cyDiv.nativeElement,
              elements: network,
              style: [{
                selector: 'node',
                style: {
                  label: 'data(id)',
                  'text-valign': 'center',
                  'background-color': _this4.colors.gray,
                  color: '#fff',
                  // color: '#242424',
                  'text-outline-color': _this4.colors.gray,
                  'text-outline-width': '5px',
                  width: '50px',
                  height: '50px'
                }
              }, {
                selector: 'node[color], node[colorMet], node[colorNonMet]',
                style: {
                  color: '#383838',
                  'font-weight': 'bold'
                }
              }, {
                selector: 'node[!shown]',
                style: {
                  visibility: 'hidden'
                }
              }, {
                selector: 'node.mtb',
                style: {
                  'border-width': '15px',
                  'border-color': _this4.colors.green
                }
              }, {
                selector: 'node.split',
                style: {
                  'text-outline-width': '0px',
                  'text-outline-color': _this4.colors.gray,
                  'text-outline-opacity': '0.3',
                  width: '80px',
                  height: '80px',
                  'pie-size': '100%',
                  'pie-1-background-color': 'green',
                  'pie-1-background-size': '50%',
                  'pie-2-background-color': 'green',
                  'pie-2-background-size': '50%'
                }
              }, {
                selector: 'node.splitLeft',
                style: {
                  'text-outline-width': '0px',
                  'text-outline-color': _this4.colors.gray,
                  'text-outline-opacity': '0.3',
                  width: '80px',
                  height: '80px',
                  'pie-size': '100%',
                  'pie-1-background-color': 'green',
                  'pie-1-background-size': '50%',
                  'pie-2-background-color': 'green',
                  'pie-2-background-size': '50%'
                }
              }, {
                selector: 'node.highlight',
                style: {
                  'border-width': '13px',
                  'border-color': _this4.colors.highlight
                }
              }, {
                selector: 'edge[!shown]',
                style: {
                  visibility: 'hidden'
                }
              }, {
                selector: 'edge',
                style: {
                  width: 3,
                  'line-color': '#ccc',
                  'target-arrow-color': '#ccc',
                  'target-arrow-shape': 'triangle'
                }
              }, {
                selector: 'edge.highlight',
                style: {
                  width: 3,
                  'line-color': _this4.colors.highlight
                }
              }],
              layout: {
                name: 'concentric',
                levelWidth: function levelWidth(nodes) {
                  return 1;
                },
                concentric: function concentric(node) {
                  // console.log('Node: ' + node.data('id') + ' Layer: ' + layer[node.data('id')]);
                  return layer[node.data('id')];
                },
                spacingFactor: 1.65
              } // layout: {
              //   name: 'grid',
              // }

            });

            _this4.cy.elements('node,edge').data('shown', true);
          });
        }
      }, {
        key: "setGeRange",
        value: function setGeRange(geMin, geMax) {
          this.geMin = geMin;
          this.geMax = geMax; // console.log('ge range: '+this.geMin+'-'+this.geMax);
        }
      }, {
        key: "setMetastaticPatient",
        value: function setMetastaticPatient(metPat) {
          this.metPat = metPat;
          this.layoutPatient();
        }
      }, {
        key: "setNonMetastaticPatient",
        value: function setNonMetastaticPatient(nonPat) {
          this.nonPat = nonPat;
          this.layoutPatient();
        }
      }, {
        key: "setShowAllNodes",
        value: function setShowAllNodes(shown) {
          this.showAllNodes = shown;
          this.updataShownNodes();
        }
      }, {
        key: "setShowOnlySharedNodes",
        value: function setShowOnlySharedNodes(shown) {
          this.showOnlySharedNodes = shown;
          this.updataShownNodes();
        }
      }, {
        key: "setShowMtbNodes",
        value: function setShowMtbNodes(shown) {
          this.showMtbNodes = shown;
          this.updateMtbNodes();
        }
      }, {
        key: "setSizeBy",
        value: function setSizeBy(by) {
          this.sizeBy = by;
          this.layoutPatient();
        }
      }, {
        key: "setColorBy",
        value: function setColorBy(by) {
          this.colorBy = by;
          this.layoutPatient();
        }
      }, {
        key: "getNetwork",
        value: function getNetwork() {
          var nodes = [];
          this.cy.elements('node[?shown]').forEach(function (node) {
            // console.log('Get Network from CS: ' + Object.keys(node.data()) + Object.values(node.data()));
            nodes.push({
              id: node.id(),
              connected: node.connectedEdges()
            });
          });
          return nodes;
        }
      }, {
        key: "updataShownNodes",
        value: function updataShownNodes() {
          var _this5 = this;

          this.cy.batch(function () {
            _this5.cy.elements('node[member]').data('shown', true);

            _this5.cy.elements('node[!member]').data('shown', _this5.showAllNodes);

            _this5.cy.elements('node[member]').connectedEdges().data('shown', true);

            _this5.cy.elements('node[!member]').connectedEdges().data('shown', _this5.showAllNodes);

            _this5.cy.elements('node.split[colorMet][^colorNonMet]').data('shown', !_this5.showOnlySharedNodes);

            _this5.cy.elements('node.split[^colorMet][colorNonMet]').data('shown', !_this5.showOnlySharedNodes);

            _this5.cy.elements('node.split[colorMet][^colorNonMet], node.split[^colorMet][colorNonMet]').connectedEdges('edge[?shown]').data('shown', !_this5.showOnlySharedNodes);
          });
        }
      }, {
        key: "clear",
        value: function clear() {
          var _this6 = this;

          this.cy.batch(function () {
            _this6.cy.elements('node').removeData('member').removeData('color').removeData('colorMet').removeData('colorNonMet').removeData('size').removeClass('mtb').removeClass('split');

            _this6.removeSizeMap(); // this.updataShownNodes();

          });
        }
      }, {
        key: "setSizeMap",
        value: function setSizeMap(minValue, maxValue) {
          var sizeMap = 'mapData(size, ' + minValue + ', ' + maxValue + ', 50, 130)';
          var fontSizeMap = 'mapData(size, ' + minValue + ', ' + maxValue + ', 18, 30)';
          this.cy.style().selector('node[?member]').style('width', sizeMap).style('height', sizeMap).style('font-size', fontSizeMap);
        }
      }, {
        key: "removeSizeMap",
        value: function removeSizeMap() {
          this.cy.style().selector('node[?member]') // .style('background-color', this.colors.gray)
          // .style('text-outline-color', this.colors.gray)
          .style('width', '50px').style('height', '50px').style('font-size', '18px');
        }
      }, {
        key: "setColorMap",
        value: function setColorMap(minValue, maxValue) {
          var midPoint = maxValue - (maxValue - minValue) / 2;
          var colorMap1 = 'mapData(color, ' + minValue + ', ' + maxValue + ', ' + this.colors.blue + ', ' + this.colors.yellow + ')';
          var colorMap2 = 'mapData(color, ' + minValue + ', ' + maxValue + ', ' + this.colors.yellow + ', ' + this.colors.red + ')';
          this.cy.style().selector('node[color<=' + midPoint + ']').style('background-color', colorMap1).style('text-outline-color', colorMap1).selector('node[color>' + midPoint + ']').style('background-color', colorMap2).style('text-outline-color', colorMap2);
        }
      }, {
        key: "setSplitColorMap",
        value: function setSplitColorMap(minValueMet, maxValueMet, minValueNonMet, maxValueNonMet) {
          var midPointMet = maxValueMet - (maxValueMet - minValueMet) / 2;
          var midPointNonMet = maxValueNonMet - (maxValueNonMet - minValueNonMet) / 2;
          var colorMapMet1 = 'mapData(colorMet, ' + minValueMet + ', ' + maxValueMet + ', ' + this.colors.blue + ', ' + this.colors.yellow + ')';
          var colorMapMet2 = 'mapData(colorMet, ' + minValueMet + ', ' + maxValueMet + ', ' + this.colors.yellow + ', ' + this.colors.red + ')';
          var colorMapNonMet1 = 'mapData(colorNonMet, ' + minValueNonMet + ', ' + maxValueNonMet + ', ' + this.colors.blue + ', ' + this.colors.yellow + ')';
          var colorMapNonMet2 = 'mapData(colorNonMet, ' + minValueNonMet + ', ' + maxValueNonMet + ', ' + this.colors.yellow + ', ' + this.colors.red + ')';
          this.cy.style().selector('node.split[colorMet][colorNonMet]').style('width', '80px').style('height', '80px').selector('node.split[colorMet<=' + midPointMet + ']').style('pie-2-background-color', colorMapMet1).selector('node.split[colorMet>' + midPointMet + ']').style('pie-2-background-color', colorMapMet2).selector('node.split[colorNonMet<=' + midPointNonMet + ']').style('pie-1-background-color', colorMapNonMet1).selector('node.split[colorNonMet>' + midPointNonMet + ']').style('pie-1-background-color', colorMapNonMet2).selector('node.split[colorMet][^colorNonMet]').style('pie-1-background-color', this.colors.gray).selector('node.split[^colorMet][colorNonMet]').style('pie-2-background-color', this.colors.gray);
        }
      }, {
        key: "setColorDisc",
        value: function setColorDisc() {
          this.cy.style().selector('node[color]') // .style('color', '#242424')
          .style('font-weight', 'bold').selector('node[color = \'LOW\']').style('background-color', this.colors.blue).style('text-outline-color', this.colors.blue).selector('node[color = \'NORMAL\']').style('background-color', this.colors.yellow).style('text-outline-color', this.colors.yellow).selector('node[color = \'HIGH\']').style('background-color', this.colors.red).style('text-outline-color', this.colors.red).selector('node.split[colorMet][colorNonMet]').style('width', '80px').style('height', '80px').selector('node.split[^colorMet], node.split[^colorNonMet]').style('pie-2-background-color', this.colors.gray).style('pie-1-background-color', this.colors.gray).selector('node.split[colorMet = \'LOW\']').style('pie-2-background-color', this.colors.blue).selector('node.split[colorNonMet = \'LOW\']').style('pie-1-background-color', this.colors.blue).selector('node.split[colorMet = \'NORMAL\']').style('pie-2-background-color', this.colors.yellow).selector('node.split[colorNonMet = \'NORMAL\']').style('pie-1-background-color', this.colors.yellow).selector('node.split[colorMet = \'HIGH\']').style('pie-2-background-color', this.colors.red).selector('node.split[colorNonMet = \'HIGH\']').style('pie-1-background-color', this.colors.red);
        }
      }, {
        key: "updateMtbNodes",
        value: function updateMtbNodes() {
          if (this.showMtbNodes) {
            this.cy.style().selector('node.mtb').style('border-width', '7px');
          } else {
            this.cy.style().selector('node.mtb').style('border-width', '0px');
          }

          this.layoutPatient();
        }
      }, {
        key: "visualizeOne",
        value: function visualizeOne(pat, threshold) {
          var _this7 = this;

          // console.log('Layout Patient: ' + pat.name);
          this.cy.batch(function () {
            _this7.clear();

            var size;

            if (_this7.sizeBy === 'rel') {
              size = 'score';

              _this7.setSizeMap(threshold.threshold, threshold.max); // this.setSizeMap(pat.getMinScore(), pat.getMaxScore());

            } else if (_this7.sizeBy === 'ge') {
              size = 'ge';

              _this7.setSizeMap(pat.getMinGe(), pat.getMaxGe());
            }

            var color;

            if (_this7.colorBy === 'rel') {
              color = 'score';

              _this7.setColorMap(threshold.threshold, threshold.max); // this.setColorMap(pat.getMinScore(), pat.getMaxScore());

            } else if (_this7.colorBy === 'ge') {
              color = 'ge';

              _this7.setColorMap(_this7.geMin, _this7.geMax);
            } else if (_this7.colorBy === 'geLevel') {
              color = 'geLevel';

              _this7.setColorDisc();
            }

            var _iterator = _createForOfIteratorHelper(pat.patientData),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var data = _step.value;

                // console.log("Score: " + data.score + " Threshold: " + (threshold.selected / this.thresholds.multiplier) + " IF: " + (data.score >= (threshold.selected / this.thresholds.multiplier)));
                if (data.score >= threshold.selected / _this7.thresholds.multiplier) {
                  // console.log('size: ' + size);
                  // console.log('Patient Data: ' + data);
                  var node = _this7.cy.getElementById(data.name).data('member', true).data('shown', true).data('size', data[size]).data('color', data[color]);

                  if (data.mtb) {
                    node.addClass('mtb');
                  }
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            _this7.updataShownNodes();
          });
        }
      }, {
        key: "visualizeTwo",
        value: function visualizeTwo() {
          var _this8 = this;

          // console.log('Layout Two Patients: ' + this.metPat.name + ' and ' + this.nonPat.name);
          this.cy.batch(function () {
            _this8.clear();

            var color;

            if (_this8.colorBy === 'rel') {
              color = 'score';
              var minValue = Math.min(_this8.thresholds.metastatic.threshold, _this8.thresholds.nonmetastatic.threshold);
              var maxValue = Math.max(_this8.thresholds.metastatic.max, _this8.thresholds.nonmetastatic.max);

              _this8.setColorMap(minValue, maxValue);

              _this8.setSplitColorMap(_this8.thresholds.metastatic.threshold, _this8.thresholds.metastatic.max, _this8.thresholds.nonmetastatic.threshold, _this8.thresholds.nonmetastatic.max);
            } else if (_this8.colorBy === 'ge') {
              color = 'ge'; // const minValue = Math.min(this.metPat.getMinGe(), this.nonPat.getMinGe());
              // const maxValue = Math.min(this.metPat.getMaxGe(), this.nonPat.getMaxGe());
              // this.setColorMap(minValue, maxValue);
              // this.setSplitColorMap(
              //   this.metPat.getMinGe(), this.metPat.getMaxGe(),
              //   this.nonPat.getMinGe(), this.nonPat.getMaxGe()
              // );

              _this8.setSplitColorMap(_this8.geMin, _this8.geMax, _this8.geMin, _this8.geMax);
            } else if (_this8.colorBy === 'geLevel') {
              color = 'geLevel';

              _this8.setColorDisc();
            }

            var _iterator2 = _createForOfIteratorHelper(_this8.metPat.patientData),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var data = _step2.value;

                if (data.score >= _this8.thresholds.selected / _this8.thresholds.multiplier) {
                  var node = _this8.cy.getElementById(data.name).data('member', true).data('shown', true).addClass('split').data('colorMet', data[color]);

                  if (data.mtb) {
                    node.addClass('mtb');
                  }
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            var _iterator3 = _createForOfIteratorHelper(_this8.nonPat.patientData),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var _data = _step3.value;

                if (_data.score >= _this8.thresholds.selected / _this8.thresholds.multiplier) {
                  var _node = _this8.cy.getElementById(_data.name).data('member', true).data('shown', true).addClass('split').data('colorNonMet', _data[color]);

                  if (_data.mtb) {
                    _node.addClass('mtb');
                  }
                }
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }

            _this8.updataShownNodes();
          });
        }
      }, {
        key: "visualizeTwo_old",
        value: function visualizeTwo_old() {
          var _this9 = this;

          // console.log('Layout Two Patients: ' + this.metPat.name + ' and ' + this.nonPat.name);
          this.cy.batch(function () {
            _this9.clear();

            var color;

            if (_this9.colorBy === 'rel') {
              color = 'score';
              var minValue = Math.min(_this9.thresholds.metastatic.threshold, _this9.thresholds.nonmetastatic.threshold);
              var maxValue = Math.max(_this9.thresholds.metastatic.max, _this9.thresholds.nonmetastatic.max);

              _this9.setColorMap(minValue, maxValue);

              _this9.setSplitColorMap(_this9.thresholds.metastatic.threshold, _this9.thresholds.metastatic.max, _this9.thresholds.nonmetastatic.threshold, _this9.thresholds.nonmetastatic.max);
            } else if (_this9.colorBy === 'ge') {
              color = 'ge';

              var _minValue = Math.min(_this9.metPat.getMinGe(), _this9.nonPat.getMinGe());

              var _maxValue = Math.min(_this9.metPat.getMaxGe(), _this9.nonPat.getMaxGe());

              _this9.setColorMap(_minValue, _maxValue);

              _this9.setSplitColorMap(_this9.metPat.getMinGe(), _this9.metPat.getMaxGe(), _this9.nonPat.getMinGe(), _this9.nonPat.getMaxGe());
            } else if (_this9.colorBy === 'geLevel') {
              color = 'geLevel';

              _this9.setColorDisc();
            }

            var combinedPats = {};

            var _iterator4 = _createForOfIteratorHelper(_this9.metPat.patientData),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var pat = _step4.value;
                combinedPats[pat.name] = [pat];
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }

            var _iterator5 = _createForOfIteratorHelper(_this9.nonPat.patientData),
                _step5;

            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var _pat = _step5.value;

                if (Object.keys(combinedPats).indexOf(_pat.name) > -1) {
                  combinedPats[_pat.name].push(_pat);
                } else {
                  combinedPats[_pat.name] = [_pat];
                }
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }

            for (var _i = 0, _Object$keys = Object.keys(combinedPats); _i < _Object$keys.length; _i++) {
              var nodeId = _Object$keys[_i];
              // console.log("Score: " + data.score + " Threshold: " + (threshold.selected / this.thresholds.multiplier) + " IF: " + (data.score >= (threshold.selected / this.thresholds.multiplier)));
              var data = combinedPats[nodeId]; // console.log("Node: " + nodeId + " Data: " + data + " Length: " + data.length);

              if (data.length === 2) {
                // console.log("Min Score: " + Math.max(data[0].score, data[1].score) + " Threshold: " + (this.thresholds.selected / this.thresholds.multiplier));
                if (Math.max(data[0].score, data[1].score) >= _this9.thresholds.selected / _this9.thresholds.multiplier) {
                  // console.log('Patient Data: ' + data);
                  var node = _this9.cy.getElementById(nodeId).data('member', true).data('shown', true).addClass('split').data('colorMet', data[0][color]).data('colorNonMet', data[1][color]);

                  if (data.mtb) {
                    node.addClass('mtb');
                  }
                }
              } else {
                data = data[0];

                if (data.score >= _this9.thresholds.selected / _this9.thresholds.multiplier) {
                  // console.log('Patient Data: ' + data);
                  var _node2 = _this9.cy.getElementById(data.name).data('member', true).data('shown', true).data('color', data[color]);

                  if (data.mtb) {
                    _node2.addClass('mtb');
                  }
                }
              }
            }

            _this9.updataShownNodes();
          });
        }
      }, {
        key: "layoutPatient",
        value: function layoutPatient() {
          // console.log('Met Patient defined: ' + (this.metPat !== undefined));
          // console.log('Non Patient defined: ' + (this.nonPat !== undefined));
          if (this.metPat !== undefined && this.nonPat !== undefined) {
            // console.log('Layout two patients!');
            this.clear();
            this.visualizeTwo();
          } else if (this.metPat !== undefined) {
            // console.log('Layout metPat!');
            this.visualizeOne(this.metPat, this.thresholds.metastatic);
          } else if (this.nonPat !== undefined) {
            // console.log('Layout nonPat!');
            this.visualizeOne(this.nonPat, this.thresholds.nonmetastatic);
          } else {
            // console.log('Nothing to layout!');
            this.clear();
            this.cy.elements('node').data('shown', true); // this.updataShownNodes();
          }
        }
      }, {
        key: "setThreshold",
        value: function setThreshold(thresholds) {
          this.thresholds = thresholds;
        }
      }, {
        key: "updateThreshold",
        value: function updateThreshold(thresholds) {
          this.thresholds = thresholds;
          this.layoutPatient();
        }
      }, {
        key: "getImage",
        value: function getImage(type, transparent, scaleBy) {
          var image;
          var bgColor = transparent ? 'transparent' : 'white';

          if (type === 'png') {
            image = this.cy.png({
              bg: bgColor,
              scale: scaleBy
            });
          } else {
            image = this.cy.jpg({
              scale: scaleBy
            });
          }

          return image;
        }
      }, {
        key: "highlightNode",
        value: function highlightNode(nodes) {
          var _this10 = this;

          this.cy.elements('node').removeClass('highlight');
          this.cy.elements('edge').removeClass('highlight');

          if (nodes !== undefined) {
            nodes.forEach(function (node) {
              _this10.cy.getElementById(node).addClass('highlight').connectedEdges().addClass('highlight');
            });
          }
        }
      }, {
        key: "fitGraphToViewport",
        value: function fitGraphToViewport() {
          this.cy.fit(this.cy.elements('node[?shown]'));
        }
      }]);

      return CyGraphService;
    }();

    CyGraphService.ɵfac = function CyGraphService_Factory(t) {
      return new (t || CyGraphService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_data_loader_service__WEBPACK_IMPORTED_MODULE_2__["DataLoaderService"]));
    };

    CyGraphService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CyGraphService,
      factory: CyGraphService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CyGraphService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _data_loader_service__WEBPACK_IMPORTED_MODULE_2__["DataLoaderService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/data-loader.service.ts":
  /*!****************************************!*\
    !*** ./src/app/data-loader.service.ts ***!
    \****************************************/

  /*! exports provided: DataLoaderService */

  /***/
  function srcAppDataLoaderServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataLoaderService", function () {
      return DataLoaderService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var DataLoaderService =
    /*#__PURE__*/
    function () {
      function DataLoaderService(httpClient) {
        _classCallCheck(this, DataLoaderService);

        this.httpClient = httpClient;
        this.patientsUrl = 'assets/data/patients.json';
        this.patientDataUrl = 'assets/data/patient/';
        this.thresholdUrl = 'assets/data/thresholds.json';
        this.networkUrl = 'assets/data/network.json';
      }

      _createClass(DataLoaderService, [{
        key: "getPatients",
        value: function getPatients() {
          return this.httpClient.get(this.patientsUrl);
        }
      }, {
        key: "getPatientData",
        value: function getPatientData(patientId) {
          // console.log('Called get patient data: ' + this.patientDataUrl + patientId + '.json');
          return this.httpClient.get(this.patientDataUrl + patientId + '.json');
        }
      }, {
        key: "getThresholds",
        value: function getThresholds() {
          return this.httpClient.get(this.thresholdUrl);
        } // getThresholds(): Observable<ThresholdResponse> {
        //   return this.httpClient.get<ThresholdResponse>(this.thresholdUrl);
        // }

      }, {
        key: "getNetwork",
        value: function getNetwork() {
          // console.log('Get network: ' + this.networkUrl);
          return this.httpClient.get(this.networkUrl);
        }
      }]);

      return DataLoaderService;
    }();

    DataLoaderService.ɵfac = function DataLoaderService_Factory(t) {
      return new (t || DataLoaderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    DataLoaderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DataLoaderService,
      factory: DataLoaderService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataLoaderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/patient.ts":
  /*!****************************!*\
    !*** ./src/app/patient.ts ***!
    \****************************/

  /*! exports provided: Patient */

  /***/
  function srcAppPatientTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Patient", function () {
      return Patient;
    });

    var Patient =
    /*#__PURE__*/
    function () {
      function Patient(data, dataLoader) {
        _classCallCheck(this, Patient);

        this.name = data.name;
        this.mfsYears = data.mfsYears;
        this.subtype = data.subtype;
        this.dataLoader = dataLoader;
        this.loadPatientData();
      }

      _createClass(Patient, [{
        key: "getMinScore",
        value: function getMinScore() {
          if (this.minScore === undefined) {
            this.minScore = this.patientData.reduce(function (previousValue, currentValue) {
              return previousValue.score < currentValue.score ? previousValue : currentValue;
            }).score;
          }

          return this.minScore;
        }
      }, {
        key: "getMaxScore",
        value: function getMaxScore() {
          if (this.maxScore === undefined) {
            this.maxScore = this.patientData.reduce(function (previousValue, currentValue) {
              return previousValue.score > currentValue.score ? previousValue : currentValue;
            }).score;
          }

          return this.maxScore;
        }
      }, {
        key: "getMinGe",
        value: function getMinGe() {
          if (this.minGe === undefined) {
            this.minGe = this.patientData.reduce(function (previousValue, currentValue) {
              return previousValue.ge < currentValue.ge ? previousValue : currentValue;
            }).ge;
          }

          return this.minGe;
        }
      }, {
        key: "getMaxGe",
        value: function getMaxGe() {
          if (this.maxGe === undefined) {
            this.maxGe = this.patientData.reduce(function (previousValue, currentValue) {
              return previousValue.ge > currentValue.ge ? previousValue : currentValue;
            }).ge;
          }

          return this.maxGe;
        }
      }, {
        key: "loadPatientData",
        value: function loadPatientData() {
          var _this11 = this;

          this.dataLoader.getPatientData(this.name).subscribe(function (data) {
            _this11.patientData = data; // console.log('Patient ' + this.name + ': ' + this.patientData.length);
          });
        }
      }]);

      return Patient;
    }();
    /***/

  },

  /***/
  "./src/app/patients-response.ts":
  /*!**************************************!*\
    !*** ./src/app/patients-response.ts ***!
    \**************************************/

  /*! exports provided: PatientsResponse */

  /***/
  function srcAppPatientsResponseTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PatientsResponse", function () {
      return PatientsResponse;
    });
    /* harmony import */


    var _patient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./patient */
    "./src/app/patient.ts");

    var PatientsResponse = function PatientsResponse(data, dataLoader) {
      _classCallCheck(this, PatientsResponse);

      this.geMin = data.geMin;
      this.geMax = data.geMax; // console.log('ge range init: '+this.geMin+'-'+this.geMax);

      this.metastatic = data.metastatic.map(function (pat) {
        return new _patient__WEBPACK_IMPORTED_MODULE_0__["Patient"](pat, dataLoader);
      });
      this.nonmetastatic = data.nonmetastatic.map(function (pat) {
        return new _patient__WEBPACK_IMPORTED_MODULE_0__["Patient"](pat, dataLoader);
      });
    };
    /***/

  },

  /***/
  "./src/app/threshold-response.ts":
  /*!***************************************!*\
    !*** ./src/app/threshold-response.ts ***!
    \***************************************/

  /*! exports provided: ThresholdResponse */

  /***/
  function srcAppThresholdResponseTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ThresholdResponse", function () {
      return ThresholdResponse;
    });
    /* harmony import */


    var _threshold__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./threshold */
    "./src/app/threshold.ts");

    var ThresholdResponse = function ThresholdResponse(data) {
      _classCallCheck(this, ThresholdResponse);

      // constructor(public metastatic: Threshold,
      //             public nonmetastatic: Threshold,
      //             public multiplier: number = 1000000000) {}
      // public static multiplier = 1000000000;
      this.multiplier = 1000000000;
      this.multiplier = 1000000000;
      this.metastatic = new _threshold__WEBPACK_IMPORTED_MODULE_0__["Threshold"](data.metastatic, this.multiplier);
      this.nonmetastatic = new _threshold__WEBPACK_IMPORTED_MODULE_0__["Threshold"](data.nonmetastatic, this.multiplier);
      this.minThreshold = Math.min(this.metastatic.threshold, this.nonmetastatic.threshold);
      this.maxThreshold = Math.max(this.metastatic.max, this.nonmetastatic.max);
      this.selected = this.minThreshold * this.multiplier;
    };
    /***/

  },

  /***/
  "./src/app/threshold.ts":
  /*!******************************!*\
    !*** ./src/app/threshold.ts ***!
    \******************************/

  /*! exports provided: Threshold */

  /***/
  function srcAppThresholdTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Threshold", function () {
      return Threshold;
    });

    var Threshold = function Threshold(data, multiplier) {
      _classCallCheck(this, Threshold);

      this.threshold = data.threshold;
      this.max = data.max;
      this.selected = data.threshold * multiplier;
    };
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/flockowak/Projekte/SubnetworkVisualization/MetaRelSubNetVis/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map