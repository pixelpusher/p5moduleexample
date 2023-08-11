/**
 * By BITPRINT (Evan Raskob) 2023
 * All rights reserved
 */

import './p5.js';

  
  window.setup = function() {
    createCanvas(600, 600);
  

    document.querySelector('#playback').addEventListener('click', (e)=> {
      if (e.target.dataset.value === "paused") 
      {
        e.target.dataset.value = "playing";
      } else {
        e.target.dataset.value = "paused";    
      }
      e.target.innerHTML = e.target.dataset.value;
    });
  
    
    strokeWeight(2);
    frameRate(24);
    background(0);
  
  }
  
  
  
  window.draw = function() {
  
    if (document.querySelector("#playback").dataset.value === "playing")
    {
      
      let x1 = random(0, width);
      let x2 = random(0,width);
      let y1 = random(0,height);
      let y2 = random(0,height);

      stroke(color(`hsla(120, 60%, 90%, 0.25)`));
    
      line(x1,y1,x2,y2);

    }
}
