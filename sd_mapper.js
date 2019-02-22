"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
   Author: Dylan Kelley
   Date:   2.19.19

*/

// This is a variable called thisTime assigned to a new date object.
var thisTime = new Date();

// This is a variable called timeStr assigned to the string version of thisTime.
var timeStr = thisTime.toLocaleString();

// These variables are assigned to the hours and the month of thisTime respectively.
var thisHour = thisTime.getHours();
var thisMonth = thisTime.getMonth();

// This assigns a variable called mapNum to the solution of the equation.
var mapNum = (2 * thisMonth + thisHour) % 24;

// This determines which sky image to display based on the time.
var imgStr = "<img src='sd_sky" + mapNum + ".png' />";

// This is what shows the determined sky image.
var temp = document.getElementById("planisphere");
temp.insertAdjacentHTML('afterbegin', imgStr);