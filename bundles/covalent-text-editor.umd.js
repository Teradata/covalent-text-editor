(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@angular/platform-browser'), require('@angular/common'), require('simplemde'), require('marked')) :
    typeof define === 'function' && define.amd ? define('@covalent/text-editor', ['exports', '@angular/core', '@angular/forms', '@angular/platform-browser', '@angular/common', 'simplemde', 'marked'], factory) :
    (global = global || self, factory((global.covalent = global.covalent || {}, global.covalent['text-editor'] = {}), global.ng.core, global.ng.forms, global.ng.platformBrowser, global.ng.common, global.SimpleMDE, global.marked));
}(this, function (exports, core, forms, platformBrowser, common, SimpleMDE, marked) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /* tslint:disable-next-line */
    /** @type {?} */
    var SimpleMDECss = require('simplemde/dist/simplemde.min.css');
    /** @type {?} */
    var noop = (/**
     * @return {?}
     */
    function () {
        // empty method
    });
    var TdTextEditorComponent = /** @class */ (function () {
        function TdTextEditorComponent(_elementRef, _zone, _domSanitizer, _document) {
            this._elementRef = _elementRef;
            this._zone = _zone;
            this._domSanitizer = _domSanitizer;
            this._document = _document;
            this._value = '';
            this._fromEditor = false;
            this.options = {};
            /* tslint:disable-next-line */
            this.propagateChange = (/**
             * @param {?} _
             * @return {?}
             */
            function (_) { });
            this.onTouched = (/**
             * @return {?}
             */
            function () { return noop; });
        }
        Object.defineProperty(TdTextEditorComponent.prototype, "value", {
            get: /**
             * @return {?}
             */
            function () {
                return this._value;
            },
            /**
             * value?: string
             * Value in the Editor after async getEditorContent was called
             */
            set: /**
             * value?: string
             * Value in the Editor after async getEditorContent was called
             * @param {?} value
             * @return {?}
             */
            function (value) {
                var _this = this;
                this._value = value;
                if (this._simpleMDE) {
                    if (!this._fromEditor) {
                        this._simpleMDE.value(value);
                    }
                    this.propagateChange(this._value);
                    this._fromEditor = false;
                    this._zone.run((/**
                     * @return {?}
                     */
                    function () { return (_this._value = value); }));
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdTextEditorComponent.prototype, "simpleMDE", {
            get: /**
             * @return {?}
             */
            function () {
                return this._simpleMDE;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Implemented as part of ControlValueAccessor.
         */
        /**
         * Implemented as part of ControlValueAccessor.
         * @param {?} value
         * @return {?}
         */
        TdTextEditorComponent.prototype.writeValue = /**
         * Implemented as part of ControlValueAccessor.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.value = !value ? '' : value;
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        TdTextEditorComponent.prototype.registerOnChange = /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            this.propagateChange = fn;
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        TdTextEditorComponent.prototype.registerOnTouched = /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            this.onTouched = fn;
        };
        /**
         * @return {?}
         */
        TdTextEditorComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (this._document) {
                /** @type {?} */
                var styleElement = this._document.createElement('style');
                styleElement.innerHTML = (/** @type {?} */ (this._domSanitizer.bypassSecurityTrustHtml(String(SimpleMDECss))));
                this._document.head.appendChild(styleElement);
            }
            this.options.element = this.textarea.nativeElement;
            // If content entered is html then don't evaluate it, prevent xss vulnerabilities
            marked.setOptions({ sanitize: true });
            this._simpleMDE = new SimpleMDE(this.options);
            this._simpleMDE.value(this.value);
            this._simpleMDE.codemirror.on('change', (/**
             * @return {?}
             */
            function () {
                _this._fromEditor = true;
                _this.writeValue(_this._simpleMDE.value());
            }));
        };
        /* Wrapped function provided by SimpleMDE */
        /* Wrapped function provided by SimpleMDE */
        /**
         * @return {?}
         */
        TdTextEditorComponent.prototype.isPreviewActive = /* Wrapped function provided by SimpleMDE */
        /**
         * @return {?}
         */
        function () {
            return this._simpleMDE.isPreviewActive();
        };
        /**
         * @return {?}
         */
        TdTextEditorComponent.prototype.isSideBySideActive = /**
         * @return {?}
         */
        function () {
            return this._simpleMDE.isSideBySideActive();
        };
        /**
         * @return {?}
         */
        TdTextEditorComponent.prototype.isFullscreenActive = /**
         * @return {?}
         */
        function () {
            return this._simpleMDE.isFullscreenActive();
        };
        /**
         * @return {?}
         */
        TdTextEditorComponent.prototype.clearAutosavedValue = /**
         * @return {?}
         */
        function () {
            this._simpleMDE.clearAutosavedValue();
        };
        /**
         * @return {?}
         */
        TdTextEditorComponent.prototype.toTextArea = /**
         * @return {?}
         */
        function () {
            this._simpleMDE.toTextArea();
        };
        /**
         * @return {?}
         */
        TdTextEditorComponent.prototype.toggleBold = /**
         * @return {?}
         */
        function () {
            this._simpleMDE.toggleBold();
        };
        /**
         * @return {?}
         */
        TdTextEditorComponent.prototype.toggleItalic = /**
         * @return {?}
         */
        function () {
            this._simpleMDE.toggleItalic();
        };
        /**
         * @return {?}
         */
        TdTextEditorComponent.prototype.toggleStrikethrough = /**
         * @return {?}
         */
        function () {
            this._simpleMDE.toggleStrikethrough();
        };
        /**
         * @return {?}
         */
        TdTextEditorComponent.prototype.toggleHeadingSmaller = /**
         * @return {?}
         */
        function () {
            this._simpleMDE.toggleHeadingSmaller();
        };
        /**
         * @return {?}
         */
        TdTextEditorComponent.prototype.toggleHeadingBigger = /**
         * @return {?}
         */
        function () {
            this._simpleMDE.toggleHeadingBigger();
        };
        /**
         * @return {?}
         */
        TdTextEditorComponent.prototype.toggleHeading1 = /**
         * @return {?}
         */
        function () {
            this._simpleMDE.toggleHeading1();
        };
        /**
         * @return {?}
         */
        TdTextEditorComponent.prototype.toggleHeading2 = /**
         * @return {?}
         */
        function () {
            this._simpleMDE.toggleHeading2();
        };
        /**
         * @return {?}
         */
        TdTextEditorComponent.prototype.toggleHeading3 = /**
         * @return {?}
         */
        function () {
            this._simpleMDE.toggleHeading3();
        };
        /**
         * @return {?}
         */
        TdTextEditorComponent.prototype.toggleCodeBlock = /**
         * @return {?}
         */
        function () {
            this._simpleMDE.toggleCodeBlock();
        };
        /**
         * @return {?}
         */
        TdTextEditorComponent.prototype.toggleBlockquote = /**
         * @return {?}
         */
        function () {
            this._simpleMDE.toggleBlockquote();
        };
        /**
         * @return {?}
         */
        TdTextEditorComponent.prototype.toggleUnorderedList = /**
         * @return {?}
         */
        function () {
            this._simpleMDE.toggleUnorderedList();
        };
        /**
         * @return {?}
         */
        TdTextEditorComponent.prototype.toggleOrderedList = /**
         * @return {?}
         */
        function () {
            this._simpleMDE.toggleOrderedList();
        };
        /**
         * @return {?}
         */
        TdTextEditorComponent.prototype.cleanBlock = /**
         * @return {?}
         */
        function () {
            this._simpleMDE.cleanBlock();
        };
        /**
         * @return {?}
         */
        TdTextEditorComponent.prototype.drawLink = /**
         * @return {?}
         */
        function () {
            this._simpleMDE.drawLink();
        };
        /**
         * @return {?}
         */
        TdTextEditorComponent.prototype.drawImage = /**
         * @return {?}
         */
        function () {
            this._simpleMDE.drawImage();
        };
        /**
         * @return {?}
         */
        TdTextEditorComponent.prototype.drawTable = /**
         * @return {?}
         */
        function () {
            this._simpleMDE.drawTable();
        };
        /**
         * @return {?}
         */
        TdTextEditorComponent.prototype.drawHorizontalRule = /**
         * @return {?}
         */
        function () {
            this._simpleMDE.drawHorizontalRule();
        };
        /**
         * @return {?}
         */
        TdTextEditorComponent.prototype.togglePreview = /**
         * @return {?}
         */
        function () {
            this._simpleMDE.togglePreview();
        };
        /**
         * @return {?}
         */
        TdTextEditorComponent.prototype.toggleSideBySide = /**
         * @return {?}
         */
        function () {
            this._simpleMDE.toggleSideBySide();
        };
        /**
         * @return {?}
         */
        TdTextEditorComponent.prototype.toggleFullScreen = /**
         * @return {?}
         */
        function () {
            this._simpleMDE.toggleFullScreen();
        };
        TdTextEditorComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'td-text-editor',
                        template: "<div>\n  <textarea #simplemde></textarea>\n</div>\n",
                        providers: [
                            {
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: core.forwardRef((/**
                                 * @return {?}
                                 */
                                function () { return TdTextEditorComponent; })),
                                multi: true,
                            },
                        ],
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        TdTextEditorComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.NgZone },
            { type: platformBrowser.DomSanitizer },
            { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] }
        ]; };
        TdTextEditorComponent.propDecorators = {
            textarea: [{ type: core.ViewChild, args: ['simplemde', { static: true },] }],
            options: [{ type: core.Input }],
            value: [{ type: core.Input, args: ['value',] }]
        };
        return TdTextEditorComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CovalentTextEditorModule = /** @class */ (function () {
        function CovalentTextEditorModule() {
        }
        /**
         * @return {?}
         */
        CovalentTextEditorModule.forRoot = /**
         * @return {?}
         */
        function () {
            return {
                ngModule: CovalentTextEditorModule,
                providers: [],
            };
        };
        CovalentTextEditorModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [TdTextEditorComponent],
                        exports: [TdTextEditorComponent],
                        entryComponents: [],
                        bootstrap: [TdTextEditorComponent],
                    },] }
        ];
        return CovalentTextEditorModule;
    }());

    exports.CovalentTextEditorModule = CovalentTextEditorModule;
    exports.TdTextEditorComponent = TdTextEditorComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=covalent-text-editor.umd.js.map
