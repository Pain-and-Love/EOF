import $ from 'jquery'
import createItem from '../Item/CreateItem.js'
import { GET_LIST } from '../config/config.js'

export default class List {
    constructor(app) {
        // 引入app的目的也是需要确定这个list的挂载点
        this.app = app
        // 自己的挂载点
        this.$el = $('<div>')
    }

    // 获取数据
    loadData() {
        // 使用 fetch （低版本浏览器可使用 https://github.com/github/fetch 兼容）
        // 返回 promise
        return fetch(GET_LIST).then(result => {
            return result.json()
        })
    }

    // 生成列表
    initItemList(data) {
        data.map(itemData => {
            // 这里的item也有可能是Proxy实例
            let item = createItem(this, itemData)
            // item自身的渲染方法，此时已经渲染再list节点上了
            item.init()
            return item
        })
    }

    // 渲染
    render() {
        this.app.$el.append(this.$el)
    }

    init() {
        this.loadData().then(data => {
            this.initItemList(data)
        }).then(() => {
            // 最后再一起渲染 DOM ，以避免重复渲染的性能问题
            this.render()
        })
    }
}