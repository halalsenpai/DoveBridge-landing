// import SyncStorage from 'sync-storage';

// const prefix = "1594461923517";

// export const Store = {
//     // utilities
//     set: (name, item) => {
//         SyncStorage.set(prefix + name, item);
//     },
//     get: (name, arg) => {
//         return SyncStorage.get(prefix + name) || arg;
//     },
//     setUserToken: (accessToken) => {
//         SyncStorage.set(prefix + "accessToken", accessToken);
//     },
//     setUserId: (userId) => {
//         SyncStorage.set(prefix + "userId", userId);
//     },
//     setUser: (user) => {
//         SyncStorage.set(prefix + "user", user);
//     },
//     getUserToken: (arg) => {
//         return SyncStorage.get(prefix + 'accessToken') || arg;
//     },
//     getUserId: (arg) => {
//         return SyncStorage.get(prefix + 'userId') || arg;
//     },
//     getUser: (arg) => {
//         return SyncStorage.get(prefix + 'user') || arg;
//     },
//     getAllKeys: (arg) => {
//         return SyncStorage.getAllKeys() || arg
//     },
//     remove: (key) => {
//         return SyncStorage.remove(prefix + key);
//     },
//     reset(except = []) {
//         SyncStorage.getAllKeys().forEach(key => {
//             if (except.findIndex(i => (prefix + i) == key) == -1) {
//                 SyncStorage.remove(key);
//             }
//         })
//     },
//     logoutAndReset: () => {
//         SyncStorage.remove(prefix + 'user');
//         SyncStorage.remove(prefix + 'userId');
//         SyncStorage.remove(prefix + 'accessToken');
//     },
// }


const prefix = "1594461923517";

export const Store = {
    // utilities
    set: (name, item) => {
        localStorage.setItem(prefix + name, item);
    },
    get: (name, arg) => {
        return localStorage.getItem(prefix + name) || arg;
    },
    setUserToken: (accessToken) => {
        localStorage.setItem(prefix + "accessToken", accessToken);
    },
    setUserId: (userId) => {
        localStorage.setItem(prefix + "userId", userId);
    },
    setUser: (user) => {
        localStorage.setItem(prefix + "user", user);
    },
    getUserToken: (arg) => {
        return localStorage.getItem(prefix + 'accessToken') || arg;
    },
    getUserId: (arg) => {
        return localStorage.getItem(prefix + 'userId') || arg;
    },
    getUser: (arg) => {
        return localStorage.getItem(prefix + 'user') || arg;
    },
    // getAllKeys: (arg) => {
    //     return localStorage.getAllKeys() || arg
    // },
    remove: (key) => {
        return localStorage.removeItem(prefix + key);
    },
    // reset(except = []) {
    //     localStorage.getAllKeys().forEach(key => {
    //         if (except.findIndex(i => (prefix + i) == key) == -1) {
    //             localStorage.removeItem(key);
    //         }
    //     })
    // },
    logoutAndReset: () => {
        localStorage.removeItem(prefix + 'user');
        localStorage.removeItem(prefix + 'userId');
        localStorage.removeItem(prefix + 'accessToken');
    },
}