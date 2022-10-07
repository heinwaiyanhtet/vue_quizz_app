export const findById = (resources, id) => {
    if (!resources) return null
    return resources.find(r => r.id === id)
}

export const localStorageGetCheck = (getStorage) => {
    if(!localStorage.getItem(getStorage)) return null
        let json = JSON.parse(localStorage.getItem(getStorage));
        return json
}

export const localStorageSetCheck = (keyStorage,setStorage) => {
    if(localStorage.getItem(keyStorage)) return;
        return localStorage.setItem(keyStorage,JSON.stringify(setStorage))
}