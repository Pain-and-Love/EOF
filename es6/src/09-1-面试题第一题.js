class Car {
    constructor(number, name) {
        this.number = number
        this.name = name
    }
}
class Kuaiche extends Car {
    constructor(number, name) {
        super(number, name)
        // 不一定所有的属性都是需要外部传入的，因为这样就失去了这个Class存在的意义(独特性) 
        this.price = 1
    }
}
class Zhuanche extends Car {
    constructor(number, name) {
        super(number, name)
        this.price = 2
    }
}

class Trip {
    constructor(car) {
        this.car = car
    }
    // TODO: 为了这两个方法单独创建一个Trip类是否有必要?可不可以把start 和  end 这两个方法直接放在Car的原型上 
    start() {
        console.log(`行程开始，名称: ${this.car.name}, 车牌号: ${this.car.price}`)
    }
    end() {
        console.log('行程结束，价格: ' + (this.car.price * 5))
    }
}

let car = new Kuaiche(100, '桑塔纳')
let trip = new Trip(car)
trip.start()
trip.end()