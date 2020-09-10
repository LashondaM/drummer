import React, {Component} from 'react';
  import Bass from './sounds/bass-soap.wav';
  import Kick from './sounds/kick.wav';
  import Snare from './sounds/snare.wav';
  import Hihat from './sounds/hihat.wav';
  import Boom from './sounds/boom.wav';
  import Ride from './sounds/ride.wav';
  import Tom from './sounds/tom.wav';

class App extends Component{
  render(){

    function playSound(e){
      const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
      const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); 
      if(!audio) return; // stop the function from running all together
      audio.currentTime = 0; //rewind to the start
      audio.play();
      key.classList.add('playing');
    }
  
    function removeTransition(e) {
      if(e.propertyName !== 'transform') return; // skip it if it's not a transform
      console.log(e.propertyName);
      // console.log(this); shows what "this" is equal to
      this.classList.remove('playing');
  
    }
  
    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));
    window.addEventListener('keydown', playSound);

    // HELP ME
    return(
      <div className='App' id="keys">
        <div data-key='84' className="key"><kbd>T</kbd><span class="sound">BMMM</span></div>
        <div data-key='76' className='key'><kbd>L</kbd><span class="sound">kick</span></div>
        <div data-key='79' className='key'><kbd>O</kbd><span class="sound">snare</span></div>
        <div data-key='80' className='key'><kbd>P</kbd><span class="sound">hihat</span></div>
        <div data-key='89' className='key'><kbd>Y</kbd><span class="sound">boom</span></div>
        <div data-key='70' className='key'><kbd>F</kbd><span class="sound">ride</span></div>
        <div data-key='69' className='key'><kbd>E</kbd><span class="sound">tom</span></div>
        <audio src={Bass} type="audio/mpeg" data-key='84'></audio>
        <audio src={Kick} type="audio" data-key='76'></audio>
        <audio src={Snare} type="audio" data-key='79'></audio>
        <audio src={Hihat} type="audio" data-key='80'></audio>
        <audio src={Boom} type="audio" data-key='89'></audio>
        <audio src={Ride} type="audio" data-key='70'></audio>
        <audio src={Tom} type="audio" data-key='69'></audio>
      </div>
    )
  }
}

export default App;
