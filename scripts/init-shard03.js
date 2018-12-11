rs.initiate(
   {
      _id: "shard03",
      version: 1,
      members: [
         { _id: 0, host : "shard03a:27020" },
         { _id: 1, host : "shard03b:27020" },
      ]
   }
)

docker exec -it mongo-shard-docker-compose_shard03a_1 bash -c "echo 'rs.initiate({_id : \"shard03\", members: [{ _id : 0, host : \"shard03a:27020\" },{ _id : 1, host : \"shard03b:27020\" }]})' | mongo --port 27020"

docker exec -it mongo-shard-docker-compose_shard03a_1 bash -c "echo 'rs.status()' | mongo --port 27020"