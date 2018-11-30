import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
    components: {
        MenuComponent: require('../navmenu/navmenu.vue.html')
    }
})
export default class AppComponent extends Vue {
    editableTabsValue2 = '2';
    editableTabs2 = [{
        title: 'Tab 1',
        name: '1',
        content: 'Tab 1 content'
    }, {
        title: 'Tab 2',
        name: '2',
        content: 'Tab 2 content'
    }];
    tabIndex = 2;
    removeTab(targetName: any) {
        let tabs = this.editableTabs2;
        let activeName = this.editableTabsValue2;
        if (activeName === targetName) {
            tabs.forEach((tab, index) => {
                if (tab.name === targetName) {
                    let nextTab = tabs[index + 1] || tabs[index - 1];
                    if (nextTab) {
                        activeName = nextTab.name;
                    }
                }
            });
        }

        this.editableTabsValue2 = activeName;
        this.editableTabs2 = tabs.filter(tab => tab.name !== targetName);
    };
    tabClick() {
        this.$router.push({ path: "/fetchdata" });
    }
}
