"use client";

import styles from "./conta-header.module.css";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import useMedia from "@/hooks/use-media";
import FeedIcon from "@/icons/feed-icon";
import EstatisticasIcon from "@/icons/estatisticas-icon";
import AdicionarIcon from "@/icons/adicionar-icon";
import SairIcon from "@/icons/sair-icon";
import getTitle from "@/functions/get-page-title";
import logout from "@/actions/logout";
import { useUser } from "@/context/user-context";

export default function ContaHeader() {
  const mobile = useMedia("(max-width: 40rem)");
  const [mobileMenu, setMobileMenu] = useState(false);
  const { setUserState } = useUser();

  const pathname = usePathname();
  useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  async function handleLogout() {
    await logout();
    setUserState(null);
    // window.location.href = "/login";
  }

  return (
    <header className={styles.header}>
      <h1 className="title">{getTitle(pathname)}</h1>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}

      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <Link href="/conta" className={pathname === "/conta" ? "active" : ""}>
          <FeedIcon />
          {mobile && "Minhas Fotos"}
        </Link>
        <Link
          href="/conta/estatisticas"
          className={pathname === "/conta/estatisticas" ? "active" : ""}
        >
          <EstatisticasIcon />
          {mobile && "Estatísticas"}
        </Link>
        <Link
          href="/conta/postar"
          className={pathname === "/conta/postar" ? "active" : ""}
        >
          <AdicionarIcon />
          {mobile && "Adicionar Foto"}
        </Link>
        <button onClick={handleLogout}>
          <SairIcon />
          {mobile && "Sair"}
        </button>
      </nav>
    </header>
  );
}
