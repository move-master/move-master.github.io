<!-- This links to our markdown-specific CSS styles. -->
<link rel="stylesheet" href="/md-styles.css">

# Game-State Visualizer in Scratch

Embedded below is a first version of our game-state visualizer, mocked up in [Scratch](https://scratch.mit.edu/projects/1038274559).\
The visualizer accepts a 54-bit binary sequence of 0s and 1s, and visualizes this sequence as a Jenga tower, where 0s are empty spaces and 1s are blocks.
This visualizer was created to aid in our discourse surrounding the development of our eventual Unity game-state simulator, as we did not have access to an actual Jenga set at the time, making it difficult to convey ideas effectively.
This tool can visualize all 2<sup>54</sup> unique configurations of Jenga blocks*, including all impossible configurations (i.e., configurations with floating blocks).\
*_Note. This number does not reflect the actual number of possible game states/configurations, as this representation format breaks the official rules of Jenga. For more details, please see [Revisiting our Underlying Representation](/pages/s25-rour/s25-rour.html), as well as [Revisiting our Underlying Representation (again)](/pages/s25-rour/f25-roura.html)._

### Instructions
To use the visualizer, press the green flag button (top left), and enter a 54-bit binary sequence in the text field.

<div class="centered">
<iframe src="https://scratch.mit.edu/projects/1038274559/embed" allowtransparency="true" width="740" height="600" frameborder="0" scrolling="no" allowfullscreen></iframe>
</div>

You can try recreating the various sequences detailed in [Modeling the Game Mathematically](/pages/u24-mtgm/u24-mtgm.html) by copy-pasting the following sequences:

<span class="centered"> `111111111111111111111111111111111111111111111111111111`</span>
<span class="centered"> `101101101101101101101101101101101101101101101101101101`</span>
<span class="centered"> `010010010010010010010010010010010010010010010010010010`</span>
<span class="centered"> `111111111000000000111111111000000000111111111000000000`</span>
<span class="centered"> `001001100100001001100100001001100100001001100100001001`</span>
<span class="centered"> `111111111111111111111111111111111111111111111111111100`</span>