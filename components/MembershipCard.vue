<template>
    <div class="border-2 bkg-white-transparent text-center text-black pt-4 pb-4 w-[25rem] sm:grow-0 sm:shrink mb-4 ">
            <h3 class="font-bold text-2xl pb-2">{{  name }}</h3>
            <div class="pb-9">{{ requests }}</div>
            <div class="text-3xl font-bold pb-5">
                {{ price }}/month
            </div>
            <div class="pb-5">
                <a class="btn btn-purple" @click="makePayment" href="">Get Started</a>
            </div>
            <div>
                <a href="https://calendly.com/michael-mott/introduction" 
                  target="_blank"
                  class="text-sm font-bold underline decoration-dotted decoration-purple-300 underline-offset-2" >
                  Schedule a Call
                </a>
            </div>
    </div>
</template>

<script setup>

const props = defineProps({
    name: String,
    price: String,
    requests: String
})

async function makePayment() {
  console.log("make payment")
  
  if (props.name == 'Standard') {
    await navigateTo('https://buy.stripe.com/fZedTi0Ej9Pj3rG003', {
      external: true,
      open: {
        target: '_blank'}
    )
    }

</script>


<style scoped>

.bkg-white-transparent {
  background-color: rgba(255,255,255,.3)
}

.btn {
    @apply font-bold py-2 px-4 rounded;
  }
  .btn-purple {
    background-color: #845996;
    color: rgba( 255, 255, 255,.8)
  }
  .btn-purple:hover {
    background-color: black;
    color: white; 
  }
  .btn-blue {
    @apply bg-blue-500 text-white;

  }
  .btn-blue:hover {
    @apply bg-blue-700;
  }
</style>