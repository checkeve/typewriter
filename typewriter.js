const sentence = "hello there from lighthouse labs";

let i = 0;
for (const char of sentence) {
  setTimeout(() => { 
    process.stdout.write(char);
  }, 1000 + 50 * i); 
  i++;
};

setTimeout(() => {
  console.log();
}, 1000 + 50 * i)
