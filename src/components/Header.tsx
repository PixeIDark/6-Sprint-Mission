import pandaLogoIcon from "@/assets/icons/panda-logo.svg";
import { hstack } from "@/styled-system/patterns";
import { css } from "@/styled-system/css";
import {
  headerContainer,
  headerTitle,
  navContainer,
  navTextIsActive,
} from "@/css/common/header.styled";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { buttonRecipe } from "@/css/recipe/buttonRecipe.styled";

function Header() {
  const router = useRouter();

  return (
    <div className={headerContainer}>
      <Link href="./" className={hstack()}>
        <Image
          src={pandaLogoIcon}
          alt="판다얼굴 로고"
          className={css({ display: { base: "none", md: "block" } })}
        />
        <p className={headerTitle}>판다마켓</p>
      </Link>
      <div className={navContainer}>
        <Link
          href="./boards"
          className={navTextIsActive(router.pathname === "/boards")}
        >
          자유게시판
        </Link>
        <Link
          href="./items"
          className={navTextIsActive(router.pathname === "/items")}
        >
          중고마켓
        </Link>
      </div>
      <Link href="./signin" className={buttonRecipe()}>
        로그인
      </Link>
    </div>
  );
}

export default Header;
