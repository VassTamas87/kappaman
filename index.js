const read = require("readline-sync");
const map = require("./map.js");
const table = require("table");
const chalk = require("chalk");
const term = require("terminal-kit").terminal;
const { processScopeQueue } = require("nextgen-events");
const { clear } = require("axel");
const items = ["🎮 Start", "📖 Manual", "🏆 Leaderboard", "❌ Quit"];
const move = require("./movement.js");
const mpg = require("mpg123");
const player = new mpg.MpgPlayer();
const CFonts = require("cfonts");
const fs = require("fs");
let enemytime;

const getLeaderBoard = () => {
  const fs = require("fs");
  const file = fs.readFileSync("./leader.csv").toString();
  const lines = file.replace(/\n/g, '').split(":");
  const arrayLead = [];
  for (let i = 0; i < lines.length -1; i++) {
    arrayLead.push(chalk.bold(lines[i]).split(";"));
  }
  return arrayLead;
};

const sortLeader = (arr) => {
  arr.sort((a, b) => a[1] - b[1]);

  return arr;
};

const main = () => {
  let data = read.question("⌨️  Enter your name blindly: ");

  player.stop();
  let start = new Date().getTime();
  let arr = map.addEnemy(
    map.addPlayer(
      map.brocGen(
        map.candyGen(
          map.doorGen(map.keyGen(map.brickGen(map.fillMap(map.generateMap()))))
        )
      )
    )
  );

  const interval = setInterval(() => {
    clear();
    map.printMap(arr);
    console.log();
    console.log(
      chalk.black.bold.bgWhite("👾 Lives left: ", move.life.value + " ")
    );
    move.movementEnemy1(arr);
    move.movementEnemy2(arr);
    move.movementEnemy3(arr);
    move.movementEnemy4(arr);
    move.movementEnemy5(arr);

    /////////////////////////////////////////////////////////////////////////////meghalás
    if (move.life.value < 1) {
      clear();
      term.drawImage("./images/gameover.jpg", {
        shrink: { width: 140, height: 1500 },
      });
      clearInterval(interval);
    }
    ////////////////////////////////////////////////////////////////////////////////győzelem
    if (move.castle.value === true) {
      clear();
      term.drawImage("./images/win.jpg", {
        shrink: { width: 140, height: 1500 },
      });

      clearInterval(interval);

      let stop = new Date().getTime();
      let timespent = (stop - start) / 1000;
      fs.appendFileSync("./leader.csv", data + ";" + timespent + " ;sec" + ":");
    }
  }, enemytime);
  /////////////////////////////////////////////////////////////////////////billentyű beolvasás
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.resume();
  stdin.setEncoding("utf8");
  stdin.on("data", (key) => {
    if (key === "w") {
      player.play("./sounds/step.mp3");
      move.movementW(arr);
    }
    if (key === "a") {
      move.movementA(arr);
      player.play("./sounds/step.mp3");
    }
    if (key === "s") {
      move.movementS(arr);
      player.play("./sounds/step.mp3");
    }
    if (key === "d") {
      player.play("./sounds/step.mp3");
      move.movementD(arr);
    }
    if (key === "i") {
      move.addBombUp(arr);
    }
    if (key === "k") {
      move.addBombDown(arr);
    }
    if (key === "j") {
      move.addBombLeft(arr);
    }
    if (key === "l") {
      move.addBombRight(arr);
    }
    if (key === "q") {
      process.exit();
    }
  });
};

const space = () => {
  term.drawImage("./images/logo1.jpg", { shrink: { width: 140, height: 1500 } });

  for (let i = 0; i < 120; i++) console.log();
};

const menu = () => {
  player.play("./sounds/title.mp3");

  ///////////////////////////////////////////////////////////////////////////fő menü
  term.singleColumnMenu(items, function (error, response) {
    if (response.selectedIndex === 0) {
      clear();
      term.drawImage("./images/logo1.jpg", {
        shrink: { width: 140, height: 1500 },
      });
      //////////////////////////////////////////////////////////////////nehézségi szint
      let items = ["🍼 Normal", "☠️  Hard", "🔙 Back to the menu"];
      term.singleColumnMenu(items, function (error, response) {
        if (response.selectedIndex === 0) {
          term.drawImage("./images/logo1.jpg", {
            shrink: { width: 140, height: 1500 },
          });
          clear();
          enemytime = 500;
          map.bricknum.value = 70;
          main();
        }
        if (response.selectedIndex === 1) {
          clear();
          enemytime = 50;
          map.bricknum.value = 150;
          main();
        }

        if (response.selectedIndex === 2) {
          clear();
          term.drawImage("./images/logo1.jpg", {
            shrink: { width: 140, height: 1500 },
          });
          return menu();
        }
      });
    }
    /////////////////////////////////////////////////////////////////////////////manual
    if (response.selectedIndex === 1) {
      clear();

      CFonts.say("Manual", {
        font: "3d",
        align: "center",
        colors: ["yellow"],
        background: "transparent",
        letterSpacing: 3,
        lineHeight: 2,
        space: 15,
        maxLength: "0",
        gradient: false,
        independentGradient: false,
        transitionGradient: false,
        env: "node",
      });

      for (let i = 0; i < 11; i++) {
        console.log("");
      }

      const array = [
        [
          "",
          chalk.bold.underline("KEYS"),
          chalk.bold.underline("FUNCTION"),
          "",
          chalk.bold.underline("ICONS"),
          chalk.bold.underline("COMMENT"),
        ],
        ["", chalk.bold.blue("[ W ]"), "Move up", "", "👾", "Player"],
        [
          "",
          chalk.bold.blue("[ S ]"),
          "Move down",
          "",
          "👹 👺 👻 👽 🤖",
          "Enemies",
        ],
        ["", chalk.bold.blue("[ A ]"), "Move left", "", "🧱", "Wall"],
        ["", chalk.bold.blue("[ D ]"), "Move right", "", "🎃", "Pumpkins"],
        ["", chalk.bold.blue("[ I ]"), "Plant bomb upwards", "", "💣", "Bomb"],
        [
          "",
          chalk.bold.blue("[ K ]"),
          "Plant bomb downwards",
          "",
          "🔑",
          "Key for the Castle",
        ],
        [
          "",
          chalk.bold.blue("[ J ]"),
          "Plant bomb left",
          "",
          "🏰",
          "Castle (Finish)",
        ],
        ["", chalk.bold.blue("[ L ]"), "Plant bomb right", "", "🍭", "Candy"],
        ["", chalk.bold.blue("[ Q ]"), "Exit game", "", "🥦", "Broccoli"],
      ];

      let config = {
        border: {
          topBody: ``,
          topJoin: ``,
          topLeft: ``,
          topRight: ``,
          bottomBody: ``,
          bottomJoin: ``,
          bottomLeft: ``,
          bottomRight: ``,
          bodyLeft: ``,
          bodyRight: ``,
          bodyJoin: ``,
          joinBody: ``,
          joinLeft: ``,
          joinRight: ``,
          joinJoin: ``,
        },
        columns: {
          0: {
            alignment: "center",
            width: 30,
          },
          1: {
            alignment: "center",
            width: 25,
          },
          2: {
            alignment: "center",
            width: 25,
          },
          3: {
            alignment: "center",
            width: 30,
          },
          4: {
            alignment: "center",
            width: 25,
          },
          5: {
            alignment: "center",
            width: 25,
          },
        },
      };
      console.log(table.table(array, config));

      let items = ["🔙 Back to the menu", "❌ Exit"];
      term.singleColumnMenu(items, function (error, response) {
        if (response.selectedIndex === 0) {
          term.drawImage("./images/logo1.jpg", {
            shrink: { width: 140, height: 1500 },
          });

          clear();
          return menu();
        }
        if (response.selectedIndex === 1) {
          clear();
          process.exit();
        }
      });
    }
    ///////////////////////////////////////////////////////////////////////////////////leaderboard
    if (response.selectedIndex === 2) {
      clear();
      CFonts.say("Leaderboard", {
        font: "block",
        align: "center",
        colors: ["yellow"],
        background: "transparent",
        letterSpacing: 2,
        lineHeight: 2,
        space: 2,
        maxLength: "0",
        gradient: false,
        independentGradient: false,
        transitionGradient: false,
        env: "node",
      });
      let config = {
        border: {
          topBody: ``,
          topJoin: ``,
          topLeft: ``,
          topRight: ``,
          bottomBody: ``,
          bottomJoin: ``,
          bottomLeft: ``,
          bottomRight: ``,
          bodyLeft: ``,
          bodyRight: ``,
          bodyJoin: ``,
          joinBody: ``,
          joinLeft: ``,
          joinRight: ``,
          joinJoin: ``,
        },
        columns: {
          0: {
            alignment: "center",
            width: 120,
          },
          1: {
            alignment: "right",
            width: 15,
          },
          2: {
            alignment: "left",
            width: 25,
          },
        },
      };
      console.log(table.table(sortLeader(getLeaderBoard()), config));

      let items = ["🔙 Back to the menu", "❌ Exit"];
      term.singleColumnMenu(items, function (error, response) {
        if (response.selectedIndex === 0) {
          term.drawImage("./images/logo1.jpg", {
            shrink: { width: 140, height: 1500 },
          });

          clear();
          return menu();
        }
        if (response.selectedIndex === 1) {
          clear();
          process.exit();
        }
      });
    }
    if (response.selectedIndex === 3) {
      clear();
      process.exit();
    }
  });
};

space();
menu();