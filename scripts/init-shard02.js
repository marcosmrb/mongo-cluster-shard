rs.initiate(
   {
      _id: "shard02",
      version: 1,
      members: [
         { _id: 0, host : "shard02a:27019" },
         { _id: 1, host : "shard02b:27019" },
      ]
   }
)

docker exec -it mongo-shard-docker-compose_shard02a_1 bash -c "echo 'rs.initiate({_id : \"shard02\", members: [{ _id : 0, host : \"shard02a:27019\" },{ _id : 1, host : \"shard02b:27019\" }]})' | mongo --port 27019"

docker exec -it mongo-shard-docker-compose_shard02a_1 bash -c "echo 'rs.status()' | mongo --port 27019"


db.testCollection.insert({cust_id: "abc123", ord_date: new Date("Oct 04, 2012"), status: 'A',price: 25, items: [ { sku: "mmm", qty: 5, price: 2.5 },{ sku: "nnn", qty: 5, price: 2.5 } ]})

db.products.insert( 
   {
      cust_id: "abc123",
      ord_date: new Date("Oct 04, 2012"),
      status: 'A',
      price: 25,
      items: [ { sku: "mmm", qty: 5, price: 2.5 },
               { sku: "nnn", qty: 5, price: 2.5 } ]
  }
 )