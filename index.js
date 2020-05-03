// const questions = [

// ];

// function writeToFile(fileName, data) {
// }

// function init() {

// }

// init();




const questions =  [  

  "whats is the file name?", "What is your GitHub name?"

];


function writeToFile(fileName, data) {
    
    options = { format: 'Letter' };
    readMe.create(readMemd, options).toFile('.github.com', function (err, res) {
        if (err)
            return console.log(err);
        console.log("ReadMe Successfully generated", res);
    })
};

//Starts the process
init();