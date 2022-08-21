export default {
    template: /*html*/`     
        
        <section v-show="ByChild.length">
            <h1>{{ headline }}</h1>
            <ul>
                <li v-for="item in ByChild" :key="item.id">
                    <span>{{ item.id }}</span>&ensp;&ensp;
                    <span>{{ item.name }}</span>&ensp;&ensp;
                    <span><a :href="item.url">点击此处跳转</a></span>&ensp;&ensp;
                    <span>地址：{{ item.url }}</span>&ensp;&ensp;
                    <input type="checkbox" v-model="item.Status">
                </li>
            </ul>
        </section>
    `,
    props: {
        headline: String,
        ByChild: Array
    }
}