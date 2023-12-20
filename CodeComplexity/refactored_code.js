import promptSync from 'prompt-sync';
import {displayMenu} from "./menu.js.js";
const prompt = promptSync();

export const riceCooker = {
    ricePresent: false,
    riceCooked: false,
    steamingInProgress: false,
    heatingInProgress: false,

    addRice() {
        if (this.ricePresent) {
            console.log("There's already rice in the rice cooker.");
            return;
        }
        this.ricePresent = true;
        console.log('Rice has been added.');
    },

    cookRice() {
        if (!this.ricePresent) {
            console.log('Cannot cook. The rice cooker is empty.');
            return;
        }
        if (this.riceCooked) {
            console.log('The rice is already cooked.');
        return;
        }
        console.log('Cooking rice...');
        delayAsync(1500).then(() => {
        this.riceCooked = true;
        console.log('The rice has been cooked!');
        });
    },

    steam() {
        if (!this.ricePresent) {
            console.log('Cannot steam. The rice cooker is empty.');
            return;
        }
        if (this.steamingInProgress) {
            console.log('Steaming is already in progress.');
            return;
        }
        console.log('Steaming in progress...');
        this.steamingInProgress = true;
        delayAsync(1500).then(() => {
            this.steamingInProgress = false;
            console.log('Steaming completed!');
        });
    },

    keepWarm() {
        if (!this.ricePresent) {
            console.log('Cannot keep warm. The rice cooker is empty.');
            return;
        }
        if (!this.riceCooked) {
            console.log('Cannot keep warm. The rice is not cooked.');
            return;
        }
        if (this.heatingInProgress) {
            console.log('Keeping warm is already in progress.');
            return;
        }
        console.log('The rice is now being kept warm.');
        this.heatingInProgress = true;
    },

    removeRice() {
        if (!this.ricePresent || (!this.riceCooked && !this.heatingInProgress)) {
            console.log('There\'s no rice to remove or it is not cooked yet.');
            return;
        }
        this.ricePresent = false;
        this.riceCooked = false;
        this.steamingInProgress = false;
        this.heatingInProgress = false;
        console.log('The rice has been removed from the rice cooker.');
    },

    delayAsync(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    },
};


export function simulateRiceCooker() {
    let input;
    const condition = true;
  
    while (condition) {
        displayMenu();
        input = prompt('Enter your choice: ');
  
        if (!input) {
            console.log('No input provided.');
            continue;
        }
        const choice = parseInt(input);
        if (isNaN(choice)) {
            console.log('Invalid input. Please enter a valid number.');
            continue;
        }
  
        switch (choice) {
            case 1:
                riceCooker.addRice();
                break;
            case 2:
                riceCooker.cookRice();
                break;
            case 3:
                riceCooker.steam();
                break;
            case 4:
                riceCooker.keepWarm();
                break;
            case 5:
                riceCooker.removeRice();
                break;
            case 6:
                console.log('Thank you for using the Rice Cooker Simulator. Goodbye!');
                condition = false;
                break;
            default:
                console.log('Invalid choice. Please select a valid option.');
        }
    }
}

simulateRiceCooker();