<template>
    <section class="contact w-full py-20 bg-white">
        <div class="container py-3">
            <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-24">
                <template v-for="box in boxes" :key="box.code">
                    <div class="box w-full relative z-max flex flex-col justify-center content-center items-center text-center" >
                        <img :src="`/img/${box.img}.svg`" class="w-contact h-contact object-contain mb-6" :alt="`${box.heading}`">
                        <h4 class="text-featureHead font-bold mb-6 text-dark leading-pargraph">
                            {{ box.heading }}
                        </h4>
                        <p class="text-contact text-paragraph font-normal leading-pargraph">
                            {{ box.desc }}
                        </p>
                    </div>
                </template>
            </div>
        </div>
    </section>
</template>
<style lang="scss">
    .contact{
        .box{
            &::after{
                content: '';
                position: absolute;
                width: 1px;
                height: 100px;
                background-color: #DCDCDC;
                top: calc(50% - 50px);
                left: -49.5px;
            }
            &:hover{
                img{
                    animation: bounce-in-fwd 1s linear;
                }
            }
            &:last-child{
                &::after{
                    display: none;
                }
            }
        }
    }
    @media (max-width: 900px) {
        .contact{
            .box{
                &::after{
                    width: 100px;
                    height: 1px;
                    top: unset !important;
                    left: calc(50% - 50px);
                    bottom: -40px;
                }
            }
        }
    }
</style>
<script>
import { ref } from 'vue'
export default {
    setup(){
        const boxes = ref([
            {
                code: '1',
                img: 'contact',
                heading: 'تواصل معنا أولاً',
                desc: 'اصلاح جميع الاعطال للمكيفات السبليت والشباك وانظمة التكييف المركزي صيانة'
            },
            {
                code: '2',
                img: 'list',
                heading: 'سجل تفاصيل طلبك',
                desc: 'اصلاح جميع الاعطال للمكيفات السبليت والشباك وانظمة التكييف المركزي صيانة'
            },
            {
                code: '3',
                img: 'location',
                heading: 'نجيك لحد بيتك',
                desc: 'اصلاح جميع الاعطال للمكيفات السبليت والشباك وانظمة التكييف المركزي صيانة'
            }
        ])
        return{
            boxes
        }
    }
}
</script>