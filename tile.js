// A tile class for storing the tile data
/**
 * @class Tile
 * @classdesc A object for storing the tile data
 * @param {Array} edges - The edges of the tile
 * @param {number} i - The index of the tile
 * @param {Object} exceptions - The exceptions for the tile
 * @param {number} weight - The weight of the tile
 * @property {Array} up - The tiles that can be placed above this tile
 * @property {Array} right - The tiles that can be placed to the right of this tile
 * @property {Array} down - The tiles that can be placed below this tile
 * @property {Array} left - The tiles that can be placed to the left of this tile
 * @property {Object} exceptions - The exceptions for the tile
 * @property {number} weight - The weight of the tile
 * @property {number} index - The index of the tile
 * @property {Array} edges - The edges of the tile
 * @property {String} type - The type of the tile, used for exceptions
 * @property {number} layer - The layer of the tile, used for multiple layers
 */
export default function Tile(newEdges, i, newType, newExceptions = {}, newWeight = 10, newLayer = 0) {
    const edges = newEdges;
    const index = i;
    let up = [];
    let right = [];
    let down = [];
    let left = [];
    const exceptions = newExceptions;
    const weight = newWeight;
    const type = newType;
    const layer = newLayer;


    /**
     * 
     * @param {Array} tiles - The tiles to compare to
     * @description Analyzes the tile and determines which tiles can be placed next to it 
     */
    function analyze(tiles) {
        for (let i = 0; i < tiles.length; i++) {
            let tile = tiles[i];

            checkEdgeCompatibility(tile, i, 'up', 0, 2);
            checkEdgeCompatibility(tile, i, 'right', 1, 3);
            checkEdgeCompatibility(tile, i, 'down', 2, 0);
            checkEdgeCompatibility(tile, i, 'left', 3, 1);
        }
    }

    /**
     * 
     * @param {Tile} tile 
     * @param {number} i 
     * @param {String} direction 
     * @param {number} edge1 
     * @param {number} edge2 
     */
    function checkEdgeCompatibility(tile, i, direction, edge1, edge2) {
        let directionMap = {
            'up': up,
            'right': right,
            'down': down,
            'left': left
        }
        if (compareEdge(edges[edge1], tile.edges[edge2])) {
            if (exceptions[direction] !== undefined) {
                if (!exceptions[direction].includes(tile.type)) {
                    directionMap[direction].push(i);
                }
            } else {
                directionMap[direction].push(i);
            }
        }
    }


    /**
    * 
    * @param {String} a - The first string to compare 
    * @param {String} b - The second string to compare 
    * @returns {boolean} Whether the strings are equal or not
    */
    function compareEdge(a, b) {
        return a === reverseString(b);
    }

    /**
    * 
    * @param {String} s - The string to reverse
    * @description Reverses a string
    * @returns {String} The reversed string
    */
    function reverseString(s) {
        return s.split('').reverse().join('');
    }

    return {
        index,
        edges,
        up,
        right,
        down,
        left,
        exceptions,
        weight,
        type,
        layer,
        analyze
    }
}
