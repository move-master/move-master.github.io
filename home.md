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

### 1. Designed a Deep Q-Learning Environment With the Gymnasium API.
After limited success in developing and training a ML Jenga agent using pre-generated data sets, we decided to pivot towards Deep Q-Learning, as not only does this seem to be a better-suited Reinforcement Learning technique for our specific application, but there is an extensive wealth of knowledge and existing resources regarding the development of a Gymnasium environment. Using a reward system governed by factors like the center of mass (CoM) and the current height of the tower, the program executes thousands of games (episodes) to slowly train the model to select the next best move in Jenga by adjusting weights in the DQN. To learn more about our design choices and process, see [Designing a Deep Q-Learning Environment with the Gymnasium API](/pages/f25-dqnenvgym/f25-dqnenvgym.html).

### 2. Revisited our Underlying Representation... again!
In light of us shifting our Reinforcement Learning approach, we came to the conclusion that our existing game representation format is ill-suited for the purposes of Deep Q-Learning, as it stores information that is too specific for the model to glean meaning from. For instance, our existing representation format allows us to encode the same game state in a number of different ways. While the underlying game sequence (i.e., the order in which blocks were moved / turns were taken) is fundamentally different, the issue is that the resulting state of the tower is the same. Having more than one way to represent a state would not allow the model to learn effectively, as it would constantly have to re-learn the same game states, failing to realize that it has seen these same game states prior. Subsequently, this has led us to revisit our underlying representation yet again, returning to a representation format rather reminiscent of our original format back in U25. To learn more about our new underlying representation (and why we ultimately moved away from our old one), see [Revisiting Our Underlying Representation (Again)](/pages/f25-roura/f25-roura.html).

### 3. Successor States Generator in Python
As part of our efforts in developing a Deep Q-Learning Jenga model, we were confronted with the fact that a DQN environment demands a finite action space associated with each possible state. Although we do not have a finite set of moves in the context of Jenga (i.e., Move Up, Down, Left, Right, etc.), it is possible to treat a finite set of valid state transitions as a stand-in for a finite action space. Therefore, we have written a successor state generator in Python that generates all of the successor states of a given state of Jenga. To learn more about our successor states generator, see [Successor States Generator in Python](/pages/f25-ssgip/f25-ssgip.html).