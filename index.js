const util = require("util");
const { performance } = require("perf_hooks");
const Promise = require("bluebird");
const exec = util.promisify(require("child_process").exec);
const fs = require("fs");

let primesToTest = [
  // 0 to x tests of prime numbers
  1000, 10000, 100000, 1000000, 10000000, 100000000, 200000000,
];
let tests = {
  //Simple object with the name:command syntax
  Node: "node --max-old-space-size=8192 ./tests/javascript.js",
  CPP: '.\\"tests/cpp/x64/Release/cpp.exe"',
  CSHARP: '.\\"tests/csharp/bin/Release/net6.0/csharp.exe"',
  Java: "java -jar ./tests/java/out/artifacts/java_jar/java.jar",
  Python: "python ./tests/python.py",
  PHP: "php ./tests/php.php",
  LUA: "lua ./tests/lua.lua",
};
const runPrimeTest = async (maxPrime, command) => {
  //Run the command and return the output of how many prime numbers it found
  const { stdout } = await exec(`${command} ${maxPrime}`);
  return parseInt(stdout);
};
const runAll = async () => {
  //Iterate through tests then iterate through primesToTest, check performance, and then write it to a csv
  await Promise.each(Object.keys(tests), async (lang) => {
    await Promise.each(primesToTest, async (p) => {
      let command = tests[lang];
      let startTime = performance.now();
      let prime = await runPrimeTest(p, command);
      let endTime = performance.now();
      let executionTime = endTime - startTime;
      console.log(
        `${lang} took ${executionTime}ms to finish ${p} prime calculations. With the results of ${prime}`
      );
      await fs.appendFile(
        "Benchmark.csv",
        `${lang},${p},${prime},${executionTime}\r\n`,
        (err) => {
          if (err) throw err;
        }
      );
    });
  });
};
runAll();
