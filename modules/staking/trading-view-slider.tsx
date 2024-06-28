import { NextPage } from "next";

const TradingViewSlider: NextPage = () => {
  return (
    <div className="w-full h-[104px]">
      <iframe
        src="https://www.tradingview-widget.com/embed-widget/ticker-tape/?locale=en#%7B%22symbols%22%3A%5B%7B%22description%22%3A%22Tesla%22%2C%22proName%22%3A%22NASDAQ%3ATSLA%22%7D%2C%7B%22description%22%3A%22Apple%20Inc%22%2C%22proName%22%3A%22NASDAQ%3AAAPL%22%7D%2C%7B%22description%22%3A%22Nvidia%22%2C%22proName%22%3A%22NASDAQ%3ANVDA%22%7D%2C%7B%22description%22%3A%22Microsoft%22%2C%22proName%22%3A%22NASDAQ%3AMSFT%22%7D%2C%7B%22description%22%3A%22Advanced%20Micro%20Devices%22%2C%22proName%22%3A%22NASDAQ%3AAMD%22%7D%2C%7B%22description%22%3A%22Meta%22%2C%22proName%22%3A%22NASDAQ%3AMETA%22%7D%2C%7B%22description%22%3A%22Netflix%22%2C%22proName%22%3A%22NASDAQ%3ANFLX%22%7D%5D%2C%22showSymbolLogo%22%3Atrue%2C%22colorTheme%22%3A%22dark%22%2C%22isTransparent%22%3Atrue%2C%22displayMode%22%3A%22compact%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A104%2C%22utm_source%22%3A%22matston.com%22%2C%22utm_medium%22%3A%22widget_new%22%2C%22utm_campaign%22%3A%22ticker-tape%22%2C%22page-uri%22%3A%22matston.com%2Fen%2Fuser%2Fschemas%22%7D"
        title="ticker tape TradingView widget"
        lang="en"
        className="select-none box-border block h-[72px] w-full"
      ></iframe>
      <div className="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/?utm_source=matston.com&amp;utm_medium=widget_new&amp;utm_campaign=ticker-tape"
          rel="noopener nofollow noreferrer"
          target="_blank"
        >
          <span className="blue-text"></span>
        </a>
      </div>
    </div>
  );
};

export default TradingViewSlider;
