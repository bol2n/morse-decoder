const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let MORSE_TABLE = {
        '.-':     'a',
        '-...':   'b',
        '-.-.':   'c',
        '-..':    'd',
        '.':      'e',
        '..-.':   'f',
        '--.':    'g',
        '....':   'h',
        '..':     'i',
        '.---':   'j',
        '-.-':    'k',
        '.-..':   'l',
        '--':     'm',
        '-.':     'n',
        '---':    'o',
        '.--.':   'p',
        '--.-':   'q',
        '.-.':    'r',
        '...':    's',
        '-':      't',
        '..-':    'u',
        '...-':   'v',
        '.--':    'w',
        '-..-':   'x',
        '-.--':   'y',
        '--..':   'z',
        '.----':  '1',
        '..---':  '2',
        '...--':  '3',
        '....-':  '4',
        '.....':  '5',
        '-....':  '6',
        '--...':  '7',
        '---..':  '8',
        '----.':  '9',
        '-----':  '0',
    };
    const MORSE_CODE = {
        '10':  '.',
        '11':  '-',
    }
    //create new stack
    let stack = [];
    //split the string by ten characters, remove the extra zeros in the beginning, create new array
    for (i = 0, j = 0; i < expr.length/10; i++) {
        let str = expr.slice(j, j+10);	
        while (str.startsWith('0')) {
        str = str.slice(1);
    }	
    //translate numbers into the morse signs with gaps if it needs
    let newStr = "";
    for (k = 0, l = 0; k < str.length/2; k++) {
            if (str !== "**********") {
            let morse = str.slice(l,l+2);
            newStr = newStr + MORSE_CODE[morse];
            l += 2;	
        }
        else  {
            k += 5;
        }
    }
    stack.push(newStr);
    j += 10;
}
    //decode our string
    let string = '';
    for (i = 0; i < stack.length; i++) {  
        if (stack[i] == false) {
            string += ` `;
            i += 1;
        }
        string +=  MORSE_TABLE[stack[i]];
    }
    return string
}

module.exports = {
    decode
}