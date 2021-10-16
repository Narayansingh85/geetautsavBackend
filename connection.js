var {MongoClient} = require("mongodb")

async function main (){

    const uri = "mongodb+srv://Narayan:9873Bittu@cluster0.54sc1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    const client =new MongoClient(uri)
    try{
        await client.connect()
        await createListing(client,{
            name : "Narayan",
            summary: "A Charming loft in paris"
            
        })
        await listDatabases(client)
    }catch(e){
        console.error(e);
    }
    finally{
        await client.close();
    }
}
main().catch(console.error)

// --------------------------------------

async function listDatabases(client){
    const databaseslist = await client.db().admin().listDatabases();
    console.log("Databases")
    databaseslist.databases.forEach(db => {
        console.log(`-${db.name}`)
    });
}


async function createListing(client,newListings){
    const result = await client.db("sample_airbnb").collection("listingsAndReviews").insertOne(newListings);
}