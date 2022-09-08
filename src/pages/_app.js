import { Modal } from "@redq/reuse-modal";
import Web3AutProvider from "common/components/ProviderFactory/components/Web3Provider";

export function reportWebVitals(metric) {
  // console.log(metric);
}

export default function CustomApp({ Component, pageProps }) {
  return (
    <Web3AutProvider>
      <Modal>
        <Component {...pageProps} />
      </Modal>
    </Web3AutProvider>
  );
}
