var cyberbullyDataset = "./json/cyberbullying.json";
var purposeOfInternetDataset = "./json/purposeOfInternet.json";
var cybercrimeDataset = "./json/cybercrime.json";
var globalInternetDataset = "./json/global_internet.json";
var googleSearchDataset = "./json/googleSearch.json";
var smuDataSet = "./json/socialMediaUsers.json";
var vgLegendDataset = "./json/global_internet_legend.json";

vegaEmbed('#vis1', globalInternetDataset);
vegaEmbed('#vis2', purposeOfInternetDataset);
vegaEmbed('#vis3', googleSearchDataset);
vegaEmbed('#vis4', cyberbullyDataset);
vegaEmbed('#vis5', cybercrimeDataset);
vegaEmbed('#vis6', smuDataSet);
vegaEmbed('#vis1legend', vgLegendDataset);

let title = `The good and bad of Internet`;

document.getElementById("title").innerHTML = title;

let paragraph1 = 
`Internet has become a big part of our daily lives despite only having a history of few decades and it 
knows no limit when it comes to development. Most countries have a significant 
amount of internet users <b><b> especially more developed countries </b></b> and the overall average of internet users 
per 100 people across all the countries are around 35 people which directly translates to <b><b> ~35 percent </b></b>.`;

let paragraph2 =
`Even though most individuals access the internet for variety of reasons, it can be categorized into few
purposes that are <b><span style="color:#4C78A8">Audios and Videos</span>, <span style="color:#F58518">Communication</span>,
<span style="color:#E45756">Education</span>, <span style="color:#72B7B2">Information</span>, <span style="color:#54A24B">Others</span></b>.
With no surprise, most people use the internet to  <b><b>search for 
<span style="color:#72B7B2"> information </span> </b></b> since online search engines are efficient and effective. 
`;

let paragraph3 =
`
Naturally people who use internet to get information will utilize search engines for it and google being
the most popular search engine has seen an exponential increase in usage.
`;

let paragraph4 =
`Despite how convenient internet is and all the advantages considered, due to the anonymity it can provide,
there are a lot of online activities that are malicious such as cyberbullying. Cyberbullying is very commonly 
seen on the internet especially in social media websites and these actions in a lot of time are not intentionally
done because of the spread of false information and the ease of degrading a stranger.
`;

let paragraph5=
`
Cybercrime on the other hand, is a much more serious offense as it integrates real world
crimes and typically involves money. These cybercrimes can come in all sorts of variety such as
identity theft, phishing, fraud, etc. Older generation are typically targeted as they are typically not
familiar with the online environment and have better financial abilties compared to younger generation.
`;

let paragraph6=
`
Cybercrime on the other hand, is a much more serious offense as it integrates real world
crimes and typically involves money. These cybercrimes can come in all sorts of variety such as
identity theft, phishing, fraud, etc. Older generation are typically targeted as they are typically not
familiar with the online environment and have better financial abilties compared to younger generation.
`;

let mapTitle = "Global Internet users per 100 people";

document.getElementById("pg1").innerHTML= paragraph1;
document.getElementById("pg2").innerHTML= paragraph2;
document.getElementById("pg3").innerHTML= paragraph3;
document.getElementById("pg4").innerHTML= paragraph4;
document.getElementById("pg5").innerHTML= paragraph5;
document.getElementById("pg6").innerHTML= paragraph6;

document.getElementById("vis1title").innerHTML = mapTitle;

// {
//     "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
//     "width": "container",
//     "height": 500,
//     "title": {"text": ["Global Internet users per 100 people"]},
//     "projection": {"type": "mercator"},
//     "data": {
//         "url": "./json/global.topojson",
//         "format": {"type": "topojson", "feature": "global"}
//     },
//     "transform": [
//         {
//             "lookup": "properties.name",
//             "from": {
//                 "data": {
//                     "url": "./Datasets/gapminder_internet.csv"
//                 },
//                 "key": "country",
//                 "fields": ["internetuserate"]
//             }
//         }
//     ],
//     "layer":[
//         {
//             "transform": [{
//                 "calculate": "'Data is not available in ' + datum.properties.name", "as": "note"
//             }],
//             "mark": {"type": "geoshape", "color":"lightgray", "stroke":"white"},
//             "encoding": {
//                 "tooltip":{
//                     "field": "note",
//                     "title": "note"
//                 }
//             }
//         },
//         {
//             "mark": {"type": "geoshape", "stroke":"black"},
//             "encoding": {
//                 "color": {
//                     "field": "internetuserate",
//                     "type": "quantitative",
//                     "title": "Internet user (per 100 people)"
//                 },
//                 "tooltip": [{
//                     "field":"properties.name",
//                     "title": "Country"
//                 },{   
//                     "field": "internetuserate",
//                     "type": "quantitative",
//                     "title": "Internet users (per 100 people)",
//                     "format": ".1f"
//                 }]
//             }
//         }
//     ],
//     "config": {
//         "background":"transparent"
//     }

// }