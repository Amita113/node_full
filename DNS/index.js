//npm init -y
// for es6 module type:"module"

//dns module:

import dns from 'dns'

// host name, call back for (error,address)

// dns.lookup('iteducation.com',(error,address,family)=>{
//     if (error) throw error;
//     console.log(address); // string representation of IPV4 or IPV6
//     console.log(family); // from which family 4 and 6
// });


dns.resolve('iteducation.com',(error,address)=>{
    if (error) throw error;
    console.log(address); // string representation of IPV4 or IPV6
    
});
