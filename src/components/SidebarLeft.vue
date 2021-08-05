<template>
    <div class="sidebar">
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
.sidebar {
    width: 290px;
    display: flex;
    flex-direction: column;
    background-color: #18191a;
    height: calc(100vh - 60px);
    padding-left: 0;
    
}
</style>