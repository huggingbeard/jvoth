// Track file downloads (PDF, ZIP, WAV, etc.) as GoatCounter events.
// The default GoatCounter snippet only counts HTML pageviews; binary files have
// no tracking script of their own, so paper and dataset downloads are otherwise
// invisible. This binds a click handler to every download link and sends it as
// a GoatCounter event so it shows up in the dashboard.
(function () {
  var exts = /\.(pdf|zip|wav|csv|dta|xlsx|docx|do)$/i;
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('a[href]').forEach(function (a) {
      var href = a.getAttribute('href') || '';
      if (!exts.test(href)) return;
      a.addEventListener('click', function () {
        if (!window.goatcounter || !window.goatcounter.count) return;
        window.goatcounter.count({
          path: 'download:' + href,
          title: 'Download: ' + href,
          event: true,
        });
      });
    });
  });
})();
