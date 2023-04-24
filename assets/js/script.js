let data = [
  {
    id: 1,
    code: 1234567891011121,
    description: "پرداخت عوارض آزادراهی توسط جهانشاهی",
    debtor: "2,000,000",
    creditor: "",
    num: 40,
  },
  {
    id: 2,
    code: 1234567569874,
    description: "پرداخت عوارض آزادراهی توسط جهانشاهی",
    debtor: "",
    creditor: "3,000,000",
    num: 10,
  },
  {
    id: 3,
    code: 78945617569874,
    description: "هزینه پشتیبانی رویان سیستم",
    debtor: "5,000,000",
    creditor: "",
    num: 20,
  },
  {
    id: 4,
    code: 98745632115975,
    description: "پرداخت عوارض آزادراهی ",
    debtor: "",
    creditor: "1,000,000",
    num: 60,
  },
  {
    id: 5,
    code: 1234567891011121,
    description: "پرداخت عوارض آزادراهی توسط جهانشاهی",
    debtor: "2,000,000",
    creditor: "",
    num: 40,
  },
  {
    id: 6,
    code: 1234567569874,
    description: "پرداخت عوارض آزادراهی توسط جهانشاهی",
    debtor: "",
    creditor: "3,000,000",
    num: 10,
  },
  {
    id: 7,
    code: 78945617569874,
    description: "هزینه پشتیبانی رویان سیستم",
    debtor: "5,000,000",
    creditor: "",
    num: 20,
  },
  {
    id: 8,
    code: 98745632115975,
    description: "پرداخت عوارض آزادراهی ",
    debtor: "",
    creditor: "1,000,000",
    num: 60,
  },
  {
    id: 9,
    code: 1234567569874,
    description: "پرداخت عوارض آزادراهی توسط جهانشاهی",
    debtor: "",
    creditor: "3,000,000",
    num: 10,
  },
  {
    id: 10,
    code: 78945617569874,
    description: "هزینه پشتیبانی رویان سیستم",
    debtor: "5,000,000",
    creditor: "",
    num: 20,
  },
  {
    id: 11,
    code: 98745632115975,
    description: "پرداخت عوارض آزادراهی ",
    debtor: "",
    creditor: "1,000,000",
    num: 60,
  },
];

function createTable() {
  $.each(data, function (index, jsonObject) {
    if (Object.keys(jsonObject).length > 0) {
      let tableRow = "<tr>";
      $.each(Object.keys(jsonObject), function (i, key) {
        tableRow += "<td>" + jsonObject[key] + "</td>";
      });
      tableRow += "</tr>";
      $(".custom-table tbody").append(tableRow);
    }
  });
}

$(document).ready(function () {
  createTable();
});
