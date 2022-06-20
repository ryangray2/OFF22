var anthonyDavis = {
  name: "Anthony Davis",
  pos: "PF",
  sal: 37980720,
  option: "none",
  guaranteed: true,
  wA: 0,
  img: ""
};


var exampleOffer = {
  otherTeam: "Lakers",
  receiveText: ["Anthony Davis"],
  giveText: ["Julius Randle", "Evan Fournier", "2023 Round 1"],
  pickText: ["2023 Round 1"],
  receiveIndex: [],
  giveIndex: [],
  receivePlayer: [anthonyDavis],
  givePlayer: [juliusRandle, evanFournier]
}

var rudyGobert = {
  name: "Rudy Gobert",
  pos: "C",
  sal: 38172414,
  option: "none",
  guaranteed: true,
  wA: 10,
  img: ""
};

var rudyOffer = {
  otherTeam: "Jazz",
  receiveText: ["Rudy Gobert"],
  giveText: ["Derrick Rose", "Evan Fournier", "Cam Reddish", "2023 Round 1", "2023 Round 1 (DAL)"],
  pickText: ["2023 Round 1", "2023 Round 1 (DAL)"],
  receiveIndex: [],
  giveIndex: [],
  receivePlayer: [rudyGobert],
  givePlayer: [derrickRose, evanFournier, camReddish]
}

var mylesTurner = {
  name: "Myles Turner",
  pos: "C",
  sal: 17500000,
  option: "none",
  guaranteed: true,
  wA: 3.1,
  img: ""
};

var mylesOffer = {
  otherTeam: "Pacers",
  receiveText: ["Myles Turner"],
  giveText: ["Cam Reddish", "Alec Burks", "2023 Round 1 (DAL)"],
  pickText: ["2023 Round 1 (DAL)"],
  receiveIndex: [],
  giveIndex: [],
  receivePlayer: [mylesTurner],
  givePlayer: [camReddish, alecBurks]
}

var donovanMitchell = {
  name: "Donovan Mitchell",
  pos: "SG",
  sal: 30351780,
  option: "none",
  guaranteed: true,
  wA: 7.2,
  img: ""
};

var donovanOffer = {
  otherTeam: "Jazz",
  receiveText: ["Donovan Mitchell"],
  giveText: ["Julius Randle", "Immanuel Quickley", "Quentin Grimes", "2023 Round 1", "2023 Round 1 (DAL)", "2025 Round 1"],
  pickText: ["2023 Round 1", "2023 Round 1 (DAL)", "2025 Round 1"],
  receiveIndex: [],
  giveIndex: [],
  receivePlayer: [donovanMitchell],
  givePlayer: [juliusRandle, immanuelQuickley, quentinGrimes]
}

var russellWestbrook = {
name: 'Russell Westbrook',
pos: 'PG',
type: 'PO',
age: '33.4',
sal: 47063478,
guaranteed: true,
years: 0,
odds: 0,
wA: 2.7,
img: ''
};

var westbrookOffer = {
  otherTeam: "Lakers",
  receiveText: ["Russell Westbrook", "2027 Round 1"],
  giveText: ["Julius Randle", "Evan Fournier", "2023 Round 2"],
  pickText: ["2023 Round 2"],
  receiveIndex: [],
  giveIndex: [],
  receivePlayer: [russellWestbrook],
  givePlayer: [juliusRandle, evanFournier]
}

var terryRozier = {
name: 'Terry Rozier',
pos: 'PG',
sal: 21486316,
guaranteed: true,
wA: 5.2,
img: ''
};

var rozierOffer = {
  otherTeam: "Hornets",
  receiveText: ["Terry Rozier"],
  giveText: ["Nerlens Noel", "Alec Burks", "2023 Round 1 (DAL)"],
  pickText: ["2023 Round 1 (DAL)"],
  receiveIndex: [],
  giveIndex: [],
  receivePlayer: [terryRozier],
  givePlayer: [nerlensNoel, alecBurks]
}

var stevenAdams = {
  name: "Steven Adams",
  pos: "C",
  sal: 17926829,
  option: "none",
  guaranteed: true,
  wA: 3.5,
  img: ""
};

var brandonClarke = {
  name: "Brandon Clarke",
  pos: "PF",
  sal: 4343920,
  option: "none",
  guaranteed: true,
  wA: 5,
  img: ""
};

var grizzliesOffer = {
  otherTeam: "Grizzlies",
  receiveText: ["Steven Adams", "Brandon Clarke"],
  giveText: ["Julius Randle"],
  pickText: [],
  receiveIndex: [],
  giveIndex: [],
  receivePlayer: [stevenAdams, brandonClarke],
  givePlayer: [juliusRandle]
}

var kyrieIrving = {
name: 'Kyrie Irving',
pos: 'PG',
age: '30.1',
sal: 45000000,
guaranteed: true,
wA: 7.4,
img: ''
};

var kyrieOffer = {
  otherTeam: "Nets",
  receiveText: ["Kyrie Irving"],
  giveText: ["Evan Fournier", "Alec Burks", "Nerlens Noel", "Kemba Walker", "2023 Round 1"],
  pickText: ["2023 Round 1"],
  receiveIndex: [],
  giveIndex: [],
  receivePlayer: [kyrieIrving],
  givePlayer: [evanFournier, alecBurks, nerlensNoel, kembaWalker]
}


var knicksTrades = [mylesOffer, donovanOffer, rudyOffer, westbrookOffer, rozierOffer, grizzliesOffer, kyrieOffer];




///////////////////////////////////////

var ericBledsoe = {
  name: "Eric Bledsoe",
  pos: "SG",
  sal: 19375000,
  option: "none",
  guaranteed: true,
  wA: 1.3,
  img: ""
};

var keonJohnson = {
  name: "Keon Johnson",
  pos: "SG",
  sal: 2681040,
  option: "none",
  guaranteed: true,
  wA: 0,
  img: ""
};

var gregBrownIII = {
  name: "Greg Brown III",
  pos: "PF",
  sal: 1563518,
  option: "none",
  guaranteed: true,
  wA: 0.4,
  img: ""
};

var sevenOffer = {
  otherTeam: "Trail Blazers",
  receiveText: ["Pick #7", "Keon Johnson", "Greg Brown III"],
  giveText: ["Obi Toppin", "Pick #11", "2023 Round 1 (DAL)"],
  pickText: ["Pick #11", "2023 Round 1 (DAL)"],
  receiveIndex: [6],
  giveIndex: [10],
  receivePlayer: [keonJohnson, gregBrownIII],
  givePlayer: [obiToppin]
}

var kellyOlynyk = {
  name: "Kelly Olynyk",
  pos: "C",
  sal: 12804878,
  option: "none",
  guaranteed: true,
  wA: 1.6,
  img: ""
};

var fiveOffer = {
  otherTeam: "Pistons",
  receiveText: ["Pick #5", "Kelly Olynyk"],
  giveText: ["Pick #11", "Cam Reddish", "Obi Toppin"],
  pickText: ["Pick #11"],
  receiveIndex: [4],
  giveIndex: [10],
  receivePlayer: [kellyOlynyk],
  givePlayer: [camReddish, obiToppin]
}

var malcolmBrogdon = {
  name: "Malcolm Brogdon",
  pos: "PG",
  sal: 22600000,
  option: "none",
  guaranteed: true,
  wA: 4.2,
  img: ""
};

var sixOffer = {
  otherTeam: "Pacers",
  receiveText: ["Pick #6", "Malcolm Brogdon"],
  giveText: ["Pick #11", "2023 Round 1 (DAL)", "2024 Round 1", "Alec Burks", "Nerlens Noel", "Immanuel Quickley"],
  pickText: ["Pick #11", "2023 Round 1 (DAL)", "2024 Round 1"],
  receiveIndex: [5],
  giveIndex: [10],
  receivePlayer: [kellyOlynyk],
  givePlayer: [alecBurks, nerlensNoel, immanuelQuickley]
}

var fourOffer = {
  otherTeam: "Kings",
  receiveText: ["Pick #4"],
  giveText: ["Pick #11", "2023 Round 1 (DAL)", "2024 Round 1", "2027 Round 1"],
  pickText: ["Pick #11", "2023 Round 1 (DAL)", "2024 Round 1", "2027 Round 1"],
  receiveIndex: [3],
  giveIndex: [10],
  receivePlayer: [],
  givePlayer: []
}

var collinSexton = {
  name: "Collin Sexton",
  pos: "PG",
  sal: 20000000,
  option: "none",
  guaranteed: true,
  wA: 3.5,
  img: ""
};

var sextonOffer = {
  otherTeam: "Cavaliers",
  receiveText: ["Collin Sexton"],
  giveText: ["Pick #11", "Evan Fournier"],
  pickText: ["Pick #11"],
  receiveIndex: [],
  giveIndex: [10],
  receivePlayer: [collinSexton],
  givePlayer: [evanFournier]
}


var knicksDraftTrades = [sevenOffer, fiveOffer, sixOffer, fourOffer, sextonOffer]
