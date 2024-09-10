// Handle bad/incorrect inputs (Lets the user know about the improper input and reprompt)
// Sanitizes every input to be all caps
// Example of invalid inputs are anything that's not a singular letter (or menu command)
export function sanitizeInput(input: string) {
    let onlyLetters = /^[a-zA-Z]+$/;
    if (onlyLetters.test(input)) {
        return input.toUpperCase();
    } else {
        return 'This is not a correct input, please input a letter.';
    }
}
