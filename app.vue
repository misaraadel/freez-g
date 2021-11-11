<template>
    <div lang="AR" dir="rtl">
        <Head :lang="'' + dynamic">
            <Title>{{ dynamic }}</Title>
            <Meta name="description" :content="`${content} `" />
            <Link rel="preload" href="/favicon.ico" as="script" />
        </Head>
        <NuxtPage />
    </div>
</template>
<script lang="ts">
export default {
    setup () {
        useMeta({
            bodyAttrs: {
                class: 'test'
            }
        })
        return { dynamic: ref('شركة فريزر') , content: 'شركة فريزر لفك وتركيب وصيانة المكيفات' }
    },
}
</script>