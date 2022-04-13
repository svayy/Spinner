const spinner = ['\r|   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   '];
const delay = 500;
let delaySum = 400;

for (const line of spinner) {
  setTimeout(() => {
    process.stdout.write(line);
  }, delaySum)
  delaySum += delay;
} 