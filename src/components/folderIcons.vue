<template>
    <section class="kk-icons">
        <div class="kk-icons-list">
            <div v-for="(iconItem, index) in iconItems" :key="index" class="kk-icons-item">
                <a :href="iconItem.href" @click="connectWallet(index)" class="kk-icons-link">
                    <div class="kk-icons-icon TSE-opacity">
                        <img :src="require('../assets/images/' + iconItem.icon)" alt="icon"/>
                    </div>
                    <div class="kk-icons-txt">
                        <span>{{ iconItem.title }}</span>
                    </div>
                </a>
            </div>
        </div>
    </section>
</template>

<script>
import { WALLETS } from '../utils/constants/wallets'

export default {
    name: "folderIcons",
    props: {
        iconItems: Array,
    },
    methods: {
        open(key) {
            this.$emit("open", key);
        },
        async connectWallet(index) {
            if( WALLETS['METAMASK'] === index ){

                this.$store.dispatch("getAccountAddress");
                this.$store.commit("setupContracts")
            }
            else if(WALLETS['TRUST-WALLET'] === index){
                try {
                   await this.$store.dispatch("connectWalletConnect")
                   await this.$store.dispatch("getWalletConnectAddress")
                } catch (error) {
                    this.open("active-session")
                }
            }
            else if(WALLETS['BINANCE-SMART-CHAIN'] === index){
                // const options = {
                //     clientId: 'Arketype',
                //     environment: 'staging', //optional, production by default
                //     signMethod: 'POPUP', //optional, REDIRECT by default
                //     bearerTokenProvider: () => 'obtained_bearer_token', //optional, default undefined
                //     //optional: you can set an identity provider to be used when authenticating
                //     authenticationOptions: {
                //         idpHint: 'google'
                //     },
                //     secretType: 'ETHEREUM' //optional, ETHEREUM by default
                // };
                // Arkane.createArkaneProviderEngine(options).then(provider => {
                //     web3 = new Web3(provider);
                // });

                console.log(index);
            } 
        },
    }
}
</script>

<style scoped>
    .kk-icons {position: relative; max-width: 500px; margin: 0 auto; margin-bottom: 50px;}
    .kk-icons-list {display: flex; flex-flow: row wrap; justify-content: space-around; align-items: flex-start;}
    .kk-icons-item {margin: 10px;}
    .kk-icons-link {display: block; font-size: 0; text-align: center;}
    .kk-icons-icon {margin-bottom: 15px; width: 80px; display: inline-block;}
    .kk-icons-link:hover .kk-icons-icon {opacity: 0.6;}
    .kk-icons-txt {text-align: center; font-size: 1rem; color: rgba(var(--secondary), 1);}

    /*/////////////////////////////////*/
    /*/////////// RESPONSIVE //////////*/
    /*/////////////////////////////////*/

    @media (min-width: 1450px){
        .kk-icons-icon {width: 90px;}
        .kk-icons {margin-top: 20px; margin-bottom: 80px; max-width: 650px;}
    }
</style>
