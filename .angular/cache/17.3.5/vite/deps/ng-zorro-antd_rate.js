import {
  NzToolTipModule,
  NzTooltipDirective
} from "./chunk-OTMJJD2L.js";
import "./chunk-4QJKAD37.js";
import "./chunk-EY3ENB2R.js";
import "./chunk-H66ATZI4.js";
import "./chunk-BQBB7HMS.js";
import "./chunk-QZZURVT2.js";
import "./chunk-ELYC4AOM.js";
import "./chunk-SG3YSI3O.js";
import {
  LEFT_ARROW,
  RIGHT_ARROW
} from "./chunk-27BDGVS6.js";
import "./chunk-KC2ZQZUX.js";
import "./chunk-G4VOMUDB.js";
import {
  NzDestroyService
} from "./chunk-SV3LDBPA.js";
import "./chunk-YW4DQLHS.js";
import {
  NzIconDirective,
  NzIconModule
} from "./chunk-XA4TVJV6.js";
import "./chunk-5QBFNWJX.js";
import "./chunk-Q2CZS4AS.js";
import "./chunk-YAFLS4M2.js";
import {
  Directionality
} from "./chunk-TJB66R27.js";
import {
  NzConfigService,
  WithConfig
} from "./chunk-P67MMMCD.js";
import {
  InputBoolean,
  InputNumber
} from "./chunk-M5HMM4AU.js";
import {
  NG_VALUE_ACCESSOR
} from "./chunk-O35B7BHW.js";
import "./chunk-DIJQRYI6.js";
import "./chunk-FARHR2HR.js";
import {
  NgClass,
  NgForOf,
  NgTemplateOutlet
} from "./chunk-BIJUL52O.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  NgModule,
  NgZone,
  Optional,
  Output,
  Renderer2,
  ViewChild,
  ViewEncapsulation$1,
  __decorate,
  forwardRef,
  fromEvent,
  setClassMetadata,
  takeUntil,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵviewQuery
} from "./chunk-XOMPOCT2.js";
import "./chunk-BYTETG5J.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-rate.mjs
var _c0 = ["nz-rate-item", ""];
var _c1 = (a0) => ({
  $implicit: a0
});
function NzRateItemComponent_ng_template_1_Template(rf, ctx) {
}
function NzRateItemComponent_ng_template_3_Template(rf, ctx) {
}
function NzRateItemComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 4);
  }
}
var _c2 = ["ulElement"];
function NzRateComponent_li_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 3)(1, "div", 4);
    ɵɵlistener("itemHover", function NzRateComponent_li_2_Template_div_itemHover_1_listener($event) {
      const i_r3 = ɵɵrestoreView(_r2).index;
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.onItemHover(i_r3, $event));
    })("itemClick", function NzRateComponent_li_2_Template_div_itemClick_1_listener($event) {
      const i_r3 = ɵɵrestoreView(_r2).index;
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.onItemClick(i_r3, $event));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const i_r3 = ctx.index;
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r3.starStyleArray[i_r3] || "")("nzTooltipTitle", ctx_r3.nzTooltips[i_r3]);
    ɵɵadvance();
    ɵɵproperty("allowHalf", ctx_r3.nzAllowHalf)("character", ctx_r3.nzCharacter)("index", i_r3);
  }
}
var _NzRateItemComponent = class _NzRateItemComponent {
  constructor() {
    this.index = 0;
    this.allowHalf = false;
    this.itemHover = new EventEmitter();
    this.itemClick = new EventEmitter();
  }
  hoverRate(isHalf) {
    this.itemHover.next(isHalf && this.allowHalf);
  }
  clickRate(isHalf) {
    this.itemClick.next(isHalf && this.allowHalf);
  }
};
_NzRateItemComponent.ɵfac = function NzRateItemComponent_Factory(t) {
  return new (t || _NzRateItemComponent)();
};
_NzRateItemComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzRateItemComponent,
  selectors: [["", "nz-rate-item", ""]],
  inputs: {
    character: "character",
    index: "index",
    allowHalf: "allowHalf"
  },
  outputs: {
    itemHover: "itemHover",
    itemClick: "itemClick"
  },
  exportAs: ["nzRateItem"],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  attrs: _c0,
  decls: 6,
  vars: 8,
  consts: [["defaultCharacter", ""], [1, "ant-rate-star-second", 3, "mouseover", "click"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ant-rate-star-first", 3, "mouseover", "click"], ["nz-icon", "", "nzType", "star", "nzTheme", "fill"]],
  template: function NzRateItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵelementStart(0, "div", 1);
      ɵɵlistener("mouseover", function NzRateItemComponent_Template_div_mouseover_0_listener($event) {
        ɵɵrestoreView(_r1);
        ctx.hoverRate(false);
        return ɵɵresetView($event.stopPropagation());
      })("click", function NzRateItemComponent_Template_div_click_0_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.clickRate(false));
      });
      ɵɵtemplate(1, NzRateItemComponent_ng_template_1_Template, 0, 0, "ng-template", 2);
      ɵɵelementEnd();
      ɵɵelementStart(2, "div", 3);
      ɵɵlistener("mouseover", function NzRateItemComponent_Template_div_mouseover_2_listener($event) {
        ɵɵrestoreView(_r1);
        ctx.hoverRate(true);
        return ɵɵresetView($event.stopPropagation());
      })("click", function NzRateItemComponent_Template_div_click_2_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.clickRate(true));
      });
      ɵɵtemplate(3, NzRateItemComponent_ng_template_3_Template, 0, 0, "ng-template", 2);
      ɵɵelementEnd();
      ɵɵtemplate(4, NzRateItemComponent_ng_template_4_Template, 1, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    }
    if (rf & 2) {
      const defaultCharacter_r2 = ɵɵreference(5);
      ɵɵadvance();
      ɵɵproperty("ngTemplateOutlet", ctx.character || defaultCharacter_r2)("ngTemplateOutletContext", ɵɵpureFunction1(4, _c1, ctx.index));
      ɵɵadvance(2);
      ɵɵproperty("ngTemplateOutlet", ctx.character || defaultCharacter_r2)("ngTemplateOutletContext", ɵɵpureFunction1(6, _c1, ctx.index));
    }
  },
  dependencies: [NgTemplateOutlet, NzIconModule, NzIconDirective],
  encapsulation: 2,
  changeDetection: 0
});
var NzRateItemComponent = _NzRateItemComponent;
__decorate([InputBoolean()], NzRateItemComponent.prototype, "allowHalf", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzRateItemComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      selector: "[nz-rate-item]",
      exportAs: "nzRateItem",
      template: `
    <div
      class="ant-rate-star-second"
      (mouseover)="hoverRate(false); $event.stopPropagation()"
      (click)="clickRate(false)"
    >
      <ng-template
        [ngTemplateOutlet]="character || defaultCharacter"
        [ngTemplateOutletContext]="{ $implicit: index }"
      ></ng-template>
    </div>
    <div class="ant-rate-star-first" (mouseover)="hoverRate(true); $event.stopPropagation()" (click)="clickRate(true)">
      <ng-template
        [ngTemplateOutlet]="character || defaultCharacter"
        [ngTemplateOutletContext]="{ $implicit: index }"
      ></ng-template>
    </div>

    <ng-template #defaultCharacter>
      <span nz-icon nzType="star" nzTheme="fill"></span>
    </ng-template>
  `,
      imports: [NgTemplateOutlet, NzIconModule],
      standalone: true
    }]
  }], null, {
    character: [{
      type: Input
    }],
    index: [{
      type: Input
    }],
    allowHalf: [{
      type: Input
    }],
    itemHover: [{
      type: Output
    }],
    itemClick: [{
      type: Output
    }]
  });
})();
var NZ_CONFIG_MODULE_NAME = "rate";
var _NzRateComponent = class _NzRateComponent {
  get nzValue() {
    return this._value;
  }
  set nzValue(input) {
    if (this._value === input) {
      return;
    }
    this._value = input;
    this.hasHalf = !Number.isInteger(input);
    this.hoverValue = Math.ceil(input);
  }
  constructor(nzConfigService, ngZone, renderer, cdr, directionality, destroy$) {
    this.nzConfigService = nzConfigService;
    this.ngZone = ngZone;
    this.renderer = renderer;
    this.cdr = cdr;
    this.directionality = directionality;
    this.destroy$ = destroy$;
    this._nzModuleName = NZ_CONFIG_MODULE_NAME;
    this.nzAllowClear = true;
    this.nzAllowHalf = false;
    this.nzDisabled = false;
    this.nzAutoFocus = false;
    this.nzCount = 5;
    this.nzTooltips = [];
    this.nzOnBlur = new EventEmitter();
    this.nzOnFocus = new EventEmitter();
    this.nzOnHoverChange = new EventEmitter();
    this.nzOnKeyDown = new EventEmitter();
    this.classMap = {};
    this.starArray = [];
    this.starStyleArray = [];
    this.dir = "ltr";
    this.hasHalf = false;
    this.hoverValue = 0;
    this.isFocused = false;
    this._value = 0;
    this.isNzDisableFirstChange = true;
    this.onChange = () => null;
    this.onTouched = () => null;
  }
  ngOnChanges(changes) {
    const {
      nzAutoFocus,
      nzCount,
      nzValue
    } = changes;
    if (nzAutoFocus && !nzAutoFocus.isFirstChange()) {
      const el = this.ulElement.nativeElement;
      if (this.nzAutoFocus && !this.nzDisabled) {
        this.renderer.setAttribute(el, "autofocus", "autofocus");
      } else {
        this.renderer.removeAttribute(el, "autofocus");
      }
    }
    if (nzCount) {
      this.updateStarArray();
    }
    if (nzValue) {
      this.updateStarStyle();
    }
  }
  ngOnInit() {
    this.nzConfigService.getConfigChangeEventForComponent(NZ_CONFIG_MODULE_NAME).pipe(takeUntil(this.destroy$)).subscribe(() => this.cdr.markForCheck());
    this.directionality.change.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
    this.dir = this.directionality.value;
    this.ngZone.runOutsideAngular(() => {
      fromEvent(this.ulElement.nativeElement, "focus").pipe(takeUntil(this.destroy$)).subscribe((event) => {
        this.isFocused = true;
        if (this.nzOnFocus.observers.length) {
          this.ngZone.run(() => this.nzOnFocus.emit(event));
        }
      });
      fromEvent(this.ulElement.nativeElement, "blur").pipe(takeUntil(this.destroy$)).subscribe((event) => {
        this.isFocused = false;
        if (this.nzOnBlur.observers.length) {
          this.ngZone.run(() => this.nzOnBlur.emit(event));
        }
      });
    });
  }
  onItemClick(index, isHalf) {
    if (this.nzDisabled) {
      return;
    }
    this.hoverValue = index + 1;
    const actualValue = isHalf ? index + 0.5 : index + 1;
    if (this.nzValue === actualValue) {
      if (this.nzAllowClear) {
        this.nzValue = 0;
        this.onChange(this.nzValue);
      }
    } else {
      this.nzValue = actualValue;
      this.onChange(this.nzValue);
    }
    this.updateStarStyle();
  }
  onItemHover(index, isHalf) {
    if (this.nzDisabled || this.hoverValue === index + 1 && isHalf === this.hasHalf) {
      return;
    }
    this.hoverValue = index + 1;
    this.hasHalf = isHalf;
    this.nzOnHoverChange.emit(this.hoverValue);
    this.updateStarStyle();
  }
  onRateLeave() {
    this.hasHalf = !Number.isInteger(this.nzValue);
    this.hoverValue = Math.ceil(this.nzValue);
    this.updateStarStyle();
  }
  focus() {
    this.ulElement.nativeElement.focus();
  }
  blur() {
    this.ulElement.nativeElement.blur();
  }
  onKeyDown(e) {
    const oldVal = this.nzValue;
    if (e.keyCode === RIGHT_ARROW && this.nzValue < this.nzCount) {
      this.nzValue += this.nzAllowHalf ? 0.5 : 1;
    } else if (e.keyCode === LEFT_ARROW && this.nzValue > 0) {
      this.nzValue -= this.nzAllowHalf ? 0.5 : 1;
    }
    if (oldVal !== this.nzValue) {
      this.onChange(this.nzValue);
      this.nzOnKeyDown.emit(e);
      this.updateStarStyle();
      this.cdr.markForCheck();
    }
  }
  updateStarArray() {
    this.starArray = Array(this.nzCount).fill(0).map((_, i) => i);
    this.updateStarStyle();
  }
  updateStarStyle() {
    this.starStyleArray = this.starArray.map((i) => {
      const prefix = "ant-rate-star";
      const value = i + 1;
      return {
        [`${prefix}-full`]: value < this.hoverValue || !this.hasHalf && value === this.hoverValue,
        [`${prefix}-half`]: this.hasHalf && value === this.hoverValue,
        [`${prefix}-active`]: this.hasHalf && value === this.hoverValue,
        [`${prefix}-zero`]: value > this.hoverValue,
        [`${prefix}-focused`]: this.hasHalf && value === this.hoverValue && this.isFocused
      };
    });
  }
  writeValue(value) {
    this.nzValue = value || 0;
    this.updateStarArray();
    this.cdr.markForCheck();
  }
  setDisabledState(isDisabled) {
    this.nzDisabled = this.isNzDisableFirstChange && this.nzDisabled || isDisabled;
    this.isNzDisableFirstChange = false;
    this.cdr.markForCheck();
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
};
_NzRateComponent.ɵfac = function NzRateComponent_Factory(t) {
  return new (t || _NzRateComponent)(ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Directionality, 8), ɵɵdirectiveInject(NzDestroyService));
};
_NzRateComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzRateComponent,
  selectors: [["nz-rate"]],
  viewQuery: function NzRateComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c2, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.ulElement = _t.first);
    }
  },
  inputs: {
    nzAllowClear: "nzAllowClear",
    nzAllowHalf: "nzAllowHalf",
    nzDisabled: "nzDisabled",
    nzAutoFocus: "nzAutoFocus",
    nzCharacter: "nzCharacter",
    nzCount: "nzCount",
    nzTooltips: "nzTooltips"
  },
  outputs: {
    nzOnBlur: "nzOnBlur",
    nzOnFocus: "nzOnFocus",
    nzOnHoverChange: "nzOnHoverChange",
    nzOnKeyDown: "nzOnKeyDown"
  },
  exportAs: ["nzRate"],
  standalone: true,
  features: [ɵɵProvidersFeature([NzDestroyService, {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => _NzRateComponent),
    multi: true
  }]), ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 3,
  vars: 7,
  consts: [["ulElement", ""], [1, "ant-rate", 3, "keydown", "mouseleave", "ngClass", "tabindex"], ["class", "ant-rate-star", "nz-tooltip", "", 3, "ngClass", "nzTooltipTitle", 4, "ngFor", "ngForOf"], ["nz-tooltip", "", 1, "ant-rate-star", 3, "ngClass", "nzTooltipTitle"], ["nz-rate-item", "", 3, "itemHover", "itemClick", "allowHalf", "character", "index"]],
  template: function NzRateComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵelementStart(0, "ul", 1, 0);
      ɵɵlistener("keydown", function NzRateComponent_Template_ul_keydown_0_listener($event) {
        ɵɵrestoreView(_r1);
        ctx.onKeyDown($event);
        return ɵɵresetView($event.preventDefault());
      })("mouseleave", function NzRateComponent_Template_ul_mouseleave_0_listener($event) {
        ɵɵrestoreView(_r1);
        ctx.onRateLeave();
        return ɵɵresetView($event.stopPropagation());
      });
      ɵɵtemplate(2, NzRateComponent_li_2_Template, 2, 5, "li", 2);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵclassProp("ant-rate-disabled", ctx.nzDisabled)("ant-rate-rtl", ctx.dir === "rtl");
      ɵɵproperty("ngClass", ctx.classMap)("tabindex", ctx.nzDisabled ? -1 : 1);
      ɵɵadvance(2);
      ɵɵproperty("ngForOf", ctx.starArray);
    }
  },
  dependencies: [NgClass, NgForOf, NzToolTipModule, NzTooltipDirective, NzRateItemComponent],
  encapsulation: 2,
  changeDetection: 0
});
var NzRateComponent = _NzRateComponent;
__decorate([WithConfig(), InputBoolean()], NzRateComponent.prototype, "nzAllowClear", void 0);
__decorate([WithConfig(), InputBoolean()], NzRateComponent.prototype, "nzAllowHalf", void 0);
__decorate([InputBoolean()], NzRateComponent.prototype, "nzDisabled", void 0);
__decorate([InputBoolean()], NzRateComponent.prototype, "nzAutoFocus", void 0);
__decorate([InputNumber()], NzRateComponent.prototype, "nzCount", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzRateComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      selector: "nz-rate",
      exportAs: "nzRate",
      preserveWhitespaces: false,
      template: `
    <ul
      #ulElement
      class="ant-rate"
      [class.ant-rate-disabled]="nzDisabled"
      [class.ant-rate-rtl]="dir === 'rtl'"
      [ngClass]="classMap"
      (keydown)="onKeyDown($event); $event.preventDefault()"
      (mouseleave)="onRateLeave(); $event.stopPropagation()"
      [tabindex]="nzDisabled ? -1 : 1"
    >
      <li
        *ngFor="let star of starArray; let i = index"
        class="ant-rate-star"
        [ngClass]="starStyleArray[i] || ''"
        nz-tooltip
        [nzTooltipTitle]="nzTooltips[i]"
      >
        <div
          nz-rate-item
          [allowHalf]="nzAllowHalf"
          [character]="nzCharacter"
          [index]="i"
          (itemHover)="onItemHover(i, $event)"
          (itemClick)="onItemClick(i, $event)"
        ></div>
      </li>
    </ul>
  `,
      providers: [NzDestroyService, {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => NzRateComponent),
        multi: true
      }],
      imports: [NgClass, NgForOf, NzToolTipModule, NzRateItemComponent, NzToolTipModule],
      standalone: true
    }]
  }], () => [{
    type: NzConfigService
  }, {
    type: NgZone
  }, {
    type: Renderer2
  }, {
    type: ChangeDetectorRef
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }, {
    type: NzDestroyService
  }], {
    ulElement: [{
      type: ViewChild,
      args: ["ulElement", {
        static: true
      }]
    }],
    nzAllowClear: [{
      type: Input
    }],
    nzAllowHalf: [{
      type: Input
    }],
    nzDisabled: [{
      type: Input
    }],
    nzAutoFocus: [{
      type: Input
    }],
    nzCharacter: [{
      type: Input
    }],
    nzCount: [{
      type: Input
    }],
    nzTooltips: [{
      type: Input
    }],
    nzOnBlur: [{
      type: Output
    }],
    nzOnFocus: [{
      type: Output
    }],
    nzOnHoverChange: [{
      type: Output
    }],
    nzOnKeyDown: [{
      type: Output
    }]
  });
})();
var _NzRateModule = class _NzRateModule {
};
_NzRateModule.ɵfac = function NzRateModule_Factory(t) {
  return new (t || _NzRateModule)();
};
_NzRateModule.ɵmod = ɵɵdefineNgModule({
  type: _NzRateModule,
  imports: [NzRateComponent, NzRateItemComponent],
  exports: [NzRateComponent]
});
_NzRateModule.ɵinj = ɵɵdefineInjector({
  imports: [NzRateComponent, NzRateItemComponent]
});
var NzRateModule = _NzRateModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzRateModule, [{
    type: NgModule,
    args: [{
      imports: [NzRateComponent, NzRateItemComponent],
      exports: [NzRateComponent]
    }]
  }], null, null);
})();
export {
  NzRateComponent,
  NzRateItemComponent,
  NzRateModule
};
//# sourceMappingURL=ng-zorro-antd_rate.js.map
