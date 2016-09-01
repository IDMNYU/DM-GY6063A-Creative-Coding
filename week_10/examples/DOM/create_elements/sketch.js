function setup() {
  createDiv('<a href="">Hi there Im inside the DOM</a>');
  
  createP('hi im a paragraph');
  
  createButton('Click me.');
  
  createImg("http://placekitten.com/g/200/300");
  
  createElement('h1', 'Hi im a header 1');
    createElement('h2', 'Hi im a header 2');
      createElement('h3', 'Hi im a header 3');
        createElement('h4', 'Hi im a header 4');
          createElement('h5', 'Hi im a header 5');
            createElement('h6', 'Hi im a header 6');
}