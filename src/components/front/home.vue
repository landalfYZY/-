<template>
    <transition name="fade-in">
        <div style="margin-top:10px">
            <div style="height:60px;background:#fff;padding:20px" class="panel-between">
                <div class="panel-start item-center">
                    <Dropdown>
                        <a style="color:#000" href="javascript:void(0)">
                            结算方式
                            <Icon type="arrow-down-b"></Icon>
                        </a>
                        <DropdownMenu slot="list">
                            <DropdownItem>不限</DropdownItem>
                            <DropdownItem>日结</DropdownItem>
                            <DropdownItem>周结</DropdownItem>
                            <DropdownItem>月结</DropdownItem>
                            <DropdownItem>完工结</DropdownItem>
                            <DropdownItem>按件结</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>

                    <Dropdown style="margin-left:30px">
                        <a style="color:#000" href="javascript:void(0)">
                            性别要求
                            <Icon type="arrow-down-b"></Icon>
                        </a>
                        <DropdownMenu slot="list">
                            <DropdownItem>不限</DropdownItem>
                            <DropdownItem>限男生</DropdownItem>
                            <DropdownItem>限女生</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>

                    <Dropdown style="margin-left:30px">
                        <a style="color:#000" href="javascript:void(0)">
                            职位要求
                            <Icon type="arrow-down-b"></Icon>
                        </a>
                        <DropdownMenu slot="list">
                            <DropdownItem>不限</DropdownItem>
                            <DropdownItem>兼职</DropdownItem>
                            <DropdownItem>全职</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
                <div class="panel-end">
                    <Button type="warning" size="small">最新发布</Button>
                    <Button type="ghost" size="small" style="margin-left:20px">工资最高</Button>
                </div>
            </div>
            <PanelK v-for="(item,index) in 5" :key="index" style="margin-top:10px" title="就你说的符合博士士大夫收" time="05.03-06.03" type="阿斯顿" address="发射点似的" num="152" price="321" pay="日结" unit="元/天"></PanelK>
            <div style="width:100%;text-align:Center;margin-top:20px">
                <Page :total="1000"></Page>
            </div>
        </div>
    </transition>
</template>

<script>
import PanelK from '../template/panel.vue'
export default {
    components:{
        PanelK
    },
    data(){
        return {

        }
    }
}
</script>

