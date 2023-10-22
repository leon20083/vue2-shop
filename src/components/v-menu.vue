<template>
  <div class="menu">
    <ul>
      <li v-for="(link, index) in  menuLinks " :key="index">
        <a v-for="(name, index) in link" :key="index" href="/#/catalog">{{ index }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "v-menu",
  data() {
    return {
      menuLinks: [
        {
          "Авто товары": {}
        },
        {
          "Аудио-видео техника": {}
        },
        {
          "Крупнобытовая техника": [
            "Морозильные камеры",
            "Холодильники",
            "Стиральные машины",
            "Посудомоечные машины",
            "Газовые плиты",
            "Индукционные и электрические плитки",
            "Водонагреватели",
            "Вытяжки",
            "Сушильные машины",
            "Центрифуги"
          ]
        },
        {
          "Компьютерная техника": {}
        },
        {
          "Товары для дома": {}
        },
        {
          "Сад и огород дача": {}
        },
        {
          "Спорт и отдых": {}
        }
      ],
    }
  }
}
</script>

<style lang="sass">
.menu
  width: 100%
  margin-top: auto
  ul
    display: flex
    justify-content: space-between
    justify-content: center
    align-items: center
    padding: 0
    box-shadow: 8px 0px 61px 8px #0024ff
    li
      list-style: none
      padding: 10px 15px
      background: rgba(0, 0, 255, .1)

      &:not(:last-child)
        border-right: 1px solid #fff
      a
        color: #fff
        text-decoration: none
        padding: 5px 10px

</style>