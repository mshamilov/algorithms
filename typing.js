// Define our constructor
export function typingText() {
  let defaults = {
    rotateLetterContainer: document.getElementById('mask_content_wrapper'),
    fontSizeCoefficient: 8.5,
    lineHeight: 1.3,
    gutter: 40,
    text: 'capabilities',
    speed: 75,
    fontSize: 15,
    horizontal: false
  };

  // Create options by extending defaults with the passed in arugments
  if (arguments[0] && typeof arguments[0] === "object") {
    this.options = _extendDefaults(defaults, arguments[0]);
  }

}

function _calcParameters() {
  let height = window.innerHeight;
  let width = window.innerWidth;

  if (this.options.horizontal) {
    let tmp = height;
    height = width;
    width = tmp;
  }

  this.options.fontSize = height / this.options.fontSizeCoefficient + 'px';
  this.options.height = Number.parseFloat(this.options.fontSize) * Number.parseFloat(this.options.lineHeight) + 'px';
  this.options.quantity = Math.ceil((width - this.options.gutter * 2) / (parseInt(this.options.fontSize) * this.options.lineHeight));
  if (this.options.quantity % 2 != 0)
    this.options.quantity -= 1;
  this.options.containerMarginTop = (width - (Number.parseFloat(this.options.height) * this.options.quantity)) / 2;
}

function _deleteElements() {
  while (this.options.rotateLetterContainer.hasChildNodes()) {
    this.options.rotateLetterContainer.removeChild(this.options.rotateLetterContainer.lastChild);
  }
}

function _createElements() {
  let title = document.createElement('h3');

  this.options.rotateLetterContainer.style.marginTop = this.options.containerMarginTop + 'px';
  this.options.elements = [];

  title.style.fontSize = this.options.fontSize;
  title.style.lineHeight = this.options.lineHeight;
  title.style.height = this.options.height;

  title.style.animationDelay = i * 0.3 + 's';
  title.classList.add('heading-1');

  title.appendChild(document.createTextNode(""));

  let saveText = this.options.text.split('');
  this.options.length = saveText.length;

  for (var i = 0; i < this.options.quantity; i++) {
    let cln = title.cloneNode(true);
    if (i >= this.options.quantity / 2)
      cln.classList.add('from-bottom');

    for (let j = 0; j < this.options.length; j++) {
      let span = document.createElement('span');
      span.appendChild(document.createTextNode(saveText[j]));
      cln.appendChild(span);

    }

    this.options.rotateLetterContainer.appendChild(cln);
    this.options.elements.push(cln);
  }
}

typingText.prototype.animate = function () {
  if (this.options.rotateLetterContainer && this.options.rotateLetterContainer.classList.contains('is-visible')) {
    return -1;
  }
  for (let i = 0; i < this.options.quantity / 2; i++) {
    setTimeout(() => {
      _print.call(this, this.options.elements[i]);
      _printReverse.call(this, this.options.elements[this.options.quantity - 1 - i]);
    }, this.options.speed * i);

  }
  if (this.options.rotateLetterContainer) {
    this.options.rotateLetterContainer.classList.add('is-visible');
  }
}

typingText.prototype.clear = function () {
  if (this.options.rotateLetterContainer) {
    this.options.rotateLetterContainer.classList.remove('is-visible');
  }
  this.options.elements.forEach(element => {
    element.childNodes.forEach(el => {
      if (el && el.nodeName == 'SPAN') {
        el.classList.remove('is-visible');
      }
    });
  });

}

function _print(elem) {
  for (let i = 0; i <= this.options.length; i++) {
    setTimeout(() => {
      if (elem && elem.childNodes[i].nodeName == 'SPAN')
        elem.childNodes[i].classList.add('is-visible');
    }, this.options.speed * i);
  }
}

function _printReverse(elem) {
  for (let i = 0; i < this.options.length; i++) {
    setTimeout(() => {
      if (elem && elem.childNodes[this.options.length - i].nodeName == 'SPAN')
        elem.childNodes[this.options.length - i].classList.add('is-visible');
    }, this.options.speed * i);
  }
}

function _event(e) {
  let _self = this;
  window.addEventListener('resize', function (e) {
    _self.render();
    _self.animate();
  })
}
typingText.prototype.render = function () {
  _calcParameters.call(this);
  _deleteElements.call(this);
  _createElements.call(this);

}

typingText.prototype.init = function () {
  if (this.options.rotateLetterContainer) {
    this.render();
    _event.call(this);
  }
}

// Utility method to extend defaults with user options
function _extendDefaults(source, properties) {
  var property;
  for (property in properties) {
    if (properties.hasOwnProperty(property)) {
      source[property] = properties[property];
    }
  }
  return source;
}