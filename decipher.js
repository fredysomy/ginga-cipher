const decode = (str) => {
    let dec_array = new Array(str.length);
    let mid = Math.abs(Math.floor(str.length / 2));
    let covered = 1;
    while (covered <= str.length) {
        dec_array[covered] = str[mid];
        
        if (covered % 2 == 0) {
            mid += covered;
        } else {
            mid -= covered;
        }
        covered++;
    }
    console.log(dec_array.join("").replaceAll("0", " "));
};

const str = process.argv[2];

decode(str);
