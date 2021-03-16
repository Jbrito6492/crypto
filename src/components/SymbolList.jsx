import React from "react";

export default function SymbolList() {
  const symbols = [
    "BTC-USD",
    "ETH-USD",
    "ADA-USD",
    "LTC-USD",
    "DOGE-USD",
    "BNB-USD",
    "DOT1-USD",
    "AVAX-USD",
    "XRP-USD",
  ];
  return symbols.map((t, index) => (
    <option key={index} value={t}>
      {t}
    </option>
  ));
}
