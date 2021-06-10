const chalk = require("chalk");

let bricknum = { value: 0 };

const generateMap = () => {
  let arr = new Array(13);
  for (let i = 0; i < 13; i++) {
    arr[i] = new Array(31);
  }
  return arr;
};

const fillMap = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (i % 2 === 0 && j % 2 === 0) {
        arr[i][j] = {
          pic: "🧱",
          value: "",
        };
      } else {
        arr[i][j] = {
          pic: "",
          value: "",
        };
      }
      arr[i][0] = {
        pic: "🧱",
        value: "",
      };
      arr[i][arr[i].length - 1] = {
        pic: "🧱",
        value: "",
      };
      arr[0][j] = {
        pic: "🧱",
        value: "",
      };
      arr[arr.length - 1][j] = {
        pic: "🧱",
        value: "",
      };
    }
  }
  return arr;
};

const brickGen = (arr) => {
  let brickpos = [];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j].pic === "") {
        brickpos.push([i, j]);
      }
    }
  }
  while (count < bricknum.value) {
    let rand = brickpos[Math.floor(Math.random() * brickpos.length)];
    arr[rand[0]][rand[1]].pic = "🎃";
    count++;
  }
  arr[1][1].pic = "";
  arr[1][2].pic = "";
  arr[1][3].pic = "";
  arr[2][1].pic = "";
  arr[11][29].pic = "";
  arr[11][1].pic = "";
  arr[1][29].pic = "";
  arr[1][15].pic = "";
  arr[11][15].pic = "";

  return arr;
};

const keyGen = (arr) => {
  let keypos = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j].pic === "🎃") keypos.push([i, j]);
    }
  }
  let rand = keypos[Math.floor(Math.random() * keypos.length)];
  arr[rand[0]][rand[1]].value = "🔑";
  return arr;
};

const doorGen = (arr) => {
  let doorpos = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j].pic === "🎃" && arr[i][j].value !== "🔑")
        doorpos.push([i, j]);
    }
  }
  let rand = doorpos[Math.floor(Math.random() * doorpos.length)];
  arr[rand[0]][rand[1]].value = "🏰";
  return arr;
};

const candyGen = (arr) => {
  let candypos = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j].pic === "🎃" && arr[i][j].value !== "🔑" && arr[i][j].value !== "🏰")
        candypos.push([i, j]);
    }
  }
  let rand = candypos[Math.floor(Math.random() * candypos.length)];
  arr[rand[0]][rand[1]].value = "🍭";
  return arr;
};

const brocGen = (arr) => {
  let brocpos = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j].pic === "🎃" && arr[i][j].value !== "🔑" && arr[i][j].value !== "🏰" && arr[i][j].value !== "🍭")
        brocpos.push([i, j]);
    }
  }
  let rand = brocpos[Math.floor(Math.random() * brocpos.length)];
  arr[rand[0]][rand[1]].value = "🥦";
  return arr;
};

const addPlayer = (arr) => {
  arr[1][1].pic = "👾";
  return arr;
};

const addEnemy = (arr) => {
  arr[11][29].pic = "👹";
  arr[11][1].pic = "👺";
  arr[1][29].pic = "👻";
  arr[1][15].pic = "👽";
  arr[11][15].pic = "🤖";

  return arr;
};

const printMap = (arr) => {
  for (let j = 0; j < arr[0].length; j++) {
    if (arr[0][j].pic === "") {
      arr[0][j].pic = "⬛️";
    }
    process.stdout.write(arr[0][j].pic);
  }
  console.log();

  for (let j = 0; j < arr[1].length; j++) {
    if (arr[1][j].pic === "") {
      arr[1][j].pic = "⬛️";
    }
    process.stdout.write(arr[1][j].pic);
  }
  console.log();
  for (let j = 0; j < arr[2].length; j++) {
    if (arr[2][j].pic === "") {
      arr[2][j].pic = "⬛️";
    }
    process.stdout.write(arr[2][j].pic);
  }
  console.log();
  for (let j = 0; j < arr[3].length; j++) {
    if (arr[3][j].pic === "") {
      arr[3][j].pic = "⬛️";
    }
    process.stdout.write(arr[3][j].pic);
  }
  console.log();
  for (let j = 0; j < arr[4].length; j++) {
    if (arr[4][j].pic === "") {
      arr[4][j].pic = "⬛️";
    }
    process.stdout.write(arr[4][j].pic);
  }
  console.log();
  for (let j = 0; j < arr[5].length; j++) {
    if (arr[5][j].pic === "") {
      arr[5][j].pic = "⬛️";
    }
    process.stdout.write(arr[5][j].pic);
  }
  console.log();
  for (let j = 0; j < arr[6].length; j++) {
    if (arr[6][j].pic === "") {
      arr[6][j].pic = "⬛️";
    }
    process.stdout.write(arr[6][j].pic);
  }
  console.log();
  for (let j = 0; j < arr[7].length; j++) {
    if (arr[7][j].pic === "") {
      arr[7][j].pic = "⬛️";
    }
    process.stdout.write(arr[7][j].pic);
  }
  console.log();
  for (let j = 0; j < arr[8].length; j++) {
    if (arr[8][j].pic === "") {
      arr[8][j].pic = "⬛️";
    }
    process.stdout.write(arr[8][j].pic);
  }
  console.log();
  for (let j = 0; j < arr[9].length; j++) {
    if (arr[9][j].pic === "") {
      arr[9][j].pic = "⬛️";
    }
    process.stdout.write(arr[9][j].pic);
  }
  console.log();
  for (let j = 0; j < arr[10].length; j++) {
    if (arr[10][j].pic === "") {
      arr[10][j].pic = "⬛️";
    }
    process.stdout.write(arr[10][j].pic);
  }
  console.log();
  for (let j = 0; j < arr[11].length; j++) {
    if (arr[11][j].pic === "") {
      arr[11][j].pic = "⬛️";
    }
    process.stdout.write(arr[11][j].pic);
  }
  console.log();
  for (let j = 0; j < arr[12].length; j++) {
    if (arr[12][j].pic === "") {
      arr[12][j].pic = "⬛️";
    }
    process.stdout.write(arr[12][j].pic);
  }


  return arr;
};

module.exports = {
  generateMap,
  fillMap,
  brickGen,
  printMap,
  keyGen,
  doorGen,
  addPlayer,
  addEnemy,
  bricknum,
  candyGen,
  brocGen
};
