// How to deploy
//  ng build --prod --configuration=production --base-href http://sprintmonitoring.guybrush.info/
//  ngh --dir dist/sprintMonitoring


export const environment = {
  production: true,
  sprintService: {
    endPoint: "http://52.45.180.6/issuesRoadmap/public/api"
  }
};
