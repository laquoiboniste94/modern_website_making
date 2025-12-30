"use client";

import styles from '../ContactForm/contactform.module.css';
import { createContactData } from '@/app/_actions/contact';
import { useFormState } from 'react-dom';
import Link from 'next/link';

const initalState = {
    status: "",
    message: "",
};


export default function ContactForm() {

    const [ state, formAction] = useFormState(createContactData, initalState);
    console.log(state);
    if(state.status === "success"){
        return (
            <div>
                <p className={styles.success}>
                    お問い合わせいただき、ありがとうございます。
                <br />
                    お返事まで今しばらくお待ちください。
                </p>
                <Link href="/" className={styles.backButton}>
                トップページに戻る
                </Link>
            </div>
        );
    }
    return (
        <form className={styles.form} action={formAction}> {/* 問い合わせフォーム全体のレイアウト担当*/}
            <div className={styles.horizontal}> {/* 姓と名の２つのフォームのレイアウト担当*/}
                <div className={styles.item}> {/* 姓のフォームのレイアウト担当*/}
                    <label className={styles.label}> {/* 姓のフォームのスタイル担当*/}
                        姓
                    </label>
                    <input  className={styles.textfield} type='text' id='lastname' name='lastname' />
                    {/* 入力フォームのスタイル担当 */}
                </div>
                <div className={styles.item}> {/* 名のフォームのレイアウト担当*/}
                    <label className={styles.label}> {/* 名のフォームのスタイル担当*/}
                        名
                    </label>
                    <input  className={styles.textfield} type='text' id='firstname' name='firstname' />
                    {/* 入力フォームのスタイル担当 */}
                </div>
            </div>
            <div className={styles.item}> {/* 会社名のフォームのレイアウト担当*/}
                <label className={styles.label}> {/* 会社名のフォームのスタイル担当*/}
                        会社名
                </label>
                <input  className={styles.textfield} type='text' id='company' name='company' />
                {/* 入力フォームのスタイル担当 */}
            </div>
            <div className={styles.item}> {/* メアドのフォームのレイアウト担当*/}
                <label className={styles.label}> {/* メアドのフォームのスタイル担当*/}
                        メールアドレス
                </label>
                <input  className={styles.textfield} type='text' id='email' name='email' />
                {/* 入力フォームのスタイル担当 */}
            </div>
            <div className={styles.item}> {/* メッセージのフォームのレイアウト担当*/}
                <label className={styles.label}> {/* メッセージのフォームのスタイル担当*/}
                        メッセージ
                </label>
                <textarea  className={styles.textfield} id='message' name='message' />
                {/* 入力フォームのスタイル担当 */}
            </div>
            <div className={styles.actions}>
                {state.status === "error" && (
                    <p className={styles.error}>{state.message}</p>
                )}
                <input type="submit" value="送信" className={styles.button} />
            </div>
        </form>
    );
}