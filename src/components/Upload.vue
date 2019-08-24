<template>
    <div>
        <el-upload
                class="upload-demo"
                action="http://localhost/api/v1/manage/article/upload.do"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :file-list="fileList"
                list-type="picture/text">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
    </div>
</template>

<script>
    /* eslint-disable */
    export default {
        name: "Upload",
        data() {
            return {
                fileList: [{
                    name: 'file',
                    url: ''
                }]
            };
        },
        methods: {
            handleRemove(file, fileList) {
                Console.log(file, fileList);
            },
            handlePreview(file) {
                Console.log(file);
            }
        }
    }
</script>

<style scoped>

</style>
