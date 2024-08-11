"use client";

import { useFormState } from "react-dom";
import React from "react";
import FormButton from "../UX/Button/form-button";
import styles from "./conta-form-postar-foto.module.css";
import Input from "../UX/Input";
import ErrorMessage from "../Helper/error-message";
import photoPost from "@/actions/photo-post";

export default function ContaPhotoPost() {
  const [state, action] = useFormState(photoPost, {
    ok: false,
    error: "",
    data: null,
  });

  const [img, setImg] = React.useState("");
  function handleImgChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    if (target?.files) {
      setImg(URL.createObjectURL(target.files[0]));
    }
  }

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <form action={action}>
        <Input label="Nome" name="nome" type="text" />
        <Input label="Peso" name="peso" type="number" />
        <Input label="Idade" name="idade" type="number" />
        <input
          onChange={handleImgChange}
          type="file"
          name="img"
          id="img"
          className={styles.file}
        />
        <ErrorMessage error={state.error} />
        <FormButton text={"Postar"} loading={"Postando..."} />
      </form>
      <div>
        <div
          className={styles.preview}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      </div>
    </section>
  );
}
