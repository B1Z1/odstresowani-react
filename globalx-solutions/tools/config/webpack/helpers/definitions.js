const WEBFONTS_REGEX = /\.(woff(2)?|eot|ttf|otf)(\?v=\d+(\.\d+(\.\d+)?)?)?$/;
const WEBFONTS_ISSUER_REGEX = /\.\w+(?<!(s?c|sa)ss)$/i;

const webfontsNextjsAppRule = {
  test: WEBFONTS_REGEX,
  issuer: WEBFONTS_ISSUER_REGEX,
  use: {
    loader: 'file-loader',
    options: {
      name: '[name]-[hash].[ext]',
      esModule: false,
    },
  },
};

module.exports = {
  webfontsNextjsAppRule,
  WEBFONTS_REGEX,
  WEBFONTS_ISSUER_REGEX,
};
