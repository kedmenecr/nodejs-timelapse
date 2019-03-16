const { exec } = require("child_process");

// base
// further implemnattionw ill need to see the format
// cat *.jpg | ffmpeg -framerate 20 -f image2pipe -i - ./output20.mov

let frameRate = 20;
let outputName = "movie";

if (process.argv[2]) {
  frameRate = process.argv[2];
}
if (process.argv[3]) {
  outputName = process.argv[3];
}

exec(
  `cat *.jpg || ffmpeg -framerate ${frameRate} -f image2pipe -i - ./${outputName}.ov`,
  err => {
    if (err) {
      console.log("Couldn't execute the operation, sry");
    }
  }
);
