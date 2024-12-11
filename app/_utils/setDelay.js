// 創建一個延遲的 Promise
const setDelay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default setDelay;
