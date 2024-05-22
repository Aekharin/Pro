import {
  thumbMotion
} from "./chunk-KC2ZQZUX.js";
import "./chunk-G4VOMUDB.js";
import {
  NzIconDirective,
  NzIconModule
} from "./chunk-XA4TVJV6.js";
import "./chunk-5QBFNWJX.js";
import "./chunk-Q2CZS4AS.js";
import {
  NzOutletModule,
  NzStringTemplateOutletDirective
} from "./chunk-YAFLS4M2.js";
import {
  Directionality
} from "./chunk-TJB66R27.js";
import {
  NzConfigService,
  WithConfig
} from "./chunk-P67MMMCD.js";
import {
  InputBoolean
} from "./chunk-M5HMM4AU.js";
import {
  NG_VALUE_ACCESSOR
} from "./chunk-O35B7BHW.js";
import "./chunk-DIJQRYI6.js";
import "./chunk-FARHR2HR.js";
import {
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-BIJUL52O.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  NgModule,
  Optional,
  Output,
  Subject,
  ViewChildren,
  ViewEncapsulation$1,
  __decorate,
  forwardRef,
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
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-XOMPOCT2.js";
import "./chunk-BYTETG5J.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-segmented.mjs
var _c0 = ["itemLabels"];
var _c1 = () => ({
  "ant-segmented-thumb": true,
  "ant-segmented-thumb-motion": true
});
var _c2 = (a0, a1) => ({
  "ant-segmented-item": true,
  "ant-segmented-item-selected": a0,
  "ant-segmented-item-disabled": a1
});
var _c3 = (a0, a1) => ({
  $implicit: a0,
  index: a1
});
function NzSegmentedComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 5);
    ɵɵlistener("@thumbMotion.done", function NzSegmentedComponent_div_1_Template_div_animation_thumbMotion_done_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.handleThumbAnimationDone($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngClass", ɵɵpureFunction0(2, _c1))("@thumbMotion", ctx_r1.animationState);
  }
}
function NzSegmentedComponent_label_2_ng_container_4_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r5 = ɵɵnextContext(2).$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", item_r5.label, " ");
  }
}
function NzSegmentedComponent_label_2_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "span", 9);
    ɵɵelement(2, "span", 10);
    ɵɵelementEnd();
    ɵɵelementStart(3, "span");
    ɵɵtemplate(4, NzSegmentedComponent_label_2_ng_container_4_ng_container_4_Template, 2, 1, "ng-container", 11);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r6 = ɵɵnextContext();
    const item_r5 = ctx_r6.$implicit;
    const i_r6 = ctx_r6.index;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("nzType", item_r5.icon);
    ɵɵadvance(2);
    ɵɵproperty("nzStringTemplateOutlet", item_r5.useTemplate && ctx_r1.nzLabelTemplate)("nzStringTemplateOutletContext", ɵɵpureFunction2(3, _c3, item_r5, i_r6));
  }
}
function NzSegmentedComponent_label_2_ng_template_5_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r5 = ɵɵnextContext(2).$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", item_r5.label, " ");
  }
}
function NzSegmentedComponent_label_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzSegmentedComponent_label_2_ng_template_5_ng_container_0_Template, 2, 1, "ng-container", 11);
  }
  if (rf & 2) {
    const ctx_r6 = ɵɵnextContext();
    const item_r5 = ctx_r6.$implicit;
    const i_r6 = ctx_r6.index;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("nzStringTemplateOutlet", item_r5.useTemplate && ctx_r1.nzLabelTemplate)("nzStringTemplateOutletContext", ɵɵpureFunction2(2, _c3, item_r5, i_r6));
  }
}
function NzSegmentedComponent_label_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "label", 5, 0);
    ɵɵelement(2, "input", 6);
    ɵɵelementStart(3, "div", 7);
    ɵɵlistener("click", function NzSegmentedComponent_label_2_Template_div_click_3_listener() {
      const ctx_r3 = ɵɵrestoreView(_r3);
      const item_r5 = ctx_r3.$implicit;
      const i_r6 = ctx_r3.index;
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(!item_r5.disabled && ctx_r1.handleOptionClick(i_r6));
    });
    ɵɵtemplate(4, NzSegmentedComponent_label_2_ng_container_4_Template, 5, 6, "ng-container", 8)(5, NzSegmentedComponent_label_2_ng_template_5_Template, 1, 5, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const else_template_r8 = ɵɵreference(6);
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngClass", ɵɵpureFunction2(4, _c2, i_r6 === ctx_r1.selectedIndex, !!ctx_r1.nzDisabled || item_r5.disabled));
    ɵɵadvance(2);
    ɵɵproperty("checked", i_r6 === ctx_r1.selectedIndex);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", item_r5.icon)("ngIfElse", else_template_r8);
  }
}
function normalizeOptions(unnormalized) {
  return unnormalized.map((item) => {
    if (typeof item === "string" || typeof item === "number") {
      return {
        label: `${item}`,
        value: item
      };
    }
    return item;
  });
}
var NZ_CONFIG_MODULE_NAME = "segmented";
var _NzSegmentedComponent = class _NzSegmentedComponent {
  constructor(nzConfigService, cdr, directionality) {
    this.nzConfigService = nzConfigService;
    this.cdr = cdr;
    this.directionality = directionality;
    this._nzModuleName = NZ_CONFIG_MODULE_NAME;
    this.nzBlock = false;
    this.nzDisabled = false;
    this.nzOptions = [];
    this.nzSize = "default";
    this.nzLabelTemplate = null;
    this.nzValueChange = new EventEmitter();
    this.dir = "ltr";
    this.selectedIndex = 0;
    this.transitionedToIndex = -1;
    this.animationState = null;
    this.normalizedOptions = [];
    this.destroy$ = new Subject();
    this.onChange = () => {
    };
    this.onTouched = () => {
    };
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
  }
  ngOnChanges(changes) {
    const {
      nzOptions
    } = changes;
    if (nzOptions) {
      this.normalizedOptions = normalizeOptions(nzOptions.currentValue);
    }
  }
  handleOptionClick(index) {
    if (this.nzDisabled) {
      return;
    }
    this.changeSelectedIndex(index);
    this.onChange(index);
    this.nzValueChange.emit(index);
  }
  handleThumbAnimationDone(e) {
    if (e.fromState === "from") {
      this.selectedIndex = this.transitionedToIndex;
      this.transitionedToIndex = -1;
      this.animationState = null;
      this.cdr.detectChanges();
    }
  }
  writeValue(value) {
    if (typeof value === "number" && value > -1) {
      this.changeSelectedIndex(value);
      this.cdr.markForCheck();
    }
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  changeSelectedIndex(index) {
    if (!this.listOfOptions || this.selectedIndex === -1 || this.selectedIndex === index) {
      return;
    }
    this.animationState = {
      value: "from",
      params: getThumbAnimationProps(this.listOfOptions.get(this.selectedIndex).nativeElement)
    };
    this.selectedIndex = -1;
    this.cdr.detectChanges();
    this.animationState = {
      value: "to",
      params: getThumbAnimationProps(this.listOfOptions.get(index).nativeElement)
    };
    this.transitionedToIndex = index;
    this.cdr.detectChanges();
  }
};
_NzSegmentedComponent.ɵfac = function NzSegmentedComponent_Factory(t) {
  return new (t || _NzSegmentedComponent)(ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Directionality, 8));
};
_NzSegmentedComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzSegmentedComponent,
  selectors: [["nz-segmented"]],
  viewQuery: function NzSegmentedComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c0, 5, ElementRef);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.listOfOptions = _t);
    }
  },
  hostAttrs: [1, "ant-segmented"],
  hostVars: 10,
  hostBindings: function NzSegmentedComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("ant-segmented-disabled", !!ctx.nzDisabled)("ant-segmented-rtl", ctx.dir === "rtl")("ant-segmented-lg", ctx.nzSize === "large")("ant-segmented-sm", ctx.nzSize === "small")("ant-segmented-block", !!ctx.nzBlock);
    }
  },
  inputs: {
    nzBlock: "nzBlock",
    nzDisabled: "nzDisabled",
    nzOptions: "nzOptions",
    nzSize: "nzSize",
    nzLabelTemplate: "nzLabelTemplate"
  },
  outputs: {
    nzValueChange: "nzValueChange"
  },
  exportAs: ["nzSegmented"],
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => _NzSegmentedComponent),
    multi: true
  }]), ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 3,
  vars: 2,
  consts: [["itemLabels", ""], ["else_template", ""], [1, "ant-segmented-group"], [3, "ngClass", 4, "ngIf"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], ["type", "radio", 1, "ant-segmented-item-input", 3, "checked"], [1, "ant-segmented-item-label", 3, "click"], [4, "ngIf", "ngIfElse"], [1, "ant-segmented-item-icon"], ["nz-icon", "", 3, "nzType"], [4, "nzStringTemplateOutlet", "nzStringTemplateOutletContext"]],
  template: function NzSegmentedComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 2);
      ɵɵtemplate(1, NzSegmentedComponent_div_1_Template, 1, 3, "div", 3)(2, NzSegmentedComponent_label_2_Template, 7, 7, "label", 4);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.animationState);
      ɵɵadvance();
      ɵɵproperty("ngForOf", ctx.normalizedOptions);
    }
  },
  dependencies: [NgIf, NgClass, NgForOf, NzIconModule, NzIconDirective, NzOutletModule, NzStringTemplateOutletDirective],
  encapsulation: 2,
  data: {
    animation: [thumbMotion]
  },
  changeDetection: 0
});
var NzSegmentedComponent = _NzSegmentedComponent;
__decorate([InputBoolean()], NzSegmentedComponent.prototype, "nzBlock", void 0);
__decorate([InputBoolean()], NzSegmentedComponent.prototype, "nzDisabled", void 0);
__decorate([WithConfig()], NzSegmentedComponent.prototype, "nzSize", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSegmentedComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      selector: "nz-segmented",
      exportAs: "nzSegmented",
      template: `
    <!-- thumb motion div -->
    <div class="ant-segmented-group">
      <div
        *ngIf="animationState"
        [ngClass]="{ 'ant-segmented-thumb': true, 'ant-segmented-thumb-motion': true }"
        [@thumbMotion]="animationState"
        (@thumbMotion.done)="handleThumbAnimationDone($event)"
      ></div>
      <label
        #itemLabels
        *ngFor="let item of normalizedOptions; let i = index"
        [ngClass]="{
          'ant-segmented-item': true,
          'ant-segmented-item-selected': i === selectedIndex,
          'ant-segmented-item-disabled': !!nzDisabled || item.disabled
        }"
      >
        <input class="ant-segmented-item-input" type="radio" [checked]="i === selectedIndex" />
        <div class="ant-segmented-item-label" (click)="!item.disabled && handleOptionClick(i)">
          <ng-container *ngIf="item.icon; else else_template">
            <span class="ant-segmented-item-icon"><span nz-icon [nzType]="item.icon"></span></span>
            <span>
              <ng-container
                *nzStringTemplateOutlet="item.useTemplate && nzLabelTemplate; context: { $implicit: item, index: i }"
              >
                {{ item.label }}
              </ng-container>
            </span>
          </ng-container>
          <ng-template #else_template>
            <ng-container
              *nzStringTemplateOutlet="item.useTemplate && nzLabelTemplate; context: { $implicit: item, index: i }"
            >
              {{ item.label }}
            </ng-container>
          </ng-template>
        </div>
      </label>
    </div>
  `,
      host: {
        class: "ant-segmented",
        "[class.ant-segmented-disabled]": "!!nzDisabled",
        "[class.ant-segmented-rtl]": `dir === 'rtl'`,
        "[class.ant-segmented-lg]": `nzSize === 'large'`,
        "[class.ant-segmented-sm]": `nzSize === 'small'`,
        "[class.ant-segmented-block]": `!!nzBlock`
      },
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => NzSegmentedComponent),
        multi: true
      }],
      animations: [thumbMotion],
      imports: [NgIf, NgClass, NgForOf, NzIconModule, NzOutletModule],
      standalone: true
    }]
  }], () => [{
    type: NzConfigService
  }, {
    type: ChangeDetectorRef
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }], {
    listOfOptions: [{
      type: ViewChildren,
      args: ["itemLabels", {
        read: ElementRef
      }]
    }],
    nzBlock: [{
      type: Input
    }],
    nzDisabled: [{
      type: Input
    }],
    nzOptions: [{
      type: Input
    }],
    nzSize: [{
      type: Input
    }],
    nzLabelTemplate: [{
      type: Input
    }],
    nzValueChange: [{
      type: Output
    }]
  });
})();
function getThumbAnimationProps(element) {
  return {
    transform: element.offsetLeft,
    width: element.clientWidth
  };
}
var _NzSegmentedModule = class _NzSegmentedModule {
};
_NzSegmentedModule.ɵfac = function NzSegmentedModule_Factory(t) {
  return new (t || _NzSegmentedModule)();
};
_NzSegmentedModule.ɵmod = ɵɵdefineNgModule({
  type: _NzSegmentedModule,
  imports: [NzSegmentedComponent],
  exports: [NzSegmentedComponent]
});
_NzSegmentedModule.ɵinj = ɵɵdefineInjector({
  imports: [NzSegmentedComponent]
});
var NzSegmentedModule = _NzSegmentedModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSegmentedModule, [{
    type: NgModule,
    args: [{
      imports: [NzSegmentedComponent],
      exports: [NzSegmentedComponent]
    }]
  }], null, null);
})();
export {
  NzSegmentedComponent,
  NzSegmentedModule,
  normalizeOptions
};
//# sourceMappingURL=ng-zorro-antd_segmented.js.map
