let fs = require('fs')


$oil_market = [
  {name:"PetroChina",ch:"-0.57",sell:"3.470",buy:"",low:"",high:""},
  {name:"Antero Resources",ch:"-0.16",sell:"31.756",buy:"",low:"",high:""},
  {name:"exxon mobil",ch:"+1.42",sell:"82.94",buy:"83.44",low:"81.76",high:"85.03"},
  {name:"lukoil",ch:"-0.83",sell:"5.95",buy:"6.25",low:"5.32",high:"7.01"},
  {name:"shell plc",ch:"0.04",sell:"22.830",buy:"22.905",low:"22.810",high:"22.998"},
  {name:"rosenelt",ch:"0",sell:"0.5580",buy:"0.5690",low:"0.5560",high:"0.5770"},
  {name:"BW LPG",ch:"0.03",sell:"68.95",buy:"69.35",low:"67.34",high:"70.21"},
  {name:"fegro",ch:"-0.09",sell:"11.460",buy:"11.520",low:"11.440",high:"11.978"},
  {name:"viper energy partners LP",ch:"-0.16",sell:"24.82",buy:"24.95",low:"23.99",high:"24.99"},
  {name:"National oilwell",ch:"-0.32",sell:"14.06",buy:"14.15",low:"13.93",high:"14.56"},
  {name:"lundin petroleum",ch:"-0.03",sell:"7.666",buy:"7.700",low:"7.612",high:"7.812"},
  {name:"ernegean oil & gas",ch:"-0.10",sell:"10.013",buy:"10.107",low:"10.009",high:"10.148"},
  {name:"valero",ch:"-0.09",sell:"100.56",buy:"101.02",low:"100.12",high:"101.45"},
  {name:"southwestern energy",ch:"-0.36",sell:"5.567",buy:"5.643",low:"5.478",high:"5.781"},
  {name:"marathon oil",ch:"-0.10",sell:"20.37",buy:"20.45",low:"20.26",high:"20.67"},
  {name:"petrobras",ch:"-0.09",sell:"10.87",buy:"10.99",low:"10.78",high:"11.17"},
  {name:"PAA",ch:"0",sell:"9.82",buy:"9.90",low:"9.65",high:"10.13"},
  {name:"Repsol",ch:"0",sell:"11.73",buy:"11.78",low:"11.67",high:"11.98"},
  {name:"sm energy",ch:"0",sell:"31.756",buy:"31.864",low:"31.646",high:"31.877"},
  {name:"Eog",ch:"0.09",sell:"94.92",buy:"95.32",low:"92.80",high:"97.45"},
  {name:"frontline",ch:"0.06",sell:"85.50",buy:"85.95",low:"84.35",high:"87.99"},
  {name:"BW offshore ",ch:"-0.20",sell:"24.45",buy:"24.90",low:"23.30",high:"26.95"},
  {name:"continentil reso",ch:"0.02",sell:"63.02",buy:"63.30",low:"62.40",high:"64.45"},
  {name:"DCC",ch:"0",sell:"51.33",buy:"51.50",low:"50.20",high:"52.45"},
  {name:"Devon",ch:"-0.02",sell:"51.33",buy:"51.49",low:"50.20",high:"52.60"},
  {name:"Dno",ch:"0.08",sell:"12.07",buy:"12.16",low:"11.05",high:"12.30"},
  {name:"Apache",ch:"-0.41",sell:"31.46",buy:"31.88",low:"30.30",high:"33.97"}
]


let file = './ne.json'

let js = JSON.stringify($oil_market)

fs.writeFileSync(file, js)