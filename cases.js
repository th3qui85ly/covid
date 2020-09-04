//----INDIA CASE UPDATES
fetch("https://api.rootnet.in/covid19-in/stats/latest")
.then((cases_time_series) => {
 return cases_time_series.json();
 })
.then((cases_time_series2) => {
   console.log(cases_time_series2.data.summary.total);
   console.log(cases_time_series2.data.summary.confirmedCasesIndian);
   console.log(cases_time_series2.data.summary.discharged);
   console.log(cases_time_series2.data.summary.deaths);
   
   var act=cases_time_series2.data.summary.total-cases_time_series2.data.summary.discharged-cases_time_series2.data.summary.deaths; 
   //Total cases
   document.getElementById("total").innerHTML+=cases_time_series2.data.summary.total;
   document.getElementById("active").innerHTML+=act;
document.getElementById("discharged").innerHTML+=cases_time_series2.data.summary.discharged;
   document.getElementById("deaths").innerHTML+=cases_time_series2.data.summary.deaths;
 
   });
