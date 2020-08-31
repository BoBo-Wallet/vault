(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-secret-generate-secret-generate-module"],{

/***/ "./src/app/pages/secret-generate/secret-generate.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/secret-generate/secret-generate.module.ts ***!
  \*****************************************************************/
/*! exports provided: SecretGeneratePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecretGeneratePageModule", function() { return SecretGeneratePageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _secret_generate_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./secret-generate.page */ "./src/app/pages/secret-generate/secret-generate.page.ts");










var routes = [
    {
        path: '',
        component: _secret_generate_page__WEBPACK_IMPORTED_MODULE_7__["SecretGeneratePage"]
    }
];
var SecretGeneratePageModule = /** @class */ (function () {
    function SecretGeneratePageModule() {
    }
    SecretGeneratePageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SecretGeneratePageModule });
    SecretGeneratePageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function SecretGeneratePageModule_Factory(t) { return new (t || SecretGeneratePageModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"]]] });
    return SecretGeneratePageModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SecretGeneratePageModule, { declarations: [_secret_generate_page__WEBPACK_IMPORTED_MODULE_7__["SecretGeneratePage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SecretGeneratePageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"]],
                declarations: [_secret_generate_page__WEBPACK_IMPORTED_MODULE_7__["SecretGeneratePage"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/secret-generate/secret-generate.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/secret-generate/secret-generate.page.ts ***!
  \***************************************************************/
/*! exports provided: SecretGeneratePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecretGeneratePage", function() { return SecretGeneratePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _components_touch_entropy_touch_entropy_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/touch-entropy/touch-entropy.component */ "./src/app/components/touch-entropy/touch-entropy.component.ts");
/* harmony import */ var _models_secret__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/secret */ "./src/app/models/secret.ts");
/* harmony import */ var _services_audio_audio_native_servive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/audio/audio.native.servive */ "./src/app/services/audio/audio.native.servive.ts");
/* harmony import */ var _services_camera_camera_native_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/camera/camera.native.service */ "./src/app/services/camera/camera.native.service.ts");
/* harmony import */ var _services_entropy_entropy_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/entropy/entropy.service */ "./src/app/services/entropy/entropy.service.ts");
/* harmony import */ var _services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/error-handler/error-handler.service */ "./src/app/services/error-handler/error-handler.service.ts");
/* harmony import */ var _services_gyroscope_gyroscope_native_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/gyroscope/gyroscope.native.service */ "./src/app/services/gyroscope/gyroscope.native.service.ts");
/* harmony import */ var _services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/navigation/navigation.service */ "./src/app/services/navigation/navigation.service.ts");
/* harmony import */ var _services_permissions_permissions_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/permissions/permissions.service */ "./src/app/services/permissions/permissions.service.ts");
/* harmony import */ var _components_entropy_progress_entropy_progress_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/entropy-progress/entropy-progress.component */ "./src/app/components/entropy-progress/entropy-progress.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");

























var _c0 = ["videoElement"];
var _c1 = ["touchEntropy"];
function SecretGeneratePage_video_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "video", 19, 20);
} }
var SecretGeneratePage = /** @class */ (function () {
    function SecretGeneratePage(gyroService, entropyService, cameraService, audioService, navigationService, platform, changeDetectorRef, permissionsService) {
        var _this = this;
        this.gyroService = gyroService;
        this.entropyService = entropyService;
        this.cameraService = cameraService;
        this.audioService = audioService;
        this.navigationService = navigationService;
        this.platform = platform;
        this.changeDetectorRef = changeDetectorRef;
        this.permissionsService = permissionsService;
        this.isBrowser = false;
        this.cameraEnabled = true;
        this.audioEnabled = true;
        this.gyroEnabled = true;
        this.touchEnabled = true;
        this.ENTROPY_STARTUP_TIME = 5;
        this.startupTimeWaited = false;
        this.entropy = {
            isFull: false
        };
        this.isBrowser = !this.platform.is('hybrid');
        if (!this.isBrowser) {
            this.cameraService.setTransparentElementsByTags('ion-toolbar', 'ion-content');
        }
        setTimeout(function () {
            _this.startupTimeWaited = true;
            _this.checkEntropySourceStatus();
        }, this.ENTROPY_STARTUP_TIME * 1000);
    }
    SecretGeneratePage.prototype.checkEntropySourceStatus = function () {
        if (this.startupTimeWaited) {
            this.audioEnabled = this.audioService.getCollectedEntropyPercentage() !== 0;
            this.cameraEnabled = this.cameraService.getCollectedEntropyPercentage() !== 0;
            this.gyroEnabled = this.gyroService.getCollectedEntropyPercentage() !== 0;
            // Touch will never be disabled
        }
    };
    SecretGeneratePage.prototype.ngOnInit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.platform.ready()];
                    case 1:
                        _a.sent();
                        if (this.isBrowser) {
                            this.cameraService.setVideoElement(this.videoElement);
                        }
                        this.cameraService.viewWillEnter();
                        return [4 /*yield*/, this.permissionsService.requestPermissions([_services_permissions_permissions_service__WEBPACK_IMPORTED_MODULE_12__["PermissionTypes"].CAMERA, _services_permissions_permissions_service__WEBPACK_IMPORTED_MODULE_12__["PermissionTypes"].MICROPHONE])];
                    case 2:
                        _a.sent();
                        this.initEntropy();
                        return [2 /*return*/];
                }
            });
        });
    };
    SecretGeneratePage.prototype.initEntropy = function () {
        var _this = this;
        this.entropyService.addEntropySource(this.cameraService);
        this.entropyService.addEntropySource(this.audioService);
        this.entropyService.addEntropySource(this.gyroService);
        this.entropyService.addEntropySource(this.touchEntropy);
        this.entropyService
            .startEntropyCollection()
            .then(function () {
            _this.entropyService
                .getEntropyUpdateObservable()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["auditTime"])(200))
                .subscribe(function () {
                _this.checkEntropy();
            });
        })
            .catch(Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_9__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_9__["ErrorCategory"].ENTROPY_COLLECTION));
    };
    SecretGeneratePage.prototype.checkEntropy = function () {
        this.changeDetectorRef.detectChanges();
        this.checkEntropySourceStatus();
        var enabledSources = [this.audioEnabled, this.cameraEnabled, this.gyroEnabled, this.touchEnabled];
        var percentageNeeded = enabledSources.reduce(function (previous, isEnabled) { return previous + (isEnabled ? 100 : 0); }, 0);
        if (Math.min(100, this.audioService.getCollectedEntropyPercentage()) +
            Math.min(100, this.cameraService.getCollectedEntropyPercentage()) +
            Math.min(100, this.gyroService.getCollectedEntropyPercentage()) +
            Math.min(100, this.touchEntropy.getCollectedEntropyPercentage()) >=
            percentageNeeded) {
            this.entropy.isFull = true;
        }
    };
    SecretGeneratePage.prototype.ionViewWillLeave = function () {
        this.cameraService.viewWillLeave();
    };
    SecretGeneratePage.prototype.ionViewDidLeave = function () {
        this.entropyService.stopEntropyCollection().catch(Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_9__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_9__["ErrorCategory"].ENTROPY_COLLECTION));
    };
    SecretGeneratePage.prototype.goToSecretRulesPage = function () {
        var _this = this;
        this.entropyService
            .getEntropyAsHex()
            .then(function (hashHex) {
            var secret = new _models_secret__WEBPACK_IMPORTED_MODULE_5__["Secret"](hashHex);
            _this.navigationService.routeWithState('secret-rules', { secret: secret }).catch(Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_9__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_9__["ErrorCategory"].IONIC_NAVIGATION));
        })
            .catch(Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_9__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_9__["ErrorCategory"].ENTROPY_COLLECTION));
    };
    SecretGeneratePage.ɵfac = function SecretGeneratePage_Factory(t) { return new (t || SecretGeneratePage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_gyroscope_gyroscope_native_service__WEBPACK_IMPORTED_MODULE_10__["GyroscopeNativeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_entropy_entropy_service__WEBPACK_IMPORTED_MODULE_8__["EntropyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_camera_camera_native_service__WEBPACK_IMPORTED_MODULE_7__["CameraNativeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_audio_audio_native_servive__WEBPACK_IMPORTED_MODULE_6__["AudioNativeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_11__["NavigationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_permissions_permissions_service__WEBPACK_IMPORTED_MODULE_12__["PermissionsService"])); };
    SecretGeneratePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SecretGeneratePage, selectors: [["airgap-secret-generate"]], viewQuery: function SecretGeneratePage_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c1, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.videoElement = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.touchEntropy = _t.first);
        } }, decls: 35, vars: 28, consts: [["no-border", ""], ["slot", "start"], ["defaultHref", "/secret-create"], [1, "ion-padding"], ["touchEntropy", ""], ["id", "entropy-description"], [1, "ion-padding-top"], [1, "ion-text-center"], ["color", "white", "src", "assets/icons/md-videocam.svg"], ["id", "entropy-video", 3, "maxValue", "value"], ["color", "white", "src", "assets/icons/md-mic.svg"], ["id", "entropy-audio", 3, "maxValue", "value"], ["color", "white", "src", "assets/icons/md-screen_rotation.svg"], ["id", "entropy-gyro", 3, "maxValue", "value"], ["color", "white", "src", "assets/icons/md-touch_app.svg"], ["id", "entropy-touch", 3, "maxValue", "value"], ["style", "width: 100%", 4, "ngIf"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed"], ["color", "primary", "shape", "round", 3, "disabled", "click"], [2, "width", "100%"], ["videoElement", ""]], template: function SecretGeneratePage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-back-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-content", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "airgap-touch-entropy", null, 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-row");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ion-col", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "ion-icon", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "airgap-entropy-progress", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ion-col", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "ion-icon", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "airgap-entropy-progress", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "ion-col", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "ion-icon", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "airgap-entropy-progress", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "ion-col", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "ion-icon", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "airgap-entropy-progress", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, SecretGeneratePage_video_30_Template, 2, 0, "video", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "ion-fab", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "ion-button", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SecretGeneratePage_Template_ion_button_click_32_listener() { return ctx.goToSecretRulesPage(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](34, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 20, "secret-generate.heading"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 22, "secret-generate.text"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 24, "secret-generate.description"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("opacity", ctx.cameraEnabled ? "1" : "0.2");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("maxValue", 100)("value", ctx.cameraService.getCollectedEntropyPercentage());
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("opacity", ctx.audioEnabled ? "1" : "0.2");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("maxValue", 100)("value", ctx.audioService.getCollectedEntropyPercentage());
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("opacity", ctx.gyroEnabled ? "1" : "0.2");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("maxValue", 100)("value", ctx.gyroService.getCollectedEntropyPercentage());
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("maxValue", 100)("value", _r0.getCollectedEntropyPercentage());
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isBrowser);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.entropy.isFull);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](34, 26, "secret-generate.continue_label"), " ");
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _components_touch_entropy_touch_entropy_component__WEBPACK_IMPORTED_MODULE_4__["TouchEntropyComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonIcon"], _components_entropy_progress_entropy_progress_component__WEBPACK_IMPORTED_MODULE_13__["EntropyProgressComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonFab"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslatePipe"]], styles: ["ion-content[_ngcontent-%COMP%] {\n  --overflow: hidden;\n}\n\n.bar-button[_ngcontent-%COMP%], .content[_ngcontent-%COMP%] {\n  color: white;\n}\n\ndiv#overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  min-width: 100%;\n  min-height: 100%;\n  width: auto;\n  height: auto;\n  z-index: -99;\n  transform: translateX(-50%) translateY(-50%);\n  background: white;\n  \n}\n\nvideo#bgvid[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  min-width: 100%;\n  min-height: 100%;\n  width: auto;\n  height: auto;\n  z-index: -100;\n  transform: translateX(-50%) translateY(-50%);\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWtyYW1iaHVzaGFuL0RvY3VtZW50cy9Cb0JvL3ZhdWx0L3NyYy9hcHAvcGFnZXMvc2VjcmV0LWdlbmVyYXRlL3NlY3JldC1nZW5lcmF0ZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NlY3JldC1nZW5lcmF0ZS9zZWNyZXQtZ2VuZXJhdGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUNDRjs7QURFQTs7RUFFRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFJQSw0Q0FBQTtFQUNBLGlCQUFBO0VBQW1CLHdDQUFBO0FDRXJCOztBRENBO0VBQ0UsZUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBSUEsNENBQUE7RUFDQSxzQkFBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2VjcmV0LWdlbmVyYXRlL3NlY3JldC1nZW5lcmF0ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIC0tb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmJhci1idXR0b24sXG4uY29udGVudCB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuZGl2I292ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbiAgei1pbmRleDogLTk5O1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTsgLypyZ2JhKGNvbG9yKCRjb2xvcnMsIHNlY29uZGFyeSksIDAuNSk7Ki9cbn1cblxudmlkZW8jYmd2aWQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbiAgei1pbmRleDogLTEwMDtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbiIsImlvbi1jb250ZW50IHtcbiAgLS1vdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uYmFyLWJ1dHRvbixcbi5jb250ZW50IHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5kaXYjb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xuICB6LWluZGV4OiAtOTk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICAvKnJnYmEoY29sb3IoJGNvbG9ycywgc2Vjb25kYXJ5KSwgMC41KTsqL1xufVxuXG52aWRlbyNiZ3ZpZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xuICB6LWluZGV4OiAtMTAwO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufSJdfQ== */"] });
    return SecretGeneratePage;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SecretGeneratePage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'airgap-secret-generate',
                templateUrl: './secret-generate.page.html',
                styleUrls: ['./secret-generate.page.scss']
            }]
    }], function () { return [{ type: _services_gyroscope_gyroscope_native_service__WEBPACK_IMPORTED_MODULE_10__["GyroscopeNativeService"] }, { type: _services_entropy_entropy_service__WEBPACK_IMPORTED_MODULE_8__["EntropyService"] }, { type: _services_camera_camera_native_service__WEBPACK_IMPORTED_MODULE_7__["CameraNativeService"] }, { type: _services_audio_audio_native_servive__WEBPACK_IMPORTED_MODULE_6__["AudioNativeService"] }, { type: _services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_11__["NavigationService"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _services_permissions_permissions_service__WEBPACK_IMPORTED_MODULE_12__["PermissionsService"] }]; }, { videoElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['videoElement']
        }], touchEntropy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['touchEntropy', { static: true }]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=pages-secret-generate-secret-generate-module.js.map