<template>
  <div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>班级成绩预测</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 搜索筛选 -->
    <el-form :inline="true" class="user-search">
      <el-form-item label="">
        <el-select size="small" placeholder="请选择专业">
          <el-option label="计算机科学与技术" value=""></el-option>
          <el-option label="人工智能" value="N"></el-option>
          <el-option label="软件工程" value="Y"></el-option>
          <el-option label="通信工程" value="Y"></el-option>
          <el-option label="信息安全" value="Y"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="">
        <el-select size="small" placeholder="请选择班级">
          <el-option label="2201" value=""></el-option>
          <el-option label="2202" value="N"></el-option>
          <el-option label="2203" value="Y"></el-option>
          <el-option label="2204" value="Y"></el-option>
          <el-option label="2205" value="Y"></el-option>
          <el-option label="2206" value="Y"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button size="small" type="primary" icon="el-icon-search"
          >搜索班级</el-button
        >
      </el-form-item>
    </el-form>
    <!-- 统计图 -->
    <div class="st-gbox">
      <div class="cavasbox" ref="Studychart"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Chart from 'echarts'
export default {
  name: "welcome",
  data() {
    return {
      //  人数
      Studyoption: {
        //提示框
        tooltip: {
          trigger: 'item', //数据项图形触发
          formatter: "{a} <br/>{b} : {c}" //{a}（系列名称），{b}（类目值），{c}（数值）
        },

        //图例
        legend: {
          data: [{
            name: '人数',
            icon: 'rect' //图例图标为矩形
          }],
          top: -4,
          left: 30,
          itemWidth: 12,
          itemHeight: 12,
          textStyle: {
            fontSize: 15,
            color: "#323232"
          }
        },

        //调整图表位置
        grid: {
          left: 60,
          right: 60,
          top: 40,
          bottom: 40,
          borderWidth: 1
        },

        //x轴
        xAxis: {
          type: 'category',
          data: ['0-10', '11-20', '21-30', '31-40', '41-50', '51-60', '61-70', '71-80', '81-90', '91-100'],
          axisLine: {
            lineStyle: {
              color: "#999999",
              width: 1
            }
          },
          axisLabel: {
            margin: 14,
            height: 70,
            interval:0,  //X轴刻度配置 0：表示全部显示不间隔；auto:表示自动根据刻度个数和宽度自动设置间隔个数.默认情况下此属性值为”auto“
            textStyle: {
              fontSize: 15,
              color: "#999999"
            }
          }
        },

        //y轴
        yAxis: {
          type: 'value',
          axisLine: {
            lineStyle: {
              color: "#999999",
              width: 1
            }
          },
          axisLabel: {
            margin: 14,
            textStyle: {
              fontSize: 15,
              color: "#999999"
            }
          }
        },

        //数据
        series: [{
          name: '人数',
          type: 'bar',
          data: [0, 2, 1, 4, 6, 5, 9, 14, 5, 3],
          barWidth: 50,  //柱形宽度
          label: {
              // 柱状图上方文本标签，默认展示数值信息
              show: true,
              position: "top",
              fontSize: 13,
              color: "#999999"
          },

          //样式
          itemStyle: {
            //正常样式
            normal: {
              color: new Chart.graphic.LinearGradient(
                0, 0, 0, 1,
                [
                  { offset: 0, color: '#83bff6' },
                  { offset: 0.5, color: '#188df0' },
                  { offset: 1, color: '#188df0' }
                ]
              )
            },

            //强调样式
            emphasis: {
              color: new Chart.graphic.LinearGradient(
                0, 0, 0, 1,
                [
                  { offset: 0, color: '#2378f7' },
                  { offset: 0.7, color: '#2378f7' },
                  { offset: 1, color: '#83bff6' }
                ]
              )
            }
          }
        }]
      },
    }
  },
  // 导入组件
  components: {
    // 点聚合组件
  },
  // 创建完毕状态(里面是操作)
  created() { },
  // 挂载结束状态(里面是操作)
  mounted() {
    this.getSCE()
  },
  // 里面的函数只有调用才会执行
  methods: {
    //人数
    getSCE() {
      this.chart = Chart.init(this.$refs.Studychart)
      this.chart.setOption(this.Studyoption)
    },
  }
};
</script>

<style scoped>
.user-search {
  margin-top: 20px;
}

.st-gbox {
  background-color: #fff;
  margin-top: 10px;
  height: 500px;
  box-sizing: border-box;
}

.cavasbox {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
}
</style>
