const sentence = "hello there from lighthouse labs";
const delay = 50;


let delayTime = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delayTime);
  delayTime += delay;
}


