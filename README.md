
# BlazinWFC

A Wave Function Collapse implimentation in JavaScript, focusing on speed and set up for more complex tilesets.
Usage is geared towards other rendering programs like Phaser Tilemaps as it returns an array of indexs.



## Installation

Install BlazinWFC with npm

```bash
  npm install blazinwfc
```
    
## Usage/Examples

```javascript
import WFC from 'blazinwfc';
import { definition } from 'definition.js';

const wfc = new WFC(definition);
```

## Properties

```javascript
const map = wfc.collapse(50); // Collapses a 50x50 grid and returns an array of indexs

wfc.test(50, 10); // Collapses a 50x50 grid 10 times and returns the average time in seconds
```

## Definition

The definition is where you define your tiles rules and set some options for the algorithm.\
Examples can be found in the examples folder. The following is a small snippet of a definition.

```javascript
export const definition = {
    options: {
        saveInterval: 0.02,
    },
    tiles: [
        { edges: ['AAA', 'AAA', 'AAA', 'AAA'], type: 'floor', exceptions: undefined, weight: 30 },
        { edges: ['BBB', 'BBB', 'BBB', 'BBB'], type: 'black', exceptions: undefined, weight: 20 },
        { edges: ['BBB', 'BCC', 'AAA', 'CCB'], type: 'wallbase', exceptions: { down: ['walltop'] } }
    ]
}
```

You can leave the options empty for default values to be used but you still have to leave the options property in the object
The only option currently is changing the save interval. This is used to determin how often a current state should be saved for rolling back the algorithm incase it gets stuck. You can run the test function and mess with this to see if you get faster results with a different percentage (0.02 == 2%).

The tiles property is where you define the tiles to be used by the algorithm.\
The tiles must be entered in the same order as your tilemap you plan to use. (images to follow)\
**Edges:** You can think of these like sockets, they run in the order UP, RIGHT, DOWN, LEFT.\
**Type:** The type of the tile is used by the exceptions object.\
**Exceptions:** Sometimes you will run into a situation where tiles have matching sockets but should still not be placed next to each other. For example the floor tile can go below a wallbase and above a walltop. So all three have 'AAA' socket but a walltop cannot go directly below a wallbase so you add it to the wallbases down exceptions.\
**Weight:** This is where you can mess around with how high of a chance a tile should have of showing up. Default is 10.
