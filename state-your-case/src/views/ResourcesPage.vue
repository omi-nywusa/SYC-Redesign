<template>
  <div class="resources">
    <PageTitleCard>Resources</PageTitleCard>
    <h2 class="resources__title">Do You Need Help?</h2>
    <section class="resources__description">
      If you find yourself in a hard situation use this list of hotline at any time of the day and in any situation you
      are in.
    </section>
    <div class="resources__benefit-list">
      <div class="resources__benefit-list-item">
        <TimeIcon />
        <span>24/7 Call at any time</span>
      </div>
      <div class="resources__benefit-list-item">
        <PraiseIcon />
        <span>100% Confidential</span>
      </div>
      <div class="resources__benefit-list-item">
        <UserIcon />
        <span>Free - call at no cost</span>
      </div>
    </div>
    <table class="resources__table">
      <tr class="resources__table-head">
        <th>Helpline</th>
        <th>Contact</th>
      </tr>
      <!-- List dependencies from dependency data in vuex -->
      <tr class="resources__table-row">
        <td>Source three</td>
        <td>(000)-(000)-(0000)</td>
      </tr>
      <tr class="resources__table-row">
        <td>Source three</td>
        <td>(000)-(000)-(0000)</td>
      </tr>
      <tr class="resources__table-row">
        <td>Source three</td>
        <td>(000)-(000)-(0000)</td>
      </tr>
    </table>

    <h2 class="resources__title links">Downloadable Resources</h2>
    <div class="resources__links">
      <a href="#">Anger Presentation</a>
      <a href="#">Self Worth</a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import PageTitleCard from '../components/Section/PageTitleCard.vue'
import TimeIcon from '../assets/time.svg'
import PraiseIcon from '../assets/praise.svg'
import UserIcon from '../assets/user.svg'
</script>

<style lang="scss" scoped>
.resources {
  width: 1000px;
  margin: 0 auto;
  &__title {
    margin-top: 36px;
    font-family: 'Archivo';
    font-weight: 700;
    font-size: 40px;
    line-height: 45px;
    color: #4e4e4e;
    &.links {
      margin-top: 40px;
      margin-bottom: 7px;
    }
  }
  &__description {
    font-family: 'Archivo';
    font-weight: 500;
    font-size: 20px;
    line-height: 45px;
    color: #4e4e4e;
  }
  &__benefit-list {
    display: flex;
    align-items: center;
    width: 1000px;
    margin: 0 auto;
    margin-top: 25px;
    justify-content: space-around;
    font-family: 'Archivo';
    &-item {
      display: flex;
      align-items: center;
      & svg {
        width: 40px;
        height: 40px;
      }
      & span {
        margin-left: 14px;
        font-weight: 500;
        font-size: 20px;
        line-height: 45px;
      }
    }
    @media (max-width: 650px) {
      flex-direction: column;
    }
  }

  // table border 斑马线
  &__table {
    width: 1000px;
    margin: 0 auto;
    margin-top: 34px;
    border-radius: 6px;
    border-collapse: collapse;

    &-head th {
      font-family: 'Archivo';
      font-weight: 700;
      font-size: 20px;
      line-height: 28px;
      padding: 8px 24px;
      background: #ccdaf6;
      color: #000;
      border: 1px solid #333;
    }
    &-row:nth-child(2n + 1) {
      background: #e9f0fd;
    }
    &-row {
      & td {
        border: 1px solid #333;
        font-family: 'Archivo';
        font-size: 20px;
        line-height: 28px;
        text-align: center;
        padding: 8px 24px;
      }
    }
  }

  &__links {
    display: flex;
    flex-direction: column;
    padding-bottom: 80px;
    & a {
      font-family: 'Archivo';
      margin-bottom: 22px;
      color: #4e4e4e;
      text-decoration: none;
      font-weight: 500;
      font-size: 20px;
      line-height: 45px;
      transition: all 250ms;
      &:hover {
        text-decoration: underline;
        color: #0e9aa7;
      }
    }
  }
}
</style>
