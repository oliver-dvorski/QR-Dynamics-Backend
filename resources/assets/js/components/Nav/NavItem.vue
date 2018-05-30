<template>
    <li>
        <a href="#" class="no-underline text-grey-darker py-6 px-8 flex items-center">
            <Icon :name="icon"></Icon>
            <span class="ml-2"><slot></slot></span>
        </a>
    </li>
</template>

<script>
    export default {
        props: ['icon']
    }
</script>
