<template>
  <div class="schools">
    <PageTitleCard>Schools</PageTitleCard>
    <section class="schools-description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Gravida dictum fusce ut placerat. Ut tortor pretium viverra suspendisse potenti.
    </section>
    <SyButton class="schools-add-btn"> Add Your School </SyButton>
    <SyImage src="#" class="schools-image"></SyImage>
    <div class="schools-panel-list">
      <SyMenuPanel class="schools-panel-list__item">
        <template #header>
          <h3 class="schools-panel-list__item-title">National Youth Week</h3>
          <h3 class="schools-panel-list__item-title">Rockwall, TX</h3>
        </template>
        <template #content>
          <div class="schools-panel-list__item-content">
            <button class="content-btn" @click="linkTo('StateCase')">Take Survey</button>
            <button class="content-btn" @click="linkTo('ResultsPage')">View Survey Results</button>
          </div>
        </template>
      </SyMenuPanel>
      <SyMenuPanel class="schools-panel-list__item">
        <template #header>
          <h3 class="schools-panel-list__item-title">Atlanta, GA</h3>
          <h3 class="schools-panel-list__item-title">GA, Stone Mountain</h3>
        </template>
        <template #content>
          <div class="schools-panel-list__item-content">
            <button class="content-btn">Take Survey</button>
            <button class="content-btn">View Survey Results</button>
          </div>
        </template>
      </SyMenuPanel>
      <SyMenuPanel class="schools-panel-list__item">
        <template #header>
          <h3 class="schools-panel-list__item-title">Dallas Cred</h3>
          <h3 class="schools-panel-list__item-title">Dallas, TX</h3>
        </template>
        <template #content>
          <div class="schools-panel-list__item-content">
            <button class="content-btn">Take Survey</button>
            <button class="content-btn">View Survey Results</button>
          </div>
        </template>
      </SyMenuPanel>
    </div>
  </div>
</template>

<script lang="ts" setup>
import PageTitleCard from '@/components/Section/PageTitleCard.vue'
import SyButton from '@/components/Section/SyButton.vue'
import SyImage from '@/components/Section/SyImage.vue'
import SyMenuPanel from '@/components/Section/SyMenuPanel.vue'

const router = useRouter()

const linkTo = (routeName: string) => {
  router.push({ name: routeName })
}
</script>

<style lang="scss" scoped>
.schools {
  &-description {
    width: 1000px;
    margin: 30px auto;
    font-size: 20px;
    line-height: 45px;
    text-align: center;
    color: #4e4e4e;
  }
  &-add-btn {
    display: flex;
    justify-content: center;
    margin: 0 auto;
  }
  &-image {
    width: 618px;
    height: 358px;
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
  }
  &-panel-list {
    margin-top: 88px;
    margin: 88px 176px 0 176px;
    padding-bottom: 147px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    &__item {
      &-title {
        font-weight: 700;
        font-size: 22px;
        color: #fff;
        margin-bottom: 10px;
        &:last-child {
          margin-bottom: 0px;
        }
      }
      &-content {
        display: flex;
        flex-direction: column;
        .content-btn {
          height: 45px;
          background: #5be0ee;
          border-radius: 10px;
          font-weight: 700;
          font-size: 18px;
          margin: 15px auto;
          text-align: center;
          color: #fff;
          padding: 0 8px;
          cursor: pointer;
          border: none;
          outline: none;
          transition: all 0.3s;
          &:hover {
            background: #25cada;
          }
        }
      }
    }
  }
}
</style>
