import { NextPage } from "next";
import Link from "next/link";

const TradingView: NextPage = () => {
  return (
    <div className="h-full w-full">
      <div className="h-[calc(100%-32px)] w-full">
        <div className="relative box-content mx-auto w-full h-[568px]">
          <iframe
            title="advanced chart TradingView widget"
            lang="en"
            id="tradingview_afca7"
            allowFullScreen
            src="https://s.tradingview.com/widgetembed/?hideideas=1&amp;overrides=%7B%7D&amp;enabled_features=%5B%5D&amp;disabled_features=%5B%5D&amp;locale=en#%7B%22symbol%22%3A%22BTC%22%2C%22frameElementId%22%3A%22tradingview_afca7%22%2C%22interval%22%3A%22D%22%2C%22hide_side_toolbar%22%3A%220%22%2C%22allow_symbol_change%22%3A%221%22%2C%22save_image%22%3A%220%22%2C%22studies%22%3A%22ROC%40tv-basicstudies%5Cu001fStochasticRSI%40tv-basicstudies%5Cu001fMASimple%40tv-basicstudies%22%2C%22theme%22%3A%22dark%22%2C%22style%22%3A%221%22%2C%22timezone%22%3A%22exchange%22%2C%22withdateranges%22%3A%221%22%2C%22show_popup_button%22%3A%221%22%2C%22studies_overrides%22%3A%22%7B%7D%22%2C%22utm_source%22%3A%22matston.com%22%2C%22utm_medium%22%3A%22widget_new%22%2C%22utm_campaign%22%3A%22chart%22%2C%22utm_term%22%3A%22BTC%22%2C%22page-uri%22%3A%22matston.com%2Fen%2Fuser%2Fdashboard%22%7D"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
      <div className="w-full text-xs leading-8 text-center text-[#B2B5BE] align-middle invisible">
        <Link
          href="https://www.tradingview.com/?utm_source=matston.com&amp;utm_medium=widget_new&amp;utm_campaign=chart&amp;utm_term=BTC"
          rel="noopener nofollow noreferrer"
          target="_blank"
        >
          <span className="text-[#2962FF]"></span>Loading...
        </Link>
      </div>
    </div>
  );
};

export default TradingView;
