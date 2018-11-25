import Item from './Item.js'

function createDiscount(item) {
    // 用代理做折扣显示
    // 不让get方法直接访问到原来的price和name，代理这两个属性。
    return new Proxy(item, {
        get: function (target, key, receiver) {
            if (key === 'name') {
                return `${target[key]}【折扣】`
            }
            if (key === 'price') {
                return target[key] * 0.8
            }
            return target[key]
        }
    })
}

// 工厂函数
// Item做proxy。 所以后面用到的Item如果有discount属性，那就直接返回一个proxy实例
export default function (list, itemData) {
    if (itemData.discount) {
        itemData = createDiscount(itemData)
    }
    return new Item(list, itemData)
}

