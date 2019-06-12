webpackJsonp([7],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddGroupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AddGroupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddGroupPage = /** @class */ (function () {
    function AddGroupPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AddGroupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddGroupPage');
    };
    AddGroupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-group',template:/*ion-inline-start:"/Users/altutar/Desktop/hackathon/milleniaires-app/src/pages/add-group/add-group.html"*/'<!--\n  Generated template for the AddGroupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Add Group</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form>\n    <ion-list>\n      <ion-item>\n        <ion-label>Title</ion-label>\n        <ion-input type="text"> </ion-input>\n      </ion-item>\n      <ion-item>\n          <ion-label>Connections:</ion-label>\n          <ion-input type="text"></ion-input>\n      </ion-item>\n      <button ion-button full class="login-submit">Create Group</button>\n  </ion-list>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/altutar/Desktop/hackathon/milleniaires-app/src/pages/add-group/add-group.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], AddGroupPage);
    return AddGroupPage;
}());

//# sourceMappingURL=add-group.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ConnectionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConnectionsPage = /** @class */ (function () {
    function ConnectionsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ConnectionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-connections',template:/*ion-inline-start:"/Users/altutar/Desktop/hackathon/milleniaires-app/src/pages/connections/connections.html"*/'<!--\n  Generated template for the ConnectionsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon name="add"></ion-icon>\n      </button>\n  \n    </ion-buttons>\n    <ion-title>Connections</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card>\n\n        <ion-item>\n          <ion-avatar item-start>\n            <img src="../assets/imgs/business1.jpeg"/>\n          </ion-avatar>\n          <h2>Marty McFly</h2>\n          <p>November 5, 1955</p>\n        </ion-item>\n      \n        <ion-card-content>\n          <p>Student at Davidson College</p>\n        </ion-card-content>\n      \n        <ion-row>\n          <ion-col>\n            <button ion-button icon-start clear small>\n              <ion-icon name="thumbs-up"></ion-icon>\n              <div>9 Likes for Investments</div>\n            </button>\n          </ion-col>\n        </ion-row>\n      \n      </ion-card>\n\n\n      <ion-card>\n\n          <ion-item>\n            <ion-avatar item-start>\n              <img src="../assets/imgs/business2.jpg"/>\n            </ion-avatar>\n            <h2>Han Solo</h2>\n            <p>November 7, 1985</p>\n          </ion-item>\n        \n          <ion-card-content>\n            <p>Student at Davidson College</p>\n          </ion-card-content>\n        \n          <ion-row>\n            <ion-col>\n              <button ion-button icon-start clear small>\n                <ion-icon name="thumbs-up"></ion-icon>\n                <div>100 Likes for Investments</div>\n              </button>\n            </ion-col>\n          </ion-row>\n        \n        </ion-card>\n\n        <ion-card>\n\n            <ion-item>\n              <ion-avatar item-start>\n                <img src="../assets/imgs/business3.jpg"/>\n              </ion-avatar>\n              <h2>Ellen Ripley</h2>\n              <p>September 19, 1985</p>\n            </ion-item>\n          \n            <ion-card-content>\n              <p>Student at Davidson College</p>\n            </ion-card-content>\n          \n            <ion-row>\n              <ion-col>\n                <button ion-button icon-start clear small>\n                  <ion-icon name="thumbs-up"></ion-icon>\n                  <div>5 Likes for Investments</div>\n                </button>\n              </ion-col>\n            </ion-row>\n          \n          </ion-card>\n\n\n          <ion-card>\n\n              <ion-item>\n                <ion-avatar item-start>\n                  <img src="../assets/imgs/business4.jpg"/>\n                </ion-avatar>\n                <h2>Sarah Connor</h2>\n                <p>January 19, 1990</p>\n              </ion-item>\n            \n              <ion-card-content>\n                <p>Student at Davidson College</p>\n              </ion-card-content>\n            \n              <ion-row>\n                <ion-col>\n                  <button ion-button icon-start clear small>\n                    <ion-icon name="thumbs-up"></ion-icon>\n                    <div>31 Likes for Investments</div>\n                  </button>\n                </ion-col>\n              </ion-row>\n            \n            </ion-card>\n\n            <ion-card>\n\n                <ion-item>\n                  <ion-avatar item-start>\n                    <img src="../assets/imgs/business5.jpg"/>\n                  </ion-avatar>\n                  <h2>Laurie Strode</h2>\n                  <p>March 19, 1967</p>\n                </ion-item>\n              \n                <ion-card-content>\n                  <p>Student at Davidson College</p>\n                </ion-card-content>\n              \n                <ion-row>\n                  <ion-col>\n                    <button ion-button icon-start clear small>\n                      <ion-icon name="thumbs-up"></ion-icon>\n                      <div>9 Likes for Investments</div>\n                    </button>\n                  </ion-col>\n                </ion-row>\n              \n              </ion-card>\n  \n\n\n      \n\n</ion-content>\n'/*ion-inline-end:"/Users/altutar/Desktop/hackathon/milleniaires-app/src/pages/connections/connections.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ConnectionsPage);
    return ConnectionsPage;
}());

//# sourceMappingURL=connections.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__groups_groups__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__connections_connections__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DashboardPage = /** @class */ (function () {
    function DashboardPage(navCtrl, navParams, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.groupsPage = __WEBPACK_IMPORTED_MODULE_2__groups_groups__["a" /* GroupsPage */];
        this.connectionsPage = __WEBPACK_IMPORTED_MODULE_3__connections_connections__["a" /* ConnectionsPage */];
    }
    DashboardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DashboardPage');
    };
    DashboardPage.prototype.loadPage = function (page) {
        this.navCtrl.push(page);
        this.menuCtrl.close();
    };
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dashboard',template:/*ion-inline-start:"/Users/altutar/Desktop/hackathon/milleniaires-app/src/pages/dashboard/dashboard.html"*/'<!--\n  Generated template for the DashboardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button icon-only icon-left menuToggle>\n          <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-content class="card-background-page">\n       <ion-card  (click)="loadPage(groupsPage)">\n        <img src="../assets/imgs/nasa.jpg"/>\n        <div class="card-title">Groups</div>\n        <div class="card-subtitle">3 Listings</div>\n        </ion-card>\n\n        <ion-card  (click)="loadPage(connectionsPage)">\n            <img src="../assets/imgs/connections.jpg"/>\n            <div class="card-title">Connections</div>\n            <div class="card-subtitle">5 Connections</div>\n        </ion-card>\n\n        <ion-card>\n            <img src="../assets/imgs/business.jpg"/>\n            <div class="card-title">Newsfeed</div>\n        </ion-card>\n    </ion-content>\n</ion-content>\n\n\n'/*ion-inline-end:"/Users/altutar/Desktop/hackathon/milleniaires-app/src/pages/dashboard/dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_group_add_group__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__examplepage_examplepage__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the GroupsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GroupsPage = /** @class */ (function () {
    function GroupsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.addGroupPage = __WEBPACK_IMPORTED_MODULE_2__add_group_add_group__["a" /* AddGroupPage */];
        this.examplePage = __WEBPACK_IMPORTED_MODULE_3__examplepage_examplepage__["a" /* ExamplepagePage */];
    }
    GroupsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GroupsPage');
    };
    GroupsPage.prototype.addGroup = function () {
        this.navCtrl.push(this.addGroupPage);
    };
    GroupsPage.prototype.loadPage = function () {
        this.navCtrl.push(this.examplePage);
    };
    GroupsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-groups',template:/*ion-inline-start:"/Users/altutar/Desktop/hackathon/milleniaires-app/src/pages/groups/groups.html"*/'<!--\n  Generated template for the GroupsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <ion-buttons end>\n          <button ion-button icon-only (click)="addGroup()">\n            <ion-icon name="add"></ion-icon>\n          </button>\n      \n        </ion-buttons>\n        <ion-title>Groups</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-card (click)="loadPage()">\n      <ion-card-header>\n        Davidson College Junior Class\n      </ion-card-header>\n    \n      <ion-list>\n        <button ion-item>\n          <ion-icon name="ios-cash-outline" item-start></ion-icon>\n            -2.7%\n        </button>    \n      </ion-list>\n    </ion-card>\n\n    <ion-card>\n        <ion-card-header>\n          Davidson College Investment Club\n        </ion-card-header>\n      \n        <ion-list>\n          <button ion-item>\n            <ion-icon name="ios-cash-outline" item-start></ion-icon>\n            -15.6%\n          </button>    \n        </ion-list>\n      </ion-card>\n\n      <ion-card>\n          <ion-card-header>\n            Davidson Invest Green\n          </ion-card-header>\n        \n          <ion-list>\n            <button ion-item>\n              <ion-icon name="ios-cash-outline" item-start></ion-icon>\n              +12.6%\n            </button>    \n          </ion-list>\n        </ion-card>\n    \n    \n    \n\n</ion-content>\n'/*ion-inline-end:"/Users/altutar/Desktop/hackathon/milleniaires-app/src/pages/groups/groups.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], GroupsPage);
    return GroupsPage;
}());

//# sourceMappingURL=groups.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExamplepagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ExamplepagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ExamplepagePage = /** @class */ (function () {
    function ExamplepagePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ExamplepagePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ExamplepagePage');
    };
    ExamplepagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-examplepage',template:/*ion-inline-start:"/Users/altutar/Desktop/hackathon/milleniaires-app/src/pages/examplepage/examplepage.html"*/'<!--\n  Generated template for the ExamplepagePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Davidson College Junior Class</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card>\n        <img src="../assets/imgs/stockmarket.png"/>\n    </ion-card>\n\n    <ion-card>\n        <ion-card-header>\n         Apple Inc.\n        </ion-card-header>\n      \n        <ion-list>\n          <button ion-item>\n            <ion-icon name="ios-cash-outline" item-start></ion-icon>\n            -2.7%\n          </button>    \n        </ion-list>\n      </ion-card>\n\n      <ion-card>\n\n          <ion-item>\n            <ion-avatar item-start>\n              <img src="../assets/imgs/business4.jpg"/>\n            </ion-avatar>\n            <h2>Sarah Connor</h2>\n            <p>January 19, 1990</p>\n          </ion-item>\n        \n          <ion-card-content>\n            <p>Student at Davidson College</p>\n          </ion-card-content>\n        \n          <ion-row>\n            <ion-col>\n              <button ion-button icon-start clear small>\n                <ion-icon name="thumbs-up"></ion-icon>\n                <div>31 Likes for Investments</div>\n              </button>\n            </ion-col>\n          </ion-row>\n        \n        </ion-card>\n\n        <ion-card>\n\n            <ion-item>\n\n              <ion-avatar item-start>\n                <img src="../assets/imgs/business5.jpg"/>\n              </ion-avatar>\n              <h2>Laurie Strode</h2>\n              <p>March 19, 1967</p>\n            </ion-item>\n          \n            <ion-card-content>\n              <p>Student at Davidson College</p>\n            </ion-card-content>\n          \n            <ion-row>\n              <ion-col>\n                <button ion-button icon-start clear small>\n                  <ion-icon name="thumbs-up"></ion-icon>\n                  <div>9 Likes for Investments</div>\n                </button>\n              </ion-col>\n            </ion-row>\n          \n        </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/altutar/Desktop/hackathon/milleniaires-app/src/pages/examplepage/examplepage.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ExamplepagePage);
    return ExamplepagePage;
}());

//# sourceMappingURL=examplepage.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signin_signin__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the LoadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoadPage = /** @class */ (function () {
    function LoadPage(navController) {
        var _this = this;
        this.navController = navController;
        this.signupPage = __WEBPACK_IMPORTED_MODULE_2__signin_signin__["a" /* SigninPage */];
        this.timer = setTimeout(function () { _this.navController.push(__WEBPACK_IMPORTED_MODULE_2__signin_signin__["a" /* SigninPage */]); }, 5000);
    }
    LoadPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-load',template:/*ion-inline-start:"/Users/altutar/Desktop/hackathon/milleniaires-app/src/pages/load/load.html"*/'<!--\n  Generated template for the LoadPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content padding>\n    <ion-icon name="custom-logo"></ion-icon>\n    <ion-spinner name="circles"></ion-spinner>\n</ion-content>\n'/*ion-inline-end:"/Users/altutar/Desktop/hackathon/milleniaires-app/src/pages/load/load.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], LoadPage);
    return LoadPage;
}());

//# sourceMappingURL=load.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SigninPage = /** @class */ (function () {
    function SigninPage(navCtrl, navParams, alertCtrl, loadingCtrl, facebookCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.facebookCtrl = facebookCtrl;
    }
    SigninPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SigninPage');
    };
    SigninPage.prototype.login = function (form) {
        var loading = this.loadingCtrl.create({
            content: 'Signing you in...'
        });
        loading.present();
        console.log(form.value);
        if (form.value.email != "madays@davidson.edu") {
            loading.dismiss();
            var alert_1 = this.alertCtrl.create({
                title: 'Wrong username!',
                buttons: ['Ok']
            });
            alert_1.present();
        }
        else if (form.value.password != '0000') {
            loading.dismiss();
            var alert_2 = this.alertCtrl.create({
                title: 'Wrong password!',
                buttons: ['Ok']
            });
            alert_2.present();
        }
        else {
            loading.dismiss();
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__["a" /* DashboardPage */]);
        }
    };
    SigninPage.prototype.loginFacebook = function () {
        // let provider = new firebase.auth.FacebookAuthProvider();
        // firebase.auth().signInWithRedirect(provider).then(() => {
        //   firebase.auth().getRedirectResult().then((result) => {
        //     alert(JSON.stringify(result));
        //   }).catch(function(error) {
        //     alert(JSON.stringify(error))
        //   });
        // });
        this.facebookCtrl.login(["email"]).then(function (suc) {
            var credential = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth.FacebookAuthProvider.credential(suc.authResponse.accessToken);
            __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().signInWithCredential(credential).then(function (info) {
                alert(JSON.stringify(info));
            });
        });
    };
    SigninPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signin',template:/*ion-inline-start:"/Users/altutar/Desktop/hackathon/milleniaires-app/src/pages/signin/signin.html"*/'<!--\n  Generated template for the SigninPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<script>window.top.location = \'https://apps.facebook.com/yourappnamespace/\';</script>"\n\n<ion-header>\n    <ion-navbar hideBackButton="true">\n    </ion-navbar>\n  </ion-header>\n  \n  \n  <ion-content padding class = "getstart">\n      <ion-icon name="custom-logo" class="company-logo"></ion-icon>\n      <form #f="ngForm" (ngSubmit) = "login(f)">\n        <ion-list class="login-form">\n          <ion-list-header>\n              <ion-label> <ion-icon class = "login" name="ios-person-outline"></ion-icon></ion-label>\n              <ion-input clearInput type="email" ngModel name="email" required></ion-input>\n          </ion-list-header>\n          <ion-list-header>\n              <ion-label> <ion-icon class = "login" name="ios-unlock-outline"></ion-icon></ion-label>\n              <ion-input clearInput type="password" ngModel name="password" required></ion-input>\n          </ion-list-header>\n        </ion-list>\n        <button ion-button full type="submit" class="login-submit">Login</button>\n        <button ion-button full class="register-submit">Register</button>\n        <button ion-button block (click) = "loginFacebook()">Login with Facebook</button>\n      </form>\n  </ion-content>\n  '/*ion-inline-end:"/Users/altutar/Desktop/hackathon/milleniaires-app/src/pages/signin/signin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__["a" /* Facebook */]])
    ], SigninPage);
    return SigninPage;
}());

//# sourceMappingURL=signin.js.map

/***/ }),

/***/ 119:
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
webpackEmptyAsyncContext.id = 119;

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-group/add-group.module": [
		292,
		6
	],
	"../pages/connections/connections.module": [
		293,
		5
	],
	"../pages/dashboard/dashboard.module": [
		294,
		4
	],
	"../pages/examplepage/examplepage.module": [
		295,
		3
	],
	"../pages/groups/groups.module": [
		296,
		2
	],
	"../pages/load/load.module": [
		297,
		1
	],
	"../pages/signin/signin.module": [
		298,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 160;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(229);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_load_load__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_signin_signin__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_dashboard_dashboard__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_groups_groups__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_connections_connections__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_add_group_add_group__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_examplepage_examplepage__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_facebook__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_firebase__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var firebaseConfig = {
    apiKey: "AIzaSyAbeLYe8obSBUkCXPqkg38bG2NPOkjA168",
    authDomain: "ionic2-millenniaires.firebaseapp.com",
    databaseURL: "https://ionic2-millenniaires.firebaseio.com",
    projectId: "ionic2-millenniaires",
    storageBucket: "ionic2-millenniaires.appspot.com",
    messagingSenderId: "337248717211"
};
__WEBPACK_IMPORTED_MODULE_15_firebase___default.a.initializeApp(firebaseConfig);
// firebase.initializeApp({
//   apiKey: "AIzaSyAbeLYe8obSBUkCXPqkg38bG2NPOkjA168",
//   authDomain: "ionic2-millenniaires.firebaseapp.com",
//   databaseURL: "https://ionic2-millenniaires.firebaseio.com",
//   projectId: "ionic2-millenniaires",
//   storageBucket: "ionic2-millenniaires.appspot.com",
//   messagingSenderId: "337248717211"
// });
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_load_load__["a" /* LoadPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_groups_groups__["a" /* GroupsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_connections_connections__["a" /* ConnectionsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_add_group_add_group__["a" /* AddGroupPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_examplepage_examplepage__["a" /* ExamplepagePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-group/add-group.module#AddGroupPageModule', name: 'AddGroupPage', segment: 'add-group', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/connections/connections.module#ConnectionsPageModule', name: 'ConnectionsPage', segment: 'connections', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/examplepage/examplepage.module#ExamplepagePageModule', name: 'ExamplepagePage', segment: 'examplepage', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/groups/groups.module#GroupsPageModule', name: 'GroupsPage', segment: 'groups', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/load/load.module#LoadPageModule', name: 'LoadPage', segment: 'load', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signin/signin.module#SigninPageModule', name: 'SigninPage', segment: 'signin', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_load_load__["a" /* LoadPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_groups_groups__["a" /* GroupsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_connections_connections__["a" /* ConnectionsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_add_group_add_group__["a" /* AddGroupPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_examplepage_examplepage__["a" /* ExamplepagePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_facebook__["a" /* Facebook */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_load_load__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_load_load__["a" /* LoadPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('nav'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/altutar/Desktop/hackathon/milleniaires-app/src/app/app.html"*/'<ion-menu [content] = "nav">\n <ion-header>\n    <ion-toolbar>\n        <ion-title></ion-title>\n    </ion-toolbar>\n </ion-header>\n <ion-content>\n     <ion-list>\n         <button ion-item icon-left>\n             <ion-icon name ="ios-person-outline"></ion-icon>\n             About Me\n         </button>\n        <button ion-item icon-left>\n            <ion-icon name ="ios-cog-outline"></ion-icon>\n            Settings\n        </button>\n     </ion-list>\n </ion-content>\n</ion-menu>\n\n\n\n<ion-nav [root]="rootPage" #nav></ion-nav>\n'/*ion-inline-end:"/Users/altutar/Desktop/hackathon/milleniaires-app/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/altutar/Desktop/hackathon/milleniaires-app/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Ionic Blank\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-icon name="custom-logo"></ion-icon>\n  <ion-spinner name="circles"></ion-spinner>\n</ion-content>\n'/*ion-inline-end:"/Users/altutar/Desktop/hackathon/milleniaires-app/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[206]);
//# sourceMappingURL=main.js.map