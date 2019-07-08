// How to deploy
//  ng build --prod --configuration=production --base-href http://sprintmonitoring.guybrush.info/
//  ngh --dir dist/sprintMonitoring


export const environment = {
  production: true,
  authCallbackURL: 'http://sprintmonitoring.guybrush.info/callback',
  sprintService: {
    endPoint: "http://52.45.180.6/issuesRoadmap/public/api"
  },
  firebase: {
    apiKey: "AIzaSyAa_ShKOOOQ8TMhyxp8talK-48QF7hm17M",
    authDomain: "angularsprintmonitoring.firebaseapp.com",
    databaseURL: "https://angularsprintmonitoring.firebaseio.com",
    projectId: "angularsprintmonitoring",
    storageBucket: "angularsprintmonitoring.appspot.com",
    messagingSenderId: "524211133953",
    appId: "1:524211133953:web:99435f58293a1848"
  }
};
