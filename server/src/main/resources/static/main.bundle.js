webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_services/pager.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_underscore__ = __webpack_require__("./node_modules/underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_underscore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PagerService = /** @class */ (function () {
    function PagerService() {
    }
    PagerService.prototype.getPager = function (totalItems, currentPage, pageSize) {
        if (currentPage === void 0) { currentPage = 1; }
        if (pageSize === void 0) { pageSize = 10; }
        // calculate total pages
        var totalPages = Math.ceil(totalItems / pageSize);
        var startPage, endPage;
        if (totalPages <= 10) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        }
        else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            }
            else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            }
            else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }
        // calculate start and end item indexes
        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        // create an array of pages to ng-repeat in the pager control
        var pages = __WEBPACK_IMPORTED_MODULE_1_underscore__["range"](startPage, endPage + 1);
        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    };
    PagerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injectable */])()
    ], PagerService);
    return PagerService;
}());



/***/ }),

/***/ "./src/app/angular-materials.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AngularMaterialsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AngularMaterialsModule = /** @class */ (function () {
    function AngularMaterialsModule() {
    }
    AngularMaterialsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["v" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["u" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["q" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["t" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["o" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["w" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatDialogModule */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["v" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["u" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["q" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["t" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["w" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["o" /* MatProgressBarModule */]
            ]
        })
    ], AngularMaterialsModule);
    return AngularMaterialsModule;
}());



/***/ }),

/***/ "./src/app/app-navbar-header/app-navbar-header.component.css":
/***/ (function(module, exports) {

module.exports = "/*!\n * Bootstrap v4.0.0-beta.3 (https://getbootstrap.com)\n * Copyright 2011-2017 The Bootstrap Authors\n * Copyright 2011-2017 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */\n:root {\n  --blue: #007bff;\n  --indigo: #6610f2;\n  --purple: #6f42c1;\n  --pink: #e83e8c;\n  --red: #dc3545;\n  --orange: #fd7e14;\n  --yellow: #ffc107;\n  --green: #28a745;\n  --teal: #20c997;\n  --cyan: #17a2b8;\n  --white: #fff;\n  --gray: #868e96;\n  --gray-dark: #343a40;\n  --primary: #007bff;\n  --secondary: #868e96;\n  --success: #28a745;\n  --info: #17a2b8;\n  --warning: #ffc107;\n  --danger: #dc3545;\n  --light: #f8f9fa;\n  --dark: #343a40;\n  --breakpoint-xs: 0;\n  --breakpoint-sm: 576px;\n  --breakpoint-md: 768px;\n  --breakpoint-lg: 992px;\n  --breakpoint-xl: 1200px;\n  --font-family-sans-serif: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\n*,\n*::before,\n*::after {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\nhtml {\n  font-family: sans-serif;\n  line-height: 1.15;\n  -webkit-text-size-adjust: 100%;\n  -ms-text-size-adjust: 100%;\n  -ms-overflow-style: scrollbar;\n  -webkit-tap-highlight-color: transparent;\n}\n@-ms-viewport {\n  width: device-width;\n}\narticle, aside, dialog, figcaption, figure, footer, header, hgroup, main, nav, section {\n  display: block;\n}\nbody {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #212529;\n  text-align: left;\n  background-color: #fff;\n}\n[tabindex=\"-1\"]:focus {\n  outline: 0 !important;\n}\nhr {\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n  height: 0;\n  overflow: visible;\n}\nh1, h2, h3, h4, h5, h6 {\n  margin-top: 0;\n  margin-bottom: 0.5rem;\n}\np {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\nabbr[title],\nabbr[data-original-title] {\n  text-decoration: underline;\n  -webkit-text-decoration: underline dotted;\n  text-decoration: underline dotted;\n  cursor: help;\n  border-bottom: 0;\n}\naddress {\n  margin-bottom: 1rem;\n  font-style: normal;\n  line-height: inherit;\n}\nol,\nul,\ndl {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\nol ol,\nul ul,\nol ul,\nul ol {\n  margin-bottom: 0;\n}\ndt {\n  font-weight: 700;\n}\ndd {\n  margin-bottom: .5rem;\n  margin-left: 0;\n}\nblockquote {\n  margin: 0 0 1rem;\n}\ndfn {\n  font-style: italic;\n}\nb,\nstrong {\n  font-weight: bolder;\n}\nsmall {\n  font-size: 80%;\n}\nsub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline;\n}\nsub {\n  bottom: -.25em;\n}\nsup {\n  top: -.5em;\n}\na {\n  color: #007bff;\n  text-decoration: none;\n  background-color: transparent;\n  -webkit-text-decoration-skip: objects;\n}\na:hover {\n  color: #0056b3;\n  text-decoration: underline;\n}\na:not([href]):not([tabindex]) {\n  color: inherit;\n  text-decoration: none;\n}\na:not([href]):not([tabindex]):focus, a:not([href]):not([tabindex]):hover {\n  color: inherit;\n  text-decoration: none;\n}\na:not([href]):not([tabindex]):focus {\n  outline: 0;\n}\npre,\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\npre {\n  margin-top: 0;\n  margin-bottom: 1rem;\n  overflow: auto;\n  -ms-overflow-style: scrollbar;\n}\nfigure {\n  margin: 0 0 1rem;\n}\nimg {\n  vertical-align: middle;\n  border-style: none;\n}\nsvg:not(:root) {\n  overflow: hidden;\n}\na,\narea,\nbutton,\n[role=\"button\"],\ninput:not([type=\"range\"]),\nlabel,\nselect,\nsummary,\ntextarea {\n  -ms-touch-action: manipulation;\n  touch-action: manipulation;\n}\ntable {\n  border-collapse: collapse;\n}\ncaption {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  color: #868e96;\n  text-align: left;\n  caption-side: bottom;\n}\nth {\n  text-align: inherit;\n}\nlabel {\n  display: inline-block;\n  margin-bottom: .5rem;\n}\nbutton {\n  border-radius: 0;\n}\nbutton:focus {\n  outline: 1px dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n}\ninput,\nbutton,\nselect,\noptgroup,\ntextarea {\n  margin: 0;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\nbutton,\ninput {\n  overflow: visible;\n}\nbutton,\nselect {\n  text-transform: none;\n}\nbutton,\nhtml [type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  padding: 0;\n  border-style: none;\n}\ninput[type=\"radio\"],\ninput[type=\"checkbox\"] {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 0;\n}\ninput[type=\"date\"],\ninput[type=\"time\"],\ninput[type=\"datetime-local\"],\ninput[type=\"month\"] {\n  -webkit-appearance: listbox;\n}\ntextarea {\n  overflow: auto;\n  resize: vertical;\n}\nfieldset {\n  min-width: 0;\n  padding: 0;\n  margin: 0;\n  border: 0;\n}\nlegend {\n  display: block;\n  width: 100%;\n  max-width: 100%;\n  padding: 0;\n  margin-bottom: .5rem;\n  font-size: 1.5rem;\n  line-height: inherit;\n  color: inherit;\n  white-space: normal;\n}\nprogress {\n  vertical-align: baseline;\n}\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n[type=\"search\"] {\n  outline-offset: -2px;\n  -webkit-appearance: none;\n}\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n::-webkit-file-upload-button {\n  font: inherit;\n  -webkit-appearance: button;\n}\noutput {\n  display: inline-block;\n}\nsummary {\n  display: list-item;\n  cursor: pointer;\n}\ntemplate {\n  display: none;\n}\n[hidden] {\n  display: none !important;\n}\nh1, h2, h3, h4, h5, h6,\n.h1, .h2, .h3, .h4, .h5, .h6 {\n  margin-bottom: 0.5rem;\n  font-family: inherit;\n  font-weight: 500;\n  line-height: 1.2;\n  color: inherit;\n}\nh1, .h1 {\n  font-size: 2.5rem;\n}\nh2, .h2 {\n  font-size: 2rem;\n}\nh3, .h3 {\n  font-size: 1.75rem;\n}\nh4, .h4 {\n  font-size: 1.5rem;\n}\nh5, .h5 {\n  font-size: 1.25rem;\n}\nh6, .h6 {\n  font-size: 1rem;\n}\n.lead {\n  font-size: 1.25rem;\n  font-weight: 300;\n}\n.display-1 {\n  font-size: 6rem;\n  font-weight: 300;\n  line-height: 1.2;\n}\n.display-2 {\n  font-size: 5.5rem;\n  font-weight: 300;\n  line-height: 1.2;\n}\n.display-3 {\n  font-size: 4.5rem;\n  font-weight: 300;\n  line-height: 1.2;\n}\n.display-4 {\n  font-size: 3.5rem;\n  font-weight: 300;\n  line-height: 1.2;\n}\nhr {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  border: 0;\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n}\nsmall,\n.small {\n  font-size: 80%;\n  font-weight: 400;\n}\nmark,\n.mark {\n  padding: 0.2em;\n  background-color: #fcf8e3;\n}\n.list-unstyled {\n  padding-left: 0;\n  list-style: none;\n}\n.list-inline {\n  padding-left: 0;\n  list-style: none;\n}\n.list-inline-item {\n  display: inline-block;\n}\n.list-inline-item:not(:last-child) {\n  margin-right: 0.5rem;\n}\n.initialism {\n  font-size: 90%;\n  text-transform: uppercase;\n}\n.blockquote {\n  margin-bottom: 1rem;\n  font-size: 1.25rem;\n}\n.blockquote-footer {\n  display: block;\n  font-size: 80%;\n  color: #868e96;\n}\n.blockquote-footer::before {\n  content: \"\\2014 \\00A0\";\n}\n.img-fluid {\n  max-width: 100%;\n  height: auto;\n}\n.img-thumbnail {\n  padding: 0.25rem;\n  background-color: #fff;\n  border: 1px solid #dee2e6;\n  border-radius: 0.25rem;\n  max-width: 100%;\n  height: auto;\n}\n.figure {\n  display: inline-block;\n}\n.figure-img {\n  margin-bottom: 0.5rem;\n  line-height: 1;\n}\n.figure-caption {\n  font-size: 90%;\n  color: #868e96;\n}\ncode,\nkbd,\npre,\nsamp {\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\ncode {\n  font-size: 87.5%;\n  color: #e83e8c;\n  word-break: break-word;\n}\na > code {\n  color: inherit;\n}\nkbd {\n  padding: 0.2rem 0.4rem;\n  font-size: 87.5%;\n  color: #fff;\n  background-color: #212529;\n  border-radius: 0.2rem;\n}\nkbd kbd {\n  padding: 0;\n  font-size: 100%;\n  font-weight: 700;\n}\npre {\n  display: block;\n  font-size: 87.5%;\n  color: #212529;\n}\npre code {\n  font-size: inherit;\n  color: inherit;\n  word-break: normal;\n}\n.pre-scrollable {\n  max-height: 340px;\n  overflow-y: scroll;\n}\n.container {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n@media (min-width: 576px) {\n  .container {\n    max-width: 540px;\n  }\n}\n@media (min-width: 768px) {\n  .container {\n    max-width: 720px;\n  }\n}\n@media (min-width: 992px) {\n  .container {\n    max-width: 960px;\n  }\n}\n@media (min-width: 1200px) {\n  .container {\n    max-width: 1140px;\n  }\n}\n.container-fluid {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n.row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px;\n}\n.no-gutters {\n  margin-right: 0;\n  margin-left: 0;\n}\n.no-gutters > .col,\n.no-gutters > [class*=\"col-\"] {\n  padding-right: 0;\n  padding-left: 0;\n}\n.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col,\n.col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm,\n.col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md,\n.col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg,\n.col-lg-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl,\n.col-xl-auto {\n  position: relative;\n  width: 100%;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n.col {\n  -ms-flex-preferred-size: 0;\n  flex-basis: 0;\n  -webkit-box-flex: 1;\n  -ms-flex-positive: 1;\n  flex-grow: 1;\n  max-width: 100%;\n}\n.col-auto {\n  -webkit-box-flex: 0;\n  -ms-flex: 0 0 auto;\n  flex: 0 0 auto;\n  width: auto;\n  max-width: none;\n}\n.col-1 {\n  -webkit-box-flex: 0;\n  -ms-flex: 0 0 8.333333%;\n  flex: 0 0 8.333333%;\n  max-width: 8.333333%;\n}\n.col-2 {\n  -webkit-box-flex: 0;\n  -ms-flex: 0 0 16.666667%;\n  flex: 0 0 16.666667%;\n  max-width: 16.666667%;\n}\n.col-3 {\n  -webkit-box-flex: 0;\n  -ms-flex: 0 0 25%;\n  flex: 0 0 25%;\n  max-width: 25%;\n}\n.col-4 {\n  -webkit-box-flex: 0;\n  -ms-flex: 0 0 33.333333%;\n  flex: 0 0 33.333333%;\n  max-width: 33.333333%;\n}\n.col-5 {\n  -webkit-box-flex: 0;\n  -ms-flex: 0 0 41.666667%;\n  flex: 0 0 41.666667%;\n  max-width: 41.666667%;\n}\n.col-6 {\n  -webkit-box-flex: 0;\n  -ms-flex: 0 0 50%;\n  flex: 0 0 50%;\n  max-width: 50%;\n}\n.col-7 {\n  -webkit-box-flex: 0;\n  -ms-flex: 0 0 58.333333%;\n  flex: 0 0 58.333333%;\n  max-width: 58.333333%;\n}\n.col-8 {\n  -webkit-box-flex: 0;\n  -ms-flex: 0 0 66.666667%;\n  flex: 0 0 66.666667%;\n  max-width: 66.666667%;\n}\n.col-9 {\n  -webkit-box-flex: 0;\n  -ms-flex: 0 0 75%;\n  flex: 0 0 75%;\n  max-width: 75%;\n}\n.col-10 {\n  -webkit-box-flex: 0;\n  -ms-flex: 0 0 83.333333%;\n  flex: 0 0 83.333333%;\n  max-width: 83.333333%;\n}\n.col-11 {\n  -webkit-box-flex: 0;\n  -ms-flex: 0 0 91.666667%;\n  flex: 0 0 91.666667%;\n  max-width: 91.666667%;\n}\n.col-12 {\n  -webkit-box-flex: 0;\n  -ms-flex: 0 0 100%;\n  flex: 0 0 100%;\n  max-width: 100%;\n}\n.order-first {\n  -webkit-box-ordinal-group: 0;\n  -ms-flex-order: -1;\n  order: -1;\n}\n.order-1 {\n  -webkit-box-ordinal-group: 2;\n  -ms-flex-order: 1;\n  order: 1;\n}\n.order-2 {\n  -webkit-box-ordinal-group: 3;\n  -ms-flex-order: 2;\n  order: 2;\n}\n.order-3 {\n  -webkit-box-ordinal-group: 4;\n  -ms-flex-order: 3;\n  order: 3;\n}\n.order-4 {\n  -webkit-box-ordinal-group: 5;\n  -ms-flex-order: 4;\n  order: 4;\n}\n.order-5 {\n  -webkit-box-ordinal-group: 6;\n  -ms-flex-order: 5;\n  order: 5;\n}\n.order-6 {\n  -webkit-box-ordinal-group: 7;\n  -ms-flex-order: 6;\n  order: 6;\n}\n.order-7 {\n  -webkit-box-ordinal-group: 8;\n  -ms-flex-order: 7;\n  order: 7;\n}\n.order-8 {\n  -webkit-box-ordinal-group: 9;\n  -ms-flex-order: 8;\n  order: 8;\n}\n.order-9 {\n  -webkit-box-ordinal-group: 10;\n  -ms-flex-order: 9;\n  order: 9;\n}\n.order-10 {\n  -webkit-box-ordinal-group: 11;\n  -ms-flex-order: 10;\n  order: 10;\n}\n.order-11 {\n  -webkit-box-ordinal-group: 12;\n  -ms-flex-order: 11;\n  order: 11;\n}\n.order-12 {\n  -webkit-box-ordinal-group: 13;\n  -ms-flex-order: 12;\n  order: 12;\n}\n.offset-1 {\n  margin-left: 8.333333%;\n}\n.offset-2 {\n  margin-left: 16.666667%;\n}\n.offset-3 {\n  margin-left: 25%;\n}\n.offset-4 {\n  margin-left: 33.333333%;\n}\n.offset-5 {\n  margin-left: 41.666667%;\n}\n.offset-6 {\n  margin-left: 50%;\n}\n.offset-7 {\n  margin-left: 58.333333%;\n}\n.offset-8 {\n  margin-left: 66.666667%;\n}\n.offset-9 {\n  margin-left: 75%;\n}\n.offset-10 {\n  margin-left: 83.333333%;\n}\n.offset-11 {\n  margin-left: 91.666667%;\n}\n@media (min-width: 576px) {\n  .col-sm {\n    -ms-flex-preferred-size: 0;\n    flex-basis: 0;\n    -webkit-box-flex: 1;\n    -ms-flex-positive: 1;\n    flex-grow: 1;\n    max-width: 100%;\n  }\n  .col-sm-auto {\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 auto;\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none;\n  }\n  .col-sm-1 {\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 8.333333%;\n    flex: 0 0 8.333333%;\n    max-width: 8.333333%;\n  }\n  .col-sm-2 {\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 16.666667%;\n    flex: 0 0 16.666667%;\n    max-width: 16.666667%;\n  }\n  .col-sm-3 {\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 25%;\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n  .col-sm-4 {\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 33.333333%;\n    flex: 0 0 33.333333%;\n    max-width: 33.333333%;\n  }\n  .col-sm-5 {\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 41.666667%;\n    flex: 0 0 41.666667%;\n    max-width: 41.666667%;\n  }\n  .col-sm-6 {\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 50%;\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .col-sm-7 {\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 58.333333%;\n    flex: 0 0 58.333333%;\n    max-width: 58.333333%;\n  }\n  .col-sm-8 {\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 66.666667%;\n    flex: 0 0 66.666667%;\n    max-width: 66.666667%;\n  }\n  .col-sm-9 {\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 75%;\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n  .col-sm-10 {\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 83.333333%;\n    flex: 0 0 83.333333%;\n    max-width: 83.333333%;\n  }\n  .col-sm-11 {\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 91.666667%;\n    flex: 0 0 91.666667%;\n    max-width: 91.666667%;\n  }\n  .col-sm-12 {\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 100%;\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .order-sm-first {\n    -webkit-box-ordinal-group: 0;\n    -ms-flex-order: -1;\n    order: -1;\n  }\n  .order-sm-1 {\n    -webkit-box-ordinal-group: 2;\n    -ms-flex-order: 1;\n    order: 1;\n  }\n  .order-sm-2 {\n    -webkit-box-ordinal-group: 3;\n    -ms-flex-order: 2;\n    order: 2;\n  }\n  .order-sm-3 {\n    -webkit-box-ordinal-group: 4;\n    -ms-flex-order: 3;\n    order: 3;\n  }\n  .order-sm-4 {\n    -webkit-box-ordinal-group: 5;\n    -ms-flex-order: 4;\n    order: 4;\n  }\n  .order-sm-5 {\n    -webkit-box-ordinal-group: 6;\n    -ms-flex-order: 5;\n    order: 5;\n  }\n  .order-sm-6 {\n    -webkit-box-ordinal-group: 7;\n    -ms-flex-order: 6;\n    order: 6;\n  }\n  .order-sm-7 {\n    -webkit-box-ordinal-group: 8;\n    -ms-flex-order: 7;\n    order: 7;\n  }\n  .order-sm-8 {\n    -webkit-box-ordinal-group: 9;\n    -ms-flex-order: 8;\n    order: 8;\n  }\n  .order-sm-9 {\n    -webkit-box-ordinal-group: 10;\n    -ms-flex-order: 9;\n    order: 9;\n  }\n  .order-sm-10 {\n    -webkit-box-ordinal-group: 11;\n    -ms-flex-order: 10;\n    order: 10;\n  }\n  .order-sm-11 {\n    -webkit-box-ordinal-group: 12;\n    -ms-flex-order: 11;\n    order: 11;\n  }\n  .order-sm-12 {\n    -webkit-box-ordinal-group: 13;\n    -ms-flex-order: 12;\n    order: 12;\n  }\n  .offset-sm-0 {\n    margin-left: 0;\n  }\n  .offset-sm-1 {\n    margin-left: 8.333333%;\n  }\n  .offset-sm-2 {\n    margin-left: 16.666667%;\n  }\n  .offset-sm-3 {\n    margin-left: 25%;\n  }\n  .offset-sm-4 {\n    margin-left: 33.333333%;\n  }\n  .offset-sm-5 {\n    margin-left: 41.666667%;\n  }\n  .offset-sm-6 {\n    margin-left: 50%;\n  }\n  .offset-sm-7 {\n    margin-left: 58.333333%;\n  }\n  .offset-sm-8 {\n    margin-left: 66.666667%;\n  }\n  .offset-sm-9 {\n    margin-left: 75%;\n  }\n  .offset-sm-10 {\n    margin-left: 83.333333%;\n  }\n  .offset-sm-11 {\n    margin-left: 91.666667%;\n  }\n}\n@media (min-width: 768px) {\n  .col-md {\n    -ms-flex-preferred-size: 0;\n    flex-basis: 0;\n    -webkit-box-flex: 1;\n    -ms-flex-positive: 1;\n    flex-grow: 1;\n    max-width: 100%;\n  }\n  .col-md-auto {\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 auto;\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none;\n  }\n  .col-md-1 {\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 8.333333%;\n    flex: 0 0 8.333333%;\n    max-width: 8.333333%;\n  }\n  .col-md-2 {\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 16.666667%;\n    flex: 0 0 16.666667%;\n    max-width: 16.666667%;\n  }\n  .col-md-3 {\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 25%;\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n  .col-md-4 {\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 33.333333%;\n    flex: 0 0 33.333333%;\n    max-width: 33.333333%;\n  }\n  .col-md-5 {\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 41.666667%;\n    flex: 0 0 41.666667%;\n    max-width: 41.666667%;\n  }\n  .col-md-6 {\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 50%;\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .col-md-7 {\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 58.333333%;\n    flex: 0 0 58.333333%;\n    max-width: 58.333333%;\n  }\n  .col-md-8 {\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 66.666667%;\n    flex: 0 0 66.666667%;\n    max-width: 66.666667%;\n  }\n  .col-md-9 {\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 75%;\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n  .col-md-10 {\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 83.333333%;\n    flex: 0 0 83.333333%;\n    max-width: 83.333333%;\n  }\n  .col-md-11 {\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 91.666667%;\n    flex: 0 0 91.666667%;\n    max-width: 91.666667%;\n  }\n  .col-md-12 {\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 100%;\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .order-md-first {\n    -webkit-box-ordinal-group: 0;\n    -ms-flex-order: -1;\n    order: -1;\n  }\n  .order-md-1 {\n    -webkit-box-ordinal-group: 2;\n    -ms-flex-order: 1;\n    order: 1;\n  }\n  .order-md-2 {\n    -webkit-box-ordinal-group: 3;\n    -ms-flex-order: 2;\n    order: 2;\n  }\n  .order-md-3 {\n    -webkit-box-ordinal-group: 4;\n    -ms-flex-order: 3;\n    order: 3;\n  }\n  .order-md-4 {\n    -webkit-box-ordinal-group: 5;\n    -ms-flex-order: 4;\n    order: 4;\n  }\n  .order-md-5 {\n    -webkit-box-ordinal-group: 6;\n    -ms-flex-order: 5;\n    order: 5;\n  }\n  .order-md-6 {\n    -webkit-box-ordinal-group: 7;\n    -ms-flex-order: 6;\n    order: 6;\n  }\n  .order-md-7 {\n    -webkit-box-ordinal-group: 8;\n    -ms-flex-order: 7;\n    order: 7;\n  }\n  .order-md-8 {\n    -webkit-box-ordinal-group: 9;\n    -ms-flex-order: 8;\n    order: 8;\n  }\n  .order-md-9 {\n    -webkit-box-ordinal-group: 10;\n    -ms-flex-order: 9;\n    order: 9;\n  }\n  .order-md-10 {\n    -webkit-box-ordinal-group: 11;\n    -ms-flex-order: 10;\n    order: 10;\n  }\n  .order-md-11 {\n    -webkit-box-ordinal-group: 12;\n    -ms-flex-order: 11;\n    order: 11;\n  }\n  .order-md-12 {\n    -webkit-box-ordinal-group: 13;\n    -ms-flex-order: 12;\n    order: 12;\n  }\n  .offset-md-0 {\n    margin-left: 0;\n  }\n  .offset-md-1 {\n    margin-left: 8.333333%;\n  }\n  .offset-md-2 {\n    margin-left: 16.666667%;\n  }\n  .offset-md-3 {\n    margin-left: 25%;\n  }\n  .offset-md-4 {\n    margin-left: 33.333333%;\n  }\n  .offset-md-5 {\n    margin-left: 41.666667%;\n  }\n  .offset-md-6 {\n    margin-left: 50%;\n  }\n  .offset-md-7 {\n    margin-left: 58.333333%;\n  }\n  .offset-md-8 {\n    margin-left: 66.666667%;\n  }\n  .offset-md-9 {\n    margin-left: 75%;\n  }\n  .offset-md-10 {\n    margin-left: 83.333333%;\n  }\n  .offset-md-11 {\n    margin-left: 91.666667%;\n  }\n}\n@media (min-width: 992px) {\n  .col-lg {\n    -ms-flex-preferred-size: 0;\n    flex-basis: 0;\n    -webkit-box-flex: 1;\n    -ms-flex-positive: 1;\n    flex-grow: 1;\n    max-width: 100%;\n  }\n  .col-lg-auto {\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 auto;\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none;\n  }\n  .col-lg-1 {\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 8.333333%;\n    flex: 0 0 8.333333%;\n    max-width: 8.333333%;\n  }\n  .col-lg-2 {\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 16.666667%;\n    flex: 0 0 16.666667%;\n    max-width: 16.666667%;\n  }\n  .col-lg-3 {\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 25%;\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n  .col-lg-4 {\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 33.333333%;\n    flex: 0 0 33.333333%;\n    max-width: 33.333333%;\n  }\n  .col-lg-5 {\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 41.666667%;\n    flex: 0 0 41.666667%;\n    max-width: 41.666667%;\n  }\n  .col-lg-6 {\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 50%;\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .col-lg-7 {\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 58.333333%;\n    flex: 0 0 58.333333%;\n    max-width: 58.333333%;\n  }\n  .col-lg-8 {\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 66.666667%;\n    flex: 0 0 66.666667%;\n    max-width: 66.666667%;\n  }\n  .col-lg-9 {\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 75%;\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n  .col-lg-10 {\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 83.333333%;\n    flex: 0 0 83.333333%;\n    max-width: 83.333333%;\n  }\n  .col-lg-11 {\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 91.666667%;\n    flex: 0 0 91.666667%;\n    max-width: 91.666667%;\n  }\n  .col-lg-12 {\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 100%;\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .order-lg-first {\n    -webkit-box-ordinal-group: 0;\n    -ms-flex-order: -1;\n    order: -1;\n  }\n  .order-lg-1 {\n    -webkit-box-ordinal-group: 2;\n    -ms-flex-order: 1;\n    order: 1;\n  }\n  .order-lg-2 {\n    -webkit-box-ordinal-group: 3;\n    -ms-flex-order: 2;\n    order: 2;\n  }\n  .order-lg-3 {\n    -webkit-box-ordinal-group: 4;\n    -ms-flex-order: 3;\n    order: 3;\n  }\n  .order-lg-4 {\n    -webkit-box-ordinal-group: 5;\n    -ms-flex-order: 4;\n    order: 4;\n  }\n  .order-lg-5 {\n    -webkit-box-ordinal-group: 6;\n    -ms-flex-order: 5;\n    order: 5;\n  }\n  .order-lg-6 {\n    -webkit-box-ordinal-group: 7;\n    -ms-flex-order: 6;\n    order: 6;\n  }\n  .order-lg-7 {\n    -webkit-box-ordinal-group: 8;\n    -ms-flex-order: 7;\n    order: 7;\n  }\n  .order-lg-8 {\n    -webkit-box-ordinal-group: 9;\n    -ms-flex-order: 8;\n    order: 8;\n  }\n  .order-lg-9 {\n    -webkit-box-ordinal-group: 10;\n    -ms-flex-order: 9;\n    order: 9;\n  }\n  .order-lg-10 {\n    -webkit-box-ordinal-group: 11;\n    -ms-flex-order: 10;\n    order: 10;\n  }\n  .order-lg-11 {\n    -webkit-box-ordinal-group: 12;\n    -ms-flex-order: 11;\n    order: 11;\n  }\n  .order-lg-12 {\n    -webkit-box-ordinal-group: 13;\n    -ms-flex-order: 12;\n    order: 12;\n  }\n  .offset-lg-0 {\n    margin-left: 0;\n  }\n  .offset-lg-1 {\n    margin-left: 8.333333%;\n  }\n  .offset-lg-2 {\n    margin-left: 16.666667%;\n  }\n  .offset-lg-3 {\n    margin-left: 25%;\n  }\n  .offset-lg-4 {\n    margin-left: 33.333333%;\n  }\n  .offset-lg-5 {\n    margin-left: 41.666667%;\n  }\n  .offset-lg-6 {\n    margin-left: 50%;\n  }\n  .offset-lg-7 {\n    margin-left: 58.333333%;\n  }\n  .offset-lg-8 {\n    margin-left: 66.666667%;\n  }\n  .offset-lg-9 {\n    margin-left: 75%;\n  }\n  .offset-lg-10 {\n    margin-left: 83.333333%;\n  }\n  .offset-lg-11 {\n    margin-left: 91.666667%;\n  }\n}\n@media (min-width: 1200px) {\n  .col-xl {\n    -ms-flex-preferred-size: 0;\n    flex-basis: 0;\n    -webkit-box-flex: 1;\n    -ms-flex-positive: 1;\n    flex-grow: 1;\n    max-width: 100%;\n  }\n  .col-xl-auto {\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 auto;\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none;\n  }\n  .col-xl-1 {\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 8.333333%;\n    flex: 0 0 8.333333%;\n    max-width: 8.333333%;\n  }\n  .col-xl-2 {\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 16.666667%;\n    flex: 0 0 16.666667%;\n    max-width: 16.666667%;\n  }\n  .col-xl-3 {\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 25%;\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n  .col-xl-4 {\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 33.333333%;\n    flex: 0 0 33.333333%;\n    max-width: 33.333333%;\n  }\n  .col-xl-5 {\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 41.666667%;\n    flex: 0 0 41.666667%;\n    max-width: 41.666667%;\n  }\n  .col-xl-6 {\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 50%;\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .col-xl-7 {\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 58.333333%;\n    flex: 0 0 58.333333%;\n    max-width: 58.333333%;\n  }\n  .col-xl-8 {\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 66.666667%;\n    flex: 0 0 66.666667%;\n    max-width: 66.666667%;\n  }\n  .col-xl-9 {\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 75%;\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n  .col-xl-10 {\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 83.333333%;\n    flex: 0 0 83.333333%;\n    max-width: 83.333333%;\n  }\n  .col-xl-11 {\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 91.666667%;\n    flex: 0 0 91.666667%;\n    max-width: 91.666667%;\n  }\n  .col-xl-12 {\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 100%;\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .order-xl-first {\n    -webkit-box-ordinal-group: 0;\n    -ms-flex-order: -1;\n    order: -1;\n  }\n  .order-xl-1 {\n    -webkit-box-ordinal-group: 2;\n    -ms-flex-order: 1;\n    order: 1;\n  }\n  .order-xl-2 {\n    -webkit-box-ordinal-group: 3;\n    -ms-flex-order: 2;\n    order: 2;\n  }\n  .order-xl-3 {\n    -webkit-box-ordinal-group: 4;\n    -ms-flex-order: 3;\n    order: 3;\n  }\n  .order-xl-4 {\n    -webkit-box-ordinal-group: 5;\n    -ms-flex-order: 4;\n    order: 4;\n  }\n  .order-xl-5 {\n    -webkit-box-ordinal-group: 6;\n    -ms-flex-order: 5;\n    order: 5;\n  }\n  .order-xl-6 {\n    -webkit-box-ordinal-group: 7;\n    -ms-flex-order: 6;\n    order: 6;\n  }\n  .order-xl-7 {\n    -webkit-box-ordinal-group: 8;\n    -ms-flex-order: 7;\n    order: 7;\n  }\n  .order-xl-8 {\n    -webkit-box-ordinal-group: 9;\n    -ms-flex-order: 8;\n    order: 8;\n  }\n  .order-xl-9 {\n    -webkit-box-ordinal-group: 10;\n    -ms-flex-order: 9;\n    order: 9;\n  }\n  .order-xl-10 {\n    -webkit-box-ordinal-group: 11;\n    -ms-flex-order: 10;\n    order: 10;\n  }\n  .order-xl-11 {\n    -webkit-box-ordinal-group: 12;\n    -ms-flex-order: 11;\n    order: 11;\n  }\n  .order-xl-12 {\n    -webkit-box-ordinal-group: 13;\n    -ms-flex-order: 12;\n    order: 12;\n  }\n  .offset-xl-0 {\n    margin-left: 0;\n  }\n  .offset-xl-1 {\n    margin-left: 8.333333%;\n  }\n  .offset-xl-2 {\n    margin-left: 16.666667%;\n  }\n  .offset-xl-3 {\n    margin-left: 25%;\n  }\n  .offset-xl-4 {\n    margin-left: 33.333333%;\n  }\n  .offset-xl-5 {\n    margin-left: 41.666667%;\n  }\n  .offset-xl-6 {\n    margin-left: 50%;\n  }\n  .offset-xl-7 {\n    margin-left: 58.333333%;\n  }\n  .offset-xl-8 {\n    margin-left: 66.666667%;\n  }\n  .offset-xl-9 {\n    margin-left: 75%;\n  }\n  .offset-xl-10 {\n    margin-left: 83.333333%;\n  }\n  .offset-xl-11 {\n    margin-left: 91.666667%;\n  }\n}\n.table {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 1rem;\n  background-color: transparent;\n}\n.table th,\n.table td {\n  padding: 0.75rem;\n  vertical-align: top;\n  border-top: 1px solid #dee2e6;\n}\n.table thead th {\n  vertical-align: bottom;\n  border-bottom: 2px solid #dee2e6;\n}\n.table tbody + tbody {\n  border-top: 2px solid #dee2e6;\n}\n.table .table {\n  background-color: #fff;\n}\n.table-sm th,\n.table-sm td {\n  padding: 0.3rem;\n}\n.table-bordered {\n  border: 1px solid #dee2e6;\n}\n.table-bordered th,\n.table-bordered td {\n  border: 1px solid #dee2e6;\n}\n.table-bordered thead th,\n.table-bordered thead td {\n  border-bottom-width: 2px;\n}\n.table-striped tbody tr:nth-of-type(odd) {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n.table-hover tbody tr:hover {\n  background-color: rgba(0, 0, 0, 0.075);\n}\n.table-primary,\n.table-primary > th,\n.table-primary > td {\n  background-color: #b8daff;\n}\n.table-hover .table-primary:hover {\n  background-color: #9fcdff;\n}\n.table-hover .table-primary:hover > td,\n.table-hover .table-primary:hover > th {\n  background-color: #9fcdff;\n}\n.table-secondary,\n.table-secondary > th,\n.table-secondary > td {\n  background-color: #dddfe2;\n}\n.table-hover .table-secondary:hover {\n  background-color: #cfd2d6;\n}\n.table-hover .table-secondary:hover > td,\n.table-hover .table-secondary:hover > th {\n  background-color: #cfd2d6;\n}\n.table-success,\n.table-success > th,\n.table-success > td {\n  background-color: #c3e6cb;\n}\n.table-hover .table-success:hover {\n  background-color: #b1dfbb;\n}\n.table-hover .table-success:hover > td,\n.table-hover .table-success:hover > th {\n  background-color: #b1dfbb;\n}\n.table-info,\n.table-info > th,\n.table-info > td {\n  background-color: #bee5eb;\n}\n.table-hover .table-info:hover {\n  background-color: #abdde5;\n}\n.table-hover .table-info:hover > td,\n.table-hover .table-info:hover > th {\n  background-color: #abdde5;\n}\n.table-warning,\n.table-warning > th,\n.table-warning > td {\n  background-color: #ffeeba;\n}\n.table-hover .table-warning:hover {\n  background-color: #ffe8a1;\n}\n.table-hover .table-warning:hover > td,\n.table-hover .table-warning:hover > th {\n  background-color: #ffe8a1;\n}\n.table-danger,\n.table-danger > th,\n.table-danger > td {\n  background-color: #f5c6cb;\n}\n.table-hover .table-danger:hover {\n  background-color: #f1b0b7;\n}\n.table-hover .table-danger:hover > td,\n.table-hover .table-danger:hover > th {\n  background-color: #f1b0b7;\n}\n.table-light,\n.table-light > th,\n.table-light > td {\n  background-color: #fdfdfe;\n}\n.table-hover .table-light:hover {\n  background-color: #ececf6;\n}\n.table-hover .table-light:hover > td,\n.table-hover .table-light:hover > th {\n  background-color: #ececf6;\n}\n.table-dark,\n.table-dark > th,\n.table-dark > td {\n  background-color: #c6c8ca;\n}\n.table-hover .table-dark:hover {\n  background-color: #b9bbbe;\n}\n.table-hover .table-dark:hover > td,\n.table-hover .table-dark:hover > th {\n  background-color: #b9bbbe;\n}\n.table-active,\n.table-active > th,\n.table-active > td {\n  background-color: rgba(0, 0, 0, 0.075);\n}\n.table-hover .table-active:hover {\n  background-color: rgba(0, 0, 0, 0.075);\n}\n.table-hover .table-active:hover > td,\n.table-hover .table-active:hover > th {\n  background-color: rgba(0, 0, 0, 0.075);\n}\n.table .thead-dark th {\n  color: #fff;\n  background-color: #212529;\n  border-color: #32383e;\n}\n.table .thead-light th {\n  color: #495057;\n  background-color: #e9ecef;\n  border-color: #dee2e6;\n}\n.table-dark {\n  color: #fff;\n  background-color: #212529;\n}\n.table-dark th,\n.table-dark td,\n.table-dark thead th {\n  border-color: #32383e;\n}\n.table-dark.table-bordered {\n  border: 0;\n}\n.table-dark.table-striped tbody tr:nth-of-type(odd) {\n  background-color: rgba(255, 255, 255, 0.05);\n}\n.table-dark.table-hover tbody tr:hover {\n  background-color: rgba(255, 255, 255, 0.075);\n}\n@media (max-width: 575.99px) {\n  .table-responsive-sm {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n  }\n  .table-responsive-sm > .table-bordered {\n    border: 0;\n  }\n}\n@media (max-width: 767.99px) {\n  .table-responsive-md {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n  }\n  .table-responsive-md > .table-bordered {\n    border: 0;\n  }\n}\n@media (max-width: 991.99px) {\n  .table-responsive-lg {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n  }\n  .table-responsive-lg > .table-bordered {\n    border: 0;\n  }\n}\n@media (max-width: 1199.99px) {\n  .table-responsive-xl {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n  }\n  .table-responsive-xl > .table-bordered {\n    border: 0;\n  }\n}\n.table-responsive {\n  display: block;\n  width: 100%;\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n}\n.table-responsive > .table-bordered {\n  border: 0;\n}\n.form-control {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  -webkit-transition: border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n  transition: border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n}\n.form-control::-ms-expand {\n  background-color: transparent;\n  border: 0;\n}\n.form-control:focus {\n  color: #495057;\n  background-color: #fff;\n  border-color: #80bdff;\n  outline: 0;\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n          box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n.form-control::-webkit-input-placeholder {\n  color: #868e96;\n  opacity: 1;\n}\n.form-control:-ms-input-placeholder {\n  color: #868e96;\n  opacity: 1;\n}\n.form-control::-ms-input-placeholder {\n  color: #868e96;\n  opacity: 1;\n}\n.form-control::placeholder {\n  color: #868e96;\n  opacity: 1;\n}\n.form-control:disabled, .form-control[readonly] {\n  background-color: #e9ecef;\n  opacity: 1;\n}\nselect.form-control:not([size]):not([multiple]) {\n  height: calc(2.25rem + 2px);\n}\nselect.form-control:focus::-ms-value {\n  color: #495057;\n  background-color: #fff;\n}\n.form-control-file,\n.form-control-range {\n  display: block;\n  width: 100%;\n}\n.col-form-label {\n  padding-top: calc(0.375rem + 1px);\n  padding-bottom: calc(0.375rem + 1px);\n  margin-bottom: 0;\n  font-size: inherit;\n  line-height: 1.5;\n}\n.col-form-label-lg {\n  padding-top: calc(0.5rem + 1px);\n  padding-bottom: calc(0.5rem + 1px);\n  font-size: 1.25rem;\n  line-height: 1.5;\n}\n.col-form-label-sm {\n  padding-top: calc(0.25rem + 1px);\n  padding-bottom: calc(0.25rem + 1px);\n  font-size: 0.875rem;\n  line-height: 1.5;\n}\n.form-control-plaintext {\n  display: block;\n  width: 100%;\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n  margin-bottom: 0;\n  line-height: 1.5;\n  background-color: transparent;\n  border: solid transparent;\n  border-width: 1px 0;\n}\n.form-control-plaintext.form-control-sm, .input-group-sm > .form-control-plaintext.form-control,\n.input-group-sm > .input-group-prepend > .form-control-plaintext.input-group-text,\n.input-group-sm > .input-group-append > .form-control-plaintext.input-group-text,\n.input-group-sm > .input-group-prepend > .form-control-plaintext.btn,\n.input-group-sm > .input-group-append > .form-control-plaintext.btn, .form-control-plaintext.form-control-lg, .input-group-lg > .form-control-plaintext.form-control,\n.input-group-lg > .input-group-prepend > .form-control-plaintext.input-group-text,\n.input-group-lg > .input-group-append > .form-control-plaintext.input-group-text,\n.input-group-lg > .input-group-prepend > .form-control-plaintext.btn,\n.input-group-lg > .input-group-append > .form-control-plaintext.btn {\n  padding-right: 0;\n  padding-left: 0;\n}\n.form-control-sm, .input-group-sm > .form-control,\n.input-group-sm > .input-group-prepend > .input-group-text,\n.input-group-sm > .input-group-append > .input-group-text,\n.input-group-sm > .input-group-prepend > .btn,\n.input-group-sm > .input-group-append > .btn {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  border-radius: 0.2rem;\n}\nselect.form-control-sm:not([size]):not([multiple]), .input-group-sm > select.form-control:not([size]):not([multiple]),\n.input-group-sm > .input-group-prepend > select.input-group-text:not([size]):not([multiple]),\n.input-group-sm > .input-group-append > select.input-group-text:not([size]):not([multiple]),\n.input-group-sm > .input-group-prepend > select.btn:not([size]):not([multiple]),\n.input-group-sm > .input-group-append > select.btn:not([size]):not([multiple]) {\n  height: calc(1.8125rem + 2px);\n}\n.form-control-lg, .input-group-lg > .form-control,\n.input-group-lg > .input-group-prepend > .input-group-text,\n.input-group-lg > .input-group-append > .input-group-text,\n.input-group-lg > .input-group-prepend > .btn,\n.input-group-lg > .input-group-append > .btn {\n  padding: 0.5rem 1rem;\n  font-size: 1.25rem;\n  line-height: 1.5;\n  border-radius: 0.3rem;\n}\nselect.form-control-lg:not([size]):not([multiple]), .input-group-lg > select.form-control:not([size]):not([multiple]),\n.input-group-lg > .input-group-prepend > select.input-group-text:not([size]):not([multiple]),\n.input-group-lg > .input-group-append > select.input-group-text:not([size]):not([multiple]),\n.input-group-lg > .input-group-prepend > select.btn:not([size]):not([multiple]),\n.input-group-lg > .input-group-append > select.btn:not([size]):not([multiple]) {\n  height: calc(2.875rem + 2px);\n}\n.form-group {\n  margin-bottom: 1rem;\n}\n.form-text {\n  display: block;\n  margin-top: 0.25rem;\n}\n.form-row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  margin-right: -5px;\n  margin-left: -5px;\n}\n.form-row > .col,\n.form-row > [class*=\"col-\"] {\n  padding-right: 5px;\n  padding-left: 5px;\n}\n.form-check {\n  position: relative;\n  display: block;\n  padding-left: 1.25rem;\n}\n.form-check-input {\n  position: absolute;\n  margin-top: 0.3rem;\n  margin-left: -1.25rem;\n}\n.form-check-input:disabled ~ .form-check-label {\n  color: #868e96;\n}\n.form-check-label {\n  margin-bottom: 0;\n}\n.form-check-inline {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  padding-left: 0;\n  margin-right: 0.75rem;\n}\n.form-check-inline .form-check-input {\n  position: static;\n  margin-top: 0;\n  margin-right: 0.3125rem;\n  margin-left: 0;\n}\n.valid-feedback {\n  display: none;\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 80%;\n  color: #28a745;\n}\n.valid-tooltip {\n  position: absolute;\n  top: 100%;\n  z-index: 5;\n  display: none;\n  width: 250px;\n  padding: .5rem;\n  margin-top: .1rem;\n  font-size: .875rem;\n  line-height: 1;\n  color: #fff;\n  background-color: rgba(40, 167, 69, 0.8);\n  border-radius: .2rem;\n}\n.was-validated .form-control:valid, .form-control.is-valid, .was-validated\n.custom-select:valid,\n.custom-select.is-valid {\n  border-color: #28a745;\n}\n.was-validated .form-control:valid:focus, .form-control.is-valid:focus, .was-validated\n.custom-select:valid:focus,\n.custom-select.is-valid:focus {\n  border-color: #28a745;\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\n          box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\n}\n.was-validated .form-control:valid ~ .valid-feedback,\n.was-validated .form-control:valid ~ .valid-tooltip, .form-control.is-valid ~ .valid-feedback,\n.form-control.is-valid ~ .valid-tooltip, .was-validated\n.custom-select:valid ~ .valid-feedback,\n.was-validated\n.custom-select:valid ~ .valid-tooltip,\n.custom-select.is-valid ~ .valid-feedback,\n.custom-select.is-valid ~ .valid-tooltip {\n  display: block;\n}\n.was-validated .form-check-input:valid ~ .form-check-label, .form-check-input.is-valid ~ .form-check-label {\n  color: #28a745;\n}\n.was-validated .custom-control-input:valid ~ .custom-control-label, .custom-control-input.is-valid ~ .custom-control-label {\n  color: #28a745;\n}\n.was-validated .custom-control-input:valid ~ .custom-control-label::before, .custom-control-input.is-valid ~ .custom-control-label::before {\n  background-color: #71dd8a;\n}\n.was-validated .custom-control-input:valid ~ .valid-feedback,\n.was-validated .custom-control-input:valid ~ .valid-tooltip, .custom-control-input.is-valid ~ .valid-feedback,\n.custom-control-input.is-valid ~ .valid-tooltip {\n  display: block;\n}\n.was-validated .custom-control-input:valid:checked ~ .custom-control-label::before, .custom-control-input.is-valid:checked ~ .custom-control-label::before {\n  background-color: #34ce57;\n}\n.was-validated .custom-control-input:valid:focus ~ .custom-control-label::before, .custom-control-input.is-valid:focus ~ .custom-control-label::before {\n  -webkit-box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\n          box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\n}\n.was-validated .custom-file-input:valid ~ .custom-file-label, .custom-file-input.is-valid ~ .custom-file-label {\n  border-color: #28a745;\n}\n.was-validated .custom-file-input:valid ~ .custom-file-label::before, .custom-file-input.is-valid ~ .custom-file-label::before {\n  border-color: inherit;\n}\n.was-validated .custom-file-input:valid ~ .valid-feedback,\n.was-validated .custom-file-input:valid ~ .valid-tooltip, .custom-file-input.is-valid ~ .valid-feedback,\n.custom-file-input.is-valid ~ .valid-tooltip {\n  display: block;\n}\n.was-validated .custom-file-input:valid:focus ~ .custom-file-label, .custom-file-input.is-valid:focus ~ .custom-file-label {\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\n          box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\n}\n.invalid-feedback {\n  display: none;\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 80%;\n  color: #dc3545;\n}\n.invalid-tooltip {\n  position: absolute;\n  top: 100%;\n  z-index: 5;\n  display: none;\n  width: 250px;\n  padding: .5rem;\n  margin-top: .1rem;\n  font-size: .875rem;\n  line-height: 1;\n  color: #fff;\n  background-color: rgba(220, 53, 69, 0.8);\n  border-radius: .2rem;\n}\n.was-validated .form-control:invalid, .form-control.is-invalid, .was-validated\n.custom-select:invalid,\n.custom-select.is-invalid {\n  border-color: #dc3545;\n}\n.was-validated .form-control:invalid:focus, .form-control.is-invalid:focus, .was-validated\n.custom-select:invalid:focus,\n.custom-select.is-invalid:focus {\n  border-color: #dc3545;\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n          box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n}\n.was-validated .form-control:invalid ~ .invalid-feedback,\n.was-validated .form-control:invalid ~ .invalid-tooltip, .form-control.is-invalid ~ .invalid-feedback,\n.form-control.is-invalid ~ .invalid-tooltip, .was-validated\n.custom-select:invalid ~ .invalid-feedback,\n.was-validated\n.custom-select:invalid ~ .invalid-tooltip,\n.custom-select.is-invalid ~ .invalid-feedback,\n.custom-select.is-invalid ~ .invalid-tooltip {\n  display: block;\n}\n.was-validated .form-check-input:invalid ~ .form-check-label, .form-check-input.is-invalid ~ .form-check-label {\n  color: #dc3545;\n}\n.was-validated .custom-control-input:invalid ~ .custom-control-label, .custom-control-input.is-invalid ~ .custom-control-label {\n  color: #dc3545;\n}\n.was-validated .custom-control-input:invalid ~ .custom-control-label::before, .custom-control-input.is-invalid ~ .custom-control-label::before {\n  background-color: #efa2a9;\n}\n.was-validated .custom-control-input:invalid ~ .invalid-feedback,\n.was-validated .custom-control-input:invalid ~ .invalid-tooltip, .custom-control-input.is-invalid ~ .invalid-feedback,\n.custom-control-input.is-invalid ~ .invalid-tooltip {\n  display: block;\n}\n.was-validated .custom-control-input:invalid:checked ~ .custom-control-label::before, .custom-control-input.is-invalid:checked ~ .custom-control-label::before {\n  background-color: #e4606d;\n}\n.was-validated .custom-control-input:invalid:focus ~ .custom-control-label::before, .custom-control-input.is-invalid:focus ~ .custom-control-label::before {\n  -webkit-box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n          box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n}\n.was-validated .custom-file-input:invalid ~ .custom-file-label, .custom-file-input.is-invalid ~ .custom-file-label {\n  border-color: #dc3545;\n}\n.was-validated .custom-file-input:invalid ~ .custom-file-label::before, .custom-file-input.is-invalid ~ .custom-file-label::before {\n  border-color: inherit;\n}\n.was-validated .custom-file-input:invalid ~ .invalid-feedback,\n.was-validated .custom-file-input:invalid ~ .invalid-tooltip, .custom-file-input.is-invalid ~ .invalid-feedback,\n.custom-file-input.is-invalid ~ .invalid-tooltip {\n  display: block;\n}\n.was-validated .custom-file-input:invalid:focus ~ .custom-file-label, .custom-file-input.is-invalid:focus ~ .custom-file-label {\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n          box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n}\n.form-inline {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -ms-flex-flow: row wrap;\n  flex-flow: row wrap;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n}\n.form-inline .form-check {\n  width: 100%;\n}\n@media (min-width: 576px) {\n  .form-inline label {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    margin-bottom: 0;\n  }\n  .form-inline .form-group {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 auto;\n    flex: 0 0 auto;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -ms-flex-flow: row wrap;\n    flex-flow: row wrap;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n    margin-bottom: 0;\n  }\n  .form-inline .form-control {\n    display: inline-block;\n    width: auto;\n    vertical-align: middle;\n  }\n  .form-inline .form-control-plaintext {\n    display: inline-block;\n  }\n  .form-inline .input-group {\n    width: auto;\n  }\n  .form-inline .form-check {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    width: auto;\n    padding-left: 0;\n  }\n  .form-inline .form-check-input {\n    position: relative;\n    margin-top: 0;\n    margin-right: 0.25rem;\n    margin-left: 0;\n  }\n  .form-inline .custom-control {\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n  }\n  .form-inline .custom-control-label {\n    margin-bottom: 0;\n  }\n}\n.btn {\n  display: inline-block;\n  font-weight: 400;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  border: 1px solid transparent;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  border-radius: 0.25rem;\n  -webkit-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n}\n.btn:focus, .btn:hover {\n  text-decoration: none;\n}\n.btn:focus, .btn.focus {\n  outline: 0;\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n          box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n.btn.disabled, .btn:disabled {\n  opacity: 0.65;\n}\n.btn:not([disabled]):not(.disabled) {\n  cursor: pointer;\n}\n.btn:not([disabled]):not(.disabled):active, .btn:not([disabled]):not(.disabled).active {\n  background-image: none;\n}\na.btn.disabled,\nfieldset[disabled] a.btn {\n  pointer-events: none;\n}\n.btn-primary {\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff;\n}\n.btn-primary:hover {\n  color: #fff;\n  background-color: #0069d9;\n  border-color: #0062cc;\n}\n.btn-primary:focus, .btn-primary.focus {\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\n          box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\n}\n.btn-primary.disabled, .btn-primary:disabled {\n  background-color: #007bff;\n  border-color: #007bff;\n}\n.btn-primary:not([disabled]):not(.disabled):active, .btn-primary:not([disabled]):not(.disabled).active,\n.show > .btn-primary.dropdown-toggle {\n  color: #fff;\n  background-color: #0062cc;\n  border-color: #005cbf;\n}\n.btn-primary:not([disabled]):not(.disabled):active:focus, .btn-primary:not([disabled]):not(.disabled).active:focus,\n.show > .btn-primary.dropdown-toggle:focus {\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\n          box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\n}\n.btn-secondary {\n  color: #fff;\n  background-color: #868e96;\n  border-color: #868e96;\n}\n.btn-secondary:hover {\n  color: #fff;\n  background-color: #727b84;\n  border-color: #6c757d;\n}\n.btn-secondary:focus, .btn-secondary.focus {\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(134, 142, 150, 0.5);\n          box-shadow: 0 0 0 0.2rem rgba(134, 142, 150, 0.5);\n}\n.btn-secondary.disabled, .btn-secondary:disabled {\n  background-color: #868e96;\n  border-color: #868e96;\n}\n.btn-secondary:not([disabled]):not(.disabled):active, .btn-secondary:not([disabled]):not(.disabled).active,\n.show > .btn-secondary.dropdown-toggle {\n  color: #fff;\n  background-color: #6c757d;\n  border-color: #666e76;\n}\n.btn-secondary:not([disabled]):not(.disabled):active:focus, .btn-secondary:not([disabled]):not(.disabled).active:focus,\n.show > .btn-secondary.dropdown-toggle:focus {\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(134, 142, 150, 0.5);\n          box-shadow: 0 0 0 0.2rem rgba(134, 142, 150, 0.5);\n}\n.btn-success {\n  color: #fff;\n  background-color: #28a745;\n  border-color: #28a745;\n}\n.btn-success:hover {\n  color: #fff;\n  background-color: #218838;\n  border-color: #1e7e34;\n}\n.btn-success:focus, .btn-success.focus {\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\n          box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\n}\n.btn-success.disabled, .btn-success:disabled {\n  background-color: #28a745;\n  border-color: #28a745;\n}\n.btn-success:not([disabled]):not(.disabled):active, .btn-success:not([disabled]):not(.disabled).active,\n.show > .btn-success.dropdown-toggle {\n  color: #fff;\n  background-color: #1e7e34;\n  border-color: #1c7430;\n}\n.btn-success:not([disabled]):not(.disabled):active:focus, .btn-success:not([disabled]):not(.disabled).active:focus,\n.show > .btn-success.dropdown-toggle:focus {\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\n          box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\n}\n.btn-info {\n  color: #fff;\n  background-color: #17a2b8;\n  border-color: #17a2b8;\n}\n.btn-info:hover {\n  color: #fff;\n  background-color: #138496;\n  border-color: #117a8b;\n}\n.btn-info:focus, .btn-info.focus {\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\n          box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\n}\n.btn-info.disabled, .btn-info:disabled {\n  background-color: #17a2b8;\n  border-color: #17a2b8;\n}\n.btn-info:not([disabled]):not(.disabled):active, .btn-info:not([disabled]):not(.disabled).active,\n.show > .btn-info.dropdown-toggle {\n  color: #fff;\n  background-color: #117a8b;\n  border-color: #10707f;\n}\n.btn-info:not([disabled]):not(.disabled):active:focus, .btn-info:not([disabled]):not(.disabled).active:focus,\n.show > .btn-info.dropdown-toggle:focus {\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\n          box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\n}\n.btn-warning {\n  color: #212529;\n  background-color: #ffc107;\n  border-color: #ffc107;\n}\n.btn-warning:hover {\n  color: #212529;\n  background-color: #e0a800;\n  border-color: #d39e00;\n}\n.btn-warning:focus, .btn-warning.focus {\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\n          box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\n}\n.btn-warning.disabled, .btn-warning:disabled {\n  background-color: #ffc107;\n  border-color: #ffc107;\n}\n.btn-warning:not([disabled]):not(.disabled):active, .btn-warning:not([disabled]):not(.disabled).active,\n.show > .btn-warning.dropdown-toggle {\n  color: #212529;\n  background-color: #d39e00;\n  border-color: #c69500;\n}\n.btn-warning:not([disabled]):not(.disabled):active:focus, .btn-warning:not([disabled]):not(.disabled).active:focus,\n.show > .btn-warning.dropdown-toggle:focus {\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\n          box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\n}\n.btn-danger {\n  color: #fff;\n  background-color: #dc3545;\n  border-color: #dc3545;\n}\n.btn-danger:hover {\n  color: #fff;\n  background-color: #c82333;\n  border-color: #bd2130;\n}\n.btn-danger:focus, .btn-danger.focus {\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\n          box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\n}\n.btn-danger.disabled, .btn-danger:disabled {\n  background-color: #dc3545;\n  border-color: #dc3545;\n}\n.btn-danger:not([disabled]):not(.disabled):active, .btn-danger:not([disabled]):not(.disabled).active,\n.show > .btn-danger.dropdown-toggle {\n  color: #fff;\n  background-color: #bd2130;\n  border-color: #b21f2d;\n}\n.btn-danger:not([disabled]):not(.disabled):active:focus, .btn-danger:not([disabled]):not(.disabled).active:focus,\n.show > .btn-danger.dropdown-toggle:focus {\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\n          box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\n}\n.btn-light {\n  color: #212529;\n  background-color: #f8f9fa;\n  border-color: #f8f9fa;\n}\n.btn-light:hover {\n  color: #212529;\n  background-color: #e2e6ea;\n  border-color: #dae0e5;\n}\n.btn-light:focus, .btn-light.focus {\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\n          box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\n}\n.btn-light.disabled, .btn-light:disabled {\n  background-color: #f8f9fa;\n  border-color: #f8f9fa;\n}\n.btn-light:not([disabled]):not(.disabled):active, .btn-light:not([disabled]):not(.disabled).active,\n.show > .btn-light.dropdown-toggle {\n  color: #212529;\n  background-color: #dae0e5;\n  border-color: #d3d9df;\n}\n.btn-light:not([disabled]):not(.disabled):active:focus, .btn-light:not([disabled]):not(.disabled).active:focus,\n.show > .btn-light.dropdown-toggle:focus {\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\n          box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\n}\n.btn-dark {\n  color: #fff;\n  background-color: #343a40;\n  border-color: #343a40;\n}\n.btn-dark:hover {\n  color: #fff;\n  background-color: #23272b;\n  border-color: #1d2124;\n}\n.btn-dark:focus, .btn-dark.focus {\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\n          box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\n}\n.btn-dark.disabled, .btn-dark:disabled {\n  background-color: #343a40;\n  border-color: #343a40;\n}\n.btn-dark:not([disabled]):not(.disabled):active, .btn-dark:not([disabled]):not(.disabled).active,\n.show > .btn-dark.dropdown-toggle {\n  color: #fff;\n  background-color: #1d2124;\n  border-color: #171a1d;\n}\n.btn-dark:not([disabled]):not(.disabled):active:focus, .btn-dark:not([disabled]):not(.disabled).active:focus,\n.show > .btn-dark.dropdown-toggle:focus {\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\n          box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\n}\n.btn-outline-primary {\n  color: #007bff;\n  background-color: transparent;\n  background-image: none;\n  border-color: #007bff;\n}\n.btn-outline-primary:hover {\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff;\n}\n.btn-outline-primary:focus, .btn-outline-primary.focus {\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\n          box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\n}\n.btn-outline-primary.disabled, .btn-outline-primary:disabled {\n  color: #007bff;\n  background-color: transparent;\n}\n.btn-outline-primary:not([disabled]):not(.disabled):active, .btn-outline-primary:not([disabled]):not(.disabled).active,\n.show > .btn-outline-primary.dropdown-toggle {\n  color: #212529;\n  background-color: #007bff;\n  border-color: #007bff;\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\n          box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\n}\n.btn-outline-secondary {\n  color: #868e96;\n  background-color: transparent;\n  background-image: none;\n  border-color: #868e96;\n}\n.btn-outline-secondary:hover {\n  color: #fff;\n  background-color: #868e96;\n  border-color: #868e96;\n}\n.btn-outline-secondary:focus, .btn-outline-secondary.focus {\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(134, 142, 150, 0.5);\n          box-shadow: 0 0 0 0.2rem rgba(134, 142, 150, 0.5);\n}\n.btn-outline-secondary.disabled, .btn-outline-secondary:disabled {\n  color: #868e96;\n  background-color: transparent;\n}\n.btn-outline-secondary:not([disabled]):not(.disabled):active, .btn-outline-secondary:not([disabled]):not(.disabled).active,\n.show > .btn-outline-secondary.dropdown-toggle {\n  color: #212529;\n  background-color: #868e96;\n  border-color: #868e96;\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(134, 142, 150, 0.5);\n          box-shadow: 0 0 0 0.2rem rgba(134, 142, 150, 0.5);\n}\n.btn-outline-success {\n  color: #28a745;\n  background-color: transparent;\n  background-image: none;\n  border-color: #28a745;\n}\n.btn-outline-success:hover {\n  color: #fff;\n  background-color: #28a745;\n  border-color: #28a745;\n}\n.btn-outline-success:focus, .btn-outline-success.focus {\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\n          box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\n}\n.btn-outline-success.disabled, .btn-outline-success:disabled {\n  color: #28a745;\n  background-color: transparent;\n}\n.btn-outline-success:not([disabled]):not(.disabled):active, .btn-outline-success:not([disabled]):not(.disabled).active,\n.show > .btn-outline-success.dropdown-toggle {\n  color: #212529;\n  background-color: #28a745;\n  border-color: #28a745;\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\n          box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\n}\n.btn-outline-info {\n  color: #17a2b8;\n  background-color: transparent;\n  background-image: none;\n  border-color: #17a2b8;\n}\n.btn-outline-info:hover {\n  color: #fff;\n  background-color: #17a2b8;\n  border-color: #17a2b8;\n}\n.btn-outline-info:focus, .btn-outline-info.focus {\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\n          box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\n}\n.btn-outline-info.disabled, .btn-outline-info:disabled {\n  color: #17a2b8;\n  background-color: transparent;\n}\n.btn-outline-info:not([disabled]):not(.disabled):active, .btn-outline-info:not([disabled]):not(.disabled).active,\n.show > .btn-outline-info.dropdown-toggle {\n  color: #212529;\n  background-color: #17a2b8;\n  border-color: #17a2b8;\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\n          box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\n}\n.btn-outline-warning {\n  color: #ffc107;\n  background-color: transparent;\n  background-image: none;\n  border-color: #ffc107;\n}\n.btn-outline-warning:hover {\n  color: #212529;\n  background-color: #ffc107;\n  border-color: #ffc107;\n}\n.btn-outline-warning:focus, .btn-outline-warning.focus {\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\n          box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\n}\n.btn-outline-warning.disabled, .btn-outline-warning:disabled {\n  color: #ffc107;\n  background-color: transparent;\n}\n.btn-outline-warning:not([disabled]):not(.disabled):active, .btn-outline-warning:not([disabled]):not(.disabled).active,\n.show > .btn-outline-warning.dropdown-toggle {\n  color: #212529;\n  background-color: #ffc107;\n  border-color: #ffc107;\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\n          box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\n}\n.btn-outline-danger {\n  color: #dc3545;\n  background-color: transparent;\n  background-image: none;\n  border-color: #dc3545;\n}\n.btn-outline-danger:hover {\n  color: #fff;\n  background-color: #dc3545;\n  border-color: #dc3545;\n}\n.btn-outline-danger:focus, .btn-outline-danger.focus {\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\n          box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\n}\n.btn-outline-danger.disabled, .btn-outline-danger:disabled {\n  color: #dc3545;\n  background-color: transparent;\n}\n.btn-outline-danger:not([disabled]):not(.disabled):active, .btn-outline-danger:not([disabled]):not(.disabled).active,\n.show > .btn-outline-danger.dropdown-toggle {\n  color: #212529;\n  background-color: #dc3545;\n  border-color: #dc3545;\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\n          box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\n}\n.btn-outline-light {\n  color: #f8f9fa;\n  background-color: transparent;\n  background-image: none;\n  border-color: #f8f9fa;\n}\n.btn-outline-light:hover {\n  color: #212529;\n  background-color: #f8f9fa;\n  border-color: #f8f9fa;\n}\n.btn-outline-light:focus, .btn-outline-light.focus {\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\n          box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\n}\n.btn-outline-light.disabled, .btn-outline-light:disabled {\n  color: #f8f9fa;\n  background-color: transparent;\n}\n.btn-outline-light:not([disabled]):not(.disabled):active, .btn-outline-light:not([disabled]):not(.disabled).active,\n.show > .btn-outline-light.dropdown-toggle {\n  color: #fff;\n  background-color: #f8f9fa;\n  border-color: #f8f9fa;\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\n          box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\n}\n.btn-outline-dark {\n  color: #343a40;\n  background-color: transparent;\n  background-image: none;\n  border-color: #343a40;\n}\n.btn-outline-dark:hover {\n  color: #fff;\n  background-color: #343a40;\n  border-color: #343a40;\n}\n.btn-outline-dark:focus, .btn-outline-dark.focus {\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\n          box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\n}\n.btn-outline-dark.disabled, .btn-outline-dark:disabled {\n  color: #343a40;\n  background-color: transparent;\n}\n.btn-outline-dark:not([disabled]):not(.disabled):active, .btn-outline-dark:not([disabled]):not(.disabled).active,\n.show > .btn-outline-dark.dropdown-toggle {\n  color: #212529;\n  background-color: #343a40;\n  border-color: #343a40;\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\n          box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\n}\n.btn-link {\n  font-weight: 400;\n  color: #007bff;\n  background-color: transparent;\n}\n.btn-link:hover {\n  color: #0056b3;\n  text-decoration: underline;\n  background-color: transparent;\n  border-color: transparent;\n}\n.btn-link:focus, .btn-link.focus {\n  text-decoration: underline;\n  border-color: transparent;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.btn-link:disabled, .btn-link.disabled {\n  color: #868e96;\n}\n.btn-lg, .btn-group-lg > .btn {\n  padding: 0.5rem 1rem;\n  font-size: 1.25rem;\n  line-height: 1.5;\n  border-radius: 0.3rem;\n}\n.btn-sm, .btn-group-sm > .btn {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  border-radius: 0.2rem;\n}\n.btn-block {\n  display: block;\n  width: 100%;\n}\n.btn-block + .btn-block {\n  margin-top: 0.5rem;\n}\ninput[type=\"submit\"].btn-block,\ninput[type=\"reset\"].btn-block,\ninput[type=\"button\"].btn-block {\n  width: 100%;\n}\n.fade {\n  opacity: 0;\n  -webkit-transition: opacity 0.15s linear;\n  transition: opacity 0.15s linear;\n}\n.fade.show {\n  opacity: 1;\n}\n.collapse {\n  display: none;\n}\n.collapse.show {\n  display: block;\n}\ntr.collapse.show {\n  display: table-row;\n}\ntbody.collapse.show {\n  display: table-row-group;\n}\n.collapsing {\n  position: relative;\n  height: 0;\n  overflow: hidden;\n  -webkit-transition: height 0.35s ease;\n  transition: height 0.35s ease;\n}\n.dropup,\n.dropdown {\n  position: relative;\n}\n.dropdown-toggle::after {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0.3em solid;\n  border-right: 0.3em solid transparent;\n  border-bottom: 0;\n  border-left: 0.3em solid transparent;\n}\n.dropdown-toggle:empty::after {\n  margin-left: 0;\n}\n.dropdown-menu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  display: none;\n  float: left;\n  min-width: 10rem;\n  padding: 0.5rem 0;\n  margin: 0.125rem 0 0;\n  font-size: 1rem;\n  color: #212529;\n  text-align: left;\n  list-style: none;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 0.25rem;\n}\n.dropup .dropdown-menu {\n  margin-top: 0;\n  margin-bottom: 0.125rem;\n}\n.dropup .dropdown-toggle::after {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0;\n  border-right: 0.3em solid transparent;\n  border-bottom: 0.3em solid;\n  border-left: 0.3em solid transparent;\n}\n.dropup .dropdown-toggle:empty::after {\n  margin-left: 0;\n}\n.dropright .dropdown-menu {\n  margin-top: 0;\n  margin-left: 0.125rem;\n}\n.dropright .dropdown-toggle::after {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0.3em solid transparent;\n  border-bottom: 0.3em solid transparent;\n  border-left: 0.3em solid;\n}\n.dropright .dropdown-toggle:empty::after {\n  margin-left: 0;\n}\n.dropright .dropdown-toggle::after {\n  vertical-align: 0;\n}\n.dropleft .dropdown-menu {\n  margin-top: 0;\n  margin-right: 0.125rem;\n}\n.dropleft .dropdown-toggle::after {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n}\n.dropleft .dropdown-toggle::after {\n  display: none;\n}\n.dropleft .dropdown-toggle::before {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-right: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0.3em solid transparent;\n  border-right: 0.3em solid;\n  border-bottom: 0.3em solid transparent;\n}\n.dropleft .dropdown-toggle:empty::after {\n  margin-left: 0;\n}\n.dropleft .dropdown-toggle::before {\n  vertical-align: 0;\n}\n.dropdown-divider {\n  height: 0;\n  margin: 0.5rem 0;\n  overflow: hidden;\n  border-top: 1px solid #e9ecef;\n}\n.dropdown-item {\n  display: block;\n  width: 100%;\n  padding: 0.25rem 1.5rem;\n  clear: both;\n  font-weight: 400;\n  color: #212529;\n  text-align: inherit;\n  white-space: nowrap;\n  background-color: transparent;\n  border: 0;\n}\n.dropdown-item:focus, .dropdown-item:hover {\n  color: #16181b;\n  text-decoration: none;\n  background-color: #f8f9fa;\n}\n.dropdown-item.active, .dropdown-item:active {\n  color: #fff;\n  text-decoration: none;\n  background-color: #007bff;\n}\n.dropdown-item.disabled, .dropdown-item:disabled {\n  color: #868e96;\n  background-color: transparent;\n}\n.dropdown-menu.show {\n  display: block;\n}\n.dropdown-header {\n  display: block;\n  padding: 0.5rem 1.5rem;\n  margin-bottom: 0;\n  font-size: 0.875rem;\n  color: #868e96;\n  white-space: nowrap;\n}\n.btn-group,\n.btn-group-vertical {\n  position: relative;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  vertical-align: middle;\n}\n.btn-group > .btn,\n.btn-group-vertical > .btn {\n  position: relative;\n  -webkit-box-flex: 0;\n  -ms-flex: 0 1 auto;\n  flex: 0 1 auto;\n}\n.btn-group > .btn:hover,\n.btn-group-vertical > .btn:hover {\n  z-index: 1;\n}\n.btn-group > .btn:focus, .btn-group > .btn:active, .btn-group > .btn.active,\n.btn-group-vertical > .btn:focus,\n.btn-group-vertical > .btn:active,\n.btn-group-vertical > .btn.active {\n  z-index: 1;\n}\n.btn-group .btn + .btn,\n.btn-group .btn + .btn-group,\n.btn-group .btn-group + .btn,\n.btn-group .btn-group + .btn-group,\n.btn-group-vertical .btn + .btn,\n.btn-group-vertical .btn + .btn-group,\n.btn-group-vertical .btn-group + .btn,\n.btn-group-vertical .btn-group + .btn-group {\n  margin-left: -1px;\n}\n.btn-toolbar {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  -webkit-box-pack: start;\n  -ms-flex-pack: start;\n  justify-content: flex-start;\n}\n.btn-toolbar .input-group {\n  width: auto;\n}\n.btn-group > .btn:first-child {\n  margin-left: 0;\n}\n.btn-group > .btn:not(:last-child):not(.dropdown-toggle),\n.btn-group > .btn-group:not(:last-child) > .btn {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.btn-group > .btn:not(:first-child),\n.btn-group > .btn-group:not(:first-child) > .btn {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.dropdown-toggle-split {\n  padding-right: 0.5625rem;\n  padding-left: 0.5625rem;\n}\n.dropdown-toggle-split::after {\n  margin-left: 0;\n}\n.btn-sm + .dropdown-toggle-split, .btn-group-sm > .btn + .dropdown-toggle-split {\n  padding-right: 0.375rem;\n  padding-left: 0.375rem;\n}\n.btn-lg + .dropdown-toggle-split, .btn-group-lg > .btn + .dropdown-toggle-split {\n  padding-right: 0.75rem;\n  padding-left: 0.75rem;\n}\n.btn-group-vertical {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-box-align: start;\n  -ms-flex-align: start;\n  align-items: flex-start;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n}\n.btn-group-vertical .btn,\n.btn-group-vertical .btn-group {\n  width: 100%;\n}\n.btn-group-vertical > .btn + .btn,\n.btn-group-vertical > .btn + .btn-group,\n.btn-group-vertical > .btn-group + .btn,\n.btn-group-vertical > .btn-group + .btn-group {\n  margin-top: -1px;\n  margin-left: 0;\n}\n.btn-group-vertical > .btn:not(:last-child):not(.dropdown-toggle),\n.btn-group-vertical > .btn-group:not(:last-child) > .btn {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.btn-group-vertical > .btn:not(:first-child),\n.btn-group-vertical > .btn-group:not(:first-child) > .btn {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.btn-group-toggle > .btn,\n.btn-group-toggle > .btn-group > .btn {\n  margin-bottom: 0;\n}\n.btn-group-toggle > .btn input[type=\"radio\"],\n.btn-group-toggle > .btn input[type=\"checkbox\"],\n.btn-group-toggle > .btn-group > .btn input[type=\"radio\"],\n.btn-group-toggle > .btn-group > .btn input[type=\"checkbox\"] {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  pointer-events: none;\n}\n.input-group {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  -webkit-box-align: stretch;\n  -ms-flex-align: stretch;\n  align-items: stretch;\n  width: 100%;\n}\n.input-group .form-control,\n.input-group .custom-select,\n.input-group .custom-file {\n  position: relative;\n  -webkit-box-flex: 1;\n  -ms-flex: 1 1 auto;\n  flex: 1 1 auto;\n  width: 1%;\n  margin-bottom: 0;\n}\n.input-group .form-control:focus,\n.input-group .custom-select:focus,\n.input-group .custom-file:focus {\n  z-index: 3;\n}\n.input-group .form-control + .form-control,\n.input-group .custom-select + .form-control,\n.input-group .custom-file + .form-control {\n  margin-left: -1px;\n}\n.input-group .form-control:not(:last-child),\n.input-group .custom-select:not(:last-child) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.input-group .form-control:not(:first-child),\n.input-group .custom-select:not(:first-child) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.input-group .custom-file {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n}\n.input-group .custom-file:not(:last-child) .custom-file-control,\n.input-group .custom-file:not(:last-child) .custom-file-control::before {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.input-group .custom-file:not(:first-child) .custom-file-control,\n.input-group .custom-file:not(:first-child) .custom-file-control::before {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.input-group-prepend,\n.input-group-append {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n}\n.input-group-prepend .btn,\n.input-group-append .btn {\n  position: relative;\n  z-index: 2;\n}\n.input-group-prepend .btn + .btn,\n.input-group-prepend .btn + .input-group-text,\n.input-group-prepend .input-group-text + .input-group-text,\n.input-group-prepend .input-group-text + .btn,\n.input-group-append .btn + .btn,\n.input-group-append .btn + .input-group-text,\n.input-group-append .input-group-text + .input-group-text,\n.input-group-append .input-group-text + .btn {\n  margin-left: -1px;\n}\n.input-group-prepend {\n  margin-right: -1px;\n}\n.input-group-append {\n  margin-left: -1px;\n}\n.input-group-text {\n  padding: 0.375rem 0.75rem;\n  margin-bottom: 0;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  text-align: center;\n  white-space: nowrap;\n  background-color: #e9ecef;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n}\n.input-group-text input[type=\"radio\"],\n.input-group-text input[type=\"checkbox\"] {\n  margin-top: 0;\n}\n.input-group > .input-group-prepend > .btn,\n.input-group > .input-group-prepend > .input-group-text,\n.input-group > .input-group-append:not(:last-child) > .btn,\n.input-group > .input-group-append:not(:last-child) > .input-group-text,\n.input-group > .input-group-append:last-child > .btn:not(:last-child):not(.dropdown-toggle),\n.input-group > .input-group-append:last-child > .input-group-text:not(:last-child) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.input-group > .input-group-append > .btn,\n.input-group > .input-group-append > .input-group-text,\n.input-group > .input-group-prepend:not(:first-child) > .btn,\n.input-group > .input-group-prepend:not(:first-child) > .input-group-text,\n.input-group > .input-group-prepend:first-child > .btn:not(:first-child),\n.input-group > .input-group-prepend:first-child > .input-group-text:not(:first-child) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.custom-control {\n  position: relative;\n  display: block;\n  min-height: 1.5rem;\n  padding-left: 1.5rem;\n}\n.custom-control-inline {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  margin-right: 1rem;\n}\n.custom-control-input {\n  position: absolute;\n  z-index: -1;\n  opacity: 0;\n}\n.custom-control-input:checked ~ .custom-control-label::before {\n  color: #fff;\n  background-color: #007bff;\n}\n.custom-control-input:focus ~ .custom-control-label::before {\n  -webkit-box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n          box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n.custom-control-input:active ~ .custom-control-label::before {\n  color: #fff;\n  background-color: #b3d7ff;\n}\n.custom-control-input:disabled ~ .custom-control-label {\n  color: #868e96;\n}\n.custom-control-input:disabled ~ .custom-control-label::before {\n  background-color: #e9ecef;\n}\n.custom-control-label {\n  margin-bottom: 0;\n}\n.custom-control-label::before {\n  position: absolute;\n  top: 0.25rem;\n  left: 0;\n  display: block;\n  width: 1rem;\n  height: 1rem;\n  pointer-events: none;\n  content: \"\";\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  background-color: #dee2e6;\n}\n.custom-control-label::after {\n  position: absolute;\n  top: 0.25rem;\n  left: 0;\n  display: block;\n  width: 1rem;\n  height: 1rem;\n  content: \"\";\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: 50% 50%;\n}\n.custom-checkbox .custom-control-label::before {\n  border-radius: 0.25rem;\n}\n.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {\n  background-color: #007bff;\n}\n.custom-checkbox .custom-control-input:checked ~ .custom-control-label::after {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E\");\n}\n.custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::before {\n  background-color: #007bff;\n}\n.custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::after {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 4'%3E%3Cpath stroke='%23fff' d='M0 2h4'/%3E%3C/svg%3E\");\n}\n.custom-radio .custom-control-label::before {\n  border-radius: 50%;\n}\n.custom-radio .custom-control-input:checked ~ .custom-control-label::before {\n  background-color: #007bff;\n}\n.custom-radio .custom-control-input:checked ~ .custom-control-label::after {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='%23fff'/%3E%3C/svg%3E\");\n}\n.custom-select {\n  display: inline-block;\n  width: 100%;\n  height: calc(2.25rem + 2px);\n  padding: 0.375rem 1.75rem 0.375rem 0.75rem;\n  line-height: 1.5;\n  color: #495057;\n  vertical-align: middle;\n  background: #fff url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E\") no-repeat right 0.75rem center;\n  background-size: 8px 10px;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n.custom-select:focus {\n  border-color: #80bdff;\n  outline: 0;\n  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.075), 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n          box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.075), 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n.custom-select:focus::-ms-value {\n  color: #495057;\n  background-color: #fff;\n}\n.custom-select[multiple], .custom-select[size]:not([size=\"1\"]) {\n  height: auto;\n  padding-right: 0.75rem;\n  background-image: none;\n}\n.custom-select:disabled {\n  color: #868e96;\n  background-color: #e9ecef;\n}\n.custom-select::-ms-expand {\n  opacity: 0;\n}\n.custom-select-sm {\n  height: calc(1.8125rem + 2px);\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n  font-size: 75%;\n}\n.custom-select-lg {\n  height: calc(2.875rem + 2px);\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n  font-size: 125%;\n}\n.custom-file {\n  position: relative;\n  display: inline-block;\n  width: 100%;\n  height: calc(2.25rem + 2px);\n  margin-bottom: 0;\n}\n.custom-file-input {\n  position: relative;\n  z-index: 2;\n  width: 100%;\n  height: calc(2.25rem + 2px);\n  margin: 0;\n  opacity: 0;\n}\n.custom-file-input:focus ~ .custom-file-control {\n  border-color: #80bdff;\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n          box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n.custom-file-input:focus ~ .custom-file-control::before {\n  border-color: #80bdff;\n}\n.custom-file-input:lang(en) ~ .custom-file-label::after {\n  content: \"Browse\";\n}\n.custom-file-label {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1;\n  height: calc(2.25rem + 2px);\n  padding: 0.375rem 0.75rem;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n}\n.custom-file-label::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 3;\n  display: block;\n  height: calc(calc(2.25rem + 2px) - 1px * 2);\n  padding: 0.375rem 0.75rem;\n  line-height: 1.5;\n  color: #495057;\n  content: \"Browse\";\n  background-color: #e9ecef;\n  border-left: 1px solid #ced4da;\n  border-radius: 0 0.25rem 0.25rem 0;\n}\n.nav {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n}\n.nav-link {\n  display: block;\n  padding: 0.5rem 1rem;\n}\n.nav-link:focus, .nav-link:hover {\n  text-decoration: none;\n}\n.nav-link.disabled {\n  color: #868e96;\n}\n.nav-tabs {\n  border-bottom: 1px solid #dee2e6;\n}\n.nav-tabs .nav-item {\n  margin-bottom: -1px;\n}\n.nav-tabs .nav-link {\n  border: 1px solid transparent;\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem;\n}\n.nav-tabs .nav-link:focus, .nav-tabs .nav-link:hover {\n  border-color: #e9ecef #e9ecef #dee2e6;\n}\n.nav-tabs .nav-link.disabled {\n  color: #868e96;\n  background-color: transparent;\n  border-color: transparent;\n}\n.nav-tabs .nav-link.active,\n.nav-tabs .nav-item.show .nav-link {\n  color: #495057;\n  background-color: #fff;\n  border-color: #dee2e6 #dee2e6 #fff;\n}\n.nav-tabs .dropdown-menu {\n  margin-top: -1px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.nav-pills .nav-link {\n  border-radius: 0.25rem;\n}\n.nav-pills .nav-link.active,\n.nav-pills .show > .nav-link {\n  color: #fff;\n  background-color: #007bff;\n}\n.nav-fill .nav-item {\n  -webkit-box-flex: 1;\n  -ms-flex: 1 1 auto;\n  flex: 1 1 auto;\n  text-align: center;\n}\n.nav-justified .nav-item {\n  -ms-flex-preferred-size: 0;\n  flex-basis: 0;\n  -webkit-box-flex: 1;\n  -ms-flex-positive: 1;\n  flex-grow: 1;\n  text-align: center;\n}\n.tab-content > .tab-pane {\n  display: none;\n}\n.tab-content > .active {\n  display: block;\n}\n.navbar {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: justify;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  padding: 0.5rem 1rem;\n}\n.navbar > .container,\n.navbar > .container-fluid {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: justify;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n}\n.navbar-brand {\n  display: inline-block;\n  padding-top: 0.3125rem;\n  padding-bottom: 0.3125rem;\n  margin-right: 1rem;\n  font-size: 1.25rem;\n  line-height: inherit;\n  white-space: nowrap;\n}\n.navbar-brand:focus, .navbar-brand:hover {\n  text-decoration: none;\n}\n.navbar-nav {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n}\n.navbar-nav .nav-link {\n  padding-right: 0;\n  padding-left: 0;\n}\n.navbar-nav .dropdown-menu {\n  position: static;\n  float: none;\n}\n.navbar-text {\n  display: inline-block;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.navbar-collapse {\n  -ms-flex-preferred-size: 100%;\n  flex-basis: 100%;\n  -webkit-box-flex: 1;\n  -ms-flex-positive: 1;\n  flex-grow: 1;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n}\n.navbar-toggler {\n  padding: 0.25rem 0.75rem;\n  font-size: 1.25rem;\n  line-height: 1;\n  background-color: transparent;\n  border: 1px solid transparent;\n  border-radius: 0.25rem;\n}\n.navbar-toggler:focus, .navbar-toggler:hover {\n  text-decoration: none;\n}\n.navbar-toggler:not([disabled]):not(.disabled) {\n  cursor: pointer;\n}\n.navbar-toggler-icon {\n  display: inline-block;\n  width: 1.5em;\n  height: 1.5em;\n  vertical-align: middle;\n  content: \"\";\n  background: no-repeat center center;\n  background-size: 100% 100%;\n}\n@media (max-width: 575.99px) {\n  .navbar-expand-sm > .container,\n  .navbar-expand-sm > .container-fluid {\n    padding-right: 0;\n    padding-left: 0;\n  }\n}\n@media (min-width: 576px) {\n  .navbar-expand-sm {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -ms-flex-flow: row nowrap;\n    flex-flow: row nowrap;\n    -webkit-box-pack: start;\n    -ms-flex-pack: start;\n    justify-content: flex-start;\n  }\n  .navbar-expand-sm .navbar-nav {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: row;\n    flex-direction: row;\n  }\n  .navbar-expand-sm .navbar-nav .dropdown-menu {\n    position: absolute;\n  }\n  .navbar-expand-sm .navbar-nav .dropdown-menu-right {\n    right: 0;\n    left: auto;\n  }\n  .navbar-expand-sm .navbar-nav .nav-link {\n    padding-right: .5rem;\n    padding-left: .5rem;\n  }\n  .navbar-expand-sm > .container,\n  .navbar-expand-sm > .container-fluid {\n    -ms-flex-wrap: nowrap;\n    flex-wrap: nowrap;\n  }\n  .navbar-expand-sm .navbar-collapse {\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important;\n    -ms-flex-preferred-size: auto;\n    flex-basis: auto;\n  }\n  .navbar-expand-sm .navbar-toggler {\n    display: none;\n  }\n  .navbar-expand-sm .dropup .dropdown-menu {\n    top: auto;\n    bottom: 100%;\n  }\n}\n@media (max-width: 767.99px) {\n  .navbar-expand-md > .container,\n  .navbar-expand-md > .container-fluid {\n    padding-right: 0;\n    padding-left: 0;\n  }\n}\n@media (min-width: 768px) {\n  .navbar-expand-md {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -ms-flex-flow: row nowrap;\n    flex-flow: row nowrap;\n    -webkit-box-pack: start;\n    -ms-flex-pack: start;\n    justify-content: flex-start;\n  }\n  .navbar-expand-md .navbar-nav {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: row;\n    flex-direction: row;\n  }\n  .navbar-expand-md .navbar-nav .dropdown-menu {\n    position: absolute;\n  }\n  .navbar-expand-md .navbar-nav .dropdown-menu-right {\n    right: 0;\n    left: auto;\n  }\n  .navbar-expand-md .navbar-nav .nav-link {\n    padding-right: .5rem;\n    padding-left: .5rem;\n  }\n  .navbar-expand-md > .container,\n  .navbar-expand-md > .container-fluid {\n    -ms-flex-wrap: nowrap;\n    flex-wrap: nowrap;\n  }\n  .navbar-expand-md .navbar-collapse {\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important;\n    -ms-flex-preferred-size: auto;\n    flex-basis: auto;\n  }\n  .navbar-expand-md .navbar-toggler {\n    display: none;\n  }\n  .navbar-expand-md .dropup .dropdown-menu {\n    top: auto;\n    bottom: 100%;\n  }\n}\n@media (max-width: 991.99px) {\n  .navbar-expand-lg > .container,\n  .navbar-expand-lg > .container-fluid {\n    padding-right: 0;\n    padding-left: 0;\n  }\n}\n@media (min-width: 992px) {\n  .navbar-expand-lg {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -ms-flex-flow: row nowrap;\n    flex-flow: row nowrap;\n    -webkit-box-pack: start;\n    -ms-flex-pack: start;\n    justify-content: flex-start;\n  }\n  .navbar-expand-lg .navbar-nav {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: row;\n    flex-direction: row;\n  }\n  .navbar-expand-lg .navbar-nav .dropdown-menu {\n    position: absolute;\n  }\n  .navbar-expand-lg .navbar-nav .dropdown-menu-right {\n    right: 0;\n    left: auto;\n  }\n  .navbar-expand-lg .navbar-nav .nav-link {\n    padding-right: .5rem;\n    padding-left: .5rem;\n  }\n  .navbar-expand-lg > .container,\n  .navbar-expand-lg > .container-fluid {\n    -ms-flex-wrap: nowrap;\n    flex-wrap: nowrap;\n  }\n  .navbar-expand-lg .navbar-collapse {\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important;\n    -ms-flex-preferred-size: auto;\n    flex-basis: auto;\n  }\n  .navbar-expand-lg .navbar-toggler {\n    display: none;\n  }\n  .navbar-expand-lg .dropup .dropdown-menu {\n    top: auto;\n    bottom: 100%;\n  }\n}\n@media (max-width: 1199.99px) {\n  .navbar-expand-xl > .container,\n  .navbar-expand-xl > .container-fluid {\n    padding-right: 0;\n    padding-left: 0;\n  }\n}\n@media (min-width: 1200px) {\n  .navbar-expand-xl {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -ms-flex-flow: row nowrap;\n    flex-flow: row nowrap;\n    -webkit-box-pack: start;\n    -ms-flex-pack: start;\n    justify-content: flex-start;\n  }\n  .navbar-expand-xl .navbar-nav {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: row;\n    flex-direction: row;\n  }\n  .navbar-expand-xl .navbar-nav .dropdown-menu {\n    position: absolute;\n  }\n  .navbar-expand-xl .navbar-nav .dropdown-menu-right {\n    right: 0;\n    left: auto;\n  }\n  .navbar-expand-xl .navbar-nav .nav-link {\n    padding-right: .5rem;\n    padding-left: .5rem;\n  }\n  .navbar-expand-xl > .container,\n  .navbar-expand-xl > .container-fluid {\n    -ms-flex-wrap: nowrap;\n    flex-wrap: nowrap;\n  }\n  .navbar-expand-xl .navbar-collapse {\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important;\n    -ms-flex-preferred-size: auto;\n    flex-basis: auto;\n  }\n  .navbar-expand-xl .navbar-toggler {\n    display: none;\n  }\n  .navbar-expand-xl .dropup .dropdown-menu {\n    top: auto;\n    bottom: 100%;\n  }\n}\n.navbar-expand {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -ms-flex-flow: row nowrap;\n  flex-flow: row nowrap;\n  -webkit-box-pack: start;\n  -ms-flex-pack: start;\n  justify-content: flex-start;\n}\n.navbar-expand > .container,\n.navbar-expand > .container-fluid {\n  padding-right: 0;\n  padding-left: 0;\n}\n.navbar-expand .navbar-nav {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: row;\n  flex-direction: row;\n}\n.navbar-expand .navbar-nav .dropdown-menu {\n  position: absolute;\n}\n.navbar-expand .navbar-nav .dropdown-menu-right {\n  right: 0;\n  left: auto;\n}\n.navbar-expand .navbar-nav .nav-link {\n  padding-right: .5rem;\n  padding-left: .5rem;\n}\n.navbar-expand > .container,\n.navbar-expand > .container-fluid {\n  -ms-flex-wrap: nowrap;\n  flex-wrap: nowrap;\n}\n.navbar-expand .navbar-collapse {\n  display: -webkit-box !important;\n  display: -ms-flexbox !important;\n  display: flex !important;\n  -ms-flex-preferred-size: auto;\n  flex-basis: auto;\n}\n.navbar-expand .navbar-toggler {\n  display: none;\n}\n.navbar-expand .dropup .dropdown-menu {\n  top: auto;\n  bottom: 100%;\n}\n.navbar-light .navbar-brand {\n  color: rgba(0, 0, 0, 0.9);\n}\n.navbar-light .navbar-brand:focus, .navbar-light .navbar-brand:hover {\n  color: rgba(0, 0, 0, 0.9);\n}\n.navbar-light .navbar-nav .nav-link {\n  color: rgba(0, 0, 0, 0.5);\n}\n.navbar-light .navbar-nav .nav-link:focus, .navbar-light .navbar-nav .nav-link:hover {\n  color: rgba(0, 0, 0, 0.7);\n}\n.navbar-light .navbar-nav .nav-link.disabled {\n  color: rgba(0, 0, 0, 0.3);\n}\n.navbar-light .navbar-nav .show > .nav-link,\n.navbar-light .navbar-nav .active > .nav-link,\n.navbar-light .navbar-nav .nav-link.show,\n.navbar-light .navbar-nav .nav-link.active {\n  color: rgba(0, 0, 0, 0.9);\n}\n.navbar-light .navbar-toggler {\n  color: rgba(0, 0, 0, 0.5);\n  border-color: rgba(0, 0, 0, 0.1);\n}\n.navbar-light .navbar-toggler-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0, 0, 0, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\");\n}\n.navbar-light .navbar-text {\n  color: rgba(0, 0, 0, 0.5);\n}\n.navbar-light .navbar-text a {\n  color: rgba(0, 0, 0, 0.9);\n}\n.navbar-light .navbar-text a:focus, .navbar-light .navbar-text a:hover {\n  color: rgba(0, 0, 0, 0.9);\n}\n.navbar-dark .navbar-brand {\n  color: #fff;\n}\n.navbar-dark .navbar-brand:focus, .navbar-dark .navbar-brand:hover {\n  color: #fff;\n}\n.navbar-dark .navbar-nav .nav-link {\n  color: rgba(255, 255, 255, 0.5);\n}\n.navbar-dark .navbar-nav .nav-link:focus, .navbar-dark .navbar-nav .nav-link:hover {\n  color: rgba(255, 255, 255, 0.75);\n}\n.navbar-dark .navbar-nav .nav-link.disabled {\n  color: rgba(255, 255, 255, 0.25);\n}\n.navbar-dark .navbar-nav .show > .nav-link,\n.navbar-dark .navbar-nav .active > .nav-link,\n.navbar-dark .navbar-nav .nav-link.show,\n.navbar-dark .navbar-nav .nav-link.active {\n  color: #fff;\n}\n.navbar-dark .navbar-toggler {\n  color: rgba(255, 255, 255, 0.5);\n  border-color: rgba(255, 255, 255, 0.1);\n}\n.navbar-dark .navbar-toggler-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\");\n}\n.navbar-dark .navbar-text {\n  color: rgba(255, 255, 255, 0.5);\n}\n.navbar-dark .navbar-text a {\n  color: #fff;\n}\n.navbar-dark .navbar-text a:focus, .navbar-dark .navbar-text a:hover {\n  color: #fff;\n}\n.card {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  min-width: 0;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: border-box;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: 0.25rem;\n}\n.card > hr {\n  margin-right: 0;\n  margin-left: 0;\n}\n.card > .list-group:first-child .list-group-item:first-child {\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem;\n}\n.card > .list-group:last-child .list-group-item:last-child {\n  border-bottom-right-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem;\n}\n.card-body {\n  -webkit-box-flex: 1;\n  -ms-flex: 1 1 auto;\n  flex: 1 1 auto;\n  padding: 1.25rem;\n}\n.card-title {\n  margin-bottom: 0.75rem;\n}\n.card-subtitle {\n  margin-top: -0.375rem;\n  margin-bottom: 0;\n}\n.card-text:last-child {\n  margin-bottom: 0;\n}\n.card-link:hover {\n  text-decoration: none;\n}\n.card-link + .card-link {\n  margin-left: 1.25rem;\n}\n.card-header {\n  padding: 0.75rem 1.25rem;\n  margin-bottom: 0;\n  background-color: rgba(0, 0, 0, 0.03);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.125);\n}\n.card-header:first-child {\n  border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;\n}\n.card-header + .list-group .list-group-item:first-child {\n  border-top: 0;\n}\n.card-footer {\n  padding: 0.75rem 1.25rem;\n  background-color: rgba(0, 0, 0, 0.03);\n  border-top: 1px solid rgba(0, 0, 0, 0.125);\n}\n.card-footer:last-child {\n  border-radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px);\n}\n.card-header-tabs {\n  margin-right: -0.625rem;\n  margin-bottom: -0.75rem;\n  margin-left: -0.625rem;\n  border-bottom: 0;\n}\n.card-header-pills {\n  margin-right: -0.625rem;\n  margin-left: -0.625rem;\n}\n.card-img-overlay {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: 1.25rem;\n}\n.card-img {\n  width: 100%;\n  border-radius: calc(0.25rem - 1px);\n}\n.card-img-top {\n  width: 100%;\n  border-top-left-radius: calc(0.25rem - 1px);\n  border-top-right-radius: calc(0.25rem - 1px);\n}\n.card-img-bottom {\n  width: 100%;\n  border-bottom-right-radius: calc(0.25rem - 1px);\n  border-bottom-left-radius: calc(0.25rem - 1px);\n}\n.card-deck {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n}\n.card-deck .card {\n  margin-bottom: 15px;\n}\n@media (min-width: 576px) {\n  .card-deck {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -ms-flex-flow: row wrap;\n    flex-flow: row wrap;\n    margin-right: -15px;\n    margin-left: -15px;\n  }\n  .card-deck .card {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-flex: 1;\n    -ms-flex: 1 0 0%;\n    flex: 1 0 0%;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: column;\n    flex-direction: column;\n    margin-right: 15px;\n    margin-bottom: 0;\n    margin-left: 15px;\n  }\n}\n.card-group {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n}\n.card-group > .card {\n  margin-bottom: 15px;\n}\n@media (min-width: 576px) {\n  .card-group {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -ms-flex-flow: row wrap;\n    flex-flow: row wrap;\n  }\n  .card-group > .card {\n    -webkit-box-flex: 1;\n    -ms-flex: 1 0 0%;\n    flex: 1 0 0%;\n    margin-bottom: 0;\n  }\n  .card-group > .card + .card {\n    margin-left: 0;\n    border-left: 0;\n  }\n  .card-group > .card:first-child {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n  }\n  .card-group > .card:first-child .card-img-top,\n  .card-group > .card:first-child .card-header {\n    border-top-right-radius: 0;\n  }\n  .card-group > .card:first-child .card-img-bottom,\n  .card-group > .card:first-child .card-footer {\n    border-bottom-right-radius: 0;\n  }\n  .card-group > .card:last-child {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n  }\n  .card-group > .card:last-child .card-img-top,\n  .card-group > .card:last-child .card-header {\n    border-top-left-radius: 0;\n  }\n  .card-group > .card:last-child .card-img-bottom,\n  .card-group > .card:last-child .card-footer {\n    border-bottom-left-radius: 0;\n  }\n  .card-group > .card:only-child {\n    border-radius: 0.25rem;\n  }\n  .card-group > .card:only-child .card-img-top,\n  .card-group > .card:only-child .card-header {\n    border-top-left-radius: 0.25rem;\n    border-top-right-radius: 0.25rem;\n  }\n  .card-group > .card:only-child .card-img-bottom,\n  .card-group > .card:only-child .card-footer {\n    border-bottom-right-radius: 0.25rem;\n    border-bottom-left-radius: 0.25rem;\n  }\n  .card-group > .card:not(:first-child):not(:last-child):not(:only-child) {\n    border-radius: 0;\n  }\n  .card-group > .card:not(:first-child):not(:last-child):not(:only-child) .card-img-top,\n  .card-group > .card:not(:first-child):not(:last-child):not(:only-child) .card-img-bottom,\n  .card-group > .card:not(:first-child):not(:last-child):not(:only-child) .card-header,\n  .card-group > .card:not(:first-child):not(:last-child):not(:only-child) .card-footer {\n    border-radius: 0;\n  }\n}\n.card-columns .card {\n  margin-bottom: 0.75rem;\n}\n@media (min-width: 576px) {\n  .card-columns {\n    -webkit-column-count: 3;\n    column-count: 3;\n    -webkit-column-gap: 1.25rem;\n    column-gap: 1.25rem;\n  }\n  .card-columns .card {\n    display: inline-block;\n    width: 100%;\n  }\n}\n.breadcrumb {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  padding: 0.75rem 1rem;\n  margin-bottom: 1rem;\n  list-style: none;\n  background-color: #e9ecef;\n  border-radius: 0.25rem;\n}\n.breadcrumb-item + .breadcrumb-item::before {\n  display: inline-block;\n  padding-right: 0.5rem;\n  padding-left: 0.5rem;\n  color: #868e96;\n  content: \"/\";\n}\n.breadcrumb-item + .breadcrumb-item:hover::before {\n  text-decoration: underline;\n}\n.breadcrumb-item + .breadcrumb-item:hover::before {\n  text-decoration: none;\n}\n.breadcrumb-item.active {\n  color: #868e96;\n}\n.pagination {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding-left: 0;\n  list-style: none;\n  border-radius: 0.25rem;\n}\n.page-link {\n  position: relative;\n  display: block;\n  padding: 0.5rem 0.75rem;\n  margin-left: -1px;\n  line-height: 1.25;\n  color: #007bff;\n  background-color: #fff;\n  border: 1px solid #dee2e6;\n}\n.page-link:focus, .page-link:hover {\n  color: #0056b3;\n  text-decoration: none;\n  background-color: #e9ecef;\n  border-color: #dee2e6;\n}\n.page-link:not([disabled]):not(.disabled) {\n  cursor: pointer;\n}\n.page-item:first-child .page-link {\n  margin-left: 0;\n  border-top-left-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem;\n}\n.page-item:last-child .page-link {\n  border-top-right-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem;\n}\n.page-item.active .page-link {\n  z-index: 1;\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff;\n}\n.page-item.disabled .page-link {\n  color: #868e96;\n  pointer-events: none;\n  cursor: auto;\n  background-color: #fff;\n  border-color: #dee2e6;\n}\n.pagination-lg .page-link {\n  padding: 0.75rem 1.5rem;\n  font-size: 1.25rem;\n  line-height: 1.5;\n}\n.pagination-lg .page-item:first-child .page-link {\n  border-top-left-radius: 0.3rem;\n  border-bottom-left-radius: 0.3rem;\n}\n.pagination-lg .page-item:last-child .page-link {\n  border-top-right-radius: 0.3rem;\n  border-bottom-right-radius: 0.3rem;\n}\n.pagination-sm .page-link {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n}\n.pagination-sm .page-item:first-child .page-link {\n  border-top-left-radius: 0.2rem;\n  border-bottom-left-radius: 0.2rem;\n}\n.pagination-sm .page-item:last-child .page-link {\n  border-top-right-radius: 0.2rem;\n  border-bottom-right-radius: 0.2rem;\n}\n.badge {\n  display: inline-block;\n  padding: 0.25em 0.4em;\n  font-size: 75%;\n  font-weight: 700;\n  line-height: 1;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: 0.25rem;\n}\n.badge:empty {\n  display: none;\n}\n.btn .badge {\n  position: relative;\n  top: -1px;\n}\n.badge-pill {\n  padding-right: 0.6em;\n  padding-left: 0.6em;\n  border-radius: 10rem;\n}\n.badge-primary {\n  color: #fff;\n  background-color: #007bff;\n}\n.badge-primary[href]:focus, .badge-primary[href]:hover {\n  color: #fff;\n  text-decoration: none;\n  background-color: #0062cc;\n}\n.badge-secondary {\n  color: #fff;\n  background-color: #868e96;\n}\n.badge-secondary[href]:focus, .badge-secondary[href]:hover {\n  color: #fff;\n  text-decoration: none;\n  background-color: #6c757d;\n}\n.badge-success {\n  color: #fff;\n  background-color: #28a745;\n}\n.badge-success[href]:focus, .badge-success[href]:hover {\n  color: #fff;\n  text-decoration: none;\n  background-color: #1e7e34;\n}\n.badge-info {\n  color: #fff;\n  background-color: #17a2b8;\n}\n.badge-info[href]:focus, .badge-info[href]:hover {\n  color: #fff;\n  text-decoration: none;\n  background-color: #117a8b;\n}\n.badge-warning {\n  color: #212529;\n  background-color: #ffc107;\n}\n.badge-warning[href]:focus, .badge-warning[href]:hover {\n  color: #212529;\n  text-decoration: none;\n  background-color: #d39e00;\n}\n.badge-danger {\n  color: #fff;\n  background-color: #dc3545;\n}\n.badge-danger[href]:focus, .badge-danger[href]:hover {\n  color: #fff;\n  text-decoration: none;\n  background-color: #bd2130;\n}\n.badge-light {\n  color: #212529;\n  background-color: #f8f9fa;\n}\n.badge-light[href]:focus, .badge-light[href]:hover {\n  color: #212529;\n  text-decoration: none;\n  background-color: #dae0e5;\n}\n.badge-dark {\n  color: #fff;\n  background-color: #343a40;\n}\n.badge-dark[href]:focus, .badge-dark[href]:hover {\n  color: #fff;\n  text-decoration: none;\n  background-color: #1d2124;\n}\n.jumbotron {\n  padding: 2rem 1rem;\n  margin-bottom: 2rem;\n  background-color: #e9ecef;\n  border-radius: 0.3rem;\n}\n@media (min-width: 576px) {\n  .jumbotron {\n    padding: 4rem 2rem;\n  }\n}\n.jumbotron-fluid {\n  padding-right: 0;\n  padding-left: 0;\n  border-radius: 0;\n}\n.alert {\n  position: relative;\n  padding: 0.75rem 1.25rem;\n  margin-bottom: 1rem;\n  border: 1px solid transparent;\n  border-radius: 0.25rem;\n}\n.alert-heading {\n  color: inherit;\n}\n.alert-link {\n  font-weight: 700;\n}\n.alert-dismissible {\n  padding-right: 4rem;\n}\n.alert-dismissible .close {\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: 0.75rem 1.25rem;\n  color: inherit;\n}\n.alert-primary {\n  color: #004085;\n  background-color: #cce5ff;\n  border-color: #b8daff;\n}\n.alert-primary hr {\n  border-top-color: #9fcdff;\n}\n.alert-primary .alert-link {\n  color: #002752;\n}\n.alert-secondary {\n  color: #464a4e;\n  background-color: #e7e8ea;\n  border-color: #dddfe2;\n}\n.alert-secondary hr {\n  border-top-color: #cfd2d6;\n}\n.alert-secondary .alert-link {\n  color: #2e3133;\n}\n.alert-success {\n  color: #155724;\n  background-color: #d4edda;\n  border-color: #c3e6cb;\n}\n.alert-success hr {\n  border-top-color: #b1dfbb;\n}\n.alert-success .alert-link {\n  color: #0b2e13;\n}\n.alert-info {\n  color: #0c5460;\n  background-color: #d1ecf1;\n  border-color: #bee5eb;\n}\n.alert-info hr {\n  border-top-color: #abdde5;\n}\n.alert-info .alert-link {\n  color: #062c33;\n}\n.alert-warning {\n  color: #856404;\n  background-color: #fff3cd;\n  border-color: #ffeeba;\n}\n.alert-warning hr {\n  border-top-color: #ffe8a1;\n}\n.alert-warning .alert-link {\n  color: #533f03;\n}\n.alert-danger {\n  color: #721c24;\n  background-color: #f8d7da;\n  border-color: #f5c6cb;\n}\n.alert-danger hr {\n  border-top-color: #f1b0b7;\n}\n.alert-danger .alert-link {\n  color: #491217;\n}\n.alert-light {\n  color: #818182;\n  background-color: #fefefe;\n  border-color: #fdfdfe;\n}\n.alert-light hr {\n  border-top-color: #ececf6;\n}\n.alert-light .alert-link {\n  color: #686868;\n}\n.alert-dark {\n  color: #1b1e21;\n  background-color: #d6d8d9;\n  border-color: #c6c8ca;\n}\n.alert-dark hr {\n  border-top-color: #b9bbbe;\n}\n.alert-dark .alert-link {\n  color: #040505;\n}\n@-webkit-keyframes progress-bar-stripes {\n  from {\n    background-position: 1rem 0;\n  }\n  to {\n    background-position: 0 0;\n  }\n}\n@keyframes progress-bar-stripes {\n  from {\n    background-position: 1rem 0;\n  }\n  to {\n    background-position: 0 0;\n  }\n}\n.progress {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 1rem;\n  overflow: hidden;\n  font-size: 0.75rem;\n  background-color: #e9ecef;\n  border-radius: 0.25rem;\n}\n.progress-bar {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  color: #fff;\n  text-align: center;\n  background-color: #007bff;\n  -webkit-transition: width 0.6s ease;\n  transition: width 0.6s ease;\n}\n.progress-bar-striped {\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-size: 1rem 1rem;\n}\n.progress-bar-animated {\n  -webkit-animation: progress-bar-stripes 1s linear infinite;\n  animation: progress-bar-stripes 1s linear infinite;\n}\n.media {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: start;\n  -ms-flex-align: start;\n  align-items: flex-start;\n}\n.media-body {\n  -webkit-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n}\n.list-group {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  padding-left: 0;\n  margin-bottom: 0;\n}\n.list-group-item-action {\n  width: 100%;\n  color: #495057;\n  text-align: inherit;\n}\n.list-group-item-action:focus, .list-group-item-action:hover {\n  color: #495057;\n  text-decoration: none;\n  background-color: #f8f9fa;\n}\n.list-group-item-action:active {\n  color: #212529;\n  background-color: #e9ecef;\n}\n.list-group-item {\n  position: relative;\n  display: block;\n  padding: 0.75rem 1.25rem;\n  margin-bottom: -1px;\n  background-color: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n}\n.list-group-item:first-child {\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem;\n}\n.list-group-item:last-child {\n  margin-bottom: 0;\n  border-bottom-right-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem;\n}\n.list-group-item:focus, .list-group-item:hover {\n  z-index: 1;\n  text-decoration: none;\n}\n.list-group-item.disabled, .list-group-item:disabled {\n  color: #868e96;\n  background-color: #fff;\n}\n.list-group-item.active {\n  z-index: 2;\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff;\n}\n.list-group-flush .list-group-item {\n  border-right: 0;\n  border-left: 0;\n  border-radius: 0;\n}\n.list-group-flush:first-child .list-group-item:first-child {\n  border-top: 0;\n}\n.list-group-flush:last-child .list-group-item:last-child {\n  border-bottom: 0;\n}\n.list-group-item-primary {\n  color: #004085;\n  background-color: #b8daff;\n}\na.list-group-item-primary,\nbutton.list-group-item-primary {\n  color: #004085;\n}\na.list-group-item-primary:focus, a.list-group-item-primary:hover,\nbutton.list-group-item-primary:focus,\nbutton.list-group-item-primary:hover {\n  color: #004085;\n  background-color: #9fcdff;\n}\na.list-group-item-primary.active,\nbutton.list-group-item-primary.active {\n  color: #fff;\n  background-color: #004085;\n  border-color: #004085;\n}\n.list-group-item-secondary {\n  color: #464a4e;\n  background-color: #dddfe2;\n}\na.list-group-item-secondary,\nbutton.list-group-item-secondary {\n  color: #464a4e;\n}\na.list-group-item-secondary:focus, a.list-group-item-secondary:hover,\nbutton.list-group-item-secondary:focus,\nbutton.list-group-item-secondary:hover {\n  color: #464a4e;\n  background-color: #cfd2d6;\n}\na.list-group-item-secondary.active,\nbutton.list-group-item-secondary.active {\n  color: #fff;\n  background-color: #464a4e;\n  border-color: #464a4e;\n}\n.list-group-item-success {\n  color: #155724;\n  background-color: #c3e6cb;\n}\na.list-group-item-success,\nbutton.list-group-item-success {\n  color: #155724;\n}\na.list-group-item-success:focus, a.list-group-item-success:hover,\nbutton.list-group-item-success:focus,\nbutton.list-group-item-success:hover {\n  color: #155724;\n  background-color: #b1dfbb;\n}\na.list-group-item-success.active,\nbutton.list-group-item-success.active {\n  color: #fff;\n  background-color: #155724;\n  border-color: #155724;\n}\n.list-group-item-info {\n  color: #0c5460;\n  background-color: #bee5eb;\n}\na.list-group-item-info,\nbutton.list-group-item-info {\n  color: #0c5460;\n}\na.list-group-item-info:focus, a.list-group-item-info:hover,\nbutton.list-group-item-info:focus,\nbutton.list-group-item-info:hover {\n  color: #0c5460;\n  background-color: #abdde5;\n}\na.list-group-item-info.active,\nbutton.list-group-item-info.active {\n  color: #fff;\n  background-color: #0c5460;\n  border-color: #0c5460;\n}\n.list-group-item-warning {\n  color: #856404;\n  background-color: #ffeeba;\n}\na.list-group-item-warning,\nbutton.list-group-item-warning {\n  color: #856404;\n}\na.list-group-item-warning:focus, a.list-group-item-warning:hover,\nbutton.list-group-item-warning:focus,\nbutton.list-group-item-warning:hover {\n  color: #856404;\n  background-color: #ffe8a1;\n}\na.list-group-item-warning.active,\nbutton.list-group-item-warning.active {\n  color: #fff;\n  background-color: #856404;\n  border-color: #856404;\n}\n.list-group-item-danger {\n  color: #721c24;\n  background-color: #f5c6cb;\n}\na.list-group-item-danger,\nbutton.list-group-item-danger {\n  color: #721c24;\n}\na.list-group-item-danger:focus, a.list-group-item-danger:hover,\nbutton.list-group-item-danger:focus,\nbutton.list-group-item-danger:hover {\n  color: #721c24;\n  background-color: #f1b0b7;\n}\na.list-group-item-danger.active,\nbutton.list-group-item-danger.active {\n  color: #fff;\n  background-color: #721c24;\n  border-color: #721c24;\n}\n.list-group-item-light {\n  color: #818182;\n  background-color: #fdfdfe;\n}\na.list-group-item-light,\nbutton.list-group-item-light {\n  color: #818182;\n}\na.list-group-item-light:focus, a.list-group-item-light:hover,\nbutton.list-group-item-light:focus,\nbutton.list-group-item-light:hover {\n  color: #818182;\n  background-color: #ececf6;\n}\na.list-group-item-light.active,\nbutton.list-group-item-light.active {\n  color: #fff;\n  background-color: #818182;\n  border-color: #818182;\n}\n.list-group-item-dark {\n  color: #1b1e21;\n  background-color: #c6c8ca;\n}\na.list-group-item-dark,\nbutton.list-group-item-dark {\n  color: #1b1e21;\n}\na.list-group-item-dark:focus, a.list-group-item-dark:hover,\nbutton.list-group-item-dark:focus,\nbutton.list-group-item-dark:hover {\n  color: #1b1e21;\n  background-color: #b9bbbe;\n}\na.list-group-item-dark.active,\nbutton.list-group-item-dark.active {\n  color: #fff;\n  background-color: #1b1e21;\n  border-color: #1b1e21;\n}\n.close {\n  float: right;\n  font-size: 1.5rem;\n  font-weight: 700;\n  line-height: 1;\n  color: #000;\n  text-shadow: 0 1px 0 #fff;\n  opacity: .5;\n}\n.close:focus, .close:hover {\n  color: #000;\n  text-decoration: none;\n  opacity: .75;\n}\n.close:not([disabled]):not(.disabled) {\n  cursor: pointer;\n}\nbutton.close {\n  padding: 0;\n  background-color: transparent;\n  border: 0;\n  -webkit-appearance: none;\n}\n.modal-open {\n  overflow: hidden;\n}\n.modal {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  display: none;\n  overflow: hidden;\n  outline: 0;\n}\n.modal-open .modal {\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.modal-dialog {\n  position: relative;\n  width: auto;\n  margin: 0.5rem;\n  pointer-events: none;\n}\n.modal.fade .modal-dialog {\n  transition: -webkit-transform 0.3s ease-out;\n  -webkit-transition: -webkit-transform 0.3s ease-out;\n  transition: transform 0.3s ease-out;\n  transition: transform 0.3s ease-out, -webkit-transform 0.3s ease-out;\n  -webkit-transform: translate(0, -25%);\n  transform: translate(0, -25%);\n}\n.modal.show .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0);\n}\n.modal-dialog-centered {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  min-height: calc(100% - (0.5rem * 2));\n}\n.modal-content {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  width: 100%;\n  pointer-events: auto;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 0.3rem;\n  outline: 0;\n}\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1040;\n  background-color: #000;\n}\n.modal-backdrop.fade {\n  opacity: 0;\n}\n.modal-backdrop.show {\n  opacity: 0.5;\n}\n.modal-header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: start;\n  -ms-flex-align: start;\n  align-items: flex-start;\n  -webkit-box-pack: justify;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  padding: 1rem;\n  border-bottom: 1px solid #e9ecef;\n  border-top-left-radius: 0.3rem;\n  border-top-right-radius: 0.3rem;\n}\n.modal-header .close {\n  padding: 1rem;\n  margin: -1rem -1rem -1rem auto;\n}\n.modal-title {\n  margin-bottom: 0;\n  line-height: 1.5;\n}\n.modal-body {\n  position: relative;\n  -webkit-box-flex: 1;\n  -ms-flex: 1 1 auto;\n  flex: 1 1 auto;\n  padding: 1rem;\n}\n.modal-footer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: end;\n  -ms-flex-pack: end;\n  justify-content: flex-end;\n  padding: 1rem;\n  border-top: 1px solid #e9ecef;\n}\n.modal-footer > :not(:first-child) {\n  margin-left: .25rem;\n}\n.modal-footer > :not(:last-child) {\n  margin-right: .25rem;\n}\n.modal-scrollbar-measure {\n  position: absolute;\n  top: -9999px;\n  width: 50px;\n  height: 50px;\n  overflow: scroll;\n}\n@media (min-width: 576px) {\n  .modal-dialog {\n    max-width: 500px;\n    margin: 1.75rem auto;\n  }\n  .modal-dialog-centered {\n    min-height: calc(100% - (1.75rem * 2));\n  }\n  .modal-sm {\n    max-width: 300px;\n  }\n}\n@media (min-width: 992px) {\n  .modal-lg {\n    max-width: 800px;\n  }\n}\n.tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.5;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  word-spacing: normal;\n  white-space: normal;\n  line-break: auto;\n  font-size: 0.875rem;\n  word-wrap: break-word;\n  opacity: 0;\n}\n.tooltip.show {\n  opacity: 0.9;\n}\n.tooltip .arrow {\n  position: absolute;\n  display: block;\n  width: 0.8rem;\n  height: 0.4rem;\n}\n.tooltip .arrow::before {\n  position: absolute;\n  content: \"\";\n  border-color: transparent;\n  border-style: solid;\n}\n.bs-tooltip-top, .bs-tooltip-auto[x-placement^=\"top\"] {\n  padding: 0.4rem 0;\n}\n.bs-tooltip-top .arrow, .bs-tooltip-auto[x-placement^=\"top\"] .arrow {\n  bottom: 0;\n}\n.bs-tooltip-top .arrow::before, .bs-tooltip-auto[x-placement^=\"top\"] .arrow::before {\n  top: 0;\n  border-width: 0.4rem 0.4rem 0;\n  border-top-color: #000;\n}\n.bs-tooltip-right, .bs-tooltip-auto[x-placement^=\"right\"] {\n  padding: 0 0.4rem;\n}\n.bs-tooltip-right .arrow, .bs-tooltip-auto[x-placement^=\"right\"] .arrow {\n  left: 0;\n  width: 0.4rem;\n  height: 0.8rem;\n}\n.bs-tooltip-right .arrow::before, .bs-tooltip-auto[x-placement^=\"right\"] .arrow::before {\n  right: 0;\n  border-width: 0.4rem 0.4rem 0.4rem 0;\n  border-right-color: #000;\n}\n.bs-tooltip-bottom, .bs-tooltip-auto[x-placement^=\"bottom\"] {\n  padding: 0.4rem 0;\n}\n.bs-tooltip-bottom .arrow, .bs-tooltip-auto[x-placement^=\"bottom\"] .arrow {\n  top: 0;\n}\n.bs-tooltip-bottom .arrow::before, .bs-tooltip-auto[x-placement^=\"bottom\"] .arrow::before {\n  bottom: 0;\n  border-width: 0 0.4rem 0.4rem;\n  border-bottom-color: #000;\n}\n.bs-tooltip-left, .bs-tooltip-auto[x-placement^=\"left\"] {\n  padding: 0 0.4rem;\n}\n.bs-tooltip-left .arrow, .bs-tooltip-auto[x-placement^=\"left\"] .arrow {\n  right: 0;\n  width: 0.4rem;\n  height: 0.8rem;\n}\n.bs-tooltip-left .arrow::before, .bs-tooltip-auto[x-placement^=\"left\"] .arrow::before {\n  left: 0;\n  border-width: 0.4rem 0 0.4rem 0.4rem;\n  border-left-color: #000;\n}\n.tooltip-inner {\n  max-width: 200px;\n  padding: 0.25rem 0.5rem;\n  color: #fff;\n  text-align: center;\n  background-color: #000;\n  border-radius: 0.25rem;\n}\n.popover {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1060;\n  display: block;\n  max-width: 276px;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.5;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  word-spacing: normal;\n  white-space: normal;\n  line-break: auto;\n  font-size: 0.875rem;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 0.3rem;\n}\n.popover .arrow {\n  position: absolute;\n  display: block;\n  width: 1rem;\n  height: 0.5rem;\n  margin: 0 0.3rem;\n}\n.popover .arrow::before, .popover .arrow::after {\n  position: absolute;\n  display: block;\n  content: \"\";\n  border-color: transparent;\n  border-style: solid;\n}\n.bs-popover-top, .bs-popover-auto[x-placement^=\"top\"] {\n  margin-bottom: 0.5rem;\n}\n.bs-popover-top .arrow, .bs-popover-auto[x-placement^=\"top\"] .arrow {\n  bottom: calc((0.5rem + 1px) * -1);\n}\n.bs-popover-top .arrow::before, .bs-popover-auto[x-placement^=\"top\"] .arrow::before,\n.bs-popover-top .arrow::after, .bs-popover-auto[x-placement^=\"top\"] .arrow::after {\n  border-width: 0.5rem 0.5rem 0;\n}\n.bs-popover-top .arrow::before, .bs-popover-auto[x-placement^=\"top\"] .arrow::before {\n  bottom: 0;\n  border-top-color: rgba(0, 0, 0, 0.25);\n}\n.bs-popover-top .arrow::after, .bs-popover-auto[x-placement^=\"top\"] .arrow::after {\n  bottom: 1px;\n  border-top-color: #fff;\n}\n.bs-popover-right, .bs-popover-auto[x-placement^=\"right\"] {\n  margin-left: 0.5rem;\n}\n.bs-popover-right .arrow, .bs-popover-auto[x-placement^=\"right\"] .arrow {\n  left: calc((0.5rem + 1px) * -1);\n  width: 0.5rem;\n  height: 1rem;\n  margin: 0.3rem 0;\n}\n.bs-popover-right .arrow::before, .bs-popover-auto[x-placement^=\"right\"] .arrow::before,\n.bs-popover-right .arrow::after, .bs-popover-auto[x-placement^=\"right\"] .arrow::after {\n  border-width: 0.5rem 0.5rem 0.5rem 0;\n}\n.bs-popover-right .arrow::before, .bs-popover-auto[x-placement^=\"right\"] .arrow::before {\n  left: 0;\n  border-right-color: rgba(0, 0, 0, 0.25);\n}\n.bs-popover-right .arrow::after, .bs-popover-auto[x-placement^=\"right\"] .arrow::after {\n  left: 1px;\n  border-right-color: #fff;\n}\n.bs-popover-bottom, .bs-popover-auto[x-placement^=\"bottom\"] {\n  margin-top: 0.5rem;\n}\n.bs-popover-bottom .arrow, .bs-popover-auto[x-placement^=\"bottom\"] .arrow {\n  top: calc((0.5rem + 1px) * -1);\n}\n.bs-popover-bottom .arrow::before, .bs-popover-auto[x-placement^=\"bottom\"] .arrow::before,\n.bs-popover-bottom .arrow::after, .bs-popover-auto[x-placement^=\"bottom\"] .arrow::after {\n  border-width: 0 0.5rem 0.5rem 0.5rem;\n}\n.bs-popover-bottom .arrow::before, .bs-popover-auto[x-placement^=\"bottom\"] .arrow::before {\n  top: 0;\n  border-bottom-color: rgba(0, 0, 0, 0.25);\n}\n.bs-popover-bottom .arrow::after, .bs-popover-auto[x-placement^=\"bottom\"] .arrow::after {\n  top: 1px;\n  border-bottom-color: #fff;\n}\n.bs-popover-bottom .popover-header::before, .bs-popover-auto[x-placement^=\"bottom\"] .popover-header::before {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  display: block;\n  width: 1rem;\n  margin-left: -0.5rem;\n  content: \"\";\n  border-bottom: 1px solid #f7f7f7;\n}\n.bs-popover-left, .bs-popover-auto[x-placement^=\"left\"] {\n  margin-right: 0.5rem;\n}\n.bs-popover-left .arrow, .bs-popover-auto[x-placement^=\"left\"] .arrow {\n  right: calc((0.5rem + 1px) * -1);\n  width: 0.5rem;\n  height: 1rem;\n  margin: 0.3rem 0;\n}\n.bs-popover-left .arrow::before, .bs-popover-auto[x-placement^=\"left\"] .arrow::before,\n.bs-popover-left .arrow::after, .bs-popover-auto[x-placement^=\"left\"] .arrow::after {\n  border-width: 0.5rem 0 0.5rem 0.5rem;\n}\n.bs-popover-left .arrow::before, .bs-popover-auto[x-placement^=\"left\"] .arrow::before {\n  right: 0;\n  border-left-color: rgba(0, 0, 0, 0.25);\n}\n.bs-popover-left .arrow::after, .bs-popover-auto[x-placement^=\"left\"] .arrow::after {\n  right: 1px;\n  border-left-color: #fff;\n}\n.popover-header {\n  padding: 0.5rem 0.75rem;\n  margin-bottom: 0;\n  font-size: 1rem;\n  color: inherit;\n  background-color: #f7f7f7;\n  border-bottom: 1px solid #ebebeb;\n  border-top-left-radius: calc(0.3rem - 1px);\n  border-top-right-radius: calc(0.3rem - 1px);\n}\n.popover-header:empty {\n  display: none;\n}\n.popover-body {\n  padding: 0.5rem 0.75rem;\n  color: #212529;\n}\n.carousel {\n  position: relative;\n}\n.carousel-inner {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n}\n.carousel-item {\n  position: relative;\n  display: none;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  width: 100%;\n  transition: -webkit-transform 0.6s ease;\n  -webkit-transition: -webkit-transform 0.6s ease;\n  transition: transform 0.6s ease;\n  transition: transform 0.6s ease, -webkit-transform 0.6s ease;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -webkit-perspective: 1000px;\n  perspective: 1000px;\n}\n.carousel-item.active,\n.carousel-item-next,\n.carousel-item-prev {\n  display: block;\n}\n.carousel-item-next,\n.carousel-item-prev {\n  position: absolute;\n  top: 0;\n}\n.carousel-item-next.carousel-item-left,\n.carousel-item-prev.carousel-item-right {\n  -webkit-transform: translateX(0);\n  transform: translateX(0);\n}\n@supports ((-webkit-transform-style: preserve-3d) or (transform-style: preserve-3d)) {\n  .carousel-item-next.carousel-item-left,\n  .carousel-item-prev.carousel-item-right {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n.carousel-item-next,\n.active.carousel-item-right {\n  -webkit-transform: translateX(100%);\n  transform: translateX(100%);\n}\n@supports ((-webkit-transform-style: preserve-3d) or (transform-style: preserve-3d)) {\n  .carousel-item-next,\n  .active.carousel-item-right {\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n  }\n}\n.carousel-item-prev,\n.active.carousel-item-left {\n  -webkit-transform: translateX(-100%);\n  transform: translateX(-100%);\n}\n@supports ((-webkit-transform-style: preserve-3d) or (transform-style: preserve-3d)) {\n  .carousel-item-prev,\n  .active.carousel-item-left {\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n}\n.carousel-control-prev,\n.carousel-control-next {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  width: 15%;\n  color: #fff;\n  text-align: center;\n  opacity: 0.5;\n}\n.carousel-control-prev:focus, .carousel-control-prev:hover,\n.carousel-control-next:focus,\n.carousel-control-next:hover {\n  color: #fff;\n  text-decoration: none;\n  outline: 0;\n  opacity: .9;\n}\n.carousel-control-prev {\n  left: 0;\n}\n.carousel-control-next {\n  right: 0;\n}\n.carousel-control-prev-icon,\n.carousel-control-next-icon {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  background: transparent no-repeat center center;\n  background-size: 100% 100%;\n}\n.carousel-control-prev-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E\");\n}\n.carousel-control-next-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E\");\n}\n.carousel-indicators {\n  position: absolute;\n  right: 0;\n  bottom: 10px;\n  left: 0;\n  z-index: 15;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  padding-left: 0;\n  margin-right: 15%;\n  margin-left: 15%;\n  list-style: none;\n}\n.carousel-indicators li {\n  position: relative;\n  -webkit-box-flex: 0;\n  -ms-flex: 0 1 auto;\n  flex: 0 1 auto;\n  width: 30px;\n  height: 3px;\n  margin-right: 3px;\n  margin-left: 3px;\n  text-indent: -999px;\n  background-color: rgba(255, 255, 255, 0.5);\n}\n.carousel-indicators li::before {\n  position: absolute;\n  top: -10px;\n  left: 0;\n  display: inline-block;\n  width: 100%;\n  height: 10px;\n  content: \"\";\n}\n.carousel-indicators li::after {\n  position: absolute;\n  bottom: -10px;\n  left: 0;\n  display: inline-block;\n  width: 100%;\n  height: 10px;\n  content: \"\";\n}\n.carousel-indicators .active {\n  background-color: #fff;\n}\n.carousel-caption {\n  position: absolute;\n  right: 15%;\n  bottom: 20px;\n  left: 15%;\n  z-index: 10;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  color: #fff;\n  text-align: center;\n}\n.align-baseline {\n  vertical-align: baseline !important;\n}\n.align-top {\n  vertical-align: top !important;\n}\n.align-middle {\n  vertical-align: middle !important;\n}\n.align-bottom {\n  vertical-align: bottom !important;\n}\n.align-text-bottom {\n  vertical-align: text-bottom !important;\n}\n.align-text-top {\n  vertical-align: text-top !important;\n}\n.bg-primary {\n  background-color: #007bff !important;\n}\na.bg-primary:focus, a.bg-primary:hover,\nbutton.bg-primary:focus,\nbutton.bg-primary:hover {\n  background-color: #0062cc !important;\n}\n.bg-secondary {\n  background-color: #868e96 !important;\n}\na.bg-secondary:focus, a.bg-secondary:hover,\nbutton.bg-secondary:focus,\nbutton.bg-secondary:hover {\n  background-color: #6c757d !important;\n}\n.bg-success {\n  background-color: #28a745 !important;\n}\na.bg-success:focus, a.bg-success:hover,\nbutton.bg-success:focus,\nbutton.bg-success:hover {\n  background-color: #1e7e34 !important;\n}\n.bg-info {\n  background-color: #17a2b8 !important;\n}\na.bg-info:focus, a.bg-info:hover,\nbutton.bg-info:focus,\nbutton.bg-info:hover {\n  background-color: #117a8b !important;\n}\n.bg-warning {\n  background-color: #ffc107 !important;\n}\na.bg-warning:focus, a.bg-warning:hover,\nbutton.bg-warning:focus,\nbutton.bg-warning:hover {\n  background-color: #d39e00 !important;\n}\n.bg-danger {\n  background-color: #dc3545 !important;\n}\na.bg-danger:focus, a.bg-danger:hover,\nbutton.bg-danger:focus,\nbutton.bg-danger:hover {\n  background-color: #bd2130 !important;\n}\n.bg-light {\n  background-color: #f8f9fa !important;\n}\na.bg-light:focus, a.bg-light:hover,\nbutton.bg-light:focus,\nbutton.bg-light:hover {\n  background-color: #dae0e5 !important;\n}\n.bg-dark {\n  background-color: #343a40 !important;\n}\na.bg-dark:focus, a.bg-dark:hover,\nbutton.bg-dark:focus,\nbutton.bg-dark:hover {\n  background-color: #1d2124 !important;\n}\n.bg-white {\n  background-color: #fff !important;\n}\n.bg-transparent {\n  background-color: transparent !important;\n}\n.border {\n  border: 1px solid #e9ecef !important;\n}\n.border-0 {\n  border: 0 !important;\n}\n.border-top-0 {\n  border-top: 0 !important;\n}\n.border-right-0 {\n  border-right: 0 !important;\n}\n.border-bottom-0 {\n  border-bottom: 0 !important;\n}\n.border-left-0 {\n  border-left: 0 !important;\n}\n.border-primary {\n  border-color: #007bff !important;\n}\n.border-secondary {\n  border-color: #868e96 !important;\n}\n.border-success {\n  border-color: #28a745 !important;\n}\n.border-info {\n  border-color: #17a2b8 !important;\n}\n.border-warning {\n  border-color: #ffc107 !important;\n}\n.border-danger {\n  border-color: #dc3545 !important;\n}\n.border-light {\n  border-color: #f8f9fa !important;\n}\n.border-dark {\n  border-color: #343a40 !important;\n}\n.border-white {\n  border-color: #fff !important;\n}\n.rounded {\n  border-radius: 0.25rem !important;\n}\n.rounded-top {\n  border-top-left-radius: 0.25rem !important;\n  border-top-right-radius: 0.25rem !important;\n}\n.rounded-right {\n  border-top-right-radius: 0.25rem !important;\n  border-bottom-right-radius: 0.25rem !important;\n}\n.rounded-bottom {\n  border-bottom-right-radius: 0.25rem !important;\n  border-bottom-left-radius: 0.25rem !important;\n}\n.rounded-left {\n  border-top-left-radius: 0.25rem !important;\n  border-bottom-left-radius: 0.25rem !important;\n}\n.rounded-circle {\n  border-radius: 50% !important;\n}\n.rounded-0 {\n  border-radius: 0 !important;\n}\n.clearfix::after {\n  display: block;\n  clear: both;\n  content: \"\";\n}\n.d-none {\n  display: none !important;\n}\n.d-inline {\n  display: inline !important;\n}\n.d-inline-block {\n  display: inline-block !important;\n}\n.d-block {\n  display: block !important;\n}\n.d-table {\n  display: table !important;\n}\n.d-table-row {\n  display: table-row !important;\n}\n.d-table-cell {\n  display: table-cell !important;\n}\n.d-flex {\n  display: -webkit-box !important;\n  display: -ms-flexbox !important;\n  display: flex !important;\n}\n.d-inline-flex {\n  display: -webkit-inline-box !important;\n  display: -ms-inline-flexbox !important;\n  display: inline-flex !important;\n}\n@media (min-width: 576px) {\n  .d-sm-none {\n    display: none !important;\n  }\n  .d-sm-inline {\n    display: inline !important;\n  }\n  .d-sm-inline-block {\n    display: inline-block !important;\n  }\n  .d-sm-block {\n    display: block !important;\n  }\n  .d-sm-table {\n    display: table !important;\n  }\n  .d-sm-table-row {\n    display: table-row !important;\n  }\n  .d-sm-table-cell {\n    display: table-cell !important;\n  }\n  .d-sm-flex {\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important;\n  }\n  .d-sm-inline-flex {\n    display: -webkit-inline-box !important;\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important;\n  }\n}\n@media (min-width: 768px) {\n  .d-md-none {\n    display: none !important;\n  }\n  .d-md-inline {\n    display: inline !important;\n  }\n  .d-md-inline-block {\n    display: inline-block !important;\n  }\n  .d-md-block {\n    display: block !important;\n  }\n  .d-md-table {\n    display: table !important;\n  }\n  .d-md-table-row {\n    display: table-row !important;\n  }\n  .d-md-table-cell {\n    display: table-cell !important;\n  }\n  .d-md-flex {\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important;\n  }\n  .d-md-inline-flex {\n    display: -webkit-inline-box !important;\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important;\n  }\n}\n@media (min-width: 992px) {\n  .d-lg-none {\n    display: none !important;\n  }\n  .d-lg-inline {\n    display: inline !important;\n  }\n  .d-lg-inline-block {\n    display: inline-block !important;\n  }\n  .d-lg-block {\n    display: block !important;\n  }\n  .d-lg-table {\n    display: table !important;\n  }\n  .d-lg-table-row {\n    display: table-row !important;\n  }\n  .d-lg-table-cell {\n    display: table-cell !important;\n  }\n  .d-lg-flex {\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important;\n  }\n  .d-lg-inline-flex {\n    display: -webkit-inline-box !important;\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important;\n  }\n}\n@media (min-width: 1200px) {\n  .d-xl-none {\n    display: none !important;\n  }\n  .d-xl-inline {\n    display: inline !important;\n  }\n  .d-xl-inline-block {\n    display: inline-block !important;\n  }\n  .d-xl-block {\n    display: block !important;\n  }\n  .d-xl-table {\n    display: table !important;\n  }\n  .d-xl-table-row {\n    display: table-row !important;\n  }\n  .d-xl-table-cell {\n    display: table-cell !important;\n  }\n  .d-xl-flex {\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important;\n  }\n  .d-xl-inline-flex {\n    display: -webkit-inline-box !important;\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important;\n  }\n}\n.d-print-block {\n  display: none !important;\n}\n@media print {\n  .d-print-block {\n    display: block !important;\n  }\n}\n.d-print-inline {\n  display: none !important;\n}\n@media print {\n  .d-print-inline {\n    display: inline !important;\n  }\n}\n.d-print-inline-block {\n  display: none !important;\n}\n@media print {\n  .d-print-inline-block {\n    display: inline-block !important;\n  }\n}\n@media print {\n  .d-print-none {\n    display: none !important;\n  }\n}\n.embed-responsive {\n  position: relative;\n  display: block;\n  width: 100%;\n  padding: 0;\n  overflow: hidden;\n}\n.embed-responsive::before {\n  display: block;\n  content: \"\";\n}\n.embed-responsive .embed-responsive-item,\n.embed-responsive iframe,\n.embed-responsive embed,\n.embed-responsive object,\n.embed-responsive video {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border: 0;\n}\n.embed-responsive-21by9::before {\n  padding-top: 42.857143%;\n}\n.embed-responsive-16by9::before {\n  padding-top: 56.25%;\n}\n.embed-responsive-4by3::before {\n  padding-top: 75%;\n}\n.embed-responsive-1by1::before {\n  padding-top: 100%;\n}\n.flex-row {\n  -webkit-box-orient: horizontal !important;\n  -webkit-box-direction: normal !important;\n  -ms-flex-direction: row !important;\n  flex-direction: row !important;\n}\n.flex-column {\n  -webkit-box-orient: vertical !important;\n  -webkit-box-direction: normal !important;\n  -ms-flex-direction: column !important;\n  flex-direction: column !important;\n}\n.flex-row-reverse {\n  -webkit-box-orient: horizontal !important;\n  -webkit-box-direction: reverse !important;\n  -ms-flex-direction: row-reverse !important;\n  flex-direction: row-reverse !important;\n}\n.flex-column-reverse {\n  -webkit-box-orient: vertical !important;\n  -webkit-box-direction: reverse !important;\n  -ms-flex-direction: column-reverse !important;\n  flex-direction: column-reverse !important;\n}\n.flex-wrap {\n  -ms-flex-wrap: wrap !important;\n  flex-wrap: wrap !important;\n}\n.flex-nowrap {\n  -ms-flex-wrap: nowrap !important;\n  flex-wrap: nowrap !important;\n}\n.flex-wrap-reverse {\n  -ms-flex-wrap: wrap-reverse !important;\n  flex-wrap: wrap-reverse !important;\n}\n.justify-content-start {\n  -webkit-box-pack: start !important;\n  -ms-flex-pack: start !important;\n  justify-content: flex-start !important;\n}\n.justify-content-end {\n  -webkit-box-pack: end !important;\n  -ms-flex-pack: end !important;\n  justify-content: flex-end !important;\n}\n.justify-content-center {\n  -webkit-box-pack: center !important;\n  -ms-flex-pack: center !important;\n  justify-content: center !important;\n}\n.justify-content-between {\n  -webkit-box-pack: justify !important;\n  -ms-flex-pack: justify !important;\n  justify-content: space-between !important;\n}\n.justify-content-around {\n  -ms-flex-pack: distribute !important;\n  justify-content: space-around !important;\n}\n.align-items-start {\n  -webkit-box-align: start !important;\n  -ms-flex-align: start !important;\n  align-items: flex-start !important;\n}\n.align-items-end {\n  -webkit-box-align: end !important;\n  -ms-flex-align: end !important;\n  align-items: flex-end !important;\n}\n.align-items-center {\n  -webkit-box-align: center !important;\n  -ms-flex-align: center !important;\n  align-items: center !important;\n}\n.align-items-baseline {\n  -webkit-box-align: baseline !important;\n  -ms-flex-align: baseline !important;\n  align-items: baseline !important;\n}\n.align-items-stretch {\n  -webkit-box-align: stretch !important;\n  -ms-flex-align: stretch !important;\n  align-items: stretch !important;\n}\n.align-content-start {\n  -ms-flex-line-pack: start !important;\n  align-content: flex-start !important;\n}\n.align-content-end {\n  -ms-flex-line-pack: end !important;\n  align-content: flex-end !important;\n}\n.align-content-center {\n  -ms-flex-line-pack: center !important;\n  align-content: center !important;\n}\n.align-content-between {\n  -ms-flex-line-pack: justify !important;\n  align-content: space-between !important;\n}\n.align-content-around {\n  -ms-flex-line-pack: distribute !important;\n  align-content: space-around !important;\n}\n.align-content-stretch {\n  -ms-flex-line-pack: stretch !important;\n  align-content: stretch !important;\n}\n.align-self-auto {\n  -ms-flex-item-align: auto !important;\n  -ms-grid-row-align: auto !important;\n      align-self: auto !important;\n}\n.align-self-start {\n  -ms-flex-item-align: start !important;\n  align-self: flex-start !important;\n}\n.align-self-end {\n  -ms-flex-item-align: end !important;\n  align-self: flex-end !important;\n}\n.align-self-center {\n  -ms-flex-item-align: center !important;\n  -ms-grid-row-align: center !important;\n      align-self: center !important;\n}\n.align-self-baseline {\n  -ms-flex-item-align: baseline !important;\n  align-self: baseline !important;\n}\n.align-self-stretch {\n  -ms-flex-item-align: stretch !important;\n  -ms-grid-row-align: stretch !important;\n      align-self: stretch !important;\n}\n@media (min-width: 576px) {\n  .flex-sm-row {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: normal !important;\n    -ms-flex-direction: row !important;\n    flex-direction: row !important;\n  }\n  .flex-sm-column {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: normal !important;\n    -ms-flex-direction: column !important;\n    flex-direction: column !important;\n  }\n  .flex-sm-row-reverse {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: reverse !important;\n    -ms-flex-direction: row-reverse !important;\n    flex-direction: row-reverse !important;\n  }\n  .flex-sm-column-reverse {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: reverse !important;\n    -ms-flex-direction: column-reverse !important;\n    flex-direction: column-reverse !important;\n  }\n  .flex-sm-wrap {\n    -ms-flex-wrap: wrap !important;\n    flex-wrap: wrap !important;\n  }\n  .flex-sm-nowrap {\n    -ms-flex-wrap: nowrap !important;\n    flex-wrap: nowrap !important;\n  }\n  .flex-sm-wrap-reverse {\n    -ms-flex-wrap: wrap-reverse !important;\n    flex-wrap: wrap-reverse !important;\n  }\n  .justify-content-sm-start {\n    -webkit-box-pack: start !important;\n    -ms-flex-pack: start !important;\n    justify-content: flex-start !important;\n  }\n  .justify-content-sm-end {\n    -webkit-box-pack: end !important;\n    -ms-flex-pack: end !important;\n    justify-content: flex-end !important;\n  }\n  .justify-content-sm-center {\n    -webkit-box-pack: center !important;\n    -ms-flex-pack: center !important;\n    justify-content: center !important;\n  }\n  .justify-content-sm-between {\n    -webkit-box-pack: justify !important;\n    -ms-flex-pack: justify !important;\n    justify-content: space-between !important;\n  }\n  .justify-content-sm-around {\n    -ms-flex-pack: distribute !important;\n    justify-content: space-around !important;\n  }\n  .align-items-sm-start {\n    -webkit-box-align: start !important;\n    -ms-flex-align: start !important;\n    align-items: flex-start !important;\n  }\n  .align-items-sm-end {\n    -webkit-box-align: end !important;\n    -ms-flex-align: end !important;\n    align-items: flex-end !important;\n  }\n  .align-items-sm-center {\n    -webkit-box-align: center !important;\n    -ms-flex-align: center !important;\n    align-items: center !important;\n  }\n  .align-items-sm-baseline {\n    -webkit-box-align: baseline !important;\n    -ms-flex-align: baseline !important;\n    align-items: baseline !important;\n  }\n  .align-items-sm-stretch {\n    -webkit-box-align: stretch !important;\n    -ms-flex-align: stretch !important;\n    align-items: stretch !important;\n  }\n  .align-content-sm-start {\n    -ms-flex-line-pack: start !important;\n    align-content: flex-start !important;\n  }\n  .align-content-sm-end {\n    -ms-flex-line-pack: end !important;\n    align-content: flex-end !important;\n  }\n  .align-content-sm-center {\n    -ms-flex-line-pack: center !important;\n    align-content: center !important;\n  }\n  .align-content-sm-between {\n    -ms-flex-line-pack: justify !important;\n    align-content: space-between !important;\n  }\n  .align-content-sm-around {\n    -ms-flex-line-pack: distribute !important;\n    align-content: space-around !important;\n  }\n  .align-content-sm-stretch {\n    -ms-flex-line-pack: stretch !important;\n    align-content: stretch !important;\n  }\n  .align-self-sm-auto {\n    -ms-flex-item-align: auto !important;\n    -ms-grid-row-align: auto !important;\n        align-self: auto !important;\n  }\n  .align-self-sm-start {\n    -ms-flex-item-align: start !important;\n    align-self: flex-start !important;\n  }\n  .align-self-sm-end {\n    -ms-flex-item-align: end !important;\n    align-self: flex-end !important;\n  }\n  .align-self-sm-center {\n    -ms-flex-item-align: center !important;\n    -ms-grid-row-align: center !important;\n        align-self: center !important;\n  }\n  .align-self-sm-baseline {\n    -ms-flex-item-align: baseline !important;\n    align-self: baseline !important;\n  }\n  .align-self-sm-stretch {\n    -ms-flex-item-align: stretch !important;\n    -ms-grid-row-align: stretch !important;\n        align-self: stretch !important;\n  }\n}\n@media (min-width: 768px) {\n  .flex-md-row {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: normal !important;\n    -ms-flex-direction: row !important;\n    flex-direction: row !important;\n  }\n  .flex-md-column {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: normal !important;\n    -ms-flex-direction: column !important;\n    flex-direction: column !important;\n  }\n  .flex-md-row-reverse {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: reverse !important;\n    -ms-flex-direction: row-reverse !important;\n    flex-direction: row-reverse !important;\n  }\n  .flex-md-column-reverse {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: reverse !important;\n    -ms-flex-direction: column-reverse !important;\n    flex-direction: column-reverse !important;\n  }\n  .flex-md-wrap {\n    -ms-flex-wrap: wrap !important;\n    flex-wrap: wrap !important;\n  }\n  .flex-md-nowrap {\n    -ms-flex-wrap: nowrap !important;\n    flex-wrap: nowrap !important;\n  }\n  .flex-md-wrap-reverse {\n    -ms-flex-wrap: wrap-reverse !important;\n    flex-wrap: wrap-reverse !important;\n  }\n  .justify-content-md-start {\n    -webkit-box-pack: start !important;\n    -ms-flex-pack: start !important;\n    justify-content: flex-start !important;\n  }\n  .justify-content-md-end {\n    -webkit-box-pack: end !important;\n    -ms-flex-pack: end !important;\n    justify-content: flex-end !important;\n  }\n  .justify-content-md-center {\n    -webkit-box-pack: center !important;\n    -ms-flex-pack: center !important;\n    justify-content: center !important;\n  }\n  .justify-content-md-between {\n    -webkit-box-pack: justify !important;\n    -ms-flex-pack: justify !important;\n    justify-content: space-between !important;\n  }\n  .justify-content-md-around {\n    -ms-flex-pack: distribute !important;\n    justify-content: space-around !important;\n  }\n  .align-items-md-start {\n    -webkit-box-align: start !important;\n    -ms-flex-align: start !important;\n    align-items: flex-start !important;\n  }\n  .align-items-md-end {\n    -webkit-box-align: end !important;\n    -ms-flex-align: end !important;\n    align-items: flex-end !important;\n  }\n  .align-items-md-center {\n    -webkit-box-align: center !important;\n    -ms-flex-align: center !important;\n    align-items: center !important;\n  }\n  .align-items-md-baseline {\n    -webkit-box-align: baseline !important;\n    -ms-flex-align: baseline !important;\n    align-items: baseline !important;\n  }\n  .align-items-md-stretch {\n    -webkit-box-align: stretch !important;\n    -ms-flex-align: stretch !important;\n    align-items: stretch !important;\n  }\n  .align-content-md-start {\n    -ms-flex-line-pack: start !important;\n    align-content: flex-start !important;\n  }\n  .align-content-md-end {\n    -ms-flex-line-pack: end !important;\n    align-content: flex-end !important;\n  }\n  .align-content-md-center {\n    -ms-flex-line-pack: center !important;\n    align-content: center !important;\n  }\n  .align-content-md-between {\n    -ms-flex-line-pack: justify !important;\n    align-content: space-between !important;\n  }\n  .align-content-md-around {\n    -ms-flex-line-pack: distribute !important;\n    align-content: space-around !important;\n  }\n  .align-content-md-stretch {\n    -ms-flex-line-pack: stretch !important;\n    align-content: stretch !important;\n  }\n  .align-self-md-auto {\n    -ms-flex-item-align: auto !important;\n    -ms-grid-row-align: auto !important;\n        align-self: auto !important;\n  }\n  .align-self-md-start {\n    -ms-flex-item-align: start !important;\n    align-self: flex-start !important;\n  }\n  .align-self-md-end {\n    -ms-flex-item-align: end !important;\n    align-self: flex-end !important;\n  }\n  .align-self-md-center {\n    -ms-flex-item-align: center !important;\n    -ms-grid-row-align: center !important;\n        align-self: center !important;\n  }\n  .align-self-md-baseline {\n    -ms-flex-item-align: baseline !important;\n    align-self: baseline !important;\n  }\n  .align-self-md-stretch {\n    -ms-flex-item-align: stretch !important;\n    -ms-grid-row-align: stretch !important;\n        align-self: stretch !important;\n  }\n}\n@media (min-width: 992px) {\n  .flex-lg-row {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: normal !important;\n    -ms-flex-direction: row !important;\n    flex-direction: row !important;\n  }\n  .flex-lg-column {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: normal !important;\n    -ms-flex-direction: column !important;\n    flex-direction: column !important;\n  }\n  .flex-lg-row-reverse {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: reverse !important;\n    -ms-flex-direction: row-reverse !important;\n    flex-direction: row-reverse !important;\n  }\n  .flex-lg-column-reverse {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: reverse !important;\n    -ms-flex-direction: column-reverse !important;\n    flex-direction: column-reverse !important;\n  }\n  .flex-lg-wrap {\n    -ms-flex-wrap: wrap !important;\n    flex-wrap: wrap !important;\n  }\n  .flex-lg-nowrap {\n    -ms-flex-wrap: nowrap !important;\n    flex-wrap: nowrap !important;\n  }\n  .flex-lg-wrap-reverse {\n    -ms-flex-wrap: wrap-reverse !important;\n    flex-wrap: wrap-reverse !important;\n  }\n  .justify-content-lg-start {\n    -webkit-box-pack: start !important;\n    -ms-flex-pack: start !important;\n    justify-content: flex-start !important;\n  }\n  .justify-content-lg-end {\n    -webkit-box-pack: end !important;\n    -ms-flex-pack: end !important;\n    justify-content: flex-end !important;\n  }\n  .justify-content-lg-center {\n    -webkit-box-pack: center !important;\n    -ms-flex-pack: center !important;\n    justify-content: center !important;\n  }\n  .justify-content-lg-between {\n    -webkit-box-pack: justify !important;\n    -ms-flex-pack: justify !important;\n    justify-content: space-between !important;\n  }\n  .justify-content-lg-around {\n    -ms-flex-pack: distribute !important;\n    justify-content: space-around !important;\n  }\n  .align-items-lg-start {\n    -webkit-box-align: start !important;\n    -ms-flex-align: start !important;\n    align-items: flex-start !important;\n  }\n  .align-items-lg-end {\n    -webkit-box-align: end !important;\n    -ms-flex-align: end !important;\n    align-items: flex-end !important;\n  }\n  .align-items-lg-center {\n    -webkit-box-align: center !important;\n    -ms-flex-align: center !important;\n    align-items: center !important;\n  }\n  .align-items-lg-baseline {\n    -webkit-box-align: baseline !important;\n    -ms-flex-align: baseline !important;\n    align-items: baseline !important;\n  }\n  .align-items-lg-stretch {\n    -webkit-box-align: stretch !important;\n    -ms-flex-align: stretch !important;\n    align-items: stretch !important;\n  }\n  .align-content-lg-start {\n    -ms-flex-line-pack: start !important;\n    align-content: flex-start !important;\n  }\n  .align-content-lg-end {\n    -ms-flex-line-pack: end !important;\n    align-content: flex-end !important;\n  }\n  .align-content-lg-center {\n    -ms-flex-line-pack: center !important;\n    align-content: center !important;\n  }\n  .align-content-lg-between {\n    -ms-flex-line-pack: justify !important;\n    align-content: space-between !important;\n  }\n  .align-content-lg-around {\n    -ms-flex-line-pack: distribute !important;\n    align-content: space-around !important;\n  }\n  .align-content-lg-stretch {\n    -ms-flex-line-pack: stretch !important;\n    align-content: stretch !important;\n  }\n  .align-self-lg-auto {\n    -ms-flex-item-align: auto !important;\n    -ms-grid-row-align: auto !important;\n        align-self: auto !important;\n  }\n  .align-self-lg-start {\n    -ms-flex-item-align: start !important;\n    align-self: flex-start !important;\n  }\n  .align-self-lg-end {\n    -ms-flex-item-align: end !important;\n    align-self: flex-end !important;\n  }\n  .align-self-lg-center {\n    -ms-flex-item-align: center !important;\n    -ms-grid-row-align: center !important;\n        align-self: center !important;\n  }\n  .align-self-lg-baseline {\n    -ms-flex-item-align: baseline !important;\n    align-self: baseline !important;\n  }\n  .align-self-lg-stretch {\n    -ms-flex-item-align: stretch !important;\n    -ms-grid-row-align: stretch !important;\n        align-self: stretch !important;\n  }\n}\n@media (min-width: 1200px) {\n  .flex-xl-row {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: normal !important;\n    -ms-flex-direction: row !important;\n    flex-direction: row !important;\n  }\n  .flex-xl-column {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: normal !important;\n    -ms-flex-direction: column !important;\n    flex-direction: column !important;\n  }\n  .flex-xl-row-reverse {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: reverse !important;\n    -ms-flex-direction: row-reverse !important;\n    flex-direction: row-reverse !important;\n  }\n  .flex-xl-column-reverse {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: reverse !important;\n    -ms-flex-direction: column-reverse !important;\n    flex-direction: column-reverse !important;\n  }\n  .flex-xl-wrap {\n    -ms-flex-wrap: wrap !important;\n    flex-wrap: wrap !important;\n  }\n  .flex-xl-nowrap {\n    -ms-flex-wrap: nowrap !important;\n    flex-wrap: nowrap !important;\n  }\n  .flex-xl-wrap-reverse {\n    -ms-flex-wrap: wrap-reverse !important;\n    flex-wrap: wrap-reverse !important;\n  }\n  .justify-content-xl-start {\n    -webkit-box-pack: start !important;\n    -ms-flex-pack: start !important;\n    justify-content: flex-start !important;\n  }\n  .justify-content-xl-end {\n    -webkit-box-pack: end !important;\n    -ms-flex-pack: end !important;\n    justify-content: flex-end !important;\n  }\n  .justify-content-xl-center {\n    -webkit-box-pack: center !important;\n    -ms-flex-pack: center !important;\n    justify-content: center !important;\n  }\n  .justify-content-xl-between {\n    -webkit-box-pack: justify !important;\n    -ms-flex-pack: justify !important;\n    justify-content: space-between !important;\n  }\n  .justify-content-xl-around {\n    -ms-flex-pack: distribute !important;\n    justify-content: space-around !important;\n  }\n  .align-items-xl-start {\n    -webkit-box-align: start !important;\n    -ms-flex-align: start !important;\n    align-items: flex-start !important;\n  }\n  .align-items-xl-end {\n    -webkit-box-align: end !important;\n    -ms-flex-align: end !important;\n    align-items: flex-end !important;\n  }\n  .align-items-xl-center {\n    -webkit-box-align: center !important;\n    -ms-flex-align: center !important;\n    align-items: center !important;\n  }\n  .align-items-xl-baseline {\n    -webkit-box-align: baseline !important;\n    -ms-flex-align: baseline !important;\n    align-items: baseline !important;\n  }\n  .align-items-xl-stretch {\n    -webkit-box-align: stretch !important;\n    -ms-flex-align: stretch !important;\n    align-items: stretch !important;\n  }\n  .align-content-xl-start {\n    -ms-flex-line-pack: start !important;\n    align-content: flex-start !important;\n  }\n  .align-content-xl-end {\n    -ms-flex-line-pack: end !important;\n    align-content: flex-end !important;\n  }\n  .align-content-xl-center {\n    -ms-flex-line-pack: center !important;\n    align-content: center !important;\n  }\n  .align-content-xl-between {\n    -ms-flex-line-pack: justify !important;\n    align-content: space-between !important;\n  }\n  .align-content-xl-around {\n    -ms-flex-line-pack: distribute !important;\n    align-content: space-around !important;\n  }\n  .align-content-xl-stretch {\n    -ms-flex-line-pack: stretch !important;\n    align-content: stretch !important;\n  }\n  .align-self-xl-auto {\n    -ms-flex-item-align: auto !important;\n    -ms-grid-row-align: auto !important;\n        align-self: auto !important;\n  }\n  .align-self-xl-start {\n    -ms-flex-item-align: start !important;\n    align-self: flex-start !important;\n  }\n  .align-self-xl-end {\n    -ms-flex-item-align: end !important;\n    align-self: flex-end !important;\n  }\n  .align-self-xl-center {\n    -ms-flex-item-align: center !important;\n    -ms-grid-row-align: center !important;\n        align-self: center !important;\n  }\n  .align-self-xl-baseline {\n    -ms-flex-item-align: baseline !important;\n    align-self: baseline !important;\n  }\n  .align-self-xl-stretch {\n    -ms-flex-item-align: stretch !important;\n    -ms-grid-row-align: stretch !important;\n        align-self: stretch !important;\n  }\n}\n.float-left {\n  float: left !important;\n}\n.float-right {\n  float: right !important;\n}\n.float-none {\n  float: none !important;\n}\n@media (min-width: 576px) {\n  .float-sm-left {\n    float: left !important;\n  }\n  .float-sm-right {\n    float: right !important;\n  }\n  .float-sm-none {\n    float: none !important;\n  }\n}\n@media (min-width: 768px) {\n  .float-md-left {\n    float: left !important;\n  }\n  .float-md-right {\n    float: right !important;\n  }\n  .float-md-none {\n    float: none !important;\n  }\n}\n@media (min-width: 992px) {\n  .float-lg-left {\n    float: left !important;\n  }\n  .float-lg-right {\n    float: right !important;\n  }\n  .float-lg-none {\n    float: none !important;\n  }\n}\n@media (min-width: 1200px) {\n  .float-xl-left {\n    float: left !important;\n  }\n  .float-xl-right {\n    float: right !important;\n  }\n  .float-xl-none {\n    float: none !important;\n  }\n}\n.position-static {\n  position: static !important;\n}\n.position-relative {\n  position: relative !important;\n}\n.position-absolute {\n  position: absolute !important;\n}\n.position-fixed {\n  position: fixed !important;\n}\n.position-sticky {\n  position: -webkit-sticky !important;\n  position: sticky !important;\n}\n.fixed-top {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1030;\n}\n.fixed-bottom {\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1030;\n}\n@supports ((position: -webkit-sticky) or (position: sticky)) {\n  .sticky-top {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    z-index: 1020;\n  }\n}\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  -webkit-clip-path: inset(50%);\n  clip-path: inset(50%);\n  border: 0;\n}\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  overflow: visible;\n  clip: auto;\n  white-space: normal;\n  -webkit-clip-path: none;\n  clip-path: none;\n}\n.w-25 {\n  width: 25% !important;\n}\n.w-50 {\n  width: 50% !important;\n}\n.w-75 {\n  width: 75% !important;\n}\n.w-100 {\n  width: 100% !important;\n}\n.h-25 {\n  height: 25% !important;\n}\n.h-50 {\n  height: 50% !important;\n}\n.h-75 {\n  height: 75% !important;\n}\n.h-100 {\n  height: 100% !important;\n}\n.mw-100 {\n  max-width: 100% !important;\n}\n.mh-100 {\n  max-height: 100% !important;\n}\n.m-0 {\n  margin: 0 !important;\n}\n.mt-0,\n.my-0 {\n  margin-top: 0 !important;\n}\n.mr-0,\n.mx-0 {\n  margin-right: 0 !important;\n}\n.mb-0,\n.my-0 {\n  margin-bottom: 0 !important;\n}\n.ml-0,\n.mx-0 {\n  margin-left: 0 !important;\n}\n.m-1 {\n  margin: 0.25rem !important;\n}\n.mt-1,\n.my-1 {\n  margin-top: 0.25rem !important;\n}\n.mr-1,\n.mx-1 {\n  margin-right: 0.25rem !important;\n}\n.mb-1,\n.my-1 {\n  margin-bottom: 0.25rem !important;\n}\n.ml-1,\n.mx-1 {\n  margin-left: 0.25rem !important;\n}\n.m-2 {\n  margin: 0.5rem !important;\n}\n.mt-2,\n.my-2 {\n  margin-top: 0.5rem !important;\n}\n.mr-2,\n.mx-2 {\n  margin-right: 0.5rem !important;\n}\n.mb-2,\n.my-2 {\n  margin-bottom: 0.5rem !important;\n}\n.ml-2,\n.mx-2 {\n  margin-left: 0.5rem !important;\n}\n.m-3 {\n  margin: 1rem !important;\n}\n.mt-3,\n.my-3 {\n  margin-top: 1rem !important;\n}\n.mr-3,\n.mx-3 {\n  margin-right: 1rem !important;\n}\n.mb-3,\n.my-3 {\n  margin-bottom: 1rem !important;\n}\n.ml-3,\n.mx-3 {\n  margin-left: 1rem !important;\n}\n.m-4 {\n  margin: 1.5rem !important;\n}\n.mt-4,\n.my-4 {\n  margin-top: 1.5rem !important;\n}\n.mr-4,\n.mx-4 {\n  margin-right: 1.5rem !important;\n}\n.mb-4,\n.my-4 {\n  margin-bottom: 1.5rem !important;\n}\n.ml-4,\n.mx-4 {\n  margin-left: 1.5rem !important;\n}\n.m-5 {\n  margin: 3rem !important;\n}\n.mt-5,\n.my-5 {\n  margin-top: 3rem !important;\n}\n.mr-5,\n.mx-5 {\n  margin-right: 3rem !important;\n}\n.mb-5,\n.my-5 {\n  margin-bottom: 3rem !important;\n}\n.ml-5,\n.mx-5 {\n  margin-left: 3rem !important;\n}\n.p-0 {\n  padding: 0 !important;\n}\n.pt-0,\n.py-0 {\n  padding-top: 0 !important;\n}\n.pr-0,\n.px-0 {\n  padding-right: 0 !important;\n}\n.pb-0,\n.py-0 {\n  padding-bottom: 0 !important;\n}\n.pl-0,\n.px-0 {\n  padding-left: 0 !important;\n}\n.p-1 {\n  padding: 0.25rem !important;\n}\n.pt-1,\n.py-1 {\n  padding-top: 0.25rem !important;\n}\n.pr-1,\n.px-1 {\n  padding-right: 0.25rem !important;\n}\n.pb-1,\n.py-1 {\n  padding-bottom: 0.25rem !important;\n}\n.pl-1,\n.px-1 {\n  padding-left: 0.25rem !important;\n}\n.p-2 {\n  padding: 0.5rem !important;\n}\n.pt-2,\n.py-2 {\n  padding-top: 0.5rem !important;\n}\n.pr-2,\n.px-2 {\n  padding-right: 0.5rem !important;\n}\n.pb-2,\n.py-2 {\n  padding-bottom: 0.5rem !important;\n}\n.pl-2,\n.px-2 {\n  padding-left: 0.5rem !important;\n}\n.p-3 {\n  padding: 1rem !important;\n}\n.pt-3,\n.py-3 {\n  padding-top: 1rem !important;\n}\n.pr-3,\n.px-3 {\n  padding-right: 1rem !important;\n}\n.pb-3,\n.py-3 {\n  padding-bottom: 1rem !important;\n}\n.pl-3,\n.px-3 {\n  padding-left: 1rem !important;\n}\n.p-4 {\n  padding: 1.5rem !important;\n}\n.pt-4,\n.py-4 {\n  padding-top: 1.5rem !important;\n}\n.pr-4,\n.px-4 {\n  padding-right: 1.5rem !important;\n}\n.pb-4,\n.py-4 {\n  padding-bottom: 1.5rem !important;\n}\n.pl-4,\n.px-4 {\n  padding-left: 1.5rem !important;\n}\n.p-5 {\n  padding: 3rem !important;\n}\n.pt-5,\n.py-5 {\n  padding-top: 3rem !important;\n}\n.pr-5,\n.px-5 {\n  padding-right: 3rem !important;\n}\n.pb-5,\n.py-5 {\n  padding-bottom: 3rem !important;\n}\n.pl-5,\n.px-5 {\n  padding-left: 3rem !important;\n}\n.m-auto {\n  margin: auto !important;\n}\n.mt-auto,\n.my-auto {\n  margin-top: auto !important;\n}\n.mr-auto,\n.mx-auto {\n  margin-right: auto !important;\n}\n.mb-auto,\n.my-auto {\n  margin-bottom: auto !important;\n}\n.ml-auto,\n.mx-auto {\n  margin-left: auto !important;\n}\n@media (min-width: 576px) {\n  .m-sm-0 {\n    margin: 0 !important;\n  }\n  .mt-sm-0,\n  .my-sm-0 {\n    margin-top: 0 !important;\n  }\n  .mr-sm-0,\n  .mx-sm-0 {\n    margin-right: 0 !important;\n  }\n  .mb-sm-0,\n  .my-sm-0 {\n    margin-bottom: 0 !important;\n  }\n  .ml-sm-0,\n  .mx-sm-0 {\n    margin-left: 0 !important;\n  }\n  .m-sm-1 {\n    margin: 0.25rem !important;\n  }\n  .mt-sm-1,\n  .my-sm-1 {\n    margin-top: 0.25rem !important;\n  }\n  .mr-sm-1,\n  .mx-sm-1 {\n    margin-right: 0.25rem !important;\n  }\n  .mb-sm-1,\n  .my-sm-1 {\n    margin-bottom: 0.25rem !important;\n  }\n  .ml-sm-1,\n  .mx-sm-1 {\n    margin-left: 0.25rem !important;\n  }\n  .m-sm-2 {\n    margin: 0.5rem !important;\n  }\n  .mt-sm-2,\n  .my-sm-2 {\n    margin-top: 0.5rem !important;\n  }\n  .mr-sm-2,\n  .mx-sm-2 {\n    margin-right: 0.5rem !important;\n  }\n  .mb-sm-2,\n  .my-sm-2 {\n    margin-bottom: 0.5rem !important;\n  }\n  .ml-sm-2,\n  .mx-sm-2 {\n    margin-left: 0.5rem !important;\n  }\n  .m-sm-3 {\n    margin: 1rem !important;\n  }\n  .mt-sm-3,\n  .my-sm-3 {\n    margin-top: 1rem !important;\n  }\n  .mr-sm-3,\n  .mx-sm-3 {\n    margin-right: 1rem !important;\n  }\n  .mb-sm-3,\n  .my-sm-3 {\n    margin-bottom: 1rem !important;\n  }\n  .ml-sm-3,\n  .mx-sm-3 {\n    margin-left: 1rem !important;\n  }\n  .m-sm-4 {\n    margin: 1.5rem !important;\n  }\n  .mt-sm-4,\n  .my-sm-4 {\n    margin-top: 1.5rem !important;\n  }\n  .mr-sm-4,\n  .mx-sm-4 {\n    margin-right: 1.5rem !important;\n  }\n  .mb-sm-4,\n  .my-sm-4 {\n    margin-bottom: 1.5rem !important;\n  }\n  .ml-sm-4,\n  .mx-sm-4 {\n    margin-left: 1.5rem !important;\n  }\n  .m-sm-5 {\n    margin: 3rem !important;\n  }\n  .mt-sm-5,\n  .my-sm-5 {\n    margin-top: 3rem !important;\n  }\n  .mr-sm-5,\n  .mx-sm-5 {\n    margin-right: 3rem !important;\n  }\n  .mb-sm-5,\n  .my-sm-5 {\n    margin-bottom: 3rem !important;\n  }\n  .ml-sm-5,\n  .mx-sm-5 {\n    margin-left: 3rem !important;\n  }\n  .p-sm-0 {\n    padding: 0 !important;\n  }\n  .pt-sm-0,\n  .py-sm-0 {\n    padding-top: 0 !important;\n  }\n  .pr-sm-0,\n  .px-sm-0 {\n    padding-right: 0 !important;\n  }\n  .pb-sm-0,\n  .py-sm-0 {\n    padding-bottom: 0 !important;\n  }\n  .pl-sm-0,\n  .px-sm-0 {\n    padding-left: 0 !important;\n  }\n  .p-sm-1 {\n    padding: 0.25rem !important;\n  }\n  .pt-sm-1,\n  .py-sm-1 {\n    padding-top: 0.25rem !important;\n  }\n  .pr-sm-1,\n  .px-sm-1 {\n    padding-right: 0.25rem !important;\n  }\n  .pb-sm-1,\n  .py-sm-1 {\n    padding-bottom: 0.25rem !important;\n  }\n  .pl-sm-1,\n  .px-sm-1 {\n    padding-left: 0.25rem !important;\n  }\n  .p-sm-2 {\n    padding: 0.5rem !important;\n  }\n  .pt-sm-2,\n  .py-sm-2 {\n    padding-top: 0.5rem !important;\n  }\n  .pr-sm-2,\n  .px-sm-2 {\n    padding-right: 0.5rem !important;\n  }\n  .pb-sm-2,\n  .py-sm-2 {\n    padding-bottom: 0.5rem !important;\n  }\n  .pl-sm-2,\n  .px-sm-2 {\n    padding-left: 0.5rem !important;\n  }\n  .p-sm-3 {\n    padding: 1rem !important;\n  }\n  .pt-sm-3,\n  .py-sm-3 {\n    padding-top: 1rem !important;\n  }\n  .pr-sm-3,\n  .px-sm-3 {\n    padding-right: 1rem !important;\n  }\n  .pb-sm-3,\n  .py-sm-3 {\n    padding-bottom: 1rem !important;\n  }\n  .pl-sm-3,\n  .px-sm-3 {\n    padding-left: 1rem !important;\n  }\n  .p-sm-4 {\n    padding: 1.5rem !important;\n  }\n  .pt-sm-4,\n  .py-sm-4 {\n    padding-top: 1.5rem !important;\n  }\n  .pr-sm-4,\n  .px-sm-4 {\n    padding-right: 1.5rem !important;\n  }\n  .pb-sm-4,\n  .py-sm-4 {\n    padding-bottom: 1.5rem !important;\n  }\n  .pl-sm-4,\n  .px-sm-4 {\n    padding-left: 1.5rem !important;\n  }\n  .p-sm-5 {\n    padding: 3rem !important;\n  }\n  .pt-sm-5,\n  .py-sm-5 {\n    padding-top: 3rem !important;\n  }\n  .pr-sm-5,\n  .px-sm-5 {\n    padding-right: 3rem !important;\n  }\n  .pb-sm-5,\n  .py-sm-5 {\n    padding-bottom: 3rem !important;\n  }\n  .pl-sm-5,\n  .px-sm-5 {\n    padding-left: 3rem !important;\n  }\n  .m-sm-auto {\n    margin: auto !important;\n  }\n  .mt-sm-auto,\n  .my-sm-auto {\n    margin-top: auto !important;\n  }\n  .mr-sm-auto,\n  .mx-sm-auto {\n    margin-right: auto !important;\n  }\n  .mb-sm-auto,\n  .my-sm-auto {\n    margin-bottom: auto !important;\n  }\n  .ml-sm-auto,\n  .mx-sm-auto {\n    margin-left: auto !important;\n  }\n}\n@media (min-width: 768px) {\n  .m-md-0 {\n    margin: 0 !important;\n  }\n  .mt-md-0,\n  .my-md-0 {\n    margin-top: 0 !important;\n  }\n  .mr-md-0,\n  .mx-md-0 {\n    margin-right: 0 !important;\n  }\n  .mb-md-0,\n  .my-md-0 {\n    margin-bottom: 0 !important;\n  }\n  .ml-md-0,\n  .mx-md-0 {\n    margin-left: 0 !important;\n  }\n  .m-md-1 {\n    margin: 0.25rem !important;\n  }\n  .mt-md-1,\n  .my-md-1 {\n    margin-top: 0.25rem !important;\n  }\n  .mr-md-1,\n  .mx-md-1 {\n    margin-right: 0.25rem !important;\n  }\n  .mb-md-1,\n  .my-md-1 {\n    margin-bottom: 0.25rem !important;\n  }\n  .ml-md-1,\n  .mx-md-1 {\n    margin-left: 0.25rem !important;\n  }\n  .m-md-2 {\n    margin: 0.5rem !important;\n  }\n  .mt-md-2,\n  .my-md-2 {\n    margin-top: 0.5rem !important;\n  }\n  .mr-md-2,\n  .mx-md-2 {\n    margin-right: 0.5rem !important;\n  }\n  .mb-md-2,\n  .my-md-2 {\n    margin-bottom: 0.5rem !important;\n  }\n  .ml-md-2,\n  .mx-md-2 {\n    margin-left: 0.5rem !important;\n  }\n  .m-md-3 {\n    margin: 1rem !important;\n  }\n  .mt-md-3,\n  .my-md-3 {\n    margin-top: 1rem !important;\n  }\n  .mr-md-3,\n  .mx-md-3 {\n    margin-right: 1rem !important;\n  }\n  .mb-md-3,\n  .my-md-3 {\n    margin-bottom: 1rem !important;\n  }\n  .ml-md-3,\n  .mx-md-3 {\n    margin-left: 1rem !important;\n  }\n  .m-md-4 {\n    margin: 1.5rem !important;\n  }\n  .mt-md-4,\n  .my-md-4 {\n    margin-top: 1.5rem !important;\n  }\n  .mr-md-4,\n  .mx-md-4 {\n    margin-right: 1.5rem !important;\n  }\n  .mb-md-4,\n  .my-md-4 {\n    margin-bottom: 1.5rem !important;\n  }\n  .ml-md-4,\n  .mx-md-4 {\n    margin-left: 1.5rem !important;\n  }\n  .m-md-5 {\n    margin: 3rem !important;\n  }\n  .mt-md-5,\n  .my-md-5 {\n    margin-top: 3rem !important;\n  }\n  .mr-md-5,\n  .mx-md-5 {\n    margin-right: 3rem !important;\n  }\n  .mb-md-5,\n  .my-md-5 {\n    margin-bottom: 3rem !important;\n  }\n  .ml-md-5,\n  .mx-md-5 {\n    margin-left: 3rem !important;\n  }\n  .p-md-0 {\n    padding: 0 !important;\n  }\n  .pt-md-0,\n  .py-md-0 {\n    padding-top: 0 !important;\n  }\n  .pr-md-0,\n  .px-md-0 {\n    padding-right: 0 !important;\n  }\n  .pb-md-0,\n  .py-md-0 {\n    padding-bottom: 0 !important;\n  }\n  .pl-md-0,\n  .px-md-0 {\n    padding-left: 0 !important;\n  }\n  .p-md-1 {\n    padding: 0.25rem !important;\n  }\n  .pt-md-1,\n  .py-md-1 {\n    padding-top: 0.25rem !important;\n  }\n  .pr-md-1,\n  .px-md-1 {\n    padding-right: 0.25rem !important;\n  }\n  .pb-md-1,\n  .py-md-1 {\n    padding-bottom: 0.25rem !important;\n  }\n  .pl-md-1,\n  .px-md-1 {\n    padding-left: 0.25rem !important;\n  }\n  .p-md-2 {\n    padding: 0.5rem !important;\n  }\n  .pt-md-2,\n  .py-md-2 {\n    padding-top: 0.5rem !important;\n  }\n  .pr-md-2,\n  .px-md-2 {\n    padding-right: 0.5rem !important;\n  }\n  .pb-md-2,\n  .py-md-2 {\n    padding-bottom: 0.5rem !important;\n  }\n  .pl-md-2,\n  .px-md-2 {\n    padding-left: 0.5rem !important;\n  }\n  .p-md-3 {\n    padding: 1rem !important;\n  }\n  .pt-md-3,\n  .py-md-3 {\n    padding-top: 1rem !important;\n  }\n  .pr-md-3,\n  .px-md-3 {\n    padding-right: 1rem !important;\n  }\n  .pb-md-3,\n  .py-md-3 {\n    padding-bottom: 1rem !important;\n  }\n  .pl-md-3,\n  .px-md-3 {\n    padding-left: 1rem !important;\n  }\n  .p-md-4 {\n    padding: 1.5rem !important;\n  }\n  .pt-md-4,\n  .py-md-4 {\n    padding-top: 1.5rem !important;\n  }\n  .pr-md-4,\n  .px-md-4 {\n    padding-right: 1.5rem !important;\n  }\n  .pb-md-4,\n  .py-md-4 {\n    padding-bottom: 1.5rem !important;\n  }\n  .pl-md-4,\n  .px-md-4 {\n    padding-left: 1.5rem !important;\n  }\n  .p-md-5 {\n    padding: 3rem !important;\n  }\n  .pt-md-5,\n  .py-md-5 {\n    padding-top: 3rem !important;\n  }\n  .pr-md-5,\n  .px-md-5 {\n    padding-right: 3rem !important;\n  }\n  .pb-md-5,\n  .py-md-5 {\n    padding-bottom: 3rem !important;\n  }\n  .pl-md-5,\n  .px-md-5 {\n    padding-left: 3rem !important;\n  }\n  .m-md-auto {\n    margin: auto !important;\n  }\n  .mt-md-auto,\n  .my-md-auto {\n    margin-top: auto !important;\n  }\n  .mr-md-auto,\n  .mx-md-auto {\n    margin-right: auto !important;\n  }\n  .mb-md-auto,\n  .my-md-auto {\n    margin-bottom: auto !important;\n  }\n  .ml-md-auto,\n  .mx-md-auto {\n    margin-left: auto !important;\n  }\n}\n@media (min-width: 992px) {\n  .m-lg-0 {\n    margin: 0 !important;\n  }\n  .mt-lg-0,\n  .my-lg-0 {\n    margin-top: 0 !important;\n  }\n  .mr-lg-0,\n  .mx-lg-0 {\n    margin-right: 0 !important;\n  }\n  .mb-lg-0,\n  .my-lg-0 {\n    margin-bottom: 0 !important;\n  }\n  .ml-lg-0,\n  .mx-lg-0 {\n    margin-left: 0 !important;\n  }\n  .m-lg-1 {\n    margin: 0.25rem !important;\n  }\n  .mt-lg-1,\n  .my-lg-1 {\n    margin-top: 0.25rem !important;\n  }\n  .mr-lg-1,\n  .mx-lg-1 {\n    margin-right: 0.25rem !important;\n  }\n  .mb-lg-1,\n  .my-lg-1 {\n    margin-bottom: 0.25rem !important;\n  }\n  .ml-lg-1,\n  .mx-lg-1 {\n    margin-left: 0.25rem !important;\n  }\n  .m-lg-2 {\n    margin: 0.5rem !important;\n  }\n  .mt-lg-2,\n  .my-lg-2 {\n    margin-top: 0.5rem !important;\n  }\n  .mr-lg-2,\n  .mx-lg-2 {\n    margin-right: 0.5rem !important;\n  }\n  .mb-lg-2,\n  .my-lg-2 {\n    margin-bottom: 0.5rem !important;\n  }\n  .ml-lg-2,\n  .mx-lg-2 {\n    margin-left: 0.5rem !important;\n  }\n  .m-lg-3 {\n    margin: 1rem !important;\n  }\n  .mt-lg-3,\n  .my-lg-3 {\n    margin-top: 1rem !important;\n  }\n  .mr-lg-3,\n  .mx-lg-3 {\n    margin-right: 1rem !important;\n  }\n  .mb-lg-3,\n  .my-lg-3 {\n    margin-bottom: 1rem !important;\n  }\n  .ml-lg-3,\n  .mx-lg-3 {\n    margin-left: 1rem !important;\n  }\n  .m-lg-4 {\n    margin: 1.5rem !important;\n  }\n  .mt-lg-4,\n  .my-lg-4 {\n    margin-top: 1.5rem !important;\n  }\n  .mr-lg-4,\n  .mx-lg-4 {\n    margin-right: 1.5rem !important;\n  }\n  .mb-lg-4,\n  .my-lg-4 {\n    margin-bottom: 1.5rem !important;\n  }\n  .ml-lg-4,\n  .mx-lg-4 {\n    margin-left: 1.5rem !important;\n  }\n  .m-lg-5 {\n    margin: 3rem !important;\n  }\n  .mt-lg-5,\n  .my-lg-5 {\n    margin-top: 3rem !important;\n  }\n  .mr-lg-5,\n  .mx-lg-5 {\n    margin-right: 3rem !important;\n  }\n  .mb-lg-5,\n  .my-lg-5 {\n    margin-bottom: 3rem !important;\n  }\n  .ml-lg-5,\n  .mx-lg-5 {\n    margin-left: 3rem !important;\n  }\n  .p-lg-0 {\n    padding: 0 !important;\n  }\n  .pt-lg-0,\n  .py-lg-0 {\n    padding-top: 0 !important;\n  }\n  .pr-lg-0,\n  .px-lg-0 {\n    padding-right: 0 !important;\n  }\n  .pb-lg-0,\n  .py-lg-0 {\n    padding-bottom: 0 !important;\n  }\n  .pl-lg-0,\n  .px-lg-0 {\n    padding-left: 0 !important;\n  }\n  .p-lg-1 {\n    padding: 0.25rem !important;\n  }\n  .pt-lg-1,\n  .py-lg-1 {\n    padding-top: 0.25rem !important;\n  }\n  .pr-lg-1,\n  .px-lg-1 {\n    padding-right: 0.25rem !important;\n  }\n  .pb-lg-1,\n  .py-lg-1 {\n    padding-bottom: 0.25rem !important;\n  }\n  .pl-lg-1,\n  .px-lg-1 {\n    padding-left: 0.25rem !important;\n  }\n  .p-lg-2 {\n    padding: 0.5rem !important;\n  }\n  .pt-lg-2,\n  .py-lg-2 {\n    padding-top: 0.5rem !important;\n  }\n  .pr-lg-2,\n  .px-lg-2 {\n    padding-right: 0.5rem !important;\n  }\n  .pb-lg-2,\n  .py-lg-2 {\n    padding-bottom: 0.5rem !important;\n  }\n  .pl-lg-2,\n  .px-lg-2 {\n    padding-left: 0.5rem !important;\n  }\n  .p-lg-3 {\n    padding: 1rem !important;\n  }\n  .pt-lg-3,\n  .py-lg-3 {\n    padding-top: 1rem !important;\n  }\n  .pr-lg-3,\n  .px-lg-3 {\n    padding-right: 1rem !important;\n  }\n  .pb-lg-3,\n  .py-lg-3 {\n    padding-bottom: 1rem !important;\n  }\n  .pl-lg-3,\n  .px-lg-3 {\n    padding-left: 1rem !important;\n  }\n  .p-lg-4 {\n    padding: 1.5rem !important;\n  }\n  .pt-lg-4,\n  .py-lg-4 {\n    padding-top: 1.5rem !important;\n  }\n  .pr-lg-4,\n  .px-lg-4 {\n    padding-right: 1.5rem !important;\n  }\n  .pb-lg-4,\n  .py-lg-4 {\n    padding-bottom: 1.5rem !important;\n  }\n  .pl-lg-4,\n  .px-lg-4 {\n    padding-left: 1.5rem !important;\n  }\n  .p-lg-5 {\n    padding: 3rem !important;\n  }\n  .pt-lg-5,\n  .py-lg-5 {\n    padding-top: 3rem !important;\n  }\n  .pr-lg-5,\n  .px-lg-5 {\n    padding-right: 3rem !important;\n  }\n  .pb-lg-5,\n  .py-lg-5 {\n    padding-bottom: 3rem !important;\n  }\n  .pl-lg-5,\n  .px-lg-5 {\n    padding-left: 3rem !important;\n  }\n  .m-lg-auto {\n    margin: auto !important;\n  }\n  .mt-lg-auto,\n  .my-lg-auto {\n    margin-top: auto !important;\n  }\n  .mr-lg-auto,\n  .mx-lg-auto {\n    margin-right: auto !important;\n  }\n  .mb-lg-auto,\n  .my-lg-auto {\n    margin-bottom: auto !important;\n  }\n  .ml-lg-auto,\n  .mx-lg-auto {\n    margin-left: auto !important;\n  }\n}\n@media (min-width: 1200px) {\n  .m-xl-0 {\n    margin: 0 !important;\n  }\n  .mt-xl-0,\n  .my-xl-0 {\n    margin-top: 0 !important;\n  }\n  .mr-xl-0,\n  .mx-xl-0 {\n    margin-right: 0 !important;\n  }\n  .mb-xl-0,\n  .my-xl-0 {\n    margin-bottom: 0 !important;\n  }\n  .ml-xl-0,\n  .mx-xl-0 {\n    margin-left: 0 !important;\n  }\n  .m-xl-1 {\n    margin: 0.25rem !important;\n  }\n  .mt-xl-1,\n  .my-xl-1 {\n    margin-top: 0.25rem !important;\n  }\n  .mr-xl-1,\n  .mx-xl-1 {\n    margin-right: 0.25rem !important;\n  }\n  .mb-xl-1,\n  .my-xl-1 {\n    margin-bottom: 0.25rem !important;\n  }\n  .ml-xl-1,\n  .mx-xl-1 {\n    margin-left: 0.25rem !important;\n  }\n  .m-xl-2 {\n    margin: 0.5rem !important;\n  }\n  .mt-xl-2,\n  .my-xl-2 {\n    margin-top: 0.5rem !important;\n  }\n  .mr-xl-2,\n  .mx-xl-2 {\n    margin-right: 0.5rem !important;\n  }\n  .mb-xl-2,\n  .my-xl-2 {\n    margin-bottom: 0.5rem !important;\n  }\n  .ml-xl-2,\n  .mx-xl-2 {\n    margin-left: 0.5rem !important;\n  }\n  .m-xl-3 {\n    margin: 1rem !important;\n  }\n  .mt-xl-3,\n  .my-xl-3 {\n    margin-top: 1rem !important;\n  }\n  .mr-xl-3,\n  .mx-xl-3 {\n    margin-right: 1rem !important;\n  }\n  .mb-xl-3,\n  .my-xl-3 {\n    margin-bottom: 1rem !important;\n  }\n  .ml-xl-3,\n  .mx-xl-3 {\n    margin-left: 1rem !important;\n  }\n  .m-xl-4 {\n    margin: 1.5rem !important;\n  }\n  .mt-xl-4,\n  .my-xl-4 {\n    margin-top: 1.5rem !important;\n  }\n  .mr-xl-4,\n  .mx-xl-4 {\n    margin-right: 1.5rem !important;\n  }\n  .mb-xl-4,\n  .my-xl-4 {\n    margin-bottom: 1.5rem !important;\n  }\n  .ml-xl-4,\n  .mx-xl-4 {\n    margin-left: 1.5rem !important;\n  }\n  .m-xl-5 {\n    margin: 3rem !important;\n  }\n  .mt-xl-5,\n  .my-xl-5 {\n    margin-top: 3rem !important;\n  }\n  .mr-xl-5,\n  .mx-xl-5 {\n    margin-right: 3rem !important;\n  }\n  .mb-xl-5,\n  .my-xl-5 {\n    margin-bottom: 3rem !important;\n  }\n  .ml-xl-5,\n  .mx-xl-5 {\n    margin-left: 3rem !important;\n  }\n  .p-xl-0 {\n    padding: 0 !important;\n  }\n  .pt-xl-0,\n  .py-xl-0 {\n    padding-top: 0 !important;\n  }\n  .pr-xl-0,\n  .px-xl-0 {\n    padding-right: 0 !important;\n  }\n  .pb-xl-0,\n  .py-xl-0 {\n    padding-bottom: 0 !important;\n  }\n  .pl-xl-0,\n  .px-xl-0 {\n    padding-left: 0 !important;\n  }\n  .p-xl-1 {\n    padding: 0.25rem !important;\n  }\n  .pt-xl-1,\n  .py-xl-1 {\n    padding-top: 0.25rem !important;\n  }\n  .pr-xl-1,\n  .px-xl-1 {\n    padding-right: 0.25rem !important;\n  }\n  .pb-xl-1,\n  .py-xl-1 {\n    padding-bottom: 0.25rem !important;\n  }\n  .pl-xl-1,\n  .px-xl-1 {\n    padding-left: 0.25rem !important;\n  }\n  .p-xl-2 {\n    padding: 0.5rem !important;\n  }\n  .pt-xl-2,\n  .py-xl-2 {\n    padding-top: 0.5rem !important;\n  }\n  .pr-xl-2,\n  .px-xl-2 {\n    padding-right: 0.5rem !important;\n  }\n  .pb-xl-2,\n  .py-xl-2 {\n    padding-bottom: 0.5rem !important;\n  }\n  .pl-xl-2,\n  .px-xl-2 {\n    padding-left: 0.5rem !important;\n  }\n  .p-xl-3 {\n    padding: 1rem !important;\n  }\n  .pt-xl-3,\n  .py-xl-3 {\n    padding-top: 1rem !important;\n  }\n  .pr-xl-3,\n  .px-xl-3 {\n    padding-right: 1rem !important;\n  }\n  .pb-xl-3,\n  .py-xl-3 {\n    padding-bottom: 1rem !important;\n  }\n  .pl-xl-3,\n  .px-xl-3 {\n    padding-left: 1rem !important;\n  }\n  .p-xl-4 {\n    padding: 1.5rem !important;\n  }\n  .pt-xl-4,\n  .py-xl-4 {\n    padding-top: 1.5rem !important;\n  }\n  .pr-xl-4,\n  .px-xl-4 {\n    padding-right: 1.5rem !important;\n  }\n  .pb-xl-4,\n  .py-xl-4 {\n    padding-bottom: 1.5rem !important;\n  }\n  .pl-xl-4,\n  .px-xl-4 {\n    padding-left: 1.5rem !important;\n  }\n  .p-xl-5 {\n    padding: 3rem !important;\n  }\n  .pt-xl-5,\n  .py-xl-5 {\n    padding-top: 3rem !important;\n  }\n  .pr-xl-5,\n  .px-xl-5 {\n    padding-right: 3rem !important;\n  }\n  .pb-xl-5,\n  .py-xl-5 {\n    padding-bottom: 3rem !important;\n  }\n  .pl-xl-5,\n  .px-xl-5 {\n    padding-left: 3rem !important;\n  }\n  .m-xl-auto {\n    margin: auto !important;\n  }\n  .mt-xl-auto,\n  .my-xl-auto {\n    margin-top: auto !important;\n  }\n  .mr-xl-auto,\n  .mx-xl-auto {\n    margin-right: auto !important;\n  }\n  .mb-xl-auto,\n  .my-xl-auto {\n    margin-bottom: auto !important;\n  }\n  .ml-xl-auto,\n  .mx-xl-auto {\n    margin-left: auto !important;\n  }\n}\n.text-justify {\n  text-align: justify !important;\n}\n.text-nowrap {\n  white-space: nowrap !important;\n}\n.text-truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.text-left {\n  text-align: left !important;\n}\n.text-right {\n  text-align: right !important;\n}\n.text-center {\n  text-align: center !important;\n}\n@media (min-width: 576px) {\n  .text-sm-left {\n    text-align: left !important;\n  }\n  .text-sm-right {\n    text-align: right !important;\n  }\n  .text-sm-center {\n    text-align: center !important;\n  }\n}\n@media (min-width: 768px) {\n  .text-md-left {\n    text-align: left !important;\n  }\n  .text-md-right {\n    text-align: right !important;\n  }\n  .text-md-center {\n    text-align: center !important;\n  }\n}\n@media (min-width: 992px) {\n  .text-lg-left {\n    text-align: left !important;\n  }\n  .text-lg-right {\n    text-align: right !important;\n  }\n  .text-lg-center {\n    text-align: center !important;\n  }\n}\n@media (min-width: 1200px) {\n  .text-xl-left {\n    text-align: left !important;\n  }\n  .text-xl-right {\n    text-align: right !important;\n  }\n  .text-xl-center {\n    text-align: center !important;\n  }\n}\n.text-lowercase {\n  text-transform: lowercase !important;\n}\n.text-uppercase {\n  text-transform: uppercase !important;\n}\n.text-capitalize {\n  text-transform: capitalize !important;\n}\n.font-weight-light {\n  font-weight: 300 !important;\n}\n.font-weight-normal {\n  font-weight: 400 !important;\n}\n.font-weight-bold {\n  font-weight: 700 !important;\n}\n.font-italic {\n  font-style: italic !important;\n}\n.text-white {\n  color: #fff !important;\n}\n.text-primary {\n  color: #007bff !important;\n}\na.text-primary:focus, a.text-primary:hover {\n  color: #0062cc !important;\n}\n.text-secondary {\n  color: #868e96 !important;\n}\na.text-secondary:focus, a.text-secondary:hover {\n  color: #6c757d !important;\n}\n.text-success {\n  color: #28a745 !important;\n}\na.text-success:focus, a.text-success:hover {\n  color: #1e7e34 !important;\n}\n.text-info {\n  color: #17a2b8 !important;\n}\na.text-info:focus, a.text-info:hover {\n  color: #117a8b !important;\n}\n.text-warning {\n  color: #ffc107 !important;\n}\na.text-warning:focus, a.text-warning:hover {\n  color: #d39e00 !important;\n}\n.text-danger {\n  color: #dc3545 !important;\n}\na.text-danger:focus, a.text-danger:hover {\n  color: #bd2130 !important;\n}\n.text-light {\n  color: #f8f9fa !important;\n}\na.text-light:focus, a.text-light:hover {\n  color: #dae0e5 !important;\n}\n.text-dark {\n  color: #343a40 !important;\n}\na.text-dark:focus, a.text-dark:hover {\n  color: #1d2124 !important;\n}\n.text-muted {\n  color: #868e96 !important;\n}\n.text-hide {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0;\n}\n.visible {\n  visibility: visible !important;\n}\n.invisible {\n  visibility: hidden !important;\n}\n@media print {\n  *,\n  *::before,\n  *::after {\n    text-shadow: none !important;\n    -webkit-box-shadow: none !important;\n            box-shadow: none !important;\n  }\n  a,\n  a:visited {\n    text-decoration: underline;\n  }\n  abbr[title]::after {\n    content: \" (\" attr(title) \")\";\n  }\n  pre {\n    white-space: pre-wrap !important;\n  }\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid;\n  }\n  thead {\n    display: table-header-group;\n  }\n  tr,\n  img {\n    page-break-inside: avoid;\n  }\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3;\n  }\n  h2,\n  h3 {\n    page-break-after: avoid;\n  }\n  .navbar {\n    display: none;\n  }\n  .badge {\n    border: 1px solid #000;\n  }\n  .table {\n    border-collapse: collapse !important;\n  }\n  .table td,\n  .table th {\n    background-color: #fff !important;\n  }\n  .table-bordered th,\n  .table-bordered td {\n    border: 1px solid #ddd !important;\n  }\n}\na:link { \n    text-decoration: none; }\na:visited { text-decoration: none; }\na:active { text-decoration: none;}\na:hover {\n    text-decoration: none;\n    color: orange;\n    \n }\n.example-icon {\n    padding: 0 14px;\n  }\n.example-spacer {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n  }\n"

/***/ }),

/***/ "./src/app/app-navbar-header/app-navbar-header.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar style=\"background-color: rgb(250, 250, 250)\">\n    <h3>\n        <a routerLink=\"/\" style=\"color:black; font-size: 25px\">\n            <img src=\"http://www.changiairport.com/content/dam/cag/3-transports/x3.0_transport-icon-big-7.png.pagespeed.ic.ypgOjLWv_Q.png\"\n                 width=\"110px\" height=\"70px\">\n            SmartParking\n        </a>\n    </h3>\n    <span class=\"example-spacer\"></span>\n    <span *ngIf=\"hasToken()\">\n        <button [routerLink]=\"['/statistic']\" mat-icon-button>\n            <i class=\"material-icons\">&#xE8E5;</i>\n        </button>\n    </span>\n    <span *ngIf=\"hasToken()\">\n    <button [routerLink]=\"['/profile']\" mat-icon-button>\n    <mat-icon>&#xE853;</mat-icon>\n    </button>\n    </span>\n    <span *ngIf=\"getRole() === 'PROVIDER_MANAGER' || getRole() === 'SUPERUSER'\">\n\n        <button [routerLink]=\"['/configuration']\" mat-icon-button>\n            <mat-icon>settings</mat-icon>\n        </button>\n    </span>\n    <span *ngIf=\"!hasToken()\">\n    <button mat-raised-button class=\"ml-3\" color=\"primary\" [routerLink]=\"['/login']\" style=\"font-size:18px;\">\n        SignIn/SignUp\n        <i class=\"material-icons\">&#xE853;</i>\n    </button>\n    </span>\n    <span *ngIf=\"hasToken()\">\n        <button mat-raised-button class=\"ml-3\" color=\"primary\" (click)=\"logOut()\">\n        Logout\n        <i class=\"material-icons\">&#xE853;</i>\n    </button>\n    </span>\n</mat-toolbar>"

/***/ }),

/***/ "./src/app/app-navbar-header/app-navbar-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppNavbarHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_token_token_storage__ = __webpack_require__("./src/app/auth/token/token-storage.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppNavbarHeaderComponent = /** @class */ (function () {
    function AppNavbarHeaderComponent() {
        this.navTitle = 'SmartParking';
    }
    AppNavbarHeaderComponent.prototype.ngOnInit = function () {
    };
    AppNavbarHeaderComponent.prototype.getRole = function () {
        return __WEBPACK_IMPORTED_MODULE_1__auth_token_token_storage__["a" /* TokenStorage */].getRole();
    };
    AppNavbarHeaderComponent.prototype.hasToken = function () {
        return __WEBPACK_IMPORTED_MODULE_1__auth_token_token_storage__["a" /* TokenStorage */].hasToken();
    };
    AppNavbarHeaderComponent.prototype.logOut = function () {
        __WEBPACK_IMPORTED_MODULE_1__auth_token_token_storage__["a" /* TokenStorage */].signOut();
    };
    AppNavbarHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-navbar-header',
            template: __webpack_require__("./src/app/app-navbar-header/app-navbar-header.component.html"),
            styles: [__webpack_require__("./src/app/app-navbar-header/app-navbar-header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppNavbarHeaderComponent);
    return AppNavbarHeaderComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_index_component__ = __webpack_require__("./src/app/index/index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__superuser_configuration_superuser_configuration_component__ = __webpack_require__("./src/app/superuser-configuration/superuser-configuration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__parking_detail_parking_detail_component__ = __webpack_require__("./src/app/parking-detail/parking-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__clients_clients_component__ = __webpack_require__("./src/app/clients/clients.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__superuser_configuration_providers_provider_list_provider_list_component__ = __webpack_require__("./src/app/superuser-configuration/providers/provider-list/provider-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth_login_login_component__ = __webpack_require__("./src/app/auth/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__superuser_configuration_providers_provider_detail_provider_detail_component__ = __webpack_require__("./src/app/superuser-configuration/providers/provider-detail/provider-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__manager_manager_parking_configure_manager_parking_configure_component__ = __webpack_require__("./src/app/manager/manager-parking-configure/manager-parking-configure.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__clients_client_detail_client_detail_component__ = __webpack_require__("./src/app/clients/client-detail/client-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__auth_registration_registration_component__ = __webpack_require__("./src/app/auth/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__superuser_configuration_providers_add_provider_add_provider_component__ = __webpack_require__("./src/app/superuser-configuration/providers/add-provider/add-provider.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__clients_client_edit_client_edit_component__ = __webpack_require__("./src/app/clients/client-edit/client-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__superuser_configuration_providers_update_provider_update_provider_component__ = __webpack_require__("./src/app/superuser-configuration/providers/update-provider/update-provider.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__manager_manager_parking_list_manager_parking_list_component__ = __webpack_require__("./src/app/manager/manager-parking-list/manager-parking-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__client_profile_client_profile_component__ = __webpack_require__("./src/app/client-profile/client-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__client_profile_client_profile_edit_client_profile_edit_component__ = __webpack_require__("./src/app/client-profile/client-profile-edit/client-profile-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__client_profile_client_profile_edit_password_client_profile_edit_password_component__ = __webpack_require__("./src/app/client-profile/client-profile-edit-password/client-profile-edit-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__statistic_statistic_component__ = __webpack_require__("./src/app/statistic/statistic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__statistic_parking_statistic_parking_statistic_component__ = __webpack_require__("./src/app/statistic/parking-statistic/parking-statistic.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var routes = [
    { path: '', redirectTo: '/index', pathMatch: 'full' },
    { path: 'index', component: __WEBPACK_IMPORTED_MODULE_2__index_index_component__["a" /* IndexComponent */] },
    { path: 'configuration', component: __WEBPACK_IMPORTED_MODULE_3__superuser_configuration_superuser_configuration_component__["a" /* SuperuserConfigurationComponent */] },
    { path: 'parkingdetail/:id', component: __WEBPACK_IMPORTED_MODULE_4__parking_detail_parking_detail_component__["a" /* ParkingDetailComponent */] },
    { path: 'configuration', component: __WEBPACK_IMPORTED_MODULE_3__superuser_configuration_superuser_configuration_component__["a" /* SuperuserConfigurationComponent */], },
    { path: 'configuration/clients', component: __WEBPACK_IMPORTED_MODULE_5__clients_clients_component__["a" /* ClientsComponent */] },
    { path: 'configuration/clients/:id', component: __WEBPACK_IMPORTED_MODULE_10__clients_client_detail_client_detail_component__["a" /* ClientDetailComponent */] },
    { path: 'configuration/clients/:id/edit/:id', component: __WEBPACK_IMPORTED_MODULE_10__clients_client_detail_client_detail_component__["a" /* ClientDetailComponent */] },
    { path: 'configuration/clients/edit/:id', component: __WEBPACK_IMPORTED_MODULE_13__clients_client_edit_client_edit_component__["a" /* ClientEditComponent */] },
    { path: 'configuration/providers', component: __WEBPACK_IMPORTED_MODULE_6__superuser_configuration_providers_provider_list_provider_list_component__["a" /* ProviderListComponent */] },
    { path: 'manager-configuration/parkings', component: __WEBPACK_IMPORTED_MODULE_15__manager_manager_parking_list_manager_parking_list_component__["a" /* ManagerParkingListComponent */] },
    {
        path: 'manager-configuration/parkings/add', component: __WEBPACK_IMPORTED_MODULE_9__manager_manager_parking_configure_manager_parking_configure_component__["a" /* ManagerParkingConfigureComponent */],
        data: { configureType: __WEBPACK_IMPORTED_MODULE_9__manager_manager_parking_configure_manager_parking_configure_component__["b" /* ManagerParkingConfigureType */].ADD }
    },
    {
        path: 'manager-configuration/parkings/edit/:id', component: __WEBPACK_IMPORTED_MODULE_9__manager_manager_parking_configure_manager_parking_configure_component__["a" /* ManagerParkingConfigureComponent */],
        data: { configureType: __WEBPACK_IMPORTED_MODULE_9__manager_manager_parking_configure_manager_parking_configure_component__["b" /* ManagerParkingConfigureType */].EDIT }
    },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_7__auth_login_login_component__["a" /* LoginComponent */] },
    { path: 'configuration/providers/:id', component: __WEBPACK_IMPORTED_MODULE_8__superuser_configuration_providers_provider_detail_provider_detail_component__["a" /* ProviderDetailComponent */] },
    { path: 'configuration/provider/add', component: __WEBPACK_IMPORTED_MODULE_12__superuser_configuration_providers_add_provider_add_provider_component__["a" /* AddProviderComponent */] },
    { path: 'configuration/provider/update/:id', component: __WEBPACK_IMPORTED_MODULE_14__superuser_configuration_providers_update_provider_update_provider_component__["a" /* UpdateProviderComponent */] },
    { path: 'registration', component: __WEBPACK_IMPORTED_MODULE_11__auth_registration_registration_component__["a" /* RegistrationComponent */] },
    { path: 'configuration/providers/:id', component: __WEBPACK_IMPORTED_MODULE_8__superuser_configuration_providers_provider_detail_provider_detail_component__["a" /* ProviderDetailComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_16__client_profile_client_profile_component__["a" /* ClientProfileComponent */] },
    { path: 'profile/edit', component: __WEBPACK_IMPORTED_MODULE_17__client_profile_client_profile_edit_client_profile_edit_component__["a" /* ClientProfileEditComponent */] },
    { path: 'profile/edit/password', component: __WEBPACK_IMPORTED_MODULE_18__client_profile_client_profile_edit_password_client_profile_edit_password_component__["a" /* ClientProfileEditPasswordComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_16__client_profile_client_profile_component__["a" /* ClientProfileComponent */] },
    { path: 'statistic', component: __WEBPACK_IMPORTED_MODULE_19__statistic_statistic_component__["a" /* StatisticComponent */] },
    { path: 'statistic/parkingstatistic', component: __WEBPACK_IMPORTED_MODULE_20__statistic_parking_statistic_parking_statistic_component__["a" /* ParkingStatisticComponent */] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar-header></app-navbar-header>\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'SmartParking';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_navbar_header_app_navbar_header_component__ = __webpack_require__("./src/app/app-navbar-header/app-navbar-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__index_parking_list_parking_list_component__ = __webpack_require__("./src/app/index/parking-list/parking-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__parking_service__ = __webpack_require__("./src/app/parking.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__manager_manager_parking_service__ = __webpack_require__("./src/app/manager/manager-parking.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__superuser_configuration_superuser_configuration_component__ = __webpack_require__("./src/app/superuser-configuration/superuser-configuration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__parking_detail_parking_detail_component__ = __webpack_require__("./src/app/parking-detail/parking-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__superuser_configuration_providers_provider_service__ = __webpack_require__("./src/app/superuser-configuration/providers/provider.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__clients_clients_component__ = __webpack_require__("./src/app/clients/clients.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__clients_client_list_client_list_component__ = __webpack_require__("./src/app/clients/client-list/client-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__clients_client_edit_client_edit_component__ = __webpack_require__("./src/app/clients/client-edit/client-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__clients_client_service__ = __webpack_require__("./src/app/clients/client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__clients_client_list_client_item_client_item_component__ = __webpack_require__("./src/app/clients/client-list/client-item/client-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__superuser_configuration_providers_provider_list_provider_list_component__ = __webpack_require__("./src/app/superuser-configuration/providers/provider-list/provider-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__superuser_configuration_providers_provider_detail_provider_detail_component__ = __webpack_require__("./src/app/superuser-configuration/providers/provider-detail/provider-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__superuser_configuration_providers_add_provider_add_provider_component__ = __webpack_require__("./src/app/superuser-configuration/providers/add-provider/add-provider.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__clients_client_list_filter_pipe__ = __webpack_require__("./src/app/clients/client-list/filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__clients_client_detail_client_detail_component__ = __webpack_require__("./src/app/clients/client-detail/client-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__auth_login_login_component__ = __webpack_require__("./src/app/auth/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__auth_registration_registration_component__ = __webpack_require__("./src/app/auth/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__angular_materials_module__ = __webpack_require__("./src/app/angular-materials.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__index_index_component__ = __webpack_require__("./src/app/index/index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__index_parking_list_filter_parking_list_filter_component__ = __webpack_require__("./src/app/index/parking-list-filter/parking-list-filter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__manager_manager_parking_configure_manager_parking_configure_component__ = __webpack_require__("./src/app/manager/manager-parking-configure/manager-parking-configure.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__manager_manager_parking_list_manager_parking_list_component__ = __webpack_require__("./src/app/manager/manager-parking-list/manager-parking-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__interceptor_service__ = __webpack_require__("./src/app/interceptor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__auth_login_login_service__ = __webpack_require__("./src/app/auth/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__auth_registration_registration_service__ = __webpack_require__("./src/app/auth/registration/registration.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__auth_token_token_storage__ = __webpack_require__("./src/app/auth/token/token-storage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__index_parking_list_filter_location_field_location_field_component__ = __webpack_require__("./src/app/index/parking-list-filter/location-field/location-field.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__service_ip_location_service__ = __webpack_require__("./src/app/service/ip-location.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__index_parking_list_filter_radius_field_radius_field_component__ = __webpack_require__("./src/app/index/parking-list-filter/radius-field/radius-field.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__angular_material_slider__ = __webpack_require__("./node_modules/@angular/material/esm5/slider.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__index_parking_list_filter_price_range_field_price_range_field_component__ = __webpack_require__("./src/app/index/parking-list-filter/price-range-field/price-range-field.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__superuser_configuration_providers_update_provider_update_provider_component__ = __webpack_require__("./src/app/superuser-configuration/providers/update-provider/update-provider.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__services_pager_service__ = __webpack_require__("./src/app/_services/pager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__angular_material_radio__ = __webpack_require__("./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__manager_manager_parking_list_delete_confirmation_dialog_delete_confirmation_dialog_component__ = __webpack_require__("./src/app/manager/manager-parking-list/delete-confirmation-dialog/delete-confirmation-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__client_profile_client_profile_component__ = __webpack_require__("./src/app/client-profile/client-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__client_profile_client_profile_edit_client_profile_edit_component__ = __webpack_require__("./src/app/client-profile/client-profile-edit/client-profile-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__client_profile_client_profile_edit_password_client_profile_edit_password_component__ = __webpack_require__("./src/app/client-profile/client-profile-edit-password/client-profile-edit-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__parking_detail_favorites_add_configm_dialog_favorites_add_configm_dialog_component__ = __webpack_require__("./src/app/parking-detail/favorites-add-configm-dialog/favorites-add-configm-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__index_parking_map_parking_map_component__ = __webpack_require__("./src/app/index/parking-map/parking-map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__statistic_statistic_component__ = __webpack_require__("./src/app/statistic/statistic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__statistic_parking_statistic_parking_statistic_component__ = __webpack_require__("./src/app/statistic/parking-statistic/parking-statistic.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























































/*export function tokenGetter() {
    return localStorage.getItem('access_token');
}*/
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_29__index_index_component__["a" /* IndexComponent */],
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__app_navbar_header_app_navbar_header_component__["a" /* AppNavbarHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_8__index_parking_list_parking_list_component__["a" /* ParkingListComponent */],
                __WEBPACK_IMPORTED_MODULE_12__superuser_configuration_superuser_configuration_component__["a" /* SuperuserConfigurationComponent */],
                __WEBPACK_IMPORTED_MODULE_13__parking_detail_parking_detail_component__["a" /* ParkingDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_12__superuser_configuration_superuser_configuration_component__["a" /* SuperuserConfigurationComponent */],
                __WEBPACK_IMPORTED_MODULE_15__clients_clients_component__["a" /* ClientsComponent */],
                __WEBPACK_IMPORTED_MODULE_16__clients_client_list_client_list_component__["a" /* ClientListComponent */],
                __WEBPACK_IMPORTED_MODULE_17__clients_client_edit_client_edit_component__["a" /* ClientEditComponent */],
                __WEBPACK_IMPORTED_MODULE_19__clients_client_list_client_item_client_item_component__["a" /* ClientItemComponent */],
                __WEBPACK_IMPORTED_MODULE_20__superuser_configuration_providers_provider_list_provider_list_component__["a" /* ProviderListComponent */],
                __WEBPACK_IMPORTED_MODULE_25__auth_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_27__auth_registration_registration_component__["a" /* RegistrationComponent */],
                __WEBPACK_IMPORTED_MODULE_21__superuser_configuration_providers_provider_detail_provider_detail_component__["a" /* ProviderDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_30__index_parking_list_filter_parking_list_filter_component__["a" /* ParkingListFilterComponent */],
                __WEBPACK_IMPORTED_MODULE_31__manager_manager_parking_configure_manager_parking_configure_component__["a" /* ManagerParkingConfigureComponent */],
                __WEBPACK_IMPORTED_MODULE_32__manager_manager_parking_list_manager_parking_list_component__["a" /* ManagerParkingListComponent */],
                __WEBPACK_IMPORTED_MODULE_22__superuser_configuration_providers_add_provider_add_provider_component__["a" /* AddProviderComponent */],
                __WEBPACK_IMPORTED_MODULE_23__clients_client_list_filter_pipe__["a" /* FilterPipe */],
                __WEBPACK_IMPORTED_MODULE_24__clients_client_detail_client_detail_component__["a" /* ClientDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_38__index_parking_list_filter_location_field_location_field_component__["a" /* LocationFieldComponent */],
                __WEBPACK_IMPORTED_MODULE_40__index_parking_list_filter_radius_field_radius_field_component__["a" /* RadiusFieldComponent */],
                __WEBPACK_IMPORTED_MODULE_42__index_parking_list_filter_price_range_field_price_range_field_component__["a" /* PriceRangeFieldComponent */],
                __WEBPACK_IMPORTED_MODULE_43__superuser_configuration_providers_update_provider_update_provider_component__["a" /* UpdateProviderComponent */],
                __WEBPACK_IMPORTED_MODULE_52__index_parking_map_parking_map_component__["a" /* ParkingMapComponent */],
                __WEBPACK_IMPORTED_MODULE_47__manager_manager_parking_list_delete_confirmation_dialog_delete_confirmation_dialog_component__["a" /* DeleteConfirmationDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_48__client_profile_client_profile_component__["a" /* ClientProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_49__client_profile_client_profile_edit_client_profile_edit_component__["a" /* ClientProfileEditComponent */],
                __WEBPACK_IMPORTED_MODULE_50__client_profile_client_profile_edit_password_client_profile_edit_password_component__["a" /* ClientProfileEditPasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_51__parking_detail_favorites_add_configm_dialog_favorites_add_configm_dialog_component__["b" /* FavoritesAddConfigmDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_53__statistic_statistic_component__["a" /* StatisticComponent */],
                __WEBPACK_IMPORTED_MODULE_54__statistic_parking_statistic_parking_statistic_component__["a" /* ParkingStatisticComponent */]
            ],
            imports: [
                /* AgmCoreModule.forRoot({
                     apiKey: 'AIzaSyDLIMvbPlry-zu4nLaSaYeAKW7Xjgum74I',
                     libraries: ['places']
                 }),*/
                __WEBPACK_IMPORTED_MODULE_34__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyB-ceTN3C1MJaUsAjPSKdXzGr11i-Ob7xU'
                }),
                /*JwtModule.forRoot({
                    config: {
                        tokenGetter: tokenGetter,
                        whitelistedDomains: ['localhost:8080'],
                        blacklistedRoutes: []
                    }
                }),*/
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_44__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_11__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_26__angular_forms__["k" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_26__angular_forms__["f" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_28__angular_materials_module__["a" /* AngularMaterialsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["q" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_28__angular_materials_module__["a" /* AngularMaterialsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["h" /* MatDividerModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["i" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_41__angular_material_slider__["b" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["p" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_46__angular_material_radio__["a" /* MatRadioModule */]
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_47__manager_manager_parking_list_delete_confirmation_dialog_delete_confirmation_dialog_component__["a" /* DeleteConfirmationDialogComponent */], __WEBPACK_IMPORTED_MODULE_51__parking_detail_favorites_add_configm_dialog_favorites_add_configm_dialog_component__["b" /* FavoritesAddConfigmDialogComponent */]],
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_33__interceptor_service__["a" /* InterceptorService */],
                    multi: true
                },
                __WEBPACK_IMPORTED_MODULE_9__parking_service__["a" /* ParkingService */],
                __WEBPACK_IMPORTED_MODULE_10__manager_manager_parking_service__["a" /* ManagerParkingService */],
                __WEBPACK_IMPORTED_MODULE_14__superuser_configuration_providers_provider_service__["a" /* ProviderService */],
                __WEBPACK_IMPORTED_MODULE_18__clients_client_service__["a" /* ClientService */],
                __WEBPACK_IMPORTED_MODULE_35__auth_login_login_service__["a" /* LoginService */],
                __WEBPACK_IMPORTED_MODULE_36__auth_registration_registration_service__["a" /* RegistrationService */],
                __WEBPACK_IMPORTED_MODULE_37__auth_token_token_storage__["a" /* TokenStorage */],
                __WEBPACK_IMPORTED_MODULE_39__service_ip_location_service__["a" /* IpLocationService */],
                __WEBPACK_IMPORTED_MODULE_45__services_pager_service__["a" /* PagerService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ".container-style {\n    font-family: -apple-system, system-ui, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;\n    margin-top: 15%;\n}\n.heading {\n    margin-bottom: 5%;\n}\n.submit {\n    margin-top: 2%;\n}\n.registration {\n    margin-top: 10%;\n}\n.customwidth {\n    width: 100%;\n}\n.cursor {\n    cursor: pointer;\n}\n"

/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class = \"container-fluid container-style\">\n    <form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\" class = \"formstyle offset-sm-1 col-sm-10 offset-md-2 col-md-8 offset-lg-3 col-lg-6\">\n        <h3 class=\"heading row offset-4\">Authorization</h3>\n        <div class = \"row\">\n            <mat-form-field class = \"customwidth\">\n                <input matInput placeholder=\"Enter email address\" formControlName=\"email\">\n                <mat-error *ngIf=\"emailControl.hasError('email') && !emailControl.hasError('required')\">\n                    Please enter a valid email address\n                </mat-error>\n                <mat-error *ngIf=\"emailControl.hasError('required')\">\n                    Email is <strong>required</strong>\n                </mat-error>\n            </mat-form-field>\n        </div>\n        <div class = \"row\">\n            <mat-form-field class = \"customwidth\">\n                <input matInput placeholder=\"Enter your password\" formControlName=\"password\" [type]=\"hide ? 'password' : 'text'\">\n                <mat-icon matSuffix (click)=\"hide = !hide\" class=\"cursor\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n                <mat-error *ngIf=\"passwordControl.hasError('minlength') && !passwordControl.hasError('required')\">\n                    Password must contain more than 6 characters\n                </mat-error>\n                <mat-error *ngIf=\"passwordControl.hasError('maxlength') && !passwordControl.hasError('required')\">\n                    Password must contain less than 16 characters\n                </mat-error>\n                <mat-error *ngIf=\"passwordControl.hasError('required')\">\n                    Password is <strong>required</strong>\n                </mat-error>\n            </mat-form-field>\n        </div>\n        <div class = \"row offset-5 submit\">\n            <button mat-button class=\"btn btn-success\" [disabled]=\"!loginForm.valid\">Submit</button>\n        </div>\n        <span class=\"registration row offset-3\">Do not have an account ? <a routerLink=\"/registration\"> Sign up!</a></span>\n    </form>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_service__ = __webpack_require__("./src/app/auth/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__token_token_storage__ = __webpack_require__("./src/app/auth/token/token-storage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, loginService, router) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.loginService = loginService;
        this.router = router;
        this.hide = true;
        this.emailControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].email,
        ]);
        this.passwordControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].minLength(6),
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].maxLength(16),
        ]);
        this.login = function () {
            _this.loginData = _this.loginForm.value;
            _this.loginService.signIn(_this.loginData)
                .subscribe(function (token) {
                __WEBPACK_IMPORTED_MODULE_4__token_token_storage__["a" /* TokenStorage */].saveToken(token.token);
                alert('You are successfully authorized');
                _this.router.navigate(['/']);
            }, function (error) {
                if (error instanceof __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["d" /* HttpErrorResponse */])
                    alert(error.error.response);
            });
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            email: this.emailControl,
            password: this.passwordControl
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__("./src/app/auth/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/login/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
        this.loginUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + '/auth/generate-token';
    }
    LoginService.prototype.signIn = function (loginData) {
        return this.http.post(this.loginUrl, loginData);
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/auth/registration/registration.component.css":
/***/ (function(module, exports) {

module.exports = ".container-style {\n    font-family: -apple-system, system-ui, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;\n    margin-top: 5%;\n}\n.heading {\n    margin-bottom: 5%;\n}\n.submit {\n    margin-top: 2%;\n}\n.customwidth {\n    width: 100%;\n}\n.cursor {\n    cursor: pointer;\n}"

/***/ }),

/***/ "./src/app/auth/registration/registration.component.html":
/***/ (function(module, exports) {

module.exports = "<div class = \"container-fluid container-style\">\n\n  <form [formGroup]=\"registrationForm\" (ngSubmit)=\"register()\" class = \"formstyle offset-sm-1 col-sm-10 offset-md-2 col-md-8 offset-lg-3 col-lg-6\">\n      <h3 class=\"heading row offset-4\">Registration</h3>\n      <div class = \"row\">\n          <mat-form-field class = \"customwidth\">\n              <input matInput placeholder=\"Enter email address\" formControlName=\"email\">\n              <mat-error *ngIf=\"emailControl.hasError('email') && !emailControl.hasError('required')\">\n                  Please enter a valid email address\n              </mat-error>\n              <mat-error *ngIf=\"emailControl.hasError('required')\">\n                  Email is <strong>required</strong>\n              </mat-error>\n          </mat-form-field>\n      </div>\n      <div class = \"row\">\n          <mat-form-field class = \"customwidth\">\n              <input matInput placeholder=\"Enter your firstname\" formControlName=\"firstname\">\n              <mat-error *ngIf=\"firstnameControl.hasError('maxlength') && !emailControl.hasError('required')\">\n                  String is too long\n              </mat-error>\n              <mat-error *ngIf=\"firstnameControl.hasError('required')\">\n                  Firstname is <strong>required</strong>\n              </mat-error>\n          </mat-form-field>\n      </div>\n      <div class = \"row\">\n          <mat-form-field class = \"customwidth\">\n              <input matInput placeholder=\"Enter your lastname\" formControlName=\"lastname\">\n              <mat-error *ngIf=\"lastnameControl.hasError('maxlength') && !emailControl.hasError('required')\">\n                  String is too long\n              </mat-error>\n              <mat-error *ngIf=\"lastnameControl.hasError('required')\">\n                  Lastname is <strong>required</strong>\n              </mat-error>\n          </mat-form-field>\n      </div>\n      <div class = \"row\">\n          <mat-form-field class = \"customwidth\">\n              <input matInput placeholder=\"Enter your password\" formControlName=\"password\" [type]=\"hide ? 'password' : 'text'\">\n              <mat-icon matSuffix (click)=\"hide = !hide\" class=\"cursor\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n              <mat-error *ngIf=\"passwordControl.hasError('minlength') && !passwordControl.hasError('required')\">\n                  Password must contain more than 6 characters\n              </mat-error>\n              <mat-error *ngIf=\"passwordControl.hasError('maxlength') && !passwordControl.hasError('required')\">\n                  Password must contain less than 16 characters\n              </mat-error>\n              <mat-error *ngIf=\"passwordControl.hasError('required')\">\n                  Password is <strong>required</strong>\n              </mat-error>\n          </mat-form-field>\n      </div>\n      <div class = \"row\">\n          <mat-form-field class = \"customwidth\">\n              <input matInput placeholder=\"Confirm your password\" formControlName=\"confirmPassword\" [type]=\"hide ? 'password' : 'text'\">\n              <mat-error *ngIf=\"confirmPasswordControl.hasError('MatchPassword') && !confirmPasswordControl.hasError('required')\">\n                  Passwords doesn`t match\n              </mat-error>\n              <mat-error *ngIf=\"confirmPasswordControl.hasError('minlength') && !confirmPasswordControl.hasError('required')\">\n                  Password must contain more than 6 characters\n              </mat-error>\n              <mat-error *ngIf=\"confirmPasswordControl.hasError('maxlength') && !confirmPasswordControl.hasError('required')\">\n                  Password must contain less than 16 characters\n              </mat-error>\n              <mat-error *ngIf=\"confirmPasswordControl.hasError('required')\">\n                  Password is <strong>required</strong>\n              </mat-error>\n          </mat-form-field>\n      </div>\n      <div class = \"row offset-5 submit\">\n          <button mat-button class=\"btn btn-success\" [disabled]=\"!registrationForm.valid\">Submit</button>\n      </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/auth/registration/registration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PasswordValidation */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registration_service__ = __webpack_require__("./src/app/auth/registration/registration.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PasswordValidation = /** @class */ (function () {
    function PasswordValidation() {
    }
    PasswordValidation.MatchPassword = function (AC) {
        var password = AC.get('password').value;
        var confirmPassword = AC.get('confirmPassword').value;
        if (password != confirmPassword) {
            AC.get('confirmPassword').setErrors({ MatchPassword: true });
        }
        else {
            return null;
        }
    };
    return PasswordValidation;
}());

var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(formBuilder, registrationService, router) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.registrationService = registrationService;
        this.router = router;
        this.hide = true;
        this.emailControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].email,
        ]);
        this.firstnameControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].maxLength(255)
        ]);
        this.lastnameControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].maxLength(255)
        ]);
        this.passwordControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].minLength(6),
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].maxLength(16),
        ]);
        this.confirmPasswordControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].minLength(6),
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].maxLength(16),
        ]);
        this.register = function () {
            _this.registrationData = _this.registrationForm.value;
            _this.registrationService.register(_this.registrationData).subscribe(function (info) {
                alert(info.response);
                _this.router.navigate(['/']);
            }, function (error) {
                if (error instanceof __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["d" /* HttpErrorResponse */]) {
                    alert(error.error.response);
                }
            });
        };
    }
    RegistrationComponent.prototype.ngOnInit = function () {
        this.registrationForm = this.formBuilder.group({
            email: this.emailControl,
            firstname: this.firstnameControl,
            lastname: this.lastnameControl,
            password: this.passwordControl,
            confirmPassword: this.confirmPasswordControl
        }, {
            validator: PasswordValidation.MatchPassword
        });
    };
    RegistrationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-registration',
            template: __webpack_require__("./src/app/auth/registration/registration.component.html"),
            styles: [__webpack_require__("./src/app/auth/registration/registration.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__registration_service__["a" /* RegistrationService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "./src/app/auth/registration/registration.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegistrationService = /** @class */ (function () {
    function RegistrationService(http) {
        this.http = http;
        this.registrationUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + '/auth/signup';
    }
    RegistrationService.prototype.register = function (data) {
        return this.http.post(this.registrationUrl, data);
    };
    RegistrationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], RegistrationService);
    return RegistrationService;
}());



/***/ }),

/***/ "./src/app/auth/token/token-storage.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TokenStorage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth0_angular_jwt__ = __webpack_require__("./node_modules/@auth0/angular-jwt/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TOKEN_KEY = 'access_token';
var helper = new __WEBPACK_IMPORTED_MODULE_1__auth0_angular_jwt__["a" /* JwtHelperService */]();
var TokenStorage = /** @class */ (function () {
    function TokenStorage() {
    }
    TokenStorage_1 = TokenStorage;
    TokenStorage.signOut = function () {
        window.localStorage.removeItem(TOKEN_KEY);
        window.localStorage.clear();
    };
    TokenStorage.saveToken = function (token) {
        window.localStorage.removeItem(TOKEN_KEY);
        window.localStorage.setItem(TOKEN_KEY, token);
    };
    TokenStorage.getToken = function () {
        return window.localStorage.getItem(TOKEN_KEY);
    };
    TokenStorage.getRole = function () {
        if (!TokenStorage_1.hasToken()) {
            return '';
        }
        return TokenStorage_1.decodeToken().authorities[0].authority;
    };
    TokenStorage.getUsername = function () {
        return TokenStorage_1.decodeToken().username;
    };
    TokenStorage.decodeToken = function () {
        console.log(helper.decodeToken(TokenStorage_1.getToken()));
        return helper.decodeToken(TokenStorage_1.getToken());
    };
    TokenStorage.refresh = function () {
        return null;
    };
    TokenStorage.hasToken = function () {
        return TokenStorage_1.getToken() != null;
    };
    TokenStorage = TokenStorage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], TokenStorage);
    return TokenStorage;
    var TokenStorage_1;
}());



/***/ }),

/***/ "./src/app/client-profile/client-profile-edit-password/client-profile-edit-password.component.css":
/***/ (function(module, exports) {

module.exports = ".container-style {\n    font-family: -apple-system, system-ui, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;\n    margin-top: 5%;\n}\n\n.heading {\n    margin-bottom: 5%;\n}\n\n.submit {\n    margin-top: 2%;\n}\n\n.customwidth {\n    width: 100%;\n}\n\n.cursor {\n    cursor: pointer;\n}"

/***/ }),

/***/ "./src/app/client-profile/client-profile-edit-password/client-profile-edit-password.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid container-style\">\n\n    <form [formGroup]=\"passwordForm\" (ngSubmit)=\"updatePassword()\"\n          class=\"formstyle offset-sm-1 col-sm-10 offset-md-2 col-md-8 offset-lg-3 col-lg-6\">\n        <h3 class=\"heading row offset-4\">Edit Password</h3>\n        <div class=\"row\">\n            <mat-form-field class=\"customwidth\">\n                <input matInput placeholder=\"Enter your password\" formControlName=\"password\"\n                       [type]=\"hide ? 'password' : 'text'\">\n                <mat-icon matSuffix (click)=\"hide = !hide\" class=\"cursor\">{{hide ? 'visibility' : 'visibility_off'}}\n                </mat-icon>\n                <mat-error *ngIf=\"passwordControl.hasError('minlength') && !passwordControl.hasError('required')\">\n                    Password must contain more than 6 characters\n                </mat-error>\n                <mat-error *ngIf=\"passwordControl.hasError('maxlength') && !passwordControl.hasError('required')\">\n                    Password must contain less than 16 characters\n                </mat-error>\n                <mat-error *ngIf=\"passwordControl.hasError('required')\">\n                    Password is <strong>required</strong>\n                </mat-error>\n            </mat-form-field>\n        </div>\n        <div class=\"row\">\n            <mat-form-field class=\"customwidth\">\n                <input matInput placeholder=\"Confirm your password\" formControlName=\"confirmPassword\"\n                       [type]=\"hide ? 'password' : 'text'\">\n                <mat-error\n                        *ngIf=\"confirmPasswordControl.hasError('MatchPassword') && !confirmPasswordControl.hasError('required')\">\n                    Passwords doesn`t match\n                </mat-error>\n                <mat-error\n                        *ngIf=\"confirmPasswordControl.hasError('minlength') && !confirmPasswordControl.hasError('required')\">\n                    Password must contain more than 6 characters\n                </mat-error>\n                <mat-error\n                        *ngIf=\"confirmPasswordControl.hasError('maxlength') && !confirmPasswordControl.hasError('required')\">\n                    Password must contain less than 16 characters\n                </mat-error>\n                <mat-error *ngIf=\"confirmPasswordControl.hasError('required')\">\n                    Password is <strong>required</strong>\n                </mat-error>\n            </mat-form-field>\n        </div>\n        <div class=\"row offset-5 submit\">\n            <button mat-button class=\"btn btn-success\" [disabled]=\"!passwordForm.valid\">Submit</button>\n        </div>\n        <a id=\"aBack\" routerLink (click)=\"goToProfileEdit()\">(Back to profile)</a>\n    </form>\n</div>\n"

/***/ }),

/***/ "./src/app/client-profile/client-profile-edit-password/client-profile-edit-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PasswordValidation */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientProfileEditPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__clients_client_service__ = __webpack_require__("./src/app/clients/client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PasswordValidation = /** @class */ (function () {
    function PasswordValidation() {
    }
    PasswordValidation.MatchPassword = function (AC) {
        var password = AC.get('password').value;
        var confirmPassword = AC.get('confirmPassword').value;
        if (password != confirmPassword) {
            AC.get('confirmPassword').setErrors({ MatchPassword: true });
        }
        else {
            return null;
        }
    };
    return PasswordValidation;
}());

var ClientProfileEditPasswordComponent = /** @class */ (function () {
    function ClientProfileEditPasswordComponent(formBuilder, clientService, router) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.clientService = clientService;
        this.router = router;
        this.hide = true;
        this.passwordControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].minLength(6),
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].maxLength(16),
        ]);
        this.confirmPasswordControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].minLength(6),
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].maxLength(16),
        ]);
        this.updatePassword = function () {
            _this.passwordData = _this.passwordForm.value;
            _this.clientService.updateClientPassword(_this.passwordData).subscribe(function (info) {
                alert(info.response);
                _this.router.navigate(['/']);
            }, function (error) {
                if (error instanceof __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["d" /* HttpErrorResponse */]) {
                    alert(error.error.response);
                }
            });
        };
    }
    ClientProfileEditPasswordComponent.prototype.ngOnInit = function () {
        this.passwordForm = this.formBuilder.group({
            password: this.passwordControl,
            confirmPassword: this.confirmPasswordControl
        }, {
            validator: PasswordValidation.MatchPassword
        });
    };
    ClientProfileEditPasswordComponent.prototype.goToProfileEdit = function () {
        this.router.navigate(['profile/edit']);
    };
    ClientProfileEditPasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-client-profile-edit-password',
            template: __webpack_require__("./src/app/client-profile/client-profile-edit-password/client-profile-edit-password.component.html"),
            styles: [__webpack_require__("./src/app/client-profile/client-profile-edit-password/client-profile-edit-password.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__clients_client_service__["a" /* ClientService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], ClientProfileEditPasswordComponent);
    return ClientProfileEditPasswordComponent;
}());



/***/ }),

/***/ "./src/app/client-profile/client-profile-edit/client-profile-edit.component.css":
/***/ (function(module, exports) {

module.exports = ".container-style {\n    font-family: -apple-system, system-ui, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;\n    margin-top: 5%;\n}\n\n.heading {\n    margin-bottom: 5%;\n    font-size: 1.4em;\n}\n\n.mat-form-field {\n    min-width: 100%;\n}\n\ninput {\n    margin: 1%;\n}\n\nh6 {\n    margin-top: 3%;\n    margin-left: auto;\n    margin-right: auto;\n    color: darkred;\n}\n\n#aBack {\n    display: block;\n    margin-left: 38%;\n    margin-top: 5%;\n}\n\n.mat-form-field {\n    font-size: 0.8em;\n}\n\n\n\n\n"

/***/ }),

/***/ "./src/app/client-profile/client-profile-edit/client-profile-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid container-style\">\n    <div>\n        <form novalidate #clientForm=\"ngForm\"\n              class=\"formstyle offset-sm-1 col-sm-10 offset-md-2 col-md-8 offset-lg-3 col-lg-6\">\n            <h3 class=\"heading row offset-4\">Cliet Edit Form</h3>\n\n\n            <div class=\"row\">\n                <label for=\"image\">Avatar</label>\n                <input type=\"file\" id=\"image\" accept=\"image/jpeg\" (change)=\"onFileChange($event)\" #fileInput>\n                <button type=\"button\" class=\"btn btn-sm btn-default\" (click)=\"clearFile()\">clear file</button>\n            </div>\n\n\n            <div class=\"row\">\n                <input type=\"text\" name=\"firstName\" [(ngModel)]=\"client.firstName\" class=\"form-control\" required\n                       minlength=\"3\" placeholder=\"First Name\">\n            </div>\n\n            <div class=\"row\">\n                <input type=\"text\" name=\"lastName\" [(ngModel)]=\"client.lastName\" class=\"form-control\" required\n                       minlength=\"3\" placeholder=\"Last Name\">\n            </div>\n\n            <div class=\"row\">\n                <input type=\"email\" name=\"email\" [(ngModel)]=\"client.email\" class=\"form-control\" readonly>\n            </div>\n\n            <div class=\"row\"\n                 *ngIf=\"client.provider!='no provider' && client.role!='SUPERUSER' && client.role!='DRIVER'\">\n                <h6>Current provider: {{client.provider}}</h6>\n            </div>\n\n            <div class=\"row\">\n                <h6>Current role: <span\n                        [ngStyle]=\"{'color': client.role === 'SUPERUSER' ? 'Chocolate' : 'BlueViolet '}\">{{client.role}}</span>\n                </h6>\n            </div>\n\n\n            <div class=\"row offset-5 submit\">\n                <button mat-button class=\"btn btn-outline-primary\"\n                        type=\"submit\"\n                        [disabled]=\"!clientForm.valid\"\n                        (click)=\"udateProfile()\">\n                    Save\n                </button>\n                <button mat-button class=\"btn btn-outline-primary\"\n                        (click)=\"goToPasswordEdit()\">\n                    Edit Password\n                </button>\n            </div>\n            <a id=\"aBack\" routerLink (click)=\"goToProfile()\">(Back to profile)</a>\n        </form>\n    </div>\n\n\n</div>\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/client-profile/client-profile-edit/client-profile-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientProfileEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__clients_client_service__ = __webpack_require__("./src/app/clients/client.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClientProfileEditComponent = /** @class */ (function () {
    function ClientProfileEditComponent(route, clientService, router) {
        this.route = route;
        this.clientService = clientService;
        this.router = router;
    }
    ClientProfileEditComponent.prototype.ngOnInit = function () {
        this.getClientProfile();
    };
    ClientProfileEditComponent.prototype.getClientProfile = function () {
        var _this = this;
        this.clientService.getClientProfile()
            .subscribe(function (client) { return _this.client = client; });
    };
    ClientProfileEditComponent.prototype.udateProfile = function () {
        console.log(this.client.email);
        this.clientService.updateClientProfile(parseInt(this.client.id), this.client)
            .subscribe(function (data) {
            alert('Client was updated successfully.');
        });
    };
    ClientProfileEditComponent.prototype.goToProfile = function () {
        this.router.navigate(['profile']);
    };
    ClientProfileEditComponent.prototype.onFileChange = function (event) {
        var _this = this;
        var reader = new FileReader();
        if (event.target.files && event.target.files.length > 0) {
            var file = event.target.files[0];
            reader.readAsDataURL(file);
            reader.onload = function () {
                _this.client.image = reader.result.split(',')[1];
                console.log(_this.client.image);
            };
        }
    };
    ClientProfileEditComponent.prototype.clearFile = function () {
        this.client.image = null;
        this.fileInput.nativeElement.value = '';
    };
    ClientProfileEditComponent.prototype.goToPasswordEdit = function () {
        this.router.navigate(['profile/edit/password']);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('fileInput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */])
    ], ClientProfileEditComponent.prototype, "fileInput", void 0);
    ClientProfileEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-client-profile-edit',
            template: __webpack_require__("./src/app/client-profile/client-profile-edit/client-profile-edit.component.html"),
            styles: [__webpack_require__("./src/app/client-profile/client-profile-edit/client-profile-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__clients_client_service__["a" /* ClientService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], ClientProfileEditComponent);
    return ClientProfileEditComponent;
}());



/***/ }),

/***/ "./src/app/client-profile/client-profile.component.css":
/***/ (function(module, exports) {

module.exports = "span {\n    color: #54456f;\n    font-weight: bold;\n}\n\n#role {\n    color: coral;\n}\n\n#prov:hover::after {\n    color: #6610f2;\n    content: \"go to providers details\";\n}"

/***/ }),

/***/ "./src/app/client-profile/client-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <br/>\n    <mat-card class=\"card offset-sm-1 col-sm-10 offset-md-1 col-md-10 offset-lg-1 col-lg-10\">\n        <mat-card-header>\n            <div style=\"min-width: 70%;\">\n                <div>\n                    <img src=\"data:image/JPEG;base64,{{client.image}}\" style=\"width: 200px;\">\n                    <mat-card-title><span>ID:</span> {{client.id}}\n                    </mat-card-title>\n                    <mat-card-title id=\"role\"><span>Role:</span> {{client.role}}\n                    </mat-card-title>\n                    <mat-card-title><span>Client name:</span> {{client.firstName}} {{client.lastName}}\n                    </mat-card-title>\n                    <mat-card-title><span>Email:</span> {{client.email}}</mat-card-title>\n                    <mat-card-title *ngIf=\"client.favoritesNames.length!=0\">\n                        <span>Favorites parkings: </span>\n                        <span *ngFor=\"let favoriteName of client.favoritesNames\">{{favoriteName}}, </span>\n                    </mat-card-title>\n                </div>\n            </div>\n            <div style=\"width: 100%\"></div>\n        </mat-card-header>\n\n        <mat-card-actions align=\"right\">\n            <button mat-button (click)=\"goToProfileEdit()\" color=\"warn\">Go to edit form</button>\n        </mat-card-actions>\n    </mat-card>\n</div>\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/client-profile/client-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__clients_client_service__ = __webpack_require__("./src/app/clients/client.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClientProfileComponent = /** @class */ (function () {
    function ClientProfileComponent(route, clientService, router) {
        this.route = route;
        this.clientService = clientService;
        this.router = router;
        this.showProviderDetails = false;
    }
    ClientProfileComponent.prototype.ngOnInit = function () {
        this.getClientProfile();
    };
    ClientProfileComponent.prototype.getClientProfile = function () {
        var _this = this;
        this.clientService.getClientProfile()
            .subscribe(function (client) { return _this.client = client; });
    };
    ClientProfileComponent.prototype.goToProfileEdit = function () {
        this.router.navigate(['profile/edit']);
    };
    ClientProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-client-profile',
            template: __webpack_require__("./src/app/client-profile/client-profile.component.html"),
            styles: [__webpack_require__("./src/app/client-profile/client-profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__clients_client_service__["a" /* ClientService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], ClientProfileComponent);
    return ClientProfileComponent;
}());



/***/ }),

/***/ "./src/app/clients/client-detail/client-detail.component.css":
/***/ (function(module, exports) {

module.exports = "span {\n    color: #54456f;\n    font-weight:bold;\n}\n\n#role{\n    color: coral;\n}\n\n#prov:hover::after {\n    color: #6610f2;\n    content: \"go to providers details\";\n}"

/***/ }),

/***/ "./src/app/clients/client-detail/client-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <br/>\n    <br/>\n    <mat-card class=\"card offset-sm-1 col-sm-10 offset-md-1 col-md-10 offset-lg-1 col-lg-10\">\n        <mat-card-header>\n            <div style=\"min-width: 70%;\">\n                <div>\n                    <mat-card-title><span>ID:</span> {{client.id}}\n                    </mat-card-title>\n                    <mat-card-title id=\"role\"><span>Role:</span> {{client.role}}\n                    </mat-card-title>\n                    <mat-card-title><span>Client name:</span> {{client.firstName}} {{client.lastName}}\n                    </mat-card-title>\n                    <mat-card-title><span>Email:</span> {{client.email}}</mat-card-title>\n                    <mat-card-title *ngIf=\"client.providerName!='no provider'\" (click)=\"goToProvidersDetails()\" id=\"prov\">\n                        <span>Provider: </span>{{client.providerName}}\n                    </mat-card-title>\n                    <mat-card-title><span>Favorites parkings: </span><span\n                            *ngFor=\"let favoriteName of client.favoritesNames\">{{favoriteName}}, </span>\n                    </mat-card-title>\n                </div>\n            </div>\n            <div style=\"width: 100%\"></div>\n        </mat-card-header>\n\n        <mat-card-actions align=\"right\">\n            <button mat-button (click)=\"goToClientsList()\" color=\"primary\">Go to clients list</button>\n            <button mat-button (click)=\"goToClientEditForm()\" color=\"warn\">Go to edit form</button>\n\n        </mat-card-actions>\n    </mat-card>\n</div>\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/clients/client-detail/client-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__client_service__ = __webpack_require__("./src/app/clients/client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClientDetailComponent = /** @class */ (function () {
    function ClientDetailComponent(route, clientService, router) {
        this.route = route;
        this.clientService = clientService;
        this.router = router;
        this.showProviderDetails = false;
    }
    ClientDetailComponent.prototype.ngOnInit = function () {
        this.getClientById();
    };
    ClientDetailComponent.prototype.getClientById = function () {
        var _this = this;
        var id = +parseInt(this.route.snapshot.paramMap.get('id'));
        this.clientService.getClientDetail(id)
            .subscribe(function (client) { return _this.client = client; });
    };
    ClientDetailComponent.prototype.seeProviderDetails = function () {
        this.showProviderDetails = !this.showProviderDetails;
    };
    ClientDetailComponent.prototype.goToClientsList = function () {
        this.router.navigate(['configuration/clients']);
    };
    ClientDetailComponent.prototype.goToClientEditForm = function () {
        this.router.navigate(['configuration/clients/edit/', this.client.id]);
    };
    ClientDetailComponent.prototype.goToProvidersDetails = function () {
        this.router.navigate(['configuration/providers/', this.client.providersId]);
    };
    ClientDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-client-detail',
            template: __webpack_require__("./src/app/clients/client-detail/client-detail.component.html"),
            styles: [__webpack_require__("./src/app/clients/client-detail/client-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__client_service__["a" /* ClientService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], ClientDetailComponent);
    return ClientDetailComponent;
}());



/***/ }),

/***/ "./src/app/clients/client-edit/client-edit.component.css":
/***/ (function(module, exports) {

module.exports = ".container-style {\n    font-family: -apple-system, system-ui, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;\n    margin-top: 5%;\n}\n\n.heading {\n    margin-bottom: 5%;\n    font-size: 1.4em;\n}\n\n.mat-form-field {\n    min-width: 100%;\n}\n\ninput {\n    margin: 1%;\n}\n\nh6 {\n    margin-top: 3%;\n    margin-left: auto;\n    margin-right: auto;\n    color: darkred;\n}\n\n#aBack {\n    display: block;\n    margin-left: 38%;\n    margin-top: 5%;\n}\n\n.mat-form-field{\n    font-size: 0.8em;\n}\n\n\n\n\n"

/***/ }),

/***/ "./src/app/clients/client-edit/client-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid container-style\">\n    <form novalidate #clientForm=\"ngForm\"\n          class=\"formstyle offset-sm-1 col-sm-10 offset-md-2 col-md-8 offset-lg-3 col-lg-6\">\n        <h3 class=\"heading row offset-4\">Cliet Edit Form</h3>\n\n        <div class=\"row\">\n            <input type=\"text\" name=\"firstName\" [(ngModel)]=\"client.firstName\" class=\"form-control\" required\n                   minlength=\"3\" placeholder=\"First Name\">\n        </div>\n\n        <div class=\"row\">\n            <input type=\"text\" name=\"lastName\" [(ngModel)]=\"client.lastName\" class=\"form-control\" required\n                   minlength=\"3\" placeholder=\"Last Name\">\n        </div>\n\n        <div class=\"row\">\n            <input type=\"email\" name=\"email\" [(ngModel)]=\"client.email\" class=\"form-control\" readonly>\n        </div>\n\n        <div class=\"row\" *ngIf=\"client.providerName!='no provider' && client.role!='SUPERUSER' && client.role!='DRIVER'\">\n            <h6>Current provider: {{client.providerName}}</h6>\n        </div>\n\n        <div class=\"row\">\n            <h6>Current role: <span [ngStyle]=\"{'color': client.role === 'SUPERUSER' ? 'Chocolate' : 'BlueViolet '}\">{{client.role}}</span>\n            </h6>\n        </div>\n\n        <mat-form-field>\n            <mat-select [(value)]=\"selectedRole\" placeholder=\"select role\">\n                <mat-option *ngFor=\"let role of roles\" [value]=\"role.name\">\n                    {{ role.name }}\n                </mat-option>\n            </mat-select>\n        </mat-form-field>\n\n        <mat-form-field *ngIf=\"selectedRole=='PROVIDER_MANAGER'\">\n            <mat-select [(value)]=\"selectedProvidersId\" placeholder=\"select provider\">\n                <mat-option *ngFor=\"let provider of providers\" [value]=\"provider.id\">\n                    {{ provider.name }}\n                </mat-option>\n            </mat-select>\n        </mat-form-field>\n\n        <div class=\"row offset-5 submit\">\n            <button mat-button class=\"btn btn-outline-primary\"\n                    type=\"submit\"\n                    [disabled]=\"!clientForm.valid\"\n                    (click)=\"udateClientById()\">\n                Save\n            </button>\n        </div>\n        <a id=\"aBack\" routerLink (click)=\"goToClientList()\">(Go to clients list)</a>\n    </form>\n</div>\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/clients/client-edit/client-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__client_service__ = __webpack_require__("./src/app/clients/client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClientEditComponent = /** @class */ (function () {
    function ClientEditComponent(route, clientService, router) {
        this.route = route;
        this.clientService = clientService;
        this.router = router;
    }
    ClientEditComponent.prototype.ngOnInit = function () {
        this.getClientById();
        this.getRoles();
        this.getProviders();
    };
    ClientEditComponent.prototype.getClientById = function () {
        var _this = this;
        var id = +parseInt(this.route.snapshot.paramMap.get('id'));
        this.id = id;
        this.clientService.getClientDetail(id)
            .subscribe(function (client) { return _this.client = client; });
    };
    ClientEditComponent.prototype.getProviders = function () {
        var _this = this;
        this.clientService.getProviders()
            .subscribe(function (providers) { return _this.providers = providers; });
    };
    ClientEditComponent.prototype.udateClientById = function () {
        if (this.selectedRole != null) {
            this.client.role = this.selectedRole;
        }
        if (this.selectedProvidersId != null) {
            this.client.providersId = this.selectedProvidersId;
        }
        if (this.selectedRole == 'PROVIDER_MANAGER' && this.selectedProvidersId == null) {
            alert('pleace, select provider');
        }
        else {
            if (this.selectedRole == 'DRIVER' || this.selectedRole == 'SUPERUSER') {
                this.client.providersId = 0;
            }
            this.clientService.updateClient(this.id, this.client)
                .subscribe(function (data) {
                alert('Client was updated successfully.');
            });
        }
    };
    ClientEditComponent.prototype.goToClientList = function () {
        this.router.navigate(['configuration/clients']);
    };
    ClientEditComponent.prototype.getRoles = function () {
        this.roles = this.clientService.getRoles();
    };
    ClientEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-client-edit',
            template: __webpack_require__("./src/app/clients/client-edit/client-edit.component.html"),
            styles: [__webpack_require__("./src/app/clients/client-edit/client-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__client_service__["a" /* ClientService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], ClientEditComponent);
    return ClientEditComponent;
}());



/***/ }),

/***/ "./src/app/clients/client-list/client-item/client-item.component.css":
/***/ (function(module, exports) {

module.exports = ".button {\n    display: block;\n    margin: 2%;\n    color: #54456f;\n}\n\n#clientItem {\n    margin: 3%;\n}\n\n.mat-button {\n    font-size: 12px;\n}\n"

/***/ }),

/***/ "./src/app/clients/client-list/client-item/client-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"clientItem\">\n    <mat-card class=\"card offset-sm-1 col-sm-10 offset-md-1 col-md-10 offset-lg-1 col-lg-10\">\n        <mat-card-header>\n            <div style=\"min-width: 70%;\">\n                <div>\n                    <mat-card-title>{{client.firstName}} {{client.lastName}}\n                    </mat-card-title>\n                    <mat-card-subtitle\n                            [ngStyle]=\"{'color': client.role === 'SUPERUSER' ? 'orange' : 'green'}\">\n                        {{client.role}}\n                    </mat-card-subtitle>\n                </div>\n            </div>\n            <div style=\"width: 100%\"></div>\n        </mat-card-header>\n\n        <mat-card-actions align=\"right\">\n            <button mat-button routerLink='{{client.id}}' color=\"primary\">MORE INFO</button>\n            <button mat-button routerLink='edit/{{client.id}}' color=\"warn\">\n                EDIT\n            </button>\n        </mat-card-actions>\n    </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/clients/client-list/client-item/client-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_view_client__ = __webpack_require__("./src/app/model/view/client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClientItemComponent = /** @class */ (function () {
    function ClientItemComponent() {
    }
    ClientItemComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__model_view_client__["a" /* Client */])
    ], ClientItemComponent.prototype, "client", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Input */])(),
        __metadata("design:type", Number)
    ], ClientItemComponent.prototype, "index", void 0);
    ClientItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-client-item',
            template: __webpack_require__("./src/app/clients/client-list/client-item/client-item.component.html"),
            styles: [__webpack_require__("./src/app/clients/client-list/client-item/client-item.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ClientItemComponent);
    return ClientItemComponent;
}());



/***/ }),

/***/ "./src/app/clients/client-list/client-list.component.css":
/***/ (function(module, exports) {

module.exports = ".button {\n    display: block;\n    margin: 2%;\n    color: #54456f;\n}\n\n.pagination {\n    margin-left: auto;\n    margin-right: auto;\n}"

/***/ }),

/***/ "./src/app/clients/client-list/client-list.component.html":
/***/ (function(module, exports) {

module.exports = "<h4 class=\"text-center\">Clients list</h4>\n<div class=\"row\">\n    <div class=\"col-md-3\">\n        <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"search\" #searchBox id=\"search-box\"\n                   (keyup)=\"findClientsFromBackEnd(searchBox.value)\">\n        </mat-form-field>\n        <div>\n            <button mat-button class=\"button\"\n                    (click)=\"findAllClients()\">Show all clients\n            </button>\n            <button mat-button class=\"button\"\n                    (click)=\"findDrivers()\">Find drivers\n            </button>\n            <button mat-button class=\"button\"\n                    (click)=\"findProviderManagers()\">Find managers\n            </button>\n            <button mat-button class=\"button\"\n                    (click)=\"findSuperusers()\">Find superusers\n            </button>\n        </div>\n    </div>\n    <div class=\"col-md-6\">\n        <ul>\n            <app-client-item *ngFor=\"let client of pagedClientItems\" [client]=\"client\">\n            </app-client-item>\n            <div class=\"pagination\">\n                <ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination\">\n                    <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === 1}\">\n                        <a class=\"page-link\" (click)=\"setPage(1)\">First</a>\n                    </li>\n                    <li class=\"page-item\" *ngFor=\"let page of pager.pages\"\n                        [ngClass]=\"{active:pager.currentPage === page}\">\n                        <a class=\"page-link\" (click)=\"setPage(page)\">{{page}}</a>\n                    </li>\n                    <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\n                        <a class=\"page-link\" (click)=\"setPage(pager.totalPages)\">Last</a>\n                    </li>\n                </ul>\n            </div>\n        </ul>\n    </div>\n    <div class=\"col-md-2\">\n        <p><b>Matches found:</b> {{allClients}}</p>\n    </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/clients/client-list/client-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__client_service__ = __webpack_require__("./src/app/clients/client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_pager_service__ = __webpack_require__("./src/app/_services/pager.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ClientListComponent = /** @class */ (function () {
    function ClientListComponent(clientService, route, pagerService) {
        this.clientService = clientService;
        this.route = route;
        this.pagerService = pagerService;
        // pager object
        this.pager = {};
    }
    ClientListComponent.prototype.ngOnInit = function () {
        this.findAllClients();
    };
    ClientListComponent.prototype.setPage = function (page) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        if (this.clients.length > 0) {
            // get pager object from service
            this.pager = this.pagerService.getPager(this.clients.length, page);
            // get current page of items
            this.pagedClientItems = this.clients.slice(this.pager.startIndex, this.pager.endIndex + 1);
        }
        else {
            this.pagedClientItems = this.clients;
        }
        this.allClients = this.clients.length;
    };
    ClientListComponent.prototype.findAllClients = function () {
        var _this = this;
        this.clientService.getAllClients()
            .subscribe(function (clients) {
            _this.clients = clients;
            _this.setPage(1);
        });
    };
    ClientListComponent.prototype.findLimitNumberOfClients = function () {
        var _this = this;
        this.clientService.getLimitNumberOfClients()
            .subscribe(function (clients) {
            _this.clients = clients;
            _this.setPage(1);
        });
    };
    ClientListComponent.prototype.findClientsFromBackEnd = function (searchInput) {
        var _this = this;
        if (this.inputInSearchFieldIsNull(searchInput)) {
            this.findAllClients();
        }
        else {
            this.clientService.getClientsByAnyMatch(searchInput)
                .subscribe(function (clients) {
                _this.clients = clients;
                _this.setPage(1);
            });
        }
    };
    ClientListComponent.prototype.inputInSearchFieldIsNull = function (searchInput) {
        return searchInput == "";
    };
    ClientListComponent.prototype.findDrivers = function () {
        var _this = this;
        this.clientService.getClientsByRole("0")
            .subscribe(function (clients) {
            _this.clients = clients;
            _this.setPage(1);
        });
    };
    ClientListComponent.prototype.findProviderManagers = function () {
        var _this = this;
        this.clientService.getClientsByRole("1")
            .subscribe(function (clients) {
            _this.clients = clients;
            _this.setPage(1);
        });
    };
    ClientListComponent.prototype.findSuperusers = function () {
        var _this = this;
        this.clientService.getClientsByRole("2")
            .subscribe(function (clients) {
            _this.clients = clients;
            _this.setPage(1);
        });
    };
    ClientListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-client-list',
            template: __webpack_require__("./src/app/clients/client-list/client-list.component.html"),
            styles: [__webpack_require__("./src/app/clients/client-list/client-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__client_service__["a" /* ClientService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__services_pager_service__["a" /* PagerService */]])
    ], ClientListComponent);
    return ClientListComponent;
}());



/***/ }),

/***/ "./src/app/clients/client-list/filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, searchText) {
        if (!items)
            return [];
        if (!searchText)
            return items;
        searchText = searchText.toLowerCase();
        return items.filter(function (it) {
            return it.lastName.toLocaleLowerCase().includes(searchText)
                || it.firstName.toLocaleLowerCase().includes(searchText)
                || it.email.toLocaleLowerCase().includes(searchText)
                || it.role.toLocaleLowerCase().includes(searchText);
        });
    };
    FilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/clients/client.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mock_roles__ = __webpack_require__("./src/app/clients/mock-roles.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ClientService = /** @class */ (function () {
    function ClientService(http) {
        this.http = http;
        this.clientsUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + '/clients';
        this.clientProfile = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + '/profile';
    }
    ClientService.prototype.getAllClients = function () {
        return this.http.get(this.clientsUrl);
    };
    ClientService.prototype.getLimitNumberOfClients = function () {
        return this.http.get(this.clientsUrl + '/clientslimit');
    };
    ClientService.prototype.getClientsByAnyMatch = function (input) {
        return this.http.get(this.clientsUrl + '/findclients/' + input);
    };
    ClientService.prototype.getClientsByRole = function (input) {
        return this.http.get(this.clientsUrl + '/findbyrole/' + input);
    };
    ClientService.prototype.getClientDetail = function (id) {
        return this.http.get(this.clientsUrl + '/' + id);
    };
    ClientService.prototype.updateClient = function (id, client) {
        return this.http.post(this.clientsUrl + '/update/' + id, client);
    };
    ClientService.prototype.getProviders = function () {
        return this.http.get(this.clientsUrl + '/getproviders');
    };
    ClientService.prototype.getProviderByClientId = function (id) {
        return this.http.get(this.clientsUrl + '/findprovider/' + id);
    };
    ClientService.prototype.getRoles = function () {
        return __WEBPACK_IMPORTED_MODULE_2__mock_roles__["a" /* ROLES */];
    };
    ClientService.prototype.getClientProfile = function () {
        return this.http.get(this.clientProfile);
    };
    ClientService.prototype.updateClientProfile = function (id, client) {
        return this.http.post(this.clientProfile + '/update/' + id, client);
    };
    ClientService.prototype.updateClientPassword = function (data) {
        return this.http.post(this.clientProfile + '/update/password', data);
    };
    ClientService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], ClientService);
    return ClientService;
}());



/***/ }),

/***/ "./src/app/clients/clients.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/clients/clients.component.html":
/***/ (function(module, exports) {

module.exports = "<app-client-list></app-client-list>\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/clients/clients.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClientsComponent = /** @class */ (function () {
    function ClientsComponent() {
    }
    ClientsComponent.prototype.ngOnInit = function () {
    };
    ClientsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-clients',
            template: __webpack_require__("./src/app/clients/clients.component.html"),
            styles: [__webpack_require__("./src/app/clients/clients.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ClientsComponent);
    return ClientsComponent;
}());



/***/ }),

/***/ "./src/app/clients/mock-roles.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROLES; });
var ROLES = [
    { name: 'DRIVER' },
    { name: 'PROVIDER_MANAGER' },
    { name: 'SUPERUSER' }
];


/***/ }),

/***/ "./src/app/index/index.component.css":
/***/ (function(module, exports) {

module.exports = ".parent {\n    /*background-color: rgb(252, 252, 252);*/\n    z-index: 1030;\n}\n\n.filter {\n    position: fixed;\n    right: 0;\n    bottom: 0;\n    left: 0;\n}\n\n.progress-bar {\n    margin-bottom: 10px;\n}\n\napp-parking-list {\n    height: 100%;\n}"

/***/ }),

/***/ "./src/app/index/index.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"parent\">\n    <app-parking-list #parkingList></app-parking-list>\n    <div class=\"filter offset-sm-1 col-sm-10 offset-md-1 col-md-10 offset-lg-1 col-lg-10\">\n        <mat-progress-bar #progressbar *ngIf=\"progressBarVisible\" [color]=\"progressBarColor\" [mode]=\"progressBarMode\" class=\"progress-bar\" mode=\"query\" [value]=\"100\"></mat-progress-bar>\n        <app-parking-list-filter #filter></app-parking-list-filter>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/index/index.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parking_list_filter_parking_list_filter_component__ = __webpack_require__("./src/app/index/parking-list-filter/parking-list-filter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__parking_service__ = __webpack_require__("./src/app/parking.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__parking_list_parking_list_component__ = __webpack_require__("./src/app/index/parking-list/parking-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var IndexComponent = /** @class */ (function () {
    function IndexComponent(parkingService, changeDetector) {
        this.parkingService = parkingService;
        this.changeDetector = changeDetector;
        this.parkings = [];
        this.progressBarVisible = false;
        this.progressBarColor = 'primary';
        this.progressBarMode = 'query';
    }
    IndexComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filter.radiusChanges.subscribe(function () { return _this.filterParkings(); });
        this.filter.priceRangeChanges.subscribe(function () { return _this.filterParkings(); });
        this.filter.locationChanges.subscribe(function (location) {
            _this.showLoadingProgressBar();
            _this.parkingService.getParkingsNearby(location.latitude, location.longitude, _this.filter.radiusMax * 1000).subscribe(function (response) {
                _this.hideProgressBar();
                _this.parkings = response.body;
                _this.filterParkings();
            }, function (error) {
                console.log(error);
                _this.showErrorProgressBar();
            });
        });
    };
    IndexComponent.prototype.showLoadingProgressBar = function () {
        this.progressBarVisible = true;
        this.progressBarColor = 'primary';
        this.progressBarMode = 'query';
    };
    IndexComponent.prototype.hideProgressBar = function () {
        this.progressBarVisible = false;
    };
    IndexComponent.prototype.showErrorProgressBar = function () {
        this.progressBarVisible = true;
        this.progressBarColor = 'warn';
        this.progressBarMode = 'determinate';
    };
    IndexComponent.prototype.filterParkings = function () {
        var _this = this;
        this.parkingList.parkings = this.parkings.filter(function (parking) {
            var filter = _this.filter.value;
            return parking.distance <= filter.radius * 1000
                && ((filter.priceRange.min) ? parking.price >= filter.priceRange.min : true)
                && ((filter.priceRange.max) ? parking.price <= filter.priceRange.max : true);
        });
        this.refreshComponentView();
    };
    IndexComponent.prototype.refreshComponentView = function () {
        var _this = this;
        this.changeDetector.detectChanges();
        setTimeout(function () { return _this.changeDetector.detectChanges(); }, 1);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('parkingList'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__parking_list_parking_list_component__["a" /* ParkingListComponent */])
    ], IndexComponent.prototype, "parkingList", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('filter'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__parking_list_filter_parking_list_filter_component__["a" /* ParkingListFilterComponent */])
    ], IndexComponent.prototype, "filter", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('progressbar'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__angular_material__["n" /* MatProgressBar */])
    ], IndexComponent.prototype, "progressBar", void 0);
    IndexComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-index',
            template: __webpack_require__("./src/app/index/index.component.html"),
            styles: [__webpack_require__("./src/app/index/index.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__parking_service__["a" /* ParkingService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/index/parking-list-filter/location-field/location-field.component.css":
/***/ (function(module, exports) {

module.exports = "mat-form-field {\n    width: 100%;\n    padding-left: 5px;\n    padding-right: 5px;\n}"

/***/ }),

/***/ "./src/app/index/parking-list-filter/location-field/location-field.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\n    <input type=\"text\" placeholder=\"Location\" aria-label=\"Number\" matInput [formControl]=\"control\"\n           [matAutocomplete]=\"autocomplete\" (blur)=\"onLocationInputBlur()\">\n    <mat-error *ngIf=\"control.hasError('locationAutocompleteItemNotSelected')\">\n        Location must be selected from <strong>autocomplete</strong>\n    </mat-error>\n    <mat-autocomplete #autocomplete\n                      [autoActiveFirstOption]=\"true\"\n                      [displayWith]=\"locationAutocompleteDisplayWith\">\n        <mat-option *ngFor=\"let autocompleteItem of predictionItems\"\n                    [value]=\"autocompleteItem\">\n            <mat-icon class=\"mat-18\">location_on</mat-icon>\n            {{autocompleteItem.label}}\n        </mat-option>\n        <mat-option *ngIf=\"geolocationItem\" [value]=\"geolocationItem\">\n            <mat-icon class=\"mat-18\">gps_fixed</mat-icon>\n            {{geolocationItem.label}}\n        </mat-option>\n        <mat-option *ngIf=\"ipLocationItem\" [value]=\"ipLocationItem\">\n            <mat-icon class=\"mat-18\">explore</mat-icon>\n            {{ipLocationItem.label}}\n        </mat-option>\n    </mat-autocomplete>\n</mat-form-field>"

/***/ }),

/***/ "./src/app/index/parking-list-filter/location-field/location-field.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationFieldComponent; });
/* unused harmony export AutocompleteItem */
/* unused harmony export PredictionItem */
/* unused harmony export LocationItem */
/* unused harmony export GeolocationItem */
/* unused harmony export IpLocationItem */
/* unused harmony export Location */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_ip_location_service__ = __webpack_require__("./src/app/service/ip-location.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LocationFieldComponent = /** @class */ (function () {
    function LocationFieldComponent(mapsAPILoader, ipLocationService, changeDetector) {
        this.mapsAPILoader = mapsAPILoader;
        this.ipLocationService = ipLocationService;
        this.changeDetector = changeDetector;
        this.control = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.predictionItems = [];
        this.valueChangesSubject = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["a" /* Subject */]();
        this.valueChanges = this.valueChangesSubject.asObservable();
    }
    Object.defineProperty(LocationFieldComponent.prototype, "value", {
        get: function () {
            return this.internalValue;
        },
        enumerable: true,
        configurable: true
    });
    LocationFieldComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.valueChanges.subscribe(function (value) { return _this.internalValue = value; });
        this.requestIpLocation();
        this.initMapsAPI().then(function () {
            _this.requestGeolocation();
        });
    };
    LocationFieldComponent.prototype.onLocationInputBlur = function () {
        if (!this.selectedItem) {
            this.control.setErrors({ 'locationAutocompleteItemNotSelected': { value: this.control.value } });
        }
        else {
            this.control.setErrors(null);
        }
    };
    LocationFieldComponent.prototype.locationAutocompleteDisplayWith = function (item) {
        return item ? item.label : '';
    };
    LocationFieldComponent.prototype.locationAutocompleteItemNotSelected = function () {
        var _this = this;
        return function (control) {
            return _this.selectedItem
                ? { 'locationAutocompleteItemNotSelected': { value: control.value } }
                : null;
        };
    };
    LocationFieldComponent.prototype.ngOnDestroy = function () {
        //        this.controlChangesSubscription.unsubscribe();
        window.navigator.geolocation.clearWatch(this.geolocationDescriptor);
    };
    LocationFieldComponent.prototype.initMapsAPI = function () {
        var _this = this;
        return this.mapsAPILoader.load().then(function () {
            _this.geocodeService = new google.maps.Geocoder();
            _this.autocompleteService = new google.maps.places.AutocompleteService();
            _this.controlChangesSubscription = _this.control.valueChanges.subscribe(function (value) { return _this.onValueChange(value); });
        });
    };
    LocationFieldComponent.prototype.requestGeolocation = function () {
        var _this = this;
        if (window.navigator && window.navigator.geolocation) {
            this.geolocationDescriptor = window.navigator.geolocation.watchPosition(function (position) { return _this.onGeolocationSuccess(position); }, function (error) { return _this.onGeolocationError(error); }, {
                timeout: 1000,
                enableHighAccuracy: false
            });
        }
    };
    LocationFieldComponent.prototype.requestIpLocation = function () {
        var _this = this;
        this.ipLocationService.getLocation(function (ipLocation) { return _this.onIpLocationSuccess(ipLocation); }, function (error) { return _this.onIpLocationError(error); });
    };
    LocationFieldComponent.prototype.onValueChange = function (value) {
        if (value instanceof AutocompleteItem) {
            this.previousSelectedItem = this.selectedItem;
            this.selectedItem = value;
            this.onSelectedItemChange(this.selectedItem);
        }
        else {
            if (this.selectedItem && !this.selectedItem.equalsWithLabel(value)) {
                this.previousSelectedItem = this.selectedItem;
                this.selectedItem = null;
                this.onSelectedItemChange(this.selectedItem);
            }
            if (this.previousSelectedItem && this.previousSelectedItem.equalsWithLabel(value)) {
                var buffer = this.previousSelectedItem;
                this.previousSelectedItem = this.selectedItem;
                this.selectedItem = buffer;
                this.onSelectedItemChange(this.selectedItem);
            }
            this.updateLocationAutocompletePredictionItems(value);
        }
    };
    LocationFieldComponent.prototype.onSelectedItemChange = function (item) {
        var _this = this;
        if (item instanceof LocationItem) {
            this.valueChangesSubject.next(item.location);
        }
        else if (item instanceof PredictionItem) {
            var request = {
                placeId: item.source.place_id,
            };
            this.geocodeService.geocode(request, function (results, status) {
                if (status === google.maps.GeocoderStatus.OK) {
                    var latitude = results[0].geometry.location.lat();
                    var longitude = results[0].geometry.location.lng();
                    _this.valueChangesSubject.next(new Location(latitude, longitude));
                }
                else {
                    console.warn('Google API Geocoder error: ' + status);
                }
            });
        }
    };
    LocationFieldComponent.prototype.onGeolocationSuccess = function (position) {
        var _this = this;
        var request = {
            location: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
        };
        this.geocodeService.geocode(request, function (results, status) {
            if (status === google.maps.GeocoderStatus.OK || status === google.maps.GeocoderStatus.ZERO_RESULTS) {
                var address = (status === google.maps.GeocoderStatus.OK)
                    ? results[0].formatted_address
                    : position.coords.latitude + ', ' + position.coords.longitude;
                _this.geolocationItem = new GeolocationItem(position, address);
                if (_this.geolocationItem === _this.selectedItem) {
                    _this.control.setValue(_this.locationAutocompleteDisplayWith(_this.geolocationItem));
                    _this.refreshComponentView();
                }
            }
            else {
                console.warn('Google API Geocoder error: ' + status);
            }
        });
    };
    LocationFieldComponent.prototype.onGeolocationError = function (error) {
        var errorName;
        switch (error.code) {
            case error.PERMISSION_DENIED:
                errorName = 'PERMISSION_DENIED';
                break;
            case error.POSITION_UNAVAILABLE:
                errorName = 'POSITION_UNAVAILABLE';
                break;
            case error.TIMEOUT:
                errorName = 'TIMEOUT';
                break;
        }
        console.log('Current geolocation error: ' + errorName);
    };
    LocationFieldComponent.prototype.onIpLocationSuccess = function (ipLocation) {
        this.ipLocationItem = new IpLocationItem(ipLocation);
        this.refreshComponentView();
    };
    LocationFieldComponent.prototype.onIpLocationError = function (error) {
        console.log('Current ip location error: ' + error);
    };
    LocationFieldComponent.prototype.updateLocationAutocompletePredictionItems = function (value) {
        var _this = this;
        if (value !== null && value.length > 0) {
            var request = {
                input: value,
                location: this.geolocationItem
                    ? this.geolocationItem.location.toLatLng()
                    : this.geolocationItem
                        ? this.ipLocationItem.location.toLatLng()
                        : undefined,
                radius: 0
            };
            this.autocompleteService.getPlacePredictions(request, function (predictions) {
                if (value == _this.control.value) {
                    if (predictions !== null) {
                        _this.predictionItems = predictions
                            .filter(function (value, index) { return index < 4; })
                            .map(function (p) { return new PredictionItem(p); });
                    }
                    else {
                        _this.predictionItems = [];
                    }
                    _this.refreshComponentView();
                }
            });
        }
        else {
            this.predictionItems = [];
            this.refreshComponentView();
        }
    };
    LocationFieldComponent.prototype.refreshComponentView = function () {
        var _this = this;
        this.changeDetector.detectChanges();
        setTimeout(function () { return _this.changeDetector.detectChanges(); }, 1);
    };
    LocationFieldComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-parking-list-filter-location-field',
            template: __webpack_require__("./src/app/index/parking-list-filter/location-field/location-field.component.html"),
            styles: [__webpack_require__("./src/app/index/parking-list-filter/location-field/location-field.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__agm_core__["b" /* MapsAPILoader */],
            __WEBPACK_IMPORTED_MODULE_3__service_ip_location_service__["a" /* IpLocationService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */]])
    ], LocationFieldComponent);
    return LocationFieldComponent;
}());

var AutocompleteItem = /** @class */ (function () {
    function AutocompleteItem(source, label) {
        this.label = label;
        this.source = source;
    }
    AutocompleteItem.prototype.equalsWithLabel = function (label) {
        if (!label) {
            return false;
        }
        var thisTokens = this.labelToTokens(this.label);
        var otherTokens = this.labelToTokens(label);
        return thisTokens.length == otherTokens.length
            && thisTokens.every(function (v, i) { return v === otherTokens[i]; });
    };
    AutocompleteItem.prototype.labelToTokens = function (label) {
        return label.trim().split(/[, ]+/);
    };
    return AutocompleteItem;
}());

var PredictionItem = /** @class */ (function (_super) {
    __extends(PredictionItem, _super);
    function PredictionItem(source) {
        return _super.call(this, source, source.description) || this;
    }
    return PredictionItem;
}(AutocompleteItem));

var LocationItem = /** @class */ (function (_super) {
    __extends(LocationItem, _super);
    function LocationItem(source, address, location) {
        var _this = _super.call(this, source, address) || this;
        _this.location = location;
        return _this;
    }
    return LocationItem;
}(AutocompleteItem));

var GeolocationItem = /** @class */ (function (_super) {
    __extends(GeolocationItem, _super);
    function GeolocationItem(source, address) {
        return _super.call(this, source, address, new Location(source.coords.latitude, source.coords.longitude)) || this;
    }
    return GeolocationItem;
}(LocationItem));

var IpLocationItem = /** @class */ (function (_super) {
    __extends(IpLocationItem, _super);
    function IpLocationItem(source) {
        return _super.call(this, source, source.address, new Location(source.latitude, source.longitude)) || this;
    }
    return IpLocationItem;
}(LocationItem));

var Location = /** @class */ (function () {
    function Location(latitude, longitude) {
        this.latitude = latitude;
        this.longitude = longitude;
    }
    Location.prototype.toLatLng = function () {
        return new google.maps.LatLng(this.latitude, this.longitude);
    };
    return Location;
}());



/***/ }),

/***/ "./src/app/index/parking-list-filter/parking-list-filter.component.css":
/***/ (function(module, exports) {

module.exports = ".full-width {\n    width: 100%;\n}"

/***/ }),

/***/ "./src/app/index/parking-list-filter/parking-list-filter.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<nav class=\"navbar fixed-bottom navbar-expand-sm navbar-dark bg-dark\">-->\n<!--<a class=\"navbar-brand\" href=\"#\"><h5>{{navTitle}}</h5></a>-->\n<!--<button class=\"navbar-toggler\" type=\"button\" (click)=\"isCollapsed = !isCollapsed\" [attr.aria-expanded]=\"isCollapsed\"-->\n<!--aria-controls=\"navbarCollapse\">-->\n<!--<span class=\"navbar-toggler-icon\"></span>-->\n<!--</button>-->\n<!--<div class=\"collapse navbar-collapse\" id=\"navbarCollapse\" [ngbCollapse]=\"!isCollapsed\">-->\n<!--<form [formGroup]=\"loginForm\" class = \"formstyle offset-sm-1 col-sm-10 offset-md-2 col-md-8 offset-lg-3 col-lg-6\">-->\n<!--<div class = \"row\">-->\n<!--<mat-form-property #cityInput class = \"customwidth\" style=\"width: 100%\">-->\n<!--<input matInput placeholder=\"City\" formControlName=\"City\" [type]=\"hide ? 'password' : 'text'\">-->\n<!--</mat-form-property>-->\n<!--</div>-->\n<!--<div class = \"row\">-->\n<!--<button mat-button>Submit</button>-->\n<!--</div>-->\n<!--</form>-->\n<!--</div>-->\n<!--</nav>-->\n<mat-divider style=\"border-color: purple;\"></mat-divider>\n<mat-card class=\"card\">\n    <form [formGroup]=\"formGroup\">\n        <app-parking-list-filter-price-range-field #priceRangeField></app-parking-list-filter-price-range-field>\n        <app-parking-list-filter-radius-field #radiusField></app-parking-list-filter-radius-field>\n        <app-parking-list-filter-location-field #locationField></app-parking-list-filter-location-field>\n    </form>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/index/parking-list-filter/parking-list-filter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParkingListFilterComponent; });
/* unused harmony export ParkingListFilter */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__location_field_location_field_component__ = __webpack_require__("./src/app/index/parking-list-filter/location-field/location-field.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__radius_field_radius_field_component__ = __webpack_require__("./src/app/index/parking-list-filter/radius-field/radius-field.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__price_range_field_price_range_field_component__ = __webpack_require__("./src/app/index/parking-list-filter/price-range-field/price-range-field.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ParkingListFilterComponent = /** @class */ (function () {
    function ParkingListFilterComponent() {
        this.formGroup = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormGroup */]({});
        this.valueChangesSubject = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__["a" /* Subject */]();
        this.valueChanges = this.valueChangesSubject.asObservable();
    }
    Object.defineProperty(ParkingListFilterComponent.prototype, "value", {
        get: function () {
            return this.internalValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParkingListFilterComponent.prototype, "locationChanges", {
        get: function () {
            return this.locationField.valueChanges;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParkingListFilterComponent.prototype, "radiusChanges", {
        get: function () {
            return this.radiusField.valueChanges;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParkingListFilterComponent.prototype, "priceRangeChanges", {
        get: function () {
            return this.priceRangeField.valueChanges;
        },
        enumerable: true,
        configurable: true
    });
    ParkingListFilterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.locationField.valueChanges.subscribe(function (location) {
            _this.internalValue = new ParkingListFilter(location, _this.priceRangeField.value, _this.radiusField.value);
        });
        this.priceRangeField.valueChanges.subscribe(function (priceRange) {
            if (_this.locationField.value) {
                _this.internalValue = new ParkingListFilter(_this.locationField.value, priceRange, _this.radiusField.value);
            }
        });
        this.radiusField.valueChanges.subscribe(function (radius) {
            if (_this.locationField.value) {
                _this.internalValue = new ParkingListFilter(_this.locationField.value, _this.priceRangeField.value, radius);
            }
        });
    };
    Object.defineProperty(ParkingListFilterComponent.prototype, "radiusMax", {
        get: function () {
            return this.radiusField.max;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('locationField'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__location_field_location_field_component__["a" /* LocationFieldComponent */])
    ], ParkingListFilterComponent.prototype, "locationField", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('radiusField'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__radius_field_radius_field_component__["a" /* RadiusFieldComponent */])
    ], ParkingListFilterComponent.prototype, "radiusField", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('priceRangeField'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__price_range_field_price_range_field_component__["a" /* PriceRangeFieldComponent */])
    ], ParkingListFilterComponent.prototype, "priceRangeField", void 0);
    ParkingListFilterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-parking-list-filter',
            template: __webpack_require__("./src/app/index/parking-list-filter/parking-list-filter.component.html"),
            styles: [__webpack_require__("./src/app/index/parking-list-filter/parking-list-filter.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], ParkingListFilterComponent);
    return ParkingListFilterComponent;
}());

var ParkingListFilter = /** @class */ (function () {
    function ParkingListFilter(location, priceRange, radius) {
        this.location = location;
        this.priceRange = priceRange;
        this.radius = radius;
    }
    ParkingListFilter.prototype.deriveLocation = function (location) {
        return new ParkingListFilter(location, this.priceRange, this.radius);
    };
    ParkingListFilter.prototype.derivePriceRange = function (priceRange) {
        return new ParkingListFilter(this.location, priceRange, this.radius);
    };
    ParkingListFilter.prototype.deriveRadius = function (radius) {
        return new ParkingListFilter(this.location, this.priceRange, radius);
    };
    return ParkingListFilter;
}());



/***/ }),

/***/ "./src/app/index/parking-list-filter/price-range-field/price-range-field.component.css":
/***/ (function(module, exports) {

module.exports = ".parent {\n    display: table;\n    width: 100%;\n}\n\nmat-form-field {\n    padding: 5px;\n}\n\n.min {\n    display: table-cell;\n}\n\n.max {\n    display: table-cell;\n}"

/***/ }),

/***/ "./src/app/index/parking-list-filter/price-range-field/price-range-field.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"parent\">\n    <mat-form-field class=\"min\">\n        <input #minInput matInput type=\"number\" placeholder=\"Min price\" aria-label=\"Min price\" min=\"0\"\n               [formControl]=\"minControl\">\n        <mat-error *ngIf=\"minControl.hasError('lessThanZero')\">\n            Min price can`t be less then zero price\n        </mat-error>\n        <mat-error *ngIf=\"minControl.hasError('greaterThanMax')\">\n            Min price can`t be greater then max price\n        </mat-error>\n    </mat-form-field>\n    <mat-form-field class=\"max\">\n        <input #maxInput matInput type=\"number\" placeholder=\"Max price\" aria-label=\"Max price\" min=\"0\"\n               [formControl]=\"maxControl\">\n        <mat-error *ngIf=\"maxControl.hasError('lessThanZero')\">\n            Max price can`t be less then zero\n        </mat-error>\n        <mat-error *ngIf=\"maxControl.hasError('lessThanMin')\">\n            Max price can`t be less then min price\n        </mat-error>\n    </mat-form-field>\n</div>\n"

/***/ }),

/***/ "./src/app/index/parking-list-filter/price-range-field/price-range-field.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PriceRangeFieldComponent; });
/* unused harmony export PriceRange */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PriceRangeFieldComponent = /** @class */ (function () {
    function PriceRangeFieldComponent() {
        this.minControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.maxControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.valueChangesSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        this.valueChanges = this.valueChangesSubject.asObservable();
    }
    Object.defineProperty(PriceRangeFieldComponent.prototype, "value", {
        get: function () {
            return this.internalValue;
        },
        enumerable: true,
        configurable: true
    });
    PriceRangeFieldComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.valueChanges.subscribe(function (value) { return _this.internalValue = value; });
        this.minControl.valueChanges.subscribe(function (min) {
            if (_this.validateMin(min)) {
                _this.valueChangesSubject.next(new PriceRange(min, _this.maxControl.value));
            }
        });
        this.maxControl.valueChanges.subscribe(function (max) {
            if (_this.validateMax(max)) {
                _this.valueChangesSubject.next(new PriceRange(_this.minControl.value, max));
            }
        });
        this.minControl.setValue(0);
        this.maxControl.setValue(undefined);
        this.minControl.markAsTouched();
        this.maxControl.markAsTouched();
    };
    PriceRangeFieldComponent.prototype.validateMin = function (min) {
        var max = this.maxControl.value;
        if (min) {
            if (min < 0) {
                this.minControl.setErrors({ 'lessThanZero': min });
                return false;
            }
            else if (max && min > max) {
                this.minControl.setErrors({ 'greaterThanMax': min });
                this.maxControl.setErrors(null);
                return false;
            }
        }
        return this.maxControl.errors === null;
    };
    PriceRangeFieldComponent.prototype.validateMax = function (max) {
        var min = this.minControl.value;
        if (max) {
            if (max < 0) {
                this.maxControl.setErrors({ 'lessThanZero': max });
                return false;
            }
            if (min && max < min) {
                this.maxControl.setErrors({ 'lessThanMin': max });
                this.minControl.setErrors(null);
                return false;
            }
        }
        return this.minControl.errors === null;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('minInput'),
        __metadata("design:type", HTMLInputElement)
    ], PriceRangeFieldComponent.prototype, "minInput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('maxInput'),
        __metadata("design:type", HTMLInputElement)
    ], PriceRangeFieldComponent.prototype, "maxInput", void 0);
    PriceRangeFieldComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-parking-list-filter-price-range-field',
            template: __webpack_require__("./src/app/index/parking-list-filter/price-range-field/price-range-field.component.html"),
            styles: [__webpack_require__("./src/app/index/parking-list-filter/price-range-field/price-range-field.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PriceRangeFieldComponent);
    return PriceRangeFieldComponent;
}());

var PriceRange = /** @class */ (function () {
    function PriceRange(min, max) {
        this.min = min;
        this.max = max;
    }
    return PriceRange;
}());



/***/ }),

/***/ "./src/app/index/parking-list-filter/radius-field/radius-field.component.css":
/***/ (function(module, exports) {

module.exports = ".parent {\n    display: table;\n}\n\n.title {\n    display: table-cell;\n    color: rgb(120, 120, 120);\n    padding-left: 6px;\n    min-width: 110px;\n}\n\n.slider {\n    display: table-cell;\n    width: 100%;\n}"

/***/ }),

/***/ "./src/app/index/parking-list-filter/radius-field/radius-field.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"parent\">\n    <div class=\"title\">Radius: {{slider.value}} km</div>\n    <div class=\"slider\">\n        <mat-slider style=\"width: 100%\" #slider color=\"primary\" [disabled]=\"false\" [min]=\"1\" [max]=\"20\" [step]=\"1\"\n                    [thumb-label]=\"true\" (change)=\"onChange()\">\n        </mat-slider>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/index/parking-list-filter/radius-field/radius-field.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RadiusFieldComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RadiusFieldComponent = /** @class */ (function () {
    function RadiusFieldComponent(changeDetector) {
        this.changeDetector = changeDetector;
        this.valueChangesSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        this.valueChanges = this.valueChangesSubject.asObservable();
    }
    RadiusFieldComponent.prototype.ngOnInit = function () {
        this.slider.value = 5;
        this.refreshComponentView();
    };
    Object.defineProperty(RadiusFieldComponent.prototype, "value", {
        get: function () {
            return this.slider.value;
        },
        enumerable: true,
        configurable: true
    });
    RadiusFieldComponent.prototype.refreshComponentView = function () {
        var _this = this;
        this.changeDetector.detectChanges();
        setTimeout(function () { return _this.changeDetector.detectChanges(); }, 1);
    };
    Object.defineProperty(RadiusFieldComponent.prototype, "max", {
        get: function () {
            return this.slider.max;
        },
        enumerable: true,
        configurable: true
    });
    RadiusFieldComponent.prototype.onChange = function () {
        this.valueChangesSubject.next(this.slider.value);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('slider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatSlider */])
    ], RadiusFieldComponent.prototype, "slider", void 0);
    RadiusFieldComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-parking-list-filter-radius-field',
            template: __webpack_require__("./src/app/index/parking-list-filter/radius-field/radius-field.component.html"),
            styles: [__webpack_require__("./src/app/index/parking-list-filter/radius-field/radius-field.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */]])
    ], RadiusFieldComponent);
    return RadiusFieldComponent;
}());



/***/ }),

/***/ "./src/app/index/parking-list/parking-list.component.css":
/***/ (function(module, exports) {

module.exports = ".example-form {\n    min-width: 150px;\n    max-width: 500px;\n    width: 100%;\n}\n\n.example-full-width {\n    width: 100%;\n}\n\n.card {\n    width: 100%;\n    margin-top: 10px;\n    margin-bottom: 10px;\n}\n\n.example-header-image {\n    /*background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');*/\n    background-size: cover;\n}\n"

/***/ }),

/***/ "./src/app/index/parking-list/parking-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div *ngFor=\"let parking of parkings\">\n        <mat-card class=\"card offset-sm-1 col-sm-10 offset-md-1 col-md-10 offset-lg-1 col-lg-10\">\n            <mat-card-header>\n                <div mat-card-avatar class=\"example-header-image\">\n                    <mat-icon>local_parking</mat-icon>\n                </div>\n                <div style=\"min-width: 70%;\">\n                    <div>\n                        <mat-card-title>{{parking.providerName}}</mat-card-title>\n                        <mat-card-subtitle>{{parking.city}}, {{parking.street}} street, {{parking.building}}\n                        </mat-card-subtitle>\n                    </div>\n                </div>\n                <div style=\"width: 100%\"></div>\n                <mat-icon style=\"color: #1e7e34\">attach_money</mat-icon>\n                <p style=\"font-size: 18px;\">{{parking.price}}</p>\n            </mat-card-header>\n\n            <mat-card-content>\n                <mat-list>\n                    <mat-list-item>\n                        <mat-icon color=\"warn\" style=\"margin-right: 15px\"\n                                  matTooltip=\"See location on the map!\"\n                                  (click)=\"showOnMap(parking.latitude, parking.longitude)\">place\n                        </mat-icon>\n                        <span> {{parking.latitude}}, {{parking.longitude}}.  </span>\n                        <span>Parking is {{round(parking.distance)}} meters away.</span>\n                    </mat-list-item>\n                    <mat-divider></mat-divider>\n                    <mat-list-item>\n                        <mat-icon color=\"primary\" style=\"margin-right: 15px\">directions_car</mat-icon>\n                        <span> Spots count: {{parking.availableSpotsCount}} / {{parking.spotsCount}} </span>\n                    </mat-list-item>\n                    <mat-divider></mat-divider>\n                    <mat-list-item>\n                        <mat-icon color=\"accent\" style=\"margin-right: 15px\">star</mat-icon>\n                        <span> {{parking.favoritesCount}} drivers added to favorite</span>\n                    </mat-list-item>\n                    <mat-divider></mat-divider>\n                </mat-list>\n            </mat-card-content>\n            <mat-card-actions align=\"right\">\n                <button mat-button color=\"primary\" (click)=\"onMoreInfoClick(parking.id)\">MORE INFO</button>\n            </mat-card-actions>\n        </mat-card>\n    </div>\n    <mat-divider style=\"margin-bottom: 240px; border-color: rgb(230, 230, 230)\"></mat-divider>\n</div>\n"

/***/ }),

/***/ "./src/app/index/parking-list/parking-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParkingListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_mergeMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ParkingListComponent = /** @class */ (function () {
    function ParkingListComponent(router) {
        this.router = router;
        this.parkings = [];
    }
    ParkingListComponent.prototype.ngOnInit = function () {
    };
    ParkingListComponent.prototype.showOnMap = function (latitude, longitude) {
        window.open("https://www.google.com/maps/search/?api=1&query=\n                    " + latitude + "," + longitude);
    };
    ParkingListComponent.prototype.ngOnDestroy = function () {
    };
    ParkingListComponent.prototype.onMoreInfoClick = function (id) {
        this.router.navigateByUrl('/parkingdetail/' + id);
    };
    ParkingListComponent.prototype.round = function (floatNumber) {
        return Math.round(floatNumber);
    };
    ParkingListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-parking-list',
            template: __webpack_require__("./src/app/index/parking-list/parking-list.component.html"),
            styles: [__webpack_require__("./src/app/index/parking-list/parking-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], ParkingListComponent);
    return ParkingListComponent;
}());



/***/ }),

/***/ "./src/app/index/parking-map/parking-map.component.css":
/***/ (function(module, exports) {

module.exports = "agm-map {\n    height: 300px;\n}"

/***/ }),

/***/ "./src/app/index/parking-map/parking-map.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>{{ title }}</h1>\n\n<!-- this creates a google map on the page with the given lat/lng from -->\n<!-- the component as the initial center of the map: -->\n\n<div class=\"text-white\">\n    <span>Longitude: {{lat}}</span>\n    <span>Longitude: {{lng}}</span>\n</div>\n<button (click)=\"findMe()\">Refresh</button>\n<div class=\"offset-2 col-md-8\">\n    <agm-map [latitude]=\"lat\" [longitude]=\"lng\">\n        <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n       <!-- <span *ngFor=\"let parking of parkings\">\n            <agm-marker [latitude]=\"parking.latitude\" [longitude]=\"parking.longitude\"></agm-marker>\n        </span>-->\n\n    </agm-map>\n</div>"

/***/ }),

/***/ "./src/app/index/parking-map/parking-map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParkingMapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parking_service__ = __webpack_require__("./src/app/parking.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ParkingMapComponent = /** @class */ (function () {
    function ParkingMapComponent(parkingService) {
        this.parkingService = parkingService;
        this.title = 'My first AGM project';
    }
    ParkingMapComponent.prototype.ngOnInit = function () {
        this.findMe();
        this.parkingCoord();
    };
    ParkingMapComponent.prototype.findMe = function () {
        var _this = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((function (position) {
                _this.showPosition(position);
            }));
        }
    };
    ParkingMapComponent.prototype.showPosition = function (position) {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
    };
    ParkingMapComponent.prototype.parkingCoord = function () {
        var _this = this;
        this.parkingService.getParkingsNearby(this.lat, this.lng, 20)
            .subscribe(function (response) {
            _this.parkings = response.body;
        }, function (error) {
            console.log(error);
        });
    };
    ParkingMapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-parking-map',
            template: __webpack_require__("./src/app/index/parking-map/parking-map.component.html"),
            styles: [__webpack_require__("./src/app/index/parking-map/parking-map.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__parking_service__["a" /* ParkingService */]])
    ], ParkingMapComponent);
    return ParkingMapComponent;
}());



/***/ }),

/***/ "./src/app/interceptor.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InterceptorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_token_token_storage__ = __webpack_require__("./src/app/auth/token/token-storage.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InterceptorService = /** @class */ (function () {
    function InterceptorService() {
    }
    InterceptorService.prototype.intercept = function (request, next) {
        if (request.url.startsWith('http://localhost:8080/') && (__WEBPACK_IMPORTED_MODULE_3__auth_token_token_storage__["a" /* TokenStorage */].getToken())) {
            request = request.clone({
                headers: request.headers.append('Authorization', "Bearer " + __WEBPACK_IMPORTED_MODULE_3__auth_token_token_storage__["a" /* TokenStorage */].getToken())
            });
        }
        return next.handle(request).do(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpResponse */]) {
            }
        }, function (error) {
            if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpErrorResponse */]) {
            }
        });
    };
    InterceptorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], InterceptorService);
    return InterceptorService;
}());



/***/ }),

/***/ "./src/app/manager/manager-parking-configure/manager-parking-configure.component.css":
/***/ (function(module, exports) {

module.exports = ".card {\n    width: 100%;\n    margin-top: 50px;\n    margin-bottom: 50px;\n}\n\n.submit-button {\n    margin-top: 20px;\n    width: 100%;\n}\n\n.parking-configure-headers-align .mat-expansion-panel-header-title,\n.parking-configure-headers-align .mat-expansion-panel-header-description {\n    -ms-flex-preferred-size: 0;\n        flex-basis: 0;\n}\n\n.parking-configure-headers-align .mat-expansion-panel-header-description {\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n\n.full-width {\n    width: 100%;\n}\n\nmat-form-field {\n    padding: 5px;\n}\n\nmat-panel-title {\n    width: 100px;\n}\n\nmat-panel-description {\n    width: 100%;\n    /*height: 25px;*/\n}\n\n.tokenField {\n    width: 290px;\n}\n\n"

/***/ }),

/***/ "./src/app/manager/manager-parking-configure/manager-parking-configure.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" *ngIf=\"!parking\" class=\"text-center\">\n    <div class=\"row mx-auto mt-3 center-block\">\n      <div class=\"col-6 mx-auto my-auto text-center\">\n          <mat-spinner mode=\"indeterminate\" style=\"margin-left: 35%;\"></mat-spinner>\n      </div>\n    </div>\n  </div>\n<div class=\"container-fluid\" *ngIf=\"parking && configureType\">\n\n    <mat-card class=\"card offset-sm-1 col-sm-10 offset-md-1 col-md-10 offset-lg-1 col-lg-10\">\n        <mat-card-header>\n            <div *ngIf=\"configureType.text === 'edit'\">\n                <legend>Edit parking</legend>\n            </div>\n            <div *ngIf=\"configureType.text === 'add'\">\n                <legend>Add parking</legend>\n            </div>\n        </mat-card-header>\n        <mat-card-content>\n\n            <form class=\"formstyle\"\n                  [formGroup]=\"parkingConfigureForm\" (ngSubmit)=\"saveParking()\">\n\n                <mat-accordion class=\"parking-configure-headers-align\">\n\n                    <mat-expansion-panel [expanded]=\"step === 0\" (opened)=\"setStep(0)\" hideToggle=\"true\">\n                        <mat-expansion-panel-header>\n                            <mat-panel-title>\n                                Address\n                            </mat-panel-title>\n                            <mat-panel-description>\n                                <span *ngIf=\"!parking.city && !parking.street && !parking.building\">\n                                    Type city, street and building\n                                </span>\n                                <span *ngIf=\"parking.city || parking.street || parking.building\">\n                                    {{parking.city}}, {{parking.street}} street, {{parking.building}}\n                                </span>\n                            </mat-panel-description>\n                            <mat-icon>store</mat-icon>\n                        </mat-expansion-panel-header>\n                        <mat-form-field>\n                            <input matInput [(ngModel)]=\"parking.city\" placeholder=\"City\"\n                                   type=\"text\"\n                                   formControlName=\"city\"\n                                   required>\n                        </mat-form-field>\n                        <mat-form-field>\n                            <input matInput [(ngModel)]=\"parking.street\" placeholder=\"Street\"\n                                   type=\"text\"\n                                   formControlName=\"street\"\n                                   required>\n                        </mat-form-field>\n                        <mat-form-field>\n                            <input matInput [(ngModel)]=\"parking.building\" placeholder=\"Building number\"\n                                   type=\"text\"\n                                   formControlName=\"building\"\n                                   required>\n                        </mat-form-field>\n                        <mat-action-row>\n                            <button mat-button type=\"button\" color=\"warn\" (click)=\"resetAddress()\">Reset</button>\n                            <div class=\"full-width\"></div>\n                            <button mat-button type=\"button\" color=\"primary\" (click)=\"nextStep()\">Next</button>\n                        </mat-action-row>\n                    </mat-expansion-panel>\n\n                    <mat-expansion-panel [expanded]=\"step === 1\" (opened)=\"setStep(1)\" hideToggle=\"true\">\n                        <mat-expansion-panel-header>\n                            <mat-panel-title>\n                                Location\n                            </mat-panel-title>\n                            <mat-panel-description>\n                        <span *ngIf=\"!parking.latitude && !parking.longitude\">\n                            Type latitude and longitude\n                        </span>\n                                <span *ngIf=\"parking.latitude || parking.longitude\">\n                            {{parking.latitude}}, {{parking.longitude}}\n                        </span>\n                            </mat-panel-description>\n                            <mat-icon>place</mat-icon>\n                        </mat-expansion-panel-header>\n                        <mat-form-field>\n                            <input matInput [(ngModel)]=\"parking.latitude\" placeholder=\"Location latitude\"\n                                   type=\"number\"\n                                   formControlName=\"latitude\"\n                                   required>\n                        </mat-form-field>\n                        <mat-form-field>\n                            <input matInput [(ngModel)]=\"parking.longitude\" placeholder=\"Location longitude\"\n                                   type=\"number\"\n                                   formControlName=\"longitude\"\n                                   required>\n                        </mat-form-field>\n                        <button mat-raised-button type=\"button\" color=\"primary\"\n                                [disabled]=\"parking.latitude === null || parking.longitude === null\"\n                                (click)=\"showOnMap()\">Show on map\n                        </button>\n                        <mat-action-row>\n                            <button mat-button type=\"button\" color=\"warn\" (click)=\"resetLocation()\">Reset</button>\n                            <div class=\"full-width\"></div>\n                            <button mat-button type=\"button\" color=\"warn\" (click)=\"prevStep()\">Previous</button>\n                            <button mat-button type=\"button\" color=\"primary\" (click)=\"nextStep()\">Next</button>\n                        </mat-action-row>\n                    </mat-expansion-panel>\n\n                    <mat-expansion-panel [expanded]=\"step === 2\" (opened)=\"setStep(2)\" hideToggle=\"true\">\n                        <mat-expansion-panel-header>\n                            <mat-panel-title>\n                                Price\n                            </mat-panel-title>\n                            <mat-panel-description>\n                        <span *ngIf=\"!parking.price\">\n                            Type price\n                        </span>\n                                <span *ngIf=\"parking.price\">\n                            {{parking.price}}\n                        </span>\n                            </mat-panel-description>\n                            <mat-icon>attach_money</mat-icon>\n                        </mat-expansion-panel-header>\n                        <mat-form-field>\n                            <input matInput [(ngModel)]=\"parking.price\" placeholder=\"Price\"\n                                   type=\"number\"\n                                   formControlName=\"price\"\n                                   required>\n                        </mat-form-field>\n                        <mat-action-row>\n                            <button mat-button type=\"button\" color=\"warn\" (click)=\"resetPrice()\">Reset</button>\n                            <div class=\"full-width\"></div>\n                            <button mat-button type=\"button\" color=\"warn\" (click)=\"prevStep()\">Previous</button>\n                            <button mat-button type=\"button\" color=\"primary\" (click)=\"nextStep()\">Next</button>\n                        </mat-action-row>\n                    </mat-expansion-panel>\n\n                    <mat-expansion-panel [expanded]=\"step === 3\" (opened)=\"setStep(3)\" hideToggle=\"true\">\n                        <mat-expansion-panel-header>\n                            <mat-panel-title>\n                                Token\n                            </mat-panel-title>\n                            <mat-panel-description>\n                                <span *ngIf=\"!parking.token\">\n                                    Generate token\n                                </span>\n                                <span *ngIf=\"parking.token\">\n                                    {{parking.token}}\n                                </span>\n                            </mat-panel-description>\n                            <mat-icon>settings_remote</mat-icon>\n                        </mat-expansion-panel-header>\n                        <mat-form-field class=\"tokenField\">\n                            <textarea matInput matTextareaAutosize\n                                      [(ngModel)]=\"parking.token\" placeholder=\"Token\"\n                                      formControlName=\"token\"\n                                      readonly></textarea>\n                            <mat-hint align=\"start\">You can not edit this</mat-hint>\n                        </mat-form-field>\n                        <button mat-raised-button type=\"button\" color=\"primary\"\n                                (click)=\"generateToken()\">Generate token\n                        </button>\n                        <mat-action-row>\n                            <button mat-button type=\"button\" color=\"warn\" (click)=\"resetToken()\">Reset</button>\n                            <div class=\"full-width\"></div>\n                            <button mat-button type=\"button\" color=\"warn\" (click)=\"prevStep()\">Previous</button>\n                            <button mat-button type=\"button\" color=\"primary\" (click)=\"nextStep()\">Next</button>\n                        </mat-action-row>\n                    </mat-expansion-panel>\n\n                    <div *ngIf=\"configureType.text === 'edit'\">\n                        <mat-expansion-panel [expanded]=\"step === 4\" (opened)=\"setStep(4)\" hideToggle=\"true\">\n                            <mat-expansion-panel-header>\n                                <mat-panel-title>\n                                    Other\n                                </mat-panel-title>\n                                <mat-panel-description>\n                                    Information about provider, spots count\n                                </mat-panel-description>\n                                <mat-icon>info_outline</mat-icon>\n                            </mat-expansion-panel-header>\n                            <mat-form-field>\n                                <input matInput [(ngModel)]=\"parking.providerName\" placeholder=\"Provider\"\n                                       type=\"text\"\n                                       formControlName=\"providerName\"\n                                       readonly>\n                            </mat-form-field>\n                            <mat-form-field>\n                                <input matInput [(ngModel)]=\"parking.favoritesCount\" placeholder=\"Favorites count\"\n                                       type=\"number\"\n                                       formControlName=\"favoritesCount\"\n                                       readonly>\n                            </mat-form-field>\n                            <mat-form-field>\n                                <input matInput [(ngModel)]=\"parking.spotsCount\" placeholder=\"Spots count\"\n                                       type=\"number\"\n                                       formControlName=\"spotsCount\"\n                                       readonly>\n                            </mat-form-field>\n                            <mat-action-row>\n                                <button mat-button type=\"button\" color=\"warn\" (click)=\"prevStep()\">Previous</button>\n                                <button mat-button type=\"button\" color=\"primary\" (click)=\"nextStep()\">End</button>\n                            </mat-action-row>\n                        </mat-expansion-panel>\n                    </div>\n                </mat-accordion>\n\n                <!--<div class=\"row submit\">-->\n                <button class=\"submit-button\" mat-raised-button type=\"submit\" color=\"accent\"\n                        [disabled]=\"!parkingConfigureForm.valid\">\n                    Submit\n                    <mat-icon aria-label=\"Send and save changes\">send</mat-icon>\n                </button>\n                <!--</div>-->\n            </form>\n\n        </mat-card-content>\n    </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/manager/manager-parking-configure/manager-parking-configure.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagerParkingConfigureComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ManagerParkingConfigureType; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_uuid__ = __webpack_require__("./node_modules/uuid/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_uuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_uuid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_view_parking__ = __webpack_require__("./src/app/model/view/parking.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__manager_parking_service__ = __webpack_require__("./src/app/manager/manager-parking.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ManagerParkingConfigureComponent = /** @class */ (function () {
    function ManagerParkingConfigureComponent(route, snackBar, formBuilder, managerParkingService) {
        this.route = route;
        this.snackBar = snackBar;
        this.formBuilder = formBuilder;
        this.managerParkingService = managerParkingService;
        this.step = -1;
        this.parkingConfigureForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]({
            city: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required,
            ]),
            street: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required,]),
            building: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required,]),
            latitude: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required,]),
            longitude: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required,]),
            price: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required,]),
            token: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required,]),
            providerName: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', []),
            favoritesCount: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', []),
            spotsCount: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [])
        });
    }
    ManagerParkingConfigureComponent.prototype.ngOnInit = function () {
        if (this.route.root.firstChild.snapshot.data['configureType'] ===
            ManagerParkingConfigureType.EDIT) {
            this.configureType = new ConfigureType('edit', ManagerParkingConfigureType.EDIT);
            this.loadParking();
        }
        else {
            this.configureType = new ConfigureType('add', ManagerParkingConfigureType.ADD);
            this.loadedParking = new __WEBPACK_IMPORTED_MODULE_5__model_view_parking__["a" /* Parking */]();
            this.parking = new __WEBPACK_IMPORTED_MODULE_5__model_view_parking__["a" /* Parking */]();
        }
    };
    ManagerParkingConfigureComponent.prototype.loadParking = function () {
        var _this = this;
        var id = parseInt(this.route.snapshot.paramMap.get('id'));
        this.managerParkingService.getParking(id)
            .subscribe(function (parking) {
            _this.loadedParking = parking;
            _this.parking = parking.clone();
        });
    };
    ManagerParkingConfigureComponent.prototype.saveParking = function () {
        var _this = this;
        if (this.configureType.type === ManagerParkingConfigureType.ADD) {
            this.parking.providerId = 1;
        }
        this.managerParkingService.saveParking(this.parking)
            .subscribe(function (response) {
            _this.snackBar.open('Parking updated sucsessfully.', null, {
                duration: 2000
            });
        });
    };
    ManagerParkingConfigureComponent.prototype.setStep = function (index) {
        this.step = index;
    };
    ManagerParkingConfigureComponent.prototype.nextStep = function () {
        this.step++;
    };
    ManagerParkingConfigureComponent.prototype.prevStep = function () {
        this.step--;
    };
    ManagerParkingConfigureComponent.prototype.showOnMap = function () {
        window.open("https://www.google.com/maps/search/?api=1&query=\n                    " + this.parking.latitude + "," + this.parking.longitude);
    };
    ManagerParkingConfigureComponent.prototype.generateToken = function () {
        this.parking.token = Object(__WEBPACK_IMPORTED_MODULE_3_uuid__["v4"])();
    };
    ManagerParkingConfigureComponent.prototype.resetAddress = function () {
        this.parking.city = this.loadedParking.city;
        this.parking.street = this.loadedParking.street;
        this.parking.building = this.loadedParking.building;
    };
    ManagerParkingConfigureComponent.prototype.resetLocation = function () {
        this.parking.latitude = this.loadedParking.latitude;
        this.parking.longitude = this.loadedParking.longitude;
    };
    ManagerParkingConfigureComponent.prototype.resetPrice = function () {
        this.parking.price = this.loadedParking.price;
    };
    ManagerParkingConfigureComponent.prototype.resetToken = function () {
        this.parking.token = this.loadedParking.token;
    };
    ManagerParkingConfigureComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["o" /* Component */])({
            selector: 'app-manager-parking-configure',
            template: __webpack_require__("./src/app/manager/manager-parking-configure/manager-parking-configure.component.html"),
            styles: [__webpack_require__("./src/app/manager/manager-parking-configure/manager-parking-configure.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["s" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_6__manager_parking_service__["a" /* ManagerParkingService */]])
    ], ManagerParkingConfigureComponent);
    return ManagerParkingConfigureComponent;
}());

var ManagerParkingConfigureType;
(function (ManagerParkingConfigureType) {
    ManagerParkingConfigureType[ManagerParkingConfigureType["EDIT"] = 0] = "EDIT";
    ManagerParkingConfigureType[ManagerParkingConfigureType["ADD"] = 1] = "ADD";
})(ManagerParkingConfigureType || (ManagerParkingConfigureType = {}));
var ConfigureType = /** @class */ (function () {
    function ConfigureType(text, type) {
        this.text = text;
        this.type = type;
    }
    return ConfigureType;
}());


/***/ }),

/***/ "./src/app/manager/manager-parking-list/delete-confirmation-dialog/delete-confirmation-dialog.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/manager/manager-parking-list/delete-confirmation-dialog/delete-confirmation-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title style=\"text-align: center\">Are you sure?</h1>\n<div mat-dialog-actions>\n    <button mat-button (click)=\"onNoClick()\" [mat-dialog-close]=\"data\">No</button>\n    <button mat-button color=\"warn\" (click)=\"onOkClick()\" [mat-dialog-close]=\"data\"\n            cdkFocusInitial>Ok\n    </button>\n</div>"

/***/ }),

/***/ "./src/app/manager/manager-parking-list/delete-confirmation-dialog/delete-confirmation-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeleteConfirmationDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var DeleteConfirmationDialogComponent = /** @class */ (function () {
    function DeleteConfirmationDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DeleteConfirmationDialogComponent.prototype.ngOnInit = function () {
    };
    DeleteConfirmationDialogComponent.prototype.onNoClick = function () {
        this.data.confirmed = false;
    };
    DeleteConfirmationDialogComponent.prototype.onOkClick = function () {
        this.data.confirmed = true;
    };
    DeleteConfirmationDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-delete-confirmation-dialog',
            template: __webpack_require__("./src/app/manager/manager-parking-list/delete-confirmation-dialog/delete-confirmation-dialog.component.html"),
            styles: [__webpack_require__("./src/app/manager/manager-parking-list/delete-confirmation-dialog/delete-confirmation-dialog.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialogRef */], Object])
    ], DeleteConfirmationDialogComponent);
    return DeleteConfirmationDialogComponent;
}());



/***/ }),

/***/ "./src/app/manager/manager-parking-list/manager-parking-list.component.css":
/***/ (function(module, exports) {

module.exports = ".example-header-image {\n    /*background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');*/\n    background-size: cover;\n}\n\n.card {\n    width: 100%;\n    margin-top: 10px;\n    margin-bottom: 10px;\n}\n\n.full-width {\n    width: 100%;\n}\n\n.float {\n    position: fixed;\n    width: 60px;\n    height: 60px;\n    bottom: 20px;\n    right: 20px;\n}\n"

/***/ }),

/***/ "./src/app/manager/manager-parking-list/manager-parking-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div *ngFor=\"let parking of parkings\">\n        <mat-card class=\"card offset-sm-1 col-sm-10 offset-md-1 col-md-10 offset-lg-1 col-lg-10\">\n            <mat-card-header>\n                <div mat-card-avatar class=\"example-header-image\">\n                    <mat-icon>local_parking</mat-icon>\n                </div>\n                <div style=\"min-width: 70%;\">\n                    <div>\n                        <mat-card-title>{{parking.city}}, {{parking.street}} street, {{parking.building}}\n                        </mat-card-title>\n                        <mat-card-subtitle>{{parking.providerName}}</mat-card-subtitle>\n                    </div>\n                </div>\n                <div style=\"width: 100%\"></div>\n                <mat-icon style=\"color: #1e7e34\">attach_money</mat-icon>\n                <p style=\"font-size: 18px;\">{{parking.price}}</p>\n            </mat-card-header>\n\n            <mat-card-content>\n                <mat-list>\n                    <mat-list-item>\n                        <mat-icon color=\"warn\" style=\"margin-right: 15px\"\n                                  matTooltip=\"See location on the map!\"\n                                  (click)=\"showOnMap(parking.latitude, parking.longitude)\">place\n                        </mat-icon>\n                        <span> {{parking.latitude}}, {{parking.longitude}}</span>\n                    </mat-list-item>\n                    <mat-divider></mat-divider>\n                    <mat-list-item>\n                        <mat-icon color=\"primary\" style=\"margin-right: 15px\">directions_car</mat-icon>\n                        <span> Spots count: {{parking.availableSpotsCount}} / {{parking.spotsCount}} </span>\n                    </mat-list-item>\n                    <mat-divider></mat-divider>\n                    <mat-list-item>\n                        <mat-icon color=\"accent\" style=\"margin-right: 15px\">star</mat-icon>\n                        <span> {{parking.favoritesCount}} drivers added to favorite</span>\n                    </mat-list-item>\n                    <mat-divider></mat-divider>\n                </mat-list>\n            </mat-card-content>\n            <mat-card-actions align=\"right\">\n                <button mat-button color=\"warn\" (click)=\"onParkingDeleteClick(parking)\">DELETE</button>\n                <button mat-button color=\"primary\" (click)=\"onParkingEditClick(parking.id)\">EDIT</button>\n            </mat-card-actions>\n        </mat-card>\n    </div>\n    <a routerLink=\"/manager-configuration/parkings/add\" class=\"float\" mat-fab>\n        <mat-icon color=\"primary\">add</mat-icon>\n    </a>\n</div>"

/***/ }),

/***/ "./src/app/manager/manager-parking-list/manager-parking-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagerParkingListComponent; });
/* unused harmony export ConfirmationDialog */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__manager_parking_service__ = __webpack_require__("./src/app/manager/manager-parking.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_http_status_codes__ = __webpack_require__("./node_modules/http-status-codes/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_http_status_codes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_http_status_codes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__delete_confirmation_dialog_delete_confirmation_dialog_component__ = __webpack_require__("./src/app/manager/manager-parking-list/delete-confirmation-dialog/delete-confirmation-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ManagerParkingListComponent = /** @class */ (function () {
    function ManagerParkingListComponent(managerParkingService, router, snackBar, dialog) {
        this.managerParkingService = managerParkingService;
        this.router = router;
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.parkings = [];
    }
    ManagerParkingListComponent.prototype.ngOnInit = function () {
        this.loadParkings();
    };
    ManagerParkingListComponent.prototype.loadParkings = function () {
        var _this = this;
        this.managerParkingService.getParkings()
            .subscribe(function (parkings) {
            _this.parkings = parkings.body;
        });
    };
    ManagerParkingListComponent.prototype.showOnMap = function (latitude, longitude) {
        window.open("https://www.google.com/maps/search/?api=1&query=\n                    " + latitude + "," + longitude);
    };
    ManagerParkingListComponent.prototype.onParkingEditClick = function (id) {
        this.router.navigateByUrl('/manager-configuration/parkings/edit/' + id);
    };
    ManagerParkingListComponent.prototype.onParkingDeleteClick = function (parking) {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__delete_confirmation_dialog_delete_confirmation_dialog_component__["a" /* DeleteConfirmationDialogComponent */], {
            data: { confirmed: false }
        });
        dialogRef.afterClosed().subscribe(function (data) {
            if (data.confirmed) {
                _this.managerParkingService.deleteParking(parking)
                    .subscribe(function (response) { return _this.onDeleteResponse(parking, response); });
            }
        });
    };
    ManagerParkingListComponent.prototype.onDeleteResponse = function (parking, response) {
        if (response.status === __WEBPACK_IMPORTED_MODULE_4_http_status_codes__["OK"]) {
            this.snackBar.open('Parking deleted sucsessfully.', null, {
                duration: 2000
            });
            var index = this.parkings.indexOf(parking);
            this.parkings.splice(index, 1);
        }
    };
    ManagerParkingListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-manager-parking-list',
            template: __webpack_require__("./src/app/manager/manager-parking-list/manager-parking-list.component.html"),
            styles: [__webpack_require__("./src/app/manager/manager-parking-list/manager-parking-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__manager_parking_service__["a" /* ManagerParkingService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["s" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MatDialog */]])
    ], ManagerParkingListComponent);
    return ManagerParkingListComponent;
}());

var ConfirmationDialog = /** @class */ (function () {
    function ConfirmationDialog(dialog) {
        this.dialog = dialog;
    }
    ConfirmationDialog.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(ConfirmationDialog, {
            width: '50px',
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.result = result;
        });
    };
    return ConfirmationDialog;
}());



/***/ }),

/***/ "./src/app/manager/manager-parking.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagerParkingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_view_parking__ = __webpack_require__("./src/app/model/view/parking.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ManagerParkingService = /** @class */ (function () {
    function ManagerParkingService(http) {
        this.http = http;
        this.parkingConfigureUrl = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiUrl + '/manager-configuration';
    }
    ManagerParkingService.prototype.getParking = function (id) {
        return this.http.get(this.parkingConfigureUrl + '/parking/' + id).map(function (json) {
            return __WEBPACK_IMPORTED_MODULE_5__model_view_parking__["a" /* Parking */].copyOf(json);
        });
    };
    ManagerParkingService.prototype.getParkings = function () {
        return this.http.get(this.parkingConfigureUrl + '/parkings', { observe: 'response' });
    };
    ManagerParkingService.prototype.saveParking = function (parking) {
        return this.http.post(this.parkingConfigureUrl + '/parking/save', parking, { observe: 'response' });
    };
    ManagerParkingService.prototype.deleteParking = function (parking) {
        return this.http.post(this.parkingConfigureUrl + '/parking/delete', parking, { observe: 'response' });
    };
    ManagerParkingService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], ManagerParkingService);
    return ManagerParkingService;
}());



/***/ }),

/***/ "./src/app/model/view/client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Client; });
var Client = /** @class */ (function () {
    function Client() {
    }
    return Client;
}());



/***/ }),

/***/ "./src/app/model/view/parking.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Parking; });
var Parking = /** @class */ (function () {
    function Parking() {
    }
    Parking.copyOf = function (parking) {
        return Object.assign(new Parking(), parking);
    };
    Parking.prototype.clone = function () {
        return Parking.copyOf(this);
    };
    return Parking;
}());



/***/ }),

/***/ "./src/app/parking-detail/favorites-add-configm-dialog/favorites-add-configm-dialog.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/parking-detail/favorites-add-configm-dialog/favorites-add-configm-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title style=\"text-align: center\">Enter the name for favorite parking?</h1>\n<form [formGroup]=\"addToFavoritesForm\" (ngSubmit)=\"onOkClick()\">\n    <mat-form-field>\n        <input matInput [(ngModel)]=\"data.name\" placeholder=\"Enter name\">\n    </mat-form-field>\n</form>\n<div mat-dialog-actions>\n    <button mat-button (click)=\"onNoClick()\" [mat-dialog-close]=\"data\">Cancel</button>\n    <button mat-button color=\"primary\" (click)=\"onOkClick()\" [mat-dialog-close]=\"data\"\n            cdkFocusInitial>Add\n    </button>\n</div>"

/***/ }),

/***/ "./src/app/parking-detail/favorites-add-configm-dialog/favorites-add-configm-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FavoritesAddConfigmDialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoriteAddData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var FavoritesAddConfigmDialogComponent = /** @class */ (function () {
    function FavoritesAddConfigmDialogComponent(dialogRef, data, formBuilder) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.formBuilder = formBuilder;
        this.addToFavoritesForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]('', []),
        });
    }
    FavoritesAddConfigmDialogComponent.prototype.ngOnInit = function () {
    };
    FavoritesAddConfigmDialogComponent.prototype.onNoClick = function () {
        this.data.confirmed = false;
    };
    FavoritesAddConfigmDialogComponent.prototype.onOkClick = function () {
        this.data.confirmed = true;
    };
    FavoritesAddConfigmDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-favorites-add-configm-dialog',
            template: __webpack_require__("./src/app/parking-detail/favorites-add-configm-dialog/favorites-add-configm-dialog.component.html"),
            styles: [__webpack_require__("./src/app/parking-detail/favorites-add-configm-dialog/favorites-add-configm-dialog.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialogRef */],
            FavoriteAddData,
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */]])
    ], FavoritesAddConfigmDialogComponent);
    return FavoritesAddConfigmDialogComponent;
}());

var FavoriteAddData = /** @class */ (function () {
    function FavoriteAddData() {
    }
    return FavoriteAddData;
}());



/***/ }),

/***/ "./src/app/parking-detail/parking-detail.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/parking-detail/parking-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" *ngIf=\"!parking\" class=\"text-center\">\n    <div class=\"row mx-auto mt-3 center-block\">\n        <div class=\"col-6 mx-auto my-auto text-center\">\n            <mat-spinner mode=\"indeterminate\" style=\"margin-left: 35%;\"></mat-spinner>\n        </div>\n    </div>\n</div>\n<div *ngIf=\"parking\">\n    <mat-card class=\"card col-sm-12 col-md-12 col-lg-12 mt-3\">\n        <mat-card-header>\n            <div mat-card-avatar class=\"example-header-image\">\n                <mat-icon>local_parking</mat-icon>\n            </div>\n            <div style=\"min-width: 70%;\">\n                <div>\n                    <h5>\n                        <b>\n                            <i>Address: </i>\n                        </b>{{parking.address}}</h5>\n                    <mat-card-subtitle>Provider: {{parking.providerName}}</mat-card-subtitle>\n                </div>\n            </div>\n            <div style=\"width: 100%\"></div>\n            <mat-icon style=\"color: #1e7e34\">attach_money</mat-icon>\n            <p style=\"font-size: 18px;\">{{parking.price}}</p>\n        </mat-card-header>\n\n        <mat-card-content>\n            <mat-list>\n                <mat-list-item>\n                    <mat-icon color=\"warn\" style=\"margin-right: 15px\" (click)=\"showOnMap(parking.latitude, parking.longitude)\">place\n                    </mat-icon>\n                    <span> {{parking.latitude}}, {{parking.longitude}}</span>\n                </mat-list-item>\n                <mat-divider></mat-divider>\n                <mat-list-item>\n                    <div class=\"col-4\">\n                        <span style=\"font-size:18px;\"><b><i>Add to favorites</i></b></span>\n                        <button mat-icon-button color=\"warn\" (click)=\"onParkingAddToFavoritesClick()\">\n                        <mat-icon>star_rate</mat-icon>\n                    </button>\n                </div>\n                </mat-list-item>\n                <mat-divider></mat-divider>\n                <mat-list-item>\n                    <div class=\"col-8\">\n                        <h5>\n                            <b>\n                                <i>Spots: </i>\n                            </b> General: {{parking.spotsCount}} / Available: {{parking.availableSpotsCount}}\n                        </h5>\n                    </div>\n                    <div class=\"col-2 ml-auto\">\n                        <button mat-raised-button color=\"primary\" (click)=\"refresh()\">Refresh\n                            <i class=\"material-icons\">&#xE863;</i>\n                        </button>\n                    </div>\n                </mat-list-item>\n                <mat-divider></mat-divider>\n                <mat-list-item>\n                    <div class=\"col-8\">\n                        <h5>\n                            <b>\n                                <i>Fullness: </i>\n                            </b>\n                        </h5>\n                    </div>\n                </mat-list-item>\n                <mat-list-item>\n                    <ngb-progressbar [type]=\"type\" [value]=\"value\" [max]=\"max\" style=\"width:100%; height:0.7em;\">\n                        <b>{{fullnessBarMessage}} {{parking.availableSpotsCount}} spot(s) left!</b>\n                    </ngb-progressbar>\n                </mat-list-item>\n\n\n                <mat-divider></mat-divider>\n            </mat-list>\n        </mat-card-content>\n        <mat-card-actions align=\"center\">\n            <ngb-accordion>\n                <ngb-panel id=\"preventchange-1\">\n                    <ng-template ngbPanelTitle>\n                        <div>\n                            <h5>\n                                <b> Show all spots</b>\n                            </h5>\n                        </div>\n                    </ng-template>\n                    <ng-template ngbPanelContent>\n                        <ngb-tabset justify=\"justified\">\n                            <ngb-tab>\n                                <ng-template ngbTabTitle>\n                                    <div>\n                                        <b>Show all spots</b>\n                                    </div>\n                                </ng-template>\n                                <ng-template ngbTabContent>\n                                    <table class=\"table table-hover\">\n                                        <thead>\n                                            <tr class=\"text-center\">\n                                                <th scope=\"col\">Spot number #</th>\n                                                <th scope=\"col\">Availability</th>\n                                            </tr>\n                                        </thead>\n                                        <tbody>\n                                            <tr *ngFor=\"let spot of spots\" class=\"text-center\">\n                                                <th scope=\"row\">{{spot.id}}</th>\n\n                                                <td scope=\"row\" *ngIf=\"!!spot.isFree; else busy\">\n                                                    <button type=\"button\" class=\"btn btn-sm btn-success\" disabled>\n                                                        Available\n                                                    </button>\n                                                </td>\n\n                                                <ng-template #busy>\n                                                    <td scope=\"row\">\n                                                        <button type=\"button\" class=\"btn btn-sm btn-secondary\" disabled>\n                                                            Not Available\n                                                        </button>\n                                                    </td>\n                                                </ng-template>\n                                            </tr>\n                                        </tbody>\n                                    </table>\n                                </ng-template>\n                            </ngb-tab>\n                            <ngb-tab>\n                                <ng-template ngbTabTitle>\n                                    <div>\n                                        <b>Show only available spots</b>\n                                    </div>\n                                </ng-template>\n                                <ng-template ngbTabContent>\n                                    <table class=\"table table-hover\">\n                                        <thead>\n                                            <tr class=\"text-center\">\n                                                <th scope=\"col\">Spot number #</th>\n                                                <th scope=\"col\">Availability</th>\n                                            </tr>\n                                        </thead>\n                                        <tbody>\n                                            <tr *ngFor=\"let spot of freeSpots\" class=\"text-center\">\n                                                <th scope=\"row\">{{spot.id}}</th>\n\n                                                <td scope=\"row\">\n                                                    <button type=\"button\" class=\"btn btn-sm btn-success\" disabled>\n                                                        Available\n                                                    </button>\n                                                </td>\n\n                                            </tr>\n                                        </tbody>\n                                    </table>\n                                </ng-template>\n                            </ngb-tab>\n                        </ngb-tabset>\n\n                    </ng-template>\n                </ngb-panel>\n            </ngb-accordion>\n        </mat-card-actions>\n    </mat-card>\n\n\n</div>"

/***/ }),

/***/ "./src/app/parking-detail/parking-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParkingDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__parking_service__ = __webpack_require__("./src/app/parking.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__favorites_add_configm_dialog_favorites_add_configm_dialog_component__ = __webpack_require__("./src/app/parking-detail/favorites-add-configm-dialog/favorites-add-configm-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ParkingDetailComponent = /** @class */ (function () {
    function ParkingDetailComponent(route, parkingService, location, snackBar, dialog) {
        this.route = route;
        this.parkingService = parkingService;
        this.location = location;
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.thirtySecInterval = 30000;
        this.favoriteNameInputHide = true;
    }
    ParkingDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getParking().subscribe(function (parking) {
            _this.fullnessBarCount();
        });
        this.getSpots();
        this.getAvailableSpots();
        setInterval(this.refresh(), this.thirtySecInterval);
    };
    ParkingDetailComponent.prototype.refresh = function () {
        var _this = this;
        this.getParking().subscribe(function (parking) {
            _this.fullnessBarCount();
        });
        this.getSpots();
        this.getAvailableSpots();
    };
    ParkingDetailComponent.prototype.fullnessBarCount = function () {
        this.max = this.parking.spotsCount;
        this.value = this.parking.spotsCount - this.parking.availableSpotsCount;
        if (this.value < (this.max * 0.6)) {
            this.type = 'success';
            this.fullnessBarMessage = 'Welcome!';
        }
        else if (this.value < (this.max * 0.75)) {
            this.type = 'info';
            this.fullnessBarMessage = 'You have a chance!';
        }
        else if (this.value < (this.max * 0.99)) {
            this.type = 'warning';
            this.fullnessBarMessage = 'Hurry up!';
        }
        else {
            this.type = 'danger';
            this.fullnessBarMessage = 'Sorry, all spots are busy!';
        }
    };
    ParkingDetailComponent.prototype.getParking = function () {
        var _this = this;
        var id = parseInt(this.route.snapshot.paramMap.get('id'));
        var o = this.parkingService.getParking(id);
        o.subscribe(function (parking) { return _this.parking = parking; });
        return o;
    };
    ParkingDetailComponent.prototype.getSpots = function () {
        var _this = this;
        var id = parseInt(this.route.snapshot.paramMap.get('id'));
        this.parkingService.getSpotsByParkingId(id)
            .subscribe(function (spots) { return _this.spots = spots; });
    };
    ParkingDetailComponent.prototype.getAvailableSpots = function () {
        var _this = this;
        var id = parseInt(this.route.snapshot.paramMap.get('id'));
        this.parkingService.getAvailableSpotsByParkingId(id)
            .subscribe(function (spots) { return _this.freeSpots = spots; });
    };
    ParkingDetailComponent.prototype.onParkingAddToFavoritesClick = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__favorites_add_configm_dialog_favorites_add_configm_dialog_component__["b" /* FavoritesAddConfigmDialogComponent */], {
            data: new __WEBPACK_IMPORTED_MODULE_5__favorites_add_configm_dialog_favorites_add_configm_dialog_component__["a" /* FavoriteAddData */]()
        });
        dialogRef.afterClosed().subscribe(function (data) {
            if (data.confirmed) {
                // this.managerParkingService.deleteParking(parking)
                //     .subscribe(response => this.onDeleteResponse(parking, response));
            }
        });
    };
    ParkingDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-parking-detail',
            template: __webpack_require__("./src/app/parking-detail/parking-detail.component.html"),
            styles: [__webpack_require__("./src/app/parking-detail/parking-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__parking_service__["a" /* ParkingService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["s" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MatDialog */]])
    ], ParkingDetailComponent);
    return ParkingDetailComponent;
}());



/***/ }),

/***/ "./src/app/parking.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParkingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ParkingService = /** @class */ (function () {
    function ParkingService(http) {
        this.http = http;
        this.parkingNearbyUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + '/parkings-nearby/';
        this.parkingDetailUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + '/parkingdetail/';
    }
    ParkingService.prototype.getParkingsNearby = function (latitude, longitude, radius) {
        return this.http.get(this.parkingNearbyUrl, {
            params: {
                latitude: latitude.toString(),
                longitude: longitude.toString(),
                radius: radius.toString(),
            },
            observe: 'response'
        });
    };
    ParkingService.prototype.getParking = function (id) {
        return this.http.get(this.parkingDetailUrl + id);
    };
    ParkingService.prototype.getSpotsByParkingId = function (id) {
        return this.http.get(this.parkingDetailUrl + id + '/spots');
    };
    ParkingService.prototype.getAvailableSpotsByParkingId = function (id) {
        return this.http.get(this.parkingDetailUrl + id + '/freespots');
    };
    ParkingService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], ParkingService);
    return ParkingService;
}());



/***/ }),

/***/ "./src/app/service/ip-location.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IpLocationService; });
/* unused harmony export IpLocation */
/* unused harmony export IpLocationResponse */
/* unused harmony export IpLocationError */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IpLocationService = /** @class */ (function () {
    function IpLocationService(http) {
        this.http = http;
    }
    IpLocationService.prototype.getLocation = function (callback, errorCallback) {
        //OR http://freegeoip.net/json/
        this.http.get('http://ip-api.com/json/').subscribe(function (result) {
            if (result.status === 'success') {
                var response = result;
                var ipLocation = new IpLocation();
                ipLocation.address = response.city + ', ' + response.regionName + ', ' + response.country;
                ipLocation.latitude = Number(response.lat);
                ipLocation.longitude = Number(response.lon);
                callback(ipLocation);
            }
            else {
                errorCallback(result);
            }
        });
    };
    IpLocationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], IpLocationService);
    return IpLocationService;
}());

var IpLocation = /** @class */ (function () {
    function IpLocation() {
    }
    return IpLocation;
}());

var IpLocationResponse = /** @class */ (function () {
    function IpLocationResponse() {
    }
    return IpLocationResponse;
}());

var IpLocationError = /** @class */ (function () {
    function IpLocationError() {
    }
    return IpLocationError;
}());



/***/ }),

/***/ "./src/app/statistic/parking-statistic/parking-statistic.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/statistic/parking-statistic/parking-statistic.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  parking-statistic works!\n</p>\n"

/***/ }),

/***/ "./src/app/statistic/parking-statistic/parking-statistic.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParkingStatisticComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ParkingStatisticComponent = /** @class */ (function () {
    function ParkingStatisticComponent() {
    }
    ParkingStatisticComponent.prototype.ngOnInit = function () {
    };
    ParkingStatisticComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-parking-statistic',
            template: __webpack_require__("./src/app/statistic/parking-statistic/parking-statistic.component.html"),
            styles: [__webpack_require__("./src/app/statistic/parking-statistic/parking-statistic.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ParkingStatisticComponent);
    return ParkingStatisticComponent;
}());



/***/ }),

/***/ "./src/app/statistic/statistic.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/statistic/statistic.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 class=\"text-center font-weight-bold\">Choose what statistic you wont to see:</h3>\n<div class=\"container text-center\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <hr>\n      <h4 class=\"mb-4\">Parking statistic</h4>\n      <div class=\"row\">\n        <div class=\"col-12\">\n          <mat-icon>arrow_downward</mat-icon>\n        </div>\n      </div>\n      <button mat-raised-button [routerLink]=\"['parkingstatistic']\"\n              color=\"primary\" class=\"mb-4\" style=\"width:60%;\">Parking statistic\n      </button>\n\n    </div>\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/statistic/statistic.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatisticComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StatisticComponent = /** @class */ (function () {
    function StatisticComponent() {
    }
    StatisticComponent.prototype.ngOnInit = function () {
    };
    StatisticComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-statistic',
            template: __webpack_require__("./src/app/statistic/statistic.component.html"),
            styles: [__webpack_require__("./src/app/statistic/statistic.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StatisticComponent);
    return StatisticComponent;
}());



/***/ }),

/***/ "./src/app/superuser-configuration/providers/add-provider/add-provider.component.css":
/***/ (function(module, exports) {

module.exports = ".example-form {\n    min-width: 150px;\n    max-width: 500px;\n    width: 100%;\n    margin-top: 50px;\n}\n.container-fluid {\n    margin-top: 100px;\n}\n.example-full-width {\n    width: 100%;\n}\n.btn-success {\n    color: darkgrey;\n    background-color: #6610f2;;\n    border-color: darkgrey;\n}\n.btn-success:hover {\n    color: #fff;\n    background-color: #6610f2;;\n    border-color: #1e7e34;\n}\n.btn-success:focus, .btn-success.focus {\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\n            box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\n}"

/***/ }),

/***/ "./src/app/superuser-configuration/providers/add-provider/add-provider.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <legend>Add provider</legend>\n    <form class=\"example-form\" [formGroup]=\"providerForm\" (ngSubmit)=\"saveProvider()\">\n        <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Company name\" formControlName=\"name\">\n            <mat-error *ngIf=\"nameControl.hasError('required')\">\n                Company name is <strong>required</strong>\n            </mat-error>\n        </mat-form-field>\n        <table class=\"example-full-width\" cellspacing=\"0\">\n            <tr>\n                <td>\n                    <mat-form-field class=\"example-full-width\">\n                        <input matInput placeholder=\"City\" formControlName=\"city\">\n                        <mat-error *ngIf=\"cityControl.hasError('required')\">\n                            City name is <strong>required</strong>\n                        </mat-error>\n                    </mat-form-field>\n                </td>\n                <td>\n                    <mat-form-field class=\"example-full-width\">\n                        <input matInput placeholder=\"Street\" formControlName=\"street\">\n                        <mat-error *ngIf=\"streetControl.hasError('required')\">\n                            Street name is <strong>required</strong>\n                        </mat-error>\n                    </mat-form-field>\n                </td>\n                <td>\n                    <mat-form-field class=\"example-full-width\">\n                        <input matInput placeholder=\"Number building\"\n                               formControlName=\"building\">\n                        <mat-error *ngIf=\"buildingControl.hasError('required')\">\n                            Building number is <strong>required</strong>\n                        </mat-error>\n                        <mat-error\n                                *ngIf=\"buildingControl.hasError('pattern')&&!buildingControl.hasError('required')\">\n                            Wrong style. Example: <strong>101b</strong>\n                        </mat-error>\n                    </mat-form-field>\n                </td>\n            </tr>\n        </table>\n        <div class=\"row offset-5 submit\">\n            <button mat-button class=\"btn btn-success\" [disabled]=\"!providerForm.valid\">Save</button>\n        </div>\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/superuser-configuration/providers/add-provider/add-provider.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddProviderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__provider_service__ = __webpack_require__("./src/app/superuser-configuration/providers/provider.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddProviderComponent = /** @class */ (function () {
    function AddProviderComponent(providerService, snackBar, formBuilder) {
        this.providerService = providerService;
        this.snackBar = snackBar;
        this.formBuilder = formBuilder;
        this.nameControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["l" /* Validators */].required
        ]);
        this.cityControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["l" /* Validators */].required
        ]);
        this.streetControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["l" /* Validators */].required
        ]);
        this.buildingControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["l" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["l" /* Validators */].pattern('^\\d+[a-zA-Z]{0,1}$')
        ]);
    }
    AddProviderComponent.prototype.ngOnInit = function () {
        this.providerForm = this.formBuilder.group({
            name: this.nameControl,
            city: this.cityControl,
            street: this.streetControl,
            building: this.buildingControl
        });
    };
    AddProviderComponent.prototype.saveProvider = function () {
        var _this = this;
        this.providerRequest = this.providerForm.value;
        this.providerService.save(this.providerRequest).subscribe(function (response) {
            _this.snackBar.open('Provider added sucsessfully.', null, {
                duration: 2000
            });
        });
        ;
    };
    AddProviderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-add-provider',
            template: __webpack_require__("./src/app/superuser-configuration/providers/add-provider/add-provider.component.html"),
            styles: [__webpack_require__("./src/app/superuser-configuration/providers/add-provider/add-provider.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__provider_service__["a" /* ProviderService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["s" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */]])
    ], AddProviderComponent);
    return AddProviderComponent;
}());



/***/ }),

/***/ "./src/app/superuser-configuration/providers/provider-detail/provider-detail.component.css":
/***/ (function(module, exports) {

module.exports = ".banButton{\n    color: red;\n}\n\n.active {\n    color: green;\n}\n\n.noActive {\n    color: red;\n}\n\n.subtitleHeader {\n    color: #54456f;\n}\n\n"

/***/ }),

/***/ "./src/app/superuser-configuration/providers/provider-detail/provider-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"provider\">\n    <br/>\n    <br/>\n    <mat-card class=\"card offset-sm-1 col-sm-10 offset-md-1 col-md-10 offset-lg-1 col-lg-10\">\n        <mat-card-header>\n            <div mat-card-avatar class=\"example-header-image\">\n                <mat-icon>local_parking</mat-icon>\n            </div>\n            <div style=\"min-width: 70%;\">\n                <div>\n                    <mat-card-title>Company name: {{provider.name}}\n                    </mat-card-title>\n                    <mat-card-subtitle><span class=\"subtitleHeader\">Address:</span> {{provider.city}}, {{provider.street}} street, {{provider.building}}</mat-card-subtitle>\n                    <mat-card-subtitle><span class=\"subtitleHeader\">Provider id:</span> {{provider.id}}</mat-card-subtitle>\n                    <mat-card-subtitle><span class=\"subtitleHeader\">Provider state:</span> <span *ngIf='provider.active; else elseBlock'><span class=\"active\">Active</span></span>\n                        <ng-template #elseBlock><span class=\"noActive\"> Non active</span></ng-template></mat-card-subtitle>\n                    <mat-card-subtitle><span class=\"subtitleHeader\">Provider parkings:</span> <span *ngFor='let number of provider.parkingIds'> Parking №{{number}} <a\n                            routerLink=\"/parkingdetail/{{number}}\">(Details)</a> </span></mat-card-subtitle>\n                </div>\n            </div>\n            <div style=\"width: 100%\"></div>\n        </mat-card-header>\n\n        <mat-card-actions align=\"right\">\n            <button mat-button routerLink=\"/configuration/provider/update/{{provider.id}}\" color=\"primary\">EDIT</button>\n        </mat-card-actions>\n    </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/superuser-configuration/providers/provider-detail/provider-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProviderDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__provider_service__ = __webpack_require__("./src/app/superuser-configuration/providers/provider.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProviderDetailComponent = /** @class */ (function () {
    function ProviderDetailComponent(route, providerService) {
        this.route = route;
        this.providerService = providerService;
    }
    ProviderDetailComponent.prototype.ngOnInit = function () {
        this.getProviderDetail();
    };
    ProviderDetailComponent.prototype.getProviderDetail = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.providerService.getDetail(id)
            .subscribe(function (provider) { return _this.provider = provider; });
    };
    ProviderDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-provider-detail',
            template: __webpack_require__("./src/app/superuser-configuration/providers/provider-detail/provider-detail.component.html"),
            styles: [__webpack_require__("./src/app/superuser-configuration/providers/provider-detail/provider-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__provider_service__["a" /* ProviderService */]])
    ], ProviderDetailComponent);
    return ProviderDetailComponent;
}());



/***/ }),

/***/ "./src/app/superuser-configuration/providers/provider-list/provider-list.component.css":
/***/ (function(module, exports) {

module.exports = ".example-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n}\n\n.example-container > * {\n    width: 100%;\n}\n\n.example-container form {\n    margin-bottom: 20px;\n}\n\n.example-container form > * {\n    margin: 5px 0;\n}\n\n.example-container .mat-radio-button {\n    margin: 0 5px;\n}\n\n.hr-red {\n    margin-bottom: 50px;\n    background-color: blueviolet;\n}\n\n.example-radio-group {\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n}\n\n.example-radio-button {\n    margin: 5px;\n}\n\n.example-selected-value {\n    margin: 15px 0;\n}\n\n.parent {\n    /*background-color: rgb(252, 252, 252);*/\n    z-index: 1030;\n}\n\n.filter {\n    position: fixed;\n    right: 0;\n    bottom: 0;\n    left: 0;\n}\n\n.progress-bar {\n    margin-bottom: 10px;\n}\n\napp-parking-list {\n    height: 100%;\n}\n\n.float {\n    position: fixed;\n    width: 60px;\n    height: 60px;\n    bottom: 20px;\n    right: 20px;\n}\n\n"

/***/ }),

/***/ "./src/app/superuser-configuration/providers/provider-list/provider-list.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 class=\"text-center\">Providers list:</h3>\n<div class=\"parent row\">\n    <div class=\"offset-11\">\n        <a routerLink=\"/configuration/provider/add\" class=\"float\" mat-fab>\n            <mat-icon color=\"primary\">add</mat-icon>\n        </a>\n    </div>\n    <div class=\"col-md-12\">\n        <ul>\n            <div *ngFor=\"let provider of providers\">\n                <mat-card class=\"card offset-sm-1 col-sm-10 offset-md-1 col-md-10 offset-lg-1 col-lg-10\">\n                    <mat-card-header>\n                        <div mat-card-avatar class=\"example-header-image\">\n                            <mat-icon>local_parking</mat-icon>\n                        </div>\n                        <div style=\"min-width: 70%;\">\n                            <div>\n                                <mat-card-title>{{provider.city}}, {{provider.street}} street, {{provider.building}}\n                                </mat-card-title>\n                                <mat-card-subtitle>{{provider.name}}</mat-card-subtitle>\n                            </div>\n                        </div>\n                        <div style=\"width: 100%\"></div>\n                    </mat-card-header>\n\n                    <mat-card-actions align=\"right\">\n                        <button mat-button routerLink='{{provider.id}}' color=\"primary\">MORE INFO</button>\n                        <button mat-button routerLink=\"/configuration/provider/update/{{provider.id}}\" color=\"warn\">\n                            EDIT\n                        </button>\n                    </mat-card-actions>\n                </mat-card>\n                <hr/>\n            </div>\n        </ul>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"filter offset-1 col-md-10\">\n        <mat-divider style=\"border-color: purple;\"></mat-divider>\n        <mat-card class=\"card\">\n            <form class=\"example-form\" [formGroup]=\"providerFilterForm\" (ngSubmit)=\"getProviders()\">\n                <div class=\"row\">\n                    <mat-form-field class=\"col-md-3\">\n                        <input matInput placeholder=\"Company name\" formControlName=\"companyName\">\n                    </mat-form-field>\n                    <div class=\"col-md-2\">\n                        <label><input formControlName=\"active\" type=\"radio\" value=\"true\"> Active</label>\n                    </div>\n                    <div class=\"col-md-2\">\n                        <div class=\"radio\">\n                            <label><input formControlName=\"active\" type=\"radio\" value=\"false\"> Non active</label>\n                        </div>\n                    </div>\n                    <div class=\"col-md-2\">\n                        <div class=\"radio disabled\">\n                            <label><input formControlName=\"active\" type=\"radio\" value=\"all\"> All</label>\n                        </div>\n                    </div>\n                    <div class=\"col-md-3\">\n                        <div *ngIf=\"providers\">\n                            <h5>Found {{providers.length}} matches.</h5>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"offset-5 col-6\">\n                        <button mat-raised-button color=\"primary\" class=\"mt-5\">Search</button>\n                    </div>\n                </div>\n            </form>\n\n        </mat-card>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/superuser-configuration/providers/provider-list/provider-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProviderListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__provider_service__ = __webpack_require__("./src/app/superuser-configuration/providers/provider.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProviderListComponent = /** @class */ (function () {
    function ProviderListComponent(providerService) {
        this.providerService = providerService;
        this.providerFilterForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormGroup */]({
            active: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]('all', []),
            companyName: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]('', [])
        });
    }
    ProviderListComponent.prototype.ngOnInit = function () {
        this.getProviders();
    };
    ProviderListComponent.prototype.getProviders = function () {
        var _this = this;
        this.providerFilter = this.providerFilterForm.value;
        this.providerService.getAll(this.providerFilter)
            .subscribe(function (providers) { return _this.providers = providers; });
    };
    ProviderListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-provider-list',
            template: __webpack_require__("./src/app/superuser-configuration/providers/provider-list/provider-list.component.html"),
            styles: [__webpack_require__("./src/app/superuser-configuration/providers/provider-list/provider-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__provider_service__["a" /* ProviderService */]])
    ], ProviderListComponent);
    return ProviderListComponent;
}());



/***/ }),

/***/ "./src/app/superuser-configuration/providers/provider.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProviderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProviderService = /** @class */ (function () {
    function ProviderService(http) {
        this.http = http;
        this.providerUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + '/providers';
    }
    ProviderService.prototype.getAll = function (providerFilter) {
        return this.http.post(this.providerUrl, providerFilter);
    };
    ProviderService.prototype.getDetail = function (id) {
        return this.http.get(this.providerUrl + '/' + id);
    };
    ProviderService.prototype.save = function (providerRequest) {
        return this.http.post(this.providerUrl + '/save', providerRequest);
    };
    ProviderService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], ProviderService);
    return ProviderService;
}());



/***/ }),

/***/ "./src/app/superuser-configuration/providers/update-provider/update-provider.component.css":
/***/ (function(module, exports) {

module.exports = ".example-form {\n    min-width: 150px;\n    max-width: 500px;\n    width: 100%;\n    margin-top: 50px;\n}\n.container-fluid {\n    margin-top: 100px;\n}\n.example-full-width {\n    width: 100%;\n}\n.btn-success {\n    color: darkgrey;\n    background-color: #6610f2;;\n    border-color: darkgrey;\n}\n.btn-success:hover {\n    color: #fff;\n    background-color: #6610f2;;\n    border-color: #1e7e34;\n}\n.btn-success:focus, .btn-success.focus {\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\n            box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\n}\n.radioButtondemoBasicUsage body {\n    padding: 20px; }\n.radioButtondemoBasicUsage hr {\n    margin-left: -20px;\n    opacity: 0.3; }\n.radioButtondemoBasicUsage md-radio-group {\n    width: 150px; }\n.radioButtondemoBasicUsage p:last-child {\n    padding-bottom: 50px; }\n.radioButtondemoBasicUsage [ng-controller] {\n    padding: 0 20px; }\n.radioButtondemoBasicUsage .radioValue {\n    margin-left: 5px;\n    color: #0f9d58;\n    font-weight: bold;\n    padding: 5px; }\n.radioButtondemoBasicUsage md-icon {\n    margin: 0 20px 20px;\n    width: 128px;\n    height: 128px; }\n.radioButtondemoBasicUsage .ipsum {\n    color: saddlebrown;\n    font-size: 0.9em; }\n"

/***/ }),

/***/ "./src/app/superuser-configuration/providers/update-provider/update-provider.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <legend>Update provider</legend>\n    <div *ngIf=\"provider\">\n    <form class=\"example-form\" [formGroup]=\"providerForm\" (ngSubmit)=\"updateProvider()\">\n        <mat-form-field class=\"example-full-width\">\n            <input matInput [(ngModel)]=\"provider.name\" placeholder=\"Company name\" formControlName=\"name\">\n            <mat-error *ngIf=\"nameControl.hasError('required')\">\n                Company name is <strong>required</strong>\n            </mat-error>\n        </mat-form-field>\n        <table class=\"example-full-width\" cellspacing=\"0\">\n            <tr>\n                <td>\n                    <mat-form-field class=\"example-full-width\">\n                        <input matInput [(ngModel)]=\"provider.city\" placeholder=\"City\" formControlName=\"city\">\n                        <mat-error *ngIf=\"cityControl.hasError('required')\">\n                            City name is <strong>required</strong>\n                        </mat-error>\n                    </mat-form-field>\n                </td>\n                <td>\n                    <mat-form-field class=\"example-full-width\">\n                        <input matInput [(ngModel)]=\"provider.street\" placeholder=\"Street\" formControlName=\"street\">\n                        <mat-error *ngIf=\"streetControl.hasError('required')\">\n                            Street name is <strong>required</strong>\n                        </mat-error>\n                    </mat-form-field>\n                </td>\n                <td>\n                    <mat-form-field class=\"example-full-width\">\n                        <input matInput [(ngModel)]=\"provider.building\" placeholder=\"Number building\"\n                               formControlName=\"building\">\n                        <mat-error *ngIf=\"buildingControl.hasError('required')\">\n                            Building number is <strong>required</strong>\n                        </mat-error>\n                        <mat-error\n                                *ngIf=\"buildingControl.hasError('pattern')&&!buildingControl.hasError('required')\">\n                            Wrong style. Example: <strong>101b</strong>\n                        </mat-error>\n                    </mat-form-field>\n                </td>\n                <td>\n                    <div class=\"radio\">\n                        <label><input [(ngModel)]='provider.active' formControlName=\"active\" type=\"radio\" value=\"true\">\n                            Active</label>\n                    </div>\n                    <div class=\"radio\">\n                        <label><input [(ngModel)]='provider.active' formControlName=\"active\" type=\"radio\" value=\"false\">\n                            Non active</label>\n                    </div>\n                </td>\n            </tr>\n        </table>\n        <div class=\"row offset-5 submit\">\n            <button mat-button class=\"btn btn-success\" [disabled]=\"!providerForm.valid\">Save</button>\n        </div>\n    </form>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/superuser-configuration/providers/update-provider/update-provider.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateProviderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__provider_service__ = __webpack_require__("./src/app/superuser-configuration/providers/provider.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UpdateProviderComponent = /** @class */ (function () {
    function UpdateProviderComponent(providerService, snackBar, formBuilder, route) {
        this.providerService = providerService;
        this.snackBar = snackBar;
        this.formBuilder = formBuilder;
        this.route = route;
        this.nameControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* Validators */].required
        ]);
        this.cityControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* Validators */].required
        ]);
        this.streetControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* Validators */].required
        ]);
        this.buildingControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* Validators */].pattern('^\\d+[a-zA-Z]{0,1}$')
        ]);
        this.activeControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* Validators */].required]);
    }
    UpdateProviderComponent.prototype.ngOnInit = function () {
        this.getProvider();
        this.providerForm = this.formBuilder.group({
            name: this.nameControl,
            city: this.cityControl,
            street: this.streetControl,
            building: this.buildingControl,
            active: this.activeControl
        });
    };
    UpdateProviderComponent.prototype.getProvider = function () {
        var _this = this;
        var id = parseInt(this.route.snapshot.paramMap.get('id'));
        this.providerService.getDetail(id).subscribe(function (provider) { return _this.provider = provider; });
    };
    UpdateProviderComponent.prototype.updateProvider = function () {
        var _this = this;
        this.providerRequest = this.providerForm.value;
        this.providerRequest.id = parseInt(this.route.snapshot.paramMap.get('id'));
        this.providerService.save(this.providerRequest).subscribe(function (response) {
            _this.snackBar.open('Provider updated sucsessfully.', null, {
                duration: 2000
            });
        });
    };
    UpdateProviderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-update-provider',
            template: __webpack_require__("./src/app/superuser-configuration/providers/update-provider/update-provider.component.html"),
            styles: [__webpack_require__("./src/app/superuser-configuration/providers/update-provider/update-provider.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__provider_service__["a" /* ProviderService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["s" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], UpdateProviderComponent);
    return UpdateProviderComponent;
}());



/***/ }),

/***/ "./src/app/superuser-configuration/superuser-configuration.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/superuser-configuration/superuser-configuration.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 class=\"text-center font-weight-bold\">Choose what do you want to configure:</h3>\n<div class=\"container text-center\">\n    <div class=\"row\">\n        <div class=\"col-12\">\n            <hr>\n            <h4 class=\"mb-4\">Providers configuration(edit/add/search)</h4>\n            <div class=\"row\">\n                    <div class=\"col-12\">\n                            <mat-icon>arrow_downward</mat-icon>\n                    </div>\n                </div>\n            <button mat-raised-button [routerLink]=\"['providers']\"\n                    color=\"primary\" class=\"mb-4\" style=\"width:60%;\">Providers\n            </button>\n\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-12\">\n                <hr>\n                <h4 class=\"mb-4\">Parking lots configuration(edit/add/search)</h4>\n                <div class=\"row\">\n                        <div class=\"col-12\">\n                                <mat-icon>arrow_downward</mat-icon>\n                        </div>\n                    </div>\n            <button mat-raised-button [routerLink]=\"['../manager-configuration/parkings']\"\n                    color=\"primary\" class=\"mb-4\" style=\"width:60%;\">Parking lots\n            </button>\n\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-12\">\n                <hr>\n                <h4 class=\"mb-4\">Clients configuration(edit/add/search)</h4>\n                <div class=\"row\">\n                    <div class=\"col-12\">\n                            <mat-icon>arrow_downward</mat-icon>\n                    </div>\n                </div>\n            <button mat-raised-button [routerLink]=\"['clients']\"\n                    color=\"primary\" class=\"mb-4\" style=\"width:60%;\">Clients\n            </button>\n\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/superuser-configuration/superuser-configuration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuperuserConfigurationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_provider_service__ = __webpack_require__("./src/app/superuser-configuration/providers/provider.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SuperuserConfigurationComponent = /** @class */ (function () {
    function SuperuserConfigurationComponent(providerService) {
        this.providerService = providerService;
    }
    SuperuserConfigurationComponent.prototype.ngOnInit = function () {
    };
    SuperuserConfigurationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-superuser-configuration',
            template: __webpack_require__("./src/app/superuser-configuration/superuser-configuration.component.html"),
            styles: [__webpack_require__("./src/app/superuser-configuration/superuser-configuration.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_provider_service__["a" /* ProviderService */]])
    ], SuperuserConfigurationComponent);
    return SuperuserConfigurationComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    apiUrl: 'http://localhost:8080',
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");





if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map