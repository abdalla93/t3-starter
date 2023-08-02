import React from "react";
import { type ReactNode } from "react";
import styles from "../styles/authCard.module.css";

const authCard = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-bluee-400 flex h-screen">
      <div className="m-auto grid h-3/4 w-3/5 rounded-md bg-slate-50 lg:grid-cols-2">
        <div className={styles.imgStyle}>
          <div className={styles.cartoonImg}></div>
          <div className={styles.cloud_one}>
            <div className={styles.cloud_two}></div>
          </div>
        </div>
        <div className="right flex flex-col justify-evenl">
          <div className="py-10 text-center">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default authCard;
