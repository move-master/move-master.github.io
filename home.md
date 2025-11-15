<!-- This links to our markdown-specific CSS styles. -->
<link rel="stylesheet" href="/md-styles.css">

# Overview

## Welcome to MoveMaster!
Originally an RCOS project, MoveMaster was created with the vision of combining physics simulation and machine learning to determine the most optimal move set for winning various online and tabletop games. By leveraging advanced computational techniques, MoveMaster strives to provide users with strategic recommendations tailored to the selected game.

## Jenga
<div class="row-bound">
  <p style="width: 75%">
    In <a href="https://en.wikipedia.org/wiki/Jenga">Jenga</a>, players take turns strategically removing pieces from a tower made of 54 wooden blocks, and stacking these pieces on top. The objective of the game is to avoid knocking over the tower. Although this seems like a relatively simple objective, in practice, this proves to be easier said than done.</br>
    MoveMaster allows users to define the current state of a Jenga game (i.e., the displacement of blocks). Based on the current configuration of the tower, MoveMaster suggests the best possible move to maximize a player's chances of success.</br>
    As it currently stands, Jenga is the only tabletop game we have been developing MoveMaster for. However, we are open to exploring other tabletop games in the future.
  </p>

  <img src="/site_v1/images/jenga-tower-cropped.png" height="400">
</div>

# Timeline

## U24

We first started working on MoveMaster in the summer of 2024. Over the course of U24, we achieved the following:
### 1. Developed a basic conjecture about when blocks are safe vs. unsafe to remove.
Because the physical dynamics behind Jenga are extremely tedious to calculate by hand, and it is impossible to simulate all possible tower configurations to determine the outcome of every game state, we decided to come up with a generalized conjecture about when blocks are safe vs. unsafe to remove. Although this required us to greatly simplify the problem at hand (i.e., we ignored stochastic factors like human error, friction between blocks, and non-uniformity among pieces), this conjecture enabled us to begin developing a working model that we would eventually expand to include these factors.
To learn more about our conjecture (and our underlying representation of the game as a whole), see [Modeling the Game Mathematically](/pages/u24-mtgm/u24-mtgm.html).

### 2. Developed a primitive game-state visualizer in Scratch.
To aid in our discourse surrounding the development of our Unity game-state simulator, we created a very primitive game-state visualizer using Scratch. The visualizer accepts a 54-bit binary sequence of 0s and 1s, and visualizes this sequence as a Jenga tower, where 0s are empty spaces and 1s are blocks.
To learn more about our visualizer, see [Game-State Visualizer in Scratch](/pages/u24-gsvis/u24-gsvis.html).

### 3. Developed a physics-based Jenga game-state simulator in Unity.
To serve as a basic framework/prototype for our eventual machine-learning program, we created a Jenga game-state simulator that makes use of Unity's built-in physics engine. This simulator allows a user to remove blocks from the tower, watch the outcome of their configuration in real time (by enabling physics), and save/load various configurations of said tower. Additionally, this simulator acts a slightly more sophisticated version of our initial Scratch game-state visualizer.
To learn more about the first version of our game-state simulator, see [Game-State Simulator V1 in Unity](/pages/u24-gssv1/u24-gssv1.html).

## S25

Over the course of S25, we achieved the following:
### 1. Revised our underlying game-state representation to better adhere to the rules of Jenga.
Since our original 54-bit binary sequence representation is highly inefficient to analyze, and does not adhere to one of the fundamental rules of Jenga (all blocks must remain in play at all times), we have decided to overhaul our underlying representation with a format that is not only more efficient to parse, but better adheres to the rules of Jenga overall.
To learn more about this new representation format, see [Revisiting our Underlying Representation](/pages/s25-rour/s25-rour.html).

### 2. Created a Jenga game sequence generator in Python.
In order to train our ML model to generate optimal moves in Jenga, we need a sufficiently large dataset of training data. Thus, we developed a game sequence generator using Python, capable of generating hundreds of thousands of unique game sequences (according to our new representation).
To learn more about our generator, see [Game Sequence Generator in Python](/pages/s25-gsgip/s25-gsgip.html).

### 3. Updated our Unity simulator to accept/execute user-inputted game sequences.
Building on our original framework/prototype of our game sequence simulator, we updated our simulator so that it now accepts user-inputted game sequences, and executes said sequences in real-time.
To learn more about the second version of our game-state simulator, see [Game-State Simulator V2 in Unity](/pages/s25-gssv2/s25-gssv2.html).

## F25

Over the course of F25, we acheived the following:

