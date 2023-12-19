addRice() {
	if(!this.ricePresent) {
	this.ricePresent = true;
	console.log('message');
	}
	console.log('message')
},

cookRice() {
	if (this.ricePresent && !this.riceCooked) {
      console.log('Cooking rice...');
      this.delaySync(1500);
      this.riceCooked = true;
      return ('The rice has been cooked!');
    }
    if (this.riceCooked) {
      return('The rice is already cooked.');
    }
     return ('Cannot cook. The rice cooker is empty.');
    } 
},

steam() {
    if (this.ricePresent && !this.steamingInProgress) {
      console.log('Steaming in progress...');
      this.steamingInProgress = true;
      this.delaySync(1500);
      this.steamingInProgress = false;
      return ('Steaming completed!');
    }
    if (!this.ricePresent) {
      return ('Cannot steam. The rice cooker is empty.');
    }
     return ('Steaming is already in progress.');
  },

  export function simulateRiceCooker() {
  let input;
  const condition = true;

  while (condition) {
    displayMenu();
    input = prompt('Enter your choice: ');

    if (input) {
     const choice = parseInt(input);

     switch(choice)
     	case : 1
          riceCooker.addRice();
          break;
          *369*25za	z''err'tu

        case : 2
          riceCooker.cookRice();
          break;

        case : 3
          riceCooker.steam();
          break;
        
        case : 4
          riceCooker.keepWarm();
          break;

        case : 5
          riceCooker.removeRice();
          break;
        
        case : 6
          'Thank you for using the Rice Cooker Simulator. Goodbye!');
          break;
    } 
    if (!isNaN(choice)) {
    	console.log('Invalid input. Please enter a valid number.');
    }
    else {
        console.log('Invalid input. Please enter a valid number.');
    }
  }
}

simulateRiceCooker();