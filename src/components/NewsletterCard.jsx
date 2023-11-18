import React from "react";
import styles from "../Styles/NewsletterCard.module.scss";

export default function () {
    return (
        <>
            <div className={styles.card_container}>
                <div className={styles.footer_newsletter}>
                    <div className={styles.mb_sm_15}>
                        <div className={styles.title_block}>
                            <i className={styles.icon_news}> </i>
                            Sign Up For Newsletters

                        </div>
                    </div>
                    <div className={styles.section_content}>
                        <form action="">
                            <input  type="hidden" />
                            <input  type="hidden" />
                            <div className={styles.input_group}>
                                <input type="hidden"/>
                                <input className={styles.input_email} type="email" placeholder={"Enter your Email"}/>

                            <div className={styles.input_group_btn}>
                                <button className={styles.btn_newsletter_submit}>
                                    <span className={styles.newsletter_submit}> Suscribe</span>
                                </button>
                            </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </>
    )
}