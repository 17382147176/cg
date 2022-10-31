// 导入组件
import Vue from "vue";
import Router from "vue-router";
// 登录
import login from "@/views/login";
// 首页
import studentIndex from "@/views/studentIndex";
import teacherIndex from "@/views/teacherIndex";
import adminIndex from "@/views/adminIndex";
//学生界面
import exercise from "@/views/student/exercise.vue";
import favorite from "@/views/student/favorite.vue";
import studentForecast from "@/views/student/studentForecase.vue";
//教师界面
import account from "@/views/teacher/account.vue";
import classForecast from "@/views/teacher/classForecast.vue";
import question from "@/views/teacher/question.vue";
import review from "@/views/teacher/review.vue";
//管理员界面
import admin from "@/views/admin/admin.vue";
// 启用路由
Vue.use(Router);

// 导出路由
export default new Router({
  routes: [
    {
      path: "/",
      name: "",
      component: login,
      hidden: true,
      meta: {
        requireAuth: false
      }
    },
    {
      path: "/login",
      name: "登录",
      component: login,
      hidden: true,
      meta: {
        requireAuth: false
      }
    },
    {
      path: "/studentIndex",
      name: "首页",
      component: studentIndex,
      iconCls: "el-icon-tickets",
      children: [
        {
          path: "/student/forecast",
          name: "成绩预测",
          component: studentForecast,
          meta: {
            requireAuth: true
          }
        },
        {
          path: "/student/exercise",
          name: "刷题",
          component: exercise,
          meta: {
            requireAuth: true
          }
        },
        {
          path: "/student/favorite",
          name: "收藏夹",
          component: favorite,
          meta: {
            requireAuth: true
          }
        }
      ]
    },

    //教师
    {
      path: "/teacherIndex",
      name: "首页",
      component: teacherIndex,
      iconCls: "el-icon-tickets",
      children: [
        {
          path: "/teacher/question",
          name: "题库管理",
          component: question,
          meta: {
            requireAuth: true
          }
        },
        {
          path: "/teacher/account",
          name: "账户管理",
          component: account,
          meta: {
            requireAuth: true
          }
        },
        {
          path: "/teacher/classforecast",
          name: "班级成绩预测",
          component: classForecast,
          meta: {
            requireAuth: true
          }
        },
        {
          path: "/teacher/review",
          name: "查看评论",
          component: review,
          meta: {
            requireAuth: true
          }
        }
      ]
    },
    //管理员
    {
      path: "/adminIndex",
      name: "首页",
      component: adminIndex,
      iconCls: "el-icon-tickets",
      children: [
        {
          path: "/admin/admin",
          name: "管理员的管理",
          component: admin,
          meta: {
            requireAuth: true
          }
        }
      ]
    }
  ]
});
