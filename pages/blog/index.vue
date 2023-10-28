<template>
    <main class="container px-4 pt-[7rem] pb-[20rem] max-w-screen-xl mx-auto">
        <h1 class="text-2xl pb-4 font-bold ">Recent Posts</h1>
        <div v-for="post in contentList" :key="post._path" class="mb-5">            
            <NuxtLink :href="post._path">
                <h2 class="text-xl">{{  post.title }}</h2>
                <div >{{  post.description }}</div>
            </NuxtLink>
            <div>
                <span class="text-sm">by {{ post.author }}</span>
            </div>
        </div>
    </main>
</template>


<script setup>

let contentList = await queryContent('blog').limit(5).sort({date: -1}).find()
//console.log('** qc', contentList)
</script>

<style scoped>


</style>