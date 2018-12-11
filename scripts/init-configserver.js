rs.initiate(
   {
      _id: "configserver",
      configsvr: true,
      version: 1,
      members: [
         { _id: 0, host: "config01:27017" },
         { _id: 1, host: "config02:27017" },
         { _id: 2, host: "config03:27017" }
      ]
   }
)



docker exec -it mongo-shard-docker-compose_config01_1 bash -c "echo 'rs.initiate({_id: \"configserver\",configsvr: true, members: [{ _id : 0, host : \"config01:27017\" },{ _id : 1, host : \"config02:27017\" }, { _id : 2, host : \"config03:27017\" }]})' | mongo"

docker exec -it mongo-shard-docker-compose_config01_1 bash -c "echo 'rs.status()' | mongo"
