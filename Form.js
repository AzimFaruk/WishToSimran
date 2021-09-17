class Form {

    constructor() {
      this.input = createInput("").attribute("placeholder", "What is your wish for me?");
      this.name = createInput("").attribute("placeholder", "Name?");
      this.button = createButton('Send');
      this.greeting = createElement('h3');
      this.name1 = createElement('h5');
      this.thanks = createElement('h3');
      this.instruction = createElement('h4');
    }

    display(){

        this.name.position(300, 660);
        this.name.style('background', 'pink');

      this.input.position(475, 660);
      this.input.style('background', 'lightgreen');

      this.button.position(650, 660);
      this.button.style('background', 'lightpink');

      this.button.mousePressed(()=>{       
        
        this.name.hide();
        this.input.hide();
        this.button.hide();
                
        wisher.wish = this.input.value();
        wisher.name = this.name.value();

        this.name1.html(wisher.name);
        this.name1.position(310, 100);

        this.greeting.html(wisher.wish);
        this.greeting.position(310, 120);
        
        this.thanks.html('Thanks!!');
        this.thanks.position(730, 120);

        this.instruction.html('Send me the screenshot personally!');
        this.instruction.position(500, 600);
      });
    }
}
  