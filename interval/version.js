/**
 *
 * create by ligx
 *
 * @flow
 */
const downloadBaseUrl = 'http://139.9.26.43/download';
const baseMegaIDE = "1.4.0";
module.exports = {
  version: "1.2.23",
  megaIDE: baseMegaIDE,
  mac: `${downloadBaseUrl}/LugiaMega-${baseMegaIDE}.dmg`,
  win: `${downloadBaseUrl}/LugiaMega%20Setup%20${baseMegaIDE}.exe`,
  linuxdeb: `${downloadBaseUrl}/lugia-mega-desktop_${baseMegaIDE}_amd64.deb`,
  linuxrpm: `${downloadBaseUrl}/lugia-mega-desktop-${baseMegaIDE}.x86_64.rpm`
};
