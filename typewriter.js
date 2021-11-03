const sentence = "hello there from lighthouse labs";

let delay = 0;
let gap = 110;
let buffer = 100;

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay);
  delay += gap;
}

setTimeout(() => {
  process.stdout.write('\n');
}, (gap * sentence.length + buffer));

