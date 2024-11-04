

const getStoreReadList = ()=> {
    const storageListStr = localStorage.getItem('read-list');
    if(storageListStr){
        const storageList = JSON.parse(storageListStr);
        return storageList;
    }
    else{
        return [];
    }
}

const addToStorageReadList = (id)=> {
    const storageList = getStoreReadList();
    if(storageList.includes(id)){
        console.log(id, 'id already exists in the Read List');
    }
    else{
        storageList.push(id);
        const storageListSrt = JSON.stringify(storageList)
        localStorage.setItem('read-list', storageListSrt)
    }
}


const getStoreWishList = ()=> {
    const storageListStr = localStorage.getItem('wish-list');
    if(storageListStr){
        const storageList = JSON.parse(storageListStr);
        return storageList;
    }
    else{
        return [];
    }
}

const addToStorageWishList = (id)=> {
    const storageList = getStoreReadList();
    if(storageList.includes(id)){
        console.log(id, 'id already exists in the Read List');
    }
    else{
        storageList.push(id);
        const storageListSrt = JSON.stringify(storageList)
        localStorage.setItem('wish-list', storageListSrt)
    }
}

export {addToStorageReadList, addToStorageWishList}