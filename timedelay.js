const readline = require('readline');
const request = require('postman-request');
const prompt = require('prompt')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,  
  prompt: 'MESS>' 
});
var name;

rl.on('pause', () => {
 
  console.log('---<<<Thank You>>>---');
});
rl.on('SIGINT', () => {
  
  rl.question('Are you sure you want to exit? ', (answer) => {
    if (answer.match(/^y(es)?$/i)) rl.pause();
  });
});


rl.on('line', (input) => {
 //console.log(`Mess: ${input}`);
 sendmess(`${input}`,name)
 rl.prompt();
});
rl.question('What you name:  ', (answer) => {
  // TODO: Log the answer in a database
  name=`${answer}`;
  console.log(`Heloo: ${answer}`);
  console.log('Now You Can Send Message -->>');
  rl.prompt();
});
function sendmess(mess,name){
  request('http://localhost:8080/?mess='+mess+'&name='+name, function (error, response, body) {
    //  console.log('error:', error); // Print the error if one occurred
      //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
     // console.log('body:', body); // Print the HTML for the Google homepage.
     
  })
}
//startSpeak('name')

function startSpeak(name) {
  prompt.get(['message'], (error, result)=> {
    
          sendmess(result.message,name)
          if(result.message == 'exit') 
              {
                  sendmess('exit',name)
                  process.exit()
              
              }
          startSpeak(name)
      
  })
}
