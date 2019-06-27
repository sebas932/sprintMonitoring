// How to deploy
//  ng build --prod --configuration=production --base-href http://sprintmonitoring.guybrush.info/
//  ngh --dir dist/sprintMonitoring


export const environment = {
  production: true,
  authCallbackURL: 'http://sprintmonitoring.guybrush.info/callback',
  sprintService: {
    endPoint: "http://52.45.180.6/issuesRoadmap/public/api"
  }
};
