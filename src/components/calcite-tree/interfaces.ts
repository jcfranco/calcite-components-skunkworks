import { Enumify, enumify } from "../../utils/enumify";

export interface TreeSelectDetail {
  selected: HTMLCalciteTreeItemElement[];
}

export const TreeSelectionMode = enumify({
  Single: "single",
  Multi: "multi",
  Children: "children",
  MultiChildren: "multi-children",
  Ancestors: "ancestors"
});

export type TreeSelectionMode = Enumify<typeof TreeSelectionMode>;
