let data = require("./skills5.json");

let betterData = data.map((el) => {
  let s;
  if (el.FIGString[0] == "4" || el.FIGString[0] == "8") {
    s = el.FIGString.substring(1);
  } else {
    s = el.FIGString.substring(2);
  }

  let direction =
    ([...s]
      .slice(0, -1)
      .map((c) => (c == "-" ? 0 : c))
      .map((c) => parseInt(c))
      .reduce((a, b) => a + b) +
      (el.blind ? 1 : 0)) %
      2 ==
    0
      ? "backward"
      : "forward";

  return { ...el, direction: direction };
});

//console.log(JSON.stringify(betterData));

const fs = require("fs");

fs.writeFile("./skills6.json", JSON.stringify(betterData), function (err) {
  if (err) {
    return console.log(err);
  }
  console.log("The file was saved!");
});
