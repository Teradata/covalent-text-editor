import { Component, forwardRef, NgZone, ViewChild, Input, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as EasyMDE from 'easymde';
import { setOptions } from 'marked';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * Generated from: text-editor.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const noop = (/**
 * @return {?}
 */
() => {
    // empty method
});
const ɵ0 = noop;
class TdTextEditorComponent {
    /**
     * @param {?} _zone
     */
    constructor(_zone) {
        this._zone = _zone;
        this._value = '';
        this._fromEditor = false;
        this.options = {};
        /* tslint:disable-next-line */
        this.propagateChange = (/**
         * @param {?} _
         * @return {?}
         */
        (_) => { });
        this.onTouched = (/**
         * @return {?}
         */
        () => noop);
    }
    /**
     * value?: string
     * Value in the Editor after async getEditorContent was called
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        this._value = value;
        if (this._easyMDE) {
            if (!this._fromEditor) {
                this._easyMDE.value(value);
            }
            this.propagateChange(this._value);
            this._fromEditor = false;
            this._zone.run((/**
             * @return {?}
             */
            () => (this._value = value)));
        }
    }
    /**
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * @return {?}
     */
    get easyMDE() {
        return this._easyMDE;
    }
    /**
     * Implemented as part of ControlValueAccessor.
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.value = !value ? '' : value;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.options.element = this.textarea.nativeElement;
        // If content entered is html then don't evaluate it, prevent xss vulnerabilities
        setOptions({ sanitize: true });
        this._easyMDE = new EasyMDE(this.options);
        this._easyMDE.value(this.value);
        this._easyMDE.codemirror.on('change', (/**
         * @return {?}
         */
        () => {
            this._fromEditor = true;
            this.writeValue(this._easyMDE.value());
        }));
    }
    /* Wrapped function provided by EasyMDE */
    /**
     * @return {?}
     */
    isPreviewActive() {
        return this._easyMDE.isPreviewActive();
    }
    /**
     * @return {?}
     */
    isSideBySideActive() {
        return this._easyMDE.isSideBySideActive();
    }
    /**
     * @return {?}
     */
    isFullscreenActive() {
        return this._easyMDE.isFullscreenActive();
    }
    /**
     * @return {?}
     */
    clearAutosavedValue() {
        this._easyMDE.clearAutosavedValue();
    }
    /**
     * @return {?}
     */
    toTextArea() {
        this._easyMDE.toTextArea();
    }
    /**
     * @return {?}
     */
    toggleBold() {
        this._easyMDE.toggleBold();
    }
    /**
     * @return {?}
     */
    toggleItalic() {
        this._easyMDE.toggleItalic();
    }
    /**
     * @return {?}
     */
    toggleStrikethrough() {
        this._easyMDE.toggleStrikethrough();
    }
    /**
     * @return {?}
     */
    toggleHeadingSmaller() {
        this._easyMDE.toggleHeadingSmaller();
    }
    /**
     * @return {?}
     */
    toggleHeadingBigger() {
        this._easyMDE.toggleHeadingBigger();
    }
    /**
     * @return {?}
     */
    toggleHeading1() {
        this._easyMDE.toggleHeading1();
    }
    /**
     * @return {?}
     */
    toggleHeading2() {
        this._easyMDE.toggleHeading2();
    }
    /**
     * @return {?}
     */
    toggleHeading3() {
        this._easyMDE.toggleHeading3();
    }
    /**
     * @return {?}
     */
    toggleCodeBlock() {
        this._easyMDE.toggleCodeBlock();
    }
    /**
     * @return {?}
     */
    toggleBlockquote() {
        this._easyMDE.toggleBlockquote();
    }
    /**
     * @return {?}
     */
    toggleUnorderedList() {
        this._easyMDE.toggleUnorderedList();
    }
    /**
     * @return {?}
     */
    toggleOrderedList() {
        this._easyMDE.toggleOrderedList();
    }
    /**
     * @return {?}
     */
    cleanBlock() {
        this._easyMDE.cleanBlock();
    }
    /**
     * @return {?}
     */
    drawLink() {
        this._easyMDE.drawLink();
    }
    /**
     * @return {?}
     */
    drawImage() {
        this._easyMDE.drawImage();
    }
    /**
     * @return {?}
     */
    drawTable() {
        this._easyMDE.drawTable();
    }
    /**
     * @return {?}
     */
    drawHorizontalRule() {
        this._easyMDE.drawHorizontalRule();
    }
    /**
     * @return {?}
     */
    togglePreview() {
        this._easyMDE.togglePreview();
    }
    /**
     * @return {?}
     */
    toggleSideBySide() {
        this._easyMDE.toggleSideBySide();
    }
    /**
     * @return {?}
     */
    toggleFullScreen() {
        this._easyMDE.toggleFullScreen();
    }
}
TdTextEditorComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-text-editor',
                template: "<div>\n  <textarea #easymde></textarea>\n</div>\n",
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => TdTextEditorComponent)),
                        multi: true,
                    },
                ],
                styles: ["@charset \"UTF-8\";:host ::ng-deep .CodeMirror{color:#000;direction:ltr;font-family:monospace;height:300px}:host ::ng-deep .CodeMirror-lines{padding:4px 0}:host ::ng-deep .CodeMirror pre.CodeMirror-line,:host ::ng-deep .CodeMirror pre.CodeMirror-line-like{padding:0 4px}:host ::ng-deep .CodeMirror-gutter-filler,:host ::ng-deep .CodeMirror-scrollbar-filler{background-color:#fff}:host ::ng-deep .CodeMirror-gutters{background-color:#f7f7f7;border-right:1px solid #ddd;white-space:nowrap}:host ::ng-deep .CodeMirror-linenumber{color:#999;min-width:20px;padding:0 3px 0 5px;text-align:right;white-space:nowrap}:host ::ng-deep .CodeMirror-guttermarker{color:#000}:host ::ng-deep .CodeMirror-guttermarker-subtle{color:#999}:host ::ng-deep .CodeMirror-cursor{border-left:1px solid #000;border-right:none;width:0}:host ::ng-deep .CodeMirror div.CodeMirror-secondarycursor{border-left:1px solid silver}:host ::ng-deep .cm-fat-cursor .CodeMirror-cursor{background:#7e7;border:0!important;width:auto}:host ::ng-deep .cm-fat-cursor div.CodeMirror-cursors{z-index:1}:host ::ng-deep .cm-fat-cursor-mark{background-color:rgba(20,255,20,.5)}:host ::ng-deep .cm-animate-fat-cursor,:host ::ng-deep .cm-fat-cursor-mark{-webkit-animation:blink 1.06s steps(1) infinite;animation:blink 1.06s steps(1) infinite}:host ::ng-deep .cm-animate-fat-cursor{background-color:#7e7;border:0;width:auto}@-webkit-keyframes blink{50%{background-color:rgba(0,0,0,0)}}@keyframes blink{50%{background-color:rgba(0,0,0,0)}}:host ::ng-deep .cm-tab{display:inline-block;text-decoration:inherit}:host ::ng-deep .CodeMirror-rulers{bottom:0;left:0;overflow:hidden;position:absolute;right:0;top:-50px}:host ::ng-deep .CodeMirror-ruler{border-left:1px solid #ccc;bottom:0;position:absolute;top:0}:host ::ng-deep .cm-s-default .cm-header{color:#00f}:host ::ng-deep .cm-s-default .cm-quote{color:#090}:host ::ng-deep .cm-negative{color:#d44}:host ::ng-deep .cm-positive{color:#292}:host ::ng-deep .cm-header,:host ::ng-deep .cm-strong{font-weight:700}:host ::ng-deep .cm-em{font-style:italic}:host ::ng-deep .cm-link{text-decoration:underline}:host ::ng-deep .cm-strikethrough{text-decoration:line-through}:host ::ng-deep .cm-s-default .cm-keyword{color:#708}:host ::ng-deep .cm-s-default .cm-atom{color:#219}:host ::ng-deep .cm-s-default .cm-number{color:#164}:host ::ng-deep .cm-s-default .cm-def{color:#00f}:host ::ng-deep .cm-s-default .cm-variable-2{color:#05a}:host ::ng-deep .cm-s-default .cm-type,:host ::ng-deep .cm-s-default .cm-variable-3{color:#085}:host ::ng-deep .cm-s-default .cm-comment{color:#a50}:host ::ng-deep .cm-s-default .cm-string{color:#a11}:host ::ng-deep .cm-s-default .cm-string-2{color:#f50}:host ::ng-deep .cm-s-default .cm-meta,:host ::ng-deep .cm-s-default .cm-qualifier{color:#555}:host ::ng-deep .cm-s-default .cm-builtin{color:#30a}:host ::ng-deep .cm-s-default .cm-bracket{color:#997}:host ::ng-deep .cm-s-default .cm-tag{color:#170}:host ::ng-deep .cm-s-default .cm-attribute{color:#00c}:host ::ng-deep .cm-s-default .cm-hr{color:#999}:host ::ng-deep .cm-s-default .cm-link{color:#00c}:host ::ng-deep .cm-invalidchar,:host ::ng-deep .cm-s-default .cm-error{color:red}:host ::ng-deep .CodeMirror-composing{border-bottom:2px solid}:host ::ng-deep div.CodeMirror span.CodeMirror-matchingbracket{color:#0b0}:host ::ng-deep div.CodeMirror span.CodeMirror-nonmatchingbracket{color:#a22}:host ::ng-deep .CodeMirror-matchingtag{background:rgba(255,150,0,.3)}:host ::ng-deep .CodeMirror-activeline-background{background:#e8f2ff}:host ::ng-deep .CodeMirror{background:#fff;overflow:hidden;position:relative}:host ::ng-deep .CodeMirror-scroll{height:100%;margin-bottom:-30px;margin-right:-30px;outline:0;overflow:scroll!important;padding-bottom:30px;position:relative}:host ::ng-deep .CodeMirror-sizer{border-right:30px solid rgba(0,0,0,0);position:relative}:host ::ng-deep .CodeMirror-gutter-filler,:host ::ng-deep .CodeMirror-hscrollbar,:host ::ng-deep .CodeMirror-scrollbar-filler,:host ::ng-deep .CodeMirror-vscrollbar{display:none;position:absolute;z-index:6}:host ::ng-deep .CodeMirror-vscrollbar{overflow-x:hidden;overflow-y:scroll;right:0;top:0}:host ::ng-deep .CodeMirror-hscrollbar{bottom:0;left:0;overflow-x:scroll;overflow-y:hidden}:host ::ng-deep .CodeMirror-scrollbar-filler{bottom:0;right:0}:host ::ng-deep .CodeMirror-gutter-filler{bottom:0;left:0}:host ::ng-deep .CodeMirror-gutters{left:0;min-height:100%;position:absolute;top:0;z-index:3}:host ::ng-deep .CodeMirror-gutter{display:inline-block;height:100%;margin-bottom:-30px;vertical-align:top;white-space:normal}:host ::ng-deep .CodeMirror-gutter-wrapper{background:0 0!important;border:none!important;position:absolute;z-index:4}:host ::ng-deep .CodeMirror-gutter-background{bottom:0;position:absolute;top:0;z-index:4}:host ::ng-deep .CodeMirror-gutter-elt{cursor:default;position:absolute;z-index:4}:host ::ng-deep .CodeMirror-gutter-wrapper ::selection{background-color:rgba(0,0,0,0)}:host ::ng-deep .CodeMirror-gutter-wrapper ::-moz-selection{background-color:rgba(0,0,0,0)}:host ::ng-deep .CodeMirror-lines{cursor:text;min-height:1px}:host ::ng-deep .CodeMirror pre.CodeMirror-line,:host ::ng-deep .CodeMirror pre.CodeMirror-line-like{-webkit-tap-highlight-color:transparent;background:0 0;border-radius:0;border-width:0;color:inherit;font-family:inherit;font-size:inherit;font-variant-ligatures:contextual;line-height:inherit;margin:0;overflow:visible;position:relative;white-space:pre;word-wrap:normal;z-index:2}:host ::ng-deep .CodeMirror-wrap pre.CodeMirror-line,:host ::ng-deep .CodeMirror-wrap pre.CodeMirror-line-like{white-space:pre-wrap;word-break:normal;word-wrap:break-word}:host ::ng-deep .CodeMirror-linebackground{bottom:0;left:0;position:absolute;right:0;top:0;z-index:0}:host ::ng-deep .CodeMirror-linewidget{padding:.1px;position:relative;z-index:2}:host ::ng-deep .CodeMirror-rtl pre{direction:rtl}:host ::ng-deep .CodeMirror-code{outline:0}:host ::ng-deep .CodeMirror-gutter,:host ::ng-deep .CodeMirror-gutters,:host ::ng-deep .CodeMirror-linenumber,:host ::ng-deep .CodeMirror-scroll,:host ::ng-deep .CodeMirror-sizer{box-sizing:content-box}:host ::ng-deep .CodeMirror-measure{height:0;overflow:hidden;position:absolute;visibility:hidden;width:100%}:host ::ng-deep .CodeMirror-cursor{pointer-events:none;position:absolute}:host ::ng-deep .CodeMirror-measure pre{position:static}:host ::ng-deep div.CodeMirror-cursors{position:relative;visibility:hidden;z-index:3}:host ::ng-deep .CodeMirror-focused div.CodeMirror-cursors,:host ::ng-deep div.CodeMirror-dragcursors{visibility:visible}:host ::ng-deep .CodeMirror-selected{background:#d9d9d9}:host ::ng-deep .CodeMirror-focused .CodeMirror-selected{background:#d7d4f0}:host ::ng-deep .CodeMirror-crosshair{cursor:crosshair}:host ::ng-deep .CodeMirror-line::selection,:host ::ng-deep .CodeMirror-line>span::selection,:host ::ng-deep .CodeMirror-line>span>span::selection{background:#d7d4f0}:host ::ng-deep .CodeMirror-line::-moz-selection,:host ::ng-deep .CodeMirror-line>span::-moz-selection,:host ::ng-deep .CodeMirror-line>span>span::-moz-selection{background:#d7d4f0}:host ::ng-deep .cm-searching{background-color:#ffa;background-color:rgba(255,255,0,.4)}:host ::ng-deep .cm-force-border{padding-right:.1px}@media print{:host ::ng-deep .CodeMirror div.CodeMirror-cursors{visibility:hidden}}:host ::ng-deep .cm-tab-wrap-hack:after{content:\"\"}:host ::ng-deep span.CodeMirror-selectedtext{background:0 0}:host ::ng-deep .CodeMirror{border:1px solid #ddd;border-bottom-left-radius:4px;border-bottom-right-radius:4px;box-sizing:border-box;font:inherit;height:auto;padding:10px;word-wrap:break-word;z-index:1}:host ::ng-deep .CodeMirror-scroll{cursor:text}:host ::ng-deep .CodeMirror-fullscreen{background:#fff;border-bottom-right-radius:0!important;border-right:none!important;bottom:0;height:auto;left:0;position:fixed!important;right:0;top:50px;z-index:9}:host ::ng-deep .CodeMirror-sided{width:50%!important}:host ::ng-deep .CodeMirror-placeholder{opacity:.5}:host ::ng-deep .CodeMirror-focused .CodeMirror-selected{background:#d9d9d9}:host ::ng-deep .editor-toolbar{-moz-user-select:none;-ms-user-select:none;-o-user-select:none;-webkit-user-select:none;border-left:1px solid #bbb;border-right:1px solid #bbb;border-top:1px solid #bbb;border-top-left-radius:4px;border-top-right-radius:4px;padding:0 10px;position:relative;user-select:none}:host ::ng-deep .editor-toolbar:after,:host ::ng-deep .editor-toolbar:before{content:\" \";display:block;height:1px}:host ::ng-deep .editor-toolbar:before{margin-bottom:8px}:host ::ng-deep .editor-toolbar:after{margin-top:8px}:host ::ng-deep .editor-toolbar.fullscreen{background:#fff;border:0;box-sizing:border-box;height:50px;left:0;opacity:1;overflow-x:auto;overflow-y:hidden;padding-bottom:10px;padding-top:10px;position:fixed;top:0;white-space:nowrap;width:100%;z-index:9}:host ::ng-deep .editor-toolbar.fullscreen:before{background:linear-gradient(90deg,#fff 0,hsla(0,0%,100%,0));height:50px;left:0;margin:0;padding:0;position:fixed;top:0;width:20px}:host ::ng-deep .editor-toolbar.fullscreen:after{background:linear-gradient(90deg,hsla(0,0%,100%,0) 0,#fff);height:50px;margin:0;padding:0;position:fixed;right:0;top:0;width:20px}:host ::ng-deep .editor-toolbar button{background:0 0;border:1px solid rgba(0,0,0,0);border-radius:3px;cursor:pointer;display:inline-block;height:30px;margin:0;padding:0;text-align:center;text-decoration:none!important;width:30px}:host ::ng-deep .editor-toolbar button.active,:host ::ng-deep .editor-toolbar button:hover{background:#fcfcfc;border-color:#95a5a6}:host ::ng-deep .editor-toolbar i.separator{border-left:1px solid #d9d9d9;border-right:1px solid #fff;color:rgba(0,0,0,0);display:inline-block;margin:0 6px;text-indent:-10px;width:0}:host ::ng-deep .editor-toolbar button:after{font-family:Arial,Helvetica Neue,Helvetica,sans-serif;font-size:65%;position:relative;top:2px;vertical-align:text-bottom}:host ::ng-deep .editor-toolbar button.heading-1:after{content:\"1\"}:host ::ng-deep .editor-toolbar button.heading-2:after{content:\"2\"}:host ::ng-deep .editor-toolbar button.heading-3:after{content:\"3\"}:host ::ng-deep .editor-toolbar button.heading-bigger:after{content:\"\u25B2\"}:host ::ng-deep .editor-toolbar button.heading-smaller:after{content:\"\u25BC\"}:host ::ng-deep .editor-toolbar.disabled-for-preview button:not(.no-disable){opacity:.6;pointer-events:none}@media only screen and (max-width:700px){:host ::ng-deep .editor-toolbar i.no-mobile{display:none}}:host ::ng-deep .editor-statusbar{color:#959694;font-size:12px;padding:8px 10px;text-align:right}:host ::ng-deep .editor-statusbar span{display:inline-block;margin-left:1em;min-width:4em}:host ::ng-deep .editor-statusbar .lines:before{content:\"lines: \"}:host ::ng-deep .editor-statusbar .words:before{content:\"words: \"}:host ::ng-deep .editor-statusbar .characters:before{content:\"characters: \"}:host ::ng-deep .editor-preview-full{box-sizing:border-box;display:none;height:100%;left:0;overflow:auto;position:absolute;top:0;width:100%;z-index:7}:host ::ng-deep .editor-preview-side{border:1px solid #ddd;bottom:0;box-sizing:border-box;display:none;overflow:auto;position:fixed;right:0;top:50px;width:50%;word-wrap:break-word;z-index:9}:host ::ng-deep .editor-preview-active,:host ::ng-deep .editor-preview-active-side{display:block}:host ::ng-deep .editor-preview{background:#fafafa;padding:10px}:host ::ng-deep .editor-preview>p{margin-top:0}:host ::ng-deep .editor-preview pre{background:#eee;margin-bottom:10px}:host ::ng-deep .editor-preview table td,:host ::ng-deep .editor-preview table th{border:1px solid #ddd;padding:5px}:host ::ng-deep .cm-s-easymde .cm-tag{color:#63a35c}:host ::ng-deep .cm-s-easymde .cm-attribute{color:#795da3}:host ::ng-deep .cm-s-easymde .cm-string{color:#183691}:host ::ng-deep .cm-s-easymde .cm-header-1{font-size:200%;line-height:200%}:host ::ng-deep .cm-s-easymde .cm-header-2{font-size:160%;line-height:160%}:host ::ng-deep .cm-s-easymde .cm-header-3{font-size:125%;line-height:125%}:host ::ng-deep .cm-s-easymde .cm-header-4{font-size:110%;line-height:110%}:host ::ng-deep .cm-s-easymde .cm-comment{background:rgba(0,0,0,.05);border-radius:2px}:host ::ng-deep .cm-s-easymde .cm-link{color:#7f8c8d}:host ::ng-deep .cm-s-easymde .cm-url{color:#aab2b3}:host ::ng-deep .cm-s-easymde .cm-quote{color:#7f8c8d;font-style:italic}:host ::ng-deep .CodeMirror .cm-spell-error:not(.cm-url):not(.cm-comment):not(.cm-tag):not(.cm-word){background:rgba(255,0,0,.15)}"]
            }] }
];
/** @nocollapse */
TdTextEditorComponent.ctorParameters = () => [
    { type: NgZone }
];
TdTextEditorComponent.propDecorators = {
    textarea: [{ type: ViewChild, args: ['easymde', { static: true },] }],
    options: [{ type: Input }],
    value: [{ type: Input, args: ['value',] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    TdTextEditorComponent.prototype._value;
    /**
     * @type {?}
     * @private
     */
    TdTextEditorComponent.prototype._easyMDE;
    /**
     * @type {?}
     * @private
     */
    TdTextEditorComponent.prototype._fromEditor;
    /** @type {?} */
    TdTextEditorComponent.prototype.textarea;
    /** @type {?} */
    TdTextEditorComponent.prototype.options;
    /** @type {?} */
    TdTextEditorComponent.prototype.propagateChange;
    /** @type {?} */
    TdTextEditorComponent.prototype.onTouched;
    /**
     * @type {?}
     * @private
     */
    TdTextEditorComponent.prototype._zone;
}

/**
 * @fileoverview added by tsickle
 * Generated from: text-editor.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CovalentTextEditorModule {
}
CovalentTextEditorModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [TdTextEditorComponent],
                exports: [TdTextEditorComponent],
                bootstrap: [TdTextEditorComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: covalent-text-editor.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { CovalentTextEditorModule, TdTextEditorComponent };
//# sourceMappingURL=covalent-text-editor.js.map
