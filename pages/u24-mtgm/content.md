<!-- Use this area to define page-specific CSS styles. -->
<style>
.centered {
    color: purple;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 50px;
}

</style>

# Modeling the Game Mathematically

In a classic game of Jenga, there are 54 wooden blocks. Assuming we can have less than 54 blocks in play at any point in the game (i.e., assuming we break the official rules of Jenga), this means that there are 2<sup>54</sup> = 18,014,398,509,000,000 (roughly 18 quadrillion) unique configurations of jenga blocks achievable by simply removing pieces from the original tower. In order to differentiate these game states from one another, let’s represent a game configuration as a 54-bit long sequence of binary:

<span class="centered"> ```111 111 111 111 111 111 111 111 111 111 111 111 111 111 111 111 111 111```</span>

In our model, the left-most bits represent the blocks at the very bottom of the tower, and the right-most bits represent the blocks at the very top of the tower. Additionally, “1” bits indicate the presence of a block in that position, while “0” bits indicate the absence of a block. Furthermore, every tribit represents a layer in the Jenga tower, with the bits progressing from furthest from the camera → closest to the camera when being read from left → right. Since this manner of representing the configuration of a Jenga game is not particularly intuitive, we provide a labeled diagram to the right:

<div class="centered"><img src="/site_v1/images/jenga-tower-labeled.png" height="400"></div>

Let’s consider a different sequence:

<span class="centered"> ```101 101 101 101 101 101 101 101 101 101 101 101 101 101 101 101 101 101```</span>

Visualizing this sequence, we have the following game configuration:

<div class="centered"><img src="/site_v1/images/mtgm-tower-1.png" height="400"></div>

This would be considered a “success state” because this tower is structurally sound and would not collapse.
Let’s consider another sequence:

<span class="centered"> ```010 010 010 010 010 010 010 010 010 010 010 010 010 010 010 010 010 010```</span>

If we were to visualize the above sequence:

<div class="centered"><img src="/site_v1/images/mtgm-tower-2.png" height="400"></div>

Similar to the previous configuration, this would also be considered a “success state” because this tower is structurally sound and would not collapse.
On the other hand, if we were to visualize a sequence like:

<span class="centered"> ```111 111 111 000 000 000 111 111 111 000 000 000 111 111 111 000 000 000```</span>

This would result in the following game configuration:

<div class="centered"><img src="/site_v1/images/mtgm-tower-3.png" height="400"></div>