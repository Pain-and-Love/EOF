export function log(type) {
    return function (target, name, descriptor) {
        // 记录原来的fn
        var oldValue = descriptor.value;
    
        // 包装原来的fn，最后返回一个包装后的fn
        descriptor.value = function() {
            //  此处统一上报日志，或者做一些打点什么的事情。 总之，与业务逻辑无关的需求都可以加在这里
            console.log(`日志上报 ${type}`);
    
            return oldValue.apply(this, arguments);
        };
    
        return descriptor;
    }
}