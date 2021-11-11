<template> 
    <section class="w-full py-20">
        <div class="container py-3">
            <div class="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-24">
                <div class="w-full h-full flex flex-col justify-center content">
                    <h4 class="text-heading font-bold leading-heading text-dark mb-9">
                        {{ heading }}
                    </h4>

                    <p class="text-paragraph leading-pargraph font-light mb-10">
                        {{ desc }}
                    </p>

                    <call-to-action contactBk="bg-primary" contactColor="text-white"  whatsBk="bg-primary bg-opacity-10" whatsColor="text-primary" />               
                </div>
                <div class="image-content">
                    <img :src="`/img/${img}.svg`" class="w-full h-imgComponent object-contain" :alt="`${heading}`">
                </div>
            </div>
        </div>
    </section>
</template>
<script>
    export default {
        props: {
            heading: String,
            desc: String,
            img: String
        }
    }
</script>