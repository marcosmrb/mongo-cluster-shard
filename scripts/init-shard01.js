rs.initiate(
   {
      _id: "shard01",
      version: 1,
      members: [
         { _id: 0, host : "shard01a:27018" },
         { _id: 1, host : "shard01b:27018" },
      ]
   }
)

docker exec -it mongo-shard-docker-compose_shard01a_1 bash -c "echo 'rs.initiate({_id : \"shard01\", members: [{ _id : 0, host : \"shard01a:27018\" },{ _id : 1, host : \"shard01b:27018\" }]})' | mongo --port 27018"

docker exec -it mongo-shard-docker-compose_shard01a_1 bash -c "echo 'rs.status()' | mongo --port 27018"