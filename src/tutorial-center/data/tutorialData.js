import data from "../assets/sourceData.json";

const tutorialData = Object.values(data);

let sort = 1;
let times = 0;

export const tutorialRouterData = getRouterData(tutorialData);
export const tutorialSearchData = getSearchData(tutorialData);
export const tutorialPageData = getPageData(tutorialData);

// 搜索数据:
function getSearchData(data, type) {
  let tempObj = [];
  Array.isArray(data) &&
    data.forEach(item => {
      const { value, text, desc, keyword, children } = item;
      if (children) {
        tempObj.push(...getSearchData(children, text));
      } else {
        const url = `/tutorial/pages/${value}`;
        tempObj.push({
          value,
          desc,
          type,
          url,
          keyword,
          content: text,
          owner: "tutorial",
          power: 1
        });
      }
    });
  return tempObj;
}

// 路由数据:
function getRouterData(data) {
  times++;
  let tempObj = [];
  Array.isArray(data) &&
    data.forEach(item => {
      const { value, text, desc, children, describe } = item;
      if (children && children.length > 0) {
        tempObj.push({
          value,
          text,
          describe,
          children: [...getRouterData(children)]
        });
      } else {
        const url = `/tutorial/pages/${value}`;
        tempObj.push({ value: url, text, desc, sort: sort });
        sort++;
      }
    });
  return tempObj;
}

// 页面数据:
function getPageData(data) {
  let tempObj = {};
  Array.isArray(data) &&
    data.forEach(item => {
      const { value, text, desc, keyword, children, videoId, descSkip } = item;
      if (children) {
        tempObj = { ...tempObj, ...getPageData(children) };
      } else {
        // const url = `http://139.9.26.43/video//1.3.5-alpha.7.mp4`;
        const url = `http://139.9.26.43/video//${videoId}.mp4`;
        tempObj[value] = {
          id: videoId,
          title: text,
          desc,
          videoSrc: url,
          descSkip
        };
      }
    });
  return tempObj;
}
