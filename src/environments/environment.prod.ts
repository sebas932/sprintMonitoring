// How to deploy
//  ng build --prod --configuration=production --base-href https://sebas932.github.io/sprintMonitoring/
//  ngh --dir dist/sprintMonitoring


export const environment = {
  production: true,
  sprintService: {
    endPoint: "http://52.45.180.6/issuesRoadmap/public/api"
  }
};
