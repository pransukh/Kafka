const {kafka} = require("./client");
const readline = require("readline")

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

async function init() {
    const producer = kafka.producer();
    console.log("Connecting producers....");
    await producer.connect();
    console.log("Producer connected....");

    rl.setPrompt("> ");
    rl.prompt();

    rl.on('line', async function(line) {
        const[riderName, location, empId] = line.split(" ");
        await producer.send({
            topic:"rider-updates",
            messages:[
                {   partition:location.toLowerCase()==='north' ? 0 : 1,
                    key:"location-update",value:JSON.stringify({
                    name:riderName,id:empId,loc:location
                })
            }
            ]
        });
    }).on("close",async ()=>{
        await producer.disconnect();
    });

    

    


}

init();