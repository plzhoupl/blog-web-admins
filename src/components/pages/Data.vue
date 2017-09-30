<style scoped>
  #data {
    margin-left: 20px;
    width: 100%;
    background: #F5F4F5;
    font-family: Hiragino Sans GB;
  }

  .demo-paper {
    text-align: center;
    width: 23%;
    margin: 20px;
    height: 300px;
    float: left;
    display: inline-block;
    background: white;
    cursor: pointer;
    transition: all 0.6s;
    box-shadow: 10px 10px 10px #cccccc;
  }

  .demo-paper:hover {
    box-shadow: 20px 20px 20px #aaaaaa;
    transform: scale(1.1);
    color: #ffffff;
    background-image: linear-gradient(to right top, #0AE3A7 0%,#41C3E3  100%);
  }

  .progress {
    width: 50%;
    left: 25%;
  }

  .title {
    font-size: 20px;
    line-height: 80px;
  }

  .big-num {
    font-size: 50px;
    color: #2196f3;
    line-height: 120px;
  }

  .views-num {
    width: 45%;
    float: left;
    text-align: center;
  }

  .views-num-span {
    line-height: 50px;
    color: #19e7ff;
    font-size: 30px;
  }
  .chart{
    width: 100%;
    height: 200px;
  }
</style>
<template>
  <div id="data" style="text-align: start">
    <h3>
      点击量统计
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-tongji"></use>
      </svg>
    </h3>
    <div>
      <div class="demo-paper">
        <span class="title">昨日blog访问增长比例</span>
        <radial-progress-bar
          class="progress"
          :diameter="200"
          :strokeWidth="20"
          animateSpeed="500"
          :completed-steps="completedSteps"
          :total-steps="100"
          innerStrokeColor="#cccccc"
        >
          <span class="title"> {{ completedSteps}}%</span>
        </radial-progress-bar>
      </div>
      <div class="demo-paper">
        <span class="title">blog总点击</span><br/>
        <span class="big-num">540</span><br/>
        <div class="views-num">
          <span>移动端</span><br/>
          <span class="views-num-span">300</span>
        </div>
        <div class="views-num">
          <span>PC端</span><br/>
          <span style="color: #ff4081" class="views-num-span">240</span>
        </div>
      </div>
      <div class="demo-paper">
        <span class="title">近7日点击量统计</span><br/>
        <chart class="chart" :options="options1" ref="lineCharts1"></chart>
      </div>
      <div class="demo-paper">
      </div>
      <div class="demo-paper">
      </div>


    </div>
  </div>
</template>
<script>
  import RadialProgressBar from '../view/RadialProgressBar.vue'
  import chart from 'vue2-highcharts'

  export default {
    data () {
      return {
        pages: [],
        completedSteps: 0,
        options1: {
          chart: {
            type: 'column'
          },
          title: {
            text: '最近一周'
          },
          xAxis: {
            type: 'category',
            labels: {
              style: {
                fontSize: '13px',
                fontFamily: 'Hiragino Sans GB, sans-serif'
              }
            }
          },
          credits: {
            enabled: false
          },
          yAxis: {
            min: 0,
            title: {
              text: '点击次数'
            }
          },
          legend: {
            enabled: false
          },
          tooltip: {
            pointFormat: '点击: <b>{point.y:.1f} 次</b>'
          },
          series: [{
            name: '总人口',
            data: [
              ['周一', 24.25],
              ['周二', 23.50],
              ['周三', 21.51],
              ['周四', 16.78],
              ['周五', 16.06],
              ['周六', 15.20],
              ['周日', 14.16],
            ],
          }]
        }
      }
    },
    methods: {}
    ,
    components: {
      RadialProgressBar,
      chart
    }
    ,
    mounted () {
      this.completedSteps = 44
    }
  }

</script>
