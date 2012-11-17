---
layout: default
title: Canvas and basic math
---

# Canvas and basic math

Just a small expermiment where I wanted to play with canvas, simple math and animations. Some of the challenges in this experiment included moving the ball at a specific angle and caclulating the new angle when the ball hits one of the four walls.

This experiment is very basic but opens opportunities to new features like letting the balls collide or even building a small game (pong, anyone?).

Try it out! Click on 'add ball', then on 'start'.

Or checkout the [code](https://github.com/stijnj/experiments-canvas-ball) on GitHub.

<style>
    #pong {
        display: block;
        border: 1px solid #000;
    }
</style>

<canvas id="pong" width="300" height="300"></canvas>
<button id="add">add ball</button>
<button id="start">start</button>
<button id="stop">stop</button>

<script src="https://raw.github.com/stijnj/experiments-canvas-ball/master/main.js"></script>