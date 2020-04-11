(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-expand-lg\" style=\"background:#7a107b\">\n  <a class=\"navbar-brand\" href=\"#\">\n    <img src=\"../../assets/images/me1.png\" alt=\"\" class=\"img-fluid text-center\" style=\"overflow:hidden;height:40px;width:40px;border-radius:50%\">\n  </a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\" style=\"float:left\">\n    <ul class=\" navbar-nav ml-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"/\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link disabled\" routerLink=\"topics\">Topics</a>\n      </li>\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          Dropdown\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" routerLink=\"interview\">Interview Questions</a>\n          <a class=\"dropdown-item\" href=\"#\">Another action</a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n        </div>\n      </li>\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/contact\">Contact</a>\n      </li>\n    </ul>\n    <div class=\"form-inline my-2 my-lg-0\">\n      <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n    </div>\n  </div>\n</nav>\n<div class=\"container-fluid\">\n  <router-outlet></router-outlet>\n</div>\n\n<div class=\"footer\" style=\"background:black;height:5rem;position:fixed;bottom:0px;width:100%;\">\n  <div class=\"text-center\">\n    <p style=\"color:white;padding:1rem;font-size:smaller;letter-spacing:3px\">Created and maintained by Chanda Roy</p>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/contact/contact.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/contact/contact.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container-fluid text-center\" style=\"width:100%;position:absolute\"> -->\n  <div class=\"row\">\n    <div class=\"col-sm-12\" style=\"padding:0\">\n      <div class=\"parallax\" style=\"position:absolute;margin:0;width:100%;min-height:700px;background-image:url(../../assets/images/contact.png);background-size:cover;filter:blur(3px) grayscale(0.5) brightness(0.5)\"></div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-6\" style=\"text-align:-webkit-center\">\n      <div class=\"card text-center\" style=\"padding:3rem;margin-top:3rem;background:#fffdfd66;max-width:500px\">\n        <div class=\"card-block text-center\">\n          <h5 style=\"color:white\">\n            Thanks for taking the time to reach out. <br>\n            How can I help you today?\n          </h5>\n          <form>\n            <div class=\"form-row\">\n              <div class=\"form-group col-md-12\">\n                <label for=\"inputPassword4\">Name</label>\n                <input type=\"text\" class=\"form-control\" id=\"inputPassword4\" placeholder=\"Name\">\n              </div>\n              <br>\n              <div class=\"form-group col-md-12\">\n                <label for=\"inputEmail4\">Email</label>\n                <input type=\"email\" class=\"form-control\" id=\"inputEmail4\" placeholder=\"Email\">\n              </div>\n\n              <div class=\"form-group col-md-12\">\n                <label for=\"inputAddress\">Message</label>\n                <textarea name=\"message\" class=\"form-control\"  rows=\"3\" cols=\"80\" placeholder=\"Some message\"></textarea>\n              </div>\n            </div>\n            <button type=\"submit\" class=\"btn btn-primary\" style=\"height:70px;width:70px;border-radius:35px;box-shadow:4px 2px 4px black\">Send</button><br>\n          </form>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-6\">\n      <img src=\"../../assets/images/developer.png\" alt=\"\" class=\"img-fluid text-center\" style=\"margin-top:4rem\">\n    </div>\n  </div>\n<!-- </div> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row \">\n  <div class=\"col-sm-12 parallax\" style=\"position:relative;min-height:800px;padding:0\">\n    <div class=\"parallax\" style=\"position:absolute;margin:0;width:100%;min-height:700px;background-image:url(../../assets/images/cover.png);background-size:cover;filter:grayscale(0.5) brightness(0.5)\"></div>\n    <div class=\" card text-center\" style=\"position:absolute;height:500px;width: -webkit-fill-available;margin:3rem;background:transparent;padding-top:8rem\">\n      <div class=\"imageOuter\" style=\"\">\n        <img src=\"../../assets/images/me1.png\" alt=\"\" class=\"img-fluid text-center\" style=\"overflow:hidden;height:80px;width:80px;border-radius:50%\">\n      </div>\n      <h1 class=\"text-center\" style=\"color:white;letter-spacing:4px;\">CHANDA ROY</h1>\n      <h5 class=\"text-center\" style=\"color:white;letter-spacing:7px;\">WEB DEVELOPER</h5>\n      <h6 class=\"text-center \" style=\"color:white;letter-spacing:7px;padding:1rem;\">Enthusiast, learner, coder, designer</h6>\n\n    </div>\n  </div>\n</div>\n<h4 class=\"text-center\">SOME OF MY WORKS</h4>\n<div class=\"row\">\n  <div class=\"col-sm-12 parallax\" style=\"background-image:linear-gradient(pink,white)\">\n    <div class=\"row \">\n      <div class=\"col-sm-4 gallery_item\">\n        <div class=\"card \">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">LIMBER</h5>\n            <p class=\"card-text\" title=\"An app for agile project managemen with features like, trello like project management (adding, removing team members), github integration, chat integration\">An app for agile project managemen with features like, trello like project management...</p>\n            <a href=\"https://github.com/ChandaRoy/limber\" target=\"_blank\" class=\"\">Github</a>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-4 gallery_item\">\n        <div class=\"card \">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">My Chat App</h5>\n            <p class=\"card-text\">Users can login and chat.</p>\n            <a href=\"https://github.com/ChandaRoy/mychatapp\" class=\"\" target=\"_blank\">Github</a>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-4 gallery_item\">\n        <div class=\"card \">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">Card title</h5>\n            <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n            <a href=\"#\" class=\"btn btn-primary\">Button</a>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-4 gallery_item\">\n        <div class=\"card \">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">Card title</h5>\n            <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n            <a href=\"#\" class=\"btn btn-primary\">Button</a>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-4 gallery_item\">\n        <div class=\"card \">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">Card title</h5>\n            <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n            <a href=\"#\" class=\"btn btn-primary\">Button</a>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-4 gallery_item\">\n        <div class=\"card \">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">Card title</h5>\n            <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n            <a href=\"#\" class=\"btn btn-primary\">Button</a>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-4 gallery_item\">\n        <div class=\"card \">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">Card title</h5>\n            <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n            <a href=\"#\" class=\"btn btn-primary\">Button</a>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-4 gallery_item\">\n        <div class=\"card \">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">Card title</h5>\n            <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n            <a href=\"#\" class=\"btn btn-primary\">Button</a>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-4 gallery_item\">\n        <div class=\"card \">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">Card title</h5>\n            <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n            <a href=\"#\" class=\"btn btn-primary\">Button</a>\n          </div>\n        </div>\n      </div>\n    </div>\n    <br><br>\n  </div>\n</div>\n<h3 class=\"text-center\" style=\"letter-spacing:4px\">Hobbies</h3>\n<div class=\"row\">\n  <div class=\"col-sm-12 parallax align-middle\" style=\"min-height:400px;background-image:url(../../assets/images/hobby.jpg)\">\n    <h1 class=\"float-right align-middle\" style=\"letter-spacing:4px;margin-top:4rem\">Singing</h1>\n  </div>\n  <div class=\"col-sm-12 parallax\" style=\"min-height:400px;background-image:url(../../assets/images/sky.jpg)\">\n    <h1 class=\"text-center\" style=\"letter-spacing:4px;margin-top:8rem;color:white;font-size:xxx-large\">Sky Watching</h1>\n  </div>\n  <div class=\"col-sm-12 parallax\" style=\"min-height:400px;background-image:url(../../assets/images/gardening.jpg)\">\n    <h1 class=\"text-center\" style=\"background:#092b099e;letter-spacing:4px;margin-top:8rem;color:white;font-size:xx-large\">Gardening</h1>\n  </div>\n</div>\n<br><br>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/topics/topic.component.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/topics/topic.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"home\">\n  <mat-sidenav #sidenav mode=\"over\">\n    Sidenav content\n  </mat-sidenav>\n\n  <mat-sidenav-content>\n    <div>\n      <mat-toolbar color=\"primary\">\n        <button mat-button (click)=\"sidenav.toggle()\">\n          <mat-icon>menu</mat-icon>\n        </button>\n        <mat-icon>mood</mat-icon>\n\n        <span> Yay, Material in Angular 8 !</span>\n\n        <button mat-icon-button [mat-menu-trigger-for]=\"menu\">\n          <mat-icon>more_vert</mat-icon>\n        </button>\n      </mat-toolbar>\n      <mat-menu x-position=\"before\" #menu=\"matMenu\">\n        <button mat-menu-item>Option 1</button>\n        <button mat-menu-item>Option 2</button>\n      </mat-menu>\n\n      <mat-card>\n        <button mat-button>All</button>\n        <button mat-raised-button>Of</button>\n        <button mat-raised-button color=\"primary\">The</button>\n        <button mat-raised-button color=\"accent\">Buttons</button>\n      </mat-card>\n      <mat-card>\n        <form class=\"app-form\">\n          <mat-form-field class=\"form-full-width\">\n            <input matInput placeholder=\"Favorite food\" value=\"Sushi\">\n          </mat-form-field>\n\n          <mat-form-field class=\"form-full-width\">\n            <textarea matInput placeholder=\"Leave a comment\"></textarea>\n          </mat-form-field>\n          <mat-form-field class=\"form-full-width\">\n            <input matInput placeholder=\"Email\" [formControl]=\"emailFormControl\" [errorStateMatcher]=\"matcher\">\n            <mat-hint>Errors appear instantly!</mat-hint>\n            <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\n              Please enter a valid email address\n            </mat-error>\n            <mat-error *ngIf=\"emailFormControl.hasError('required')\">\n              Email is\n              <strong>required</strong>\n            </mat-error>\n          </mat-form-field>\n        </form>\n      </mat-card>\n\n      <div class=\"table-container mat-elevation-z8\">\n        <table mat-table #table [dataSource]=\"dataSource\">\n\n          <!--- Note that these columns can be defined in any order.\n                    The actual rendered columns are set as a property on the row definition\" -->\n\n          <!-- Position Column -->\n          <ng-container matColumnDef=\"position\">\n            <th mat-header-cell *matHeaderCellDef> No. </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n          </ng-container>\n\n          <!-- Name Column -->\n          <ng-container matColumnDef=\"name\">\n            <th mat-header-cell *matHeaderCellDef> Name </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n          </ng-container>\n\n          <!-- Weight Column -->\n          <ng-container matColumnDef=\"weight\">\n            <th mat-header-cell *matHeaderCellDef> Weight </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\n          </ng-container>\n\n          <!-- Symbol Column -->\n          <ng-container matColumnDef=\"symbol\">\n            <th mat-header-cell *matHeaderCellDef> Symbol </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n          </ng-container>\n\n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n        </table>\n      </div>\n\n      <span class=\"done\">\n        <button mat-fab>\n          <mat-icon>check circle</mat-icon>\n        </button>\n      </span>\n    </div>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-link {\n  color: white !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoYW5kYXJveTExNTIwL0NoYW5kYVJveS1UZWNoQmlyZGllczEvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2LWxpbmt7XG4gIGNvbG9yOiB3aGl0ZSFpbXBvcnRhbnQ7XG59IiwiLm5hdi1saW5rIHtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let AppComponent = class AppComponent {
    constructor() { }
    ngOnInit() { }
};
AppComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_route__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.route */ "./src/app/app.route.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _topics_topic_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./topics/topic.component */ "./src/app/topics/topic.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
            _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"],
            _topics_topic_component__WEBPACK_IMPORTED_MODULE_7__["TopicsComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_route__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_8__["CoreModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/app.route.ts":
/*!******************************!*\
  !*** ./src/app/app.route.ts ***!
  \******************************/
/*! exports provided: routes, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _topics_topic_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./topics/topic.component */ "./src/app/topics/topic.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





const routes = [{
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        path: 'contact',
        component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_2__["ContactComponent"]
    },
    {
        path: 'topics',
        component: _topics_topic_component__WEBPACK_IMPORTED_MODULE_4__["TopicsComponent"]
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                enableTracing: false
            })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/contact/contact.component.scss":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".parallax {\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.card {\n  width: 100%;\n  height: 80%;\n  box-shadow: 5px 7px 8px #a29595;\n  margin-top: 30px;\n  text-align: left;\n}\n\ninput {\n  max-width: 500px;\n}\n\ntextarea {\n  max-width: 500px;\n}\n\nlabel {\n  text-align: left;\n  display: none;\n}\n\n@media only screen and (max-device-width: 768px) {\n  .parallax {\n    background-attachment: scroll;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoYW5kYXJveTExNTIwL0NoYW5kYVJveS1UZWNoQmlyZGllczEvc3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FDQ0Q7O0FEQ0E7RUFDQyxXQUFBO0VBQ0EsV0FBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0VEOztBREFBO0VBQ0MsZ0JBQUE7QUNHRDs7QUREQTtFQUNDLGdCQUFBO0FDSUQ7O0FERkE7RUFDQyxnQkFBQTtFQUNBLGFBQUE7QUNLRDs7QURIQTtFQUNDO0lBQ0MsNkJBQUE7RUNNQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhcmFsbGF4IHtcblx0YmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuLmNhcmQge1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiA4MCU7XG5cdGJveC1zaGFkb3c6IDVweCA3cHggOHB4ICNhMjk1OTU7XG5cdG1hcmdpbi10b3A6IDMwcHg7XG5cdHRleHQtYWxpZ246IGxlZnQ7XG59XG5pbnB1dCB7XG5cdG1heC13aWR0aDogNTAwcHg7XG59XG50ZXh0YXJlYSB7XG5cdG1heC13aWR0aDogNTAwcHg7XG59XG5sYWJlbCB7XG5cdHRleHQtYWxpZ246IGxlZnQ7XG5cdGRpc3BsYXk6IG5vbmU7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA3NjhweCkge1xuXHQucGFyYWxsYXgge1xuXHRcdGJhY2tncm91bmQtYXR0YWNobWVudDogc2Nyb2xsO1xuXHR9XG59XG4iLCIucGFyYWxsYXgge1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5jYXJkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogODAlO1xuICBib3gtc2hhZG93OiA1cHggN3B4IDhweCAjYTI5NTk1O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG5pbnB1dCB7XG4gIG1heC13aWR0aDogNTAwcHg7XG59XG5cbnRleHRhcmVhIHtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbn1cblxubGFiZWwge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA3NjhweCkge1xuICAucGFyYWxsYXgge1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogc2Nyb2xsO1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let ContactComponent = class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
};
ContactComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-contact',
        template: __webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/index.js!./src/app/contact/contact.component.html"),
        styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/contact/contact.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ContactComponent);



/***/ }),

/***/ "./src/app/core/app.http.interceptor.ts":
/*!**********************************************!*\
  !*** ./src/app/core/app.http.interceptor.ts ***!
  \**********************************************/
/*! exports provided: AppHttpInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppHttpInterceptor", function() { return AppHttpInterceptor; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/core/auth.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






let AppHttpInterceptor = class AppHttpInterceptor {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    intercept(request, next) {
        const authRequest = request.clone({
            setHeaders: {
                Authorization: `jwt ${this.authService.getToken()}`
            },
            url: `${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].api.rooturl}/${request.url}`
        });
        return next.handle(authRequest)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(event => {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
                // console.log(' all looks good');
                // http response status code
                // console.log(event.status);
                return event;
            }
        }, error => {
            // http response status code
            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
                // use userService to handel user login and logout
                // const userService = this.injector.get(UserService);
                if (error.status > 400 && error.status < 500) {
                    console.error('Error status code:', error);
                    // userService.logout();
                }
            }
        }));
    }
};
AppHttpInterceptor = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], AppHttpInterceptor);



/***/ }),

/***/ "./src/app/core/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/core/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
    }
    getToken() {
        return localStorage.getItem('token');
    }
    deleteToken() {
        localStorage.clear();
    }
    setAuth(user) {
        localStorage.setItem('token', user.token);
    }
};
AuthService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], AuthService);



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/core/auth.service.ts");
/* harmony import */ var _home_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.service */ "./src/app/core/home.service.ts");
/* harmony import */ var _app_http_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.http.interceptor */ "./src/app/core/app.http.interceptor.ts");
/* harmony import */ var _module_import_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./module-import-guard */ "./src/app/core/module-import-guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







let CoreModule = class CoreModule {
    constructor(parentModule) {
        Object(_module_import_guard__WEBPACK_IMPORTED_MODULE_6__["throwIfAlreadyLoaded"])(parentModule, 'CoreModule');
    }
};
CoreModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"]
        ],
        declarations: [],
        providers: [
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
                useClass: _app_http_interceptor__WEBPACK_IMPORTED_MODULE_5__["AppHttpInterceptor"],
                multi: true
            },
            _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _home_service__WEBPACK_IMPORTED_MODULE_4__["HomeService"]
        ]
    }),
    __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"])()), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["SkipSelf"])()),
    __metadata("design:paramtypes", [CoreModule])
], CoreModule);



/***/ }),

/***/ "./src/app/core/home.service.ts":
/*!**************************************!*\
  !*** ./src/app/core/home.service.ts ***!
  \**************************************/
/*! exports provided: HomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeService", function() { return HomeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let HomeService = class HomeService {
    constructor(http) {
        this.http = http;
    }
};
HomeService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], HomeService);



/***/ }),

/***/ "./src/app/core/module-import-guard.ts":
/*!*********************************************!*\
  !*** ./src/app/core/module-import-guard.ts ***!
  \*********************************************/
/*! exports provided: throwIfAlreadyLoaded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwIfAlreadyLoaded", function() { return throwIfAlreadyLoaded; });
function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(`${moduleName} has already been loaded. Import Core modules in the AppModule only.`);
    }
}


/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* @media only screen and (max-device-width: 768px) {\n  .parallax {\n    background-attachment: scroll;\n  }\n} */\n.one {\n  background-image: linear-gradient(red, black);\n  height: 370px;\n}\n.two {\n  background-image: linear-gradient(orange, black);\n  height: 370px;\n}\n.three {\n  background-image: linear-gradient(blue, black);\n  height: 370px;\n}\n.four {\n  background-image: linear-gradient(green, black);\n  height: 370px;\n}\n.overlay {\n  background-color: black;\n  opacity: 0.7;\n}\n.gallery_item {\n  height: 300px;\n  text-align: center;\n  padding: 15px;\n}\n.gallery_item .card {\n  width: 100%;\n  height: 80%;\n  box-shadow: 5px 7px 8px #a29595;\n  margin-top: 30px;\n}\n.parallax {\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoYW5kYXJveTExNTIwL0NoYW5kYVJveS1UZWNoQmlyZGllczEvc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUFBO0FBS0E7RUFDQyw2Q0FBQTtFQUNBLGFBQUE7QUNDRDtBRENBO0VBQ0MsZ0RBQUE7RUFDQSxhQUFBO0FDRUQ7QURBQTtFQUNDLDhDQUFBO0VBQ0EsYUFBQTtBQ0dEO0FEREE7RUFDQywrQ0FBQTtFQUNBLGFBQUE7QUNJRDtBREZBO0VBQ0MsdUJBQUE7RUFDQSxZQUFBO0FDS0Q7QURIQTtFQUNDLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNNRDtBRExDO0VBQ0MsV0FBQTtFQUNBLFdBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0FDT0Y7QURKQTtFQUNDLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FDT0QiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA3NjhweCkge1xuICAucGFyYWxsYXgge1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogc2Nyb2xsO1xuICB9XG59ICovXG4ub25lIHtcblx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJlZCxibGFjayk7XG5cdGhlaWdodDogMzcwcHg7XG59XG4udHdvIHtcblx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KG9yYW5nZSxibGFjayk7XG5cdGhlaWdodDogMzcwcHg7XG59XG4udGhyZWUge1xuXHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoYmx1ZSxibGFjayk7XG5cdGhlaWdodDogMzcwcHg7XG59XG4uZm91ciB7XG5cdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChncmVlbixibGFjayk7XG5cdGhlaWdodDogMzcwcHg7XG59XG4ub3ZlcmxheSB7XG5cdGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuXHRvcGFjaXR5OiAwLjc7XG59XG4uZ2FsbGVyeV9pdGVtIHtcblx0aGVpZ2h0OiAzMDBweDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRwYWRkaW5nOiAxNXB4O1xuXHQuY2FyZCB7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0aGVpZ2h0OiA4MCU7XG5cdFx0Ym94LXNoYWRvdzogNXB4IDdweCA4cHggI2EyOTU5NTtcblx0XHRtYXJnaW4tdG9wOiAzMHB4O1xuXHR9XG59XG4ucGFyYWxsYXgge1xuXHRiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4iLCIvKiBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA3NjhweCkge1xuICAucGFyYWxsYXgge1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogc2Nyb2xsO1xuICB9XG59ICovXG4ub25lIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJlZCwgYmxhY2spO1xuICBoZWlnaHQ6IDM3MHB4O1xufVxuXG4udHdvIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KG9yYW5nZSwgYmxhY2spO1xuICBoZWlnaHQ6IDM3MHB4O1xufVxuXG4udGhyZWUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoYmx1ZSwgYmxhY2spO1xuICBoZWlnaHQ6IDM3MHB4O1xufVxuXG4uZm91ciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChncmVlbiwgYmxhY2spO1xuICBoZWlnaHQ6IDM3MHB4O1xufVxuXG4ub3ZlcmxheSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBvcGFjaXR5OiAwLjc7XG59XG5cbi5nYWxsZXJ5X2l0ZW0ge1xuICBoZWlnaHQ6IDMwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG4uZ2FsbGVyeV9pdGVtIC5jYXJkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogODAlO1xuICBib3gtc2hhZG93OiA1cHggN3B4IDhweCAjYTI5NTk1O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4ucGFyYWxsYXgge1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: MyErrorStateMatcher, HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/** Error when invalid control is dirty, touched, or submitted. */
class MyErrorStateMatcher {
    isErrorState(control, form) {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}
let HomeComponent = class HomeComponent {
    constructor() {
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email,
        ]);
        this.matcher = new MyErrorStateMatcher();
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = ELEMENT_DATA;
    }
    ngOnInit() { }
};
HomeComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
        styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

const ELEMENT_DATA = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
    { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
    { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
    { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
    { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
    { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
    { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
    { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
    { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
    { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
];


/***/ }),

/***/ "./src/app/shared/material.module.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/material.module.ts ***!
  \*******************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm2015/autocomplete.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm2015/progress-bar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm2015/slider.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















let MaterialModule = class MaterialModule {
};
MaterialModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_17__["NgModule"])({
        imports: [
            _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_12__["MatSliderModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__["MatProgressBarModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_0__["MatAutocompleteModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__["MatSnackBarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatProgressSpinnerModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__["MatTooltipModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__["MatToolbarModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"]
        ],
        exports: [
            _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_12__["MatSliderModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__["MatProgressBarModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_0__["MatAutocompleteModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__["MatSnackBarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatProgressSpinnerModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__["MatTooltipModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__["MatToolbarModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"]
        ]
    })
], MaterialModule);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./material.module */ "./src/app/shared/material.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var SharedModule_1;



let SharedModule = SharedModule_1 = class SharedModule {
    static forRoot() {
        return {
            ngModule: SharedModule_1
        };
    }
};
SharedModule = SharedModule_1 = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"]
        ],
        exports: [
            _material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"]
        ]
    })
], SharedModule);



/***/ }),

/***/ "./src/app/topics/topic.component.scss":
/*!*********************************************!*\
  !*** ./src/app/topics/topic.component.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\n  max-width: 80%;\n  margin: 2em auto;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n}\n\nmat-toolbar-row {\n  justify-content: space-between;\n}\n\nmat-sidenav {\n  width: 200px;\n}\n\n.done {\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  color: white;\n}\n\n.app-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.form-full-width {\n  width: 80%;\n}\n\n.table-container {\n  display: flex;\n  flex-direction: column;\n  max-height: 500px;\n  min-width: 300px;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoYW5kYXJveTExNTIwL0NoYW5kYVJveS1UZWNoQmlyZGllczEvc3JjL2FwcC90b3BpY3MvdG9waWMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RvcGljcy90b3BpYy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSw4QkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREdBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNBRjs7QURHQTtFQUNFLFVBQUE7QUNBRjs7QURHQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC90b3BpY3MvdG9waWMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZCB7XG4gIG1heC13aWR0aDogODAlO1xuICBtYXJnaW46IDJlbSBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5tYXQtdG9vbGJhci1yb3cge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbm1hdC1zaWRlbmF2IHtcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG4uZG9uZSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAyMHB4O1xuICByaWdodDogMjBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5cbi5hcHAtZm9ybSB7XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZm9ybS1mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDgwJTtcbn1cblxuLnRhYmxlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xuICBtaW4td2lkdGg6IDMwMHB4O1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuXG4iLCJtYXQtY2FyZCB7XG4gIG1heC13aWR0aDogODAlO1xuICBtYXJnaW46IDJlbSBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5tYXQtdG9vbGJhci1yb3cge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbm1hdC1zaWRlbmF2IHtcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG4uZG9uZSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAyMHB4O1xuICByaWdodDogMjBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYXBwLWZvcm0ge1xuICBtaW4td2lkdGg6IDE1MHB4O1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZvcm0tZnVsbC13aWR0aCB7XG4gIHdpZHRoOiA4MCU7XG59XG5cbi50YWJsZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgbWluLXdpZHRoOiAzMDBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59Il19 */"

/***/ }),

/***/ "./src/app/topics/topic.component.ts":
/*!*******************************************!*\
  !*** ./src/app/topics/topic.component.ts ***!
  \*******************************************/
/*! exports provided: MyErrorStateMatcher, TopicsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicsComponent", function() { return TopicsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/** Error when invalid control is dirty, touched, or submitted. */
class MyErrorStateMatcher {
    isErrorState(control, form) {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}
let TopicsComponent = class TopicsComponent {
    constructor() {
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email,
        ]);
        this.matcher = new MyErrorStateMatcher();
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = ELEMENT_DATA;
    }
    ngOnInit() { }
};
TopicsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-topic',
        template: __webpack_require__(/*! raw-loader!./topic.component.html */ "./node_modules/raw-loader/index.js!./src/app/topics/topic.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
        styles: [__webpack_require__(/*! ./topic.component.scss */ "./src/app/topics/topic.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], TopicsComponent);

const ELEMENT_DATA = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
    { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
    { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
    { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
    { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
    { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
    { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
    { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
    { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
    { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
];


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
    production: false,
    api: {
        rooturl: 'http://localhost/api'
    }
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/chandaroy11520/ChandaRoy-TechBirdies1/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map