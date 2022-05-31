import { FooterLine, FooterText } from "./lib";

export default function Footer() {
  return (
    <footer>
      <FooterLine />
      <div style={{ paddingBottom: 28 }}>
        <FooterText>
          Inspired by{" "}
          <a href="https://www.duolingo.com" target="_blank">
            Duolingo
          </a>
        </FooterText>
      </div>
    </footer>
  );
}
