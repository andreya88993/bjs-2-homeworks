//Задача № 1

function cachingDecoratorNew(func) {
    let cache = [];
    function wrapper(...args) {
      const hash = args.join(',');
      let objectInCache = cache.find((item) => item.hash === hash);
      if (objectInCache) {
        return "Из кэша: " + objectInCache.value;
      }
  
      let result = func(...args);
      
      cache.push({ hash, value: result });
      if (cache.length > 5) {
        cache.shift();
      }
  
      return "Вычисляем: " + result;
    }
    return wrapper;
  }
  
  
  function debounceDecoratorNew(func, delay) {
    let timeoutId = null;
    function wrapper(...args){
      if (wrapper.allCount === 0){
        func(...args);
        wrapper.count +=1;
      }
         
      if (timeoutId){
        clearTimeout(timeoutId);
      }
  
      timeoutId = setTimeout(() => { 
        func(...args);              
        wrapper.count +=1;
      }, delay);
      wrapper.allCount += 1; 
    }
    wrapper.count = 0;
    wrapper.allCount = 0;
    return wrapper;
  }