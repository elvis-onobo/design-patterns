/**
 * The phone class here lays the bueprint for a certain spec of phone
 */
class Phone{
    constructor(
        serialNum,
        model = 'Generic',
        processor = 'Generic',
        RAM = '2GB',
        width = 67.3,
        height = 138.3,
        depth = 7.3,
        resoultion = '750 x 1334'
    ) {
        this.serialNum = serialNum;
        this.configuration = {
            model,
            processor,
            RAM,
            width,
            height,
            depth,
            resoultion 
        }
    }

    dial(num) {
        console.log(`Now dialing ${num}`);
    }

    displayConfig() {
        console.log(this.configuration);
    }
}

module.exports = Phone