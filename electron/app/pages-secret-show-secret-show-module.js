(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-secret-show-secret-show-module"],{

/***/ "./src/app/pages/secret-show/secret-show.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/secret-show/secret-show.module.ts ***!
  \*********************************************************/
/*! exports provided: SecretShowPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecretShowPageModule", function() { return SecretShowPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");
/* harmony import */ var _secret_show_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./secret-show.page */ "./src/app/pages/secret-show/secret-show.page.ts");









// import { SecretValidatePageModule } from '../secret-validate/secret-validate.module'
var routes = [
    {
        path: '',
        component: _secret_show_page__WEBPACK_IMPORTED_MODULE_6__["SecretShowPage"]
    }
];
var SecretShowPageModule = /** @class */ (function () {
    function SecretShowPageModule() {
    }
    SecretShowPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SecretShowPageModule });
    SecretShowPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function SecretShowPageModule_Factory(t) { return new (t || SecretShowPageModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"]]] });
    return SecretShowPageModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SecretShowPageModule, { declarations: [_secret_show_page__WEBPACK_IMPORTED_MODULE_6__["SecretShowPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SecretShowPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"]],
                declarations: [_secret_show_page__WEBPACK_IMPORTED_MODULE_6__["SecretShowPage"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/secret-show/secret-show.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/secret-show/secret-show.page.ts ***!
  \*******************************************************/
/*! exports provided: SecretShowPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecretShowPage", function() { return SecretShowPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants/constants */ "./src/app/constants/constants.ts");
/* harmony import */ var _services_device_device_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/device/device.service */ "./src/app/services/device/device.service.ts");
/* harmony import */ var _services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/error-handler/error-handler.service */ "./src/app/services/error-handler/error-handler.service.ts");
/* harmony import */ var _services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/navigation/navigation.service */ "./src/app/services/navigation/navigation.service.ts");














var SecretShowPage = /** @class */ (function () {
    function SecretShowPage(deviceService, navigationService, alertController, translateService) {
        this.deviceService = deviceService;
        this.navigationService = navigationService;
        this.alertController = alertController;
        this.translateService = translateService;
        this.startTime = new Date();
        this.secret = this.navigationService.getState().secret;
    }
    SecretShowPage.prototype.ionViewDidEnter = function () {
        this.deviceService.enableScreenshotProtection({ routeBack: 'secret-create' });
    };
    SecretShowPage.prototype.ionViewWillLeave = function () {
        this.deviceService.disableScreenshotProtection();
    };
    SecretShowPage.prototype.goToValidateSecret = function () {
        var _this = this;
        if (this.startTime.getTime() + _constants_constants__WEBPACK_IMPORTED_MODULE_5__["SHOW_SECRET_MIN_TIME_IN_SECONDS"] * 1000 > new Date().getTime()) {
            this.translateService
                .get([
                'secret-show.too-fast_alert.title',
                'secret-show.too-fast_alert.heading',
                'secret-show.too-fast_alert.text',
                'secret-show.too-fast_alert.wait_label_p1',
                'secret-show.too-fast_alert.wait_label_p2'
            ])
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
                .subscribe(function (values) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                var title, heading, text, waitLabelP1, waitLabelP2, alert;
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            title = values['secret-show.too-fast_alert.title'];
                            heading = values['secret-show.too-fast_alert.heading'];
                            text = values['secret-show.too-fast_alert.text'];
                            waitLabelP1 = values['secret-show.too-fast_alert.wait_label_p1'];
                            waitLabelP2 = values['secret-show.too-fast_alert.wait_label_p2'];
                            return [4 /*yield*/, this.alertController.create({
                                    header: title,
                                    message: [
                                        heading,
                                        '<br/>',
                                        text,
                                        '<br/>',
                                        waitLabelP1,
                                        '<strong>',
                                        _constants_constants__WEBPACK_IMPORTED_MODULE_5__["SHOW_SECRET_MIN_TIME_IN_SECONDS"].toString(),
                                        waitLabelP2,
                                        '</strong>'
                                    ].join(''),
                                    buttons: ['Okay']
                                })];
                        case 1:
                            alert = _a.sent();
                            alert.present().catch(Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_7__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_7__["ErrorCategory"].IONIC_ALERT));
                            return [2 /*return*/];
                    }
                });
            }); });
        }
        else {
            this.navigationService
                .routeWithState('secret-validate', { secret: this.secret })
                .catch(Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_7__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_7__["ErrorCategory"].IONIC_NAVIGATION));
        }
    };
    SecretShowPage.ɵfac = function SecretShowPage_Factory(t) { return new (t || SecretShowPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_device_device_service__WEBPACK_IMPORTED_MODULE_6__["DeviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_8__["NavigationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"])); };
    SecretShowPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SecretShowPage, selectors: [["airgap-secret-show"]], decls: 17, vars: 10, consts: [["no-border", ""], ["slot", "start"], ["defaultHref", "/secret-create"], [1, "ion-padding", "colored-background"], [1, "ion-padding-bottom"], [1, "typography--mono"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed"], ["shape", "round", "color", "primary", 3, "click"]], template: function SecretShowPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-back-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-content", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h6", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-fab", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SecretShowPage_Template_ion_button_click_14_listener() { return ctx.goToValidateSecret(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 4, "secret-show.title"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 6, "secret-show.text"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.secret.recoverMnemonicFromHex(ctx.secret.secretHex));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 8, "secret-show.next-step_label"), " ");
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonFab"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]], styles: [".typography--mono[_ngcontent-%COMP%] {\n  text-transform: lowercase;\n  line-height: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWtyYW1iaHVzaGFuL0RvY3VtZW50cy9Cb0JvL3ZhdWx0L3NyYy9hcHAvcGFnZXMvc2VjcmV0LXNob3cvc2VjcmV0LXNob3cucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zZWNyZXQtc2hvdy9zZWNyZXQtc2hvdy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLGlCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zZWNyZXQtc2hvdy9zZWNyZXQtc2hvdy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudHlwb2dyYXBoeS0tbW9ubyB7XG4gIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xufVxuIiwiLnR5cG9ncmFwaHktLW1vbm8ge1xuICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xuICBsaW5lLWhlaWdodDogMzJweDtcbn0iXX0= */"] });
    return SecretShowPage;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SecretShowPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'airgap-secret-show',
                templateUrl: './secret-show.page.html',
                styleUrls: ['./secret-show.page.scss']
            }]
    }], function () { return [{ type: _services_device_device_service__WEBPACK_IMPORTED_MODULE_6__["DeviceService"] }, { type: _services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_8__["NavigationService"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-secret-show-secret-show-module.js.map