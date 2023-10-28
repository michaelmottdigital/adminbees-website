<template>
    <nav class="bg-amber-400 w-full fixed border-b border-b-amber-200">
        <div class="flex flex-wrap items-center justify-between px-4 py-2 max-w-screen-xl mx-auto">
            <a href="/">
                <Logo location="header" />
            </a>
            <div id="destop-menu" class="px-4 py-4 hidden sm:flex">
                <ul>
                    <li class="">
                        <NuxtLink class="font-semibold hover:bg-amber-300 px-3 py-1 hover:font-normal rounded-lg" to="/blog">Blog</NuxtLink>
                    </li>
                </ul>
            </div>
            <div class="sm:hidden">
                <button @click="isMenuOpen = !isMenuOpen">
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
            </div>
            
        </div>
        <div id="mobile-menu" :class="isMenuOpen ? 'block' : 'hidden'" class="px-4 py-4 sm:hidden">
            <ul>
                <li class="font-semibold hover:bg-amber-300 hover:font-normal rounded px-3">
                    <NuxtLink to="/blog" >Blog</NuxtLink>
                </li>
            </ul>
        </div>

    </nav>

</template>
<script setup>

const isMenuOpen = ref(false)

</script>