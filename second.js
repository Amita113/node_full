// create an object and call it in other file

module.exports={
    name1:"ganesha",
    age:28,
    address:"pune",
    biodata: function (){ return console.log(`my name is ${this.name1} and i live in ${this.address}`)}
}
