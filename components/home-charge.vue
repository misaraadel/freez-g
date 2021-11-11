<template>
    <div class="charge">
        <general-content backgroud="charge" headingColor="text-white" :heading="`${heading}`" :desc="`${desc}`" descColor="text-white opacity-70" contactBk="bg-secodary" whatsBk="border border-solid border-white" whatsColor="text-white"/>
    </div>
</template>
<style lang="scss">
    .charge{
        .whats-color{
            img{
                filter: invert(318%) sepia(38%) saturate(0%) hue-rotate(225deg) brightness(426%) contrast(117%);
            }
        }
    }
</style>
<script setup>
    const heading = 'شحن فريون'
    const desc = 'شحن المكيفات بالفريوف وصيانة قنوات التبريد ولحام النحاس للحصول على أفضل تبريد ممكن وظروف تشغيل مثالية شحن المكيفات بالفريوف وصيانة قنوات التبريد ولحام النحاس للحصول على أفضل تبريد ممكن وظروف تشغيل مثالية شحن المكيفات بالفريوف وصيانة قنوات التبريد ولحام النحاس '
</script>