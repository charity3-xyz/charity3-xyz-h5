// tmp
// const debug = true;
//
// const api = debug
//   ? `http://${global.location.hostname}:${location.port}/api`
//   : `${location.protocol}//${location.hostname}${location.port ?? ''}/api/v1`;

const api = 'http://localhost:3000/api';

export const URL = {
  web3Auth: `${api}/system/session/web3`,
};
