import {
  Component,
  Element,
  Event,
  Listen,
  h,
  Prop,
  EventEmitter,
  VNode,
  Host
} from "@stencil/core";
import { ensureId, getElementDir, queryElementRoots } from "../../utils/dom";
import { FocusRequest } from "./interfaces";
import { Alignment, Scale, Status } from "../interfaces";
import { CSS_UTILITY } from "../../utils/resources";

@Component({
  tag: "calcite-label",
  styleUrl: "calcite-label.scss",
  shadow: true
})
export class CalciteLabel {
  //--------------------------------------------------------------------------
  //
  //  Element
  //
  //--------------------------------------------------------------------------

  @Element() el: HTMLCalciteLabelElement;

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  /** specify the text alignment of the label */
  @Prop({ reflect: true }) alignment: Alignment = "start";

  /** specify the status of the label and any child input / input messages */
  @Prop({ reflect: true }) status: Status = "idle";

  /** The id of the input associated with the label */
  @Prop({ reflect: true }) for: string;

  /** specify the scale of the input, defaults to m */
  @Prop({ reflect: true }) scale: Scale = "m";

  /** is the wrapped element positioned inline with the label slotted text */
  @Prop({ reflect: true }) layout: "inline" | "inline-space-between" | "default" = "default";

  /** eliminates any space around the label */
  @Prop() disableSpacing?: boolean;

  /** is the label disabled  */
  @Prop({ reflect: true }) disabled?: boolean;

  //--------------------------------------------------------------------------
  //
  //  Events
  //
  //--------------------------------------------------------------------------

  /**
   * @internal
   */
  @Event() calciteLabelFocus: EventEmitter<FocusRequest>;

  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------

  @Listen("click")
  onClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    this.calciteLabelFocus.emit({
      labelEl: this.el,
      interactedEl: target,
      requestedInput: this.for
    });
    this.handleCalciteHtmlForClicks(target);
  }

  componentDidLoad(): void {
    // TODO: avoid hardcoding
    let inputForThisLabel: HTMLElement = this.for
                                         ? queryElementRoots(this.el, `#${this.for}`)
                                         : this.el.firstElementChild.localName === "calcite-input"
                                           ? (this.el.firstElementChild as HTMLElement)
                                           : undefined;

    if (!inputForThisLabel) {
      return;
    }
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  private handleCalciteHtmlForClicks = (target: HTMLElement) => {
    const lce = [
      "calcite-button",
      "calcite-checkbox",
      "calcite-date",
      "calcite-inline-editable",
      "calcite-input",
      "calcite-radio",
      "calcite-radio-button",
      "calcite-radio-button-group",
      "calcite-radio-group",
      "calcite-rating",
      "calcite-select",
      "calcite-slider",
      "calcite-switch"
    ];

    // TODO: could be extracted to mixin for focusable elements to implement instead of having everything here
    // 1. has htmlFor
    if (!this.for) {
      if (target.localName === "calcite-label" && lce.includes(target.children[0].localName)) {
        (target.children[0] as any).click();
      }

      return;
    }

    // 2. htmlFor matches a calcite component
    const inputForThisLabel: HTMLElement = queryElementRoots(this.el, `#${this.for}`);
    if (!inputForThisLabel) {
      return;
    }
    if (!inputForThisLabel.localName.startsWith("calcite")) {
      return;
    }

    // 5. target is NOT the calcite component that this label matches
    if (target === inputForThisLabel) {
      return;
    }

    // 3. target is not a labelable native form element
    const labelableNativeElements = [
      "button",
      "input",
      "meter",
      "output",
      "progress",
      "select",
      "textarea"
    ];
    if (labelableNativeElements.includes(target.localName)) {
      return;
    }

    // 4. target is not a labelable calcite form element
    const labelableCalciteElements = [
      "calcite-button",
      "calcite-checkbox",
      "calcite-date",
      "calcite-inline-editable",
      "calcite-input",
      "calcite-radio",
      "calcite-radio-button",
      "calcite-radio-button-group",
      "calcite-radio-group",
      "calcite-rating",
      "calcite-select",
      "calcite-slider",
      "calcite-switch"
    ];
    if (labelableCalciteElements.includes(target.localName)) {
      // return;
    }

    // 5. target is not a child of a labelable calcite form element
    for (let i = 0; i < labelableCalciteElements.length; i++) {
      if (target.closest(labelableCalciteElements[i])) {
        return;
      }
    }

    inputForThisLabel.click();
  };

  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  render(): VNode {
    const dir = getElementDir(this.el);
    return (
      <Host class={{ [CSS_UTILITY.rtl]: dir === "rtl" }}>
        <slot />
      </Host>
    );
  }
}
