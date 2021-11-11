<template>
   <header class="w-full pt-72 pb-60 bg-white bg-cover bg-no-repeat" style="background-image:url('/img/header.png')">
        <div class="container">
            <div class="content flex text-center flex-col justify-center content-center items-center lg:w-semi-half md:w-full sm:w-full w-full m-auto">
                <h4 class="text-heading text-white leading-heading mb-10 font-bold">
                    {{ heading }}
                </h4>

                <p class="text-paragraph opacity-70 font-normal leading-pargraph mb-10 text-white">
                    {{ desc }}
                </p>

                <call-to-action contactBk="border border-solid border-white" contactColor="text-white"  whatsBk="bg-white border-solid border-white border" whatsColor="text-primary" />               
            </div>
        </div>
   </header>
</template>
<style lang="scss">
    @media (max-width: 700px) {
        header{
            padding: 150px 0px 50px 0px !important;
        }
    }
</style>
<script setup>
    const heading = 'شركة فريزر لفك وتركيب وصيانة المكيفات'
    const desc = 'فك وتركيب وصيانه جميع انواع المكيفات الاسبليت مع افضل الفنيين المختصين في التركيب  وشحن الفريون وتمديد النحاس واستخدام أحدث الأدوات لفك وتركيب المكيفات'
</script>