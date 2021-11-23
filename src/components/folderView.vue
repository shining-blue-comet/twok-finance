<template>
    <section :class="[folderState ? 'active' : '', sectioned ? 'sectioned' : '', fixedSection ? 'fixed-section' : '', noScroll ? 'noScroll' : '']" class="kk-folder TSE">
        <div class="kk-folder-inner">
            <div class="kk-folder-hold TSE">
                <div class="kk-folder-top">
                    <div class="kk-folder-top-inner">
                        <div class="kk-folder-close" @click="$emit('folderState', null);">
                            <div class="kk-folder-close-inner TSE-opacity"></div>
                        </div>
                        <div class="kk-folder-title">
                            <span>{{ title }}</span>
                        </div>
                    </div>
                </div>
                <div class="kk-folder-cont-hold">
                    <div class="kk-folder-cont">
                        <div class="kk-folder-cont-inner">
                            <div class="kk-fakeScroll"></div>
                            <slot></slot>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "folderView",
    props: {
        title: String,
        folderState: Boolean,
        sectioned: Boolean,
        fixedSection: Boolean,
        noScroll: Boolean,
    },
}
</script>

<style scoped>
    .kk-folder {position: fixed; top: 0; left: 0; width: 100%; height: 100vh; pointer-events: none; z-index: 100; opacity: 0;}
    .kk-folder-inner {position: relative; height: 100%; padding-top: 60px; box-sizing: border-box; font-size: 0; text-align: center; white-space: nowrap;}
    .kk-folder-inner::before {content: ""; display: inline-block; height: 100%; width: 0; vertical-align: middle;}
    .kk-folder-hold {
        display: inline-block;
        width: calc(100% - 46px);
        max-width: calc(700px - 46px);
        margin: 20px;
        margin-top: 1px;
        margin-bottom: 300px;
        vertical-align: middle;
        background-color: rgba(var(--primary), 1);
        border: 3px solid rgba(var(--secondary), 1);
        pointer-events: none;
        white-space: normal;
        -moz-transform: scale(0.5);
        -webkit-transform: scale(0.5);
        -o-transform: scale(0.5);
        -ms-transform: scale(0.5);
        transform: scale(0.5);
    }

    .kk-folder.active {opacity: 1;}
    .kk-folder.active .kk-folder-hold {
        -moz-transform: scale(1);
        -webkit-transform: scale(1);
        -o-transform: scale(1);
        -ms-transform: scale(1);
        transform: scale(1);
        pointer-events: auto;
    }

    /*///// SAFARI MOBILE FIX /////*/
    @media only screen and (orientation: portrait) {
        @media (max-width: 950px){
            _::-webkit-full-page-media, _:future, :root .kk-folder-hold {
                max-height: calc(100vh - 230px);
            }

            _::-webkit-full-page-media, _:future, :root .kk-folder-inner::before {
                max-height: calc(100vh - 230px);
            }
        }
    }

    /*/////////////////////////////////*/
    /*/////////////// TOP /////////////*/
    /*/////////////////////////////////*/

    .kk-folder-top {position: relative; height: 48px; border-bottom: 3px solid rgba(var(--secondary), 1); box-sizing: border-box; padding: 6px;}
    .kk-folder-top-inner {position: relative; height: 100%; background-color: rgb(0, 0, 0); background-size: 1px; font-size: 0; text-align: center;}
    .kk-folder-close {
        display: block;
        position: absolute;
        top: 0;
        left: 50px;
        width: 27px;
        height: 27px;
        border: 3px solid rgba(var(--secondary), 1);
        background-color: rgba(var(--primary), 1);
        -webkit-box-shadow: 0 0 0 6px rgba(var(--primary), 1);
        box-shadow: 0 0 0 6px rgba(var(--primary), 1);
        cursor: pointer;
    }

    .kk-folder-close-inner {
        position: relative;
        height: 100%;
        background-image: url('../assets/images/close-icon.png');
        background-size: 15px;
        background-position: 50%;
        background-repeat: no-repeat;
        opacity: 0;
    }

    .kk-folder-close:hover .kk-folder-close-inner {opacity: 0.5;}
    .kk-folder-title {display: inline-block; height: 33px; background-color: rgba(var(--primary), 1); line-height: 33px; padding: 0 20px;}
    .kk-folder-title span {
        display: block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 100%;
        font-size: 1.2rem;
        color: rgba(var(--secondary), 1);
    }

    /*/////////////////////////////////*/
    /*//////////// CONTENT ////////////*/
    /*/////////////////////////////////*/

    .kk-folder-cont {
        min-height: 100px;
        padding: 30px 35px 0 20px;
        overflow-x: hidden;
        overflow-y: scroll;
        max-height: calc(100vh - 214px);
        font-size: 1rem;
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
    }

    .kk-folder-cont::-webkit-scrollbar {display: none;} /* Chrome */
    .kk-folder-cont-inner {padding: 0 20px 30px 0;}
    .kk-folder-cont-hold {position: relative;}

    /*///// SAFARI MOBILE FIX /////*/
    @media only screen and (orientation: portrait) {
        @media (max-width: 950px){
            _::-webkit-full-page-media, _:future, :root .kk-folder-cont {
                max-height: calc(100vh - 310px);
            }
        }
    }

    /*/////////////////////////////////*/
    /*////////// FAKE SCROLL //////////*/
    /*/////////////////////////////////*/

    .kk-fakeScroll {
        position: absolute;
        top: 0;
        right: 0;
        width: 35px;
        background-color: rgba(var(--primary), 1);
        border-left: 3px solid rgba(var(--secondary), 1);
        height: 100%;
        z-index: 100;
        pointer-events: none;
    }

    .kk-fakeScroll::before, .kk-fakeScroll::after {
        content: "";
        position: absolute;
        right: 0;
        width: 35px;
        height: 35px;
        background-size: 23px;
        background-repeat: no-repeat;
        background-position: 50%;
        background-image: url('../assets/images/arrow.png');
        border-bottom: 3px solid rgba(var(--secondary), 1);
    }

    .kk-fakeScroll::before {top: 0;}
    .kk-fakeScroll::after {
        bottom: 0;
        -moz-transform: rotate(180deg);
        -webkit-transform: rotate(180deg);
        -o-transform: rotate(180deg);
        -ms-transform: rotate(180deg);
        transform: rotate(180deg);
    }

    /*/////////////////////////////////*/
    /*/////////// NO SCROLL ///////////*/
    /*/////////////////////////////////*/

    .kk-folder.noScroll .kk-fakeScroll {display: none;}
    .kk-folder.noScroll .kk-folder-cont {padding-right: 0;}

    /*/////////////////////////////////*/
    /*/////////// SECTIONED ///////////*/
    /*/////////////////////////////////*/

    .kk-folder.sectioned .kk-folder-cont {padding-left: 0; padding-top: 0;}
    .kk-folder.sectioned .kk-folder-cont-inner {padding-right: 0;}

    /*/////////////////////////////////*/
    /*/////////// RESPONSIVE //////////*/
    /*/////////////////////////////////*/

    @media (min-width: 1450px){
        .kk-folder-hold {max-width: calc(900px - 46px);}
        .kk-folder-inner {padding-top: 80px;}
        .kk-folder-cont {max-height: calc(100vh - 234px);}
    }

    @media (max-width: 1050px) and (min-width: 950px){
        .kk-folder-hold {max-width: calc(650px - 46px);}
    }

    @media (max-width: 600px){
        .kk-folder-title {display: block; padding: 0 0 0 89px; box-sizing: border-box; background-color: transparent; font-size: 0; text-align: center;}
        .kk-folder-title span {
            font-size: 1.1rem;
            display: inline-block;
            padding: 0 10px;
            background-color: rgba(var(--primary), 1);
            -webkit-box-shadow: 0 0 0 5px rgba(var(--primary), 1);
            box-shadow: 0 0 0 5px rgba(var(--primary), 1);
        }
    }

    @media (max-width: 400px){
        .kk-folder-close {left: 25px;}
        .kk-folder-title {padding: 0 0 0 64px;}
        .kk-folder-title span {padding: 0 10px; font-size: 1rem;}
    }

</style>
