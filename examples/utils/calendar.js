/*
 * @Description: 获取日历时间
 * @Version: 1.0
 * @Autor: wuwei3
 * @Date: 2020-12-30 14:35:51
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-01-07 14:20:53
 */
import moment from "moment";

let currentWeekday = null;

let currentMonthDays = null;

let lastMonthDays = null;

let daysArr = [];

/**
 * @description: 获取日历数据
 * @param {*} time 当前时间
 * @param {*} month 月
 * @param {*} year 年
 * @return {*}
 */
function initDate(time, monthNum) {
  let month = time.substring(5, 7);

  let year = time.substring(0, 4);

  if (!(time && month && year)) {
    return;
  }
  currentWeekday = moment(time)
    .date(1)
    .weekday();
  currentMonthDays = moment(time).daysInMonth(); // 获取当月天数

  if (
    (currentMonthDays === "31" && currentWeekday === "5") ||
    currentWeekday === "6" ||
    (currentMonthDays === "30" && currentWeekday === "6")
  ) {
    daysArr = [[], [], [], [], [], []];
  } else {
    daysArr = [[], [], [], [], []];
  }
  const getDay = (days) =>
    days <= lastMonthDays
      ? ""
      : days <= lastMonthDays + currentMonthDays
      ? days - lastMonthDays
      : ""; // 日期处理

  for (let i = 0; i < 7; i += 1) {
    let virtualDay = lastMonthDays - currentWeekday + i + 1;

    for (let j = 0; j < daysArr.length; j += 1) {
      let num = getDay(virtualDay + j * 7);

      let par = {};

      if (!num) {
        par = {
          day: num,
          month: null,
          year: null,
        };
      } else {
        par = {
          day: num,
          month: month,
          year: year,
        };
      }
      daysArr[j][i] = par;
    }
  }
  let list = [];

  let nate = 0;

  daysArr.forEach((item, index) => {
    item.forEach((item2) => {
      if (index === 0 && item2.day === "") {
        nate++;
      }
    });
  });

  /* 处理上个月 */
  let _timeUp = moment()
    .month(monthNum - 1)
    .format("YYYY-MM-DD");

  let larstDay = moment(_timeUp)
    .endOf("month")
    .format("YYYY-MM-DD");

  let _yearUp = larstDay.substring(0, 4);

  let _monthUp = larstDay.substring(5, 7);

  let _dayUp = larstDay.substring(8, 10);

  /* 处理下个月 */
  let _timeDown = moment()
    .month(monthNum + 1)
    .format("YYYY-MM-DD");

  let indexDay = moment(_timeDown)
    .endOf("month")
    .format("YYYY-MM-DD");

  let _yearDown = indexDay.substring(0, 4);

  let _monthDown = indexDay.substring(5, 7);

  /* 数组对象处理 */
  daysArr.forEach((item, index) => {
    let num = 1;

    item.forEach((item2, index2) => {
      item2["isMonth"] = true;
      if (index === 4 && item2.day === "") {
        item2["isMonth"] = false;
        item2["day"] = num++;
        item2.month = _monthDown;
        item2.year = _yearDown;
        item2["disabled"] = true;
        if (item2.month.length !== 2) {
          item2.month = "0" + item2.month;
        }
      }
      if (index === 0 && item2.day === "") {
        item2["isMonth"] = false;
        item2["day"] = Number(_dayUp) - nate + index2 + 1;
        item2.month = _monthUp;
        item2.year = _yearUp;
        item2["disabled"] = true;
        if (item2.month.length !== 2) {
          item2.month = "0" + item2.month;
        }
      }
      list.push(item2);
    });
  });
  /* 日期格式化 */
  list.forEach((item) => {
    item["dateTime"] = `${item.year +
      "-" +
      item.month +
      "-" +
      (item.day < 10 ? "0" + item.day : item.day)}`;
    let time1 = new Date(item.dateTime).getTime();

    let time2 = new Date().getTime();

    item.disabled = time1 < time2 - 86400000;
  });
  return list;
}

export default initDate;
