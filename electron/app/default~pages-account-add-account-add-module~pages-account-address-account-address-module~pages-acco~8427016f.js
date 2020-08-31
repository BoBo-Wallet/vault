(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-account-add-account-add-module~pages-account-address-account-address-module~pages-acco~8427016f"],{

/***/ "./node_modules/@download/blockies/src/blockies.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/@download/blockies/src/blockies.mjs ***!
  \**********************************************************/
/*! exports provided: renderIcon, createIcon */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderIcon", function() { return renderIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createIcon", function() { return createIcon; });
// The random number is a js implementation of the Xorshift PRNG
const randseed = new Array(4); // Xorshift: [x, y, z, w] 32 bit values

function seedrand(seed) {
	randseed.fill(0);

	for(let i = 0; i < seed.length; i++) {
		randseed[i%4] = ((randseed[i%4] << 5) - randseed[i%4]) + seed.charCodeAt(i);
	}
}

function rand() {
	// based on Java's String.hashCode(), expanded to 4 32bit values
	const t = randseed[0] ^ (randseed[0] << 11);

	randseed[0] = randseed[1];
	randseed[1] = randseed[2];
	randseed[2] = randseed[3];
	randseed[3] = (randseed[3] ^ (randseed[3] >> 19) ^ t ^ (t >> 8));

	return (randseed[3] >>> 0) / ((1 << 31) >>> 0);
}

function createColor() {
	//saturation is the whole color spectrum
	const h = Math.floor(rand() * 360);
	//saturation goes from 40 to 100, it avoids greyish colors
	const s = ((rand() * 60) + 40) + '%';
	//lightness can be anything from 0 to 100, but probabilities are a bell curve around 50%
	const l = ((rand() + rand() + rand() + rand()) * 25) + '%';

	return 'hsl(' + h + ',' + s + ',' + l + ')';
}

function createImageData(size) {
	const width = size; // Only support square icons for now
	const height = size;

	const dataWidth = Math.ceil(width / 2);
	const mirrorWidth = width - dataWidth;

	const data = [];
	for(let y = 0; y < height; y++) {
		let row = [];
		for(let x = 0; x < dataWidth; x++) {
			// this makes foreground and background color to have a 43% (1/2.3) probability
			// spot color has 13% chance
			row[x] = Math.floor(rand()*2.3);
		}
		const r = row.slice(0, mirrorWidth);
		r.reverse();
		row = row.concat(r);

		for(let i = 0; i < row.length; i++) {
			data.push(row[i]);
		}
	}

	return data;
}

function buildOpts(opts) {
	const newOpts = {};

	newOpts.seed = opts.seed || Math.floor((Math.random()*Math.pow(10,16))).toString(16);

	seedrand(newOpts.seed);

	newOpts.size = opts.size || 8;
	newOpts.scale = opts.scale || 4;
	newOpts.color = opts.color || createColor();
	newOpts.bgcolor = opts.bgcolor || createColor();
	newOpts.spotcolor = opts.spotcolor || createColor();

	return newOpts;
}

function renderIcon(opts, canvas) {
	opts = buildOpts(opts || {});
	const imageData = createImageData(opts.size);
	const width = Math.sqrt(imageData.length);

	canvas.width = canvas.height = opts.size * opts.scale;

	const cc = canvas.getContext('2d');
	cc.fillStyle = opts.bgcolor;
	cc.fillRect(0, 0, canvas.width, canvas.height);
	cc.fillStyle = opts.color;

	for(let i = 0; i < imageData.length; i++) {

		// if data is 0, leave the background
		if(imageData[i]) {
			const row = Math.floor(i / width);
			const col = i % width;

			// if data is 2, choose spot color, if 1 choose foreground
			cc.fillStyle = (imageData[i] == 1) ? opts.color : opts.spotcolor;

			cc.fillRect(col * opts.scale, row * opts.scale, opts.scale, opts.scale);
		}
	}

	return canvas;
}

function createIcon(opts) {
	var canvas = document.createElement('canvas');

	renderIcon(opts, canvas);

	return canvas;
}


/***/ }),

/***/ "./node_modules/angularx-qrcode/__ivy_ngcc__/dist/angularx-qrcode.module.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/angularx-qrcode/__ivy_ngcc__/dist/angularx-qrcode.module.js ***!
  \**********************************************************************************/
/*! exports provided: QRCodeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QRCodeModule", function() { return QRCodeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ "./node_modules/angularx-qrcode/__ivy_ngcc__/dist/components/index.js");

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var QRCodeModule = /** @class */ (function () {
    function QRCodeModule() {
    }
QRCodeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: QRCodeModule });
QRCodeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function QRCodeModule_Factory(t) { return new (t || QRCodeModule)(); }, providers: [] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](QRCodeModule, { declarations: function () { return [_components__WEBPACK_IMPORTED_MODULE_1__["QRCodeComponent"]]; }, exports: function () { return [_components__WEBPACK_IMPORTED_MODULE_1__["QRCodeComponent"]]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QRCodeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                providers: [],
                declarations: [
                    _components__WEBPACK_IMPORTED_MODULE_1__["QRCodeComponent"],
                ],
                exports: [
                    _components__WEBPACK_IMPORTED_MODULE_1__["QRCodeComponent"],
                ]
            }]
    }], function () { return []; }, null); })();
    return QRCodeModule;
}());


//# sourceMappingURL=angularx-qrcode.module.js.map

/***/ }),

/***/ "./node_modules/angularx-qrcode/__ivy_ngcc__/dist/components/angularx-qrcode/angularx-qrcode.component.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/angularx-qrcode/__ivy_ngcc__/dist/components/angularx-qrcode/angularx-qrcode.component.js ***!
  \****************************************************************************************************************/
/*! exports provided: QRCodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QRCodeComponent", function() { return QRCodeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");

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


var QRCode;
var QRCodeComponent = /** @class */ (function () {
    function QRCodeComponent(el, platformId) {
        var _this = this;
        this.el = el;
        this.platformId = platformId;
        /** @internal */
        this.allowEmptyString = false;
        this.colordark = '#000000';
        this.colorlight = '#ffffff';
        this.level = 'M';
        this.hidetitle = false;
        this.qrdata = '';
        this.size = 256;
        this.usesvg = false;
        this.isValidQrCodeText = function (data) {
            if (_this.allowEmptyString === false) {
                return !(typeof data === 'undefined' || data === '');
            }
            return !(typeof data === 'undefined');
        };
    }
    QRCodeComponent.prototype.ngAfterViewInit = function () {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformServer"])(this.platformId)) {
            return;
        }
        if (!QRCode) {
            QRCode = __webpack_require__(/*! qrcodejs2 */ "./node_modules/qrcodejs2/qrcode.js");
        }
        try {
            if (!this.isValidQrCodeText(this.qrdata)) {
                throw new Error('Empty QR Code data');
            }
            this.qrcode = new QRCode(this.el.nativeElement, {
                colorDark: this.colordark,
                colorLight: this.colorlight,
                correctLevel: QRCode.CorrectLevel[this.level.toString()],
                height: this.size,
                text: this.qrdata || ' ',
                useSVG: this.usesvg,
                width: this.size,
            });
        }
        catch (e) {
            console.error('Error generating QR Code: ' + e.message);
        }
    };
    QRCodeComponent.prototype.ngOnChanges = function (changes) {
        if (!this.qrcode) {
            return;
        }
        var qrData = changes['qrdata'];
        if (qrData && this.isValidQrCodeText(qrData.currentValue)) {
            this.qrcode.clear();
            this.qrcode.makeCode(qrData.currentValue);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], QRCodeComponent.prototype, "allowEmptyString", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], QRCodeComponent.prototype, "colordark", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], QRCodeComponent.prototype, "colorlight", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], QRCodeComponent.prototype, "level", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], QRCodeComponent.prototype, "hidetitle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], QRCodeComponent.prototype, "qrdata", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], QRCodeComponent.prototype, "size", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], QRCodeComponent.prototype, "usesvg", void 0);
    QRCodeComponent = __decorate([ __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], Object])
    ], QRCodeComponent);
QRCodeComponent.ɵfac = function QRCodeComponent_Factory(t) { return new (t || QRCodeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])); };
QRCodeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QRCodeComponent, selectors: [["qrcode"]], inputs: { allowEmptyString: "allowEmptyString", colordark: "colordark", colorlight: "colorlight", level: "level", hidetitle: "hidetitle", qrdata: "qrdata", size: "size", usesvg: "usesvg" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 0, vars: 0, template: function QRCodeComponent_Template(rf, ctx) { }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QRCodeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'qrcode',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                template: ''
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: Object, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }] }]; }, { allowEmptyString: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], colordark: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], colorlight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], level: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], hidetitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], qrdata: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], size: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], usesvg: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
    return QRCodeComponent;
}());


//# sourceMappingURL=angularx-qrcode.component.js.map

/***/ }),

/***/ "./node_modules/angularx-qrcode/__ivy_ngcc__/dist/components/angularx-qrcode/index.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/angularx-qrcode/__ivy_ngcc__/dist/components/angularx-qrcode/index.js ***!
  \********************************************************************************************/
/*! exports provided: QRCodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angularx_qrcode_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./angularx-qrcode.component */ "./node_modules/angularx-qrcode/__ivy_ngcc__/dist/components/angularx-qrcode/angularx-qrcode.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QRCodeComponent", function() { return _angularx_qrcode_component__WEBPACK_IMPORTED_MODULE_0__["QRCodeComponent"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/angularx-qrcode/__ivy_ngcc__/dist/components/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/angularx-qrcode/__ivy_ngcc__/dist/components/index.js ***!
  \****************************************************************************/
/*! exports provided: QRCodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angularx_qrcode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./angularx-qrcode */ "./node_modules/angularx-qrcode/__ivy_ngcc__/dist/components/angularx-qrcode/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QRCodeComponent", function() { return _angularx_qrcode__WEBPACK_IMPORTED_MODULE_0__["QRCodeComponent"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/angularx-qrcode/__ivy_ngcc__/dist/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/angularx-qrcode/__ivy_ngcc__/dist/index.js ***!
  \*****************************************************************/
/*! exports provided: QRCodeComponent, QRCodeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ "./node_modules/angularx-qrcode/__ivy_ngcc__/dist/components/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QRCodeComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["QRCodeComponent"]; });

/* harmony import */ var _angularx_qrcode_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./angularx-qrcode.module */ "./node_modules/angularx-qrcode/__ivy_ngcc__/dist/angularx-qrcode.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QRCodeModule", function() { return _angularx_qrcode_module__WEBPACK_IMPORTED_MODULE_1__["QRCodeModule"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/myetherwallet-blockies/dist/blockies.js":
/*!**************************************************************!*\
  !*** ./node_modules/myetherwallet-blockies/dist/blockies.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? factory(exports) :
	undefined;
}(typeof self !== 'undefined' ? self : this, function (exports) { 'use strict';

	/**
	* A handy class to calculate color values.
	*
	* @version 1.0
	* @author Robert Eisele <robert@xarg.org>
	* @copyright Copyright (c) 2010, Robert Eisele
	* @link http://www.xarg.org/2010/03/generate-client-side-png-files-using-javascript/
	* @license http://www.opensource.org/licenses/bsd-license.php BSD License
	*
	*/


	// helper functions for that ctx
	function write(buffer, offs) {
		for (var i = 2; i < arguments.length; i++) {
			for (var j = 0; j < arguments[i].length; j++) {
				buffer[offs++] = arguments[i].charAt(j);
			}
		}
	}

	function byte2(w) {
		return String.fromCharCode((w >> 8) & 255, w & 255);
	}

	function byte4(w) {
		return String.fromCharCode((w >> 24) & 255, (w >> 16) & 255, (w >> 8) & 255, w & 255);
	}

	function byte2lsb(w) {
		return String.fromCharCode(w & 255, (w >> 8) & 255);
	}

	function PNG(width,height,depth) {

		this.width   = width;
		this.height  = height;
		this.depth   = depth;

		// pixel data and row filter identifier size
		this.pix_size = height * (width + 1);

		// deflate header, pix_size, block headers, adler32 checksum
		this.data_size = 2 + this.pix_size + 5 * Math.floor((0xfffe + this.pix_size) / 0xffff) + 4;

		// offsets and sizes of Png chunks
		this.ihdr_offs = 0;									// IHDR offset and size
		this.ihdr_size = 4 + 4 + 13 + 4;
		this.plte_offs = this.ihdr_offs + this.ihdr_size;	// PLTE offset and size
		this.plte_size = 4 + 4 + 3 * depth + 4;
		this.trns_offs = this.plte_offs + this.plte_size;	// tRNS offset and size
		this.trns_size = 4 + 4 + depth + 4;
		this.idat_offs = this.trns_offs + this.trns_size;	// IDAT offset and size
		this.idat_size = 4 + 4 + this.data_size + 4;
		this.iend_offs = this.idat_offs + this.idat_size;	// IEND offset and size
		this.iend_size = 4 + 4 + 4;
		this.buffer_size  = this.iend_offs + this.iend_size;	// total PNG size

		this.buffer  = new Array();
		this.palette = new Object();
		this.pindex  = 0;

		var _crc32 = new Array();

		// initialize buffer with zero bytes
		for (var i = 0; i < this.buffer_size; i++) {
			this.buffer[i] = "\x00";
		}

		// initialize non-zero elements
		write(this.buffer, this.ihdr_offs, byte4(this.ihdr_size - 12), 'IHDR', byte4(width), byte4(height), "\x08\x03");
		write(this.buffer, this.plte_offs, byte4(this.plte_size - 12), 'PLTE');
		write(this.buffer, this.trns_offs, byte4(this.trns_size - 12), 'tRNS');
		write(this.buffer, this.idat_offs, byte4(this.idat_size - 12), 'IDAT');
		write(this.buffer, this.iend_offs, byte4(this.iend_size - 12), 'IEND');

		// initialize deflate header
		var header = ((8 + (7 << 4)) << 8) | (3 << 6);
		header+= 31 - (header % 31);

		write(this.buffer, this.idat_offs + 8, byte2(header));

		// initialize deflate block headers
		for (var i = 0; (i << 16) - 1 < this.pix_size; i++) {
			var size, bits;
			if (i + 0xffff < this.pix_size) {
				size = 0xffff;
				bits = "\x00";
			} else {
				size = this.pix_size - (i << 16) - i;
				bits = "\x01";
			}
			write(this.buffer, this.idat_offs + 8 + 2 + (i << 16) + (i << 2), bits, byte2lsb(size), byte2lsb(~size));
		}

		/* Create crc32 lookup table */
		for (var i = 0; i < 256; i++) {
			var c = i;
			for (var j = 0; j < 8; j++) {
				if (c & 1) {
					c = -306674912 ^ ((c >> 1) & 0x7fffffff);
				} else {
					c = (c >> 1) & 0x7fffffff;
				}
			}
			_crc32[i] = c;
		}

		// compute the index into a png for a given pixel
		this.index = function(x,y) {
			var i = y * (this.width + 1) + x + 1;
			var j = this.idat_offs + 8 + 2 + 5 * Math.floor((i / 0xffff) + 1) + i;
			return j;
		};

		// convert a color and build up the palette
		this.color = function(red, green, blue, alpha) {

			alpha = alpha >= 0 ? alpha : 255;
			var color = (((((alpha << 8) | red) << 8) | green) << 8) | blue;

			if (typeof this.palette[color] == "undefined") {
				if (this.pindex == this.depth) return "\x00";

				var ndx = this.plte_offs + 8 + 3 * this.pindex;

				this.buffer[ndx + 0] = String.fromCharCode(red);
				this.buffer[ndx + 1] = String.fromCharCode(green);
				this.buffer[ndx + 2] = String.fromCharCode(blue);
				this.buffer[this.trns_offs+8+this.pindex] = String.fromCharCode(alpha);

				this.palette[color] = String.fromCharCode(this.pindex++);
			}
			return this.palette[color];
		};

		// output a PNG string, Base64 encoded
		this.getBase64 = function() {

			var s = this.getDump();

			var ch = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
			var c1, c2, c3, e1, e2, e3, e4;
			var l = s.length;
			var i = 0;
			var r = "";

			do {
				c1 = s.charCodeAt(i);
				e1 = c1 >> 2;
				c2 = s.charCodeAt(i+1);
				e2 = ((c1 & 3) << 4) | (c2 >> 4);
				c3 = s.charCodeAt(i+2);
				if (l < i+2) { e3 = 64; } else { e3 = ((c2 & 0xf) << 2) | (c3 >> 6); }
				if (l < i+3) { e4 = 64; } else { e4 = c3 & 0x3f; }
				r+= ch.charAt(e1) + ch.charAt(e2) + ch.charAt(e3) + ch.charAt(e4);
			} while ((i+= 3) < l);
			return r;
		};

		// output a PNG string
		this.getDump = function() {

			// compute adler32 of output pixels + row filter bytes
			var BASE = 65521; /* largest prime smaller than 65536 */
			var NMAX = 5552;  /* NMAX is the largest n such that 255n(n+1)/2 + (n+1)(BASE-1) <= 2^32-1 */
			var s1 = 1;
			var s2 = 0;
			var n = NMAX;

			for (var y = 0; y < this.height; y++) {
				for (var x = -1; x < this.width; x++) {
					s1+= this.buffer[this.index(x, y)].charCodeAt(0);
					s2+= s1;
					if ((n-= 1) == 0) {
						s1%= BASE;
						s2%= BASE;
						n = NMAX;
					}
				}
			}
			s1%= BASE;
			s2%= BASE;
			write(this.buffer, this.idat_offs + this.idat_size - 8, byte4((s2 << 16) | s1));

			// compute crc32 of the PNG chunks
			function crc32(png, offs, size) {
				var crc = -1;
				for (var i = 4; i < size-4; i += 1) {
					crc = _crc32[(crc ^ png[offs+i].charCodeAt(0)) & 0xff] ^ ((crc >> 8) & 0x00ffffff);
				}
				write(png, offs+size-4, byte4(crc ^ -1));
			}

			crc32(this.buffer, this.ihdr_offs, this.ihdr_size);
			crc32(this.buffer, this.plte_offs, this.plte_size);
			crc32(this.buffer, this.trns_offs, this.trns_size);
			crc32(this.buffer, this.idat_offs, this.idat_size);
			crc32(this.buffer, this.iend_offs, this.iend_size);

			// convert PNG to string
			return "\x89PNG\r\n\x1A\n"+this.buffer.join('');
		};

		this.fillRect = function (x, y, w, h, color) {
			for(var i = 0; i < w; i++) {
				for (var j = 0; j < h; j++) {
					this.buffer[this.index(x+i, y+j)] = color;
				}
			}
		};
	}

	// https://stackoverflow.com/questions/2353211/hsl-to-rgb-color-conversion
	/**
	 * Converts an HSL color value to RGB. Conversion formula
	 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
	 * Assumes h, s, and l are contained in the set [0, 1] and
	 * returns r, g, and b in the set [0, 255].
	 *
	 * @param   {number}  h       The hue
	 * @param   {number}  s       The saturation
	 * @param   {number}  l       The lightness
	 * @return  {Array}           The RGB representation
	 */

	 function hue2rgb(p, q, t) {
	     if(t < 0) t += 1;
	     if(t > 1) t -= 1;
	     if(t < 1/6) return p + (q - p) * 6 * t;
	     if(t < 1/2) return q;
	     if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
	     return p;
	 }

	function hsl2rgb(h, s, l){
	    var r, g, b;

	    if(s == 0){
	        r = g = b = l; // achromatic
	    }else{
	        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
	        var p = 2 * l - q;
	        r = hue2rgb(p, q, h + 1/3);
	        g = hue2rgb(p, q, h);
	        b = hue2rgb(p, q, h - 1/3);
	    }

	    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255), 255];
	}

	// The random number is a js implementation of the Xorshift PRNG
	var randseed = new Array(4); // Xorshift: [x, y, z, w] 32 bit values

	function seedrand(seed) {
	    for (var i = 0; i < randseed.length; i++) {
	        randseed[i] = 0;
	    }
	    for (var i = 0; i < seed.length; i++) {
	        randseed[i % 4] = (randseed[i % 4] << 5) - randseed[i % 4] + seed.charCodeAt(i);
	    }
	}

	function rand() {
	    // based on Java's String.hashCode(), expanded to 4 32bit values
	    var t = randseed[0] ^ (randseed[0] << 11);

	    randseed[0] = randseed[1];
	    randseed[1] = randseed[2];
	    randseed[2] = randseed[3];
	    randseed[3] = randseed[3] ^ (randseed[3] >> 19) ^ t ^ (t >> 8);

	    return (randseed[3] >>> 0) / (1 << 31 >>> 0);
	}

	function createColor() {
	    //saturation is the whole color spectrum
	    var h = Math.floor(rand() * 360);
	    //saturation goes from 40 to 100, it avoids greyish colors
	    var s = rand() * 60 + 40;
	    //lightness can be anything from 0 to 100, but probabilities are a bell curve around 50%
	    var l = (rand() + rand() + rand() + rand()) * 25 ;

	    return [h / 360,s / 100,l / 100];
	}

	function createImageData(size) {
	    var width = size; // Only support square icons for now
	    var height = size;

	    var dataWidth = Math.ceil(width / 2);
	    var mirrorWidth = width - dataWidth;

	    var data = [];
	    for (var y = 0; y < height; y++) {
	        var row = [];
	        for (var x = 0; x < dataWidth; x++) {
	            // this makes foreground and background color to have a 43% (1/2.3) probability
	            // spot color has 13% chance
	            row[x] = Math.floor(rand() * 2.3);
	        }
	        var r = row.slice(0, mirrorWidth);
	        r.reverse();
	        row = row.concat(r);

	        for (var i = 0; i < row.length; i++) {
	            data.push(row[i]);
	        }
	    }

	    return data;
	}

	function buildOpts(opts) {
	    if (!opts.seed) {
	      throw 'No seed provided'
	    }

	    seedrand(opts.seed);

	    return Object.assign({
	      size: 8,
	      scale: 16,
	      color: createColor(),
	      bgcolor: createColor(),
	      spotcolor: createColor(),
	    }, opts)
	}

	function toDataUrl(address) {
	    const opts = buildOpts({seed: address.toLowerCase()});

	    const imageData = createImageData(opts.size);
	    const width = Math.sqrt(imageData.length);

	    const p = new PNG(opts.size*opts.scale, opts.size*opts.scale, 3);
	    const bgcolor = p.color(...hsl2rgb(...opts.bgcolor));
	    const color = p.color(...hsl2rgb(...opts.color));
	    const spotcolor = p.color(...hsl2rgb(...opts.spotcolor));

	    for (var i = 0; i < imageData.length; i++) {
	        var row = Math.floor(i / width);
	        var col = i % width;
	        // if data is 0, leave the background
	        if (imageData[i]) {
	            // if data is 2, choose spot color, if 1 choose foreground
	            const pngColor = imageData[i] == 1 ? color : spotcolor;
	            p.fillRect(col * opts.scale, row * opts.scale, opts.scale, opts.scale, pngColor);
	        }
	    }
	    return `data:image/png;base64,${p.getBase64()}`;
	}

	exports.toDataUrl = toDataUrl;

	Object.defineProperty(exports, '__esModule', { value: true });

}));


/***/ }),

/***/ "./node_modules/qrcodejs2/qrcode.js":
/*!******************************************!*\
  !*** ./node_modules/qrcodejs2/qrcode.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileoverview
 * - Using the 'QRCode for Javascript library'
 * - Fixed dataset of 'QRCode for Javascript library' for support full-spec.
 * - this library has no dependencies.
 *
 * @author davidshimjs
 * @see <a href="http://www.d-project.com/" target="_blank">http://www.d-project.com/</a>
 * @see <a href="http://jeromeetienne.github.com/jquery-qrcode/" target="_blank">http://jeromeetienne.github.com/jquery-qrcode/</a>
 */
var QRCode;

(function (root, factory) {

	/* CommonJS */
  if (true) module.exports = factory()

  /* AMD module */
  else {}

}(this, function () {	//---------------------------------------------------------------------
	// QRCode for JavaScript
	//
	// Copyright (c) 2009 Kazuhiko Arase
	//
	// URL: http://www.d-project.com/
	//
	// Licensed under the MIT license:
	//   http://www.opensource.org/licenses/mit-license.php
	//
	// The word "QR Code" is registered trademark of
	// DENSO WAVE INCORPORATED
	//   http://www.denso-wave.com/qrcode/faqpatent-e.html
	//
	//---------------------------------------------------------------------
	function QR8bitByte(data) {
		this.mode = QRMode.MODE_8BIT_BYTE;
		this.data = data;
		this.parsedData = [];

		// Added to support UTF-8 Characters
		for (var i = 0, l = this.data.length; i < l; i++) {
			var byteArray = [];
			var code = this.data.charCodeAt(i);

			if (code > 0x10000) {
				byteArray[0] = 0xF0 | ((code & 0x1C0000) >>> 18);
				byteArray[1] = 0x80 | ((code & 0x3F000) >>> 12);
				byteArray[2] = 0x80 | ((code & 0xFC0) >>> 6);
				byteArray[3] = 0x80 | (code & 0x3F);
			} else if (code > 0x800) {
				byteArray[0] = 0xE0 | ((code & 0xF000) >>> 12);
				byteArray[1] = 0x80 | ((code & 0xFC0) >>> 6);
				byteArray[2] = 0x80 | (code & 0x3F);
			} else if (code > 0x80) {
				byteArray[0] = 0xC0 | ((code & 0x7C0) >>> 6);
				byteArray[1] = 0x80 | (code & 0x3F);
			} else {
				byteArray[0] = code;
			}

			this.parsedData.push(byteArray);
		}

		this.parsedData = Array.prototype.concat.apply([], this.parsedData);

		if (this.parsedData.length != this.data.length) {
			this.parsedData.unshift(191);
			this.parsedData.unshift(187);
			this.parsedData.unshift(239);
		}
	}

	QR8bitByte.prototype = {
		getLength: function (buffer) {
			return this.parsedData.length;
		},
		write: function (buffer) {
			for (var i = 0, l = this.parsedData.length; i < l; i++) {
				buffer.put(this.parsedData[i], 8);
			}
		}
	};

	function QRCodeModel(typeNumber, errorCorrectLevel) {
		this.typeNumber = typeNumber;
		this.errorCorrectLevel = errorCorrectLevel;
		this.modules = null;
		this.moduleCount = 0;
		this.dataCache = null;
		this.dataList = [];
	}

	QRCodeModel.prototype={addData:function(data){var newData=new QR8bitByte(data);this.dataList.push(newData);this.dataCache=null;},isDark:function(row,col){if(row<0||this.moduleCount<=row||col<0||this.moduleCount<=col){throw new Error(row+","+col);}
	return this.modules[row][col];},getModuleCount:function(){return this.moduleCount;},make:function(){this.makeImpl(false,this.getBestMaskPattern());},makeImpl:function(test,maskPattern){this.moduleCount=this.typeNumber*4+17;this.modules=new Array(this.moduleCount);for(var row=0;row<this.moduleCount;row++){this.modules[row]=new Array(this.moduleCount);for(var col=0;col<this.moduleCount;col++){this.modules[row][col]=null;}}
	this.setupPositionProbePattern(0,0);this.setupPositionProbePattern(this.moduleCount-7,0);this.setupPositionProbePattern(0,this.moduleCount-7);this.setupPositionAdjustPattern();this.setupTimingPattern();this.setupTypeInfo(test,maskPattern);if(this.typeNumber>=7){this.setupTypeNumber(test);}
	if(this.dataCache==null){this.dataCache=QRCodeModel.createData(this.typeNumber,this.errorCorrectLevel,this.dataList);}
	this.mapData(this.dataCache,maskPattern);},setupPositionProbePattern:function(row,col){for(var r=-1;r<=7;r++){if(row+r<=-1||this.moduleCount<=row+r)continue;for(var c=-1;c<=7;c++){if(col+c<=-1||this.moduleCount<=col+c)continue;if((0<=r&&r<=6&&(c==0||c==6))||(0<=c&&c<=6&&(r==0||r==6))||(2<=r&&r<=4&&2<=c&&c<=4)){this.modules[row+r][col+c]=true;}else{this.modules[row+r][col+c]=false;}}}},getBestMaskPattern:function(){var minLostPoint=0;var pattern=0;for(var i=0;i<8;i++){this.makeImpl(true,i);var lostPoint=QRUtil.getLostPoint(this);if(i==0||minLostPoint>lostPoint){minLostPoint=lostPoint;pattern=i;}}
	return pattern;},createMovieClip:function(target_mc,instance_name,depth){var qr_mc=target_mc.createEmptyMovieClip(instance_name,depth);var cs=1;this.make();for(var row=0;row<this.modules.length;row++){var y=row*cs;for(var col=0;col<this.modules[row].length;col++){var x=col*cs;var dark=this.modules[row][col];if(dark){qr_mc.beginFill(0,100);qr_mc.moveTo(x,y);qr_mc.lineTo(x+cs,y);qr_mc.lineTo(x+cs,y+cs);qr_mc.lineTo(x,y+cs);qr_mc.endFill();}}}
	return qr_mc;},setupTimingPattern:function(){for(var r=8;r<this.moduleCount-8;r++){if(this.modules[r][6]!=null){continue;}
	this.modules[r][6]=(r%2==0);}
	for(var c=8;c<this.moduleCount-8;c++){if(this.modules[6][c]!=null){continue;}
	this.modules[6][c]=(c%2==0);}},setupPositionAdjustPattern:function(){var pos=QRUtil.getPatternPosition(this.typeNumber);for(var i=0;i<pos.length;i++){for(var j=0;j<pos.length;j++){var row=pos[i];var col=pos[j];if(this.modules[row][col]!=null){continue;}
	for(var r=-2;r<=2;r++){for(var c=-2;c<=2;c++){if(r==-2||r==2||c==-2||c==2||(r==0&&c==0)){this.modules[row+r][col+c]=true;}else{this.modules[row+r][col+c]=false;}}}}}},setupTypeNumber:function(test){var bits=QRUtil.getBCHTypeNumber(this.typeNumber);for(var i=0;i<18;i++){var mod=(!test&&((bits>>i)&1)==1);this.modules[Math.floor(i/3)][i%3+this.moduleCount-8-3]=mod;}
	for(var i=0;i<18;i++){var mod=(!test&&((bits>>i)&1)==1);this.modules[i%3+this.moduleCount-8-3][Math.floor(i/3)]=mod;}},setupTypeInfo:function(test,maskPattern){var data=(this.errorCorrectLevel<<3)|maskPattern;var bits=QRUtil.getBCHTypeInfo(data);for(var i=0;i<15;i++){var mod=(!test&&((bits>>i)&1)==1);if(i<6){this.modules[i][8]=mod;}else if(i<8){this.modules[i+1][8]=mod;}else{this.modules[this.moduleCount-15+i][8]=mod;}}
	for(var i=0;i<15;i++){var mod=(!test&&((bits>>i)&1)==1);if(i<8){this.modules[8][this.moduleCount-i-1]=mod;}else if(i<9){this.modules[8][15-i-1+1]=mod;}else{this.modules[8][15-i-1]=mod;}}
	this.modules[this.moduleCount-8][8]=(!test);},mapData:function(data,maskPattern){var inc=-1;var row=this.moduleCount-1;var bitIndex=7;var byteIndex=0;for(var col=this.moduleCount-1;col>0;col-=2){if(col==6)col--;while(true){for(var c=0;c<2;c++){if(this.modules[row][col-c]==null){var dark=false;if(byteIndex<data.length){dark=(((data[byteIndex]>>>bitIndex)&1)==1);}
	var mask=QRUtil.getMask(maskPattern,row,col-c);if(mask){dark=!dark;}
	this.modules[row][col-c]=dark;bitIndex--;if(bitIndex==-1){byteIndex++;bitIndex=7;}}}
	row+=inc;if(row<0||this.moduleCount<=row){row-=inc;inc=-inc;break;}}}}};QRCodeModel.PAD0=0xEC;QRCodeModel.PAD1=0x11;QRCodeModel.createData=function(typeNumber,errorCorrectLevel,dataList){var rsBlocks=QRRSBlock.getRSBlocks(typeNumber,errorCorrectLevel);var buffer=new QRBitBuffer();for(var i=0;i<dataList.length;i++){var data=dataList[i];buffer.put(data.mode,4);buffer.put(data.getLength(),QRUtil.getLengthInBits(data.mode,typeNumber));data.write(buffer);}
	var totalDataCount=0;for(var i=0;i<rsBlocks.length;i++){totalDataCount+=rsBlocks[i].dataCount;}
	if(buffer.getLengthInBits()>totalDataCount*8){throw new Error("code length overflow. ("
	+buffer.getLengthInBits()
	+">"
	+totalDataCount*8
	+")");}
	if(buffer.getLengthInBits()+4<=totalDataCount*8){buffer.put(0,4);}
	while(buffer.getLengthInBits()%8!=0){buffer.putBit(false);}
	while(true){if(buffer.getLengthInBits()>=totalDataCount*8){break;}
	buffer.put(QRCodeModel.PAD0,8);if(buffer.getLengthInBits()>=totalDataCount*8){break;}
	buffer.put(QRCodeModel.PAD1,8);}
	return QRCodeModel.createBytes(buffer,rsBlocks);};QRCodeModel.createBytes=function(buffer,rsBlocks){var offset=0;var maxDcCount=0;var maxEcCount=0;var dcdata=new Array(rsBlocks.length);var ecdata=new Array(rsBlocks.length);for(var r=0;r<rsBlocks.length;r++){var dcCount=rsBlocks[r].dataCount;var ecCount=rsBlocks[r].totalCount-dcCount;maxDcCount=Math.max(maxDcCount,dcCount);maxEcCount=Math.max(maxEcCount,ecCount);dcdata[r]=new Array(dcCount);for(var i=0;i<dcdata[r].length;i++){dcdata[r][i]=0xff&buffer.buffer[i+offset];}
	offset+=dcCount;var rsPoly=QRUtil.getErrorCorrectPolynomial(ecCount);var rawPoly=new QRPolynomial(dcdata[r],rsPoly.getLength()-1);var modPoly=rawPoly.mod(rsPoly);ecdata[r]=new Array(rsPoly.getLength()-1);for(var i=0;i<ecdata[r].length;i++){var modIndex=i+modPoly.getLength()-ecdata[r].length;ecdata[r][i]=(modIndex>=0)?modPoly.get(modIndex):0;}}
	var totalCodeCount=0;for(var i=0;i<rsBlocks.length;i++){totalCodeCount+=rsBlocks[i].totalCount;}
	var data=new Array(totalCodeCount);var index=0;for(var i=0;i<maxDcCount;i++){for(var r=0;r<rsBlocks.length;r++){if(i<dcdata[r].length){data[index++]=dcdata[r][i];}}}
	for(var i=0;i<maxEcCount;i++){for(var r=0;r<rsBlocks.length;r++){if(i<ecdata[r].length){data[index++]=ecdata[r][i];}}}
	return data;};var QRMode={MODE_NUMBER:1<<0,MODE_ALPHA_NUM:1<<1,MODE_8BIT_BYTE:1<<2,MODE_KANJI:1<<3};var QRErrorCorrectLevel={L:1,M:0,Q:3,H:2};var QRMaskPattern={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};var QRUtil={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:(1<<10)|(1<<8)|(1<<5)|(1<<4)|(1<<2)|(1<<1)|(1<<0),G18:(1<<12)|(1<<11)|(1<<10)|(1<<9)|(1<<8)|(1<<5)|(1<<2)|(1<<0),G15_MASK:(1<<14)|(1<<12)|(1<<10)|(1<<4)|(1<<1),getBCHTypeInfo:function(data){var d=data<<10;while(QRUtil.getBCHDigit(d)-QRUtil.getBCHDigit(QRUtil.G15)>=0){d^=(QRUtil.G15<<(QRUtil.getBCHDigit(d)-QRUtil.getBCHDigit(QRUtil.G15)));}
	return((data<<10)|d)^QRUtil.G15_MASK;},getBCHTypeNumber:function(data){var d=data<<12;while(QRUtil.getBCHDigit(d)-QRUtil.getBCHDigit(QRUtil.G18)>=0){d^=(QRUtil.G18<<(QRUtil.getBCHDigit(d)-QRUtil.getBCHDigit(QRUtil.G18)));}
	return(data<<12)|d;},getBCHDigit:function(data){var digit=0;while(data!=0){digit++;data>>>=1;}
	return digit;},getPatternPosition:function(typeNumber){return QRUtil.PATTERN_POSITION_TABLE[typeNumber-1];},getMask:function(maskPattern,i,j){switch(maskPattern){case QRMaskPattern.PATTERN000:return(i+j)%2==0;case QRMaskPattern.PATTERN001:return i%2==0;case QRMaskPattern.PATTERN010:return j%3==0;case QRMaskPattern.PATTERN011:return(i+j)%3==0;case QRMaskPattern.PATTERN100:return(Math.floor(i/2)+Math.floor(j/3))%2==0;case QRMaskPattern.PATTERN101:return(i*j)%2+(i*j)%3==0;case QRMaskPattern.PATTERN110:return((i*j)%2+(i*j)%3)%2==0;case QRMaskPattern.PATTERN111:return((i*j)%3+(i+j)%2)%2==0;default:throw new Error("bad maskPattern:"+maskPattern);}},getErrorCorrectPolynomial:function(errorCorrectLength){var a=new QRPolynomial([1],0);for(var i=0;i<errorCorrectLength;i++){a=a.multiply(new QRPolynomial([1,QRMath.gexp(i)],0));}
	return a;},getLengthInBits:function(mode,type){if(1<=type&&type<10){switch(mode){case QRMode.MODE_NUMBER:return 10;case QRMode.MODE_ALPHA_NUM:return 9;case QRMode.MODE_8BIT_BYTE:return 8;case QRMode.MODE_KANJI:return 8;default:throw new Error("mode:"+mode);}}else if(type<27){switch(mode){case QRMode.MODE_NUMBER:return 12;case QRMode.MODE_ALPHA_NUM:return 11;case QRMode.MODE_8BIT_BYTE:return 16;case QRMode.MODE_KANJI:return 10;default:throw new Error("mode:"+mode);}}else if(type<41){switch(mode){case QRMode.MODE_NUMBER:return 14;case QRMode.MODE_ALPHA_NUM:return 13;case QRMode.MODE_8BIT_BYTE:return 16;case QRMode.MODE_KANJI:return 12;default:throw new Error("mode:"+mode);}}else{throw new Error("type:"+type);}},getLostPoint:function(qrCode){var moduleCount=qrCode.getModuleCount();var lostPoint=0;for(var row=0;row<moduleCount;row++){for(var col=0;col<moduleCount;col++){var sameCount=0;var dark=qrCode.isDark(row,col);for(var r=-1;r<=1;r++){if(row+r<0||moduleCount<=row+r){continue;}
	for(var c=-1;c<=1;c++){if(col+c<0||moduleCount<=col+c){continue;}
	if(r==0&&c==0){continue;}
	if(dark==qrCode.isDark(row+r,col+c)){sameCount++;}}}
	if(sameCount>5){lostPoint+=(3+sameCount-5);}}}
	for(var row=0;row<moduleCount-1;row++){for(var col=0;col<moduleCount-1;col++){var count=0;if(qrCode.isDark(row,col))count++;if(qrCode.isDark(row+1,col))count++;if(qrCode.isDark(row,col+1))count++;if(qrCode.isDark(row+1,col+1))count++;if(count==0||count==4){lostPoint+=3;}}}
	for(var row=0;row<moduleCount;row++){for(var col=0;col<moduleCount-6;col++){if(qrCode.isDark(row,col)&&!qrCode.isDark(row,col+1)&&qrCode.isDark(row,col+2)&&qrCode.isDark(row,col+3)&&qrCode.isDark(row,col+4)&&!qrCode.isDark(row,col+5)&&qrCode.isDark(row,col+6)){lostPoint+=40;}}}
	for(var col=0;col<moduleCount;col++){for(var row=0;row<moduleCount-6;row++){if(qrCode.isDark(row,col)&&!qrCode.isDark(row+1,col)&&qrCode.isDark(row+2,col)&&qrCode.isDark(row+3,col)&&qrCode.isDark(row+4,col)&&!qrCode.isDark(row+5,col)&&qrCode.isDark(row+6,col)){lostPoint+=40;}}}
	var darkCount=0;for(var col=0;col<moduleCount;col++){for(var row=0;row<moduleCount;row++){if(qrCode.isDark(row,col)){darkCount++;}}}
	var ratio=Math.abs(100*darkCount/moduleCount/moduleCount-50)/5;lostPoint+=ratio*10;return lostPoint;}};var QRMath={glog:function(n){if(n<1){throw new Error("glog("+n+")");}
	return QRMath.LOG_TABLE[n];},gexp:function(n){while(n<0){n+=255;}
	while(n>=256){n-=255;}
	return QRMath.EXP_TABLE[n];},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)};for(var i=0;i<8;i++){QRMath.EXP_TABLE[i]=1<<i;}
	for(var i=8;i<256;i++){QRMath.EXP_TABLE[i]=QRMath.EXP_TABLE[i-4]^QRMath.EXP_TABLE[i-5]^QRMath.EXP_TABLE[i-6]^QRMath.EXP_TABLE[i-8];}
	for(var i=0;i<255;i++){QRMath.LOG_TABLE[QRMath.EXP_TABLE[i]]=i;}
	function QRPolynomial(num,shift){if(num.length==undefined){throw new Error(num.length+"/"+shift);}
	var offset=0;while(offset<num.length&&num[offset]==0){offset++;}
	this.num=new Array(num.length-offset+shift);for(var i=0;i<num.length-offset;i++){this.num[i]=num[i+offset];}}
	QRPolynomial.prototype={get:function(index){return this.num[index];},getLength:function(){return this.num.length;},multiply:function(e){var num=new Array(this.getLength()+e.getLength()-1);for(var i=0;i<this.getLength();i++){for(var j=0;j<e.getLength();j++){num[i+j]^=QRMath.gexp(QRMath.glog(this.get(i))+QRMath.glog(e.get(j)));}}
	return new QRPolynomial(num,0);},mod:function(e){if(this.getLength()-e.getLength()<0){return this;}
	var ratio=QRMath.glog(this.get(0))-QRMath.glog(e.get(0));var num=new Array(this.getLength());for(var i=0;i<this.getLength();i++){num[i]=this.get(i);}
	for(var i=0;i<e.getLength();i++){num[i]^=QRMath.gexp(QRMath.glog(e.get(i))+ratio);}
	return new QRPolynomial(num,0).mod(e);}};function QRRSBlock(totalCount,dataCount){this.totalCount=totalCount;this.dataCount=dataCount;}
	QRRSBlock.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]];QRRSBlock.getRSBlocks=function(typeNumber,errorCorrectLevel){var rsBlock=QRRSBlock.getRsBlockTable(typeNumber,errorCorrectLevel);if(rsBlock==undefined){throw new Error("bad rs block @ typeNumber:"+typeNumber+"/errorCorrectLevel:"+errorCorrectLevel);}
	var length=rsBlock.length/3;var list=[];for(var i=0;i<length;i++){var count=rsBlock[i*3+0];var totalCount=rsBlock[i*3+1];var dataCount=rsBlock[i*3+2];for(var j=0;j<count;j++){list.push(new QRRSBlock(totalCount,dataCount));}}
	return list;};QRRSBlock.getRsBlockTable=function(typeNumber,errorCorrectLevel){switch(errorCorrectLevel){case QRErrorCorrectLevel.L:return QRRSBlock.RS_BLOCK_TABLE[(typeNumber-1)*4+0];case QRErrorCorrectLevel.M:return QRRSBlock.RS_BLOCK_TABLE[(typeNumber-1)*4+1];case QRErrorCorrectLevel.Q:return QRRSBlock.RS_BLOCK_TABLE[(typeNumber-1)*4+2];case QRErrorCorrectLevel.H:return QRRSBlock.RS_BLOCK_TABLE[(typeNumber-1)*4+3];default:return undefined;}};function QRBitBuffer(){this.buffer=[];this.length=0;}
	QRBitBuffer.prototype={get:function(index){var bufIndex=Math.floor(index/8);return((this.buffer[bufIndex]>>>(7-index%8))&1)==1;},put:function(num,length){for(var i=0;i<length;i++){this.putBit(((num>>>(length-i-1))&1)==1);}},getLengthInBits:function(){return this.length;},putBit:function(bit){var bufIndex=Math.floor(this.length/8);if(this.buffer.length<=bufIndex){this.buffer.push(0);}
	if(bit){this.buffer[bufIndex]|=(0x80>>>(this.length%8));}
	this.length++;}};var QRCodeLimitLength=[[17,14,11,7],[32,26,20,14],[53,42,32,24],[78,62,46,34],[106,84,60,44],[134,106,74,58],[154,122,86,64],[192,152,108,84],[230,180,130,98],[271,213,151,119],[321,251,177,137],[367,287,203,155],[425,331,241,177],[458,362,258,194],[520,412,292,220],[586,450,322,250],[644,504,364,280],[718,560,394,310],[792,624,442,338],[858,666,482,382],[929,711,509,403],[1003,779,565,439],[1091,857,611,461],[1171,911,661,511],[1273,997,715,535],[1367,1059,751,593],[1465,1125,805,625],[1528,1190,868,658],[1628,1264,908,698],[1732,1370,982,742],[1840,1452,1030,790],[1952,1538,1112,842],[2068,1628,1168,898],[2188,1722,1228,958],[2303,1809,1283,983],[2431,1911,1351,1051],[2563,1989,1423,1093],[2699,2099,1499,1139],[2809,2213,1579,1219],[2953,2331,1663,1273]];

	function _isSupportCanvas() {
		return typeof CanvasRenderingContext2D != "undefined";
	}

	// android 2.x doesn't support Data-URI spec
	function _getAndroid() {
		var android = false;
		var sAgent = navigator.userAgent;

		if (/android/i.test(sAgent)) { // android
			android = true;
			var aMat = sAgent.toString().match(/android ([0-9]\.[0-9])/i);

			if (aMat && aMat[1]) {
				android = parseFloat(aMat[1]);
			}
		}

		return android;
	}

	var svgDrawer = (function() {

		var Drawing = function (el, htOption) {
			this._el = el;
			this._htOption = htOption;
		};

		Drawing.prototype.draw = function (oQRCode) {
			var _htOption = this._htOption;
			var _el = this._el;
			var nCount = oQRCode.getModuleCount();
			var nWidth = Math.floor(_htOption.width / nCount);
			var nHeight = Math.floor(_htOption.height / nCount);

			this.clear();

			function makeSVG(tag, attrs) {
				var el = document.createElementNS('http://www.w3.org/2000/svg', tag);
				for (var k in attrs)
					if (attrs.hasOwnProperty(k)) el.setAttribute(k, attrs[k]);
				return el;
			}

			var svg = makeSVG("svg" , {'viewBox': '0 0 ' + String(nCount) + " " + String(nCount), 'width': '100%', 'height': '100%', 'fill': _htOption.colorLight});
			svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
			_el.appendChild(svg);

			svg.appendChild(makeSVG("rect", {"fill": _htOption.colorLight, "width": "100%", "height": "100%"}));
			svg.appendChild(makeSVG("rect", {"fill": _htOption.colorDark, "width": "1", "height": "1", "id": "template"}));

			for (var row = 0; row < nCount; row++) {
				for (var col = 0; col < nCount; col++) {
					if (oQRCode.isDark(row, col)) {
						var child = makeSVG("use", {"x": String(col), "y": String(row)});
						child.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#template")
						svg.appendChild(child);
					}
				}
			}
		};
		Drawing.prototype.clear = function () {
			while (this._el.hasChildNodes())
				this._el.removeChild(this._el.lastChild);
		};
		return Drawing;
	})();

	var useSVG = document.documentElement.tagName.toLowerCase() === "svg";

	// Drawing in DOM by using Table tag
	var Drawing = useSVG ? svgDrawer : !_isSupportCanvas() ? (function () {
		var Drawing = function (el, htOption) {
			this._el = el;
			this._htOption = htOption;
		};

		/**
		 * Draw the QRCode
		 *
		 * @param {QRCode} oQRCode
		 */
		Drawing.prototype.draw = function (oQRCode) {
            var _htOption = this._htOption;
            var _el = this._el;
			var nCount = oQRCode.getModuleCount();
			var nWidth = Math.floor(_htOption.width / nCount);
			var nHeight = Math.floor(_htOption.height / nCount);
			var aHTML = ['<table style="border:0;border-collapse:collapse;">'];

			for (var row = 0; row < nCount; row++) {
				aHTML.push('<tr>');

				for (var col = 0; col < nCount; col++) {
					aHTML.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:' + nWidth + 'px;height:' + nHeight + 'px;background-color:' + (oQRCode.isDark(row, col) ? _htOption.colorDark : _htOption.colorLight) + ';"></td>');
				}

				aHTML.push('</tr>');
			}

			aHTML.push('</table>');
			_el.innerHTML = aHTML.join('');

			// Fix the margin values as real size.
			var elTable = _el.childNodes[0];
			var nLeftMarginTable = (_htOption.width - elTable.offsetWidth) / 2;
			var nTopMarginTable = (_htOption.height - elTable.offsetHeight) / 2;

			if (nLeftMarginTable > 0 && nTopMarginTable > 0) {
				elTable.style.margin = nTopMarginTable + "px " + nLeftMarginTable + "px";
			}
		};

		/**
		 * Clear the QRCode
		 */
		Drawing.prototype.clear = function () {
			this._el.innerHTML = '';
		};

		return Drawing;
	})() : (function () { // Drawing in Canvas
		function _onMakeImage() {
			this._elImage.src = this._elCanvas.toDataURL("image/png");
			this._elImage.style.display = "block";
			this._elCanvas.style.display = "none";
		}

		// Android 2.1 bug workaround
		// http://code.google.com/p/android/issues/detail?id=5141
		if (this._android && this._android <= 2.1) {
	    	var factor = 1 / window.devicePixelRatio;
	        var drawImage = CanvasRenderingContext2D.prototype.drawImage;
	    	CanvasRenderingContext2D.prototype.drawImage = function (image, sx, sy, sw, sh, dx, dy, dw, dh) {
	    		if (("nodeName" in image) && /img/i.test(image.nodeName)) {
		        	for (var i = arguments.length - 1; i >= 1; i--) {
		            	arguments[i] = arguments[i] * factor;
		        	}
	    		} else if (typeof dw == "undefined") {
	    			arguments[1] *= factor;
	    			arguments[2] *= factor;
	    			arguments[3] *= factor;
	    			arguments[4] *= factor;
	    		}

	        	drawImage.apply(this, arguments);
	    	};
		}

		/**
		 * Check whether the user's browser supports Data URI or not
		 *
		 * @private
		 * @param {Function} fSuccess Occurs if it supports Data URI
		 * @param {Function} fFail Occurs if it doesn't support Data URI
		 */
		function _safeSetDataURI(fSuccess, fFail) {
            var self = this;
            self._fFail = fFail;
            self._fSuccess = fSuccess;

            // Check it just once
            if (self._bSupportDataURI === null) {
                var el = document.createElement("img");
                var fOnError = function() {
                    self._bSupportDataURI = false;

                    if (self._fFail) {
                        self._fFail.call(self);
                    }
                };
                var fOnSuccess = function() {
                    self._bSupportDataURI = true;

                    if (self._fSuccess) {
                        self._fSuccess.call(self);
                    }
                };

                el.onabort = fOnError;
                el.onerror = fOnError;
                el.onload = fOnSuccess;
                el.src = "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=="; // the Image contains 1px data.
                return;
            } else if (self._bSupportDataURI === true && self._fSuccess) {
                self._fSuccess.call(self);
            } else if (self._bSupportDataURI === false && self._fFail) {
                self._fFail.call(self);
            }
		};

		/**
		 * Drawing QRCode by using canvas
		 *
		 * @constructor
		 * @param {HTMLElement} el
		 * @param {Object} htOption QRCode Options
		 */
		var Drawing = function (el, htOption) {
    		this._bIsPainted = false;
    		this._android = _getAndroid();

			this._htOption = htOption;
			this._elCanvas = document.createElement("canvas");
			this._elCanvas.width = htOption.width;
			this._elCanvas.height = htOption.height;
			el.appendChild(this._elCanvas);
			this._el = el;
			this._oContext = this._elCanvas.getContext("2d");
			this._bIsPainted = false;
			this._elImage = document.createElement("img");
			this._elImage.alt = "Scan me!";
			this._elImage.style.display = "none";
			this._el.appendChild(this._elImage);
			this._bSupportDataURI = null;
		};

		/**
		 * Draw the QRCode
		 *
		 * @param {QRCode} oQRCode
		 */
		Drawing.prototype.draw = function (oQRCode) {
            var _elImage = this._elImage;
            var _oContext = this._oContext;
            var _htOption = this._htOption;

			var nCount = oQRCode.getModuleCount();
			var nWidth = _htOption.width / nCount;
			var nHeight = _htOption.height / nCount;
			var nRoundedWidth = Math.round(nWidth);
			var nRoundedHeight = Math.round(nHeight);

			_elImage.style.display = "none";
			this.clear();

			for (var row = 0; row < nCount; row++) {
				for (var col = 0; col < nCount; col++) {
					var bIsDark = oQRCode.isDark(row, col);
					var nLeft = col * nWidth;
					var nTop = row * nHeight;
					_oContext.strokeStyle = bIsDark ? _htOption.colorDark : _htOption.colorLight;
					_oContext.lineWidth = 1;
					_oContext.fillStyle = bIsDark ? _htOption.colorDark : _htOption.colorLight;
					_oContext.fillRect(nLeft, nTop, nWidth, nHeight);

					// 안티 앨리어싱 방지 처리
					_oContext.strokeRect(
						Math.floor(nLeft) + 0.5,
						Math.floor(nTop) + 0.5,
						nRoundedWidth,
						nRoundedHeight
					);

					_oContext.strokeRect(
						Math.ceil(nLeft) - 0.5,
						Math.ceil(nTop) - 0.5,
						nRoundedWidth,
						nRoundedHeight
					);
				}
			}

			this._bIsPainted = true;
		};

		/**
		 * Make the image from Canvas if the browser supports Data URI.
		 */
		Drawing.prototype.makeImage = function () {
			if (this._bIsPainted) {
				_safeSetDataURI.call(this, _onMakeImage);
			}
		};

		/**
		 * Return whether the QRCode is painted or not
		 *
		 * @return {Boolean}
		 */
		Drawing.prototype.isPainted = function () {
			return this._bIsPainted;
		};

		/**
		 * Clear the QRCode
		 */
		Drawing.prototype.clear = function () {
			this._oContext.clearRect(0, 0, this._elCanvas.width, this._elCanvas.height);
			this._bIsPainted = false;
		};

		/**
		 * @private
		 * @param {Number} nNumber
		 */
		Drawing.prototype.round = function (nNumber) {
			if (!nNumber) {
				return nNumber;
			}

			return Math.floor(nNumber * 1000) / 1000;
		};

		return Drawing;
	})();

	/**
	 * Get the type by string length
	 *
	 * @private
	 * @param {String} sText
	 * @param {Number} nCorrectLevel
	 * @return {Number} type
	 */
	function _getTypeNumber(sText, nCorrectLevel) {
		var nType = 1;
		var length = _getUTF8Length(sText);

		for (var i = 0, len = QRCodeLimitLength.length; i <= len; i++) {
			var nLimit = 0;

			switch (nCorrectLevel) {
				case QRErrorCorrectLevel.L :
					nLimit = QRCodeLimitLength[i][0];
					break;
				case QRErrorCorrectLevel.M :
					nLimit = QRCodeLimitLength[i][1];
					break;
				case QRErrorCorrectLevel.Q :
					nLimit = QRCodeLimitLength[i][2];
					break;
				case QRErrorCorrectLevel.H :
					nLimit = QRCodeLimitLength[i][3];
					break;
			}

			if (length <= nLimit) {
				break;
			} else {
				nType++;
			}
		}

		if (nType > QRCodeLimitLength.length) {
			throw new Error("Too long data");
		}

		return nType;
	}

	function _getUTF8Length(sText) {
		var replacedText = encodeURI(sText).toString().replace(/\%[0-9a-fA-F]{2}/g, 'a');
		return replacedText.length + (replacedText.length != sText ? 3 : 0);
	}

	/**
	 * @class QRCode
	 * @constructor
	 * @example
	 * new QRCode(document.getElementById("test"), "http://jindo.dev.naver.com/collie");
	 *
	 * @example
	 * var oQRCode = new QRCode("test", {
	 *    text : "http://naver.com",
	 *    width : 128,
	 *    height : 128
	 * });
	 *
	 * oQRCode.clear(); // Clear the QRCode.
	 * oQRCode.makeCode("http://map.naver.com"); // Re-create the QRCode.
	 *
	 * @param {HTMLElement|String} el target element or 'id' attribute of element.
	 * @param {Object|String} vOption
	 * @param {String} vOption.text QRCode link data
	 * @param {Number} [vOption.width=256]
	 * @param {Number} [vOption.height=256]
	 * @param {String} [vOption.colorDark="#000000"]
	 * @param {String} [vOption.colorLight="#ffffff"]
	 * @param {QRCode.CorrectLevel} [vOption.correctLevel=QRCode.CorrectLevel.H] [L|M|Q|H]
	 */
	QRCode = function (el, vOption) {
		this._htOption = {
			width : 256,
			height : 256,
			typeNumber : 4,
			colorDark : "#000000",
			colorLight : "#ffffff",
			correctLevel : QRErrorCorrectLevel.H
		};

		if (typeof vOption === 'string') {
			vOption	= {
				text : vOption
			};
		}

		// Overwrites options
		if (vOption) {
			for (var i in vOption) {
				this._htOption[i] = vOption[i];
			}
		}

		if (typeof el == "string") {
			el = document.getElementById(el);
		}

		if (this._htOption.useSVG) {
			Drawing = svgDrawer;
		}

		this._android = _getAndroid();
		this._el = el;
		this._oQRCode = null;
		this._oDrawing = new Drawing(this._el, this._htOption);

		if (this._htOption.text) {
			this.makeCode(this._htOption.text);
		}
	};

	/**
	 * Make the QRCode
	 *
	 * @param {String} sText link data
	 */
	QRCode.prototype.makeCode = function (sText) {
		this._oQRCode = new QRCodeModel(_getTypeNumber(sText, this._htOption.correctLevel), this._htOption.correctLevel);
		this._oQRCode.addData(sText);
		this._oQRCode.make();
		this._el.title = sText;
		this._oDrawing.draw(this._oQRCode);
		this.makeImage();
	};

	/**
	 * Make the Image from Canvas element
	 * - It occurs automatically
	 * - Android below 3 doesn't support Data-URI spec.
	 *
	 * @private
	 */
	QRCode.prototype.makeImage = function () {
		if (typeof this._oDrawing.makeImage == "function" && (!this._android || this._android >= 3)) {
			this._oDrawing.makeImage();
		}
	};

	/**
	 * Clear the QRCode
	 */
	QRCode.prototype.clear = function () {
		this._oDrawing.clear();
	};

	/**
	 * @name QRCode.CorrectLevel
	 */
	QRCode.CorrectLevel = QRErrorCorrectLevel;
	
	return QRCode;
	
}));


/***/ }),

/***/ "./src/app/components/account-item/account-item.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/account-item/account-item.component.ts ***!
  \*******************************************************************/
/*! exports provided: AccountItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountItemComponent", function() { return AccountItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _bobo_wallet_coin_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bobo-wallet/coin-lib */ "./node_modules/@bobo-wallet/coin-lib/dist/index.js");
/* harmony import */ var _bobo_wallet_coin_lib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_bobo_wallet_coin_lib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _identicon_identicon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../identicon/identicon.component */ "./src/app/components/identicon/identicon.component.ts");
/* harmony import */ var _currency_symbol_currency_symbol_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../currency-symbol/currency-symbol.component */ "./src/app/components/currency-symbol/currency-symbol.component.ts");






var AccountItemComponent = /** @class */ (function () {
    function AccountItemComponent() {
    }
    AccountItemComponent.ɵfac = function AccountItemComponent_Factory(t) { return new (t || AccountItemComponent)(); };
    AccountItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AccountItemComponent, selectors: [["airgap-account-item"]], inputs: { wallet: "wallet" }, decls: 11, vars: 5, consts: [["lines", "none", 1, "ion-no-padding"], ["slot", "start"], [3, "address"], [3, "symbol"], [1, "font--weight__med"], [1, "typography--mono"]], template: function AccountItemComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-item", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-avatar", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "airgap-identicon", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "airgap-currency-symbol", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("address", ctx.wallet.receivingPublicAddress);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("symbol", ctx.wallet.protocol.symbol);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.wallet.protocol.name);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.wallet.protocol.symbol, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.wallet.receivingPublicAddress);
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonAvatar"], _identicon_identicon_component__WEBPACK_IMPORTED_MODULE_3__["IdenticonComponent"], _currency_symbol_currency_symbol_component__WEBPACK_IMPORTED_MODULE_4__["CurrencySymbolComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonLabel"]], styles: ["airgap-currency-symbol[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 24px;\n  top: 32px;\n  height: 24px;\n  width: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWtyYW1iaHVzaGFuL0RvY3VtZW50cy9Cb0JvL3ZhdWx0L3NyYy9hcHAvY29tcG9uZW50cy9hY2NvdW50LWl0ZW0vYWNjb3VudC1pdGVtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2FjY291bnQtaXRlbS9hY2NvdW50LWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWNjb3VudC1pdGVtL2FjY291bnQtaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFpcmdhcC1jdXJyZW5jeS1zeW1ib2wge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDI0cHg7XG4gIHRvcDogMzJweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICB3aWR0aDogMjRweDtcbn1cbiIsImFpcmdhcC1jdXJyZW5jeS1zeW1ib2wge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDI0cHg7XG4gIHRvcDogMzJweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICB3aWR0aDogMjRweDtcbn0iXX0= */"] });
    return AccountItemComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'airgap-account-item',
                templateUrl: './account-item.component.html',
                styleUrls: ['./account-item.component.scss']
            }]
    }], null, { wallet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/address-row/address-row.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/address-row/address-row.component.ts ***!
  \*****************************************************************/
/*! exports provided: AddressRowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressRowComponent", function() { return AddressRowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _identicon_identicon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../identicon/identicon.component */ "./src/app/components/identicon/identicon.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");





function AddressRowComponent_ion_label_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.label);
} }
var AddressRowComponent = /** @class */ (function () {
    function AddressRowComponent() {
    }
    AddressRowComponent.ɵfac = function AddressRowComponent_Factory(t) { return new (t || AddressRowComponent)(); };
    AddressRowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddressRowComponent, selectors: [["airgap-address-row"]], inputs: { label: "label", address: "address" }, decls: 10, vars: 3, consts: [["lines", "none", 1, "ion-no-padding", "ion-align-items-center"], ["size", "3"], [1, "ion-justify-content-center"], [1, "ion-justify-content-center", "ion-align-items-center"], [3, "address"], ["size", "9"], ["position", "stacked", 4, "ngIf"], [1, "typography--mono", "ion-no-margin"], ["position", "stacked"]], template: function AddressRowComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-row", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-col", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-row", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-col", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-avatar", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "airgap-identicon", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-col", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AddressRowComponent_ion_label_7_Template, 2, 1, "ion-label", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("address", ctx.address);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.label);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.address);
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonAvatar"], _identicon_identicon_component__WEBPACK_IMPORTED_MODULE_2__["IdenticonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonLabel"]], styles: ["airgap-identicon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n}\n\n.ion-justify-content-center[_ngcontent-%COMP%] {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWtyYW1iaHVzaGFuL0RvY3VtZW50cy9Cb0JvL3ZhdWx0L3NyYy9hcHAvY29tcG9uZW50cy9hZGRyZXNzLXJvdy9hZGRyZXNzLXJvdy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9hZGRyZXNzLXJvdy9hZGRyZXNzLXJvdy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxhQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FkZHJlc3Mtcm93L2FkZHJlc3Mtcm93LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYWlyZ2FwLWlkZW50aWNvbiB7XG4gIHdpZHRoOiA0OHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG59XG4uaW9uLWp1c3RpZnktY29udGVudC1jZW50ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuIiwiYWlyZ2FwLWlkZW50aWNvbiB7XG4gIHdpZHRoOiA0OHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG59XG5cbi5pb24tanVzdGlmeS1jb250ZW50LWNlbnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59Il19 */"] });
    return AddressRowComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddressRowComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'airgap-address-row',
                templateUrl: './address-row.component.html',
                styleUrls: ['./address-row.component.scss']
            }]
    }], null, { label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], address: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");
/* harmony import */ var angularx_qrcode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularx-qrcode */ "./node_modules/angularx-qrcode/__ivy_ngcc__/dist/index.js");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _account_item_account_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./account-item/account-item.component */ "./src/app/components/account-item/account-item.component.ts");
/* harmony import */ var _address_row_address_row_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./address-row/address-row.component */ "./src/app/components/address-row/address-row.component.ts");
/* harmony import */ var _currency_symbol_currency_symbol_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./currency-symbol/currency-symbol.component */ "./src/app/components/currency-symbol/currency-symbol.component.ts");
/* harmony import */ var _current_secret_current_secret_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./current-secret/current-secret.component */ "./src/app/components/current-secret/current-secret.component.ts");
/* harmony import */ var _entropy_progress_entropy_progress_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./entropy-progress/entropy-progress.component */ "./src/app/components/entropy-progress/entropy-progress.component.ts");
/* harmony import */ var _from_to_from_to_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./from-to/from-to.component */ "./src/app/components/from-to/from-to.component.ts");
/* harmony import */ var _identicon_identicon_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./identicon/identicon.component */ "./src/app/components/identicon/identicon.component.ts");
/* harmony import */ var _progress_footer_progress_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./progress-footer/progress-footer.component */ "./src/app/components/progress-footer/progress-footer.component.ts");
/* harmony import */ var _qr_clipboard_qr_clipboard_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./qr-clipboard/qr-clipboard.component */ "./src/app/components/qr-clipboard/qr-clipboard.component.ts");
/* harmony import */ var _secret_item_secret_item_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./secret-item/secret-item.component */ "./src/app/components/secret-item/secret-item.component.ts");
/* harmony import */ var _signed_transaction_signed_transaction_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./signed-transaction/signed-transaction.component */ "./src/app/components/signed-transaction/signed-transaction.component.ts");
/* harmony import */ var _touch_entropy_touch_entropy_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./touch-entropy/touch-entropy.component */ "./src/app/components/touch-entropy/touch-entropy.component.ts");
/* harmony import */ var _trace_input_trace_input_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./trace-input/trace-input.directive */ "./src/app/components/trace-input/trace-input.directive.ts");
/* harmony import */ var _verify_key_verify_key_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./verify-key/verify-key.component */ "./src/app/components/verify-key/verify-key.component.ts");






















var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ComponentsModule });
    ComponentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ComponentsModule_Factory(t) { return new (t || ComponentsModule)(); }, imports: [[_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], angularx_qrcode__WEBPACK_IMPORTED_MODULE_5__["QRCodeModule"]]] });
    return ComponentsModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ComponentsModule, { declarations: [_address_row_address_row_component__WEBPACK_IMPORTED_MODULE_8__["AddressRowComponent"],
        _currency_symbol_currency_symbol_component__WEBPACK_IMPORTED_MODULE_9__["CurrencySymbolComponent"],
        _current_secret_current_secret_component__WEBPACK_IMPORTED_MODULE_10__["CurrentSecretComponent"],
        _entropy_progress_entropy_progress_component__WEBPACK_IMPORTED_MODULE_11__["EntropyProgressComponent"],
        _from_to_from_to_component__WEBPACK_IMPORTED_MODULE_12__["FromToComponent"],
        _identicon_identicon_component__WEBPACK_IMPORTED_MODULE_13__["IdenticonComponent"],
        _progress_footer_progress_footer_component__WEBPACK_IMPORTED_MODULE_14__["ProgressFooterComponent"],
        _qr_clipboard_qr_clipboard_component__WEBPACK_IMPORTED_MODULE_15__["QrClipboardComponent"],
        _secret_item_secret_item_component__WEBPACK_IMPORTED_MODULE_16__["SecretItemComponent"],
        _signed_transaction_signed_transaction_component__WEBPACK_IMPORTED_MODULE_17__["SignedTransactionComponent"],
        _touch_entropy_touch_entropy_component__WEBPACK_IMPORTED_MODULE_18__["TouchEntropyComponent"],
        _trace_input_trace_input_directive__WEBPACK_IMPORTED_MODULE_19__["TraceInputDirective"],
        _verify_key_verify_key_component__WEBPACK_IMPORTED_MODULE_20__["VerifyKeyComponent"],
        _account_item_account_item_component__WEBPACK_IMPORTED_MODULE_7__["AccountItemComponent"]], imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], angularx_qrcode__WEBPACK_IMPORTED_MODULE_5__["QRCodeModule"]], exports: [_address_row_address_row_component__WEBPACK_IMPORTED_MODULE_8__["AddressRowComponent"],
        _currency_symbol_currency_symbol_component__WEBPACK_IMPORTED_MODULE_9__["CurrencySymbolComponent"],
        _current_secret_current_secret_component__WEBPACK_IMPORTED_MODULE_10__["CurrentSecretComponent"],
        _entropy_progress_entropy_progress_component__WEBPACK_IMPORTED_MODULE_11__["EntropyProgressComponent"],
        _from_to_from_to_component__WEBPACK_IMPORTED_MODULE_12__["FromToComponent"],
        _identicon_identicon_component__WEBPACK_IMPORTED_MODULE_13__["IdenticonComponent"],
        _progress_footer_progress_footer_component__WEBPACK_IMPORTED_MODULE_14__["ProgressFooterComponent"],
        _qr_clipboard_qr_clipboard_component__WEBPACK_IMPORTED_MODULE_15__["QrClipboardComponent"],
        _secret_item_secret_item_component__WEBPACK_IMPORTED_MODULE_16__["SecretItemComponent"],
        _signed_transaction_signed_transaction_component__WEBPACK_IMPORTED_MODULE_17__["SignedTransactionComponent"],
        _touch_entropy_touch_entropy_component__WEBPACK_IMPORTED_MODULE_18__["TouchEntropyComponent"],
        _trace_input_trace_input_directive__WEBPACK_IMPORTED_MODULE_19__["TraceInputDirective"],
        _verify_key_verify_key_component__WEBPACK_IMPORTED_MODULE_20__["VerifyKeyComponent"],
        _account_item_account_item_component__WEBPACK_IMPORTED_MODULE_7__["AccountItemComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ComponentsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _address_row_address_row_component__WEBPACK_IMPORTED_MODULE_8__["AddressRowComponent"],
                    _currency_symbol_currency_symbol_component__WEBPACK_IMPORTED_MODULE_9__["CurrencySymbolComponent"],
                    _current_secret_current_secret_component__WEBPACK_IMPORTED_MODULE_10__["CurrentSecretComponent"],
                    _entropy_progress_entropy_progress_component__WEBPACK_IMPORTED_MODULE_11__["EntropyProgressComponent"],
                    _from_to_from_to_component__WEBPACK_IMPORTED_MODULE_12__["FromToComponent"],
                    _identicon_identicon_component__WEBPACK_IMPORTED_MODULE_13__["IdenticonComponent"],
                    _progress_footer_progress_footer_component__WEBPACK_IMPORTED_MODULE_14__["ProgressFooterComponent"],
                    _qr_clipboard_qr_clipboard_component__WEBPACK_IMPORTED_MODULE_15__["QrClipboardComponent"],
                    _secret_item_secret_item_component__WEBPACK_IMPORTED_MODULE_16__["SecretItemComponent"],
                    _signed_transaction_signed_transaction_component__WEBPACK_IMPORTED_MODULE_17__["SignedTransactionComponent"],
                    _touch_entropy_touch_entropy_component__WEBPACK_IMPORTED_MODULE_18__["TouchEntropyComponent"],
                    _trace_input_trace_input_directive__WEBPACK_IMPORTED_MODULE_19__["TraceInputDirective"],
                    _verify_key_verify_key_component__WEBPACK_IMPORTED_MODULE_20__["VerifyKeyComponent"],
                    _account_item_account_item_component__WEBPACK_IMPORTED_MODULE_7__["AccountItemComponent"]
                ],
                imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], angularx_qrcode__WEBPACK_IMPORTED_MODULE_5__["QRCodeModule"]],
                exports: [
                    _address_row_address_row_component__WEBPACK_IMPORTED_MODULE_8__["AddressRowComponent"],
                    _currency_symbol_currency_symbol_component__WEBPACK_IMPORTED_MODULE_9__["CurrencySymbolComponent"],
                    _current_secret_current_secret_component__WEBPACK_IMPORTED_MODULE_10__["CurrentSecretComponent"],
                    _entropy_progress_entropy_progress_component__WEBPACK_IMPORTED_MODULE_11__["EntropyProgressComponent"],
                    _from_to_from_to_component__WEBPACK_IMPORTED_MODULE_12__["FromToComponent"],
                    _identicon_identicon_component__WEBPACK_IMPORTED_MODULE_13__["IdenticonComponent"],
                    _progress_footer_progress_footer_component__WEBPACK_IMPORTED_MODULE_14__["ProgressFooterComponent"],
                    _qr_clipboard_qr_clipboard_component__WEBPACK_IMPORTED_MODULE_15__["QrClipboardComponent"],
                    _secret_item_secret_item_component__WEBPACK_IMPORTED_MODULE_16__["SecretItemComponent"],
                    _signed_transaction_signed_transaction_component__WEBPACK_IMPORTED_MODULE_17__["SignedTransactionComponent"],
                    _touch_entropy_touch_entropy_component__WEBPACK_IMPORTED_MODULE_18__["TouchEntropyComponent"],
                    _trace_input_trace_input_directive__WEBPACK_IMPORTED_MODULE_19__["TraceInputDirective"],
                    _verify_key_verify_key_component__WEBPACK_IMPORTED_MODULE_20__["VerifyKeyComponent"],
                    _account_item_account_item_component__WEBPACK_IMPORTED_MODULE_7__["AccountItemComponent"]
                ],
                entryComponents: []
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/currency-symbol/currency-symbol.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/currency-symbol/currency-symbol.component.ts ***!
  \*************************************************************************/
/*! exports provided: CurrencySymbolComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencySymbolComponent", function() { return CurrencySymbolComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var CurrencySymbolComponent = /** @class */ (function () {
    function CurrencySymbolComponent() {
        this.symbolURL = 'assets/symbols/generic-coin.svg';
        /* */
    }
    CurrencySymbolComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.symbol) {
            var imageUrl_1 = 'assets/symbols/' + this.symbol.toLowerCase() + '.svg';
            var img = new Image();
            img.onload = function () {
                _this.symbolURL = imageUrl_1;
            };
            img.src = imageUrl_1;
        }
    };
    CurrencySymbolComponent.ɵfac = function CurrencySymbolComponent_Factory(t) { return new (t || CurrencySymbolComponent)(); };
    CurrencySymbolComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CurrencySymbolComponent, selectors: [["airgap-currency-symbol"]], inputs: { symbol: "symbol" }, decls: 1, vars: 1, consts: [[3, "src"]], template: function CurrencySymbolComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.symbolURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3VycmVuY3ktc3ltYm9sL2N1cnJlbmN5LXN5bWJvbC5jb21wb25lbnQuc2NzcyJ9 */"] });
    return CurrencySymbolComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CurrencySymbolComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'airgap-currency-symbol',
                templateUrl: './currency-symbol.component.html',
                styleUrls: ['./currency-symbol.component.scss']
            }]
    }], function () { return []; }, { symbol: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/current-secret/current-secret.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/current-secret/current-secret.component.ts ***!
  \***********************************************************************/
/*! exports provided: CurrentSecretComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentSecretComponent", function() { return CurrentSecretComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_secrets_secrets_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/secrets/secrets.service */ "./src/app/services/secrets/secrets.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");








function CurrentSecretComponent_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r0.currentSecret$).label, " ");
} }
function CurrentSecretComponent_ion_select_7_ion_select_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-select-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var secret_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", secret_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](secret_r3.label);
} }
function CurrentSecretComponent_ion_select_7_Template(rf, ctx) { if (rf & 1) {
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-select", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CurrentSecretComponent_ion_select_7_Template_ion_select_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CurrentSecretComponent_ion_select_7_ion_select_option_2_Template, 2, 2, "ion-select-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx_r1.currentSecret$));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, ctx_r1.secrets$));
} }
var CurrentSecretComponent = /** @class */ (function () {
    function CurrentSecretComponent(secretsService) {
        this.secretsService = secretsService;
        this.secrets$ = this.secretsService.getSecretsObservable();
        this.currentSecret$ = this.secretsService.getActiveSecretObservable();
    }
    CurrentSecretComponent.prototype.onChange = function (newSecret) {
        this.secretsService.setActiveSecret(newSecret);
    };
    CurrentSecretComponent.ɵfac = function CurrentSecretComponent_Factory(t) { return new (t || CurrentSecretComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_secrets_secrets_service__WEBPACK_IMPORTED_MODULE_1__["SecretsService"])); };
    CurrentSecretComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CurrentSecretComponent, selectors: [["airgap-current-secret"]], decls: 10, vars: 13, consts: [["lines", "none", "button", "true", "detail", "false"], ["slot", "start"], ["slot", "end", 4, "ngIf"], ["slot", "end", "interface", "popover", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["slot", "end"], ["slot", "end", "interface", "popover", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function CurrentSecretComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-item", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-label", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CurrentSecretComponent_p_4_Template, 3, 3, "p", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CurrentSecretComponent_ion_select_7_Template, 4, 6, "ion-select", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, "current-secret.label"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 5, ctx.secrets$) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 7, ctx.secrets$).length === 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 9, ctx.secrets$) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 11, ctx.secrets$).length > 1);
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonLabel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSelect"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["SelectValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSelectOption"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], encapsulation: 2 });
    return CurrentSecretComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CurrentSecretComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'airgap-current-secret',
                templateUrl: 'current-secret.component.html'
            }]
    }], function () { return [{ type: _services_secrets_secrets_service__WEBPACK_IMPORTED_MODULE_1__["SecretsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/entropy-progress/entropy-progress.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/entropy-progress/entropy-progress.component.ts ***!
  \***************************************************************************/
/*! exports provided: EntropyProgressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntropyProgressComponent", function() { return EntropyProgressComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var EntropyProgressComponent = /** @class */ (function () {
    function EntropyProgressComponent() {
        this.maxValue = 1;
        this.value = 0;
        this.progressInPercent = 0;
    }
    EntropyProgressComponent.prototype.ngOnChanges = function () {
        this.progressInPercent = this.value > this.maxValue ? 100 : Math.floor((this.value / this.maxValue) * 100);
    };
    EntropyProgressComponent.ɵfac = function EntropyProgressComponent_Factory(t) { return new (t || EntropyProgressComponent)(); };
    EntropyProgressComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EntropyProgressComponent, selectors: [["airgap-entropy-progress"]], inputs: { maxValue: "maxValue", value: "value" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 1, template: function EntropyProgressComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.progressInPercent, "%");
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW50cm9weS1wcm9ncmVzcy9lbnRyb3B5LXByb2dyZXNzLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return EntropyProgressComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EntropyProgressComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'airgap-entropy-progress',
                templateUrl: './entropy-progress.component.html',
                styleUrls: ['./entropy-progress.component.scss']
            }]
    }], null, { maxValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/from-to/from-to.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/from-to/from-to.component.ts ***!
  \*********************************************************/
/*! exports provided: FromToComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FromToComponent", function() { return FromToComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _address_row_address_row_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../address-row/address-row.component */ "./src/app/components/address-row/address-row.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");
/* harmony import */ var _pipes_amount_converter_amount_converter_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pipes/amount-converter/amount-converter.pipe */ "./src/app/pipes/amount-converter/amount-converter.pipe.ts");
/* harmony import */ var _pipes_fee_converter_fee_converter_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/fee-converter/fee-converter.pipe */ "./src/app/pipes/fee-converter/fee-converter.pipe.ts");









function FromToComponent_ng_container_0_airgap_address_row_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "airgap-address-row", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    var address_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, "from-to.from_label"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("address", address_r7);
} }
function FromToComponent_ng_container_0_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "from-to.type_label"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.transaction.extra.type, " ");
} }
var _c0 = function (a0) { return { protocolIdentifier: a0 }; };
function FromToComponent_ng_container_0_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "feeConverter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, "from-to.fee_label"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r3.transaction.data ? "ion-padding-bottom" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 5, ctx_r3.transaction.fee, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx_r3.transaction.protocolIdentifier)), " ");
} }
function FromToComponent_ng_container_0_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "from-to.data_label"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.transaction.data);
} }
function FromToComponent_ng_container_0_airgap_address_row_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "airgap-address-row", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    var address_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, "from-to.to_label"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("address", address_r8);
} }
function FromToComponent_ng_container_0_pre_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r6.transaction.transactionDetails));
} }
var _c1 = function (a0) { return { protocolIdentifier: a0, maxDigits: undefined }; };
function FromToComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FromToComponent_ng_container_0_airgap_address_row_1_Template, 2, 4, "airgap-address-row", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-row", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-col", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-row", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-col", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FromToComponent_ng_container_0_ng_container_7_Template, 7, 4, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "amountConverter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, FromToComponent_ng_container_0_ng_container_14_Template, 7, 10, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, FromToComponent_ng_container_0_ng_container_15_Template, 6, 4, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, FromToComponent_ng_container_0_airgap_address_row_16_Template, 2, 4, "airgap-address-row", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ion-row", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ion-col", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ion-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ion-toggle", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FromToComponent_ng_container_0_Template_ion_toggle_ngModelChange_23_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.displayRawData = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, FromToComponent_ng_container_0_pre_24_Template, 3, 3, "pre", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.transaction.from);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.transaction.extra && ctx_r0.transaction.extra.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 10, "from-to.amount_label"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](13, 12, ctx_r0.transaction.amount, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c1, ctx_r0.transaction.protocolIdentifier)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.transaction.fee);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.transaction.data);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.transaction.to);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 15, "from-to.transaction-details_label"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.displayRawData);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.displayRawData);
} }
var FromToComponent = /** @class */ (function () {
    function FromToComponent() {
        this.displayRawData = false;
    }
    FromToComponent.ɵfac = function FromToComponent_Factory(t) { return new (t || FromToComponent)(); };
    FromToComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FromToComponent, selectors: [["airgap-from-to"]], inputs: { transaction: "transaction" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [3, "address", "label", 4, "ngFor", "ngForOf"], [1, "ion-align-items-center"], ["size", "3", 1, "ion-no-padding"], [1, "ion-justify-content-center"], [1, "line"], ["size", "9", 1, "ion-padding-bottom"], ["position", "stacked", 1, "typography--uppercase"], [1, "typography--mono", "ion-no-margin", "ion-padding-bottom"], [1, "rawdata--container"], [1, "ion-no-padding"], ["lines", "none", 1, "ion-no-padding"], ["slot", "end", 3, "ngModel", "ngModelChange"], ["class", "ion-no-margin", 4, "ngIf"], [3, "address", "label"], ["position", "stacked", 1, "ion-text-uppercase"], [1, "ion-padding-bottom"], [1, "typography--mono"], [1, "typography--mono", "ion-no-margin", 3, "ngClass"], [1, "typography--mono", "ion-no-margin"], [1, "ion-no-margin"]], template: function FromToComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FromToComponent_ng_container_0_Template, 25, 19, "ng-container", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.transaction);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToggle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["BooleanValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _address_row_address_row_component__WEBPACK_IMPORTED_MODULE_4__["AddressRowComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"], _pipes_amount_converter_amount_converter_pipe__WEBPACK_IMPORTED_MODULE_6__["AmountConverterPipe"], _pipes_fee_converter_fee_converter_pipe__WEBPACK_IMPORTED_MODULE_7__["FeeConverterPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["JsonPipe"]], styles: [".line[_ngcontent-%COMP%] {\n  border-left: 1px solid white;\n  height: 96px;\n}\n\n.rawdata--container[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-light);\n  color: var(--ion-color-dark);\n  padding: 8px;\n}\n\n.rawdata--container.ios[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n\n.rawdata--container.md[_ngcontent-%COMP%] {\n  margin-bottom: var(--margin-bottom);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWtyYW1iaHVzaGFuL0RvY3VtZW50cy9Cb0JvL3ZhdWx0L3NyYy9hcHAvY29tcG9uZW50cy9mcm9tLXRvL2Zyb20tdG8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZnJvbS10by9mcm9tLXRvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNEJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUU7RUFDRSx3Q0FBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0UsbUJBQUE7QUNDRjs7QURDQTtFQUNFLG1DQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zyb20tdG8vZnJvbS10by5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saW5lIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB3aGl0ZTtcbiAgaGVpZ2h0OiA5NnB4O1xufVxuLnJhd2RhdGEtLWNvbnRhaW5lciB7XG4gIHByZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgfVxufVxuLnJhd2RhdGEtLWNvbnRhaW5lci5pb3Mge1xuICBtYXJnaW4tYm90dG9tOiA0OHB4O1xufVxuLnJhd2RhdGEtLWNvbnRhaW5lci5tZCB7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLW1hcmdpbi1ib3R0b20pO1xufVxuIiwiLmxpbmUge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHdoaXRlO1xuICBoZWlnaHQ6IDk2cHg7XG59XG5cbi5yYXdkYXRhLS1jb250YWluZXIgcHJlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgcGFkZGluZzogOHB4O1xufVxuXG4ucmF3ZGF0YS0tY29udGFpbmVyLmlvcyB7XG4gIG1hcmdpbi1ib3R0b206IDQ4cHg7XG59XG5cbi5yYXdkYXRhLS1jb250YWluZXIubWQge1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1tYXJnaW4tYm90dG9tKTtcbn0iXX0= */"] });
    return FromToComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FromToComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'airgap-from-to',
                templateUrl: './from-to.component.html',
                styleUrls: ['./from-to.component.scss']
            }]
    }], function () { return []; }, { transaction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/identicon/identicon.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/identicon/identicon.component.ts ***!
  \*************************************************************/
/*! exports provided: IdenticonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdenticonComponent", function() { return IdenticonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _download_blockies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @download/blockies */ "./node_modules/@download/blockies/src/blockies.mjs");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bignumber.js */ "./node_modules/bignumber.js/bignumber.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var myetherwallet_blockies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! myetherwallet-blockies */ "./node_modules/myetherwallet-blockies/dist/blockies.js");
/* harmony import */ var myetherwallet_blockies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(myetherwallet_blockies__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");






function IdenticonComponent_img_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 2);
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.identicon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function IdenticonComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
var IdenticonComponent = /** @class */ (function () {
    function IdenticonComponent() {
        this.identicon = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'; // transparent
    }
    Object.defineProperty(IdenticonComponent.prototype, "address", {
        set: function (value) {
            if (!value) {
                return;
            }
            if (value.startsWith('ak_')) {
                this.identicon = Object(_download_blockies__WEBPACK_IMPORTED_MODULE_1__["createIcon"])({ seed: value }).toDataURL();
            }
            else if (value.startsWith('tz') || value.startsWith('kt')) {
                this.identicon = Object(_download_blockies__WEBPACK_IMPORTED_MODULE_1__["createIcon"])({ seed: "0" + this.b582int(value), spotcolor: '#000' }).toDataURL();
            }
            else {
                this.identicon = Object(myetherwallet_blockies__WEBPACK_IMPORTED_MODULE_3__["toDataUrl"])(value.toLowerCase());
            }
        },
        enumerable: true,
        configurable: true
    });
    IdenticonComponent.prototype.b582int = function (v) {
        var rv = new bignumber_js__WEBPACK_IMPORTED_MODULE_2__["BigNumber"](0);
        var alpha = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
        for (var i = 0; i < v.length; i++) {
            rv = rv.plus(new bignumber_js__WEBPACK_IMPORTED_MODULE_2__["BigNumber"](alpha.indexOf(v[v.length - 1 - i])).multipliedBy(new bignumber_js__WEBPACK_IMPORTED_MODULE_2__["BigNumber"](alpha.length).exponentiatedBy(i)));
        }
        return rv.toString(16);
    };
    IdenticonComponent.ɵfac = function IdenticonComponent_Factory(t) { return new (t || IdenticonComponent)(); };
    IdenticonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IdenticonComponent, selectors: [["airgap-identicon"]], inputs: { address: "address" }, decls: 2, vars: 2, consts: [[3, "src", 4, "ngIf"], [4, "ngIf"], [3, "src"]], template: function IdenticonComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, IdenticonComponent_img_0_Template, 1, 1, "img", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, IdenticonComponent_div_1_Template, 1, 0, "div", 1);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.identicon);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.identicon);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["img[_ngcontent-%COMP%] {\n  overflow: hidden;\n  box-shadow: inset #ffffff33 0 2px 2px, inset rgba(0, 0, 0, 0.3) 0 -1px 8px;\n}\n\ndiv[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/img/identicon_placeholder.png\");\n  background-size: contain;\n}\n\nimg[_ngcontent-%COMP%], div[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  width: inherit;\n  height: inherit;\n  min-width: 40px;\n  min-height: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWtyYW1iaHVzaGFuL0RvY3VtZW50cy9Cb0JvL3ZhdWx0L3NyYy9hcHAvY29tcG9uZW50cy9pZGVudGljb24vaWRlbnRpY29uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2lkZW50aWNvbi9pZGVudGljb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLDBFQUFBO0FDQ0Y7O0FEQ0E7RUFDRSw4REFBQTtFQUNBLHdCQUFBO0FDRUY7O0FEQUE7O0VBRUUsa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0dGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9pZGVudGljb24vaWRlbnRpY29uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm94LXNoYWRvdzogaW5zZXQgI2ZmZmZmZjMzIDAgMnB4IDJweCwgaW5zZXQgcmdiYSgwLCAwLCAwLCAwLjMpIDAgLTFweCA4cHg7XG59XG5kaXYge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1nL2lkZW50aWNvbl9wbGFjZWhvbGRlci5wbmcnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xufVxuaW1nLFxuZGl2IHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogaW5oZXJpdDtcbiAgaGVpZ2h0OiBpbmhlcml0O1xuICBtaW4td2lkdGg6IDQwcHg7XG4gIG1pbi1oZWlnaHQ6IDQwcHg7XG59XG4iLCJpbWcge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3gtc2hhZG93OiBpbnNldCAjZmZmZmZmMzMgMCAycHggMnB4LCBpbnNldCByZ2JhKDAsIDAsIDAsIDAuMykgMCAtMXB4IDhweDtcbn1cblxuZGl2IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWcvaWRlbnRpY29uX3BsYWNlaG9sZGVyLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xufVxuXG5pbWcsXG5kaXYge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiBpbmhlcml0O1xuICBoZWlnaHQ6IGluaGVyaXQ7XG4gIG1pbi13aWR0aDogNDBweDtcbiAgbWluLWhlaWdodDogNDBweDtcbn0iXX0= */"] });
    return IdenticonComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IdenticonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'airgap-identicon',
                templateUrl: './identicon.component.html',
                styleUrls: ['./identicon.component.scss']
            }]
    }], null, { address: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/progress-footer/progress-footer.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/progress-footer/progress-footer.component.ts ***!
  \*************************************************************************/
/*! exports provided: ProgressFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressFooterComponent", function() { return ProgressFooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/navigation/navigation.service */ "./src/app/services/navigation/navigation.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");






function ProgressFooterComponent_ion_icon_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ion-icon", 8);
} if (rf & 2) {
    var n_r1 = ctx.$implicit;
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r0.progress === n_r1 ? "tertiary" : "light");
} }
var ProgressFooterComponent = /** @class */ (function () {
    function ProgressFooterComponent(navigationSerivce) {
        var _this = this;
        this.navigationSerivce = navigationSerivce;
        this.progress = 0;
        this.maxProgress = 1;
        this.rightEnabled = true;
        this.rightLabel = 'Next';
        // make sure to bind the context / method.bind(this)
        this.leftAction = function () {
            _this.navigationSerivce.back();
        };
        this.leftEnabled = true;
        this.leftLabel = 'Back';
        this.progressArray = [];
    }
    ProgressFooterComponent.prototype.ngOnInit = function () {
        this.progressArray = new Array(this.maxProgress).fill(0).map(function (_value, index) { return index; });
        if (!this.rightAction) {
            throw new Error('ProgressFooterComponent: No "rightAction" method passed');
        }
    };
    ProgressFooterComponent.ɵfac = function ProgressFooterComponent_Factory(t) { return new (t || ProgressFooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"])); };
    ProgressFooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProgressFooterComponent, selectors: [["airgap-progress-footer"]], inputs: { progress: "progress", maxProgress: "maxProgress", rightAction: "rightAction", rightEnabled: "rightEnabled", rightLabel: "rightLabel", leftAction: "leftAction", leftEnabled: "leftEnabled", leftLabel: "leftLabel" }, decls: 13, vars: 5, consts: [["color", "primary", 1, "ion-no-padding"], ["size", "3", 1, "ion-no-padding"], ["color", "light", "fill", "clear", 3, "disabled", "click"], ["name", "md-arrow-dropleft"], ["size", "6", 1, "ion-no-padding"], [1, "full--height", "ion-justify-content-center", "ion-align-items-center"], ["name", "md-radio-button-on", 3, "color", 4, "ngFor", "ngForOf"], ["name", "md-arrow-dropright"], ["name", "md-radio-button-on", 3, "color"]], template: function ProgressFooterComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-toolbar", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-row");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-col", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProgressFooterComponent_Template_ion_button_click_3_listener() { return ctx.leftAction(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "ion-icon", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-col", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-row", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProgressFooterComponent_ion_icon_8_Template, 1, 1, "ion-icon", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-col", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ion-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProgressFooterComponent_Template_ion_button_click_10_listener() { return ctx.rightAction(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "ion-icon", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.leftEnabled);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.leftLabel, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.progressArray);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.rightEnabled);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.rightLabel, " ");
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".full--height[_ngcontent-%COMP%] {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWtyYW1iaHVzaGFuL0RvY3VtZW50cy9Cb0JvL3ZhdWx0L3NyYy9hcHAvY29tcG9uZW50cy9wcm9ncmVzcy1mb290ZXIvcHJvZ3Jlc3MtZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Byb2dyZXNzLWZvb3Rlci9wcm9ncmVzcy1mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2dyZXNzLWZvb3Rlci9wcm9ncmVzcy1mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnVsbC0taGVpZ2h0IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuIiwiLmZ1bGwtLWhlaWdodCB7XG4gIGhlaWdodDogMTAwJTtcbn0iXX0= */"] });
    return ProgressFooterComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProgressFooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'airgap-progress-footer',
                templateUrl: './progress-footer.component.html',
                styleUrls: ['./progress-footer.component.scss']
            }]
    }], function () { return [{ type: _services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"] }]; }, { progress: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], maxProgress: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rightAction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rightEnabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rightLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], leftAction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], leftEnabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], leftLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/qr-clipboard/qr-clipboard.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/qr-clipboard/qr-clipboard.component.ts ***!
  \*******************************************************************/
/*! exports provided: QrClipboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QrClipboardComponent", function() { return QrClipboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_clipboard_clipboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/clipboard/clipboard.service */ "./src/app/services/clipboard/clipboard.service.ts");
/* harmony import */ var _services_serializer_serializer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/serializer/serializer.service */ "./src/app/services/serializer/serializer.service.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/utils */ "./src/app/utils/utils.ts");
/* harmony import */ var angularx_qrcode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularx-qrcode */ "./node_modules/angularx-qrcode/__ivy_ngcc__/dist/index.js");









var QrClipboardComponent = /** @class */ (function () {
    function QrClipboardComponent(clipboardService, serializerService) {
        var _this = this;
        this.clipboardService = clipboardService;
        this.serializerService = serializerService;
        this._shouldPrefixSingleQrWithUrl = true;
        this.level = 'L';
        this.qrdataArray = [''];
        this.size = 300;
        this.activeChunk = 0;
        this.timeout = setInterval(function () {
            _this.activeChunk = ++_this.activeChunk % _this.qrdataArray.length;
        }, this.serializerService.displayTimePerChunk);
    }
    Object.defineProperty(QrClipboardComponent.prototype, "qrdata", {
        set: function (value) {
            this._rawValue = value;
            this.convertToDataArray();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QrClipboardComponent.prototype, "shouldPrefixSingleQrWithUrl", {
        set: function (value) {
            this._shouldPrefixSingleQrWithUrl = value;
            this.convertToDataArray();
        },
        enumerable: true,
        configurable: true
    });
    QrClipboardComponent.prototype.convertToDataArray = function () {
        var array = Array.isArray(this._rawValue) ? this._rawValue : [this._rawValue];
        if (array.length === 1) {
            var chunk = array[0];
            var shouldPrefix = !chunk.includes('://') && this._shouldPrefixSingleQrWithUrl;
            this.qrdataArray = [shouldPrefix ? Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["serializedDataToUrlString"])(chunk) : chunk];
        }
        else {
            this.qrdataArray = array;
        }
    };
    QrClipboardComponent.prototype.copyToClipboard = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var copyString, chunk, shouldPrefix;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        copyString = '';
                        if (this._rawValue.length === 1) {
                            chunk = this._rawValue[0];
                            shouldPrefix = !chunk.includes('://') && this._shouldPrefixSingleQrWithUrl;
                            copyString = shouldPrefix ? Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["serializedDataToUrlString"])(chunk) : chunk;
                        }
                        else {
                            copyString = typeof this._rawValue === 'string' ? this._rawValue : this._rawValue.join(',');
                        }
                        return [4 /*yield*/, this.clipboardService.copyAndShowToast(copyString)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    QrClipboardComponent.prototype.ngOnDestroy = function () {
        if (this.timeout) {
            clearInterval(this.timeout);
        }
    };
    QrClipboardComponent.ɵfac = function QrClipboardComponent_Factory(t) { return new (t || QrClipboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_clipboard_clipboard_service__WEBPACK_IMPORTED_MODULE_2__["ClipboardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_serializer_serializer_service__WEBPACK_IMPORTED_MODULE_3__["SerializerService"])); };
    QrClipboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: QrClipboardComponent, selectors: [["airgap-qr-clipboard"]], inputs: { level: "level", qrdata: "qrdata", shouldPrefixSingleQrWithUrl: "shouldPrefixSingleQrWithUrl", size: "size" }, decls: 1, vars: 3, consts: [[3, "level", "qrdata", "size", "click"]], template: function QrClipboardComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "qrcode", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QrClipboardComponent_Template_qrcode_click_0_listener() { return ctx.copyToClipboard(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("level", ctx.level)("qrdata", ctx.qrdataArray[ctx.activeChunk])("size", ctx.size);
        } }, directives: [angularx_qrcode__WEBPACK_IMPORTED_MODULE_5__["QRCodeComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcXItY2xpcGJvYXJkL3FyLWNsaXBib2FyZC5jb21wb25lbnQuc2NzcyJ9 */"] });
    return QrClipboardComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](QrClipboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'airgap-qr-clipboard',
                templateUrl: './qr-clipboard.component.html',
                styleUrls: ['./qr-clipboard.component.scss']
            }]
    }], function () { return [{ type: _services_clipboard_clipboard_service__WEBPACK_IMPORTED_MODULE_2__["ClipboardService"] }, { type: _services_serializer_serializer_service__WEBPACK_IMPORTED_MODULE_3__["SerializerService"] }]; }, { level: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], qrdata: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], shouldPrefixSingleQrWithUrl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], size: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/secret-item/secret-item.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/secret-item/secret-item.component.ts ***!
  \*****************************************************************/
/*! exports provided: SecretItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecretItemComponent", function() { return SecretItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _models_secret__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/secret */ "./src/app/models/secret.ts");
/* harmony import */ var _services_interaction_interaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/interaction/interaction.service */ "./src/app/services/interaction/interaction.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");





var SecretItemComponent = /** @class */ (function () {
    function SecretItemComponent() {
        this.interactionSetting = _services_interaction_interaction_service__WEBPACK_IMPORTED_MODULE_2__["InteractionSetting"];
    }
    SecretItemComponent.ɵfac = function SecretItemComponent_Factory(t) { return new (t || SecretItemComponent)(); };
    SecretItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SecretItemComponent, selectors: [["airgap-secret-item"]], inputs: { secret: "secret" }, decls: 11, vars: 4, consts: [["lines", "none", "detail", "true"], ["slot", "start"], [1, "secret--label"], ["shape", "round", 3, "color"], ["slot", "icon-only", "src", "assets/icons/md-fiber_pin.svg"], ["shape", "round", 1, "ion-margin-horizontal", 3, "color"], ["slot", "icon-only", "src", "assets/icons/md-swap_horiz.svg"], ["slot", "icon-only", "src", "assets/icons/md-group_work.svg"]], template: function SecretItemComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-item", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "ion-icon", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-button", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "ion-icon", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "ion-icon", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.secret.label);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.secret.isParanoia ? "primary" : "tertiary");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.secret.interactionSetting !== ctx.interactionSetting.UNDETERMINED ? "primary" : "tertiary");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.secret.hasSocialRecovery ? "primary" : "tertiary");
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"]], styles: ["ion-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.secret--label[_ngcontent-%COMP%] {\n  font-family: \"Courier New\", Courier, \"Lucida Sans Typewriter\", \"Lucida Typewriter\", monospace;\n  font-weight: 800;\n  font-size: 16px;\n}\n\nion-button[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  --padding-end: 0;\n  --padding-start: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWtyYW1iaHVzaGFuL0RvY3VtZW50cy9Cb0JvL3ZhdWx0L3NyYy9hcHAvY29tcG9uZW50cy9zZWNyZXQtaXRlbS9zZWNyZXQtaXRlbS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zZWNyZXQtaXRlbS9zZWNyZXQtaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUNDRjs7QURDQTtFQUNFLDZGQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDRUY7O0FEQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNHRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VjcmV0LWl0ZW0vc2VjcmV0LWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5zZWNyZXQtLWxhYmVsIHtcbiAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsICdMdWNpZGEgU2FucyBUeXBld3JpdGVyJywgJ0x1Y2lkYSBUeXBld3JpdGVyJywgbW9ub3NwYWNlO1xuICBmb250LXdlaWdodDogODAwO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5pb24tYnV0dG9uIHtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbiAgLS1wYWRkaW5nLWVuZDogMDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xufVxuIiwiaW9uLWljb24ge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5zZWNyZXQtLWxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IFwiQ291cmllciBOZXdcIiwgQ291cmllciwgXCJMdWNpZGEgU2FucyBUeXBld3JpdGVyXCIsIFwiTHVjaWRhIFR5cGV3cml0ZXJcIiwgbW9ub3NwYWNlO1xuICBmb250LXdlaWdodDogODAwO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbmlvbi1idXR0b24ge1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICAtLXBhZGRpbmctZW5kOiAwO1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG59Il19 */"] });
    return SecretItemComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SecretItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'airgap-secret-item',
                templateUrl: './secret-item.component.html',
                styleUrls: ['./secret-item.component.scss']
            }]
    }], null, { secret: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/signed-transaction/signed-transaction.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/signed-transaction/signed-transaction.component.ts ***!
  \*******************************************************************************/
/*! exports provided: SignedTransactionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignedTransactionComponent", function() { return SignedTransactionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _bobo_wallet_coin_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bobo-wallet/coin-lib */ "./node_modules/@bobo-wallet/coin-lib/dist/index.js");
/* harmony import */ var _bobo_wallet_coin_lib__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_bobo_wallet_coin_lib__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bignumber.js */ "./node_modules/bignumber.js/bignumber.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_protocols_protocols_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/protocols/protocols.service */ "./src/app/services/protocols/protocols.service.ts");
/* harmony import */ var _services_serializer_serializer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/serializer/serializer.service */ "./src/app/services/serializer/serializer.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _from_to_from_to_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../from-to/from-to.component */ "./src/app/components/from-to/from-to.component.ts");
/* harmony import */ var _pipes_amount_converter_amount_converter_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../pipes/amount-converter/amount-converter.pipe */ "./src/app/pipes/amount-converter/amount-converter.pipe.ts");
/* harmony import */ var _pipes_fee_converter_fee_converter_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../pipes/fee-converter/fee-converter.pipe */ "./src/app/pipes/fee-converter/fee-converter.pipe.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");















var _c0 = function (a0) { return { protocolIdentifier: a0, maxDigits: undefined }; };
var _c1 = function (a0) { return { protocolIdentifier: a0 }; };
function SignedTransactionComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-row", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-col", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "amountConverter");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-col", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-col", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "feeConverter");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-col", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-col", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Operations");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ion-col", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Fee");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](5, 3, ctx_r0.aggregatedInfo.totalAmount.toFixed(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c0, ctx_r0.airGapTxs[0].protocolIdentifier)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.aggregatedInfo.numberOfTxs);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](12, 6, ctx_r0.aggregatedInfo.totalFees.toFixed(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](11, _c1, ctx_r0.airGapTxs[0].protocolIdentifier)));
} }
function SignedTransactionComponent_airgap_from_to_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "airgap-from-to", 5);
} if (rf & 2) {
    var airGapTx_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("transaction", airGapTx_r3);
} }
function SignedTransactionComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-col", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-col", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-text");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 2, "signed-transaction.transaction-unreadable"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.rawTxData);
} }
var SignedTransactionComponent = /** @class */ (function () {
    function SignedTransactionComponent(protocolsService, serializerService) {
        this.protocolsService = protocolsService;
        this.serializerService = serializerService;
        this.fallbackActivated = false;
        //
    }
    SignedTransactionComponent.prototype.ngOnChanges = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a, err_1, protocol_1, _b, _c, error_1, e_1, protocol_2, unsignedTransaction, _d, _e, error_2, e_2;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        if (!this.syncProtocolString) return [3 /*break*/, 4];
                        _f.label = 1;
                    case 1:
                        _f.trys.push([1, 3, , 4]);
                        _a = this;
                        return [4 /*yield*/, this.serializerService.deserialize(this.syncProtocolString)];
                    case 2:
                        _a.signedTxs = _f.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _f.sent();
                        console.log('ERROR', err_1);
                        this.fallbackActivated = true;
                        this.rawTxData = this.syncProtocolString;
                        return [3 /*break*/, 4];
                    case 4:
                        if (!this.signedTxs) return [3 /*break*/, 12];
                        protocol_1 = Object(_bobo_wallet_coin_lib__WEBPACK_IMPORTED_MODULE_2__["getProtocolByIdentifier"])(this.signedTxs[0].protocol);
                        _f.label = 5;
                    case 5:
                        _f.trys.push([5, 11, , 12]);
                        // tslint:disable-next-line:no-unnecessary-type-assertion
                        _b = this;
                        return [4 /*yield*/, Promise.all(this.signedTxs.map(function (signedTx) { return protocol_1.getTransactionDetailsFromSigned(signedTx.payload); }))];
                    case 6:
                        // tslint:disable-next-line:no-unnecessary-type-assertion
                        _b.airGapTxs = (_f.sent()).reduce(function (flatten, toFlatten) { return flatten.concat(toFlatten); });
                        if (this.airGapTxs.length > 1 &&
                            this.airGapTxs.every(function (tx) { return tx.protocolIdentifier === _this.airGapTxs[0].protocolIdentifier; })) {
                            this.aggregatedInfo = {
                                numberOfTxs: this.airGapTxs.length,
                                totalAmount: this.airGapTxs.reduce(function (pv, cv) { return pv.plus(cv.amount); }, new bignumber_js__WEBPACK_IMPORTED_MODULE_3___default.a(0)),
                                totalFees: this.airGapTxs.reduce(function (pv, cv) { return pv.plus(cv.fee); }, new bignumber_js__WEBPACK_IMPORTED_MODULE_3___default.a(0))
                            };
                        }
                        _f.label = 7;
                    case 7:
                        _f.trys.push([7, 9, , 10]);
                        if (this.airGapTxs.length !== 1) {
                            throw Error('TokenTransferDetails returned more than 1 transaction!');
                        }
                        _c = this;
                        return [4 /*yield*/, this.protocolsService.getTokenTransferDetailsFromSigned(this.airGapTxs[0], this.signedTxs[0].payload)];
                    case 8:
                        _c.airGapTxs = [
                            _f.sent()
                        ];
                        return [3 /*break*/, 10];
                    case 9:
                        error_1 = _f.sent();
                        console.error('unable to parse token transaction, using ethereum transaction details instead');
                        return [3 /*break*/, 10];
                    case 10:
                        this.fallbackActivated = false;
                        return [3 /*break*/, 12];
                    case 11:
                        e_1 = _f.sent();
                        this.fallbackActivated = true;
                        // tslint:disable-next-line:no-unnecessary-type-assertion
                        this.rawTxData = this.signedTxs[0].payload.transaction;
                        return [3 /*break*/, 12];
                    case 12:
                        if (!(this.unsignedTxs && this.unsignedTxs.length > 0)) return [3 /*break*/, 20];
                        protocol_2 = Object(_bobo_wallet_coin_lib__WEBPACK_IMPORTED_MODULE_2__["getProtocolByIdentifier"])(this.unsignedTxs[0].protocol);
                        _f.label = 13;
                    case 13:
                        _f.trys.push([13, 19, , 20]);
                        unsignedTransaction = this.unsignedTxs[0].payload;
                        _d = this;
                        return [4 /*yield*/, Promise.all(this.unsignedTxs.map(function (unsignedTx) { return protocol_2.getTransactionDetails(unsignedTx.payload); }))];
                    case 14:
                        _d.airGapTxs = (_f.sent()).reduce(function (flatten, toFlatten) { return flatten.concat(toFlatten); }, []);
                        console.log(this.airGapTxs);
                        if (this.airGapTxs.length > 1 &&
                            this.airGapTxs.every(function (tx) { return tx.protocolIdentifier === _this.airGapTxs[0].protocolIdentifier; })) {
                            this.aggregatedInfo = {
                                numberOfTxs: this.airGapTxs.length,
                                totalAmount: this.airGapTxs.reduce(function (pv, cv) { return pv.plus(cv.amount); }, new bignumber_js__WEBPACK_IMPORTED_MODULE_3___default.a(0)),
                                totalFees: this.airGapTxs.reduce(function (pv, cv) { return pv.plus(cv.fee); }, new bignumber_js__WEBPACK_IMPORTED_MODULE_3___default.a(0))
                            };
                        }
                        _f.label = 15;
                    case 15:
                        _f.trys.push([15, 17, , 18]);
                        if (this.airGapTxs.length !== 1) {
                            throw Error('TokenTransferDetails returned more than 1 transaction!');
                        }
                        _e = this;
                        return [4 /*yield*/, this.protocolsService.getTokenTransferDetails(this.airGapTxs[0], unsignedTransaction)];
                    case 16:
                        _e.airGapTxs = [_f.sent()];
                        return [3 /*break*/, 18];
                    case 17:
                        error_2 = _f.sent();
                        console.error('unable to parse token transaction, using ethereum transaction details instead');
                        return [3 /*break*/, 18];
                    case 18:
                        this.fallbackActivated = false;
                        return [3 /*break*/, 20];
                    case 19:
                        e_2 = _f.sent();
                        this.fallbackActivated = true;
                        // tslint:disable-next-line:no-unnecessary-type-assertion
                        this.rawTxData = JSON.stringify(this.unsignedTxs[0].payload.transaction);
                        return [3 /*break*/, 20];
                    case 20: return [2 /*return*/];
                }
            });
        });
    };
    SignedTransactionComponent.ɵfac = function SignedTransactionComponent_Factory(t) { return new (t || SignedTransactionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_protocols_protocols_service__WEBPACK_IMPORTED_MODULE_4__["ProtocolsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_serializer_serializer_service__WEBPACK_IMPORTED_MODULE_5__["SerializerService"])); };
    SignedTransactionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SignedTransactionComponent, selectors: [["airgap-signed-transaction"]], inputs: { signedTxs: "signedTxs", unsignedTxs: "unsignedTxs", syncProtocolString: "syncProtocolString" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 3, vars: 3, consts: [[4, "ngIf"], [3, "transaction", 4, "ngFor", "ngForOf"], [1, "ion-padding-bottom", "ion-text-center"], ["size", "4", 1, "content--align__center-center"], ["size", "4"], [3, "transaction"], ["size", "2", 1, "ion-margin-top"], ["color", "white", "src", "assets/icons/md-warning.svg", 1, "warning-icon"], ["size", "10"], [1, "text--selectable", "typography--mono", "word-break__all"]], template: function SignedTransactionComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SignedTransactionComponent_ng_container_0_Template, 22, 13, "ng-container", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SignedTransactionComponent_airgap_from_to_1_Template, 1, 1, "airgap-from-to", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SignedTransactionComponent_ng_container_2_Template, 11, 4, "ng-container", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.airGapTxs && ctx.airGapTxs.length > 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.airGapTxs);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.fallbackActivated);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonCol"], _from_to_from_to_component__WEBPACK_IMPORTED_MODULE_8__["FromToComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonText"]], pipes: [_pipes_amount_converter_amount_converter_pipe__WEBPACK_IMPORTED_MODULE_9__["AmountConverterPipe"], _pipes_fee_converter_fee_converter_pipe__WEBPACK_IMPORTED_MODULE_10__["FeeConverterPipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslatePipe"]], styles: [".warning-icon[_ngcontent-%COMP%] {\n  font-size: 4rem;\n}\n\n.word-break__all[_ngcontent-%COMP%] {\n  word-break: break-all;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWtyYW1iaHVzaGFuL0RvY3VtZW50cy9Cb0JvL3ZhdWx0L3NyYy9hcHAvY29tcG9uZW50cy9zaWduZWQtdHJhbnNhY3Rpb24vc2lnbmVkLXRyYW5zYWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NpZ25lZC10cmFuc2FjdGlvbi9zaWduZWQtdHJhbnNhY3Rpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxxQkFBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaWduZWQtdHJhbnNhY3Rpb24vc2lnbmVkLXRyYW5zYWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndhcm5pbmctaWNvbiB7XG4gIGZvbnQtc2l6ZTogNHJlbTtcbn1cbi53b3JkLWJyZWFrX19hbGwge1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG59XG4iLCIud2FybmluZy1pY29uIHtcbiAgZm9udC1zaXplOiA0cmVtO1xufVxuXG4ud29yZC1icmVha19fYWxsIHtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xufSJdfQ== */"] });
    return SignedTransactionComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SignedTransactionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'airgap-signed-transaction',
                templateUrl: './signed-transaction.component.html',
                styleUrls: ['./signed-transaction.component.scss']
            }]
    }], function () { return [{ type: _services_protocols_protocols_service__WEBPACK_IMPORTED_MODULE_4__["ProtocolsService"] }, { type: _services_serializer_serializer_service__WEBPACK_IMPORTED_MODULE_5__["SerializerService"] }]; }, { signedTxs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], unsignedTxs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], syncProtocolString: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/touch-entropy/touch-entropy.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/touch-entropy/touch-entropy.component.ts ***!
  \*********************************************************************/
/*! exports provided: TouchEntropyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TouchEntropyComponent", function() { return TouchEntropyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _assets_workers_entropyCalculatorWorker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/workers/entropyCalculatorWorker */ "./src/assets/workers/entropyCalculatorWorker.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _trace_input_trace_input_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../trace-input/trace-input.directive */ "./src/app/components/trace-input/trace-input.directive.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");







var _c0 = ["canvas"];
var blobURL = window.URL.createObjectURL(new Blob([_assets_workers_entropyCalculatorWorker__WEBPACK_IMPORTED_MODULE_2__["default"]]));
var entropyCalculatorWorker = new Worker(blobURL);
var TouchEntropyComponent = /** @class */ (function () {
    function TouchEntropyComponent(renderer) {
        var _this = this;
        this.renderer = renderer;
        this.cursorSize = 2;
        this.randomFactorInPercent = 10;
        this.cursorColor = 'white';
        this.collectedEntropyPercentage = 0;
        this.isDrawing = false;
        this.entropyObservable = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            entropyCalculatorWorker.onmessage = function (event) {
                _this.collectedEntropyPercentage += event.data.entropyMeasure;
                observer.next({ entropyHex: event.data.entropyHex });
            };
            _this.handler = function (numbers) {
                var buffer1 = _this.arrayBufferFromIntArray(numbers);
                entropyCalculatorWorker.postMessage({ entropyBuffer: buffer1 }, [buffer1]);
            };
        });
    }
    TouchEntropyComponent.prototype.ngAfterViewInit = function () {
        this.canvas = this.canvasRef.nativeElement;
        this.initCanvas();
    };
    TouchEntropyComponent.prototype.initCanvas = function () {
        var _this = this;
        if (!this.isCanvasReady()) {
            setTimeout(function () {
                _this.initCanvas();
            }, 50);
            return;
        }
        this.canvas.setAttribute('height', this.canvas.parentElement.getBoundingClientRect().height + "px"); // We know parentElement needs to be defined here because we check it in the ready function
        this.canvas.setAttribute('width', this.canvas.parentElement.getBoundingClientRect().width + "px"); // We know parentElement needs to be defined here because we check it in the ready function
        var context = this.canvas.getContext('2d');
        if (context) {
            this.context = context;
        }
        this.context.fillStyle = this.cursorColor;
        this.rectangle = this.canvas.getBoundingClientRect();
    };
    TouchEntropyComponent.prototype.isCanvasReady = function () {
        if (this.canvas.parentElement) {
            return this.canvas.parentElement.getBoundingClientRect().height > 0;
        }
        else {
            return false;
        }
    };
    TouchEntropyComponent.prototype.start = function () {
        var _this = this;
        this.collectedEntropyPercentage = 0;
        return new Promise(function (resolve) {
            _this.renderer.listen(_this.canvas, 'mousedown', function () {
                _this.isDrawing = true;
            });
            _this.renderer.listen(_this.canvas, 'touchstart', function () {
                _this.isDrawing = true;
            });
            _this.renderer.listen(_this.canvas, 'mouseup', function () {
                _this.isDrawing = false;
            });
            _this.renderer.listen(_this.canvas, 'touchend', function () {
                _this.isDrawing = false;
            });
            _this.renderer.listen(_this.canvas, 'mousemove', function (event) {
                if (_this.isDrawing) {
                    _this.collectEntropy(event.clientX, event.clientY);
                }
            });
            _this.renderer.listen(_this.canvas, 'touchmove', function (event) {
                if (_this.isDrawing) {
                    _this.collectEntropy(event.touches[0].clientX, event.touches[0].clientY);
                }
            });
            resolve();
        });
    };
    TouchEntropyComponent.prototype.stop = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.isDrawing = false;
            resolve();
        });
    };
    TouchEntropyComponent.prototype.collectEntropy = function (x, y) {
        var currX = Math.ceil(((x - this.rectangle.left) / (this.rectangle.right - this.rectangle.left)) * this.canvas.width);
        var currY = Math.ceil(((y - this.rectangle.top) / (this.rectangle.bottom - this.rectangle.top)) * this.canvas.height) - 56;
        if (this.getRandomIntInclusive(0, 100) <= this.randomFactorInPercent) {
            var timeStampInMs = window.performance && window.performance.now && window.performance.timing && window.performance.timing.navigationStart
                ? window.performance.now() + window.performance.timing.navigationStart
                : Date.now();
            if (this.handler) {
                this.handler([currX, currY, timeStampInMs]);
            }
        }
    };
    TouchEntropyComponent.prototype.getEntropyUpdateObservable = function () {
        return this.entropyObservable;
    };
    TouchEntropyComponent.prototype.getRandomIntInclusive = function (min, max) {
        var randomBuffer = new Uint32Array(1);
        window.crypto.getRandomValues(randomBuffer);
        var randomNumber = randomBuffer[0] / (0xffffffff + 1);
        var roundedMin = Math.ceil(min);
        var roundedMax = Math.floor(max);
        return Math.floor(randomNumber * (roundedMax - roundedMin + 1)) + roundedMin;
    };
    TouchEntropyComponent.prototype.arrayBufferFromIntArray = function (array) {
        var buffer = new ArrayBuffer(array.length * 2);
        var bufView = new Uint8Array(buffer);
        for (var i = 0; i < array.length; i++) {
            bufView[i] = Math.abs(array[i] * 10000);
        }
        return buffer;
    };
    TouchEntropyComponent.prototype.getCollectedEntropyPercentage = function () {
        return this.collectedEntropyPercentage / 10;
    };
    TouchEntropyComponent.ɵfac = function TouchEntropyComponent_Factory(t) { return new (t || TouchEntropyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
    TouchEntropyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TouchEntropyComponent, selectors: [["airgap-touch-entropy"]], viewQuery: function TouchEntropyComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.canvasRef = _t.first);
        } }, inputs: { cursorSize: "cursorSize", randomFactorInPercent: "randomFactorInPercent", cursorColor: "cursorColor" }, decls: 6, vars: 3, consts: [[1, "ion-align-items-center", "ion-justify-content-center", "touch-entropy__container"], ["airgapTraceInput", ""], ["canvas", ""]], template: function TouchEntropyComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-row", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "canvas", 1, 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "touch-entropy.text"));
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRow"], _trace_input_trace_input_directive__WEBPACK_IMPORTED_MODULE_4__["TraceInputDirective"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]], styles: [".touch-entropy__container[_ngcontent-%COMP%] {\n  position: relative;\n  height: 25vh;\n}\n.touch-entropy__container[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border: 1px solid;\n  border-radius: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWtyYW1iaHVzaGFuL0RvY3VtZW50cy9Cb0JvL3ZhdWx0L3NyYy9hcHAvY29tcG9uZW50cy90b3VjaC1lbnRyb3B5L3RvdWNoLWVudHJvcHkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvdG91Y2gtZW50cm9weS90b3VjaC1lbnRyb3B5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0FDQ0Y7QURBRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3RvdWNoLWVudHJvcHkvdG91Y2gtZW50cm9weS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3VjaC1lbnRyb3B5X19jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMjV2aDtcbiAgY2FudmFzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgfVxufVxuIiwiLnRvdWNoLWVudHJvcHlfX2NvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAyNXZoO1xufVxuLnRvdWNoLWVudHJvcHlfX2NvbnRhaW5lciBjYW52YXMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59Il19 */"] });
    return TouchEntropyComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TouchEntropyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'airgap-touch-entropy',
                templateUrl: './touch-entropy.component.html',
                styleUrls: ['./touch-entropy.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { cursorSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], randomFactorInPercent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cursorColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], canvasRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['canvas', { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/components/trace-input/trace-input.directive.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/trace-input/trace-input.directive.ts ***!
  \*****************************************************************/
/*! exports provided: TraceInputDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TraceInputDirective", function() { return TraceInputDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");



var TraceInputDirective = /** @class */ (function () {
    function TraceInputDirective(elementRef, ngZone, renderer) {
        this.ngZone = ngZone;
        this.renderer = renderer;
        this.mousePos = { x: 0, y: 0 };
        this.lastPos = this.mousePos;
        this.canvas = elementRef.nativeElement;
        var context = this.canvas.getContext('2d');
        if (context) {
            this.context = context;
        }
    }
    TraceInputDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.renderer.listen(this.canvas, 'mousedown', function (event) {
            _this.lastPos = _this.getMousePosition(_this.canvas, event);
            _this.mousePos = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.lastPos);
            _this.isDrawing = true;
            _this.startDrawing();
        });
        this.renderer.listen(this.canvas, 'touchstart', function (event) {
            _this.lastPos = _this.getTouchPosition(_this.canvas, event);
            _this.mousePos = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.lastPos);
            _this.isDrawing = true;
            _this.startDrawing();
        });
        this.renderer.listen(this.canvas, 'mouseup', function (event) {
            _this.lastPos = _this.getMousePosition(_this.canvas, event);
            _this.isDrawing = false;
        });
        this.renderer.listen(this.canvas, 'touchend', function (event) {
            _this.lastPos = _this.getTouchPosition(_this.canvas, event);
            _this.isDrawing = false;
        });
        this.renderer.listen(this.canvas, 'mousemove', function (event) {
            _this.mousePos = _this.getMousePosition(_this.canvas, event);
        });
        this.renderer.listen(this.canvas, 'touchmove', function (event) {
            _this.mousePos = _this.getTouchPosition(_this.canvas, event);
        });
    };
    TraceInputDirective.prototype.startDrawing = function () {
        var _this = this;
        if (!this.isDrawing) {
            return;
        }
        this.ngZone.runOutsideAngular(function () {
            requestAnimationFrame(function () {
                _this.renderEntropyDrawing();
            });
        });
    };
    TraceInputDirective.prototype.getMousePosition = function (canvas, event) {
        var rect = canvas.getBoundingClientRect();
        return {
            x: event.clientX - rect.left,
            y: event.clientY - rect.top
        };
    };
    TraceInputDirective.prototype.getTouchPosition = function (canvas, event) {
        var rect = canvas.getBoundingClientRect();
        if (!event.touches[0]) {
            return this.lastPos;
        }
        return {
            x: event.touches[0].clientX - rect.left,
            y: event.touches[0].clientY - rect.top
        };
    };
    TraceInputDirective.prototype.renderEntropyDrawing = function () {
        this.context.strokeStyle = 'rgb(255, 255, 255)';
        this.context.moveTo(this.lastPos.x, this.lastPos.y);
        this.context.lineTo(this.mousePos.x, this.mousePos.y);
        this.lastPos = this.mousePos;
        this.context.stroke();
        this.startDrawing();
    };
    TraceInputDirective.ɵfac = function TraceInputDirective_Factory(t) { return new (t || TraceInputDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"])); };
    TraceInputDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: TraceInputDirective, selectors: [["", "airgapTraceInput", ""]] });
    return TraceInputDirective;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TraceInputDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[airgapTraceInput]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/verify-key/verify-key.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/verify-key/verify-key.component.ts ***!
  \***************************************************************/
/*! exports provided: VerifyKeyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyKeyComponent", function() { return VerifyKeyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var bip39__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bip39 */ "./node_modules/bip39/index.js");
/* harmony import */ var bip39__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bip39__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_sha3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-sha3 */ "./node_modules/js-sha3/src/sha3.js");
/* harmony import */ var js_sha3__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_sha3__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");







function VerifyKeyComponent_ng_container_3_ion_button_1_Template(rf, ctx) { if (rf & 1) {
    var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VerifyKeyComponent_ng_container_3_ion_button_1_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); var i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.selectWord(i_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("size__xs", ctx_r6.splittedSecret.length > 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r6.selectedWordIndex === i_r5 ? "primary" : "tertiary");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.currentWords[i_r5], " ");
} }
function VerifyKeyComponent_ng_container_3_ion_button_2_Template(rf, ctx) { if (rf & 1) {
    var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VerifyKeyComponent_ng_container_3_ion_button_2_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.selectEmptySpot(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("size__xs", ctx_r7.splittedSecret.length > 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", i_r5 === ctx_r7.emptySpot(ctx_r7.currentWords) ? "primary" : "tertiary");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r5 + 1, " ");
} }
function VerifyKeyComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VerifyKeyComponent_ng_container_3_ion_button_1_Template, 2, 4, "ion-button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, VerifyKeyComponent_ng_container_3_ion_button_2_Template, 2, 4, "ion-button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var i_r5 = ctx.index;
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.currentWords[i_r5]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.currentWords[i_r5]);
} }
function VerifyKeyComponent_ion_col_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-col", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "verify-key.incorrect_text"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function VerifyKeyComponent_ion_col_7_Template(rf, ctx) { if (rf & 1) {
    var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-col", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VerifyKeyComponent_ion_col_7_Template_ion_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.continue(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "verify-key.success_text"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 4, "verify-key.continue_label"), " ");
} }
function VerifyKeyComponent_ion_col_8_ion_row_1_Template(rf, ctx) { if (rf & 1) {
    var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-row", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VerifyKeyComponent_ion_col_8_ion_row_1_Template_ion_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); var word_r18 = ctx.$implicit; var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r19.useWord(word_r18); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var word_r18 = ctx.$implicit;
    var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r17.isSelectedWord(word_r18) ? "primary" : "tertiary");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", word_r18, " ");
} }
function VerifyKeyComponent_ion_col_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-col", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VerifyKeyComponent_ion_col_8_ion_row_1_Template, 4, 2, "ion-row", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.promptedWords);
} }
var ADDITIONAL_WORDS = 2;
var VerifyKeyComponent = /** @class */ (function () {
    function VerifyKeyComponent() {
        this.onContinue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isCompleted = false;
        this.splittedSecret = [];
        this.currentWords = [];
        this.promptedWords = [];
        this.selectedWordIndex = null;
    }
    VerifyKeyComponent.prototype.ngOnInit = function () {
        this.splittedSecret = this.secret.toLowerCase().split(' ');
        this.reset();
    };
    VerifyKeyComponent.prototype.continue = function () {
        this.onContinue.emit();
    };
    VerifyKeyComponent.prototype.promptNextWord = function () {
        var _this = this;
        this.promptedWords = [];
        var correctWord = this.splittedSecret[this.emptySpot(this.currentWords)];
        this.promptedWords.push(correctWord);
        var wordList = bip39__WEBPACK_IMPORTED_MODULE_1__["wordlists"].EN;
        for (var i = 0; i < ADDITIONAL_WORDS; i++) {
            var filteredList = wordList.filter(function (originalWord) { return !_this.splittedSecret.find(function (word) { return word === originalWord; }); });
            var hashedWord = Object(js_sha3__WEBPACK_IMPORTED_MODULE_2__["sha3_256"])(correctWord);
            for (var hashRuns = 0; hashRuns <= i; hashRuns++) {
                hashedWord = Object(js_sha3__WEBPACK_IMPORTED_MODULE_2__["sha3_256"])(hashedWord);
            }
            var additionalWord = filteredList[this.stringToIntHash(hashedWord, 0, filteredList.length)];
            this.promptedWords.push(additionalWord);
        }
        this.promptedWords = this.shuffle(this.promptedWords);
    };
    VerifyKeyComponent.prototype.shuffle = function (a) {
        var counter = a.length;
        while (counter > 0) {
            var index = Math.floor(Math.random() * counter);
            counter--;
            var temp = a[counter];
            a[counter] = a[index];
            a[index] = temp;
        }
        return a;
    };
    VerifyKeyComponent.prototype.stringToIntHash = function (str, lowerbound, upperbound) {
        var result = 0;
        for (var i = 0; i < str.length; i++) {
            result = result + str.charCodeAt(i);
        }
        return (result % (upperbound - lowerbound)) + lowerbound;
    };
    VerifyKeyComponent.prototype.isSelectedWord = function (word) {
        if (this.selectedWordIndex !== null) {
            return this.currentWords[this.selectedWordIndex] === word;
        }
        return false;
    };
    VerifyKeyComponent.prototype.selectEmptySpot = function () {
        this.selectedWordIndex = null;
        this.promptNextWord();
    };
    VerifyKeyComponent.prototype.useWord = function (word) {
        var index = this.emptySpot(this.currentWords);
        // unselect any selected words
        this.selectedWordIndex = null;
        this.currentWords[index] = word;
        // prompt next word
        if (!this.isFull() && index < this.splittedSecret.length - 1) {
            this.promptNextWord();
            return;
        }
        if (this.isFull()) {
            // if all words are placed, check for correctness, else next
            this.promptedWords = [];
            this.setCompletedState(this.isCorrect());
        }
    };
    VerifyKeyComponent.prototype.setCompletedState = function (state) {
        this.isCompleted = state;
        this.onComplete.emit(state);
    };
    VerifyKeyComponent.prototype.emptySpot = function (array) {
        if (this.selectedWordIndex !== null) {
            return this.selectedWordIndex;
        }
        return array.findIndex(function (word) { return word === null; });
    };
    VerifyKeyComponent.prototype.selectWord = function (index) {
        this.selectedWordIndex = index;
        this.promptNextWord();
    };
    VerifyKeyComponent.prototype.reset = function () {
        this.selectedWordIndex = null;
        this.currentWords = Array(this.splittedSecret.length).fill(null);
        this.promptNextWord();
    };
    VerifyKeyComponent.prototype.isFull = function () {
        return this.currentWords.filter(function (word) { return word !== null; }).length === this.splittedSecret.length;
    };
    VerifyKeyComponent.prototype.isCorrect = function () {
        return (this.currentWords
            .map(function (word) { return (word ? word : '-'); })
            .join(' ')
            .trim() === this.secret.trim());
    };
    VerifyKeyComponent.ɵfac = function VerifyKeyComponent_Factory(t) { return new (t || VerifyKeyComponent)(); };
    VerifyKeyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VerifyKeyComponent, selectors: [["airgap-verify-key"]], inputs: { secret: "secret" }, outputs: { onContinue: "onContinue", onComplete: "onComplete" }, decls: 9, vars: 4, consts: [[1, "secret--container-60", "ion-align-items-center"], [1, "secret--container__inner", "ion-justify-content-center"], [4, "ngFor", "ngForOf"], [1, "secret--container-40", "ion-align-items-center"], ["id", "error", "class", "ion-padding", 4, "ngIf"], ["id", "message", "class", "ion-padding-top ion-padding-horizontal", 4, "ngIf"], ["id", "wordSelector", "class", "ion-padding-top", 4, "ngIf"], ["shape", "round", "size", "small", "class", "typography--mono", 3, "size__xs", "color", "click", 4, "ngIf"], ["shape", "round", "fill", "outline", "size", "small", "class", "typography--mono", "class", "word-placeholder", 3, "size__xs", "color", "click", 4, "ngIf"], ["shape", "round", "size", "small", 1, "typography--mono", 3, "color", "click"], ["shape", "round", "fill", "outline", "size", "small", 1, "word-placeholder", 3, "color", "click"], ["id", "error", 1, "ion-padding"], [3, "innerHTML"], ["id", "message", 1, "ion-padding-top", "ion-padding-horizontal"], [1, "ion-padding-bottom"], ["color", "primary", "expand", "block", "shape", "round", 3, "click"], ["id", "wordSelector", 1, "ion-padding-top"], ["class", "ion-padding-horizontal", 4, "ngFor", "ngForOf"], [1, "ion-padding-horizontal"], ["expand", "block", "shape", "round", 1, "typography--mono", 3, "color", "click"]], template: function VerifyKeyComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-row", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-col");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-row", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, VerifyKeyComponent_ng_container_3_Template, 3, 2, "ng-container", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-row", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, VerifyKeyComponent_ion_col_6_Template, 3, 3, "ion-col", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, VerifyKeyComponent_ion_col_7_Template, 7, 6, "ion-col", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, VerifyKeyComponent_ion_col_8_Template, 2, 1, "ion-col", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.splittedSecret);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isCompleted && !ctx.isCorrect() && ctx.promptedWords.length === 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isCompleted && ctx.isCorrect() && ctx.promptedWords.length === 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.promptedWords.length > 0);
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCol"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButton"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]], styles: [".secret--container-60[_ngcontent-%COMP%] {\n  height: calc(60% - 36px);\n}\n\n.secret--container-40[_ngcontent-%COMP%] {\n  height: calc(40%- 36px);\n}\n\nhr[_ngcontent-%COMP%] {\n  border: 2px dashed var(--ion-color-primary);\n  border-style: none none dashed;\n  margin: 8px 0;\n}\n\n.word-placeholder[_ngcontent-%COMP%] {\n  min-width: 48px;\n}\n\n.size__xs[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n\n.typography--mono[_ngcontent-%COMP%] {\n  text-transform: lowercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWtyYW1iaHVzaGFuL0RvY3VtZW50cy9Cb0JvL3ZhdWx0L3NyYy9hcHAvY29tcG9uZW50cy92ZXJpZnkta2V5L3ZlcmlmeS1rZXkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvdmVyaWZ5LWtleS92ZXJpZnkta2V5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQUE7QUNDRjs7QURDQTtFQUNFLHVCQUFBO0FDRUY7O0FEQUE7RUFDRSwyQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtBQ0dGOztBRERBO0VBQ0UsZUFBQTtBQ0lGOztBREZBO0VBQ0UsZUFBQTtBQ0tGOztBREhBO0VBQ0UseUJBQUE7QUNNRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdmVyaWZ5LWtleS92ZXJpZnkta2V5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY3JldC0tY29udGFpbmVyLTYwIHtcbiAgaGVpZ2h0OiBjYWxjKDYwJSAtIDM2cHgpO1xufVxuLnNlY3JldC0tY29udGFpbmVyLTQwIHtcbiAgaGVpZ2h0OiBjYWxjKDQwJS0gMzZweCk7XG59XG5ociB7XG4gIGJvcmRlcjogMnB4IGRhc2hlZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGJvcmRlci1zdHlsZTogbm9uZSBub25lIGRhc2hlZDtcbiAgbWFyZ2luOiA4cHggMDtcbn1cbi53b3JkLXBsYWNlaG9sZGVyIHtcbiAgbWluLXdpZHRoOiA0OHB4O1xufVxuLnNpemVfX3hzIHtcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuLnR5cG9ncmFwaHktLW1vbm8ge1xuICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xufVxuIiwiLnNlY3JldC0tY29udGFpbmVyLTYwIHtcbiAgaGVpZ2h0OiBjYWxjKDYwJSAtIDM2cHgpO1xufVxuXG4uc2VjcmV0LS1jb250YWluZXItNDAge1xuICBoZWlnaHQ6IGNhbGMoNDAlLSAzNnB4KTtcbn1cblxuaHIge1xuICBib3JkZXI6IDJweCBkYXNoZWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBib3JkZXItc3R5bGU6IG5vbmUgbm9uZSBkYXNoZWQ7XG4gIG1hcmdpbjogOHB4IDA7XG59XG5cbi53b3JkLXBsYWNlaG9sZGVyIHtcbiAgbWluLXdpZHRoOiA0OHB4O1xufVxuXG4uc2l6ZV9feHMge1xuICBmb250LXNpemU6IDExcHg7XG59XG5cbi50eXBvZ3JhcGh5LS1tb25vIHtcbiAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcbn0iXX0= */"] });
    return VerifyKeyComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VerifyKeyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'airgap-verify-key',
                templateUrl: './verify-key.component.html',
                styleUrls: ['./verify-key.component.scss']
            }]
    }], null, { secret: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onContinue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onComplete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/pipes/amount-converter/amount-converter.pipe.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pipes/amount-converter/amount-converter.pipe.ts ***!
  \*****************************************************************/
/*! exports provided: AmountConverterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmountConverterPipe", function() { return AmountConverterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _bobo_wallet_coin_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bobo-wallet/coin-lib */ "./node_modules/@bobo-wallet/coin-lib/dist/index.js");
/* harmony import */ var _bobo_wallet_coin_lib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_bobo_wallet_coin_lib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bignumber.js */ "./node_modules/bignumber.js/bignumber.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_2__);




var AmountConverterPipe = /** @class */ (function () {
    function AmountConverterPipe() {
    }
    AmountConverterPipe.prototype.transform = function (value, args) {
        if (!args.protocolIdentifier || (!value && value !== 0) || isNaN(Number(value)) || (args.maxDigits && isNaN(Number(args.maxDigits)))) {
            /* console.warn(
              `AmountConverterPipe: necessary properties missing!\n` +
                `Protocol: ${args.protocolIdentifier}\n` +
                `Value: ${value}\n` +
                `maxDigits: ${args.maxDigits}`
            ) */
            return '';
        }
        var protocol;
        try {
            protocol = Object(_bobo_wallet_coin_lib__WEBPACK_IMPORTED_MODULE_1__["getProtocolByIdentifier"])(args.protocolIdentifier);
        }
        catch (e) {
            return '';
        }
        var BN = bignumber_js__WEBPACK_IMPORTED_MODULE_2__["BigNumber"].clone({
            FORMAT: {
                decimalSeparator: ".",
                groupSeparator: "'",
                groupSize: 3
            }
        });
        var amount = new BN(value).shiftedBy(-1 * protocol.decimals);
        return this.formatBigNumber(amount, args.maxDigits) + " " + protocol.symbol;
    };
    AmountConverterPipe.prototype.formatBigNumber = function (value, maxDigits) {
        if (!maxDigits) {
            return value.toFormat();
        }
        if (value.toFixed().length <= maxDigits) {
            return value.toFormat();
        }
        var integerValueLength = value.integerValue().toString().length;
        if (integerValueLength >= maxDigits) {
            // We can omit floating point
            return this.makeFullNumberSmaller(value, maxDigits);
        }
        // Need regex to remove all unneccesary trailing zeros
        return value.toFormat(maxDigits - integerValueLength).replace(/\.?0+$/, '');
    };
    AmountConverterPipe.prototype.makeFullNumberSmaller = function (value, maxDigits) {
        if (value.toFixed().length <= maxDigits) {
            return value.toFormat();
        }
        var result = value.integerValue();
        if (result.toString().length <= maxDigits) {
            return result.toFormat();
        }
        if (result.toString().length <= 3) {
            return result.toFormat();
        }
        // number is too long, take 3 digits away and try again
        result = result.dividedToIntegerBy(1000);
        if (result.toFixed().length <= maxDigits) {
            return result.toFormat() + 'K';
        }
        if (result.toFixed().length <= 3) {
            return result.toFormat() + 'K';
        }
        // number is too long, take 3 digits away and try again
        result = result.dividedToIntegerBy(1000);
        return result.toFormat() + 'M';
    };
    AmountConverterPipe.ɵfac = function AmountConverterPipe_Factory(t) { return new (t || AmountConverterPipe)(); };
    AmountConverterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "amountConverter", type: AmountConverterPipe, pure: true });
    return AmountConverterPipe;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AmountConverterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'amountConverter'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pipes/fee-converter/fee-converter.pipe.ts":
/*!***********************************************************!*\
  !*** ./src/app/pipes/fee-converter/fee-converter.pipe.ts ***!
  \***********************************************************/
/*! exports provided: FeeConverterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeeConverterPipe", function() { return FeeConverterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _bobo_wallet_coin_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bobo-wallet/coin-lib */ "./node_modules/@bobo-wallet/coin-lib/dist/index.js");
/* harmony import */ var _bobo_wallet_coin_lib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_bobo_wallet_coin_lib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bignumber.js */ "./node_modules/bignumber.js/bignumber.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_2__);




var FeeConverterPipe = /** @class */ (function () {
    function FeeConverterPipe() {
    }
    FeeConverterPipe.prototype.transform = function (value, args) {
        if (!args.protocolIdentifier || (!value && value !== 0) || isNaN(Number(value))) {
            // console.warn(`FeeConverterPipe: necessary properties missing!\n` + `Protocol: ${args.protocolIdentifier}\n` + `Value: ${value}`)
            return '';
        }
        var protocol;
        try {
            protocol = Object(_bobo_wallet_coin_lib__WEBPACK_IMPORTED_MODULE_1__["getProtocolByIdentifier"])(args.protocolIdentifier);
        }
        catch (e) {
            return '';
        }
        var amount = new bignumber_js__WEBPACK_IMPORTED_MODULE_2__["BigNumber"](value);
        var fee = amount.shiftedBy(-1 * protocol.feeDecimals);
        return fee.toFixed() + ' ' + protocol.feeSymbol.toUpperCase();
    };
    FeeConverterPipe.ɵfac = function FeeConverterPipe_Factory(t) { return new (t || FeeConverterPipe)(); };
    FeeConverterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "feeConverter", type: FeeConverterPipe, pure: true });
    return FeeConverterPipe;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeeConverterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'feeConverter'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pipes/pipes.module.ts":
/*!***************************************!*\
  !*** ./src/app/pipes/pipes.module.ts ***!
  \***************************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _amount_converter_amount_converter_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./amount-converter/amount-converter.pipe */ "./src/app/pipes/amount-converter/amount-converter.pipe.ts");
/* harmony import */ var _fee_converter_fee_converter_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fee-converter/fee-converter.pipe */ "./src/app/pipes/fee-converter/fee-converter.pipe.ts");
/* harmony import */ var _wallet_filter_wallet_filter_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wallet-filter/wallet-filter.pipe */ "./src/app/pipes/wallet-filter/wallet-filter.pipe.ts");





var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PipesModule });
    PipesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PipesModule_Factory(t) { return new (t || PipesModule)(); }, imports: [[]] });
    return PipesModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PipesModule, { declarations: [_amount_converter_amount_converter_pipe__WEBPACK_IMPORTED_MODULE_1__["AmountConverterPipe"], _fee_converter_fee_converter_pipe__WEBPACK_IMPORTED_MODULE_2__["FeeConverterPipe"], _wallet_filter_wallet_filter_pipe__WEBPACK_IMPORTED_MODULE_3__["WalletFilterPipe"]], exports: [_amount_converter_amount_converter_pipe__WEBPACK_IMPORTED_MODULE_1__["AmountConverterPipe"], _fee_converter_fee_converter_pipe__WEBPACK_IMPORTED_MODULE_2__["FeeConverterPipe"], _wallet_filter_wallet_filter_pipe__WEBPACK_IMPORTED_MODULE_3__["WalletFilterPipe"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PipesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_amount_converter_amount_converter_pipe__WEBPACK_IMPORTED_MODULE_1__["AmountConverterPipe"], _fee_converter_fee_converter_pipe__WEBPACK_IMPORTED_MODULE_2__["FeeConverterPipe"], _wallet_filter_wallet_filter_pipe__WEBPACK_IMPORTED_MODULE_3__["WalletFilterPipe"]],
                imports: [],
                exports: [_amount_converter_amount_converter_pipe__WEBPACK_IMPORTED_MODULE_1__["AmountConverterPipe"], _fee_converter_fee_converter_pipe__WEBPACK_IMPORTED_MODULE_2__["FeeConverterPipe"], _wallet_filter_wallet_filter_pipe__WEBPACK_IMPORTED_MODULE_3__["WalletFilterPipe"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pipes/wallet-filter/wallet-filter.pipe.ts":
/*!***********************************************************!*\
  !*** ./src/app/pipes/wallet-filter/wallet-filter.pipe.ts ***!
  \***********************************************************/
/*! exports provided: WalletFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletFilterPipe", function() { return WalletFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var WalletFilterPipe = /** @class */ (function () {
    function WalletFilterPipe() {
    }
    WalletFilterPipe.prototype.transform = function (items, args) {
        if (!items) {
            return [];
        }
        if (!args.symbol) {
            return items;
        }
        else {
            return items.filter(function (wallet) { return wallet.protocol.symbol.toLowerCase().includes(args.symbol) || wallet.protocol.name.toLowerCase().includes(args.symbol); });
        }
    };
    WalletFilterPipe.ɵfac = function WalletFilterPipe_Factory(t) { return new (t || WalletFilterPipe)(); };
    WalletFilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "walletFilter", type: WalletFilterPipe, pure: true });
    return WalletFilterPipe;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WalletFilterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'walletFilter'
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=default~pages-account-add-account-add-module~pages-account-address-account-address-module~pages-acco~8427016f.js.map