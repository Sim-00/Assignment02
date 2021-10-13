var cyberbullyDataset = "./json/cyberbullyingv2.json";
var purposeOfInternetDataset = "./json/purposeOfInternet.json";
var cybercrimeDataset = "./json/cybercrime.json";
var globalInternetDataset = "./json/global_internet.json";
var googleSearchDataset = "./json/googleSearch.json";

vegaEmbed('#vis1', globalInternetDataset);
vegaEmbed('#vis2', purposeOfInternetDataset);
vegaEmbed('#vis3', googleSearchDataset);
vegaEmbed('#vis4', cyberbullyDataset);
vegaEmbed('#vis5', cybercrimeDataset);

let title = `The good and bad of Internet`;

document.getElementById("title").innerHTML = title;

let paragraph1 = 
`Internet has become a big part of our daily lives despite only having a history of few decades and it 
knows no limit when it comes to development. As shown in the map above,most countries have a significant 
amount of internet users especially more developed countries and the overall average of internet users 
per 100 people across all the countries are around 35 people which directly translates to ~35 percent.`;

let paragraph2 =
`Even though most individuals access the internet for variety of reasons, it can be categorized into few
general purposes as shown in the piechart. With no surprise, most people use the internet to search for 
information since online search engines are efficient and effective. 
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

document.getElementById("pg1").innerHTML= paragraph1;
document.getElementById("pg2").innerHTML= paragraph2;
document.getElementById("pg3").innerHTML= paragraph3;
document.getElementById("pg4").innerHTML= paragraph4;
document.getElementById("pg5").innerHTML= paragraph5;