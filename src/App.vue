<template>
    <main-view @open="openMainView">

        <!--///// WELCOME /////-->
        <folder-view :folderState="content['welcome'].state" @folderState="closeFolder('welcome')" title="Welcome to 2K Finance">
            <welcome @open="openFolder" @close="closeFolder"></welcome>
        </folder-view>
        
        <!--///// TRADING VIDEO /////-->
        <folder-view :folderState="content['trading-video'].state" @folderState="closeFolder('trading-video')" title="DexMoon Trading Competition">
            <trading-video @open="openFolder" @close="closeFolder"></trading-video>
        </folder-view>

        <!--///// ABOUT /////-->
        <folder-view :folderState="content['about'].state" @folderState="closeFolder('about')" title="About 2K Finance">
            <about></about>
        </folder-view>

        <!--///// CHARITY FUNDING /////-->
        <folder-view :folderState="content['charityfunding'].state" @folderState="closeFolder('charityfunding')" title="Charity Funding" sectioned fixedSection>
            <charityfunding  @open="openFolder"></charityfunding>
        </folder-view>

        <!--///// DXM SWAP TWOK /////-->
        <folder-view :folderState="content['dxmswaptwok'].state" @folderState="closeFolder('dxmswaptwok')" title="Swap DXM for TWOK" sectioned fixedSection>
            <dxmswaptwok @open="openFolder"></dxmswaptwok>
        </folder-view>

        <!--///// VAULT /////-->
        <folder-view :folderState="content['vault'].state" @folderState="closeFolder('vault')" title="2K Vaults" sectioned fixedSection>
            <vault @open="openFolder"></vault>
        </folder-view>

        <!--///// TWOK VAULT /////-->
        <folder-view :folderState="content['twok-vault'].state" @folderState="closeFolder('twok-vault')" title="TWOK VAULT" sectioned fixedSection>
            <twok-vault :accountBalance="accountBalance" :availableEarnings="availableEarnings" :currentlyStaked="currentlyStaked" @open="openFolder"></twok-vault>
        </folder-view>

        <!--///// DXM BNB LP /////-->
        <folder-view :folderState="content['dxm-bnb-lp'].state" @folderState="closeFolder('dxm-bnb-lp')" title="DXM / BNB LP" sectioned fixedSection>
            <dxm-bnb-lp :accountBalance="accountBalance" :currentlyStaked="currentlyStaked" :availableEarnings="availableEarnings" @open="openFolder" @folderState="closeFolder"></dxm-bnb-lp>
        </folder-view>

        <!--///// TWOK BNB LP /////-->
        <folder-view :folderState="content['twok-bnb-lp'].state" @folderState="closeFolder('twok-bnb-lp')" title="TWOK / BNB LP" sectioned fixedSection>
            <twok-bnb-lp :accountBalance="accountBalance" :availableEarnings="availableEarnings" :currentlyStaked="currentlyStaked" @open="openFolder"></twok-bnb-lp>
        </folder-view>

        <!--///// TWOK BUSD APELP /////-->
        <folder-view :folderState="content['twok-busd-apelp'].state" @folderState="closeFolder('twok-busd-apelp')" title="TWOK / BUSD APESwap LP" sectioned fixedSection>
            <twokUsdApeLp :accountBalance="accountBalance" :availableEarnings="availableEarnings" :currentlyStaked="currentlyStaked" @open="openFolder"></twokUsdApeLp>
        </folder-view>

        <!--///// TWOK FBNB FEG LP /////-->
        <folder-view :folderState="content['twok-bnb-fegexlp'].state" @folderState="closeFolder('twok-bnb-fegexlp')" title="TWOK / fBNB FEGex LP" sectioned fixedSection>
            <twokfBnbfegLp :accountBalance="accountBalance" :availableEarnings="availableEarnings" :currentlyStaked="currentlyStaked" @open="openFolder"></twokfBnbfegLp>
        </folder-view>

        <!--///// CESS CESS VAULT /////-->
        <folder-view :folderState="content['cess-cess'].state" @folderState="closeFolder('cess-cess')" title="CESS VAULT" sectioned fixedSection>
            <cess4cess :accountBalance="accountBalance" :availableEarnings="availableEarnings" :currentlyStaked="currentlyStaked" @open="openFolder"></cess4cess>
        </folder-view>

        <!--///// CESS4DXM VAULT /////-->
        <folder-view :folderState="content['cess-dxm'].state" @folderState="closeFolder('cess-dxm')" title="CESS/DXM VAULT" sectioned fixedSection>
            <cess4dxm :accountBalance="accountBalance" :availableEarnings="availableEarnings" :currentlyStaked="currentlyStaked" @open="openFolder"></cess4dxm>
        </folder-view>

        <!--///// CESSLP VAULT /////-->
        <folder-view :folderState="content['cess-lp'].state" @folderState="closeFolder('cess-lp')" title="CESSPOOL LP VAULT" sectioned fixedSection>
            <cesslp :accountBalance="accountBalance" :availableEarnings="availableEarnings" :currentlyStaked="currentlyStaked" @open="openFolder"></cesslp>
        </folder-view>

        <!--///// DXM4CESS VAULT /////-->
        <folder-view :folderState="content['dxm-cess'].state" @folderState="closeFolder('dxm-cess')" title="DXM4CESS VAULT" sectioned fixedSection>
            <dxm4cess :accountBalance="accountBalance" :availableEarnings="availableEarnings" :currentlyStaked="currentlyStaked" @open="openFolder"></dxm4cess>
        </folder-view>
        
        <!--///// CHARTS /////-->
        <folder-view :folderState="content['charts'].state" @folderState="closeFolder('charts')" title="2K Charts" sectioned fixedSection>
            <charts @open="openFolder"></charts>
        </folder-view>

        <!--///// INFORMATION /////-->
        <folder-view :folderState="content['information'].state" @folderState="closeFolder('information')" title="2K Finance Information">
            <information></information>
        </folder-view>

        <!--///// CONFIRMATION /////-->
        <folder-view :folderState="content['confirmation'].state" @folderState="closeFolder('confirmation')" title="Confirmation">
            <confirmation :isDisplayTxLink="transactionLink" :tx="txMessage" @open="openFolder"></confirmation>
        </folder-view>

        <!--///// APPROVE /////-->
        <folder-view :folderState="content['approve'].state" @folderState="closeFolder('approve')" title="Approving Transaction">
            <approve :isDisplayTxLink="transactionLink" :tx="txMessage" @open="openFolder"></approve>
        </folder-view>

        <!--///// DXMINFORMATION /////-->
        <folder-view :folderState="content['dxminformation'].state" @folderState="closeFolder('dxminformation')" title="Dexmoon Information">
            <dxminformation></dxminformation>
        </folder-view>
        
        <!--///// PARTNERSHIPS /////-->
        <folder-view :folderState="content['partnerships'].state" @folderState="closeFolder('partnerships')" title="Partnerships" sectioned fixedSection>
            <partnerships @open="openFolder"></partnerships>
        </folder-view>

        <!--///// MOONTIMER /////-->
        <folder-view :folderState="content['moontimer'].state" @folderState="closeFolder('moontimer')" title="MoonTimer" sectioned fixedSection>
            <moontimer @open="openFolder"></moontimer>
        </folder-view>

        <!--///// CESSPOOL /////-->
        <folder-view :folderState="content['cesspool'].state" @folderState="closeFolder('cesspool')" title="CESSPOOL" sectioned fixedSection>
            <cesspool @open="openFolder"></cesspool>
        </folder-view>
        
        <!--///// TRIGGER /////-->
        <folder-view :folderState="content['trigger'].state" @folderState="closeFolder('trigger')" title="Ecosystem Triggers">
            <trigger @open="openFolder"></trigger>
        </folder-view>

        <!--///// ACTIVE SESSION /////-->
        <folder-view :folderState="content['active-session'].state" @folderState="closeFolder('active-session')" title="Session Active">
            <activeSession @open="openFolder"></activeSession>
        </folder-view>

        <!--///// INPUT ERROR /////-->
        <folder-view :folderState="content['input-error'].state" @folderState="closeFolder('input-error')" title="Input Error">
            <inputErrorPage :errorMessage="errorMessage" @open="openFolder"></inputErrorPage>
        </folder-view>

        <!--///// TRANSACTION MESSAGE /////-->
        <folder-view :folderState="content['tx-message'].state" @folderState="closeFolder('tx-message')" title="Transaction Message">
            <txPage :txMessage="txMessage" @open="openFolder"></txPage>
        </folder-view>

        <!--///// CONNECT TO WALLET MESSAGE /////-->
        <folder-view :folderState="content['connect-wallet-popup'].state" @folderState="closeFolder('connect-wallet-popup')" title="Connect To Wallet">
            <connectToWallet :connectToWalltMessage="connectToWalltMessage" @open="openFolder" @folderState="closeFolder" />
        </folder-view>

    </main-view>
</template>
<script>
import './assets/css/colours.css';
import './assets/css/global.css';
import './assets/fonts/geneva/geneva.css';
import './assets/fonts/chicagoFLF/chicagoFLF.css';
import mainView from "@/components/mainView";
import folderView from "@/components/folderView";
import welcome from "@/pages/welcome";
import tradingVideo from "@/pages/trading-video";
import about from "@/pages/about";
import information from "@/pages/information";
import charityfunding from "@/pages/charityfunding";
import vault from "@/pages/vault";
import twokVault from "@/pages/twok-vault";
import cess4dxm from "@/pages/cess-dxm";
import cesslp from "@/pages/cess-lp";
import dxm4cess from "@/pages/dxm-cess";
import twokfBnbfegLp from "@/pages/twok-bnb-fegexlp";
import twokUsdApeLp from "@/pages/twok-busd-apelp";
import cess4cess from "@/pages/cess-cess";
import dxmswaptwok from "@/pages/dxm-swap-twok";
import dxmBnbLp from "@/pages/dxm-bnb-lp";
import twokBnbLp from "@/pages/twok-bnb-lp";
import Confirmation from "@/pages/confirmation";
import Approve from "@/pages/approve";
import dxminformation from "@/pages/dxminformation";
import partnerships from "@/pages/partnerships";
import moontimer from "@/pages/moontimer";
import cesspool from "@/pages/cesspool";
import Charts from "@/pages/charts";
import trigger from "@/pages/trigger";
import activeSession from "@/pages/active-session";
import inputErrorPage from "@/pages/input-error-page";
import txPage from "@/pages/tx-page";
import connectToWallet from '@/pages/connect-wallet-popup-page'

export default {
    name: "App",
    data: () => ({
        transactionLink: false,
        availableEarnings: null,
        currentlyStaked: 0,
        connectToWalltMessage: '',
        folderState: true,
        accountBalance: 0,
        errorMessage: '',
        countDownTime: '0',
        interval: 0,
        txMessage: '',
        prevKey: '',
        key: 0,
        content: {
            "welcome":{
                state: true,
            },
            "trading-video":{
                state: false,
            },
            "about":{
                state: false,
            },
            "charityfunding":{
                state: false,
            },
            "dxmswaptwok":{
                state: false,
            },
            "vault":{
                state: false,
            },
            "twok-vault":{
                state: false,
            },
            "cess-cess":{
                state: false,
            },
            "cess-dxm":{
                state: false,
            },
            "dxm-cess":{
                state: false,
            },
            "cess-lp":{
                state: false,
            },
            "dxm-bnb-lp":{
                state: false,
            },
            "twok-bnb-lp":{
                state: false,
            },
            "twok-bnb-fegexlp":{
                state: false,
            },
            "twok-busd-apelp":{
                state: false,
            },
            "charts":{
                state: false,
            },
            "information":{
                state: false,
            },
            "dxminformation":{
                state: false,
            },
            "partnerships":{
                state: false,
            },
            "moontimer":{
                state: false,
            },
            "cesspool":{
                state: false,
            },
            "confirmation":{
                state: false,
            },
            "approve":{
                state: false,
            },
             "trigger":{
                state: false,
            },
            "active-session":{
                state: false,
            },
            "input-error":{
                state: false,
            },
            "tx-message":{
                state: false,
            },
            "connect-wallet-popup": {
                state: false,
            }
        }
    }),
    components: {
        Approve,
        Charts,
        dxminformation,
        partnerships,
        moontimer,
        cesspool,
        cess4cess,
        cesslp,
        cess4dxm,
        dxm4cess,
        Confirmation,
        twokVault,
        dxmBnbLp,
        twokBnbLp,
        twokUsdApeLp,
        twokfBnbfegLp,
        vault, 
        charityfunding,
        dxmswaptwok, 
        information, 
        about, 
        welcome, 
        tradingVideo,
        folderView, 
        mainView, 
        trigger,
        activeSession,
        inputErrorPage,
        txPage,
        connectToWallet
    },
    methods: {        
        closeFolder(key){
            this.content[key].state = false;
        },
        openFolder( key ){

            if( key == "dxm-bnb-lp" ) {
                if ( this.interval != 0 ) {      
                    clearInterval( this.interval )
                }

                if ( this.$store.state.accountAddress != "" ) {
                    let web3 = this.$store.state.web3;

                    this.$store.commit("dxmBnbLp/setLockToken", web3);
                    this.$store.commit("dxmBnbLp/setVault", web3);

                    this.$store.dispatch("dxmBnbLp/getAccountBalance");
                    this.$store.dispatch("dxmBnbLp/getCurrentlyStaked");
                    this.$store.dispatch("dxmBnbLp/getEarnings");

                    this.$store.commit("dxmBnbLp/setCheckBalances", true);

                    this.interval = setInterval(() => {
                        if ( this.$store.state.dxmBnbLp.checkBalances ) {
                            this.accountBalance = this.$store.state.dxmBnbLp.accountBalance;
                            this.currentlyStaked = this.$store.state.dxmBnbLp.currentlyStaked;
                            this.availableEarnings = this.$store.state.dxmBnbLp.availableEarnings;

                            if ( this.availableEarnings != null ) {
                                this.$store.commit("dxmBnbLp/setCheckBalances", false)
                                this.$store.commit("dxmBnbLp/setAvailableEarnings", null)
                            }
                        }
                    }, 1000);
                }
                else {
                    this.connectToWallet();

                    this.$store.commit("dxmBnbLp/setCheckBalances", true);

                    this.interval = setInterval(() => {
                            if ( this.$store.state.accountAddress != "" ) {
                                let web3 = this.$store.state.web3;

                                if( web3 ) {
                                    this.$store.commit("dxmBnbLp/setLockToken", web3);
                                    this.$store.commit("dxmBnbLp/setVault", web3);
                                }

                                this.$store.dispatch("dxmBnbLp/getAccountBalance");
                                this.$store.dispatch("dxmBnbLp/getCurrentlyStaked");
                                this.$store.dispatch("dxmBnbLp/getEarnings");
                            }

                        if ( this.$store.state.dxmBnbLp.checkBalances ) {
                            this.accountBalance = this.$store.state.dxmBnbLp.accountBalance;
                            this.currentlyStaked = this.$store.state.dxmBnbLp.currentlyStaked;
                            this.availableEarnings = this.$store.state.dxmBnbLp.availableEarnings;

                            if ( this.availableEarnings != null ) {
                                this.$store.commit("dxmBnbLp/setCheckBalances", false)
                                this.$store.commit("dxmBnbLp/setAvailableEarnings", null)
                            }
                        }             
                    }, 1000);
                }
            }

            if( key == "cess-lp" ) {
                if ( this.interval != 0 ) {      
                    clearInterval( this.interval )
                }

                if ( this.$store.state.accountAddress != "" ) {
                    let web3 = this.$store.state.web3;

                    this.$store.commit("cesslp/setLockToken", web3);
                    this.$store.commit("cesslp/setVault", web3);

                    this.$store.dispatch("cesslp/getAccountBalance");
                    this.$store.dispatch("cesslp/getCurrentlyStaked");
                    this.$store.dispatch("cesslp/getEarnings");

                    this.$store.commit("cesslp/setCheckBalances", true);

                    this.interval = setInterval(() => {
                        if ( this.$store.state.cesslp.checkBalances ) {
                            this.accountBalance = this.$store.state.cesslp.accountBalance;
                            this.currentlyStaked = this.$store.state.cesslp.currentlyStaked;
                            this.availableEarnings = this.$store.state.cesslp.availableEarnings;

                            if ( this.availableEarnings != null ) {
                                this.$store.commit("cesslp/setCheckBalances", false)
                                this.$store.commit("cesslp/setAvailableEarnings", null)
                            }
                        }
                    }, 1000);
                }
                else {
                    this.connectToWallet();

                    this.$store.commit("cesslp/setCheckBalances", true);

                    this.interval = setInterval(() => {
                            if ( this.$store.state.accountAddress != "" ) {
                                let web3 = this.$store.state.web3;

                                if( web3 ) {
                                    this.$store.commit("cesslp/setLockToken", web3);
                                    this.$store.commit("cesslp/setVault", web3);
                                }

                                this.$store.dispatch("cesslp/getAccountBalance");
                                this.$store.dispatch("cesslp/getCurrentlyStaked");
                                this.$store.dispatch("cesslp/getEarnings");
                            }

                        if ( this.$store.state.cesslp.checkBalances ) {
                            this.accountBalance = this.$store.state.cesslp.accountBalance;
                            this.currentlyStaked = this.$store.state.cesslp.currentlyStaked;
                            this.availableEarnings = this.$store.state.cesslp.availableEarnings;

                            if ( this.availableEarnings != null ) {
                                this.$store.commit("cesslp/setCheckBalances", false)
                                this.$store.commit("cesslp/setAvailableEarnings", null)
                            }
                        }             
                    }, 1000);
                }
            }

            if( key == "cess-dxm" ) {
                if ( this.interval != 0 ) {      
                    clearInterval( this.interval )
                }

                if ( this.$store.state.accountAddress != "" ) {
                    let web3 = this.$store.state.web3;

                    this.$store.commit("cess4dxm/setLockToken", web3);
                    this.$store.commit("cess4dxm/setVault", web3);

                    this.$store.dispatch("cess4dxm/getAccountBalance");
                    this.$store.dispatch("cess4dxm/getCurrentlyStaked");
                    this.$store.dispatch("cess4dxm/getEarnings");

                    this.$store.commit("cess4dxm/setCheckBalances", true);

                    this.interval = setInterval(() => {
                        if ( this.$store.state.cess4dxm.checkBalances ) {
                            this.accountBalance = this.$store.state.cess4dxm.accountBalance;
                            this.currentlyStaked = this.$store.state.cess4dxm.currentlyStaked;
                            this.availableEarnings = this.$store.state.cess4dxm.availableEarnings;

                            if ( this.availableEarnings != null ) {
                                this.$store.commit("cess4dxm/setCheckBalances", false)
                                this.$store.commit("cess4dxm/setAvailableEarnings", null)
                            }
                        }
                    }, 1000);
                }
                else {
                    this.connectToWallet();

                    this.$store.commit("cess4dxm/setCheckBalances", true);

                    this.interval = setInterval(() => {
                            if ( this.$store.state.accountAddress != "" ) {
                                let web3 = this.$store.state.web3;

                                if( web3 ) {
                                    this.$store.commit("cess4dxm/setLockToken", web3);
                                    this.$store.commit("cess4dxm/setVault", web3);
                                }

                                this.$store.dispatch("cess4dxm/getAccountBalance");
                                this.$store.dispatch("cess4dxm/getCurrentlyStaked");
                                this.$store.dispatch("cess4dxm/getEarnings");
                            }

                        if ( this.$store.state.cess4dxm.checkBalances ) {
                            this.accountBalance = this.$store.state.cess4dxm.accountBalance;
                            this.currentlyStaked = this.$store.state.cess4dxm.currentlyStaked;
                            this.availableEarnings = this.$store.state.cess4dxm.availableEarnings;

                            if ( this.availableEarnings != null ) {
                                this.$store.commit("cess4dxm/setCheckBalances", false)
                                this.$store.commit("cess4dxm/setAvailableEarnings", null)
                            }
                        }             
                    }, 1000);
                }
            }

            if( key == "dxm-cess" ) {
                if ( this.interval != 0 ) {      
                    clearInterval( this.interval )
                }

                if ( this.$store.state.accountAddress != "" ) {
                    let web3 = this.$store.state.web3;

                    this.$store.commit("dxm4cess/setLockToken", web3);
                    this.$store.commit("dxm4cess/setVault", web3);

                    this.$store.dispatch("dxm4cess/getAccountBalance");
                    this.$store.dispatch("dxm4cess/getCurrentlyStaked");
                    this.$store.dispatch("dxm4cess/getEarnings");

                    this.$store.commit("dxm4cess/setCheckBalances", true);

                    this.interval = setInterval(() => {
                        if ( this.$store.state.dxm4cess.checkBalances ) {
                            this.accountBalance = this.$store.state.dxm4cess.accountBalance;
                            this.currentlyStaked = this.$store.state.dxm4cess.currentlyStaked;
                            this.availableEarnings = this.$store.state.dxm4cess.availableEarnings;

                            if ( this.availableEarnings != null ) {
                                this.$store.commit("dxm4cess/setCheckBalances", false)
                                this.$store.commit("dxm4cess/setAvailableEarnings", null)
                            }
                        }
                    }, 1000);
                }
                else {
                    this.connectToWallet();

                    this.$store.commit("dxm4cess/setCheckBalances", true);

                    this.interval = setInterval(() => {
                            if ( this.$store.state.accountAddress != "" ) {
                                let web3 = this.$store.state.web3;

                                if( web3 ) {
                                    this.$store.commit("dxm4cess/setLockToken", web3);
                                    this.$store.commit("dxm4cess/setVault", web3);
                                }

                                this.$store.dispatch("dxm4cess/getAccountBalance");
                                this.$store.dispatch("dxm4cess/getCurrentlyStaked");
                                this.$store.dispatch("dxm4cess/getEarnings");
                            }

                        if ( this.$store.state.dxm4cess.checkBalances ) {
                            this.accountBalance = this.$store.state.dxm4cess.accountBalance;
                            this.currentlyStaked = this.$store.state.dxm4cess.currentlyStaked;
                            this.availableEarnings = this.$store.state.dxm4cess.availableEarnings;

                            if ( this.availableEarnings != null ) {
                                this.$store.commit("dxm4cess/setCheckBalances", false)
                                this.$store.commit("dxm4cess/setAvailableEarnings", null)
                            }
                        }             
                    }, 1000);
                }
            }

            if( key == "cess-cess" ) {
                if ( this.interval != 0 ) {      
                    clearInterval( this.interval )
                }

                if ( this.$store.state.accountAddress != "" ) {
                    let web3 = this.$store.state.web3;

                    this.$store.commit("cess4cess/setLockToken", web3);
                    this.$store.commit("cess4cess/setVault", web3);

                    this.$store.dispatch("cess4cess/getAccountBalance");
                    this.$store.dispatch("cess4cess/getCurrentlyStaked");
                    this.$store.dispatch("cess4cess/getEarnings");

                    this.$store.commit("cess4cess/setCheckBalances", true);

                    this.interval = setInterval(() => {
                        if ( this.$store.state.cess4cess.checkBalances ) {
                            this.accountBalance = this.$store.state.cess4cess.accountBalance;
                            this.currentlyStaked = this.$store.state.cess4cess.currentlyStaked;
                            this.availableEarnings = this.$store.state.cess4cess.availableEarnings;

                            if ( this.availableEarnings != null ) {
                                this.$store.commit("cess4cess/setCheckBalances", false)
                                this.$store.commit("cess4cess/setAvailableEarnings", null)
                            }
                        }
                    }, 1000);
                }
                else {
                    this.connectToWallet();

                    this.$store.commit("cess4cess/setCheckBalances", true);

                    this.interval = setInterval(() => {
                            if ( this.$store.state.accountAddress != "" ) {
                                let web3 = this.$store.state.web3;

                                if( web3 ) {
                                    this.$store.commit("cess4cess/setLockToken", web3);
                                    this.$store.commit("cess4cess/setVault", web3);
                                }

                                this.$store.dispatch("cess4cess/getAccountBalance");
                                this.$store.dispatch("cess4cess/getCurrentlyStaked");
                                this.$store.dispatch("cess4cess/getEarnings");
                            }

                        if ( this.$store.state.cess4cess.checkBalances ) {
                            this.accountBalance = this.$store.state.cess4cess.accountBalance;
                            this.currentlyStaked = this.$store.state.cess4cess.currentlyStaked;
                            this.availableEarnings = this.$store.state.cess4cess.availableEarnings;

                            if ( this.availableEarnings != null ) {
                                this.$store.commit("cess4cess/setCheckBalances", false)
                                this.$store.commit("cess4cess/setAvailableEarnings", null)
                            }
                        }             
                    }, 1000);
                }
            }

            if( key == "twok-bnb-lp" ) {
                if ( this.interval != 0 ) {        
                    clearInterval( this.interval )
                }

                if ( this.$store.state.accountAddress != "" ) {
                    let web3 = this.$store.state.web3;

                    this.$store.commit("twokBnbLp/setLockToken", web3);
                    this.$store.commit("twokBnbLp/setVault", web3);

                    this.$store.dispatch("twokBnbLp/getAccountBalance");
                    this.$store.dispatch("twokBnbLp/getCurrentlyStaked");
                    this.$store.dispatch("twokBnbLp/getEarnings");

                    this.$store.commit("twokBnbLp/setCheckBalances", true);

                    this.interval =  setInterval(() => {
                        if ( this.$store.state.twokBnbLp.checkBalances ) {
                            this.accountBalance = this.$store.state.twokBnbLp.accountBalance;
                            this.currentlyStaked = this.$store.state.twokBnbLp.currentlyStaked;
                            this.availableEarnings = this.$store.state.twokBnbLp.availableEarnings;

                            if ( this.availableEarnings != null ) {
                                this.$store.commit("twokBnbLp/setCheckBalances", false)
                            }
                        }
                    }, 1000);
                }
                else {
                    this.connectToWallet();

                    this.$store.commit("twokBnbLp/setCheckBalances", true)

                    this.interval = setInterval(() => {
                        if ( this.$store.state.accountAddress != "" ) {
                            let web3 = this.$store.state.web3;

                            if( web3 ) {
                                this.$store.commit("twokBnbLp/setLockToken", web3);
                                this.$store.commit("twokBnbLp/setVault", web3);
                            }

                            this.$store.dispatch("twokBnbLp/getAccountBalance");
                            this.$store.dispatch("twokBnbLp/getCurrentlyStaked");
                            this.$store.dispatch("twokBnbLp/getEarnings");
                        }

                        if ( this.$store.state.twokBnbLp.checkBalances ) {
                            this.accountBalance = this.$store.state.twokBnbLp.accountBalance;
                            this.currentlyStaked = this.$store.state.twokBnbLp.currentlyStaked;
                            this.availableEarnings = this.$store.state.twokBnbLp.availableEarnings;

                            if ( this.availableEarnings != null ) {
                                this.$store.commit("twokBnbLp/setCheckBalances", false)
                            }
                        }
                    }, 1000);
                }
            }

            if( key == "twok-busd-apelp" ) {
                if ( this.interval != 0 ) {      
                    clearInterval( this.interval )
                }

                if ( this.$store.state.accountAddress != "" ) {
                    let web3 = this.$store.state.web3;

                    this.$store.commit("twokUsdApeLp/setLockToken", web3);
                    this.$store.commit("twokUsdApeLp/setVault", web3);

                    this.$store.dispatch("twokUsdApeLp/getAccountBalance");
                    this.$store.dispatch("twokUsdApeLp/getCurrentlyStaked");
                    this.$store.dispatch("twokUsdApeLp/getEarnings");

                    this.$store.commit("twokUsdApeLp/setCheckBalances", true);

                    this.interval = setInterval(() => {
                        if ( this.$store.state.twokUsdApeLp.checkBalances ) {
                            this.accountBalance = this.$store.state.twokUsdApeLp.accountBalance;
                            this.currentlyStaked = this.$store.state.twokUsdApeLp.currentlyStaked;
                            this.availableEarnings = this.$store.state.twokUsdApeLp.availableEarnings;

                            if ( this.availableEarnings != null ) {
                                this.$store.commit("twokUsdApeLp/setCheckBalances", false)
                                this.$store.commit("twokUsdApeLp/setAvailableEarnings", null)
                            }
                        }
                    }, 1000);
                }
                else {
                    this.connectToWallet();

                    this.$store.commit("twokUsdApeLp/setCheckBalances", true);

                    this.interval = setInterval(() => {
                            if ( this.$store.state.accountAddress != "" ) {
                                let web3 = this.$store.state.web3;

                                if( web3 ) {
                                    this.$store.commit("twokUsdApeLp/setLockToken", web3);
                                    this.$store.commit("twokUsdApeLp/setVault", web3);
                                }

                                this.$store.dispatch("twokUsdApeLp/getAccountBalance");
                                this.$store.dispatch("twokUsdApeLp/getCurrentlyStaked");
                                this.$store.dispatch("twokUsdApeLp/getEarnings");
                            }

                        if ( this.$store.state.twokUsdApeLp.checkBalances ) {
                            this.accountBalance = this.$store.state.twokUsdApeLp.accountBalance;
                            this.currentlyStaked = this.$store.state.twokUsdApeLp.currentlyStaked;
                            this.availableEarnings = this.$store.state.twokUsdApeLp.availableEarnings;

                            if ( this.availableEarnings != null ) {
                                this.$store.commit("twokUsdApeLp/setCheckBalances", false)
                                this.$store.commit("twokUsdApeLp/setAvailableEarnings", null)
                            }
                        }             
                    }, 1000);
                }
            }

            if( key == "twok-bnb-fegexlp" ) {
                if ( this.interval != 0 ) {      
                    clearInterval( this.interval )
                }

                if ( this.$store.state.accountAddress != "" ) {
                    let web3 = this.$store.state.web3;

                    this.$store.commit("twokfBnbfegLp/setLockToken", web3);
                    this.$store.commit("twokfBnbfegLp/setVault", web3);
                    
                    this.$store.dispatch("twokfBnbfegLp/getAccountBalance");
                    this.$store.dispatch("twokfBnbfegLp/getCurrentlyStaked");
                    this.$store.dispatch("twokfBnbfegLp/getEarnings");

                    this.$store.commit("twokfBnbfegLp/setCheckBalances", true);

                    this.interval = setInterval(() => {
                        if ( this.$store.state.twokfBnbfegLp.checkBalances ) {
                            this.accountBalance = this.$store.state.twokfBnbfegLp.accountBalance;
                            this.currentlyStaked = this.$store.state.twokfBnbfegLp.currentlyStaked;
                            this.availableEarnings = this.$store.state.twokfBnbfegLp.availableEarnings;

                            if ( this.availableEarnings != null ) {
                                this.$store.commit("twokfBnbfegLp/setCheckBalances", false)
                                this.$store.commit("twokfBnbfegLp/setAvailableEarnings", null)
                            }
                        }
                    }, 1000);
                }
                else {
                    this.connectToWallet();

                    this.$store.commit("twokfBnbfegLp/setCheckBalances", true);

                    this.interval = setInterval(() => {
                        if ( this.$store.state.accountAddress != "" ) {
                            let web3 = this.$store.state.web3;

                            if( web3 ) {
                                this.$store.commit("twokfBnbfegLp/setLockToken", web3);
                                this.$store.commit("twokfBnbfegLp/setVault", web3);
                            }

                            this.$store.dispatch("twokfBnbfegLp/getAccountBalance");
                            this.$store.dispatch("twokfBnbfegLp/getCurrentlyStaked");
                            this.$store.dispatch("twokfBnbfegLp/getEarnings");
                        }
                        
                        if ( this.$store.state.twokfBnbfegLp.checkBalances ) {
                            this.accountBalance = this.$store.state.twokfBnbfegLp.accountBalance;
                            this.currentlyStaked = this.$store.state.twokfBnbfegLp.currentlyStaked;
                            this.availableEarnings = this.$store.state.twokfBnbfegLp.availableEarnings;

                            if ( this.availableEarnings != null ) {
                                this.$store.commit("twokfBnbfegLp/setCheckBalances", false)
                                this.$store.commit("twokfBnbfegLp/setAvailableEarnings", null)
                            }
                        }
                    }, 1000);
                }
            }


            if( key == "twok-vault" ) {
                if ( this.interval != 0 ) {      
                    clearInterval( this.interval )
                }

                if ( this.$store.state.accountAddress != "" ) {
                    let web3 = this.$store.state.web3;

                    this.$store.commit("twokVault/setLockToken", web3);
                    this.$store.commit("twokVault/setVault", web3);

                    this.$store.dispatch("twokVault/getAccountBalance");
                    this.$store.dispatch("twokVault/getCurrentlyStaked");
                    this.$store.dispatch("twokVault/getEarnings");

                    this.$store.commit("twokVault/setCheckBalances", true);
    
                    this.interval = setInterval(() => {
                        if ( this.$store.state.twokVault.checkBalances ) {
                            this.accountBalance = this.$store.state.twokVault.accountBalance;
                            this.currentlyStaked = this.$store.state.twokVault.currentlyStaked;
                            this.availableEarnings = this.$store.state.twokVault.availableEarnings;

                            if ( this.availableEarnings != null ) {
                                this.$store.commit("twokVault/setCheckBalances", false)
                            }
                        }
                    }, 1000);
                }
                else {
                    this.connectToWallet();

                    this.$store.commit("twokVault/setCheckBalances", true);

                    this.interval = setInterval(() => {
                        if ( this.$store.state.accountAddress != "" ) {
                            let web3 = this.$store.state.web3;

                            if( web3 ) {
                                this.$store.commit("twokVault/setLockToken", web3);
                                this.$store.commit("twokVault/setVault", web3);
                            }

                            this.$store.dispatch("twokVault/getAccountBalance");
                            this.$store.dispatch("twokVault/getCurrentlyStaked");
                            this.$store.dispatch("twokVault/getEarnings");
                        }

                        if ( this.$store.state.twokVault.checkBalances ) {
                            this.accountBalance = this.$store.state.twokVault.accountBalance;
                            this.currentlyStaked = this.$store.state.twokVault.currentlyStaked;
                            this.availableEarnings = this.$store.state.twokVault.availableEarnings;

                            if ( this.availableEarnings != null ) {
                                this.$store.commit("twokVault/setCheckBalances", false)
                            }
                        }
                    }, 1000);
                }

            }

            if ( key == "input-error" ) {
                this.errorMessage = this.$store.state.errorMessage;
                console.log(this.errorMessage);
            }

            for( let i in this.content ){
                this.content[i].state = false;
            }

            if ( key == "tx-message" ) {
                this.content[this.prevKey].state = true;
                this.txMessage = this.$store.state.tx;
            }

            this.transactionLink = this.$store.state.transactionLink;
            
            if ( key == "confirmation" ) {
                this.$store.commit( "setTempVariable", true );
        
                setTimeout(() => {
                    if ( this.$store.state.tempVariable ) {
                        this.$store.commit( "setTransactionLink", true );
                        this.$store.commit( "setTempVariable", false );
                        this.transactionLink = this.$store.state.transactionLink;
                        this.txMessage = this.$store.state.tx;
                    }
                }, 10010);
            }
            this.content[key].state = true;

            if ( key == "approve" ) {
                this.content[this.prevKey].state = true; 

                this.$store.commit( "setTempVariable", true );
        
                setTimeout(() => {
                    if ( this.$store.state.tempVariable ) {
                        this.$store.commit( "setTransactionLink", true );
                        this.$store.commit( "setTempVariable", false );
                        this.transactionLink = this.$store.state.transactionLink;
                        this.txMessage = this.$store.state.tx;
                    }
                }, 10010);
            }

             if ( !( key == "input-error" || key == "tx-message" || key == "approve" || key == "confirmation" || key == "connect-wallet-popup" ) ) {
                this.prevKey = key;
            }

        },
        openMainView(key) {
            for(let i in this.content){
                this.content[i].state = false;
            }
            this.content[key].state = true;
        },
        connectToWallet() {
            this.connectToWalltMessage = "Please connect to wallet";
            setTimeout(() => {
                this.openFolder( "connect-wallet-popup" )
                this.content[this.prevKey].state = true;
            }, 500);
        },
        msToHMS( duration ) {
            let seconds = parseInt((duration / 1000) % 60),
            minutes = parseInt((duration / (1000 * 60)) % 60),
            hours = parseInt((duration / (1000 * 60 * 60)) % 24);

            hours = (hours < 10) ? "0" + hours : hours;
            minutes = (minutes < 10) ? "0" + minutes : minutes;
            seconds = (seconds < 10) ? "0" + seconds : seconds;

            return hours + ":" + minutes + ":" + seconds ;
}
    }
}
</script>

<style scoped>
</style>
