| **component**     |                 |                                           |             |              |
| ----------------- | --------------- | ----------------------------------------- | ----------- | ------------ |
| calcite-accordion |                 |                                           |             |              |
|                   | **prop**        | **type**                                  | **default** | **required** |
|                   | `appearance`    | `"default" \| "minimal" \| "transparent"` | `"default"` | `false`      |
|                   | `iconPosition`  | `"end" \| "start"`                        | `"end"`     | `false`      |
|                   | `iconType`      | `"caret" \| "chevron" \| "plus-minus"`    | `"chevron"` | `false`      |
|                   | `scale`         | `"l" \| "m" \| "s"`                       | `"m"`       | `false`      |
|                   | `selectionMode` | `"multi" \| "single" \| "single-persist"` | `"multi"`   | `false`      |

| **component**          |                |           |             |              |
| ---------------------- | -------------- | --------- | ----------- | ------------ |
| calcite-accordion-item |                |           |             |              |
|                        | **prop**       | **type**  | **default** | **required** |
|                        | `active`       | `boolean` | `false`     | `false`      |
|                        | `icon`         | `string`  | `undefined` | `false`      |
|                        | `itemSubtitle` | `string`  | `undefined` | `false`      |
|                        | `itemTitle`    | `string`  | `undefined` | `false`      |

| **component**  |                      |                                   |                 |              |
| -------------- | -------------------- | --------------------------------- | --------------- | ------------ |
| calcite-action |                      |                                   |                 |              |
|                | **prop**             | **type**                          | **default**     | **required** |
|                | `active`             | `boolean`                         | `false`         | `false`      |
|                | `alignment`          | `"center" \| "end" \| "start"`    | `undefined`     | `false`      |
|                | `appearance`         | `"clear" \| "outline" \| "solid"` | `"solid"`       | `false`      |
|                | `compact`            | `boolean`                         | `false`         | `false`      |
|                | `disabled`           | `boolean`                         | `false`         | `false`      |
|                | `icon`               | `string`                          | `undefined`     | `false`      |
|                | `indicator`          | `boolean`                         | `false`         | `false`      |
|                | `intlLoading`        | `string`                          | `TEXT.loading`  | `false`      |
|                | `label`              | `string`                          | `undefined`     | `false`      |
|                | `loading`            | `boolean`                         | `false`         | `false`      |
|                | `scale`              | `"l" \| "m" \| "s"`               | `"m"`           | `false`      |
|                | `text`               | `string`                          | `undefined`     | `true`       |
|                | `textEnabled`        | `boolean`                         | `false`         | `false`      |
|                |                      |                                   |                 |              |
|                | **event**            | **detail**                        |                 |              |
|                | `calciteActionClick` | `any`                             |                 |              |
|                |                      |                                   |                 |              |
|                | **method**           | **signature**                     | **returns**     |              |
|                | `setFocus`           | `setFocus() => Promise<void>`     | `Promise<void>` |              |

| **component**      |                           |                                                        |                 |              |
| ------------------ | ------------------------- | ------------------------------------------------------ | --------------- | ------------ |
| calcite-action-bar |                           |                                                        |                 |              |
|                    | **prop**                  | **type**                                               | **default**     | **required** |
|                    | `expandDisabled`          | `boolean`                                              | `false`         | `false`      |
|                    | `expanded`                | `boolean`                                              | `false`         | `false`      |
|                    | `intlCollapse`            | `string`                                               | `undefined`     | `false`      |
|                    | `intlExpand`              | `string`                                               | `undefined`     | `false`      |
|                    | `overflowActionsDisabled` | `boolean`                                              | `undefined`     | `false`      |
|                    | `position`                | `"end" \| "start"`                                     | `undefined`     | `false`      |
|                    |                           |                                                        |                 |              |
|                    | **event**                 | **detail**                                             |                 |              |
|                    | `calciteActionBarToggle`  | `any`                                                  |                 |              |
|                    |                           |                                                        |                 |              |
|                    | **method**                | **signature**                                          | **returns**     |              |
|                    | `setFocus`                | `setFocus(focusId?: "expand-toggle") => Promise<void>` | `Promise<void>` |              |

| **component**        |            |                                        |              |              |
| -------------------- | ---------- | -------------------------------------- | ------------ | ------------ |
| calcite-action-group |            |                                        |              |              |
|                      | **prop**   | **type**                               | **default**  | **required** |
|                      | `columns`  | `1 \| 2 \| 3 \| 4 \| 5 \| 6`           | `undefined`  | `false`      |
|                      | `expanded` | `boolean`                              | `false`      | `false`      |
|                      | `intlMore` | `string`                               | `undefined`  | `false`      |
|                      | `layout`   | `"grid" \| "horizontal" \| "vertical"` | `"vertical"` | `false`      |
|                      | `menuOpen` | `boolean`                              | `false`      | `false`      |

| **component**       |                               |                                             |                 |              |
| ------------------- | ----------------------------- | ------------------------------------------- | --------------- | ------------ |
| calcite-action-menu |                               |                                             |                 |              |
|                     | **prop**                      | **type**                                    | **default**     | **required** |
|                     | `expanded`                    | `boolean`                                   | `false`         | `false`      |
|                     | `flipPlacements`              | `Placement[]`                               | `undefined`     | `false`      |
|                     | `label`                       | `string`                                    | `undefined`     | `true`       |
|                     | `open`                        | `boolean`                                   | `false`         | `false`      |
|                     | `overlayPositioning`          | `"absolute" \| "fixed"`                     | `"absolute"`    | `false`      |
|                     | `placement`                   | `Placement \| PlacementRtl \| VariationRtl` | `"auto"`        | `false`      |
|                     | `scale`                       | `"l" \| "m" \| "s"`                         | `"m"`           | `false`      |
|                     |                               |                                             |                 |              |
|                     | **event**                     | **detail**                                  |                 |              |
|                     | `calciteActionMenuOpenChange` | `any`                                       |                 |              |
|                     |                               |                                             |                 |              |
|                     | **method**                    | **signature**                               | **returns**     |              |
|                     | `setFocus`                    | `setFocus() => Promise<void>`               | `Promise<void>` |              |

| **component**      |                          |                                                        |                 |              |
| ------------------ | ------------------------ | ------------------------------------------------------ | --------------- | ------------ |
| calcite-action-pad |                          |                                                        |                 |              |
|                    | **prop**                 | **type**                                               | **default**     | **required** |
|                    | `expandDisabled`         | `boolean`                                              | `false`         | `false`      |
|                    | `expanded`               | `boolean`                                              | `false`         | `false`      |
|                    | `intlCollapse`           | `string`                                               | `undefined`     | `false`      |
|                    | `intlExpand`             | `string`                                               | `undefined`     | `false`      |
|                    | `layout`                 | `"grid" \| "horizontal" \| "vertical"`                 | `"vertical"`    | `false`      |
|                    | `position`               | `"end" \| "start"`                                     | `undefined`     | `false`      |
|                    |                          |                                                        |                 |              |
|                    | **event**                | **detail**                                             |                 |              |
|                    | `calciteActionPadToggle` | `any`                                                  |                 |              |
|                    |                          |                                                        |                 |              |
|                    | **method**               | **signature**                                          | **returns**     |              |
|                    | `setFocus`               | `setFocus(focusId?: "expand-toggle") => Promise<void>` | `Promise<void>` |              |

| **component** |                       |                                          |                                      |              |
| ------------- | --------------------- | ---------------------------------------- | ------------------------------------ | ------------ |
| calcite-alert |                       |                                          |                                      |              |
|               | **prop**              | **type**                                 | **default**                          | **required** |
|               | `active`              | `boolean`                                | `false`                              | `false`      |
|               | `autoDismiss`         | `boolean`                                | `false`                              | `false`      |
|               | `autoDismissDuration` | `"fast" \| "medium" \| "slow"`           | `this.autoDismiss ? "medium" : null` | `false`      |
|               | `color`               | `"blue" \| "green" \| "red" \| "yellow"` | `"blue"`                             | `false`      |
|               | `icon`                | `boolean \| string`                      | `undefined`                          | `false`      |
|               | `intlClose`           | `string`                                 | `TEXT.intlClose`                     | `false`      |
|               | `label`               | `string`                                 | `undefined`                          | `true`       |
|               | `scale`               | `"l" \| "m" \| "s"`                      | `"m"`                                | `false`      |
|               |                       |                                          |                                      |              |
|               | **event**             | **detail**                               |                                      |              |
|               | `calciteAlertClose`   | `any`                                    |                                      |              |
|               | `calciteAlertOpen`    | `any`                                    |                                      |              |
|               |                       |                                          |                                      |              |
|               | **method**            | **signature**                            | **returns**                          |              |
|               | `setFocus`            | `setFocus() => Promise<void>`            | `Promise<void>`                      |              |

| **component**  |             |                     |             |              |
| -------------- | ----------- | ------------------- | ----------- | ------------ |
| calcite-avatar |             |                     |             |              |
|                | **prop**    | **type**            | **default** | **required** |
|                | `fullName`  | `string`            | `undefined` | `false`      |
|                | `scale`     | `"l" \| "m" \| "s"` | `"m"`       | `false`      |
|                | `thumbnail` | `string`            | `undefined` | `false`      |
|                | `userId`    | `string`            | `undefined` | `false`      |
|                | `username`  | `string`            | `undefined` | `false`      |

| **component** |                      |                                  |                |              |
| ------------- | -------------------- | -------------------------------- | -------------- | ------------ |
| calcite-block |                      |                                  |                |              |
|               | **prop**             | **type**                         | **default**    | **required** |
|               | `collapsible`        | `boolean`                        | `false`        | `false`      |
|               | `disabled`           | `boolean`                        | `false`        | `false`      |
|               | `dragHandle`         | `boolean`                        | `false`        | `false`      |
|               | `heading`            | `string`                         | `undefined`    | `false`      |
|               | `headingLevel`       | `1 \| 2 \| 3 \| 4 \| 5 \| 6`     | `undefined`    | `false`      |
|               | `intlCollapse`       | `string`                         | `undefined`    | `false`      |
|               | `intlExpand`         | `string`                         | `undefined`    | `false`      |
|               | `intlLoading`        | `string`                         | `TEXT.loading` | `false`      |
|               | `loading`            | `boolean`                        | `false`        | `false`      |
|               | `open`               | `boolean`                        | `false`        | `false`      |
|               | `status`             | `"idle" \| "invalid" \| "valid"` | `undefined`    | `false`      |
|               | `summary`            | `string`                         | `undefined`    | `false`      |
|               |                      |                                  |                |              |
|               | **event**            | **detail**                       |                |              |
|               | `calciteBlockToggle` | `any`                            |                |              |

| **component**         |                             |                                  |             |              |
| --------------------- | --------------------------- | -------------------------------- | ----------- | ------------ |
| calcite-block-section |                             |                                  |             |              |
|                       | **prop**                    | **type**                         | **default** | **required** |
|                       | `intlCollapse`              | `string`                         | `undefined` | `false`      |
|                       | `intlExpand`                | `string`                         | `undefined` | `false`      |
|                       | `open`                      | `boolean`                        | `false`     | `false`      |
|                       | `status`                    | `"idle" \| "invalid" \| "valid"` | `undefined` | `false`      |
|                       | `text`                      | `string`                         | `undefined` | `false`      |
|                       | `toggleDisplay`             | `"button" \| "switch"`           | `"button"`  | `false`      |
|                       |                             |                                  |             |              |
|                       | **event**                   | **detail**                       |             |              |
|                       | `calciteBlockSectionToggle` | `any`                            |             |              |

| **component**  |               |                                                                                                             |                |              |
| -------------- | ------------- | ----------------------------------------------------------------------------------------------------------- | -------------- | ------------ |
| calcite-button |               |                                                                                                             |                |              |
|                | **prop**      | **type**                                                                                                    | **default**    | **required** |
|                | `alignment`   | `"center" \| "end" \| "icon-end-space-between" \| "icon-start-space-between" \| "space-between" \| "start"` | `"center"`     | `false`      |
|                | `appearance`  | `"clear" \| "outline" \| "solid" \| "transparent"`                                                          | `"solid"`      | `false`      |
|                | `color`       | `"blue" \| "inverse" \| "neutral" \| "red"`                                                                 | `"blue"`       | `false`      |
|                | `disabled`    | `boolean`                                                                                                   | `undefined`    | `false`      |
|                | `href`        | `string`                                                                                                    | `undefined`    | `false`      |
|                | `iconEnd`     | `string`                                                                                                    | `undefined`    | `false`      |
|                | `iconFlipRtl` | `"both" \| "end" \| "start"`                                                                                | `undefined`    | `false`      |
|                | `iconStart`   | `string`                                                                                                    | `undefined`    | `false`      |
|                | `intlLoading` | `string`                                                                                                    | `TEXT.loading` | `false`      |
|                | `label`       | `string`                                                                                                    | `undefined`    | `false`      |
|                | `loading`     | `boolean`                                                                                                   | `false`        | `false`      |
|                | `name`        | `string`                                                                                                    | `undefined`    | `false`      |
|                | `rel`         | `string`                                                                                                    | `undefined`    | `false`      |
|                | `round`       | `boolean`                                                                                                   | `false`        | `false`      |
|                | `scale`       | `"l" \| "m" \| "s"`                                                                                         | `"m"`          | `false`      |
|                | `splitChild`  | `"primary" \| "secondary" \| boolean`                                                                       | `false`        | `false`      |
|                | `target`      | `string`                                                                                                    | `undefined`    | `false`      |
|                | `type`        | `string`                                                                                                    | `undefined`    | `false`      |
|                | `width`       | `"auto" \| "full" \| "half"`                                                                                | `"auto"`       | `false`      |

| **component** |                     |            |                 |              |
| ------------- | ------------------- | ---------- | --------------- | ------------ |
| calcite-card  |                     |            |                 |              |
|               | **prop**            | **type**   | **default**     | **required** |
|               | `intlDeselect`      | `string`   | `TEXT.deselect` | `false`      |
|               | `intlLoading`       | `string`   | `TEXT.loading`  | `false`      |
|               | `intlSelect`        | `string`   | `TEXT.select`   | `false`      |
|               | `loading`           | `boolean`  | `false`         | `false`      |
|               | `selectable`        | `boolean`  | `false`         | `false`      |
|               | `selected`          | `boolean`  | `false`         | `false`      |
|               |                     |            |                 |              |
|               | **event**           | **detail** |                 |              |
|               | `calciteCardSelect` | `any`      |                 |              |

| **component**    |                         |                               |                 |              |
| ---------------- | ----------------------- | ----------------------------- | --------------- | ------------ |
| calcite-checkbox |                         |                               |                 |              |
|                  | **prop**                | **type**                      | **default**     | **required** |
|                  | `checked`               | `boolean`                     | `false`         | `false`      |
|                  | `disabled`              | `boolean`                     | `false`         | `false`      |
|                  | `guid`                  | `string`                      | `undefined`     | `false`      |
|                  | `hovered`               | `boolean`                     | `false`         | `false`      |
|                  | `indeterminate`         | `boolean`                     | `false`         | `false`      |
|                  | `name`                  | `string`                      | `""`            | `false`      |
|                  | `scale`                 | `"l" \| "m" \| "s"`           | `"m"`           | `false`      |
|                  | `value`                 | `any`                         | `undefined`     | `false`      |
|                  |                         |                               |                 |              |
|                  | **event**               | **detail**                    |                 |              |
|                  | `calciteCheckboxChange` | `any`                         |                 |              |
|                  |                         |                               |                 |              |
|                  | **method**              | **signature**                 | **returns**     |              |
|                  | `setFocus`              | `setFocus() => Promise<void>` | `Promise<void>` |              |

| **component** |                      |                                                    |                 |              |
| ------------- | -------------------- | -------------------------------------------------- | --------------- | ------------ |
| calcite-chip  |                      |                                                    |                 |              |
|               | **prop**             | **type**                                           | **default**     | **required** |
|               | `appearance`         | `"clear" \| "solid"`                               | `"solid"`       | `false`      |
|               | `color`              | `"blue" \| "green" \| "grey" \| "red" \| "yellow"` | `"grey"`        | `false`      |
|               | `dismissLabel`       | `string`                                           | `TEXT.close`    | `false`      |
|               | `dismissible`        | `boolean`                                          | `false`         | `false`      |
|               | `icon`               | `string`                                           | `undefined`     | `false`      |
|               | `iconFlipRtl`        | `boolean`                                          | `undefined`     | `false`      |
|               | `scale`              | `"l" \| "m" \| "s"`                                | `"m"`           | `false`      |
|               | `value`              | `any`                                              | `undefined`     | `true`       |
|               |                      |                                                    |                 |              |
|               | **event**            | **detail**                                         |                 |              |
|               | `calciteChipDismiss` | `any`                                              |                 |              |
|               |                      |                                                    |                 |              |
|               | **method**           | **signature**                                      | **returns**     |              |
|               | `setFocus`           | `setFocus() => Promise<void>`                      | `Promise<void>` |              |

| **component**        |                            |                                                                                                                                            |                    |              |
| -------------------- | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------ | ------------ |
| calcite-color-picker |                            |                                                                                                                                            |                    |              |
|                      | **prop**                   | **type**                                                                                                                                   | **default**        | **required** |
|                      | `allowEmpty`               | `boolean`                                                                                                                                  | `false`            | `false`      |
|                      | `appearance`               | `"default" \| "minimal"`                                                                                                                   | `"default"`        | `false`      |
|                      | `format`                   | `"auto" \| "hex" \| "hexa" \| "hsl" \| "hsl-css" \| "hsla" \| "hsla-css" \| "hsv" \| "hsva" \| "rgb" \| "rgb-css" \| "rgba" \| "rgba-css"` | `defaultFormat`    | `false`      |
|                      | `hideChannels`             | `boolean`                                                                                                                                  | `false`            | `false`      |
|                      | `hideHex`                  | `boolean`                                                                                                                                  | `false`            | `false`      |
|                      | `hideSaved`                | `boolean`                                                                                                                                  | `false`            | `false`      |
|                      | `intlB`                    | `string`                                                                                                                                   | `TEXT.b`           | `false`      |
|                      | `intlBlue`                 | `string`                                                                                                                                   | `TEXT.blue`        | `false`      |
|                      | `intlDeleteColor`          | `string`                                                                                                                                   | `TEXT.deleteColor` | `false`      |
|                      | `intlG`                    | `string`                                                                                                                                   | `TEXT.g`           | `false`      |
|                      | `intlGreen`                | `string`                                                                                                                                   | `TEXT.green`       | `false`      |
|                      | `intlH`                    | `string`                                                                                                                                   | `TEXT.h`           | `false`      |
|                      | `intlHex`                  | `string`                                                                                                                                   | `TEXT.hex`         | `false`      |
|                      | `intlHsv`                  | `string`                                                                                                                                   | `TEXT.hsv`         | `false`      |
|                      | `intlHue`                  | `string`                                                                                                                                   | `TEXT.hue`         | `false`      |
|                      | `intlNoColor`              | `string`                                                                                                                                   | `TEXT.noColor`     | `false`      |
|                      | `intlR`                    | `string`                                                                                                                                   | `TEXT.r`           | `false`      |
|                      | `intlRed`                  | `string`                                                                                                                                   | `TEXT.red`         | `false`      |
|                      | `intlRgb`                  | `string`                                                                                                                                   | `TEXT.rgb`         | `false`      |
|                      | `intlS`                    | `string`                                                                                                                                   | `TEXT.s`           | `false`      |
|                      | `intlSaturation`           | `string`                                                                                                                                   | `TEXT.saturation`  | `false`      |
|                      | `intlSaveColor`            | `string`                                                                                                                                   | `TEXT.saveColor`   | `false`      |
|                      | `intlSaved`                | `string`                                                                                                                                   | `TEXT.saved`       | `false`      |
|                      | `intlV`                    | `string`                                                                                                                                   | `TEXT.v`           | `false`      |
|                      | `intlValue`                | `string`                                                                                                                                   | `TEXT.value`       | `false`      |
|                      | `scale`                    | `"l" \| "m" \| "s"`                                                                                                                        | `"m"`              | `false`      |
|                      | `storageId`                | `string`                                                                                                                                   | `undefined`        | `false`      |
|                      | `value`                    | `HSL \| HSL & ObjectWithAlpha \| HSV \| HSV & ObjectWithAlpha \| RGB \| RGB & ObjectWithAlpha \| string`                                   | `defaultValue`     | `false`      |
|                      |                            |                                                                                                                                            |                    |              |
|                      | **event**                  | **detail**                                                                                                                                 |                    |              |
|                      | `calciteColorPickerChange` | `any`                                                                                                                                      |                    |              |
|                      |                            |                                                                                                                                            |                    |              |
|                      | **method**                 | **signature**                                                                                                                              | **returns**        |              |
|                      | `setFocus`                 | `setFocus() => Promise<void>`                                                                                                              | `Promise<void>`    |              |

| **component**                  |                                    |                               |                                     |              |
| ------------------------------ | ---------------------------------- | ----------------------------- | ----------------------------------- | ------------ |
| calcite-color-picker-hex-input |                                    |                               |                                     |              |
|                                | **prop**                           | **type**                      | **default**                         | **required** |
|                                | `allowEmpty`                       | `boolean`                     | `false`                             | `false`      |
|                                | `intlHex`                          | `string`                      | `TEXT.hex`                          | `false`      |
|                                | `intlNoColor`                      | `string`                      | `TEXT.noColor`                      | `false`      |
|                                | `scale`                            | `"l" \| "m" \| "s"`           | `"m"`                               | `false`      |
|                                | `value`                            | `string`                      | `normalizeHex(DEFAULT_COLOR.hex())` | `false`      |
|                                |                                    |                               |                                     |              |
|                                | **event**                          | **detail**                    |                                     |              |
|                                | `calciteColorPickerHexInputChange` | `any`                         |                                     |              |
|                                |                                    |                               |                                     |              |
|                                | **method**                         | **signature**                 | **returns**                         |              |
|                                | `setFocus`                         | `setFocus() => Promise<void>` | `Promise<void>`                     |              |

| **component**               |          |                     |             |              |
| --------------------------- | -------- | ------------------- | ----------- | ------------ |
| calcite-color-picker-swatch |          |                     |             |              |
|                             | **prop** | **type**            | **default** | **required** |
|                             | `active` | `boolean`           | `false`     | `false`      |
|                             | `color`  | `string`            | `undefined` | `false`      |
|                             | `scale`  | `"l" \| "m" \| "s"` | `"m"`       | `false`      |

| **component**    |                               |                                                                     |                 |              |
| ---------------- | ----------------------------- | ------------------------------------------------------------------- | --------------- | ------------ |
| calcite-combobox |                               |                                                                     |                 |              |
|                  | **prop**                      | **type**                                                            | **default**     | **required** |
|                  | `active`                      | `boolean`                                                           | `false`         | `false`      |
|                  | `allowCustomValues`           | `boolean`                                                           | `undefined`     | `false`      |
|                  | `disabled`                    | `boolean`                                                           | `false`         | `false`      |
|                  | `label`                       | `string`                                                            | `undefined`     | `true`       |
|                  | `maxItems`                    | `number`                                                            | `0`             | `false`      |
|                  | `overlayPositioning`          | `"absolute" \| "fixed"`                                             | `"absolute"`    | `false`      |
|                  | `placeholder`                 | `string`                                                            | `undefined`     | `false`      |
|                  | `scale`                       | `"l" \| "m" \| "s"`                                                 | `"m"`           | `false`      |
|                  | `selectionMode`               | `"ancestors" \| "multi" \| "single"`                                | `"multi"`       | `false`      |
|                  |                               |                                                                     |                 |              |
|                  | **event**                     | **detail**                                                          |                 |              |
|                  | `calciteComboboxChipDismiss`  | `any`                                                               |                 |              |
|                  | `calciteComboboxFilterChange` | `{ visibleItems: HTMLCalciteComboboxItemElement[]; text: string; }` |                 |              |
|                  | `calciteLookupChange`         | `HTMLCalciteComboboxItemElement[]`                                  |                 |              |
|                  |                               |                                                                     |                 |              |
|                  | **method**                    | **signature**                                                       | **returns**     |              |
|                  | `reposition`                  | `reposition() => Promise<void>`                                     | `Promise<void>` |              |
|                  | `setFocus`                    | `setFocus() => Promise<void>`                                       | `Promise<void>` |              |

| **component**         |                             |                                                     |                 |              |
| --------------------- | --------------------------- | --------------------------------------------------- | --------------- | ------------ |
| calcite-combobox-item |                             |                                                     |                 |              |
|                       | **prop**                    | **type**                                            | **default**     | **required** |
|                       | `active`                    | `boolean`                                           | `false`         | `false`      |
|                       | `ancestors`                 | `ComboboxChildElement[]`                            | `undefined`     | `false`      |
|                       | `constant`                  | `boolean`                                           | `undefined`     | `false`      |
|                       | `disabled`                  | `boolean`                                           | `false`         | `false`      |
|                       | `guid`                      | `string`                                            | `guid()`        | `false`      |
|                       | `icon`                      | `string`                                            | `undefined`     | `false`      |
|                       | `selected`                  | `boolean`                                           | `false`         | `false`      |
|                       | `textLabel`                 | `string`                                            | `undefined`     | `true`       |
|                       | `value`                     | `any`                                               | `undefined`     | `true`       |
|                       |                             |                                                     |                 |              |
|                       | **event**                   | **detail**                                          |                 |              |
|                       | `calciteComboboxItemChange` | `any`                                               |                 |              |
|                       |                             |                                                     |                 |              |
|                       | **method**                  | **signature**                                       | **returns**     |              |
|                       | `toggleSelected`            | `toggleSelected(coerce?: boolean) => Promise<void>` | `Promise<void>` |              |

| **component**               |             |                          |             |              |
| --------------------------- | ----------- | ------------------------ | ----------- | ------------ |
| calcite-combobox-item-group |             |                          |             |              |
|                             | **prop**    | **type**                 | **default** | **required** |
|                             | `ancestors` | `ComboboxChildElement[]` | `undefined` | `false`      |
|                             | `label`     | `string`                 | `undefined` | `true`       |

| **component**       |                                |                              |                                |              |
| ------------------- | ------------------------------ | ---------------------------- | ------------------------------ | ------------ | ----- | ------- |
| calcite-date-picker |                                |                              |                                |              |
|                     | **prop**                       | **type**                     | **default**                    | **required** |
|                     | `activeRange`                  | `"end" \| "start"`           | `"start"`                      | `false`      |
|                     | `end`                          | `string`                     | `undefined`                    | `false`      |
|                     | `endAsDate`                    | `Date`                       | `undefined`                    | `false`      |
|                     | `headingLevel`                 | `1 \| 2 \| 3 \| 4 \| 5 \| 6` | `undefined`                    | `false`      |
|                     | `intlNextMonth`                | `string`                     | `TEXT.nextMonth`               | `false`      |
|                     | `intlPrevMonth`                | `string`                     | `TEXT.prevMonth`               | `false`      |
|                     | `locale`                       | `string`                     | `document.documentElement.lang |              | "en"` | `false` |
|                     | `max`                          | `string`                     | `undefined`                    | `false`      |
|                     | `maxAsDate`                    | `Date`                       | `undefined`                    | `false`      |
|                     | `min`                          | `string`                     | `undefined`                    | `false`      |
|                     | `minAsDate`                    | `Date`                       | `undefined`                    | `false`      |
|                     | `proximitySelectionDisabled`   | `boolean`                    | `false`                        | `false`      |
|                     | `range`                        | `boolean`                    | `false`                        | `false`      |
|                     | `scale`                        | `"l" \| "m" \| "s"`          | `"m"`                          | `false`      |
|                     | `start`                        | `string`                     | `undefined`                    | `false`      |
|                     | `startAsDate`                  | `Date`                       | `undefined`                    | `false`      |
|                     | `value`                        | `string`                     | `undefined`                    | `false`      |
|                     | `valueAsDate`                  | `Date`                       | `undefined`                    | `false`      |
|                     |                                |                              |                                |              |
|                     | **event**                      | **detail**                   |                                |              |
|                     | `calciteDatePickerChange`      | `Date`                       |                                |              |
|                     | `calciteDatePickerRangeChange` | `DateRangeChange`            |                                |              |

| **component**           |                    |                     |             |              |
| ----------------------- | ------------------ | ------------------- | ----------- | ------------ |
| calcite-date-picker-day |                    |                     |             |              |
|                         | **prop**           | **type**            | **default** | **required** |
|                         | `active`           | `boolean`           | `false`     | `false`      |
|                         | `currentMonth`     | `boolean`           | `false`     | `false`      |
|                         | `day`              | `number`            | `undefined` | `false`      |
|                         | `disabled`         | `boolean`           | `false`     | `false`      |
|                         | `endOfRange`       | `boolean`           | `false`     | `false`      |
|                         | `highlighted`      | `boolean`           | `false`     | `false`      |
|                         | `localeData`       | `DateLocaleData`    | `undefined` | `false`      |
|                         | `range`            | `boolean`           | `false`     | `false`      |
|                         | `rangeHover`       | `boolean`           | `false`     | `false`      |
|                         | `scale`            | `"l" \| "m" \| "s"` | `undefined` | `false`      |
|                         | `selected`         | `boolean`           | `false`     | `false`      |
|                         | `startOfRange`     | `boolean`           | `false`     | `false`      |
|                         | `value`            | `Date`              | `undefined` | `false`      |
|                         |                    |                     |             |              |
|                         | **event**          | **detail**          |             |              |
|                         | `calciteDaySelect` | `any`               |             |              |

| **component**             |                                     |                     |              |              |
| ------------------------- | ----------------------------------- | ------------------- | ------------ | ------------ |
| calcite-date-picker-month |                                     |                     |              |              |
|                           | **prop**                            | **type**            | **default**  | **required** |
|                           | `activeDate`                        | `Date`              | `new Date()` | `false`      |
|                           | `endDate`                           | `Date`              | `undefined`  | `false`      |
|                           | `hoverRange`                        | `any`               | `undefined`  | `false`      |
|                           | `max`                               | `Date`              | `undefined`  | `false`      |
|                           | `min`                               | `Date`              | `undefined`  | `false`      |
|                           | `scale`                             | `"l" \| "m" \| "s"` | `undefined`  | `false`      |
|                           | `selectedDate`                      | `Date`              | `undefined`  | `false`      |
|                           | `startDate`                         | `Date`              | `undefined`  | `false`      |
|                           |                                     |                     |              |              |
|                           | **event**                           | **detail**          |              |              |
|                           | `calciteDatePickerActiveDateChange` | `any`               |              |              |
|                           | `calciteDatePickerSelect`           | `any`               |              |              |

| **component**                    |                           |                              |             |              |
| -------------------------------- | ------------------------- | ---------------------------- | ----------- | ------------ |
| calcite-date-picker-month-header |                           |                              |             |              |
|                                  | **prop**                  | **type**                     | **default** | **required** |
|                                  | `activeDate`              | `Date`                       | `undefined` | `false`      |
|                                  | `headingLevel`            | `1 \| 2 \| 3 \| 4 \| 5 \| 6` | `undefined` | `false`      |
|                                  | `intlNextMonth`           | `string`                     | `undefined` | `false`      |
|                                  | `intlPrevMonth`           | `string`                     | `undefined` | `false`      |
|                                  | `locale`                  | `string`                     | `undefined` | `false`      |
|                                  | `localeData`              | `DateLocaleData`             | `undefined` | `false`      |
|                                  | `max`                     | `Date`                       | `undefined` | `false`      |
|                                  | `min`                     | `Date`                       | `undefined` | `false`      |
|                                  | `scale`                   | `"l" \| "m" \| "s"`          | `undefined` | `false`      |
|                                  | `selectedDate`            | `Date`                       | `undefined` | `false`      |
|                                  |                           |                              |             |              |
|                                  | **event**                 | **detail**                   |             |              |
|                                  | `calciteDatePickerSelect` | `Date`                       |             |              |

| **component**    |                         |                                                                                                                                                               |                            |              |
| ---------------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ------------ |
| calcite-dropdown |                         |                                                                                                                                                               |                            |              |
|                  | **prop**                | **type**                                                                                                                                                      | **default**                | **required** |
|                  | `active`                | `boolean`                                                                                                                                                     | `false`                    | `false`      |
|                  | `disableCloseOnSelect`  | `boolean`                                                                                                                                                     | `false`                    | `false`      |
|                  | `disabled`              | `boolean`                                                                                                                                                     | `undefined`                | `false`      |
|                  | `maxItems`              | `number`                                                                                                                                                      | `0`                        | `false`      |
|                  | `overlayPositioning`    | `"absolute" \| "fixed"`                                                                                                                                       | `"absolute"`               | `false`      |
|                  | `placement`             | `"bottom" \| "bottom-end" \| "bottom-leading" \| "bottom-start" \| "bottom-trailing" \| "top" \| "top-end" \| "top-leading" \| "top-start" \| "top-trailing"` | `DefaultDropdownPlacement` | `false`      |
|                  | `scale`                 | `"l" \| "m" \| "s"`                                                                                                                                           | `"m"`                      | `false`      |
|                  | `selectedItems`         | `HTMLCalciteDropdownItemElement[]`                                                                                                                            | `[]`                       | `false`      |
|                  | `type`                  | `"click" \| "hover"`                                                                                                                                          | `"click"`                  | `false`      |
|                  | `width`                 | `"l" \| "m" \| "s"`                                                                                                                                           | `"m"`                      | `false`      |
|                  |                         |                                                                                                                                                               |                            |              |
|                  | **event**               | **detail**                                                                                                                                                    |                            |              |
|                  | `calciteDropdownClose`  | `void`                                                                                                                                                        |                            |              |
|                  | `calciteDropdownOpen`   | `void`                                                                                                                                                        |                            |              |
|                  | `calciteDropdownSelect` | `void`                                                                                                                                                        |                            |              |
|                  |                         |                                                                                                                                                               |                            |              |
|                  | **method**              | **signature**                                                                                                                                                 | **returns**                |              |
|                  | `reposition`            | `reposition() => Promise<void>`                                                                                                                               | `Promise<void>`            |              |

| **component**          |                 |                                 |             |              |
| ---------------------- | --------------- | ------------------------------- | ----------- | ------------ |
| calcite-dropdown-group |                 |                                 |             |              |
|                        | **prop**        | **type**                        | **default** | **required** |
|                        | `groupTitle`    | `string`                        | `undefined` | `false`      |
|                        | `scale`         | `"l" \| "m" \| "s"`             | `undefined` | `false`      |
|                        | `selectionMode` | `"multi" \| "none" \| "single"` | `"single"`  | `false`      |

| **component**         |               |                              |             |              |
| --------------------- | ------------- | ---------------------------- | ----------- | ------------ |
| calcite-dropdown-item |               |                              |             |              |
|                       | **prop**      | **type**                     | **default** | **required** |
|                       | `active`      | `boolean`                    | `false`     | `false`      |
|                       | `href`        | `string`                     | `undefined` | `false`      |
|                       | `iconEnd`     | `string`                     | `undefined` | `false`      |
|                       | `iconFlipRtl` | `"both" \| "end" \| "start"` | `undefined` | `false`      |
|                       | `iconStart`   | `string`                     | `undefined` | `false`      |

| **component** |               |                                             |              |              |
| ------------- | ------------- | ------------------------------------------- | ------------ | ------------ |
| calcite-fab   |               |                                             |              |              |
|               | **prop**      | **type**                                    | **default**  | **required** |
|               | `appearance`  | `"outline" \| "solid"`                      | `"outline"`  | `false`      |
|               | `color`       | `"blue" \| "inverse" \| "neutral" \| "red"` | `"neutral"`  | `false`      |
|               | `disabled`    | `boolean`                                   | `false`      | `false`      |
|               | `icon`        | `string`                                    | `ICONS.plus` | `false`      |
|               | `label`       | `string`                                    | `undefined`  | `false`      |
|               | `loading`     | `boolean`                                   | `false`      | `false`      |
|               | `scale`       | `"l" \| "m" \| "s"`                         | `"m"`        | `false`      |
|               | `text`        | `string`                                    | `undefined`  | `false`      |
|               | `textEnabled` | `boolean`                                   | `false`      | `false`      |

| **component**  |                       |                               |                 |              |
| -------------- | --------------------- | ----------------------------- | --------------- | ------------ |
| calcite-filter |                       |                               |                 |              |
|                | **prop**              | **type**                      | **default**     | **required** |
|                | `data`                | `object[]`                    | `undefined`     | `false`      |
|                | `disabled`            | `boolean`                     | `false`         | `false`      |
|                | `intlClear`           | `string`                      | `undefined`     | `false`      |
|                | `intlLabel`           | `string`                      | `undefined`     | `false`      |
|                | `placeholder`         | `string`                      | `undefined`     | `false`      |
|                |                       |                               |                 |              |
|                | **event**             | **detail**                    |                 |              |
|                | `calciteFilterChange` | `any`                         |                 |              |
|                |                       |                               |                 |              |
|                | **method**            | **signature**                 | **returns**     |              |
|                | `setFocus`            | `setFocus() => Promise<void>` | `Promise<void>` |              |

| **component** |                |           |             |              |
| ------------- | -------------- | --------- | ----------- | ------------ |
| calcite-graph |                |           |             |              |
|               | **prop**       | **type**  | **default** | **required** |
|               | `data`         | `Point[]` | `[]`        | `false`      |
|               | `height`       | `number`  | `100`       | `false`      |
|               | `highlightMax` | `number`  | `undefined` | `false`      |
|               | `highlightMin` | `number`  | `undefined` | `false`      |
|               | `width`        | `number`  | `300`       | `false`      |

| **component**  |                      |                               |                 |              |
| -------------- | -------------------- | ----------------------------- | --------------- | ------------ |
| calcite-handle |                      |                               |                 |              |
|                | **prop**             | **type**                      | **default**     | **required** |
|                | `textTitle`          | `string`                      | `"handle"`      | `false`      |
|                |                      |                               |                 |              |
|                | **event**            | **detail**                    |                 |              |
|                | `calciteHandleNudge` | `any`                         |                 |              |
|                |                      |                               |                 |              |
|                | **method**           | **signature**                 | **returns**     |              |
|                | `setFocus`           | `setFocus() => Promise<void>` | `Promise<void>` |              |

| **component** |             |                     |             |              |
| ------------- | ----------- | ------------------- | ----------- | ------------ |
| calcite-icon  |             |                     |             |              |
|               | **prop**    | **type**            | **default** | **required** |
|               | `flipRtl`   | `boolean`           | `false`     | `false`      |
|               | `icon`      | `string`            | `null`      | `false`      |
|               | `scale`     | `"l" \| "m" \| "s"` | `"m"`       | `false`      |
|               | `textLabel` | `string`            | `undefined` | `false`      |

| **component**           |                      |                       |                            |              |
| ----------------------- | -------------------- | --------------------- | -------------------------- | ------------ |
| calcite-inline-editable |                      |                       |                            |              |
|                         | **prop**             | **type**              | **default**                | **required** |
|                         | `afterConfirm`       | `() => Promise<void>` | `undefined`                | `false`      |
|                         | `controls`           | `boolean`             | `false`                    | `false`      |
|                         | `disabled`           | `boolean`             | `false`                    | `false`      |
|                         | `editingEnabled`     | `boolean`             | `false`                    | `false`      |
|                         | `intlCancelEditing`  | `string`              | `TEXT.intlCancelEditing`   | `false`      |
|                         | `intlConfirmChanges` | `string`              | `TEXT.intlConfirmChanges`  | `false`      |
|                         | `intlEnableEditing`  | `string`              | `TEXT.intlEnablingEditing` | `false`      |
|                         | `loading`            | `boolean`             | `false`                    | `false`      |
|                         | `scale`              | `"l" \| "m" \| "s"`   | `undefined`                | `false`      |

| **component** |                     |                                                                                                                                                                                        |                                |              |
| ------------- | ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ | ------------ | ----- | ------- |
| calcite-input |                     |                                                                                                                                                                                        |                                |              |
|               | **prop**            | **type**                                                                                                                                                                               | **default**                    | **required** |
|               | `alignment`         | `"end" \| "start"`                                                                                                                                                                     | `"start"`                      | `false`      |
|               | `autofocus`         | `boolean`                                                                                                                                                                              | `false`                        | `false`      |
|               | `clearable`         | `boolean`                                                                                                                                                                              | `undefined`                    | `false`      |
|               | `disabled`          | `boolean`                                                                                                                                                                              | `undefined`                    | `false`      |
|               | `groupSeparator`    | `boolean`                                                                                                                                                                              | `false`                        | `false`      |
|               | `icon`              | `boolean \| string`                                                                                                                                                                    | `undefined`                    | `false`      |
|               | `iconFlipRtl`       | `boolean`                                                                                                                                                                              | `undefined`                    | `false`      |
|               | `loading`           | `boolean`                                                                                                                                                                              | `false`                        | `false`      |
|               | `locale`            | `string`                                                                                                                                                                               | `document.documentElement.lang |              | "en"` | `false` |
|               | `max`               | `number`                                                                                                                                                                               | `undefined`                    | `false`      |
|               | `maxLength`         | `number`                                                                                                                                                                               | `undefined`                    | `false`      |
|               | `maxlength`         | `number`                                                                                                                                                                               | `undefined`                    | `false`      |
|               | `min`               | `number`                                                                                                                                                                               | `undefined`                    | `false`      |
|               | `minLength`         | `number`                                                                                                                                                                               | `undefined`                    | `false`      |
|               | `name`              | `string`                                                                                                                                                                               | `undefined`                    | `false`      |
|               | `numberButtonType`  | `"horizontal" \| "none" \| "vertical"`                                                                                                                                                 | `"vertical"`                   | `false`      |
|               | `placeholder`       | `string`                                                                                                                                                                               | `undefined`                    | `false`      |
|               | `prefixText`        | `string`                                                                                                                                                                               | `undefined`                    | `false`      |
|               | `required`          | `boolean`                                                                                                                                                                              | `false`                        | `false`      |
|               | `scale`             | `"l" \| "m" \| "s"`                                                                                                                                                                    | `"m"`                          | `false`      |
|               | `status`            | `"idle" \| "invalid" \| "valid"`                                                                                                                                                       | `"idle"`                       | `false`      |
|               | `step`              | `"any" \| `                                                                                                                                                                            | `undefined`                    | `false`      |
|               | `suffixText`        | `string`                                                                                                                                                                               | `undefined`                    | `false`      |
|               | `type`              | `"color" \| "date" \| "datetime-local" \| "email" \| "file" \| "image" \| "month" \| "number" \| "password" \| "search" \| "tel" \| "text" \| "textarea" \| "time" \| "url" \| "week"` | `"text"`                       | `false`      |
|               | `value`             | `string`                                                                                                                                                                               | `undefined`                    | `false`      |
|               |                     |                                                                                                                                                                                        |                                |              |
|               | **event**           | **detail**                                                                                                                                                                             |                                |              |
|               | `calciteInputInput` | `any`                                                                                                                                                                                  |                                |              |
|               |                     |                                                                                                                                                                                        |                                |              |
|               | **method**          | **signature**                                                                                                                                                                          | **returns**                    |              |
|               | `setFocus`          | `setFocus() => Promise<void>`                                                                                                                                                          | `Promise<void>`                |              |

| **component**             |                                |                                 |                                |              |
| ------------------------- | ------------------------------ | ------------------------------- | ------------------------------ | ------------ | ----- | ------- |
| calcite-input-date-picker |                                |                                 |                                |              |
|                           | **prop**                       | **type**                        | **default**                    | **required** |
|                           | `active`                       | `boolean`                       | `false`                        | `false`      |
|                           | `end`                          | `string`                        | `undefined`                    | `false`      |
|                           | `endAsDate`                    | `Date`                          | `undefined`                    | `false`      |
|                           | `headingLevel`                 | `1 \| 2 \| 3 \| 4 \| 5 \| 6`    | `undefined`                    | `false`      |
|                           | `intlNextMonth`                | `string`                        | `TEXT.nextMonth`               | `false`      |
|                           | `intlPrevMonth`                | `string`                        | `TEXT.prevMonth`               | `false`      |
|                           | `layout`                       | `"horizontal" \| "vertical"`    | `"horizontal"`                 | `false`      |
|                           | `locale`                       | `string`                        | `document.documentElement.lang |              | "en"` | `false` |
|                           | `max`                          | `string`                        | `undefined`                    | `false`      |
|                           | `maxAsDate`                    | `Date`                          | `undefined`                    | `false`      |
|                           | `min`                          | `string`                        | `undefined`                    | `false`      |
|                           | `minAsDate`                    | `Date`                          | `undefined`                    | `false`      |
|                           | `overlayPositioning`           | `"absolute" \| "fixed"`         | `"absolute"`                   | `false`      |
|                           | `proximitySelectionDisabled`   | `boolean`                       | `false`                        | `false`      |
|                           | `range`                        | `boolean`                       | `false`                        | `false`      |
|                           | `scale`                        | `"l" \| "m" \| "s"`             | `"m"`                          | `false`      |
|                           | `start`                        | `string`                        | `undefined`                    | `false`      |
|                           | `startAsDate`                  | `Date`                          | `undefined`                    | `false`      |
|                           | `value`                        | `string`                        | `undefined`                    | `false`      |
|                           | `valueAsDate`                  | `Date`                          | `undefined`                    | `false`      |
|                           |                                |                                 |                                |              |
|                           | **event**                      | **detail**                      |                                |              |
|                           | `calciteDatePickerChange`      | `Date`                          |                                |              |
|                           | `calciteDatePickerRangeChange` | `DateRangeChange`               |                                |              |
|                           |                                |                                 |                                |              |
|                           | **method**                     | **signature**                   | **returns**                    |              |
|                           | `reposition`                   | `reposition() => Promise<void>` | `Promise<void>`                |              |

| **component**         |          |                                  |             |              |
| --------------------- | -------- | -------------------------------- | ----------- | ------------ |
| calcite-input-message |          |                                  |             |              |
|                       | **prop** | **type**                         | **default** | **required** |
|                       | `active` | `boolean`                        | `false`     | `false`      |
|                       | `icon`   | `boolean \| string`              | `undefined` | `false`      |
|                       | `scale`  | `"l" \| "m" \| "s"`              | `"m"`       | `false`      |
|                       | `status` | `"idle" \| "invalid" \| "valid"` | `"idle"`    | `false`      |
|                       | `type`   | `"default" \| "floating"`        | `"default"` | `false`      |

| **component**             |                                |                               |                 |              |
| ------------------------- | ------------------------------ | ----------------------------- | --------------- | ------------ |
| calcite-input-time-picker |                                |                               |                 |              |
|                           | **prop**                       | **type**                      | **default**     | **required** |
|                           | `active`                       | `boolean`                     | `false`         | `false`      |
|                           | `disabled`                     | `boolean`                     | `false`         | `false`      |
|                           | `hourDisplayFormat`            | `"12" \| "24"`                | `"12"`          | `false`      |
|                           | `intlHour`                     | `string`                      | `undefined`     | `false`      |
|                           | `intlHourDown`                 | `string`                      | `undefined`     | `false`      |
|                           | `intlHourUp`                   | `string`                      | `undefined`     | `false`      |
|                           | `intlMeridiem`                 | `string`                      | `undefined`     | `false`      |
|                           | `intlMeridiemDown`             | `string`                      | `undefined`     | `false`      |
|                           | `intlMeridiemUp`               | `string`                      | `undefined`     | `false`      |
|                           | `intlMinute`                   | `string`                      | `undefined`     | `false`      |
|                           | `intlMinuteDown`               | `string`                      | `undefined`     | `false`      |
|                           | `intlMinuteUp`                 | `string`                      | `undefined`     | `false`      |
|                           | `intlSecond`                   | `string`                      | `undefined`     | `false`      |
|                           | `intlSecondDown`               | `string`                      | `undefined`     | `false`      |
|                           | `intlSecondUp`                 | `string`                      | `undefined`     | `false`      |
|                           | `name`                         | `string`                      | `undefined`     | `false`      |
|                           | `scale`                        | `"l" \| "m" \| "s"`           | `"m"`           | `false`      |
|                           | `step`                         | `number`                      | `60`            | `false`      |
|                           | `value`                        | `string`                      | `null`          | `false`      |
|                           |                                |                               |                 |              |
|                           | **event**                      | **detail**                    |                 |              |
|                           | `calciteInputTimePickerChange` | `string`                      |                 |              |
|                           |                                |                               |                 |              |
|                           | **method**                     | **signature**                 | **returns**     |              |
|                           | `setFocus`                     | `setFocus() => Promise<void>` | `Promise<void>` |              |

| **component** |                  |                                                   |             |              |
| ------------- | ---------------- | ------------------------------------------------- | ----------- | ------------ |
| calcite-label |                  |                                                   |             |              |
|               | **prop**         | **type**                                          | **default** | **required** |
|               | `alignment`      | `"center" \| "end" \| "start"`                    | `"start"`   | `false`      |
|               | `disableSpacing` | `boolean`                                         | `undefined` | `false`      |
|               | `disabled`       | `boolean`                                         | `undefined` | `false`      |
|               | `for`            | `string`                                          | `undefined` | `false`      |
|               | `layout`         | `"default" \| "inline" \| "inline-space-between"` | `"default"` | `false`      |
|               | `scale`          | `"l" \| "m" \| "s"`                               | `"m"`       | `false`      |
|               | `status`         | `"idle" \| "invalid" \| "valid"`                  | `"idle"`    | `false`      |

| **component** |               |                              |             |              |
| ------------- | ------------- | ---------------------------- | ----------- | ------------ |
| calcite-link  |               |                              |             |              |
|               | **prop**      | **type**                     | **default** | **required** |
|               | `disabled`    | `boolean`                    | `undefined` | `false`      |
|               | `href`        | `string`                     | `undefined` | `false`      |
|               | `iconEnd`     | `string`                     | `undefined` | `false`      |
|               | `iconFlipRtl` | `"both" \| "end" \| "start"` | `undefined` | `false`      |
|               | `iconStart`   | `string`                     | `undefined` | `false`      |

| **component**     |                  |           |             |              |
| ----------------- | ---------------- | --------- | ----------- | ------------ |
| calcite-list-item |                  |           |             |              |
|                   | **prop**         | **type**  | **default** | **required** |
|                   | `description`    | `string`  | `undefined` | `false`      |
|                   | `disabled`       | `boolean` | `false`     | `false`      |
|                   | `label`          | `string`  | `undefined` | `false`      |
|                   | `nonInteractive` | `boolean` | `false`     | `false`      |

| **component**  |             |                                    |             |              |
| -------------- | ----------- | ---------------------------------- | ----------- | ------------ |
| calcite-loader |             |                                    |             |              |
|                | **prop**    | **type**                           | **default** | **required** |
|                | `active`    | `boolean`                          | `false`     | `false`      |
|                | `inline`    | `boolean`                          | `false`     | `false`      |
|                | `label`     | `string`                           | `undefined` | `true`       |
|                | `noPadding` | `boolean`                          | `undefined` | `false`      |
|                | `scale`     | `"l" \| "m" \| "s"`                | `"m"`       | `false`      |
|                | `text`      | `string`                           | `""`        | `false`      |
|                | `type`      | `"determinate" \| "indeterminate"` | `undefined` | `false`      |
|                | `value`     | `number`                           | `0`         | `false`      |

| **component** |                       |                                                               |                           |              |
| ------------- | --------------------- | ------------------------------------------------------------- | ------------------------- | ------------ |
| calcite-modal |                       |                                                               |                           |              |
|               | **prop**              | **type**                                                      | **default**               | **required** |
|               | `active`              | `boolean`                                                     | `undefined`               | `false`      |
|               | `backgroundColor`     | `"grey" \| "white"`                                           | `"white"`                 | `false`      |
|               | `beforeClose`         | `(el: HTMLElement) => Promise<void>`                          | `() => Promise.resolve()` | `false`      |
|               | `color`               | `"blue" \| "red"`                                             | `undefined`               | `false`      |
|               | `disableCloseButton`  | `boolean`                                                     | `undefined`               | `false`      |
|               | `disableEscape`       | `boolean`                                                     | `undefined`               | `false`      |
|               | `disableOutsideClose` | `boolean`                                                     | `undefined`               | `false`      |
|               | `docked`              | `boolean`                                                     | `undefined`               | `false`      |
|               | `firstFocus`          | `HTMLElement`                                                 | `undefined`               | `false`      |
|               | `fullscreen`          | `boolean`                                                     | `undefined`               | `false`      |
|               | `intlClose`           | `string`                                                      | `"Close"`                 | `false`      |
|               | `noPadding`           | `boolean`                                                     | `undefined`               | `false`      |
|               | `scale`               | `"l" \| "m" \| "s"`                                           | `"m"`                     | `false`      |
|               | `width`               | `"l" \| "m" \| "s" \| `                                       | `"m"`                     | `false`      |
|               |                       |                                                               |                           |              |
|               | **event**             | **detail**                                                    |                           |              |
|               | `calciteModalClose`   | `any`                                                         |                           |              |
|               | `calciteModalOpen`    | `any`                                                         |                           |              |
|               |                       |                                                               |                           |              |
|               | **method**            | **signature**                                                 | **returns**               |              |
|               | `focusElement`        | `focusElement(el?: HTMLElement) => Promise<void>`             | `Promise<void>`           |              |
|               | `scrollContent`       | `scrollContent(top?: number, left?: number) => Promise<void>` | `Promise<void>`           |              |
|               | `setFocus`            | `setFocus(focusId?: "close-button") => Promise<void>`         | `Promise<void>`           |              |

| **component**  |                      |                                          |                 |              |
| -------------- | -------------------- | ---------------------------------------- | --------------- | ------------ |
| calcite-notice |                      |                                          |                 |              |
|                | **prop**             | **type**                                 | **default**     | **required** |
|                | `active`             | `boolean`                                | `false`         | `false`      |
|                | `color`              | `"blue" \| "green" \| "red" \| "yellow"` | `"blue"`        | `false`      |
|                | `dismissible`        | `boolean`                                | `false`         | `false`      |
|                | `icon`               | `boolean \| string`                      | `undefined`     | `false`      |
|                | `intlClose`          | `string`                                 | `TEXT.close`    | `false`      |
|                | `scale`              | `"l" \| "m" \| "s"`                      | `"m"`           | `false`      |
|                | `width`              | `"auto" \| "full" \| "half"`             | `"auto"`        | `false`      |
|                |                      |                                          |                 |              |
|                | **event**            | **detail**                               |                 |              |
|                | `calciteNoticeClose` | `any`                                    |                 |              |
|                | `calciteNoticeOpen`  | `any`                                    |                 |              |
|                |                      |                                          |                 |              |
|                | **method**           | **signature**                            | **returns**     |              |
|                | `setFocus`           | `setFocus() => Promise<void>`            | `Promise<void>` |              |

| **component**  |            |           |             |              |
| -------------- | ---------- | --------- | ----------- | ------------ |
| calcite-option |            |           |             |              |
|                | **prop**   | **type**  | **default** | **required** |
|                | `disabled` | `boolean` | `false`     | `false`      |
|                | `label`    | `string`  | `undefined` | `false`      |
|                | `selected` | `boolean` | `undefined` | `false`      |
|                | `value`    | `any`     | `undefined` | `false`      |

| **component**        |            |           |             |              |
| -------------------- | ---------- | --------- | ----------- | ------------ |
| calcite-option-group |            |           |             |              |
|                      | **prop**   | **type**  | **default** | **required** |
|                      | `disabled` | `boolean` | `false`     | `false`      |
|                      | `label`    | `string`  | `undefined` | `true`       |

| **component**      |                           |                                   |                      |              |
| ------------------ | ------------------------- | --------------------------------- | -------------------- | ------------ |
| calcite-pagination |                           |                                   |                      |              |
|                    | **prop**                  | **type**                          | **default**          | **required** |
|                    | `num`                     | `number`                          | `20`                 | `false`      |
|                    | `scale`                   | `"l" \| "m" \| "s"`               | `"m"`                | `false`      |
|                    | `start`                   | `number`                          | `1`                  | `false`      |
|                    | `textLabelNext`           | `string`                          | `TEXT.nextLabel`     | `false`      |
|                    | `textLabelPrevious`       | `string`                          | `TEXT.previousLabel` | `false`      |
|                    | `total`                   | `number`                          | `0`                  | `false`      |
|                    |                           |                                   |                      |              |
|                    | **event**                 | **detail**                        |                      |              |
|                    | `calcitePaginationChange` | `CalcitePaginationDetail`         |                      |              |
|                    | `calcitePaginationUpdate` | `CalcitePaginationDetail`         |                      |              |
|                    |                           |                                   |                      |              |
|                    | **method**                | **signature**                     | **returns**          |              |
|                    | `nextPage`                | `nextPage() => Promise<void>`     | `Promise<void>`      |              |
|                    | `previousPage`            | `previousPage() => Promise<void>` | `Promise<void>`      |              |

| **component** |                               |                                                                          |                 |              |
| ------------- | ----------------------------- | ------------------------------------------------------------------------ | --------------- | ------------ |
| calcite-panel |                               |                                                                          |                 |              |
|               | **prop**                      | **type**                                                                 | **default**     | **required** |
|               | `beforeBack`                  | `() => Promise<void>`                                                    | `undefined`     | `false`      |
|               | `disabled`                    | `boolean`                                                                | `false`         | `false`      |
|               | `dismissed`                   | `boolean`                                                                | `false`         | `false`      |
|               | `dismissible`                 | `boolean`                                                                | `false`         | `false`      |
|               | `heading`                     | `string`                                                                 | `undefined`     | `false`      |
|               | `headingLevel`                | `1 \| 2 \| 3 \| 4 \| 5 \| 6`                                             | `undefined`     | `false`      |
|               | `heightScale`                 | `"l" \| "m" \| "s"`                                                      | `undefined`     | `false`      |
|               | `intlBack`                    | `string`                                                                 | `undefined`     | `false`      |
|               | `intlClose`                   | `string`                                                                 | `undefined`     | `false`      |
|               | `intlOptions`                 | `string`                                                                 | `undefined`     | `false`      |
|               | `loading`                     | `boolean`                                                                | `false`         | `false`      |
|               | `menuOpen`                    | `boolean`                                                                | `false`         | `false`      |
|               | `showBackButton`              | `boolean`                                                                | `false`         | `false`      |
|               | `summary`                     | `string`                                                                 | `undefined`     | `false`      |
|               | `widthScale`                  | `"l" \| "m" \| "s"`                                                      | `undefined`     | `false`      |
|               |                               |                                                                          |                 |              |
|               | **event**                     | **detail**                                                               |                 |              |
|               | `calcitePanelBackClick`       | `any`                                                                    |                 |              |
|               | `calcitePanelDismissedChange` | `any`                                                                    |                 |              |
|               | `calcitePanelScroll`          | `any`                                                                    |                 |              |
|               |                               |                                                                          |                 |              |
|               | **method**                    | **signature**                                                            | **returns**     |              |
|               | `setFocus`                    | `setFocus(focusId?: "dismiss-button" \| "back-button") => Promise<void>` | `Promise<void>` |              |

| **component**     |                         |                                                                              |                                                        |              |
| ----------------- | ----------------------- | ---------------------------------------------------------------------------- | ------------------------------------------------------ | ------------ |
| calcite-pick-list |                         |                                                                              |                                                        |              |
|                   | **prop**                | **type**                                                                     | **default**                                            | **required** |
|                   | `disabled`              | `boolean`                                                                    | `false`                                                | `false`      |
|                   | `filterEnabled`         | `boolean`                                                                    | `false`                                                | `false`      |
|                   | `filterPlaceholder`     | `string`                                                                     | `undefined`                                            | `false`      |
|                   | `headingLevel`          | `1 \| 2 \| 3 \| 4 \| 5 \| 6`                                                 | `undefined`                                            | `false`      |
|                   | `loading`               | `boolean`                                                                    | `false`                                                | `false`      |
|                   | `multiple`              | `boolean`                                                                    | `false`                                                | `false`      |
|                   | `selectionFollowsFocus` | `boolean`                                                                    | `false`                                                | `false`      |
|                   |                         |                                                                              |                                                        |              |
|                   | **event**               | **detail**                                                                   |                                                        |              |
|                   | `calciteListChange`     | `any`                                                                        |                                                        |              |
|                   |                         |                                                                              |                                                        |              |
|                   | **method**              | **signature**                                                                | **returns**                                            |              |
|                   | `getSelectedItems`      | `getSelectedItems() => Promise<Map<string, HTMLCalcitePickListItemElement>>` | `Promise<Map<string, HTMLCalcitePickListItemElement>>` |              |
|                   | `setFocus`              | `setFocus(focusId?: ListFocusId) => Promise<void>`                           | `Promise<void>`                                        |              |

| **component**           |                |                              |             |              |
| ----------------------- | -------------- | ---------------------------- | ----------- | ------------ |
| calcite-pick-list-group |                |                              |             |              |
|                         | **prop**       | **type**                     | **default** | **required** |
|                         | `groupTitle`   | `string`                     | `undefined` | `false`      |
|                         | `headingLevel` | `1 \| 2 \| 3 \| 4 \| 5 \| 6` | `undefined` | `false`      |

| **component**          |                         |                                                                                                   |                 |              |
| ---------------------- | ----------------------- | ------------------------------------------------------------------------------------------------- | --------------- | ------------ |
| calcite-pick-list-item |                         |                                                                                                   |                 |              |
|                        | **prop**                | **type**                                                                                          | **default**     | **required** |
|                        | `description`           | `string`                                                                                          | `undefined`     | `false`      |
|                        | `disableDeselect`       | `boolean`                                                                                         | `false`         | `false`      |
|                        | `disabled`              | `boolean`                                                                                         | `false`         | `false`      |
|                        | `icon`                  | `ICON_TYPES.circle \| ICON_TYPES.grip \| ICON_TYPES.square`                                       | `null`          | `false`      |
|                        | `intlRemove`            | `string`                                                                                          | `TEXT.remove`   | `false`      |
|                        | `label`                 | `string`                                                                                          | `undefined`     | `false`      |
|                        | `metadata`              | `{ [x: string]: unknown; }`                                                                       | `undefined`     | `false`      |
|                        | `removable`             | `boolean`                                                                                         | `false`         | `false`      |
|                        | `selected`              | `boolean`                                                                                         | `false`         | `false`      |
|                        | `value`                 | `any`                                                                                             | `undefined`     | `true`       |
|                        |                         |                                                                                                   |                 |              |
|                        | **event**               | **detail**                                                                                        |                 |              |
|                        | `calciteListItemChange` | `{ item: HTMLCalcitePickListItemElement; value: any; selected: boolean; shiftPressed: boolean; }` |                 |              |
|                        | `calciteListItemRemove` | `void`                                                                                            |                 |              |
|                        |                         |                                                                                                   |                 |              |
|                        | **method**              | **signature**                                                                                     | **returns**     |              |
|                        | `setFocus`              | `setFocus() => Promise<void>`                                                                     | `Promise<void>` |              |
|                        | `toggleSelected`        | `toggleSelected(coerce?: boolean) => Promise<void>`                                               | `Promise<void>` |              |

| **component**   |                       |                                                       |                         |              |
| --------------- | --------------------- | ----------------------------------------------------- | ----------------------- | ------------ |
| calcite-popover |                       |                                                       |                         |              |
|                 | **prop**              | **type**                                              | **default**             | **required** |
|                 | `closeButton`         | `boolean`                                             | `false`                 | `false`      |
|                 | `disableFlip`         | `boolean`                                             | `false`                 | `false`      |
|                 | `disablePointer`      | `boolean`                                             | `false`                 | `false`      |
|                 | `dismissible`         | `boolean`                                             | `false`                 | `false`      |
|                 | `flipPlacements`      | `Placement[]`                                         | `undefined`             | `false`      |
|                 | `heading`             | `string`                                              | `undefined`             | `false`      |
|                 | `headingLevel`        | `1 \| 2 \| 3 \| 4 \| 5 \| 6`                          | `undefined`             | `false`      |
|                 | `intlClose`           | `string`                                              | `TEXT.close`            | `false`      |
|                 | `label`               | `string`                                              | `undefined`             | `true`       |
|                 | `offsetDistance`      | `number`                                              | `defaultOffsetDistance` | `false`      |
|                 | `offsetSkidding`      | `number`                                              | `0`                     | `false`      |
|                 | `open`                | `boolean`                                             | `false`                 | `false`      |
|                 | `overlayPositioning`  | `"absolute" \| "fixed"`                               | `"absolute"`            | `false`      |
|                 | `placement`           | `Placement \| PlacementRtl \| VariationRtl`           | `"auto"`                | `false`      |
|                 | `referenceElement`    | `HTMLElement \| string`                               | `undefined`             | `true`       |
|                 |                       |                                                       |                         |              |
|                 | **event**             | **detail**                                            |                         |              |
|                 | `calcitePopoverClose` | `any`                                                 |                         |              |
|                 | `calcitePopoverOpen`  | `any`                                                 |                         |              |
|                 |                       |                                                       |                         |              |
|                 | **method**            | **signature**                                         | **returns**             |              |
|                 | `reposition`          | `reposition() => Promise<void>`                       | `Promise<void>`         |              |
|                 | `setFocus`            | `setFocus(focusId?: "close-button") => Promise<void>` | `Promise<void>`         |              |
|                 | `toggle`              | `toggle(value?: boolean) => Promise<void>`            | `Promise<void>`         |              |

| **component**           |             |           |                          |              |
| ----------------------- | ----------- | --------- | ------------------------ | ------------ |
| calcite-popover-manager |             |           |                          |              |
|                         | **prop**    | **type**  | **default**              | **required** |
|                         | `autoClose` | `boolean` | `undefined`              | `false`      |
|                         | `selector`  | `string`  | `[${POPOVER_REFERENCE}]` | `false`      |

| **component**    |            |                                    |                 |              |
| ---------------- | ---------- | ---------------------------------- | --------------- | ------------ |
| calcite-progress |            |                                    |                 |              |
|                  | **prop**   | **type**                           | **default**     | **required** |
|                  | `reversed` | `boolean`                          | `false`         | `false`      |
|                  | `text`     | `string`                           | `null`          | `false`      |
|                  | `type`     | `"determinate" \| "indeterminate"` | `"determinate"` | `false`      |
|                  | `value`    | `number`                           | `0`             | `false`      |

| **component** |            |                     |             |              |
| ------------- | ---------- | ------------------- | ----------- | ------------ |
| calcite-radio |            |                     |             |              |
|               | **prop**   | **type**            | **default** | **required** |
|               | `checked`  | `boolean`           | `false`     | `false`      |
|               | `disabled` | `boolean`           | `false`     | `false`      |
|               | `focused`  | `boolean`           | `false`     | `false`      |
|               | `hidden`   | `boolean`           | `false`     | `false`      |
|               | `hovered`  | `boolean`           | `false`     | `false`      |
|               | `scale`    | `"l" \| "m" \| "s"` | `"m"`       | `false`      |

| **component**        |                            |                               |                 |              |
| -------------------- | -------------------------- | ----------------------------- | --------------- | ------------ |
| calcite-radio-button |                            |                               |                 |              |
|                      | **prop**                   | **type**                      | **default**     | **required** |
|                      | `checked`                  | `boolean`                     | `false`         | `false`      |
|                      | `disabled`                 | `boolean`                     | `false`         | `false`      |
|                      | `focused`                  | `boolean`                     | `false`         | `false`      |
|                      | `guid`                     | `string`                      | `undefined`     | `false`      |
|                      | `hidden`                   | `boolean`                     | `false`         | `false`      |
|                      | `hovered`                  | `boolean`                     | `false`         | `false`      |
|                      | `name`                     | `string`                      | `undefined`     | `false`      |
|                      | `required`                 | `boolean`                     | `false`         | `false`      |
|                      | `scale`                    | `"l" \| "m" \| "s"`           | `"m"`           | `false`      |
|                      | `value`                    | `any`                         | `undefined`     | `true`       |
|                      |                            |                               |                 |              |
|                      | **event**                  | **detail**                    |                 |              |
|                      | `calciteRadioButtonChange` | `any`                         |                 |              |
|                      |                            |                               |                 |              |
|                      | **method**                 | **signature**                 | **returns**     |              |
|                      | `setFocus`                 | `setFocus() => Promise<void>` | `Promise<void>` |              |

| **component**              |                                 |                                        |                |              |
| -------------------------- | ------------------------------- | -------------------------------------- | -------------- | ------------ |
| calcite-radio-button-group |                                 |                                        |                |              |
|                            | **prop**                        | **type**                               | **default**    | **required** |
|                            | `disabled`                      | `boolean`                              | `false`        | `false`      |
|                            | `hidden`                        | `boolean`                              | `false`        | `false`      |
|                            | `layout`                        | `"grid" \| "horizontal" \| "vertical"` | `"horizontal"` | `false`      |
|                            | `name`                          | `string`                               | `undefined`    | `true`       |
|                            | `required`                      | `boolean`                              | `false`        | `false`      |
|                            | `scale`                         | `"l" \| "m" \| "s"`                    | `"m"`          | `false`      |
|                            |                                 |                                        |                |              |
|                            | **event**                       | **detail**                             |                |              |
|                            | `calciteRadioButtonGroupChange` | `any`                                  |                |              |

| **component**       |                           |                                        |                 |              |
| ------------------- | ------------------------- | -------------------------------------- | --------------- | ------------ |
| calcite-radio-group |                           |                                        |                 |              |
|                     | **prop**                  | **type**                               | **default**     | **required** |
|                     | `appearance`              | `"outline" \| "solid"`                 | `"solid"`       | `false`      |
|                     | `disabled`                | `boolean`                              | `undefined`     | `false`      |
|                     | `layout`                  | `"grid" \| "horizontal" \| "vertical"` | `"horizontal"`  | `false`      |
|                     | `name`                    | `string`                               | `undefined`     | `false`      |
|                     | `scale`                   | `"l" \| "m" \| "s"`                    | `"m"`           | `false`      |
|                     | `selectedItem`            | `HTMLCalciteRadioGroupItemElement`     | `undefined`     | `false`      |
|                     | `width`                   | `"auto" \| "full"`                     | `"auto"`        | `false`      |
|                     |                           |                                        |                 |              |
|                     | **event**                 | **detail**                             |                 |              |
|                     | `calciteRadioGroupChange` | `string`                               |                 |              |
|                     |                           |                                        |                 |              |
|                     | **method**                | **signature**                          | **returns**     |              |
|                     | `setFocus`                | `setFocus() => Promise<void>`          | `Promise<void>` |              |

| **component**            |                |                    |             |              |
| ------------------------ | -------------- | ------------------ | ----------- | ------------ |
| calcite-radio-group-item |                |                    |             |              |
|                          | **prop**       | **type**           | **default** | **required** |
|                          | `checked`      | `boolean`          | `false`     | `false`      |
|                          | `icon`         | `string`           | `undefined` | `false`      |
|                          | `iconFlipRtl`  | `boolean`          | `undefined` | `false`      |
|                          | `iconPosition` | `"end" \| "start"` | `"start"`   | `false`      |
|                          | `value`        | `any`              | `undefined` | `false`      |

| **component**  |                       |                               |                 |              |
| -------------- | --------------------- | ----------------------------- | --------------- | ------------ |
| calcite-rating |                       |                               |                 |              |
|                | **prop**              | **type**                      | **default**     | **required** |
|                | `average`             | `number`                      | `undefined`     | `false`      |
|                | `count`               | `number`                      | `undefined`     | `false`      |
|                | `disabled`            | `boolean`                     | `false`         | `false`      |
|                | `intlRating`          | `string`                      | `TEXT.rating`   | `false`      |
|                | `intlStars`           | `string`                      | `TEXT.stars`    | `false`      |
|                | `readOnly`            | `boolean`                     | `false`         | `false`      |
|                | `scale`               | `"l" \| "m" \| "s"`           | `"m"`           | `false`      |
|                | `showChip`            | `boolean`                     | `false`         | `false`      |
|                | `value`               | `number`                      | `0`             | `false`      |
|                |                       |                               |                 |              |
|                | **event**             | **detail**                    |                 |              |
|                | `calciteRatingChange` | `{ value: number; }`          |                 |              |
|                |                       |                               |                 |              |
|                | **method**            | **signature**                 | **returns**     |              |
|                | `setFocus`            | `setFocus() => Promise<void>` | `Promise<void>` |              |

| **component** |               |           |                |              |
| ------------- | ------------- | --------- | -------------- | ------------ |
| calcite-scrim |               |           |                |              |
|               | **prop**      | **type**  | **default**    | **required** |
|               | `intlLoading` | `string`  | `TEXT.loading` | `false`      |
|               | `loading`     | `boolean` | `false`        | `false`      |

| **component**  |                       |                               |                 |              |
| -------------- | --------------------- | ----------------------------- | --------------- | ------------ |
| calcite-select |                       |                               |                 |              |
|                | **prop**              | **type**                      | **default**     | **required** |
|                | `disabled`            | `boolean`                     | `false`         | `false`      |
|                | `label`               | `string`                      | `undefined`     | `true`       |
|                | `scale`               | `"l" \| "m" \| "s"`           | `"m"`           | `false`      |
|                | `selectedOption`      | `HTMLCalciteOptionElement`    | `undefined`     | `false`      |
|                | `width`               | `"auto" \| "full" \| "half"`  | `"auto"`        | `false`      |
|                |                       |                               |                 |              |
|                | **event**             | **detail**                    |                 |              |
|                | `calciteSelectChange` | `void`                        |                 |              |
|                |                       |                               |                 |              |
|                | **method**            | **signature**                 | **returns**     |              |
|                | `setFocus`            | `setFocus() => Promise<void>` | `Promise<void>` |              |

| **component** |                 |           |             |              |
| ------------- | --------------- | --------- | ----------- | ------------ |
| calcite-shell |                 |           |             |              |
|               | **prop**        | **type**  | **default** | **required** |
|               | `contentBehind` | `boolean` | `undefined` | `false`      |

| **component**            |               |                     |             |              |
| ------------------------ | ------------- | ------------------- | ----------- | ------------ |
| calcite-shell-center-row |               |                     |             |              |
|                          | **prop**      | **type**            | **default** | **required** |
|                          | `detached`    | `boolean`           | `false`     | `false`      |
|                          | `heightScale` | `"l" \| "m" \| "s"` | `"s"`       | `false`      |
|                          | `position`    | `"end" \| "start"`  | `"end"`     | `false`      |

| **component**       |                           |                     |             |              |
| ------------------- | ------------------------- | ------------------- | ----------- | ------------ |
| calcite-shell-panel |                           |                     |             |              |
|                     | **prop**                  | **type**            | **default** | **required** |
|                     | `collapsed`               | `boolean`           | `false`     | `false`      |
|                     | `detached`                | `boolean`           | `false`     | `false`      |
|                     | `detachedHeightScale`     | `"l" \| "m" \| "s"` | `"l"`       | `false`      |
|                     | `position`                | `"end" \| "start"`  | `undefined` | `false`      |
|                     | `widthScale`              | `"l" \| "m" \| "s"` | `"m"`       | `false`      |
|                     |                           |                     |             |              |
|                     | **event**                 | **detail**          |             |              |
|                     | `calciteShellPanelToggle` | `any`               |             |              |

| **component**  |                       |                               |                 |              |
| -------------- | --------------------- | ----------------------------- | --------------- | ------------ |
| calcite-slider |                       |                               |                 |              |
|                | **prop**              | **type**                      | **default**     | **required** |
|                | `disabled`            | `boolean`                     | `false`         | `false`      |
|                | `hasHistogram`        | `boolean`                     | `false`         | `false`      |
|                | `histogram`           | `Point[]`                     | `undefined`     | `false`      |
|                | `labelHandles`        | `boolean`                     | `undefined`     | `false`      |
|                | `labelTicks`          | `boolean`                     | `undefined`     | `false`      |
|                | `max`                 | `number`                      | `100`           | `false`      |
|                | `maxLabel`            | `string`                      | `undefined`     | `false`      |
|                | `maxValue`            | `number`                      | `undefined`     | `false`      |
|                | `min`                 | `number`                      | `0`             | `false`      |
|                | `minLabel`            | `string`                      | `undefined`     | `false`      |
|                | `minValue`            | `number`                      | `undefined`     | `false`      |
|                | `pageStep`            | `number`                      | `undefined`     | `false`      |
|                | `precise`             | `boolean`                     | `undefined`     | `false`      |
|                | `snap`                | `boolean`                     | `false`         | `false`      |
|                | `step`                | `number`                      | `1`             | `false`      |
|                | `ticks`               | `number`                      | `undefined`     | `false`      |
|                | `value`               | `number`                      | `null`          | `false`      |
|                |                       |                               |                 |              |
|                | **event**             | **detail**                    |                 |              |
|                | `calciteSliderChange` | `any`                         |                 |              |
|                | `calciteSliderUpdate` | `any`                         |                 |              |
|                |                       |                               |                 |              |
|                | **method**            | **signature**                 | **returns**     |              |
|                | `setFocus`            | `setFocus() => Promise<void>` | `Promise<void>` |              |

| **component**         |                          |            |                    |              |
| --------------------- | ------------------------ | ---------- | ------------------ | ------------ |
| calcite-sortable-list |                          |            |                    |              |
|                       | **prop**                 | **type**   | **default**        | **required** |
|                       | `disabled`               | `boolean`  | `false`            | `false`      |
|                       | `dragSelector`           | `string`   | `undefined`        | `false`      |
|                       | `group`                  | `string`   | `undefined`        | `false`      |
|                       | `handleSelector`         | `string`   | `"calcite-handle"` | `false`      |
|                       | `loading`                | `boolean`  | `false`            | `false`      |
|                       |                          |            |                    |              |
|                       | **event**                | **detail** |                    |              |
|                       | `calciteListOrderChange` | `any`      |                    |              |

| **component**        |                                    |                                                    |             |              |
| -------------------- | ---------------------------------- | -------------------------------------------------- | ----------- | ------------ |
| calcite-split-button |                                    |                                                    |             |              |
|                      | **prop**                           | **type**                                           | **default** | **required** |
|                      | `appearance`                       | `"clear" \| "outline" \| "solid" \| "transparent"` | `"solid"`   | `false`      |
|                      | `color`                            | `"blue" \| "inverse" \| "neutral" \| "red"`        | `"blue"`    | `false`      |
|                      | `disabled`                         | `boolean`                                          | `undefined` | `false`      |
|                      | `dropdownIconType`                 | `"caret" \| "chevron" \| "ellipsis" \| "overflow"` | `"chevron"` | `false`      |
|                      | `dropdownLabel`                    | `string`                                           | `undefined` | `false`      |
|                      | `loading`                          | `boolean`                                          | `false`     | `false`      |
|                      | `primaryIconEnd`                   | `string`                                           | `undefined` | `false`      |
|                      | `primaryIconFlipRtl`               | `"both" \| "end" \| "start"`                       | `undefined` | `false`      |
|                      | `primaryIconStart`                 | `string`                                           | `undefined` | `false`      |
|                      | `primaryLabel`                     | `string`                                           | `undefined` | `false`      |
|                      | `primaryText`                      | `string`                                           | `undefined` | `false`      |
|                      | `scale`                            | `"l" \| "m" \| "s"`                                | `"m"`       | `false`      |
|                      | `width`                            | `"auto" \| "full" \| "half"`                       | `"auto"`    | `false`      |
|                      |                                    |                                                    |             |              |
|                      | **event**                          | **detail**                                         |             |              |
|                      | `calciteSplitButtonPrimaryClick`   | `any`                                              |             |              |
|                      | `calciteSplitButtonSecondaryClick` | `any`                                              |             |              |

| **component**   |            |                                        |                |              |
| --------------- | ---------- | -------------------------------------- | -------------- | ------------ |
| calcite-stepper |            |                                        |                |              |
|                 | **prop**   | **type**                               | **default**    | **required** |
|                 | `icon`     | `boolean`                              | `false`        | `false`      |
|                 | `layout`   | `"grid" \| "horizontal" \| "vertical"` | `"horizontal"` | `false`      |
|                 | `numbered` | `boolean`                              | `false`        | `false`      |
|                 | `scale`    | `"l" \| "m" \| "s"`                    | `"m"`          | `false`      |

| **component**        |                |           |             |              |
| -------------------- | -------------- | --------- | ----------- | ------------ |
| calcite-stepper-item |                |           |             |              |
|                      | **prop**       | **type**  | **default** | **required** |
|                      | `active`       | `boolean` | `false`     | `false`      |
|                      | `complete`     | `boolean` | `false`     | `false`      |
|                      | `disabled`     | `boolean` | `false`     | `false`      |
|                      | `error`        | `boolean` | `false`     | `false`      |
|                      | `itemSubtitle` | `string`  | `undefined` | `false`      |
|                      | `itemTitle`    | `string`  | `undefined` | `false`      |

| **component**  |                       |                               |                 |              |
| -------------- | --------------------- | ----------------------------- | --------------- | ------------ |
| calcite-switch |                       |                               |                 |              |
|                | **prop**              | **type**                      | **default**     | **required** |
|                | `disabled`            | `boolean`                     | `false`         | `false`      |
|                | `name`                | `string`                      | `undefined`     | `false`      |
|                | `scale`               | `"l" \| "m" \| "s"`           | `"m"`           | `false`      |
|                | `switched`            | `boolean`                     | `false`         | `false`      |
|                | `value`               | `any`                         | `undefined`     | `false`      |
|                |                       |                               |                 |              |
|                | **event**             | **detail**                    |                 |              |
|                | `calciteSwitchChange` | `any`                         |                 |              |
|                |                       |                               |                 |              |
|                | **method**            | **signature**                 | **returns**     |              |
|                | `setFocus`            | `setFocus() => Promise<void>` | `Promise<void>` |              |

| **component** |          |           |             |              |
| ------------- | -------- | --------- | ----------- | ------------ |
| calcite-tab   |          |           |             |              |
|               | **prop** | **type**  | **default** | **required** |
|               | `active` | `boolean` | `false`     | `false`      |
|               | `tab`    | `string`  | `undefined` | `false`      |

| **component**   |                    |                        |             |              |
| --------------- | ------------------ | ---------------------- | ----------- | ------------ |
| calcite-tab-nav |                    |                        |             |              |
|                 | **prop**           | **type**               | **default** | **required** |
|                 | `storageId`        | `string`               | `undefined` | `false`      |
|                 | `syncId`           | `string`               | `undefined` | `false`      |
|                 |                    |                        |             |              |
|                 | **event**          | **detail**             |             |              |
|                 | `calciteTabChange` | `TabChangeEventDetail` |             |              |

| **component**     |                       |                                    |                   |              |
| ----------------- | --------------------- | ---------------------------------- | ----------------- | ------------ |
| calcite-tab-title |                       |                                    |                   |              |
|                   | **prop**              | **type**                           | **default**       | **required** |
|                   | `active`              | `boolean`                          | `false`           | `false`      |
|                   | `disabled`            | `boolean`                          | `false`           | `false`      |
|                   | `iconEnd`             | `string`                           | `undefined`       | `false`      |
|                   | `iconFlipRtl`         | `"both" \| "end" \| "start"`       | `undefined`       | `false`      |
|                   | `iconStart`           | `string`                           | `undefined`       | `false`      |
|                   | `tab`                 | `string`                           | `undefined`       | `false`      |
|                   |                       |                                    |                   |              |
|                   | **event**             | **detail**                         |                   |              |
|                   | `calciteTabsActivate` | `TabChangeEventDetail`             |                   |              |
|                   |                       |                                    |                   |              |
|                   | **method**            | **signature**                      | **returns**       |              |
|                   | `getTabIndex`         | `getTabIndex() => Promise<number>` | `Promise<number>` |              |

| **component** |            |                        |             |              |
| ------------- | ---------- | ---------------------- | ----------- | ------------ |
| calcite-tabs  |            |                        |             |              |
|               | **prop**   | **type**               | **default** | **required** |
|               | `bordered` | `boolean`              | `false`     | `false`      |
|               | `layout`   | `"center" \| "inline"` | `"inline"`  | `false`      |
|               | `position` | `"above" \| "below"`   | `"above"`   | `false`      |
|               | `scale`    | `"l" \| "m" \| "s"`    | `"m"`       | `false`      |

| **component** |               |           |             |              |
| ------------- | ------------- | --------- | ----------- | ------------ |
| calcite-tile  |               |           |             |              |
|               | **prop**      | **type**  | **default** | **required** |
|               | `active`      | `boolean` | `undefined` | `false`      |
|               | `description` | `string`  | `undefined` | `false`      |
|               | `disabled`    | `boolean` | `false`     | `false`      |
|               | `embed`       | `boolean` | `false`     | `false`      |
|               | `focused`     | `boolean` | `false`     | `false`      |
|               | `heading`     | `string`  | `undefined` | `false`      |
|               | `hidden`      | `boolean` | `false`     | `false`      |
|               | `href`        | `string`  | `undefined` | `false`      |
|               | `icon`        | `string`  | `undefined` | `false`      |

| **component**       |                  |                         |             |              |
| ------------------- | ---------------- | ----------------------- | ----------- | ------------ |
| calcite-tile-select |                  |                         |             |              |
|                     | **prop**         | **type**                | **default** | **required** |
|                     | `checked`        | `boolean`               | `false`     | `false`      |
|                     | `description`    | `string`                | `undefined` | `false`      |
|                     | `disabled`       | `boolean`               | `false`     | `false`      |
|                     | `heading`        | `string`                | `undefined` | `false`      |
|                     | `hidden`         | `boolean`               | `false`     | `false`      |
|                     | `icon`           | `string`                | `undefined` | `false`      |
|                     | `inputAlignment` | `"end" \| "start"`      | `"start"`   | `false`      |
|                     | `inputEnabled`   | `boolean`               | `false`     | `false`      |
|                     | `name`           | `string`                | `""`        | `false`      |
|                     | `type`           | `"checkbox" \| "radio"` | `"radio"`   | `false`      |
|                     | `value`          | `any`                   | `undefined` | `false`      |
|                     | `width`          | `"auto" \| "full"`      | `"auto"`    | `false`      |

| **component**             |          |                              |                |              |
| ------------------------- | -------- | ---------------------------- | -------------- | ------------ |
| calcite-tile-select-group |          |                              |                |              |
|                           | **prop** | **type**                     | **default**    | **required** |
|                           | `layout` | `"horizontal" \| "vertical"` | `"horizontal"` | `false`      |

| **component**       |                     |                     |                     |              |
| ------------------- | ------------------- | ------------------- | ------------------- | ------------ |
| calcite-time-picker |                     |                     |                     |              |
|                     | **prop**            | **type**            | **default**         | **required** |
|                     | `hour`              | `string`            | `null`              | `false`      |
|                     | `hourDisplayFormat` | `"12" \| "24"`      | `"12"`              | `false`      |
|                     | `intlHour`          | `string`            | `TEXT.hour`         | `false`      |
|                     | `intlHourDown`      | `string`            | `TEXT.hourDown`     | `false`      |
|                     | `intlHourUp`        | `string`            | `TEXT.hourUp`       | `false`      |
|                     | `intlMeridiem`      | `string`            | `TEXT.meridiem`     | `false`      |
|                     | `intlMeridiemDown`  | `string`            | `TEXT.meridiemDown` | `false`      |
|                     | `intlMeridiemUp`    | `string`            | `TEXT.meridiemUp`   | `false`      |
|                     | `intlMinute`        | `string`            | `TEXT.minute`       | `false`      |
|                     | `intlMinuteDown`    | `string`            | `TEXT.minuteDown`   | `false`      |
|                     | `intlMinuteUp`      | `string`            | `TEXT.minuteUp`     | `false`      |
|                     | `intlSecond`        | `string`            | `TEXT.second`       | `false`      |
|                     | `intlSecondDown`    | `string`            | `TEXT.secondDown`   | `false`      |
|                     | `intlSecondUp`      | `string`            | `TEXT.secondUp`     | `false`      |
|                     | `minute`            | `string`            | `null`              | `false`      |
|                     | `scale`             | `"l" \| "m" \| "s"` | `"m"`               | `false`      |
|                     | `second`            | `string`            | `null`              | `false`      |
|                     | `step`              | `number`            | `60`                | `false`      |

| **component** |                     |                              |             |              |
| ------------- | ------------------- | ---------------------------- | ----------- | ------------ |
| calcite-tip   |                     |                              |             |              |
|               | **prop**            | **type**                     | **default** | **required** |
|               | `dismissed`         | `boolean`                    | `false`     | `false`      |
|               | `heading`           | `string`                     | `undefined` | `false`      |
|               | `headingLevel`      | `1 \| 2 \| 3 \| 4 \| 5 \| 6` | `undefined` | `false`      |
|               | `intlClose`         | `string`                     | `undefined` | `false`      |
|               | `nonDismissible`    | `boolean`                    | `false`     | `false`      |
|               | `selected`          | `boolean`                    | `undefined` | `false`      |
|               |                     |                              |             |              |
|               | **event**           | **detail**                   |             |              |
|               | `calciteTipDismiss` | `any`                        |             |              |

| **component**     |              |          |             |              |
| ----------------- | ------------ | -------- | ----------- | ------------ |
| calcite-tip-group |              |          |             |              |
|                   | **prop**     | **type** | **default** | **required** |
|                   | `groupTitle` | `string` | `undefined` | `false`      |

| **component**       |                           |                                  |                 |              |
| ------------------- | ------------------------- | -------------------------------- | --------------- | ------------ |
| calcite-tip-manager |                           |                                  |                 |              |
|                     | **prop**                  | **type**                         | **default**     | **required** |
|                     | `closed`                  | `boolean`                        | `false`         | `false`      |
|                     | `headingLevel`            | `1 \| 2 \| 3 \| 4 \| 5 \| 6`     | `undefined`     | `false`      |
|                     | `intlClose`               | `string`                         | `undefined`     | `false`      |
|                     | `intlDefaultTitle`        | `string`                         | `undefined`     | `false`      |
|                     | `intlNext`                | `string`                         | `undefined`     | `false`      |
|                     | `intlPaginationLabel`     | `string`                         | `undefined`     | `false`      |
|                     | `intlPrevious`            | `string`                         | `undefined`     | `false`      |
|                     |                           |                                  |                 |              |
|                     | **event**                 | **detail**                       |                 |              |
|                     | `calciteTipManagerToggle` | `any`                            |                 |              |
|                     |                           |                                  |                 |              |
|                     | **method**                | **signature**                    | **returns**     |              |
|                     | `nextTip`                 | `nextTip() => Promise<void>`     | `Promise<void>` |              |
|                     | `previousTip`             | `previousTip() => Promise<void>` | `Promise<void>` |              |

| **component**   |                      |                                             |                         |              |
| --------------- | -------------------- | ------------------------------------------- | ----------------------- | ------------ |
| calcite-tooltip |                      |                                             |                         |              |
|                 | **prop**             | **type**                                    | **default**             | **required** |
|                 | `label`              | `string`                                    | `undefined`             | `true`       |
|                 | `offsetDistance`     | `number`                                    | `defaultOffsetDistance` | `false`      |
|                 | `offsetSkidding`     | `number`                                    | `0`                     | `false`      |
|                 | `open`               | `boolean`                                   | `false`                 | `false`      |
|                 | `overlayPositioning` | `"absolute" \| "fixed"`                     | `"absolute"`            | `false`      |
|                 | `placement`          | `Placement \| PlacementRtl \| VariationRtl` | `"auto"`                | `false`      |
|                 | `referenceElement`   | `HTMLElement \| string`                     | `undefined`             | `false`      |

| **component**           |            |          |                          |              |
| ----------------------- | ---------- | -------- | ------------------------ | ------------ |
| calcite-tooltip-manager |            |          |                          |              |
|                         | **prop**   | **type** | **default**              | **required** |
|                         | `selector` | `string` | `[${TOOLTIP_REFERENCE}]` | `false`      |

| **component** |                     |                                                                                                                                                       |                            |              |
| ------------- | ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ------------ |
| calcite-tree  |                     |                                                                                                                                                       |                            |              |
|               | **prop**            | **type**                                                                                                                                              | **default**                | **required** |
|               | `inputEnabled`      | `boolean`                                                                                                                                             | `false`                    | `false`      |
|               | `lines`             | `boolean`                                                                                                                                             | `false`                    | `false`      |
|               | `scale`             | `"m" \| "s"`                                                                                                                                          | `"m"`                      | `false`      |
|               | `selectionMode`     | `TreeSelectionMode.Ancestors \| TreeSelectionMode.Children \| TreeSelectionMode.Multi \| TreeSelectionMode.MultiChildren \| TreeSelectionMode.Single` | `TreeSelectionMode.Single` | `false`      |
|               |                     |                                                                                                                                                       |                            |              |
|               | **event**           | **detail**                                                                                                                                            |                            |              |
|               | `calciteTreeSelect` | `TreeSelectDetail`                                                                                                                                    |                            |              |

| **component**     |            |           |             |              |
| ----------------- | ---------- | --------- | ----------- | ------------ |
| calcite-tree-item |            |           |             |              |
|                   | **prop**   | **type**  | **default** | **required** |
|                   | `expanded` | `boolean` | `false`     | `false`      |
|                   | `selected` | `boolean` | `false`     | `false`      |

| **component**      |                          |                                                                               |                                                         |              |
| ------------------ | ------------------------ | ----------------------------------------------------------------------------- | ------------------------------------------------------- | ------------ |
| calcite-value-list |                          |                                                                               |                                                         |              |
|                    | **prop**                 | **type**                                                                      | **default**                                             | **required** |
|                    | `disabled`               | `boolean`                                                                     | `false`                                                 | `false`      |
|                    | `dragEnabled`            | `boolean`                                                                     | `false`                                                 | `false`      |
|                    | `filterEnabled`          | `boolean`                                                                     | `false`                                                 | `false`      |
|                    | `filterPlaceholder`      | `string`                                                                      | `undefined`                                             | `false`      |
|                    | `group`                  | `string`                                                                      | `undefined`                                             | `false`      |
|                    | `loading`                | `boolean`                                                                     | `false`                                                 | `false`      |
|                    | `multiple`               | `boolean`                                                                     | `false`                                                 | `false`      |
|                    | `selectionFollowsFocus`  | `boolean`                                                                     | `false`                                                 | `false`      |
|                    |                          |                                                                               |                                                         |              |
|                    | **event**                | **detail**                                                                    |                                                         |              |
|                    | `calciteListChange`      | `any`                                                                         |                                                         |              |
|                    | `calciteListOrderChange` | `any`                                                                         |                                                         |              |
|                    |                          |                                                                               |                                                         |              |
|                    | **method**               | **signature**                                                                 | **returns**                                             |              |
|                    | `getSelectedItems`       | `getSelectedItems() => Promise<Map<string, HTMLCalciteValueListItemElement>>` | `Promise<Map<string, HTMLCalciteValueListItemElement>>` |              |
|                    | `setFocus`               | `setFocus(focusId?: ListFocusId) => Promise<void>`                            | `Promise<void>`                                         |              |

| **component**           |                         |                                                             |                 |              |
| ----------------------- | ----------------------- | ----------------------------------------------------------- | --------------- | ------------ |
| calcite-value-list-item |                         |                                                             |                 |              |
|                         | **prop**                | **type**                                                    | **default**     | **required** |
|                         | `description`           | `string`                                                    | `undefined`     | `false`      |
|                         | `disabled`              | `boolean`                                                   | `false`         | `false`      |
|                         | `icon`                  | `ICON_TYPES.circle \| ICON_TYPES.grip \| ICON_TYPES.square` | `null`          | `false`      |
|                         | `label`                 | `string`                                                    | `undefined`     | `true`       |
|                         | `metadata`              | `{ [x: string]: unknown; }`                                 | `undefined`     | `false`      |
|                         | `removable`             | `boolean`                                                   | `false`         | `false`      |
|                         | `selected`              | `boolean`                                                   | `false`         | `false`      |
|                         | `value`                 | `any`                                                       | `undefined`     | `true`       |
|                         |                         |                                                             |                 |              |
|                         | **event**               | **detail**                                                  |                 |              |
|                         | `calciteListItemRemove` | `void`                                                      |                 |              |
|                         |                         |                                                             |                 |              |
|                         | **method**              | **signature**                                               | **returns**     |              |
|                         | `setFocus`              | `setFocus() => Promise<void>`                               | `Promise<void>` |              |
|                         | `toggleSelected`        | `toggleSelected(coerce?: boolean) => Promise<void>`         | `Promise<void>` |              |
