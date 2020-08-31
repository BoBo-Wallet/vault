(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-social-recovery-validate-share-social-recovery-validate-share-module"],{

/***/ "./src/app/pages/social-recovery-validate-share/social-recovery-validate-share.module.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/social-recovery-validate-share/social-recovery-validate-share.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: SocialRecoveryValidateSharePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialRecoveryValidateSharePageModule", function() { return SocialRecoveryValidateSharePageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _social_recovery_validate_share_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./social-recovery-validate-share.page */ "./src/app/pages/social-recovery-validate-share/social-recovery-validate-share.page.ts");










var routes = [
    {
        path: '',
        component: _social_recovery_validate_share_page__WEBPACK_IMPORTED_MODULE_7__["SocialRecoveryValidateSharePage"]
    }
];
var SocialRecoveryValidateSharePageModule = /** @class */ (function () {
    function SocialRecoveryValidateSharePageModule() {
    }
    SocialRecoveryValidateSharePageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SocialRecoveryValidateSharePageModule });
    SocialRecoveryValidateSharePageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function SocialRecoveryValidateSharePageModule_Factory(t) { return new (t || SocialRecoveryValidateSharePageModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"]]] });
    return SocialRecoveryValidateSharePageModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SocialRecoveryValidateSharePageModule, { declarations: [_social_recovery_validate_share_page__WEBPACK_IMPORTED_MODULE_7__["SocialRecoveryValidateSharePage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SocialRecoveryValidateSharePageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"]],
                declarations: [_social_recovery_validate_share_page__WEBPACK_IMPORTED_MODULE_7__["SocialRecoveryValidateSharePage"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/social-recovery-validate-share/social-recovery-validate-share.page.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/social-recovery-validate-share/social-recovery-validate-share.page.ts ***!
  \*********************************************************************************************/
/*! exports provided: SocialRecoveryValidateSharePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialRecoveryValidateSharePage", function() { return SocialRecoveryValidateSharePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _components_verify_key_verify_key_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/verify-key/verify-key.component */ "./src/app/components/verify-key/verify-key.component.ts");
/* harmony import */ var _services_device_device_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/device/device.service */ "./src/app/services/device/device.service.ts");
/* harmony import */ var _services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/error-handler/error-handler.service */ "./src/app/services/error-handler/error-handler.service.ts");
/* harmony import */ var _services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/navigation/navigation.service */ "./src/app/services/navigation/navigation.service.ts");
/* harmony import */ var _services_secrets_secrets_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/secrets/secrets.service */ "./src/app/services/secrets/secrets.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _components_progress_footer_progress_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/progress-footer/progress-footer.component */ "./src/app/components/progress-footer/progress-footer.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");















var _c0 = ["verify"];
function SocialRecoveryValidateSharePage_airgap_verify_key_9_Template(rf, ctx) { if (rf & 1) {
    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "airgap-verify-key", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onComplete", function SocialRecoveryValidateSharePage_airgap_verify_key_9_Template_airgap_verify_key_onComplete_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onComplete($event); })("onContinue", function SocialRecoveryValidateSharePage_airgap_verify_key_9_Template_airgap_verify_key_onContinue_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onContinue(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("secret", ctx_r0.shares[ctx_r0.currentShare]);
} }
var SocialRecoveryValidateSharePage = /** @class */ (function () {
    function SocialRecoveryValidateSharePage(deviceService, navigationService, secretsService) {
        this.deviceService = deviceService;
        this.navigationService = navigationService;
        this.secretsService = secretsService;
        this.validated = false;
        this.shares = this.navigationService.getState().shares;
        this.secret = this.navigationService.getState().secret;
        this.currentShare = this.navigationService.getState().currentShare;
    }
    SocialRecoveryValidateSharePage.prototype.ionViewDidEnter = function () {
        this.deviceService.enableScreenshotProtection({ routeBack: 'social-recovery-setup' });
    };
    SocialRecoveryValidateSharePage.prototype.ionViewWillLeave = function () {
        this.deviceService.disableScreenshotProtection();
    };
    SocialRecoveryValidateSharePage.prototype.onComplete = function (isCorrect) {
        this.validated = isCorrect;
    };
    SocialRecoveryValidateSharePage.prototype.onContinue = function () {
        this.next.bind(this)();
    };
    SocialRecoveryValidateSharePage.prototype.back = function () {
        this.navigationService.back();
    };
    SocialRecoveryValidateSharePage.prototype.next = function () {
        var _this = this;
        if (this.shares.length === this.currentShare + 1) {
            this.secret.hasSocialRecovery = true;
            this.secretsService
                .addOrUpdateSecret(this.secret)
                .then(function () {
                // TODO: Route back to secret detail page
                _this.navigationService.route('/tabs/tab-settings').catch(Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["ErrorCategory"].IONIC_NAVIGATION));
            })
                .catch(Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["ErrorCategory"].SECURE_STORAGE));
        }
        else {
            this.navigationService
                .routeWithState('/social-recovery-show-share', { shares: this.shares, currentShare: this.currentShare + 1, secret: this.secret })
                .catch(Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["ErrorCategory"].IONIC_NAVIGATION));
        }
    };
    SocialRecoveryValidateSharePage.ɵfac = function SocialRecoveryValidateSharePage_Factory(t) { return new (t || SocialRecoveryValidateSharePage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_device_device_service__WEBPACK_IMPORTED_MODULE_2__["DeviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_4__["NavigationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_secrets_secrets_service__WEBPACK_IMPORTED_MODULE_5__["SecretsService"])); };
    SocialRecoveryValidateSharePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SocialRecoveryValidateSharePage, selectors: [["airgap-social-recovery-validate-share"]], viewQuery: function SocialRecoveryValidateSharePage_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.verify = _t.first);
        } }, decls: 12, vars: 12, consts: [["no-border", ""], [1, "ion-padding-horizontal"], [3, "secret", "onComplete", "onContinue", 4, "ngIf"], ["no-border", "", "color", "primary"], [3, "rightEnabled", "progress", "maxProgress", "rightAction", "rightLabel"], [3, "secret", "onComplete", "onContinue"], ["verify", ""]], template: function SocialRecoveryValidateSharePage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-content");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SocialRecoveryValidateSharePage_airgap_verify_key_9_Template, 2, 1, "airgap-verify-key", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ion-footer", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "airgap-progress-footer", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 8, "social-recovery-validate-share.title"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 10, "social-recovery-validate-share.text"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.shares);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rightEnabled", ctx.validated)("progress", ctx.currentShare * 2 + 1)("maxProgress", ctx.shares.length * 2)("rightAction", ctx.next.bind(ctx))("rightLabel", ctx.shares.length - 1 === ctx.currentShare ? "Finish" : "Next");
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonFooter"], _components_progress_footer_progress_footer_component__WEBPACK_IMPORTED_MODULE_8__["ProgressFooterComponent"], _components_verify_key_verify_key_component__WEBPACK_IMPORTED_MODULE_1__["VerifyKeyComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NvY2lhbC1yZWNvdmVyeS12YWxpZGF0ZS1zaGFyZS9zb2NpYWwtcmVjb3ZlcnktdmFsaWRhdGUtc2hhcmUucGFnZS5zY3NzIn0= */"] });
    return SocialRecoveryValidateSharePage;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocialRecoveryValidateSharePage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'airgap-social-recovery-validate-share',
                templateUrl: './social-recovery-validate-share.page.html',
                styleUrls: ['./social-recovery-validate-share.page.scss']
            }]
    }], function () { return [{ type: _services_device_device_service__WEBPACK_IMPORTED_MODULE_2__["DeviceService"] }, { type: _services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_4__["NavigationService"] }, { type: _services_secrets_secrets_service__WEBPACK_IMPORTED_MODULE_5__["SecretsService"] }]; }, { verify: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['verify']
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=pages-social-recovery-validate-share-social-recovery-validate-share-module.js.map