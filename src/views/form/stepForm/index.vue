<template>
  <page-header-wrapper>
    <!-- PageHeader 第二种使用方式 (v-slot) -->
    <!-- 将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。 -->
    <a-card :bordered="false">
      <a-steps class="steps" :current="currentTab">
        <a-step title="填写转账信息" />
        <a-step title="确认转账信息" />
        <a-step title="完成" />
      </a-steps>
      <div class="content">
        <step-one v-if="currentTab === 0" @nextStep="nextStep" />
        <step-two
          v-if="currentTab === 1"
          @nextStep="nextStep"
          @prevStep="prevStep"
        />
        <step-three
          v-if="currentTab === 2"
          @prevStep="prevStep"
          @finish="finish"
        />
      </div>
    </a-card>
  </page-header-wrapper>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  name: 'StepForm',
  components: {
    StepOne: defineAsyncComponent(() => import('./stepOne.vue')),
    StepTwo: defineAsyncComponent(() => import('./stepTwo.vue')),
    StepThree: defineAsyncComponent(() => import('./stepThree.vue')),
  },
  setup() {
      const nextStep = () => {
           if (this.currentTab < 2) {
                this.currentTab += 1
            }
      }
      const prevStep = () => {
            if (this.currentTab > 0) {
                this.currentTab -= 1
            }
      }
      const finish = () => {
            this.currentTab = 0
      }
    return {
        currentTab: 0,
        // form
        form: null,
        nextStep,
        prevStep,
        finish
    }
  }
 
}
</script>

<style lang="less" scoped>
    .steps {
        max-width: 750px;
        margin: 16px auto;
    }
</style>
