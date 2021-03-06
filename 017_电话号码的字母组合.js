/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const map = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z']
    }
    const result = []
    const build = (s, digits) => {
        if (!digits.length) return result.push(s)
        map[digits[0]].forEach(c => {
            build(s + c, digits.slice(1))
        })
    }
    if (!digits.length) return result
    build('', digits)
    return result
};
