<template>
  <div class="dashboard">
    <!-- 1.顶部数据统计 -->
    <el-row :gutter="10">
      <template v-for="item in topPanelData" :key="item.title">
        <el-col :md="12" :lg="6" :xl="6">
          <statistical-panel :panelData="item" />
        </el-col>
      </template>
    </el-row>

    <!-- 2.中间图标 -->
    <el-row :gutter="10">
      <el-col :span="7">
        <hy-card title="分类工人比例(饼图)">
          <pie-echart :pieData="categoryGoodsCount"></pie-echart>
        </hy-card>
      </el-col>
      <el-col :span="10">
        <hy-card title="不同城市工人数量">
          <map-echart :mapData="addressGoodsSale"></map-echart>
        </hy-card>
      </el-col>
      <el-col :span="7">
        <hy-card title="分类工人比例(玫瑰图)">
          <rose-echart :roseData="categoryGoodsCount"></rose-echart>
        </hy-card>
      </el-col>
    </el-row>

    <!-- 3.底部图标 -->
    <el-row :gutter="10" class="row">
      <el-col :span="12">
        <hy-card title="省份订单数Top10 (折线图)">
          <line-echart v-bind="categoryGoodsSale"></line-echart>
        </hy-card>
      </el-col>
      <el-col :span="12">
        <hy-card title="省份订单数Top10 (柱状图)">
          <bar-echart v-bind="categoryGoodsSale"></bar-echart>
        </hy-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'

import StatisticalPanel from '@/components/statistical-panel'
import HyCard from '@/base-ui/card'
import { PieEchart, MapEchart, RoseEchart, LineEchart, BarEchart } from '@/components/page-charts'

export default defineComponent({
  name: 'dashboard',
  components: {
    HyCard,
    StatisticalPanel,
    PieEchart,
    MapEchart,
    RoseEchart,
    LineEchart,
    BarEchart
  },
  setup() {
    // 1.发起数据统计的网络请求
    const store = useStore()
    store.dispatch('analysis/getAnalysisDataAction')

    // 2.获取顶部PanelData
    // const topPanelData = computed(() => store.state.analysis.topPanelDatas)
    const topPanelData = [
      {
        amount: 'sale',
        title: '用户总数',
        tips: '全国注册用户总数',
        subtitle: '用户总数',
        number1: 1214522,
        number2: 1214522
      },
      {
        amount: 'favor',
        title: '工人总数',
        tips: '全国注册工人总数',
        subtitle: '工人总数',
        number1: 634232,
        number2: 634232
      },
      {
        amount: 'inventory',
        title: '订单总数',
        tips: '全国用户订单总数',
        subtitle: '订单总数',
        number1: 853667,
        number2: 853667
      },
      {
        amount: 'saleroom',
        title: '交易总额',
        tips: '全国交易总额统计',
        subtitle: '交易总额',
        number1: 43118530,
        number2: 43118530
      }
    ]
    // const categoryGoodsCount = computed(() => {
    //   return store.state.analysis.categoryGoodsCount.map((item: any) => {
    //     return { value: item.goodsCount, name: item.name }
    //   })
    // })
    const categoryGoodsCount = [
      {
        value: 21,
        name: '小工'
      },
      {
        value: 13,
        name: '水工'
      },
      {
        value: 8,
        name: '电工'
      },
      {
        value: 11,
        name: '木工'
      },
      {
        value: 13,
        name: '泥工'
      },
      {
        value: 7,
        name: '瓦工'
      },
      {
        value: 8,
        name: '焊工'
      },
      {
        value: 5,
        name: '水暖工'
      },
      {
        value: 8,
        name: '油漆工'
      },
      {
        value: 7,
        name: '其它'
      }
    ]
    const goodsSaleTop10 = computed(() => {
      return store.state.analysis.goodsSaleTop10.map((item: any) => {
        return { value: item.saleCount, name: item.name }
      })
    })
    // const categoryGoodsSale = computed(() => {
    //   const goodsSale = store.state.analysis.categoryGoodsSale
    //   const labels: string[] = []
    //   const values: any[] = []
    //   for (const item of goodsSale) {
    //     labels.push(item.name)
    //     values.push(item.goodsCount)
    //   }
    //   return { labels, values }
    // })
    const categoryGoodsSale = {
      labels: ['四川', '贵州', '陕西', '重庆', '武汉', '广东', '上海', '北京', '湖南', '河北'],
      values: [123127, 95432, 71231, 67354, 65002, 58579, 52268, 51675, 50324, 49324]
    }
    const addressGoodsSale = computed(() => {
      return store.state.analysis.goodsAddressSale.map((item: any) => {
        return { name: item.address, value: item.count }
      })
    })

    return {
      topPanelData,
      categoryGoodsCount,
      goodsSaleTop10,
      categoryGoodsSale,
      addressGoodsSale
    }
  }
})
</script>

<style scoped lang="less">
.dashboard {
  background-color: #f5f5f5;

  .row {
    margin-top: 20px;
  }
}
</style>
