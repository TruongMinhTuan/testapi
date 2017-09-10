const request = require('postman-request');
const yargs = require('yargs');
const prompt = require('prompt')
const say=require('say');
const argv = yargs.argv;
function sendmess(mess,name){
    request('http://localhost:8080/?mess='+mess+'&name='+name, function (error, response, body) {
      //  console.log('error:', error); // Print the error if one occurred
        //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
       // console.log('body:', body); // Print the HTML for the Google homepage.

    })
}

//prompt.start()

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


if (typeof argv.name == "undefined"){
   console.log('try --name ');
}
else{
    startSpeak(argv.name )

}
