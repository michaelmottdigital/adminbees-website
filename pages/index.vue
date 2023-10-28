<template>
    <div>
        <div class="bg-amber-400 px-5 pt-[3rem] sm:pt-[6rem] pb-[6rem]">
            <div class="container mx-auto text-center">
                <h1 class="pt-20">Salesforce administration, customization and configuration for a flat monthly fee</h1>
                <p class="sub-title">
                    <span style="display:none">Salesforce administration subscriptions to scale your business</span> 
                    We'll take care of the tech so you can focus on your business

                </p>
                <button class="btn-see-plans" @click="handleSeePlans">See Plans</button>

            </div>
        </div>

        <section class="pl-5 pr-5" style="display:none;">
            <div class="container mx-auto">
                <h2>
                    It's "you'll never go back" better
                    Once you try us, you'll never settle for less
                </h2>
                <p>
                    Admin Bees replaces unreliable freelancers and expensive agencies for one flat monthly fee, 
                    with requests delivered so fast that it will blow your mind.
                </p>
            </div>
        </section>
        
        <section id="membership-perks" class="pl-5 pr-5">
            <div class="container mx-auto">
                <h2 class="text-center">Membership Perks</h2>
                <div class="sub-title text-center">
                    Perks so good you'll never need to go anywhere else for your design. Seriously.
                </div>
                <div class="cards">
                    <div class="perks-item">
                        <h3>
                            Lightning Fast Delivery
                        </h3>
                        <div>
                            We will complete your request in a day or two on average.
                        </div>
                    </div>
                    <div class="perks-item">
                        <h3>
                            Fixed Monthly Fee
                        </h3>
                        <div>
                            No surprises! Pay the same amount each month.
                        </div>
                    </div>
                    <div class="perks-item">
                        <h3>
                            Top-notch Quality
                        </h3>
                        <div>
                            Get the best resource for each request, when you need it.
                        </div>
                    </div>
                    <div class="perks-item">
                        <h3>
                            Flexible and scalable
                        </h3>
                        <div>
                            Scale up or down, and pause or cancel at anytime. 
                        </div>
                    </div>
                </div>
            </div>
        </section>
        

        <section id="services" class=" text-white pl-5 pr-5">
            <div class="container mx-auto">
                <h2 class="text-center">
                    Some of the Tasks We Can Handle
                </h2>
                <div class="sub-title text-center">
                        
                </div>
                <div class="cards px-10 flex-wrap">
                    <div class="service-item">
                        
                        Configure and customize Salesforce objects, fields, page layouts, 
                        record types
                    </div>
                    <div class="service-item">
                        
                        Build and maintain reports and dashboards
                    </div>
                    <div class="service-item">
                       
                        Collaborate with sales, marketing, service and other teams to align Salesforce with the overall business objectives
                    </div>
                    <div class="service-item">
                        
                        Create, modify, and deactivate user accounts
                    </div>
                    <div class="service-item">
                        
                        Manage user access to data and features
                    </div>
                    <div class="service-item">
                       
                        Import and export data
                    </div>
                    <div class="service-item">
                        
                        Stay up to date on Salesforce releases, plan and apply updates
                    </div>
                    <div class="service-item">
                        
                        Data deduplication and cleanup
                    </div>
                    <div class="service-item">
                       
                        Ensure data integrity and accuracy
                    </div>
                    <div class="service-item">
                       
                        Create and manage approval processes, process builders, and flows
                    </div>
                    
                    <div class="service-item">
                       
                        Design and manage email templates
                    </div>
                    <div class="service-item">
                        
                        Install, update, and configure apps from the Salesforce AppExchange
                    </div>
                    <div class="service-item">
                       
                        Implement data backup and recovery procedure
                    </div>  
                    
                    <div class="service-item">
                        
                        Configure picklists, lookup fields, and validation rules
                    </div>
                    <div class="service-item">
                       
                        Evaluate potential impacts of changes
                    </div>
                    <div class="service-item">

                        Monitor system performance and identify potential bottlenecks or areas for optimization
                    </div>
                </div>

            </div>
        </section>
        
        <section id="membership-levels" ref="membershipLevels" class=" px-12">
            <div class="container mx-auto">
                <h2 class="text-center">Membership levels</h2>
                <div class="sub-title text-center">Choose a plan that's right for you.</div>

                <div class="cards sm:gap-3">
                    <div class="membership-card">
                        <h3 class="font-bold text-2xl pb-2">2 Week Trial</h3>
                        <div class="pb-9">One Request at a Time</div>
                        <div class="text-3xl font-bold pb-5">
                            $1000
                        </div>
                        <div class="pb-5">
                            <a class="btn btn-purple" href="https://buy.stripe.com/cN22aAaeT7Hb2nC3cg" target="_blank">Get Started</a>
                        </div>

                        <div>
                            <a href="https://calendly.com/michael-mott/introduction" 
                            target="_blank"
                            class="text-sm font-bold underline decoration-dotted decoration-purple-300 underline-offset-2" >
                            Schedule a Call
                            </a>
                        </div>
                    </div>
                    <div class="membership-card">
                        <h3 class="font-bold text-2xl pb-2">Standard</h3>
                        <div class="pb-9">One Request at a Time</div>
                        <div class="text-3xl font-bold pb-5">
                            $3000/month
                        </div>
                        <div class="pb-5">
                            <a class="btn btn-purple" href="https://buy.stripe.com/fZedTi0Ej9Pj3rG003" target="_blank">Get Started</a>
                        </div>

                        <div>
                            <a href="https://calendly.com/michael-mott/introduction" 
                            target="_blank"
                            class="text-sm font-bold underline decoration-dotted decoration-purple-300 underline-offset-2" >
                            Schedule a Call
                            </a>
                        </div>
                    </div>
                    <div class="membership-card">
                        <h3 class="font-bold text-2xl pb-2">Plus</h3>
                        <div class="pb-9">Two Requests at a Time</div>
                        <div class="text-3xl font-bold pb-5">
                            $5000/month
                        </div>
                        <div class="pb-5">
                            <a class="btn btn-purple" href="https://buy.stripe.com/eVa16w9aP4uZe6kfZ0" target="_blank">Get Started</a>
                        </div>

                        <div>
                            <a href="https://calendly.com/michael-mott/introduction" 
                            target="_blank"
                            class="text-sm font-bold underline decoration-dotted decoration-purple-300 underline-offset-2" >
                            Schedule a Call
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="faqs" class="text-white pl-5 pr-5">
            <div class="container mx-auto">
                <h2 class="text-center mb-4">Frequently Asked Questions</h2>
                <div class="flex flex-col gap-6  px-10">
                    <details>
                        <summary>
                            Why not just hire a full-time Administrator?
                        </summary>
                        <p>
                            Great question! For starters, the annual cost of a full-time senior-level administrator 
                            now exceeds $120,000, plus benefits. Aside from that, you may not always have 
                            enough work to keep them busy at all times, 
                            so you're stuck paying for time you aren't able to utilize.
                        </p>
                        <p>
                            With the monthly plan, you can pause your subscription as often as you
                            need to ensure you're only paying your administrator when you have work 
                            for them to do.
                        </p>
                    </details>
                    <details>
                        <summary>
                            Is there a limit to the number of requests I can make?
                        </summary>
                        <p>
                            After subscribing, you gain the freedom to include an unlimited number of 
                            requests in your queue, all of which will be delivered sequentially, 
                            one after the other.
                        </p>
                    </details>
                    <details>
                        <summary>
                            How long does it take to complete a request?
                        </summary>
                        <p>
                            It usually takes between 24 and 48 hours to complete a request.
                        </p>
                    </details>
                    <details>
                        <summary>
                            How does pausing work?
                        </summary>
                        <p>
                            We recognize that you might not always have sufficient design work to 
                            occupy an entire month. Sometimes, you might only have one or two design 
                            requests at the moment. In such situations, pausing your subscription can 
                            be extremely beneficial.
                        </p>
                        <p>
                            Our billing cycles are structured around a 31-day period. 
                            Here's how it works: Suppose you sign up and utilize our service for 21 days, 
                            but then decide to pause your subscription. By doing so, the billing 
                            cycle will be put on hold, and you'll have 10 unused days of service that you 
                            can avail at any time in the future. This way, you won't lose any of your 
                            purchased service days.
                        </p>   
                    </details>
                    <details>
                        <summary>
                            How do I make a request?
                        </summary>
                        <p>
                            You can simply send an email request to myadmin@adminbees.com.
                        </p>
                    </details>
                    
                    <details>
                        <summary>
                            Do you offer refunds if we do not like the service?
                        </summary>
                        <p>
                            We do not offer any refunds but you can terminate your
                            subscription at any time. 
                        </p>
                    </details>
                
                </div>
            </div>
            
        </section>


    </div>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

useSeoMeta({
    title: 'Salesforce administration, customization and configuration for a flat monthly fee',
    description: 'Salesforce adminstration, customization and configurations for small and medium sized companies'
})

// this allows us to reference elements on the page
const membershipLevels = ref(null)

onMounted( () => {
    console.log(membershipLevels)
})

function handleSeePlans() {
    membershipLevels.value?.scrollIntoView({behavior: 'smooth', block: 'start'})
}

//https://www.colorxs.com/color/hex-fbbf44#palette
async function makePayment(planName) {


}

</script>

<style scoped>

#membership-perks {
 background-color: #005247;
 @apply text-white;
}

#membership-levels {
    background-color: #845996;
    @apply text-white;
}

#services {
    background-color: #2F4858;

}

.membership-card {
    @apply text-center text-black pt-4 pb-4 sm:w-1/3 sm:grow-0 sm:shrink mb-4 ; 
    background-color: rgba(255, 255, 255, .5);
}

#faqs {
    background-color: #966746;
}

h1 {
    @apply text-5xl md:text-6xl pb-6;
    
}

h2 {
    @apply text-4xl pb-5;
    
}

.sub-title {
    @apply text-2xl pb-10;
}
summary {
    @apply pb-2;
}

section {
    @apply py-28;
    
}


p { 
    @apply pt-2;
}



.cards {
   @apply sm:flex justify-center;
}
.perks-item {
    @apply px-4 py-4 text-center sm:grow-0 sm:shrink sm:w-1/2 lg:w-1/4;

}
.perks-item h3 {
    @apply font-bold;
}


.service-item {
    @apply text-center px-4 py-4  sm:grow-0 sm:shrink sm:w-1/3 lg:w-1/4;  /* flex propserties - 3 cards on medium and 4 cards on large */
    
}

.btn-see-plans {
    @apply font-bold border-2 border-black rounded px-12 py-5 ;
}

.btn-see-plans:hover {
    @apply bg-black text-white ;
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

</style>
