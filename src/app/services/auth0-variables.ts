interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: '8BPZ2JyeS6W0BkRA2HpM56WB5wKKYGAc',
  domain: 'dev--gcqyybw.auth0.com',
  callbackURL: 'http://localhost:4200/callback'
};
