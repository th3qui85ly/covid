//----STATE-WISE UPDATES
fetch("https://api.rootnet.in/covid19-in/stats/latest")
.then(res=>{
return res.json();})
.then((resfinal)=>{
   var temp = "";	
   var i;
		for(i=0; i<33; i++)
		{
  	        
  	          temp +="<tr>";
  	          temp +="<td>"+resfinal.data.regional[i].loc+"</td>";
  	          temp +="<td>"+resfinal.data.regional[i].totalConfirmed+"</td>";
      	          temp +="<td>"+resfinal.data.regional[i].discharged+"</td>";
      	          temp +="<td>"+resfinal.data.regional[i].deaths+"</td></tr>";
      	        }
      	        //----Close for loop
      	        document.getElementById("resfinal").innerHTML+=temp;
		  }
      );
