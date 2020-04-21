
import Config from './config';
import Api from './api';
import localStorage from 'local-storage';
import {VALID_ENV, changeEnvironment} from './utils';

// changeEnvironment('asdfa');
// changeEnvironment(VALID_ENV['production']);
changeEnvironment(VALID_ENV['test']);

const env = localStorage.get('env') || VALID_ENV['production'];
const apiBaseUrl = Config[env] && Config[env].apiUrl; 
const api = Api.create(apiBaseUrl);

api.fetchData()
  .then(response => {
    console.log(
      `Data fetched from ${env} server: `,
      JSON.stringify(response.data, null, 2)
    );
  })
  .catch(error => console.log(error));

