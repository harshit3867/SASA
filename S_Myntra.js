/*************************************************
 * ZIPPEE – UNIFIED DASHBOARD JS (STABLE VERSION)
 * OUTPUT: 100% SAME AS YOUR CURRENT IMPLEMENTATION
 *************************************************/

/* ------------------ UI HELPERS ------------------ */
function zippeeToggleMenu() {
  document.querySelector(".nav-links")?.classList.toggle("active");
}

function getDayName(date) {
  return ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][date.getDay()];
}

function getTodayDateString() {
  const d = new Date();
  return `${d.getMonth()+1}/${d.getDate()}/${d.getFullYear()}`;
}

function getCurrentTimeString() {
  return new Date().toLocaleTimeString([], {hour:'2-digit',minute:'2-digit',second:'2-digit'});
}

/* ------------------ DATA ------------------ */
/* 🔴 YOUR reportData + hourPercentages REMAIN UNCHANGED */
const reportData = [
{
    day: "Thursday",
    date: "1/1/2026",
    stores: {
      "Kalyan Nagar_mnow": 430,
      "Basaveshwar Nagar_mnow": 297,
      "Jakkur_mnow": 285,
      "Begur_mnow": 693,
      "Thyagaraja Nagar_mnow": 373,
      "Brookfield_mnow": 841,
      "JP nagar_mnow": 404,
      "Sarjapur Road_mnow": 410
    },
    total: 3733
  },
  {
    day: "Friday",
    date: "1/2/2026",
    stores: {
      "Kalyan Nagar_mnow": 592,
      "Basaveshwar Nagar_mnow": 387,
      "Jakkur_mnow": 406,
      "Begur_mnow": 824,
      "Thyagaraja Nagar_mnow": 450,
      "Brookfield_mnow": 1050,
      "JP nagar_mnow": 528,
      "Sarjapur Road_mnow": 492
    },
    total: 4729
  },
  {
    day: "Saturday",
    date: "1/3/2026",
    stores: {
      "Kalyan Nagar_mnow": 689,
      "Basaveshwar Nagar_mnow": 491,
      "Jakkur_mnow": 387,
      "Begur_mnow": 1026,
      "Thyagaraja Nagar_mnow": 604,
      "Brookfield_mnow": 1234,
      "JP nagar_mnow": 596,
      "Sarjapur Road_mnow": 580
    },
    total: 5607
  },
  {
    day: "Sunday",
    date: "1/4/2026",
    stores: {
      "Kalyan Nagar_mnow": 575,
      "Basaveshwar Nagar_mnow": 427,
      "Jakkur_mnow": 339,
      "Begur_mnow": 888,
      "Thyagaraja Nagar_mnow": 428,
      "Brookfield_mnow": 1055,
      "JP nagar_mnow": 517,
      "Sarjapur Road_mnow": 510
    },
    total: 4739
  },
  {
    day: "Monday",
    date: "1/5/2026",
    stores: {
      "Kalyan Nagar_mnow": 536,
      "Basaveshwar Nagar_mnow": 324,
      "Jakkur_mnow": 304,
      "Begur_mnow": 778,
      "Thyagaraja Nagar_mnow": 387,
      "Brookfield_mnow": 863,
      "JP nagar_mnow": 416,
      "Sarjapur Road_mnow": 478
    },
    total: 4086
  },
   {
    day: "Tuesday",
    date: "1/6/2026",
    stores: {
      "Kalyan Nagar_mnow": 563,
      "Basaveshwar Nagar_mnow": 391,
      "Jakkur_mnow": 373,
      "Begur_mnow": 831,
      "Thyagaraja Nagar_mnow": 461,
      "Brookfield_mnow": 1063,
      "JP nagar_mnow": 481,
      "Sarjapur Road_mnow": 469
    },
    total: 4632
  },
  {
    day: "Wednesday",
    date: "1/7/2026",
    stores: {
      "Kalyan Nagar_mnow": 406,
      "Basaveshwar Nagar_mnow": 290,
      "Jakkur_mnow": 235,
      "Begur_mnow": 633,
      "Thyagaraja Nagar_mnow": 396,
      "Brookfield_mnow": 761,
      "JP nagar_mnow": 369,
      "Sarjapur Road_mnow": 333
    },
    total: 3423
  },
   {
    day: "Thursday",
    date: "1/8/2026",
    stores: {
      "Kalyan Nagar_mnow": 402,
      "Basaveshwar Nagar_mnow": 295,
      "Jakkur_mnow": 266,
      "Begur_mnow": 647,
      "Thyagaraja Nagar_mnow": 418,
      "Brookfield_mnow": 779,
      "JP nagar_mnow": 376,
      "Sarjapur Road_mnow": 383
    },
    total: 3566
  },
  {
    day: "Friday",
    date: "1/9/2026",
    stores: {
      "Kalyan Nagar_mnow": 728,
      "Basaveshwar Nagar_mnow": 504,
      "Jakkur_mnow": 498,
      "Begur_mnow": 1016,
      "Thyagaraja Nagar_mnow": 664,
      "Brookfield_mnow": 1283,
      "JP nagar_mnow": 648,
      "Sarjapur Road_mnow": 604
    },
    total: 5945
  },
  {
    day: "Saturday",
    date: "1/10/2026",
    stores: {
      "Kalyan Nagar_mnow": 732,
      "Basaveshwar Nagar_mnow": 554,
      "Jakkur_mnow": 411,
      "Begur_mnow": 1093,
      "Thyagaraja Nagar_mnow": 770,
      "Brookfield_mnow": 1304,
      "JP nagar_mnow": 631,
      "Sarjapur Road_mnow": 616
    },
    total: 6111
  },
  {
    day: "Sunday",
    date: "1/11/2026",
    stores: {
      "Kalyan Nagar_mnow": 600,
      "Basaveshwar Nagar_mnow": 473,
      "Jakkur_mnow": 355,
      "Begur_mnow": 929,
      "Thyagaraja Nagar_mnow": 536,
      "Brookfield_mnow": 1096,
      "JP nagar_mnow": 538,
      "Sarjapur Road_mnow": 533
    },
    total: 5060
  },
  {
    day: "Monday",
    date: "1/12/2026",
    stores: {
      "Kalyan Nagar_mnow": 504,
      "Basaveshwar Nagar_mnow": 323,
      "Jakkur_mnow": 286,
      "Begur_mnow": 733,
      "Thyagaraja Nagar_mnow": 436,
      "Brookfield_mnow": 807,
      "JP nagar_mnow": 390,
      "Sarjapur Road_mnow": 448
    },
    total: 3927
  },
  {
    day: "Tuesday",
    date: "1/13/2026",
    stores: {
      "Kalyan Nagar_mnow": 553,
      "Basaveshwar Nagar_mnow": 407,
      "Jakkur_mnow": 366,
      "Begur_mnow": 789,
      "Thyagaraja Nagar_mnow": 542,
      "Brookfield_mnow": 1036,
      "JP nagar_mnow": 469,
      "Sarjapur Road_mnow": 459
    },
    total: 4621
  },
  {
    day: "Wednesday",
    date: "1/14/2026",
    stores: {
      "Kalyan Nagar_mnow": 580,
      "Basaveshwar Nagar_mnow": 415,
      "Jakkur_mnow": 335,
      "Begur_mnow": 877,
      "Thyagaraja Nagar_mnow": 567,
      "Brookfield_mnow": 1091,
      "JP nagar_mnow": 529,
      "Sarjapur Road_mnow": 476
    },
    total: 4870
  },
  {
    day: "Thursday",
    date: "1/15/2026",
    stores: {
      "Kalyan Nagar_mnow": 509,
      "Basaveshwar Nagar_mnow": 373,
      "Jakkur_mnow": 337,
      "Begur_mnow": 821,
      "Thyagaraja Nagar_mnow": 530,
      "Brookfield_mnow": 988,
      "JP nagar_mnow": 476,
      "Sarjapur Road_mnow": 485
    },
    total: 4519
  },
  {
    day: "Friday",
    date: "1/16/2026",
    stores: {
      "Kalyan Nagar_mnow": 659,
      "Basaveshwar Nagar_mnow": 423,
      "Jakkur_mnow": 417,
      "Begur_mnow": 837,
      "Thyagaraja Nagar_mnow": 556,
      "Brookfield_mnow": 1074,
      "JP nagar_mnow": 542,
      "Sarjapur Road_mnow": 506
    },
    total: 5014
  },
  {
    day: "Saturday",
    date: "1/17/2026",
    stores: {
      "Kalyan Nagar_mnow": 679,
      "Basaveshwar Nagar_mnow": 474,
      "Jakkur_mnow": 352,
      "Begur_mnow": 922,
      "Thyagaraja Nagar_mnow": 659,
      "Brookfield_mnow": 1116,
      "JP nagar_mnow": 540,
      "Sarjapur Road_mnow": 527
    },
    total: 5269
  },
  {
    day: "Sunday",
    date: "1/18/2026",
    stores: {
      "Kalyan Nagar_mnow": 700,
      "Basaveshwar Nagar_mnow": 473,
      "Jakkur_mnow": 354,
      "Begur_mnow": 914,
      "Thyagaraja Nagar_mnow": 535,
      "Brookfield_mnow": 1094,
      "JP nagar_mnow": 537,
      "Sarjapur Road_mnow": 532
    },
    total: 5139
  }
 
];

// we add the new hour percentages data here

const hourPercentages = [
  { hour: "6-7",   Sunday: 0.57,  Monday: 1.20,  Tuesday: 1.54,  Wednesday: 1.32,  Thursday: 1.23,  Friday: 1.38,  Saturday: 1.11 },
  { hour: "7-8",   Sunday: 1.68,  Monday: 3.74,  Tuesday: 4.57,  Wednesday: 4.25,  Thursday: 3.97,  Friday: 4.15,  Saturday: 3.82 },
  { hour: "8-9",   Sunday: 4.57,  Monday: 7.95,  Tuesday: 9.25,  Wednesday: 9.21,  Thursday: 8.73,  Friday: 9.50,  Saturday: 7.85 },
  { hour: "9-10",  Sunday: 10.43, Monday: 13.90, Tuesday: 14.93, Wednesday: 15.05, Thursday: 15.06, Friday: 15.84, Saturday: 14.16 },
  { hour: "10-11", Sunday: 17.34, Monday: 20.67, Tuesday: 22.29, Wednesday: 22.70, Thursday: 21.93, Friday: 23.18, Saturday: 20.56 },
  { hour: "11-12", Sunday: 25.73, Monday: 28.04, Tuesday: 28.46, Wednesday: 30.44, Thursday: 29.58, Friday: 30.51, Saturday: 27.06 },
  { hour: "12-1",  Sunday: 33.96, Monday: 34.83, Tuesday: 35.31, Wednesday: 37.17, Thursday: 36.61, Friday: 38.49, Saturday: 35.71 },
  { hour: "1-2",   Sunday: 41.19, Monday: 41.21, Tuesday: 41.77, Wednesday: 43.08, Thursday: 42.81, Friday: 45.37, Saturday: 43.99 },
  { hour: "2-3",   Sunday: 48.65, Monday: 47.49, Tuesday: 47.20, Wednesday: 49.37, Thursday: 49.47, Friday: 51.46, Saturday: 51.40 },
  { hour: "3-4",   Sunday: 55.32, Monday: 53.73, Tuesday: 52.63, Wednesday: 55.65, Thursday: 55.35, Friday: 57.36, Saturday: 58.81 },
  { hour: "4-5",   Sunday: 63.10, Monday: 60.98, Tuesday: 59.14, Wednesday: 62.75, Thursday: 61.85, Friday: 63.59, Saturday: 65.81 },
  { hour: "5-6",   Sunday: 70.83, Monday: 68.44, Tuesday: 65.51, Wednesday: 69.75, Thursday: 68.56, Friday: 70.56, Saturday: 73.29 },
  { hour: "6-7",   Sunday: 78.05, Monday: 74.83, Tuesday: 72.41, Wednesday: 76.88, Thursday: 75.70, Friday: 77.49, Saturday: 79.93 },
  { hour: "7-8",   Sunday: 85.12, Monday: 82.15, Tuesday: 80.19, Wednesday: 84.34, Thursday: 83.52, Friday: 84.78, Saturday: 86.40 },
  { hour: "8-9",   Sunday: 91.00, Monday: 89.41, Tuesday: 87.49, Wednesday: 90.93, Thursday: 90.41, Friday: 90.91, Saturday: 91.35 },
  { hour: "9-10",  Sunday: 96.99, Monday: 95.42, Tuesday: 94.73, Wednesday: 96.04, Thursday: 96.24, Friday: 96.24, Saturday: 96.18 },
  { hour: "10-11", Sunday: 100.01, Monday: 99.99, Tuesday: 100.00, Wednesday: 99.96, Thursday: 100.02, Friday: 100.01, Saturday: 99.99 }
];


/* 👉 PASTE THEM ABOVE THIS COMMENT AS-IS */

/* ------------------ STATE ------------------ */
const AppState = {
  summary: {},
  deepPain: [],
  deepPainDetails: []
};

/* ------------------ FINAL TABLE LOGIC ------------------ */
function generateFinalTable() {
  const projectionTable = document.getElementById("reportTable");
  const summaryTable = document.getElementById("summaryTable");
  const output = document.getElementById("output");

  if (!projectionTable || !summaryTable) {
    alert("Projection or Summary table missing");
    return;
  }

  const projRows = projectionTable.querySelectorAll("tbody tr");
  const sumRows = summaryTable.querySelectorAll("tbody tr");

  let finalHTML = `
    <h2 style="margin:10px 0;">📊 Final Table</h2>
    <table class="table table-bordered">
      <thead style="background:#ffc107;">
        <tr>
          <th>Store Name</th>
          <th>Projected Orders</th>
          <th>Projected Orders | Till Hour</th>
          <th>Projected Orders | Buffer</th>
          <th>Total Orders</th>
          <th>Cancelled %</th>
          <th>Delivered Orders</th>
          <th>Deep Pain %</th>
          <th>Actual Riders</th>
          <th>Idle Rider</th>
          <th>BF</th>
          <th>Order Attainment %</th>
          <th>Deep Pain (Order Count)</th>
          <th>Additional Orders</th>
          <th>@Actual Deep_Pain</th>
        </tr>
      </thead>
      <tbody>
  `;

  for (let i = 0; i < sumRows.length; i++) {
    const sCells = sumRows[i].querySelectorAll("td");
    const pCells = projRows[i].querySelectorAll("td");

    const store = sCells[0].textContent.trim();

    const projectedFull = Number(pCells[1].textContent) || 0;
    const projectedTill = Number(pCells[2].textContent) || 0;
    const projectedBuffer = Number(pCells[3].textContent) || 0;

    const totalOrders = Number(sCells[1].textContent) || 0;
    const cancelledPct = sCells[3].textContent;
    const delivered = Number(sCells[4].textContent) || 0;
    const deepPainPctStr = sCells[7].textContent.replace("%", "");
    const deepPainPct = Number(deepPainPctStr) || 0;

    const actualRiders = Number(sCells[8].querySelector("input")?.value) || 0;
    const idleRider = Number(sCells[9].querySelector("input")?.value) || 0;
    const bf = Number(sCells[10].querySelector("input")?.value) || 0;

    // ---- CALCULATIONS (OLD LOGIC) ----
    const orderAttainment =
      projectedTill > 0 ? ((totalOrders / projectedTill) * 100).toFixed(2) : "0.00";

    const deepPainCount = ((totalOrders * deepPainPct) / 100).toFixed(2);

    const additionalOrders =
      totalOrders > projectedBuffer ? totalOrders - projectedBuffer : 0;

    const correctedDeepPain = deepPainCount - additionalOrders;
    const actualDeepPain =
      totalOrders > 0
        ? Math.max((correctedDeepPain / totalOrders) * 100, 0).toFixed(2)
        : "0.00";

    finalHTML += `
      <tr>
        <td>${store}</td>
        <td>${projectedFull}</td>
        <td>${projectedTill}</td>
        <td>${projectedBuffer}</td>
        <td>${totalOrders}</td>
        <td>${cancelledPct}</td>
        <td>${delivered}</td>
        <td>${deepPainPct}%</td>
        <td>${actualRiders}</td>
        <td>${idleRider}</td>
        <td>${bf}</td>
        <td>${orderAttainment}%</td>
        <td>${deepPainCount}</td>
        <td>${additionalOrders}</td>
        <td>${actualDeepPain}</td>
      </tr>
    `;
  }

  finalHTML += `</tbody></table>`;
  output.innerHTML = finalHTML;
}
document.getElementById("finalTableBtn")?.addEventListener("click", generateFinalTable);


/* ------------------ HOUR % LOGIC ------------------ */
function getHourPercentageFor(day, hour) {
  let idx = hour - 6;
  if (idx < 0) idx = 0;
  if (idx >= hourPercentages.length) idx = hourPercentages.length - 1;
  return hourPercentages[idx];
}

/* ------------------ PROJECTION TABLE ------------------ */
function generateSummaryTable() {
  const tbody = document.querySelector('#reportTable tbody');
  if (!tbody) return;
  tbody.innerHTML = '';

  const today = getTodayDateString();
  const data = reportData.find(d => d.date === today) || reportData.at(-1);
  const stores = Object.keys(data.stores);

  const now = new Date();
  const hourRow = getHourPercentageFor(getDayName(now), now.getHours());
  document.getElementById('tillHour').textContent = hourRow.hour;

  let t1=0,t2=0,t3=0;

  stores.forEach(s=>{
    const full = data.stores[s];
    const proj = Math.round(full * (hourRow[getDayName(now)]/100));
    const buf = Math.round(proj * 1.15);

    tbody.insertAdjacentHTML('beforeend',`
      <tr>
        <td>${s}</td>
        <td>${full}</td>
        <td>${proj}</td>
        <td>${buf}</td>
      </tr>
    `);

    t1+=full; t2+=proj; t3+=buf;
  });

  tbody.insertAdjacentHTML('beforeend',`
    <tr style="font-weight:bold;background:#ffe066">
      <td>Total</td><td>${t1}</td><td>${t2}</td><td>${t3}</td>
    </tr>
  `);
}

/* ------------------ FILE PROCESSING ------------------ */
function processFile() {
  const file = document.getElementById("fileInput")?.files[0];
  if (!file) return alert("Please select a file");

  const reader = new FileReader();
  reader.onload = e => {
    const wb = XLSX.read(
      file.name.endsWith(".csv") ? e.target.result : new Uint8Array(e.target.result),
      { type: file.name.endsWith(".csv") ? "string" : "array" }
    );

    const data = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]);
    aggregateOrders(data);
    generateSummaryPage();
  };

  file.name.endsWith(".csv") ? reader.readAsText(file) : reader.readAsArrayBuffer(file);
}

/* ------------------ AGGREGATION ------------------ */
function aggregateOrders(data) {
  const stores = [
    "Kalyan Nagar_mnow","Basaveshwar Nagar_mnow","Jakkur_mnow",
    "Begur_mnow","Thyagaraja Nagar_mnow","Brookfield_mnow",
    "JP nagar_mnow","Sarjapur Road_mnow"
  ];

  AppState.summary = {};
  AppState.deepPain = [];
  AppState.deepPainDetails = [];

  data.forEach(o=>{
    const s = o["Store Name"]?.trim();
    if (!stores.includes(s)) return;

    AppState.summary[s] ??= {t:0,d:0,a:0,c:0,dp:0};
    AppState.summary[s].t++;

    const st = o["Order Status"]?.toLowerCase();
    const b = o["Breached"]?.toLowerCase()==="yes";
    const m = +o["Breached Duration (In Min)"]||0;

    if (st==="delivered") {
      AppState.summary[s].d++;
      if (b && m>15) {
        AppState.summary[s].dp++;
        AppState.deepPain.push(o);
        AppState.deepPainDetails.push(o);
      }
    }
    else if (st==="attempted") AppState.summary[s].a++;
    else if (st?.includes("cancel")) AppState.summary[s].c++;
  });
}

/* ------------------ SUMMARY TABLE ------------------ */
function generateSummaryPage() {
  const out = document.getElementById("output");
  let html=`<table class="table table-bordered" id="summaryTable">
  <thead><tr>
  <th>Store</th><th>Total</th><th>Cancelled</th><th>Cancelled %</th>
  <th>Delivered</th><th>Attempted</th><th>Deep Pain</th><th>Deep Pain %</th>
  <th>Actual Riders</th><th>Idle Rider</th><th>BF</th></tr></thead><tbody>`;

  Object.entries(AppState.summary).forEach(([s,v],i)=>{
    const cp=((v.c+v.a)/v.t*100||0).toFixed(2);
    const dp=(v.dp/v.d*100||0).toFixed(2);
    html+=`
      <tr>
        <td>${s}</td><td>${v.t}</td><td>${v.c}</td><td>${cp}%</td>
        <td>${v.d}</td><td>${v.a}</td><td>${v.dp}</td><td>${dp}%</td>
        <td><input class="summary-input"></td>
        <td><input class="summary-input"></td>
        <td><input class="summary-input"></td>
      </tr>`;
  });

  html+=`</tbody></table>`;
  out.innerHTML=html;
  document.getElementById("finalTableBtn").style.display="inline-block";
}

/* ------------------ INIT ------------------ */
document.addEventListener("DOMContentLoaded",()=>{
  generateSummaryTable();
  setInterval(generateSummaryTable,60000);
  document.getElementById("submitBtn")?.addEventListener("click",processFile);
});
