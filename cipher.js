const encode = (word) => {
    replaced_word = word.replaceAll(" ", 0);
    let enc_array = new Array(replaced_word.length);
    let mid = Math.abs(Math.floor(replaced_word.length / 2));

    let covered = 0;
    enc_array[mid] = replaced_word[covered];
    mid += 1;
    while (covered < replaced_word.length) {
        if (covered % 2 == 0) {
            mid += covered;
        } else {
            mid -= covered;
        }
        enc_array[mid] = replaced_word[covered];
        covered++;
    }

    console.log(enc_array.join(""));
};

const word = process.argv[2] || "sfdk";
encode(word);
