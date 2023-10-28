<template>
    <main class="container px-4 pt-[7rem] max-w-screen-xl mx-auto">
      <div class="mb-4">
        <NuxtLink class="underline" href="/blog">Back</NuxtLink>
      </div>
      <ContentDoc v-slot="{ doc }">
        <h1 class="text-3xl font-bold">{{ doc.title }}</h1>
        <div>
          <span class="text-sm">by {{ doc.author }}</span>
        </div>
        <div class="mt-4 mb-[4em] prose prose-lg max-w-none prose-h2:text-2xl ">
          <ContentRenderer :value="doc" />
        </div>
      </ContentDoc>
    </main>
</template>

<style scoped>

#define-your-business-objectives-and-goals {
  background-color: red;
}

p {
  margin-top: 1em;
  margin-bottom: 1em;
}

</style>