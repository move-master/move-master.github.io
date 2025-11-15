<!-- This links to our markdown-specific CSS styles. -->
<link rel="stylesheet" href="/md-styles.css">

# Revisiting Our Underlying Representation

Since our original 54-bit binary sequence representation is highly inefficient to analyze, and does not adhere to one of the fundamental rules of Jenga (all blocks must remain in play at all times), we have decided to overhaul our underlying representation with a format that is not only more efficient to parse, but better adheres to the rules of Jenga overall.

Consider the following game sequence:

<span class="centered"> ```03.2 14.1 17.3 42.1 07.3 51.2 27.3 11.2 38.1 32.1 08.2```</span>

The above sequence is an example of our new representation. Let's break down what each part of the sequence means.

### Each substring of the form ##.# represents a move in Jenga.
A move in Jenga consists of two primary actions-- removing a block from somewhere in the tower (excluding the top layer and the layer directly below an incomplete top layer), and replacing the selected block in the top layer. Each substring of the above form represents this sequence of actions in a single move.

### The number *before* the decimal in a move indicates the block being moved.
One of the only aspects of our original representation that is preserved within our new representation is our indexing system for each of the Jenga blocks. Every block has a unique ID associated with it (some number 1 through 54), and it maintains this ID for the entire game. The number before the decimal point of a move is a block's ID.

### The number *after* the decimal in a move indicates the position on the top of the tower that the block is placed.
Although the placement of a block on the top of a tower does not drastically impact the center of mass of the tower, once we definitively prove this (using physics), we will continue to track the position that the block is placed in.

## Benefits of our New Representation

### 1. It's Easier to Interpret / Parse
As briefly mentioned in the overview, one of the main benefits of our new representation is that game sequences are much easier to parse. Not only does our representation allow an individual to trace through every single move made to the tower in chronological order, but each move can be ascribed to a specific player.

For instance, if a person is playing Jenga by themselves (sad!), then we can attribute every move in the sequence to player 1. However, if two people are playing Jenga against one another, we can attribute every "odd" move to player 1, and every "even" move to player 2 (in this context, since every game sequence is technically a list of moves delimited by spaces, we take "odd" moves to mean any moves that land on an odd index, and "even" moves any moves that land on an even index, assuming indexing starts at 1). This can be extended to even more players, with each player's set of turns being represented by the function `f(x) = p + n (x - 1)`, where `n` is the number of players, and `p` is the player in question (`1, 2, ..., n`). By extension, since the sequence ends when the tower falls over, we know that the last move in the sequence is what caused the tower to fall, subsequently telling us which player is responsible for the tower falling.

### 2. It Adheres to the Fundamental Rules of Jenga!

One of the major issues with our original representation is that any state that was not "`111111111111111111111111111111111111111111111111111111`" was technically an invalid game state, as all blocks must remain in play at all times. Any deviation from the above sequence would mean that there are less than 54 blocks in play. Furthermore, this representation did not allow for the stacking of blocks ontop of the tower, which is obviously not conducive to accurately modeling a game like Jenga. \
This is not to say that this way of representing the game was entirely useless, however. This representation greatly assisted us in building the framework for the first version of our Unity simulator, especially with respect to the code that controls how blocks are cloned/placed, and figuring out how to parse string sequences to clone/place said blocks accordingly. \
Overall, our approach has been guided by a problem-solving philosophy that emphasizes starting with a simplified, idealized model to establish a foundational understanding and structure. By doing so, we were able to rapidly prototype core systems and logic without being overwhelmed by every nuance of the real-world game. Once this initial framework was in place and functioning reliably, we gradually introduced more complexity and realism to better align the simulation with the dynamics of an actual Jenga game. This iterative process allowed us to build confidence in our codebase and ensured that each layer of complexity was added with intention and clarity.