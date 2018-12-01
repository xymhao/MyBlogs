<template>
    <div class="app-nav-wrap">
        <el-menu :default-active="$route.path" class="el-menu-vertical-demo" router>
            <el-menu-item v-for="menu in menus"
                          :index="menu.route"
                          :key="menu.route">
                <i class="el-icon-menu">{{menu.name}}</i>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
export default {
  data() {
    return {
      menus: [{ route: "/", name: "首页" }]
    };
  },
  method: {},
  mounted() {
    // 刷新时以当前路由做为tab加入tabs
    if (
      this.$route.path !== "/" &&
      this.$route.path.indexOf("userInfo") == -1
    ) {
      this.$store.commit("add_tabs", { route: "/", name: "首页" });
      this.$store.commit("add_tabs", {
        route: this.$route.path,
        name: this.$route.name
      });
      this.$store.commit("set_active_index", this.$route.path);
    } else {
      this.$store.commit("add_tabs", { route: "/", name: "首页" });
      this.$store.commit("set_active_index", "/");
      this.$router.push("/");
    }
  },
  computed: {
    options() {
      return this.$store.state.options;
    }
  }
};
</script>