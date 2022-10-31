<template>
  <div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>账户管理</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 搜索筛选 -->
    <el-form :inline="true" class="user-search">
      <el-form-item label="">
        <el-select size="small" placeholder="请选择账户类型">
          <el-option label="学生" value=""></el-option>
          <el-option label="助教" value="Y"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="">
        <el-input size="small" placeholder="输入学号/工号"></el-input>
      </el-form-item>
      <el-form-item label="">
        <el-input size="small" placeholder="输入姓名"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button size="small" type="primary" icon="el-icon-search"
          >搜索账户</el-button
        >
        <el-button size="small" type="primary" icon="el-icon-plus"
          >添加账户</el-button
        >
        <el-button size="small" type="primary" icon="el-icon-delete"
          >删除账户</el-button
        >
        <el-button size="small" type="primary" icon="el-icon-edit"
          >批量重置密码</el-button
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
        prop="userId"
        label="学号/工号"
        width="200"
      >
      </el-table-column>
      <el-table-column
        align="center"
        sortable
        prop="userRealName"
        label="姓名"
        width="180"
      >
      </el-table-column>
      <el-table-column
        align="center"
        sortable
        prop="userType"
        label="类型"
        width="120"
      >
      </el-table-column>
      <el-table-column
        align="center"
        sortable
        prop="userEmail"
        label="邮箱"
        min-width="200"
      >
      </el-table-column>
      <el-table-column
        align="center"
        sortable
        prop="userMobile"
        label="手机号"
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
            userId: "202226010501",
            userPassword: "e10adc3949ba59abbe56e057f20f883e",
            userRealName: "张三",
            userType: "学生",
            userMobile: "138123456789",
            userEmail: "111222333@qq.com"
          },
          {
            userId: "S202226010502",
            userPassword: "e10adc3949ba59abbe56e057f20f883e",
            userRealName: "李四",
            userType: "学生",
            userMobile: "12345678901",
            userEmail: "111222333@qq.com"
          },
          {
            userId: "S202226010503",
            userPassword: "e10adc3949ba59abbe56e057f20f883e",
            userRealName: "王五",
            userType: "助教",
            userMobile: "138123456789",
            userEmail: "111222333@qq.com"
          },
          {
            userId: "202226010504",
            userPassword: "e10adc3949ba59abbe56e057f20f883e",
            userRealName: "小刘",
            userType: "学生",
            userMobile: "138123456789",
            userEmail: "111222333@qq.com"
          },
          {
            userId: "202226010505",
            userPassword: "e10adc3949ba59abbe56e057f20f883e",
            userRealName: "张三",
            userType: "学生",
            userMobile: "138123456789",
            userEmail: "111222333@qq.com"
          },
          {
            userId: "202226010506",
            userPassword: "e10adc3949ba59abbe56e057f20f883e",
            userRealName: "张三",
            userType: "学生",
            userMobile: "138123456789",
            userEmail: "111222333@qq.com"
          },
          {
            userId: "202226010507",
            userPassword: "e10adc3949ba59abbe56e057f20f883e",
            userRealName: "张三",
            userType: "学生",
            userMobile: "138123456789",
            userEmail: "111222333@qq.com"
          },
          {
            userId: "202226010508",
            userPassword: "e10adc3949ba59abbe56e057f20f883e",
            userRealName: "张三",
            userType: "学生",
            userMobile: "138123456789",
            userEmail: "111222333@qq.com"
          },
          {
            userId: "202226010509",
            userPassword: "e10adc3949ba59abbe56e057f20f883e",
            userRealName: "张三",
            userType: "学生",
            userMobile: "138123456789",
            userEmail: "111222333@qq.com"
          },
          {
            userId: "202226010510",
            userPassword: "e10adc3949ba59abbe56e057f20f883e",
            userRealName: "张三",
            userType: "学生",
            userMobile: "138123456789",
            userEmail: "111222333@qq.com"
          },
          {
            userId: "202226010511",
            userPassword: "e10adc3949ba59abbe56e057f20f883e",
            userRealName: "张三",
            userType: "学生",
            userMobile: "138123456789",
            userEmail: "111222333@qq.com"
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
