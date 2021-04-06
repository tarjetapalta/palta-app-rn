const COMMON = {
  verifyToken: '/user/verifyToken',
};

const DEV = {
  baseUrl: 'https://dev-api.palta.app/api',
  aplications: COMMON,
};

const PROD = {
  baseUrl: 'https://dev-api.palta.app/api',
  aplications: COMMON,
};

export default __DEV__ ? DEV : PROD;
