/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let returnArray = numbers;
    if(numbers.length <= 0){
        return returnArray;
    }
    else if(numbers.length == 1){
        returnArray = [numbers[0], numbers[0]];
    }
    else{
        returnArray = [numbers[0], numbers[numbers.length-1]];
    }
    return returnArray;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripledLowPrices = numbers.map(
        // If the price is less than 10, double the price, otherwise use the price unchanged
        (numbers: number): number => (numbers < 0) ? (3 * numbers) : numbers * 3
      );
    return tripledLowPrices;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const tripledLowPrices = numbers.map(
        // If the price is less than 10, double the price, otherwise use the price unchanged
        (numbers: string): number => (!Number.isNaN(Number(numbers))) ? (Number(numbers)) : 0
      );
    return tripledLowPrices;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const tripledLowPrices = amounts.map(
        // If the price is less than 10, double the price, otherwise use the price unchanged
        (amounts: string): number => (!Number.isNaN(Number(amounts.replace('$', '')))) ? Number(amounts.replace('$', '')) : 0
      );
    return tripledLowPrices;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const tripledLowPrices = messages.map(
        // If the price is less than 10, double the price, otherwise use the price unchanged
        (messages: string): string => (messages.includes('!')) ? messages.toUpperCase() : messages
      );

      const filtered = tripledLowPrices.filter(
        // Check if the string in `sentence` includes the substring "?"
        (sentence: string): boolean => !sentence.includes("?"));
    return filtered;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const filtered = words.filter(
        // Check if the string in `sentence` includes the substring "?"
        (sentence: string): boolean => sentence.length<4);
    return filtered.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const filtered = colors.filter(
        // Check if the string in `sentence` includes the substring "?"
        (colors: string): boolean => colors == 'red' || colors == 'blue' || colors == 'green');
    if(filtered.length == colors.length){
        return true;
    }
    else{
        return false;
    }
    
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const filtered = addends.join('+');
    filtered.indexOf("+");
    const number = addends.reduce((accumulator, currentValue) => accumulator + currentValue, 0).toString();
    if(number != '0'){
        var newfiltered = number + '=' + filtered;
    }
    else{
        var newfiltered = number + '=0';
    }
    return newfiltered;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {

    const firstLowPriceIndex = values.findIndex((values: number): boolean => values < 0);
    let sum = 0;
    if (firstLowPriceIndex == -1){
        sum = values.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        const pricesAtEnd = [...values, sum];
        return pricesAtEnd;
    }
    else{
        const newarray = values.slice(0, firstLowPriceIndex);
        const newarray3 = values.slice(0, firstLowPriceIndex+1);
        const pricesAtEnd = [...values];
        sum = newarray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        newarray3.push(sum);
        const newarray2 = newarray3.concat(values.slice(firstLowPriceIndex+1, values.length));
        
        return newarray2
    }
}
