import { NextPage } from "next";

const MarketOverview: NextPage = () => {
  return (
    <div className="w-full h-full" style={{ width: "100%", height: "600px" }}>
      <iframe
        src="https://www.tradingview-widget.com/embed-widget/market-overview/?locale=en#%7B%22tabs%22%3A%5B%7B%22title%22%3A%22Overview%22%2C%22title_raw%22%3A%22Overview%22%2C%22symbols%22%3A%5B%7B%22s%22%3A%22CRYPTOCAP%3ATOTAL%22%7D%2C%7B%22s%22%3A%22BITSTAMP%3ABTCUSD%22%7D%2C%7B%22s%22%3A%22BITSTAMP%3AETHUSD%22%7D%2C%7B%22s%22%3A%22FTX%3ASOLUSD%22%7D%2C%7B%22s%22%3A%22BINANCE%3AAVAXUSD%22%7D%2C%7B%22s%22%3A%22COINBASE%3AUNIUSD%22%7D%5D%2C%22quick_link%22%3A%7B%22title%22%3A%22More%20cryptocurrencies%22%2C%22href%22%3A%22%2Fmarkets%2Fcryptocurrencies%2Fprices-all%2F%22%7D%7D%2C%7B%22title%22%3A%22Bitcoin%22%2C%22title_raw%22%3A%22Bitcoin%22%2C%22symbols%22%3A%5B%7B%22s%22%3A%22BITSTAMP%3ABTCUSD%22%7D%2C%7B%22s%22%3A%22COINBASE%3ABTCEUR%22%7D%2C%7B%22s%22%3A%22COINBASE%3ABTCGBP%22%7D%2C%7B%22s%22%3A%22BITFLYER%3ABTCJPY%22%7D%2C%7B%22s%22%3A%22CME%3ABTC1!%22%7D%5D%2C%22quick_link%22%3A%7B%22title%22%3A%22More%20Bitcoin%20pairs%22%2C%22href%22%3A%22%2Fsymbols%2FBTCUSD%2Fmarkets%2F%22%7D%7D%2C%7B%22title%22%3A%22Ethereum%22%2C%22title_raw%22%3A%22Ethereum%22%2C%22symbols%22%3A%5B%7B%22s%22%3A%22BITSTAMP%3AETHUSD%22%7D%2C%7B%22s%22%3A%22KRAKEN%3AETHEUR%22%7D%2C%7B%22s%22%3A%22COINBASE%3AETHGBP%22%7D%2C%7B%22s%22%3A%22BITFLYER%3AETHJPY%22%7D%2C%7B%22s%22%3A%22BINANCE%3AETHBTC%22%7D%2C%7B%22s%22%3A%22BINANCE%3AETHUSDT%22%7D%5D%2C%22quick_link%22%3A%7B%22title%22%3A%22More%20Ethereum%20pairs%22%2C%22href%22%3A%22%2Fsymbols%2FETHUSD%2Fmarkets%2F%22%7D%7D%2C%7B%22title%22%3A%22Solana%22%2C%22title_raw%22%3A%22Solana%22%2C%22symbols%22%3A%5B%7B%22s%22%3A%22FTX%3ASOLUSD%22%7D%2C%7B%22s%22%3A%22BINANCE%3ASOLEUR%22%7D%2C%7B%22s%22%3A%22COINBASE%3ASOLGBP%22%7D%2C%7B%22s%22%3A%22BINANCE%3ASOLBTC%22%7D%2C%7B%22s%22%3A%22HUOBI%3ASOLETH%22%7D%2C%7B%22s%22%3A%22BINANCE%3ASOLUSDT%22%7D%5D%2C%22quick_link%22%3A%7B%22title%22%3A%22More%20Solana%20pairs%22%2C%22href%22%3A%22%2Fsymbols%2FSOLUSD%2Fmarkets%2F%22%7D%7D%2C%7B%22title%22%3A%22Uniswap%22%2C%22title_raw%22%3A%22Uniswap%22%2C%22symbols%22%3A%5B%7B%22s%22%3A%22COINBASE%3AUNIUSD%22%7D%2C%7B%22s%22%3A%22KRAKEN%3AUNIEUR%22%7D%2C%7B%22s%22%3A%22COINBASE%3AUNIGBP%22%7D%2C%7B%22s%22%3A%22BINANCE%3AUNIBTC%22%7D%2C%7B%22s%22%3A%22KRAKEN%3AUNIETH%22%7D%2C%7B%22s%22%3A%22BINANCE%3AUNIUSDT%22%7D%5D%2C%22quick_link%22%3A%7B%22title%22%3A%22More%20Uniswap%20pairs%22%2C%22href%22%3A%22%2Fsymbols%2FUNIUSD%2Fmarkets%2F%22%7D%7D%5D%2C%22width%22%3A%22100%25%22%2C%22height%22%3A600%2C%22showChart%22%3Atrue%2C%22showFloatingTooltip%22%3Afalse%2C%22plotLineColorGrowing%22%3A%22%232962FF%22%2C%22plotLineColorFalling%22%3A%22%232962FF%22%2C%22belowLineFillColorGrowing%22%3A%22rgba(41%2C%2098%2C%20255%2C%200.12)%22%2C%22belowLineFillColorFalling%22%3A%22rgba(41%2C%2098%2C%20255%2C%200.12)%22%2C%22belowLineFillColorGrowingBottom%22%3A%22rgba(41%2C%2098%2C%20255%2C%200)%22%2C%22belowLineFillColorFallingBottom%22%3A%22rgba(41%2C%2098%2C%20255%2C%200)%22%2C%22gridLineColor%22%3A%22rgba(240%2C%20243%2C%20250%2C%200)%22%2C%22scaleFontColor%22%3A%22rgba(120%2C%20123%2C%20134%2C%201)%22%2C%22showSymbolLogo%22%3Atrue%2C%22symbolActiveColor%22%3A%22rgba(41%2C%2098%2C%20255%2C%200.12)%22%2C%22colorTheme%22%3A%22dark%22%2C%22utm_source%22%3A%22matston.com%22%2C%22utm_medium%22%3A%22widget_new%22%2C%22utm_campaign%22%3A%22market-overview%22%2C%22page-uri%22%3A%22matston.com%2Fen%2Fuser%2Fdashboard%22%7D"
        title="market overview TradingView widget"
        lang="en"
        className="select-none box-border block w-full h-[calc(100%-32px)]"
      ></iframe>
      <div className="w-full text-xs leading-8 text-center text-[#B2B5BE] align-middle invisible">
        <a
          href="https://www.tradingview.com/?utm_source=matston.com&amp;utm_medium=widget_new&amp;utm_campaign=market-overview"
          rel="noopener nofollow noreferrer"
          target="_blank"
        >
          <span className="text-white"></span>
        </a>
      </div>

      {/* <style>
	.tradingview-widget-copyright {
		font-size: 13px !important;
		line-height: 32px !important;
		text-align: center !important;
		vertical-align: middle !important;
		font-family: -apple-system, BlinkMacSystemFont, 'Trebuchet MS', Roboto, Ubuntu, sans-serif !important;
		color: #B2B5BE !important;
	}

	.tradingview-widget-copyright .blue-text {
		color: #2962FF !important;
	}

	.tradingview-widget-copyright a {
		text-decoration: none !important;
		color: #B2B5BE !important;
	}

	.tradingview-widget-copyright a:visited {
		color: #B2B5BE !important;
	}

	.tradingview-widget-copyright a:hover .blue-text {
		color: #1E53E5 !important;
	}

	.tradingview-widget-copyright a:active .blue-text {
		color: #1848CC !important;
	}

	.tradingview-widget-copyright a:visited .blue-text {
		color: #2962FF !important;
	}
	</style> */}
    </div>
  );
};

export default MarketOverview;
