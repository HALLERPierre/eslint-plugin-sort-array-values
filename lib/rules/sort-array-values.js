/**
 * @fileoverview Enforce array values to be sorted
 * @author pierre
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: "problem", // `problem`, `suggestion`, or `layout`
    docs: {
      description: "Enforce array values to be sorted",
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
    messages: {
      sortArrayValues: "Array values must be sorted",
    },
  },

  create(context) {
    // variables should be defined here

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------

    // any helper functions should go here or else delete this section

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return {
      VariableDeclarator(node) {
        // const comments = node?.parent?.parent?.comments;
        // if (
        //   comments === undefined ||
        //   !comments.some((comment) => comment.value.includes("@sortable"))
        // ) {
        //   return;
        // }
        if (node?.init?.type === "ArrayExpression") {
          const elements = node.init.elements;
          elements.reduce((lastElement, element) => {
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
          });
        }
      },
    };
  },
};
