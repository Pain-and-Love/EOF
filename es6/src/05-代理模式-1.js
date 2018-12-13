// 明星
let star = {
    name: '张XX',
    age: 25,
    phone: '13910733521'
}

// 经纪人
let agent = new Proxy(star, {
    get: function (target, key, receiver) {
        // receiver就是 经纪人
        if (key === 'phone') {
            console.log('target ->', target);
            // 返回经纪人自己的手机号
            return '18611112222'
        }
        if (key === 'price') {
            // 明星不报价，经纪人报价
            return 120000
        }
        // 返回正常的值
        return target[key]
    },
    set: function (target, key, val, receiver) {
        if (key === 'customPrice') {
            if (val < 100000) {
                // 最低 10w
                throw new Error('价格太低')
            } else {
                target[key] = val
                return true
            }
        }
    }
})

// 主办方
console.log(agent.name)
console.log(agent.age)
console.log(agent.phone)
console.log(agent.price)

// 想自己提供报价（砍价，或者高价争抢）
agent.customPrice = 150000
// agent.customPrice = 90000  // 报错：价格太低
console.log('customPrice', agent.customPrice)


// https://www.2cto.com/kf/201707/654176.html
var foo = {};
var bar = new Proxy(foo, {
    get: function (target, key, receiver) {
        console.log("This is get! The key: " + key);
        console.log(receiver === bar, foo === target);
        return target[key];
    }
});
bar.a = 1;
console.log(bar.a);
//This is get! The key: a
//true true
//1
 
bar.b = {c: "d"};
console.log(bar.b.c);
//This is get! The key: b
//true true
//"d"