/**
 *
 * create by ligx
 *
 * @flow
 */


const downloadBaseUrl = 'http://lugia.tech/download';
const baseMegaIDE = "1.5.11";
module.exports = {
  version: "1.2.23",
  megaIDE: baseMegaIDE,
  mac: `${downloadBaseUrl}/LugiaMega-${baseMegaIDE}.dmg`,
  win: `${downloadBaseUrl}/LugiaMega%20Setup%20${baseMegaIDE}.exe`,
  linuxdeb: `${downloadBaseUrl}/lugia-mega-desktop_${baseMegaIDE}_amd64.deb`,
  linuxrpm: `${downloadBaseUrl}/lugia-mega-desktop-${baseMegaIDE}.x86_64.rpm`
};
