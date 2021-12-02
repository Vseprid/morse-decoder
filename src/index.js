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
    ' ': ' ',
};

function decode(expr) {
    let morse = [];

    for (let i = 0; i < expr.length; i = i + 10) {
        morse.push(expr.substr(i, 10))
    }

   morse = morse.map(i => {
        i = i.replace(/10/g,'.' );
        i = i.replace(/11/g,'-' );
        i = i.replace('**********', ' ');
        i = i.replace(/0/g, '');
        return i
    })

    const readable = [];

    morse.forEach(sym => {
        readable.push(MORSE_TABLE[sym])
    });

    return readable.join('')
}


module.exports = {
    decode
}