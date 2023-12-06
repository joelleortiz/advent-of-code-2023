const test6Inputs = `Time:      7  15   30
Distance:  9  40  200`;

const day6Inputs = `Time:        46     82     84     79
Distance:   347   1522   1406   1471`;

const parsedDay6Inputs = day6Inputs.split("\n");

const times = [...parsedDay6Inputs[0].matchAll(/\d+/g)].map((x) => +x[0]);
const distance = [...parsedDay6Inputs[1].matchAll(/\d+/g)].map((x) => +x[0]);

const concatTime = +times.join("");
const concatDist = +distance.join("");

const moe = [concatTime].reduce((marginOfError, time, idx) => {
  let ways = 0;

  for (let ms = 0; ms <= time; ms++) {
    const timeLeft = time - ms;
    const maxDist = timeLeft * ms;

    if (maxDist > [concatDist][idx]) {
      ways++;
    }
  }

  //   console.debug(ways);

  return marginOfError * ways;
}, 1);

console.debug(moe);
