const RED = "#e74c3c";
const GREEN = "#27ae60";
const YELLOW = "#f1c40f";
const BLUE = "#3498db";
const GRAY = "#bdc3c7";

const colorMap ={
  "closed": GREEN,
  "open": RED,
  "new issues": RED,
  "bug": RED,
  "in progress": YELLOW,
  "review/qa": BLUE,
  "low": GRAY,
  "high": RED,
  "medium": YELLOW,
  "task": GRAY,
  "easy solve": GRAY,
  "enhancement": GREEN,
  "resolved": GREEN,
  "not planned": GRAY,
  "pending": YELLOW,
  "planned": BLUE,
  "not defined": '#444444',
  "": '#444444'
}

export class AppUtils {

  public getColor(label){
    var string = (label.trim()).toLowerCase();
    return colorMap[string] || '#'+'0123456789abcdef'.split('').map(function(v,i,a){
      return i>5 ? null : a[Math.floor(Math.random()*16)] }
    ).join('');
  }

  public getChartData (dataArray, keyName, keyValue){
    let chartDataObject = [];
    for (let item of dataArray) {
      let keyNameResult:any =  this.getDataObjectValueByString(item, keyName) || "Not Defined";
      let keyValueResult:any = this.getDataObjectValueByString(item, keyValue) || 1;
      let counter:number = chartDataObject[keyNameResult] || 0;
      // Count
      chartDataObject[keyNameResult] = counter + keyValueResult;
    }
    return chartDataObject;
  }

  public getDataObjectValueByString(object, string){
    let stringArr: string[] = string.split('.');
    let result:any = {};
    result = object[stringArr[0]];
    if(stringArr.length > 0){
      for (let i = 1; i < stringArr.length; i++) {
        result = result[stringArr[i]];
      }
    }
    return result;
  }
}
