import {
  Directive,
  ElementRef,
  HostListener,
  Renderer2,
  forwardRef,
} from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Directive({
  selector: "br-input",
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomValueAccessor),
      multi: true,
    },
  ],
})
export class CustomValueAccessor implements ControlValueAccessor {
  constructor(private element: ElementRef, private renderer: Renderer2) {
    this.onChange = () => {};
    this.onTouched = () => {};
  }

  onChange: (value: string) => void;
  onTouched: () => void;

  private _value: string;
  disabled = false;

  get value() {
    return this._value;
  }

  set value(val) {
    if (val !== this._value) {
      this._value = val;
      this.onChange(this._value);
      this.onTouched();

      this.updateValue(val);
    }
  }

  private updateValue(value: string) {
    this.element.nativeElement.value = value;
    this.renderer.setProperty(this.element.nativeElement, "value", value);
  }

  writeValue(value: any): void {
    this.value = value;
  }

  @HostListener("input", ["$event.detail"])
  _handleIllyInput(value: string) {
    this.value = value;
  }

  @HostListener("change", ["$event.detail"])
  _handleIllyChange(value: string) {
    this.onChange(value[0]);
  }

  @HostListener("blur")
  _handleBlurEvent(el: any) {
    this.onTouched();
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
