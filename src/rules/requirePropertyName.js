import iterateJsdoc from '../iterateJsdoc';

export default iterateJsdoc(({
  report,
  utils,
}) => {
  utils.forEachPreferredTag('property', (jsdoc, targetTagName) => {
    if (jsdoc.tag && jsdoc.name === '') {
      report(
        `There must be an identifier after @${targetTagName} ${jsdoc.type === '' ? 'type' : 'tag'}.`,
        null,
        jsdoc,
      );
    }
  });
}, {
  iterateAllJsdocs: true,
  meta: {
    docs: {
      description: 'Requires that all function `@property` tags have names.',
      url: 'https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-property-name',
    },
    type: 'suggestion',
  },
});
