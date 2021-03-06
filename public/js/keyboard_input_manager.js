function KeyboardInputManager() {
  this.events = {};

  this.listen();
}

KeyboardInputManager.prototype.on = function (event, callback) {
  if (!this.events[event]) {
    this.events[event] = [];
  }
  this.events[event].push(callback);
};

KeyboardInputManager.prototype.emit = function (event, data) {
  var callbacks = this.events[event];
  if (callbacks) {
    callbacks.forEach(function (callback) {
      callback(data);
    });
  }
};

KeyboardInputManager.prototype.listen = function () {
  var self = this;

  var map = {
    38:  0, // Up
    39:  1, // Right
    40:  2, // Down
    37:  3, // Left
    109: 4, // Minus
    107: 5, // Plus
    75:  0, // vim keybindings
    76:  1,
    74:  2,
    72:  3,
    87:  0, // W
    68:  1, // D
    83:  2, // S
    65:  3, // A
    81:  4, // Q
    69:  5, // E
    33:  4, // page up
    34:  5  // page down
  };

  document.addEventListener("keydown", function (event) {
    var modifiers = event.altKey || event.ctrlKey || event.metaKey ||
                    event.shiftKey;
    var mapped    = map[event.which];
    if (!modifiers) {
      if (mapped !== undefined) {
        event.preventDefault();
        self.emit("move", mapped);
      }

      // if (event.which === 32) self.restart.bind(self)(event);
    }
  });

  //add from AI
   
    var hintButton = document.getElementById('hint-button');
  hintButton.addEventListener('click', function(e) {
    e.preventDefault();
    var feedbackContainer  = document.getElementById('feedback-container');
    feedbackContainer.innerHTML = '<img src=img/spinner.gif />';
    self.emit('think');
  });

  var runButton = document.getElementById('run-button');
  runButton.addEventListener('click', function(e) {
    e.preventDefault();
    self.emit('run')
  });

  var retry = document.querySelector(".retry-button");
  retry.addEventListener("click", this.restart.bind(this));
  retry.addEventListener("touchend", this.restart.bind(this));

  var keepPlaying = document.querySelector(".keep-playing-button");
  keepPlaying.addEventListener("click", this.keepPlaying.bind(this));
  keepPlaying.addEventListener("touchend", this.keepPlaying.bind(this));
    
  var level1 = document.querySelector(".level1");
  // level1.addEventListener("click", this.moveDown.bind(this));
  level1.addEventListener("touchend", this.moveDown.bind(this));

  var level3 = document.querySelector(".level3");
  // level3.addEventListener("click", this.moveUp.bind(this));
  level3.addEventListener("touchend", this.moveUp.bind(this));

  // Listen to swipe events
  var touchStartClientX, touchStartClientY;
  var gameContainer = document.getElementsByClassName("game-container")[0];

  gameContainer.addEventListener("touchstart", function (event) {
    if (event.touches.length > 1) return;

    touchStartClientX = event.touches[0].clientX;
    touchStartClientY = event.touches[0].clientY;
    event.preventDefault();
  });

  gameContainer.addEventListener("touchmove", function (event) {
    event.preventDefault();
  });

  gameContainer.addEventListener("touchend", function (event) {
    if (event.touches.length > 0) return;

    var dx = event.changedTouches[0].clientX - touchStartClientX;
    var absDx = Math.abs(dx);

    var dy = event.changedTouches[0].clientY - touchStartClientY;
    var absDy = Math.abs(dy);

    if (Math.max(absDx, absDy) > 10) {
      // (right : left) : (down : up)
      self.emit("move", absDx > absDy ? (dx > 0 ? 1 : 3) : (dy > 0 ? 2 : 0));
    }
  });
};

KeyboardInputManager.prototype.restart = function (event) {
  event.preventDefault();
  this.emit("restart");
};

KeyboardInputManager.prototype.keepPlaying = function (event) {
  event.preventDefault();
  this.emit("keepPlaying");
};

KeyboardInputManager.prototype.moveDown = function (event) {
  event.preventDefault();
  this.emit("move", "4");
};

KeyboardInputManager.prototype.moveUp = function (event) {
  event.preventDefault();
  this.emit("move", "5");
};
