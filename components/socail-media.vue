<template>
    <div>
        <ul class="social-media flex justify-center content-center items-center w-full">
            <template v-for="socail in socails" :key="socail.code"> 
                <li class="mx-1">
                    <a :href="`${socail.link}`" class="w-socail bg-white bg-opacity-10 h-socail flex rounded-circle justify-center content-center items-center">
                        <img :src="`/img/${socail.img}.svg`" class="w-icon h-icon object-contain" :alt="``">
                    </a>
                </li>
            </template>
        </ul>
    </div>
</template>
<style lang="scss">
    .social-media{
        li{
            a{
                transition: all .1s linear;
                img{
                    filter: invert(100%) sepia(0%) saturate(7490%) hue-rotate(314deg) brightness(103%) contrast(107%);
                }
                &:hover{
                    background-color: rgba($color: #fff, $alpha: 1.0) !important;
                    img{
                        filter: invert(33%) sepia(95%) saturate(680%) hue-rotate(183deg) brightness(93%) contrast(89%);
                        animation: bounce-in-fwd 1s linear;
                    }
                }
            }
        }
    }
</style>
<script>
    import { ref } from 'vue'
    export default{
        setup(){
            const socails = ref([
                {
                    code: '1',
                    img:'face',
                    link: 'www.facebook.com',
                },
                {
                    code: '2',
                    img:'twitter',
                    link: 'www.twitter.com',
                },
                {
                    code: '3',
                    img:'insta',
                    link: 'www.insta.com',
                },
                {
                    code: '4',
                    img:'youtube',
                    link: 'www.youtube.com',
                },
                {
                    code: '5',
                    img:'snap',
                    link: 'www.snap.com',
                }
            ])
            return{
                socails,
            }
        }
    }
</script>
