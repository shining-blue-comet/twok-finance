<template>
    <section>
        <div class="dynCont center">
            <h2>Welcome to 2K Finance - Current Phase: 8Bit</h2>

            <div class="btnGroup flex mw-500">
                <generic-button @clicked="open('information')" title="TWOK - Info"></generic-button>
                <generic-button @clicked="open('dxminformation')" title="Dexmoon - Info"></generic-button>
                <generic-button href="https://exchange.pancakeswap.finance/#/swap?inputCurrency=ETH&outputCurrency=0xae1e69bbd3dc0c470ce4ba28794753cdfdec7452" title="Buy TWOK"></generic-button>                
                <generic-button href="https://exchange.pancakeswap.finance/#/swap?inputCurrency=ETH&outputCurrency=0x7911010aa128e5C2b91E954c821b7fB23ad8ABbc" title="Buy Dexmoon"></generic-button>                
                <generic-button @clicked="open('vault')" title="Vaults"></generic-button>
                <generic-button @clicked="open('charts')" title="Charts"></generic-button> 
                <generic-button @clicked="open('trigger')" title="Ecosystem Triggers"></generic-button>
                <generic-button @clicked="open('partnerships')" title="Partnerships"></generic-button>
                <generic-button @clicked="handleWalletConnect" title="Connect"></generic-button>
                <generic-button @clicked="handleWalletDisconnect" title="Disconnect"></generic-button>
            </div>
        </div>
    </section>
</template>

<script>
// import WalletConnectProvider from "@walletconnect/web3-provider";
import genericButton from "@/components/genericButton";
import useWallet from '../hooks/useWallet';
import Web3 from "web3";

// let isOnLoad = true;

export default {
    name: "welcome",
    components: {genericButton},
    methods: {
        open(key) {
            // isOnLoad = false;
            this.$emit("open", key);
        },
        close(key) {
            this.$emit("close", key);
        },
        async handleWalletConnect() {
            
            const { onConnect } = useWallet();

            const provider = await onConnect();

            this.$store.commit("setProvider", provider)
            this.$store.commit("setWeb3", new Web3( provider ))
            this.$store.commit("setAccountAddress", provider.selectedAddress)
                setInterval(() => {                 
                    if ( provider.isMetaMask ) {
                        this.closePopUp( "connect-wallet-popup" )
                    }
                }, 500);
        },
        async handleWalletDisconnect() {
            const { onDisconnect } = useWallet();

            await onDisconnect(this.$store.state.web3);
        }
    },
}
</script>

<style scoped>

</style>
