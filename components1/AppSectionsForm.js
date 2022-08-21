export default {
    template: /*html*/`
    <form @submit.prevent="add">
        <input type="text" placeholder="请输入新的Web名称" v-model="new_item.name">
        <input type="text" placeholder="请输入新的Web的URL" v-model="new_item.url">
        <input type="submit" value="添加">
    </form>
    `,
    data() {
        return {
            new_item: { name: "", url: "" }
        }
    },
    methods: {
        add() {
            this.$emit("add", this.new_item);
            // this.content.push({
            //     id: this.content.length + 1,
            //     name: this.new_item.name,
            //     url: this.new_item.url,
            //     Status: false
            // });
            this.new_item = { name: "", url: "" };
        }
    }
}