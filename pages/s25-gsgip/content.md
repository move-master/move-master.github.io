<!-- This links to our markdown-specific CSS styles. -->
<link rel="stylesheet" href="/md-styles.css">

# Game Sequence Generator in Python

Now that we have a reliable format in which we can store game sequences, we need a way to generate these game sequences to create a dataset that will eventually be used to train our ML model. **That's where our generator program comes in!** generator.py simulates a game of Jenga by generating move sequences based on probabilistic constraints. It constructs a virtual 18-layer tower, each containing 3 blocks, and attempts to move blocks from lower layers to the top while adhering to dynamically calculated probabilities of success.

## Usage

By default, the script runs the generator for 10 unique sequences and prints the analytics summary to the terminal.

## Key Features
* **Tower Structure**: A Tower class maintains the state of the block stack with each block tracked by an ID, position, and movement probability.
* **Block Movement**: The script simulates block movements governed by several factors:
* **Layer height**: Blocks higher up the tower are less likely to be moved.
* **Neighboring block positions**: Blocks adjacent to a moved block have increased movement probability in subsequent turns.
* **Turn count**: The longer the game runs, the more likely it becomes for a move to fail.
* **Probability-Based Decision Making**: A move can probabilistically fail depending on the current block's assigned probability. This introduces randomness and simulates real-world instability.
* **Sequence Generation**: The program generates a fixed number of unique sequences (SEQ_GEN_NUM) of successful (and failed) block moves. Each sequence represents a possible run of the game.
* **Win Estimation**: The script assumes alternating turns between two players. It counts how often each player would "win" based on the length (even/odd) of each sequence.
* **Analytics Output**: Minimum and maximum sequence lengths, number of sequences where moves failed due to low probability, and distribution of "wins" between the two players.