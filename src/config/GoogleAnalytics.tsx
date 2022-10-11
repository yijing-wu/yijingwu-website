import GA4React from "ga-4-react";

let ga4react: GA4React;

export async function initGoogleAnalytics(tracking_id: string) {
  if (!GA4React.isInitialized()) {
    ga4react = new GA4React(tracking_id);
    try {
      await ga4react.initialize();
      logPageView();
      console.log("success");
    } catch (error) {
      console.error(error);
    }
  }
}

function logPageView() {
  ga4react.pageview(window.location.pathname);
}

export function logEvent(action: string, label: string, category: string) {
  ga4react.event(action, label, category);
}

// const ga4react = new GA4React("G-SQZC7GDC3X");
// ga4react.initialize();

// ga4react.initialize().then(
//   (ga4) => {
//     ga4.pageview("home");
//     // ga4.gtag("event", "pageview", "path"); // or your custom gtag event
//   },
//   (err) => {
//     console.error(err);
//   }
// );
