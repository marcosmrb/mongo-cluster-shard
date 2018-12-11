docker exec -it mongo-shard-docker-compose_router_1 bash -c "echo 'use testDb' | mongo"
docker exec -it mongo-shard-docker-compose_router_1 bash -c "echo 'sh.enableSharding(\"testDb\")' | mongo "

docker exec -it mongo-shard-docker-compose_router_1 bash -c "echo 'db.createCollection(\"testDb.testCollection\")' | mongo "

docker exec -it mongo-shard-docker-compose_router_1 bash -c "echo 'sh.shardCollection(\"testDb.testCollection\", {\"shardingField\" : 1})' | mongo "