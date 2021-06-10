const chalk = require("chalk");
const map = require("./map");
const mpg = require("mpg123");
const term = require("terminal-kit").terminal;
const player = new mpg.MpgPlayer();

let life = { value: 3 };
let key = false;
let castle = { value: false };

const getPlayerpos = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j].pic === "👾") {
        return [i, j];
      }
    }
  }
  arr[1][1].pic = "👾";
  return arr;
};

const movementS = (arr) => {
  let index = getPlayerpos(arr);
  let i = index[0];
  let j = index[1];

  if (
    (arr[i + 1] && arr[i + 1][j].pic === "⬛️") ||
    (arr[i + 1] && arr[i + 1][j].pic === "👹") ||
    (arr[i + 1] && arr[i + 1][j].pic === "👺") ||
    (arr[i + 1] && arr[i + 1][j].pic === "👻") ||
    (arr[i + 1] && arr[i + 1][j].pic === "👽") ||
    (arr[i + 1] && arr[i + 1][j].pic === "🤖") ||
    (arr[i + 1] && arr[i + 1][j].pic === "🔑") ||
    (arr[i + 1] && arr[i + 1][j].pic === "🏰" && key === true) ||
    (arr[i + 1] && arr[i + 1][j].pic === "🥦") ||
    (arr[i + 1] && arr[i + 1][j].pic === "🍭")
  ) {
    if (arr[i + 1][j].pic === "👹") {
      arr[i + 1][j].pic = "👹";
      arr[i][j].pic = "⬛️";
      arr[1][1].pic = "👾";
      player.play("./sounds/lifelost.mp3");
      life.value--;
      if (life.value < 1) {
        player.play("./sounds/gameover.mp3");
      }
    } else if (arr[i + 1][j].pic === "👺") {
      arr[i + 1][j].pic = "👺";
      arr[i][j].pic = "⬛️";
      arr[1][1].pic = "👾";
      player.play("./sounds/lifelost.mp3");
      life.value--;
      if (life.value < 1) {
        player.play("./sounds/gameover.mp3");
      }
    } else if (arr[i + 1][j].pic === "👻") {
      arr[i + 1][j].pic = "👻";
      arr[i][j].pic = "⬛️";
      arr[1][1].pic = "👾";
      player.play("./sounds/lifelost.mp3");
      life.value--;
      if (life.value < 1) {
        player.play("./sounds/gameover.mp3");
      }
    } else if (arr[i + 1][j].pic === "👽") {
      arr[i + 1][j].pic = "👽";
      arr[i][j].pic = "⬛️";
      arr[1][1].pic = "👾";
      player.play("./sounds/lifelost.mp3");
      life.value--;
      if (life.value < 1) {
        player.play("./sounds/gameover.mp3");
      }
    } else if (arr[i + 1][j].pic === "🤖") {
      arr[i + 1][j].pic = "🤖";
      arr[i][j].pic = "⬛️";
      arr[1][1].pic = "👾";
      player.play("./sounds/lifelost.mp3");
      life.value--;
      if (life.value < 1) {
        player.play("./sounds/gameover.mp3");
      }
    } else if (arr[i + 1][j].pic === "🔑") {
      arr[i][j].pic = "⬛️";
      arr[i + 1][j].pic = "👾";
      arr[i + 1][j].value = "🔑";
      player.play("./sounds/pluslife.mp3");
      key = true;
    } // győzelem
    else if (key === true && arr[i + 1][j].pic === "🏰") {
      arr[i][j].pic = "⬛️";
      arr[i + 1][j].pic = "👾";
      castle.value = true;
      player.play("./sounds/stagecomplete.mp3");
    } else if (arr[i + 1][j].pic === "🥦") {
      arr[i + 1][j].pic = "👾";
      arr[i][j].pic = "⬛️";
      player.play("./sounds/lifelost.mp3");
      life.value--;
      if (life.value < 1) {
        player.play("./sounds/gameover.mp3");
      }
    } else if (arr[i + 1][j].pic === "🍭") {
      arr[i + 1][j].pic = "👾";
      arr[i][j].pic = "⬛️";
      player.play("./sounds/pluslife.mp3");
      life.value++;
    } else {
      arr[i][j].pic = "⬛️";
      arr[i + 1][j].pic = "👾";
    }

    return arr;
  }
};

const movementW = (arr) => {
  let index = getPlayerpos(arr);
  let i = index[0];
  let j = index[1];

  if (
    (arr[i - 1] && arr[i - 1][j].pic === "⬛️") ||
    (arr[i - 1] && arr[i - 1][j].pic === "👹") ||
    (arr[i - 1] && arr[i - 1][j].pic === "👺") ||
    (arr[i - 1] && arr[i - 1][j].pic === "👻") ||
    (arr[i - 1] && arr[i - 1][j].pic === "👽") ||
    (arr[i - 1] && arr[i - 1][j].pic === "🤖") ||
    (arr[i - 1] && arr[i - 1][j].pic === "🔑") ||
    (arr[i - 1] && arr[i - 1][j].pic === "🏰" && key === true) ||
    (arr[i - 1] && arr[i - 1][j].pic === "🥦") ||
    (arr[i - 1] && arr[i - 1][j].pic === "🍭")
  ) {
    if (arr[i - 1][j].pic === "👹") {
      arr[i - 1][j].pic = "👹";
      arr[i][j].pic = "⬛️";
      arr[1][1].pic = "👾";
      player.play("./sounds/lifelost.mp3");
      life.value--;
      if (life.value < 1) {
        player.play("./sounds/gameover.mp3");
      }
    } else if (arr[i - 1][j].pic === "👺") {
      arr[i - 1][j].pic = "👺";
      arr[i][j].pic = "⬛️";
      arr[1][1].pic = "👾";
      player.play("./sounds/lifelost.mp3");
      life.value--;
      if (life.value < 1) {
        player.play("./sounds/gameover.mp3");
      }
    } else if (arr[i - 1][j].pic === "👻") {
      arr[i - 1][j].pic = "👻";
      arr[i][j].pic = "⬛️";
      arr[1][1].pic = "👾";
      player.play("./sounds/lifelost.mp3");
      life.value--;
      if (life.value < 1) {
        player.play("./sounds/gameover.mp3");
      }
    } else if (arr[i - 1][j].pic === "👽") {
      arr[i - 1][j].pic = "👽";
      arr[i][j].pic = "⬛️";
      arr[1][1].pic = "👾";
      player.play("./sounds/lifelost.mp3");
      life.value--;
      if (life.value < 1) {
        player.play("./sounds/gameover.mp3");
      }
    } else if (arr[i - 1][j].pic === "🤖") {
      arr[i - 1][j].pic = "🤖";
      arr[i][j].pic = "⬛️";
      arr[1][1].pic = "👾";
      player.play("./sounds/lifelost.mp3");
      life.value--;
      if (life.value < 1) {
        player.play("./sounds/gameover.mp3");
      }
    } else if (arr[i - 1][j].pic === "🔑") {
      arr[i][j].pic = "⬛️";
      arr[i - 1][j].pic = "👾";
      player.play("./sounds/pluslife.mp3");
      key = true;
    } else if (key === true && arr[i - 1][j].pic === "🏰") {
      arr[i][j].pic = "⬛️";
      arr[i - 1][j].pic = "👾";
      castle.value = true;
      player.play("./sounds/stagecomplete.mp3");
    } else if (arr[i - 1][j].pic === "🥦") {
      arr[i - 1][j].pic = "👾";
      arr[i][j].pic = "⬛️";
      player.play("./sounds/lifelost.mp3");
      life.value--;
      if (life.value < 1) {
        player.play("./sounds/gameover.mp3");
      }
    } else if (arr[i - 1][j].pic === "🍭") {
      arr[i - 1][j].pic = "👾";
      arr[i][j].pic = "⬛️";
      player.play("./sounds/pluslife.mp3");
      life.value++;
    } else {
      arr[i][j].pic = "⬛️";
      arr[i - 1][j].pic = "👾";
    }

    return arr;
  }
};

const movementA = (arr) => {
  let index = getPlayerpos(arr);
  let i = index[0];
  let j = index[1];

  if (
    (arr[i] && arr[i][j - 1].pic === "⬛️") ||
    (arr[i] && arr[i][j - 1].pic === "👹") ||
    (arr[i] && arr[i][j - 1].pic === "👺") ||
    (arr[i] && arr[i][j - 1].pic === "👻") ||
    (arr[i] && arr[i][j - 1].pic === "👽") ||
    (arr[i] && arr[i][j - 1].pic === "🤖") ||
    (arr[i] && arr[i][j - 1].pic === "🔑") ||
    (arr[i] && arr[i][j - 1].pic === "🏰" && key === true) ||
    (arr[i] && arr[i][j - 1].pic === "🥦") ||
    (arr[i] && arr[i][j - 1].pic === "🍭")
  ) {
    if (arr[i][j - 1].pic === "👹") {
      arr[i][j - 1].pic = "👹";
      arr[i][j].pic = "⬛️";
      arr[1][1].pic = "👾";
      player.play("./sounds/lifelost.mp3");
      life.value--;
      if (life.value < 1) {
        player.play("./sounds/gameover.mp3");
      }
    } else if (arr[i][j - 1].pic === "👺") {
      arr[i][j - 1].pic = "👺";
      arr[i][j].pic = "⬛️";
      arr[1][1].pic = "👾";
      player.play("./sounds/lifelost.mp3");
      life.value--;
      if (life.value < 1) {
        player.play("./sounds/gameover.mp3");
      }
    } else if (arr[i][j - 1].pic === "👻") {
      arr[i][j - 1].pic = "👻";
      arr[i][j].pic = "⬛️";
      arr[1][1].pic = "👾";
      player.play("./sounds/lifelost.mp3");
      life.value--;
      if (life.value < 1) {
        player.play("./sounds/gameover.mp3");
      }
    } else if (arr[i][j - 1].pic === "👽") {
      arr[i][j - 1].pic = "👽";
      arr[i][j].pic = "⬛️";
      arr[1][1].pic = "👾";
      player.play("./sounds/lifelost.mp3");
      life.value--;
      if (life.value < 1) {
        player.play("./sounds/gameover.mp3");
      }
    } else if (arr[i][j - 1].pic === "🤖") {
      arr[i][j - 1].pic = "🤖";
      arr[i][j].pic = "⬛️";
      arr[1][1].pic = "👾";
      player.play("./sounds/lifelost.mp3");
      life.value--;
      if (life.value < 1) {
        player.play("./sounds/gameover.mp3");
      }
    } else if (arr[i][j - 1].pic === "🔑") {
      arr[i][j].pic = "⬛️";
      arr[i][j - 1].pic = "👾";
      arr[i][j - 1].value = "🔑";
      player.play("./sounds/pluslife.mp3");
      key = true;
    } else if (key === true && arr[i][j - 1].pic === "🏰") {
      arr[i][j].pic = "⬛️";
      arr[i][j - 1].pic = "👾";
      castle.value = true;
      player.play("./sounds/stagecomplete.mp3");
    } else if (arr[i][j - 1].pic === "🥦") {
      arr[i][j - 1].pic = "👾";
      arr[i][j].pic = "⬛️";
      player.play("./sounds/lifelost.mp3");
      life.value--;
      if (life.value < 1) {
        player.play("./sounds/gameover.mp3");
      }
    } else if (arr[i][j - 1].pic === "🍭") {
      arr[i][j - 1].pic = "👾";
      arr[i][j].pic = "⬛️";
      player.play("./sounds/pluslife.mp3");
      life.value++;
    } else {
      arr[i][j].pic = "⬛️";
      arr[i][j - 1].pic = "👾";
    }

    return arr;
  }
};

const movementD = (arr) => {
  let index = getPlayerpos(arr);
  let i = index[0];
  let j = index[1];

  if (
    (arr[i] && arr[i][j + 1].pic === "⬛️") ||
    (arr[i] && arr[i][j + 1].pic === "👹") ||
    (arr[i] && arr[i][j + 1].pic === "👺") ||
    (arr[i] && arr[i][j + 1].pic === "👻") ||
    (arr[i] && arr[i][j + 1].pic === "👽") ||
    (arr[i] && arr[i][j + 1].pic === "🤖") ||
    (arr[i] && arr[i][j + 1].pic === "🔑") ||
    (arr[i] && arr[i][j + 1].pic === "🏰" && key === true) ||
    (arr[i] && arr[i][j + 1].pic === "🥦") ||
    (arr[i] && arr[i][j + 1].pic === "🍭")
  ) {
    if (arr[i][j + 1].pic === "👹") {
      arr[i][j + 1].pic = "👹";
      arr[i][j].pic = "⬛️";
      arr[1][1].pic = "👾";
      player.play("./sounds/lifelost.mp3");
      life.value--;
      if (life.value < 1) {
        player.play("./sounds/gameover.mp3");
      }
    } else if (arr[i][j + 1].pic === "👺") {
      arr[i][j + 1].pic = "👺";
      arr[i][j].pic = "⬛️";
      arr[1][1].pic = "👾";
      player.play("./sounds/lifelost.mp3");
      life.value--;
      if (life.value < 1) {
        player.play("./sounds/gameover.mp3");
      }
    } else if (arr[i][j + 1].pic === "👻") {
      arr[i][j + 1].pic = "👻";
      arr[i][j].pic = "⬛️";
      arr[1][1].pic = "👾";
      player.play("./sounds/lifelost.mp3");
      life.value--;
      if (life.value < 1) {
        player.play("./sounds/gameover.mp3");
      }
    } else if (arr[i][j + 1].pic === "👽") {
      arr[i][j + 1].pic = "👽";
      arr[i][j].pic = "⬛️";
      arr[1][1].pic = "👾";
      player.play("./sounds/lifelost.mp3");
      life.value--;
      if (life.value < 1) {
        player.play("./sounds/gameover.mp3");
      }
    } else if (arr[i][j + 1].pic === "🤖") {
      arr[i][j + 1].pic = "🤖";
      arr[i][j].pic = "⬛️";
      arr[1][1].pic = "👾";
      player.play("./sounds/lifelost.mp3");
      life.value--;
      if (life.value < 1) {
        player.play("./sounds/gameover.mp3");
      }
    } else if (arr[i][j + 1].pic === "🔑") {
      arr[i][j].pic = "⬛️";
      arr[i][j + 1].pic = "👾";
      player.play("./sounds/pluslife.mp3");
      key = true;
    } else if (key === true && arr[i][j + 1].pic === "🏰") {
      arr[i][j].pic = "⬛️";
      arr[i][j + 1].pic = "👾";
      castle.value = true;
      player.play("./sounds/stagecomplete.mp3");
    } else if (arr[i][j + 1].pic === "🥦") {
      arr[i][j + 1].pic = "👾";
      arr[i][j].pic = "⬛️";
      player.play("./sounds/lifelost.mp3");
      life.value--;
      if (life.value < 1) {
        player.play("./sounds/gameover.mp3");
      }
    } else if (arr[i][j + 1].pic === "🍭") {
      arr[i][j + 1].pic = "👾";
      arr[i][j].pic = "⬛️";
      player.play("./sounds/pluslife.mp3");
      life.value++;
    } else {
      arr[i][j].pic = "⬛️";
      arr[i][j + 1].pic = "👾";
    }

    return arr;
  }
};

const getEnemy1pos = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j].pic === "👹") {
        return [i, j];
      }
    }
  }
  return [0, 0];
};

const movementEnemy1 = (arr) => {
  let rand = Math.floor(Math.random() * 4 + 1);
  if (rand === 1) {
    let index = getEnemy1pos(arr);
    let i = index[0];
    let j = index[1];
    if (i === 0 && j === 0) return arr;
    while (arr[i - 1][j].pic === "⬛️" || arr[i - 1][j].pic === "👾") {
      if (arr[i - 1][j].pic === "👾") {
        arr[i - 1][j].pic = "👹";
        arr[i][j].pic = "⬛️";
        arr[1][1].pic = "👾";
        player.play("./sounds/lifelost.mp3");
        life.value--;
        if (life.value < 1) {
          player.play("./sounds/gameover.mp3");
        }
      }

      arr[i][j].pic = "⬛️";
      arr[i - 1][j].pic = "👹";
    }
  }
  if (rand === 2) {
    let index = getEnemy1pos(arr);
    let i = index[0];
    let j = index[1];
    if (i === 0 && j === 0) return arr;
    while (arr[i + 1][j].pic === "⬛️" || arr[i + 1][j].pic === "👾") {
      if (arr[i + 1][j].pic === "👾") {
        arr[i + 1][j].pic = "👹";
        arr[i][j].pic = "⬛️";
        arr[1][1].pic = "👾";
        player.play("./sounds/lifelost.mp3");
        life.value--;
        if (life.value < 1) {
          player.play("./sounds/gameover.mp3");
        }
      }
      arr[i][j].pic = "⬛️";
      arr[i + 1][j].pic = "👹";
    }
  }
  if (rand === 3) {
    let index = getEnemy1pos(arr);
    let i = index[0];
    let j = index[1];
    if (i === 0 && j === 0) return arr;
    while (arr[i][j - 1].pic === "⬛️" || arr[i][j - 1].pic === "👾") {
      if (arr[i][j - 1].pic === "👾") {
        arr[i][j - 1].pic = "👹";
        arr[i][j].pic = "⬛️";
        arr[1][1].pic = "👾";
        player.play("./sounds/lifelost.mp3");
        life.value--;
        if (life.value < 1) {
          player.play("./sounds/gameover.mp3");
        }
      }
      arr[i][j].pic = "⬛️";
      arr[i][j - 1].pic = "👹";
    }
  }
  if (rand === 4) {
    let index = getEnemy1pos(arr);
    let i = index[0];
    let j = index[1];
    if (i === 0 && j === 0) return arr;
    while (arr[i][j + 1].pic === "⬛️" || arr[i][j + 1].pic === "👾") {
      if (arr[i][j + 1].pic === "👾") {
        arr[i][j + 1].pic = "👹";
        arr[i][j].pic = "⬛️";
        arr[1][1].pic = "👾";
        player.play("./sounds/lifelost.mp3");
        life.value--;
        if (life.value < 1) {
          player.play("./sounds/gameover.mp3");
        }
      }
      arr[i][j].pic = "⬛️";
      arr[i][j + 1].pic = "👹";
    }
  }
  return arr;
};

const getEnemy2pos = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j].pic === "👺") {
        return [i, j];
      }
    }
  }
  return [0, 0];
};

const movementEnemy2 = (arr) => {
  let rand = Math.floor(Math.random() * 4 + 1);
  if (rand === 1) {
    let index = getEnemy2pos(arr);
    let i = index[0];
    let j = index[1];
    if (i === 0 && j === 0) return arr;
    while (arr[i - 1][j].pic === "⬛️" || arr[i - 1][j].pic === "👾") {
      if (arr[i - 1][j].pic === "👾") {
        arr[i - 1][j].pic = "👺";
        arr[i][j].pic = "⬛️";
        arr[1][1].pic = "👾";
        player.play("./sounds/lifelost.mp3");
        life.value--;
        if (life.value < 1) {
          player.play("./sounds/gameover.mp3");
        }
      }
      arr[i][j].pic = "⬛️";
      arr[i - 1][j].pic = "👺";
    }
  }
  if (rand === 2) {
    let index = getEnemy2pos(arr);
    let i = index[0];
    let j = index[1];
    if (i === 0 && j === 0) return arr;
    while (arr[i + 1][j].pic === "⬛️" || arr[i + 1][j].pic === "👾") {
      if (arr[i + 1][j].pic === "👾") {
        arr[i + 1][j].pic = "👺";
        arr[i][j].pic = "⬛️";
        arr[1][1].pic = "👾";
        player.play("./sounds/lifelost.mp3");
        life.value--;
        if (life.value < 1) {
          player.play("./sounds/gameover.mp3");
        }
      }
      arr[i][j].pic = "⬛️";
      arr[i + 1][j].pic = "👺";
    }
  }
  if (rand === 3) {
    let index = getEnemy2pos(arr);
    let i = index[0];
    let j = index[1];
    if (i === 0 && j === 0) return arr;
    while (arr[i][j - 1].pic === "⬛️" || arr[i][j - 1].pic === "👾") {
      if (arr[i][j - 1].pic === "👾") {
        arr[i][j - 1].pic = "👺";
        arr[i][j].pic = "⬛️";
        arr[1][1].pic = "👾";
        player.play("./sounds/lifelost.mp3");
        life.value--;
        if (life.value < 1) {
          player.play("./sounds/gameover.mp3");
        }
      }
      arr[i][j].pic = "⬛️";
      arr[i][j - 1].pic = "👺";
    }
  }
  if (rand === 4) {
    let index = getEnemy2pos(arr);
    let i = index[0];
    let j = index[1];
    if (i === 0 && j === 0) return arr;
    while (arr[i][j + 1].pic === "⬛️" || arr[i][j + 1].pic === "👾") {
      if (arr[i][j + 1].pic === "👾") {
        arr[i][j + 1].pic = "👺";
        arr[i][j].pic = "⬛️";
        arr[1][1].pic = "👾";
        player.play("./sounds/lifelost.mp3");
        life.value--;
        if (life.value < 1) {
          player.play("./sounds/gameover.mp3");
        }
      }
      arr[i][j].pic = "⬛️";
      arr[i][j + 1].pic = "👺";
    }
  }
  return arr;
};

const getEnemy3pos = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j].pic === "👻") {
        return [i, j];
      }
    }
  }
  return [0, 0];
};

const movementEnemy3 = (arr) => {
  let rand = Math.floor(Math.random() * 4 + 1);
  if (rand === 1) {
    let index = getEnemy3pos(arr);
    let i = index[0];
    let j = index[1];
    if (i === 0 && j === 0) return arr;
    while (arr[i - 1][j].pic === "⬛️" || arr[i - 1][j].pic === "👾") {
      if (arr[i - 1][j].pic === "👾") {
        arr[i - 1][j].pic = "👻";
        arr[i][j].pic = "⬛️";
        arr[1][1].pic = "👾";
        player.play("./sounds/lifelost.mp3");
        life.value--;
        if (life.value < 1) {
          player.play("./sounds/gameover.mp3");
        }
      }
      arr[i][j].pic = "⬛️";
      arr[i - 1][j].pic = "👻";
    }
  }
  if (rand === 2) {
    let index = getEnemy3pos(arr);
    let i = index[0];
    let j = index[1];
    if (i === 0 && j === 0) return arr;
    while (arr[i + 1][j].pic === "⬛️" || arr[i + 1][j].pic === "👾") {
      if (arr[i + 1][j].pic === "👾") {
        arr[i + 1][j].pic = "👻";
        arr[i][j].pic = "⬛️";
        arr[1][1].pic = "👾";
        player.play("./sounds/lifelost.mp3");
        life.value--;
        if (life.value < 1) {
          player.play("./sounds/gameover.mp3");
        }
      }
      arr[i][j].pic = "⬛️";
      arr[i + 1][j].pic = "👻";
    }
  }
  if (rand === 3) {
    let index = getEnemy3pos(arr);
    let i = index[0];
    let j = index[1];
    if (i === 0 && j === 0) return arr;
    while (arr[i][j - 1].pic === "⬛️" || arr[i][j - 1].pic === "👾") {
      if (arr[i][j - 1].pic === "👾") {
        arr[i][j - 1].pic = "👻";
        arr[i][j].pic = "⬛️";
        arr[1][1].pic = "👾";
        player.play("./sounds/lifelost.mp3");
        life.value--;
        if (life.value < 1) {
          player.play("./sounds/gameover.mp3");
        }
      }
      arr[i][j].pic = "⬛️";
      arr[i][j - 1].pic = "👻";
    }
  }
  if (rand === 4) {
    let index = getEnemy3pos(arr);
    let i = index[0];
    let j = index[1];
    if (i === 0 && j === 0) return arr;
    while (arr[i][j + 1].pic === "⬛️" || arr[i][j + 1].pic === "👾") {
      if (arr[i][j + 1].pic === "👾") {
        arr[i][j + 1].pic = "👻";
        arr[i][j].pic = "⬛️";
        arr[1][1].pic = "👾";
        player.play("./sounds/lifelost.mp3");
        life.value--;
        if (life.value < 1) {
          player.play("./sounds/gameover.mp3");
        }
      }
      arr[i][j].pic = "⬛️";
      arr[i][j + 1].pic = "👻";
    }
  }
  return arr;
};

const getEnemy4pos = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j].pic === "👽") {
        return [i, j];
      }
    }
  }
  return [0, 0];
};

const movementEnemy4 = (arr) => {
  let rand = Math.floor(Math.random() * 4 + 1);
  if (rand === 1) {
    let index = getEnemy4pos(arr);
    let i = index[0];
    let j = index[1];
    if (i === 0 && j === 0) return arr;
    while (arr[i - 1][j].pic === "⬛️" || arr[i - 1][j].pic === "👾") {
      if (arr[i - 1][j].pic === "👾") {
        arr[i - 1][j].pic = "👽";
        arr[i][j].pic = "⬛️";
        arr[1][1].pic = "👾";
        player.play("./sounds/lifelost.mp3");
        life.value--;
        if (life.value < 1) {
          player.play("./sounds/gameover.mp3");
        }
      }
      arr[i][j].pic = "⬛️";
      arr[i - 1][j].pic = "👽";
    }
  }
  if (rand === 2) {
    let index = getEnemy4pos(arr);
    let i = index[0];
    let j = index[1];
    if (i === 0 && j === 0) return arr;
    while (arr[i + 1][j].pic === "⬛️" || arr[i + 1][j].pic === "👾") {
      if (arr[i + 1][j].pic === "👾") {
        arr[i + 1][j].pic = "👽";
        arr[i][j].pic = "⬛️";
        arr[1][1].pic = "👾";
        player.play("./sounds/lifelost.mp3");
        life.value--;
        if (life.value < 1) {
          player.play("./sounds/gameover.mp3");
        }
      }
      arr[i][j].pic = "⬛️";
      arr[i + 1][j].pic = "👽";
    }
  }
  if (rand === 3) {
    let index = getEnemy4pos(arr);
    let i = index[0];
    let j = index[1];
    if (i === 0 && j === 0) return arr;
    while (arr[i][j - 1].pic === "⬛️" || arr[i][j - 1].pic === "👾") {
      if (arr[i][j - 1].pic === "👾") {
        arr[i][j - 1].pic = "👽";
        arr[i][j].pic = "⬛️";
        arr[1][1].pic = "👾";
        player.play("./sounds/lifelost.mp3");
        life.value--;
        if (life.value < 1) {
          player.play("./sounds/gameover.mp3");
        }
      }
      arr[i][j].pic = "⬛️";
      arr[i][j - 1].pic = "👽";
    }
  }
  if (rand === 4) {
    let index = getEnemy4pos(arr);
    let i = index[0];
    let j = index[1];
    if (i === 0 && j === 0) return arr;
    while (arr[i][j + 1].pic === "⬛️" || arr[i][j + 1].pic === "👾") {
      if (arr[i][j + 1].pic === "👾") {
        arr[i][j + 1].pic = "👽";
        arr[i][j].pic = "⬛️";
        arr[1][1].pic = "👾";
        player.play("./sounds/lifelost.mp3");
        life.value--;
        if (life.value < 1) {
          player.play("./sounds/gameover.mp3");
        }
      }
      arr[i][j].pic = "⬛️";
      arr[i][j + 1].pic = "👽";
    }
  }
  return arr;
};

const getEnemy5pos = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j].pic === "🤖") {
        return [i, j];
      }
    }
  }
  return [0, 0];
};

const movementEnemy5 = (arr) => {
  let rand = Math.floor(Math.random() * 4 + 1);
  if (rand === 1) {
    let index = getEnemy5pos(arr);
    let i = index[0];
    let j = index[1];
    if (i === 0 && j === 0) return arr;
    while (arr[i - 1][j].pic === "⬛️" || arr[i - 1][j].pic === "👾") {
      if (arr[i - 1][j].pic === "👾") {
        arr[i - 1][j].pic = "🤖";
        arr[i][j].pic = "⬛️";
        arr[1][1].pic = "👾";
        player.play("./sounds/lifelost.mp3");
        life.value--;
        if (life.value < 1) {
          player.play("./sounds/gameover.mp3");
        }
      }
      arr[i][j].pic = "⬛️";
      arr[i - 1][j].pic = "🤖";
    }
  }
  if (rand === 2) {
    let index = getEnemy5pos(arr);
    let i = index[0];
    let j = index[1];
    if (i === 0 && j === 0) return arr;
    while (arr[i + 1][j].pic === "⬛️" || arr[i + 1][j].pic === "👾") {
      if (arr[i + 1][j].pic === "👾") {
        arr[i + 1][j].pic = "🤖";
        arr[i][j].pic = "⬛️";
        arr[1][1].pic = "👾";
        player.play("./sounds/lifelost.mp3");
        life.value--;
        if (life.value < 1) {
          player.play("./sounds/gameover.mp3");
        }
      }
      arr[i][j].pic = "⬛️";
      arr[i + 1][j].pic = "🤖";
    }
  }
  if (rand === 3) {
    let index = getEnemy5pos(arr);
    let i = index[0];
    let j = index[1];
    if (i === 0 && j === 0) return arr;
    while (arr[i][j - 1].pic === "⬛️" || arr[i][j - 1].pic === "👾") {
      if (arr[i][j - 1].pic === "👾") {
        arr[i][j - 1].pic = "🤖";
        arr[i][j].pic = "⬛️";
        arr[1][1].pic = "👾";
        player.play("./sounds/lifelost.mp3");
        life.value--;
        if (life.value < 1) {
          player.play("./sounds/gameover.mp3");
        }
      }
      arr[i][j].pic = "⬛️";
      arr[i][j - 1].pic = "🤖";
    }
  }
  if (rand === 4) {
    let index = getEnemy5pos(arr);
    let i = index[0];
    let j = index[1];
    if (i === 0 && j === 0) return arr;
    while (arr[i][j + 1].pic === "⬛️" || arr[i][j + 1].pic === "👾") {
      if (arr[i][j + 1].pic === "👾") {
        arr[i][j + 1].pic = "🤖";
        arr[i][j].pic = "⬛️";
        arr[1][1].pic = "👾";
        player.play("./sounds/lifelost.mp3");
        life.value--;
        if (life.value < 1) {
          player.play("./sounds/gameover.mp3");
        }
      }
      arr[i][j].pic = "⬛️";
      arr[i][j + 1].pic = "🤖";
    }
  }
  return arr;
};

const addBombRight = (arr) => {
  let index = getPlayerpos(arr);
  let i = index[0];
  let j = index[1];
  if (arr[i] && arr[i][j + 1].pic === "⬛️") {
    player.play("./sounds/placebomb.mp3");
    arr[i][j + 1].pic = "💣";
    let time = 3;
    setInterval(() => {
      time--;
      if (time === 0) {
        player.play("./sounds/Explosion.mp3");
        arr[i][j + 1].pic = "⬛️";
        /////////////////////////////////////////////////// jobbra töröl
        if (arr[i] && arr[i][j + 2].pic === "⬛️") {
          arr[i][j + 2].pic = "💥";
          setTimeout(() => {
            arr[i][j + 2].pic = "⬛️";
          }, 500);
        }
        if (
          arr[i] &&
          arr[i][j + 2].pic === "🎃" &&
          arr[i][j + 2].value === "🔑"
        ) {
          arr[i][j + 2].pic = "💥";
          setTimeout(() => {
            arr[i][j + 2].pic = "🔑";
          }, 500);
        }
        if (
          arr[i] &&
          arr[i][j + 2].pic === "🎃" &&
          arr[i][j + 2].value === "🏰"
        ) {
          arr[i][j + 2].pic = "💥";
          setTimeout(() => {
            arr[i][j + 2].pic = "🏰";
          }, 500);
        }
        if (
          arr[i] &&
          arr[i][j + 2].pic === "🎃" &&
          arr[i][j + 2].value === "🍭"
        ) {
          arr[i][j + 2].pic = "💥";
          setTimeout(() => {
            arr[i][j + 2].pic = "🍭";
          }, 500);
        }
        if (
          arr[i] &&
          arr[i][j + 2].pic === "🎃" &&
          arr[i][j + 2].value === "🥦"
        ) {
          arr[i][j + 2].pic = "💥";
          setTimeout(() => {
            arr[i][j + 2].pic = "🥦";
          }, 500);
        }
        if (arr[i] && arr[i][j + 2].pic === "🎃") {
          arr[i][j + 2].pic = "💥";
          setTimeout(() => {
            arr[i][j + 2].pic = "⬛️";
          }, 500);
        }
        if (arr[i] && arr[i][j + 2].pic === "👹") {
          arr[i][j + 2].pic = "💥";
          setTimeout(() => {
            arr[i][j + 2].pic = "⬛️";
          }, 500);
        }
        if (arr[i] && arr[i][j + 2].pic === "👺") {
          arr[i][j + 2].pic = "💥";
          setTimeout(() => {
            arr[i][j + 2].pic = "⬛️";
          }, 500);
        }
        if (arr[i] && arr[i][j + 2].pic === "👻") {
          arr[i][j + 2].pic = "💥";
          setTimeout(() => {
            arr[i][j + 2].pic = "⬛️";
          }, 500);
        }
        if (arr[i] && arr[i][j + 2].pic === "👽") {
          arr[i][j + 2].pic = "💥";
          setTimeout(() => {
            arr[i][j + 2].pic = "⬛️";
          }, 500);
        }
        if (arr[i] && arr[i][j + 2].pic === "🤖") {
          arr[i][j + 2].pic = "💥";
          setTimeout(() => {
            arr[i][j + 2].pic = "⬛️";
          }, 500);
        }

        if (arr[i] && arr[i][j + 2].pic === "👾") {
          arr[i][j + 2].pic = "💥";
          setTimeout(() => {
            arr[i][j + 2].pic = "⬛️";
          }, 500);

          arr[1][1].pic = "👾";
          player.play("./sounds/lifelost.mp3");
          life.value--;
          if (life.value < 1) {
            player.play("./sounds/gameover.mp3");
          }
        }
        ////////////////////////////////////////////balra töröl
        if (arr[i] && arr[i][j].pic === "⬛️") {
          arr[i][j].pic = "💥";
          setTimeout(() => {
            arr[i][j].pic = "⬛️";
          }, 500);
        }
        if (arr[i] && arr[i][j].pic === "🎃" && arr[i][j].value === "🔑") {
          arr[i][j].pic = "💥";
          setTimeout(() => {
            arr[i][j].pic = "🔑";
          }, 500);
        }
        if (arr[i] && arr[i][j].pic === "🎃" && arr[i][j].value === "🏰") {
          arr[i][j].pic = "💥";
          setTimeout(() => {
            arr[i][j].pic = "🏰";
          }, 500);
        }
        if (arr[i] && arr[i][j].pic === "🎃" && arr[i][j].value === "🥦") {
          arr[i][j].pic = "💥";
          setTimeout(() => {
            arr[i][j].pic = "🥦";
          }, 500);
        }
        if (arr[i] && arr[i][j].pic === "🎃" && arr[i][j].value === "🍭") {
          arr[i][j].pic = "💥";
          setTimeout(() => {
            arr[i][j].pic = "🍭";
          }, 500);
        }

        if (arr[i] && arr[i][j].pic === "🎃") {
          arr[i][j].pic = "💥";
          setTimeout(() => {
            arr[i][j].pic = "⬛️";
          }, 500);
        }
        if (arr[i] && arr[i][j].pic === "👹") {
          arr[i][j].pic = "💥";
          setTimeout(() => {
            arr[i][j].pic = "⬛️";
          }, 500);
        }
        if (arr[i] && arr[i][j].pic === "👺") {
          arr[i][j].pic = "💥";
          setTimeout(() => {
            arr[i][j].pic = "⬛️";
          }, 500);
        }
        if (arr[i] && arr[i][j].pic === "👻") {
          arr[i][j].pic = "💥";
          setTimeout(() => {
            arr[i][j].pic = "⬛️";
          }, 500);
        }
        if (arr[i] && arr[i][j].pic === "👽") {
          arr[i][j].pic = "💥";
          setTimeout(() => {
            arr[i][j].pic = "⬛️";
          }, 500);
        }
        if (arr[i] && arr[i][j].pic === "🤖") {
          arr[i][j].pic = "💥";
          setTimeout(() => {
            arr[i][j].pic = "⬛️";
          }, 500);
        }

        if (arr[i] && arr[i][j].pic === "👾") {
          arr[i][j].pic = "💥";
          setTimeout(() => {
            arr[i][j].pic = "⬛️";
          }, 500);
          arr[1][1].pic = "👾";
          player.play("./sounds/lifelost.mp3");
          life.value--;
          if (life.value < 1) {
            player.play("./sounds/gameover.mp3");
          }
        }
        /////////////////////////////////////felfele töröl
        if (arr[i - 1] && arr[i - 1][j + 1].pic === "⬛️") {
          arr[i - 1][j + 1].pic = "💥";
          setTimeout(() => {
            arr[i - 1][j + 1].pic = "⬛️";
          }, 500);
        }
        if (
          arr[i - 1] &&
          arr[i - 1][j + 1].pic === "🎃" &&
          arr[i - 1][j + 1].value === "🔑"
        ) {
          arr[i - 1][j + 1].pic = "💥";
          setTimeout(() => {
            arr[i - 1][j + 1].pic = "🔑";
          }, 500);
        }
        if (
          arr[i - 1] &&
          arr[i - 1][j + 1].pic === "🎃" &&
          arr[i - 1][j + 1].value === "🏰"
        ) {
          arr[i - 1][j + 1].pic = "💥";
          setTimeout(() => {
            arr[i - 1][j + 1].pic = "🏰";
          }, 500);
        }

        if (
          arr[i - 1] &&
          arr[i - 1][j + 1].pic === "🎃" &&
          arr[i - 1][j + 1].value === "🍭"
        ) {
          arr[i - 1][j + 1].pic = "💥";
          setTimeout(() => {
            arr[i - 1][j + 1].pic = "🍭";
          }, 500);
        }

        if (
          arr[i - 1] &&
          arr[i - 1][j + 1].pic === "🎃" &&
          arr[i - 1][j + 1].value === "🥦"
        ) {
          arr[i - 1][j + 1].pic = "💥";
          setTimeout(() => {
            arr[i - 1][j + 1].pic = "🥦";
          }, 500);
        }

        if (arr[i - 1] && arr[i - 1][j + 1].pic === "🎃") {
          arr[i - 1][j + 1].pic = "💥";
          setTimeout(() => {
            arr[i - 1][j + 1].pic = "⬛️";
          }, 500);
        }
        if (arr[i - 1] && arr[i - 1][j + 1].pic === "👹") {
          arr[i - 1][j + 1].pic = "💥";
          setTimeout(() => {
            arr[i - 1][j + 1].pic = "⬛️";
          }, 500);
        }
        if (arr[i - 1] && arr[i - 1][j + 1].pic === "👺") {
          arr[i - 1][j + 1].pic = "💥";
          setTimeout(() => {
            arr[i - 1][j + 1].pic = "⬛️";
          }, 500);
        }
        if (arr[i - 1] && arr[i - 1][j + 1].pic === "👻") {
          arr[i - 1][j + 1].pic = "💥";
          setTimeout(() => {
            arr[i - 1][j + 1].pic = "⬛️";
          }, 500);
        }
        if (arr[i - 1] && arr[i - 1][j + 1].pic === "👽") {
          arr[i - 1][j + 1].pic = "💥";
          setTimeout(() => {
            arr[i - 1][j + 1].pic = "⬛️";
          }, 500);
        }
        if (arr[i - 1] && arr[i - 1][j + 1].pic === "🤖") {
          arr[i - 1][j + 1].pic = "💥";
          setTimeout(() => {
            arr[i - 1][j + 1].pic = "⬛️";
          }, 500);
        }

        if (arr[i - 1] && arr[i - 1][j + 1].pic === "👾") {
          arr[i - 1][j + 1].pic = "💥";
          setTimeout(() => {
            arr[i - 1][j + 1].pic = "⬛️";
          }, 500);
          arr[1][1].pic = "👾";
          player.play("./sounds/lifelost.mp3");
          life.value--;
          if (life.value < 1) {
            player.play("./sounds/gameover.mp3");
          }
        }

        /////////////////////////////////////////////lefele töröl
        if (arr[i + 1] && arr[i + 1][j + 1].pic === "⬛️") {
          arr[i + 1][j + 1].pic = "💥";
          setTimeout(() => {
            arr[i + 1][j + 1].pic = "⬛️";
          }, 500);
        }
        if (
          arr[i + 1] &&
          arr[i + 1][j + 1].pic === "🎃" &&
          arr[i + 1][j + 1].value === "🔑"
        ) {
          arr[i + 1][j + 1].pic = "💥";
          setTimeout(() => {
            arr[i + 1][j + 1].pic = "🔑";
          }, 500);
        }
        if (
          arr[i + 1] &&
          arr[i + 1][j + 1].pic === "🎃" &&
          arr[i + 1][j + 1].value === "🏰"
        ) {
          arr[i + 1][j + 1].pic = "💥";
          setTimeout(() => {
            arr[i + 1][j + 1].pic = "🏰";
          }, 500);
        }
        if (
          arr[i + 1] &&
          arr[i + 1][j + 1].pic === "🎃" &&
          arr[i + 1][j + 1].value === "🥦"
        ) {
          arr[i + 1][j + 1].pic = "💥";
          setTimeout(() => {
            arr[i + 1][j + 1].pic = "🥦";
          }, 500);
        }
        if (
          arr[i + 1] &&
          arr[i + 1][j + 1].pic === "🎃" &&
          arr[i + 1][j + 1].value === "🍭"
        ) {
          arr[i + 1][j + 1].pic = "💥";
          setTimeout(() => {
            arr[i + 1][j + 1].pic = "🍭";
          }, 500);
        }

        if (arr[i + 1] && arr[i + 1][j + 1].pic === "🎃") {
          arr[i + 1][j + 1].pic = "💥";
          setTimeout(() => {
            arr[i + 1][j + 1].pic = "⬛️";
          }, 500);
        }
        if (arr[i + 1] && arr[i + 1][j + 1].pic === "👹") {
          arr[i + 1][j + 1].pic = "💥";
          setTimeout(() => {
            arr[i + 1][j + 1].pic = "⬛️";
          }, 500);
        }
        if (arr[i + 1] && arr[i + 1][j + 1].pic === "👺") {
          arr[i + 1][j + 1].pic = "💥";
          setTimeout(() => {
            arr[i + 1][j + 1].pic = "⬛️";
          }, 500);
        }
        if (arr[i + 1] && arr[i + 1][j + 1].pic === "👻") {
          arr[i + 1][j + 1].pic = "💥";
          setTimeout(() => {
            arr[i + 1][j + 1].pic = "⬛️";
          }, 500);
        }
        if (arr[i + 1] && arr[i + 1][j + 1].pic === "👽") {
          arr[i + 1][j + 1].pic = "💥";
          setTimeout(() => {
            arr[i + 1][j + 1].pic = "⬛️";
          }, 500);
        }
        if (arr[i + 1] && arr[i + 1][j + 1].pic === "🤖") {
          arr[i + 1][j + 1].pic = "💥";
          setTimeout(() => {
            arr[i + 1][j + 1].pic = "⬛️";
          }, 500);
        }

        if (arr[i + 1] && arr[i + 1][j + 1].pic === "👾") {
          arr[i + 1][j + 1].pic = "💥";
          setTimeout(() => {
            arr[i + 1][j + 1].pic = "⬛️";
          }, 500);
          arr[1][1].pic = "👾";
          player.play("./sounds/lifelost.mp3");
          life.value--;
          if (life.value < 1) {
            player.play("./sounds/gameover.mp3");
          }
        }
      }
    }, 1000);
    return arr;
  }
};

const addBombLeft = (arr) => {
  let index = getPlayerpos(arr);
  let i = index[0];
  let j = index[1];
  if (arr[i] && arr[i][j - 1].pic === "⬛️") {
    player.play("./sounds/placebomb.mp3");
    arr[i][j - 1].pic = "💣";
    let time = 3;
    setInterval(() => {
      time--;
      if (time === 0) {
        player.play("./sounds/Explosion.mp3");
        arr[i][j - 1].pic = "⬛️";
        /////////////////////////////////////////////////// jobbra töröl
        if (arr[i] && arr[i][j].pic === "⬛️") {
          arr[i][j].pic = "💥";
          setTimeout(() => {
            arr[i][j].pic = "⬛️";
          }, 500);
        }
        if (arr[i] && arr[i][j].pic === "🎃" && arr[i][j].value === "🔑") {
          arr[i][j].pic = "💥";
          setTimeout(() => {
            arr[i][j].pic = "🔑";
          }, 500);
        }
        if (arr[i] && arr[i][j].pic === "🎃" && arr[i][j].value === "🏰") {
          arr[i][j].pic = "💥";
          setTimeout(() => {
            arr[i][j].pic = "🏰";
          }, 500);
        }

        if (arr[i] && arr[i][j].pic === "🎃" && arr[i][j].value === "🍭") {
          arr[i][j].pic = "💥";
          setTimeout(() => {
            arr[i][j].pic = "🍭";
          }, 500);
        }
        if (arr[i] && arr[i][j].pic === "🎃" && arr[i][j].value === "🥦") {
          arr[i][j].pic = "💥";
          setTimeout(() => {
            arr[i][j].pic = "🥦";
          }, 500);
        }

        if (arr[i] && arr[i][j].pic === "🎃") {
          arr[i][j].pic = "💥";
          setTimeout(() => {
            arr[i][j].pic = "⬛️";
          }, 500);
        }
        if (arr[i] && arr[i][j].pic === "👹") {
          arr[i][j].pic = "💥";
          setTimeout(() => {
            arr[i][j].pic = "⬛️";
          }, 500);
        }
        if (arr[i] && arr[i][j].pic === "👺") {
          arr[i][j].pic = "💥";
          setTimeout(() => {
            arr[i][j].pic = "⬛️";
          }, 500);
        }
        if (arr[i] && arr[i][j].pic === "👻") {
          arr[i][j].pic = "💥";
          setTimeout(() => {
            arr[i][j].pic = "⬛️";
          }, 500);
        }
        if (arr[i] && arr[i][j].pic === "👽") {
          arr[i][j].pic = "💥";
          setTimeout(() => {
            arr[i][j].pic = "⬛️";
          }, 500);
        }
        if (arr[i] && arr[i][j].pic === "🤖") {
          arr[i][j].pic = "💥";
          setTimeout(() => {
            arr[i][j].pic = "⬛️";
          }, 500);
        }

        if (arr[i] && arr[i][j].pic === "👾") {
          arr[i][j].pic = "💥";
          setTimeout(() => {
            arr[i][j].pic = "⬛️";
          }, 500);
          arr[1][1].pic = "👾";
          player.play("./sounds/lifelost.mp3");
          life.value--;
          if (life.value < 1) {
            player.play("./sounds/gameover.mp3");
          }
        }
        ////////////////////////////////////////////balra töröl
        if (arr[i] && arr[i][j - 2].pic === "⬛️") {
          arr[i][j - 2].pic = "💥";
          setTimeout(() => {
            arr[i][j - 2].pic = "⬛️";
          }, 500);
        }
        if (
          arr[i] &&
          arr[i][j - 2].pic === "🎃" &&
          arr[i][j - 2].value === "🔑"
        ) {
          arr[i][j - 2].pic = "💥";
          setTimeout(() => {
            arr[i][j - 2].pic = "🔑";
          }, 500);
        }
        if (
          arr[i] &&
          arr[i][j - 2].pic === "🎃" &&
          arr[i][j - 2].value === "🏰"
        ) {
          arr[i][j - 2].pic = "💥";
          setTimeout(() => {
            arr[i][j - 2].pic = "🏰";
          }, 500);
        }
        if (
          arr[i] &&
          arr[i][j - 2].pic === "🎃" &&
          arr[i][j - 2].value === "🥦"
        ) {
          arr[i][j - 2].pic = "💥";
          setTimeout(() => {
            arr[i][j - 2].pic = "🥦";
          }, 500);
        }

        if (
          arr[i] &&
          arr[i][j - 2].pic === "🎃" &&
          arr[i][j - 2].value === "🍭"
        ) {
          arr[i][j - 2].pic = "💥";
          setTimeout(() => {
            arr[i][j - 2].pic = "🍭";
          }, 500);
        }

        if (arr[i] && arr[i][j - 2].pic === "🎃") {
          arr[i][j - 2].pic = "💥";
          setTimeout(() => {
            arr[i][j - 2].pic = "⬛️";
          }, 500);
        }
        if (arr[i] && arr[i][j - 2].pic === "👹") {
          arr[i][j - 2].pic = "💥";
          setTimeout(() => {
            arr[i][j - 2].pic = "⬛️";
          }, 500);
        }
        if (arr[i] && arr[i][j - 2].pic === "👺") {
          arr[i][j - 2].pic = "💥";
          setTimeout(() => {
            arr[i][j - 2].pic = "⬛️";
          }, 500);
        }
        if (arr[i] && arr[i][j - 2].pic === "👻") {
          arr[i][j - 2].pic = "💥";
          setTimeout(() => {
            arr[i][j - 2].pic = "⬛️";
          }, 500);
        }
        if (arr[i] && arr[i][j - 2].pic === "👽") {
          arr[i][j - 2].pic = "💥";
          setTimeout(() => {
            arr[i][j - 2].pic = "⬛️";
          }, 500);
        }
        if (arr[i] && arr[i][j - 2].pic === "🤖") {
          arr[i][j - 2].pic = "💥";
          setTimeout(() => {
            arr[i][j - 2].pic = "⬛️";
          }, 500);
        }

        if (arr[i] && arr[i][j - 2].pic === "👾") {
          arr[i][j - 2].pic = "💥";
          setTimeout(() => {
            arr[i][j - 2].pic = "⬛️";
          }, 500);
          arr[1][1].pic = "👾";
          player.play("./sounds/lifelost.mp3");
          life.value--;
          if (life.value < 1) {
            player.play("./sounds/gameover.mp3");
          }
        }
        /////////////////////////////////////felfele töröl
        if (arr[i - 1] && arr[i - 1][j - 1].pic === "⬛️") {
          arr[i - 1][j - 1].pic = "💥";
          setTimeout(() => {
            arr[i - 1][j - 1].pic = "⬛️";
          }, 500);
        }
        if (
          arr[i - 1] &&
          arr[i - 1][j - 1].pic === "🎃" &&
          arr[i - 1][j - 1].value === "🔑"
        ) {
          arr[i - 1][j - 1].pic = "💥";
          setTimeout(() => {
            arr[i - 1][j - 1].pic = "🔑";
          }, 500);
        }
        if (
          arr[i - 1] &&
          arr[i - 1][j - 1].pic === "🎃" &&
          arr[i - 1][j - 1].value === "🏰"
        ) {
          arr[i - 1][j - 1].pic = "💥";
          setTimeout(() => {
            arr[i - 1][j - 1].pic = "🏰";
          }, 500);
        }

        if (
          arr[i - 1] &&
          arr[i - 1][j - 1].pic === "🎃" &&
          arr[i - 1][j - 1].value === "🍭"
        ) {
          arr[i - 1][j - 1].pic = "💥";
          setTimeout(() => {
            arr[i - 1][j - 1].pic = "🍭";
          }, 500);
        }

        if (
          arr[i - 1] &&
          arr[i - 1][j - 1].pic === "🎃" &&
          arr[i - 1][j - 1].value === "🥦"
        ) {
          arr[i - 1][j - 1].pic = "💥";
          setTimeout(() => {
            arr[i - 1][j - 1].pic = "🥦";
          }, 500);
        }

        if (arr[i - 1] && arr[i - 1][j - 1].pic === "🎃") {
          arr[i - 1][j - 1].pic = "💥";
          setTimeout(() => {
            arr[i - 1][j - 1].pic = "⬛️";
          }, 500);
        }
        if (arr[i - 1] && arr[i - 1][j - 1].pic === "👹") {
          arr[i - 1][j - 1].pic = "💥";
          setTimeout(() => {
            arr[i - 1][j - 1].pic = "⬛️";
          }, 500);
        }
        if (arr[i - 1] && arr[i - 1][j - 1].pic === "👺") {
          arr[i - 1][j - 1].pic = "💥";
          setTimeout(() => {
            arr[i - 1][j - 1].pic = "⬛️";
          }, 500);
        }
        if (arr[i - 1] && arr[i - 1][j - 1].pic === "👻") {
          arr[i - 1][j - 1].pic = "💥";
          setTimeout(() => {
            arr[i - 1][j - 1].pic = "⬛️";
          }, 500);
        }
        if (arr[i - 1] && arr[i - 1][j - 1].pic === "👽") {
          arr[i - 1][j - 1].pic = "💥";
          setTimeout(() => {
            arr[i - 1][j - 1].pic = "⬛️";
          }, 500);
        }
        if (arr[i - 1] && arr[i - 1][j - 1].pic === "🤖") {
          arr[i - 1][j - 1].pic = "💥";
          setTimeout(() => {
            arr[i - 1][j - 1].pic = "⬛️";
          }, 500);
        }

        if (arr[i - 1] && arr[i - 1][j - 1].pic === "👾") {
          arr[i - 1][j - 1].pic = "💥";
          setTimeout(() => {
            arr[i - 1][j - 1].pic = "⬛️";
          }, 500);
          arr[1][1].pic = "👾";
          player.play("./sounds/lifelost.mp3");
          life.value--;
          if (life.value < 1) {
            player.play("./sounds/gameover.mp3");
          }
        }

        /////////////////////////////////////////////lefele töröl
        if (arr[i + 1] && arr[i + 1][j - 1].pic === "⬛️") {
          arr[i + 1][j - 1].pic = "💥";
          setTimeout(() => {
            arr[i + 1][j - 1].pic = "⬛️";
          }, 500);
        }
        if (
          arr[i + 1] &&
          arr[i + 1][j - 1].pic === "🎃" &&
          arr[i + 1][j - 1].value === "🔑"
        ) {
          arr[i + 1][j - 1].pic = "💥";
          setTimeout(() => {
            arr[i + 1][j - 1].pic = "🔑";
          }, 500);
        }
        if (
          arr[i + 1] &&
          arr[i + 1][j - 1].pic === "🎃" &&
          arr[i + 1][j - 1].value === "🏰"
        ) {
          arr[i + 1][j - 1].pic = "💥";
          setTimeout(() => {
            arr[i + 1][j - 1].pic = "🏰";
          }, 500);
        }

        if (
          arr[i + 1] &&
          arr[i + 1][j - 1].pic === "🎃" &&
          arr[i + 1][j - 1].value === "🥦"
        ) {
          arr[i + 1][j - 1].pic = "💥";
          setTimeout(() => {
            arr[i + 1][j - 1].pic = "🥦";
          }, 500);
        }

        if (
          arr[i + 1] &&
          arr[i + 1][j - 1].pic === "🎃" &&
          arr[i + 1][j - 1].value === "🍭"
        ) {
          arr[i + 1][j - 1].pic = "💥";
          setTimeout(() => {
            arr[i + 1][j - 1].pic = "🍭";
          }, 500);
        }

        if (arr[i + 1] && arr[i + 1][j - 1].pic === "🎃") {
          arr[i + 1][j - 1].pic = "💥";
          setTimeout(() => {
            arr[i + 1][j - 1].pic = "⬛️";
          }, 500);
        }
        if (arr[i + 1] && arr[i + 1][j - 1].pic === "👹") {
          arr[i + 1][j - 1].pic = "💥";
          setTimeout(() => {
            arr[i + 1][j - 1].pic = "⬛️";
          }, 500);
        }
        if (arr[i + 1] && arr[i + 1][j - 1].pic === "👺") {
          arr[i + 1][j - 1].pic = "💥";
          setTimeout(() => {
            arr[i + 1][j - 1].pic = "⬛️";
          }, 500);
        }
        if (arr[i + 1] && arr[i + 1][j - 1].pic === "👻") {
          arr[i + 1][j - 1].pic = "💥";
          setTimeout(() => {
            arr[i + 1][j - 1].pic = "⬛️";
          }, 500);
        }
        if (arr[i + 1] && arr[i + 1][j - 1].pic === "👽") {
          arr[i + 1][j - 1].pic = "💥";
          setTimeout(() => {
            arr[i + 1][j - 1].pic = "⬛️";
          }, 500);
        }
        if (arr[i + 1] && arr[i + 1][j - 1].pic === "🤖") {
          arr[i + 1][j - 1].pic = "💥";
          setTimeout(() => {
            arr[i + 1][j - 1].pic = "⬛️";
          }, 500);
        }

        if (arr[i + 1] && arr[i + 1][j - 1].pic === "👾") {
          arr[i + 1][j - 1].pic = "💥";
          setTimeout(() => {
            arr[i + 1][j - 1].pic = "⬛️";
          }, 500);
          arr[1][1].pic = "👾";
          player.play("./sounds/lifelost.mp3");
          life.value--;
          if (life.value < 1) {
            player.play("./sounds/gameover.mp3");
          }
        }
      }
    }, 1000);
    return arr;
  }
};

const addBombUp = (arr) => {
  let index = getPlayerpos(arr);
  let i = index[0];
  let j = index[1];
  if (arr[i - 1] && arr[i - 1][j].pic === "⬛️") {
    player.play("./sounds/placebomb.mp3");
    arr[i - 1][j].pic = "💣";
    let time = 3;
    setInterval(() => {
      time--;
      if (time === 0) {
        player.play("./sounds/Explosion.mp3");
        arr[i - 1][j].pic = "⬛️";
        /////////////////////////////////////////////////// jobbra töröl
        if (arr[i - 1] && arr[i - 1][j + 1].pic === "⬛️") {
          arr[i - 1][j + 1].pic = "💥";
          setTimeout(() => {
            arr[i - 1][j + 1].pic = "⬛️";
          }, 500);
        }
        if (
          arr[i - 1] &&
          arr[i - 1][j + 1].pic === "🎃" &&
          arr[i - 1][j + 1].value === "🔑"
        ) {
          arr[i - 1][j + 1].pic = "💥";
          setTimeout(() => {
            arr[i - 1][j + 1].pic = "🔑";
          }, 500);
        }
        if (
          arr[i - 1] &&
          arr[i - 1][j + 1].pic === "🎃" &&
          arr[i - 1][j + 1].value === "🏰"
        ) {
          arr[i - 1][j + 1].pic = "💥";
          setTimeout(() => {
            arr[i - 1][j + 1].pic = "🏰";
          }, 500);
        }

        if (
          arr[i - 1] &&
          arr[i - 1][j + 1].pic === "🎃" &&
          arr[i - 1][j + 1].value === "🍭"
        ) {
          arr[i - 1][j + 1].pic = "💥";
          setTimeout(() => {
            arr[i - 1][j + 1].pic = "🍭";
          }, 500);
        }

        if (
          arr[i - 1] &&
          arr[i - 1][j + 1].pic === "🎃" &&
          arr[i - 1][j + 1].value === "🥦"
        ) {
          arr[i - 1][j + 1].pic = "💥";
          setTimeout(() => {
            arr[i - 1][j + 1].pic = "🥦";
          }, 500);
        }

        if (arr[i - 1] && arr[i - 1][j + 1].pic === "🎃") {
          arr[i - 1][j + 1].pic = "💥";
          setTimeout(() => {
            arr[i - 1][j + 1].pic = "⬛️";
          }, 500);
        }
        if (arr[i - 1] && arr[i - 1][j + 1].pic === "👹") {
          arr[i - 1][j + 1].pic = "⬛️";
        }
        if (arr[i - 1] && arr[i - 1][j + 1].pic === "👺") {
          arr[i - 1][j + 1].pic = "💥";
          setTimeout(() => {
            arr[i - 1][j + 1].pic = "⬛️";
          }, 500);
        }
        if (arr[i - 1] && arr[i - 1][j + 1].pic === "👻") {
          arr[i - 1][j + 1].pic = "💥";
          setTimeout(() => {
            arr[i - 1][j + 1].pic = "⬛️";
          }, 500);
        }
        if (arr[i - 1] && arr[i - 1][j + 1].pic === "👽") {
          arr[i - 1][j + 1].pic = "💥";
          setTimeout(() => {
            arr[i - 1][j + 1].pic = "⬛️";
          }, 500);
        }
        if (arr[i - 1] && arr[i - 1][j + 1].pic === "🤖") {
          arr[i - 1][j + 1].pic = "💥";
          setTimeout(() => {
            arr[i - 1][j + 1].pic = "⬛️";
          }, 500);
        }

        if (arr[i - 1] && arr[i - 1][j + 1].pic === "👾") {
          arr[i - 1][j + 1].pic = "💥";
          setTimeout(() => {
            arr[i - 1][j + 1].pic = "⬛️";
          }, 500);
          arr[1][1].pic = "👾";
          player.play("./sounds/lifelost.mp3");
          life.value--;
          if (life.value < 1) {
            player.play("./sounds/gameover.mp3");
          }
        }
        ////////////////////////////////////////////balra töröl
        if (arr[i - 1] && arr[i - 1][j - 1].pic === "⬛️") {
          arr[i - 1][j - 1].pic = "💥";
          setTimeout(() => {
            arr[i - 1][j - 1].pic = "⬛️";
          }, 500);
        }
        if (
          arr[i - 1] &&
          arr[i - 1][j - 1].pic === "🎃" &&
          arr[i - 1][j - 1].value === "🔑"
        ) {
          arr[i - 1][j - 1].pic = "💥";
          setTimeout(() => {
            arr[i - 1][j - 1].pic = "🔑";
          }, 500);
        }
        if (
          arr[i - 1] &&
          arr[i - 1][j - 1].pic === "🎃" &&
          arr[i - 1][j - 1].value === "🏰"
        ) {
          arr[i - 1][j - 1].pic = "💥";
          setTimeout(() => {
            arr[i - 1][j - 1].pic = "🏰";
          }, 500);
        }
        if (
          arr[i - 1] &&
          arr[i - 1][j - 1].pic === "🎃" &&
          arr[i - 1][j - 1].value === "🥦"
        ) {
          arr[i - 1][j - 1].pic = "💥";
          setTimeout(() => {
            arr[i - 1][j - 1].pic = "🥦";
          }, 500);
        }
        if (
          arr[i - 1] &&
          arr[i - 1][j - 1].pic === "🎃" &&
          arr[i - 1][j - 1].value === "🍭"
        ) {
          arr[i - 1][j - 1].pic = "💥";
          setTimeout(() => {
            arr[i - 1][j - 1].pic = "🍭";
          }, 500);
        }

        if (arr[i - 1] && arr[i - 1][j - 1].pic === "🎃") {
          arr[i - 1][j - 1].pic = "💥";
          setTimeout(() => {
            arr[i - 1][j - 1].pic = "⬛️";
          }, 500);
        }
        if (arr[i - 1] && arr[i - 1][j - 1].pic === "👹") {
          arr[i - 1][j - 1].pic = "💥";
          setTimeout(() => {
            arr[i - 1][j - 1].pic = "⬛️";
          }, 500);
        }
        if (arr[i - 1] && arr[i - 1][j - 1].pic === "👺") {
          arr[i - 1][j - 1].pic = "💥";
          setTimeout(() => {
            arr[i - 1][j - 1].pic = "⬛️";
          }, 500);
        }
        if (arr[i - 1] && arr[i - 1][j - 1].pic === "👻") {
          arr[i - 1][j - 1].pic = "💥";
          setTimeout(() => {
            arr[i - 1][j - 1].pic = "⬛️";
          }, 500);
        }
        if (arr[i - 1] && arr[i - 1][j - 1].pic === "👽") {
          arr[i - 1][j - 1].pic = "💥";
          setTimeout(() => {
            arr[i - 1][j - 1].pic = "⬛️";
          }, 500);
        }
        if (arr[i - 1] && arr[i - 1][j - 1].pic === "🤖") {
          arr[i - 1][j - 1].pic = "💥";
          setTimeout(() => {
            arr[i - 1][j - 1].pic = "⬛️";
          }, 500);
        }
        if (
          arr[i - 1] &&
          arr[i - 1][j - 1].pic === "🎃" &&
          arr[i - 1][j - 1].value === "🥦"
        ) {
          arr[i - 1][j - 1].pic = "💥";
          setTimeout(() => {
            arr[i - 1][j - 1].pic = "🥦";
          }, 500);
        }
        if (
          arr[i - 1] &&
          arr[i - 1][j - 1].pic === "🎃" &&
          arr[i - 1][j - 1].value === "🍭"
        ) {
          arr[i - 1][j - 1].pic = "💥";
          setTimeout(() => {
            arr[i - 1][j - 1].pic = "🍭";
          }, 500);
        }

        if (arr[i - 1] && arr[i - 1][j - 1].pic === "👾") {
          arr[i - 1][j - 1].pic = "💥";
          setTimeout(() => {
            arr[i - 1][j - 1].pic = "⬛️";
          }, 500);
          arr[1][1].pic = "👾";
          player.play("./sounds/lifelost.mp3");
          life.value--;
          if (life.value < 1) {
            player.play("./sounds/gameover.mp3");
          }
        }
        /////////////////////////////////////felfele töröl
        if (arr[i - 2] && arr[i - 2][j].pic === "⬛️") {
          arr[i - 2][j].pic = "💥";
          setTimeout(() => {
            arr[i - 2][j].pic = "⬛️";
          }, 500);
        }
        if (
          arr[i - 2] &&
          arr[i - 2][j].pic === "🎃" &&
          arr[i - 2][j].value === "🔑"
        ) {
          arr[i - 2][j].pic = "💥";
          setTimeout(() => {
            arr[i - 2][j].pic = "🔑";
          }, 500);
        }
        if (
          arr[i - 2] &&
          arr[i - 2][j].pic === "🎃" &&
          arr[i - 2][j].value === "🏰"
        ) {
          arr[i - 2][j].pic = "💥";
          setTimeout(() => {
            arr[i - 2][j].pic = "🏰";
          }, 500);
        }

        if (
          arr[i - 2] &&
          arr[i - 2][j].pic === "🎃" &&
          arr[i - 2][j].value === "🍭"
        ) {
          arr[i - 2][j].pic = "💥";
          setTimeout(() => {
            arr[i - 2][j].pic = "🍭";
          }, 500);
        }

        if (
          arr[i - 2] &&
          arr[i - 2][j].pic === "🎃" &&
          arr[i - 2][j].value === "🥦"
        ) {
          arr[i - 2][j].pic = "💥";
          setTimeout(() => {
            arr[i - 2][j].pic = "🥦";
          }, 500);
        }

        if (arr[i - 2] && arr[i - 2][j].pic === "🎃") {
          arr[i - 2][j].pic = "💥";
          setTimeout(() => {
            arr[i - 2][j].pic = "⬛️";
          }, 500);
        }
        if (arr[i - 2] && arr[i - 2][j].pic === "👹") {
          arr[i - 2][j].pic = "💥";
          setTimeout(() => {
            arr[i - 2][j].pic = "⬛️";
          }, 500);
        }
        if (arr[i - 2] && arr[i - 2][j].pic === "👺") {
          arr[i - 2][j].pic = "💥";
          setTimeout(() => {
            arr[i - 2][j].pic = "⬛️";
          }, 500);
        }
        if (arr[i - 2] && arr[i - 2][j].pic === "👻") {
          arr[i - 2][j].pic = "💥";
          setTimeout(() => {
            arr[i - 2][j].pic = "⬛️";
          }, 500);
        }
        if (arr[i - 2] && arr[i - 2][j].pic === "👽") {
          arr[i - 2][j].pic = "💥";
          setTimeout(() => {
            arr[i - 2][j].pic = "⬛️";
          }, 500);
        }
        if (arr[i - 2] && arr[i - 2][j].pic === "🤖") {
          arr[i - 2][j].pic = "💥";
          setTimeout(() => {
            arr[i - 2][j].pic = "⬛️";
          }, 500);
        }

        if (arr[i - 2] && arr[i - 2][j].pic === "👾") {
          arr[i - 2][j].pic = "💥";
          setTimeout(() => {
            arr[i - 2][j].pic = "⬛️";
          }, 500);

          arr[1][1].pic = "👾";
          player.play("./sounds/lifelost.mp3");
          life.value--;
          if (life.value < 1) {
            player.play("./sounds/gameover.mp3");
          }
        }

        /////////////////////////////////////////////lefele töröl
        if (arr[i] && arr[i][j].pic === "⬛️") {
          arr[i][j].pic = "💥";
          setTimeout(() => {
            arr[i][j].pic = "⬛️";
          }, 500);
        }

        if (
          arr[i] &&
          arr[i][j].pic === "🎃" &&
          ["🔑", "🏰", "🥦", "🍭"].includes(arr[i][j].value)
        ) {
          arr[i][j].pic = "💥";
          setTimeout(() => {
            arr[i][j].pic = arr[i][j].value;
          }, 500);
        }

        if (
          arr[i] &&
          ["🎃", "👹", "👺", "👻", "👽", "🤖"].includes(arr[i][j].pic)
        ) {
          arr[i][j].pic = "💥";
          setTimeout(() => {
            arr[i][j].pic = "⬛️";
          }, 500);
        }

        if (arr[i] && arr[i][j].pic === "👾") {
          arr[i][j].pic = "💥";
          setTimeout(() => {
            arr[i][j].pic = "⬛️";
          }, 500);
          arr[1][1].pic = "👾";
          player.play("./sounds/lifelost.mp3");
          life.value--;
          if (life.value < 1) {
            player.play("./sounds/gameover.mp3");
          }
        }
      }
    }, 1000);
    return arr;
  }
};

const addBombDown = (arr) => {
  let index = getPlayerpos(arr);
  let i = index[0];
  let j = index[1];
  if (arr[i + 1] && arr[i + 1][j].pic === "⬛️") {
    player.play("./sounds/placebomb.mp3");
    arr[i + 1][j].pic = "💣";
    let time = 3;
    setInterval(() => {
      time--;
      if (time === 0) {
        player.play("./sounds/Explosion.mp3");
        arr[i + 1][j].pic = "⬛️";
        /////////////////////////////////////////////////// jobbra töröl
        if (arr[i + 1] && arr[i + 1][j + 1].pic === "⬛️") {
          arr[i + 1][j + 1].pic = "💥";
          setTimeout(() => {
            arr[i + 1][j + 1].pic = "⬛️";
          }, 500);
        }
        if (
          arr[i + 1] &&
          arr[i + 1][j + 1].pic === "🎃" &&
          arr[i + 1][j + 1].value === "🔑"
        ) {
          arr[i + 1][j + 1].pic = "💥";
          setTimeout(() => {
            arr[i + 1][j + 1].pic = "🔑";
          }, 500);
        }
        if (
          arr[i + 1] &&
          arr[i + 1][j + 1].pic === "🎃" &&
          arr[i + 1][j + 1].value === "🏰"
        ) {
          arr[i + 1][j + 1].pic = "💥";
          setTimeout(() => {
            arr[i + 1][j + 1].pic = "🏰";
          }, 500);
        }

        if (
          arr[i + 1] &&
          arr[i + 1][j + 1].pic === "🎃" &&
          arr[i + 1][j + 1].value === "🍭"
        ) {
          arr[i + 1][j + 1].pic = "💥";
          setTimeout(() => {
            arr[i + 1][j + 1].pic = "🍭";
          }, 500);
        }

        if (
          arr[i + 1] &&
          arr[i + 1][j + 1].pic === "🎃" &&
          arr[i + 1][j + 1].value === "🥦"
        ) {
          arr[i + 1][j + 1].pic = "💥";
          setTimeout(() => {
            arr[i + 1][j + 1].pic = "🥦";
          }, 500);
        }

        if (arr[i + 1] && arr[i + 1][j + 1].pic === "🎃") {
          arr[i + 1][j + 1].pic = "💥";
          setTimeout(() => {
            arr[i + 1][j + 1].pic = "⬛️";
          }, 500);
        }
        if (arr[i + 1] && arr[i + 1][j + 1].pic === "👹") {
          arr[i + 1][j + 1].pic = "💥";
          setTimeout(() => {
            arr[i + 1][j + 1].pic = "⬛️";
          }, 500);
        }
        if (arr[i + 1] && arr[i + 1][j + 1].pic === "👺") {
          arr[i + 1][j + 1].pic = "💥";
          setTimeout(() => {
            arr[i + 1][j + 1].pic = "⬛️";
          }, 500);
        }
        if (arr[i + 1] && arr[i + 1][j + 1].pic === "👻") {
          arr[i + 1][j + 1].pic = "💥";
          setTimeout(() => {
            arr[i + 1][j + 1].pic = "⬛️";
          }, 500);
        }
        if (arr[i + 1] && arr[i + 1][j + 1].pic === "👽") {
          arr[i + 1][j + 1].pic = "💥";
          setTimeout(() => {
            arr[i + 1][j + 1].pic = "⬛️";
          }, 500);
        }
        if (arr[i + 1] && arr[i + 1][j + 1].pic === "🤖") {
          arr[i + 1][j + 1].pic = "💥";
          setTimeout(() => {
            arr[i + 1][j + 1].pic = "⬛️";
          }, 500);
        }

        if (arr[i + 1] && arr[i + 1][j + 1].pic === "👾") {
          arr[i + 1][j + 1].pic = "💥";
          setTimeout(() => {
            arr[i + 1][j + 1].pic = "⬛️";
          }, 500);
          arr[1][1].pic = "👾";
          player.play("./sounds/lifelost.mp3");
          life.value--;
          if (life.value < 1) {
            player.play("./sounds/gameover.mp3");
          }
        }
        ////////////////////////////////////////////balra töröl
        if (arr[i + 1] && arr[i + 1][j - 1].pic === "⬛️") {
          arr[i + 1][j - 1].pic = "💥";
          setTimeout(() => {
            arr[i + 1][j - 1].pic = "⬛️";
          }, 500);
        }
        if (
          arr[i + 1] &&
          arr[i + 1][j - 1].pic === "🎃" &&
          arr[i + 1][j - 1].value === "🔑"
        ) {
          arr[i + 1][j - 1].pic = "💥";
          setTimeout(() => {
            arr[i + 1][j - 1].pic = "🔑";
          }, 500);
        }
        if (
          arr[i + 1] &&
          arr[i + 1][j - 1].pic === "🎃" &&
          arr[i + 1][j - 1].value === "🏰"
        ) {
          arr[i + 1][j - 1].pic = "💥";
          setTimeout(() => {
            arr[i + 1][j - 1].pic = "🏰";
          }, 500);
        }

        if (
          arr[i + 1] &&
          arr[i + 1][j - 1].pic === "🎃" &&
          arr[i + 1][j - 1].value === "🥦"
        ) {
          arr[i + 1][j - 1].pic = "💥";
          setTimeout(() => {
            arr[i + 1][j - 1].pic = "🥦";
          }, 500);
        }

        if (
          arr[i + 1] &&
          arr[i + 1][j - 1].pic === "🎃" &&
          arr[i + 1][j - 1].value === "🍭"
        ) {
          arr[i + 1][j - 1].pic = "💥";
          setTimeout(() => {
            arr[i + 1][j - 1].pic = "🍭";
          }, 500);
        }

        if (arr[i + 1] && arr[i + 1][j - 1].pic === "🎃") {
          arr[i + 1][j - 1].pic = "💥";
          setTimeout(() => {
            arr[i + 1][j - 1].pic = "⬛️";
          }, 500);
        }
        if (arr[i + 1] && arr[i + 1][j - 1].pic === "👹") {
          arr[i + 1][j - 1].pic = "💥";
          setTimeout(() => {
            arr[i + 1][j - 1].pic = "⬛️";
          }, 500);
        }
        if (arr[i + 1] && arr[i + 1][j - 1].pic === "👺") {
          arr[i + 1][j - 1].pic = "💥";
          setTimeout(() => {
            arr[i + 1][j - 1].pic = "⬛️";
          }, 500);
        }
        if (arr[i + 1] && arr[i + 1][j - 1].pic === "👻") {
          arr[i + 1][j - 1].pic = "💥";
          setTimeout(() => {
            arr[i + 1][j - 1].pic = "⬛️";
          }, 500);
        }
        if (arr[i + 1] && arr[i + 1][j - 1].pic === "👽") {
          arr[i + 1][j - 1].pic = "💥";
          setTimeout(() => {
            arr[i + 1][j - 1].pic = "⬛️";
          }, 500);
        }
        if (arr[i + 1] && arr[i + 1][j - 1].pic === "🤖") {
          arr[i + 1][j - 1].pic = "💥";
          setTimeout(() => {
            arr[i + 1][j - 1].pic = "⬛️";
          }, 500);
        }

        if (arr[i + 1] && arr[i + 1][j - 1].pic === "👾") {
          arr[i + 1][j - 1].pic = "💥";
          setTimeout(() => {
            arr[i + 1][j - 1].pic = "⬛️";
          }, 500);
          arr[1][1].pic = "👾";
          player.play("./sounds/lifelost.mp3");
          life.value--;
          if (life.value < 1) {
            player.play("./sounds/gameover.mp3");
          }
        }
        /////////////////////////////////////felfele töröl
        if (arr[i] && arr[i][j].pic === "⬛️") {
          arr[i][j].pic = "💥";
          setTimeout(() => {
            arr[i][j].pic = "⬛️";
          }, 500);
        }
        if (arr[i] && arr[i][j].pic === "🎃" && arr[i][j].value === "🔑") {
          arr[i][j].pic = "💥";
          setTimeout(() => {
            arr[i][j].pic = "🔑";
          }, 500);
        }
        if (arr[i] && arr[i][j].pic === "🎃" && arr[i][j].value === "🏰") {
          arr[i][j].pic = "💥";
          setTimeout(() => {
            arr[i][j].pic = "🏰";
          }, 500);
        }
        if (arr[i] && arr[i][j].pic === "🎃" && arr[i][j].value === "🍭") {
          arr[i][j].pic = "💥";
          setTimeout(() => {
            arr[i][j].pic = "🍭";
          }, 500);
        }

        if (arr[i] && arr[i][j].pic === "🎃" && arr[i][j].value === "🥦") {
          arr[i][j].pic = "💥";
          setTimeout(() => {
            arr[i][j].pic = "🥦";
          }, 500);
        }

        if (arr[i] && arr[i][j].pic === "🎃") {
          arr[i][j].pic = "💥";
          setTimeout(() => {
            arr[i][j].pic = "⬛️";
          }, 500);
        }
        if (arr[i] && arr[i][j].pic === "👹") {
          arr[i][j].pic = "💥";
          setTimeout(() => {
            arr[i][j].pic = "⬛️";
          }, 500);
        }
        if (arr[i] && arr[i][j].pic === "👺") {
          arr[i][j].pic = "💥";
          setTimeout(() => {
            arr[i][j].pic = "⬛️";
          }, 500);
        }
        if (arr[i] && arr[i][j].pic === "👻") {
          arr[i][j].pic = "💥";
          setTimeout(() => {
            arr[i][j].pic = "⬛️";
          }, 500);
        }
        if (arr[i] && arr[i][j].pic === "👽") {
          arr[i][j].pic = "💥";
          setTimeout(() => {
            arr[i][j].pic = "⬛️";
          }, 500);
        }
        if (arr[i] && arr[i][j].pic === "🤖") {
          arr[i][j].pic = "💥";
          setTimeout(() => {
            arr[i][j].pic = "⬛️";
          }, 500);
        }

        if (arr[i] && arr[i][j].pic === "👾") {
          arr[i][j].pic = "💥";
          setTimeout(() => {
            arr[i][j].pic = "⬛️";
          }, 500);
          arr[1][1].pic = "👾";
          player.play("./sounds/lifelost.mp3");
          life.value--;
          if (life.value < 1) {
            player.play("./sounds/gameover.mp3");
          }
        }

        /////////////////////////////////////////////lefele töröl
        if (arr[i + 2] && arr[i + 2][j].pic === "⬛️") {
          arr[i + 2][j].pic = "💥";
          setTimeout(() => {
            arr[i + 2][j].pic = "⬛️";
          }, 500);
        }
        if (
          arr[i + 2] &&
          arr[i + 2][j].pic === "🎃" &&
          arr[i + 2][j].value === "🔑"
        ) {
          arr[i + 2][j].pic = "💥";
          setTimeout(() => {
            arr[i + 2][j].pic = "🔑";
          }, 500);
        }
        if (
          arr[i + 2] &&
          arr[i + 2][j].pic === "🎃" &&
          arr[i + 2][j].value === "🏰"
        ) {
          arr[i + 2][j].pic = "💥";
          setTimeout(() => {
            arr[i + 2][j].pic = "🏰";
          }, 500);
        }

        if (
          arr[i + 2] &&
          arr[i + 2][j].pic === "🎃" &&
          arr[i + 2][j].value === "🥦"
        ) {
          arr[i + 2][j].pic = "💥";
          setTimeout(() => {
            arr[i + 2][j].pic = "🥦";
          }, 500);
        }

        if (
          arr[i + 2] &&
          arr[i + 2][j].pic === "🎃" &&
          arr[i + 2][j].value === "🍭"
        ) {
          arr[i + 2][j].pic = "💥";
          setTimeout(() => {
            arr[i + 2][j].pic = "🍭";
          }, 500);
        }

        if (arr[i + 2] && arr[i + 2][j].pic === "🎃") {
          arr[i + 2][j].pic = "💥";
          setTimeout(() => {
            arr[i + 2][j].pic = "⬛️";
          }, 500);
        }
        if (arr[i + 2] && arr[i + 2][j].pic === "👹") {
          arr[i + 2][j].pic = "💥";
          setTimeout(() => {
            arr[i + 2][j].pic = "⬛️";
          }, 500);
        }
        if (arr[i + 2] && arr[i + 2][j].pic === "👺") {
          arr[i + 2][j].pic = "💥";
          setTimeout(() => {
            arr[i + 2][j].pic = "⬛️";
          }, 500);
        }
        if (arr[i + 2] && arr[i + 2][j].pic === "👻") {
          arr[i + 2][j].pic = "💥";
          setTimeout(() => {
            arr[i + 2][j].pic = "⬛️";
          }, 500);
        }
        if (arr[i + 2] && arr[i + 2][j].pic === "👽") {
          arr[i + 2][j].pic = "💥";
          setTimeout(() => {
            arr[i + 2][j].pic = "⬛️";
          }, 500);
        }
        if (arr[i + 2] && arr[i + 2][j].pic === "🤖") {
          arr[i + 2][j].pic = "💥";
          setTimeout(() => {
            arr[i + 2][j].pic = "⬛️";
          }, 500);
        }

        if (arr[i + 2] && arr[i + 2][j].pic === "👾") {
          arr[i + 2][j].pic = "💥";
          setTimeout(() => {
            arr[i + 2][j].pic = "⬛️";
          }, 500);

          arr[1][1].pic = "👾";
          player.play("./sounds/lifelost.mp3");
          life.value--;
          if (life.value < 1) {
            player.play("./sounds/gameover.mp3");
          }
        }
      }
    }, 1000);
    return arr;
  }
};

module.exports = {
  getPlayerpos,
  movementEnemy1,
  movementEnemy2,
  movementEnemy3,
  movementEnemy4,
  movementEnemy5,
  movementA,
  movementD,
  movementS,
  movementW,
  addBombUp,
  addBombDown,
  addBombLeft,
  addBombRight,
  castle,
  life,
};
