    // import {add,print,val as value,bal as balance} from './mod.js';
    //we use functions,value we have mention and rename if we want ....
    import * as module from './mod.js';
    /// we need use like a class in this type
    console.log('this is script links of js');
    // add(2,3);
    // print(2,4);
    // console.log(value);
    // console.log(balance);
    module.add(2,3);
    module.sub(4,1);
    console.log(module.val);
    const newVal=module.val;
    console.log(newVal);