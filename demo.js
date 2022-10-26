function handleSelection(choice) {
	let ipo = document.getElementById('ipometrics');
	let sell = document.getElementById('sell');
	let ma = document.getElementById('macquisitions');
	let kids = document.getElementById('kids');

	if(choice=="ipo"){
		ipo.style.display = "block";
		sell.style.display = "none";
		ma.style.display = "none";
		kids.style.display = "none";
	} else if(choice=="sell"){
		sell.style.display = "block";
		ipo.style.display = "none";
		ma.style.display = "none";
		kids.style.display = "none";
	} else if(choice=="ma"){
		ma.style.display = "block";
		ipo.style.display = "none";
        sell.style.display = "none";
        kids.style.display = "none";
	} else if(choice=="kids") {
		ipo.style.display = "none";
		sell.style.display = "none";
        ma.style.display = "none";
        kids.style.display = "block";
	} else {
		ipo.style.display = "none";
		sell.style.display = "none";
        ma.style.display = "none";
        kids.style.display = "none";
	}
}

let interval = setInterval(function main() {
	if (!Chart){
		console.log(Chart);
	} else {
		clearInterval(interval);
	}
	let choice = document.getElementById("goal").value;
	handleSelection(choice);
	document.getElementById("form1").onsubmit=function() {
		if(document.querySelector('input[name = "profitable"]:checked')){
			createSpiderChart();
		}
		else {
			alert("Fill out all questions before submitting.");
		}
		return false; 
	}
}, 100);

function createSpiderChart(){
	const canvas = document.querySelector("#spider-chart");
	const options = {
		type: 'radar',
		data: {
			labels: ["Human Capital", "Intellectual Capital", "Asset Capital", "Process Capital", "Financial Capital"],
			datasets:[{
				data:[humanCapitalCalculator(),
					intellectualCapitalCalculator(),
					assetCapitalCalculator(),
					processCapitalCalculator(),
					financialCapitalCalculator()
				],
				borderColor: "rgba(42, 172, 53, 1.0)",
				backgroundColor: "rgba(42, 172, 53, 0.5)",
				pointBackgroundColor: "gba(42, 172, 53, 1.0)",
			}]
		},

		options: {	
			scales: {
				r: {
					angleLines: {
						display: false
					},
					suggestedMin: 0,
					suggestedMax: 100,
					ticks: {
						backdropColor: "rgba(255, 255, 255, 0.1)",
					},
				},
			},	
			layout: {
				padding: 0
			},
			aspectRatio: 1,
			plugins: {
				title: {
					display: true,
					text: "Key Metrics",
					color: "black",
					font: {
						size: 20
					},
				},
				legend: {
					display: false,
				},
			},
		},
	};
	const chart = new Chart(canvas.getContext("2d"), options);
} 

function humanCapitalCalculator() {
	return 89;
}

function intellectualCapitalCalculator() {
	return 84;
}

function assetCapitalCalculator() {
	return 78;
}

function processCapitalCalculator() {
	return 92;
}

function financialCapitalCalculator() {
	return 75;
}












