(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-transaction-detail-transaction-detail-module"],{

/***/ "./src/app/pages/transaction-detail/transaction-detail.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/transaction-detail/transaction-detail.module.ts ***!
  \***********************************************************************/
/*! exports provided: TransactionDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionDetailPageModule", function() { return TransactionDetailPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _transaction_detail_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./transaction-detail.page */ "./src/app/pages/transaction-detail/transaction-detail.page.ts");










var routes = [
    {
        path: '',
        component: _transaction_detail_page__WEBPACK_IMPORTED_MODULE_7__["TransactionDetailPage"]
    }
];
var TransactionDetailPageModule = /** @class */ (function () {
    function TransactionDetailPageModule() {
    }
    TransactionDetailPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: TransactionDetailPageModule });
    TransactionDetailPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function TransactionDetailPageModule_Factory(t) { return new (t || TransactionDetailPageModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"]]] });
    return TransactionDetailPageModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TransactionDetailPageModule, { declarations: [_transaction_detail_page__WEBPACK_IMPORTED_MODULE_7__["TransactionDetailPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TransactionDetailPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"]],
                declarations: [_transaction_detail_page__WEBPACK_IMPORTED_MODULE_7__["TransactionDetailPage"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/transaction-detail/transaction-detail.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/transaction-detail/transaction-detail.page.ts ***!
  \*********************************************************************/
/*! exports provided: TransactionDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionDetailPage", function() { return TransactionDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _bobo_wallet_coin_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bobo-wallet/coin-lib */ "./node_modules/@bobo-wallet/coin-lib/dist/index.js");
/* harmony import */ var _bobo_wallet_coin_lib__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_bobo_wallet_coin_lib__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bip39__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bip39 */ "./node_modules/bip39/index.js");
/* harmony import */ var bip39__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bip39__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/error-handler/error-handler.service */ "./src/app/services/error-handler/error-handler.service.ts");
/* harmony import */ var _services_interaction_interaction_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/interaction/interaction.service */ "./src/app/services/interaction/interaction.service.ts");
/* harmony import */ var _services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/navigation/navigation.service */ "./src/app/services/navigation/navigation.service.ts");
/* harmony import */ var _services_secrets_secrets_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/secrets/secrets.service */ "./src/app/services/secrets/secrets.service.ts");
/* harmony import */ var _services_serializer_serializer_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/serializer/serializer.service */ "./src/app/services/serializer/serializer.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _components_signed_transaction_signed_transaction_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/signed-transaction/signed-transaction.component */ "./src/app/components/signed-transaction/signed-transaction.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");


















// TODO: refactor multiple transactions
var TransactionDetailPage = /** @class */ (function () {
    function TransactionDetailPage(alertController, navigationService, secretsService, interactionService, serializerService) {
        this.alertController = alertController;
        this.navigationService = navigationService;
        this.secretsService = secretsService;
        this.interactionService = interactionService;
        this.serializerService = serializerService;
    }
    TransactionDetailPage.prototype.ionViewWillEnter = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var state, _a, e_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        state = this.navigationService.getState();
                        if (!state.transactionsWithWallets) return [3 /*break*/, 4];
                        this.transactionsWithWallets = state.transactionsWithWallets;
                        this.deserializedSync = state.deserializedSync;
                        console.log('deserialized sync', this.deserializedSync);
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        _a = this;
                        return [4 /*yield*/, Promise.all(this.transactionsWithWallets.map(function (pair) { return pair[1].protocol.getTransactionDetails(pair[0]); }))];
                    case 2:
                        _a.airGapTxs = (_b.sent()).reduce(function (flatten, toFlatten) { return flatten.concat(toFlatten); }, []);
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _b.sent();
                        console.log('cannot read tx details', e_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    TransactionDetailPage.prototype.signAndGoToNextPage = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var signedTxs, _a, error_1;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, Promise.all(this.transactionsWithWallets.map(function (pair) { return _this.signTransaction(pair[0], pair[1]); }))];
                    case 1:
                        signedTxs = _b.sent();
                        _a = this;
                        return [4 /*yield*/, this.generateBroadcastUrl(this.transactionsWithWallets, signedTxs)];
                    case 2:
                        _a.broadcastUrl = _b.sent();
                        this.interactionService.startInteraction({
                            operationType: _services_interaction_interaction_service__WEBPACK_IMPORTED_MODULE_5__["InteractionOperationType"].TRANSACTION_BROADCAST,
                            url: this.broadcastUrl,
                            wallets: this.transactionsWithWallets.map(function (pair) { return pair[1]; }),
                            signedTxs: signedTxs,
                            transactions: this.transactionsWithWallets.map(function (pair) { return pair[0]; })
                        }, this.secretsService.getActiveSecret());
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _b.sent();
                        console.log('Caught error: ', error_1);
                        if (error_1.message) {
                            this.showAlert('Error', error_1.message);
                        }
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    TransactionDetailPage.prototype.generateBroadcastUrl = function (transactionsWithWallets, signedTxs) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var txDetails, transactions, e_2, deserializedTxSigningRequests, serializedTx;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, Promise.all(transactionsWithWallets.map(function (pair) { return pair[1].protocol.getTransactionDetails(pair[0]); }))];
                    case 1:
                        transactions = (_a.sent()).reduce(function (flatten, toFlatten) { return flatten.concat(toFlatten); }, []);
                        console.log(transactions);
                        txDetails = transactions;
                        return [3 /*break*/, 3];
                    case 2:
                        e_2 = _a.sent();
                        Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["handleErrorLocal"])(e_2);
                        return [3 /*break*/, 3];
                    case 3:
                        if (!(txDetails && txDetails.length > 0)) return [3 /*break*/, 5];
                        deserializedTxSigningRequests = transactionsWithWallets.map(function (pair, index) { return ({
                            protocol: pair[1].protocol.identifier,
                            type: _bobo_wallet_coin_lib__WEBPACK_IMPORTED_MODULE_2__["IACMessageType"].TransactionSignResponse,
                            payload: {
                                accountIdentifier: pair[1].publicKey.substr(-6),
                                transaction: signedTxs[index],
                                from: txDetails[index].from,
                                amount: txDetails[index].amount,
                                fee: txDetails[index].fee,
                                to: txDetails[index].to
                            }
                        }); });
                        return [4 /*yield*/, this.serializerService.serialize(deserializedTxSigningRequests)];
                    case 4:
                        serializedTx = _a.sent();
                        return [2 /*return*/, "" + (transactionsWithWallets[0][0].callback || 'bobo-wallet://?d=') + serializedTx.join(',')];
                    case 5: throw new Error('Could not get transaction details');
                }
            });
        });
    };
    TransactionDetailPage.prototype.signTransaction = function (transaction, wallet) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var secret, entropy, mnemonic, _a, _b;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        secret = this.secretsService.findByPublicKey(wallet.publicKey);
                        // we should handle this case here as well
                        if (!secret) {
                            console.warn('no secret found for this public key');
                            throw new Error('no secret found for this public key');
                        }
                        return [4 /*yield*/, this.secretsService.retrieveEntropyForSecret(secret)];
                    case 1:
                        entropy = _c.sent();
                        mnemonic = bip39__WEBPACK_IMPORTED_MODULE_3__["entropyToMnemonic"](entropy);
                        return [4 /*yield*/, this.checkIfPublicKeysMatch(transaction, wallet, mnemonic, '')];
                    case 2:
                        if (_c.sent()) {
                            // Public keys match, so no BIP-39 passphrase has been set
                            return [2 /*return*/, this.sign(transaction, wallet, mnemonic, '')];
                        }
                        _a = this.sign;
                        _b = [transaction, wallet, mnemonic];
                        return [4 /*yield*/, this.showBip39PassphraseAlert()];
                    case 3: return [2 /*return*/, _a.apply(this, _b.concat([_c.sent()]))];
                }
            });
        });
    };
    TransactionDetailPage.prototype.showBip39PassphraseAlert = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                        var alert;
                        var _this = this;
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.alertController.create({
                                        header: 'BIP-39 Passphrase',
                                        message: 'If you have set a BIP-39 passphrase, please enter it here.',
                                        backdropDismiss: false,
                                        inputs: [
                                            {
                                                name: 'bip39Passphrase',
                                                type: 'password',
                                                placeholder: 'Passphrase'
                                            }
                                        ],
                                        buttons: [
                                            {
                                                text: 'Ok',
                                                handler: function (result) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                                                    var bip39Passphrase;
                                                    var _a;
                                                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                                                        bip39Passphrase = (_a = result.bip39Passphrase) !== null && _a !== void 0 ? _a : '';
                                                        resolve(bip39Passphrase);
                                                        return [2 /*return*/];
                                                    });
                                                }); }
                                            }
                                        ]
                                    })];
                                case 1:
                                    alert = _a.sent();
                                    alert.present().catch(Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["ErrorCategory"].IONIC_ALERT));
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    TransactionDetailPage.prototype.showBip39PassphraseMismatchAlert = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var alert;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'BIP-39 Passphrase',
                            message: 'Public keys do not match. Did you enter the correct BIP-39 Passphrase?',
                            backdropDismiss: false,
                            buttons: [
                                {
                                    text: 'Ok'
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        alert.present().catch(Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["ErrorCategory"].IONIC_ALERT));
                        throw new Error('Public keys do not match. Did you enter the correct BIP-39 Passphrase?');
                }
            });
        });
    };
    TransactionDetailPage.prototype.sign = function (transaction, wallet, mnemonic, bip39Passphrase) {
        if (bip39Passphrase === void 0) { bip39Passphrase = ''; }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var extendedPrivateKey, privateKey;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!wallet.isExtendedPublicKey) return [3 /*break*/, 3];
                        return [4 /*yield*/, wallet.protocol.getExtendedPrivateKeyFromMnemonic(mnemonic, wallet.derivationPath, bip39Passphrase)];
                    case 1:
                        extendedPrivateKey = _a.sent();
                        return [4 /*yield*/, this.checkIfPublicKeysMatch(transaction, wallet, mnemonic, bip39Passphrase)];
                    case 2:
                        if (!(_a.sent())) {
                            throw this.showBip39PassphraseMismatchAlert();
                        }
                        return [2 /*return*/, wallet.protocol.signWithExtendedPrivateKey(extendedPrivateKey, transaction.transaction)];
                    case 3: return [4 /*yield*/, wallet.protocol.getPrivateKeyFromMnemonic(mnemonic, wallet.derivationPath, bip39Passphrase)];
                    case 4:
                        privateKey = _a.sent();
                        return [4 /*yield*/, this.checkIfPublicKeysMatch(transaction, wallet, mnemonic, bip39Passphrase)];
                    case 5:
                        if (!(_a.sent())) {
                            throw this.showBip39PassphraseMismatchAlert();
                        }
                        return [2 /*return*/, wallet.protocol.signWithPrivateKey(privateKey, transaction.transaction)];
                }
            });
        });
    };
    TransactionDetailPage.prototype.showAlert = function (title, message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var alert;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: title,
                            message: message,
                            backdropDismiss: false,
                            buttons: [
                                {
                                    text: 'Okay!',
                                    role: 'cancel'
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        alert.present().catch(Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["ErrorCategory"].IONIC_ALERT));
                        return [2 /*return*/];
                }
            });
        });
    };
    TransactionDetailPage.prototype.checkIfPublicKeysMatch = function (transaction, wallet, mnemonic, bip39Passphrase) {
        if (bip39Passphrase === void 0) { bip39Passphrase = ''; }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var publicKey;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, wallet.protocol.getPublicKeyFromMnemonic(mnemonic, wallet.derivationPath, bip39Passphrase)];
                    case 1:
                        publicKey = _a.sent();
                        return [2 /*return*/, transaction.publicKey === publicKey];
                }
            });
        });
    };
    TransactionDetailPage.ɵfac = function TransactionDetailPage_Factory(t) { return new (t || TransactionDetailPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_9__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_6__["NavigationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_secrets_secrets_service__WEBPACK_IMPORTED_MODULE_7__["SecretsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_interaction_interaction_service__WEBPACK_IMPORTED_MODULE_5__["InteractionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_serializer_serializer_service__WEBPACK_IMPORTED_MODULE_8__["SerializerService"])); };
    TransactionDetailPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TransactionDetailPage, selectors: [["airgap-transaction-detail"]], decls: 17, vars: 10, consts: [["no-border", ""], ["slot", "start"], [1, "ion-padding"], [3, "unsignedTxs"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed"], ["color", "primary", "shape", "round", 3, "click"], ["slot", "start", "src", "assets/icons/md-check.svg"]], template: function TransactionDetailPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-back-button");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-content", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "airgap-signed-transaction", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-fab", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-button", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TransactionDetailPage_Template_ion_button_click_13_listener() { return ctx.signAndGoToNextPage(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "ion-icon", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 4, "transaction-detail.title"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 6, "transaction-detail.text"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("unsignedTxs", ctx.deserializedSync);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 8, "transaction-detail.sign-tx_label"), " ");
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonContent"], _components_signed_transaction_signed_transaction_component__WEBPACK_IMPORTED_MODULE_10__["SignedTransactionComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonFab"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonIcon"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RyYW5zYWN0aW9uLWRldGFpbC90cmFuc2FjdGlvbi1kZXRhaWwucGFnZS5zY3NzIn0= */"] });
    return TransactionDetailPage;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TransactionDetailPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'airgap-transaction-detail',
                templateUrl: './transaction-detail.page.html',
                styleUrls: ['./transaction-detail.page.scss']
            }]
    }], function () { return [{ type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["AlertController"] }, { type: _services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_6__["NavigationService"] }, { type: _services_secrets_secrets_service__WEBPACK_IMPORTED_MODULE_7__["SecretsService"] }, { type: _services_interaction_interaction_service__WEBPACK_IMPORTED_MODULE_5__["InteractionService"] }, { type: _services_serializer_serializer_service__WEBPACK_IMPORTED_MODULE_8__["SerializerService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-transaction-detail-transaction-detail-module.js.map