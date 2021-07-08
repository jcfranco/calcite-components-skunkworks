
| **component** |   |   |   |   |   |
|-----|-----|-----|-----|-----|-----|
|calcite-accordion|   |   |   |   |   |
|   | **property** | **attribute** | **type** | **default** |   |
|     |`appearance`|`appearance`|`"default" \| "minimal" \| "transparent"`|<code>"default"</code>|||
|     |`iconPosition`|`icon-position`|`"end" \| "start"`|<code>"end"</code>|||
|     |`iconType`|`icon-type`|`"caret" \| "chevron" \| "plus-minus"`|<code>"chevron"</code>|||
|     |`scale`|`scale`|`"l" \| "m" \| "s"`|<code>"m"</code>|||
|     |`selectionMode`|`selection-mode`|`"multi" \| "single" \| "single-persist"`|<code>"multi"</code>|||

| **component** |   |   |   |   |   |
|-----|-----|-----|-----|-----|-----|
|calcite-accordion-item|   |   |   |   |   |
|   | **property** | **attribute** | **type** | **default** |   |
|     |`active`|`active`|`boolean`|<code>false</code>|||
|     |`icon`|`icon`|`string`|`--`|||
|     |`itemSubtitle`|`item-subtitle`|`string`|`--`|||
|     |`itemTitle`|`item-title`|`string`|`--`|||

| **component** |   |   |   |   |   |
|-----|-----|-----|-----|-----|-----|
|calcite-action|   |   |   |   |   |
|   | **property** | **attribute** | **type** | **default** |   |
|     |`active`|`active`|`boolean`|<code>false</code>|||
|     |`alignment`|`alignment`|`"center" \| "end" \| "start"`|`--`|||
|     |`appearance`|`appearance`|`"clear" \| "outline" \| "solid"`|<code>"solid"</code>|||
|     |`compact`|`compact`|`boolean`|<code>false</code>|||
|     |`disabled`|`disabled`|`boolean`|<code>false</code>|||
|     |`icon`|`icon`|`string`|`--`|||
|     |`indicator`|`indicator`|`boolean`|<code>false</code>|||
|     |`intlLoading`|`intl-loading`|`string`|<code>"Loading"</code>|||
|     |`label`|`label`|`string`|`--`|||
|     |`loading`|`loading`|`boolean`|<code>false</code>|||
|     |`scale`|`scale`|`"l" \| "m" \| "s"`|<code>"m"</code>|||
|     |`text`|`text`|`string`|`--`|<code>required</code>||
|     |`textEnabled`|`text-enabled`|`boolean`|<code>false</code>|||
|   |   |   |   |   |   |
|   | **event** | **detail** |   |   |   |
|   |`calciteActionClick`|`any`||   |   |
|   |   |   |   |   |   |
|   | **method** | **signature** | **returns** |   |   |
|   |`setFocus`|`setFocus() => Promise<void>`|`Promise<void>`||   |

| **component** |   |   |   |   |   |
|-----|-----|-----|-----|-----|-----|
|calcite-action-bar|   |   |   |   |   |
|   | **property** | **attribute** | **type** | **default** |   |
|     |`expandDisabled`|`expand-disabled`|`boolean`|<code>false</code>|||
|     |`expanded`|`expanded`|`boolean`|<code>false</code>|||
|     |`intlCollapse`|`intl-collapse`|`string`|`--`|||
|     |`intlExpand`|`intl-expand`|`string`|`--`|||
|     |`overflowActionsDisabled`|`overflow-actions-disabled`|`boolean`|`--`|||
|     |`position`|`position`|`"end" \| "start"`|`--`|||
|   |   |   |   |   |   |
|   | **event** | **detail** |   |   |   |
|   |`calciteActionBarToggle`|`any`||   |   |
|   |   |   |   |   |   |
|   | **method** | **signature** | **returns** |   |   |
|   |`setFocus`|`setFocus(focusId?: "expand-toggle") => Promise<void>`|`Promise<void>`||   |

| **component** |   |   |   |   |   |
|-----|-----|-----|-----|-----|-----|
|calcite-action-group|   |   |   |   |   |
|   | **property** | **attribute** | **type** | **default** |   |
|     |`columns`|`columns`|`1 \| 2 \| 3 \| 4 \| 5 \| 6`|`--`|||
|     |`expanded`|`expanded`|`boolean`|<code>false</code>|||
|     |`intlMore`|`intl-more`|`string`|`--`|||
|     |`layout`|`layout`|`"grid" \| "horizontal" \| "vertical"`|<code>"vertical"</code>|||
|     |`menuOpen`|`menu-open`|`boolean`|<code>false</code>|||

| **component** |   |   |   |   |   |
|-----|-----|-----|-----|-----|-----|
|calcite-action-menu|   |   |   |   |   |
|   | **property** | **attribute** | **type** | **default** |   |
|     |`expanded`|`expanded`|`boolean`|<code>false</code>|||
|     |`flipPlacements`|`--`|`Placement[]`|`--`|||
|     |`label`|`label`|`string`|`--`|<code>required</code>||
|     |`open`|`open`|`boolean`|<code>false</code>|||
|     |`overlayPositioning`|`overlay-positioning`|`"absolute" \| "fixed"`|<code>"absolute"</code>|||
|     |`placement`|`placement`|`Placement \| PlacementRtl \| VariationRtl`|<code>"auto"</code>|||
|   |   |   |   |   |   |
|   | **event** | **detail** |   |   |   |
|   |`calciteActionMenuOpenChange`|`any`||   |   |
|   |   |   |   |   |   |
|   | **method** | **signature** | **returns** |   |   |
|   |`setFocus`|`setFocus() => Promise<void>`|`Promise<void>`||   |

| **component** |   |   |   |   |   |
|-----|-----|-----|-----|-----|-----|
|calcite-action-pad|   |   |   |   |   |
|   | **property** | **attribute** | **type** | **default** |   |
|     |`expandDisabled`|`expand-disabled`|`boolean`|<code>false</code>|||
|     |`expanded`|`expanded`|`boolean`|<code>false</code>|||
|     |`intlCollapse`|`intl-collapse`|`string`|`--`|||
|     |`intlExpand`|`intl-expand`|`string`|`--`|||
|     |`layout`|`layout`|`"grid" \| "horizontal" \| "vertical"`|<code>"vertical"</code>|||
|     |`position`|`position`|`"end" \| "start"`|`--`|||
|   |   |   |   |   |   |
|   | **event** | **detail** |   |   |   |
|   |`calciteActionPadToggle`|`any`||   |   |
|   |   |   |   |   |   |
|   | **method** | **signature** | **returns** |   |   |
|   |`setFocus`|`setFocus(focusId?: "expand-toggle") => Promise<void>`|`Promise<void>`||   |

| **component** |   |   |   |   |   |
|-----|-----|-----|-----|-----|-----|
|calcite-alert|   |   |   |   |   |
|   | **property** | **attribute** | **type** | **default** |   |
|     |`active`|`active`|`boolean`|<code>false</code>|||
|     |`autoDismiss`|`auto-dismiss`|`boolean`|<code>false</code>|||
|     |`autoDismissDuration`|`auto-dismiss-duration`|`"fast" \| "medium" \| "slow"`|<code>this.autoDismiss ? "medium" : null</code>|||
|     |`color`|`color`|`"blue" \| "green" \| "red" \| "yellow"`|<code>"blue"</code>|||
|     |`icon`|`icon`|`boolean \| string`|`--`|||
|     |`intlClose`|`intl-close`|`string`|<code>"close"</code>|||
|     |`label`|`label`|`string`|`--`|<code>required</code>||
|     |`scale`|`scale`|`"l" \| "m" \| "s"`|<code>"m"</code>|||
|   |   |   |   |   |   |
|   | **event** | **detail** |   |   |   |
|   |`calciteAlertClose`|`any`||   |   |
|   |`calciteAlertOpen`|`any`||   |   |
|   |   |   |   |   |   |
|   | **method** | **signature** | **returns** |   |   |
|   |`setFocus`|`setFocus() => Promise<void>`|`Promise<void>`||   |

| **component** |   |   |   |   |   |
|-----|-----|-----|-----|-----|-----|
|calcite-avatar|   |   |   |   |   |
|   | **property** | **attribute** | **type** | **default** |   |
|     |`fullName`|`full-name`|`string`|`--`|||
|     |`scale`|`scale`|`"l" \| "m" \| "s"`|<code>"m"</code>|||
|     |`thumbnail`|`thumbnail`|`string`|`--`|||
|     |`userId`|`user-id`|`string`|`--`|||
|     |`username`|`username`|`string`|`--`|||

| **component** |   |   |   |   |   |
|-----|-----|-----|-----|-----|-----|
|calcite-block|   |   |   |   |   |
|   | **property** | **attribute** | **type** | **default** |   |
|     |`collapsible`|`collapsible`|`boolean`|<code>false</code>|||
|     |`disabled`|`disabled`|`boolean`|<code>false</code>|||
|     |`dragHandle`|`drag-handle`|`boolean`|<code>false</code>|||
|     |`heading`|`heading`|`string`|`--`|||
|     |`headingLevel`|`heading-level`|`1 \| 2 \| 3 \| 4 \| 5 \| 6`|`--`|||
|     |`intlCollapse`|`intl-collapse`|`string`|`--`|||
|     |`intlExpand`|`intl-expand`|`string`|`--`|||
|     |`intlLoading`|`intl-loading`|`string`|<code>"Loading"</code>|||
|     |`intlOptions`|`intl-options`|`string`|<code>"Options"</code>|||
|     |`loading`|`loading`|`boolean`|<code>false</code>|||
|     |`open`|`open`|`boolean`|<code>false</code>|||
|     |`status`|`status`|`"idle" \| "invalid" \| "valid"`|`--`|||
|     |`summary`|`summary`|`string`|`--`|||
|   |   |   |   |   |   |
|   | **event** | **detail** |   |   |   |
|   |`calciteBlockToggle`|`any`||   |   |

| **component** |   |   |   |   |   |
|-----|-----|-----|-----|-----|-----|
|calcite-block-section|   |   |   |   |   |
|   | **property** | **attribute** | **type** | **default** |   |
|     |`intlCollapse`|`intl-collapse`|`string`|`--`|||
|     |`intlExpand`|`intl-expand`|`string`|`--`|||
|     |`open`|`open`|`boolean`|<code>false</code>|||
|     |`status`|`status`|`"idle" \| "invalid" \| "valid"`|`--`|||
|     |`text`|`text`|`string`|`--`|||
|     |`toggleDisplay`|`toggle-display`|`"button" \| "switch"`|<code>"button"</code>|||
|   |   |   |   |   |   |
|   | **event** | **detail** |   |   |   |
|   |`calciteBlockSectionToggle`|`any`||   |   |

| **component** |   |   |   |   |   |
|-----|-----|-----|-----|-----|-----|
|calcite-button|   |   |   |   |   |
|   | **property** | **attribute** | **type** | **default** |   |
|     |`alignment`|`alignment`|`"center" \| "end" \| "icon-end-space-between" \| "icon-start-space-between" \| "space-between" \| "start"`|<code>"center"</code>|||
|     |`appearance`|`appearance`|`"clear" \| "outline" \| "solid" \| "transparent"`|<code>"solid"</code>|||
|     |`color`|`color`|`"blue" \| "inverse" \| "neutral" \| "red"`|<code>"blue"</code>|||
|     |`disabled`|`disabled`|`boolean`|`--`|||
|     |`href`|`href`|`string`|`--`|||
|     |`iconEnd`|`icon-end`|`string`|`--`|||
|     |`iconFlipRtl`|`icon-flip-rtl`|`"both" \| "end" \| "start"`|`--`|||
|     |`iconStart`|`icon-start`|`string`|`--`|||
|     |`intlLoading`|`intl-loading`|`string`|<code>"Loading"</code>|||
|     |`label`|`label`|`string`|`--`|||
|     |`loading`|`loading`|`boolean`|<code>false</code>|||
|     |`name`|`name`|`string`|`--`|||
|     |`rel`|`rel`|`string`|`--`|||
|     |`round`|`round`|`boolean`|<code>false</code>|||
|     |`scale`|`scale`|`"l" \| "m" \| "s"`|<code>"m"</code>|||
|     |`splitChild`|`split-child`|`"primary" \| "secondary" \| boolean`|<code>false</code>|||
|     |`target`|`target`|`string`|`--`|||
|     |`type`|`type`|`string`|`--`|||
|     |`width`|`width`|`"auto" \| "full" \| "half"`|<code>"auto"</code>|||

| **component** |   |   |   |   |   |
|-----|-----|-----|-----|-----|-----|
|calcite-card|   |   |   |   |   |
|   | **property** | **attribute** | **type** | **default** |   |
|     |`intlDeselect`|`intl-deselect`|`string`|<code>"Deselect"</code>|||
|     |`intlLoading`|`intl-loading`|`string`|<code>"Loading"</code>|||
|     |`intlSelect`|`intl-select`|`string`|<code>"Select"</code>|||
|     |`loading`|`loading`|`boolean`|<code>false</code>|||
|     |`selectable`|`selectable`|`boolean`|<code>false</code>|||
|     |`selected`|`selected`|`boolean`|<code>false</code>|||
|   |   |   |   |   |   |
|   | **event** | **detail** |   |   |   |
|   |`calciteCardSelect`|`any`||   |   |

| **component** |   |   |   |   |   |
|-----|-----|-----|-----|-----|-----|
|calcite-checkbox|   |   |   |   |   |
|   | **property** | **attribute** | **type** | **default** |   |
|     |`checked`|`checked`|`boolean`|<code>false</code>|||
|     |`disabled`|`disabled`|`boolean`|<code>false</code>|||
|     |`guid`|`guid`|`string`|`--`|||
|     |`indeterminate`|`indeterminate`|`boolean`|<code>false</code>|||
|     |`name`|`name`|`string`|<code>""</code>|||
|     |`scale`|`scale`|`"l" \| "m" \| "s"`|<code>"m"</code>|||
|     |`value`|`value`|`any`|`--`|||
|   |   |   |   |   |   |
|   | **event** | **detail** |   |   |   |
|   |`calciteCheckboxChange`|`any`||   |   |
|   |   |   |   |   |   |
|   | **method** | **signature** | **returns** |   |   |
|   |`setFocus`|`setFocus() => Promise<void>`|`Promise<void>`||   |

| **component** |   |   |   |   |   |
|-----|-----|-----|-----|-----|-----|
|calcite-chip|   |   |   |   |   |
|   | **property** | **attribute** | **type** | **default** |   |
|     |`appearance`|`appearance`|`"clear" \| "solid"`|<code>"solid"</code>|||
|     |`color`|`color`|`"blue" \| "green" \| "grey" \| "red" \| "yellow"`|<code>"grey"</code>|||
|     |`dismissLabel`|`dismiss-label`|`string`|<code>"close"</code>|||
|     |`dismissible`|`dismissible`|`boolean`|<code>false</code>|||
|     |`icon`|`icon`|`string`|`--`|||
|     |`iconFlipRtl`|`icon-flip-rtl`|`boolean`|`--`|||
|     |`scale`|`scale`|`"l" \| "m" \| "s"`|<code>"m"</code>|||
|     |`value`|`value`|`any`|`--`|<code>required</code>||
|   |   |   |   |   |   |
|   | **event** | **detail** |   |   |   |
|   |`calciteChipDismiss`|`any`||   |   |
|   |   |   |   |   |   |
|   | **method** | **signature** | **returns** |   |   |
|   |`setFocus`|`setFocus() => Promise<void>`|`Promise<void>`||   |

| **component** |   |   |   |   |   |
|-----|-----|-----|-----|-----|-----|
|calcite-color-picker|   |   |   |   |   |
|   | **property** | **attribute** | **type** | **default** |   |
|     |`allowEmpty`|`allow-empty`|`boolean`|<code>false</code>|||
|     |`appearance`|`appearance`|`"default" \| "minimal"`|<code>"default"</code>|||
|     |`format`|`format`|`"auto" \| "hex" \| "hexa" \| "hsl" \| "hsl-css" \| "hsla" \| "hsla-css" \| "hsv" \| "hsva" \| "rgb" \| "rgb-css" \| "rgba" \| "rgba-css"`|<code>defaultFormat</code>|||
|     |`hideChannels`|`hide-channels`|`boolean`|<code>false</code>|||
|     |`hideHex`|`hide-hex`|`boolean`|<code>false</code>|||
|     |`hideSaved`|`hide-saved`|`boolean`|<code>false</code>|||
|     |`intlB`|`intl-b`|`string`|<code>"B"</code>|||
|     |`intlBlue`|`intl-blue`|`string`|<code>"Blue"</code>|||
|     |`intlDeleteColor`|`intl-delete-color`|`string`|<code>"Delete color"</code>|||
|     |`intlG`|`intl-g`|`string`|<code>"G"</code>|||
|     |`intlGreen`|`intl-green`|`string`|<code>"Green"</code>|||
|     |`intlH`|`intl-h`|`string`|<code>"H"</code>|||
|     |`intlHex`|`intl-hex`|`string`|<code>"Hex"</code>|||
|     |`intlHsv`|`intl-hsv`|`string`|<code>"HSV"</code>|||
|     |`intlHue`|`intl-hue`|`string`|<code>"Hue"</code>|||
|     |`intlNoColor`|`intl-no-color`|`string`|<code>"No color"</code>|||
|     |`intlR`|`intl-r`|`string`|<code>"R"</code>|||
|     |`intlRed`|`intl-red`|`string`|<code>"Red"</code>|||
|     |`intlRgb`|`intl-rgb`|`string`|<code>"RGB"</code>|||
|     |`intlS`|`intl-s`|`string`|<code>"S"</code>|||
|     |`intlSaturation`|`intl-saturation`|`string`|<code>"Saturation"</code>|||
|     |`intlSaveColor`|`intl-save-color`|`string`|<code>"Save color"</code>|||
|     |`intlSaved`|`intl-saved`|`string`|<code>"Saved"</code>|||
|     |`intlV`|`intl-v`|`string`|<code>"V"</code>|||
|     |`intlValue`|`intl-value`|`string`|<code>"Value"</code>|||
|     |`scale`|`scale`|`"l" \| "m" \| "s"`|<code>"m"</code>|||
|     |`storageId`|`storage-id`|`string`|`--`|||
|     |`value`|`value`|`HSL \| HSL & ObjectWithAlpha \| HSV \| HSV & ObjectWithAlpha \| RGB \| RGB & ObjectWithAlpha \| string`|<code>defaultValue</code>|||
|   |   |   |   |   |   |
|   | **event** | **detail** |   |   |   |
|   |`calciteColorPickerChange`|`any`||   |   |
|   |   |   |   |   |   |
|   | **method** | **signature** | **returns** |   |   |
|   |`setFocus`|`setFocus() => Promise<void>`|`Promise<void>`||   |

| **component** |   |   |   |   |   |
|-----|-----|-----|-----|-----|-----|
|calcite-color-picker-hex-input|   |   |   |   |   |
|   | **property** | **attribute** | **type** | **default** |   |
|     |`allowEmpty`|`allow-empty`|`boolean`|<code>false</code>|||
|     |`intlHex`|`intl-hex`|`string`|<code>"Hex"</code>|||
|     |`intlNoColor`|`intl-no-color`|`string`|<code>"No color"</code>|||
|     |`scale`|`scale`|`"l" \| "m" \| "s"`|<code>"m"</code>|||
|     |`value`|`value`|`string`|<code>normalizeHex(DEFAULT_COLOR.hex())</code>|||
|   |   |   |   |   |   |
|   | **event** | **detail** |   |   |   |
|   |`calciteColorPickerHexInputChange`|`any`||   |   |
|   |   |   |   |   |   |
|   | **method** | **signature** | **returns** |   |   |
|   |`setFocus`|`setFocus() => Promise<void>`|`Promise<void>`||   |

| **component** |   |   |   |   |   |
|-----|-----|-----|-----|-----|-----|
|calcite-color-picker-swatch|   |   |   |   |   |
|   | **property** | **attribute** | **type** | **default** |   |
|     |`active`|`active`|`boolean`|<code>false</code>|||
|     |`color`|`color`|`string`|`--`|||
|     |`scale`|`scale`|`"l" \| "m" \| "s"`|<code>"m"</code>|||

| **component** |   |   |   |   |   |
|-----|-----|-----|-----|-----|-----|
|calcite-combobox|   |   |   |   |   |
|   | **property** | **attribute** | **type** | **default** |   |
|     |`active`|`active`|`boolean`|<code>false</code>|||
|     |`allowCustomValues`|`allow-custom-values`|`boolean`|`--`|||
|     |`disabled`|`disabled`|`boolean`|<code>false</code>|||
|     |`label`|`label`|`string`|`--`|<code>required</code>||
|     |`maxItems`|`max-items`|`number`|<code>0</code>|||
|     |`overlayPositioning`|`overlay-positioning`|`"absolute" \| "fixed"`|<code>"absolute"</code>|||
|     |`placeholder`|`placeholder`|`string`|`--`|||
|     |`scale`|`scale`|`"l" \| "m" \| "s"`|<code>"m"</code>|||
|     |`selectionMode`|`selection-mode`|`"ancestors" \| "multi" \| "single"`|<code>"multi"</code>|||
|   |   |   |   |   |   |
|   | **event** | **detail** |   |   |   |
|   |`calciteComboboxChipDismiss`|`any`||   |   |
|   |`calciteComboboxFilterChange`|`{ visibleItems: HTMLCalciteComboboxItemElement[]; text: string; }`||   |   |
|   |`calciteLookupChange`|`HTMLCalciteComboboxItemElement[]`||   |   |
|   |   |   |   |   |   |
|   | **method** | **signature** | **returns** |   |   |
|   |`reposition`|`reposition() => Promise<void>`|`Promise<void>`||   |
|   |`setFocus`|`setFocus() => Promise<void>`|`Promise<void>`||   |

| **component** |   |   |   |   |   |
|-----|-----|-----|-----|-----|-----|
|calcite-combobox-item|   |   |   |   |   |
|   | **property** | **attribute** | **type** | **default** |   |
|     |`active`|`active`|`boolean`|<code>false</code>|||
|     |`ancestors`|`--`|`ComboboxChildElement[]`|`--`|||
|     |`constant`|`constant`|`boolean`|`--`|||
|     |`disabled`|`disabled`|`boolean`|<code>false</code>|||
|     |`guid`|`guid`|`string`|<code>guid()</code>|||
|     |`icon`|`icon`|`string`|`--`|||
|     |`selected`|`selected`|`boolean`|<code>false</code>|||
|     |`textLabel`|`text-label`|`string`|`--`|<code>required</code>||
|     |`value`|`value`|`any`|`--`|<code>required</code>||
|   |   |   |   |   |   |
|   | **event** | **detail** |   |   |   |
|   |`calciteComboboxItemChange`|`any`||   |   |
|   |   |   |   |   |   |
|   | **method** | **signature** | **returns** |   |   |
|   |`toggleSelected`|`toggleSelected(coerce?: boolean) => Promise<void>`|`Promise<void>`||   |

| **component** |   |   |   |   |   |
|-----|-----|-----|-----|-----|-----|
|calcite-combobox-item-group|   |   |   |   |   |
|   | **property** | **attribute** | **type** | **default** |   |
|     |`ancestors`|`--`|`ComboboxChildElement[]`|`--`|||
|     |`label`|`label`|`string`|`--`|<code>required</code>||

| **component** |   |   |   |   |   |
|-----|-----|-----|-----|-----|-----|
|calcite-date-picker|   |   |   |   |   |
|   | **property** | **attribute** | **type** | **default** |   |
|     |`activeRange`|`active-range`|`"end" \| "start"`|<code>"start"</code>|||
|     |`end`|`end`|`string`|`--`|||
|     |`endAsDate`|`--`|`Date`|`--`|||
|     |`headingLevel`|`heading-level`|`1 \| 2 \| 3 \| 4 \| 5 \| 6`|`--`|||
|     |`intlNextMonth`|`intl-next-month`|`string`|<code>"next month"</code>|||
|     |`intlPrevMonth`|`intl-prev-month`|`string`|<code>"previous month"</code>|||
|     |`locale`|`locale`|`string`|`document.documentElement.lang \|\| "en"`|||
|     |`max`|`max`|`string`|`--`|||
|     |`maxAsDate`|`--`|`Date`|`--`|||
|     |`min`|`min`|`string`|`--`|||
|     |`minAsDate`|`--`|`Date`|`--`|||
|     |`proximitySelectionDisabled`|`proximity-selection-disabled`|`boolean`|<code>false</code>|||
|     |`range`|`range`|`boolean`|<code>false</code>|||
|     |`scale`|`scale`|`"l" \| "m" \| "s"`|<code>"m"</code>|||
|     |`start`|`start`|`string`|`--`|||
|     |`startAsDate`|`--`|`Date`|`--`|||
|     |`value`|`value`|`string`|`--`|||
|     |`valueAsDate`|`--`|`Date`|`--`|||
|   |   |   |   |   |   |
|   | **event** | **detail** |   |   |   |
|   |`calciteDatePickerChange`| [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)||   |   |
|   |`calciteDatePickerRangeChange`| [DateRangeChange](https://github.com/Esri/calcite-components/blob/v1.0.0-beta.59/src/components/calcite-date-picker/interfaces.ts#L1)||   |   |

| **component** |   |   |   |   |   |
|-----|-----|-----|-----|-----|-----|
|calcite-date-picker-day|   |   |   |   |   |
|   | **property** | **attribute** | **type** | **default** |   |
|     |`active`|`active`|`boolean`|<code>false</code>|||
|     |`currentMonth`|`current-month`|`boolean`|<code>false</code>|||
|     |`day`|`day`|`number`|`--`|||
|     |`disabled`|`disabled`|`boolean`|<code>false</code>|||
|     |`endOfRange`|`end-of-range`|`boolean`|<code>false</code>|||
|     |`highlighted`|`highlighted`|`boolean`|<code>false</code>|||
|     |`range`|`range`|`boolean`|<code>false</code>|||
|     |`rangeHover`|`range-hover`|`boolean`|<code>false</code>|||
|     |`scale`|`scale`|`"l" \| "m" \| "s"`|`--`|||
|     |`selected`|`selected`|`boolean`|<code>false</code>|||
|     |`startOfRange`|`start-of-range`|`boolean`|<code>false</code>|||
|     |`value`|`--`|`Date`|`--`|||
|   |   |   |   |   |   |
|   | **event** | **detail** |   |   |   |
|   |`calciteDaySelect`|`any`||   |   |

| **component** |   |   |   |   |   |
|-----|-----|-----|-----|-----|-----|
|calcite-date-picker-month|   |   |   |   |   |
|   | **property** | **attribute** | **type** | **default** |   |
|     |`activeDate`|`--`|`Date`|<code>new Date()</code>|||
|     |`endDate`|`--`|`Date`|`--`|||
|     |`hoverRange`|`hover-range`|`any`|`--`|||
|     |`max`|`--`|`Date`|`--`|||
|     |`min`|`--`|`Date`|`--`|||
|     |`scale`|`scale`|`"l" \| "m" \| "s"`|`--`|||
|     |`selectedDate`|`--`|`Date`|`--`|||
|     |`startDate`|`--`|`Date`|`--`|||
|   |   |   |   |   |   |
|   | **event** | **detail** |   |   |   |
|   |`calciteDatePickerActiveDateChange`|`any`||   |   |
|   |`calciteDatePickerSelect`|`any`||   |   |

| **component** |   |   |   |   |   |
|-----|-----|-----|-----|-----|-----|
|calcite-date-picker-month-header|   |   |   |   |   |
|   | **property** | **attribute** | **type** | **default** |   |
|     |`activeDate`|`--`|`Date`|`--`|||
|     |`headingLevel`|`heading-level`|`1 \| 2 \| 3 \| 4 \| 5 \| 6`|`--`|||
|     |`intlNextMonth`|`intl-next-month`|`string`|`--`|||
|     |`intlPrevMonth`|`intl-prev-month`|`string`|`--`|||
|     |`locale`|`locale`|`string`|`--`|||
|     |`localeData`|`--`|`DateLocaleData`|`--`|||
|     |`max`|`--`|`Date`|`--`|||
|     |`min`|`--`|`Date`|`--`|||
|     |`scale`|`scale`|`"l" \| "m" \| "s"`|`--`|||
|     |`selectedDate`|`--`|`Date`|`--`|||
|   |   |   |   |   |   |
|   | **event** | **detail** |   |   |   |
|   |`calciteDatePickerSelect`|`Date`||   |   |

| **component** |   |   |   |   |   |
|-----|-----|-----|-----|-----|-----|
|calcite-dropdown|   |   |   |   |   |
|   | **property** | **attribute** | **type** | **default** |   |
|     |`active`|`active`|`boolean`|<code>false</code>|||
|     |`disableCloseOnSelect`|`disable-close-on-select`|`boolean`|<code>false</code>|||
|     |`disabled`|`disabled`|`boolean`|`--`|||
|     |`maxItems`|`max-items`|`number`|<code>0</code>|||
|     |`overlayPositioning`|`overlay-positioning`|`"absolute" \| "fixed"`|<code>"absolute"</code>|||
|     |`placement`|`placement`|`"bottom" \| "bottom-end" \| "bottom-leading" \| "bottom-start" \| "bottom-trailing" \| "top" \| "top-end" \| "top-leading" \| "top-start" \| "top-trailing"`|<code>"bottom-leading"</code>|||
|     |`scale`|`scale`|`"l" \| "m" \| "s"`|<code>"m"</code>|||
|     |`selectedItems`|`--`|`HTMLCalciteDropdownItemElement[]`|<code>[]</code>|||
|     |`type`|`type`|`"click" \| "hover"`|<code>"click"</code>|||
|     |`width`|`width`|`"l" \| "m" \| "s"`|<code>"m"</code>|||
|   |   |   |   |   |   |
|   | **event** | **detail** |   |   |   |
|   |`calciteDropdownClose`|`void`||   |   |
|   |`calciteDropdownOpen`|`void`||   |   |
|   |`calciteDropdownSelect`|`void`||   |   |
|   |   |   |   |   |   |
|   | **method** | **signature** | **returns** |   |   |
|   |`reposition`|`reposition() => Promise<void>`|`Promise<void>`||   |

| **component** |   |   |   |   |   |
|-----|-----|-----|-----|-----|-----|
|calcite-dropdown-group|   |   |   |   |   |
|   | **property** | **attribute** | **type** | **default** |   |
|     |`groupTitle`|`group-title`|`string`|`--`|||
|     |`scale`|`scale`|`"l" \| "m" \| "s"`|`--`|||
|     |`selectionMode`|`selection-mode`|`"multi" \| "none" \| "single"`|<code>"single"</code>|||

| **component** |   |   |   |   |   |
|-----|-----|-----|-----|-----|-----|
|calcite-dropdown-item|   |   |   |   |   |
|   | **property** | **attribute** | **type** | **default** |   |
|     |`active`|`active`|`boolean`|<code>false</code>|||
|     |`href`|`href`|`string`|`--`|||
|     |`iconEnd`|`icon-end`|`string`|`--`|||
|     |`iconFlipRtl`|`icon-flip-rtl`|`"both" \| "end" \| "start"`|`--`|||
|     |`iconStart`|`icon-start`|`string`|`--`|||
|     |`label`|`label`|`string`|`--`|||
|     |`rel`|`rel`|`string`|`--`|||
|     |`target`|`target`|`string`|`--`|||

| **component** |   |   |   |   |   |
|-----|-----|-----|-----|-----|-----|
|calcite-fab|   |   |   |   |   |
|   | **property** | **attribute** | **type** | **default** |   |
|     |`appearance`|`appearance`|`"outline" \| "solid"`|<code>"outline"</code>|||
|     |`color`|`color`|`"blue" \| "inverse" \| "neutral" \| "red"`|<code>"neutral"</code>|||
|     |`disabled`|`disabled`|`boolean`|<code>false</code>|||
|     |`icon`|`icon`|`string`|<code>"plus"</code>|||
|     |`label`|`label`|`string`|`--`|||
|     |`loading`|`loading`|`boolean`|<code>false</code>|||
|     |`scale`|`scale`|`"l" \| "m" \| "s"`|<code>"m"</code>|||
|     |`text`|`text`|`string`|`--`|||
|     |`textEnabled`|`text-enabled`|`boolean`|<code>false</code>|||

| **component** |   |   |   |   |   |
|-----|-----|-----|-----|-----|-----|
|calcite-filter|   |   |   |   |   |
|   | **property** | **attribute** | **type** | **default** |   |
|     |`data`|`--`|`object[]`|`--`|||
|     |`disabled`|`disabled`|`boolean`|<code>false</code>|||
|     |`intlClear`|`intl-clear`|`string`|`--`|||
|     |`intlLabel`|`intl-label`|`string`|`--`|||
|     |`placeholder`|`placeholder`|`string`|`--`|||
|   |   |   |   |   |   |
|   | **event** | **detail** |   |   |   |
|   |`calciteFilterChange`|`any`||   |   |
|   |   |   |   |   |   |
|   | **method** | **signature** | **returns** |   |   |
|   |`setFocus`|`setFocus() => Promise<void>`|`Promise<void>`||   |

| **component** |   |   |   |   |   |
|-----|-----|-----|-----|-----|-----|
|calcite-graph|   |   |   |   |   |
|   | **property** | **attribute** | **type** | **default** |   |
|     |`data`|`--`|`Point[]`|<code>[]</code>|||
|     |`height`|`height`|`number`|<code>100</code>|||
|     |`highlightMax`|`highlight-max`|`number`|`--`|||
|     |`highlightMin`|`highlight-min`|`number`|`--`|||
|     |`width`|`width`|`number`|<code>300</code>|||

| **component** |   |   |   |   |   |
|-----|-----|-----|-----|-----|-----|
|calcite-handle|   |   |   |   |   |
|   | **property** | **attribute** | **type** | **default** |   |
|     |`textTitle`|`text-title`|`string`|<code>"handle"</code>|||
|   |   |   |   |   |   |
|   | **event** | **detail** |   |   |   |
|   |`calciteHandleNudge`|`any`||   |   |
|   |   |   |   |   |   |
|   | **method** | **signature** | **returns** |   |   |
|   |`setFocus`|`setFocus() => Promise<void>`|`Promise<void>`||   |

| **component** |   |   |   |   |   |
|-----|-----|-----|-----|-----|-----|
|calcite-icon|   |   |   |   |   |
|   | **property** | **attribute** | **type** | **default** |   |
|     |`flipRtl`|`flip-rtl`|`boolean`|<code>false</code>|||
|     |`icon`|`icon`|`string`|<code>null</code>|||
|     |`scale`|`scale`|`"l" \| "m" \| "s"`|<code>"m"</code>|||
|     |`textLabel`|`text-label`|`string`|`--`|||

| **component** |   |   |   |   |   |
|-----|-----|-----|-----|-----|-----|
|calcite-inline-editable|   |   |   |   |   |
|   | **property** | **attribute** | **type** | **default** |   |
|     |`afterConfirm`|`--`|`() => Promise<void>`|`--`|||
|     |`controls`|`controls`|`boolean`|<code>false</code>|||
|     |`disabled`|`disabled`|`boolean`|<code>false</code>|||
|     |`editingEnabled`|`editing-enabled`|`boolean`|<code>false</code>|||
|     |`intlCancelEditing`|`intl-cancel-editing`|`string`|<code>"Cancel"</code>|||
|     |`intlConfirmChanges`|`intl-confirm-changes`|`string`|<code>"Save"</code>|||
|     |`intlEnableEditing`|`intl-enable-editing`|`string`|<code>"Click to edit"</code>|||
|     |`loading`|`loading`|`boolean`|<code>false</code>|||
|     |`scale`|`scale`|`"l" \| "m" \| "s"`|`--`|||

| **component** |   |   |   |   |   |
|-----|-----|-----|-----|-----|-----|
|calcite-input|   |   |   |   |   |
|   | **property** | **attribute** | **type** | **default** |   |
|     |`alignment`|`alignment`|`"end" \| "start"`|<code>"start"</code>|||
|     |`autofocus`|`autofocus`|`boolean`|<code>false</code>|||
|     |`clearable`|`clearable`|`boolean`|`--`|||
|     |`disabled`|`disabled`|`boolean`|`--`|||
|     |`groupSeparator`|`group-separator`|`boolean`|<code>false</code>|||
|     |`icon`|`icon`|`boolean \| string`|`--`|||
|     |`iconFlipRtl`|`icon-flip-rtl`|`boolean`|`--`|||
|     |`loading`|`loading`|`boolean`|<code>false</code>|||
|     |`locale`|`locale`|`string`|`document.documentElement.lang \|\| "en"`|||
|     |`max`|`max`|`number`|`--`|||
|     |`maxLength`|`max-length`|`number`|`--`|||
|     |`maxlength`|`maxlength`|`number`|`--`||<code>deprecated</code>|
|     |`min`|`min`|`number`|`--`|||
|     |`minLength`|`min-length`|`number`|`--`|||
|     |`name`|`name`|`string`|`--`|||
|     |`numberButtonType`|`number-button-type`|`"horizontal" \| "none" \| "vertical"`|<code>"vertical"</code>|||
|     |`placeholder`|`placeholder`|`string`|`--`|||
|     |`prefixText`|`prefix-text`|`string`|`--`|||
|     |`required`|`required`|`boolean`|<code>false</code>|||
|     |`scale`|`scale`|`"l" \| "m" \| "s"`|<code>"m"</code>|||
|     |`status`|`status`|`"idle" \| "invalid" \| "valid"`|<code>"idle"</code>|||
|     |`step`|`step`|`"any" \| `|`--`|||
|     |`suffixText`|`suffix-text`|`string`|`--`|||
|     |`type`|`type`|`"color" \| "date" \| "datetime-local" \| "email" \| "file" \| "image" \| "month" \| "number" \| "password" \| "search" \| "tel" \| "text" \| "textarea" \| "time" \| "url" \| "week"`|<code>"text"</code>|||
|     |`value`|`value`|`string`|`--`|||
|   |   |   |   |   |   |
|   | **event** | **detail** |   |   |   |
|   |`calciteInputInput`|`any`||   |   |
|   |   |   |   |   |   |
|   | **method** | **signature** | **returns** |   |   |
|   |`setFocus`|`setFocus() => Promise<void>`|`Promise<void>`||   |

| **component** |   |   |   |   |   |
|-----|-----|-----|-----|-----|-----|
|calcite-input-date-picker|   |   |   |   |   |
|   | **property** | **attribute** | **type** | **default** |   |
|     |`active`|`active`|`boolean`|<code>false</code>|||
|     |`end`|`end`|`string`|`--`|||
|     |`endAsDate`|`--`|`Date`|`--`|||
|     |`headingLevel`|`heading-level`|`1 \| 2 \| 3 \| 4 \| 5 \| 6`|`--`|||
|     |`intlNextMonth`|`intl-next-month`|`string`|<code>"next month"</code>|||
|     |`intlPrevMonth`|`intl-prev-month`|`string`|<code>"previous month"</code>|||
|     |`layout`|`layout`|`"horizontal" \| "vertical"`|<code>"horizontal"</code>|||
|     |`locale`|`locale`|`string`|`document.documentElement.lang \|\| "en"`|||
|     |`max`|`max`|`string`|`--`|||
|     |`maxAsDate`|`--`|`Date`|`--`|||
|     |`min`|`min`|`string`|`--`|||
|     |`minAsDate`|`--`|`Date`|`--`|||
|     |`overlayPositioning`|`overlay-positioning`|`"absolute" \| "fixed"`|<code>"absolute"</code>|||
|     |`proximitySelectionDisabled`|`proximity-selection-disabled`|`boolean`|<code>false</code>|||
|     |`range`|`range`|`boolean`|<code>false</code>|||
|     |`scale`|`scale`|`"l" \| "m" \| "s"`|<code>"m"</code>|||
|     |`start`|`start`|`string`|`--`|||
|     |`startAsDate`|`--`|`Date`|`--`|||
|     |`value`|`value`|`string`|`--`|||
|     |`valueAsDate`|`--`|`Date`|`--`|||
|   |   |   |   |   |   |
|   | **event** | **detail** |   |   |   |
|   |`calciteDatePickerChange`| [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)||   |   |
|   |`calciteDatePickerRangeChange`| [DateRangeChange](https://github.com/Esri/calcite-components/blob/v1.0.0-beta.59/src/components/calcite-date-picker/interfaces.ts#L1)||   |   |
|   |   |   |   |   |   |
|   | **method** | **signature** | **returns** |   |   |
|   |`reposition`|`reposition() => Promise<void>`|`Promise<void>`||   |

| **component** |   |   |   |   |   |
|-----|-----|-----|-----|-----|-----|
|calcite-input-message|   |   |   |   |   |
|   | **property** | **attribute** | **type** | **default** |   |
|     |`active`|`active`|`boolean`|<code>false</code>|||
|     |`icon`|`icon`|`boolean \| string`|`--`|||
|     |`scale`|`scale`|`"l" \| "m" \| "s"`|<code>"m"</code>|||
|     |`status`|`status`|`"idle" \| "invalid" \| "valid"`|<code>"idle"</code>|||
|     |`type`|`type`|`"default" \| "floating"`|<code>"default"</code>|||

| **component** |   |   |   |   |   |
|-----|-----|-----|-----|-----|-----|
|calcite-input-time-picker|   |   |   |   |   |
|   | **property** | **attribute** | **type** | **default** |   |
|     |`active`|`active`|`boolean`|<code>false</code>|||
|     |`disabled`|`disabled`|`boolean`|<code>false</code>|||
|     |`hourDisplayFormat`|`hour-display-format`|`"12" \| "24"`|<code>"12"</code>|||
|     |`intlHour`|`intl-hour`|`string`|`--`|||
|     |`intlHourDown`|`intl-hour-down`|`string`|`--`|||
|     |`intlHourUp`|`intl-hour-up`|`string`|`--`|||
|     |`intlMeridiem`|`intl-meridiem`|`string`|`--`|||
|     |`intlMeridiemDown`|`intl-meridiem-down`|`string`|`--`|||
|     |`intlMeridiemUp`|`intl-meridiem-up`|`string`|`--`|||
|     |`intlMinute`|`intl-minute`|`string`|`--`|||
|     |`intlMinuteDown`|`intl-minute-down`|`string`|`--`|||
|     |`intlMinuteUp`|`intl-minute-up`|`string`|`--`|||
|     |`intlSecond`|`intl-second`|`string`|`--`|||
|     |`intlSecondDown`|`intl-second-down`|`string`|`--`|||
|     |`intlSecondUp`|`intl-second-up`|`string`|`--`|||
|     |`name`|`name`|`string`|`--`|||
|     |`scale`|`scale`|`"l" \| "m" \| "s"`|<code>"m"</code>|||
|     |`step`|`step`|`number`|<code>60</code>|||
|     |`value`|`value`|`string`|<code>null</code>|||
|   |   |   |   |   |   |
|   | **event** | **detail** |   |   |   |
|   |`calciteInputTimePickerChange`|`string`||   |   |
|   |   |   |   |   |   |
|   | **method** | **signature** | **returns** |   |   |
|   |`setFocus`|`setFocus() => Promise<void>`|`Promise<void>`||   |

| **component** |   |   |   |   |   |
|-----|-----|-----|-----|-----|-----|
|calcite-label|   |   |   |   |   |
|   | **property** | **attribute** | **type** | **default** |   |
|     |`alignment`|`alignment`|`"center" \| "end" \| "start"`|<code>"start"</code>|||
|     |`disableSpacing`|`disable-spacing`|`boolean`|`--`|||
|     |`disabled`|`disabled`|`boolean`|`--`|||
|     |`for`|`for`|`string`|`--`|||
|     |`layout`|`layout`|`"default" \| "inline" \| "inline-space-between"`|<code>"default"</code>|||
|     |`scale`|`scale`|`"l" \| "m" \| "s"`|<code>"m"</code>|||
|     |`status`|`status`|`"idle" \| "invalid" \| "valid"`|<code>"idle"</code>|||

| **component** |   |   |   |   |   |
|-----|-----|-----|-----|-----|-----|
|calcite-link|   |   |   |   |   |
|   | **property** | **attribute** | **type** | **default** |   |
|     |`disabled`|`disabled`|`boolean`|`--`|||
|     |`href`|`href`|`string`|`--`|||
|     |`iconEnd`|`icon-end`|`string`|`--`|||
|     |`iconFlipRtl`|`icon-flip-rtl`|`"both" \| "end" \| "start"`|`--`|||
|     |`iconStart`|`icon-start`|`string`|`--`|||

| **component** |   |   |   |   |   |
|-----|-----|-----|-----|-----|-----|
|calcite-list-item|   |   |   |   |   |
|   | **property** | **attribute** | **type** | **default** |   |
|     |`description`|`description`|`string`|`--`|||
|     |`disabled`|`disabled`|`boolean`|<code>false</code>|||
|     |`label`|`label`|`string`|`--`|||
|     |`nonInteractive`|`non-interactive`|`boolean`|<code>false</code>|||

| **component** |   |   |   |   |   |
|-----|-----|-----|-----|-----|-----|
|calcite-loader|   |   |   |   |   |
|   | **property** | **attribute** | **type** | **default** |   |
|     |`active`|`active`|`boolean`|<code>false</code>|||
|     |`inline`|`inline`|`boolean`|<code>false</code>|||
|     |`label`|`label`|`string`|`--`|<code>required</code>||
|     |`noPadding`|`no-padding`|`boolean`|`--`|||
|     |`scale`|`scale`|`"l" \| "m" \| "s"`|<code>"m"</code>|||
|     |`text`|`text`|`string`|<code>""</code>|||
|     |`type`|`type`|`"determinate" \| "indeterminate"`|`--`|||
|     |`value`|`value`|`number`|<code>0</code>|||

| **component** |   |   |   |   |   |
|-----|-----|-----|-----|-----|-----|
|calcite-modal|   |   |   |   |   |
|   | **property** | **attribute** | **type** | **default** |   |
|     |`active`|`active`|`boolean`|`--`|||
|     |`backgroundColor`|`background-color`|`"grey" \| "white"`|<code>"white"</code>|||
|     |`beforeClose`|`--`|`(el: HTMLElement) => Promise<void>`|<code>() => Promise.resolve()</code>|||
|     |`color`|`color`|`"blue" \| "red"`|`--`|||
|     |`disableCloseButton`|`disable-close-button`|`boolean`|`--`|||
|     |`disableEscape`|`disable-escape`|`boolean`|`--`|||
|     |`disableOutsideClose`|`disable-outside-close`|`boolean`|`--`|||
|     |`docked`|`docked`|`boolean`|`--`|||
|     |`firstFocus`|`--`|`HTMLElement`|`--`|||
|     |`fullscreen`|`fullscreen`|`boolean`|`--`|||
|     |`intlClose`|`intl-close`|`string`|<code>"Close"</code>|||
|     |`noPadding`|`no-padding`|`boolean`|`--`|||
|     |`scale`|`scale`|`"l" \| "m" \| "s"`|<code>"m"</code>|||
|     |`width`|`width`|`"l" \| "m" \| "s" \| `|<code>"m"</code>|||
|   |   |   |   |   |   |
|   | **event** | **detail** |   |   |   |
|   |`calciteModalClose`|`any`||   |   |
|   |`calciteModalOpen`|`any`||   |   |
|   |   |   |   |   |   |
|   | **method** | **signature** | **returns** |   |   |
|   |`focusElement`|`focusElement(el?: HTMLElement) => Promise<void>`|`Promise<void>`|<code>deprecated</code>|   |
|   |`scrollContent`|`scrollContent(top?: number, left?: number) => Promise<void>`|`Promise<void>`||   |
|   |`setFocus`|`setFocus(focusId?: "close-button") => Promise<void>`|`Promise<void>`||   |

| **component** |   |   |   |   |   |
|-----|-----|-----|-----|-----|-----|
|calcite-notice|   |   |   |   |   |
|   | **property** | **attribute** | **type** | **default** |   |
|     |`active`|`active`|`boolean`|<code>false</code>|||
|     |`color`|`color`|`"blue" \| "green" \| "red" \| "yellow"`|<code>"blue"</code>|||
|     |`dismissible`|`dismissible`|`boolean`|<code>false</code>|||
|     |`icon`|`icon`|`boolean \| string`|`--`|||
|     |`intlClose`|`intl-close`|`string`|<code>"Close"</code>|||
|     |`scale`|`scale`|`"l" \| "m" \| "s"`|<code>"m"</code>|||
|     |`width`|`width`|`"auto" \| "full" \| "half"`|<code>"auto"</code>|||
|   |   |   |   |   |   |
|   | **event** | **detail** |   |   |   |
|   |`calciteNoticeClose`|`any`||   |   |
|   |`calciteNoticeOpen`|`any`||   |   |
|   |   |   |   |   |   |
|   | **method** | **signature** | **returns** |   |   |
|   |`setFocus`|`setFocus() => Promise<void>`|`Promise<void>`||   |

| **component** |   |   |   |   |   |
|-----|-----|-----|-----|-----|-----|
|calcite-option|   |   |   |   |   |
|   | **property** | **attribute** | **type** | **default** |   |
|     |`disabled`|`disabled`|`boolean`|<code>false</code>|||
|     |`label`|`label`|`string`|`--`|||
|     |`selected`|`selected`|`boolean`|`--`|||
|     |`value`|`value`|`any`|`--`|||

| **component** |   |   |   |   |   |
|-----|-----|-----|-----|-----|-----|
|calcite-option-group|   |   |   |   |   |
|   | **property** | **attribute** | **type** | **default** |   |
|     |`disabled`|`disabled`|`boolean`|<code>false</code>|||
|     |`label`|`label`|`string`|`--`|<code>required</code>||

| **component** |   |   |   |   |   |
|-----|-----|-----|-----|-----|-----|
|calcite-pagination|   |   |   |   |   |
|   | **property** | **attribute** | **type** | **default** |   |
|     |`num`|`num`|`number`|<code>20</code>|||
|     |`scale`|`scale`|`"l" \| "m" \| "s"`|<code>"m"</code>|||
|     |`start`|`start`|`number`|<code>1</code>|||
|     |`textLabelNext`|`text-label-next`|`string`|<code>"next"</code>|||
|     |`textLabelPrevious`|`text-label-previous`|`string`|<code>"previous"</code>|||
|     |`total`|`total`|`number`|<code>0</code>|||
|   |   |   |   |   |   |
|   | **event** | **detail** |   |   |   |
|   |`calcitePaginationChange`| [CalcitePaginationDetail](https://github.com/Esri/calcite-components/blob/v1.0.0-beta.59/src/components/calcite-pagination/calcite-pagination.tsx#L18)||   |   |
|   |`calcitePaginationUpdate`|`CalcitePaginationDetail`|<code>deprecated</code>|   |   |
|   |   |   |   |   |   |
|   | **method** | **signature** | **returns** |   |   |
|   |`nextPage`|`nextPage() => Promise<void>`|`Promise<void>`||   |
|   |`previousPage`|`previousPage() => Promise<void>`|`Promise<void>`||   |

| **component** |   |   |   |   |   |
|-----|-----|-----|-----|-----|-----|
|calcite-panel|   |   |   |   |   |
|   | **property** | **attribute** | **type** | **default** |   |
|     |`beforeBack`|`--`|`() => Promise<void>`|`--`|||
|     |`disabled`|`disabled`|`boolean`|<code>false</code>|||
|     |`dismissed`|`dismissed`|`boolean`|<code>false</code>|||
|     |`dismissible`|`dismissible`|`boolean`|<code>false</code>|||
|     |`heading`|`heading`|`string`|`--`|||
|     |`headingLevel`|`heading-level`|`1 \| 2 \| 3 \| 4 \| 5 \| 6`|`--`|||
|     |`heightScale`|`height-scale`|`"l" \| "m" \| "s"`|`--`|||
|     |`intlBack`|`intl-back`|`string`|`--`|||
|     |`intlClose`|`intl-close`|`string`|`--`|||
|     |`intlOptions`|`intl-options`|`string`|`--`|||
|     |`loading`|`loading`|`boolean`|<code>false</code>|||
|     |`menuOpen`|`menu-open`|`boolean`|<code>false</code>|||
|     |`showBackButton`|`show-back-button`|`boolean`|<code>false</code>|||
|     |`summary`|`summary`|`string`|`--`|||
|     |`widthScale`|`width-scale`|`"l" \| "m" \| "s"`|`--`|||
|   |   |   |   |   |   |
|   | **event** | **detail** |   |   |   |
|   |`calcitePanelBackClick`|`any`||   |   |
|   |`calcitePanelDismissedChange`|`any`||   |   |
|   |`calcitePanelScroll`|`any`||   |   |
|   |   |   |   |   |   |
|   | **method** | **signature** | **returns** |   |   |
|   |`setFocus`|`setFocus(focusId?: "dismiss-button" \| "back-button") => Promise<void>`|`Promise<void>`||   |

| **component** |   |   |   |   |   |
|-----|-----|-----|-----|-----|-----|
|calcite-pick-list|   |   |   |   |   |
|   | **property** | **attribute** | **type** | **default** |   |
|     |`disabled`|`disabled`|`boolean`|<code>false</code>|||
|     |`filterEnabled`|`filter-enabled`|`boolean`|<code>false</code>|||
|     |`filterPlaceholder`|`filter-placeholder`|`string`|`--`|||
|     |`headingLevel`|`heading-level`|`1 \| 2 \| 3 \| 4 \| 5 \| 6`|`--`|||
|     |`loading`|`loading`|`boolean`|<code>false</code>|||
|     |`multiple`|`multiple`|`boolean`|<code>false</code>|||
|     |`selectionFollowsFocus`|`selection-follows-focus`|`boolean`|<code>false</code>|||
|   |   |   |   |   |   |
|   | **event** | **detail** |   |   |   |
|   |`calciteListChange`|`any`||   |   |
|   |   |   |   |   |   |
|   | **method** | **signature** | **returns** |   |   |
|   |`getSelectedItems`|`getSelectedItems() => Promise<Map<string, HTMLCalcitePickListItemElement>>`|`Promise<Map<string, HTMLCalcitePickListItemElement>>`||   |
|   |`setFocus`|`setFocus(focusId?: ListFocusId) => Promise<void>`|`Promise<void>`||   |

| **component** |   |   |   |   |   |
|-----|-----|-----|-----|-----|-----|
|calcite-pick-list-group|   |   |   |   |   |
|   | **property** | **attribute** | **type** | **default** |   |
|     |`groupTitle`|`group-title`|`string`|`--`|||
|     |`headingLevel`|`heading-level`|`1 \| 2 \| 3 \| 4 \| 5 \| 6`|`--`|||

| **component** |   |   |   |   |   |
|-----|-----|-----|-----|-----|-----|
|calcite-pick-list-item|   |   |   |   |   |
|   | **property** | **attribute** | **type** | **default** |   |
|     |`description`|`description`|`string`|`--`|||
|     |`disableDeselect`|`disable-deselect`|`boolean`|<code>false</code>|||
|     |`disabled`|`disabled`|`boolean`|<code>false</code>|||
|     |`icon`|`icon`|`"circle" \| "grip" \| "square"`|<code>null</code>|||
|     |`intlRemove`|`intl-remove`|`string`|<code>"remove"</code>|||
|     |`label`|`label`|`string`|`--`|||
|     |`metadata`|`--`|`{ [x: string]: unknown; }`|`--`|||
|     |`removable`|`removable`|`boolean`|<code>false</code>|||
|     |`selected`|`selected`|`boolean`|<code>false</code>|||
|     |`value`|`value`|`any`|`--`|<code>required</code>||
|   |   |   |   |   |   |
|   | **event** | **detail** |   |   |   |
|   |`calciteListItemChange`|`{ item: HTMLCalcitePickListItemElement; value: any; selected: boolean; shiftPressed: boolean; }`||   |   |
|   |`calciteListItemRemove`|`void`||   |   |
|   |   |   |   |   |   |
|   | **method** | **signature** | **returns** |   |   |
|   |`setFocus`|`setFocus() => Promise<void>`|`Promise<void>`||   |
|   |`toggleSelected`|`toggleSelected(coerce?: boolean) => Promise<void>`|`Promise<void>`||   |

| **component** |   |   |   |   |   |
|-----|-----|-----|-----|-----|-----|
|calcite-popover|   |   |   |   |   |
|   | **property** | **attribute** | **type** | **default** |   |
|     |`closeButton`|`close-button`|`boolean`|<code>false</code>||<code>deprecated</code>|
|     |`disableFlip`|`disable-flip`|`boolean`|<code>false</code>|||
|     |`disablePointer`|`disable-pointer`|`boolean`|<code>false</code>|||
|     |`dismissible`|`dismissible`|`boolean`|<code>false</code>|||
|     |`flipPlacements`|`--`|`Placement[]`|`--`|||
|     |`heading`|`heading`|`string`|`--`|||
|     |`headingLevel`|`heading-level`|`1 \| 2 \| 3 \| 4 \| 5 \| 6`|`--`|||
|     |`intlClose`|`intl-close`|`string`|<code>"Close"</code>|||
|     |`label`|`label`|`string`|`--`|<code>required</code>||
|     |`offsetDistance`|`offset-distance`|`number`|<code>defaultOffsetDistance</code>|||
|     |`offsetSkidding`|`offset-skidding`|`number`|<code>0</code>|||
|     |`open`|`open`|`boolean`|<code>false</code>|||
|     |`overlayPositioning`|`overlay-positioning`|`"absolute" \| "fixed"`|<code>"absolute"</code>|||
|     |`placement`|`placement`|`Placement \| PlacementRtl \| VariationRtl`|<code>"auto"</code>|||
|     |`referenceElement`|`reference-element`|`HTMLElement \| string`|`--`|<code>required</code>||
|   |   |   |   |   |   |
|   | **event** | **detail** |   |   |   |
|   |`calcitePopoverClose`|`any`||   |   |
|   |`calcitePopoverOpen`|`any`||   |   |
|   |   |   |   |   |   |
|   | **method** | **signature** | **returns** |   |   |
|   |`reposition`|`reposition() => Promise<void>`|`Promise<void>`||   |
|   |`setFocus`|`setFocus(focusId?: "close-button") => Promise<void>`|`Promise<void>`||   |
|   |`toggle`|`toggle(value?: boolean) => Promise<void>`|`Promise<void>`||   |

| **component** |   |   |   |   |   |
|-----|-----|-----|-----|-----|-----|
|calcite-popover-manager|   |   |   |   |   |
|   | **property** | **attribute** | **type** | **default** |   |
|     |`autoClose`|`auto-close`|`boolean`|`--`|||
|     |`selector`|`selector`|`string`|<code>`[${POPOVER_REFERENCE}]`</code>|||

| **component** |   |   |   |   |   |
|-----|-----|-----|-----|-----|-----|
|calcite-progress|   |   |   |   |   |
|   | **property** | **attribute** | **type** | **default** |   |
|     |`reversed`|`reversed`|`boolean`|<code>false</code>|||
|     |`text`|`text`|`string`|<code>null</code>|||
|     |`type`|`type`|`"determinate" \| "indeterminate"`|<code>"determinate"</code>|||
|     |`value`|`value`|`number`|<code>0</code>|||

| **component** |   |   |   |   |   |
|-----|-----|-----|-----|-----|-----|
|calcite-radio|   |   |   |   |   |
|   | **property** | **attribute** | **type** | **default** |   |
|     |`checked`|`checked`|`boolean`|<code>false</code>|||
|     |`disabled`|`disabled`|`boolean`|<code>false</code>|||
|     |`hidden`|`hidden`|`boolean`|<code>false</code>|||
|     |`scale`|`scale`|`"l" \| "m" \| "s"`|<code>"m"</code>|||

| **component** |   |   |   |   |   |
|-----|-----|-----|-----|-----|-----|
|calcite-radio-button|   |   |   |   |   |
|   | **property** | **attribute** | **type** | **default** |   |
|     |`checked`|`checked`|`boolean`|<code>false</code>|||
|     |`disabled`|`disabled`|`boolean`|<code>false</code>|||
|     |`guid`|`guid`|`string`|`--`|||
|     |`hidden`|`hidden`|`boolean`|<code>false</code>|||
|     |`name`|`name`|`string`|`--`|||
|     |`required`|`required`|`boolean`|<code>false</code>|||
|     |`scale`|`scale`|`"l" \| "m" \| "s"`|<code>"m"</code>|||
|     |`value`|`value`|`any`|`--`|<code>required</code>||
|   |   |   |   |   |   |
|   | **event** | **detail** |   |   |   |
|   |`calciteRadioButtonChange`|`any`||   |   |
|   |   |   |   |   |   |
|   | **method** | **signature** | **returns** |   |   |
|   |`setFocus`|`setFocus() => Promise<void>`|`Promise<void>`||   |

| **component** |   |   |   |   |   |
|-----|-----|-----|-----|-----|-----|
|calcite-radio-button-group|   |   |   |   |   |
|   | **property** | **attribute** | **type** | **default** |   |
|     |`disabled`|`disabled`|`boolean`|<code>false</code>|||
|     |`hidden`|`hidden`|`boolean`|<code>false</code>|||
|     |`layout`|`layout`|`"grid" \| "horizontal" \| "vertical"`|<code>"horizontal"</code>|||
|     |`name`|`name`|`string`|`--`|<code>required</code>||
|     |`required`|`required`|`boolean`|<code>false</code>|||
|     |`scale`|`scale`|`"l" \| "m" \| "s"`|<code>"m"</code>|||
|   |   |   |   |   |   |
|   | **event** | **detail** |   |   |   |
|   |`calciteRadioButtonGroupChange`|`any`||   |   |

| **component** |   |   |   |   |   |
|-----|-----|-----|-----|-----|-----|
|calcite-radio-group|   |   |   |   |   |
|   | **property** | **attribute** | **type** | **default** |   |
|     |`appearance`|`appearance`|`"outline" \| "solid"`|<code>"solid"</code>|||
|     |`disabled`|`disabled`|`boolean`|`--`|||
|     |`layout`|`layout`|`"grid" \| "horizontal" \| "vertical"`|<code>"horizontal"</code>|||
|     |`name`|`name`|`string`|`--`|||
|     |`scale`|`scale`|`"l" \| "m" \| "s"`|<code>"m"</code>|||
|     |`selectedItem`|`--`|`HTMLCalciteRadioGroupItemElement`|`--`|||
|     |`width`|`width`|`"auto" \| "full"`|<code>"auto"</code>|||
|   |   |   |   |   |   |
|   | **event** | **detail** |   |   |   |
|   |`calciteRadioGroupChange`|`string`||   |   |
|   |   |   |   |   |   |
|   | **method** | **signature** | **returns** |   |   |
|   |`setFocus`|`setFocus() => Promise<void>`|`Promise<void>`||   |

| **component** |   |   |   |   |   |
|-----|-----|-----|-----|-----|-----|
|calcite-radio-group-item|   |   |   |   |   |
|   | **property** | **attribute** | **type** | **default** |   |
|     |`checked`|`checked`|`boolean`|<code>false</code>|||
|     |`icon`|`icon`|`string`|`--`|||
|     |`iconFlipRtl`|`icon-flip-rtl`|`boolean`|`--`|||
|     |`iconPosition`|`icon-position`|`"end" \| "start"`|<code>"start"</code>|||
|     |`value`|`value`|`any`|`--`|||

| **component** |   |   |   |   |   |
|-----|-----|-----|-----|-----|-----|
|calcite-rating|   |   |   |   |   |
|   | **property** | **attribute** | **type** | **default** |   |
|     |`average`|`average`|`number`|`--`|||
|     |`count`|`count`|`number`|`--`|||
|     |`disabled`|`disabled`|`boolean`|<code>false</code>|||
|     |`intlRating`|`intl-rating`|`string`|<code>"Rating"</code>|||
|     |`intlStars`|`intl-stars`|`string`|<code>"stars: ${num}"</code>|||
|     |`readOnly`|`read-only`|`boolean`|<code>false</code>|||
|     |`scale`|`scale`|`"l" \| "m" \| "s"`|<code>"m"</code>|||
|     |`showChip`|`show-chip`|`boolean`|<code>false</code>|||
|     |`value`|`value`|`number`|<code>0</code>|||
|   |   |   |   |   |   |
|   | **event** | **detail** |   |   |   |
|   |`calciteRatingChange`|`{ value: number; }`||   |   |
|   |   |   |   |   |   |
|   | **method** | **signature** | **returns** |   |   |
|   |`setFocus`|`setFocus() => Promise<void>`|`Promise<void>`||   |

| **component** |   |   |   |   |   |
|-----|-----|-----|-----|-----|-----|
|calcite-scrim|   |   |   |   |   |
|   | **property** | **attribute** | **type** | **default** |   |
|     |`intlLoading`|`intl-loading`|`string`|<code>"Loading"</code>|||
|     |`loading`|`loading`|`boolean`|<code>false</code>|||

| **component** |   |   |   |   |   |
|-----|-----|-----|-----|-----|-----|
|calcite-select|   |   |   |   |   |
|   | **property** | **attribute** | **type** | **default** |   |
|     |`disabled`|`disabled`|`boolean`|<code>false</code>|||
|     |`label`|`label`|`string`|`--`|<code>required</code>||
|     |`scale`|`scale`|`"l" \| "m" \| "s"`|<code>"m"</code>|||
|     |`selectedOption`|`--`|`HTMLCalciteOptionElement`|`--`|||
|     |`width`|`width`|`"auto" \| "full" \| "half"`|<code>"auto"</code>|||
|   |   |   |   |   |   |
|   | **event** | **detail** |   |   |   |
|   |`calciteSelectChange`|`void`||   |   |
|   |   |   |   |   |   |
|   | **method** | **signature** | **returns** |   |   |
|   |`setFocus`|`setFocus() => Promise<void>`|`Promise<void>`||   |

| **component** |   |   |   |   |   |
|-----|-----|-----|-----|-----|-----|
|calcite-shell|   |   |   |   |   |
|   | **property** | **attribute** | **type** | **default** |   |
|     |`contentBehind`|`content-behind`|`boolean`|`--`|||

| **component** |   |   |   |   |   |
|-----|-----|-----|-----|-----|-----|
|calcite-shell-center-row|   |   |   |   |   |
|   | **property** | **attribute** | **type** | **default** |   |
|     |`detached`|`detached`|`boolean`|<code>false</code>|||
|     |`heightScale`|`height-scale`|`"l" \| "m" \| "s"`|<code>"s"</code>|||
|     |`position`|`position`|`"end" \| "start"`|<code>"end"</code>|||

| **component** |   |   |   |   |   |
|-----|-----|-----|-----|-----|-----|
|calcite-shell-panel|   |   |   |   |   |
|   | **property** | **attribute** | **type** | **default** |   |
|     |`collapsed`|`collapsed`|`boolean`|<code>false</code>|||
|     |`detached`|`detached`|`boolean`|<code>false</code>|||
|     |`detachedHeightScale`|`detached-height-scale`|`"l" \| "m" \| "s"`|<code>"l"</code>|||
|     |`position`|`position`|`"end" \| "start"`|`--`|||
|     |`widthScale`|`width-scale`|`"l" \| "m" \| "s"`|<code>"m"</code>|||
|   |   |   |   |   |   |
|   | **event** | **detail** |   |   |   |
|   |`calciteShellPanelToggle`|`any`||   |   |

| **component** |   |   |   |   |   |
|-----|-----|-----|-----|-----|-----|
|calcite-slider|   |   |   |   |   |
|   | **property** | **attribute** | **type** | **default** |   |
|     |`disabled`|`disabled`|`boolean`|<code>false</code>|||
|     |`hasHistogram`|`has-histogram`|`boolean`|<code>false</code>|||
|     |`histogram`|`--`|`Point[]`|`--`|||
|     |`labelHandles`|`label-handles`|`boolean`|`--`|||
|     |`labelTicks`|`label-ticks`|`boolean`|`--`|||
|     |`max`|`max`|`number`|<code>100</code>|||
|     |`maxLabel`|`max-label`|`string`|`--`|||
|     |`maxValue`|`max-value`|`number`|`--`|||
|     |`min`|`min`|`number`|<code>0</code>|||
|     |`minLabel`|`min-label`|`string`|`--`|||
|     |`minValue`|`min-value`|`number`|`--`|||
|     |`pageStep`|`page-step`|`number`|`--`|||
|     |`precise`|`precise`|`boolean`|`--`|||
|     |`snap`|`snap`|`boolean`|<code>false</code>|||
|     |`step`|`step`|`number`|<code>1</code>|||
|     |`ticks`|`ticks`|`number`|`--`|||
|     |`value`|`value`|`number`|<code>null</code>|||
|   |   |   |   |   |   |
|   | **event** | **detail** |   |   |   |
|   |`calciteSliderChange`|`any`||   |   |
|   |`calciteSliderUpdate`|`any`|<code>deprecated</code>|   |   |
|   |   |   |   |   |   |
|   | **method** | **signature** | **returns** |   |   |
|   |`setFocus`|`setFocus() => Promise<void>`|`Promise<void>`||   |

| **component** |   |   |   |   |   |
|-----|-----|-----|-----|-----|-----|
|calcite-sortable-list|   |   |   |   |   |
|   | **property** | **attribute** | **type** | **default** |   |
|     |`disabled`|`disabled`|`boolean`|<code>false</code>|||
|     |`dragSelector`|`drag-selector`|`string`|`--`|||
|     |`group`|`group`|`string`|`--`|||
|     |`handleSelector`|`handle-selector`|`string`|<code>"calcite-handle"</code>|||
|     |`loading`|`loading`|`boolean`|<code>false</code>|||
|   |   |   |   |   |   |
|   | **event** | **detail** |   |   |   |
|   |`calciteListOrderChange`|`any`||   |   |

| **component** |   |   |   |   |   |
|-----|-----|-----|-----|-----|-----|
|calcite-split-button|   |   |   |   |   |
|   | **property** | **attribute** | **type** | **default** |   |
|     |`appearance`|`appearance`|`"clear" \| "outline" \| "solid" \| "transparent"`|<code>"solid"</code>|||
|     |`color`|`color`|`"blue" \| "inverse" \| "neutral" \| "red"`|<code>"blue"</code>|||
|     |`disabled`|`disabled`|`boolean`|`--`|||
|     |`dropdownIconType`|`dropdown-icon-type`|`"caret" \| "chevron" \| "ellipsis" \| "overflow"`|<code>"chevron"</code>|||
|     |`dropdownLabel`|`dropdown-label`|`string`|`--`|||
|     |`loading`|`loading`|`boolean`|<code>false</code>|||
|     |`primaryIconEnd`|`primary-icon-end`|`string`|`--`|||
|     |`primaryIconFlipRtl`|`primary-icon-flip-rtl`|`"both" \| "end" \| "start"`|`--`|||
|     |`primaryIconStart`|`primary-icon-start`|`string`|`--`|||
|     |`primaryLabel`|`primary-label`|`string`|`--`|||
|     |`primaryText`|`primary-text`|`string`|`--`|||
|     |`scale`|`scale`|`"l" \| "m" \| "s"`|<code>"m"</code>|||
|     |`width`|`width`|`"auto" \| "full" \| "half"`|<code>"auto"</code>|||
|   |   |   |   |   |   |
|   | **event** | **detail** |   |   |   |
|   |`calciteSplitButtonPrimaryClick`|`any`||   |   |
|   |`calciteSplitButtonSecondaryClick`|`any`||   |   |

| **component** |   |   |   |   |   |
|-----|-----|-----|-----|-----|-----|
|calcite-stepper|   |   |   |   |   |
|   | **property** | **attribute** | **type** | **default** |   |
|     |`icon`|`icon`|`boolean`|<code>false</code>|||
|     |`layout`|`layout`|`"grid" \| "horizontal" \| "vertical"`|<code>"horizontal"</code>|||
|     |`numbered`|`numbered`|`boolean`|<code>false</code>|||
|     |`scale`|`scale`|`"l" \| "m" \| "s"`|<code>"m"</code>|||

| **component** |   |   |   |   |   |
|-----|-----|-----|-----|-----|-----|
|calcite-stepper-item|   |   |   |   |   |
|   | **property** | **attribute** | **type** | **default** |   |
|     |`active`|`active`|`boolean`|<code>false</code>|||
|     |`complete`|`complete`|`boolean`|<code>false</code>|||
|     |`disabled`|`disabled`|`boolean`|<code>false</code>|||
|     |`error`|`error`|`boolean`|<code>false</code>|||
|     |`itemSubtitle`|`item-subtitle`|`string`|`--`|||
|     |`itemTitle`|`item-title`|`string`|`--`|||

| **component** |   |   |   |   |   |
|-----|-----|-----|-----|-----|-----|
|calcite-switch|   |   |   |   |   |
|   | **property** | **attribute** | **type** | **default** |   |
|     |`disabled`|`disabled`|`boolean`|<code>false</code>|||
|     |`name`|`name`|`string`|`--`|||
|     |`scale`|`scale`|`"l" \| "m" \| "s"`|<code>"m"</code>|||
|     |`switched`|`switched`|`boolean`|<code>false</code>|||
|     |`value`|`value`|`any`|`--`|||
|   |   |   |   |   |   |
|   | **event** | **detail** |   |   |   |
|   |`calciteSwitchChange`|`any`||   |   |
|   |   |   |   |   |   |
|   | **method** | **signature** | **returns** |   |   |
|   |`setFocus`|`setFocus() => Promise<void>`|`Promise<void>`||   |

| **component** |   |   |   |   |   |
|-----|-----|-----|-----|-----|-----|
|calcite-tab|   |   |   |   |   |
|   | **property** | **attribute** | **type** | **default** |   |
|     |`active`|`active`|`boolean`|<code>false</code>|||
|     |`tab`|`tab`|`string`|`--`|||

| **component** |   |   |   |   |   |
|-----|-----|-----|-----|-----|-----|
|calcite-tab-nav|   |   |   |   |   |
|   | **property** | **attribute** | **type** | **default** |   |
|     |`storageId`|`storage-id`|`string`|`--`|||
|     |`syncId`|`sync-id`|`string`|`--`|||
|   |   |   |   |   |   |
|   | **event** | **detail** |   |   |   |
|   |`calciteTabChange`| [TabChangeEventDetail](https://github.com/Esri/calcite-components/blob/v1.0.0-beta.59/src/components/calcite-tab/interfaces.ts#L1)||   |   |

| **component** |   |   |   |   |   |
|-----|-----|-----|-----|-----|-----|
|calcite-tab-title|   |   |   |   |   |
|   | **property** | **attribute** | **type** | **default** |   |
|     |`active`|`active`|`boolean`|<code>false</code>|||
|     |`disabled`|`disabled`|`boolean`|<code>false</code>|||
|     |`iconEnd`|`icon-end`|`string`|`--`|||
|     |`iconFlipRtl`|`icon-flip-rtl`|`"both" \| "end" \| "start"`|`--`|||
|     |`iconStart`|`icon-start`|`string`|`--`|||
|     |`tab`|`tab`|`string`|`--`|||
|   |   |   |   |   |   |
|   | **event** | **detail** |   |   |   |
|   |`calciteTabsActivate`| [TabChangeEventDetail](https://github.com/Esri/calcite-components/blob/v1.0.0-beta.59/src/components/calcite-tab/interfaces.ts#L1)||   |   |
|   |   |   |   |   |   |
|   | **method** | **signature** | **returns** |   |   |
|   |`getTabIndex`|`getTabIndex() => Promise<number>`|`Promise<number>`||   |

| **component** |   |   |   |   |   |
|-----|-----|-----|-----|-----|-----|
|calcite-tabs|   |   |   |   |   |
|   | **property** | **attribute** | **type** | **default** |   |
|     |`bordered`|`bordered`|`boolean`|<code>false</code>|||
|     |`layout`|`layout`|`"center" \| "inline"`|<code>"inline"</code>|||
|     |`position`|`position`|`"above" \| "below"`|<code>"above"</code>|||
|     |`scale`|`scale`|`"l" \| "m" \| "s"`|<code>"m"</code>|||

| **component** |   |   |   |   |   |
|-----|-----|-----|-----|-----|-----|
|calcite-tile|   |   |   |   |   |
|   | **property** | **attribute** | **type** | **default** |   |
|     |`active`|`active`|`boolean`|`--`|||
|     |`description`|`description`|`string`|`--`|||
|     |`disabled`|`disabled`|`boolean`|<code>false</code>|||
|     |`embed`|`embed`|`boolean`|<code>false</code>|||
|     |`heading`|`heading`|`string`|`--`|||
|     |`hidden`|`hidden`|`boolean`|<code>false</code>|||
|     |`href`|`href`|`string`|`--`|||
|     |`icon`|`icon`|`string`|`--`|||

| **component** |   |   |   |   |   |
|-----|-----|-----|-----|-----|-----|
|calcite-tile-select|   |   |   |   |   |
|   | **property** | **attribute** | **type** | **default** |   |
|     |`checked`|`checked`|`boolean`|<code>false</code>|||
|     |`description`|`description`|`string`|`--`|||
|     |`disabled`|`disabled`|`boolean`|<code>false</code>|||
|     |`heading`|`heading`|`string`|`--`|||
|     |`hidden`|`hidden`|`boolean`|<code>false</code>|||
|     |`icon`|`icon`|`string`|`--`|||
|     |`inputAlignment`|`input-alignment`|`"end" \| "start"`|<code>"start"</code>|||
|     |`inputEnabled`|`input-enabled`|`boolean`|<code>false</code>|||
|     |`name`|`name`|`string`|<code>""</code>|||
|     |`type`|`type`|`"checkbox" \| "radio"`|<code>"radio"</code>|||
|     |`value`|`value`|`any`|`--`|||
|     |`width`|`width`|`"auto" \| "full"`|<code>"auto"</code>|||

| **component** |   |   |   |   |   |
|-----|-----|-----|-----|-----|-----|
|calcite-tile-select-group|   |   |   |   |   |
|   | **property** | **attribute** | **type** | **default** |   |
|     |`layout`|`layout`|`"horizontal" \| "vertical"`|<code>"horizontal"</code>|||

| **component** |   |   |   |   |   |
|-----|-----|-----|-----|-----|-----|
|calcite-time-picker|   |   |   |   |   |
|   | **property** | **attribute** | **type** | **default** |   |
|     |`hour`|`hour`|`string`|<code>null</code>|||
|     |`hourDisplayFormat`|`hour-display-format`|`"12" \| "24"`|<code>"12"</code>|||
|     |`intlHour`|`intl-hour`|`string`|<code>"Hour"</code>|||
|     |`intlHourDown`|`intl-hour-down`|`string`|<code>"Decrease hour"</code>|||
|     |`intlHourUp`|`intl-hour-up`|`string`|<code>"Increase hour"</code>|||
|     |`intlMeridiem`|`intl-meridiem`|`string`|<code>"AM/PM"</code>|||
|     |`intlMeridiemDown`|`intl-meridiem-down`|`string`|<code>"Decrease AM/PM"</code>|||
|     |`intlMeridiemUp`|`intl-meridiem-up`|`string`|<code>"Increase AM/PM"</code>|||
|     |`intlMinute`|`intl-minute`|`string`|<code>"Minute"</code>|||
|     |`intlMinuteDown`|`intl-minute-down`|`string`|<code>"Decrease minute"</code>|||
|     |`intlMinuteUp`|`intl-minute-up`|`string`|<code>"Increase minute"</code>|||
|     |`intlSecond`|`intl-second`|`string`|<code>"Second"</code>|||
|     |`intlSecondDown`|`intl-second-down`|`string`|<code>"Decrease second"</code>|||
|     |`intlSecondUp`|`intl-second-up`|`string`|<code>"Increase second"</code>|||
|     |`minute`|`minute`|`string`|<code>null</code>|||
|     |`scale`|`scale`|`"l" \| "m" \| "s"`|<code>"m"</code>|||
|     |`second`|`second`|`string`|<code>null</code>|||
|     |`step`|`step`|`number`|<code>60</code>|||

| **component** |   |   |   |   |   |
|-----|-----|-----|-----|-----|-----|
|calcite-tip|   |   |   |   |   |
|   | **property** | **attribute** | **type** | **default** |   |
|     |`dismissed`|`dismissed`|`boolean`|<code>false</code>|||
|     |`heading`|`heading`|`string`|`--`|||
|     |`headingLevel`|`heading-level`|`1 \| 2 \| 3 \| 4 \| 5 \| 6`|`--`|||
|     |`intlClose`|`intl-close`|`string`|`--`|||
|     |`nonDismissible`|`non-dismissible`|`boolean`|<code>false</code>|||
|     |`selected`|`selected`|`boolean`|`--`|||
|   |   |   |   |   |   |
|   | **event** | **detail** |   |   |   |
|   |`calciteTipDismiss`|`any`||   |   |

| **component** |   |   |   |   |   |
|-----|-----|-----|-----|-----|-----|
|calcite-tip-group|   |   |   |   |   |
|   | **property** | **attribute** | **type** | **default** |   |
|     |`groupTitle`|`group-title`|`string`|`--`|||

| **component** |   |   |   |   |   |
|-----|-----|-----|-----|-----|-----|
|calcite-tip-manager|   |   |   |   |   |
|   | **property** | **attribute** | **type** | **default** |   |
|     |`closed`|`closed`|`boolean`|<code>false</code>|||
|     |`headingLevel`|`heading-level`|`1 \| 2 \| 3 \| 4 \| 5 \| 6`|`--`|||
|     |`intlClose`|`intl-close`|`string`|`--`|||
|     |`intlDefaultTitle`|`intl-default-title`|`string`|`--`|||
|     |`intlNext`|`intl-next`|`string`|`--`|||
|     |`intlPaginationLabel`|`intl-pagination-label`|`string`|`--`|||
|     |`intlPrevious`|`intl-previous`|`string`|`--`|||
|   |   |   |   |   |   |
|   | **event** | **detail** |   |   |   |
|   |`calciteTipManagerToggle`|`any`||   |   |
|   |   |   |   |   |   |
|   | **method** | **signature** | **returns** |   |   |
|   |`nextTip`|`nextTip() => Promise<void>`|`Promise<void>`||   |
|   |`previousTip`|`previousTip() => Promise<void>`|`Promise<void>`||   |

| **component** |   |   |   |   |   |
|-----|-----|-----|-----|-----|-----|
|calcite-tooltip|   |   |   |   |   |
|   | **property** | **attribute** | **type** | **default** |   |
|     |`label`|`label`|`string`|`--`|<code>required</code>||
|     |`offsetDistance`|`offset-distance`|`number`|<code>defaultOffsetDistance</code>|||
|     |`offsetSkidding`|`offset-skidding`|`number`|<code>0</code>|||
|     |`open`|`open`|`boolean`|<code>false</code>|||
|     |`overlayPositioning`|`overlay-positioning`|`"absolute" \| "fixed"`|<code>"absolute"</code>|||
|     |`placement`|`placement`|`Placement \| PlacementRtl \| VariationRtl`|<code>"auto"</code>|||
|     |`referenceElement`|`reference-element`|`HTMLElement \| string`|`--`|||

| **component** |   |   |   |   |   |
|-----|-----|-----|-----|-----|-----|
|calcite-tooltip-manager|   |   |   |   |   |
|   | **property** | **attribute** | **type** | **default** |   |
|     |`selector`|`selector`|`string`|<code>`[${TOOLTIP_REFERENCE}]`</code>|||

| **component** |   |   |   |   |   |
|-----|-----|-----|-----|-----|-----|
|calcite-tree|   |   |   |   |   |
|   | **property** | **attribute** | **type** | **default** |   |
|     |`inputEnabled`|`input-enabled`|`boolean`|<code>false</code>|||
|     |`lines`|`lines`|`boolean`|<code>false</code>|||
|     |`scale`|`scale`|`"m" \| "s"`|<code>"m"</code>|||
|     |`selectionMode`|`selection-mode`|`"ancestors" \| "children" \| "multi" \| "multi-children" \| "single"`|<code>"single"</code>|||
|   |   |   |   |   |   |
|   | **event** | **detail** |   |   |   |
|   |`calciteTreeSelect`| [TreeSelectDetail](https://github.com/Esri/calcite-components/blob/v1.0.0-beta.59/src/components/calcite-tree/interfaces.ts#L1)||   |   |

| **component** |   |   |   |   |   |
|-----|-----|-----|-----|-----|-----|
|calcite-tree-item|   |   |   |   |   |
|   | **property** | **attribute** | **type** | **default** |   |
|     |`expanded`|`expanded`|`boolean`|<code>false</code>|||
|     |`selected`|`selected`|`boolean`|<code>false</code>|||

| **component** |   |   |   |   |   |
|-----|-----|-----|-----|-----|-----|
|calcite-value-list|   |   |   |   |   |
|   | **property** | **attribute** | **type** | **default** |   |
|     |`disabled`|`disabled`|`boolean`|<code>false</code>|||
|     |`dragEnabled`|`drag-enabled`|`boolean`|<code>false</code>|||
|     |`filterEnabled`|`filter-enabled`|`boolean`|<code>false</code>|||
|     |`filterPlaceholder`|`filter-placeholder`|`string`|`--`|||
|     |`group`|`group`|`string`|`--`|||
|     |`loading`|`loading`|`boolean`|<code>false</code>|||
|     |`multiple`|`multiple`|`boolean`|<code>false</code>|||
|     |`selectionFollowsFocus`|`selection-follows-focus`|`boolean`|<code>false</code>|||
|   |   |   |   |   |   |
|   | **event** | **detail** |   |   |   |
|   |`calciteListChange`|`any`||   |   |
|   |`calciteListOrderChange`|`any`||   |   |
|   |   |   |   |   |   |
|   | **method** | **signature** | **returns** |   |   |
|   |`getSelectedItems`|`getSelectedItems() => Promise<Map<string, HTMLCalciteValueListItemElement>>`|`Promise<Map<string, HTMLCalciteValueListItemElement>>`||   |
|   |`setFocus`|`setFocus(focusId?: ListFocusId) => Promise<void>`|`Promise<void>`||   |

| **component** |   |   |   |   |   |
|-----|-----|-----|-----|-----|-----|
|calcite-value-list-item|   |   |   |   |   |
|   | **property** | **attribute** | **type** | **default** |   |
|     |`description`|`description`|`string`|`--`|||
|     |`disabled`|`disabled`|`boolean`|<code>false</code>|||
|     |`icon`|`icon`|`"circle" \| "grip" \| "square"`|<code>null</code>|||
|     |`label`|`label`|`string`|`--`|<code>required</code>||
|     |`metadata`|`--`|`{ [x: string]: unknown; }`|`--`|||
|     |`removable`|`removable`|`boolean`|<code>false</code>|||
|     |`selected`|`selected`|`boolean`|<code>false</code>|||
|     |`value`|`value`|`any`|`--`|<code>required</code>||
|   |   |   |   |   |   |
|   | **event** | **detail** |   |   |   |
|   |`calciteListItemRemove`|`void`||   |   |
|   |   |   |   |   |   |
|   | **method** | **signature** | **returns** |   |   |
|   |`setFocus`|`setFocus() => Promise<void>`|`Promise<void>`||   |
|   |`toggleSelected`|`toggleSelected(coerce?: boolean) => Promise<void>`|`Promise<void>`||   |