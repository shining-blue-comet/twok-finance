import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";

// Create a connector
var connector = new WalletConnect({
  bridge: "https://bridge.walletconnect.org", // Required
  qrcodeModal: QRCodeModal,
});

// Check if connection is already established
// if (!connector.connected) {
//   // create new session
//   connector.createSession();
// }

// Subscribe to connection events
connector.on("connect", (error, payload) => {
  if (error) {
    alert(error.message);
    throw error;
  }
  else {
      console.log(payload);
  }

  // Get provided accounts and chainId
//   const { accounts, chainId } = payload.params[0];
});

connector.on("session_update", (error, payload) => {
  if (error) {
    throw error;
  }
  else {
      console.log(payload);
  }
  // Get updated accounts and chainId
//   const { accounts, chainId } = payload.params[0];
});

connector.on("disconnect", (error, /* payload */) => {
  if (error) {
    throw error;
  }

  connector = "";
});

export default connector;