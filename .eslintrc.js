var OFF = 0, WARN = 1, ERROR = 2;

module.exports = {
    root: true,
    ecmaFeatures: {
        modules: true
    },
    env: {
        es6: true,
        node: false,
        browser: true
    },
    extends: 'eslint:recommended',
    parser: 'babel-eslint',

    rules: {
        // Possible Errors
        // Most possible errors are included in the eslint:recommended
        'no-extra-parens': [ ERROR, 'functions' ],
        'no-unexpected-multiline': ERROR,
        'valid-jsdoc': [ WARN, {
            'prefer': {
                'return': 'returns'
            },
            'requireReturn': false,
            'requireParamDescription': true,
            'requireReturnDescription': true,
            'requireReturnType': true
        }],

        // Best Practices
        'accessor-pairs': [ ERROR, {
            'getWithoutSet': false,
            'setWithoutGet': true
        }],
        'block-scoped-var': WARN,
        'complexity': OFF,
        'consistent-return': ERROR,
        'curly': [ ERROR, 'multi-or-nest' ],
        'default-case': ERROR,
        'dot-location': [ WARN, 'property' ],
        'dot-notation': WARN,
        'eqeqeq': [ ERROR, 'smart' ],
        'guard-for-in': WARN,
        'no-alert': OFF,
        'no-caller': ERROR,
        'no-case-declarations': ERROR,
        'no-div-regex': ERROR,
        'no-else-return': WARN,
        'no-empty-label': WARN,
        'no-empty-pattern': ERROR,
        'no-eq-null': ERROR,
        'no-eval': ERROR,
        'no-extend-native': ERROR,
        'no-extra-bind': ERROR,
        // no-fallthrough is in eslint:recommended
        'no-floating-decimal': WARN,
        'no-implicit-coercion': [ WARN, {
            'boolean': true,
            'number': true,
            'string': true
        }],
        'no-implied-eval': ERROR,
        'no-invalid-this': ERROR,
        'no-iterator': ERROR,
        'no-labels': WARN,
        'no-lone-blocks': WARN,
        'no-loop-func': ERROR,
        'no-magic-numbers': OFF,
        'no-multi-spaces': ERROR,
        'no-multi-str': WARN,
        'no-native-reassign': ERROR,
        'no-new-func': ERROR,
        'no-new-wrappers': ERROR,
        'no-new': ERROR,
        'no-octal-escape': ERROR,
        // no-octal is in eslint:recommended
        'no-param-reassign': ERROR,
        'no-process-env': WARN,
        'no-proto': ERROR,
        'no-redeclare': ERROR,
        'no-return-assign': ERROR,
        'no-script-url': ERROR,
        'no-self-compare': ERROR,
        'no-sequences': ERROR,
        'no-throw-literal': ERROR,
        'no-unused-expressions': ERROR,
        'no-useless-call': ERROR,
        'no-useless-concat': ERROR,
        'no-void': ERROR,
        'no-warning-comments': [ WARN, {
            'terms': [ 'FIXME', 'TODO', 'XXX', 'XXX-FIXME', 'XXX-TODO' ],
            'location': 'start'
        }],
        'no-with': ERROR,
        'radix': WARN,
        'vars-on-top': ERROR,
        'wrap-iife': [ ERROR, 'outside' ],
        'yoda': ERROR,

        // Strict Mode
        'strict': [ ERROR, 'global' ],

        // Variables
        'init-declarations': [ ERROR, 'always' ],
        'no-catch-shadow': WARN,
        'no-delete-var': ERROR,
        'no-label-var': ERROR,
        'no-shadow-restricted-names': ERROR,
        'no-shadow': WARN,
        'no-undef-init': OFF,
        'no-undef': ERROR,
        'no-undefined': OFF,
        'no-unused-vars': WARN,
        'no-use-before-define': ERROR,

        // Node.js and CommonJS Module Syntax
        'callback-return': [ ERROR, [ 'callback', 'done', 'next' ]],
        'global-require': ERROR,
        'handle-callback-err': [ ERROR, "error" ],
        'no-mixed-requires': ERROR,
        'no-new-require': ERROR,
        'no-path-concat': ERROR,
        'no-process-exit': ERROR,
        'no-restricted-modules': OFF,
        'no-sync': WARN,

        // Stylistic Issues
        'array-bracket-spacing': [ WARN, 'always' ],
        'block-spacing': [ WARN, 'always' ],
        'brace-style': [ WARN, '1tbs', { 'allowSingleLine': true } ],
        'camelcase': WARN,
        'comma-spacing': [ WARN, { 'before': false, 'after': true } ],
        'comma-style': [ WARN, 'last' ],
        'computed-property-spacing': [ WARN, 'never' ],
        'consistent-this': [ WARN, 'self' ],
        'eol-last': WARN,
        'func-names': OFF,
        'func-style': OFF,
        'id-length': [ WARN, { 'min': 2, 'max': 32 } ],
        'id-match': OFF,
        'indent': [ WARN, 4 ],
        'jsx-quotes': [ WARN, 'prefer-double' ],
        'linebreak-style': OFF, // git fixes this for us on checkin
        'lines-around-comment': OFF,
        'max-depth': [ WARN, 8 ],
        'max-len': [ WARN, 132 ],
        'max-nested-callbacks': [ WARN, 8 ],
        'max-params': [ WARN, 8 ],
        'new-cap': WARN,
        'new-parens': WARN,
        'newline-after-var': OFF,
        'no-array-constructor': WARN,
        'no-bitwise': OFF,
        'no-continue': OFF,
        'no-inline-comments': OFF,
        'no-lonely-if': WARN,
        'no-mixed-spaces-and-tabs': WARN,
        'no-multiple-empty-lines': WARN,
        'no-negated-condition': OFF,
        'no-nested-ternary': WARN,
        'no-new-object': WARN,
        'no-plusplus': OFF,
        'no-restricted-syntax': OFF,
        'no-spaced-func': WARN,
        'no-ternary': OFF,
        'no-trailing-spaces': WARN,
        'no-underscore-dangle': WARN,
        'no-unneeded-ternary': WARN,
        'object-curly-spacing': [ WARN, 'always' ],
        'one-var': OFF,
        'operator-assignment': [ WARN, 'never' ],
        'operator-linebreak': [ WARN, 'after' ],
        'padded-blocks': [ WARN, 'never' ],
        'quote-props': [ WARN, 'consistent-as-needed' ],
        'quotes': [ WARN, 'single', 'avoid-escape' ],
        'semi-spacing': [ WARN, { 'before': false, 'after': true }],
        'semi': [ ERROR, 'always' ],
        'sort-vars': OFF,
        'space-after-keywords': [ WARN, 'always' ],
        'space-before-blocks': [ WARN, 'always' ],
        'space-before-function-paren': [ WARN, { 'anonymous': 'always', 'named': 'never' } ],
        'space-before-keywords': [ WARN, 'always' ],
        'space-in-parens': [ WARN, 'never' ],
        'space-infix-ops': [ WARN, { 'int32Hint': true } ],
        'space-return-throw-case': ERROR,
        'space-unary-ops': ERROR,
        'spaced-comment': [ WARN, 'always' ],
        'wrap-regex': WARN,

        // ECMAScript 2015 Issues: SERVER IS ES5 CODE
        'arrow-body-style': [ ERROR, 'always' ],
        'arrow-parens': [ ERROR, 'always' ],
        'arrow-spacing': [ ERROR, { 'before': true, 'after': true }],
        'constructor-super': ERROR,
        'generator-star-spacing': [ ERROR, 'before' ],
        'no-arrow-condition': ERROR,
        'no-class-assign': ERROR,
        'no-const-assign': ERROR,
        'no-dupe-class-members': ERROR,
        'no-this-before-super': ERROR,
        'object-shorthand': [ WARN, 'never' ],
        'prefer-arrow-callback': WARN,
        'prefer-spread': WARN,
        'prefer-template': WARN,
        'require-yield': ERROR,

        // JSDoc Requirements
        'require-jsdoc': [ WARN, {
            'require': {
                'FunctionDeclaration': true,
                'MethodDefinition': true,
                'ClassDeclaration': false
            }
        }]
    },
    "globals": {
        "document": true,
        "window": true,
        "localStorage": true,
        "L": true
    }
};