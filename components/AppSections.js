import AppSectionsList from "./AppSectionsList.js";

export default {
    components: { AppSectionsList },

    template: /*html*/`     
        <app-sections-list 
            :headline="title"
            :ByChild="show_or_not.allow_to_show"></app-sections-list>
        <app-sections-list 
            :headline="title1"
            :ByChild="show_or_not.disallow_to_show"></app-sections-list>
    `,
    data() {
        return {
            title: "这是可以播的",
            title1: "这是不好说的",
            content: [
                { id: 1, name: "百度", url: "https://www.baidu.com", Status: true },
                { id: 2, name: "搜狗", url: "https://www.sougou.com", Status: true },
                { id: 3, name: "谷歌", url: "https://www.google.com", Status: false },
                { id: 4, name: "pixiv", url: "https://www.pixiv.net", Status: false }
            ]
        }
    },
    computed: {
        show_or_not() {
            return {
                allow_to_show: this.content.filter(item => item.Status),
                disallow_to_show: this.content.filter(item => !item.Status)
            };
        },
    }
}