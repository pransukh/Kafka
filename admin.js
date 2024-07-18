
const {Kafka} = require("kafkajs");
const {kafka} = require("./client");


async function init(){
    const admin = kafka.admin();
    console.log("Adming Connecting.....");
    admin.connect();
    console.log("Adming Connected.....");

    console.log("Creating Topic..")
    admin.createTopics({
        topics:[{
            topic:"rider-updates",
            numPartitions:2,

        },]
    });
    
    console.log("Topic created success....");
    await admin.disconnect();
}

init();