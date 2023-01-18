import { nanoid } from 'nanoid'
// 生成一个随机字符串，且不能发生变化。来代表游客身份，且要持久存储
export const getNANOID = () => {
    // 先从本地存储查看一下原先是否有nanoid
    let nanoid_token = localStorage.getItem('NANOIDTOKEN')
        // 如果没有则生成
    if (!nanoid_token) {
        // 生成游客临时身份
        nanoid_token = nanoid();
        // 生成后传到本地存储里
        localStorage.setItem('NANOIDTOKEN', nanoid_token)
    }
    return nanoid_token;
}
1