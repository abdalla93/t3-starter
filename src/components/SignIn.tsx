import React, { useState } from "react";
import { type NextComponentType } from "next";
import { DevTool } from "@hookform/devtools";
import Link from "next/link";
import { useForm, type SubmitHandler } from "react-hook-form";
import styles from "../styles/Form.module.css";
import Image from "next/image";
import { HiAtSymbol, HiFingerPrint } from "react-icons/hi";

interface IFormInput {
  email: string;
  password: string;
}
const SignIn: NextComponentType = () => {
  const { register, control, handleSubmit } = useForm<IFormInput>({
    mode: "onChange",
  });
  const [show, setShow] = useState(false);
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log("Form Submite", data);
  };
  return (
    <section className="mx-auto flex w-3/4 flex-col gap-10">
      <div className="title">
        <h1 className="text-gra-800 py-4 text-4xl font-bold">Explore</h1>
        <p className="mx-auto w-3/4 text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          tenetur vitae neque, libero quas ipsa? Eveniet debitis odit voluptatem
          adipisci veritatis odio illum facere dolorem tenetur voluptatibus
          sapiente, mollitia assumenda!
        </p>
      </div>
      <form
        className="flex flex-col gap-5"
        onSubmit={void handleSubmit(onSubmit)}
      >
        <div className={styles.input_group}>
          <input
            {...register("email")}
            placeholder="Email"
            className={styles.input_text}
          />
          <span className="icon flex items-center px-4">
            <HiAtSymbol size={25} />
          </span>
        </div>
        <div className={styles.input_group}>
          <input
            type={`${show ? "text" : "password"}`}
            {...register("password")}
            placeholder="Password"
            className={styles.input_text}
          />
          <span
            className="icon flex items-center px-4"
            onClick={() => setShow(!show)}
          >
            <HiFingerPrint size={25} />
          </span>
        </div>
        <div className="input-button">
          <button type="submit" className={styles.button}>
            {" "}
            Login
          </button>
        </div>
        <div className="input-button">
          <button type="button" className={styles.button_custom}>
            Sign In with Google
            <Image
              src={"/assets/google.svg"}
              width="20"
              height="20"
              alt="google"
            ></Image>
          </button>
        </div>
      </form>
      <DevTool control={control} />

      <p className="text-center text-gray-400 ">
        don`t have an account yet?{" "}
        <Link href={"/register"} className="text-blue=-700">
          Sign Up
        </Link>
      </p>
    </section>
  );
};

export default SignIn;
