import $ from 'jquery'
import getCart from './GetCart.js'

export default class ShoppingCart {
    constructor(app) {
        this.app = app
        this.$el = $('<div>').css({
            'padding-bottom': '10px',
            'border-bottom': '1px solid #ccc'
        })
        // 购物车对象中有一个cart属性(其实也就是使用了cart实例的单例),而且每一个shoppingcart都需要这个相同的单例.
        // 如果不需要单例，也可以直接import 对应的Class
        this.cart = getCart()
    }

    // 显示购物车内容
    showCart() {
        // 本质也是继承了cart实例的方法
        alert(this.cart.getList())
    }

    // 初始化按钮
    initBtn() {
        let $btn = $('<button>购物车</button>')
        $btn.click(() => {
            this.showCart()
        })
        this.$el.append($btn)
    }

    // 渲染
    render() {
        this.app.$el.append(this.$el)
    }

    init() {
        this.initBtn()
        this.render()
    }
}