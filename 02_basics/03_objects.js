//******************************************Objects Literals*****************************************
const objectLitrals = {};

console.log(objectLitrals);

//******************************************Objects Literals Strings*****************************************

const objectsOne = {
  fruit1: "Apple",
  fruit2: "Banana",
  fruit3: "orange",
};

// console.log(objectsOne);
// console.log(typeof objectsOne);
// console.log(objectsOne.fruit1);
// console.log(typeof objectsOne.fruit1);
// console.log(objectsOne["fruit1"]);
// console.log(typeof objectsOne["fruit1"]);

//******************************************Objects Literals Numbers By Numbers Key*************************************

const objectTwo = {
  1: 12,
  2: 13,
  3: 14,
};

// console.log(objectTwo);
// console.log(typeof objectTwo);
// console.log(objectTwo[1]);
// console.log(typeof objectTwo[2]);

//******************************************Objects Literals Numbers*****************************************

const objectThree = {
  fruitPcs1: 10,
  fruitPcs2: 20,
  fruitPcs3: 30,
};

// console.log(objectThree);
// console.log(typeof objectThree);
// console.log(objectThree.fruitPcs1);
// console.log(typeof objectThree.fruitPcs1);
// console.log(objectThree["fruitPcs1"]);
// console.log(typeof objectThree["fruitPcs1"]);

//******************************************Objects Literals Boolean*****************************************

const objectFour = {
  fruitReality1: true,
  fruitReality2: false,
};

// console.log(objectFour);
// console.log(typeof objectFour);
// console.log(objectFour.fruitReality1);
// console.log(typeof objectFour.fruitReality1);
// console.log(objectFour["fruitReality1"]);
// console.log(typeof objectFour["fruitReality1"]);

//******************************************Objects Literals Null*****************************************

const objectFive = {
  fruitPacked: null,
};

// console.log(objectFive);
// console.log(typeof objectFive);
// console.log(objectFive.fruitPacked);
// console.log(typeof objectFive.fruitPacked);
// console.log(objectFive["fruitPacked"]);
// console.log(typeof objectFive["fruitPacked"]);

//******************************************Objects Literals Undefined*****************************************

const objectSix = {
  fruitDefined: undefined,
};

// console.log(objectSix);
// console.log(typeof objectSix);
// console.log(objectSix.fruitDefined);
// console.log(typeof objectSix.fruitDefined);
// console.log(objectSix["fruitDefined"]);
// console.log(typeof objectSix["fruitDefined"]);

//******************************************Objects Literals BigInit*****************************************

const objectSeven = {
  fruitBigInit: 4675476n,
};

// console.log(objectSeven);
// console.log(typeof objectSeven);
// console.log(objectSeven.fruitBigInit);
// console.log(typeof objectSeven.fruitBigInit);
// console.log(objectSeven["fruitBigInit"]);
// console.log(typeof objectSeven["fruitBigInit"]);

//******************************************Objects Literals Symbol*****************************************

const objectEight = {
  fruitSymbol: Symbol("key1"),
};

// console.log(objectEight);
// console.log(typeof objectEight);
// console.log(objectEight.fruitSymbol);
// console.log(typeof objectEight.fruitSymbol);
// console.log(objectEight["fruitSymbol"]);
// console.log(typeof objectEight["fruitSymbol"]);

//******************************************Objects Literals String Outside Variable*********************************

const objectNinevar = "Raju";
const objectNine = {
  var1: objectNinevar,
};

// console.log(objectNine);
// console.log(typeof objectNine);
// console.log(objectNine.var1);
// console.log(typeof objectNine.var1);

//******************************************Objects Literals Convert In Number************************************

const objectTenVar = "33";
const objectTen = {
  var1: Number(objectTenVar),
};

// console.log(objectTen.var1);
// console.log(typeof objectTen.var1);

//******************************************Objects Literals Function Without Name************************************

const objectEleven = {
  fruitFuction: function () {
    describe = "My Name is Abej Rijwi";
    return describe;
  },
};

// console.log(objectEleven.fruitFuction());
// console.log(typeof objectEleven.fruitFuction);

// console.log(objectEleven["fruitFuction"]());
// console.log(typeof objectEleven["fruitFuction"]());

//******************************************Objects Literals Function With Name**************************************

const objectTwelth = {
  fruitFuctionone: function game() {
    return 1 + 2;
  },
};

// console.log(objectTwelth.fruitFuctionone());
// console.log(typeof objectTwelth.fruitFuctionone());

// console.log(objectTwelth["fruitFuctionone"]());
// console.log(typeof objectTwelth["fruitFuctionone"]());

//******************************************Objects Literals Arrays*******************************************

const objectArrays = {
  objectArrayone: [24, 25, 26],
  objectArraytwo: ["Ram", "Syam", "Jam"],
};

// console.log(objectArrays.objectArrayone);
// console.log(typeof objectArrays.objectArrayone);
// console.log(objectArrays.objectArrayone[0]);
// console.log(typeof objectArrays.objectArrayone[0]);

// console.log(objectArrays.objectArraytwo);
// console.log(typeof objectArrays.objectArraytwo);
// console.log(objectArrays.objectArraytwo[0]);
// console.log(typeof objectArrays.objectArraytwo[0]);

// console.log(objectArrays["objectArrayone"][0]);
// console.log(typeof objectArrays["objectArrayone"][0]);
// console.log(objectArrays["objectArraytwo"][0]);
// console.log(typeof objectArrays["objectArraytwo"][0]);

//******************************************Objects Literals Objects*******************************************

const objectsObjects = {
  one: { one1: 50, two2: "Samay" },
};

// console.log(objectsObjects.one.one1);
// console.log(typeof objectsObjects.one.one1);
// console.log(objectsObjects["one"]["one1"]);
// console.log(typeof objectsObjects["one"]["one1"]);

// console.log(objectsObjects.one.two2);
// console.log(typeof objectsObjects.one.two2);
// console.log(objectsObjects["one"]["two2"]);
// console.log(typeof objectsObjects["one"]["two2"]);

//******************************************Objects Literals All Datatypes*****************************************

const objectThirteen = {
  one: "Abej",
  two: 123,
  three: 6475743657464n,
  four: true,
  five: null,
  six: undefined,
  seven: Symbol("key"),
  eight: [1, 2, 3],
  nine: {
    nineObject: "Object Defined",
  },
  ten: function () {
    console.log("Function Defined");
  },
};

// console.log(objectThirteen);
// console.log(typeof objectThirteen);

// console.log(objectThirteen.one);
// console.log(typeof objectThirteen.one);

// console.log(objectThirteen["one"]);
// console.log(typeof objectThirteen["one"]);

// console.log(objectThirteen.two);
// console.log(typeof objectThirteen.two);

// console.log(objectThirteen["two"]);
// console.log(typeof objectThirteen["two"]);

// console.log(objectThirteen.three);
// console.log(typeof objectThirteen.three);

// console.log(objectThirteen["three"]);
// console.log(typeof objectThirteen["three"]);

// console.log(objectThirteen.four);
// console.log(typeof objectThirteen.four);

// console.log(objectThirteen["four"]);
// console.log(typeof objectThirteen["four"]);

// console.log(objectThirteen.five);
// console.log(typeof objectThirteen.five);

// console.log(objectThirteen["five"]);
// console.log(typeof objectThirteen["five"]);

// console.log(objectThirteen.six);
// console.log(typeof objectThirteen.six);

// console.log(objectThirteen["six"]);
// console.log(typeof objectThirteen["six"]);

// console.log(objectThirteen.seven);
// console.log(typeof objectThirteen.seven);

// console.log(objectThirteen["seven"]);
// console.log(typeof objectThirteen["seven"]);

// console.log(objectThirteen.eight);
// console.log(typeof objectThirteen.eight);

// console.log(objectThirteen.eight[0]);
// console.log(typeof objectThirteen.eight[0]);

// console.log(objectThirteen["eight"]);
// console.log(typeof objectThirteen["eight"]);

// console.log(objectThirteen.nine);
// console.log(typeof objectThirteen.nine);

// console.log(objectThirteen.nine["nineObject"]);
// console.log(typeof objectThirteen.nine["nineObject"]);

// console.log(objectThirteen["nine"]);
// console.log(typeof objectThirteen["nine"]);

// console.log(objectThirteen.ten());
// console.log(typeof objectThirteen.ten);

//******************************************Objects Literals Change Values All DataTypes********************************

const fourteen = {
  one: 22,
  two: "General",
  three: true,
  four: [12, 13, 14],
  five: { one1: 100, two2: "Game" },
  six: function () {
    return "Hello JS";
  },
};

//******************************************Objects Literals Change Values Number**************************************

// console.log(fourteen.one);
// fourteen.one = 25;
// console.log(fourteen.one);

// console.log(fourteen["one"]);
// fourteen["one"] = 26;
// console.log(fourteen["one"]);

//******************************************Objects Literals Change Values String**************************************

// console.log(fourteen.two);
// fourteen.two = "Reservation";
// console.log(fourteen.two);

// console.log(fourteen["two"]);
// fourteen["two"] = "Custom";
// console.log(fourteen["two"]);

//******************************************Objects Literals Change Values Boolean***********************************

// console.log(fourteen.three);
// fourteen.three = false;
// console.log(fourteen.three);

// console.log(fourteen["three"]);
// fourteen["three"] = false;
// console.log(fourteen["three"]);

//******************************************Objects Literals Change Values Arrays**************************************

// console.log(fourteen.four[0]);
// fourteen.four[0] = 20;
// console.log(fourteen.four[0]);

// console.log(fourteen["four"][0]);
// fourteen["four"][0] = 21;
// console.log(fourteen["four"][0]);

//******************************************Objects Literals Change Values Obejects************************************

// console.log(fourteen.five.one1);
// fourteen.five.one1 = 105;
// console.log(fourteen.five.one1);

// console.log(fourteen["five"]["one1"]);
// fourteen["five"]["one1"] = 106;
// console.log(fourteen["five"]["one1"]);

//******************************************Objects Literals Change Values Function************************************

// console.log(fourteen.six());
fourteen.six = function () {
  return `My Name Raju Rijwi ${this.one}`;
};
// console.log(fourteen.six());
// console.log(typeof fourteen.six());

//******************************************Objects Literals Do Not Changes Obejects************************************

const fiftyn = {
  one: 22,
};
// console.log(fiftyn);
// Object.freeze(fiftyn);
// fiftyn.one = 26;
// console.log(fiftyn);
