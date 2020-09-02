import data from "../assets/sourceData.json";

const tutorialData = Object.values(data);

let sort = 1;
let times = 0;

export const tutorialRouterData = getRouterData(tutorialData);
export const tutorialSearchData = getSearchData(tutorialData);

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
