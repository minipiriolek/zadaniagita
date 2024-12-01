const processText = (text, { uppercase = false, reverse = false, removeSpecialChars = false } = {}) => {
    let result = text;

    if (removeSpecialChars) {
        result = result.replace(/@!&%/g, ''); 
    }

    if (uppercase) {
        result = result.toUpperCase(); 
    }

    if (reverse) {
        result = [...result].reverse().join('');
    }

    console.log(`Przetworzony tekst: ${result}`);
    return result;
};
processText('Hello, World!', { uppercase: true }); 
processText('Hello, World!', { reverse: true });  
processText('Hello, World!', { removeSpecialChars: true }); 
processText('Hello, World!', { uppercase: true, reverse: true, removeSpecialChars: true });
