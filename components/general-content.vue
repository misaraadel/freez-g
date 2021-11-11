<template>
    <section class="w-full py-20 bg-cover bg-no-repeat" :style="`background-image:url('/img/${backgroud}.png')`">
        <div class="container py-3">
            <div class="content flex text-center flex-col justify-center content-center items-center lg:w-semi-half md:w-full sm:w-full w-full m-auto">
                <h4 :class="`${headingColor} text-heading font-bold leading-heading mb-9`">
                    {{ heading }}
                </h4>
                
                <p :class="`${descColor} text-paragraph font-extralight leading-pargraph mb-10`">
                    {{ desc }}
                </p>

                <call-to-action :contactBk="`${contactBk}`" contactColor="text-white" :whatsBk="`${whatsBk}`" :whatsColor="`${whatsColor}`" />               
            </div>
        </div>
    </section>
</template>
<script>
export default {
    props: {
        backgroud: String,
        headingColor: String,
        heading: String,
        descColor: String ,
        desc: String,
        contactBk: String,
        whatsBk: String,
        whatsColor: String,
    }
}
</script>