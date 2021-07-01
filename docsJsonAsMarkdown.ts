import { OutputTargetDocsCustom, JsonDocsComponent } from "@stencil/core/internal";
import { promises as fs } from "fs";

export function docsJsonAsMarkdown(opts = { file: "" }): OutputTargetDocsCustom {
  return {
    type: "docs-custom",
    generator: (docsData) => {
      const content = [];
      docsData.components.forEach((comp) => normalizeJsonDocsForMarkdown(comp, content));

      const contentStr = content.join("\n");
      return new Promise((resolve) => {
        fs.writeFile(opts.file, contentStr);
        resolve();
      });
    }
  };
}

function normalizeJsonDocsForMarkdown(component: JsonDocsComponent, content: string[]): void {
  if (component.props.length === 0) {
    return;
  }
  content.push("");
  content.push("| **component** |   |   |   |   |");
  content.push("|-----|-----|-----|-----|-----|");
  content.push(`|${component.tag}|   |   |   |   |`);
  content.push("|   | **prop** | **type** | **default** | **required** |");

  component.props.forEach((prop) => {
    let typeValues;
    if (prop.values.length > 1) {
      typeValues = prop.values
        .map((val) =>
          val.value && val.type === "string" ? `"${val.value}"` : val.type === "number" ? val.value : val.type
        )
        .join(" \\| ");
    }
    content.push(
      "|     |`" +
        prop.name +
        "`|`" +
        (prop.values.length === 1 ? prop.type : typeValues) +
        "`|`" +
        prop.default +
        "`|`" +
        prop.required +
        "`|"
    );
  });

  if (component.events.length === 0) {
    return;
  }
  content.push("|   |   |   |   |   |");
  content.push("|   | **event** | **detail** |   |   |");
  component.events.forEach((item) => {
    content.push("|   |`" + item.event + "`|`" + item.detail + "`|   |   |");
  });

  if (component.methods.length === 0) {
    return;
  }
  content.push("|   |   |   |   |   |");
  content.push("|   | **method** | **signature** | **returns** |   |");
  component.methods.forEach((method) => {
    let needsReplacement;
    if (component.tag === "calcite-panel" && method.name === "setFocus") {
      needsReplacement = true;
    }
    content.push(
      "|   |`" +
        method.name +
        "`|`" +
        (!needsReplacement
          ? method.signature
          : `setFocus(focusId?: "dismiss-button" \\| "back-button") => Promise<void>`) +
        "`|`" +
        method.returns.type +
        "`|   |"
    );
  });
}
