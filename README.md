# Kafka
A demo project of kafka with node js

# Run zookeeper docker
`docker run -p 2181:2181 zookeeper`

# Run kafka docker image
`docker run -p 9092:9092 -e KAFKA_ZOOKEEPER_CONNECT=<PRIVATE_IP>:2181 -e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://<PRIVATE_IP>:9092 -e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 confluentinc/cp-kafka`

# Create node js project with 
on windows `npm init`

on macOS  `yarn init`

# cd to newly created project create 4 files
* admin.js
* client.js
* producer.js
* consumer.js

# To nun any file
`node <FILE_NAME>.js`

