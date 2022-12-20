var xDias = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sab", "Dom"];
var Vizualizacoes = [458,812,746,877,517,434,758];
var Compras = [126,241,122,236,225,113,220];

const titleTooltip = (tooltipItems) =>{
	return '';
}

const fundoTooltip = (tooltipItem)=>{
	if(tooltipItem.tooltipItems[0]){
		return tooltipItem.tooltipItems[0].dataset.borderColor;
}};

new Chart("chart", {
  type: "line",
  data: {
		labels: xDias,
		datasets:
		[{
      fill: false,
      lineTension: 0,
      backgroundColor: "#ef476f",
      borderColor: "#ef476f",
			borderWidth:2,
      data: Vizualizacoes,
		},
		{	
			fill: false,
		 	lineTension: 0,
			backgroundColor: "#ff9f1c",
      borderColor: "#ff9f1c",
			borderWidth:2,
      data: Compras,
		},
	]},
  	options:{
			layout:{padding:{top:40,left:10,right:10}},
			responsive:false,
			plugins:{
				legend: {
					display:false},
				tooltip:{
					enabled:true,
					yAlign:"bottom",
					displayColors:false,
					position:'nearest',
					backgroundColor:fundoTooltip,
					callbacks:{title:titleTooltip}
				}},
    	scales: {
				y: {display:false},
				x: {display:false}
			}
  }
});
