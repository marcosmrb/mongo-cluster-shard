sh.addShard("shard01/shard01a:27018")
sh.addShard("shard01/shard01b:27018")

sh.addShard("shard02/shard02a:27019")
sh.addShard("shard02/shard02b:27019")

sh.addShard("shard03/shard03a:27020")
sh.addShard("shard03/shard03b:27020")


docker exec -it mongo-shard-docker-compose_router_1 bash -c "echo 'sh.addShard(\"shard01/shard01a:27018\")' | mongo "
docker exec -it mongo-shard-docker-compose_router_1 bash -c "echo 'sh.addShard(\"shard01/shard01b:27018\")' | mongo "

docker exec -it mongo-shard-docker-compose_router_1 bash -c "echo 'sh.addShard(\"shard02/shard02a:27019\")' | mongo "
docker exec -it mongo-shard-docker-compose_router_1 bash -c "echo 'sh.addShard(\"shard02/shard02b:27019\")' | mongo "

docker exec -it mongo-shard-docker-compose_router_1 bash -c "echo 'sh.addShard(\"shard03/shard03a:27020\")' | mongo "
docker exec -it mongo-shard-docker-compose_router_1 bash -c "echo 'sh.addShard(\"shard03/shard03b:27020\")' | mongo "

docker exec -it mongo-shard-docker-compose_router_1 bash -c "echo 'sh.status()' | mongo "
