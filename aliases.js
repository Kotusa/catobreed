const fs = require('fs');
const path = require('path');

const directory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(directory, relativePath);

module.exports = {
  '@api': resolveApp('src/api'),
  '@assets': resolveApp('src/assets'),
  '@components': resolveApp('src/components'),
  '@atoms': resolveApp('src/components/atoms'),
  '@molecules': resolveApp('src/components/molecules'),
  '@organisms': resolveApp('src/components/organisms'),
  '@templates': resolveApp('src/components/templates'),
  '@constants': resolveApp('src/constants'),
  '@helpers': resolveApp('src/helpers'),
  '@hooks': resolveApp('src/hooks'),
  '@pages': resolveApp('src/pages'),
  '@reducers': resolveApp('src/reducers'),
  '@store': resolveApp('src/store'),
  '@routes': resolveApp('src/routes'),
  '@theme': resolveApp('src/theme'),
};
