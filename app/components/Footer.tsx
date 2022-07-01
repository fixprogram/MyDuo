import { FooterLine, FooterText, LinkWithHover } from "./lib";

export default function Footer() {
  return (
    <footer>
      <FooterLine />
      <div style={{ paddingBottom: 28 }}>
        <FooterText>
          Inspired by{" "}
          <LinkWithHover href="https://www.duolingo.com" target="_blank">
            Duolingo
          </LinkWithHover>
        </FooterText>
      </div>
    </footer>
  );
}
