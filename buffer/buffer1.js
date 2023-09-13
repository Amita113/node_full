//alloc,from,write,length,tostring(),[0],concat

//Buffer help us to deal with  binary data, it shows us in binary form

//memory allocation -- resize
const buff =Buffer.alloc(5)
// write to store data

buff.write("hello")
console.log(buff)
//console.log(buff.toString())

// if we try to add more string it wont allow
//buff.write("helloooo")
//console.log(buff)
//console.log(buff.toString())
//console.log(buff.length)
//console.log(buff[2])

//from we direct initilize
const buff1 =  Buffer.from('hello')
console.log(buff1.toString())

// hello binar data h value
console.log(buff1[0])
buff1[0]= buff1[4]
console.log(buff1[0])

//concat
const buff2 =  Buffer.from('world')
const buff3 = Buffer.concat(buuf1,buff2)
console.log(buff3)
















