//************************************************Switch Statement by number*************************/

const month = 3;
switch (month) {
  case 1:
    console.log("this is jan ");
    break;
  case 2:
    console.log("this is feb ");
    break;
  case 3:
    // console.log("this is march ");
    break;
  case 4:
    console.log("this is apr ");
    break;
  case 5:
    console.log("this is may ");
    break;
  default:
    console.log("this is default ");
    break;
}

//*******************************************Switch Statement by string*****************************************/

const months = "apr";
switch (months) {
  case "jan":
    console.log("jan");
    break;
  case "feb":
    console.log("feb");
    break;
  case "march":
    console.log("march");
    break;
  case "apr":
    // console.log("apr");
    break;
  case "may":
    console.log("may");
    break;
  default:
    console.log("default");
    break;
}

//*******************************************Switch Statement default*****************************************/

const defaultValue = "defaultvalue";
switch (defaultValue) {
  case "jan":
    console.log("jan");
    break;
  case "feb":
    console.log("feb");
    break;
  case "march":
    console.log("march");
    break;
  case "apr":
    console.log("apr");
    break;
  case "may":
    console.log("may");
    break;
  default:
    console.log("default");
    break;
}
