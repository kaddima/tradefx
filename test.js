
let util = require('util')
let _ = require('lodash')

let a = [{name:'williams'}]

let b = a.filter(v=>{

    if(v.name == 'williams'){

        return v
    }

    return
})


let str = 'btc/usd'

let [first, last] = str.split('/')

let n = '1234566.56'
