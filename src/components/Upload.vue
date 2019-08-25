<template>
    <div class="hello">
        <el-upload
                class="upload-demo"
                action
                :http-request="handleUpload"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :on-success="handleSuccess"
                :before-remove="beforeRemove"
                multiple
                :limit="limit"
                :on-exceed="handleExceed"
                :file-list="fileList"
                :list-type="listType"
        >
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">{{ tip }}</div>
        </el-upload>
    </div>
</template>

<script>
    // eslint-disable

    import { put, getFileNameUUID } from '../utils/ali-oss.js'

    export default {
        name: 'Upload',
        props: {
            tip: {
                type: String,
                default: '上传大小不能超过80M'
            },
            limit: {
                type: Number,
                default: 2
            },
            action: {
                type: String,
                default: ''
            },
            headers: {
                type: Object,
                default: () => {}
            },
            name: {
                type: String,
                default: ''
            },
            listType: {
                type: String,
                default: 'text'
            }
        },
        data() {
            return {
                fileList: []
            }
        },
        methods: {
            handleRemove(file, fileList) {
                this.$emit('on-remove', file, fileList)
            },
            handlePreview(file) {
                this.$emit('on-preview', file)
            },
            handleExceed(files, fileList) {
                this.$message.warning(`每次只能上传 ${this.limit} 个文件`)
            },
            beforeRemove(file, fileList) {
                return this.$confirm(`确定移除 ${file.name}？`)
            },
            handleSuccess(response, file, fileList) {
                this.fileList = fileList
                this.$emit('on-success', file, fileList)
            },
            /**
             * 自定义上传方法
             */
            handleUpload(option) {
                // 生成的文件名称
                let objName = getFileNameUUID()

                // 调用 ali-oss 中的方法
                put(``, option.file).then(res => {
                    console.log(res)
                })
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
