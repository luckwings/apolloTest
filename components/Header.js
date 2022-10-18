import Link from "next/link";
import styled from "styled-components";
import Nav from "./Nav";
import Image from "next/image";
import HeaderStyles from "./styles/HeaderStyles";
import LogoStyles from "./styles/LogoStyles";
import Sidebar from "./Sidebar";

export default function Header() {
  return (
    <HeaderStyles>
      <div className="bar">
        <LogoStyles>
          <Link href="/">Home</Link>
        </LogoStyles>
        <Nav />
      </div>

      {/* future state search bar
      <div className="sub-bar">
        <p>Search</p>
      </div>
      */}
      <Sidebar/>
    </HeaderStyles>
  );
}
