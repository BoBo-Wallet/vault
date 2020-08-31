(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-account-address-account-address-module"],{

/***/ "./src/app/pages/account-address/account-address.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/account-address/account-address.module.ts ***!
  \*****************************************************************/
/*! exports provided: AccountAddressPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountAddressPageModule", function() { return AccountAddressPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _account_address_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./account-address.page */ "./src/app/pages/account-address/account-address.page.ts");
/* harmony import */ var _account_edit_popover_account_edit_popover_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./account-edit-popover/account-edit-popover.component */ "./src/app/pages/account-address/account-edit-popover/account-edit-popover.component.ts");











var routes = [
    {
        path: '',
        component: _account_address_page__WEBPACK_IMPORTED_MODULE_7__["AccountAddressPage"]
    }
];
var AccountAddressPageModule = /** @class */ (function () {
    function AccountAddressPageModule() {
    }
    AccountAddressPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AccountAddressPageModule });
    AccountAddressPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AccountAddressPageModule_Factory(t) { return new (t || AccountAddressPageModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"]]] });
    return AccountAddressPageModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AccountAddressPageModule, { declarations: [_account_address_page__WEBPACK_IMPORTED_MODULE_7__["AccountAddressPage"], _account_edit_popover_account_edit_popover_component__WEBPACK_IMPORTED_MODULE_8__["AccountEditPopoverComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AccountAddressPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                entryComponents: [_account_edit_popover_account_edit_popover_component__WEBPACK_IMPORTED_MODULE_8__["AccountEditPopoverComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"]],
                declarations: [_account_address_page__WEBPACK_IMPORTED_MODULE_7__["AccountAddressPage"], _account_edit_popover_account_edit_popover_component__WEBPACK_IMPORTED_MODULE_8__["AccountEditPopoverComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/account-address/account-address.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/account-address/account-address.page.ts ***!
  \***************************************************************/
/*! exports provided: AccountAddressPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountAddressPage", function() { return AccountAddressPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _services_clipboard_clipboard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/clipboard/clipboard.service */ "./src/app/services/clipboard/clipboard.service.ts");
/* harmony import */ var _services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/error-handler/error-handler.service */ "./src/app/services/error-handler/error-handler.service.ts");
/* harmony import */ var _services_interaction_interaction_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/interaction/interaction.service */ "./src/app/services/interaction/interaction.service.ts");
/* harmony import */ var _services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/navigation/navigation.service */ "./src/app/services/navigation/navigation.service.ts");
/* harmony import */ var _services_secrets_secrets_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/secrets/secrets.service */ "./src/app/services/secrets/secrets.service.ts");
/* harmony import */ var _services_share_url_share_url_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/share-url/share-url.service */ "./src/app/services/share-url/share-url.service.ts");
/* harmony import */ var _account_edit_popover_account_edit_popover_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./account-edit-popover/account-edit-popover.component */ "./src/app/pages/account-address/account-edit-popover/account-edit-popover.component.ts");
/* harmony import */ var _components_identicon_identicon_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/identicon/identicon.component */ "./src/app/components/identicon/identicon.component.ts");
/* harmony import */ var _components_currency_symbol_currency_symbol_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/currency-symbol/currency-symbol.component */ "./src/app/components/currency-symbol/currency-symbol.component.ts");
/* harmony import */ var _components_qr_clipboard_qr_clipboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/qr-clipboard/qr-clipboard.component */ "./src/app/components/qr-clipboard/qr-clipboard.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");





















var AccountAddressPage = /** @class */ (function () {
    function AccountAddressPage(popoverCtrl, clipboardService, secretsService, shareUrlService, interactionService, navigationService) {
        this.popoverCtrl = popoverCtrl;
        this.clipboardService = clipboardService;
        this.secretsService = secretsService;
        this.shareUrlService = shareUrlService;
        this.interactionService = interactionService;
        this.navigationService = navigationService;
        this.wallet = this.navigationService.getState().wallet;
    }
    AccountAddressPage.prototype.ngOnInit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.shareUrlService.generateShareURL(this.wallet)];
                    case 1:
                        _a.walletShareUrl = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AccountAddressPage.prototype.done = function () {
        this.navigationService.routeToAccountsTab().catch(Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["ErrorCategory"].IONIC_NAVIGATION));
    };
    AccountAddressPage.prototype.share = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.interactionService.startInteraction({
                    operationType: _services_interaction_interaction_service__WEBPACK_IMPORTED_MODULE_5__["InteractionOperationType"].WALLET_SYNC,
                    url: this.walletShareUrl
                }, this.secretsService.getActiveSecret());
                return [2 /*return*/];
            });
        });
    };
    AccountAddressPage.prototype.presentEditPopover = function (event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var popover;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverCtrl.create({
                            component: _account_edit_popover_account_edit_popover_component__WEBPACK_IMPORTED_MODULE_9__["AccountEditPopoverComponent"],
                            componentProps: {
                                wallet: this.wallet,
                                walletShareUrl: this.walletShareUrl,
                                onDelete: function () {
                                    _this.navigationService.back();
                                }
                            },
                            event: event,
                            translucent: true
                        })];
                    case 1:
                        popover = _a.sent();
                        return [2 /*return*/, popover.present().catch(Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["ErrorCategory"].IONIC_ALERT))];
                }
            });
        });
    };
    AccountAddressPage.prototype.copyAddressToClipboard = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.clipboardService.copyAndShowToast(this.wallet.receivingPublicAddress)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AccountAddressPage.ɵfac = function AccountAddressPage_Factory(t) { return new (t || AccountAddressPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_clipboard_clipboard_service__WEBPACK_IMPORTED_MODULE_3__["ClipboardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_secrets_secrets_service__WEBPACK_IMPORTED_MODULE_7__["SecretsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_share_url_share_url_service__WEBPACK_IMPORTED_MODULE_8__["ShareUrlService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_interaction_interaction_service__WEBPACK_IMPORTED_MODULE_5__["InteractionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_6__["NavigationService"])); };
    AccountAddressPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AccountAddressPage, selectors: [["airgap-account-address"]], decls: 40, vars: 25, consts: [["no-border", ""], ["slot", "start"], ["defaultHref", "/tabs/tab-accounts"], ["slot", "primary"], [3, "click"], ["slot", "icon-only", "name", "ellipsis-vertical"], [1, "ion-padding"], [3, "address"], [3, "symbol"], [1, "ion-no-margin"], [1, "selectable", "typography--mono", 3, "click"], [1, "selectable", "typography--mono"], [1, "ion-justify-content-center", "ion-padding-bottom"], [3, "qrdata", "shouldPrefixSingleQrWithUrl", "level", "size"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed"], ["color", "light", "shape", "round", 3, "click"], ["color", "primary", "shape", "round", 3, "click"]], template: function AccountAddressPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-back-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-buttons", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AccountAddressPage_Template_ion_button_click_8_listener($event) { return ctx.presentEditPopover($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "ion-icon", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-content", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-row", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-col");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-avatar");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "airgap-identicon", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "airgap-currency-symbol", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-col");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "h2", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AccountAddressPage_Template_span_click_23_listener() { return ctx.copyAddressToClipboard(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](27, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "span", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "ion-row", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "airgap-qr-clipboard", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "ion-fab", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "ion-button", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AccountAddressPage_Template_ion_button_click_34_listener() { return ctx.share(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](36, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "ion-button", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AccountAddressPage_Template_ion_button_click_37_listener() { return ctx.done(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](39, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 15, "wallet-address.title"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("address", ctx.wallet.receivingPublicAddress);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("symbol", ctx.wallet.protocol.symbol);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx.wallet.protocol.name, " ", ctx.wallet.protocol.symbol, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](21, 17, "wallet-address.address_label"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.wallet.receivingPublicAddress);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](27, 19, "wallet-address.path_label"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.wallet.derivationPath);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("qrdata", ctx.wallet.receivingPublicAddress)("shouldPrefixSingleQrWithUrl", false)("level", "L")("size", 300);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](36, 21, "wallet-address.sync_label"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](39, 23, "wallet-address.done_label"), " ");
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonAvatar"], _components_identicon_identicon_component__WEBPACK_IMPORTED_MODULE_10__["IdenticonComponent"], _components_currency_symbol_currency_symbol_component__WEBPACK_IMPORTED_MODULE_11__["CurrencySymbolComponent"], _components_qr_clipboard_qr_clipboard_component__WEBPACK_IMPORTED_MODULE_12__["QrClipboardComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonFab"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslatePipe"]], styles: ["airgap-currency-symbol[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 32px;\n  width: 32px;\n  left: 40px;\n  top: 40px;\n}\n\nairgap-identicon[_ngcontent-%COMP%], airgap-identicon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], ion-avatar[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWtyYW1iaHVzaGFuL0RvY3VtZW50cy9Cb0JvL3ZhdWx0L3NyYy9hcHAvcGFnZXMvYWNjb3VudC1hZGRyZXNzL2FjY291bnQtYWRkcmVzcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2FjY291bnQtYWRkcmVzcy9hY2NvdW50LWFkZHJlc3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FDQ0Y7O0FEQ0E7OztFQUdFLFdBQUE7RUFDQSxZQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hY2NvdW50LWFkZHJlc3MvYWNjb3VudC1hZGRyZXNzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFpcmdhcC1jdXJyZW5jeS1zeW1ib2wge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMzJweDtcbiAgd2lkdGg6IDMycHg7XG4gIGxlZnQ6IDQwcHg7XG4gIHRvcDogNDBweDtcbn1cbmFpcmdhcC1pZGVudGljb24sXG5haXJnYXAtaWRlbnRpY29uIGltZyxcbmlvbi1hdmF0YXIge1xuICB3aWR0aDogNjRweDtcbiAgaGVpZ2h0OiA2NHB4O1xufVxuIiwiYWlyZ2FwLWN1cnJlbmN5LXN5bWJvbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAzMnB4O1xuICB3aWR0aDogMzJweDtcbiAgbGVmdDogNDBweDtcbiAgdG9wOiA0MHB4O1xufVxuXG5haXJnYXAtaWRlbnRpY29uLFxuYWlyZ2FwLWlkZW50aWNvbiBpbWcsXG5pb24tYXZhdGFyIHtcbiAgd2lkdGg6IDY0cHg7XG4gIGhlaWdodDogNjRweDtcbn0iXX0= */"] });
    return AccountAddressPage;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AccountAddressPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'airgap-account-address',
                templateUrl: './account-address.page.html',
                styleUrls: ['./account-address.page.scss']
            }]
    }], function () { return [{ type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] }, { type: _services_clipboard_clipboard_service__WEBPACK_IMPORTED_MODULE_3__["ClipboardService"] }, { type: _services_secrets_secrets_service__WEBPACK_IMPORTED_MODULE_7__["SecretsService"] }, { type: _services_share_url_share_url_service__WEBPACK_IMPORTED_MODULE_8__["ShareUrlService"] }, { type: _services_interaction_interaction_service__WEBPACK_IMPORTED_MODULE_5__["InteractionService"] }, { type: _services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_6__["NavigationService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/account-address/account-edit-popover/account-edit-popover.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/account-address/account-edit-popover/account-edit-popover.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: AccountEditPopoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountEditPopoverComponent", function() { return AccountEditPopoverComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_clipboard_clipboard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/clipboard/clipboard.service */ "./src/app/services/clipboard/clipboard.service.ts");
/* harmony import */ var _services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/error-handler/error-handler.service */ "./src/app/services/error-handler/error-handler.service.ts");
/* harmony import */ var _services_secrets_secrets_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/secrets/secrets.service */ "./src/app/services/secrets/secrets.service.ts");













var AccountEditPopoverComponent = /** @class */ (function () {
    function AccountEditPopoverComponent(alertCtrl, clipboardService, secretsService, popoverController, translateService) {
        this.alertCtrl = alertCtrl;
        this.clipboardService = clipboardService;
        this.secretsService = secretsService;
        this.popoverController = popoverController;
        this.translateService = translateService;
    }
    AccountEditPopoverComponent.prototype.copyAddressToClipboard = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.clipboardService.copyAndShowToast(this.wallet.receivingPublicAddress, this.translateService.instant('wallet-edit-delete-popover.confirm_address_copy'))];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.popoverController.dismiss()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AccountEditPopoverComponent.prototype.copyShareUrlToClipboard = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.clipboardService.copyAndShowToast(this.walletShareUrl, this.translateService.instant('wallet-edit-delete-popover.confirm_sync_code_copy'))];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.popoverController.dismiss()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AccountEditPopoverComponent.prototype.delete = function () {
        var _this = this;
        this.translateService
            .get([
            'wallet-edit-delete-popover.account-removal_alert.title',
            'wallet-edit-delete-popover.account-removal_alert.text',
            'wallet-edit-delete-popover.account-removal_alert.cancel_label',
            'wallet-edit-delete-popover.account-removal_alert.delete_label'
        ])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (values) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            var title, message, cancelButton, deleteButton, alert;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        title = values['wallet-edit-delete-popover.account-removal_alert.title'];
                        message = values['wallet-edit-delete-popover.account-removal_alert.text'];
                        cancelButton = values['wallet-edit-delete-popover.account-removal_alert.cancel_label'];
                        deleteButton = values['wallet-edit-delete-popover.account-removal_alert.delete_label'];
                        return [4 /*yield*/, this.alertCtrl.create({
                                header: title,
                                message: message,
                                buttons: [
                                    {
                                        text: cancelButton,
                                        role: 'cancel',
                                        handler: function () {
                                            _this.popoverController.dismiss().catch(Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["ErrorCategory"].IONIC_ALERT));
                                        }
                                    },
                                    {
                                        text: deleteButton,
                                        handler: function () {
                                            alert.present().catch(Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["ErrorCategory"].IONIC_ALERT));
                                            _this.secretsService
                                                .removeWallet(_this.wallet)
                                                .then(function () {
                                                _this.popoverController.dismiss().catch(Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["ErrorCategory"].IONIC_ALERT));
                                                if (_this.onDelete) {
                                                    _this.onDelete();
                                                }
                                            })
                                                .catch(Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["ErrorCategory"].SECURE_STORAGE));
                                        }
                                    }
                                ]
                            })];
                    case 1:
                        alert = _a.sent();
                        alert.present().catch(Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["ErrorCategory"].IONIC_ALERT));
                        return [2 /*return*/];
                }
            });
        }); });
    };
    AccountEditPopoverComponent.ɵfac = function AccountEditPopoverComponent_Factory(t) { return new (t || AccountEditPopoverComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_clipboard_clipboard_service__WEBPACK_IMPORTED_MODULE_5__["ClipboardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_secrets_secrets_service__WEBPACK_IMPORTED_MODULE_7__["SecretsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"])); };
    AccountEditPopoverComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AccountEditPopoverComponent, selectors: [["airgap-account-edit-popover"]], decls: 17, vars: 12, consts: [["lines", "none", 1, "ion-no-padding", "ion-no-margin"], ["button", "", "detail", "false", 3, "click"], ["name", "clipboard-outline", "color", "dark", "slot", "end"], ["name", "trash", "color", "dark", "slot", "end"]], template: function AccountEditPopoverComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-list", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-list-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-item", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AccountEditPopoverComponent_Template_ion_item_click_5_listener() { return ctx.copyAddressToClipboard(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "ion-icon", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-item", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AccountEditPopoverComponent_Template_ion_item_click_9_listener() { return ctx.copyShareUrlToClipboard(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "ion-icon", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-item", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AccountEditPopoverComponent_Template_ion_item_click_13_listener() { return ctx.delete(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "ion-icon", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 4, "wallet-edit-delete-popover.settings_label"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 6, "wallet-edit-delete-popover.copy_label"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 8, "wallet-edit-delete-popover.copy_sync_code"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 10, "wallet-edit-delete-popover.account-removal_alert.delete_label"), " ");
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonListHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonIcon"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FjY291bnQtYWRkcmVzcy9hY2NvdW50LWVkaXQtcG9wb3Zlci9hY2NvdW50LWVkaXQtcG9wb3Zlci5jb21wb25lbnQuc2NzcyJ9 */"] });
    return AccountEditPopoverComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AccountEditPopoverComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'airgap-account-edit-popover',
                templateUrl: 'account-edit-popover.component.html',
                styleUrls: ['./account-edit-popover.component.scss']
            }]
    }], function () { return [{ type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }, { type: _services_clipboard_clipboard_service__WEBPACK_IMPORTED_MODULE_5__["ClipboardService"] }, { type: _services_secrets_secrets_service__WEBPACK_IMPORTED_MODULE_7__["SecretsService"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-account-address-account-address-module.js.map