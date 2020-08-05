// 本地获取存储的用户权限，没有则发送请求获取用户的权限数组。
// 用户的权限改变时，就在本地存储一次。
const userPermission = ['101', '211', '302', '404', 'other'];
export function checkPermission(key) {
    let hasIndex = userPermission.indexOf(key)
    return hasIndex > -1 ? true : false
}