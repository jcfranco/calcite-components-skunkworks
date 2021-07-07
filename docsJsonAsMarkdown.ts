import { OutputTargetDocsCustom, JsonDocsComponent } from "@stencil/core/internal";
import { promises as fs } from "fs";

export function docsJsonAsMarkdown(opts = { file: "" }): OutputTargetDocsCustom {
  return {
    type: "docs-custom",
    generator: async (docsData) => {
      const content = [];
      try {
        docsData.components.forEach((comp) => normalizeJsonDocsForMarkdown(comp, content));
        const contentStr = content.join("\n");
        await fs.writeFile(opts.file, contentStr);
      } catch (e) {
        console.log("error generating docs-json.md: ", e);
      }
    }
  };
}

function normalizeJsonDocsForMarkdown(component: JsonDocsComponent, content: string[]): void {
  if (component.props.length === 0) {
    return;
  }
  content.push("");
  content.push("| **component** |   |   |   |   |   |");
  content.push("|-----|-----|-----|-----|-----|-----|");
  content.push(`|${component.tag}|   |   |   |   |   |`);
  content.push("|   | **property** | **attribute** | **type** | **default** |   |");

  component.props
    .filter((prop) => !JSON.stringify(prop.docsTags).includes("private")) // filter out private props
    .forEach((prop) => {
      let deprecatedFlag;
      let typeValues;
      let sub;
      // handle array of types
      if (prop.values.length > 1) {
        typeValues = prop.values
          .map((val) =>
            val.value && val.type === "string" ? `"${val.value}"` : val.type === "number" ? val.value : val.type
          )
          .join(" \\| ");
      }
      // escape vertical pipes for table
      if (prop.name === "locale" && prop.default) {
        sub = true;
      }
      if (prop.deprecation) {
        deprecatedFlag = true;
      }
      content.push(
        "|     |`" +
          prop.name +
          "`|`" +
          (prop.attr ? prop.attr : "--") + // format non-reflected props
          "`|`" +
          (prop.values.length === 1 ? prop.type : typeValues) +
          "`|" +
          (sub
            ? '`document.documentElement.lang \\|\\| "en"`'
            : !sub && prop.default
            ? `<code>${prop.default}</code>`
            : "`--`") + // highlight no default value
          "|" +
          (prop.required ? `<code>required</code>` : "") + // show required message
          "|" +
          (deprecatedFlag ? `<code>deprecated</code>` : "") + // show deprecation message
          "|"
      );
    });

  if (component.events.length === 0) {
    return;
  }
  content.push("|   |   |   |   |   |   |");
  content.push("|   | **event** | **detail** |   |   |   |");
  component.events.forEach((item) => {
    let deprecatedFlag;
    let eventDetailLink;
    const detailTags = item.docsTags.filter((tag) => tag.name === "interface");
    if (detailTags.length) {
      detailTags.forEach((tag) => {
        // replace version in markdown interface links
        return tag.text.includes("master")
          ? (eventDetailLink = tag.text.replace("master", `v${process.env.npm_package_version}`))
          : (eventDetailLink = tag.text);
      });
    }
    if (item.deprecation) {
      deprecatedFlag = true;
    }
    content.push(
      "|   |`" +
        item.event +
        "`|" +
        (eventDetailLink ? eventDetailLink : "`" + item.detail + "`") +
        "|" +
        (deprecatedFlag ? `<code>deprecated</code>` : "") +
        "|   |   |"
    );
  });

  if (component.methods.length === 0) {
    return;
  }
  content.push("|   |   |   |   |   |   |");
  content.push("|   | **method** | **signature** | **returns** |   |   |");
  component.methods.forEach((method) => {
    let deprecatedFlag;
    let sub;
    if (component.tag === "calcite-panel" && method.name === "setFocus") {
      sub = true;
    }
    if (method.deprecation) {
      deprecatedFlag = true;
    }
    content.push(
      "|   |`" +
        method.name +
        "`|`" +
        (!sub ? method.signature : `setFocus(focusId?: "dismiss-button" \\| "back-button") => Promise<void>`) + // escape vertical pipes for table
        "`|`" +
        method.returns.type +
        "`|" +
        (deprecatedFlag ? `<code>deprecated</code>` : "") + // show deprecation message
        "|   |"
    );
  });
}
