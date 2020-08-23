<template>

  <transition name="expand" @enter="enter" @after-enter="afterEnter" @leave="leave">
    <ul v-show="list.open" class="sub-items">
      <li class="sub-item" v-for="(item, index) in list.children" :key="'item'+index">
        <i
          v-if="item.children"
          class="fas"
          :class="{'fa-chevron-up':!item.open,
                    'fa-chevron-down':item.open}"
        ></i>
        <div class="title" @click="item.open = !item.open"><router-link :to="item.path">{{ item.title }}</router-link></div>

        <Dropdown class="children" v-if="item.children" :list="item" router-link :to="children.path"/>

      </li>
    </ul>
  </transition>
</template>

<script>
export default {
  name: "Dropdown",
  props: ["list"],
  methods: {
    enter(el) {
      el.style.height = "auto";

      const height = getComputedStyle(el).height;

      el.style.height = 0;

      getComputedStyle(el);

      setTimeout(() => {
        el.style.height = height;
      });
    },
    afterEnter(el) {
      el.style.height = "auto";
    },
    leave(el) {
      el.style.height = getComputedStyle(el).height;

      getComputedStyle(el);

      setTimeout(() => {
        el.style.height = 0;
      });
    }
  }
};
</script>

<style lang="scss">
#navigation > li:nth-child(1) > div:nth-child(1),
#navigation > li:nth-child(2) > div:nth-child(2),
#navigation > li:nth-child(3) > div:nth-child(2),
#navigation > li:nth-child(4) > div:nth-child(2),
#navigation > li:nth-child(5) > div:nth-child(2),
#navigation > li:nth-child(6) > div:nth-child(1) {
  color: black;
}

.sub-items {
  list-style: none;

  .sub-item {
    position: relative;
    color: #fefefe;
    background-color: #333;
    border-top: 1px solid #222;
    cursor: pointer;

    .children {
      padding-left: 20px;
    }

    .title {
      padding: 10px 0;
      text-indent: 20px;
      color: black;
      // font-weight: lighter;
      background-color: white;
    }

    i {
      position: absolute;
      top: 12px;
      right: 10px;
    }
  }
}

.expand-enter-active,
.expand-leave-active {
  transition: height 0.5s ease-in-out;
  overflow: hidden;
}
</style>