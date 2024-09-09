const args: string[] = process.argv.slice(2); // slice(2) removes the first two default arguments

interface InitialState {
  x: number;
  y: number;
  direction: string;
}

let initial: InitialState = { x: 0, y: 0, direction: "N" };

if (args.length > 0) {
  let start = 0;
  let numberOfWalk = "";
  let readyToWalk = false;
  const argument = args[0];

  while (start < argument.length) {
    switch (argument[start]) {
      case "R": {
        if (readyToWalk) {
          initial = walk(Number(numberOfWalk), initial);
          numberOfWalk = "";
          readyToWalk = false;
        }
        initial.direction = changeDirection(initial.direction, "R");
        break;
      }
      case "L": {
        if (readyToWalk) {
          initial = walk(Number(numberOfWalk), initial);
          numberOfWalk = "";
          readyToWalk = false;
        }
        initial.direction = changeDirection(initial.direction, "L");
        break;
      }
      case "W": {
        if (readyToWalk) {
          initial = walk(Number(numberOfWalk), initial);
          numberOfWalk = "";
          readyToWalk = false;
        }
        readyToWalk = true;
        break;
      }
      default: {
        if (/[0-9]/) numberOfWalk += argument[start];
        break;
      }
    }
    start++;
  }
  if (numberOfWalk !== "") {
    initial = walk(Number(numberOfWalk), initial);
  }
  console.log(
    `X: ${initial.x}, Y: ${initial.y}, Direction: ${mapDirection(
      initial.direction
    )}`
  );
} else {
  console.log("No arguments received.");
}

function changeDirection(direction: string, turn: string) {
  const directions = ["N", "E", "S", "W"];
  const index = directions.indexOf(direction);
  if (turn === "R") {
    return directions[(index + 1) % 4];
  }
  return directions[(index - 1 + 4) % 4];
}

function walk(distance: number, initial: InitialState): InitialState {
  const tempInitial = initial;
  const direction = tempInitial.direction;
  switch (direction) {
    case "N": {
      tempInitial.y += distance;
      break;
    }
    case "E": {
      tempInitial.x += distance;
      break;
    }
    case "S": {
      tempInitial.y -= distance;
      break;
    }
    case "W": {
      tempInitial.x -= distance;
      break;
    }
  }
  return tempInitial;
}

function mapDirection(direction: string): string {
  switch (direction) {
    case "N": {
      return "North";
    }
    case "E": {
      return "East";
    }
    case "S": {
      return "South";
    }
    case "W": {
      return "West";
    }
    default: {
      return "";
    }
  }
}
