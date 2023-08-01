let args = process.argv.slice(2);
let mazeArray = [];

if (args.length < 3 || args[2].length < 5) {
    console.log("params needed: height width characters");
} else {
    let height = parseInt(args[0]);
    let width = parseInt(args[1]);
    let chars = args[2];
    let entry = Math.floor(Math.random() * (width - 4)) + 2;
    let entry2 = Math.floor(Math.random() * (width - 4)) + 2;
    let entry3 = Math.floor(Math.random() * (height - 4) + 2);

    console.log(`${height}x${width}${args[2]}`);

    for (let y = 0; y < height; y++) {
        let charsArray = [];
        let line = '';
        for (let x = 0; x < width; x++) {
            if (x == width - 1 && y == entry3 && (y - 1) !== chars) {
                line += chars.charAt(2);
                charsArray.push(chars.charAt(2));
            } else if (y == 0 && x == entry) {
                line += chars.charAt(3);
                charsArray.push(chars.charAt(3));

            } else if (y == height - 1 && x == entry2) {
                line += chars.charAt(4);
                charsArray.push(chars.charAt(4));

            } else if (y > 0 && y < height - 1 && x > 0 && x < width - 1 && Math.random() * 100 > 20) {
                line += chars.charAt(1);
                charsArray.push(chars.charAt(1));

            } else {
                line += chars.charAt(0);
                charsArray.push(chars.charAt(0));

            }
        }
        //console.log(line);
        mazeArray.push(charsArray);
    }
    mazeArray.forEach((line) => {
        console.log(line.join(''));
    });
}


