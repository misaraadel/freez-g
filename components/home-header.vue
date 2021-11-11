<template>
    <nav class="w-full absolute top-0 left-0 z-full-max py-6">
        <div class="container">
            <div class="content w-full flex justify-between items-center content-center">
                <logo />
                <call-to-action contactBk="border border-solid border-white" contactColor="text-white"  whatsBk="bg-white border-solid border-white border" whatsColor="text-primary" />               
            </div>
        </div>
    </nav>
</template>
<style lang="scss">
    @media (max-width: 700px) {
        nav{
            .content{
                justify-content: center;
                .call-to-action {
                    display: none;
                }
            }
        }
    }
</style>