<template>
    <div class="content-item sidebar-left">
        <my-quick-panel></my-quick-panel>
        <my-group-short-cut></my-group-short-cut>
    </div>
</template>

<script>
import QuickPanel from './SidebarLeft/QuickPanel.vue'
import GroupShortcut from './SidebarLeft/GroupShortcut.vue'

export default {
    name: 'SidebarLeft',
    components: {
        MyQuickPanel: QuickPanel,
        MyGroupShortCut: GroupShortcut
    }
}
</script>

<style scoped>
.sidebar-left {
    width: 290px;
    display: flex;
    flex: 1;
    flex-direction: column;
    background-color: #18191a;
    height: calc(100vh - 60px); 
    position: fixed;
    margin-top: 60px;
}
</style>