import { Web3Button } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

const Mint: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Mint An NFT!</h1>

      <p className={styles.explain}>
       44z1
      </p>
      <hr className={`${styles.smallDivider} ${styles.detailPageHr}`} />

      <Web3Button
        colorMode="dark"
        accentColor="#5204BF"
        contractAddress="0xC2C717cAc3da3FFfc19E3F63A175Eb80A1Bd312d"
        action={(contract) => contract.erc721.claim(1)}
        onSuccess={() => {
          alert("NFT Minted!");
          router.push(`/stake`);
        }}
        onError={(error) => {
          console.error(error);
          alert(error);
        }}
      >
        Mint An NFT
      </Web3Button>
    </div>
  );
};

export default Mint;
