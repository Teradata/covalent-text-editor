import { Component, Input, Output, EventEmitter, OnInit, AfterViewInit, ViewChild,
         ElementRef, forwardRef, ViewEncapsulation, NgZone, Inject } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { EscapeHtmlPipe } from './escape-html.pipe';
import * as SimpleMDECss from 'simplemde/dist/simplemde.min.css';
import * as SimpleMDE from 'simplemde';

const noop: any = () => {
  // empty method
};

@Component({
  selector: 'td-text-editor',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './text-editor.component.html',
  styleUrls: [ './text-editor.component.scss' ],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TdTextEditorComponent),
    multi: true,
  }],
})
export class TdTextEditorComponent implements AfterViewInit, ControlValueAccessor {

  private _value: string = '';
  private _simpleMDE: any;
  private _fromEditor: boolean = false;

  @ViewChild('simplemde') textarea: ElementRef;
  @Input() options: any = {};

  constructor(private _elementRef: ElementRef,
              private _zone: NgZone,
              private _domSanitizer: DomSanitizer,
              @Inject(DOCUMENT) private _document: any) {}

  /* tslint:disable-next-line */
  propagateChange = (_: any) => {};
  onTouched = () => noop;

  /**
   * value?: string
   * Value in the Editor after async getEditorContent was called
   */
  @Input('value')
  set value(value: string) {
    this._value = value;
    if (this._simpleMDE) {
      if (!this._fromEditor) {
        this._simpleMDE.value(value);
      }
      this.propagateChange(this._value);
      this._fromEditor = false;
      this._zone.run(() => this._value = value);
    }
  }

  get value(): string {
      return this._value;
  }

  /**
   * Implemented as part of ControlValueAccessor.
   */
  writeValue(value: any): void {
    this.value = (!value) ? '' : value;
  }
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  ngAfterViewInit(): void {
    if (this._document) {
      let styleElement: HTMLElement = this._document.createElement('style');
      styleElement.innerHTML = new EscapeHtmlPipe(this._domSanitizer).transform(String(SimpleMDECss));
      this._document.head.appendChild(styleElement);
    }
    this.options.element = this._elementRef.nativeElement.value;
    this._simpleMDE = new SimpleMDE(this.options);
    this._simpleMDE.value(this.value);
    this._simpleMDE.codemirror.on('change', () => {
      this._fromEditor = true;
      this.writeValue(this._simpleMDE.value());
    });
  }

  /* Wrapped function provided by SimpleMDE */

  isPreviewActive(): boolean {
    return this._simpleMDE.isPreviewActive();
  }

  isSideBySideActive(): boolean {
    return this._simpleMDE.isSideBySideActive();
  }

  isFullscreenActive(): boolean {
    return this._simpleMDE.isFullscreenActive();
  }

  clearAutosavedValue(): void {
    this._simpleMDE.clearAutosavedValue();
  }

  toTextArea(): void {
    this._simpleMDE.toTextArea();
  }
}
