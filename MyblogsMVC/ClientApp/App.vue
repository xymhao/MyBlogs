<template>
    <div id="app">
        <div>你好</div>
        <img src="./assets/logo.png">
        <ul>
            <li>
                <a href="https://vuejs.org"
                   target="_blank"
                   @click="coreClick">
                    我靠
                </a>
            </li>
            <li>
                <div class="menu_name">
                    <router-link to="/index2">abbv</router-link>
                </div>
            </li>
            <li>
                <a href="https://chat.vuejs.org"
                   target="_blank">
                    Community Chat
                </a>
            </li>
            <li>
                <a href="https://twitter.com/vuejs"
                   target="_blank">
                    Twitter
                </a>
            </li>
            <br>
            <li>
                <a href="http://vuejs-templates.github.io/webpack/"
                   target="_blank">
                    Docs for This Template
                </a>
            </li>
        </ul>
        <router-view />
    </div>
</template>

<script>
    export default {
        name: 'app'
    }
</script>
<style lang="scss">

</style>
