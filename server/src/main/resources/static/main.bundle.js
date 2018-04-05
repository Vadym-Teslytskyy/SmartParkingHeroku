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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
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

module.exports = "/*!\n * Bootstrap v3.3.7 (http://getbootstrap.com)\n * Copyright 2011-2016 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */\n/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\nhtml {\n  font-family: sans-serif;\n  -webkit-text-size-adjust: 100%;\n      -ms-text-size-adjust: 100%;\n}\nbody {\n  margin: 0;\n}\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  vertical-align: baseline;\n}\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n[hidden],\ntemplate {\n  display: none;\n}\na {\n  background-color: transparent;\n}\na:active,\na:hover {\n  outline: 0;\n}\nabbr[title] {\n  border-bottom: 1px dotted;\n}\nb,\nstrong {\n  font-weight: bold;\n}\ndfn {\n  font-style: italic;\n}\nh1 {\n  margin: .67em 0;\n  font-size: 2em;\n}\nmark {\n  color: #000;\n  background: #ff0;\n}\nsmall {\n  font-size: 80%;\n}\nsub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline;\n}\nsup {\n  top: -.5em;\n}\nsub {\n  bottom: -.25em;\n}\nimg {\n  border: 0;\n}\nsvg:not(:root) {\n  overflow: hidden;\n}\nfigure {\n  margin: 1em 40px;\n}\nhr {\n  height: 0;\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n}\npre {\n  overflow: auto;\n}\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  margin: 0;\n  font: inherit;\n  color: inherit;\n}\nbutton {\n  overflow: visible;\n}\nbutton,\nselect {\n  text-transform: none;\n}\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  cursor: pointer;\n}\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  padding: 0;\n  border: 0;\n}\ninput {\n  line-height: normal;\n}\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 0;\n}\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\ninput[type=\"search\"] {\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n  -webkit-appearance: textfield;\n}\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\nfieldset {\n  padding: .35em .625em .75em;\n  margin: 0 2px;\n  border: 1px solid #c0c0c0;\n}\nlegend {\n  padding: 0;\n  border: 0;\n}\ntextarea {\n  overflow: auto;\n}\noptgroup {\n  font-weight: bold;\n}\ntable {\n  border-spacing: 0;\n  border-collapse: collapse;\n}\ntd,\nth {\n  padding: 0;\n}\n/*! Source: https://github.com/h5bp/html5-boilerplate/blob/master/src/css/main.css */\n@media print {\n  *,\n  *:before,\n  *:after {\n    color: #000 !important;\n    text-shadow: none !important;\n    background: transparent !important;\n    -webkit-box-shadow: none !important;\n            box-shadow: none !important;\n  }\n  a,\n  a:visited {\n    text-decoration: underline;\n  }\n  a[href]:after {\n    content: \" (\" attr(href) \")\";\n  }\n  abbr[title]:after {\n    content: \" (\" attr(title) \")\";\n  }\n  a[href^=\"#\"]:after,\n  a[href^=\"javascript:\"]:after {\n    content: \"\";\n  }\n  pre,\n  blockquote {\n    border: 1px solid #999;\n\n    page-break-inside: avoid;\n  }\n  thead {\n    display: table-header-group;\n  }\n  tr,\n  img {\n    page-break-inside: avoid;\n  }\n  img {\n    max-width: 100% !important;\n  }\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3;\n  }\n  h2,\n  h3 {\n    page-break-after: avoid;\n  }\n  .navbar {\n    display: none;\n  }\n  .btn > .caret,\n  .dropup > .btn > .caret {\n    border-top-color: #000 !important;\n  }\n  .label {\n    border: 1px solid #000;\n  }\n  .table {\n    border-collapse: collapse !important;\n  }\n  .table td,\n  .table th {\n    background-color: #fff !important;\n  }\n  .table-bordered th,\n  .table-bordered td {\n    border: 1px solid #ddd !important;\n  }\n}\n@font-face {\n  font-family: 'Glyphicons Halflings';\n\n  src: url('glyphicons-halflings-regular.f4769f9bdb7466be6508.eot');\n  src: url('glyphicons-halflings-regular.f4769f9bdb7466be6508.eot?#iefix') format('embedded-opentype'), url('glyphicons-halflings-regular.448c34a56d699c29117a.woff2') format('woff2'), url('glyphicons-halflings-regular.fa2772327f55d8198301.woff') format('woff'), url('glyphicons-halflings-regular.e18bbf611f2a2e43afc0.ttf') format('truetype'), url('glyphicons-halflings-regular.89889688147bd7575d63.svg#glyphicons_halflingsregular') format('svg');\n}\n.glyphicon {\n  position: relative;\n  top: 1px;\n  display: inline-block;\n  font-family: 'Glyphicons Halflings';\n  font-style: normal;\n  font-weight: normal;\n  line-height: 1;\n\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.glyphicon-asterisk:before {\n  content: \"\\002a\";\n}\n.glyphicon-plus:before {\n  content: \"\\002b\";\n}\n.glyphicon-euro:before,\n.glyphicon-eur:before {\n  content: \"\\20ac\";\n}\n.glyphicon-minus:before {\n  content: \"\\2212\";\n}\n.glyphicon-cloud:before {\n  content: \"\\2601\";\n}\n.glyphicon-envelope:before {\n  content: \"\\2709\";\n}\n.glyphicon-pencil:before {\n  content: \"\\270f\";\n}\n.glyphicon-glass:before {\n  content: \"\\e001\";\n}\n.glyphicon-music:before {\n  content: \"\\e002\";\n}\n.glyphicon-search:before {\n  content: \"\\e003\";\n}\n.glyphicon-heart:before {\n  content: \"\\e005\";\n}\n.glyphicon-star:before {\n  content: \"\\e006\";\n}\n.glyphicon-star-empty:before {\n  content: \"\\e007\";\n}\n.glyphicon-user:before {\n  content: \"\\e008\";\n}\n.glyphicon-film:before {\n  content: \"\\e009\";\n}\n.glyphicon-th-large:before {\n  content: \"\\e010\";\n}\n.glyphicon-th:before {\n  content: \"\\e011\";\n}\n.glyphicon-th-list:before {\n  content: \"\\e012\";\n}\n.glyphicon-ok:before {\n  content: \"\\e013\";\n}\n.glyphicon-remove:before {\n  content: \"\\e014\";\n}\n.glyphicon-zoom-in:before {\n  content: \"\\e015\";\n}\n.glyphicon-zoom-out:before {\n  content: \"\\e016\";\n}\n.glyphicon-off:before {\n  content: \"\\e017\";\n}\n.glyphicon-signal:before {\n  content: \"\\e018\";\n}\n.glyphicon-cog:before {\n  content: \"\\e019\";\n}\n.glyphicon-trash:before {\n  content: \"\\e020\";\n}\n.glyphicon-home:before {\n  content: \"\\e021\";\n}\n.glyphicon-file:before {\n  content: \"\\e022\";\n}\n.glyphicon-time:before {\n  content: \"\\e023\";\n}\n.glyphicon-road:before {\n  content: \"\\e024\";\n}\n.glyphicon-download-alt:before {\n  content: \"\\e025\";\n}\n.glyphicon-download:before {\n  content: \"\\e026\";\n}\n.glyphicon-upload:before {\n  content: \"\\e027\";\n}\n.glyphicon-inbox:before {\n  content: \"\\e028\";\n}\n.glyphicon-play-circle:before {\n  content: \"\\e029\";\n}\n.glyphicon-repeat:before {\n  content: \"\\e030\";\n}\n.glyphicon-refresh:before {\n  content: \"\\e031\";\n}\n.glyphicon-list-alt:before {\n  content: \"\\e032\";\n}\n.glyphicon-lock:before {\n  content: \"\\e033\";\n}\n.glyphicon-flag:before {\n  content: \"\\e034\";\n}\n.glyphicon-headphones:before {\n  content: \"\\e035\";\n}\n.glyphicon-volume-off:before {\n  content: \"\\e036\";\n}\n.glyphicon-volume-down:before {\n  content: \"\\e037\";\n}\n.glyphicon-volume-up:before {\n  content: \"\\e038\";\n}\n.glyphicon-qrcode:before {\n  content: \"\\e039\";\n}\n.glyphicon-barcode:before {\n  content: \"\\e040\";\n}\n.glyphicon-tag:before {\n  content: \"\\e041\";\n}\n.glyphicon-tags:before {\n  content: \"\\e042\";\n}\n.glyphicon-book:before {\n  content: \"\\e043\";\n}\n.glyphicon-bookmark:before {\n  content: \"\\e044\";\n}\n.glyphicon-print:before {\n  content: \"\\e045\";\n}\n.glyphicon-camera:before {\n  content: \"\\e046\";\n}\n.glyphicon-font:before {\n  content: \"\\e047\";\n}\n.glyphicon-bold:before {\n  content: \"\\e048\";\n}\n.glyphicon-italic:before {\n  content: \"\\e049\";\n}\n.glyphicon-text-height:before {\n  content: \"\\e050\";\n}\n.glyphicon-text-width:before {\n  content: \"\\e051\";\n}\n.glyphicon-align-left:before {\n  content: \"\\e052\";\n}\n.glyphicon-align-center:before {\n  content: \"\\e053\";\n}\n.glyphicon-align-right:before {\n  content: \"\\e054\";\n}\n.glyphicon-align-justify:before {\n  content: \"\\e055\";\n}\n.glyphicon-list:before {\n  content: \"\\e056\";\n}\n.glyphicon-indent-left:before {\n  content: \"\\e057\";\n}\n.glyphicon-indent-right:before {\n  content: \"\\e058\";\n}\n.glyphicon-facetime-video:before {\n  content: \"\\e059\";\n}\n.glyphicon-picture:before {\n  content: \"\\e060\";\n}\n.glyphicon-map-marker:before {\n  content: \"\\e062\";\n}\n.glyphicon-adjust:before {\n  content: \"\\e063\";\n}\n.glyphicon-tint:before {\n  content: \"\\e064\";\n}\n.glyphicon-edit:before {\n  content: \"\\e065\";\n}\n.glyphicon-share:before {\n  content: \"\\e066\";\n}\n.glyphicon-check:before {\n  content: \"\\e067\";\n}\n.glyphicon-move:before {\n  content: \"\\e068\";\n}\n.glyphicon-step-backward:before {\n  content: \"\\e069\";\n}\n.glyphicon-fast-backward:before {\n  content: \"\\e070\";\n}\n.glyphicon-backward:before {\n  content: \"\\e071\";\n}\n.glyphicon-play:before {\n  content: \"\\e072\";\n}\n.glyphicon-pause:before {\n  content: \"\\e073\";\n}\n.glyphicon-stop:before {\n  content: \"\\e074\";\n}\n.glyphicon-forward:before {\n  content: \"\\e075\";\n}\n.glyphicon-fast-forward:before {\n  content: \"\\e076\";\n}\n.glyphicon-step-forward:before {\n  content: \"\\e077\";\n}\n.glyphicon-eject:before {\n  content: \"\\e078\";\n}\n.glyphicon-chevron-left:before {\n  content: \"\\e079\";\n}\n.glyphicon-chevron-right:before {\n  content: \"\\e080\";\n}\n.glyphicon-plus-sign:before {\n  content: \"\\e081\";\n}\n.glyphicon-minus-sign:before {\n  content: \"\\e082\";\n}\n.glyphicon-remove-sign:before {\n  content: \"\\e083\";\n}\n.glyphicon-ok-sign:before {\n  content: \"\\e084\";\n}\n.glyphicon-question-sign:before {\n  content: \"\\e085\";\n}\n.glyphicon-info-sign:before {\n  content: \"\\e086\";\n}\n.glyphicon-screenshot:before {\n  content: \"\\e087\";\n}\n.glyphicon-remove-circle:before {\n  content: \"\\e088\";\n}\n.glyphicon-ok-circle:before {\n  content: \"\\e089\";\n}\n.glyphicon-ban-circle:before {\n  content: \"\\e090\";\n}\n.glyphicon-arrow-left:before {\n  content: \"\\e091\";\n}\n.glyphicon-arrow-right:before {\n  content: \"\\e092\";\n}\n.glyphicon-arrow-up:before {\n  content: \"\\e093\";\n}\n.glyphicon-arrow-down:before {\n  content: \"\\e094\";\n}\n.glyphicon-share-alt:before {\n  content: \"\\e095\";\n}\n.glyphicon-resize-full:before {\n  content: \"\\e096\";\n}\n.glyphicon-resize-small:before {\n  content: \"\\e097\";\n}\n.glyphicon-exclamation-sign:before {\n  content: \"\\e101\";\n}\n.glyphicon-gift:before {\n  content: \"\\e102\";\n}\n.glyphicon-leaf:before {\n  content: \"\\e103\";\n}\n.glyphicon-fire:before {\n  content: \"\\e104\";\n}\n.glyphicon-eye-open:before {\n  content: \"\\e105\";\n}\n.glyphicon-eye-close:before {\n  content: \"\\e106\";\n}\n.glyphicon-warning-sign:before {\n  content: \"\\e107\";\n}\n.glyphicon-plane:before {\n  content: \"\\e108\";\n}\n.glyphicon-calendar:before {\n  content: \"\\e109\";\n}\n.glyphicon-random:before {\n  content: \"\\e110\";\n}\n.glyphicon-comment:before {\n  content: \"\\e111\";\n}\n.glyphicon-magnet:before {\n  content: \"\\e112\";\n}\n.glyphicon-chevron-up:before {\n  content: \"\\e113\";\n}\n.glyphicon-chevron-down:before {\n  content: \"\\e114\";\n}\n.glyphicon-retweet:before {\n  content: \"\\e115\";\n}\n.glyphicon-shopping-cart:before {\n  content: \"\\e116\";\n}\n.glyphicon-folder-close:before {\n  content: \"\\e117\";\n}\n.glyphicon-folder-open:before {\n  content: \"\\e118\";\n}\n.glyphicon-resize-vertical:before {\n  content: \"\\e119\";\n}\n.glyphicon-resize-horizontal:before {\n  content: \"\\e120\";\n}\n.glyphicon-hdd:before {\n  content: \"\\e121\";\n}\n.glyphicon-bullhorn:before {\n  content: \"\\e122\";\n}\n.glyphicon-bell:before {\n  content: \"\\e123\";\n}\n.glyphicon-certificate:before {\n  content: \"\\e124\";\n}\n.glyphicon-thumbs-up:before {\n  content: \"\\e125\";\n}\n.glyphicon-thumbs-down:before {\n  content: \"\\e126\";\n}\n.glyphicon-hand-right:before {\n  content: \"\\e127\";\n}\n.glyphicon-hand-left:before {\n  content: \"\\e128\";\n}\n.glyphicon-hand-up:before {\n  content: \"\\e129\";\n}\n.glyphicon-hand-down:before {\n  content: \"\\e130\";\n}\n.glyphicon-circle-arrow-right:before {\n  content: \"\\e131\";\n}\n.glyphicon-circle-arrow-left:before {\n  content: \"\\e132\";\n}\n.glyphicon-circle-arrow-up:before {\n  content: \"\\e133\";\n}\n.glyphicon-circle-arrow-down:before {\n  content: \"\\e134\";\n}\n.glyphicon-globe:before {\n  content: \"\\e135\";\n}\n.glyphicon-wrench:before {\n  content: \"\\e136\";\n}\n.glyphicon-tasks:before {\n  content: \"\\e137\";\n}\n.glyphicon-filter:before {\n  content: \"\\e138\";\n}\n.glyphicon-briefcase:before {\n  content: \"\\e139\";\n}\n.glyphicon-fullscreen:before {\n  content: \"\\e140\";\n}\n.glyphicon-dashboard:before {\n  content: \"\\e141\";\n}\n.glyphicon-paperclip:before {\n  content: \"\\e142\";\n}\n.glyphicon-heart-empty:before {\n  content: \"\\e143\";\n}\n.glyphicon-link:before {\n  content: \"\\e144\";\n}\n.glyphicon-phone:before {\n  content: \"\\e145\";\n}\n.glyphicon-pushpin:before {\n  content: \"\\e146\";\n}\n.glyphicon-usd:before {\n  content: \"\\e148\";\n}\n.glyphicon-gbp:before {\n  content: \"\\e149\";\n}\n.glyphicon-sort:before {\n  content: \"\\e150\";\n}\n.glyphicon-sort-by-alphabet:before {\n  content: \"\\e151\";\n}\n.glyphicon-sort-by-alphabet-alt:before {\n  content: \"\\e152\";\n}\n.glyphicon-sort-by-order:before {\n  content: \"\\e153\";\n}\n.glyphicon-sort-by-order-alt:before {\n  content: \"\\e154\";\n}\n.glyphicon-sort-by-attributes:before {\n  content: \"\\e155\";\n}\n.glyphicon-sort-by-attributes-alt:before {\n  content: \"\\e156\";\n}\n.glyphicon-unchecked:before {\n  content: \"\\e157\";\n}\n.glyphicon-expand:before {\n  content: \"\\e158\";\n}\n.glyphicon-collapse-down:before {\n  content: \"\\e159\";\n}\n.glyphicon-collapse-up:before {\n  content: \"\\e160\";\n}\n.glyphicon-log-in:before {\n  content: \"\\e161\";\n}\n.glyphicon-flash:before {\n  content: \"\\e162\";\n}\n.glyphicon-log-out:before {\n  content: \"\\e163\";\n}\n.glyphicon-new-window:before {\n  content: \"\\e164\";\n}\n.glyphicon-record:before {\n  content: \"\\e165\";\n}\n.glyphicon-save:before {\n  content: \"\\e166\";\n}\n.glyphicon-open:before {\n  content: \"\\e167\";\n}\n.glyphicon-saved:before {\n  content: \"\\e168\";\n}\n.glyphicon-import:before {\n  content: \"\\e169\";\n}\n.glyphicon-export:before {\n  content: \"\\e170\";\n}\n.glyphicon-send:before {\n  content: \"\\e171\";\n}\n.glyphicon-floppy-disk:before {\n  content: \"\\e172\";\n}\n.glyphicon-floppy-saved:before {\n  content: \"\\e173\";\n}\n.glyphicon-floppy-remove:before {\n  content: \"\\e174\";\n}\n.glyphicon-floppy-save:before {\n  content: \"\\e175\";\n}\n.glyphicon-floppy-open:before {\n  content: \"\\e176\";\n}\n.glyphicon-credit-card:before {\n  content: \"\\e177\";\n}\n.glyphicon-transfer:before {\n  content: \"\\e178\";\n}\n.glyphicon-cutlery:before {\n  content: \"\\e179\";\n}\n.glyphicon-header:before {\n  content: \"\\e180\";\n}\n.glyphicon-compressed:before {\n  content: \"\\e181\";\n}\n.glyphicon-earphone:before {\n  content: \"\\e182\";\n}\n.glyphicon-phone-alt:before {\n  content: \"\\e183\";\n}\n.glyphicon-tower:before {\n  content: \"\\e184\";\n}\n.glyphicon-stats:before {\n  content: \"\\e185\";\n}\n.glyphicon-sd-video:before {\n  content: \"\\e186\";\n}\n.glyphicon-hd-video:before {\n  content: \"\\e187\";\n}\n.glyphicon-subtitles:before {\n  content: \"\\e188\";\n}\n.glyphicon-sound-stereo:before {\n  content: \"\\e189\";\n}\n.glyphicon-sound-dolby:before {\n  content: \"\\e190\";\n}\n.glyphicon-sound-5-1:before {\n  content: \"\\e191\";\n}\n.glyphicon-sound-6-1:before {\n  content: \"\\e192\";\n}\n.glyphicon-sound-7-1:before {\n  content: \"\\e193\";\n}\n.glyphicon-copyright-mark:before {\n  content: \"\\e194\";\n}\n.glyphicon-registration-mark:before {\n  content: \"\\e195\";\n}\n.glyphicon-cloud-download:before {\n  content: \"\\e197\";\n}\n.glyphicon-cloud-upload:before {\n  content: \"\\e198\";\n}\n.glyphicon-tree-conifer:before {\n  content: \"\\e199\";\n}\n.glyphicon-tree-deciduous:before {\n  content: \"\\e200\";\n}\n.glyphicon-cd:before {\n  content: \"\\e201\";\n}\n.glyphicon-save-file:before {\n  content: \"\\e202\";\n}\n.glyphicon-open-file:before {\n  content: \"\\e203\";\n}\n.glyphicon-level-up:before {\n  content: \"\\e204\";\n}\n.glyphicon-copy:before {\n  content: \"\\e205\";\n}\n.glyphicon-paste:before {\n  content: \"\\e206\";\n}\n.glyphicon-alert:before {\n  content: \"\\e209\";\n}\n.glyphicon-equalizer:before {\n  content: \"\\e210\";\n}\n.glyphicon-king:before {\n  content: \"\\e211\";\n}\n.glyphicon-queen:before {\n  content: \"\\e212\";\n}\n.glyphicon-pawn:before {\n  content: \"\\e213\";\n}\n.glyphicon-bishop:before {\n  content: \"\\e214\";\n}\n.glyphicon-knight:before {\n  content: \"\\e215\";\n}\n.glyphicon-baby-formula:before {\n  content: \"\\e216\";\n}\n.glyphicon-tent:before {\n  content: \"\\26fa\";\n}\n.glyphicon-blackboard:before {\n  content: \"\\e218\";\n}\n.glyphicon-bed:before {\n  content: \"\\e219\";\n}\n.glyphicon-apple:before {\n  content: \"\\f8ff\";\n}\n.glyphicon-erase:before {\n  content: \"\\e221\";\n}\n.glyphicon-hourglass:before {\n  content: \"\\231b\";\n}\n.glyphicon-lamp:before {\n  content: \"\\e223\";\n}\n.glyphicon-duplicate:before {\n  content: \"\\e224\";\n}\n.glyphicon-piggy-bank:before {\n  content: \"\\e225\";\n}\n.glyphicon-scissors:before {\n  content: \"\\e226\";\n}\n.glyphicon-bitcoin:before {\n  content: \"\\e227\";\n}\n.glyphicon-btc:before {\n  content: \"\\e227\";\n}\n.glyphicon-xbt:before {\n  content: \"\\e227\";\n}\n.glyphicon-yen:before {\n  content: \"\\00a5\";\n}\n.glyphicon-jpy:before {\n  content: \"\\00a5\";\n}\n.glyphicon-ruble:before {\n  content: \"\\20bd\";\n}\n.glyphicon-rub:before {\n  content: \"\\20bd\";\n}\n.glyphicon-scale:before {\n  content: \"\\e230\";\n}\n.glyphicon-ice-lolly:before {\n  content: \"\\e231\";\n}\n.glyphicon-ice-lolly-tasted:before {\n  content: \"\\e232\";\n}\n.glyphicon-education:before {\n  content: \"\\e233\";\n}\n.glyphicon-option-horizontal:before {\n  content: \"\\e234\";\n}\n.glyphicon-option-vertical:before {\n  content: \"\\e235\";\n}\n.glyphicon-menu-hamburger:before {\n  content: \"\\e236\";\n}\n.glyphicon-modal-window:before {\n  content: \"\\e237\";\n}\n.glyphicon-oil:before {\n  content: \"\\e238\";\n}\n.glyphicon-grain:before {\n  content: \"\\e239\";\n}\n.glyphicon-sunglasses:before {\n  content: \"\\e240\";\n}\n.glyphicon-text-size:before {\n  content: \"\\e241\";\n}\n.glyphicon-text-color:before {\n  content: \"\\e242\";\n}\n.glyphicon-text-background:before {\n  content: \"\\e243\";\n}\n.glyphicon-object-align-top:before {\n  content: \"\\e244\";\n}\n.glyphicon-object-align-bottom:before {\n  content: \"\\e245\";\n}\n.glyphicon-object-align-horizontal:before {\n  content: \"\\e246\";\n}\n.glyphicon-object-align-left:before {\n  content: \"\\e247\";\n}\n.glyphicon-object-align-vertical:before {\n  content: \"\\e248\";\n}\n.glyphicon-object-align-right:before {\n  content: \"\\e249\";\n}\n.glyphicon-triangle-right:before {\n  content: \"\\e250\";\n}\n.glyphicon-triangle-left:before {\n  content: \"\\e251\";\n}\n.glyphicon-triangle-bottom:before {\n  content: \"\\e252\";\n}\n.glyphicon-triangle-top:before {\n  content: \"\\e253\";\n}\n.glyphicon-console:before {\n  content: \"\\e254\";\n}\n.glyphicon-superscript:before {\n  content: \"\\e255\";\n}\n.glyphicon-subscript:before {\n  content: \"\\e256\";\n}\n.glyphicon-menu-left:before {\n  content: \"\\e257\";\n}\n.glyphicon-menu-right:before {\n  content: \"\\e258\";\n}\n.glyphicon-menu-down:before {\n  content: \"\\e259\";\n}\n.glyphicon-menu-up:before {\n  content: \"\\e260\";\n}\n* {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n*:before,\n*:after {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\nhtml {\n  font-size: 10px;\n\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\nbody {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 1.42857143;\n  color: #333;\n  background-color: #fff;\n}\ninput,\nbutton,\nselect,\ntextarea {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\na {\n  color: #337ab7;\n  text-decoration: none;\n}\na:hover,\na:focus {\n  color: #23527c;\n  text-decoration: underline;\n}\na:focus {\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\nfigure {\n  margin: 0;\n}\nimg {\n  vertical-align: middle;\n}\n.img-responsive,\n.thumbnail > img,\n.thumbnail a > img,\n.carousel-inner > .item > img,\n.carousel-inner > .item > a > img {\n  display: block;\n  max-width: 100%;\n  height: auto;\n}\n.img-rounded {\n  border-radius: 6px;\n}\n.img-thumbnail {\n  display: inline-block;\n  max-width: 100%;\n  height: auto;\n  padding: 4px;\n  line-height: 1.42857143;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  -webkit-transition: all .2s ease-in-out;\n          transition: all .2s ease-in-out;\n}\n.img-circle {\n  border-radius: 50%;\n}\nhr {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  border: 0;\n  border-top: 1px solid #eee;\n}\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n}\n.sr-only-focusable:active,\n.sr-only-focusable:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  clip: auto;\n}\n[role=\"button\"] {\n  cursor: pointer;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\n.h1,\n.h2,\n.h3,\n.h4,\n.h5,\n.h6 {\n  font-family: inherit;\n  font-weight: 500;\n  line-height: 1.1;\n  color: inherit;\n}\nh1 small,\nh2 small,\nh3 small,\nh4 small,\nh5 small,\nh6 small,\n.h1 small,\n.h2 small,\n.h3 small,\n.h4 small,\n.h5 small,\n.h6 small,\nh1 .small,\nh2 .small,\nh3 .small,\nh4 .small,\nh5 .small,\nh6 .small,\n.h1 .small,\n.h2 .small,\n.h3 .small,\n.h4 .small,\n.h5 .small,\n.h6 .small {\n  font-weight: normal;\n  line-height: 1;\n  color: #777;\n}\nh1,\n.h1,\nh2,\n.h2,\nh3,\n.h3 {\n  margin-top: 20px;\n  margin-bottom: 10px;\n}\nh1 small,\n.h1 small,\nh2 small,\n.h2 small,\nh3 small,\n.h3 small,\nh1 .small,\n.h1 .small,\nh2 .small,\n.h2 .small,\nh3 .small,\n.h3 .small {\n  font-size: 65%;\n}\nh4,\n.h4,\nh5,\n.h5,\nh6,\n.h6 {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\nh4 small,\n.h4 small,\nh5 small,\n.h5 small,\nh6 small,\n.h6 small,\nh4 .small,\n.h4 .small,\nh5 .small,\n.h5 .small,\nh6 .small,\n.h6 .small {\n  font-size: 75%;\n}\nh1,\n.h1 {\n  font-size: 36px;\n}\nh2,\n.h2 {\n  font-size: 30px;\n}\nh3,\n.h3 {\n  font-size: 24px;\n}\nh4,\n.h4 {\n  font-size: 18px;\n}\nh5,\n.h5 {\n  font-size: 14px;\n}\nh6,\n.h6 {\n  font-size: 12px;\n}\np {\n  margin: 0 0 10px;\n}\n.lead {\n  margin-bottom: 20px;\n  font-size: 16px;\n  font-weight: 300;\n  line-height: 1.4;\n}\n@media (min-width: 768px) {\n  .lead {\n    font-size: 21px;\n  }\n}\nsmall,\n.small {\n  font-size: 85%;\n}\nmark,\n.mark {\n  padding: .2em;\n  background-color: #fcf8e3;\n}\n.text-left {\n  text-align: left;\n}\n.text-right {\n  text-align: right;\n}\n.text-center {\n  text-align: center;\n}\n.text-justify {\n  text-align: justify;\n}\n.text-nowrap {\n  white-space: nowrap;\n}\n.text-lowercase {\n  text-transform: lowercase;\n}\n.text-uppercase {\n  text-transform: uppercase;\n}\n.text-capitalize {\n  text-transform: capitalize;\n}\n.text-muted {\n  color: #777;\n}\n.text-primary {\n  color: #337ab7;\n}\na.text-primary:hover,\na.text-primary:focus {\n  color: #286090;\n}\n.text-success {\n  color: #3c763d;\n}\na.text-success:hover,\na.text-success:focus {\n  color: #2b542c;\n}\n.text-info {\n  color: #31708f;\n}\na.text-info:hover,\na.text-info:focus {\n  color: #245269;\n}\n.text-warning {\n  color: #8a6d3b;\n}\na.text-warning:hover,\na.text-warning:focus {\n  color: #66512c;\n}\n.text-danger {\n  color: #a94442;\n}\na.text-danger:hover,\na.text-danger:focus {\n  color: #843534;\n}\n.bg-primary {\n  color: #fff;\n  background-color: #337ab7;\n}\na.bg-primary:hover,\na.bg-primary:focus {\n  background-color: #286090;\n}\n.bg-success {\n  background-color: #dff0d8;\n}\na.bg-success:hover,\na.bg-success:focus {\n  background-color: #c1e2b3;\n}\n.bg-info {\n  background-color: #d9edf7;\n}\na.bg-info:hover,\na.bg-info:focus {\n  background-color: #afd9ee;\n}\n.bg-warning {\n  background-color: #fcf8e3;\n}\na.bg-warning:hover,\na.bg-warning:focus {\n  background-color: #f7ecb5;\n}\n.bg-danger {\n  background-color: #f2dede;\n}\na.bg-danger:hover,\na.bg-danger:focus {\n  background-color: #e4b9b9;\n}\n.page-header {\n  padding-bottom: 9px;\n  margin: 40px 0 20px;\n  border-bottom: 1px solid #eee;\n}\nul,\nol {\n  margin-top: 0;\n  margin-bottom: 10px;\n}\nul ul,\nol ul,\nul ol,\nol ol {\n  margin-bottom: 0;\n}\n.list-unstyled {\n  padding-left: 0;\n  list-style: none;\n}\n.list-inline {\n  padding-left: 0;\n  margin-left: -5px;\n  list-style: none;\n}\n.list-inline > li {\n  display: inline-block;\n  padding-right: 5px;\n  padding-left: 5px;\n}\ndl {\n  margin-top: 0;\n  margin-bottom: 20px;\n}\ndt,\ndd {\n  line-height: 1.42857143;\n}\ndt {\n  font-weight: bold;\n}\ndd {\n  margin-left: 0;\n}\n@media (min-width: 768px) {\n  .dl-horizontal dt {\n    float: left;\n    width: 160px;\n    overflow: hidden;\n    clear: left;\n    text-align: right;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n  .dl-horizontal dd {\n    margin-left: 180px;\n  }\n}\nabbr[title],\nabbr[data-original-title] {\n  cursor: help;\n  border-bottom: 1px dotted #777;\n}\n.initialism {\n  font-size: 90%;\n  text-transform: uppercase;\n}\nblockquote {\n  padding: 10px 20px;\n  margin: 0 0 20px;\n  font-size: 17.5px;\n  border-left: 5px solid #eee;\n}\nblockquote p:last-child,\nblockquote ul:last-child,\nblockquote ol:last-child {\n  margin-bottom: 0;\n}\nblockquote footer,\nblockquote small,\nblockquote .small {\n  display: block;\n  font-size: 80%;\n  line-height: 1.42857143;\n  color: #777;\n}\nblockquote footer:before,\nblockquote small:before,\nblockquote .small:before {\n  content: '\\2014 \\00A0';\n}\n.blockquote-reverse,\nblockquote.pull-right {\n  padding-right: 15px;\n  padding-left: 0;\n  text-align: right;\n  border-right: 5px solid #eee;\n  border-left: 0;\n}\n.blockquote-reverse footer:before,\nblockquote.pull-right footer:before,\n.blockquote-reverse small:before,\nblockquote.pull-right small:before,\n.blockquote-reverse .small:before,\nblockquote.pull-right .small:before {\n  content: '';\n}\n.blockquote-reverse footer:after,\nblockquote.pull-right footer:after,\n.blockquote-reverse small:after,\nblockquote.pull-right small:after,\n.blockquote-reverse .small:after,\nblockquote.pull-right .small:after {\n  content: '\\00A0 \\2014';\n}\naddress {\n  margin-bottom: 20px;\n  font-style: normal;\n  line-height: 1.42857143;\n}\ncode,\nkbd,\npre,\nsamp {\n  font-family: Menlo, Monaco, Consolas, \"Courier New\", monospace;\n}\ncode {\n  padding: 2px 4px;\n  font-size: 90%;\n  color: #c7254e;\n  background-color: #f9f2f4;\n  border-radius: 4px;\n}\nkbd {\n  padding: 2px 4px;\n  font-size: 90%;\n  color: #fff;\n  background-color: #333;\n  border-radius: 3px;\n  -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .25);\n          box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .25);\n}\nkbd kbd {\n  padding: 0;\n  font-size: 100%;\n  font-weight: bold;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\npre {\n  display: block;\n  padding: 9.5px;\n  margin: 0 0 10px;\n  font-size: 13px;\n  line-height: 1.42857143;\n  color: #333;\n  word-break: break-all;\n  word-wrap: break-word;\n  background-color: #f5f5f5;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\npre code {\n  padding: 0;\n  font-size: inherit;\n  color: inherit;\n  white-space: pre-wrap;\n  background-color: transparent;\n  border-radius: 0;\n}\n.pre-scrollable {\n  max-height: 340px;\n  overflow-y: scroll;\n}\n.container {\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n@media (min-width: 768px) {\n  .container {\n    width: 750px;\n  }\n}\n@media (min-width: 992px) {\n  .container {\n    width: 970px;\n  }\n}\n@media (min-width: 1200px) {\n  .container {\n    width: 1170px;\n  }\n}\n.container-fluid {\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n.row {\n  margin-right: -15px;\n  margin-left: -15px;\n}\n.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {\n  position: relative;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n.col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12 {\n  float: left;\n}\n.col-xs-12 {\n  width: 100%;\n}\n.col-xs-11 {\n  width: 91.66666667%;\n}\n.col-xs-10 {\n  width: 83.33333333%;\n}\n.col-xs-9 {\n  width: 75%;\n}\n.col-xs-8 {\n  width: 66.66666667%;\n}\n.col-xs-7 {\n  width: 58.33333333%;\n}\n.col-xs-6 {\n  width: 50%;\n}\n.col-xs-5 {\n  width: 41.66666667%;\n}\n.col-xs-4 {\n  width: 33.33333333%;\n}\n.col-xs-3 {\n  width: 25%;\n}\n.col-xs-2 {\n  width: 16.66666667%;\n}\n.col-xs-1 {\n  width: 8.33333333%;\n}\n.col-xs-pull-12 {\n  right: 100%;\n}\n.col-xs-pull-11 {\n  right: 91.66666667%;\n}\n.col-xs-pull-10 {\n  right: 83.33333333%;\n}\n.col-xs-pull-9 {\n  right: 75%;\n}\n.col-xs-pull-8 {\n  right: 66.66666667%;\n}\n.col-xs-pull-7 {\n  right: 58.33333333%;\n}\n.col-xs-pull-6 {\n  right: 50%;\n}\n.col-xs-pull-5 {\n  right: 41.66666667%;\n}\n.col-xs-pull-4 {\n  right: 33.33333333%;\n}\n.col-xs-pull-3 {\n  right: 25%;\n}\n.col-xs-pull-2 {\n  right: 16.66666667%;\n}\n.col-xs-pull-1 {\n  right: 8.33333333%;\n}\n.col-xs-pull-0 {\n  right: auto;\n}\n.col-xs-push-12 {\n  left: 100%;\n}\n.col-xs-push-11 {\n  left: 91.66666667%;\n}\n.col-xs-push-10 {\n  left: 83.33333333%;\n}\n.col-xs-push-9 {\n  left: 75%;\n}\n.col-xs-push-8 {\n  left: 66.66666667%;\n}\n.col-xs-push-7 {\n  left: 58.33333333%;\n}\n.col-xs-push-6 {\n  left: 50%;\n}\n.col-xs-push-5 {\n  left: 41.66666667%;\n}\n.col-xs-push-4 {\n  left: 33.33333333%;\n}\n.col-xs-push-3 {\n  left: 25%;\n}\n.col-xs-push-2 {\n  left: 16.66666667%;\n}\n.col-xs-push-1 {\n  left: 8.33333333%;\n}\n.col-xs-push-0 {\n  left: auto;\n}\n.col-xs-offset-12 {\n  margin-left: 100%;\n}\n.col-xs-offset-11 {\n  margin-left: 91.66666667%;\n}\n.col-xs-offset-10 {\n  margin-left: 83.33333333%;\n}\n.col-xs-offset-9 {\n  margin-left: 75%;\n}\n.col-xs-offset-8 {\n  margin-left: 66.66666667%;\n}\n.col-xs-offset-7 {\n  margin-left: 58.33333333%;\n}\n.col-xs-offset-6 {\n  margin-left: 50%;\n}\n.col-xs-offset-5 {\n  margin-left: 41.66666667%;\n}\n.col-xs-offset-4 {\n  margin-left: 33.33333333%;\n}\n.col-xs-offset-3 {\n  margin-left: 25%;\n}\n.col-xs-offset-2 {\n  margin-left: 16.66666667%;\n}\n.col-xs-offset-1 {\n  margin-left: 8.33333333%;\n}\n.col-xs-offset-0 {\n  margin-left: 0;\n}\n@media (min-width: 768px) {\n  .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12 {\n    float: left;\n  }\n  .col-sm-12 {\n    width: 100%;\n  }\n  .col-sm-11 {\n    width: 91.66666667%;\n  }\n  .col-sm-10 {\n    width: 83.33333333%;\n  }\n  .col-sm-9 {\n    width: 75%;\n  }\n  .col-sm-8 {\n    width: 66.66666667%;\n  }\n  .col-sm-7 {\n    width: 58.33333333%;\n  }\n  .col-sm-6 {\n    width: 50%;\n  }\n  .col-sm-5 {\n    width: 41.66666667%;\n  }\n  .col-sm-4 {\n    width: 33.33333333%;\n  }\n  .col-sm-3 {\n    width: 25%;\n  }\n  .col-sm-2 {\n    width: 16.66666667%;\n  }\n  .col-sm-1 {\n    width: 8.33333333%;\n  }\n  .col-sm-pull-12 {\n    right: 100%;\n  }\n  .col-sm-pull-11 {\n    right: 91.66666667%;\n  }\n  .col-sm-pull-10 {\n    right: 83.33333333%;\n  }\n  .col-sm-pull-9 {\n    right: 75%;\n  }\n  .col-sm-pull-8 {\n    right: 66.66666667%;\n  }\n  .col-sm-pull-7 {\n    right: 58.33333333%;\n  }\n  .col-sm-pull-6 {\n    right: 50%;\n  }\n  .col-sm-pull-5 {\n    right: 41.66666667%;\n  }\n  .col-sm-pull-4 {\n    right: 33.33333333%;\n  }\n  .col-sm-pull-3 {\n    right: 25%;\n  }\n  .col-sm-pull-2 {\n    right: 16.66666667%;\n  }\n  .col-sm-pull-1 {\n    right: 8.33333333%;\n  }\n  .col-sm-pull-0 {\n    right: auto;\n  }\n  .col-sm-push-12 {\n    left: 100%;\n  }\n  .col-sm-push-11 {\n    left: 91.66666667%;\n  }\n  .col-sm-push-10 {\n    left: 83.33333333%;\n  }\n  .col-sm-push-9 {\n    left: 75%;\n  }\n  .col-sm-push-8 {\n    left: 66.66666667%;\n  }\n  .col-sm-push-7 {\n    left: 58.33333333%;\n  }\n  .col-sm-push-6 {\n    left: 50%;\n  }\n  .col-sm-push-5 {\n    left: 41.66666667%;\n  }\n  .col-sm-push-4 {\n    left: 33.33333333%;\n  }\n  .col-sm-push-3 {\n    left: 25%;\n  }\n  .col-sm-push-2 {\n    left: 16.66666667%;\n  }\n  .col-sm-push-1 {\n    left: 8.33333333%;\n  }\n  .col-sm-push-0 {\n    left: auto;\n  }\n  .col-sm-offset-12 {\n    margin-left: 100%;\n  }\n  .col-sm-offset-11 {\n    margin-left: 91.66666667%;\n  }\n  .col-sm-offset-10 {\n    margin-left: 83.33333333%;\n  }\n  .col-sm-offset-9 {\n    margin-left: 75%;\n  }\n  .col-sm-offset-8 {\n    margin-left: 66.66666667%;\n  }\n  .col-sm-offset-7 {\n    margin-left: 58.33333333%;\n  }\n  .col-sm-offset-6 {\n    margin-left: 50%;\n  }\n  .col-sm-offset-5 {\n    margin-left: 41.66666667%;\n  }\n  .col-sm-offset-4 {\n    margin-left: 33.33333333%;\n  }\n  .col-sm-offset-3 {\n    margin-left: 25%;\n  }\n  .col-sm-offset-2 {\n    margin-left: 16.66666667%;\n  }\n  .col-sm-offset-1 {\n    margin-left: 8.33333333%;\n  }\n  .col-sm-offset-0 {\n    margin-left: 0;\n  }\n}\n@media (min-width: 992px) {\n  .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12 {\n    float: left;\n  }\n  .col-md-12 {\n    width: 100%;\n  }\n  .col-md-11 {\n    width: 91.66666667%;\n  }\n  .col-md-10 {\n    width: 83.33333333%;\n  }\n  .col-md-9 {\n    width: 75%;\n  }\n  .col-md-8 {\n    width: 66.66666667%;\n  }\n  .col-md-7 {\n    width: 58.33333333%;\n  }\n  .col-md-6 {\n    width: 50%;\n  }\n  .col-md-5 {\n    width: 41.66666667%;\n  }\n  .col-md-4 {\n    width: 33.33333333%;\n  }\n  .col-md-3 {\n    width: 25%;\n  }\n  .col-md-2 {\n    width: 16.66666667%;\n  }\n  .col-md-1 {\n    width: 8.33333333%;\n  }\n  .col-md-pull-12 {\n    right: 100%;\n  }\n  .col-md-pull-11 {\n    right: 91.66666667%;\n  }\n  .col-md-pull-10 {\n    right: 83.33333333%;\n  }\n  .col-md-pull-9 {\n    right: 75%;\n  }\n  .col-md-pull-8 {\n    right: 66.66666667%;\n  }\n  .col-md-pull-7 {\n    right: 58.33333333%;\n  }\n  .col-md-pull-6 {\n    right: 50%;\n  }\n  .col-md-pull-5 {\n    right: 41.66666667%;\n  }\n  .col-md-pull-4 {\n    right: 33.33333333%;\n  }\n  .col-md-pull-3 {\n    right: 25%;\n  }\n  .col-md-pull-2 {\n    right: 16.66666667%;\n  }\n  .col-md-pull-1 {\n    right: 8.33333333%;\n  }\n  .col-md-pull-0 {\n    right: auto;\n  }\n  .col-md-push-12 {\n    left: 100%;\n  }\n  .col-md-push-11 {\n    left: 91.66666667%;\n  }\n  .col-md-push-10 {\n    left: 83.33333333%;\n  }\n  .col-md-push-9 {\n    left: 75%;\n  }\n  .col-md-push-8 {\n    left: 66.66666667%;\n  }\n  .col-md-push-7 {\n    left: 58.33333333%;\n  }\n  .col-md-push-6 {\n    left: 50%;\n  }\n  .col-md-push-5 {\n    left: 41.66666667%;\n  }\n  .col-md-push-4 {\n    left: 33.33333333%;\n  }\n  .col-md-push-3 {\n    left: 25%;\n  }\n  .col-md-push-2 {\n    left: 16.66666667%;\n  }\n  .col-md-push-1 {\n    left: 8.33333333%;\n  }\n  .col-md-push-0 {\n    left: auto;\n  }\n  .col-md-offset-12 {\n    margin-left: 100%;\n  }\n  .col-md-offset-11 {\n    margin-left: 91.66666667%;\n  }\n  .col-md-offset-10 {\n    margin-left: 83.33333333%;\n  }\n  .col-md-offset-9 {\n    margin-left: 75%;\n  }\n  .col-md-offset-8 {\n    margin-left: 66.66666667%;\n  }\n  .col-md-offset-7 {\n    margin-left: 58.33333333%;\n  }\n  .col-md-offset-6 {\n    margin-left: 50%;\n  }\n  .col-md-offset-5 {\n    margin-left: 41.66666667%;\n  }\n  .col-md-offset-4 {\n    margin-left: 33.33333333%;\n  }\n  .col-md-offset-3 {\n    margin-left: 25%;\n  }\n  .col-md-offset-2 {\n    margin-left: 16.66666667%;\n  }\n  .col-md-offset-1 {\n    margin-left: 8.33333333%;\n  }\n  .col-md-offset-0 {\n    margin-left: 0;\n  }\n}\n@media (min-width: 1200px) {\n  .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12 {\n    float: left;\n  }\n  .col-lg-12 {\n    width: 100%;\n  }\n  .col-lg-11 {\n    width: 91.66666667%;\n  }\n  .col-lg-10 {\n    width: 83.33333333%;\n  }\n  .col-lg-9 {\n    width: 75%;\n  }\n  .col-lg-8 {\n    width: 66.66666667%;\n  }\n  .col-lg-7 {\n    width: 58.33333333%;\n  }\n  .col-lg-6 {\n    width: 50%;\n  }\n  .col-lg-5 {\n    width: 41.66666667%;\n  }\n  .col-lg-4 {\n    width: 33.33333333%;\n  }\n  .col-lg-3 {\n    width: 25%;\n  }\n  .col-lg-2 {\n    width: 16.66666667%;\n  }\n  .col-lg-1 {\n    width: 8.33333333%;\n  }\n  .col-lg-pull-12 {\n    right: 100%;\n  }\n  .col-lg-pull-11 {\n    right: 91.66666667%;\n  }\n  .col-lg-pull-10 {\n    right: 83.33333333%;\n  }\n  .col-lg-pull-9 {\n    right: 75%;\n  }\n  .col-lg-pull-8 {\n    right: 66.66666667%;\n  }\n  .col-lg-pull-7 {\n    right: 58.33333333%;\n  }\n  .col-lg-pull-6 {\n    right: 50%;\n  }\n  .col-lg-pull-5 {\n    right: 41.66666667%;\n  }\n  .col-lg-pull-4 {\n    right: 33.33333333%;\n  }\n  .col-lg-pull-3 {\n    right: 25%;\n  }\n  .col-lg-pull-2 {\n    right: 16.66666667%;\n  }\n  .col-lg-pull-1 {\n    right: 8.33333333%;\n  }\n  .col-lg-pull-0 {\n    right: auto;\n  }\n  .col-lg-push-12 {\n    left: 100%;\n  }\n  .col-lg-push-11 {\n    left: 91.66666667%;\n  }\n  .col-lg-push-10 {\n    left: 83.33333333%;\n  }\n  .col-lg-push-9 {\n    left: 75%;\n  }\n  .col-lg-push-8 {\n    left: 66.66666667%;\n  }\n  .col-lg-push-7 {\n    left: 58.33333333%;\n  }\n  .col-lg-push-6 {\n    left: 50%;\n  }\n  .col-lg-push-5 {\n    left: 41.66666667%;\n  }\n  .col-lg-push-4 {\n    left: 33.33333333%;\n  }\n  .col-lg-push-3 {\n    left: 25%;\n  }\n  .col-lg-push-2 {\n    left: 16.66666667%;\n  }\n  .col-lg-push-1 {\n    left: 8.33333333%;\n  }\n  .col-lg-push-0 {\n    left: auto;\n  }\n  .col-lg-offset-12 {\n    margin-left: 100%;\n  }\n  .col-lg-offset-11 {\n    margin-left: 91.66666667%;\n  }\n  .col-lg-offset-10 {\n    margin-left: 83.33333333%;\n  }\n  .col-lg-offset-9 {\n    margin-left: 75%;\n  }\n  .col-lg-offset-8 {\n    margin-left: 66.66666667%;\n  }\n  .col-lg-offset-7 {\n    margin-left: 58.33333333%;\n  }\n  .col-lg-offset-6 {\n    margin-left: 50%;\n  }\n  .col-lg-offset-5 {\n    margin-left: 41.66666667%;\n  }\n  .col-lg-offset-4 {\n    margin-left: 33.33333333%;\n  }\n  .col-lg-offset-3 {\n    margin-left: 25%;\n  }\n  .col-lg-offset-2 {\n    margin-left: 16.66666667%;\n  }\n  .col-lg-offset-1 {\n    margin-left: 8.33333333%;\n  }\n  .col-lg-offset-0 {\n    margin-left: 0;\n  }\n}\ntable {\n  background-color: transparent;\n}\ncaption {\n  padding-top: 8px;\n  padding-bottom: 8px;\n  color: #777;\n  text-align: left;\n}\nth {\n  text-align: left;\n}\n.table {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 20px;\n}\n.table > thead > tr > th,\n.table > tbody > tr > th,\n.table > tfoot > tr > th,\n.table > thead > tr > td,\n.table > tbody > tr > td,\n.table > tfoot > tr > td {\n  padding: 8px;\n  line-height: 1.42857143;\n  vertical-align: top;\n  border-top: 1px solid #ddd;\n}\n.table > thead > tr > th {\n  vertical-align: bottom;\n  border-bottom: 2px solid #ddd;\n}\n.table > caption + thead > tr:first-child > th,\n.table > colgroup + thead > tr:first-child > th,\n.table > thead:first-child > tr:first-child > th,\n.table > caption + thead > tr:first-child > td,\n.table > colgroup + thead > tr:first-child > td,\n.table > thead:first-child > tr:first-child > td {\n  border-top: 0;\n}\n.table > tbody + tbody {\n  border-top: 2px solid #ddd;\n}\n.table .table {\n  background-color: #fff;\n}\n.table-condensed > thead > tr > th,\n.table-condensed > tbody > tr > th,\n.table-condensed > tfoot > tr > th,\n.table-condensed > thead > tr > td,\n.table-condensed > tbody > tr > td,\n.table-condensed > tfoot > tr > td {\n  padding: 5px;\n}\n.table-bordered {\n  border: 1px solid #ddd;\n}\n.table-bordered > thead > tr > th,\n.table-bordered > tbody > tr > th,\n.table-bordered > tfoot > tr > th,\n.table-bordered > thead > tr > td,\n.table-bordered > tbody > tr > td,\n.table-bordered > tfoot > tr > td {\n  border: 1px solid #ddd;\n}\n.table-bordered > thead > tr > th,\n.table-bordered > thead > tr > td {\n  border-bottom-width: 2px;\n}\n.table-striped > tbody > tr:nth-of-type(odd) {\n  background-color: #f9f9f9;\n}\n.table-hover > tbody > tr:hover {\n  background-color: #f5f5f5;\n}\ntable col[class*=\"col-\"] {\n  position: static;\n  display: table-column;\n  float: none;\n}\ntable td[class*=\"col-\"],\ntable th[class*=\"col-\"] {\n  position: static;\n  display: table-cell;\n  float: none;\n}\n.table > thead > tr > td.active,\n.table > tbody > tr > td.active,\n.table > tfoot > tr > td.active,\n.table > thead > tr > th.active,\n.table > tbody > tr > th.active,\n.table > tfoot > tr > th.active,\n.table > thead > tr.active > td,\n.table > tbody > tr.active > td,\n.table > tfoot > tr.active > td,\n.table > thead > tr.active > th,\n.table > tbody > tr.active > th,\n.table > tfoot > tr.active > th {\n  background-color: #f5f5f5;\n}\n.table-hover > tbody > tr > td.active:hover,\n.table-hover > tbody > tr > th.active:hover,\n.table-hover > tbody > tr.active:hover > td,\n.table-hover > tbody > tr:hover > .active,\n.table-hover > tbody > tr.active:hover > th {\n  background-color: #e8e8e8;\n}\n.table > thead > tr > td.success,\n.table > tbody > tr > td.success,\n.table > tfoot > tr > td.success,\n.table > thead > tr > th.success,\n.table > tbody > tr > th.success,\n.table > tfoot > tr > th.success,\n.table > thead > tr.success > td,\n.table > tbody > tr.success > td,\n.table > tfoot > tr.success > td,\n.table > thead > tr.success > th,\n.table > tbody > tr.success > th,\n.table > tfoot > tr.success > th {\n  background-color: #dff0d8;\n}\n.table-hover > tbody > tr > td.success:hover,\n.table-hover > tbody > tr > th.success:hover,\n.table-hover > tbody > tr.success:hover > td,\n.table-hover > tbody > tr:hover > .success,\n.table-hover > tbody > tr.success:hover > th {\n  background-color: #d0e9c6;\n}\n.table > thead > tr > td.info,\n.table > tbody > tr > td.info,\n.table > tfoot > tr > td.info,\n.table > thead > tr > th.info,\n.table > tbody > tr > th.info,\n.table > tfoot > tr > th.info,\n.table > thead > tr.info > td,\n.table > tbody > tr.info > td,\n.table > tfoot > tr.info > td,\n.table > thead > tr.info > th,\n.table > tbody > tr.info > th,\n.table > tfoot > tr.info > th {\n  background-color: #d9edf7;\n}\n.table-hover > tbody > tr > td.info:hover,\n.table-hover > tbody > tr > th.info:hover,\n.table-hover > tbody > tr.info:hover > td,\n.table-hover > tbody > tr:hover > .info,\n.table-hover > tbody > tr.info:hover > th {\n  background-color: #c4e3f3;\n}\n.table > thead > tr > td.warning,\n.table > tbody > tr > td.warning,\n.table > tfoot > tr > td.warning,\n.table > thead > tr > th.warning,\n.table > tbody > tr > th.warning,\n.table > tfoot > tr > th.warning,\n.table > thead > tr.warning > td,\n.table > tbody > tr.warning > td,\n.table > tfoot > tr.warning > td,\n.table > thead > tr.warning > th,\n.table > tbody > tr.warning > th,\n.table > tfoot > tr.warning > th {\n  background-color: #fcf8e3;\n}\n.table-hover > tbody > tr > td.warning:hover,\n.table-hover > tbody > tr > th.warning:hover,\n.table-hover > tbody > tr.warning:hover > td,\n.table-hover > tbody > tr:hover > .warning,\n.table-hover > tbody > tr.warning:hover > th {\n  background-color: #faf2cc;\n}\n.table > thead > tr > td.danger,\n.table > tbody > tr > td.danger,\n.table > tfoot > tr > td.danger,\n.table > thead > tr > th.danger,\n.table > tbody > tr > th.danger,\n.table > tfoot > tr > th.danger,\n.table > thead > tr.danger > td,\n.table > tbody > tr.danger > td,\n.table > tfoot > tr.danger > td,\n.table > thead > tr.danger > th,\n.table > tbody > tr.danger > th,\n.table > tfoot > tr.danger > th {\n  background-color: #f2dede;\n}\n.table-hover > tbody > tr > td.danger:hover,\n.table-hover > tbody > tr > th.danger:hover,\n.table-hover > tbody > tr.danger:hover > td,\n.table-hover > tbody > tr:hover > .danger,\n.table-hover > tbody > tr.danger:hover > th {\n  background-color: #ebcccc;\n}\n.table-responsive {\n  min-height: .01%;\n  overflow-x: auto;\n}\n@media screen and (max-width: 767px) {\n  .table-responsive {\n    width: 100%;\n    margin-bottom: 15px;\n    overflow-y: hidden;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n    border: 1px solid #ddd;\n  }\n  .table-responsive > .table {\n    margin-bottom: 0;\n  }\n  .table-responsive > .table > thead > tr > th,\n  .table-responsive > .table > tbody > tr > th,\n  .table-responsive > .table > tfoot > tr > th,\n  .table-responsive > .table > thead > tr > td,\n  .table-responsive > .table > tbody > tr > td,\n  .table-responsive > .table > tfoot > tr > td {\n    white-space: nowrap;\n  }\n  .table-responsive > .table-bordered {\n    border: 0;\n  }\n  .table-responsive > .table-bordered > thead > tr > th:first-child,\n  .table-responsive > .table-bordered > tbody > tr > th:first-child,\n  .table-responsive > .table-bordered > tfoot > tr > th:first-child,\n  .table-responsive > .table-bordered > thead > tr > td:first-child,\n  .table-responsive > .table-bordered > tbody > tr > td:first-child,\n  .table-responsive > .table-bordered > tfoot > tr > td:first-child {\n    border-left: 0;\n  }\n  .table-responsive > .table-bordered > thead > tr > th:last-child,\n  .table-responsive > .table-bordered > tbody > tr > th:last-child,\n  .table-responsive > .table-bordered > tfoot > tr > th:last-child,\n  .table-responsive > .table-bordered > thead > tr > td:last-child,\n  .table-responsive > .table-bordered > tbody > tr > td:last-child,\n  .table-responsive > .table-bordered > tfoot > tr > td:last-child {\n    border-right: 0;\n  }\n  .table-responsive > .table-bordered > tbody > tr:last-child > th,\n  .table-responsive > .table-bordered > tfoot > tr:last-child > th,\n  .table-responsive > .table-bordered > tbody > tr:last-child > td,\n  .table-responsive > .table-bordered > tfoot > tr:last-child > td {\n    border-bottom: 0;\n  }\n}\nfieldset {\n  min-width: 0;\n  padding: 0;\n  margin: 0;\n  border: 0;\n}\nlegend {\n  display: block;\n  width: 100%;\n  padding: 0;\n  margin-bottom: 20px;\n  font-size: 21px;\n  line-height: inherit;\n  color: #333;\n  border: 0;\n  border-bottom: 1px solid #e5e5e5;\n}\nlabel {\n  display: inline-block;\n  max-width: 100%;\n  margin-bottom: 5px;\n  font-weight: bold;\n}\ninput[type=\"search\"] {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\ninput[type=\"radio\"],\ninput[type=\"checkbox\"] {\n  margin: 4px 0 0;\n  margin-top: 1px \\9;\n  line-height: normal;\n}\ninput[type=\"file\"] {\n  display: block;\n}\ninput[type=\"range\"] {\n  display: block;\n  width: 100%;\n}\nselect[multiple],\nselect[size] {\n  height: auto;\n}\ninput[type=\"file\"]:focus,\ninput[type=\"radio\"]:focus,\ninput[type=\"checkbox\"]:focus {\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\noutput {\n  display: block;\n  padding-top: 7px;\n  font-size: 14px;\n  line-height: 1.42857143;\n  color: #555;\n}\n.form-control {\n  display: block;\n  width: 100%;\n  height: 34px;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 1.42857143;\n  color: #555;\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n  -webkit-transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;\n          transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;\n          transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n          transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;\n}\n.form-control:focus {\n  border-color: #66afe9;\n  outline: 0;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, .6);\n          box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, .6);\n}\n.form-control::-moz-placeholder {\n  color: #999;\n  opacity: 1;\n}\n.form-control:-ms-input-placeholder {\n  color: #999;\n}\n.form-control::-webkit-input-placeholder {\n  color: #999;\n}\n.form-control::-ms-expand {\n  background-color: transparent;\n  border: 0;\n}\n.form-control[disabled],\n.form-control[readonly],\nfieldset[disabled] .form-control {\n  background-color: #eee;\n  opacity: 1;\n}\n.form-control[disabled],\nfieldset[disabled] .form-control {\n  cursor: not-allowed;\n}\ntextarea.form-control {\n  height: auto;\n}\ninput[type=\"search\"] {\n  -webkit-appearance: none;\n}\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n  input[type=\"date\"].form-control,\n  input[type=\"time\"].form-control,\n  input[type=\"datetime-local\"].form-control,\n  input[type=\"month\"].form-control {\n    line-height: 34px;\n  }\n  input[type=\"date\"].input-sm,\n  input[type=\"time\"].input-sm,\n  input[type=\"datetime-local\"].input-sm,\n  input[type=\"month\"].input-sm,\n  .input-group-sm input[type=\"date\"],\n  .input-group-sm input[type=\"time\"],\n  .input-group-sm input[type=\"datetime-local\"],\n  .input-group-sm input[type=\"month\"] {\n    line-height: 30px;\n  }\n  input[type=\"date\"].input-lg,\n  input[type=\"time\"].input-lg,\n  input[type=\"datetime-local\"].input-lg,\n  input[type=\"month\"].input-lg,\n  .input-group-lg input[type=\"date\"],\n  .input-group-lg input[type=\"time\"],\n  .input-group-lg input[type=\"datetime-local\"],\n  .input-group-lg input[type=\"month\"] {\n    line-height: 46px;\n  }\n}\n.form-group {\n  margin-bottom: 15px;\n}\n.radio,\n.checkbox {\n  position: relative;\n  display: block;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.radio label,\n.checkbox label {\n  min-height: 20px;\n  padding-left: 20px;\n  margin-bottom: 0;\n  font-weight: normal;\n  cursor: pointer;\n}\n.radio input[type=\"radio\"],\n.radio-inline input[type=\"radio\"],\n.checkbox input[type=\"checkbox\"],\n.checkbox-inline input[type=\"checkbox\"] {\n  position: absolute;\n  margin-top: 4px \\9;\n  margin-left: -20px;\n}\n.radio + .radio,\n.checkbox + .checkbox {\n  margin-top: -5px;\n}\n.radio-inline,\n.checkbox-inline {\n  position: relative;\n  display: inline-block;\n  padding-left: 20px;\n  margin-bottom: 0;\n  font-weight: normal;\n  vertical-align: middle;\n  cursor: pointer;\n}\n.radio-inline + .radio-inline,\n.checkbox-inline + .checkbox-inline {\n  margin-top: 0;\n  margin-left: 10px;\n}\ninput[type=\"radio\"][disabled],\ninput[type=\"checkbox\"][disabled],\ninput[type=\"radio\"].disabled,\ninput[type=\"checkbox\"].disabled,\nfieldset[disabled] input[type=\"radio\"],\nfieldset[disabled] input[type=\"checkbox\"] {\n  cursor: not-allowed;\n}\n.radio-inline.disabled,\n.checkbox-inline.disabled,\nfieldset[disabled] .radio-inline,\nfieldset[disabled] .checkbox-inline {\n  cursor: not-allowed;\n}\n.radio.disabled label,\n.checkbox.disabled label,\nfieldset[disabled] .radio label,\nfieldset[disabled] .checkbox label {\n  cursor: not-allowed;\n}\n.form-control-static {\n  min-height: 34px;\n  padding-top: 7px;\n  padding-bottom: 7px;\n  margin-bottom: 0;\n}\n.form-control-static.input-lg,\n.form-control-static.input-sm {\n  padding-right: 0;\n  padding-left: 0;\n}\n.input-sm {\n  height: 30px;\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\nselect.input-sm {\n  height: 30px;\n  line-height: 30px;\n}\ntextarea.input-sm,\nselect[multiple].input-sm {\n  height: auto;\n}\n.form-group-sm .form-control {\n  height: 30px;\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\n.form-group-sm select.form-control {\n  height: 30px;\n  line-height: 30px;\n}\n.form-group-sm textarea.form-control,\n.form-group-sm select[multiple].form-control {\n  height: auto;\n}\n.form-group-sm .form-control-static {\n  height: 30px;\n  min-height: 32px;\n  padding: 6px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n}\n.input-lg {\n  height: 46px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n  border-radius: 6px;\n}\nselect.input-lg {\n  height: 46px;\n  line-height: 46px;\n}\ntextarea.input-lg,\nselect[multiple].input-lg {\n  height: auto;\n}\n.form-group-lg .form-control {\n  height: 46px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n  border-radius: 6px;\n}\n.form-group-lg select.form-control {\n  height: 46px;\n  line-height: 46px;\n}\n.form-group-lg textarea.form-control,\n.form-group-lg select[multiple].form-control {\n  height: auto;\n}\n.form-group-lg .form-control-static {\n  height: 46px;\n  min-height: 38px;\n  padding: 11px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n}\n.has-feedback {\n  position: relative;\n}\n.has-feedback .form-control {\n  padding-right: 42.5px;\n}\n.form-control-feedback {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 2;\n  display: block;\n  width: 34px;\n  height: 34px;\n  line-height: 34px;\n  text-align: center;\n  pointer-events: none;\n}\n.input-lg + .form-control-feedback,\n.input-group-lg + .form-control-feedback,\n.form-group-lg .form-control + .form-control-feedback {\n  width: 46px;\n  height: 46px;\n  line-height: 46px;\n}\n.input-sm + .form-control-feedback,\n.input-group-sm + .form-control-feedback,\n.form-group-sm .form-control + .form-control-feedback {\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n}\n.has-success .help-block,\n.has-success .control-label,\n.has-success .radio,\n.has-success .checkbox,\n.has-success .radio-inline,\n.has-success .checkbox-inline,\n.has-success.radio label,\n.has-success.checkbox label,\n.has-success.radio-inline label,\n.has-success.checkbox-inline label {\n  color: #3c763d;\n}\n.has-success .form-control {\n  border-color: #3c763d;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n}\n.has-success .form-control:focus {\n  border-color: #2b542c;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #67b168;\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #67b168;\n}\n.has-success .input-group-addon {\n  color: #3c763d;\n  background-color: #dff0d8;\n  border-color: #3c763d;\n}\n.has-success .form-control-feedback {\n  color: #3c763d;\n}\n.has-warning .help-block,\n.has-warning .control-label,\n.has-warning .radio,\n.has-warning .checkbox,\n.has-warning .radio-inline,\n.has-warning .checkbox-inline,\n.has-warning.radio label,\n.has-warning.checkbox label,\n.has-warning.radio-inline label,\n.has-warning.checkbox-inline label {\n  color: #8a6d3b;\n}\n.has-warning .form-control {\n  border-color: #8a6d3b;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n}\n.has-warning .form-control:focus {\n  border-color: #66512c;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #c0a16b;\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #c0a16b;\n}\n.has-warning .input-group-addon {\n  color: #8a6d3b;\n  background-color: #fcf8e3;\n  border-color: #8a6d3b;\n}\n.has-warning .form-control-feedback {\n  color: #8a6d3b;\n}\n.has-error .help-block,\n.has-error .control-label,\n.has-error .radio,\n.has-error .checkbox,\n.has-error .radio-inline,\n.has-error .checkbox-inline,\n.has-error.radio label,\n.has-error.checkbox label,\n.has-error.radio-inline label,\n.has-error.checkbox-inline label {\n  color: #a94442;\n}\n.has-error .form-control {\n  border-color: #a94442;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n}\n.has-error .form-control:focus {\n  border-color: #843534;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #ce8483;\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #ce8483;\n}\n.has-error .input-group-addon {\n  color: #a94442;\n  background-color: #f2dede;\n  border-color: #a94442;\n}\n.has-error .form-control-feedback {\n  color: #a94442;\n}\n.has-feedback label ~ .form-control-feedback {\n  top: 25px;\n}\n.has-feedback label.sr-only ~ .form-control-feedback {\n  top: 0;\n}\n.help-block {\n  display: block;\n  margin-top: 5px;\n  margin-bottom: 10px;\n  color: #737373;\n}\n@media (min-width: 768px) {\n  .form-inline .form-group {\n    display: inline-block;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .form-inline .form-control {\n    display: inline-block;\n    width: auto;\n    vertical-align: middle;\n  }\n  .form-inline .form-control-static {\n    display: inline-block;\n  }\n  .form-inline .input-group {\n    display: inline-table;\n    vertical-align: middle;\n  }\n  .form-inline .input-group .input-group-addon,\n  .form-inline .input-group .input-group-btn,\n  .form-inline .input-group .form-control {\n    width: auto;\n  }\n  .form-inline .input-group > .form-control {\n    width: 100%;\n  }\n  .form-inline .control-label {\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .form-inline .radio,\n  .form-inline .checkbox {\n    display: inline-block;\n    margin-top: 0;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .form-inline .radio label,\n  .form-inline .checkbox label {\n    padding-left: 0;\n  }\n  .form-inline .radio input[type=\"radio\"],\n  .form-inline .checkbox input[type=\"checkbox\"] {\n    position: relative;\n    margin-left: 0;\n  }\n  .form-inline .has-feedback .form-control-feedback {\n    top: 0;\n  }\n}\n.form-horizontal .radio,\n.form-horizontal .checkbox,\n.form-horizontal .radio-inline,\n.form-horizontal .checkbox-inline {\n  padding-top: 7px;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.form-horizontal .radio,\n.form-horizontal .checkbox {\n  min-height: 27px;\n}\n.form-horizontal .form-group {\n  margin-right: -15px;\n  margin-left: -15px;\n}\n@media (min-width: 768px) {\n  .form-horizontal .control-label {\n    padding-top: 7px;\n    margin-bottom: 0;\n    text-align: right;\n  }\n}\n.form-horizontal .has-feedback .form-control-feedback {\n  right: 15px;\n}\n@media (min-width: 768px) {\n  .form-horizontal .form-group-lg .control-label {\n    padding-top: 11px;\n    font-size: 18px;\n  }\n}\n@media (min-width: 768px) {\n  .form-horizontal .form-group-sm .control-label {\n    padding-top: 6px;\n    font-size: 12px;\n  }\n}\n.btn {\n  display: inline-block;\n  padding: 6px 12px;\n  margin-bottom: 0;\n  font-size: 14px;\n  font-weight: normal;\n  line-height: 1.42857143;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  -ms-touch-action: manipulation;\n      touch-action: manipulation;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\n.btn:focus,\n.btn:active:focus,\n.btn.active:focus,\n.btn.focus,\n.btn:active.focus,\n.btn.active.focus {\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\n.btn:hover,\n.btn:focus,\n.btn.focus {\n  color: #333;\n  text-decoration: none;\n}\n.btn:active,\n.btn.active {\n  background-image: none;\n  outline: 0;\n  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);\n          box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);\n}\n.btn.disabled,\n.btn[disabled],\nfieldset[disabled] .btn {\n  cursor: not-allowed;\n  filter: alpha(opacity=65);\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  opacity: .65;\n}\na.btn.disabled,\nfieldset[disabled] a.btn {\n  pointer-events: none;\n}\n.btn-default {\n  color: #333;\n  background-color: #fff;\n  border-color: #ccc;\n}\n.btn-default:focus,\n.btn-default.focus {\n  color: #333;\n  background-color: #e6e6e6;\n  border-color: #8c8c8c;\n}\n.btn-default:hover {\n  color: #333;\n  background-color: #e6e6e6;\n  border-color: #adadad;\n}\n.btn-default:active,\n.btn-default.active,\n.open > .dropdown-toggle.btn-default {\n  color: #333;\n  background-color: #e6e6e6;\n  border-color: #adadad;\n}\n.btn-default:active:hover,\n.btn-default.active:hover,\n.open > .dropdown-toggle.btn-default:hover,\n.btn-default:active:focus,\n.btn-default.active:focus,\n.open > .dropdown-toggle.btn-default:focus,\n.btn-default:active.focus,\n.btn-default.active.focus,\n.open > .dropdown-toggle.btn-default.focus {\n  color: #333;\n  background-color: #d4d4d4;\n  border-color: #8c8c8c;\n}\n.btn-default:active,\n.btn-default.active,\n.open > .dropdown-toggle.btn-default {\n  background-image: none;\n}\n.btn-default.disabled:hover,\n.btn-default[disabled]:hover,\nfieldset[disabled] .btn-default:hover,\n.btn-default.disabled:focus,\n.btn-default[disabled]:focus,\nfieldset[disabled] .btn-default:focus,\n.btn-default.disabled.focus,\n.btn-default[disabled].focus,\nfieldset[disabled] .btn-default.focus {\n  background-color: #fff;\n  border-color: #ccc;\n}\n.btn-default .badge {\n  color: #fff;\n  background-color: #333;\n}\n.btn-primary {\n  color: #fff;\n  background-color: #337ab7;\n  border-color: #2e6da4;\n}\n.btn-primary:focus,\n.btn-primary.focus {\n  color: #fff;\n  background-color: #286090;\n  border-color: #122b40;\n}\n.btn-primary:hover {\n  color: #fff;\n  background-color: #286090;\n  border-color: #204d74;\n}\n.btn-primary:active,\n.btn-primary.active,\n.open > .dropdown-toggle.btn-primary {\n  color: #fff;\n  background-color: #286090;\n  border-color: #204d74;\n}\n.btn-primary:active:hover,\n.btn-primary.active:hover,\n.open > .dropdown-toggle.btn-primary:hover,\n.btn-primary:active:focus,\n.btn-primary.active:focus,\n.open > .dropdown-toggle.btn-primary:focus,\n.btn-primary:active.focus,\n.btn-primary.active.focus,\n.open > .dropdown-toggle.btn-primary.focus {\n  color: #fff;\n  background-color: #204d74;\n  border-color: #122b40;\n}\n.btn-primary:active,\n.btn-primary.active,\n.open > .dropdown-toggle.btn-primary {\n  background-image: none;\n}\n.btn-primary.disabled:hover,\n.btn-primary[disabled]:hover,\nfieldset[disabled] .btn-primary:hover,\n.btn-primary.disabled:focus,\n.btn-primary[disabled]:focus,\nfieldset[disabled] .btn-primary:focus,\n.btn-primary.disabled.focus,\n.btn-primary[disabled].focus,\nfieldset[disabled] .btn-primary.focus {\n  background-color: #337ab7;\n  border-color: #2e6da4;\n}\n.btn-primary .badge {\n  color: #337ab7;\n  background-color: #fff;\n}\n.btn-success {\n  color: #fff;\n  background-color: #5cb85c;\n  border-color: #4cae4c;\n}\n.btn-success:focus,\n.btn-success.focus {\n  color: #fff;\n  background-color: #449d44;\n  border-color: #255625;\n}\n.btn-success:hover {\n  color: #fff;\n  background-color: #449d44;\n  border-color: #398439;\n}\n.btn-success:active,\n.btn-success.active,\n.open > .dropdown-toggle.btn-success {\n  color: #fff;\n  background-color: #449d44;\n  border-color: #398439;\n}\n.btn-success:active:hover,\n.btn-success.active:hover,\n.open > .dropdown-toggle.btn-success:hover,\n.btn-success:active:focus,\n.btn-success.active:focus,\n.open > .dropdown-toggle.btn-success:focus,\n.btn-success:active.focus,\n.btn-success.active.focus,\n.open > .dropdown-toggle.btn-success.focus {\n  color: #fff;\n  background-color: #398439;\n  border-color: #255625;\n}\n.btn-success:active,\n.btn-success.active,\n.open > .dropdown-toggle.btn-success {\n  background-image: none;\n}\n.btn-success.disabled:hover,\n.btn-success[disabled]:hover,\nfieldset[disabled] .btn-success:hover,\n.btn-success.disabled:focus,\n.btn-success[disabled]:focus,\nfieldset[disabled] .btn-success:focus,\n.btn-success.disabled.focus,\n.btn-success[disabled].focus,\nfieldset[disabled] .btn-success.focus {\n  background-color: #5cb85c;\n  border-color: #4cae4c;\n}\n.btn-success .badge {\n  color: #5cb85c;\n  background-color: #fff;\n}\n.btn-info {\n  color: #fff;\n  background-color: #5bc0de;\n  border-color: #46b8da;\n}\n.btn-info:focus,\n.btn-info.focus {\n  color: #fff;\n  background-color: #31b0d5;\n  border-color: #1b6d85;\n}\n.btn-info:hover {\n  color: #fff;\n  background-color: #31b0d5;\n  border-color: #269abc;\n}\n.btn-info:active,\n.btn-info.active,\n.open > .dropdown-toggle.btn-info {\n  color: #fff;\n  background-color: #31b0d5;\n  border-color: #269abc;\n}\n.btn-info:active:hover,\n.btn-info.active:hover,\n.open > .dropdown-toggle.btn-info:hover,\n.btn-info:active:focus,\n.btn-info.active:focus,\n.open > .dropdown-toggle.btn-info:focus,\n.btn-info:active.focus,\n.btn-info.active.focus,\n.open > .dropdown-toggle.btn-info.focus {\n  color: #fff;\n  background-color: #269abc;\n  border-color: #1b6d85;\n}\n.btn-info:active,\n.btn-info.active,\n.open > .dropdown-toggle.btn-info {\n  background-image: none;\n}\n.btn-info.disabled:hover,\n.btn-info[disabled]:hover,\nfieldset[disabled] .btn-info:hover,\n.btn-info.disabled:focus,\n.btn-info[disabled]:focus,\nfieldset[disabled] .btn-info:focus,\n.btn-info.disabled.focus,\n.btn-info[disabled].focus,\nfieldset[disabled] .btn-info.focus {\n  background-color: #5bc0de;\n  border-color: #46b8da;\n}\n.btn-info .badge {\n  color: #5bc0de;\n  background-color: #fff;\n}\n.btn-warning {\n  color: #fff;\n  background-color: #f0ad4e;\n  border-color: #eea236;\n}\n.btn-warning:focus,\n.btn-warning.focus {\n  color: #fff;\n  background-color: #ec971f;\n  border-color: #985f0d;\n}\n.btn-warning:hover {\n  color: #fff;\n  background-color: #ec971f;\n  border-color: #d58512;\n}\n.btn-warning:active,\n.btn-warning.active,\n.open > .dropdown-toggle.btn-warning {\n  color: #fff;\n  background-color: #ec971f;\n  border-color: #d58512;\n}\n.btn-warning:active:hover,\n.btn-warning.active:hover,\n.open > .dropdown-toggle.btn-warning:hover,\n.btn-warning:active:focus,\n.btn-warning.active:focus,\n.open > .dropdown-toggle.btn-warning:focus,\n.btn-warning:active.focus,\n.btn-warning.active.focus,\n.open > .dropdown-toggle.btn-warning.focus {\n  color: #fff;\n  background-color: #d58512;\n  border-color: #985f0d;\n}\n.btn-warning:active,\n.btn-warning.active,\n.open > .dropdown-toggle.btn-warning {\n  background-image: none;\n}\n.btn-warning.disabled:hover,\n.btn-warning[disabled]:hover,\nfieldset[disabled] .btn-warning:hover,\n.btn-warning.disabled:focus,\n.btn-warning[disabled]:focus,\nfieldset[disabled] .btn-warning:focus,\n.btn-warning.disabled.focus,\n.btn-warning[disabled].focus,\nfieldset[disabled] .btn-warning.focus {\n  background-color: #f0ad4e;\n  border-color: #eea236;\n}\n.btn-warning .badge {\n  color: #f0ad4e;\n  background-color: #fff;\n}\n.btn-danger {\n  color: #fff;\n  background-color: #d9534f;\n  border-color: #d43f3a;\n}\n.btn-danger:focus,\n.btn-danger.focus {\n  color: #fff;\n  background-color: #c9302c;\n  border-color: #761c19;\n}\n.btn-danger:hover {\n  color: #fff;\n  background-color: #c9302c;\n  border-color: #ac2925;\n}\n.btn-danger:active,\n.btn-danger.active,\n.open > .dropdown-toggle.btn-danger {\n  color: #fff;\n  background-color: #c9302c;\n  border-color: #ac2925;\n}\n.btn-danger:active:hover,\n.btn-danger.active:hover,\n.open > .dropdown-toggle.btn-danger:hover,\n.btn-danger:active:focus,\n.btn-danger.active:focus,\n.open > .dropdown-toggle.btn-danger:focus,\n.btn-danger:active.focus,\n.btn-danger.active.focus,\n.open > .dropdown-toggle.btn-danger.focus {\n  color: #fff;\n  background-color: #ac2925;\n  border-color: #761c19;\n}\n.btn-danger:active,\n.btn-danger.active,\n.open > .dropdown-toggle.btn-danger {\n  background-image: none;\n}\n.btn-danger.disabled:hover,\n.btn-danger[disabled]:hover,\nfieldset[disabled] .btn-danger:hover,\n.btn-danger.disabled:focus,\n.btn-danger[disabled]:focus,\nfieldset[disabled] .btn-danger:focus,\n.btn-danger.disabled.focus,\n.btn-danger[disabled].focus,\nfieldset[disabled] .btn-danger.focus {\n  background-color: #d9534f;\n  border-color: #d43f3a;\n}\n.btn-danger .badge {\n  color: #d9534f;\n  background-color: #fff;\n}\n.btn-link {\n  font-weight: normal;\n  color: #337ab7;\n  border-radius: 0;\n}\n.btn-link,\n.btn-link:active,\n.btn-link.active,\n.btn-link[disabled],\nfieldset[disabled] .btn-link {\n  background-color: transparent;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.btn-link,\n.btn-link:hover,\n.btn-link:focus,\n.btn-link:active {\n  border-color: transparent;\n}\n.btn-link:hover,\n.btn-link:focus {\n  color: #23527c;\n  text-decoration: underline;\n  background-color: transparent;\n}\n.btn-link[disabled]:hover,\nfieldset[disabled] .btn-link:hover,\n.btn-link[disabled]:focus,\nfieldset[disabled] .btn-link:focus {\n  color: #777;\n  text-decoration: none;\n}\n.btn-lg,\n.btn-group-lg > .btn {\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n  border-radius: 6px;\n}\n.btn-sm,\n.btn-group-sm > .btn {\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\n.btn-xs,\n.btn-group-xs > .btn {\n  padding: 1px 5px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\n.btn-block {\n  display: block;\n  width: 100%;\n}\n.btn-block + .btn-block {\n  margin-top: 5px;\n}\ninput[type=\"submit\"].btn-block,\ninput[type=\"reset\"].btn-block,\ninput[type=\"button\"].btn-block {\n  width: 100%;\n}\n.fade {\n  opacity: 0;\n  -webkit-transition: opacity .15s linear;\n          transition: opacity .15s linear;\n}\n.fade.in {\n  opacity: 1;\n}\n.collapse {\n  display: none;\n}\n.collapse.in {\n  display: block;\n}\ntr.collapse.in {\n  display: table-row;\n}\ntbody.collapse.in {\n  display: table-row-group;\n}\n.collapsing {\n  position: relative;\n  height: 0;\n  overflow: hidden;\n  -webkit-transition-timing-function: ease;\n          transition-timing-function: ease;\n  -webkit-transition-duration: .35s;\n          transition-duration: .35s;\n  -webkit-transition-property: height, visibility;\n          transition-property: height, visibility;\n}\n.caret {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 2px;\n  vertical-align: middle;\n  border-top: 4px dashed;\n  border-top: 4px solid \\9;\n  border-right: 4px solid transparent;\n  border-left: 4px solid transparent;\n}\n.dropup,\n.dropdown {\n  position: relative;\n}\n.dropdown-toggle:focus {\n  outline: 0;\n}\n.dropdown-menu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  display: none;\n  float: left;\n  min-width: 160px;\n  padding: 5px 0;\n  margin: 2px 0 0;\n  font-size: 14px;\n  text-align: left;\n  list-style: none;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ccc;\n  border: 1px solid rgba(0, 0, 0, .15);\n  border-radius: 4px;\n  -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, .175);\n          box-shadow: 0 6px 12px rgba(0, 0, 0, .175);\n}\n.dropdown-menu.pull-right {\n  right: 0;\n  left: auto;\n}\n.dropdown-menu .divider {\n  height: 1px;\n  margin: 9px 0;\n  overflow: hidden;\n  background-color: #e5e5e5;\n}\n.dropdown-menu > li > a {\n  display: block;\n  padding: 3px 20px;\n  clear: both;\n  font-weight: normal;\n  line-height: 1.42857143;\n  color: #333;\n  white-space: nowrap;\n}\n.dropdown-menu > li > a:hover,\n.dropdown-menu > li > a:focus {\n  color: #262626;\n  text-decoration: none;\n  background-color: #f5f5f5;\n}\n.dropdown-menu > .active > a,\n.dropdown-menu > .active > a:hover,\n.dropdown-menu > .active > a:focus {\n  color: #fff;\n  text-decoration: none;\n  background-color: #337ab7;\n  outline: 0;\n}\n.dropdown-menu > .disabled > a,\n.dropdown-menu > .disabled > a:hover,\n.dropdown-menu > .disabled > a:focus {\n  color: #777;\n}\n.dropdown-menu > .disabled > a:hover,\n.dropdown-menu > .disabled > a:focus {\n  text-decoration: none;\n  cursor: not-allowed;\n  background-color: transparent;\n  background-image: none;\n  filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);\n}\n.open > .dropdown-menu {\n  display: block;\n}\n.open > a {\n  outline: 0;\n}\n.dropdown-menu-right {\n  right: 0;\n  left: auto;\n}\n.dropdown-menu-left {\n  right: auto;\n  left: 0;\n}\n.dropdown-header {\n  display: block;\n  padding: 3px 20px;\n  font-size: 12px;\n  line-height: 1.42857143;\n  color: #777;\n  white-space: nowrap;\n}\n.dropdown-backdrop {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 990;\n}\n.pull-right > .dropdown-menu {\n  right: 0;\n  left: auto;\n}\n.dropup .caret,\n.navbar-fixed-bottom .dropdown .caret {\n  content: \"\";\n  border-top: 0;\n  border-bottom: 4px dashed;\n  border-bottom: 4px solid \\9;\n}\n.dropup .dropdown-menu,\n.navbar-fixed-bottom .dropdown .dropdown-menu {\n  top: auto;\n  bottom: 100%;\n  margin-bottom: 2px;\n}\n@media (min-width: 768px) {\n  .navbar-right .dropdown-menu {\n    right: 0;\n    left: auto;\n  }\n  .navbar-right .dropdown-menu-left {\n    right: auto;\n    left: 0;\n  }\n}\n.btn-group,\n.btn-group-vertical {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n}\n.btn-group > .btn,\n.btn-group-vertical > .btn {\n  position: relative;\n  float: left;\n}\n.btn-group > .btn:hover,\n.btn-group-vertical > .btn:hover,\n.btn-group > .btn:focus,\n.btn-group-vertical > .btn:focus,\n.btn-group > .btn:active,\n.btn-group-vertical > .btn:active,\n.btn-group > .btn.active,\n.btn-group-vertical > .btn.active {\n  z-index: 2;\n}\n.btn-group .btn + .btn,\n.btn-group .btn + .btn-group,\n.btn-group .btn-group + .btn,\n.btn-group .btn-group + .btn-group {\n  margin-left: -1px;\n}\n.btn-toolbar {\n  margin-left: -5px;\n}\n.btn-toolbar .btn,\n.btn-toolbar .btn-group,\n.btn-toolbar .input-group {\n  float: left;\n}\n.btn-toolbar > .btn,\n.btn-toolbar > .btn-group,\n.btn-toolbar > .input-group {\n  margin-left: 5px;\n}\n.btn-group > .btn:not(:first-child):not(:last-child):not(.dropdown-toggle) {\n  border-radius: 0;\n}\n.btn-group > .btn:first-child {\n  margin-left: 0;\n}\n.btn-group > .btn:first-child:not(:last-child):not(.dropdown-toggle) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.btn-group > .btn:last-child:not(:first-child),\n.btn-group > .dropdown-toggle:not(:first-child) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.btn-group > .btn-group {\n  float: left;\n}\n.btn-group > .btn-group:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0;\n}\n.btn-group > .btn-group:first-child:not(:last-child) > .btn:last-child,\n.btn-group > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.btn-group > .btn-group:last-child:not(:first-child) > .btn:first-child {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.btn-group .dropdown-toggle:active,\n.btn-group.open .dropdown-toggle {\n  outline: 0;\n}\n.btn-group > .btn + .dropdown-toggle {\n  padding-right: 8px;\n  padding-left: 8px;\n}\n.btn-group > .btn-lg + .dropdown-toggle {\n  padding-right: 12px;\n  padding-left: 12px;\n}\n.btn-group.open .dropdown-toggle {\n  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);\n          box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);\n}\n.btn-group.open .dropdown-toggle.btn-link {\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.btn .caret {\n  margin-left: 0;\n}\n.btn-lg .caret {\n  border-width: 5px 5px 0;\n  border-bottom-width: 0;\n}\n.dropup .btn-lg .caret {\n  border-width: 0 5px 5px;\n}\n.btn-group-vertical > .btn,\n.btn-group-vertical > .btn-group,\n.btn-group-vertical > .btn-group > .btn {\n  display: block;\n  float: none;\n  width: 100%;\n  max-width: 100%;\n}\n.btn-group-vertical > .btn-group > .btn {\n  float: none;\n}\n.btn-group-vertical > .btn + .btn,\n.btn-group-vertical > .btn + .btn-group,\n.btn-group-vertical > .btn-group + .btn,\n.btn-group-vertical > .btn-group + .btn-group {\n  margin-top: -1px;\n  margin-left: 0;\n}\n.btn-group-vertical > .btn:not(:first-child):not(:last-child) {\n  border-radius: 0;\n}\n.btn-group-vertical > .btn:first-child:not(:last-child) {\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.btn-group-vertical > .btn:last-child:not(:first-child) {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n.btn-group-vertical > .btn-group:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0;\n}\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .btn:last-child,\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.btn-group-vertical > .btn-group:last-child:not(:first-child) > .btn:first-child {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.btn-group-justified {\n  display: table;\n  width: 100%;\n  table-layout: fixed;\n  border-collapse: separate;\n}\n.btn-group-justified > .btn,\n.btn-group-justified > .btn-group {\n  display: table-cell;\n  float: none;\n  width: 1%;\n}\n.btn-group-justified > .btn-group .btn {\n  width: 100%;\n}\n.btn-group-justified > .btn-group .dropdown-menu {\n  left: auto;\n}\n[data-toggle=\"buttons\"] > .btn input[type=\"radio\"],\n[data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"radio\"],\n[data-toggle=\"buttons\"] > .btn input[type=\"checkbox\"],\n[data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"checkbox\"] {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  pointer-events: none;\n}\n.input-group {\n  position: relative;\n  display: table;\n  border-collapse: separate;\n}\n.input-group[class*=\"col-\"] {\n  float: none;\n  padding-right: 0;\n  padding-left: 0;\n}\n.input-group .form-control {\n  position: relative;\n  z-index: 2;\n  float: left;\n  width: 100%;\n  margin-bottom: 0;\n}\n.input-group .form-control:focus {\n  z-index: 3;\n}\n.input-group-lg > .form-control,\n.input-group-lg > .input-group-addon,\n.input-group-lg > .input-group-btn > .btn {\n  height: 46px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n  border-radius: 6px;\n}\nselect.input-group-lg > .form-control,\nselect.input-group-lg > .input-group-addon,\nselect.input-group-lg > .input-group-btn > .btn {\n  height: 46px;\n  line-height: 46px;\n}\ntextarea.input-group-lg > .form-control,\ntextarea.input-group-lg > .input-group-addon,\ntextarea.input-group-lg > .input-group-btn > .btn,\nselect[multiple].input-group-lg > .form-control,\nselect[multiple].input-group-lg > .input-group-addon,\nselect[multiple].input-group-lg > .input-group-btn > .btn {\n  height: auto;\n}\n.input-group-sm > .form-control,\n.input-group-sm > .input-group-addon,\n.input-group-sm > .input-group-btn > .btn {\n  height: 30px;\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\nselect.input-group-sm > .form-control,\nselect.input-group-sm > .input-group-addon,\nselect.input-group-sm > .input-group-btn > .btn {\n  height: 30px;\n  line-height: 30px;\n}\ntextarea.input-group-sm > .form-control,\ntextarea.input-group-sm > .input-group-addon,\ntextarea.input-group-sm > .input-group-btn > .btn,\nselect[multiple].input-group-sm > .form-control,\nselect[multiple].input-group-sm > .input-group-addon,\nselect[multiple].input-group-sm > .input-group-btn > .btn {\n  height: auto;\n}\n.input-group-addon,\n.input-group-btn,\n.input-group .form-control {\n  display: table-cell;\n}\n.input-group-addon:not(:first-child):not(:last-child),\n.input-group-btn:not(:first-child):not(:last-child),\n.input-group .form-control:not(:first-child):not(:last-child) {\n  border-radius: 0;\n}\n.input-group-addon,\n.input-group-btn {\n  width: 1%;\n  white-space: nowrap;\n  vertical-align: middle;\n}\n.input-group-addon {\n  padding: 6px 12px;\n  font-size: 14px;\n  font-weight: normal;\n  line-height: 1;\n  color: #555;\n  text-align: center;\n  background-color: #eee;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\n.input-group-addon.input-sm {\n  padding: 5px 10px;\n  font-size: 12px;\n  border-radius: 3px;\n}\n.input-group-addon.input-lg {\n  padding: 10px 16px;\n  font-size: 18px;\n  border-radius: 6px;\n}\n.input-group-addon input[type=\"radio\"],\n.input-group-addon input[type=\"checkbox\"] {\n  margin-top: 0;\n}\n.input-group .form-control:first-child,\n.input-group-addon:first-child,\n.input-group-btn:first-child > .btn,\n.input-group-btn:first-child > .btn-group > .btn,\n.input-group-btn:first-child > .dropdown-toggle,\n.input-group-btn:last-child > .btn:not(:last-child):not(.dropdown-toggle),\n.input-group-btn:last-child > .btn-group:not(:last-child) > .btn {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.input-group-addon:first-child {\n  border-right: 0;\n}\n.input-group .form-control:last-child,\n.input-group-addon:last-child,\n.input-group-btn:last-child > .btn,\n.input-group-btn:last-child > .btn-group > .btn,\n.input-group-btn:last-child > .dropdown-toggle,\n.input-group-btn:first-child > .btn:not(:first-child),\n.input-group-btn:first-child > .btn-group:not(:first-child) > .btn {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.input-group-addon:last-child {\n  border-left: 0;\n}\n.input-group-btn {\n  position: relative;\n  font-size: 0;\n  white-space: nowrap;\n}\n.input-group-btn > .btn {\n  position: relative;\n}\n.input-group-btn > .btn + .btn {\n  margin-left: -1px;\n}\n.input-group-btn > .btn:hover,\n.input-group-btn > .btn:focus,\n.input-group-btn > .btn:active {\n  z-index: 2;\n}\n.input-group-btn:first-child > .btn,\n.input-group-btn:first-child > .btn-group {\n  margin-right: -1px;\n}\n.input-group-btn:last-child > .btn,\n.input-group-btn:last-child > .btn-group {\n  z-index: 2;\n  margin-left: -1px;\n}\n.nav {\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n}\n.nav > li {\n  position: relative;\n  display: block;\n}\n.nav > li > a {\n  position: relative;\n  display: block;\n  padding: 10px 15px;\n}\n.nav > li > a:hover,\n.nav > li > a:focus {\n  text-decoration: none;\n  background-color: #eee;\n}\n.nav > li.disabled > a {\n  color: #777;\n}\n.nav > li.disabled > a:hover,\n.nav > li.disabled > a:focus {\n  color: #777;\n  text-decoration: none;\n  cursor: not-allowed;\n  background-color: transparent;\n}\n.nav .open > a,\n.nav .open > a:hover,\n.nav .open > a:focus {\n  background-color: #eee;\n  border-color: #337ab7;\n}\n.nav .nav-divider {\n  height: 1px;\n  margin: 9px 0;\n  overflow: hidden;\n  background-color: #e5e5e5;\n}\n.nav > li > a > img {\n  max-width: none;\n}\n.nav-tabs {\n  border-bottom: 1px solid #ddd;\n}\n.nav-tabs > li {\n  float: left;\n  margin-bottom: -1px;\n}\n.nav-tabs > li > a {\n  margin-right: 2px;\n  line-height: 1.42857143;\n  border: 1px solid transparent;\n  border-radius: 4px 4px 0 0;\n}\n.nav-tabs > li > a:hover {\n  border-color: #eee #eee #ddd;\n}\n.nav-tabs > li.active > a,\n.nav-tabs > li.active > a:hover,\n.nav-tabs > li.active > a:focus {\n  color: #555;\n  cursor: default;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-bottom-color: transparent;\n}\n.nav-tabs.nav-justified {\n  width: 100%;\n  border-bottom: 0;\n}\n.nav-tabs.nav-justified > li {\n  float: none;\n}\n.nav-tabs.nav-justified > li > a {\n  margin-bottom: 5px;\n  text-align: center;\n}\n.nav-tabs.nav-justified > .dropdown .dropdown-menu {\n  top: auto;\n  left: auto;\n}\n@media (min-width: 768px) {\n  .nav-tabs.nav-justified > li {\n    display: table-cell;\n    width: 1%;\n  }\n  .nav-tabs.nav-justified > li > a {\n    margin-bottom: 0;\n  }\n}\n.nav-tabs.nav-justified > li > a {\n  margin-right: 0;\n  border-radius: 4px;\n}\n.nav-tabs.nav-justified > .active > a,\n.nav-tabs.nav-justified > .active > a:hover,\n.nav-tabs.nav-justified > .active > a:focus {\n  border: 1px solid #ddd;\n}\n@media (min-width: 768px) {\n  .nav-tabs.nav-justified > li > a {\n    border-bottom: 1px solid #ddd;\n    border-radius: 4px 4px 0 0;\n  }\n  .nav-tabs.nav-justified > .active > a,\n  .nav-tabs.nav-justified > .active > a:hover,\n  .nav-tabs.nav-justified > .active > a:focus {\n    border-bottom-color: #fff;\n  }\n}\n.nav-pills > li {\n  float: left;\n}\n.nav-pills > li > a {\n  border-radius: 4px;\n}\n.nav-pills > li + li {\n  margin-left: 2px;\n}\n.nav-pills > li.active > a,\n.nav-pills > li.active > a:hover,\n.nav-pills > li.active > a:focus {\n  color: #fff;\n  background-color: #337ab7;\n}\n.nav-stacked > li {\n  float: none;\n}\n.nav-stacked > li + li {\n  margin-top: 2px;\n  margin-left: 0;\n}\n.nav-justified {\n  width: 100%;\n}\n.nav-justified > li {\n  float: none;\n}\n.nav-justified > li > a {\n  margin-bottom: 5px;\n  text-align: center;\n}\n.nav-justified > .dropdown .dropdown-menu {\n  top: auto;\n  left: auto;\n}\n@media (min-width: 768px) {\n  .nav-justified > li {\n    display: table-cell;\n    width: 1%;\n  }\n  .nav-justified > li > a {\n    margin-bottom: 0;\n  }\n}\n.nav-tabs-justified {\n  border-bottom: 0;\n}\n.nav-tabs-justified > li > a {\n  margin-right: 0;\n  border-radius: 4px;\n}\n.nav-tabs-justified > .active > a,\n.nav-tabs-justified > .active > a:hover,\n.nav-tabs-justified > .active > a:focus {\n  border: 1px solid #ddd;\n}\n@media (min-width: 768px) {\n  .nav-tabs-justified > li > a {\n    border-bottom: 1px solid #ddd;\n    border-radius: 4px 4px 0 0;\n  }\n  .nav-tabs-justified > .active > a,\n  .nav-tabs-justified > .active > a:hover,\n  .nav-tabs-justified > .active > a:focus {\n    border-bottom-color: #fff;\n  }\n}\n.tab-content > .tab-pane {\n  display: none;\n}\n.tab-content > .active {\n  display: block;\n}\n.nav-tabs .dropdown-menu {\n  margin-top: -1px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.navbar {\n  position: relative;\n  min-height: 50px;\n  margin-bottom: 20px;\n  border: 1px solid transparent;\n}\n@media (min-width: 768px) {\n  .navbar {\n    border-radius: 4px;\n  }\n}\n@media (min-width: 768px) {\n  .navbar-header {\n    float: left;\n  }\n}\n.navbar-collapse {\n  padding-right: 15px;\n  padding-left: 15px;\n  overflow-x: visible;\n  -webkit-overflow-scrolling: touch;\n  border-top: 1px solid transparent;\n  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1);\n          box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1);\n}\n.navbar-collapse.in {\n  overflow-y: auto;\n}\n@media (min-width: 768px) {\n  .navbar-collapse {\n    width: auto;\n    border-top: 0;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n  }\n  .navbar-collapse.collapse {\n    display: block !important;\n    height: auto !important;\n    padding-bottom: 0;\n    overflow: visible !important;\n  }\n  .navbar-collapse.in {\n    overflow-y: visible;\n  }\n  .navbar-fixed-top .navbar-collapse,\n  .navbar-static-top .navbar-collapse,\n  .navbar-fixed-bottom .navbar-collapse {\n    padding-right: 0;\n    padding-left: 0;\n  }\n}\n.navbar-fixed-top .navbar-collapse,\n.navbar-fixed-bottom .navbar-collapse {\n  max-height: 340px;\n}\n@media (max-device-width: 480px) and (orientation: landscape) {\n  .navbar-fixed-top .navbar-collapse,\n  .navbar-fixed-bottom .navbar-collapse {\n    max-height: 200px;\n  }\n}\n.container > .navbar-header,\n.container-fluid > .navbar-header,\n.container > .navbar-collapse,\n.container-fluid > .navbar-collapse {\n  margin-right: -15px;\n  margin-left: -15px;\n}\n@media (min-width: 768px) {\n  .container > .navbar-header,\n  .container-fluid > .navbar-header,\n  .container > .navbar-collapse,\n  .container-fluid > .navbar-collapse {\n    margin-right: 0;\n    margin-left: 0;\n  }\n}\n.navbar-static-top {\n  z-index: 1000;\n  border-width: 0 0 1px;\n}\n@media (min-width: 768px) {\n  .navbar-static-top {\n    border-radius: 0;\n  }\n}\n.navbar-fixed-top,\n.navbar-fixed-bottom {\n  position: fixed;\n  right: 0;\n  left: 0;\n  z-index: 1030;\n}\n@media (min-width: 768px) {\n  .navbar-fixed-top,\n  .navbar-fixed-bottom {\n    border-radius: 0;\n  }\n}\n.navbar-fixed-top {\n  top: 0;\n  border-width: 0 0 1px;\n}\n.navbar-fixed-bottom {\n  bottom: 0;\n  margin-bottom: 0;\n  border-width: 1px 0 0;\n}\n.navbar-brand {\n  float: left;\n  height: 50px;\n  padding: 15px 15px;\n  font-size: 18px;\n  line-height: 20px;\n}\n.navbar-brand:hover,\n.navbar-brand:focus {\n  text-decoration: none;\n}\n.navbar-brand > img {\n  display: block;\n}\n@media (min-width: 768px) {\n  .navbar > .container .navbar-brand,\n  .navbar > .container-fluid .navbar-brand {\n    margin-left: -15px;\n  }\n}\n.navbar-toggle {\n  position: relative;\n  float: right;\n  padding: 9px 10px;\n  margin-top: 8px;\n  margin-right: 15px;\n  margin-bottom: 8px;\n  background-color: transparent;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\n.navbar-toggle:focus {\n  outline: 0;\n}\n.navbar-toggle .icon-bar {\n  display: block;\n  width: 22px;\n  height: 2px;\n  border-radius: 1px;\n}\n.navbar-toggle .icon-bar + .icon-bar {\n  margin-top: 4px;\n}\n@media (min-width: 768px) {\n  .navbar-toggle {\n    display: none;\n  }\n}\n.navbar-nav {\n  margin: 7.5px -15px;\n}\n.navbar-nav > li > a {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  line-height: 20px;\n}\n@media (max-width: 767px) {\n  .navbar-nav .open .dropdown-menu {\n    position: static;\n    float: none;\n    width: auto;\n    margin-top: 0;\n    background-color: transparent;\n    border: 0;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n  }\n  .navbar-nav .open .dropdown-menu > li > a,\n  .navbar-nav .open .dropdown-menu .dropdown-header {\n    padding: 5px 15px 5px 25px;\n  }\n  .navbar-nav .open .dropdown-menu > li > a {\n    line-height: 20px;\n  }\n  .navbar-nav .open .dropdown-menu > li > a:hover,\n  .navbar-nav .open .dropdown-menu > li > a:focus {\n    background-image: none;\n  }\n}\n@media (min-width: 768px) {\n  .navbar-nav {\n    float: left;\n    margin: 0;\n  }\n  .navbar-nav > li {\n    float: left;\n  }\n  .navbar-nav > li > a {\n    padding-top: 15px;\n    padding-bottom: 15px;\n  }\n}\n.navbar-form {\n  padding: 10px 15px;\n  margin-top: 8px;\n  margin-right: -15px;\n  margin-bottom: 8px;\n  margin-left: -15px;\n  border-top: 1px solid transparent;\n  border-bottom: 1px solid transparent;\n  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1), 0 1px 0 rgba(255, 255, 255, .1);\n          box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1), 0 1px 0 rgba(255, 255, 255, .1);\n}\n@media (min-width: 768px) {\n  .navbar-form .form-group {\n    display: inline-block;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .navbar-form .form-control {\n    display: inline-block;\n    width: auto;\n    vertical-align: middle;\n  }\n  .navbar-form .form-control-static {\n    display: inline-block;\n  }\n  .navbar-form .input-group {\n    display: inline-table;\n    vertical-align: middle;\n  }\n  .navbar-form .input-group .input-group-addon,\n  .navbar-form .input-group .input-group-btn,\n  .navbar-form .input-group .form-control {\n    width: auto;\n  }\n  .navbar-form .input-group > .form-control {\n    width: 100%;\n  }\n  .navbar-form .control-label {\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .navbar-form .radio,\n  .navbar-form .checkbox {\n    display: inline-block;\n    margin-top: 0;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .navbar-form .radio label,\n  .navbar-form .checkbox label {\n    padding-left: 0;\n  }\n  .navbar-form .radio input[type=\"radio\"],\n  .navbar-form .checkbox input[type=\"checkbox\"] {\n    position: relative;\n    margin-left: 0;\n  }\n  .navbar-form .has-feedback .form-control-feedback {\n    top: 0;\n  }\n}\n@media (max-width: 767px) {\n  .navbar-form .form-group {\n    margin-bottom: 5px;\n  }\n  .navbar-form .form-group:last-child {\n    margin-bottom: 0;\n  }\n}\n@media (min-width: 768px) {\n  .navbar-form {\n    width: auto;\n    padding-top: 0;\n    padding-bottom: 0;\n    margin-right: 0;\n    margin-left: 0;\n    border: 0;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n  }\n}\n.navbar-nav > li > .dropdown-menu {\n  margin-top: 0;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.navbar-fixed-bottom .navbar-nav > li > .dropdown-menu {\n  margin-bottom: 0;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.navbar-btn {\n  margin-top: 8px;\n  margin-bottom: 8px;\n}\n.navbar-btn.btn-sm {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.navbar-btn.btn-xs {\n  margin-top: 14px;\n  margin-bottom: 14px;\n}\n.navbar-text {\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n@media (min-width: 768px) {\n  .navbar-text {\n    float: left;\n    margin-right: 15px;\n    margin-left: 15px;\n  }\n}\n@media (min-width: 768px) {\n  .navbar-left {\n    float: left !important;\n  }\n  .navbar-right {\n    float: right !important;\n    margin-right: -15px;\n  }\n  .navbar-right ~ .navbar-right {\n    margin-right: 0;\n  }\n}\n.navbar-default {\n  background-color: #f8f8f8;\n  border-color: #e7e7e7;\n}\n.navbar-default .navbar-brand {\n  color: #777;\n}\n.navbar-default .navbar-brand:hover,\n.navbar-default .navbar-brand:focus {\n  color: #5e5e5e;\n  background-color: transparent;\n}\n.navbar-default .navbar-text {\n  color: #777;\n}\n.navbar-default .navbar-nav > li > a {\n  color: #777;\n}\n.navbar-default .navbar-nav > li > a:hover,\n.navbar-default .navbar-nav > li > a:focus {\n  color: #333;\n  background-color: transparent;\n}\n.navbar-default .navbar-nav > .active > a,\n.navbar-default .navbar-nav > .active > a:hover,\n.navbar-default .navbar-nav > .active > a:focus {\n  color: #555;\n  background-color: #e7e7e7;\n}\n.navbar-default .navbar-nav > .disabled > a,\n.navbar-default .navbar-nav > .disabled > a:hover,\n.navbar-default .navbar-nav > .disabled > a:focus {\n  color: #ccc;\n  background-color: transparent;\n}\n.navbar-default .navbar-toggle {\n  border-color: #ddd;\n}\n.navbar-default .navbar-toggle:hover,\n.navbar-default .navbar-toggle:focus {\n  background-color: #ddd;\n}\n.navbar-default .navbar-toggle .icon-bar {\n  background-color: #888;\n}\n.navbar-default .navbar-collapse,\n.navbar-default .navbar-form {\n  border-color: #e7e7e7;\n}\n.navbar-default .navbar-nav > .open > a,\n.navbar-default .navbar-nav > .open > a:hover,\n.navbar-default .navbar-nav > .open > a:focus {\n  color: #555;\n  background-color: #e7e7e7;\n}\n@media (max-width: 767px) {\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a {\n    color: #777;\n  }\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover,\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus {\n    color: #333;\n    background-color: transparent;\n  }\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a,\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:hover,\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:focus {\n    color: #555;\n    background-color: #e7e7e7;\n  }\n  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a,\n  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:hover,\n  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:focus {\n    color: #ccc;\n    background-color: transparent;\n  }\n}\n.navbar-default .navbar-link {\n  color: #777;\n}\n.navbar-default .navbar-link:hover {\n  color: #333;\n}\n.navbar-default .btn-link {\n  color: #777;\n}\n.navbar-default .btn-link:hover,\n.navbar-default .btn-link:focus {\n  color: #333;\n}\n.navbar-default .btn-link[disabled]:hover,\nfieldset[disabled] .navbar-default .btn-link:hover,\n.navbar-default .btn-link[disabled]:focus,\nfieldset[disabled] .navbar-default .btn-link:focus {\n  color: #ccc;\n}\n.navbar-inverse {\n  background-color: #222;\n  border-color: #080808;\n}\n.navbar-inverse .navbar-brand {\n  color: #9d9d9d;\n}\n.navbar-inverse .navbar-brand:hover,\n.navbar-inverse .navbar-brand:focus {\n  color: #fff;\n  background-color: transparent;\n}\n.navbar-inverse .navbar-text {\n  color: #9d9d9d;\n}\n.navbar-inverse .navbar-nav > li > a {\n  color: #9d9d9d;\n}\n.navbar-inverse .navbar-nav > li > a:hover,\n.navbar-inverse .navbar-nav > li > a:focus {\n  color: #fff;\n  background-color: transparent;\n}\n.navbar-inverse .navbar-nav > .active > a,\n.navbar-inverse .navbar-nav > .active > a:hover,\n.navbar-inverse .navbar-nav > .active > a:focus {\n  color: #fff;\n  background-color: #080808;\n}\n.navbar-inverse .navbar-nav > .disabled > a,\n.navbar-inverse .navbar-nav > .disabled > a:hover,\n.navbar-inverse .navbar-nav > .disabled > a:focus {\n  color: #444;\n  background-color: transparent;\n}\n.navbar-inverse .navbar-toggle {\n  border-color: #333;\n}\n.navbar-inverse .navbar-toggle:hover,\n.navbar-inverse .navbar-toggle:focus {\n  background-color: #333;\n}\n.navbar-inverse .navbar-toggle .icon-bar {\n  background-color: #fff;\n}\n.navbar-inverse .navbar-collapse,\n.navbar-inverse .navbar-form {\n  border-color: #101010;\n}\n.navbar-inverse .navbar-nav > .open > a,\n.navbar-inverse .navbar-nav > .open > a:hover,\n.navbar-inverse .navbar-nav > .open > a:focus {\n  color: #fff;\n  background-color: #080808;\n}\n@media (max-width: 767px) {\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .dropdown-header {\n    border-color: #080808;\n  }\n  .navbar-inverse .navbar-nav .open .dropdown-menu .divider {\n    background-color: #080808;\n  }\n  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a {\n    color: #9d9d9d;\n  }\n  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:hover,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:focus {\n    color: #fff;\n    background-color: transparent;\n  }\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:hover,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:focus {\n    color: #fff;\n    background-color: #080808;\n  }\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:hover,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:focus {\n    color: #444;\n    background-color: transparent;\n  }\n}\n.navbar-inverse .navbar-link {\n  color: #9d9d9d;\n}\n.navbar-inverse .navbar-link:hover {\n  color: #fff;\n}\n.navbar-inverse .btn-link {\n  color: #9d9d9d;\n}\n.navbar-inverse .btn-link:hover,\n.navbar-inverse .btn-link:focus {\n  color: #fff;\n}\n.navbar-inverse .btn-link[disabled]:hover,\nfieldset[disabled] .navbar-inverse .btn-link:hover,\n.navbar-inverse .btn-link[disabled]:focus,\nfieldset[disabled] .navbar-inverse .btn-link:focus {\n  color: #444;\n}\n.breadcrumb {\n  padding: 8px 15px;\n  margin-bottom: 20px;\n  list-style: none;\n  background-color: #f5f5f5;\n  border-radius: 4px;\n}\n.breadcrumb > li {\n  display: inline-block;\n}\n.breadcrumb > li + li:before {\n  padding: 0 5px;\n  color: #ccc;\n  content: \"/\\00a0\";\n}\n.breadcrumb > .active {\n  color: #777;\n}\n.pagination {\n  display: inline-block;\n  padding-left: 0;\n  margin: 20px 0;\n  border-radius: 4px;\n}\n.pagination > li {\n  display: inline;\n}\n.pagination > li > a,\n.pagination > li > span {\n  position: relative;\n  float: left;\n  padding: 6px 12px;\n  margin-left: -1px;\n  line-height: 1.42857143;\n  color: #337ab7;\n  text-decoration: none;\n  background-color: #fff;\n  border: 1px solid #ddd;\n}\n.pagination > li:first-child > a,\n.pagination > li:first-child > span {\n  margin-left: 0;\n  border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n.pagination > li:last-child > a,\n.pagination > li:last-child > span {\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 4px;\n}\n.pagination > li > a:hover,\n.pagination > li > span:hover,\n.pagination > li > a:focus,\n.pagination > li > span:focus {\n  z-index: 2;\n  color: #23527c;\n  background-color: #eee;\n  border-color: #ddd;\n}\n.pagination > .active > a,\n.pagination > .active > span,\n.pagination > .active > a:hover,\n.pagination > .active > span:hover,\n.pagination > .active > a:focus,\n.pagination > .active > span:focus {\n  z-index: 3;\n  color: #fff;\n  cursor: default;\n  background-color: #337ab7;\n  border-color: #337ab7;\n}\n.pagination > .disabled > span,\n.pagination > .disabled > span:hover,\n.pagination > .disabled > span:focus,\n.pagination > .disabled > a,\n.pagination > .disabled > a:hover,\n.pagination > .disabled > a:focus {\n  color: #777;\n  cursor: not-allowed;\n  background-color: #fff;\n  border-color: #ddd;\n}\n.pagination-lg > li > a,\n.pagination-lg > li > span {\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n}\n.pagination-lg > li:first-child > a,\n.pagination-lg > li:first-child > span {\n  border-top-left-radius: 6px;\n  border-bottom-left-radius: 6px;\n}\n.pagination-lg > li:last-child > a,\n.pagination-lg > li:last-child > span {\n  border-top-right-radius: 6px;\n  border-bottom-right-radius: 6px;\n}\n.pagination-sm > li > a,\n.pagination-sm > li > span {\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n}\n.pagination-sm > li:first-child > a,\n.pagination-sm > li:first-child > span {\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n.pagination-sm > li:last-child > a,\n.pagination-sm > li:last-child > span {\n  border-top-right-radius: 3px;\n  border-bottom-right-radius: 3px;\n}\n.pager {\n  padding-left: 0;\n  margin: 20px 0;\n  text-align: center;\n  list-style: none;\n}\n.pager li {\n  display: inline;\n}\n.pager li > a,\n.pager li > span {\n  display: inline-block;\n  padding: 5px 14px;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 15px;\n}\n.pager li > a:hover,\n.pager li > a:focus {\n  text-decoration: none;\n  background-color: #eee;\n}\n.pager .next > a,\n.pager .next > span {\n  float: right;\n}\n.pager .previous > a,\n.pager .previous > span {\n  float: left;\n}\n.pager .disabled > a,\n.pager .disabled > a:hover,\n.pager .disabled > a:focus,\n.pager .disabled > span {\n  color: #777;\n  cursor: not-allowed;\n  background-color: #fff;\n}\n.label {\n  display: inline;\n  padding: .2em .6em .3em;\n  font-size: 75%;\n  font-weight: bold;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: .25em;\n}\na.label:hover,\na.label:focus {\n  color: #fff;\n  text-decoration: none;\n  cursor: pointer;\n}\n.label:empty {\n  display: none;\n}\n.btn .label {\n  position: relative;\n  top: -1px;\n}\n.label-default {\n  background-color: #777;\n}\n.label-default[href]:hover,\n.label-default[href]:focus {\n  background-color: #5e5e5e;\n}\n.label-primary {\n  background-color: #337ab7;\n}\n.label-primary[href]:hover,\n.label-primary[href]:focus {\n  background-color: #286090;\n}\n.label-success {\n  background-color: #5cb85c;\n}\n.label-success[href]:hover,\n.label-success[href]:focus {\n  background-color: #449d44;\n}\n.label-info {\n  background-color: #5bc0de;\n}\n.label-info[href]:hover,\n.label-info[href]:focus {\n  background-color: #31b0d5;\n}\n.label-warning {\n  background-color: #f0ad4e;\n}\n.label-warning[href]:hover,\n.label-warning[href]:focus {\n  background-color: #ec971f;\n}\n.label-danger {\n  background-color: #d9534f;\n}\n.label-danger[href]:hover,\n.label-danger[href]:focus {\n  background-color: #c9302c;\n}\n.badge {\n  display: inline-block;\n  min-width: 10px;\n  padding: 3px 7px;\n  font-size: 12px;\n  font-weight: bold;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  background-color: #777;\n  border-radius: 10px;\n}\n.badge:empty {\n  display: none;\n}\n.btn .badge {\n  position: relative;\n  top: -1px;\n}\n.btn-xs .badge,\n.btn-group-xs > .btn .badge {\n  top: 0;\n  padding: 1px 5px;\n}\na.badge:hover,\na.badge:focus {\n  color: #fff;\n  text-decoration: none;\n  cursor: pointer;\n}\n.list-group-item.active > .badge,\n.nav-pills > .active > a > .badge {\n  color: #337ab7;\n  background-color: #fff;\n}\n.list-group-item > .badge {\n  float: right;\n}\n.list-group-item > .badge + .badge {\n  margin-right: 5px;\n}\n.nav-pills > li > a > .badge {\n  margin-left: 3px;\n}\n.jumbotron {\n  padding-top: 30px;\n  padding-bottom: 30px;\n  margin-bottom: 30px;\n  color: inherit;\n  background-color: #eee;\n}\n.jumbotron h1,\n.jumbotron .h1 {\n  color: inherit;\n}\n.jumbotron p {\n  margin-bottom: 15px;\n  font-size: 21px;\n  font-weight: 200;\n}\n.jumbotron > hr {\n  border-top-color: #d5d5d5;\n}\n.container .jumbotron,\n.container-fluid .jumbotron {\n  padding-right: 15px;\n  padding-left: 15px;\n  border-radius: 6px;\n}\n.jumbotron .container {\n  max-width: 100%;\n}\n@media screen and (min-width: 768px) {\n  .jumbotron {\n    padding-top: 48px;\n    padding-bottom: 48px;\n  }\n  .container .jumbotron,\n  .container-fluid .jumbotron {\n    padding-right: 60px;\n    padding-left: 60px;\n  }\n  .jumbotron h1,\n  .jumbotron .h1 {\n    font-size: 63px;\n  }\n}\n.thumbnail {\n  display: block;\n  padding: 4px;\n  margin-bottom: 20px;\n  line-height: 1.42857143;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  -webkit-transition: border .2s ease-in-out;\n          transition: border .2s ease-in-out;\n}\n.thumbnail > img,\n.thumbnail a > img {\n  margin-right: auto;\n  margin-left: auto;\n}\na.thumbnail:hover,\na.thumbnail:focus,\na.thumbnail.active {\n  border-color: #337ab7;\n}\n.thumbnail .caption {\n  padding: 9px;\n  color: #333;\n}\n.alert {\n  padding: 15px;\n  margin-bottom: 20px;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\n.alert h4 {\n  margin-top: 0;\n  color: inherit;\n}\n.alert .alert-link {\n  font-weight: bold;\n}\n.alert > p,\n.alert > ul {\n  margin-bottom: 0;\n}\n.alert > p + p {\n  margin-top: 5px;\n}\n.alert-dismissable,\n.alert-dismissible {\n  padding-right: 35px;\n}\n.alert-dismissable .close,\n.alert-dismissible .close {\n  position: relative;\n  top: -2px;\n  right: -21px;\n  color: inherit;\n}\n.alert-success {\n  color: #3c763d;\n  background-color: #dff0d8;\n  border-color: #d6e9c6;\n}\n.alert-success hr {\n  border-top-color: #c9e2b3;\n}\n.alert-success .alert-link {\n  color: #2b542c;\n}\n.alert-info {\n  color: #31708f;\n  background-color: #d9edf7;\n  border-color: #bce8f1;\n}\n.alert-info hr {\n  border-top-color: #a6e1ec;\n}\n.alert-info .alert-link {\n  color: #245269;\n}\n.alert-warning {\n  color: #8a6d3b;\n  background-color: #fcf8e3;\n  border-color: #faebcc;\n}\n.alert-warning hr {\n  border-top-color: #f7e1b5;\n}\n.alert-warning .alert-link {\n  color: #66512c;\n}\n.alert-danger {\n  color: #a94442;\n  background-color: #f2dede;\n  border-color: #ebccd1;\n}\n.alert-danger hr {\n  border-top-color: #e4b9c0;\n}\n.alert-danger .alert-link {\n  color: #843534;\n}\n@-webkit-keyframes progress-bar-stripes {\n  from {\n    background-position: 40px 0;\n  }\n  to {\n    background-position: 0 0;\n  }\n}\n@keyframes progress-bar-stripes {\n  from {\n    background-position: 40px 0;\n  }\n  to {\n    background-position: 0 0;\n  }\n}\n.progress {\n  height: 20px;\n  margin-bottom: 20px;\n  overflow: hidden;\n  background-color: #f5f5f5;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, .1);\n          box-shadow: inset 0 1px 2px rgba(0, 0, 0, .1);\n}\n.progress-bar {\n  float: left;\n  width: 0;\n  height: 100%;\n  font-size: 12px;\n  line-height: 20px;\n  color: #fff;\n  text-align: center;\n  background-color: #337ab7;\n  -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .15);\n          box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .15);\n  -webkit-transition: width .6s ease;\n          transition: width .6s ease;\n}\n.progress-striped .progress-bar,\n.progress-bar-striped {\n  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  background-size: 40px 40px;\n}\n.progress.active .progress-bar,\n.progress-bar.active {\n  -webkit-animation: progress-bar-stripes 2s linear infinite;\n          animation: progress-bar-stripes 2s linear infinite;\n}\n.progress-bar-success {\n  background-color: #5cb85c;\n}\n.progress-striped .progress-bar-success {\n  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n}\n.progress-bar-info {\n  background-color: #5bc0de;\n}\n.progress-striped .progress-bar-info {\n  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n}\n.progress-bar-warning {\n  background-color: #f0ad4e;\n}\n.progress-striped .progress-bar-warning {\n  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n}\n.progress-bar-danger {\n  background-color: #d9534f;\n}\n.progress-striped .progress-bar-danger {\n  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n}\n.media {\n  margin-top: 15px;\n}\n.media:first-child {\n  margin-top: 0;\n}\n.media,\n.media-body {\n  overflow: hidden;\n  zoom: 1;\n}\n.media-body {\n  width: 10000px;\n}\n.media-object {\n  display: block;\n}\n.media-object.img-thumbnail {\n  max-width: none;\n}\n.media-right,\n.media > .pull-right {\n  padding-left: 10px;\n}\n.media-left,\n.media > .pull-left {\n  padding-right: 10px;\n}\n.media-left,\n.media-right,\n.media-body {\n  display: table-cell;\n  vertical-align: top;\n}\n.media-middle {\n  vertical-align: middle;\n}\n.media-bottom {\n  vertical-align: bottom;\n}\n.media-heading {\n  margin-top: 0;\n  margin-bottom: 5px;\n}\n.media-list {\n  padding-left: 0;\n  list-style: none;\n}\n.list-group {\n  padding-left: 0;\n  margin-bottom: 20px;\n}\n.list-group-item {\n  position: relative;\n  display: block;\n  padding: 10px 15px;\n  margin-bottom: -1px;\n  background-color: #fff;\n  border: 1px solid #ddd;\n}\n.list-group-item:first-child {\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n}\n.list-group-item:last-child {\n  margin-bottom: 0;\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\na.list-group-item,\nbutton.list-group-item {\n  color: #555;\n}\na.list-group-item .list-group-item-heading,\nbutton.list-group-item .list-group-item-heading {\n  color: #333;\n}\na.list-group-item:hover,\nbutton.list-group-item:hover,\na.list-group-item:focus,\nbutton.list-group-item:focus {\n  color: #555;\n  text-decoration: none;\n  background-color: #f5f5f5;\n}\nbutton.list-group-item {\n  width: 100%;\n  text-align: left;\n}\n.list-group-item.disabled,\n.list-group-item.disabled:hover,\n.list-group-item.disabled:focus {\n  color: #777;\n  cursor: not-allowed;\n  background-color: #eee;\n}\n.list-group-item.disabled .list-group-item-heading,\n.list-group-item.disabled:hover .list-group-item-heading,\n.list-group-item.disabled:focus .list-group-item-heading {\n  color: inherit;\n}\n.list-group-item.disabled .list-group-item-text,\n.list-group-item.disabled:hover .list-group-item-text,\n.list-group-item.disabled:focus .list-group-item-text {\n  color: #777;\n}\n.list-group-item.active,\n.list-group-item.active:hover,\n.list-group-item.active:focus {\n  z-index: 2;\n  color: #fff;\n  background-color: #337ab7;\n  border-color: #337ab7;\n}\n.list-group-item.active .list-group-item-heading,\n.list-group-item.active:hover .list-group-item-heading,\n.list-group-item.active:focus .list-group-item-heading,\n.list-group-item.active .list-group-item-heading > small,\n.list-group-item.active:hover .list-group-item-heading > small,\n.list-group-item.active:focus .list-group-item-heading > small,\n.list-group-item.active .list-group-item-heading > .small,\n.list-group-item.active:hover .list-group-item-heading > .small,\n.list-group-item.active:focus .list-group-item-heading > .small {\n  color: inherit;\n}\n.list-group-item.active .list-group-item-text,\n.list-group-item.active:hover .list-group-item-text,\n.list-group-item.active:focus .list-group-item-text {\n  color: #c7ddef;\n}\n.list-group-item-success {\n  color: #3c763d;\n  background-color: #dff0d8;\n}\na.list-group-item-success,\nbutton.list-group-item-success {\n  color: #3c763d;\n}\na.list-group-item-success .list-group-item-heading,\nbutton.list-group-item-success .list-group-item-heading {\n  color: inherit;\n}\na.list-group-item-success:hover,\nbutton.list-group-item-success:hover,\na.list-group-item-success:focus,\nbutton.list-group-item-success:focus {\n  color: #3c763d;\n  background-color: #d0e9c6;\n}\na.list-group-item-success.active,\nbutton.list-group-item-success.active,\na.list-group-item-success.active:hover,\nbutton.list-group-item-success.active:hover,\na.list-group-item-success.active:focus,\nbutton.list-group-item-success.active:focus {\n  color: #fff;\n  background-color: #3c763d;\n  border-color: #3c763d;\n}\n.list-group-item-info {\n  color: #31708f;\n  background-color: #d9edf7;\n}\na.list-group-item-info,\nbutton.list-group-item-info {\n  color: #31708f;\n}\na.list-group-item-info .list-group-item-heading,\nbutton.list-group-item-info .list-group-item-heading {\n  color: inherit;\n}\na.list-group-item-info:hover,\nbutton.list-group-item-info:hover,\na.list-group-item-info:focus,\nbutton.list-group-item-info:focus {\n  color: #31708f;\n  background-color: #c4e3f3;\n}\na.list-group-item-info.active,\nbutton.list-group-item-info.active,\na.list-group-item-info.active:hover,\nbutton.list-group-item-info.active:hover,\na.list-group-item-info.active:focus,\nbutton.list-group-item-info.active:focus {\n  color: #fff;\n  background-color: #31708f;\n  border-color: #31708f;\n}\n.list-group-item-warning {\n  color: #8a6d3b;\n  background-color: #fcf8e3;\n}\na.list-group-item-warning,\nbutton.list-group-item-warning {\n  color: #8a6d3b;\n}\na.list-group-item-warning .list-group-item-heading,\nbutton.list-group-item-warning .list-group-item-heading {\n  color: inherit;\n}\na.list-group-item-warning:hover,\nbutton.list-group-item-warning:hover,\na.list-group-item-warning:focus,\nbutton.list-group-item-warning:focus {\n  color: #8a6d3b;\n  background-color: #faf2cc;\n}\na.list-group-item-warning.active,\nbutton.list-group-item-warning.active,\na.list-group-item-warning.active:hover,\nbutton.list-group-item-warning.active:hover,\na.list-group-item-warning.active:focus,\nbutton.list-group-item-warning.active:focus {\n  color: #fff;\n  background-color: #8a6d3b;\n  border-color: #8a6d3b;\n}\n.list-group-item-danger {\n  color: #a94442;\n  background-color: #f2dede;\n}\na.list-group-item-danger,\nbutton.list-group-item-danger {\n  color: #a94442;\n}\na.list-group-item-danger .list-group-item-heading,\nbutton.list-group-item-danger .list-group-item-heading {\n  color: inherit;\n}\na.list-group-item-danger:hover,\nbutton.list-group-item-danger:hover,\na.list-group-item-danger:focus,\nbutton.list-group-item-danger:focus {\n  color: #a94442;\n  background-color: #ebcccc;\n}\na.list-group-item-danger.active,\nbutton.list-group-item-danger.active,\na.list-group-item-danger.active:hover,\nbutton.list-group-item-danger.active:hover,\na.list-group-item-danger.active:focus,\nbutton.list-group-item-danger.active:focus {\n  color: #fff;\n  background-color: #a94442;\n  border-color: #a94442;\n}\n.list-group-item-heading {\n  margin-top: 0;\n  margin-bottom: 5px;\n}\n.list-group-item-text {\n  margin-bottom: 0;\n  line-height: 1.3;\n}\n.panel {\n  margin-bottom: 20px;\n  background-color: #fff;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, .05);\n          box-shadow: 0 1px 1px rgba(0, 0, 0, .05);\n}\n.panel-body {\n  padding: 15px;\n}\n.panel-heading {\n  padding: 10px 15px;\n  border-bottom: 1px solid transparent;\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n}\n.panel-heading > .dropdown .dropdown-toggle {\n  color: inherit;\n}\n.panel-title {\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: 16px;\n  color: inherit;\n}\n.panel-title > a,\n.panel-title > small,\n.panel-title > .small,\n.panel-title > small > a,\n.panel-title > .small > a {\n  color: inherit;\n}\n.panel-footer {\n  padding: 10px 15px;\n  background-color: #f5f5f5;\n  border-top: 1px solid #ddd;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n.panel > .list-group,\n.panel > .panel-collapse > .list-group {\n  margin-bottom: 0;\n}\n.panel > .list-group .list-group-item,\n.panel > .panel-collapse > .list-group .list-group-item {\n  border-width: 1px 0;\n  border-radius: 0;\n}\n.panel > .list-group:first-child .list-group-item:first-child,\n.panel > .panel-collapse > .list-group:first-child .list-group-item:first-child {\n  border-top: 0;\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n}\n.panel > .list-group:last-child .list-group-item:last-child,\n.panel > .panel-collapse > .list-group:last-child .list-group-item:last-child {\n  border-bottom: 0;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n.panel > .panel-heading + .panel-collapse > .list-group .list-group-item:first-child {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.panel-heading + .list-group .list-group-item:first-child {\n  border-top-width: 0;\n}\n.list-group + .panel-footer {\n  border-top-width: 0;\n}\n.panel > .table,\n.panel > .table-responsive > .table,\n.panel > .panel-collapse > .table {\n  margin-bottom: 0;\n}\n.panel > .table caption,\n.panel > .table-responsive > .table caption,\n.panel > .panel-collapse > .table caption {\n  padding-right: 15px;\n  padding-left: 15px;\n}\n.panel > .table:first-child,\n.panel > .table-responsive:first-child > .table:first-child {\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n}\n.panel > .table:first-child > thead:first-child > tr:first-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child {\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n}\n.panel > .table:first-child > thead:first-child > tr:first-child td:first-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:first-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child td:first-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:first-child,\n.panel > .table:first-child > thead:first-child > tr:first-child th:first-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:first-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child th:first-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:first-child {\n  border-top-left-radius: 3px;\n}\n.panel > .table:first-child > thead:first-child > tr:first-child td:last-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:last-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child td:last-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:last-child,\n.panel > .table:first-child > thead:first-child > tr:first-child th:last-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:last-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child th:last-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:last-child {\n  border-top-right-radius: 3px;\n}\n.panel > .table:last-child,\n.panel > .table-responsive:last-child > .table:last-child {\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n.panel > .table:last-child > tbody:last-child > tr:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child {\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n.panel > .table:last-child > tbody:last-child > tr:last-child td:first-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:first-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child td:first-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:first-child,\n.panel > .table:last-child > tbody:last-child > tr:last-child th:first-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:first-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child th:first-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:first-child {\n  border-bottom-left-radius: 3px;\n}\n.panel > .table:last-child > tbody:last-child > tr:last-child td:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:last-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child td:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:last-child,\n.panel > .table:last-child > tbody:last-child > tr:last-child th:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:last-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child th:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:last-child {\n  border-bottom-right-radius: 3px;\n}\n.panel > .panel-body + .table,\n.panel > .panel-body + .table-responsive,\n.panel > .table + .panel-body,\n.panel > .table-responsive + .panel-body {\n  border-top: 1px solid #ddd;\n}\n.panel > .table > tbody:first-child > tr:first-child th,\n.panel > .table > tbody:first-child > tr:first-child td {\n  border-top: 0;\n}\n.panel > .table-bordered,\n.panel > .table-responsive > .table-bordered {\n  border: 0;\n}\n.panel > .table-bordered > thead > tr > th:first-child,\n.panel > .table-responsive > .table-bordered > thead > tr > th:first-child,\n.panel > .table-bordered > tbody > tr > th:first-child,\n.panel > .table-responsive > .table-bordered > tbody > tr > th:first-child,\n.panel > .table-bordered > tfoot > tr > th:first-child,\n.panel > .table-responsive > .table-bordered > tfoot > tr > th:first-child,\n.panel > .table-bordered > thead > tr > td:first-child,\n.panel > .table-responsive > .table-bordered > thead > tr > td:first-child,\n.panel > .table-bordered > tbody > tr > td:first-child,\n.panel > .table-responsive > .table-bordered > tbody > tr > td:first-child,\n.panel > .table-bordered > tfoot > tr > td:first-child,\n.panel > .table-responsive > .table-bordered > tfoot > tr > td:first-child {\n  border-left: 0;\n}\n.panel > .table-bordered > thead > tr > th:last-child,\n.panel > .table-responsive > .table-bordered > thead > tr > th:last-child,\n.panel > .table-bordered > tbody > tr > th:last-child,\n.panel > .table-responsive > .table-bordered > tbody > tr > th:last-child,\n.panel > .table-bordered > tfoot > tr > th:last-child,\n.panel > .table-responsive > .table-bordered > tfoot > tr > th:last-child,\n.panel > .table-bordered > thead > tr > td:last-child,\n.panel > .table-responsive > .table-bordered > thead > tr > td:last-child,\n.panel > .table-bordered > tbody > tr > td:last-child,\n.panel > .table-responsive > .table-bordered > tbody > tr > td:last-child,\n.panel > .table-bordered > tfoot > tr > td:last-child,\n.panel > .table-responsive > .table-bordered > tfoot > tr > td:last-child {\n  border-right: 0;\n}\n.panel > .table-bordered > thead > tr:first-child > td,\n.panel > .table-responsive > .table-bordered > thead > tr:first-child > td,\n.panel > .table-bordered > tbody > tr:first-child > td,\n.panel > .table-responsive > .table-bordered > tbody > tr:first-child > td,\n.panel > .table-bordered > thead > tr:first-child > th,\n.panel > .table-responsive > .table-bordered > thead > tr:first-child > th,\n.panel > .table-bordered > tbody > tr:first-child > th,\n.panel > .table-responsive > .table-bordered > tbody > tr:first-child > th {\n  border-bottom: 0;\n}\n.panel > .table-bordered > tbody > tr:last-child > td,\n.panel > .table-responsive > .table-bordered > tbody > tr:last-child > td,\n.panel > .table-bordered > tfoot > tr:last-child > td,\n.panel > .table-responsive > .table-bordered > tfoot > tr:last-child > td,\n.panel > .table-bordered > tbody > tr:last-child > th,\n.panel > .table-responsive > .table-bordered > tbody > tr:last-child > th,\n.panel > .table-bordered > tfoot > tr:last-child > th,\n.panel > .table-responsive > .table-bordered > tfoot > tr:last-child > th {\n  border-bottom: 0;\n}\n.panel > .table-responsive {\n  margin-bottom: 0;\n  border: 0;\n}\n.panel-group {\n  margin-bottom: 20px;\n}\n.panel-group .panel {\n  margin-bottom: 0;\n  border-radius: 4px;\n}\n.panel-group .panel + .panel {\n  margin-top: 5px;\n}\n.panel-group .panel-heading {\n  border-bottom: 0;\n}\n.panel-group .panel-heading + .panel-collapse > .panel-body,\n.panel-group .panel-heading + .panel-collapse > .list-group {\n  border-top: 1px solid #ddd;\n}\n.panel-group .panel-footer {\n  border-top: 0;\n}\n.panel-group .panel-footer + .panel-collapse .panel-body {\n  border-bottom: 1px solid #ddd;\n}\n.panel-default {\n  border-color: #ddd;\n}\n.panel-default > .panel-heading {\n  color: #333;\n  background-color: #f5f5f5;\n  border-color: #ddd;\n}\n.panel-default > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #ddd;\n}\n.panel-default > .panel-heading .badge {\n  color: #f5f5f5;\n  background-color: #333;\n}\n.panel-default > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #ddd;\n}\n.panel-primary {\n  border-color: #337ab7;\n}\n.panel-primary > .panel-heading {\n  color: #fff;\n  background-color: #337ab7;\n  border-color: #337ab7;\n}\n.panel-primary > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #337ab7;\n}\n.panel-primary > .panel-heading .badge {\n  color: #337ab7;\n  background-color: #fff;\n}\n.panel-primary > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #337ab7;\n}\n.panel-success {\n  border-color: #d6e9c6;\n}\n.panel-success > .panel-heading {\n  color: #3c763d;\n  background-color: #dff0d8;\n  border-color: #d6e9c6;\n}\n.panel-success > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #d6e9c6;\n}\n.panel-success > .panel-heading .badge {\n  color: #dff0d8;\n  background-color: #3c763d;\n}\n.panel-success > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #d6e9c6;\n}\n.panel-info {\n  border-color: #bce8f1;\n}\n.panel-info > .panel-heading {\n  color: #31708f;\n  background-color: #d9edf7;\n  border-color: #bce8f1;\n}\n.panel-info > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #bce8f1;\n}\n.panel-info > .panel-heading .badge {\n  color: #d9edf7;\n  background-color: #31708f;\n}\n.panel-info > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #bce8f1;\n}\n.panel-warning {\n  border-color: #faebcc;\n}\n.panel-warning > .panel-heading {\n  color: #8a6d3b;\n  background-color: #fcf8e3;\n  border-color: #faebcc;\n}\n.panel-warning > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #faebcc;\n}\n.panel-warning > .panel-heading .badge {\n  color: #fcf8e3;\n  background-color: #8a6d3b;\n}\n.panel-warning > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #faebcc;\n}\n.panel-danger {\n  border-color: #ebccd1;\n}\n.panel-danger > .panel-heading {\n  color: #a94442;\n  background-color: #f2dede;\n  border-color: #ebccd1;\n}\n.panel-danger > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #ebccd1;\n}\n.panel-danger > .panel-heading .badge {\n  color: #f2dede;\n  background-color: #a94442;\n}\n.panel-danger > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #ebccd1;\n}\n.embed-responsive {\n  position: relative;\n  display: block;\n  height: 0;\n  padding: 0;\n  overflow: hidden;\n}\n.embed-responsive .embed-responsive-item,\n.embed-responsive iframe,\n.embed-responsive embed,\n.embed-responsive object,\n.embed-responsive video {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border: 0;\n}\n.embed-responsive-16by9 {\n  padding-bottom: 56.25%;\n}\n.embed-responsive-4by3 {\n  padding-bottom: 75%;\n}\n.well {\n  min-height: 20px;\n  padding: 19px;\n  margin-bottom: 20px;\n  background-color: #f5f5f5;\n  border: 1px solid #e3e3e3;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .05);\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .05);\n}\n.well blockquote {\n  border-color: #ddd;\n  border-color: rgba(0, 0, 0, .15);\n}\n.well-lg {\n  padding: 24px;\n  border-radius: 6px;\n}\n.well-sm {\n  padding: 9px;\n  border-radius: 3px;\n}\n.close {\n  float: right;\n  font-size: 21px;\n  font-weight: bold;\n  line-height: 1;\n  color: #000;\n  text-shadow: 0 1px 0 #fff;\n  filter: alpha(opacity=20);\n  opacity: .2;\n}\n.close:hover,\n.close:focus {\n  color: #000;\n  text-decoration: none;\n  cursor: pointer;\n  filter: alpha(opacity=50);\n  opacity: .5;\n}\nbutton.close {\n  -webkit-appearance: none;\n  padding: 0;\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n}\n.modal-open {\n  overflow: hidden;\n}\n.modal {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  display: none;\n  overflow: hidden;\n  -webkit-overflow-scrolling: touch;\n  outline: 0;\n}\n.modal.fade .modal-dialog {\n  -webkit-transition: -webkit-transform .3s ease-out;\n          transition:         -webkit-transform .3s ease-out;\n          transition:         transform .3s ease-out;\n          transition:         transform .3s ease-out, -webkit-transform .3s ease-out;\n  -webkit-transform: translate(0, -25%);\n          transform: translate(0, -25%);\n}\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n          transform: translate(0, 0);\n}\n.modal-open .modal {\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.modal-dialog {\n  position: relative;\n  width: auto;\n  margin: 10px;\n}\n.modal-content {\n  position: relative;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #999;\n  border: 1px solid rgba(0, 0, 0, .2);\n  border-radius: 6px;\n  outline: 0;\n  -webkit-box-shadow: 0 3px 9px rgba(0, 0, 0, .5);\n          box-shadow: 0 3px 9px rgba(0, 0, 0, .5);\n}\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1040;\n  background-color: #000;\n}\n.modal-backdrop.fade {\n  filter: alpha(opacity=0);\n  opacity: 0;\n}\n.modal-backdrop.in {\n  filter: alpha(opacity=50);\n  opacity: .5;\n}\n.modal-header {\n  padding: 15px;\n  border-bottom: 1px solid #e5e5e5;\n}\n.modal-header .close {\n  margin-top: -2px;\n}\n.modal-title {\n  margin: 0;\n  line-height: 1.42857143;\n}\n.modal-body {\n  position: relative;\n  padding: 15px;\n}\n.modal-footer {\n  padding: 15px;\n  text-align: right;\n  border-top: 1px solid #e5e5e5;\n}\n.modal-footer .btn + .btn {\n  margin-bottom: 0;\n  margin-left: 5px;\n}\n.modal-footer .btn-group .btn + .btn {\n  margin-left: -1px;\n}\n.modal-footer .btn-block + .btn-block {\n  margin-left: 0;\n}\n.modal-scrollbar-measure {\n  position: absolute;\n  top: -9999px;\n  width: 50px;\n  height: 50px;\n  overflow: scroll;\n}\n@media (min-width: 768px) {\n  .modal-dialog {\n    width: 600px;\n    margin: 30px auto;\n  }\n  .modal-content {\n    -webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, .5);\n            box-shadow: 0 5px 15px rgba(0, 0, 0, .5);\n  }\n  .modal-sm {\n    width: 300px;\n  }\n}\n@media (min-width: 992px) {\n  .modal-lg {\n    width: 900px;\n  }\n}\n.tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: normal;\n  line-height: 1.42857143;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  word-spacing: normal;\n  word-wrap: normal;\n  white-space: normal;\n  filter: alpha(opacity=0);\n  opacity: 0;\n\n  line-break: auto;\n}\n.tooltip.in {\n  filter: alpha(opacity=90);\n  opacity: .9;\n}\n.tooltip.top {\n  padding: 5px 0;\n  margin-top: -3px;\n}\n.tooltip.right {\n  padding: 0 5px;\n  margin-left: 3px;\n}\n.tooltip.bottom {\n  padding: 5px 0;\n  margin-top: 3px;\n}\n.tooltip.left {\n  padding: 0 5px;\n  margin-left: -3px;\n}\n.tooltip-inner {\n  max-width: 200px;\n  padding: 3px 8px;\n  color: #fff;\n  text-align: center;\n  background-color: #000;\n  border-radius: 4px;\n}\n.tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n.tooltip.top .tooltip-arrow {\n  bottom: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000;\n}\n.tooltip.top-left .tooltip-arrow {\n  right: 5px;\n  bottom: 0;\n  margin-bottom: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000;\n}\n.tooltip.top-right .tooltip-arrow {\n  bottom: 0;\n  left: 5px;\n  margin-bottom: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000;\n}\n.tooltip.right .tooltip-arrow {\n  top: 50%;\n  left: 0;\n  margin-top: -5px;\n  border-width: 5px 5px 5px 0;\n  border-right-color: #000;\n}\n.tooltip.left .tooltip-arrow {\n  top: 50%;\n  right: 0;\n  margin-top: -5px;\n  border-width: 5px 0 5px 5px;\n  border-left-color: #000;\n}\n.tooltip.bottom .tooltip-arrow {\n  top: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000;\n}\n.tooltip.bottom-left .tooltip-arrow {\n  top: 0;\n  right: 5px;\n  margin-top: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000;\n}\n.tooltip.bottom-right .tooltip-arrow {\n  top: 0;\n  left: 5px;\n  margin-top: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000;\n}\n.popover {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1060;\n  display: none;\n  max-width: 276px;\n  padding: 1px;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: normal;\n  line-height: 1.42857143;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  word-spacing: normal;\n  word-wrap: normal;\n  white-space: normal;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ccc;\n  border: 1px solid rgba(0, 0, 0, .2);\n  border-radius: 6px;\n  -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, .2);\n          box-shadow: 0 5px 10px rgba(0, 0, 0, .2);\n\n  line-break: auto;\n}\n.popover.top {\n  margin-top: -10px;\n}\n.popover.right {\n  margin-left: 10px;\n}\n.popover.bottom {\n  margin-top: 10px;\n}\n.popover.left {\n  margin-left: -10px;\n}\n.popover-title {\n  padding: 8px 14px;\n  margin: 0;\n  font-size: 14px;\n  background-color: #f7f7f7;\n  border-bottom: 1px solid #ebebeb;\n  border-radius: 5px 5px 0 0;\n}\n.popover-content {\n  padding: 9px 14px;\n}\n.popover > .arrow,\n.popover > .arrow:after {\n  position: absolute;\n  display: block;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n.popover > .arrow {\n  border-width: 11px;\n}\n.popover > .arrow:after {\n  content: \"\";\n  border-width: 10px;\n}\n.popover.top > .arrow {\n  bottom: -11px;\n  left: 50%;\n  margin-left: -11px;\n  border-top-color: #999;\n  border-top-color: rgba(0, 0, 0, .25);\n  border-bottom-width: 0;\n}\n.popover.top > .arrow:after {\n  bottom: 1px;\n  margin-left: -10px;\n  content: \" \";\n  border-top-color: #fff;\n  border-bottom-width: 0;\n}\n.popover.right > .arrow {\n  top: 50%;\n  left: -11px;\n  margin-top: -11px;\n  border-right-color: #999;\n  border-right-color: rgba(0, 0, 0, .25);\n  border-left-width: 0;\n}\n.popover.right > .arrow:after {\n  bottom: -10px;\n  left: 1px;\n  content: \" \";\n  border-right-color: #fff;\n  border-left-width: 0;\n}\n.popover.bottom > .arrow {\n  top: -11px;\n  left: 50%;\n  margin-left: -11px;\n  border-top-width: 0;\n  border-bottom-color: #999;\n  border-bottom-color: rgba(0, 0, 0, .25);\n}\n.popover.bottom > .arrow:after {\n  top: 1px;\n  margin-left: -10px;\n  content: \" \";\n  border-top-width: 0;\n  border-bottom-color: #fff;\n}\n.popover.left > .arrow {\n  top: 50%;\n  right: -11px;\n  margin-top: -11px;\n  border-right-width: 0;\n  border-left-color: #999;\n  border-left-color: rgba(0, 0, 0, .25);\n}\n.popover.left > .arrow:after {\n  right: 1px;\n  bottom: -10px;\n  content: \" \";\n  border-right-width: 0;\n  border-left-color: #fff;\n}\n.carousel {\n  position: relative;\n}\n.carousel-inner {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n}\n.carousel-inner > .item {\n  position: relative;\n  display: none;\n  -webkit-transition: .6s ease-in-out left;\n          transition: .6s ease-in-out left;\n}\n.carousel-inner > .item > img,\n.carousel-inner > .item > a > img {\n  line-height: 1;\n}\n@media all and (transform-3d), (-webkit-transform-3d) {\n  .carousel-inner > .item {\n    -webkit-transition: -webkit-transform .6s ease-in-out;\n            transition:         -webkit-transform .6s ease-in-out;\n            transition:         transform .6s ease-in-out;\n            transition:         transform .6s ease-in-out, -webkit-transform .6s ease-in-out;\n\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    -webkit-perspective: 1000px;\n            perspective: 1000px;\n  }\n  .carousel-inner > .item.next,\n  .carousel-inner > .item.active.right {\n    left: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0);\n  }\n  .carousel-inner > .item.prev,\n  .carousel-inner > .item.active.left {\n    left: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0);\n  }\n  .carousel-inner > .item.next.left,\n  .carousel-inner > .item.prev.right,\n  .carousel-inner > .item.active {\n    left: 0;\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n.carousel-inner > .active,\n.carousel-inner > .next,\n.carousel-inner > .prev {\n  display: block;\n}\n.carousel-inner > .active {\n  left: 0;\n}\n.carousel-inner > .next,\n.carousel-inner > .prev {\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n.carousel-inner > .next {\n  left: 100%;\n}\n.carousel-inner > .prev {\n  left: -100%;\n}\n.carousel-inner > .next.left,\n.carousel-inner > .prev.right {\n  left: 0;\n}\n.carousel-inner > .active.left {\n  left: -100%;\n}\n.carousel-inner > .active.right {\n  left: 100%;\n}\n.carousel-control {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: 15%;\n  font-size: 20px;\n  color: #fff;\n  text-align: center;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, .6);\n  background-color: rgba(0, 0, 0, 0);\n  filter: alpha(opacity=50);\n  opacity: .5;\n}\n.carousel-control.left {\n  background-image:         -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, .5)), to(rgba(0, 0, 0, .0001)));\n  background-image:         linear-gradient(to right, rgba(0, 0, 0, .5) 0%, rgba(0, 0, 0, .0001) 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#80000000', endColorstr='#00000000', GradientType=1);\n  background-repeat: repeat-x;\n}\n.carousel-control.right {\n  right: 0;\n  left: auto;\n  background-image:         -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, .0001)), to(rgba(0, 0, 0, .5)));\n  background-image:         linear-gradient(to right, rgba(0, 0, 0, .0001) 0%, rgba(0, 0, 0, .5) 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#80000000', GradientType=1);\n  background-repeat: repeat-x;\n}\n.carousel-control:hover,\n.carousel-control:focus {\n  color: #fff;\n  text-decoration: none;\n  filter: alpha(opacity=90);\n  outline: 0;\n  opacity: .9;\n}\n.carousel-control .icon-prev,\n.carousel-control .icon-next,\n.carousel-control .glyphicon-chevron-left,\n.carousel-control .glyphicon-chevron-right {\n  position: absolute;\n  top: 50%;\n  z-index: 5;\n  display: inline-block;\n  margin-top: -10px;\n}\n.carousel-control .icon-prev,\n.carousel-control .glyphicon-chevron-left {\n  left: 50%;\n  margin-left: -10px;\n}\n.carousel-control .icon-next,\n.carousel-control .glyphicon-chevron-right {\n  right: 50%;\n  margin-right: -10px;\n}\n.carousel-control .icon-prev,\n.carousel-control .icon-next {\n  width: 20px;\n  height: 20px;\n  font-family: serif;\n  line-height: 1;\n}\n.carousel-control .icon-prev:before {\n  content: '\\2039';\n}\n.carousel-control .icon-next:before {\n  content: '\\203a';\n}\n.carousel-indicators {\n  position: absolute;\n  bottom: 10px;\n  left: 50%;\n  z-index: 15;\n  width: 60%;\n  padding-left: 0;\n  margin-left: -30%;\n  text-align: center;\n  list-style: none;\n}\n.carousel-indicators li {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  margin: 1px;\n  text-indent: -999px;\n  cursor: pointer;\n  background-color: #000 \\9;\n  background-color: rgba(0, 0, 0, 0);\n  border: 1px solid #fff;\n  border-radius: 10px;\n}\n.carousel-indicators .active {\n  width: 12px;\n  height: 12px;\n  margin: 0;\n  background-color: #fff;\n}\n.carousel-caption {\n  position: absolute;\n  right: 15%;\n  bottom: 20px;\n  left: 15%;\n  z-index: 10;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  color: #fff;\n  text-align: center;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, .6);\n}\n.carousel-caption .btn {\n  text-shadow: none;\n}\n@media screen and (min-width: 768px) {\n  .carousel-control .glyphicon-chevron-left,\n  .carousel-control .glyphicon-chevron-right,\n  .carousel-control .icon-prev,\n  .carousel-control .icon-next {\n    width: 30px;\n    height: 30px;\n    margin-top: -10px;\n    font-size: 30px;\n  }\n  .carousel-control .glyphicon-chevron-left,\n  .carousel-control .icon-prev {\n    margin-left: -10px;\n  }\n  .carousel-control .glyphicon-chevron-right,\n  .carousel-control .icon-next {\n    margin-right: -10px;\n  }\n  .carousel-caption {\n    right: 20%;\n    left: 20%;\n    padding-bottom: 30px;\n  }\n  .carousel-indicators {\n    bottom: 20px;\n  }\n}\n.clearfix:before,\n.clearfix:after,\n.dl-horizontal dd:before,\n.dl-horizontal dd:after,\n.container:before,\n.container:after,\n.container-fluid:before,\n.container-fluid:after,\n.row:before,\n.row:after,\n.form-horizontal .form-group:before,\n.form-horizontal .form-group:after,\n.btn-toolbar:before,\n.btn-toolbar:after,\n.btn-group-vertical > .btn-group:before,\n.btn-group-vertical > .btn-group:after,\n.nav:before,\n.nav:after,\n.navbar:before,\n.navbar:after,\n.navbar-header:before,\n.navbar-header:after,\n.navbar-collapse:before,\n.navbar-collapse:after,\n.pager:before,\n.pager:after,\n.panel-body:before,\n.panel-body:after,\n.modal-header:before,\n.modal-header:after,\n.modal-footer:before,\n.modal-footer:after {\n  display: table;\n  content: \" \";\n}\n.clearfix:after,\n.dl-horizontal dd:after,\n.container:after,\n.container-fluid:after,\n.row:after,\n.form-horizontal .form-group:after,\n.btn-toolbar:after,\n.btn-group-vertical > .btn-group:after,\n.nav:after,\n.navbar:after,\n.navbar-header:after,\n.navbar-collapse:after,\n.pager:after,\n.panel-body:after,\n.modal-header:after,\n.modal-footer:after {\n  clear: both;\n}\n.center-block {\n  display: block;\n  margin-right: auto;\n  margin-left: auto;\n}\n.pull-right {\n  float: right !important;\n}\n.pull-left {\n  float: left !important;\n}\n.hide {\n  display: none !important;\n}\n.show {\n  display: block !important;\n}\n.invisible {\n  visibility: hidden;\n}\n.text-hide {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0;\n}\n.hidden {\n  display: none !important;\n}\n.affix {\n  position: fixed;\n}\n@-ms-viewport {\n  width: device-width;\n}\n.visible-xs,\n.visible-sm,\n.visible-md,\n.visible-lg {\n  display: none !important;\n}\n.visible-xs-block,\n.visible-xs-inline,\n.visible-xs-inline-block,\n.visible-sm-block,\n.visible-sm-inline,\n.visible-sm-inline-block,\n.visible-md-block,\n.visible-md-inline,\n.visible-md-inline-block,\n.visible-lg-block,\n.visible-lg-inline,\n.visible-lg-inline-block {\n  display: none !important;\n}\n@media (max-width: 767px) {\n  .visible-xs {\n    display: block !important;\n  }\n  table.visible-xs {\n    display: table !important;\n  }\n  tr.visible-xs {\n    display: table-row !important;\n  }\n  th.visible-xs,\n  td.visible-xs {\n    display: table-cell !important;\n  }\n}\n@media (max-width: 767px) {\n  .visible-xs-block {\n    display: block !important;\n  }\n}\n@media (max-width: 767px) {\n  .visible-xs-inline {\n    display: inline !important;\n  }\n}\n@media (max-width: 767px) {\n  .visible-xs-inline-block {\n    display: inline-block !important;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm {\n    display: block !important;\n  }\n  table.visible-sm {\n    display: table !important;\n  }\n  tr.visible-sm {\n    display: table-row !important;\n  }\n  th.visible-sm,\n  td.visible-sm {\n    display: table-cell !important;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-block {\n    display: block !important;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-inline {\n    display: inline !important;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-inline-block {\n    display: inline-block !important;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md {\n    display: block !important;\n  }\n  table.visible-md {\n    display: table !important;\n  }\n  tr.visible-md {\n    display: table-row !important;\n  }\n  th.visible-md,\n  td.visible-md {\n    display: table-cell !important;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-block {\n    display: block !important;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-inline {\n    display: inline !important;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-inline-block {\n    display: inline-block !important;\n  }\n}\n@media (min-width: 1200px) {\n  .visible-lg {\n    display: block !important;\n  }\n  table.visible-lg {\n    display: table !important;\n  }\n  tr.visible-lg {\n    display: table-row !important;\n  }\n  th.visible-lg,\n  td.visible-lg {\n    display: table-cell !important;\n  }\n}\n@media (min-width: 1200px) {\n  .visible-lg-block {\n    display: block !important;\n  }\n}\n@media (min-width: 1200px) {\n  .visible-lg-inline {\n    display: inline !important;\n  }\n}\n@media (min-width: 1200px) {\n  .visible-lg-inline-block {\n    display: inline-block !important;\n  }\n}\n@media (max-width: 767px) {\n  .hidden-xs {\n    display: none !important;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .hidden-sm {\n    display: none !important;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .hidden-md {\n    display: none !important;\n  }\n}\n@media (min-width: 1200px) {\n  .hidden-lg {\n    display: none !important;\n  }\n}\n.visible-print {\n  display: none !important;\n}\n@media print {\n  .visible-print {\n    display: block !important;\n  }\n  table.visible-print {\n    display: table !important;\n  }\n  tr.visible-print {\n    display: table-row !important;\n  }\n  th.visible-print,\n  td.visible-print {\n    display: table-cell !important;\n  }\n}\n.visible-print-block {\n  display: none !important;\n}\n@media print {\n  .visible-print-block {\n    display: block !important;\n  }\n}\n.visible-print-inline {\n  display: none !important;\n}\n@media print {\n  .visible-print-inline {\n    display: inline !important;\n  }\n}\n.visible-print-inline-block {\n  display: none !important;\n}\n@media print {\n  .visible-print-inline-block {\n    display: inline-block !important;\n  }\n}\n@media print {\n  .hidden-print {\n    display: none !important;\n  }\n}\na:link { \n    text-decoration: none; }\na:visited { text-decoration: none; }\na:active { text-decoration: none;}\na:hover {\n    text-decoration: none;\n    color: orange;\n    \n }\n.example-icon {\n    padding: 0 14px;\n  }\n.example-spacer {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n  }\n"

/***/ }),

/***/ "./src/app/app-navbar-header/app-navbar-header.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar style=\"background-color: rgb(250, 250, 250)\">\n    <h3>\n        <a routerLink=\"/\" style=\"color:black; font-size: 25px\">\n            <img src=\"http://www.changiairport.com/content/dam/cag/3-transports/x3.0_transport-icon-big-7.png.pagespeed.ic.ypgOjLWv_Q.png\"\n                 width=\"110px\" height=\"70px\">\n            SmartParking\n        </a>\n    </h3>\n    <span class=\"example-spacer\"></span>\n    <span *ngIf=\"hasToken()\">\n        <button [routerLink]=\"['/statistic']\" mat-icon-button>\n            <i class=\"material-icons\">&#xE8E5;</i>\n        </button>\n    </span>\n    <span *ngIf=\"hasToken()\">\n    <button [routerLink]=\"['/profile']\" mat-icon-button>\n    <mat-icon>&#xE853;</mat-icon>\n    </button>\n    </span>\n    <span *ngIf=\"getRole() === 'PROVIDER_MANAGER' || getRole() === 'SUPERUSER'\">\n        <button [routerLink]=\"['/configuration']\" mat-icon-button>\n            <mat-icon>settings</mat-icon>\n        </button>\n    </span>\n    <span *ngIf=\"!hasToken()\">\n    <button mat-raised-button class=\"ml-3\" color=\"primary\" [routerLink]=\"['/login']\" style=\"font-size:18px;\">\n        SignIn/SignUp\n        <i class=\"material-icons\">&#xE853;</i>\n    </button>\n    </span>\n    <span *ngIf=\"hasToken()\">\n        <button mat-raised-button class=\"ml-3\" color=\"primary\" (click)=\"logOut()\">\n        Logout\n        <i class=\"material-icons\">&#xE853;</i>\n    </button>\n    </span>\n</mat-toolbar>"

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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__spotstatistic_spotstatistic_component__ = __webpack_require__("./src/app/spotstatistic/spotstatistic.component.ts");
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
    { path: 'statistic/parkingstatistic/parkingdetail/:id', component: __WEBPACK_IMPORTED_MODULE_4__parking_detail_parking_detail_component__["a" /* ParkingDetailComponent */] },
    { path: 'statistic/parkingstatistic', component: __WEBPACK_IMPORTED_MODULE_20__statistic_parking_statistic_parking_statistic_component__["a" /* ParkingStatisticComponent */] },
    { path: 'spotstatistic/:id', component: __WEBPACK_IMPORTED_MODULE_21__spotstatistic_spotstatistic_component__["a" /* SpotstatisticComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_agm_direction__ = __webpack_require__("./node_modules/agm-direction/agm-direction.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_agm_direction___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_agm_direction__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_navbar_header_app_navbar_header_component__ = __webpack_require__("./src/app/app-navbar-header/app-navbar-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__index_parking_list_parking_list_component__ = __webpack_require__("./src/app/index/parking-list/parking-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__parking_service__ = __webpack_require__("./src/app/parking.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__manager_manager_parking_service__ = __webpack_require__("./src/app/manager/manager-parking.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__superuser_configuration_superuser_configuration_component__ = __webpack_require__("./src/app/superuser-configuration/superuser-configuration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__parking_detail_parking_detail_component__ = __webpack_require__("./src/app/parking-detail/parking-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__superuser_configuration_providers_provider_service__ = __webpack_require__("./src/app/superuser-configuration/providers/provider.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__clients_clients_component__ = __webpack_require__("./src/app/clients/clients.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__clients_client_list_client_list_component__ = __webpack_require__("./src/app/clients/client-list/client-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__clients_client_edit_client_edit_component__ = __webpack_require__("./src/app/clients/client-edit/client-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__clients_client_service__ = __webpack_require__("./src/app/clients/client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__clients_client_list_client_item_client_item_component__ = __webpack_require__("./src/app/clients/client-list/client-item/client-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__superuser_configuration_providers_provider_list_provider_list_component__ = __webpack_require__("./src/app/superuser-configuration/providers/provider-list/provider-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__superuser_configuration_providers_provider_detail_provider_detail_component__ = __webpack_require__("./src/app/superuser-configuration/providers/provider-detail/provider-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__superuser_configuration_providers_add_provider_add_provider_component__ = __webpack_require__("./src/app/superuser-configuration/providers/add-provider/add-provider.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__clients_client_list_filter_pipe__ = __webpack_require__("./src/app/clients/client-list/filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__clients_client_detail_client_detail_component__ = __webpack_require__("./src/app/clients/client-detail/client-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__auth_login_login_component__ = __webpack_require__("./src/app/auth/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__auth_registration_registration_component__ = __webpack_require__("./src/app/auth/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__angular_materials_module__ = __webpack_require__("./src/app/angular-materials.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__index_index_component__ = __webpack_require__("./src/app/index/index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__index_parking_list_filter_parking_list_filter_component__ = __webpack_require__("./src/app/index/parking-list-filter/parking-list-filter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__manager_manager_parking_configure_manager_parking_configure_component__ = __webpack_require__("./src/app/manager/manager-parking-configure/manager-parking-configure.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__manager_manager_parking_list_manager_parking_list_component__ = __webpack_require__("./src/app/manager/manager-parking-list/manager-parking-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__interceptor_service__ = __webpack_require__("./src/app/interceptor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__auth_login_login_service__ = __webpack_require__("./src/app/auth/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__auth_registration_registration_service__ = __webpack_require__("./src/app/auth/registration/registration.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__auth_token_token_storage__ = __webpack_require__("./src/app/auth/token/token-storage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__index_parking_list_filter_location_field_location_field_component__ = __webpack_require__("./src/app/index/parking-list-filter/location-field/location-field.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__service_ip_location_service__ = __webpack_require__("./src/app/service/ip-location.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__index_parking_list_filter_radius_field_radius_field_component__ = __webpack_require__("./src/app/index/parking-list-filter/radius-field/radius-field.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__angular_material_slider__ = __webpack_require__("./node_modules/@angular/material/esm5/slider.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__index_parking_list_filter_price_range_field_price_range_field_component__ = __webpack_require__("./src/app/index/parking-list-filter/price-range-field/price-range-field.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__superuser_configuration_providers_update_provider_update_provider_component__ = __webpack_require__("./src/app/superuser-configuration/providers/update-provider/update-provider.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__services_pager_service__ = __webpack_require__("./src/app/_services/pager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__angular_material_radio__ = __webpack_require__("./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__manager_manager_parking_list_delete_confirmation_dialog_delete_confirmation_dialog_component__ = __webpack_require__("./src/app/manager/manager-parking-list/delete-confirmation-dialog/delete-confirmation-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__client_profile_client_profile_component__ = __webpack_require__("./src/app/client-profile/client-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__client_profile_client_profile_edit_client_profile_edit_component__ = __webpack_require__("./src/app/client-profile/client-profile-edit/client-profile-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__client_profile_client_profile_edit_password_client_profile_edit_password_component__ = __webpack_require__("./src/app/client-profile/client-profile-edit-password/client-profile-edit-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__parking_detail_favorites_add_configm_dialog_favorites_add_configm_dialog_component__ = __webpack_require__("./src/app/parking-detail/favorites-add-configm-dialog/favorites-add-configm-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__index_parking_map_parking_map_component__ = __webpack_require__("./src/app/index/parking-map/parking-map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__statistic_statistic_component__ = __webpack_require__("./src/app/statistic/statistic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__statistic_parking_statistic_parking_statistic_component__ = __webpack_require__("./src/app/statistic/parking-statistic/parking-statistic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__spotstatistic_spotstatistic_component__ = __webpack_require__("./src/app/spotstatistic/spotstatistic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__statistic_statistics_service__ = __webpack_require__("./src/app/statistic/statistics.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58_ngx_bootstrap_datepicker__ = __webpack_require__("./node_modules/ngx-bootstrap/datepicker/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_30__index_index_component__["a" /* IndexComponent */],
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__app_navbar_header_app_navbar_header_component__["a" /* AppNavbarHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_9__index_parking_list_parking_list_component__["a" /* ParkingListComponent */],
                __WEBPACK_IMPORTED_MODULE_13__superuser_configuration_superuser_configuration_component__["a" /* SuperuserConfigurationComponent */],
                __WEBPACK_IMPORTED_MODULE_14__parking_detail_parking_detail_component__["a" /* ParkingDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_13__superuser_configuration_superuser_configuration_component__["a" /* SuperuserConfigurationComponent */],
                __WEBPACK_IMPORTED_MODULE_16__clients_clients_component__["a" /* ClientsComponent */],
                __WEBPACK_IMPORTED_MODULE_17__clients_client_list_client_list_component__["a" /* ClientListComponent */],
                __WEBPACK_IMPORTED_MODULE_18__clients_client_edit_client_edit_component__["a" /* ClientEditComponent */],
                __WEBPACK_IMPORTED_MODULE_20__clients_client_list_client_item_client_item_component__["a" /* ClientItemComponent */],
                __WEBPACK_IMPORTED_MODULE_21__superuser_configuration_providers_provider_list_provider_list_component__["a" /* ProviderListComponent */],
                __WEBPACK_IMPORTED_MODULE_26__auth_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_28__auth_registration_registration_component__["a" /* RegistrationComponent */],
                __WEBPACK_IMPORTED_MODULE_22__superuser_configuration_providers_provider_detail_provider_detail_component__["a" /* ProviderDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_31__index_parking_list_filter_parking_list_filter_component__["a" /* ParkingListFilterComponent */],
                __WEBPACK_IMPORTED_MODULE_32__manager_manager_parking_configure_manager_parking_configure_component__["a" /* ManagerParkingConfigureComponent */],
                __WEBPACK_IMPORTED_MODULE_33__manager_manager_parking_list_manager_parking_list_component__["a" /* ManagerParkingListComponent */],
                __WEBPACK_IMPORTED_MODULE_23__superuser_configuration_providers_add_provider_add_provider_component__["a" /* AddProviderComponent */],
                __WEBPACK_IMPORTED_MODULE_24__clients_client_list_filter_pipe__["a" /* FilterPipe */],
                __WEBPACK_IMPORTED_MODULE_25__clients_client_detail_client_detail_component__["a" /* ClientDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_39__index_parking_list_filter_location_field_location_field_component__["a" /* LocationFieldComponent */],
                __WEBPACK_IMPORTED_MODULE_41__index_parking_list_filter_radius_field_radius_field_component__["a" /* RadiusFieldComponent */],
                __WEBPACK_IMPORTED_MODULE_43__index_parking_list_filter_price_range_field_price_range_field_component__["a" /* PriceRangeFieldComponent */],
                __WEBPACK_IMPORTED_MODULE_44__superuser_configuration_providers_update_provider_update_provider_component__["a" /* UpdateProviderComponent */],
                __WEBPACK_IMPORTED_MODULE_53__index_parking_map_parking_map_component__["a" /* ParkingMapComponent */],
                __WEBPACK_IMPORTED_MODULE_48__manager_manager_parking_list_delete_confirmation_dialog_delete_confirmation_dialog_component__["a" /* DeleteConfirmationDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_49__client_profile_client_profile_component__["a" /* ClientProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_50__client_profile_client_profile_edit_client_profile_edit_component__["a" /* ClientProfileEditComponent */],
                __WEBPACK_IMPORTED_MODULE_51__client_profile_client_profile_edit_password_client_profile_edit_password_component__["a" /* ClientProfileEditPasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_52__parking_detail_favorites_add_configm_dialog_favorites_add_configm_dialog_component__["b" /* FavoritesAddConfigmDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_54__statistic_statistic_component__["a" /* StatisticComponent */],
                __WEBPACK_IMPORTED_MODULE_55__statistic_parking_statistic_parking_statistic_component__["a" /* ParkingStatisticComponent */],
                __WEBPACK_IMPORTED_MODULE_56__spotstatistic_spotstatistic_component__["a" /* SpotstatisticComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_35__agm_core__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyB-ceTN3C1MJaUsAjPSKdXzGr11i-Ob7xU',
                    libraries: ['places']
                }),
                __WEBPACK_IMPORTED_MODULE_4_agm_direction__["AgmDirectionModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_45__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_12__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_27__angular_forms__["k" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_27__angular_forms__["f" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_29__angular_materials_module__["a" /* AngularMaterialsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["q" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_29__angular_materials_module__["a" /* AngularMaterialsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["h" /* MatDividerModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["i" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_42__angular_material_slider__["b" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["p" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_47__angular_material_radio__["a" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_58_ngx_bootstrap_datepicker__["a" /* BsDatepickerModule */].forRoot()
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_48__manager_manager_parking_list_delete_confirmation_dialog_delete_confirmation_dialog_component__["a" /* DeleteConfirmationDialogComponent */], __WEBPACK_IMPORTED_MODULE_52__parking_detail_favorites_add_configm_dialog_favorites_add_configm_dialog_component__["b" /* FavoritesAddConfigmDialogComponent */]],
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_34__interceptor_service__["a" /* InterceptorService */],
                    multi: true
                },
                __WEBPACK_IMPORTED_MODULE_10__parking_service__["a" /* ParkingService */],
                __WEBPACK_IMPORTED_MODULE_11__manager_manager_parking_service__["a" /* ManagerParkingService */],
                __WEBPACK_IMPORTED_MODULE_15__superuser_configuration_providers_provider_service__["a" /* ProviderService */],
                __WEBPACK_IMPORTED_MODULE_19__clients_client_service__["a" /* ClientService */],
                __WEBPACK_IMPORTED_MODULE_36__auth_login_login_service__["a" /* LoginService */],
                __WEBPACK_IMPORTED_MODULE_37__auth_registration_registration_service__["a" /* RegistrationService */],
                __WEBPACK_IMPORTED_MODULE_40__service_ip_location_service__["a" /* IpLocationService */],
                __WEBPACK_IMPORTED_MODULE_46__services_pager_service__["a" /* PagerService */],
                __WEBPACK_IMPORTED_MODULE_38__auth_token_token_storage__["a" /* TokenStorage */],
                __WEBPACK_IMPORTED_MODULE_46__services_pager_service__["a" /* PagerService */],
                __WEBPACK_IMPORTED_MODULE_57__statistic_statistics_service__["a" /* StatisticsService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
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
        return helper.decodeToken(TokenStorage_1.getToken());
    };
    TokenStorage.hasToken = function () {
        return TokenStorage_1.getToken() != null;
    };
    TokenStorage = TokenStorage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], TokenStorage);
    return TokenStorage;
    var TokenStorage_1;
}());



/***/ }),

/***/ "./src/app/client-profile/client-profile-edit-password/client-profile-edit-password.component.css":
/***/ (function(module, exports) {

module.exports = "\n.submit {\n    padding: 5px;\n}\n\n.customwidth {\n    width: 100%;\n}\n\n.cursor {\n    cursor: pointer;\n}\n\nmat-form-field {\n    padding: 5px;\n    width: 50%;\n}"

/***/ }),

/***/ "./src/app/client-profile/client-profile-edit-password/client-profile-edit-password.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <form [formGroup]=\"passwordForm\" (ngSubmit)=\"updatePassword()\"\n          class=\"formstyle\">\n        <div class=\"row\">\n            <mat-form-field>\n                <input matInput placeholder=\"Enter your password\" formControlName=\"password\"\n                       [type]=\"hide ? 'password' : 'text'\">\n                <mat-icon matSuffix (click)=\"hide = !hide\" class=\"cursor\">{{hide ? 'visibility' : 'visibility_off'}}\n                </mat-icon>\n                <mat-error *ngIf=\"passwordControl.hasError('minlength') && !passwordControl.hasError('required')\">\n                    Password must contain more than 6 characters\n                </mat-error>\n                <mat-error *ngIf=\"passwordControl.hasError('maxlength') && !passwordControl.hasError('required')\">\n                    Password must contain less than 16 characters\n                </mat-error>\n                <mat-error *ngIf=\"passwordControl.hasError('required')\">\n                    Password is <strong>required</strong>\n                </mat-error>\n            </mat-form-field>\n        </div>\n        <div class=\"row\">\n            <mat-form-field>\n                <input matInput placeholder=\"Confirm your password\" formControlName=\"confirmPassword\"\n                       [type]=\"hide ? 'password' : 'text'\">\n                <mat-error\n                        *ngIf=\"confirmPasswordControl.hasError('MatchPassword') && !confirmPasswordControl.hasError('required')\">\n                    Passwords doesn`t match\n                </mat-error>\n                <mat-error\n                        *ngIf=\"confirmPasswordControl.hasError('minlength') && !confirmPasswordControl.hasError('required')\">\n                    Password must contain more than 6 characters\n                </mat-error>\n                <mat-error\n                        *ngIf=\"confirmPasswordControl.hasError('maxlength') && !confirmPasswordControl.hasError('required')\">\n                    Password must contain less than 16 characters\n                </mat-error>\n                <mat-error *ngIf=\"confirmPasswordControl.hasError('required')\">\n                    Password is <strong>required</strong>\n                </mat-error>\n            </mat-form-field>\n        </div>\n        <div class=\"row\">\n            <button mat-raised-button type=\"submit\" color=\"primary\" [disabled]=\"!passwordForm.valid\">Submit</button>\n        </div>\n    </form>\n</div>\n"

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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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

module.exports = ".card {\n    width: 100%;\n    margin-top: 50px;\n    margin-bottom: 50px;\n}\n\n.submit-button {\n    margin-top: 20px;\n    margin-bottom: 20px;\n    width: 100%;\n}\n\n.parking-configure-headers-align .mat-expansion-panel-header-title,\n.parking-configure-headers-align .mat-expansion-panel-header-description {\n    -ms-flex-preferred-size: 0;\n        flex-basis: 0;\n}\n\n.parking-configure-headers-align .mat-expansion-panel-header-description {\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n\n.full-width {\n    width: 100%;\n}\n\nmat-form-field {\n    padding: 5px;\n    width: 50%;\n}\n\nmat-panel-title {\n    width: 100px;\n}\n\nmat-panel-description {\n    width: 100%;\n    /*height: 25px;*/\n}\n\n.tokenField {\n    width: 290px;\n}\n\n\n\n\n"

/***/ }),

/***/ "./src/app/client-profile/client-profile-edit/client-profile-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" *ngIf=\"!client\" class=\"text-center\">\n    <div class=\"row mx-auto mt-3 center-block\">\n        <div class=\"col-6 mx-auto my-auto text-center\">\n            <mat-spinner mode=\"indeterminate\" style=\"margin-left: 35%;\"></mat-spinner>\n        </div>\n    </div>\n</div>\n\n<div class=\"container-fluid\">\n    <mat-card class=\"card offset-sm-1 col-sm-10 offset-md-1 col-md-10 offset-lg-1 col-lg-10\">\n        <mat-card-header>\n            <div>\n                <legend>Edit profile</legend>\n            </div>\n        </mat-card-header>\n        <mat-card-content>\n            <form class=\"formstyle\"\n                  [formGroup]=\"profileEditForm\" (ngSubmit)=\"udateProfile()\">\n                <mat-accordion class=\"parking-configure-headers-align\">\n                    <mat-expansion-panel [expanded]=\"step === 0\" (opened)=\"setStep(0)\" hideToggle=\"true\">\n                        <mat-expansion-panel-header>\n                            <mat-panel-title>\n                                Photo\n                            </mat-panel-title>\n                            <mat-panel-description>\n                                <span *ngIf=\"client.image\">\n                                    <img src=\"data:image/JPEG;base64,{{client.image}}\" style=\"height: 50px;\">\n                                </span>\n                            </mat-panel-description>\n                            <!--<mat-icon>store</mat-icon>-->\n                        </mat-expansion-panel-header>\n                        <button mat-raised-button type=\"button\" color=\"primary\" (click)=\"imgFileInput.click()\"\n                                style=\"padding: 5px;\">Change a photo\n                        </button>\n                        <input hidden type=\"file\" formControlName=\"image\" accept=\"image/jpeg\" #imgFileInput\n                               (change)=\"onFileChange($event)\"/>\n                        <mat-action-row>\n                            <button mat-button type=\"button\" color=\"warn\" (click)=\"resetImage()\">Reset</button>\n                            <div class=\"full-width\"></div>\n                            <button mat-button type=\"button\" color=\"primary\" (click)=\"nextStep()\">Next</button>\n                        </mat-action-row>\n                    </mat-expansion-panel>\n\n                    <mat-expansion-panel [expanded]=\"step === 1\" (opened)=\"setStep(1)\" hideToggle=\"true\">\n                        <mat-expansion-panel-header>\n                            <mat-panel-title>\n                                First name\n                            </mat-panel-title>\n                            <mat-panel-description>\n                                <span *ngIf=\"client.firstName\">\n                                    {{client.firstName}}\n                                </span>\n                            </mat-panel-description>\n                            <!--<mat-icon>store</mat-icon>-->\n                        </mat-expansion-panel-header>\n                        <mat-form-field>\n                            <input matInput [(ngModel)]=\"client.firstName\" placeholder=\"First name\"\n                                   type=\"text\"\n                                   formControlName=\"firstName\"\n                                   required>\n                        </mat-form-field>\n                        <mat-action-row>\n                            <button mat-button type=\"button\" color=\"warn\" (click)=\"resetFirstName()\">Reset</button>\n                            <div class=\"full-width\"></div>\n                            <button mat-button type=\"button\" color=\"warn\" (click)=\"prevStep()\">Previous</button>\n                            <button mat-button type=\"button\" color=\"primary\" (click)=\"nextStep()\">Next</button>\n                        </mat-action-row>\n                    </mat-expansion-panel>\n\n                    <mat-expansion-panel [expanded]=\"step === 2\" (opened)=\"setStep(2)\" hideToggle=\"true\">\n                        <mat-expansion-panel-header>\n                            <mat-panel-title>\n                                Last name\n                            </mat-panel-title>\n                            <mat-panel-description>\n                                <span *ngIf=\"client.lastName\">\n                                    {{client.lastName}}\n                                </span>\n                            </mat-panel-description>\n                            <!--<mat-icon>store</mat-icon>-->\n                        </mat-expansion-panel-header>\n                        <mat-form-field>\n                            <input matInput [(ngModel)]=\"client.lastName\" placeholder=\"Last name\"\n                                   type=\"text\"\n                                   formControlName=\"lastName\"\n                                   required>\n                        </mat-form-field>\n                        <mat-action-row>\n                            <button mat-button type=\"button\" color=\"warn\" (click)=\"resetLastName()\">Reset</button>\n                            <div class=\"full-width\"></div>\n                            <button mat-button type=\"button\" color=\"warn\" (click)=\"prevStep()\">Previous</button>\n                            <button mat-button type=\"button\" color=\"primary\" (click)=\"nextStep()\">Next</button>\n                        </mat-action-row>\n                    </mat-expansion-panel>\n\n                    <mat-expansion-panel [expanded]=\"step === 3\" (opened)=\"setStep(3)\" hideToggle=\"true\">\n                        <mat-expansion-panel-header>\n                            <mat-panel-title>\n                                E-mail\n                            </mat-panel-title>\n                            <mat-panel-description>\n                                <span *ngIf=\"client.email\">\n                                    {{client.email}}\n                                </span>\n                            </mat-panel-description>\n                            <!--<mat-icon>store</mat-icon>-->\n                        </mat-expansion-panel-header>\n                        <mat-action-row>\n                            <div class=\"full-width\"></div>\n                            <button mat-button type=\"button\" color=\"warn\" (click)=\"prevStep()\">Previous</button>\n                            <button mat-button type=\"button\" color=\"primary\" (click)=\"nextStep()\">Next</button>\n                        </mat-action-row>\n                    </mat-expansion-panel>\n\n                    <mat-expansion-panel [expanded]=\"step === 4\" (opened)=\"setStep(4)\" hideToggle=\"true\">\n                        <mat-expansion-panel-header>\n                            <mat-panel-title>\n                                Role\n                            </mat-panel-title>\n                            <mat-panel-description>\n                                <span *ngIf=\"client.role\">\n                                    {{client.role}}\n                                </span>\n                            </mat-panel-description>\n                            <!--<mat-icon>store</mat-icon>-->\n                        </mat-expansion-panel-header>\n                        <mat-action-row>\n                            <div class=\"full-width\"></div>\n                            <button mat-button type=\"button\" color=\"warn\" (click)=\"prevStep()\">Previous</button>\n                            <button mat-button type=\"button\" color=\"primary\" (click)=\"nextStep()\">Next</button>\n                        </mat-action-row>\n                    </mat-expansion-panel>\n\n                    <mat-expansion-panel [expanded]=\"step === 5\" (opened)=\"setStep(5)\" hideToggle=\"true\">\n                        <mat-expansion-panel-header>\n                            <mat-panel-title>\n                                Password\n                            </mat-panel-title>\n                            <!--<mat-icon>store</mat-icon>-->\n                        </mat-expansion-panel-header>\n                        <app-client-profile-edit-password></app-client-profile-edit-password>\n                        <mat-action-row>\n                            <button mat-button type=\"button\" color=\"warn\" (click)=\"prevStep()\">Previous</button>\n                        </mat-action-row>\n                    </mat-expansion-panel>\n\n\n                </mat-accordion>\n                <!--<div class=\"row submit\">-->\n                <button class=\"submit-button\" mat-raised-button type=\"submit\" color=\"accent\"\n                        [disabled]=\"!profileEditForm.valid\">\n                    Submit\n                    <mat-icon aria-label=\"Send and save changes\">send</mat-icon>\n                </button>\n                <!--</div>-->\n            </form>\n            <button mat-button type=\"button\" color=\"primary\" (click)=\"goToProfile()\">Back to profile</button>\n        </mat-card-content>\n    </mat-card>\n\n\n</div>\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/client-profile/client-profile-edit/client-profile-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientProfileEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_view_client__ = __webpack_require__("./src/app/model/view/client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__clients_client_service__ = __webpack_require__("./src/app/clients/client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
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
        this.step = -1;
        this.profileEditForm = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormGroup */]({
            image: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormControl */]('', []),
            firstName: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["l" /* Validators */].required,]),
            lastName: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["l" /* Validators */].required,])
        });
    }
    ClientProfileEditComponent.prototype.ngOnInit = function () {
        this.getClientProfile();
    };
    ClientProfileEditComponent.prototype.setStep = function (index) {
        this.step = index;
    };
    ClientProfileEditComponent.prototype.nextStep = function () {
        this.step++;
    };
    ClientProfileEditComponent.prototype.prevStep = function () {
        this.step--;
    };
    ClientProfileEditComponent.prototype.resetFirstName = function () {
        this.client.firstName = this.loadedClient.firstName;
    };
    ClientProfileEditComponent.prototype.resetLastName = function () {
        this.client.lastName = this.loadedClient.lastName;
    };
    ClientProfileEditComponent.prototype.resetImage = function () {
        this.client.image = this.loadedClient.image;
    };
    ClientProfileEditComponent.prototype.getClientProfile = function () {
        var _this = this;
        this.clientService.getClientProfile()
            .subscribe(function (client) {
            _this.client = client;
            _this.loadedClient = __WEBPACK_IMPORTED_MODULE_1__model_view_client__["a" /* Client */].copyOf(client);
        });
    };
    ClientProfileEditComponent.prototype.udateProfile = function () {
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
            };
        }
    };
    ClientProfileEditComponent.prototype.goToPasswordEdit = function () {
        this.router.navigate(['profile/edit/password']);
    };
    ClientProfileEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-client-profile-edit',
            template: __webpack_require__("./src/app/client-profile/client-profile-edit/client-profile-edit.component.html"),
            styles: [__webpack_require__("./src/app/client-profile/client-profile-edit/client-profile-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__clients_client_service__["a" /* ClientService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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

module.exports = "<div>\n    <br/>\n    <br/>\n    <mat-card class=\"card offset-sm-1 col-sm-10 offset-md-1 col-md-10 offset-lg-1 col-lg-10\">\n        <mat-card-header>\n            <div style=\"min-width: 70%;\">\n                <div>\n                    <mat-card-title><span>ID:</span> {{client.id}}\n                    </mat-card-title>\n                    <mat-card-title id=\"role\"><span>Role:</span> {{client.role}}\n                    </mat-card-title>\n                    <mat-card-title><span>Client name:</span> {{client.firstName}} {{client.lastName}}\n                    </mat-card-title>\n                    <mat-card-title><span>Email:</span> {{client.email}}</mat-card-title>\n                    <mat-card-title *ngIf=\"client.providerName!='no provider'\" (click)=\"goToProvidersDetails()\" id=\"prov\">\n                        <span>Provider: </span>{{client.providerName}}\n                    </mat-card-title>\n                    <mat-card-title><span>Favorites parkings: </span><span\n                            *ngFor=\"let name of client.favoritesNames\">{{name}}, </span>\n                    </mat-card-title>\n                </div>\n            </div>\n            <div style=\"width: 100%\"></div>\n        </mat-card-header>\n\n        <mat-card-actions align=\"right\">\n            <button mat-button (click)=\"goToClientsList()\" color=\"primary\">Go to clients list</button>\n            <button mat-button (click)=\"goToClientEditForm()\" color=\"warn\">Go to edit form</button>\n\n        </mat-card-actions>\n    </mat-card>\n</div>\n\n\n\n\n\n"

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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__model_view_client__["a" /* Client */])
    ], ClientItemComponent.prototype, "client", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], ClientItemComponent.prototype, "index", void 0);
    ClientItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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
        this.findLimitNumberOfClients();
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
            this.findLimitNumberOfClients();
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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

module.exports = "<div class=\"parent\">\n    <app-parking-map #parkingList></app-parking-map>\n    <div class=\"filter offset-sm-1 col-sm-10 offset-md-1 col-md-10 offset-lg-1 col-lg-10\">\n        <mat-progress-bar #progressbar *ngIf=\"progressBarVisible\" [color]=\"progressBarColor\" [mode]=\"progressBarMode\"\n                          class=\"progress-bar\" mode=\"query\" [value]=\"100\"></mat-progress-bar>\n        <app-parking-list-filter #filter></app-parking-list-filter>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/index/index.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parking_list_filter_parking_list_filter_component__ = __webpack_require__("./src/app/index/parking-list-filter/parking-list-filter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__parking_service__ = __webpack_require__("./src/app/parking.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__parking_map_parking_map_component__ = __webpack_require__("./src/app/index/parking-map/parking-map.component.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('parkingList'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__parking_map_parking_map_component__["a" /* ParkingMapComponent */])
    ], IndexComponent.prototype, "parkingList", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('filter'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__parking_list_filter_parking_list_filter_component__["a" /* ParkingListFilterComponent */])
    ], IndexComponent.prototype, "filter", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('progressbar'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_material__["n" /* MatProgressBar */])
    ], IndexComponent.prototype, "progressBar", void 0);
    IndexComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-index',
            template: __webpack_require__("./src/app/index/index.component.html"),
            styles: [__webpack_require__("./src/app/index/index.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__parking_service__["a" /* ParkingService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]])
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-parking-list-filter-location-field',
            template: __webpack_require__("./src/app/index/parking-list-filter/location-field/location-field.component.html"),
            styles: [__webpack_require__("./src/app/index/parking-list-filter/location-field/location-field.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__agm_core__["MapsAPILoader"],
            __WEBPACK_IMPORTED_MODULE_3__service_ip_location_service__["a" /* IpLocationService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]])
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('locationField'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__location_field_location_field_component__["a" /* LocationFieldComponent */])
    ], ParkingListFilterComponent.prototype, "locationField", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('radiusField'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__radius_field_radius_field_component__["a" /* RadiusFieldComponent */])
    ], ParkingListFilterComponent.prototype, "radiusField", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('priceRangeField'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__price_range_field_price_range_field_component__["a" /* PriceRangeFieldComponent */])
    ], ParkingListFilterComponent.prototype, "priceRangeField", void 0);
    ParkingListFilterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('minInput'),
        __metadata("design:type", HTMLInputElement)
    ], PriceRangeFieldComponent.prototype, "minInput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('maxInput'),
        __metadata("design:type", HTMLInputElement)
    ], PriceRangeFieldComponent.prototype, "maxInput", void 0);
    PriceRangeFieldComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('slider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatSlider */])
    ], RadiusFieldComponent.prototype, "slider", void 0);
    RadiusFieldComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-parking-list-filter-radius-field',
            template: __webpack_require__("./src/app/index/parking-list-filter/radius-field/radius-field.component.html"),
            styles: [__webpack_require__("./src/app/index/parking-list-filter/radius-field/radius-field.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]])
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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

module.exports = "agm-map {\n    height: 900px;\n}\n\n.map {\n    height: 300px;\n    padding: 0;\n}\n\n/*html, body {\n    height: 100%;\n    margin: 0;\n    padding: 0;\n}*/\n\nbody, html {\n    height: 100%;\n    width: 100%;\n}\n\ndiv#content {\n    width: 100%;\n    height: 100%;\n}\n"

/***/ }),

/***/ "./src/app/index/parking-map/parking-map.component.html":
/***/ (function(module, exports) {

module.exports = "<agm-map [latitude]=\"lat\"\n         [longitude]=\"lng\"\n         [fullscreenControl]=\"true\">\n    <agm-marker [latitude]=\"lat\" [longitude]=\"lng\" [draggable]=\"true\"></agm-marker>\n    <div *ngFor=\"let parking of parkings\">\n        <agm-marker [latitude]=\"parking.latitude\" [longitude]=\"parking.longitude\"\n                    [iconUrl]=\"'/assets/images/icon_parking_info_40x38.png'\">\n            <agm-info-window [disableAutoPan]=\"false\">\n                <ul>\n                    <li><b>Address:</b> {{parking.city}} / {{parking.street}} / {{parking.building}}</li>\n                    <li><b>Distance:</b> {{parking.distance}}</li>\n                    <li><b>Spots:</b> {{parking.spotsCount}}</li>\n                    <li><b>Spots available:</b> {{parking.availableSpotsCount}}</li>\n                </ul>\n                <button type=\"button\" (click)=\"getDirection(parking.latitude, parking.longitude)\">Get</button>\n            </agm-info-window>\n        </agm-marker>\n        <agm-direction *ngIf=\"dir\" [origin]=\"dir.origin\" [destination]=\"dir.destination\"></agm-direction>\n    </div>\n</agm-map>\n\n\n<!--LEAFLET VARIANT-->\n<!--\n<div class=\"map\"\n     leaflet\n     [leafletOptions]=\"options\"\n     [leafletLayersControl]=\"layersControl\">\n</div>\n-->\n\n\n"

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
        this.dir = undefined;
    }
    ParkingMapComponent.prototype.ngOnInit = function () {
        this.findMe();
    };
    ParkingMapComponent.prototype.findMe = function () {
        var _this = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((function (position) {
                _this.getPosition(position);
            }));
        }
    };
    ParkingMapComponent.prototype.getPosition = function (position) {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        console.log(this.lat, this.lng);
    };
    ParkingMapComponent.prototype.getDirection = function (lat, lng) {
        this.dir = {
            origin: { lat: this.lat, lng: this.lng },
            destination: { lat: lat, lng: lng }
        };
    };
    ParkingMapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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
    InterceptorService_1 = InterceptorService;
    InterceptorService.prototype.intercept = function (request, next) {
        if (request.url.startsWith('http://localhost:8080/') && (__WEBPACK_IMPORTED_MODULE_3__auth_token_token_storage__["a" /* TokenStorage */].getToken())) {
            request = InterceptorService_1.addAuthHeaderToRequest(request);
        }
        return next.handle(request).do(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpResponse */]) {
            }
        }, function (error) {
            if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpErrorResponse */]) {
                if (error.status === 401) {
                    __WEBPACK_IMPORTED_MODULE_3__auth_token_token_storage__["a" /* TokenStorage */].saveToken(error.error);
                }
            }
        });
    };
    InterceptorService.addAuthHeaderToRequest = function (request) {
        return request.clone({
            headers: request.headers.append('Authorization', "Bearer " + __WEBPACK_IMPORTED_MODULE_3__auth_token_token_storage__["a" /* TokenStorage */].getToken())
        });
    };
    InterceptorService = InterceptorService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], InterceptorService);
    return InterceptorService;
    var InterceptorService_1;
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
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-delete-confirmation-dialog',
            template: __webpack_require__("./src/app/manager/manager-parking-list/delete-confirmation-dialog/delete-confirmation-dialog.component.html"),
            styles: [__webpack_require__("./src/app/manager/manager-parking-list/delete-confirmation-dialog/delete-confirmation-dialog.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
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
    Client.copyOf = function (client) {
        return Object.assign(new Client(), client);
    };
    return Client;
}());



/***/ }),

/***/ "./src/app/model/view/favorite.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Favorite; });
var Favorite = /** @class */ (function () {
    function Favorite() {
    }
    return Favorite;
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

module.exports = "<h1 mat-dialog-title style=\"text-align: center\">Enter the name for favorite parking?</h1>\n    <mat-form-field>\n        <input matInput [(ngModel)]=\"data.name\" placeholder=\"Enter name\">\n    </mat-form-field>\n<div mat-dialog-actions>\n    <button mat-button (click)=\"onNoClick()\" [mat-dialog-close]=\"data\">Cancel</button>\n    <button mat-button color=\"primary\" (click)=\"onOkClick()\" [mat-dialog-close]=\"data\"\n            cdkFocusInitial>Add\n    </button>\n</div>"

/***/ }),

/***/ "./src/app/parking-detail/favorites-add-configm-dialog/favorites-add-configm-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FavoritesAddConfigmDialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoriteAddData; });
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


var FavoritesAddConfigmDialogComponent = /** @class */ (function () {
    function FavoritesAddConfigmDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-favorites-add-configm-dialog',
            template: __webpack_require__("./src/app/parking-detail/favorites-add-configm-dialog/favorites-add-configm-dialog.component.html"),
            styles: [__webpack_require__("./src/app/parking-detail/favorites-add-configm-dialog/favorites-add-configm-dialog.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialogRef */],
            FavoriteAddData])
    ], FavoritesAddConfigmDialogComponent);
    return FavoritesAddConfigmDialogComponent;
}());

var FavoriteAddData = /** @class */ (function () {
    function FavoriteAddData() {
        this.name = '';
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

module.exports = "<div class=\"container-fluid\" *ngIf=\"!parking\" class=\"text-center\">\n    <div class=\"row mx-auto mt-3 center-block\">\n        <div class=\"col-6 mx-auto my-auto text-center\">\n            <mat-spinner mode=\"indeterminate\" style=\"margin-left: 35%;\"></mat-spinner>\n        </div>\n    </div>\n</div>\n<div *ngIf=\"parking\">\n    <mat-card class=\"card col-sm-12 col-md-12 col-lg-12 mt-3\">\n        <mat-card-header>\n            <div mat-card-avatar class=\"example-header-image\">\n                <mat-icon>local_parking</mat-icon>\n            </div>\n            <div style=\"min-width: 70%;\">\n                <div>\n                    <h5>\n                        <b>\n                            <i>Address: </i>\n                        </b>{{parking.address}}</h5>\n                    <mat-card-subtitle>Provider: {{parking.providerName}}</mat-card-subtitle>\n                </div>\n            </div>\n            <div style=\"width: 100%\"></div>\n            <mat-icon style=\"color: #1e7e34\">attach_money</mat-icon>\n            <p style=\"font-size: 18px;\">{{parking.price}}</p>\n        </mat-card-header>\n\n        <mat-card-content>\n            <mat-list>\n                <mat-list-item>\n                    <mat-icon color=\"warn\" style=\"margin-right: 15px\" (click)=\"showOnMap(parking.latitude, parking.longitude)\">place\n                    </mat-icon>\n                    <span> {{parking.latitude}}, {{parking.longitude}}</span>\n                </mat-list-item>\n                <mat-divider></mat-divider>\n                <mat-list-item *ngIf=\"hasToken()\">\n                    <div class=\"col-4\" *ngIf=\"!parking.isFavorite\">\n                        <span style=\"font-size:18px;\" ><b><i>Add to favorites</i></b></span>\n                        <button mat-icon-button color=\"warn\" (click)=\"onParkingAddToFavoritesClick()\">\n                        <mat-icon>star_rate</mat-icon>\n                    </button>\n                </div>\n                <div class=\"col-10\" *ngIf=\"parking.isFavorite\">\n                    <span style=\"font-size:18px;\" ><b>Parking is in your favorites as:</b> <b><i>{{parking.favoriteName}}</i></b></span>\n                    <!-- <button mat-icon-button color=\"warn\" (click)=\"onParkingAddToFavoritesClick()\">\n                    <mat-icon>star_rate</mat-icon>\n                </button> -->\n            </div>\n                \n                </mat-list-item>\n                <mat-divider></mat-divider>\n                <mat-list-item>\n                    <div class=\"col-8\">\n                        <h5>\n                            <b>\n                                <i>Spots: </i>\n                            </b> General: {{parking.spotsCount}} / Available: {{parking.availableSpotsCount}}\n                        </h5>\n                    </div>\n                    <div class=\"col-2 ml-auto\">\n                        <button mat-raised-button color=\"primary\" (click)=\"refresh()\">Refresh\n                            <i class=\"material-icons\">&#xE863;</i>\n                        </button>\n                    </div>\n                </mat-list-item>\n                <mat-divider></mat-divider>\n                <mat-list-item>\n                    <div class=\"col-8\">\n                        <h5>\n                            <b>\n                                <i>Fullness: </i>\n                            </b>\n                        </h5>\n                    </div>\n                </mat-list-item>\n                <mat-list-item>\n                    <ngb-progressbar [type]=\"type\" [value]=\"value\" [max]=\"max\" style=\"width:100%; height:0.7em;\">\n                        <b>{{fullnessBarMessage}} {{parking.availableSpotsCount}} spot(s) left!</b>\n                    </ngb-progressbar>\n                </mat-list-item>\n\n\n                <mat-divider></mat-divider>\n            </mat-list>\n        </mat-card-content>\n        <mat-card-actions align=\"center\">\n            <ngb-accordion>\n                <ngb-panel id=\"preventchange-1\">\n                    <ng-template ngbPanelTitle>\n                        <div>\n                            <h5>\n                                <b> Show all spots</b>\n                            </h5>\n                        </div>\n                    </ng-template>\n                    <ng-template ngbPanelContent>\n                        <ngb-tabset justify=\"justified\">\n                            <ngb-tab>\n                                <ng-template ngbTabTitle>\n                                    <div>\n                                        <b>Show all spots</b>\n                                    </div>\n                                </ng-template>\n                                <ng-template ngbTabContent>\n                                    <table class=\"table table-hover\">\n                                        <thead>\n                                            <tr class=\"text-center\">\n                                                <th scope=\"col\">Spot number #</th>\n                                                <th scope=\"col\">Availability</th>\n                                            </tr>\n                                        </thead>\n                                        <tbody>\n                                            <tr *ngFor=\"let spot of spots\" class=\"text-center\">\n                                                <th scope=\"row\">{{spot.id}}</th>\n\n                                                <td scope=\"row\" *ngIf=\"!!spot.isFree; else busy\">\n                                                    <button type=\"button\" class=\"btn btn-sm btn-success\" disabled>\n                                                        Available\n                                                    </button>\n                                                </td>\n\n                                                <ng-template #busy>\n                                                    <td scope=\"row\">\n                                                        <button type=\"button\" class=\"btn btn-sm btn-secondary\" disabled>\n                                                            Not Available\n                                                        </button>\n                                                    </td>\n                                                </ng-template>\n                                            </tr>\n                                        </tbody>\n                                    </table>\n                                </ng-template>\n                            </ngb-tab>\n                            <ngb-tab>\n                                <ng-template ngbTabTitle>\n                                    <div>\n                                        <b>Show only available spots</b>\n                                    </div>\n                                </ng-template>\n                                <ng-template ngbTabContent>\n                                    <table class=\"table table-hover\">\n                                        <thead>\n                                            <tr class=\"text-center\">\n                                                <th scope=\"col\">Spot number #</th>\n                                                <th scope=\"col\">Availability</th>\n                                            </tr>\n                                        </thead>\n                                        <tbody>\n                                            <tr *ngFor=\"let spot of freeSpots\" class=\"text-center\">\n                                                <th scope=\"row\">{{spot.id}}</th>\n\n                                                <td scope=\"row\">\n                                                    <button type=\"button\" class=\"btn btn-sm btn-success\" disabled>\n                                                        Available\n                                                    </button>\n                                                </td>\n\n                                            </tr>\n                                        </tbody>\n                                    </table>\n                                </ng-template>\n                            </ngb-tab>\n                        </ngb-tabset>\n\n                    </ng-template>\n                </ngb-panel>\n            </ngb-accordion>\n        </mat-card-actions>\n    </mat-card>\n\n\n</div>"

/***/ }),

/***/ "./src/app/parking-detail/parking-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParkingDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_token_token_storage__ = __webpack_require__("./src/app/auth/token/token-storage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__parking_service__ = __webpack_require__("./src/app/parking.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__favorites_add_configm_dialog_favorites_add_configm_dialog_component__ = __webpack_require__("./src/app/parking-detail/favorites-add-configm-dialog/favorites-add-configm-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__model_view_favorite__ = __webpack_require__("./src/app/model/view/favorite.ts");
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
        console.log('isFavorite ->' + this.parking.isFavorite);
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
        var _this = this;
        var id = parseInt(this.route.snapshot.paramMap.get('id'));
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__favorites_add_configm_dialog_favorites_add_configm_dialog_component__["b" /* FavoritesAddConfigmDialogComponent */], {
            data: new __WEBPACK_IMPORTED_MODULE_6__favorites_add_configm_dialog_favorites_add_configm_dialog_component__["a" /* FavoriteAddData */]()
        });
        dialogRef.afterClosed().subscribe(function (data) {
            if (data.confirmed) {
                _this.favorite = new __WEBPACK_IMPORTED_MODULE_7__model_view_favorite__["a" /* Favorite */]();
                if (data.name.length != 0) {
                    _this.favorite.name = data.name;
                }
                else {
                    _this.favorite.name = _this.parking.address;
                }
                _this.parkingService.saveToFavorite(id, _this.favorite).subscribe(function (response) {
                    _this.snackBar.open('Parking add to favorite sucsessfully.', null, {
                        duration: 2000
                    });
                });
                _this.ngOnInit();
            }
        });
    };
    ParkingDetailComponent.prototype.getRole = function () {
        return __WEBPACK_IMPORTED_MODULE_4__auth_token_token_storage__["a" /* TokenStorage */].getRole();
    };
    ParkingDetailComponent.prototype.hasToken = function () {
        return __WEBPACK_IMPORTED_MODULE_4__auth_token_token_storage__["a" /* TokenStorage */].hasToken();
    };
    ParkingDetailComponent.prototype.logOut = function () {
        __WEBPACK_IMPORTED_MODULE_4__auth_token_token_storage__["a" /* TokenStorage */].signOut();
    };
    ParkingDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-parking-detail',
            template: __webpack_require__("./src/app/parking-detail/parking-detail.component.html"),
            styles: [__webpack_require__("./src/app/parking-detail/parking-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_5__parking_service__["a" /* ParkingService */],
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
        this.spotstatistic = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + '/spotstatistic/';
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
    // saveParking(parking: Parking): Observable<HttpResponse<any>> {
    //     return this.http.post<HttpResponse<any>>(
    //         this.parkingConfigureUrl + '/parking/save', parking, {observe: 'response'});
    // }
    ParkingService.prototype.saveToFavorite = function (id, favorite) {
        return this.http.post(this.parkingDetailUrl + id + '/savetofavorites', favorite, { observe: 'response' });
    };
    ParkingService.prototype.getSpotStatistic = function (id) {
        return this.http.get(this.spotstatistic + id);
    };
    ParkingService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
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

/***/ "./src/app/spotstatistic/spotstatistic.component.css":
/***/ (function(module, exports) {

module.exports = "/* .bs-datepicker */\n.bs-datepicker {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: stretch;\n        -ms-flex-align: stretch;\n            align-items: stretch;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n    background: #fff;\n    -webkit-box-shadow: 0 0 10px 0 #aaa;\n            box-shadow: 0 0 10px 0 #aaa;\n    position: relative;\n    z-index: 1;\n    /* button */\n    /* .bs-datepicker-head */\n    /* .bs-datepicker-body */\n    /* .current-timedate */\n    /* .bs-datepicker-multiple */\n    /* .bs-datepicker-btns */\n    /*.bs-datepicker-custom-range */\n    /* .bs-datepicker-predefined-btns */\n    /* .is-other-month */\n    /* .bs-datepicker-buttons */ }\n.bs-datepicker:after {\n      clear: both;\n      content: '';\n      display: block; }\n.bs-datepicker bs-day-picker {\n      float: left; }\n.bs-datepicker button:hover,\n    .bs-datepicker button:focus,\n    .bs-datepicker button:active,\n    .bs-datepicker input:hover,\n    .bs-datepicker input:focus,\n    .bs-datepicker input:active,\n    .bs-datepicker-btns button:hover,\n    .bs-datepicker-btns button:focus,\n    .bs-datepicker-btns button:active,\n    .bs-datepicker-predefined-btns button:active,\n    .bs-datepicker-predefined-btns button:focus {\n      outline: none; }\n.bs-datepicker-head {\n      min-width: 270px;\n      height: 50px;\n      padding: 10px;\n      border-radius: 3px 3px 0 0;\n      text-align: justify;\n      /* .bs-datepicker-head button */ }\n.bs-datepicker-head:after {\n        content: \"\";\n        display: inline-block;\n        vertical-align: top;\n        width: 100%; }\n.bs-datepicker-head button {\n        display: inline-block;\n        vertical-align: top;\n        padding: 0;\n        height: 30px;\n        line-height: 30px;\n        border: 0;\n        background: transparent;\n        text-align: center;\n        cursor: pointer;\n        color: #fff;\n        -webkit-transition: 0.3s;\n        transition: 0.3s; }\n.bs-datepicker-head button[disabled], .bs-datepicker-head button[disabled]:hover, .bs-datepicker-head button[disabled]:active {\n          background: rgba(221, 221, 221, 0.3);\n          color: #f5f5f5;\n          cursor: not-allowed; }\n.bs-datepicker-head button.next, .bs-datepicker-head button.previous {\n          border-radius: 50%;\n          width: 30px;\n          height: 30px; }\n.bs-datepicker-head button.next span, .bs-datepicker-head button.previous span {\n            font-size: 28px;\n            line-height: 1;\n            display: inline-block;\n            position: relative;\n            height: 100%;\n            width: 100%;\n            border-radius: 50%; }\n.bs-datepicker-head button.current {\n          border-radius: 15px;\n          max-width: 155px;\n          padding: 0 13px; }\n.bs-datepicker-head button:hover {\n      background-color: rgba(0, 0, 0, 0.1); }\n.bs-datepicker-head button:active {\n      background-color: rgba(0, 0, 0, 0.2); }\n.bs-datepicker-body {\n      padding: 10px;\n      border-radius: 0 0 3px 3px;\n      min-height: 232px;\n      min-width: 278px;\n      border: 1px solid #e9edf0;\n      /* .bs-datepicker-body table */ }\n.bs-datepicker-body .days.weeks {\n        position: relative;\n        z-index: 1; }\n.bs-datepicker-body table {\n        width: 100%;\n        border-collapse: separate;\n        border-spacing: 0;\n        /* .bs-datepicker-body table.days */\n        /* .bs-datepicker-body table.weeks */ }\n.bs-datepicker-body table th {\n          font-size: 13px;\n          color: #9aaec1;\n          font-weight: 400;\n          text-align: center; }\n.bs-datepicker-body table td {\n          color: #54708b;\n          text-align: center;\n          position: relative;\n          padding: 0; }\n.bs-datepicker-body table td span {\n            display: block;\n            margin: 0 auto;\n            font-size: 13px;\n            border-radius: 50%;\n            position: relative;\n            /*z-index: 1;*/\n            -moz-user-select: none;\n            -webkit-user-select: none;\n            -ms-user-select: none; }\n.bs-datepicker-body table td:not(.disabled) span {\n            cursor: pointer; }\n.bs-datepicker-body table td.is-highlighted:not(.disabled):not(.selected) span,\n          .bs-datepicker-body table td span.is-highlighted:not(.disabled):not(.selected) {\n            background-color: #e9edf0;\n            -webkit-transition: 0s;\n            transition: 0s; }\n.bs-datepicker-body table td span.disabled,\n          .bs-datepicker-body table td.disabled span {\n            color: #9aaec1; }\n.bs-datepicker-body table td span.selected,\n          .bs-datepicker-body table td.selected span {\n            color: #fff; }\n.bs-datepicker-body table td.active {\n            position: relative; }\n.bs-datepicker-body table td.active.select-start:before {\n              left: 35%; }\n.bs-datepicker-body table td.active.select-end:before {\n              left: -85%; }\n.bs-datepicker-body table td span.active.select-start:after,\n          .bs-datepicker-body table td span.active.select-end:after,\n          .bs-datepicker-body table td.active.select-start span:after,\n          .bs-datepicker-body table td.active.select-end span:after {\n            content: \"\";\n            display: block;\n            position: absolute;\n            z-index: -1;\n            width: 100%;\n            height: 100%;\n            -webkit-transition: 0.3s;\n            transition: 0.3s;\n            top: 0;\n            border-radius: 50%; }\n.bs-datepicker-body table td:before,\n          .bs-datepicker-body table td span:before {\n            content: \"\";\n            display: block;\n            position: absolute;\n            z-index: -1;\n            top: 6px;\n            bottom: 6px;\n            left: -2px;\n            right: -2px;\n            -webkit-box-sizing: content-box;\n                    box-sizing: content-box;\n            background: transparent; }\n.bs-datepicker-body table td.active.select-start + td.active:before {\n            left: -20%; }\n.bs-datepicker-body table td:last-child.active:before {\n            border-radius: 0 3px 3px 0;\n            width: 125%;\n            left: -25%; }\n.bs-datepicker-body table td span[class*=\"select-\"],\n          .bs-datepicker-body table td[class*=\"select-\"] span {\n            border-radius: 50%;\n            color: #fff; }\n.bs-datepicker-body table.days td.active:not(.select-start):before, .bs-datepicker-body table.days td.in-range:not(.select-start):before,\n        .bs-datepicker-body table.days span.active:not(.select-start):before,\n        .bs-datepicker-body table.days span.in-range:not(.select-start):before {\n          background: #e9edf0; }\n.bs-datepicker-body table.days span {\n          width: 32px;\n          height: 32px;\n          line-height: 32px; }\n.bs-datepicker-body table.days span.select-start {\n            z-index: 2; }\n.bs-datepicker-body table.days span.is-highlighted.in-range:before, .bs-datepicker-body table.days span.in-range.select-end:before {\n            background: none;\n            right: 0;\n            left: 0; }\n.bs-datepicker-body table.days td.select-start + td.select-end:before,\n        .bs-datepicker-body table.days td.select-start + td.is-highlighted:before,\n        .bs-datepicker-body table.days td.active + td.is-highlighted:before,\n        .bs-datepicker-body table.days td.active + td.select-end:before,\n        .bs-datepicker-body table.days td.in-range + td.is-highlighted:before,\n        .bs-datepicker-body table.days td.in-range + td.select-end:before {\n          background: #e9edf0;\n          width: 100%; }\n.bs-datepicker-body table.weeks tr td:nth-child(2).active:before {\n          border-radius: 3px 0 0 3px;\n          left: 0;\n          width: 100%; }\n.bs-datepicker-body table:not(.weeks) tr td:first-child:before {\n          border-radius: 3px 0 0 3px; }\n.bs-datepicker-body table.years td span {\n          width: 46px;\n          height: 46px;\n          line-height: 45px;\n          margin: 0 auto; }\n.bs-datepicker-body table.years tr:not(:last-child) td span {\n          margin-bottom: 8px; }\n.bs-datepicker-body table.months td {\n          height: 52px; }\n.bs-datepicker-body table.months td span {\n            padding: 6px;\n            border-radius: 15px; }\n.bs-datepicker .current-timedate {\n      color: #54708b;\n      font-size: 15px;\n      text-align: center;\n      height: 30px;\n      line-height: 30px;\n      border-radius: 20px;\n      border: 1px solid #e9edf0;\n      margin-bottom: 10px;\n      cursor: pointer;\n      text-transform: uppercase;\n      -moz-user-select: none;\n      -webkit-user-select: none;\n      -ms-user-select: none; }\n.bs-datepicker .current-timedate span:not(:empty):before {\n        content: \"\";\n        width: 15px;\n        height: 16px;\n        display: inline-block;\n        margin-right: 4px;\n        vertical-align: text-bottom;\n        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAQCAYAAADJViUEAAABMklEQVQoU9VTwW3CQBCcOUgBtEBKSAukAnBKME+wFCAlYIhk8sQlxFABtJAScAsuAPBEewYcxCP8ouxrPDsza61uiVN1o6RNHD4htSCmq49RfO71BvMJqBBkITRf1kmUW49nQRC9h1I5AZlBClaL8aP1fKgOOxCx8aSLs+Q19eZuNO8QmPqJRtDFguy7OAcDbJPs+/BKVPDIPrvD2ZJgWAmVe7O0rI0Vqs1seyWUXpuJoppYCa5L+U++NpNPkr5OE2oMdARsb3gykJT5ydZcL8Z9Ww60nxg2LhjON9li9OwXZzo+xLbp3nC2s9CL2RrueGyVrgwNm8HpsCzZ9EEW6kqXlo1GQe03FzP/7W8Hl0dBtu7Bf7zt6mIwvX1RvzDCm7+q3mAW0Dl/GPdUCeXrZLT9BrDrGkm4qlPvAAAAAElFTkSuQmCC); }\n.bs-datepicker-multiple {\n      display: inline-block;\n      border-radius: 4px 0 0 4px; }\n.bs-datepicker-multiple + .bs-datepicker-multiple {\n        margin-left: 10px; }\n.bs-datepicker-multiple .bs-datepicker {\n        -webkit-box-shadow: none;\n                box-shadow: none;\n        position: relative; }\n.bs-datepicker-multiple .bs-datepicker:not(:last-child) {\n          padding-right: 10px; }\n.bs-datepicker-multiple .bs-datepicker + .bs-datepicker:after {\n          content: \"\";\n          display: block;\n          width: 14px;\n          height: 10px;\n          background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAKCAYAAABrGwT5AAAA1ElEQVQoU42RsQrCUAxF77VuDu7O4oMWW//BURBBpZvgKk4uIrjoqKOTf+DopIO4uYggtFTfw3+pkQqCW1/G5J7kJiFy4m5MxUlxAzgIPHX+lzMPzupRYlYgxiR7vqsOP8YKzsTx0yxFMCUZ+q7aZzlr+OvgoWcAFyAHgat2jLWu48252DdqAihDJGSSJNUUxYmQjs3+hPQBlAh2rG2LCOPnaw3IiGDX99TRCs7ASJsNhUOA7d/LcuHvRG22FIZvsNXw1MX6VZExCilOQKEfeLXr/10+aC9Ho7arh7oAAAAASUVORK5CYII=);\n          position: absolute;\n          top: 25px;\n          left: -8px; }\n.bs-datepicker-multiple .bs-datepicker .left {\n          float: left; }\n.bs-datepicker-multiple .bs-datepicker .right {\n          float: right; }\n.bs-datepicker-container {\n      padding: 15px; }\n.bs-datepicker-custom-range {\n      padding: 15px;\n      background: #eee; }\n.bs-datepicker-predefined-btns button {\n      width: 100%;\n      display: block;\n      height: 30px;\n      background-color: #9aaec1;\n      border-radius: 4px;\n      color: #fff;\n      border: 0;\n      margin-bottom: 10px;\n      padding: 0 18px;\n      text-align: left;\n      -webkit-transition: 0.3s;\n      transition: 0.3s; }\n.bs-datepicker-predefined-btns button:active, .bs-datepicker-predefined-btns button:hover {\n        background-color: #54708b; }\n.bs-datepicker .is-other-month {\n      color: rgba(0, 0, 0, 0.25); }\n.bs-datepicker-buttons {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-flow: row wrap;\n              flex-flow: row wrap;\n      -webkit-box-pack: end;\n          -ms-flex-pack: end;\n              justify-content: flex-end;\n      padding-top: 10px;\n      border-top: 1px solid #e9edf0; }\n.bs-datepicker-buttons .btn-default {\n        margin-left: 10px; }\n/* .bs-timepicker */\n.bs-timepicker-container {\n    padding: 10px 0; }\n.bs-timepicker-label {\n    color: #54708b;\n    margin-bottom: 10px; }\n.bs-timepicker-controls {\n    display: inline-block;\n    vertical-align: top;\n    margin-right: 10px; }\n.bs-timepicker-controls button {\n      width: 20px;\n      height: 20px;\n      border-radius: 50%;\n      border: 0;\n      background-color: #e9edf0;\n      color: #54708b;\n      font-size: 16px;\n      font-weight: 700;\n      vertical-align: middle;\n      line-height: 0;\n      padding: 0;\n      -webkit-transition: 0.3s;\n      transition: 0.3s; }\n.bs-timepicker-controls button:hover {\n        background-color: #d5dadd; }\n.bs-timepicker-controls input {\n      width: 35px;\n      height: 25px;\n      border-radius: 13px;\n      text-align: center;\n      border: 1px solid #e9edf0; }\n.bs-timepicker .switch-time-format {\n    text-transform: uppercase;\n    min-width: 54px;\n    height: 25px;\n    border-radius: 20px;\n    border: 1px solid #e9edf0;\n    background: #fff;\n    color: #54708b;\n    font-size: 13px; }\n.bs-timepicker .switch-time-format img {\n      vertical-align: initial;\n      margin-left: 4px; }\nbs-datepicker-container,\n  bs-daterangepicker-container {\n    z-index: 1080; }\n/* screen size < 1024px */\n@media (max-width: 768px) {\n    .bs-datepicker-multiple {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex; }\n      .bs-datepicker-multiple + .bs-datepicker-multiple {\n        margin-top: 10px;\n        margin-left: 0; } }\n/* theming */\n.theme-default .bs-datepicker-head {\n    background-color: #777; }\n.theme-default .bs-datepicker-body table td span.selected,\n  .theme-default .bs-datepicker-body table td.selected span,\n  .theme-default .bs-datepicker-body table td span[class*=\"select-\"]:after,\n  .theme-default .bs-datepicker-body table td[class*=\"select-\"] span:after {\n    background-color: #777; }\n.theme-default .bs-datepicker-body table td.week span {\n    color: #777; }\n.theme-green .bs-datepicker-head {\n    background-color: #5cb85c; }\n.theme-green .bs-datepicker-body table td span.selected,\n  .theme-green .bs-datepicker-body table td.selected span,\n  .theme-green .bs-datepicker-body table td span[class*=\"select-\"]:after,\n  .theme-green .bs-datepicker-body table td[class*=\"select-\"] span:after {\n    background-color: #5cb85c; }\n.theme-green .bs-datepicker-body table td.week span {\n    color: #5cb85c; }\n.theme-blue .bs-datepicker-head {\n    background-color: #5bc0de; }\n.theme-blue .bs-datepicker-body table td span.selected,\n  .theme-blue .bs-datepicker-body table td.selected span,\n  .theme-blue .bs-datepicker-body table td span[class*=\"select-\"]:after,\n  .theme-blue .bs-datepicker-body table td[class*=\"select-\"] span:after {\n    background-color: #5bc0de; }\n.theme-blue .bs-datepicker-body table td.week span {\n    color: #5bc0de; }\n.theme-dark-blue .bs-datepicker-head {\n    background-color: #337ab7; }\n.theme-dark-blue .bs-datepicker-body table td span.selected,\n  .theme-dark-blue .bs-datepicker-body table td.selected span,\n  .theme-dark-blue .bs-datepicker-body table td span[class*=\"select-\"]:after,\n  .theme-dark-blue .bs-datepicker-body table td[class*=\"select-\"] span:after {\n    background-color: #337ab7; }\n.theme-dark-blue .bs-datepicker-body table td.week span {\n    color: #337ab7; }\n.theme-red .bs-datepicker-head {\n    background-color: #d9534f; }\n.theme-red .bs-datepicker-body table td span.selected,\n  .theme-red .bs-datepicker-body table td.selected span,\n  .theme-red .bs-datepicker-body table td span[class*=\"select-\"]:after,\n  .theme-red .bs-datepicker-body table td[class*=\"select-\"] span:after {\n    background-color: #d9534f; }\n.theme-red .bs-datepicker-body table td.week span {\n    color: #d9534f; }\n.theme-orange .bs-datepicker-head {\n    background-color: #f0ad4e; }\n.theme-orange .bs-datepicker-body table td span.selected,\n  .theme-orange .bs-datepicker-body table td.selected span,\n  .theme-orange .bs-datepicker-body table td span[class*=\"select-\"]:after,\n  .theme-orange .bs-datepicker-body table td[class*=\"select-\"] span:after {\n    background-color: #f0ad4e; }\n.theme-orange .bs-datepicker-body table td.week span {\n    color: #f0ad4e; }\n/*# sourceMappingURL=bs-datepicker.css.map */"

/***/ }),

/***/ "./src/app/spotstatistic/spotstatistic.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"card offset-sm-1 col-sm-10 offset-md-1 col-md-10 offset-lg-1 col-lg-10\">\n  <mat-card-header>\n\n<table class=\"table table-hover\">\n  <thead>\n      <tr class=\"text-center\">\n          <th scope=\"col\">Spot number #</th>\n          <th scope=\"col\">Hours have been taken</th>\n      </tr>\n  </thead>\n  <tbody>\n      <tr *ngFor=\"let spotstatistic of statistic\" class=\"text-center\">\n          <th scope=\"row\">{{spotstatistic.id}}</th>\n          <th scope=\"row\">{{spotstatistic.numberOfHours}}</th>\n\n        \n          \n      </tr>\n  </tbody>\n</table>\n</mat-card-header> \n</mat-card> \n\n<div class=\"row\">\n\n        <div class=\"col-xs-12 col-12 col-md-4 form-group\">\n                <label>Set min data</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Datepicker\" #dp=\"bsDatepicker\" bsDatepicker [bsConfig]=\"bsConfig1\" [(ngModel)]=\"minDate\">                    \n              </div>\n\n              <div class=\"col-xs-12 col-12 col-md-4 form-group\">\n                    <label>Set max data</label>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Datepicker\" #dp=\"bsDatepicker\" bsDatepicker [bsConfig]=\"bsConfig2\" [(ngModel)]=\"maxDate\">                                 \n              </div>\n\n\n\n\n    <div class=\"col-xs-12 col-12 col-md-4 form-group\">\n        <div>\n      <label>Display statistic of spots</label>\n    </div>\n    <div>\n     <button class=\"btn btn-success\" (click)=\"addItem()\">Display</button>\n    </div>  \n    </div>\n    \n  </div>\n\n\n  <p class=\"life-container\" *ngFor=\"let goal of goals\">\n    {{ goal }}\n  </p>\n  \n\n"

/***/ }),

/***/ "./src/app/spotstatistic/spotstatistic.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpotstatisticComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__parking_service__ = __webpack_require__("./src/app/parking.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SpotstatisticComponent = /** @class */ (function () {
    function SpotstatisticComponent(route, parkingService) {
        this.route = route;
        this.parkingService = parkingService;
        this.thirtySecInterval = 30000;
        this.favoriteNameInputHide = true;
        this.goals = [];
        this.minDate = new Date();
        this.maxDate = new Date();
    }
    SpotstatisticComponent.prototype.ngOnInit = function () {
        this.getSpotStatistic();
        setInterval(this.refresh(), this.thirtySecInterval);
    };
    SpotstatisticComponent.prototype.refresh = function () {
        this.getSpotStatistic();
    };
    SpotstatisticComponent.prototype.getSpotStatistic = function () {
        var _this = this;
        var id = parseInt(this.route.snapshot.paramMap.get('id'));
        this.parkingService.getSpotStatistic(id)
            .subscribe(function (statistic) { return _this.statistic = statistic; });
    };
    SpotstatisticComponent.prototype.addItem = function () {
        if (this.minDate > this.maxDate) {
            this.tempDate = this.minDate;
            this.minDate = this.maxDate;
            this.maxDate = this.tempDate;
        }
        this.minMonth = this.minDate.getMonth() + 1;
        this.maxMonth = this.maxDate.getMonth() + 1;
        //this.dateRange.setBeginDate(this.minDate.getDate()+"/"+ this.minMonth+"/"+this.minDate.getFullYear());
        this.dateRange.beginDate = this.minDate.getDate() + "/" + this.minMonth + "/" + this.minDate.getFullYear();
        this.dateRange.endDate = this.maxDate.getDate() + "/" + this.maxMonth + "/" + this.maxDate.getFullYear();
        //this.goals.push(this.dateRange.getBeginDate());
        this.goals.push(this.dateRange.endDate);
    };
    SpotstatisticComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-spotstatistic',
            template: __webpack_require__("./src/app/spotstatistic/spotstatistic.component.html"),
            styles: [__webpack_require__("./src/app/spotstatistic/spotstatistic.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__parking_service__["a" /* ParkingService */]])
    ], SpotstatisticComponent);
    return SpotstatisticComponent;
}());



/***/ }),

/***/ "./src/app/statistic/parking-statistic/parking-statistic.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/statistic/parking-statistic/parking-statistic.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 class=\"text-center\">The most popular parkings:</h3>\n<div class=\"parent row\">\n\n    <div class=\"col-md-12\">\n        <ul>\n            <div *ngFor=\"let parking of parkings\">\n                <mat-card class=\"card offset-sm-1 col-sm-10 offset-md-1 col-md-10 offset-lg-1 col-lg-10\">\n                    <mat-card-header>\n                        <div mat-card-avatar class=\"example-header-image\">\n                            <mat-icon>local_parking</mat-icon>\n                        </div>\n                        <div style=\"min-width: 70%;\">\n                            <div>\n                                <mat-card-title>{{parking.city}}, {{parking.street}} street</mat-card-title>\n                                <mat-card-subtitle>{{parking.providerName}}</mat-card-subtitle>\n\n                            </div>\n                        </div>\n                        <div style=\"width: 100%\"></div>\n                        <mat-icon style=\"color: #1e7e34\">attach_money</mat-icon>\n                        <p style=\"font-size: 18px;\">{{parking.price}}</p>\n                    </mat-card-header>\n\n                    <mat-card-actions align=\"right\">\n                        <button mat-button routerLink='parkingdetail/2' color=\"primary\">MORE INFO</button>\n                    </mat-card-actions>\n                </mat-card>\n                <hr/>\n            </div>\n        </ul>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"filter offset-1 col-md-10\">\n        <mat-divider style=\"border-color: purple;\"></mat-divider>\n        <mat-card class=\"card\">\n\n            <div class=\"row\">\n                <mat-form-field class=\"col-md-3\">\n                    <input matInput placeholder=\"search\" #searchBox id=\"search-box\"\n                           (keyup)=\"findParkingsStreets(searchBox.value)\">\n                    <ul class=\"search-result\">\n                        <li *ngFor=\"let parkingsStreet of parkingsStreets\">\n                            <!--The $ is a convention that indicates heroes$ is an Observable, not an array.-->\n                            <a (click)=\"findBestParkingsByStreet(parkingsStreet)\">\n                                {{parkingsStreet}}\n                            </a>\n                        </li>\n                    </ul>\n                </mat-form-field>\n            </div>\n            <div class=\"row\">\n                <div class=\"offset-5 col-6\">\n                    <button mat-raised-button color=\"primary\" class=\"mt-5\">Search</button>\n                </div>\n            </div>\n\n\n        </mat-card>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/statistic/parking-statistic/parking-statistic.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParkingStatisticComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__statistics_service__ = __webpack_require__("./src/app/statistic/statistics.service.ts");
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



var ParkingStatisticComponent = /** @class */ (function () {
    function ParkingStatisticComponent(statisticService, router) {
        this.statisticService = statisticService;
        this.router = router;
    }
    ParkingStatisticComponent.prototype.ngOnInit = function () {
    };
    ParkingStatisticComponent.prototype.findAllParkings = function () {
        var _this = this;
        this.statisticService.getAllParkings()
            .subscribe(function (parkings) {
            _this.parkings = parkings;
        });
    };
    ParkingStatisticComponent.prototype.findMostPopularProvidersByStreet = function (value) {
        var _this = this;
        this.statisticService.getAllParkingsByCity(value)
            .subscribe(function (parkings) {
            _this.parkings = parkings;
        });
    };
    ParkingStatisticComponent.prototype.findBestParkingsByStreet = function (value) {
        var _this = this;
        this.statisticService.getBestParkingsByStreet(value)
            .subscribe(function (parkings) {
            _this.parkings = parkings;
        });
    };
    ParkingStatisticComponent.prototype.findParkingsStreets = function (value) {
        var _this = this;
        this.statisticService.getParkingsStreet(value)
            .subscribe(function (parkingsStreet) {
            _this.parkingsStreets = parkingsStreet;
        });
    };
    ParkingStatisticComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-parking-statistic',
            template: __webpack_require__("./src/app/statistic/parking-statistic/parking-statistic.component.html"),
            styles: [__webpack_require__("./src/app/statistic/parking-statistic/parking-statistic.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__statistics_service__["a" /* StatisticsService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-statistic',
            template: __webpack_require__("./src/app/statistic/statistic.component.html"),
            styles: [__webpack_require__("./src/app/statistic/statistic.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StatisticComponent);
    return StatisticComponent;
}());



/***/ }),

/***/ "./src/app/statistic/statistics.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatisticsService; });
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



var StatisticsService = /** @class */ (function () {
    function StatisticsService(http) {
        this.http = http;
        this.statisticUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + '/statistic';
    }
    StatisticsService.prototype.getAllParkings = function () {
        return this.http.get(this.statisticUrl + '/allparkings');
    };
    StatisticsService.prototype.getAllParkingsByCity = function (input) {
        return this.http.get(this.statisticUrl + '/findparkings/' + input);
    };
    StatisticsService.prototype.getBestParkingsByStreet = function (input) {
        return this.http.get(this.statisticUrl + '/findbestparkingsbystreet/' + input);
    };
    StatisticsService.prototype.getParkingsStreet = function (input) {
        return this.http.get(this.statisticUrl + '/findparkingstreets/' + input);
    };
    StatisticsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], StatisticsService);
    return StatisticsService;
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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
    apiUrl: 'https://smartparkingserver.herokuapp.com',
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
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