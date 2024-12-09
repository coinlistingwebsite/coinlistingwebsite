import { useEffect, useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const CryptoFeed = ({ symbol = "BTC" }) => {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const baseUrl = "https://widgets.cryptocompare.com/";
    const appName = encodeURIComponent(window.location.hostname) || "local";

    const darkTheme = {
      General: { background: "#333", borderColor: "#121212" },
      PoweredBy: { textColor: "#EEE", linkColor: "#ffcc66" },
      Data: { priceColor: "#FFF", infoValueColor: "#FFF", borderColor: "#333" },
      NewsItem: { color: "#FFF", borderColor: "#444" },
      Conversion: { background: "#000", color: "#CCC" },
    };

    const s = document.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    const theUrl = `${baseUrl}serve/v1/coin/feed?fsym=${symbol}&tsym=USD`;
    s.src = theUrl + (theUrl.indexOf("?") >= 0 ? "&" : "?") + "app=" + appName;

    if (theme !== "light") {
      s.src += "&theme=" + encodeURIComponent(JSON.stringify(darkTheme));
    }

    const container = document.createElement("div");
    container.className = "crypto-feed-wrapper";
    container.style.width = "100%";
    container.style.maxWidth = "100%";
    container.style.height = "400px";
    container.style.overflow = "hidden";

    document.getElementById("crypto-feed-container").appendChild(container);
    container.appendChild(s);

    return () => {
      if (container && container.parentNode) {
        container.parentNode.removeChild(container);
      }
    };
  }, [theme, symbol]);

  return (
    <div
      id="crypto-feed-container"
      className="w-full h-96 overflow-hidden border rounded-lg"
    />
  );
};

export default CryptoFeed;
