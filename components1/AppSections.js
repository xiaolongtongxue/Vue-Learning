import AppSectionsList from "./AppSectionsList.js";
import AppSectionsForm from "./AppSectionsForm.js";

export default {
    components: { AppSectionsList, AppSectionsForm },

    template: /*html*/`     
        <app-sections-list 
            :headline="title2"
            :ByChild="show_or_not.always_to_show"></app-sections-list>
        <!--<app-sections-list 
            :headline="title1"
            :ByChild="show_or_not.disallow_to_show"></app-sections-list>-->
         
        <app-sections-form
            @add="fatheradd"
        ></app-sections-form>
        
        <!--<form @submit.prevent="add">
            <input type="text" placeholder="请输入新的Web名称" v-model="new_item.name">
            <input type="text" placeholder="请输入新的Web的URL" v-model="new_item.url">
            <input type="submit" v-if="content.length == 4" value="添加">
            <input type="submit" v-else-if="content.length > 4 && content.length < 7" value="再来">
            <input type="submit" v-else-if="content.length >=7  && content.length < 10" value="继续呀">
            <input type="submit" v-else-if="content.length >=10  && content.length < 15" value="就这？再来！！">
            <input type="submit" v-else value="别发了哥，我错了">
        </form>-->
    `,
    data() {
        return {
            title: "这是可以播的",
            title1: "这是不好说的",
            title2: "全部站点",
            content: [
                { id: 1, name: "百度", url: "https://www.baidu.com", Status: true },
                { id: 2, name: "搜狗", url: "https://www.sougou.com", Status: true },
                { id: 3, name: "谷歌", url: "https://www.google.com", Status: false },
                { id: 4, name: "pixiv", url: "https://www.pixiv.net", Status: false }
            ],
            new_item: { name: "", url: "" },
        }
    },
    computed: {
        show_or_not() {
            return {
                allow_to_show: this.content.filter(item => item.Status),
                disallow_to_show: this.content.filter(item => !item.Status),
                always_to_show: this.content
            };
        },
    },
    methods: {
        fatheradd(new__item){
            this.content.push({
                id: this.content.length + 1,
                name: new__item.name,
                url: new__item.url,
                Status: false
            });
        },
        add() {
            this.content.push({
                id: this.content.length + 1,
                name: this.new_item.name,
                url: this.new_item.url,
                Status: false
            });
            this.new_item = { name: "", url: "" };
        }
    }
}