<!DOCTYPE html>
<html>
<head>
<title>Transport | Travox</title>
<link rel="stylesheet" href="tourist.css">
</head>

<body>

<div class="page">
<h1>🚕 Transport Estimator</h1>

<input placeholder="Pickup">
<input placeholder="Drop">
<button onclick="calc()">Search</button>

<div class="features" id="rides"></div>
</div>

<script>
function calc(){
let rides=[
{type:"Auto",price:120},
{type:"Mini",price:200},
{type:"Sedan",price:350}
];

let min=Math.min(...rides.map(r=>r.price));

let html="";
rides.forEach(r=>{
html+=`
<div class="feature-card">
<h3>${r.type}</h3>
<p>₹${r.price}</p>
${r.price==min?"<b>Cheapest</b>":""}
</div>`;
});

document.getElementById("rides").innerHTML=html;
}
</script>

</body>
</html>