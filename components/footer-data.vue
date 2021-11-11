<template>
    <footer class="w-full py-16 bg-no-repeat" style="background-image:url('/img/footer.png');">
        <div class="container py-4">
            <div class="flex lg:w-half md:w-full sm:w-full m-auto justify-center flex-col items-center content-center text-center">
                <logo />
                <p class="text-copyrights text-white font-bold leading-pargraph my-8">
                    {{ title }}
                </p>
                <call-to-action contactBk="border border-solid border-white" contactColor="text-white"  whatsBk="bg-white border-solid border-white border" whatsColor="text-primary" />               
            </div>
        </div>
    </footer>
</template>
<style lang="scss">
    footer{
        background-size: 100% 100%;
    }
    @media (max-width: 700px) {
        footer{
            background-size: cover;
            background-position: top left;
        }
    }
</style>
<script setup>
    const title = ' فك وتركيب وصيانه جميع انواع المكيفات الاسبليت مع افضل الفنيين المختصين في التركيب  وشحن الفريون وتمديد النحاس واستخدام أحدث الأدوات لفك وتركيب المكيفات'
</script>