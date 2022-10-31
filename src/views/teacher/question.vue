<template>
  <div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>题库管理</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 搜索筛选 -->
    <el-form :inline="true" class="user-search">
      <el-form-item label="">
        <el-select size="small" placeholder="请选择题目难度">
          <el-option label="1" value=""></el-option>
          <el-option label="2" value="N"></el-option>
          <el-option label="3" value="Y"></el-option>
          <el-option label="4" value="Y"></el-option>
          <el-option label="5" value="Y"></el-option>
        </el-select>
        <el-select size="small" placeholder="请选择题目章节">
          <el-option label="第1章" value=""></el-option>
          <el-option label="第2章" value="N"></el-option>
          <el-option label="第3章" value="N"></el-option>
          <el-option label="第4章" value="N"></el-option>
          <el-option label="第5章" value="N"></el-option>
          <el-option label="第6章" value=""></el-option>
          <el-option label="第7章" value="N"></el-option>
          <el-option label="第8章" value="N"></el-option>
          <el-option label="第9章" value="N"></el-option>
          <el-option label="第10章" value="N"></el-option>
          <el-option label="第11章" value="N"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="">
        <el-input size="small" placeholder="输入题目ID"></el-input>
      </el-form-item>
      <el-form-item label="">
        <el-input size="small" placeholder="输入题目名称"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button size="small" type="primary" icon="el-icon-search"
          >搜索题目</el-button
        >
        <el-button size="small" type="primary" icon="el-icon-plus"
          >添加题目</el-button
        >
        <el-button size="small" type="primary" icon="el-icon-delete"
          >删除题目</el-button
        >
      </el-form-item>
    </el-form>
    <el-table
      size="small"
      @selection-change="selectChange"
      :data="userData"
      highlight-current-row
      v-loading="loading"
      border
      element-loading-text="拼命加载中"
      style="width: 100%;"
    >
      <el-table-column align="center" type="selection" width="50">
      </el-table-column>
      <el-table-column
        align="center"
        sortable
        prop="questionId"
        label="ID"
        width="200"
      >
      </el-table-column>
      <el-table-column
        align="center"
        sortable
        prop="questionName"
        label="题目"
        width="180"
      >
      </el-table-column>
      <el-table-column
        align="center"
        sortable
        prop="questionDifficulty"
        label="难度"
        width="120"
      >
      </el-table-column>
      <el-table-column
        align="center"
        sortable
        prop="questionChapter"
        label="章节"
        min-width="200"
      >
      </el-table-column>
      <el-table-column
        align="center"
        sortable
        prop="questionLabel"
        label="标签"
        width="200"
      >
      </el-table-column>
      <el-table-column align="center" label="操作" min-width="220">
        <template slot-scope="scope">
          <el-button size="small" type="warning" icon="el-icon-edit-outline"
            >编辑</el-button
          >
          <el-button size="small" type="danger" icon="el-icon-delete"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页组件 -->
    <Pagination
      v-bind:child-msg="pageparm"
      @callFather="callFather"
    ></Pagination>
  </div>
</template>

<script>
import Pagination from "../../components/Pagination";
export default {
  data() {
    return {
      // 请求数据参数
      formInline: {
        page: 1,
        limit: 10,
        deptId: "",
        userName: "",
        userMobile: "",
        isLock: ""
      },
      //用户数据
      userData: [],
      // 分页参数
      pageparm: {
        currentPage: 1,
        pageSize: 10,
        total: 10
      }
    };
  },

  // 注册组件
  components: {
    Pagination
  },

  /**
   * 数据发生改变
   */
  watch: {},

  /**
   * 创建完毕
   */
  created() {
    this.getdata(this.formInline);
  },

  methods: {
    // 获取数据方法
    getdata(parameter) {
      this.loading = true;
      // 模拟数据开始
      let res = {
        code: 0,
        msg: null,
        count: 12,
        data: [
          {
            questionId: "20220",
            questionName: "两数之和",
            questionDifficulty: "1",
            questionChapter: "第1章",
            questionLabel: "数组"
          },
          {
            questionId: "19023",
            questionName: "过河卒",
            questionDifficulty: "2",
            questionChapter: "第1章",
            questionLabel: "字符串"
          },
          {
            questionId: "10039",
            questionName: "铺地毯",
            questionDifficulty: "3",
            questionChapter: "第2章",
            questionLabel: "递归"
          },
          {
            questionId: "2022",
            questionName: "两数之和",
            questionDifficulty: "1",
            questionChapter: "第1章",
            questionLabel: "数组"
          },
          {
            questionId: "2022",
            questionName: "两数之和",
            questionDifficulty: "1",
            questionChapter: "第1章",
            questionLabel: "数组"
          },
          {
            questionId: "2022",
            questionName: "两数之和",
            questionDifficulty: "1",
            questionChapter: "第1章",
            questionLabel: "数组"
          },
          {
            questionId: "2022",
            questionName: "两数之和",
            questionDifficulty: "1",
            questionChapter: "第1章",
            questionLabel: "数组"
          },
          {
            questionId: "2022",
            questionName: "两数之和",
            questionDifficulty: "1",
            questionChapter: "第1章",
            questionLabel: "数组"
          },
          {
            questionId: "2022",
            questionName: "两数之和",
            questionDifficulty: "1",
            questionChapter: "第1章",
            questionLabel: "数组"
          },
          {
            questionId: "2022",
            questionName: "两数之和",
            questionDifficulty: "1",
            questionChapter: "第1章",
            questionLabel: "数组"
          },
          {
            questionId: "2022",
            questionName: "两数之和",
            questionDifficulty: "1",
            questionChapter: "第1章",
            questionLabel: "数组"
          }
        ]
      };
      this.loading = false;
      this.userData = res.data;
      // 分页赋值
      this.pageparm.currentPage = this.formInline.page;
      this.pageparm.pageSize = this.formInline.limit;
      this.pageparm.total = res.count;
    },
    // 分页插件事件
    callFather(parm) {
      this.formInline.page = parm.currentPage;
      this.formInline.limit = parm.pageSize;
      this.getdata(this.formInline);
    }
  }
};
</script>

<style scoped>
.user-search {
  margin-top: 20px;
}
</style>
