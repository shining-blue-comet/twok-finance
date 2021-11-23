<template>
    <section>
        <div class="dynCont center">
            <h2>{{ connectToWalltMessage }}</h2>
        </div>
        <generic-button
            @clicked="handleWalletConnect()"
            title="Connect"
            class="connect-button"
        />
    </section>
</template>

<script>
    import genericButton from "@/components/genericButton";
    import useWallet from '../hooks/useWallet';
    import Web3 from "web3";

    export default {
        name: "connect-wallet-popup-page",
        components: { genericButton },
        props: {
            connectToWalltMessage: String
        },
        methods: {
            async handleWalletConnect() {
                const { onConnect } = useWallet(this.$store.state.chainId);

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
            open(key) {
                this.$emit("open", key);
            },
            closePopUp( key ) {
                this.$emit( "folderState", key )
            }
        }
    }
</script>

<style scoped>

</style>