// Description: Definition of the tile rules
export const simpleDefinition = {
    options: {
        saveInterval: 0.02,
        baseWeight: 10
    },
    tiles: [
        { edges: ['AAA', 'AAA', 'AAA', 'AAA'], type: 'floor', exceptions: undefined, weight: 30 },
        { edges: ['BBB', 'BBB', 'BCA', 'ACB'], type: 'wall', exceptions: undefined, weight: 3 },
        { edges: ['BBB', 'BCA', 'ACB', 'BBB'], type: 'wall', exceptions: undefined, weight: 3 },
        { edges: ['BCA', 'ACB', 'BBB', 'BBB'], type: 'wall', exceptions: undefined, weight: 3 },
        { edges: ['ACB', 'BBB', 'BBB', 'BCA'], type: 'wall', exceptions: undefined, weight: 3 },
        { edges: ['ACB', 'BCA', 'AAA', 'AAA'], type: 'wall', exceptions: {down: ['wall'], left: ['wall']}, weight: 5 },
        { edges: ['BCA', 'AAA', 'AAA', 'ACB'], type: 'wall', exceptions: {right: ['wall'], down: ['wall']}, weight: 5 },
        { edges: ['AAA', 'AAA', 'ACB', 'BCA'], type: 'wall', exceptions: {up: ['wall'], right: ['wall']}, weight: 5 },
        { edges: ['AAA', 'ACB', 'BCA', 'AAA'], type: 'wall', exceptions: {up: ['wall'], left: ['wall']}, weight: 5 },
        { edges: ['BBB', 'BCA', 'AAA', 'ACB'], type: 'wall', exceptions: {down: ['wall']}, weight: 5 },
        { edges: ['BCA', 'AAA', 'ACB', 'BBB'], type: 'wall', exceptions: {right: ['wall']}, weight: 5 },
        { edges: ['AAA', 'ACB', 'BBB', 'BCA'], type: 'wall', exceptions: {up: ['wall']}, weight: 5 },
        { edges: ['ACB', 'BBB', 'BCA', 'AAA'], type: 'wall', exceptions: {left: ['wall']}, weight: 5 },
        { edges: ['BBB', 'BBB', 'BBB', 'BBB'], type: 'walltop', exceptions: undefined, weight: 20 }, 
    ]
}
