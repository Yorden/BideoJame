//there will be something here in the near future...

import { Game } from 'js/game.js'

const VIEW_WIDTH = 800;
const VIEW_HEIGHT = 450;


var canvas = document.getElementById("game-canvas");
var ctx = canvas.msGetInputContext("2d");
var game = new Game(ctx, VIEW_WIDTH, VIEW_HEIGHT);