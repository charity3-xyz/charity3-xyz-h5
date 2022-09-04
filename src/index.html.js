const AUTH_API = {};

module.exports = function ({ htmlWebpackPlugin }) {
  const { debug, env } = htmlWebpackPlugin.options;
  const { PROFILE = 'development' } = env;

  const api = debug
    ? `'http://' + location.hostname + ':' + location.port + '/api'`
    : `location.protocol + '//' + location.hostname + (location.port ? ':'+location.port : '') + '/api/v1'`;
  const authApi = AUTH_API[PROFILE];
  return `
<!DOCTYPE html>
<html lang="zh-cn">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no">
  <title></title>
  <script>
    window.config = {
      api: ${api},
      authApi: '${authApi}',
      clientId: 'pay-console-webapp'
    };
  </script>
</head>
<body style="background: #f5f6f7">
<noscript>
  您的浏览器需要启用JavaScript才能访问该网页.<br/>
  You need to enable JavaScript to this app.
</noscript>
<div id="application">正在加载...</div>
</body>
</html>
`;
};
