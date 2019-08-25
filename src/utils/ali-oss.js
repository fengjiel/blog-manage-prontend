// 引入ali-oss
let OSS = require('ali-oss');

/**
 *  [accessKeyId] {String}：通过阿里云控制台创建的AccessKey。
 *  [accessKeySecret] {String}：通过阿里云控制台创建的AccessSecret。
 *  [bucket] {String}：通过控制台或PutBucket创建的bucket。
 *  [region] {String}：bucket所在的区域， 默认oss-cn-hangzhou。
 */
let client = new OSS({
    region: 'oss-cn-shenzhen',
    accessKeyId: 'LTAISmz01ltkNyFd',
    accessKeySecret: 'RBbITyeFIQC9GWxMbkzgo25GYVwN8F',
    bucket: 'youknew-blog'
});
export const put = async (ObjName, fileUrl) => {
    try {
        let result = await client.put(`${ObjName}`, fileUrl)
        // AAA为文件夹， ObjName为文件名字,可以只写名字，就直接储存在 bucket 的根路径
        console.log(result)
        return result
    } catch (e) {
        console.log(e)
    }
};
/**
 * 生成随机文件名称
 * 规则八位随机字符，加下划线连接时间戳
 */
export const getFileNameUUID = () => {
    function rx() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
    }
    return `${+new Date()}_${rx()}${rx()}`
};
