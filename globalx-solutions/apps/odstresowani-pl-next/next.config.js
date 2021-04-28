const { appRootPath } = require('@nrwl/workspace/src/utils/app-root');
const withNx = require(`${appRootPath}/tools/config/nextjs`)(__dirname);

module.exports = withNx({
  nx: {
    // Set this to false if you do not want to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: true
  },
});
