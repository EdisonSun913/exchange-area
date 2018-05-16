<template>
    <div class="v-header" :style="[{height:cStyle.height},{backgroundColor:cStyle.backgroundColor}]">
        <h2 class="v-header-title" :style="[{color:cColor},{lineHeight:cStyle.height},{fontSize:cSize}]">{{cTitle}}</h2>
    </div>
</template>

<script>
export default {
    computed: {
        cStyle(){
            let obj = {}
            if (this.height) {
                obj.height = this.height
            }
            if (this.backgroundColor) {
                obj.backgroundColor = this.backgroundColor
            }
            return obj
        },
        cTitle(){
            return this.title?this.title:'123'
        },
        cColor(){
            return this.color?this.color:'#FFFFFF'
        },
        cSize(){
            return this.size?this.size:'22px'
        }
    },
    props:[
        'title',
        'height',
        'color',
        'size',
        'backgroundColor'
    ]
}
</script>

<style scoped>
    .v-header{
        height: 60px;
        background-color: #333333;
        padding: 0 20px;
    }
    .v-header-title{
        line-height: 60px;
        color: #ffffff;
        display: inline-block;
    }
</style>

