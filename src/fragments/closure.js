/**
 * Whenever you click in the buttons created, the console will print "5".
 * Fix the code in order to print the respective number of the button, e.g. if I click
 * on "Button3" the console will print "3", if click on "Button1" the console will print "1".
 */

function closureExample() {
  /**
   * ES6 arrow function to display the corresponding button number
   */
  const displayButtonNumber = (i) => () => console.log(i);

  for (var i = 0; i < 5; i++) {
    var btn = document.createElement('button');
    btn.appendChild(document.createTextNode('Button ' + i));

    /**
     * Using anonymous function
     */
    btn.addEventListener(
      'click',
      (function(i) {
        return function() {
          console.log(i);
        };
      })(i),
    );

    /**
     * Using inline function
     */
    btn.addEventListener('click', displayButtonNumber(i));

    document.body.appendChild(btn);
  }
}
