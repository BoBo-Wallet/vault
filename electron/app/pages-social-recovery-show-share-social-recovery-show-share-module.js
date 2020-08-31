(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-social-recovery-show-share-social-recovery-show-share-module"],{

/***/ "./src/app/pages/social-recovery-show-share/social-recovery-show-share.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/social-recovery-show-share/social-recovery-show-share.module.ts ***!
  \***************************************************************************************/
/*! exports provided: SocialRecoveryShowSharePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialRecoveryShowSharePageModule", function() { return SocialRecoveryShowSharePageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _social_recovery_show_share_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./social-recovery-show-share.page */ "./src/app/pages/social-recovery-show-share/social-recovery-show-share.page.ts");










var routes = [
    {
        path: '',
        component: _social_recovery_show_share_page__WEBPACK_IMPORTED_MODULE_7__["SocialRecoveryShowSharePage"]
    }
];
var SocialRecoveryShowSharePageModule = /** @class */ (function () {
    function SocialRecoveryShowSharePageModule() {
    }
    SocialRecoveryShowSharePageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SocialRecoveryShowSharePageModule });
    SocialRecoveryShowSharePageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function SocialRecoveryShowSharePageModule_Factory(t) { return new (t || SocialRecoveryShowSharePageModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"]]] });
    return SocialRecoveryShowSharePageModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SocialRecoveryShowSharePageModule, { declarations: [_social_recovery_show_share_page__WEBPACK_IMPORTED_MODULE_7__["SocialRecoveryShowSharePage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SocialRecoveryShowSharePageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"]],
                declarations: [_social_recovery_show_share_page__WEBPACK_IMPORTED_MODULE_7__["SocialRecoveryShowSharePage"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/social-recovery-show-share/social-recovery-show-share.page.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/social-recovery-show-share/social-recovery-show-share.page.ts ***!
  \*************************************************************************************/
/*! exports provided: SocialRecoveryShowSharePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialRecoveryShowSharePage", function() { return SocialRecoveryShowSharePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_device_device_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/device/device.service */ "./src/app/services/device/device.service.ts");
/* harmony import */ var _services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/error-handler/error-handler.service */ "./src/app/services/error-handler/error-handler.service.ts");
/* harmony import */ var _services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/navigation/navigation.service */ "./src/app/services/navigation/navigation.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _components_progress_footer_progress_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/progress-footer/progress-footer.component */ "./src/app/components/progress-footer/progress-footer.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");











function SocialRecoveryShowSharePage_h6_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.shares[ctx_r0.currentShare]);
} }
var _c0 = function (a0, a1) { return { currentShare: a0, shareLength: a1 }; };
var SocialRecoveryShowSharePage = /** @class */ (function () {
    function SocialRecoveryShowSharePage(deviceService, navigationService) {
        this.deviceService = deviceService;
        this.navigationService = navigationService;
        this.shares = this.navigationService.getState().shares;
        this.secret = this.navigationService.getState().secret;
        this.currentShare = this.navigationService.getState().currentShare;
    }
    SocialRecoveryShowSharePage.prototype.ionViewDidEnter = function () {
        this.deviceService.enableScreenshotProtection({ routeBack: 'social-recovery-setup' });
    };
    SocialRecoveryShowSharePage.prototype.ionViewWillLeave = function () {
        this.deviceService.disableScreenshotProtection();
    };
    SocialRecoveryShowSharePage.prototype.back = function () {
        this.navigationService.back();
    };
    SocialRecoveryShowSharePage.prototype.next = function () {
        this.navigationService
            .routeWithState('/social-recovery-validate-share', { shares: this.shares, currentShare: this.currentShare, secret: this.secret })
            .catch(Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_2__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_2__["ErrorCategory"].IONIC_NAVIGATION));
    };
    SocialRecoveryShowSharePage.ɵfac = function SocialRecoveryShowSharePage_Factory(t) { return new (t || SocialRecoveryShowSharePage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_device_device_service__WEBPACK_IMPORTED_MODULE_1__["DeviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_3__["NavigationService"])); };
    SocialRecoveryShowSharePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SocialRecoveryShowSharePage, selectors: [["airgap-social-recovery-show-share"]], decls: 15, vars: 17, consts: [["no-border", ""], [1, "ion-padding"], [1, "font--weight__med", "ion-padding-bottom"], [1, "ion-padding-bottom"], ["class", "typography--mono", 4, "ngIf"], ["no-border", "", "color", "primary"], [3, "progress", "maxProgress", "rightAction"], [1, "typography--mono"]], template: function SocialRecoveryShowSharePage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-content", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SocialRecoveryShowSharePage_h6_12_Template, 2, 1, "h6", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ion-footer", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "airgap-progress-footer", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 7, "social-recovery-show-share.title"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 9, "social-recovery-show-share.secret-shares_label", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](14, _c0, ctx.currentShare + 1, ctx.shares == null ? null : ctx.shares.length)), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 12, "social-recovery-show-share.text"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.shares);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("progress", ctx.currentShare * 2)("maxProgress", ctx.shares.length * 2)("rightAction", ctx.next.bind(ctx));
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonFooter"], _components_progress_footer_progress_footer_component__WEBPACK_IMPORTED_MODULE_6__["ProgressFooterComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]], styles: [".typography--mono[_ngcontent-%COMP%] {\n  line-height: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWtyYW1iaHVzaGFuL0RvY3VtZW50cy9Cb0JvL3ZhdWx0L3NyYy9hcHAvcGFnZXMvc29jaWFsLXJlY292ZXJ5LXNob3ctc2hhcmUvc29jaWFsLXJlY292ZXJ5LXNob3ctc2hhcmUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zb2NpYWwtcmVjb3Zlcnktc2hvdy1zaGFyZS9zb2NpYWwtcmVjb3Zlcnktc2hvdy1zaGFyZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc29jaWFsLXJlY292ZXJ5LXNob3ctc2hhcmUvc29jaWFsLXJlY292ZXJ5LXNob3ctc2hhcmUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnR5cG9ncmFwaHktLW1vbm8ge1xuICBsaW5lLWhlaWdodDogMzJweDtcbn1cbiIsIi50eXBvZ3JhcGh5LS1tb25vIHtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG59Il19 */"] });
    return SocialRecoveryShowSharePage;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocialRecoveryShowSharePage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'airgap-social-recovery-show-share',
                templateUrl: './social-recovery-show-share.page.html',
                styleUrls: ['./social-recovery-show-share.page.scss']
            }]
    }], function () { return [{ type: _services_device_device_service__WEBPACK_IMPORTED_MODULE_1__["DeviceService"] }, { type: _services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_3__["NavigationService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-social-recovery-show-share-social-recovery-show-share-module.js.map