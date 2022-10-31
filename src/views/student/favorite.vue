<template>
  <div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>收藏夹</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 搜索筛选 -->
    <el-form :inline="true" class="user-search">
      <el-form-item label="">
        <el-input size="small" placeholder="输入题目ID"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button size="small" type="primary" icon="el-icon-search"
          >搜索题目</el-button
        >
      </el-form-item>

      <el-form-item label="">
        <el-input size="small" placeholder="输入题目名称"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button size="small" type="primary" icon="el-icon-search"
          >搜索题目</el-button
        >
        <el-button
          size="small"
          type="primary"
          icon="el-icon-edit"
          id="buttonDeleteAll"
          >批量删除</el-button
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
      <el-table-column align="center" prop="question" label="题目" width="180">
      </el-table-column>
      <el-table-column align="center" sortable prop="id" label="ID" width="120">
      </el-table-column>
      <el-table-column
        align="center"
        sortable
        prop="level"
        label="难度"
        min-width="200"
      >
      </el-table-column>
      <el-table-column
        align="center"
        sortable
        prop="lable"
        label="标签"
        width="200"
      >
      </el-table-column>
      <el-table-column align="center" label="操作" min-width="220">
        <template slot-scope="scope">
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
            question: "两数之和",
            id: "1",
            level: "1",
            lable: "数组"
          },
          {
            question: "过河卒",
            id: "2",
            level: "2",
            lable: "字符串"
          },
          {
            question: "铺地毯",
            id: "3",
            level: "1",
            lable: "递归"
          },
          {
            question: "方格取数",
            id: "4",
            level: "3",
            lable: "动态规划"
          },
          {
            question: "矩阵取数",
            id: "5",
            level: "2",
            lable: "数组"
          },
          {
            question: "传纸条",
            id: "6",
            level: "5",
            lable: "递归"
          },
          {
            question: "回文子串",
            id: "7",
            level: "3",
            lable: "数组"
          },
          {
            question: "回文数",
            id: "8",
            level: "1",
            lable: "字符串"
          },
          {
            question: "矩正则表达式匹配",
            id: "9",
            level: "5",
            lable: "字符串"
          },
          {
            question: "盛水最多的容器",
            id: "10",
            level: "4",
            lable: "动态规划"
          },
          {
            question: "整形反转",
            id: "11",
            level: "2",
            lable: "数组"
          },
          {
            question: "罗马数字",
            id: "12",
            level: "3",
            lable: "字符串"
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
