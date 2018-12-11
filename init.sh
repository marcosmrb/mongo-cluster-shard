#!/bin/bash

# docker-compose exec config01 sh -c "mongo --port 27017 < /scripts/init-configserver.js"
# docker-compose exec shard01a sh -c "mongo --port 27018 < /scripts/init-shard01.js"
# docker-compose exec shard02a sh -c "mongo --port 27019 < /scripts/init-shard02.js"
# docker-compose exec shard03a sh -c "mongo --port 27020 < /scripts/init-shard03.js"
# sleep 20
# docker-compose exec router sh -c "mongo < /scripts/init-router.js"

docker exec -it mongo-shard-docker-compose_config01_1 bash -c "echo 'rs.initiate({_id: \"configserver\",configsvr: true, members: [{ _id : 0, host : \"config01:27017\" },{ _id : 1, host : \"config02:27017\" }, { _id : 2, host : \"config03:27017\" }]})' | mongo"
docker exec -it mongo-shard-docker-compose_shard01a_1 bash -c "echo 'rs.initiate({_id : \"shard01\", members: [{ _id : 0, host : \"shard01a:27018\" },{ _id : 1, host : \"shard01b:27018\" }]})' | mongo --port 27018"
docker exec -it mongo-shard-docker-compose_shard02a_1 bash -c "echo 'rs.initiate({_id : \"shard02\", members: [{ _id : 0, host : \"shard02a:27019\" },{ _id : 1, host : \"shard02b:27019\" }]})' | mongo --port 27019"
docker exec -it mongo-shard-docker-compose_shard03a_1 bash -c "echo 'rs.initiate({_id : \"shard03\", members: [{ _id : 0, host : \"shard03a:27020\" },{ _id : 1, host : \"shard03b:27020\" }]})' | mongo --port 27020"
sleep 20

docker exec -it mongo-shard-docker-compose_router_1 bash -c "echo 'sh.addShard(\"shard01/shard01a:27018\")' | mongo "
docker exec -it mongo-shard-docker-compose_router_1 bash -c "echo 'sh.addShard(\"shard01/shard01b:27018\")' | mongo "

docker exec -it mongo-shard-docker-compose_router_1 bash -c "echo 'sh.addShard(\"shard02/shard02a:27019\")' | mongo "
docker exec -it mongo-shard-docker-compose_router_1 bash -c "echo 'sh.addShard(\"shard02/shard02b:27019\")' | mongo "

docker exec -it mongo-shard-docker-compose_router_1 bash -c "echo 'sh.addShard(\"shard03/shard03a:27020\")' | mongo "
docker exec -it mongo-shard-docker-compose_router_1 bash -c "echo 'sh.addShard(\"shard03/shard03b:27020\")' | mongo "
