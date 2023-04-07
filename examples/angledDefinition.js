// Description: Definition of the tile rules
export const definition = {
    options: {
        saveInterval: 0.02,
        baseWeight: 10
    },
    tiles: [
        { edges: ['A', 'A', 'A', 'A'], type: 'floor', exceptions: undefined, weight: 30 },
        { edges: ['B', 'B', 'B', 'B'], type: 'black', exceptions: undefined, weight: 20 },
        { edges: ['B', 'BCC', 'A', 'CCB'], type: 'wallbase', exceptions: { down: ['walltop'] } },
        { edges: ['CBB', 'BCC', 'A', 'A'], type: 'wallbase', exceptions: { left: ['wallbase', 'wallrun', 'walltop'], down: ['walltop'] } },
        { edges: ['BBC', 'A', 'A', 'CCB'], type: 'wallbase', exceptions: { right: ['wallbase', 'wallrun', 'walltop'], down: ['walltop'] } },
        { edges: ['CBC', 'A', 'A', 'A'], type: 'wallbase', exceptions: { right: ['wallbase', 'wallrun', 'walltop'], left: ['wallbase', 'wallrun', 'walltop'], down: ['walltop'] }, weight: 1 },
        { edges: ['CBB', 'B', 'BBC', 'A'], type: 'wallrun', exceptions: { left: ['wallbase', 'wallrun', 'walltop'] } },
        { edges: ['BBC', 'A', 'CBB', 'B'], type: 'wallrun', exceptions: { right: ['wallbase', 'wallrun', 'walltop'] } },
        { edges: ['CBC', 'A', 'CBC', 'A'], type: 'wallrun', exceptions: { left: ['wallbase', 'wallrun', 'walltop'], right: ['wallbase', 'wallrun', 'walltop'] }, weight: 1 },
        { edges: ['CBC', 'AB', 'B', 'BA'], type: 'wallrun', exceptions: { right: ['wallrun'], left: ['wallrun'] }, weight: 1 },
        { edges: ['CBC', 'A', 'CBB', 'BA'], type: 'wallrun', exceptions: { right: ['wallbase', 'wallrun'], left: ['wallrun'] }, weight: 1 },
        { edges: ['CBC', 'AB', 'BBC', 'A'], type: 'wallrun', exceptions: { right: ['wallrun'], left: ['wallbase', 'wallrun'] }, weight: 1 },
        { edges: ['B', 'BCC', 'CBC', 'CCB'], type: 'wallrun', exceptions: { right: ['wallrun'], left: ['wallrun'] }, weight: 1 },
        { edges: ['BBC', 'A', 'CBC', 'CCB'], type: 'wallrun', exceptions: { right: ['wallbase', 'wallrun', 'walltop'], left: ['wallrun'] }, weight: 1 },
        { edges: ['CBB', 'BCC', 'CBC', 'A'], type: 'wallrun', exceptions: { right: ['wallrun'], left: ['wallbase', 'wallrun', 'walltop'] }, weight: 1 },
        { edges: ['CBB', 'B', 'B', 'BA'], type: 'wallrun', exceptions: { left: ['wallrun'] } },
        { edges: ['B', 'B', 'BBC', 'CCB'], type: 'wallrun', exceptions: { left: ['wallrun'] } },
        { edges: ['BBC', 'AB', 'B', 'B'], type: 'wallrun', exceptions: { right: ['wallrun'] } },
        { edges: ['B', 'BCC', 'CBB', 'B'], type: 'wallrun', exceptions: { right: ['wallrun'] } },
        { edges: ['A', 'A', 'CBC', 'A'], type: 'walltop', exceptions: { left: ['wallbase', 'wallrun', 'walltop'], right: ['wallbase', 'wallrun', 'walltop'], up: ['wallbase'] }, weight: 1 },
        { edges: ['A', 'AB', 'BBC', 'A'], type: 'walltop', exceptions: { left: ['wallbase', 'wallrun', 'walltop'], up: ['wallbase'] } },
        { edges: ['A', 'A', 'CBB', 'BA'], type: 'walltop', exceptions: { right: ['wallbase', 'wallrun', 'walltop'], up: ['wallbase'] } },
        { edges: ['A', 'AB', 'B', 'BA'], type: 'walltop', exceptions: { up: ['wallbase'] } }
    ]
}
