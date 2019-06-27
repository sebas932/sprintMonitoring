import { environment } from '../../environments/environment';

interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
  apiUrl: string;

}



export const AUTH_CONFIG: AuthConfig = {
  clientID: '8BPZ2JyeS6W0BkRA2HpM56WB5wKKYGAc',
  domain: 'dev--gcqyybw.auth0.com',
  callbackURL: environment.authCallbackURL,
  apiUrl: ''
};
