export const dropDownData = [
    {
      title: "Location",
      dropdown: ["All", "one", "two"],
    },
    {
      title: "Factory Id",
      dropdown: ["All", "one", "two"],
    },
    {
      title: "Asset No.",
      dropdown: ["All", "one", "two"],
    },
    {
      title: "Health",
      dropdown: ["All", "one", "two"],
    },
    {
      title: "Asset Type",
      dropdown: ["All", "one", "two"],
    },
    {
      title: "Criticality",
      dropdown: ["All", "one", "two"],
    },
  ];

export const tableData = {
  columns: [
    { label: "Sr.No", align: "center" },
    { label: "Machine_ID", minWidth: 120, align: "center" },
    { label: "Machine Name", minWidth: 120, align: "center" },
    { label: "Ideal No.Hrs Operated/Month", minWidth: 120, align: "center" },
    { label: "Actual No.Hrs Operated/Month", minWidth: 120, align: "center" },
    { label: "% Utilization", minWidth: 120, align: "center" },
    { label: "Reason", minWidth: 120, align: "center" },
    { label: "No. of Maintenance/Month", minWidth: 120, align: "center" },
    { label: "Asset Score ", minWidth: 120, align: "center" },
  ],
  rows: [
    [
      "1",
      "M_CUT_01",
      "Log Cutting Machine",
      "200",
      "200",
      "100%",
      "",
      "0",
      "100%",
    ],
    [
      "2",
      "M_CUT_02",
      "Log Cutting Machine",
      "200",
      "180",
      "90%",
      "Belt Broken",
      "1",
      "90%",
    ],
    [
      "3",
      "M_CUT_03",
      "Log Cutting Machine",
      "200",
      "200",
      "100%",
      "",
      "0",
      "100%",
    ],
    [
      "4",
      "M_CUT_04",
      "Log Cutting Machine",
      "200",
      "150",
      "75%",
      "Wiring issue",
      "2",
      "75%",
    ],
    [
      "5",
      "M_CUT_05",
      "Log Cutting Machine",
      "200",
      "120",
      "60%",
      "Motor issue",
      "4",
      "60%",
    ],
    ["6", "M_SHP_01", "Shaping Machine", "200", "200", "100%", "", "0", "100%"],
    ["7", "M_SHP_02", "Shaping Machine", "200", "200", "100%", "", "0", "100%"],
    ["8", "M_SHP_03", "Shaping Machine", "200", "200", "100%", "", "0", "100%"],
    [
      "9",
      "M_SHP_04",
      "Shaping Machine",
      "200",
      "150",
      "75%",
      "Wiring issue",
      "2",
      "75%",
    ],
    [
      "10",
      "M_SHP_05",
      "Shaping Machine",
      "200",
      "120",
      "60%",
      "Motor issue",
      "4",
      "60%",
    ],
  ],
};
