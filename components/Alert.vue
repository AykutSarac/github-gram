<template>
    <div class="alert alert-danger">
        {{ text }}
    </div>
</template>

<script>
export default {
    props: ['text']
}
</script>