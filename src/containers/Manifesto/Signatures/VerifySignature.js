import { useWeb3React } from "@web3-react/core";
import { useEffect, useMemo, useRef, useState } from "react";
import AutLogo from "common/assets/image/aut-logo.svg";
import Image from "common/components/Image";
import debounce from "lodash.debounce";
import Text from "common/components/Text";
import Button from "common/components/Button";
import Alert from "common/components/Alert";
import styled from "styled-components";
import ModalPopupWrapper, {
  Loading,
} from "common/components/ModalPopupWrapper";
import { verifyTweetRequest } from "api/index.api";
import { Web3ManifestoProvider } from "@aut-labs-private/abi-types";
import { environment, getNetworkVariables } from "api/environment";
import { closeModal } from "@redq/reuse-modal";
import ConnectorBtn, { ConnectorTypes } from "common/ProviderFactory/components/ConnectorBtn";
import { NetworkSelectors } from "common/ProviderFactory/components/NetworkSelectors";
import Input from "common/components/Input";
import { EnableAndChangeNetwork } from "common/ProviderFactory/web3.network";

const Title = styled(Text)`
  letter-spacing: 3px,
  font-weight: bold;
  color: white;
  text-align: center;
  text-transform: uppercase;
  font-size: 1.563rem;
  margin-bottom: 1.563rem;
`;

const message = "I should own this tweet %40aut-labs";

const Subtitle = styled(Text)({
  letterSpacing: "1.25px",
  textAlign: "center",
  color: "white",
  fontSize: "1.125rem",
  textTransform: "uppercase",
});

const DialogInnerContent = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  flex: 1,
});

const AutInput = styled(Input)({
  marginBottom: "5rem",
  width: "25rem",
  input: {
    height: "3rem",
    background: "transparent",
    fontSize: "1.5rem",
    color: "white",
  },
});

const AutButton = styled(Button)({
  fontSize: "1.56rem",
  width: "16.25rem",
  height: "3.438rem",
  marginBottom: "10px",
  display: "flex",
  alignItems: "center",
  paddingLeft: "15px",
  ".btn-text": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    margin: 0,
  },
});

function truncate(input) {
  if (input.length > 120) {
    return input.substring(0, 120) + "...";
  }
  return input;
}

const VerifySignature = ({ onClose = () => false }) => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [networkConfig, setNetworkConfig] = useState();
  const [nftAddress, setNftAddress] = useState("");
  const { isActive, provider, account } = useWeb3React();
  const [signature, setSignature] = useState(null);
  const [tweetUrl, setTweetUrl] = useState("");
  const [tweetPosted, setTweetPosted] = useState(null);
  const [signed, setSigned] = useState(null);
  const [rejected, setRejected] = useState(null);
  const [wallet, setWallet] = useState(null);
  const input = useRef();
  const [connector, setConnector] = useState(null);

  const switchNetwork = async (chainId, index, name = null) => {
    if (!connector) {
      return;
    }
    setErrorMessage(null);
    setLoading(true);
    await connector.deactivate();
    const networkName = name || environment.networks.split(",")[index];
    await connector.activate(chainId);
    const config = getNetworkVariables(networkName);
    try {
      await EnableAndChangeNetwork(connector.provider, config);
      setNetworkConfig(config);
    } catch (error) {
      console.log(error, "err");
      setNetworkConfig(null);
    }
    setLoading(false);
  };

  const selectWallet = (c, w) => {
    setWallet(w);
    setConnector(c);
  };

  const postTweet = () => {
    window.open(
      `http://twitter.com/intent/tweet?text=${`${message}${signature}`.replace(
        "/s+/g",
        "%20"
      )}`,
      "_blank"
    );
    setTweetPosted(true);
  };

  const verifyTweet = async () => {
    try {
      setErrorMessage(null);
      setLoading(true);
      const tweetParts = tweetUrl.split("/");
      const tweetID = tweetParts[tweetParts.length - 1];
      await verifyTweetRequest(account, signature, tweetID);
      setLoading(false);
      setSigned(true);
    } catch (err) {
      setLoading(false);
      setErrorMessage(err?.message);
    }
  };

  const closeDialog = () => {
    closeModal();
    onClose();
  };

  const claim = async () => {
    setErrorMessage(null);
    const contract = await Web3ManifestoProvider(
      networkConfig.manifestoAddress,
      {
        signer: async () => provider.getSigner(),
      }
    );

    try {
      setLoading(true);
      const address = await contract.mint(1, {
        gasLimit: 2000000,
      });
      setNftAddress(address);
      setLoading(false);
    } catch (error) {
      setErrorMessage(error?.message);
      setLoading(false);
    }
  };

  const sign = async () => {
    setErrorMessage(null);
    setLoading(true);
    const contract = await Web3ManifestoProvider(
      networkConfig.manifestoAddress,
      {
        signer: async () => provider.getSigner(),
      }
    );

    let hasSigned = false;

    try {
      hasSigned = await contract.hasSigned(1, account);
      setSigned(hasSigned);
    } catch (error) {
      // setErrorMessage(error?.message);
    }

    if (!signature && !hasSigned) {
      try {
        setLoading(true);
        const res = await provider.provider.request({
          method: "personal_sign",
          params: [message, account],
        });
        setSignature(res);
        setLoading(false);
        setRejected(false);
      } catch (error) {
        setErrorMessage(error?.message);
        setRejected(true);
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  };

  const debouncedChangeHandler = useMemo(() => {
    const changeHandler = (e) => {
      setTweetUrl(e);
    };
    return debounce(changeHandler, 10);
  }, []);

  useEffect(() => {
    return () => debouncedChangeHandler.cancel();
  }, [debouncedChangeHandler, account]);

  useEffect(() => {
    if (!isActive || !networkConfig || signed || signature || loading) {
      return;
    }

    sign();
  }, [isActive, provider, signature, signed, account, loading, networkConfig]);

  return (
    <ModalPopupWrapper>
      <>
        <Image
          style={{ margin: "0 auto 1.56rem auto" }}
          src={AutLogo.src}
          width="80"
          height="80"
        />

        {!wallet && !signature ? (
          <>
            <Title content="Connect wallet" />
            <DialogInnerContent>
              <ConnectorBtn
                connectorType={ConnectorTypes.Metamask}
                setConnector={(c) => selectWallet(c, ConnectorTypes.Metamask)}
              />
              <ConnectorBtn
                connectorType={ConnectorTypes.WalletConnect}
                setConnector={(c) =>
                  selectWallet(c, ConnectorTypes.WalletConnect)
                }
              />
            </DialogInnerContent>
          </>
        ) : (
          <>
            {loading ? (
              <div
                style={{
                  position: "relative",
                }}
              >
                <Loading />
              </div>
            ) : (
              <>
                {!networkConfig && (
                  <DialogInnerContent>
                    <NetworkSelectors
                      onSelect={async (foundChainId, networkName) => {
                        switchNetwork(foundChainId, null, networkName);
                      }}
                    />
                  </DialogInnerContent>
                )}

                {networkConfig && rejected && (
                  <DialogInnerContent>
                    <AutButton onClick={() => sign()} title="Sign" />
                  </DialogInnerContent>
                )}

                {signature && networkConfig && !signed && !tweetPosted && (
                  <>
                    <Title content="Verify your Signature" />
                    <Subtitle
                      content="Tweet a message to prove that you control this address.
                      Return back to this page afterwards to complete
                      verification."
                    />
                    <DialogInnerContent>
                      <AutButton
                        onClick={() => postTweet()}
                        title="Post Proof on Twitter"
                      />
                    </DialogInnerContent>
                  </>
                )}
                {signature && networkConfig && !signed && tweetPosted && (
                  <>
                    <Title content="Verify your Tweet" />
                    <Subtitle content="Paste the URL of the tweet you just posted" />
                    <DialogInnerContent>
                      <AutInput
                        required
                        isMaterial
                        defaultValue={tweetUrl || ""}
                        disabled={loading}
                        placeholder="twitter.com/username/status/123456"
                        inputRef={input}
                        onChange={debouncedChangeHandler}
                      />
                      <AutButton onClick={() => verifyTweet()} title="Verify" />
                    </DialogInnerContent>
                  </>
                )}

                {networkConfig && signed && (
                  <>
                    <Title content="Thank you for signing the Manifesto" />
                    <Subtitle content="Now you can claim this chapter and collect it as an NFT" />
                    <DialogInnerContent>
                      {!nftAddress && (
                        <>
                          <AutButton
                            style={{
                              width: "22rem",
                            }}
                            onClick={() => claim()}
                            title="Claim Your NFT"
                          />
                          <AutButton
                            style={{
                              width: "22rem",
                            }}
                            onClick={() => closeDialog()}
                            title="Go back to the Manifesto"
                          />
                        </>
                      )}

                      {nftAddress && (
                        <>
                          <AutButton
                            style={{
                              width: "22rem",
                            }}
                            onClick={() => closeDialog()}
                            title="Go back to the Manifesto"
                          />

                          <AutButton
                            style={{
                              width: "22rem",
                            }}
                            onClick={() =>
                              window.open("https://opensea.io/", "_blank")
                            }
                            title="See your Chapter"
                          />
                        </>
                      )}
                    </DialogInnerContent>
                  </>
                )}
              </>
            )}

            {!loading && errorMessage && (
              <Alert color="red">{truncate(errorMessage)}</Alert>
            )}
          </>
        )}
      </>
    </ModalPopupWrapper>
  );
};

export default VerifySignature;
