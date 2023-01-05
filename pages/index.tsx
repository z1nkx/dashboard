import type { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      {/* Top Section */}
      <h1 className={styles.h1}>Z1 Dashboard</h1>
      <div className={styles.nftBoxGrid}>
        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push(`/mint`)}
        >
          {/* Mint a new NFT */}
            
            <h2 className={styles.selectBoxTitle}>Mint with Z1</h2>
            <p className={styles.selectBoxDescription}>
              44Z1 (currently closed)
            </p>
        </div>

        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push(`/stake`)}
        >
          {/* Staking an NFT */}
        
          <h2 className={styles.selectBoxTitle}>Dashboard</h2>
          <p className={styles.selectBoxDescription}>
            
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
