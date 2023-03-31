/**
 * @fileoverview Enforce array values to be sorted
 * @author pierreh
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "Enforce array values to be sorted",
      recommended: false,
      url: null,
    },
    fixable: "code",
    schema: [],
    messages: {
      sortArrayValues: "Array values must be sorted",
    },
  },

  create(context) {
    return {
      VariableDeclarator(node) {
        const comments = node?.parent?.parent?.comments;
        if (
          comments === undefined ||
          !comments.some((comment) =>
            comment.value.includes("@eslint-sort-array")
          )
        ) {
          return;
        }
        const nodeType = node?.init?.type;
        if (nodeType === "ArrayExpression" || nodeType === "TSAsExpression") {
          const elements =
            nodeType === "ArrayExpression"
              ? node.init.elements
              : node.init.expression.elements;
          if (elements.length === 0) {
            return;
          }
          elements.reduce((lastElement, element) => {
            if (lastElement === undefined || lastElement === null) {
              return element;
            }
            const sortabledLastElement =
              typeof lastElement.value === "string"
                ? lastElement.value.toLowerCase()
                : lastElement.value;
            const sortableElement =
              typeof element.value === "string"
                ? element.value.toLowerCase()
                : element.value;
            if (sortabledLastElement > sortableElement) {
              context.report({ node: element, messageId: "sortArrayValues" });
            }
            return element;
          }, null);
        }
      },
    };
  },
};
