import {includes, isEmpty} from 'lodash';
import localStorage from 'local-storage';

export const VALID_ENV = {
  test: 'test',
  production: 'production',
};

export const changeEnvironment = env => {
  if (isEmpty(env)) {
    console.log('Please enter an environment');
    return;
  }
  if (!includes(VALID_ENV, env)) {
    console.log('Please enter a valid environments. Valid environment: test, production');
    return;
  }
  localStorage.set('env', env);
}
