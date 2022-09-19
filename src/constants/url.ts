// tmp
// const debug = process.env.NODE_ENV !== 'production';

// const api = debug
//   ? `http://${global.location.hostname}:${location.port}/api/v1`
//   : `${location.protocol}://${location.hostname}${location.port ?? ''}/api/v1`;

// const api = 'http://localhost:3000/api';

const { api = '' } = (window as any).config;

export const Url = {
  web3Auth: `${api}/system/session/web3`,
  project: `${api}/projects`,

  user: `${api}/users`,
  userProject: `${api}/users/projects`,

  workNode: `${api}/work-nodes`,
  workNodeProject: `${api}/work-nodes/projects`,

  projectDonate: `${api}/project-donates`,

  loginIn: `${api}/system/session`,
  addProject: `${api}/users/projects/medicals`,
  hospital: `${api}/medicals/hospitals`,
};
