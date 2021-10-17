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
`Internet has become a big part of our daily lives and most people could not even imagine the society today without it. Most countries have a significant 
amount of internet users <b>especially more developed countries </b> and the overall average of internet users 
per 100 people across all the countries are around 35 people which directly translates to <b> ~35 percent </b>.`;

let paragraph2 =
`Most individuals access the internet for variety of purposes, it can be categorized into few
purposes that are <b><span style="color:#4C78A8">Audios and Videos</span>, <span style="color:#F58518">Communication</span>,
<span style="color:#E45756">Education</span>, <span style="color:#72B7B2">Information</span>, <span style="color:#54A24B">Others</span></b>.
With no surprise, most people use the internet to  <b>search for 
<span style="color:#72B7B2"> information </span> </b>since online search engines are efficient and effective. 
`;

let paragraph3 =
`
Naturally people who use internet to get information will <b>use search engines </b> and google being
the most popular search engine has seen an <b> exponential increase in usage </b> over the decade.
`;

let paragraph4 =
`Due to the anonymity the Internet provides,
there are a lot of malicious activities online and the <b> prime example being cyberbullying </b>. Cyberbullying is very commonly 
seen on the internet especially in social media websites but surprisingly most of these actions are usually <b>not
purposely commited </b> but rather a result of <b> false information  </b> about the victim being spread.
`;

let paragraph5=
`
Cybercrime on the other hand, is a much more serious offense run by groups of criminals. 
These cybercrimes can come in all sorts of variety and <b>elder generation are typically targeted </b> as they are typically not
familiar with the online environment and have <b>better financial abilties </b> compared to younger generation.
`;

let paragraph6=
`
The other aspect that defines the Internet is definitely <b> social media </b>. It acts as a way of bridge
between people and connects people around the globe, allowing people to share their experiences and
stories at the touch of a button. 
`;

let mapTitle = "Global Internet users per 100 people";

document.getElementById("pg1").innerHTML= paragraph1;
document.getElementById("pg2").innerHTML= paragraph2;
document.getElementById("pg3").innerHTML= paragraph3;
document.getElementById("pg4").innerHTML= paragraph4;
document.getElementById("pg5").innerHTML= paragraph5;
document.getElementById("pg6").innerHTML= paragraph6;

document.getElementById("vis1title").innerHTML = mapTitle;
