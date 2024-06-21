// import React from "react"
// import ReactDOM from "react-dom/client"
// import App from "./App.jsx"

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

import { nanoid } from "nanoid"
import lz from "lzutf8"
import chiller from "./auto/deviceModel/chiller"
import pump from "./auto/deviceModel/pump"
import tower from "./auto/deviceModel/tower"
import valves from "./auto/deviceModel/valves"
import { pageDefault, pageLayout } from "./auto/pageDefault"
import { drawpointmap, rootPointMap } from "./auto/pageNodeDefault"
import headDefault, { footDefault } from "./auto/headDefault"
import {  deviceTranform, styleMap } from "./auto/stylesDefault"

import {
  box,
  boxid,
  chl_Out,
  chl_pump,
  chl_tower,
  device,
  deviceMapIdsTool,
  footid,
  generateText,
  headid,
  parentbox,
  pump_In,
  pump_chl,
  root,
  systemTempratureMap,
  tower_chl,
  valuesMapsHandle,
} from "./auto/nodesDefault"
// 后端请求过来的re
var re = {
  T_OUTDOOR: {
    NAME: "T_OUTDOOR",
  },
  RH_OUTDOOR: {
    NAME: "RH_OUTDOOR",
  },
  TW_OUTDOOR: {
    NAME: "TW_OUTDOOR",
  },
  H_OUTDOOR: {
    NAME: "H_OUTDOOR",
  },
  TD_OUTDOOR: {
    NAME: "TD_OUTDOOR",
  },
  CO2_OUTDOOR: {
    NAME: "CO2_OUTDOOR",
  },
  DPX_ONLINE: {
    NAME: "DPX_ONLINE",
  },
  HVAC_PLANTS: {
    "2OE6LBhoeLCw3X4Ki5mEhY": {
      MODE_SYS: {
        NAME: "MODE_SYS",
      },
      ONECLICK_START: {
        NAME: "ONECLICK_START",
      },
      ONECLICK_STOP: {
        NAME: "ONECLICK_STOP",
      },
      ONECLICK_CANCEL: {
        NAME: "ONECLICK_CANCEL",
      },
      I_PCT_SP: {
        NAME: "I_PCT_SP",
      },
      I_PCT_BIG_SP: {
        NAME: "I_PCT_BIG_SP",
      },
      T_CHW_S_SP: {
        NAME: "T_CHW_S_SP",
      },
      DPR_CHW_SP: {
        NAME: "DPR_CHW_SP",
      },
      DT_CHW_SP: {
        NAME: "DT_CHW_SP",
      },
      T_CW_R_SP: {
        NAME: "T_CW_R_SP",
      },
      DT_CW_SP: {
        NAME: "DT_CW_SP",
      },
      FREQ_CHWP_SP: {
        NAME: "FREQ_CHWP_SP",
      },
      FREQ_CWP_SP: {
        NAME: "FREQ_CWP_SP",
      },
      FREQ_CT_SP: {
        NAME: "FREQ_CT_SP",
      },
      T_AHU_SA_SP: {
        NAME: "T_AHU_SA_SP",
      },
      FREQ_AHU_SAF_SP: {
        NAME: "FREQ_AHU_SAF_SP",
      },
      LOAD: {
        NAME: "LOAD",
      },
      LOAD_PRE: {
        NAME: "LOAD_PRE",
      },
      P_HVAC: {
        NAME: "P_HVAC",
      },
      P_PLANT: {
        NAME: "P_PLANT",
      },
      P_CH_GROUP: {
        NAME: "P_CH_GROUP",
      },
      P_CHWP_GROUP: {
        NAME: "P_CHWP_GROUP",
      },
      P_CWP_GROUP: {
        NAME: "P_CWP_GROUP",
      },
      P_CT_GROUP: {
        NAME: "P_CT_GROUP",
      },
      P_TERMINAL_GROUP: {
        NAME: "P_TERMINAL_GROUP",
      },
      ELEC_HVAC: {
        NAME: "ELEC_HVAC",
      },
      ELEC_PLANT: {
        NAME: "ELEC_PLANT",
      },
      ELEC_CH_GROUP: {
        NAME: "ELEC_CH_GROUP",
      },
      ELEC_CHWP_GROUP: {
        NAME: "ELEC_CHWP_GROUP",
      },
      ELEC_CWP_GROUP: {
        NAME: "ELEC_CWP_GROUP",
      },
      ELEC_CT_GROUP: {
        NAME: "ELEC_CT_GROUP",
      },
      ELEC_TERMINAL_GROUP: {
        NAME: "ELEC_TERMINAL_GROUP",
      },
      COP_HVAC: {
        NAME: "COP_HVAC",
      },
      COP_PLANT: {
        NAME: "COP_PLANT",
      },
      COP_CH_GROUP: {
        NAME: "COP_CH_GROUP",
      },
      COP_CHWP_GROUP: {
        NAME: "COP_CHWP_GROUP",
      },
      COP_CWP_GROUP: {
        NAME: "COP_CWP_GROUP",
      },
      COP_CT_GROUP: {
        NAME: "COP_CT_GROUP",
      },
      COP_TERMINAL_GROUP: {
        NAME: "COP_TERMINAL_GROUP",
      },
      I_PCT: {
        NAME: "I_PCT",
      },
      I_PCT_BIG: {
        NAME: "I_PCT_BIG",
      },
      T_CHW_S: {
        NAME: "T_CHW_S",
      },
      T_CHW_R: {
        NAME: "T_CHW_R",
      },
      DPR_CHW: {
        NAME: "DPR_CHW",
      },
      DT_CHW: {
        NAME: "DT_CHW",
      },
      T_CW_R: {
        NAME: "T_CW_R",
      },
      T_CW_S: {
        NAME: "T_CW_S",
      },
      FLOW_CHW: {
        NAME: "FLOW_CHW",
      },
      FLOW_CW: {
        NAME: "FLOW_CW",
      },
      DT_CW: {
        NAME: "DT_CW",
      },
      FREQ_CHWP: {
        NAME: "FREQ_CHWP",
      },
      FREQ_CWP: {
        NAME: "FREQ_CWP",
      },
      FREQ_CT: {
        NAME: "FREQ_CT",
      },
      T_AHU_SA: {
        NAME: "T_AHU_SA",
      },
      FREQ_AHU_SAF: {
        NAME: "FREQ_AHU_SAF",
      },
      PR_CHW_R: {
        NAME: "PR_CHW_R",
      },
      PR_CHW_S: {
        NAME: "PR_CHW_S",
      },
      LOAD_MAX: {
        NAME: "LOAD_MAX",
      },
      LOAD_MIN: {
        NAME: "LOAD_MIN",
      },
      FLOW_CHW_MAX: {
        NAME: "FLOW_CHW_MAX",
      },
      FLOW_CHW_MIX: {
        NAME: "FLOW_CHW_MIX",
      },
      FLOW_CW_MAX: {
        NAME: "FLOW_CW_MAX",
      },
      FLOW_CW_MIN: {
        NAME: "FLOW_CW_MIN",
      },
      DT_CW_APP_MAX: {
        NAME: "DT_CW_APP_MAX",
      },
      DT_CW_APP_MIN: {
        NAME: "DT_CW_APP_MIN",
      },
      T_CHW_S_MAX: {
        NAME: "T_CHW_S_MAX",
      },
      T_CHW_S_MIN: {
        NAME: "T_CHW_S_MIN",
      },
      T_CHW_S_STARTUP_MAX: {
        NAME: "T_CHW_S_STARTUP_MAX",
      },
      T_CHW_S_STARTUP_MIN: {
        NAME: "T_CHW_S_STARTUP_MIN",
      },
      DT_CHW_MAX: {
        NAME: "DT_CHW_MAX",
      },
      DT_CHW_MIN: {
        NAME: "DT_CHW_MIN",
      },
      DPR_CHW_MAX: {
        NAME: "DPR_CHW_MAX",
      },
      DPR_CHW_MIN: {
        NAME: "DPR_CHW_MIN",
      },
      T_CW_R_MAX: {
        NAME: "T_CW_R_MAX",
      },
      T_CW_R_MIN: {
        NAME: "T_CW_R_MIN",
      },
      DT_CW_MAX: {
        NAME: "DT_CW_MAX",
      },
      DT_CW_MIN: {
        NAME: "DT_CW_MIN",
      },
      I_PCT_MAX: {
        NAME: "I_PCT_MAX",
      },
      I_PCT_MIN: {
        NAME: "I_PCT_MIN",
      },
      I_PCT_STARTUP_MAX: {
        NAME: "I_PCT_STARTUP_MAX",
      },
      I_PCT_STARTUP_MIN: {
        NAME: "I_PCT_STARTUP_MIN",
      },
      I_PCT_BIG_MAX: {
        NAME: "I_PCT_BIG_MAX",
      },
      I_PCT_BIG_MIN: {
        NAME: "I_PCT_BIG_MIN",
      },
      I_PCT_BIG_STARTUP_MAX: {
        NAME: "I_PCT_BIG_STARTUP_MAX",
      },
      I_PCT_BIG_STARTUP_MIN: {
        NAME: "I_PCT_BIG_STARTUP_MIN",
      },
      FREQ_CHWP_MAX: {
        NAME: "FREQ_CHWP_MAX",
      },
      FREQ_CHWP_MIN: {
        NAME: "FREQ_CHWP_MIN",
      },
      FREQ_CHWP_STARTUP_MAX: {
        NAME: "FREQ_CHWP_STARTUP_MAX",
      },
      FREQ_CHWP_STARTUP_MIN: {
        NAME: "FREQ_CHWP_STARTUP_MIN",
      },
      FREQ_CWP_MAX: {
        NAME: "FREQ_CWP_MAX",
      },
      FREQ_CWP_MIN: {
        NAME: "FREQ_CWP_MIN",
      },
      FREQ_CWP_STARTUP_MAX: {
        NAME: "FREQ_CWP_STARTUP_MAX",
      },
      FREQ_CWP_STARTUP_MIN: {
        NAME: "FREQ_CWP_STARTUP_MIN",
      },
      FREQ_CT_MAX: {
        NAME: "FREQ_CT_MAX",
      },
      FREQ_CT_MIN: {
        NAME: "FREQ_CT_MIN",
      },
      FREQ_CT_STARTUP_MAX: {
        NAME: "FREQ_CT_STARTUP_MAX",
      },
      FREQ_CT_STARTUP_MIN: {
        NAME: "FREQ_CT_STARTUP_MIN",
      },
      T_AHU_SA_MAX: {
        NAME: "T_AHU_SA_MAX",
      },
      T_AHU_SA_MIN: {
        NAME: "T_AHU_SA_MIN",
      },
      T_AHU_SA_STARTUP_MAX: {
        NAME: "T_AHU_SA_STARTUP_MAX",
      },
      T_AHU_SA_STARTUP_MIN: {
        NAME: "T_AHU_SA_STARTUP_MIN",
      },
      FREQ_AHU_MAX: {
        NAME: "FREQ_AHU_MAX",
      },
      FREQ_AHU_MIN: {
        NAME: "FREQ_AHU_MIN",
      },
      FREQ_AHU_STARTUP_MAX: {
        NAME: "FREQ_AHU_STARTUP_MAX",
      },
      FREQ_AHU_STARTUP_MIN: {
        NAME: "FREQ_AHU_STARTUP_MIN",
      },
      FLOW_PUMP_MAX: {
        NAME: "FLOW_PUMP_MAX",
      },
      FLOW_PUMP_MIX: {
        NAME: "FLOW_PUMP_MIX",
      },
      TW_MAX: {
        NAME: "TW_MAX",
      },
      TW_MIN: {
        NAME: "TW_MIN",
      },
      SCHEDULE_AUTO: {
        NAME: "SCHEDULE_AUTO",
      },
      TIME_START_AUTO: {
        NAME: "TIME_START_AUTO",
      },
      TIME_STOP_AUTO: {
        NAME: "TIME_STOP_AUTO",
      },
      STARTUP_DELAY: {
        NAME: "STARTUP_DELAY",
      },
      STOP_DELAY: {
        NAME: "STOP_DELAY",
      },
      STEP_T: {
        NAME: "STEP_T",
      },
      STEP_FREQ: {
        NAME: "STEP_FREQ",
      },
      STEP_PR: {
        NAME: "STEP_PR",
      },
      T_RATE_ADD_CH: {
        NAME: "T_RATE_ADD_CH",
      },
      T_BIAS_ADD_CH_MIN: {
        NAME: "T_BIAS_ADD_CH_MIN",
      },
      I_PCT_ADD_CH_MIN: {
        NAME: "I_PCT_ADD_CH_MIN",
      },
      TIME_KEEP_ADD_CH: {
        NAME: "TIME_KEEP_ADD_CH",
      },
      T_BIAS_SUB_CH_MAX: {
        NAME: "T_BIAS_SUB_CH_MAX",
      },
      I_PCT_SUB_CH_SURPLUS: {
        NAME: "I_PCT_SUB_CH_SURPLUS",
      },
      TIME_KEEP_SUB_CH: {
        NAME: "TIME_KEEP_SUB_CH",
      },
      T_RATE_STEADY: {
        NAME: "T_RATE_STEADY",
      },
      P_RATE_STEADY: {
        NAME: "P_RATE_STEADY",
      },
      LOAD_RATE_STEADY: {
        NAME: "LOAD_RATE_STEADY",
      },
      FREQ_RATE_STEADY: {
        NAME: "FREQ_RATE_STEADY",
      },
      T_CHW_S_OPT_EB: {
        NAME: "T_CHW_S_OPT_EB",
      },
      DT_CHW_OPT_EB: {
        NAME: "DT_CHW_OPT_EB",
      },
      DPR_CHW_OPT_EB: {
        NAME: "DPR_CHW_OPT_EB",
      },
      FREQ_CHWP_OPT_EB: {
        NAME: "FREQ_CHWP_OPT_EB",
      },
      FREQ_CWP_OPT_EB: {
        NAME: "FREQ_CWP_OPT_EB",
      },
      FREQ_CT_OPT_EB: {
        NAME: "FREQ_CT_OPT_EB",
      },
      ADDSUB_CH_OPT_EB: {
        NAME: "ADDSUB_CH_OPT_EB",
      },
      ADDSUB_CT_OPT_EB: {
        NAME: "ADDSUB_CT_OPT_EB",
      },
      AHU_OPT_EB: {
        NAME: "AHU_OPT_EB",
      },
      DT_CW_OPT_EB: {
        NAME: "DT_CW_OPT_EB",
      },
      T_CW_R_OPT_EB: {
        NAME: "T_CW_R_OPT_EB",
      },
      T_AHU_SA_OPT_TYPE: {
        NAME: "T_AHU_SA_OPT_TYPE",
      },
      T_AHU_SA_OPT_EB: {
        NAME: "T_AHU_SA_OPT_EB",
      },
      MODE_AHU: {
        NAME: "MODE_AHU",
      },
      MODE_AHU_SP: {
        NAME: "MODE_AHU_SP",
      },
      MODE_AHU_OPT_EB: {
        NAME: "MODE_AHU_OPT_EB",
      },
      FREQ_AHU_OPT_EB: {
        NAME: "FREQ_AHU_OPT_EB",
      },
      V_AHU_OPT_EB: {
        NAME: "V_AHU_OPT_EB",
      },
      CHLS: {
        ljGfRmBXdRUwXdsC7jg8A4: {
          ONOFF_SP: {
            NAME: "CH1#ONOFF_SP",
          },
          AM: {
            NAME: "CH1#AM",
          },
          EB: {
            NAME: "CH1#EB",
          },
          ONOFF: {
            NAME: "CH1#ONOFF",
          },
          ON: {
            NAME: "CH1#ON",
          },
          OFF: {
            NAME: "CH1#OFF",
          },
          ON_SP: {
            NAME: "CH1#ON_SP",
          },
          OFF_SP: {
            NAME: "CH1#OFF_SP",
          },
          FAULT: {
            NAME: "CH1#FAULT",
          },
          FAULT_CODE: {
            NAME: "CH1#FAULT_CODE",
          },
          FAULT_RESET: {
            NAME: "CH1#FAULT_RESET",
          },
          T_CHW_S: {
            NAME: "CH1#T_CHW_S",
          },
          T_CHW_S_SP: {
            NAME: "CH1#T_CHW_S_SP",
          },
          HRS_TOTAL: {
            NAME: "CH1#HRS_TOTAL",
          },
          HRS: {
            NAME: "CH1#HRS",
          },
          I_PCT: {
            NAME: "CH1#I_PCT",
          },
          I_PCT_MAX_SP: {
            NAME: "CH1#I_PCT_MAX_SP",
          },
          T_EXHT: {
            NAME: "CH1#T_EXHT",
          },
          T_EVAP_ENT: {
            NAME: "CH1#T_EVAP_ENT",
          },
          T_EVAP_LEV: {
            NAME: "CH1#T_EVAP_LEV",
          },
          T_EVAP: {
            NAME: "CH1#T_EVAP",
          },
          PR_EVAP: {
            NAME: "CH1#PR_EVAP",
          },
          T_COND_ENT: {
            NAME: "CH1#T_COND_ENT",
          },
          T_COND_LEV: {
            NAME: "CH1#T_COND_LEV",
          },
          T_COND: {
            NAME: "CH1#T_COND",
          },
          PR_COND: {
            NAME: "CH1#PR_COND",
          },
          T_OIL: {
            NAME: "CH1#T_OIL",
          },
          DPR_OIL: {
            NAME: "CH1#DPR_OIL",
          },
          COUNT_SS: {
            NAME: "CH1#COUNT_SS",
          },
          RANK: {
            NAME: "CH1#RANK",
          },
          P: {
            NAME: "CH1#P",
          },
          W: {
            NAME: "CH1#W",
          },
          ELEC: {
            NAME: "CH1#ELEC",
          },
          I: {
            NAME: "CH1#I",
          },
          COP: {
            NAME: "CH1#COP",
          },
          MODE: {
            NAME: "CH1#MODE",
          },
          T_COND_PROTECT: {
            NAME: "CH1#T_COND_PROTECT",
          },
          PR_EXHT_PROTECT: {
            NAME: "CH1#PR_EXHT_PROTECT",
          },
          P_RATED: {
            NAME: "CH1#P_RATED",
          },
          LOAD_RATED: {
            NAME: "CH1#LOAD_RATED",
            VALUE: "2000",
            VALUE_O: 2000,
          },
          COP_RATED: {
            NAME: "CH1#COP_RATED",
          },
          FLOW_CHW_RATED: {
            NAME: "CH1#FLOW_CHW_RATED",
          },
          FLOW_CW_RATED: {
            NAME: "CH1#FLOW_CW_RATED",
          },
          PLR: {
            NAME: "CH1#PLR",
          },
          LOAD: {
            NAME: "CH1#LOAD",
          },
          FLOW_CHW: {
            NAME: "CH1#FLOW_CHW",
          },
          FLOW_CW: {
            NAME: "CH1#FLOW_CW",
          },
          FLOW_CHW_SWITCH: {
            NAME: "CH1#FLOW_CHW_SWITCH",
          },
          FLOW_CW_SWITCH: {
            NAME: "CH1#FLOW_CW_SWITCH",
          },
          T_CW_R: {
            NAME: "CH1#T_CW_R",
          },
          ONECLICK_START: {
            NAME: "CH1#ONECLICK_START",
          },
          ONECLICK_STOP: {
            NAME: "CH1#ONECLICK_STOP",
          },
          CHWPS: [
            {
              ELEC: {
                NAME: "CHWP1#ELEC",
              },
              ONOFF_SP: {
                NAME: "CHWP1#ONOFF_SP",
              },
              ONOFF: {
                NAME: "CHWP1#ONOFF",
              },
              ON: {
                NAME: "CHWP1#ON",
              },
              OFF: {
                NAME: "CHWP1#OFF",
              },
              ON_SP: {
                NAME: "CHWP1#ON_SP",
              },
              OFF_SP: {
                NAME: "CHWP1#OFF_SP",
              },
              AM: {
                NAME: "CHWP1#AM",
              },
              EB: {
                NAME: "CHWP1#EB",
              },
              FAULT: {
                NAME: "CHWP1#FAULT",
              },
              FAULT_CODE: {
                NAME: "CHWP1#FAULT_CODE",
              },
              FAULT_RESET: {
                NAME: "CHWP1#FAULT_RESET",
              },
              RANK: {
                NAME: "CHWP1#RANK",
              },
              PR_INLET: {
                NAME: "CHWP1#PR_INLET",
              },
              PR_OUTLET: {
                NAME: "CHWP1#PR_OUTLET",
              },
              HRS_TOTAL: {
                NAME: "CHWP1#HRS_TOTAL",
              },
              HRS: {
                NAME: "CHWP1#HRS",
              },
              P: {
                NAME: "CHWP1#P",
              },
              W: {
                NAME: "CHWP1#W",
              },
              COP: {
                NAME: "CHWP1#COP",
              },
              ONOFF_VFD_SP: {
                NAME: "CHWP1#ONOFF_VFD_SP",
              },
              ONOFF_VFD: {
                NAME: "CHWP1#ONOFF_VFD",
              },
              FREQ: {
                NAME: "CHWP1#FREQ",
              },
              FREQ_SP: {
                NAME: "CHWP1#FREQ_SP",
              },
              FAULT_VFD: {
                NAME: "CHWP1#FAULT_VFD",
              },
              P_VFD: {
                NAME: "CHWP1#P_VFD",
              },
              FLOW_RATED: {
                NAME: "CHWP1#FLOW_RATED",
              },
              P_RATED: {
                NAME: "CHWP1#P_RATED",
              },
              COP_RATED: {
                NAME: "CHWP1#COP_RATED",
              },
              ID: "dvuy_JIQf2YuXBtzOFkDLY",
              NO: 1,
              NAME: "冷冻水泵#1",
              TYPE: "D0A1B",
              STATION_ID: "2OE6LBhoeLCw3X4Ki5mEhY",
              STATION_PREFIX_ORG: "HVC1#",
              DEVICE_PREFIX: "CHWP1#",
              SUITE_IDS: [
                "ljGfRmBXdRUwXdsC7jg8A4",
                "wI0YvzukuL3V12o1yiyLLV",
                "XGQuRqZBt69EtGurDNoVV7",
                "mdyi12W8izM2MILT2FRZ3Q",
              ],
              VALVES: [],
              OTHERS: {},
              CAP_NUM: 0,
            },
            {
              ELEC: {
                NAME: "CHWP2#ELEC",
              },
              ONOFF_SP: {
                NAME: "CHWP2#ONOFF_SP",
              },
              ONOFF: {
                NAME: "CHWP2#ONOFF",
              },
              ON: {
                NAME: "CHWP2#ON",
              },
              OFF: {
                NAME: "CHWP2#OFF",
              },
              ON_SP: {
                NAME: "CHWP2#ON_SP",
              },
              OFF_SP: {
                NAME: "CHWP2#OFF_SP",
              },
              AM: {
                NAME: "CHWP2#AM",
              },
              EB: {
                NAME: "CHWP2#EB",
              },
              FAULT: {
                NAME: "CHWP2#FAULT",
              },
              FAULT_CODE: {
                NAME: "CHWP2#FAULT_CODE",
              },
              FAULT_RESET: {
                NAME: "CHWP2#FAULT_RESET",
              },
              RANK: {
                NAME: "CHWP2#RANK",
              },
              PR_INLET: {
                NAME: "CHWP2#PR_INLET",
              },
              PR_OUTLET: {
                NAME: "CHWP2#PR_OUTLET",
              },
              HRS_TOTAL: {
                NAME: "CHWP2#HRS_TOTAL",
              },
              HRS: {
                NAME: "CHWP2#HRS",
              },
              P: {
                NAME: "CHWP2#P",
              },
              W: {
                NAME: "CHWP2#W",
              },
              COP: {
                NAME: "CHWP2#COP",
              },
              ONOFF_VFD_SP: {
                NAME: "CHWP2#ONOFF_VFD_SP",
              },
              ONOFF_VFD: {
                NAME: "CHWP2#ONOFF_VFD",
              },
              FREQ: {
                NAME: "CHWP2#FREQ",
              },
              FREQ_SP: {
                NAME: "CHWP2#FREQ_SP",
              },
              FAULT_VFD: {
                NAME: "CHWP2#FAULT_VFD",
              },
              P_VFD: {
                NAME: "CHWP2#P_VFD",
              },
              FLOW_RATED: {
                NAME: "CHWP2#FLOW_RATED",
              },
              P_RATED: {
                NAME: "CHWP2#P_RATED",
              },
              COP_RATED: {
                NAME: "CHWP2#COP_RATED",
              },
              ID: "m1RJZR4AJCnQkycGfkkyV6",
              NO: 2,
              NAME: "冷冻水泵#2",
              TYPE: "D0A1B",
              STATION_ID: "2OE6LBhoeLCw3X4Ki5mEhY",
              STATION_PREFIX_ORG: "HVC1#",
              DEVICE_PREFIX: "CHWP2#",
              SUITE_IDS: [
                "ljGfRmBXdRUwXdsC7jg8A4",
                "wI0YvzukuL3V12o1yiyLLV",
                "XGQuRqZBt69EtGurDNoVV7",
                "mdyi12W8izM2MILT2FRZ3Q",
              ],
              VALVES: [],
              OTHERS: {},
              CAP_NUM: 0,
            },
            {
              ELEC: {
                NAME: "CHWP3#ELEC",
              },
              ONOFF_SP: {
                NAME: "CHWP3#ONOFF_SP",
              },
              ONOFF: {
                NAME: "CHWP3#ONOFF",
              },
              ON: {
                NAME: "CHWP3#ON",
              },
              OFF: {
                NAME: "CHWP3#OFF",
              },
              ON_SP: {
                NAME: "CHWP3#ON_SP",
              },
              OFF_SP: {
                NAME: "CHWP3#OFF_SP",
              },
              AM: {
                NAME: "CHWP3#AM",
              },
              EB: {
                NAME: "CHWP3#EB",
              },
              FAULT: {
                NAME: "CHWP3#FAULT",
              },
              FAULT_CODE: {
                NAME: "CHWP3#FAULT_CODE",
              },
              FAULT_RESET: {
                NAME: "CHWP3#FAULT_RESET",
              },
              RANK: {
                NAME: "CHWP3#RANK",
              },
              PR_INLET: {
                NAME: "CHWP3#PR_INLET",
              },
              PR_OUTLET: {
                NAME: "CHWP3#PR_OUTLET",
              },
              HRS_TOTAL: {
                NAME: "CHWP3#HRS_TOTAL",
              },
              HRS: {
                NAME: "CHWP3#HRS",
              },
              P: {
                NAME: "CHWP3#P",
              },
              W: {
                NAME: "CHWP3#W",
              },
              COP: {
                NAME: "CHWP3#COP",
              },
              ONOFF_VFD_SP: {
                NAME: "CHWP3#ONOFF_VFD_SP",
              },
              ONOFF_VFD: {
                NAME: "CHWP3#ONOFF_VFD",
              },
              FREQ: {
                NAME: "CHWP3#FREQ",
              },
              FREQ_SP: {
                NAME: "CHWP3#FREQ_SP",
              },
              FAULT_VFD: {
                NAME: "CHWP3#FAULT_VFD",
              },
              P_VFD: {
                NAME: "CHWP3#P_VFD",
              },
              FLOW_RATED: {
                NAME: "CHWP3#FLOW_RATED",
              },
              P_RATED: {
                NAME: "CHWP3#P_RATED",
              },
              COP_RATED: {
                NAME: "CHWP3#COP_RATED",
              },
              ID: "fJdoIuCK4NFTETY8K_MWQG",
              NO: 3,
              NAME: "冷冻水泵#3",
              TYPE: "D0A1B",
              STATION_ID: "2OE6LBhoeLCw3X4Ki5mEhY",
              STATION_PREFIX_ORG: "HVC1#",
              DEVICE_PREFIX: "CHWP3#",
              SUITE_IDS: [
                "ljGfRmBXdRUwXdsC7jg8A4",
                "wI0YvzukuL3V12o1yiyLLV",
                "XGQuRqZBt69EtGurDNoVV7",
                "mdyi12W8izM2MILT2FRZ3Q",
              ],
              VALVES: [],
              OTHERS: {},
              CAP_NUM: 0,
            },
            {
              ELEC: {
                NAME: "CHWP4#ELEC",
              },
              ONOFF_SP: {
                NAME: "CHWP4#ONOFF_SP",
              },
              ONOFF: {
                NAME: "CHWP4#ONOFF",
              },
              ON: {
                NAME: "CHWP4#ON",
              },
              OFF: {
                NAME: "CHWP4#OFF",
              },
              ON_SP: {
                NAME: "CHWP4#ON_SP",
              },
              OFF_SP: {
                NAME: "CHWP4#OFF_SP",
              },
              AM: {
                NAME: "CHWP4#AM",
              },
              EB: {
                NAME: "CHWP4#EB",
              },
              FAULT: {
                NAME: "CHWP4#FAULT",
              },
              FAULT_CODE: {
                NAME: "CHWP4#FAULT_CODE",
              },
              FAULT_RESET: {
                NAME: "CHWP4#FAULT_RESET",
              },
              RANK: {
                NAME: "CHWP4#RANK",
              },
              PR_INLET: {
                NAME: "CHWP4#PR_INLET",
              },
              PR_OUTLET: {
                NAME: "CHWP4#PR_OUTLET",
              },
              HRS_TOTAL: {
                NAME: "CHWP4#HRS_TOTAL",
              },
              HRS: {
                NAME: "CHWP4#HRS",
              },
              P: {
                NAME: "CHWP4#P",
              },
              W: {
                NAME: "CHWP4#W",
              },
              COP: {
                NAME: "CHWP4#COP",
              },
              ONOFF_VFD_SP: {
                NAME: "CHWP4#ONOFF_VFD_SP",
              },
              ONOFF_VFD: {
                NAME: "CHWP4#ONOFF_VFD",
              },
              FREQ: {
                NAME: "CHWP4#FREQ",
              },
              FREQ_SP: {
                NAME: "CHWP4#FREQ_SP",
              },
              FAULT_VFD: {
                NAME: "CHWP4#FAULT_VFD",
              },
              P_VFD: {
                NAME: "CHWP4#P_VFD",
              },
              FLOW_RATED: {
                NAME: "CHWP4#FLOW_RATED",
              },
              P_RATED: {
                NAME: "CHWP4#P_RATED",
              },
              COP_RATED: {
                NAME: "CHWP4#COP_RATED",
              },
              ID: "TW9AcYLFTrOecDLa_KrLnv",
              NO: 4,
              NAME: "冷冻水泵#4",
              TYPE: "D0A1B",
              STATION_ID: "2OE6LBhoeLCw3X4Ki5mEhY",
              STATION_PREFIX_ORG: "HVC1#",
              DEVICE_PREFIX: "CHWP4#",
              SUITE_IDS: [
                "ljGfRmBXdRUwXdsC7jg8A4",
                "wI0YvzukuL3V12o1yiyLLV",
                "XGQuRqZBt69EtGurDNoVV7",
                "mdyi12W8izM2MILT2FRZ3Q",
              ],
              VALVES: [],
              OTHERS: {},
              CAP_NUM: 0,
            },
          ],
          SCHWPS: [],
          CWPS: [
            {
              ELEC: {
                NAME: "CWP1#ELEC",
              },
              ONOFF_SP: {
                NAME: "CWP1#ONOFF_SP",
              },
              ONOFF: {
                NAME: "CWP1#ONOFF",
              },
              ON: {
                NAME: "CWP1#ON",
              },
              OFF: {
                NAME: "CWP1#OFF",
              },
              ON_SP: {
                NAME: "CWP1#ON_SP",
              },
              OFF_SP: {
                NAME: "CWP1#OFF_SP",
              },
              AM: {
                NAME: "CWP1#AM",
              },
              EB: {
                NAME: "CWP1#EB",
              },
              FAULT: {
                NAME: "CWP1#FAULT",
              },
              FAULT_CODE: {
                NAME: "CWP1#FAULT_CODE",
              },
              FAULT_RESET: {
                NAME: "CWP1#FAULT_RESET",
              },
              RANK: {
                NAME: "CWP1#RANK",
              },
              PR_INLET: {
                NAME: "CWP1#PR_INLET",
              },
              PR_OUTLET: {
                NAME: "CWP1#PR_OUTLET",
              },
              HRS_TOTAL: {
                NAME: "CWP1#HRS_TOTAL",
              },
              HRS: {
                NAME: "CWP1#HRS",
              },
              P: {
                NAME: "CWP1#P",
              },
              W: {
                NAME: "CWP1#W",
              },
              COP: {
                NAME: "CWP1#COP",
              },
              ONOFF_VFD_SP: {
                NAME: "CWP1#ONOFF_VFD_SP",
              },
              ONOFF_VFD: {
                NAME: "CWP1#ONOFF_VFD",
              },
              FREQ: {
                NAME: "CWP1#FREQ",
              },
              FREQ_SP: {
                NAME: "CWP1#FREQ_SP",
              },
              FAULT_VFD: {
                NAME: "CWP1#FAULT_VFD",
              },
              P_VFD: {
                NAME: "CWP1#P_VFD",
              },
              FLOW_RATED: {
                NAME: "CWP1#FLOW_RATED",
              },
              P_RATED: {
                NAME: "CWP1#P_RATED",
              },
              COP_RATED: {
                NAME: "CWP1#COP_RATED",
              },
              ID: "c8uzkkrC4l9Ui0IWyEVG45",
              NO: 1,
              NAME: "冷却水泵#1",
              TYPE: "D0A1C",
              STATION_ID: "2OE6LBhoeLCw3X4Ki5mEhY",
              STATION_PREFIX_ORG: "HVC1#",
              DEVICE_PREFIX: "CWP1#",
              SUITE_IDS: [
                "ljGfRmBXdRUwXdsC7jg8A4",
                "wI0YvzukuL3V12o1yiyLLV",
                "XGQuRqZBt69EtGurDNoVV7",
                "mdyi12W8izM2MILT2FRZ3Q",
              ],
              VALVES: [],
              OTHERS: {},
              CAP_NUM: 0,
            },
            {
              ELEC: {
                NAME: "CWP2#ELEC",
              },
              ONOFF_SP: {
                NAME: "CWP2#ONOFF_SP",
              },
              ONOFF: {
                NAME: "CWP2#ONOFF",
              },
              ON: {
                NAME: "CWP2#ON",
              },
              OFF: {
                NAME: "CWP2#OFF",
              },
              ON_SP: {
                NAME: "CWP2#ON_SP",
              },
              OFF_SP: {
                NAME: "CWP2#OFF_SP",
              },
              AM: {
                NAME: "CWP2#AM",
              },
              EB: {
                NAME: "CWP2#EB",
              },
              FAULT: {
                NAME: "CWP2#FAULT",
              },
              FAULT_CODE: {
                NAME: "CWP2#FAULT_CODE",
              },
              FAULT_RESET: {
                NAME: "CWP2#FAULT_RESET",
              },
              RANK: {
                NAME: "CWP2#RANK",
              },
              PR_INLET: {
                NAME: "CWP2#PR_INLET",
              },
              PR_OUTLET: {
                NAME: "CWP2#PR_OUTLET",
              },
              HRS_TOTAL: {
                NAME: "CWP2#HRS_TOTAL",
              },
              HRS: {
                NAME: "CWP2#HRS",
              },
              P: {
                NAME: "CWP2#P",
              },
              W: {
                NAME: "CWP2#W",
              },
              COP: {
                NAME: "CWP2#COP",
              },
              ONOFF_VFD_SP: {
                NAME: "CWP2#ONOFF_VFD_SP",
              },
              ONOFF_VFD: {
                NAME: "CWP2#ONOFF_VFD",
              },
              FREQ: {
                NAME: "CWP2#FREQ",
              },
              FREQ_SP: {
                NAME: "CWP2#FREQ_SP",
              },
              FAULT_VFD: {
                NAME: "CWP2#FAULT_VFD",
              },
              P_VFD: {
                NAME: "CWP2#P_VFD",
              },
              FLOW_RATED: {
                NAME: "CWP2#FLOW_RATED",
              },
              P_RATED: {
                NAME: "CWP2#P_RATED",
              },
              COP_RATED: {
                NAME: "CWP2#COP_RATED",
              },
              ID: "3cikHzRIya50UMs8LsC3zg",
              NO: 2,
              NAME: "冷却水泵#2",
              TYPE: "D0A1C",
              STATION_ID: "2OE6LBhoeLCw3X4Ki5mEhY",
              STATION_PREFIX_ORG: "HVC1#",
              DEVICE_PREFIX: "CWP2#",
              SUITE_IDS: [
                "ljGfRmBXdRUwXdsC7jg8A4",
                "wI0YvzukuL3V12o1yiyLLV",
                "XGQuRqZBt69EtGurDNoVV7",
                "mdyi12W8izM2MILT2FRZ3Q",
              ],
              VALVES: [],
              OTHERS: {},
              CAP_NUM: 0,
            },
            {
              ELEC: {
                NAME: "CWP3#ELEC",
              },
              ONOFF_SP: {
                NAME: "CWP3#ONOFF_SP",
              },
              ONOFF: {
                NAME: "CWP3#ONOFF",
              },
              ON: {
                NAME: "CWP3#ON",
              },
              OFF: {
                NAME: "CWP3#OFF",
              },
              ON_SP: {
                NAME: "CWP3#ON_SP",
              },
              OFF_SP: {
                NAME: "CWP3#OFF_SP",
              },
              AM: {
                NAME: "CWP3#AM",
              },
              EB: {
                NAME: "CWP3#EB",
              },
              FAULT: {
                NAME: "CWP3#FAULT",
              },
              FAULT_CODE: {
                NAME: "CWP3#FAULT_CODE",
              },
              FAULT_RESET: {
                NAME: "CWP3#FAULT_RESET",
              },
              RANK: {
                NAME: "CWP3#RANK",
              },
              PR_INLET: {
                NAME: "CWP3#PR_INLET",
              },
              PR_OUTLET: {
                NAME: "CWP3#PR_OUTLET",
              },
              HRS_TOTAL: {
                NAME: "CWP3#HRS_TOTAL",
              },
              HRS: {
                NAME: "CWP3#HRS",
              },
              P: {
                NAME: "CWP3#P",
              },
              W: {
                NAME: "CWP3#W",
              },
              COP: {
                NAME: "CWP3#COP",
              },
              ONOFF_VFD_SP: {
                NAME: "CWP3#ONOFF_VFD_SP",
              },
              ONOFF_VFD: {
                NAME: "CWP3#ONOFF_VFD",
              },
              FREQ: {
                NAME: "CWP3#FREQ",
              },
              FREQ_SP: {
                NAME: "CWP3#FREQ_SP",
              },
              FAULT_VFD: {
                NAME: "CWP3#FAULT_VFD",
              },
              P_VFD: {
                NAME: "CWP3#P_VFD",
              },
              FLOW_RATED: {
                NAME: "CWP3#FLOW_RATED",
              },
              P_RATED: {
                NAME: "CWP3#P_RATED",
              },
              COP_RATED: {
                NAME: "CWP3#COP_RATED",
              },
              ID: "QDfEG9ORVEUlXT3Q0D9z8L",
              NO: 3,
              NAME: "冷却水泵#3",
              TYPE: "D0A1C",
              STATION_ID: "2OE6LBhoeLCw3X4Ki5mEhY",
              STATION_PREFIX_ORG: "HVC1#",
              DEVICE_PREFIX: "CWP3#",
              SUITE_IDS: [
                "ljGfRmBXdRUwXdsC7jg8A4",
                "wI0YvzukuL3V12o1yiyLLV",
                "XGQuRqZBt69EtGurDNoVV7",
                "mdyi12W8izM2MILT2FRZ3Q",
              ],
              VALVES: [],
              OTHERS: {},
              CAP_NUM: 0,
            },
            {
              ELEC: {
                NAME: "CWP4#ELEC",
              },
              ONOFF_SP: {
                NAME: "CWP4#ONOFF_SP",
              },
              ONOFF: {
                NAME: "CWP4#ONOFF",
              },
              ON: {
                NAME: "CWP4#ON",
              },
              OFF: {
                NAME: "CWP4#OFF",
              },
              ON_SP: {
                NAME: "CWP4#ON_SP",
              },
              OFF_SP: {
                NAME: "CWP4#OFF_SP",
              },
              AM: {
                NAME: "CWP4#AM",
              },
              EB: {
                NAME: "CWP4#EB",
              },
              FAULT: {
                NAME: "CWP4#FAULT",
              },
              FAULT_CODE: {
                NAME: "CWP4#FAULT_CODE",
              },
              FAULT_RESET: {
                NAME: "CWP4#FAULT_RESET",
              },
              RANK: {
                NAME: "CWP4#RANK",
              },
              PR_INLET: {
                NAME: "CWP4#PR_INLET",
              },
              PR_OUTLET: {
                NAME: "CWP4#PR_OUTLET",
              },
              HRS_TOTAL: {
                NAME: "CWP4#HRS_TOTAL",
              },
              HRS: {
                NAME: "CWP4#HRS",
              },
              P: {
                NAME: "CWP4#P",
              },
              W: {
                NAME: "CWP4#W",
              },
              COP: {
                NAME: "CWP4#COP",
              },
              ONOFF_VFD_SP: {
                NAME: "CWP4#ONOFF_VFD_SP",
              },
              ONOFF_VFD: {
                NAME: "CWP4#ONOFF_VFD",
              },
              FREQ: {
                NAME: "CWP4#FREQ",
              },
              FREQ_SP: {
                NAME: "CWP4#FREQ_SP",
              },
              FAULT_VFD: {
                NAME: "CWP4#FAULT_VFD",
              },
              P_VFD: {
                NAME: "CWP4#P_VFD",
              },
              FLOW_RATED: {
                NAME: "CWP4#FLOW_RATED",
              },
              P_RATED: {
                NAME: "CWP4#P_RATED",
              },
              COP_RATED: {
                NAME: "CWP4#COP_RATED",
              },
              ID: "E9F8NArlUYGJFZwZbxW3Z7",
              NO: 4,
              NAME: "冷却水泵#4",
              TYPE: "D0A1C",
              STATION_ID: "2OE6LBhoeLCw3X4Ki5mEhY",
              STATION_PREFIX_ORG: "HVC1#",
              DEVICE_PREFIX: "CWP4#",
              SUITE_IDS: [
                "ljGfRmBXdRUwXdsC7jg8A4",
                "wI0YvzukuL3V12o1yiyLLV",
                "XGQuRqZBt69EtGurDNoVV7",
                "mdyi12W8izM2MILT2FRZ3Q",
              ],
              VALVES: [],
              OTHERS: {},
              CAP_NUM: 0,
            },
          ],
          CTS: [
            {
              ONOFF_SP: {
                NAME: "CT1#ONOFF_SP",
              },
              ONOFF: {
                NAME: "CT1#ONOFF",
              },
              ON: {
                NAME: "CT1#ON",
              },
              OFF: {
                NAME: "CT1#OFF",
              },
              ON_SP: {
                NAME: "CT1#ON_SP",
              },
              OFF_SP: {
                NAME: "CT1#OFF_SP",
              },
              AM: {
                NAME: "CT1#AM",
              },
              EB: {
                NAME: "CT1#EB",
              },
              FAULT: {
                NAME: "CT1#FAULT",
              },
              FAULT_CODE: {
                NAME: "CT1#FAULT_CODE",
              },
              FAULT_RESET: {
                NAME: "CT1#FAULT_RESET",
              },
              RANK: {
                NAME: "CT1#RANK",
              },
              HRS_TOTAL: {
                NAME: "CT1#HRS_TOTAL",
              },
              HRS: {
                NAME: "CT1#HRS",
              },
              P: {
                NAME: "CT1#P",
              },
              W: {
                NAME: "CT1#W",
              },
              ELEC: {
                NAME: "CT1#ELEC",
              },
              COP: {
                NAME: "CT1#COP",
              },
              ONOFF_VFD_SP: {
                NAME: "CT1#ONOFF_VFD_SP",
              },
              ONOFF_VFD: {
                NAME: "CT1#ONOFF_VFD",
              },
              FREQ: {
                NAME: "CT1#FREQ",
              },
              FREQ_SP: {
                NAME: "CT1#FREQ_SP",
              },
              FAULT_VFD: {
                NAME: "CT1#FAULT_VFD",
              },
              P_VFD: {
                NAME: "CT1#P_VFD",
              },
              FLOW_RATED: {
                NAME: "CT1#FLOW_RATED",
              },
              P_RATED: {
                NAME: "CT1#P_RATED",
              },
              COP_RATED: {
                NAME: "CT1#COP_RATED",
              },
              ID: "ee4ofIjLr4WRjIQFPVro58",
              NO: 1,
              NAME: "冷却塔#1",
              TYPE: "D0A1D",
              STATION_ID: "2OE6LBhoeLCw3X4Ki5mEhY",
              STATION_PREFIX_ORG: "HVC1#",
              DEVICE_PREFIX: "CT1#",
              SUITE_IDS: [
                "ljGfRmBXdRUwXdsC7jg8A4",
                "wI0YvzukuL3V12o1yiyLLV",
                "XGQuRqZBt69EtGurDNoVV7",
                "mdyi12W8izM2MILT2FRZ3Q",
              ],
              VALVES: [
                {
                  ONOFF_SP: {
                    NAME: "V9#ONOFF_SP",
                  },
                  ONOFF: {
                    NAME: "V9#ONOFF",
                  },
                  OFF: {
                    NAME: "V9#OFF",
                  },
                  ON: {
                    NAME: "V9#ON",
                  },
                  OFF_SP: {
                    NAME: "V9#OFF_SP",
                  },
                  ON_SP: {
                    NAME: "V9#ON_SP",
                  },
                  EB: {
                    NAME: "V9#EB",
                  },
                  AM: {
                    NAME: "V9#AM",
                  },
                  FAULT: {
                    NAME: "V9#FAULT",
                  },
                  NAME: "阀门#9",
                  TYPE: "D0A30",
                  ID: "bi2S1oBhLeKE6TIl37vdDB",
                  NO: 9,
                  VALVES: [],
                },
                {
                  ONOFF_SP: {
                    NAME: "V10#ONOFF_SP",
                  },
                  ONOFF: {
                    NAME: "V10#ONOFF",
                  },
                  OFF: {
                    NAME: "V10#OFF",
                  },
                  ON: {
                    NAME: "V10#ON",
                  },
                  OFF_SP: {
                    NAME: "V10#OFF_SP",
                  },
                  ON_SP: {
                    NAME: "V10#ON_SP",
                  },
                  EB: {
                    NAME: "V10#EB",
                  },
                  AM: {
                    NAME: "V10#AM",
                  },
                  FAULT: {
                    NAME: "V10#FAULT",
                  },
                  NAME: "阀门#10",
                  TYPE: "D0A30",
                  ID: "YtPHM3z8XmC3x37VMNfrG0",
                  NO: 10,
                  VALVES: [],
                },
              ],
              OTHERS: {},
              CAP_NUM: 0,
            },
            {
              ONOFF_SP: {
                NAME: "CT2#ONOFF_SP",
              },
              ONOFF: {
                NAME: "CT2#ONOFF",
              },
              ON: {
                NAME: "CT2#ON",
              },
              OFF: {
                NAME: "CT2#OFF",
              },
              ON_SP: {
                NAME: "CT2#ON_SP",
              },
              OFF_SP: {
                NAME: "CT2#OFF_SP",
              },
              AM: {
                NAME: "CT2#AM",
              },
              EB: {
                NAME: "CT2#EB",
              },
              FAULT: {
                NAME: "CT2#FAULT",
              },
              FAULT_CODE: {
                NAME: "CT2#FAULT_CODE",
              },
              FAULT_RESET: {
                NAME: "CT2#FAULT_RESET",
              },
              RANK: {
                NAME: "CT2#RANK",
              },
              HRS_TOTAL: {
                NAME: "CT2#HRS_TOTAL",
              },
              HRS: {
                NAME: "CT2#HRS",
              },
              P: {
                NAME: "CT2#P",
              },
              W: {
                NAME: "CT2#W",
              },
              ELEC: {
                NAME: "CT2#ELEC",
              },
              COP: {
                NAME: "CT2#COP",
              },
              ONOFF_VFD_SP: {
                NAME: "CT2#ONOFF_VFD_SP",
              },
              ONOFF_VFD: {
                NAME: "CT2#ONOFF_VFD",
              },
              FREQ: {
                NAME: "CT2#FREQ",
              },
              FREQ_SP: {
                NAME: "CT2#FREQ_SP",
              },
              FAULT_VFD: {
                NAME: "CT2#FAULT_VFD",
              },
              P_VFD: {
                NAME: "CT2#P_VFD",
              },
              FLOW_RATED: {
                NAME: "CT2#FLOW_RATED",
              },
              P_RATED: {
                NAME: "CT2#P_RATED",
              },
              COP_RATED: {
                NAME: "CT2#COP_RATED",
              },
              ID: "cSvhfgynIwK7_iDzbHIZ7I",
              NO: 2,
              NAME: "冷却塔#2",
              TYPE: "D0A1D",
              STATION_ID: "2OE6LBhoeLCw3X4Ki5mEhY",
              STATION_PREFIX_ORG: "HVC1#",
              DEVICE_PREFIX: "CT2#",
              SUITE_IDS: [
                "ljGfRmBXdRUwXdsC7jg8A4",
                "wI0YvzukuL3V12o1yiyLLV",
                "XGQuRqZBt69EtGurDNoVV7",
                "mdyi12W8izM2MILT2FRZ3Q",
              ],
              VALVES: [
                {
                  ONOFF_SP: {
                    NAME: "V11#ONOFF_SP",
                  },
                  ONOFF: {
                    NAME: "V11#ONOFF",
                  },
                  OFF: {
                    NAME: "V11#OFF",
                  },
                  ON: {
                    NAME: "V11#ON",
                  },
                  OFF_SP: {
                    NAME: "V11#OFF_SP",
                  },
                  ON_SP: {
                    NAME: "V11#ON_SP",
                  },
                  EB: {
                    NAME: "V11#EB",
                  },
                  AM: {
                    NAME: "V11#AM",
                  },
                  FAULT: {
                    NAME: "V11#FAULT",
                  },
                  NAME: "阀门#11",
                  TYPE: "D0A30",
                  ID: "2VlqwFEAYJnBnecsQdflri",
                  NO: 11,
                  VALVES: [],
                },
                {
                  ONOFF_SP: {
                    NAME: "V12#ONOFF_SP",
                  },
                  ONOFF: {
                    NAME: "V12#ONOFF",
                  },
                  OFF: {
                    NAME: "V12#OFF",
                  },
                  ON: {
                    NAME: "V12#ON",
                  },
                  OFF_SP: {
                    NAME: "V12#OFF_SP",
                  },
                  ON_SP: {
                    NAME: "V12#ON_SP",
                  },
                  EB: {
                    NAME: "V12#EB",
                  },
                  AM: {
                    NAME: "V12#AM",
                  },
                  FAULT: {
                    NAME: "V12#FAULT",
                  },
                  NAME: "阀门#12",
                  TYPE: "D0A30",
                  ID: "DoXn8Av4ib3OVZ5mJX7fOJ",
                  NO: 12,
                  VALVES: [],
                },
              ],
              OTHERS: {},
              CAP_NUM: 0,
            },
            {
              ONOFF_SP: {
                NAME: "CT3#ONOFF_SP",
              },
              ONOFF: {
                NAME: "CT3#ONOFF",
              },
              ON: {
                NAME: "CT3#ON",
              },
              OFF: {
                NAME: "CT3#OFF",
              },
              ON_SP: {
                NAME: "CT3#ON_SP",
              },
              OFF_SP: {
                NAME: "CT3#OFF_SP",
              },
              AM: {
                NAME: "CT3#AM",
              },
              EB: {
                NAME: "CT3#EB",
              },
              FAULT: {
                NAME: "CT3#FAULT",
              },
              FAULT_CODE: {
                NAME: "CT3#FAULT_CODE",
              },
              FAULT_RESET: {
                NAME: "CT3#FAULT_RESET",
              },
              RANK: {
                NAME: "CT3#RANK",
              },
              HRS_TOTAL: {
                NAME: "CT3#HRS_TOTAL",
              },
              HRS: {
                NAME: "CT3#HRS",
              },
              P: {
                NAME: "CT3#P",
              },
              W: {
                NAME: "CT3#W",
              },
              ELEC: {
                NAME: "CT3#ELEC",
              },
              COP: {
                NAME: "CT3#COP",
              },
              ONOFF_VFD_SP: {
                NAME: "CT3#ONOFF_VFD_SP",
              },
              ONOFF_VFD: {
                NAME: "CT3#ONOFF_VFD",
              },
              FREQ: {
                NAME: "CT3#FREQ",
              },
              FREQ_SP: {
                NAME: "CT3#FREQ_SP",
              },
              FAULT_VFD: {
                NAME: "CT3#FAULT_VFD",
              },
              P_VFD: {
                NAME: "CT3#P_VFD",
              },
              FLOW_RATED: {
                NAME: "CT3#FLOW_RATED",
              },
              P_RATED: {
                NAME: "CT3#P_RATED",
              },
              COP_RATED: {
                NAME: "CT3#COP_RATED",
              },
              ID: "5Bv3pNiaQ0Oe_yrJJuyP2I",
              NO: 3,
              NAME: "冷却塔#3",
              TYPE: "D0A1D",
              STATION_ID: "2OE6LBhoeLCw3X4Ki5mEhY",
              STATION_PREFIX_ORG: "HVC1#",
              DEVICE_PREFIX: "CT3#",
              SUITE_IDS: [
                "ljGfRmBXdRUwXdsC7jg8A4",
                "wI0YvzukuL3V12o1yiyLLV",
                "XGQuRqZBt69EtGurDNoVV7",
                "mdyi12W8izM2MILT2FRZ3Q",
              ],
              VALVES: [
                {
                  ONOFF_SP: {
                    NAME: "V13#ONOFF_SP",
                  },
                  ONOFF: {
                    NAME: "V13#ONOFF",
                  },
                  OFF: {
                    NAME: "V13#OFF",
                  },
                  ON: {
                    NAME: "V13#ON",
                  },
                  OFF_SP: {
                    NAME: "V13#OFF_SP",
                  },
                  ON_SP: {
                    NAME: "V13#ON_SP",
                  },
                  EB: {
                    NAME: "V13#EB",
                  },
                  AM: {
                    NAME: "V13#AM",
                  },
                  FAULT: {
                    NAME: "V13#FAULT",
                  },
                  NAME: "阀门#13",
                  TYPE: "D0A30",
                  ID: "BP8J7wISsJ4nmRCxV2pufp",
                  NO: 13,
                  VALVES: [],
                },
                {
                  ONOFF_SP: {
                    NAME: "V14#ONOFF_SP",
                  },
                  ONOFF: {
                    NAME: "V14#ONOFF",
                  },
                  OFF: {
                    NAME: "V14#OFF",
                  },
                  ON: {
                    NAME: "V14#ON",
                  },
                  OFF_SP: {
                    NAME: "V14#OFF_SP",
                  },
                  ON_SP: {
                    NAME: "V14#ON_SP",
                  },
                  EB: {
                    NAME: "V14#EB",
                  },
                  AM: {
                    NAME: "V14#AM",
                  },
                  FAULT: {
                    NAME: "V14#FAULT",
                  },
                  NAME: "阀门#14",
                  TYPE: "D0A30",
                  ID: "gHmtkUbK799frcw29TFRnl",
                  NO: 14,
                  VALVES: [],
                },
              ],
              OTHERS: {},
              CAP_NUM: 0,
            },
            {
              ONOFF_SP: {
                NAME: "CT4#ONOFF_SP",
              },
              ONOFF: {
                NAME: "CT4#ONOFF",
              },
              ON: {
                NAME: "CT4#ON",
              },
              OFF: {
                NAME: "CT4#OFF",
              },
              ON_SP: {
                NAME: "CT4#ON_SP",
              },
              OFF_SP: {
                NAME: "CT4#OFF_SP",
              },
              AM: {
                NAME: "CT4#AM",
              },
              EB: {
                NAME: "CT4#EB",
              },
              FAULT: {
                NAME: "CT4#FAULT",
              },
              FAULT_CODE: {
                NAME: "CT4#FAULT_CODE",
              },
              FAULT_RESET: {
                NAME: "CT4#FAULT_RESET",
              },
              RANK: {
                NAME: "CT4#RANK",
              },
              HRS_TOTAL: {
                NAME: "CT4#HRS_TOTAL",
              },
              HRS: {
                NAME: "CT4#HRS",
              },
              P: {
                NAME: "CT4#P",
              },
              W: {
                NAME: "CT4#W",
              },
              ELEC: {
                NAME: "CT4#ELEC",
              },
              COP: {
                NAME: "CT4#COP",
              },
              ONOFF_VFD_SP: {
                NAME: "CT4#ONOFF_VFD_SP",
              },
              ONOFF_VFD: {
                NAME: "CT4#ONOFF_VFD",
              },
              FREQ: {
                NAME: "CT4#FREQ",
              },
              FREQ_SP: {
                NAME: "CT4#FREQ_SP",
              },
              FAULT_VFD: {
                NAME: "CT4#FAULT_VFD",
              },
              P_VFD: {
                NAME: "CT4#P_VFD",
              },
              FLOW_RATED: {
                NAME: "CT4#FLOW_RATED",
              },
              P_RATED: {
                NAME: "CT4#P_RATED",
              },
              COP_RATED: {
                NAME: "CT4#COP_RATED",
              },
              ID: "RE8J3ykpC6RUtGSfiOigU3",
              NO: 4,
              NAME: "冷却塔#4",
              TYPE: "D0A1D",
              STATION_ID: "2OE6LBhoeLCw3X4Ki5mEhY",
              STATION_PREFIX_ORG: "HVC1#",
              DEVICE_PREFIX: "CT4#",
              SUITE_IDS: [
                "ljGfRmBXdRUwXdsC7jg8A4",
                "wI0YvzukuL3V12o1yiyLLV",
                "XGQuRqZBt69EtGurDNoVV7",
                "mdyi12W8izM2MILT2FRZ3Q",
              ],
              VALVES: [
                {
                  ONOFF_SP: {
                    NAME: "V16#ONOFF_SP",
                  },
                  ONOFF: {
                    NAME: "V16#ONOFF",
                  },
                  OFF: {
                    NAME: "V16#OFF",
                  },
                  ON: {
                    NAME: "V16#ON",
                  },
                  OFF_SP: {
                    NAME: "V16#OFF_SP",
                  },
                  ON_SP: {
                    NAME: "V16#ON_SP",
                  },
                  EB: {
                    NAME: "V16#EB",
                  },
                  AM: {
                    NAME: "V16#AM",
                  },
                  FAULT: {
                    NAME: "V16#FAULT",
                  },
                  NAME: "阀门#16",
                  TYPE: "D0A30",
                  ID: "t8js1U79E6Bf2tH7qb46hA",
                  NO: 16,
                  VALVES: [],
                },
                {
                  ONOFF_SP: {
                    NAME: "V15#ONOFF_SP",
                  },
                  ONOFF: {
                    NAME: "V15#ONOFF",
                  },
                  OFF: {
                    NAME: "V15#OFF",
                  },
                  ON: {
                    NAME: "V15#ON",
                  },
                  OFF_SP: {
                    NAME: "V15#OFF_SP",
                  },
                  ON_SP: {
                    NAME: "V15#ON_SP",
                  },
                  EB: {
                    NAME: "V15#EB",
                  },
                  AM: {
                    NAME: "V15#AM",
                  },
                  FAULT: {
                    NAME: "V15#FAULT",
                  },
                  NAME: "阀门#15",
                  TYPE: "D0A30",
                  ID: "Ma11HQ6JfGVjfYgG4brjnK",
                  NO: 15,
                  VALVES: [],
                },
              ],
              OTHERS: {},
              CAP_NUM: 0,
            },
          ],
          ID: "ljGfRmBXdRUwXdsC7jg8A4",
          NO: 1,
          NAME: "制冷机#1",
          TYPE: "D0A1A",
          STATION_ID: "2OE6LBhoeLCw3X4Ki5mEhY",
          STATION_PREFIX_ORG: "HVC1#",
          DEVICE_PREFIX: "CH1#",
          SUITE_IDS: [],
          VALVES: [
            {
              ONOFF_SP: {
                NAME: "V1#ONOFF_SP",
              },
              ONOFF: {
                NAME: "V1#ONOFF",
              },
              OFF: {
                NAME: "V1#OFF",
              },
              ON: {
                NAME: "V1#ON",
              },
              OFF_SP: {
                NAME: "V1#OFF_SP",
              },
              ON_SP: {
                NAME: "V1#ON_SP",
              },
              EB: {
                NAME: "V1#EB",
              },
              AM: {
                NAME: "V1#AM",
              },
              FAULT: {
                NAME: "V1#FAULT",
              },
              NAME: "阀门#1",
              TYPE: "D0A30",
              ID: "swREBwEISj3djv1BMnUJXz",
              NO: 1,
              VALVES: [],
            },
            {
              ONOFF_SP: {
                NAME: "V2#ONOFF_SP",
              },
              ONOFF: {
                NAME: "V2#ONOFF",
              },
              OFF: {
                NAME: "V2#OFF",
              },
              ON: {
                NAME: "V2#ON",
              },
              OFF_SP: {
                NAME: "V2#OFF_SP",
              },
              ON_SP: {
                NAME: "V2#ON_SP",
              },
              EB: {
                NAME: "V2#EB",
              },
              AM: {
                NAME: "V2#AM",
              },
              FAULT: {
                NAME: "V2#FAULT",
              },
              NAME: "阀门#2",
              TYPE: "D0A30",
              ID: "jXfEKV3ID_sOVUyr4gN8CS",
              NO: 2,
              VALVES: [],
            },
          ],
          OTHERS: {},
          CAP_NUM: 0,
        },
        wI0YvzukuL3V12o1yiyLLV: {
          ONOFF_SP: {
            NAME: "CH2#ONOFF_SP",
          },
          AM: {
            NAME: "CH2#AM",
          },
          EB: {
            NAME: "CH2#EB",
          },
          ONOFF: {
            NAME: "CH2#ONOFF",
          },
          ON: {
            NAME: "CH2#ON",
          },
          OFF: {
            NAME: "CH2#OFF",
          },
          ON_SP: {
            NAME: "CH2#ON_SP",
          },
          OFF_SP: {
            NAME: "CH2#OFF_SP",
          },
          FAULT: {
            NAME: "CH2#FAULT",
          },
          FAULT_CODE: {
            NAME: "CH2#FAULT_CODE",
          },
          FAULT_RESET: {
            NAME: "CH2#FAULT_RESET",
          },
          T_CHW_S: {
            NAME: "CH2#T_CHW_S",
          },
          T_CHW_S_SP: {
            NAME: "CH2#T_CHW_S_SP",
          },
          HRS_TOTAL: {
            NAME: "CH2#HRS_TOTAL",
          },
          HRS: {
            NAME: "CH2#HRS",
          },
          I_PCT: {
            NAME: "CH2#I_PCT",
          },
          I_PCT_MAX_SP: {
            NAME: "CH2#I_PCT_MAX_SP",
          },
          T_EXHT: {
            NAME: "CH2#T_EXHT",
          },
          T_EVAP_ENT: {
            NAME: "CH2#T_EVAP_ENT",
          },
          T_EVAP_LEV: {
            NAME: "CH2#T_EVAP_LEV",
          },
          T_EVAP: {
            NAME: "CH2#T_EVAP",
          },
          PR_EVAP: {
            NAME: "CH2#PR_EVAP",
          },
          T_COND_ENT: {
            NAME: "CH2#T_COND_ENT",
          },
          T_COND_LEV: {
            NAME: "CH2#T_COND_LEV",
          },
          T_COND: {
            NAME: "CH2#T_COND",
          },
          PR_COND: {
            NAME: "CH2#PR_COND",
          },
          T_OIL: {
            NAME: "CH2#T_OIL",
          },
          DPR_OIL: {
            NAME: "CH2#DPR_OIL",
          },
          COUNT_SS: {
            NAME: "CH2#COUNT_SS",
          },
          RANK: {
            NAME: "CH2#RANK",
          },
          P: {
            NAME: "CH2#P",
          },
          W: {
            NAME: "CH2#W",
          },
          ELEC: {
            NAME: "CH2#ELEC",
          },
          I: {
            NAME: "CH2#I",
          },
          COP: {
            NAME: "CH2#COP",
          },
          MODE: {
            NAME: "CH2#MODE",
          },
          T_COND_PROTECT: {
            NAME: "CH2#T_COND_PROTECT",
          },
          PR_EXHT_PROTECT: {
            NAME: "CH2#PR_EXHT_PROTECT",
          },
          P_RATED: {
            NAME: "CH2#P_RATED",
          },
          LOAD_RATED: {
            NAME: "CH2#LOAD_RATED",
            VALUE: "2000",
            VALUE_O: 2000,
          },
          COP_RATED: {
            NAME: "CH2#COP_RATED",
          },
          FLOW_CHW_RATED: {
            NAME: "CH2#FLOW_CHW_RATED",
          },
          FLOW_CW_RATED: {
            NAME: "CH2#FLOW_CW_RATED",
          },
          PLR: {
            NAME: "CH2#PLR",
          },
          LOAD: {
            NAME: "CH2#LOAD",
          },
          FLOW_CHW: {
            NAME: "CH2#FLOW_CHW",
          },
          FLOW_CW: {
            NAME: "CH2#FLOW_CW",
          },
          FLOW_CHW_SWITCH: {
            NAME: "CH2#FLOW_CHW_SWITCH",
          },
          FLOW_CW_SWITCH: {
            NAME: "CH2#FLOW_CW_SWITCH",
          },
          T_CW_R: {
            NAME: "CH2#T_CW_R",
          },
          ONECLICK_START: {
            NAME: "CH2#ONECLICK_START",
          },
          ONECLICK_STOP: {
            NAME: "CH2#ONECLICK_STOP",
          },
          CHWPS: [
            {
              ELEC: {
                NAME: "CHWP1#ELEC",
              },
              ONOFF_SP: {
                NAME: "CHWP1#ONOFF_SP",
              },
              ONOFF: {
                NAME: "CHWP1#ONOFF",
              },
              ON: {
                NAME: "CHWP1#ON",
              },
              OFF: {
                NAME: "CHWP1#OFF",
              },
              ON_SP: {
                NAME: "CHWP1#ON_SP",
              },
              OFF_SP: {
                NAME: "CHWP1#OFF_SP",
              },
              AM: {
                NAME: "CHWP1#AM",
              },
              EB: {
                NAME: "CHWP1#EB",
              },
              FAULT: {
                NAME: "CHWP1#FAULT",
              },
              FAULT_CODE: {
                NAME: "CHWP1#FAULT_CODE",
              },
              FAULT_RESET: {
                NAME: "CHWP1#FAULT_RESET",
              },
              RANK: {
                NAME: "CHWP1#RANK",
              },
              PR_INLET: {
                NAME: "CHWP1#PR_INLET",
              },
              PR_OUTLET: {
                NAME: "CHWP1#PR_OUTLET",
              },
              HRS_TOTAL: {
                NAME: "CHWP1#HRS_TOTAL",
              },
              HRS: {
                NAME: "CHWP1#HRS",
              },
              P: {
                NAME: "CHWP1#P",
              },
              W: {
                NAME: "CHWP1#W",
              },
              COP: {
                NAME: "CHWP1#COP",
              },
              ONOFF_VFD_SP: {
                NAME: "CHWP1#ONOFF_VFD_SP",
              },
              ONOFF_VFD: {
                NAME: "CHWP1#ONOFF_VFD",
              },
              FREQ: {
                NAME: "CHWP1#FREQ",
              },
              FREQ_SP: {
                NAME: "CHWP1#FREQ_SP",
              },
              FAULT_VFD: {
                NAME: "CHWP1#FAULT_VFD",
              },
              P_VFD: {
                NAME: "CHWP1#P_VFD",
              },
              FLOW_RATED: {
                NAME: "CHWP1#FLOW_RATED",
              },
              P_RATED: {
                NAME: "CHWP1#P_RATED",
              },
              COP_RATED: {
                NAME: "CHWP1#COP_RATED",
              },
              ID: "dvuy_JIQf2YuXBtzOFkDLY",
              NO: 1,
              NAME: "冷冻水泵#1",
              TYPE: "D0A1B",
              STATION_ID: "2OE6LBhoeLCw3X4Ki5mEhY",
              STATION_PREFIX_ORG: "HVC1#",
              DEVICE_PREFIX: "CHWP1#",
              SUITE_IDS: [
                "ljGfRmBXdRUwXdsC7jg8A4",
                "wI0YvzukuL3V12o1yiyLLV",
                "XGQuRqZBt69EtGurDNoVV7",
                "mdyi12W8izM2MILT2FRZ3Q",
              ],
              VALVES: [],
              OTHERS: {},
              CAP_NUM: 0,
            },
            {
              ELEC: {
                NAME: "CHWP2#ELEC",
              },
              ONOFF_SP: {
                NAME: "CHWP2#ONOFF_SP",
              },
              ONOFF: {
                NAME: "CHWP2#ONOFF",
              },
              ON: {
                NAME: "CHWP2#ON",
              },
              OFF: {
                NAME: "CHWP2#OFF",
              },
              ON_SP: {
                NAME: "CHWP2#ON_SP",
              },
              OFF_SP: {
                NAME: "CHWP2#OFF_SP",
              },
              AM: {
                NAME: "CHWP2#AM",
              },
              EB: {
                NAME: "CHWP2#EB",
              },
              FAULT: {
                NAME: "CHWP2#FAULT",
              },
              FAULT_CODE: {
                NAME: "CHWP2#FAULT_CODE",
              },
              FAULT_RESET: {
                NAME: "CHWP2#FAULT_RESET",
              },
              RANK: {
                NAME: "CHWP2#RANK",
              },
              PR_INLET: {
                NAME: "CHWP2#PR_INLET",
              },
              PR_OUTLET: {
                NAME: "CHWP2#PR_OUTLET",
              },
              HRS_TOTAL: {
                NAME: "CHWP2#HRS_TOTAL",
              },
              HRS: {
                NAME: "CHWP2#HRS",
              },
              P: {
                NAME: "CHWP2#P",
              },
              W: {
                NAME: "CHWP2#W",
              },
              COP: {
                NAME: "CHWP2#COP",
              },
              ONOFF_VFD_SP: {
                NAME: "CHWP2#ONOFF_VFD_SP",
              },
              ONOFF_VFD: {
                NAME: "CHWP2#ONOFF_VFD",
              },
              FREQ: {
                NAME: "CHWP2#FREQ",
              },
              FREQ_SP: {
                NAME: "CHWP2#FREQ_SP",
              },
              FAULT_VFD: {
                NAME: "CHWP2#FAULT_VFD",
              },
              P_VFD: {
                NAME: "CHWP2#P_VFD",
              },
              FLOW_RATED: {
                NAME: "CHWP2#FLOW_RATED",
              },
              P_RATED: {
                NAME: "CHWP2#P_RATED",
              },
              COP_RATED: {
                NAME: "CHWP2#COP_RATED",
              },
              ID: "m1RJZR4AJCnQkycGfkkyV6",
              NO: 2,
              NAME: "冷冻水泵#2",
              TYPE: "D0A1B",
              STATION_ID: "2OE6LBhoeLCw3X4Ki5mEhY",
              STATION_PREFIX_ORG: "HVC1#",
              DEVICE_PREFIX: "CHWP2#",
              SUITE_IDS: [
                "ljGfRmBXdRUwXdsC7jg8A4",
                "wI0YvzukuL3V12o1yiyLLV",
                "XGQuRqZBt69EtGurDNoVV7",
                "mdyi12W8izM2MILT2FRZ3Q",
              ],
              VALVES: [],
              OTHERS: {},
              CAP_NUM: 0,
            },
            {
              ELEC: {
                NAME: "CHWP3#ELEC",
              },
              ONOFF_SP: {
                NAME: "CHWP3#ONOFF_SP",
              },
              ONOFF: {
                NAME: "CHWP3#ONOFF",
              },
              ON: {
                NAME: "CHWP3#ON",
              },
              OFF: {
                NAME: "CHWP3#OFF",
              },
              ON_SP: {
                NAME: "CHWP3#ON_SP",
              },
              OFF_SP: {
                NAME: "CHWP3#OFF_SP",
              },
              AM: {
                NAME: "CHWP3#AM",
              },
              EB: {
                NAME: "CHWP3#EB",
              },
              FAULT: {
                NAME: "CHWP3#FAULT",
              },
              FAULT_CODE: {
                NAME: "CHWP3#FAULT_CODE",
              },
              FAULT_RESET: {
                NAME: "CHWP3#FAULT_RESET",
              },
              RANK: {
                NAME: "CHWP3#RANK",
              },
              PR_INLET: {
                NAME: "CHWP3#PR_INLET",
              },
              PR_OUTLET: {
                NAME: "CHWP3#PR_OUTLET",
              },
              HRS_TOTAL: {
                NAME: "CHWP3#HRS_TOTAL",
              },
              HRS: {
                NAME: "CHWP3#HRS",
              },
              P: {
                NAME: "CHWP3#P",
              },
              W: {
                NAME: "CHWP3#W",
              },
              COP: {
                NAME: "CHWP3#COP",
              },
              ONOFF_VFD_SP: {
                NAME: "CHWP3#ONOFF_VFD_SP",
              },
              ONOFF_VFD: {
                NAME: "CHWP3#ONOFF_VFD",
              },
              FREQ: {
                NAME: "CHWP3#FREQ",
              },
              FREQ_SP: {
                NAME: "CHWP3#FREQ_SP",
              },
              FAULT_VFD: {
                NAME: "CHWP3#FAULT_VFD",
              },
              P_VFD: {
                NAME: "CHWP3#P_VFD",
              },
              FLOW_RATED: {
                NAME: "CHWP3#FLOW_RATED",
              },
              P_RATED: {
                NAME: "CHWP3#P_RATED",
              },
              COP_RATED: {
                NAME: "CHWP3#COP_RATED",
              },
              ID: "fJdoIuCK4NFTETY8K_MWQG",
              NO: 3,
              NAME: "冷冻水泵#3",
              TYPE: "D0A1B",
              STATION_ID: "2OE6LBhoeLCw3X4Ki5mEhY",
              STATION_PREFIX_ORG: "HVC1#",
              DEVICE_PREFIX: "CHWP3#",
              SUITE_IDS: [
                "ljGfRmBXdRUwXdsC7jg8A4",
                "wI0YvzukuL3V12o1yiyLLV",
                "XGQuRqZBt69EtGurDNoVV7",
                "mdyi12W8izM2MILT2FRZ3Q",
              ],
              VALVES: [],
              OTHERS: {},
              CAP_NUM: 0,
            },
            {
              ELEC: {
                NAME: "CHWP4#ELEC",
              },
              ONOFF_SP: {
                NAME: "CHWP4#ONOFF_SP",
              },
              ONOFF: {
                NAME: "CHWP4#ONOFF",
              },
              ON: {
                NAME: "CHWP4#ON",
              },
              OFF: {
                NAME: "CHWP4#OFF",
              },
              ON_SP: {
                NAME: "CHWP4#ON_SP",
              },
              OFF_SP: {
                NAME: "CHWP4#OFF_SP",
              },
              AM: {
                NAME: "CHWP4#AM",
              },
              EB: {
                NAME: "CHWP4#EB",
              },
              FAULT: {
                NAME: "CHWP4#FAULT",
              },
              FAULT_CODE: {
                NAME: "CHWP4#FAULT_CODE",
              },
              FAULT_RESET: {
                NAME: "CHWP4#FAULT_RESET",
              },
              RANK: {
                NAME: "CHWP4#RANK",
              },
              PR_INLET: {
                NAME: "CHWP4#PR_INLET",
              },
              PR_OUTLET: {
                NAME: "CHWP4#PR_OUTLET",
              },
              HRS_TOTAL: {
                NAME: "CHWP4#HRS_TOTAL",
              },
              HRS: {
                NAME: "CHWP4#HRS",
              },
              P: {
                NAME: "CHWP4#P",
              },
              W: {
                NAME: "CHWP4#W",
              },
              COP: {
                NAME: "CHWP4#COP",
              },
              ONOFF_VFD_SP: {
                NAME: "CHWP4#ONOFF_VFD_SP",
              },
              ONOFF_VFD: {
                NAME: "CHWP4#ONOFF_VFD",
              },
              FREQ: {
                NAME: "CHWP4#FREQ",
              },
              FREQ_SP: {
                NAME: "CHWP4#FREQ_SP",
              },
              FAULT_VFD: {
                NAME: "CHWP4#FAULT_VFD",
              },
              P_VFD: {
                NAME: "CHWP4#P_VFD",
              },
              FLOW_RATED: {
                NAME: "CHWP4#FLOW_RATED",
              },
              P_RATED: {
                NAME: "CHWP4#P_RATED",
              },
              COP_RATED: {
                NAME: "CHWP4#COP_RATED",
              },
              ID: "TW9AcYLFTrOecDLa_KrLnv",
              NO: 4,
              NAME: "冷冻水泵#4",
              TYPE: "D0A1B",
              STATION_ID: "2OE6LBhoeLCw3X4Ki5mEhY",
              STATION_PREFIX_ORG: "HVC1#",
              DEVICE_PREFIX: "CHWP4#",
              SUITE_IDS: [
                "ljGfRmBXdRUwXdsC7jg8A4",
                "wI0YvzukuL3V12o1yiyLLV",
                "XGQuRqZBt69EtGurDNoVV7",
                "mdyi12W8izM2MILT2FRZ3Q",
              ],
              VALVES: [],
              OTHERS: {},
              CAP_NUM: 0,
            },
          ],
          SCHWPS: [],
          CWPS: [
            {
              ELEC: {
                NAME: "CWP1#ELEC",
              },
              ONOFF_SP: {
                NAME: "CWP1#ONOFF_SP",
              },
              ONOFF: {
                NAME: "CWP1#ONOFF",
              },
              ON: {
                NAME: "CWP1#ON",
              },
              OFF: {
                NAME: "CWP1#OFF",
              },
              ON_SP: {
                NAME: "CWP1#ON_SP",
              },
              OFF_SP: {
                NAME: "CWP1#OFF_SP",
              },
              AM: {
                NAME: "CWP1#AM",
              },
              EB: {
                NAME: "CWP1#EB",
              },
              FAULT: {
                NAME: "CWP1#FAULT",
              },
              FAULT_CODE: {
                NAME: "CWP1#FAULT_CODE",
              },
              FAULT_RESET: {
                NAME: "CWP1#FAULT_RESET",
              },
              RANK: {
                NAME: "CWP1#RANK",
              },
              PR_INLET: {
                NAME: "CWP1#PR_INLET",
              },
              PR_OUTLET: {
                NAME: "CWP1#PR_OUTLET",
              },
              HRS_TOTAL: {
                NAME: "CWP1#HRS_TOTAL",
              },
              HRS: {
                NAME: "CWP1#HRS",
              },
              P: {
                NAME: "CWP1#P",
              },
              W: {
                NAME: "CWP1#W",
              },
              COP: {
                NAME: "CWP1#COP",
              },
              ONOFF_VFD_SP: {
                NAME: "CWP1#ONOFF_VFD_SP",
              },
              ONOFF_VFD: {
                NAME: "CWP1#ONOFF_VFD",
              },
              FREQ: {
                NAME: "CWP1#FREQ",
              },
              FREQ_SP: {
                NAME: "CWP1#FREQ_SP",
              },
              FAULT_VFD: {
                NAME: "CWP1#FAULT_VFD",
              },
              P_VFD: {
                NAME: "CWP1#P_VFD",
              },
              FLOW_RATED: {
                NAME: "CWP1#FLOW_RATED",
              },
              P_RATED: {
                NAME: "CWP1#P_RATED",
              },
              COP_RATED: {
                NAME: "CWP1#COP_RATED",
              },
              ID: "c8uzkkrC4l9Ui0IWyEVG45",
              NO: 1,
              NAME: "冷却水泵#1",
              TYPE: "D0A1C",
              STATION_ID: "2OE6LBhoeLCw3X4Ki5mEhY",
              STATION_PREFIX_ORG: "HVC1#",
              DEVICE_PREFIX: "CWP1#",
              SUITE_IDS: [
                "ljGfRmBXdRUwXdsC7jg8A4",
                "wI0YvzukuL3V12o1yiyLLV",
                "XGQuRqZBt69EtGurDNoVV7",
                "mdyi12W8izM2MILT2FRZ3Q",
              ],
              VALVES: [],
              OTHERS: {},
              CAP_NUM: 0,
            },
            {
              ELEC: {
                NAME: "CWP2#ELEC",
              },
              ONOFF_SP: {
                NAME: "CWP2#ONOFF_SP",
              },
              ONOFF: {
                NAME: "CWP2#ONOFF",
              },
              ON: {
                NAME: "CWP2#ON",
              },
              OFF: {
                NAME: "CWP2#OFF",
              },
              ON_SP: {
                NAME: "CWP2#ON_SP",
              },
              OFF_SP: {
                NAME: "CWP2#OFF_SP",
              },
              AM: {
                NAME: "CWP2#AM",
              },
              EB: {
                NAME: "CWP2#EB",
              },
              FAULT: {
                NAME: "CWP2#FAULT",
              },
              FAULT_CODE: {
                NAME: "CWP2#FAULT_CODE",
              },
              FAULT_RESET: {
                NAME: "CWP2#FAULT_RESET",
              },
              RANK: {
                NAME: "CWP2#RANK",
              },
              PR_INLET: {
                NAME: "CWP2#PR_INLET",
              },
              PR_OUTLET: {
                NAME: "CWP2#PR_OUTLET",
              },
              HRS_TOTAL: {
                NAME: "CWP2#HRS_TOTAL",
              },
              HRS: {
                NAME: "CWP2#HRS",
              },
              P: {
                NAME: "CWP2#P",
              },
              W: {
                NAME: "CWP2#W",
              },
              COP: {
                NAME: "CWP2#COP",
              },
              ONOFF_VFD_SP: {
                NAME: "CWP2#ONOFF_VFD_SP",
              },
              ONOFF_VFD: {
                NAME: "CWP2#ONOFF_VFD",
              },
              FREQ: {
                NAME: "CWP2#FREQ",
              },
              FREQ_SP: {
                NAME: "CWP2#FREQ_SP",
              },
              FAULT_VFD: {
                NAME: "CWP2#FAULT_VFD",
              },
              P_VFD: {
                NAME: "CWP2#P_VFD",
              },
              FLOW_RATED: {
                NAME: "CWP2#FLOW_RATED",
              },
              P_RATED: {
                NAME: "CWP2#P_RATED",
              },
              COP_RATED: {
                NAME: "CWP2#COP_RATED",
              },
              ID: "3cikHzRIya50UMs8LsC3zg",
              NO: 2,
              NAME: "冷却水泵#2",
              TYPE: "D0A1C",
              STATION_ID: "2OE6LBhoeLCw3X4Ki5mEhY",
              STATION_PREFIX_ORG: "HVC1#",
              DEVICE_PREFIX: "CWP2#",
              SUITE_IDS: [
                "ljGfRmBXdRUwXdsC7jg8A4",
                "wI0YvzukuL3V12o1yiyLLV",
                "XGQuRqZBt69EtGurDNoVV7",
                "mdyi12W8izM2MILT2FRZ3Q",
              ],
              VALVES: [],
              OTHERS: {},
              CAP_NUM: 0,
            },
            {
              ELEC: {
                NAME: "CWP3#ELEC",
              },
              ONOFF_SP: {
                NAME: "CWP3#ONOFF_SP",
              },
              ONOFF: {
                NAME: "CWP3#ONOFF",
              },
              ON: {
                NAME: "CWP3#ON",
              },
              OFF: {
                NAME: "CWP3#OFF",
              },
              ON_SP: {
                NAME: "CWP3#ON_SP",
              },
              OFF_SP: {
                NAME: "CWP3#OFF_SP",
              },
              AM: {
                NAME: "CWP3#AM",
              },
              EB: {
                NAME: "CWP3#EB",
              },
              FAULT: {
                NAME: "CWP3#FAULT",
              },
              FAULT_CODE: {
                NAME: "CWP3#FAULT_CODE",
              },
              FAULT_RESET: {
                NAME: "CWP3#FAULT_RESET",
              },
              RANK: {
                NAME: "CWP3#RANK",
              },
              PR_INLET: {
                NAME: "CWP3#PR_INLET",
              },
              PR_OUTLET: {
                NAME: "CWP3#PR_OUTLET",
              },
              HRS_TOTAL: {
                NAME: "CWP3#HRS_TOTAL",
              },
              HRS: {
                NAME: "CWP3#HRS",
              },
              P: {
                NAME: "CWP3#P",
              },
              W: {
                NAME: "CWP3#W",
              },
              COP: {
                NAME: "CWP3#COP",
              },
              ONOFF_VFD_SP: {
                NAME: "CWP3#ONOFF_VFD_SP",
              },
              ONOFF_VFD: {
                NAME: "CWP3#ONOFF_VFD",
              },
              FREQ: {
                NAME: "CWP3#FREQ",
              },
              FREQ_SP: {
                NAME: "CWP3#FREQ_SP",
              },
              FAULT_VFD: {
                NAME: "CWP3#FAULT_VFD",
              },
              P_VFD: {
                NAME: "CWP3#P_VFD",
              },
              FLOW_RATED: {
                NAME: "CWP3#FLOW_RATED",
              },
              P_RATED: {
                NAME: "CWP3#P_RATED",
              },
              COP_RATED: {
                NAME: "CWP3#COP_RATED",
              },
              ID: "QDfEG9ORVEUlXT3Q0D9z8L",
              NO: 3,
              NAME: "冷却水泵#3",
              TYPE: "D0A1C",
              STATION_ID: "2OE6LBhoeLCw3X4Ki5mEhY",
              STATION_PREFIX_ORG: "HVC1#",
              DEVICE_PREFIX: "CWP3#",
              SUITE_IDS: [
                "ljGfRmBXdRUwXdsC7jg8A4",
                "wI0YvzukuL3V12o1yiyLLV",
                "XGQuRqZBt69EtGurDNoVV7",
                "mdyi12W8izM2MILT2FRZ3Q",
              ],
              VALVES: [],
              OTHERS: {},
              CAP_NUM: 0,
            },
            {
              ELEC: {
                NAME: "CWP4#ELEC",
              },
              ONOFF_SP: {
                NAME: "CWP4#ONOFF_SP",
              },
              ONOFF: {
                NAME: "CWP4#ONOFF",
              },
              ON: {
                NAME: "CWP4#ON",
              },
              OFF: {
                NAME: "CWP4#OFF",
              },
              ON_SP: {
                NAME: "CWP4#ON_SP",
              },
              OFF_SP: {
                NAME: "CWP4#OFF_SP",
              },
              AM: {
                NAME: "CWP4#AM",
              },
              EB: {
                NAME: "CWP4#EB",
              },
              FAULT: {
                NAME: "CWP4#FAULT",
              },
              FAULT_CODE: {
                NAME: "CWP4#FAULT_CODE",
              },
              FAULT_RESET: {
                NAME: "CWP4#FAULT_RESET",
              },
              RANK: {
                NAME: "CWP4#RANK",
              },
              PR_INLET: {
                NAME: "CWP4#PR_INLET",
              },
              PR_OUTLET: {
                NAME: "CWP4#PR_OUTLET",
              },
              HRS_TOTAL: {
                NAME: "CWP4#HRS_TOTAL",
              },
              HRS: {
                NAME: "CWP4#HRS",
              },
              P: {
                NAME: "CWP4#P",
              },
              W: {
                NAME: "CWP4#W",
              },
              COP: {
                NAME: "CWP4#COP",
              },
              ONOFF_VFD_SP: {
                NAME: "CWP4#ONOFF_VFD_SP",
              },
              ONOFF_VFD: {
                NAME: "CWP4#ONOFF_VFD",
              },
              FREQ: {
                NAME: "CWP4#FREQ",
              },
              FREQ_SP: {
                NAME: "CWP4#FREQ_SP",
              },
              FAULT_VFD: {
                NAME: "CWP4#FAULT_VFD",
              },
              P_VFD: {
                NAME: "CWP4#P_VFD",
              },
              FLOW_RATED: {
                NAME: "CWP4#FLOW_RATED",
              },
              P_RATED: {
                NAME: "CWP4#P_RATED",
              },
              COP_RATED: {
                NAME: "CWP4#COP_RATED",
              },
              ID: "E9F8NArlUYGJFZwZbxW3Z7",
              NO: 4,
              NAME: "冷却水泵#4",
              TYPE: "D0A1C",
              STATION_ID: "2OE6LBhoeLCw3X4Ki5mEhY",
              STATION_PREFIX_ORG: "HVC1#",
              DEVICE_PREFIX: "CWP4#",
              SUITE_IDS: [
                "ljGfRmBXdRUwXdsC7jg8A4",
                "wI0YvzukuL3V12o1yiyLLV",
                "XGQuRqZBt69EtGurDNoVV7",
                "mdyi12W8izM2MILT2FRZ3Q",
              ],
              VALVES: [],
              OTHERS: {},
              CAP_NUM: 0,
            },
          ],
          CTS: [
            {
              ONOFF_SP: {
                NAME: "CT1#ONOFF_SP",
              },
              ONOFF: {
                NAME: "CT1#ONOFF",
              },
              ON: {
                NAME: "CT1#ON",
              },
              OFF: {
                NAME: "CT1#OFF",
              },
              ON_SP: {
                NAME: "CT1#ON_SP",
              },
              OFF_SP: {
                NAME: "CT1#OFF_SP",
              },
              AM: {
                NAME: "CT1#AM",
              },
              EB: {
                NAME: "CT1#EB",
              },
              FAULT: {
                NAME: "CT1#FAULT",
              },
              FAULT_CODE: {
                NAME: "CT1#FAULT_CODE",
              },
              FAULT_RESET: {
                NAME: "CT1#FAULT_RESET",
              },
              RANK: {
                NAME: "CT1#RANK",
              },
              HRS_TOTAL: {
                NAME: "CT1#HRS_TOTAL",
              },
              HRS: {
                NAME: "CT1#HRS",
              },
              P: {
                NAME: "CT1#P",
              },
              W: {
                NAME: "CT1#W",
              },
              ELEC: {
                NAME: "CT1#ELEC",
              },
              COP: {
                NAME: "CT1#COP",
              },
              ONOFF_VFD_SP: {
                NAME: "CT1#ONOFF_VFD_SP",
              },
              ONOFF_VFD: {
                NAME: "CT1#ONOFF_VFD",
              },
              FREQ: {
                NAME: "CT1#FREQ",
              },
              FREQ_SP: {
                NAME: "CT1#FREQ_SP",
              },
              FAULT_VFD: {
                NAME: "CT1#FAULT_VFD",
              },
              P_VFD: {
                NAME: "CT1#P_VFD",
              },
              FLOW_RATED: {
                NAME: "CT1#FLOW_RATED",
              },
              P_RATED: {
                NAME: "CT1#P_RATED",
              },
              COP_RATED: {
                NAME: "CT1#COP_RATED",
              },
              ID: "ee4ofIjLr4WRjIQFPVro58",
              NO: 1,
              NAME: "冷却塔#1",
              TYPE: "D0A1D",
              STATION_ID: "2OE6LBhoeLCw3X4Ki5mEhY",
              STATION_PREFIX_ORG: "HVC1#",
              DEVICE_PREFIX: "CT1#",
              SUITE_IDS: [
                "ljGfRmBXdRUwXdsC7jg8A4",
                "wI0YvzukuL3V12o1yiyLLV",
                "XGQuRqZBt69EtGurDNoVV7",
                "mdyi12W8izM2MILT2FRZ3Q",
              ],
              VALVES: [
                {
                  ONOFF_SP: {
                    NAME: "V9#ONOFF_SP",
                  },
                  ONOFF: {
                    NAME: "V9#ONOFF",
                  },
                  OFF: {
                    NAME: "V9#OFF",
                  },
                  ON: {
                    NAME: "V9#ON",
                  },
                  OFF_SP: {
                    NAME: "V9#OFF_SP",
                  },
                  ON_SP: {
                    NAME: "V9#ON_SP",
                  },
                  EB: {
                    NAME: "V9#EB",
                  },
                  AM: {
                    NAME: "V9#AM",
                  },
                  FAULT: {
                    NAME: "V9#FAULT",
                  },
                  NAME: "阀门#9",
                  TYPE: "D0A30",
                  ID: "bi2S1oBhLeKE6TIl37vdDB",
                  NO: 9,
                  VALVES: [],
                },
                {
                  ONOFF_SP: {
                    NAME: "V10#ONOFF_SP",
                  },
                  ONOFF: {
                    NAME: "V10#ONOFF",
                  },
                  OFF: {
                    NAME: "V10#OFF",
                  },
                  ON: {
                    NAME: "V10#ON",
                  },
                  OFF_SP: {
                    NAME: "V10#OFF_SP",
                  },
                  ON_SP: {
                    NAME: "V10#ON_SP",
                  },
                  EB: {
                    NAME: "V10#EB",
                  },
                  AM: {
                    NAME: "V10#AM",
                  },
                  FAULT: {
                    NAME: "V10#FAULT",
                  },
                  NAME: "阀门#10",
                  TYPE: "D0A30",
                  ID: "YtPHM3z8XmC3x37VMNfrG0",
                  NO: 10,
                  VALVES: [],
                },
              ],
              OTHERS: {},
              CAP_NUM: 0,
            },
            {
              ONOFF_SP: {
                NAME: "CT2#ONOFF_SP",
              },
              ONOFF: {
                NAME: "CT2#ONOFF",
              },
              ON: {
                NAME: "CT2#ON",
              },
              OFF: {
                NAME: "CT2#OFF",
              },
              ON_SP: {
                NAME: "CT2#ON_SP",
              },
              OFF_SP: {
                NAME: "CT2#OFF_SP",
              },
              AM: {
                NAME: "CT2#AM",
              },
              EB: {
                NAME: "CT2#EB",
              },
              FAULT: {
                NAME: "CT2#FAULT",
              },
              FAULT_CODE: {
                NAME: "CT2#FAULT_CODE",
              },
              FAULT_RESET: {
                NAME: "CT2#FAULT_RESET",
              },
              RANK: {
                NAME: "CT2#RANK",
              },
              HRS_TOTAL: {
                NAME: "CT2#HRS_TOTAL",
              },
              HRS: {
                NAME: "CT2#HRS",
              },
              P: {
                NAME: "CT2#P",
              },
              W: {
                NAME: "CT2#W",
              },
              ELEC: {
                NAME: "CT2#ELEC",
              },
              COP: {
                NAME: "CT2#COP",
              },
              ONOFF_VFD_SP: {
                NAME: "CT2#ONOFF_VFD_SP",
              },
              ONOFF_VFD: {
                NAME: "CT2#ONOFF_VFD",
              },
              FREQ: {
                NAME: "CT2#FREQ",
              },
              FREQ_SP: {
                NAME: "CT2#FREQ_SP",
              },
              FAULT_VFD: {
                NAME: "CT2#FAULT_VFD",
              },
              P_VFD: {
                NAME: "CT2#P_VFD",
              },
              FLOW_RATED: {
                NAME: "CT2#FLOW_RATED",
              },
              P_RATED: {
                NAME: "CT2#P_RATED",
              },
              COP_RATED: {
                NAME: "CT2#COP_RATED",
              },
              ID: "cSvhfgynIwK7_iDzbHIZ7I",
              NO: 2,
              NAME: "冷却塔#2",
              TYPE: "D0A1D",
              STATION_ID: "2OE6LBhoeLCw3X4Ki5mEhY",
              STATION_PREFIX_ORG: "HVC1#",
              DEVICE_PREFIX: "CT2#",
              SUITE_IDS: [
                "ljGfRmBXdRUwXdsC7jg8A4",
                "wI0YvzukuL3V12o1yiyLLV",
                "XGQuRqZBt69EtGurDNoVV7",
                "mdyi12W8izM2MILT2FRZ3Q",
              ],
              VALVES: [
                {
                  ONOFF_SP: {
                    NAME: "V11#ONOFF_SP",
                  },
                  ONOFF: {
                    NAME: "V11#ONOFF",
                  },
                  OFF: {
                    NAME: "V11#OFF",
                  },
                  ON: {
                    NAME: "V11#ON",
                  },
                  OFF_SP: {
                    NAME: "V11#OFF_SP",
                  },
                  ON_SP: {
                    NAME: "V11#ON_SP",
                  },
                  EB: {
                    NAME: "V11#EB",
                  },
                  AM: {
                    NAME: "V11#AM",
                  },
                  FAULT: {
                    NAME: "V11#FAULT",
                  },
                  NAME: "阀门#11",
                  TYPE: "D0A30",
                  ID: "2VlqwFEAYJnBnecsQdflri",
                  NO: 11,
                  VALVES: [],
                },
                {
                  ONOFF_SP: {
                    NAME: "V12#ONOFF_SP",
                  },
                  ONOFF: {
                    NAME: "V12#ONOFF",
                  },
                  OFF: {
                    NAME: "V12#OFF",
                  },
                  ON: {
                    NAME: "V12#ON",
                  },
                  OFF_SP: {
                    NAME: "V12#OFF_SP",
                  },
                  ON_SP: {
                    NAME: "V12#ON_SP",
                  },
                  EB: {
                    NAME: "V12#EB",
                  },
                  AM: {
                    NAME: "V12#AM",
                  },
                  FAULT: {
                    NAME: "V12#FAULT",
                  },
                  NAME: "阀门#12",
                  TYPE: "D0A30",
                  ID: "DoXn8Av4ib3OVZ5mJX7fOJ",
                  NO: 12,
                  VALVES: [],
                },
              ],
              OTHERS: {},
              CAP_NUM: 0,
            },
            {
              ONOFF_SP: {
                NAME: "CT3#ONOFF_SP",
              },
              ONOFF: {
                NAME: "CT3#ONOFF",
              },
              ON: {
                NAME: "CT3#ON",
              },
              OFF: {
                NAME: "CT3#OFF",
              },
              ON_SP: {
                NAME: "CT3#ON_SP",
              },
              OFF_SP: {
                NAME: "CT3#OFF_SP",
              },
              AM: {
                NAME: "CT3#AM",
              },
              EB: {
                NAME: "CT3#EB",
              },
              FAULT: {
                NAME: "CT3#FAULT",
              },
              FAULT_CODE: {
                NAME: "CT3#FAULT_CODE",
              },
              FAULT_RESET: {
                NAME: "CT3#FAULT_RESET",
              },
              RANK: {
                NAME: "CT3#RANK",
              },
              HRS_TOTAL: {
                NAME: "CT3#HRS_TOTAL",
              },
              HRS: {
                NAME: "CT3#HRS",
              },
              P: {
                NAME: "CT3#P",
              },
              W: {
                NAME: "CT3#W",
              },
              ELEC: {
                NAME: "CT3#ELEC",
              },
              COP: {
                NAME: "CT3#COP",
              },
              ONOFF_VFD_SP: {
                NAME: "CT3#ONOFF_VFD_SP",
              },
              ONOFF_VFD: {
                NAME: "CT3#ONOFF_VFD",
              },
              FREQ: {
                NAME: "CT3#FREQ",
              },
              FREQ_SP: {
                NAME: "CT3#FREQ_SP",
              },
              FAULT_VFD: {
                NAME: "CT3#FAULT_VFD",
              },
              P_VFD: {
                NAME: "CT3#P_VFD",
              },
              FLOW_RATED: {
                NAME: "CT3#FLOW_RATED",
              },
              P_RATED: {
                NAME: "CT3#P_RATED",
              },
              COP_RATED: {
                NAME: "CT3#COP_RATED",
              },
              ID: "5Bv3pNiaQ0Oe_yrJJuyP2I",
              NO: 3,
              NAME: "冷却塔#3",
              TYPE: "D0A1D",
              STATION_ID: "2OE6LBhoeLCw3X4Ki5mEhY",
              STATION_PREFIX_ORG: "HVC1#",
              DEVICE_PREFIX: "CT3#",
              SUITE_IDS: [
                "ljGfRmBXdRUwXdsC7jg8A4",
                "wI0YvzukuL3V12o1yiyLLV",
                "XGQuRqZBt69EtGurDNoVV7",
                "mdyi12W8izM2MILT2FRZ3Q",
              ],
              VALVES: [
                {
                  ONOFF_SP: {
                    NAME: "V13#ONOFF_SP",
                  },
                  ONOFF: {
                    NAME: "V13#ONOFF",
                  },
                  OFF: {
                    NAME: "V13#OFF",
                  },
                  ON: {
                    NAME: "V13#ON",
                  },
                  OFF_SP: {
                    NAME: "V13#OFF_SP",
                  },
                  ON_SP: {
                    NAME: "V13#ON_SP",
                  },
                  EB: {
                    NAME: "V13#EB",
                  },
                  AM: {
                    NAME: "V13#AM",
                  },
                  FAULT: {
                    NAME: "V13#FAULT",
                  },
                  NAME: "阀门#13",
                  TYPE: "D0A30",
                  ID: "BP8J7wISsJ4nmRCxV2pufp",
                  NO: 13,
                  VALVES: [],
                },
                {
                  ONOFF_SP: {
                    NAME: "V14#ONOFF_SP",
                  },
                  ONOFF: {
                    NAME: "V14#ONOFF",
                  },
                  OFF: {
                    NAME: "V14#OFF",
                  },
                  ON: {
                    NAME: "V14#ON",
                  },
                  OFF_SP: {
                    NAME: "V14#OFF_SP",
                  },
                  ON_SP: {
                    NAME: "V14#ON_SP",
                  },
                  EB: {
                    NAME: "V14#EB",
                  },
                  AM: {
                    NAME: "V14#AM",
                  },
                  FAULT: {
                    NAME: "V14#FAULT",
                  },
                  NAME: "阀门#14",
                  TYPE: "D0A30",
                  ID: "gHmtkUbK799frcw29TFRnl",
                  NO: 14,
                  VALVES: [],
                },
              ],
              OTHERS: {},
              CAP_NUM: 0,
            },
            {
              ONOFF_SP: {
                NAME: "CT4#ONOFF_SP",
              },
              ONOFF: {
                NAME: "CT4#ONOFF",
              },
              ON: {
                NAME: "CT4#ON",
              },
              OFF: {
                NAME: "CT4#OFF",
              },
              ON_SP: {
                NAME: "CT4#ON_SP",
              },
              OFF_SP: {
                NAME: "CT4#OFF_SP",
              },
              AM: {
                NAME: "CT4#AM",
              },
              EB: {
                NAME: "CT4#EB",
              },
              FAULT: {
                NAME: "CT4#FAULT",
              },
              FAULT_CODE: {
                NAME: "CT4#FAULT_CODE",
              },
              FAULT_RESET: {
                NAME: "CT4#FAULT_RESET",
              },
              RANK: {
                NAME: "CT4#RANK",
              },
              HRS_TOTAL: {
                NAME: "CT4#HRS_TOTAL",
              },
              HRS: {
                NAME: "CT4#HRS",
              },
              P: {
                NAME: "CT4#P",
              },
              W: {
                NAME: "CT4#W",
              },
              ELEC: {
                NAME: "CT4#ELEC",
              },
              COP: {
                NAME: "CT4#COP",
              },
              ONOFF_VFD_SP: {
                NAME: "CT4#ONOFF_VFD_SP",
              },
              ONOFF_VFD: {
                NAME: "CT4#ONOFF_VFD",
              },
              FREQ: {
                NAME: "CT4#FREQ",
              },
              FREQ_SP: {
                NAME: "CT4#FREQ_SP",
              },
              FAULT_VFD: {
                NAME: "CT4#FAULT_VFD",
              },
              P_VFD: {
                NAME: "CT4#P_VFD",
              },
              FLOW_RATED: {
                NAME: "CT4#FLOW_RATED",
              },
              P_RATED: {
                NAME: "CT4#P_RATED",
              },
              COP_RATED: {
                NAME: "CT4#COP_RATED",
              },
              ID: "RE8J3ykpC6RUtGSfiOigU3",
              NO: 4,
              NAME: "冷却塔#4",
              TYPE: "D0A1D",
              STATION_ID: "2OE6LBhoeLCw3X4Ki5mEhY",
              STATION_PREFIX_ORG: "HVC1#",
              DEVICE_PREFIX: "CT4#",
              SUITE_IDS: [
                "ljGfRmBXdRUwXdsC7jg8A4",
                "wI0YvzukuL3V12o1yiyLLV",
                "XGQuRqZBt69EtGurDNoVV7",
                "mdyi12W8izM2MILT2FRZ3Q",
              ],
              VALVES: [
                {
                  ONOFF_SP: {
                    NAME: "V16#ONOFF_SP",
                  },
                  ONOFF: {
                    NAME: "V16#ONOFF",
                  },
                  OFF: {
                    NAME: "V16#OFF",
                  },
                  ON: {
                    NAME: "V16#ON",
                  },
                  OFF_SP: {
                    NAME: "V16#OFF_SP",
                  },
                  ON_SP: {
                    NAME: "V16#ON_SP",
                  },
                  EB: {
                    NAME: "V16#EB",
                  },
                  AM: {
                    NAME: "V16#AM",
                  },
                  FAULT: {
                    NAME: "V16#FAULT",
                  },
                  NAME: "阀门#16",
                  TYPE: "D0A30",
                  ID: "t8js1U79E6Bf2tH7qb46hA",
                  NO: 16,
                  VALVES: [],
                },
                {
                  ONOFF_SP: {
                    NAME: "V15#ONOFF_SP",
                  },
                  ONOFF: {
                    NAME: "V15#ONOFF",
                  },
                  OFF: {
                    NAME: "V15#OFF",
                  },
                  ON: {
                    NAME: "V15#ON",
                  },
                  OFF_SP: {
                    NAME: "V15#OFF_SP",
                  },
                  ON_SP: {
                    NAME: "V15#ON_SP",
                  },
                  EB: {
                    NAME: "V15#EB",
                  },
                  AM: {
                    NAME: "V15#AM",
                  },
                  FAULT: {
                    NAME: "V15#FAULT",
                  },
                  NAME: "阀门#15",
                  TYPE: "D0A30",
                  ID: "Ma11HQ6JfGVjfYgG4brjnK",
                  NO: 15,
                  VALVES: [],
                },
              ],
              OTHERS: {},
              CAP_NUM: 0,
            },
          ],
          ID: "wI0YvzukuL3V12o1yiyLLV",
          NO: 2,
          NAME: "制冷机#2",
          TYPE: "D0A1A",
          STATION_ID: "2OE6LBhoeLCw3X4Ki5mEhY",
          STATION_PREFIX_ORG: "HVC1#",
          DEVICE_PREFIX: "CH2#",
          SUITE_IDS: [],
          VALVES: [
            {
              ONOFF_SP: {
                NAME: "V3#ONOFF_SP",
              },
              ONOFF: {
                NAME: "V3#ONOFF",
              },
              OFF: {
                NAME: "V3#OFF",
              },
              ON: {
                NAME: "V3#ON",
              },
              OFF_SP: {
                NAME: "V3#OFF_SP",
              },
              ON_SP: {
                NAME: "V3#ON_SP",
              },
              EB: {
                NAME: "V3#EB",
              },
              AM: {
                NAME: "V3#AM",
              },
              FAULT: {
                NAME: "V3#FAULT",
              },
              NAME: "阀门#3",
              TYPE: "D0A30",
              ID: "d8zCeQ8Kne2UISnETWo9IA",
              NO: 3,
              VALVES: [],
            },
            {
              ONOFF_SP: {
                NAME: "V4#ONOFF_SP",
              },
              ONOFF: {
                NAME: "V4#ONOFF",
              },
              OFF: {
                NAME: "V4#OFF",
              },
              ON: {
                NAME: "V4#ON",
              },
              OFF_SP: {
                NAME: "V4#OFF_SP",
              },
              ON_SP: {
                NAME: "V4#ON_SP",
              },
              EB: {
                NAME: "V4#EB",
              },
              AM: {
                NAME: "V4#AM",
              },
              FAULT: {
                NAME: "V4#FAULT",
              },
              NAME: "阀门#4",
              TYPE: "D0A30",
              ID: "MO_FS_a3KRM2M1Pu6W3Wu1",
              NO: 4,
              VALVES: [],
            },
          ],
          OTHERS: {},
          CAP_NUM: 0,
        },
        XGQuRqZBt69EtGurDNoVV7: {
          ONOFF_SP: {
            NAME: "CH3#ONOFF_SP",
          },
          AM: {
            NAME: "CH3#AM",
          },
          EB: {
            NAME: "CH3#EB",
          },
          ONOFF: {
            NAME: "CH3#ONOFF",
          },
          ON: {
            NAME: "CH3#ON",
          },
          OFF: {
            NAME: "CH3#OFF",
          },
          ON_SP: {
            NAME: "CH3#ON_SP",
          },
          OFF_SP: {
            NAME: "CH3#OFF_SP",
          },
          FAULT: {
            NAME: "CH3#FAULT",
          },
          FAULT_CODE: {
            NAME: "CH3#FAULT_CODE",
          },
          FAULT_RESET: {
            NAME: "CH3#FAULT_RESET",
          },
          T_CHW_S: {
            NAME: "CH3#T_CHW_S",
          },
          T_CHW_S_SP: {
            NAME: "CH3#T_CHW_S_SP",
          },
          HRS_TOTAL: {
            NAME: "CH3#HRS_TOTAL",
          },
          HRS: {
            NAME: "CH3#HRS",
          },
          I_PCT: {
            NAME: "CH3#I_PCT",
          },
          I_PCT_MAX_SP: {
            NAME: "CH3#I_PCT_MAX_SP",
          },
          T_EXHT: {
            NAME: "CH3#T_EXHT",
          },
          T_EVAP_ENT: {
            NAME: "CH3#T_EVAP_ENT",
          },
          T_EVAP_LEV: {
            NAME: "CH3#T_EVAP_LEV",
          },
          T_EVAP: {
            NAME: "CH3#T_EVAP",
          },
          PR_EVAP: {
            NAME: "CH3#PR_EVAP",
          },
          T_COND_ENT: {
            NAME: "CH3#T_COND_ENT",
          },
          T_COND_LEV: {
            NAME: "CH3#T_COND_LEV",
          },
          T_COND: {
            NAME: "CH3#T_COND",
          },
          PR_COND: {
            NAME: "CH3#PR_COND",
          },
          T_OIL: {
            NAME: "CH3#T_OIL",
          },
          DPR_OIL: {
            NAME: "CH3#DPR_OIL",
          },
          COUNT_SS: {
            NAME: "CH3#COUNT_SS",
          },
          RANK: {
            NAME: "CH3#RANK",
          },
          P: {
            NAME: "CH3#P",
          },
          W: {
            NAME: "CH3#W",
          },
          ELEC: {
            NAME: "CH3#ELEC",
          },
          I: {
            NAME: "CH3#I",
          },
          COP: {
            NAME: "CH3#COP",
          },
          MODE: {
            NAME: "CH3#MODE",
          },
          T_COND_PROTECT: {
            NAME: "CH3#T_COND_PROTECT",
          },
          PR_EXHT_PROTECT: {
            NAME: "CH3#PR_EXHT_PROTECT",
          },
          P_RATED: {
            NAME: "CH3#P_RATED",
          },
          LOAD_RATED: {
            NAME: "CH3#LOAD_RATED",
            VALUE: "2000",
            VALUE_O: 2000,
          },
          COP_RATED: {
            NAME: "CH3#COP_RATED",
          },
          FLOW_CHW_RATED: {
            NAME: "CH3#FLOW_CHW_RATED",
          },
          FLOW_CW_RATED: {
            NAME: "CH3#FLOW_CW_RATED",
          },
          PLR: {
            NAME: "CH3#PLR",
          },
          LOAD: {
            NAME: "CH3#LOAD",
          },
          FLOW_CHW: {
            NAME: "CH3#FLOW_CHW",
          },
          FLOW_CW: {
            NAME: "CH3#FLOW_CW",
          },
          FLOW_CHW_SWITCH: {
            NAME: "CH3#FLOW_CHW_SWITCH",
          },
          FLOW_CW_SWITCH: {
            NAME: "CH3#FLOW_CW_SWITCH",
          },
          T_CW_R: {
            NAME: "CH3#T_CW_R",
          },
          ONECLICK_START: {
            NAME: "CH3#ONECLICK_START",
          },
          ONECLICK_STOP: {
            NAME: "CH3#ONECLICK_STOP",
          },
          CHWPS: [
            {
              ELEC: {
                NAME: "CHWP1#ELEC",
              },
              ONOFF_SP: {
                NAME: "CHWP1#ONOFF_SP",
              },
              ONOFF: {
                NAME: "CHWP1#ONOFF",
              },
              ON: {
                NAME: "CHWP1#ON",
              },
              OFF: {
                NAME: "CHWP1#OFF",
              },
              ON_SP: {
                NAME: "CHWP1#ON_SP",
              },
              OFF_SP: {
                NAME: "CHWP1#OFF_SP",
              },
              AM: {
                NAME: "CHWP1#AM",
              },
              EB: {
                NAME: "CHWP1#EB",
              },
              FAULT: {
                NAME: "CHWP1#FAULT",
              },
              FAULT_CODE: {
                NAME: "CHWP1#FAULT_CODE",
              },
              FAULT_RESET: {
                NAME: "CHWP1#FAULT_RESET",
              },
              RANK: {
                NAME: "CHWP1#RANK",
              },
              PR_INLET: {
                NAME: "CHWP1#PR_INLET",
              },
              PR_OUTLET: {
                NAME: "CHWP1#PR_OUTLET",
              },
              HRS_TOTAL: {
                NAME: "CHWP1#HRS_TOTAL",
              },
              HRS: {
                NAME: "CHWP1#HRS",
              },
              P: {
                NAME: "CHWP1#P",
              },
              W: {
                NAME: "CHWP1#W",
              },
              COP: {
                NAME: "CHWP1#COP",
              },
              ONOFF_VFD_SP: {
                NAME: "CHWP1#ONOFF_VFD_SP",
              },
              ONOFF_VFD: {
                NAME: "CHWP1#ONOFF_VFD",
              },
              FREQ: {
                NAME: "CHWP1#FREQ",
              },
              FREQ_SP: {
                NAME: "CHWP1#FREQ_SP",
              },
              FAULT_VFD: {
                NAME: "CHWP1#FAULT_VFD",
              },
              P_VFD: {
                NAME: "CHWP1#P_VFD",
              },
              FLOW_RATED: {
                NAME: "CHWP1#FLOW_RATED",
              },
              P_RATED: {
                NAME: "CHWP1#P_RATED",
              },
              COP_RATED: {
                NAME: "CHWP1#COP_RATED",
              },
              ID: "dvuy_JIQf2YuXBtzOFkDLY",
              NO: 1,
              NAME: "冷冻水泵#1",
              TYPE: "D0A1B",
              STATION_ID: "2OE6LBhoeLCw3X4Ki5mEhY",
              STATION_PREFIX_ORG: "HVC1#",
              DEVICE_PREFIX: "CHWP1#",
              SUITE_IDS: [
                "ljGfRmBXdRUwXdsC7jg8A4",
                "wI0YvzukuL3V12o1yiyLLV",
                "XGQuRqZBt69EtGurDNoVV7",
                "mdyi12W8izM2MILT2FRZ3Q",
              ],
              VALVES: [],
              OTHERS: {},
              CAP_NUM: 0,
            },
            {
              ELEC: {
                NAME: "CHWP2#ELEC",
              },
              ONOFF_SP: {
                NAME: "CHWP2#ONOFF_SP",
              },
              ONOFF: {
                NAME: "CHWP2#ONOFF",
              },
              ON: {
                NAME: "CHWP2#ON",
              },
              OFF: {
                NAME: "CHWP2#OFF",
              },
              ON_SP: {
                NAME: "CHWP2#ON_SP",
              },
              OFF_SP: {
                NAME: "CHWP2#OFF_SP",
              },
              AM: {
                NAME: "CHWP2#AM",
              },
              EB: {
                NAME: "CHWP2#EB",
              },
              FAULT: {
                NAME: "CHWP2#FAULT",
              },
              FAULT_CODE: {
                NAME: "CHWP2#FAULT_CODE",
              },
              FAULT_RESET: {
                NAME: "CHWP2#FAULT_RESET",
              },
              RANK: {
                NAME: "CHWP2#RANK",
              },
              PR_INLET: {
                NAME: "CHWP2#PR_INLET",
              },
              PR_OUTLET: {
                NAME: "CHWP2#PR_OUTLET",
              },
              HRS_TOTAL: {
                NAME: "CHWP2#HRS_TOTAL",
              },
              HRS: {
                NAME: "CHWP2#HRS",
              },
              P: {
                NAME: "CHWP2#P",
              },
              W: {
                NAME: "CHWP2#W",
              },
              COP: {
                NAME: "CHWP2#COP",
              },
              ONOFF_VFD_SP: {
                NAME: "CHWP2#ONOFF_VFD_SP",
              },
              ONOFF_VFD: {
                NAME: "CHWP2#ONOFF_VFD",
              },
              FREQ: {
                NAME: "CHWP2#FREQ",
              },
              FREQ_SP: {
                NAME: "CHWP2#FREQ_SP",
              },
              FAULT_VFD: {
                NAME: "CHWP2#FAULT_VFD",
              },
              P_VFD: {
                NAME: "CHWP2#P_VFD",
              },
              FLOW_RATED: {
                NAME: "CHWP2#FLOW_RATED",
              },
              P_RATED: {
                NAME: "CHWP2#P_RATED",
              },
              COP_RATED: {
                NAME: "CHWP2#COP_RATED",
              },
              ID: "m1RJZR4AJCnQkycGfkkyV6",
              NO: 2,
              NAME: "冷冻水泵#2",
              TYPE: "D0A1B",
              STATION_ID: "2OE6LBhoeLCw3X4Ki5mEhY",
              STATION_PREFIX_ORG: "HVC1#",
              DEVICE_PREFIX: "CHWP2#",
              SUITE_IDS: [
                "ljGfRmBXdRUwXdsC7jg8A4",
                "wI0YvzukuL3V12o1yiyLLV",
                "XGQuRqZBt69EtGurDNoVV7",
                "mdyi12W8izM2MILT2FRZ3Q",
              ],
              VALVES: [],
              OTHERS: {},
              CAP_NUM: 0,
            },
            {
              ELEC: {
                NAME: "CHWP3#ELEC",
              },
              ONOFF_SP: {
                NAME: "CHWP3#ONOFF_SP",
              },
              ONOFF: {
                NAME: "CHWP3#ONOFF",
              },
              ON: {
                NAME: "CHWP3#ON",
              },
              OFF: {
                NAME: "CHWP3#OFF",
              },
              ON_SP: {
                NAME: "CHWP3#ON_SP",
              },
              OFF_SP: {
                NAME: "CHWP3#OFF_SP",
              },
              AM: {
                NAME: "CHWP3#AM",
              },
              EB: {
                NAME: "CHWP3#EB",
              },
              FAULT: {
                NAME: "CHWP3#FAULT",
              },
              FAULT_CODE: {
                NAME: "CHWP3#FAULT_CODE",
              },
              FAULT_RESET: {
                NAME: "CHWP3#FAULT_RESET",
              },
              RANK: {
                NAME: "CHWP3#RANK",
              },
              PR_INLET: {
                NAME: "CHWP3#PR_INLET",
              },
              PR_OUTLET: {
                NAME: "CHWP3#PR_OUTLET",
              },
              HRS_TOTAL: {
                NAME: "CHWP3#HRS_TOTAL",
              },
              HRS: {
                NAME: "CHWP3#HRS",
              },
              P: {
                NAME: "CHWP3#P",
              },
              W: {
                NAME: "CHWP3#W",
              },
              COP: {
                NAME: "CHWP3#COP",
              },
              ONOFF_VFD_SP: {
                NAME: "CHWP3#ONOFF_VFD_SP",
              },
              ONOFF_VFD: {
                NAME: "CHWP3#ONOFF_VFD",
              },
              FREQ: {
                NAME: "CHWP3#FREQ",
              },
              FREQ_SP: {
                NAME: "CHWP3#FREQ_SP",
              },
              FAULT_VFD: {
                NAME: "CHWP3#FAULT_VFD",
              },
              P_VFD: {
                NAME: "CHWP3#P_VFD",
              },
              FLOW_RATED: {
                NAME: "CHWP3#FLOW_RATED",
              },
              P_RATED: {
                NAME: "CHWP3#P_RATED",
              },
              COP_RATED: {
                NAME: "CHWP3#COP_RATED",
              },
              ID: "fJdoIuCK4NFTETY8K_MWQG",
              NO: 3,
              NAME: "冷冻水泵#3",
              TYPE: "D0A1B",
              STATION_ID: "2OE6LBhoeLCw3X4Ki5mEhY",
              STATION_PREFIX_ORG: "HVC1#",
              DEVICE_PREFIX: "CHWP3#",
              SUITE_IDS: [
                "ljGfRmBXdRUwXdsC7jg8A4",
                "wI0YvzukuL3V12o1yiyLLV",
                "XGQuRqZBt69EtGurDNoVV7",
                "mdyi12W8izM2MILT2FRZ3Q",
              ],
              VALVES: [],
              OTHERS: {},
              CAP_NUM: 0,
            },
            {
              ELEC: {
                NAME: "CHWP4#ELEC",
              },
              ONOFF_SP: {
                NAME: "CHWP4#ONOFF_SP",
              },
              ONOFF: {
                NAME: "CHWP4#ONOFF",
              },
              ON: {
                NAME: "CHWP4#ON",
              },
              OFF: {
                NAME: "CHWP4#OFF",
              },
              ON_SP: {
                NAME: "CHWP4#ON_SP",
              },
              OFF_SP: {
                NAME: "CHWP4#OFF_SP",
              },
              AM: {
                NAME: "CHWP4#AM",
              },
              EB: {
                NAME: "CHWP4#EB",
              },
              FAULT: {
                NAME: "CHWP4#FAULT",
              },
              FAULT_CODE: {
                NAME: "CHWP4#FAULT_CODE",
              },
              FAULT_RESET: {
                NAME: "CHWP4#FAULT_RESET",
              },
              RANK: {
                NAME: "CHWP4#RANK",
              },
              PR_INLET: {
                NAME: "CHWP4#PR_INLET",
              },
              PR_OUTLET: {
                NAME: "CHWP4#PR_OUTLET",
              },
              HRS_TOTAL: {
                NAME: "CHWP4#HRS_TOTAL",
              },
              HRS: {
                NAME: "CHWP4#HRS",
              },
              P: {
                NAME: "CHWP4#P",
              },
              W: {
                NAME: "CHWP4#W",
              },
              COP: {
                NAME: "CHWP4#COP",
              },
              ONOFF_VFD_SP: {
                NAME: "CHWP4#ONOFF_VFD_SP",
              },
              ONOFF_VFD: {
                NAME: "CHWP4#ONOFF_VFD",
              },
              FREQ: {
                NAME: "CHWP4#FREQ",
              },
              FREQ_SP: {
                NAME: "CHWP4#FREQ_SP",
              },
              FAULT_VFD: {
                NAME: "CHWP4#FAULT_VFD",
              },
              P_VFD: {
                NAME: "CHWP4#P_VFD",
              },
              FLOW_RATED: {
                NAME: "CHWP4#FLOW_RATED",
              },
              P_RATED: {
                NAME: "CHWP4#P_RATED",
              },
              COP_RATED: {
                NAME: "CHWP4#COP_RATED",
              },
              ID: "TW9AcYLFTrOecDLa_KrLnv",
              NO: 4,
              NAME: "冷冻水泵#4",
              TYPE: "D0A1B",
              STATION_ID: "2OE6LBhoeLCw3X4Ki5mEhY",
              STATION_PREFIX_ORG: "HVC1#",
              DEVICE_PREFIX: "CHWP4#",
              SUITE_IDS: [
                "ljGfRmBXdRUwXdsC7jg8A4",
                "wI0YvzukuL3V12o1yiyLLV",
                "XGQuRqZBt69EtGurDNoVV7",
                "mdyi12W8izM2MILT2FRZ3Q",
              ],
              VALVES: [],
              OTHERS: {},
              CAP_NUM: 0,
            },
          ],
          SCHWPS: [],
          CWPS: [
            {
              ELEC: {
                NAME: "CWP1#ELEC",
              },
              ONOFF_SP: {
                NAME: "CWP1#ONOFF_SP",
              },
              ONOFF: {
                NAME: "CWP1#ONOFF",
              },
              ON: {
                NAME: "CWP1#ON",
              },
              OFF: {
                NAME: "CWP1#OFF",
              },
              ON_SP: {
                NAME: "CWP1#ON_SP",
              },
              OFF_SP: {
                NAME: "CWP1#OFF_SP",
              },
              AM: {
                NAME: "CWP1#AM",
              },
              EB: {
                NAME: "CWP1#EB",
              },
              FAULT: {
                NAME: "CWP1#FAULT",
              },
              FAULT_CODE: {
                NAME: "CWP1#FAULT_CODE",
              },
              FAULT_RESET: {
                NAME: "CWP1#FAULT_RESET",
              },
              RANK: {
                NAME: "CWP1#RANK",
              },
              PR_INLET: {
                NAME: "CWP1#PR_INLET",
              },
              PR_OUTLET: {
                NAME: "CWP1#PR_OUTLET",
              },
              HRS_TOTAL: {
                NAME: "CWP1#HRS_TOTAL",
              },
              HRS: {
                NAME: "CWP1#HRS",
              },
              P: {
                NAME: "CWP1#P",
              },
              W: {
                NAME: "CWP1#W",
              },
              COP: {
                NAME: "CWP1#COP",
              },
              ONOFF_VFD_SP: {
                NAME: "CWP1#ONOFF_VFD_SP",
              },
              ONOFF_VFD: {
                NAME: "CWP1#ONOFF_VFD",
              },
              FREQ: {
                NAME: "CWP1#FREQ",
              },
              FREQ_SP: {
                NAME: "CWP1#FREQ_SP",
              },
              FAULT_VFD: {
                NAME: "CWP1#FAULT_VFD",
              },
              P_VFD: {
                NAME: "CWP1#P_VFD",
              },
              FLOW_RATED: {
                NAME: "CWP1#FLOW_RATED",
              },
              P_RATED: {
                NAME: "CWP1#P_RATED",
              },
              COP_RATED: {
                NAME: "CWP1#COP_RATED",
              },
              ID: "c8uzkkrC4l9Ui0IWyEVG45",
              NO: 1,
              NAME: "冷却水泵#1",
              TYPE: "D0A1C",
              STATION_ID: "2OE6LBhoeLCw3X4Ki5mEhY",
              STATION_PREFIX_ORG: "HVC1#",
              DEVICE_PREFIX: "CWP1#",
              SUITE_IDS: [
                "ljGfRmBXdRUwXdsC7jg8A4",
                "wI0YvzukuL3V12o1yiyLLV",
                "XGQuRqZBt69EtGurDNoVV7",
                "mdyi12W8izM2MILT2FRZ3Q",
              ],
              VALVES: [],
              OTHERS: {},
              CAP_NUM: 0,
            },
            {
              ELEC: {
                NAME: "CWP2#ELEC",
              },
              ONOFF_SP: {
                NAME: "CWP2#ONOFF_SP",
              },
              ONOFF: {
                NAME: "CWP2#ONOFF",
              },
              ON: {
                NAME: "CWP2#ON",
              },
              OFF: {
                NAME: "CWP2#OFF",
              },
              ON_SP: {
                NAME: "CWP2#ON_SP",
              },
              OFF_SP: {
                NAME: "CWP2#OFF_SP",
              },
              AM: {
                NAME: "CWP2#AM",
              },
              EB: {
                NAME: "CWP2#EB",
              },
              FAULT: {
                NAME: "CWP2#FAULT",
              },
              FAULT_CODE: {
                NAME: "CWP2#FAULT_CODE",
              },
              FAULT_RESET: {
                NAME: "CWP2#FAULT_RESET",
              },
              RANK: {
                NAME: "CWP2#RANK",
              },
              PR_INLET: {
                NAME: "CWP2#PR_INLET",
              },
              PR_OUTLET: {
                NAME: "CWP2#PR_OUTLET",
              },
              HRS_TOTAL: {
                NAME: "CWP2#HRS_TOTAL",
              },
              HRS: {
                NAME: "CWP2#HRS",
              },
              P: {
                NAME: "CWP2#P",
              },
              W: {
                NAME: "CWP2#W",
              },
              COP: {
                NAME: "CWP2#COP",
              },
              ONOFF_VFD_SP: {
                NAME: "CWP2#ONOFF_VFD_SP",
              },
              ONOFF_VFD: {
                NAME: "CWP2#ONOFF_VFD",
              },
              FREQ: {
                NAME: "CWP2#FREQ",
              },
              FREQ_SP: {
                NAME: "CWP2#FREQ_SP",
              },
              FAULT_VFD: {
                NAME: "CWP2#FAULT_VFD",
              },
              P_VFD: {
                NAME: "CWP2#P_VFD",
              },
              FLOW_RATED: {
                NAME: "CWP2#FLOW_RATED",
              },
              P_RATED: {
                NAME: "CWP2#P_RATED",
              },
              COP_RATED: {
                NAME: "CWP2#COP_RATED",
              },
              ID: "3cikHzRIya50UMs8LsC3zg",
              NO: 2,
              NAME: "冷却水泵#2",
              TYPE: "D0A1C",
              STATION_ID: "2OE6LBhoeLCw3X4Ki5mEhY",
              STATION_PREFIX_ORG: "HVC1#",
              DEVICE_PREFIX: "CWP2#",
              SUITE_IDS: [
                "ljGfRmBXdRUwXdsC7jg8A4",
                "wI0YvzukuL3V12o1yiyLLV",
                "XGQuRqZBt69EtGurDNoVV7",
                "mdyi12W8izM2MILT2FRZ3Q",
              ],
              VALVES: [],
              OTHERS: {},
              CAP_NUM: 0,
            },
            {
              ELEC: {
                NAME: "CWP3#ELEC",
              },
              ONOFF_SP: {
                NAME: "CWP3#ONOFF_SP",
              },
              ONOFF: {
                NAME: "CWP3#ONOFF",
              },
              ON: {
                NAME: "CWP3#ON",
              },
              OFF: {
                NAME: "CWP3#OFF",
              },
              ON_SP: {
                NAME: "CWP3#ON_SP",
              },
              OFF_SP: {
                NAME: "CWP3#OFF_SP",
              },
              AM: {
                NAME: "CWP3#AM",
              },
              EB: {
                NAME: "CWP3#EB",
              },
              FAULT: {
                NAME: "CWP3#FAULT",
              },
              FAULT_CODE: {
                NAME: "CWP3#FAULT_CODE",
              },
              FAULT_RESET: {
                NAME: "CWP3#FAULT_RESET",
              },
              RANK: {
                NAME: "CWP3#RANK",
              },
              PR_INLET: {
                NAME: "CWP3#PR_INLET",
              },
              PR_OUTLET: {
                NAME: "CWP3#PR_OUTLET",
              },
              HRS_TOTAL: {
                NAME: "CWP3#HRS_TOTAL",
              },
              HRS: {
                NAME: "CWP3#HRS",
              },
              P: {
                NAME: "CWP3#P",
              },
              W: {
                NAME: "CWP3#W",
              },
              COP: {
                NAME: "CWP3#COP",
              },
              ONOFF_VFD_SP: {
                NAME: "CWP3#ONOFF_VFD_SP",
              },
              ONOFF_VFD: {
                NAME: "CWP3#ONOFF_VFD",
              },
              FREQ: {
                NAME: "CWP3#FREQ",
              },
              FREQ_SP: {
                NAME: "CWP3#FREQ_SP",
              },
              FAULT_VFD: {
                NAME: "CWP3#FAULT_VFD",
              },
              P_VFD: {
                NAME: "CWP3#P_VFD",
              },
              FLOW_RATED: {
                NAME: "CWP3#FLOW_RATED",
              },
              P_RATED: {
                NAME: "CWP3#P_RATED",
              },
              COP_RATED: {
                NAME: "CWP3#COP_RATED",
              },
              ID: "QDfEG9ORVEUlXT3Q0D9z8L",
              NO: 3,
              NAME: "冷却水泵#3",
              TYPE: "D0A1C",
              STATION_ID: "2OE6LBhoeLCw3X4Ki5mEhY",
              STATION_PREFIX_ORG: "HVC1#",
              DEVICE_PREFIX: "CWP3#",
              SUITE_IDS: [
                "ljGfRmBXdRUwXdsC7jg8A4",
                "wI0YvzukuL3V12o1yiyLLV",
                "XGQuRqZBt69EtGurDNoVV7",
                "mdyi12W8izM2MILT2FRZ3Q",
              ],
              VALVES: [],
              OTHERS: {},
              CAP_NUM: 0,
            },
            {
              ELEC: {
                NAME: "CWP4#ELEC",
              },
              ONOFF_SP: {
                NAME: "CWP4#ONOFF_SP",
              },
              ONOFF: {
                NAME: "CWP4#ONOFF",
              },
              ON: {
                NAME: "CWP4#ON",
              },
              OFF: {
                NAME: "CWP4#OFF",
              },
              ON_SP: {
                NAME: "CWP4#ON_SP",
              },
              OFF_SP: {
                NAME: "CWP4#OFF_SP",
              },
              AM: {
                NAME: "CWP4#AM",
              },
              EB: {
                NAME: "CWP4#EB",
              },
              FAULT: {
                NAME: "CWP4#FAULT",
              },
              FAULT_CODE: {
                NAME: "CWP4#FAULT_CODE",
              },
              FAULT_RESET: {
                NAME: "CWP4#FAULT_RESET",
              },
              RANK: {
                NAME: "CWP4#RANK",
              },
              PR_INLET: {
                NAME: "CWP4#PR_INLET",
              },
              PR_OUTLET: {
                NAME: "CWP4#PR_OUTLET",
              },
              HRS_TOTAL: {
                NAME: "CWP4#HRS_TOTAL",
              },
              HRS: {
                NAME: "CWP4#HRS",
              },
              P: {
                NAME: "CWP4#P",
              },
              W: {
                NAME: "CWP4#W",
              },
              COP: {
                NAME: "CWP4#COP",
              },
              ONOFF_VFD_SP: {
                NAME: "CWP4#ONOFF_VFD_SP",
              },
              ONOFF_VFD: {
                NAME: "CWP4#ONOFF_VFD",
              },
              FREQ: {
                NAME: "CWP4#FREQ",
              },
              FREQ_SP: {
                NAME: "CWP4#FREQ_SP",
              },
              FAULT_VFD: {
                NAME: "CWP4#FAULT_VFD",
              },
              P_VFD: {
                NAME: "CWP4#P_VFD",
              },
              FLOW_RATED: {
                NAME: "CWP4#FLOW_RATED",
              },
              P_RATED: {
                NAME: "CWP4#P_RATED",
              },
              COP_RATED: {
                NAME: "CWP4#COP_RATED",
              },
              ID: "E9F8NArlUYGJFZwZbxW3Z7",
              NO: 4,
              NAME: "冷却水泵#4",
              TYPE: "D0A1C",
              STATION_ID: "2OE6LBhoeLCw3X4Ki5mEhY",
              STATION_PREFIX_ORG: "HVC1#",
              DEVICE_PREFIX: "CWP4#",
              SUITE_IDS: [
                "ljGfRmBXdRUwXdsC7jg8A4",
                "wI0YvzukuL3V12o1yiyLLV",
                "XGQuRqZBt69EtGurDNoVV7",
                "mdyi12W8izM2MILT2FRZ3Q",
              ],
              VALVES: [],
              OTHERS: {},
              CAP_NUM: 0,
            },
          ],
          CTS: [
            {
              ONOFF_SP: {
                NAME: "CT1#ONOFF_SP",
              },
              ONOFF: {
                NAME: "CT1#ONOFF",
              },
              ON: {
                NAME: "CT1#ON",
              },
              OFF: {
                NAME: "CT1#OFF",
              },
              ON_SP: {
                NAME: "CT1#ON_SP",
              },
              OFF_SP: {
                NAME: "CT1#OFF_SP",
              },
              AM: {
                NAME: "CT1#AM",
              },
              EB: {
                NAME: "CT1#EB",
              },
              FAULT: {
                NAME: "CT1#FAULT",
              },
              FAULT_CODE: {
                NAME: "CT1#FAULT_CODE",
              },
              FAULT_RESET: {
                NAME: "CT1#FAULT_RESET",
              },
              RANK: {
                NAME: "CT1#RANK",
              },
              HRS_TOTAL: {
                NAME: "CT1#HRS_TOTAL",
              },
              HRS: {
                NAME: "CT1#HRS",
              },
              P: {
                NAME: "CT1#P",
              },
              W: {
                NAME: "CT1#W",
              },
              ELEC: {
                NAME: "CT1#ELEC",
              },
              COP: {
                NAME: "CT1#COP",
              },
              ONOFF_VFD_SP: {
                NAME: "CT1#ONOFF_VFD_SP",
              },
              ONOFF_VFD: {
                NAME: "CT1#ONOFF_VFD",
              },
              FREQ: {
                NAME: "CT1#FREQ",
              },
              FREQ_SP: {
                NAME: "CT1#FREQ_SP",
              },
              FAULT_VFD: {
                NAME: "CT1#FAULT_VFD",
              },
              P_VFD: {
                NAME: "CT1#P_VFD",
              },
              FLOW_RATED: {
                NAME: "CT1#FLOW_RATED",
              },
              P_RATED: {
                NAME: "CT1#P_RATED",
              },
              COP_RATED: {
                NAME: "CT1#COP_RATED",
              },
              ID: "ee4ofIjLr4WRjIQFPVro58",
              NO: 1,
              NAME: "冷却塔#1",
              TYPE: "D0A1D",
              STATION_ID: "2OE6LBhoeLCw3X4Ki5mEhY",
              STATION_PREFIX_ORG: "HVC1#",
              DEVICE_PREFIX: "CT1#",
              SUITE_IDS: [
                "ljGfRmBXdRUwXdsC7jg8A4",
                "wI0YvzukuL3V12o1yiyLLV",
                "XGQuRqZBt69EtGurDNoVV7",
                "mdyi12W8izM2MILT2FRZ3Q",
              ],
              VALVES: [
                {
                  ONOFF_SP: {
                    NAME: "V9#ONOFF_SP",
                  },
                  ONOFF: {
                    NAME: "V9#ONOFF",
                  },
                  OFF: {
                    NAME: "V9#OFF",
                  },
                  ON: {
                    NAME: "V9#ON",
                  },
                  OFF_SP: {
                    NAME: "V9#OFF_SP",
                  },
                  ON_SP: {
                    NAME: "V9#ON_SP",
                  },
                  EB: {
                    NAME: "V9#EB",
                  },
                  AM: {
                    NAME: "V9#AM",
                  },
                  FAULT: {
                    NAME: "V9#FAULT",
                  },
                  NAME: "阀门#9",
                  TYPE: "D0A30",
                  ID: "bi2S1oBhLeKE6TIl37vdDB",
                  NO: 9,
                  VALVES: [],
                },
                {
                  ONOFF_SP: {
                    NAME: "V10#ONOFF_SP",
                  },
                  ONOFF: {
                    NAME: "V10#ONOFF",
                  },
                  OFF: {
                    NAME: "V10#OFF",
                  },
                  ON: {
                    NAME: "V10#ON",
                  },
                  OFF_SP: {
                    NAME: "V10#OFF_SP",
                  },
                  ON_SP: {
                    NAME: "V10#ON_SP",
                  },
                  EB: {
                    NAME: "V10#EB",
                  },
                  AM: {
                    NAME: "V10#AM",
                  },
                  FAULT: {
                    NAME: "V10#FAULT",
                  },
                  NAME: "阀门#10",
                  TYPE: "D0A30",
                  ID: "YtPHM3z8XmC3x37VMNfrG0",
                  NO: 10,
                  VALVES: [],
                },
              ],
              OTHERS: {},
              CAP_NUM: 0,
            },
            {
              ONOFF_SP: {
                NAME: "CT2#ONOFF_SP",
              },
              ONOFF: {
                NAME: "CT2#ONOFF",
              },
              ON: {
                NAME: "CT2#ON",
              },
              OFF: {
                NAME: "CT2#OFF",
              },
              ON_SP: {
                NAME: "CT2#ON_SP",
              },
              OFF_SP: {
                NAME: "CT2#OFF_SP",
              },
              AM: {
                NAME: "CT2#AM",
              },
              EB: {
                NAME: "CT2#EB",
              },
              FAULT: {
                NAME: "CT2#FAULT",
              },
              FAULT_CODE: {
                NAME: "CT2#FAULT_CODE",
              },
              FAULT_RESET: {
                NAME: "CT2#FAULT_RESET",
              },
              RANK: {
                NAME: "CT2#RANK",
              },
              HRS_TOTAL: {
                NAME: "CT2#HRS_TOTAL",
              },
              HRS: {
                NAME: "CT2#HRS",
              },
              P: {
                NAME: "CT2#P",
              },
              W: {
                NAME: "CT2#W",
              },
              ELEC: {
                NAME: "CT2#ELEC",
              },
              COP: {
                NAME: "CT2#COP",
              },
              ONOFF_VFD_SP: {
                NAME: "CT2#ONOFF_VFD_SP",
              },
              ONOFF_VFD: {
                NAME: "CT2#ONOFF_VFD",
              },
              FREQ: {
                NAME: "CT2#FREQ",
              },
              FREQ_SP: {
                NAME: "CT2#FREQ_SP",
              },
              FAULT_VFD: {
                NAME: "CT2#FAULT_VFD",
              },
              P_VFD: {
                NAME: "CT2#P_VFD",
              },
              FLOW_RATED: {
                NAME: "CT2#FLOW_RATED",
              },
              P_RATED: {
                NAME: "CT2#P_RATED",
              },
              COP_RATED: {
                NAME: "CT2#COP_RATED",
              },
              ID: "cSvhfgynIwK7_iDzbHIZ7I",
              NO: 2,
              NAME: "冷却塔#2",
              TYPE: "D0A1D",
              STATION_ID: "2OE6LBhoeLCw3X4Ki5mEhY",
              STATION_PREFIX_ORG: "HVC1#",
              DEVICE_PREFIX: "CT2#",
              SUITE_IDS: [
                "ljGfRmBXdRUwXdsC7jg8A4",
                "wI0YvzukuL3V12o1yiyLLV",
                "XGQuRqZBt69EtGurDNoVV7",
                "mdyi12W8izM2MILT2FRZ3Q",
              ],
              VALVES: [
                {
                  ONOFF_SP: {
                    NAME: "V11#ONOFF_SP",
                  },
                  ONOFF: {
                    NAME: "V11#ONOFF",
                  },
                  OFF: {
                    NAME: "V11#OFF",
                  },
                  ON: {
                    NAME: "V11#ON",
                  },
                  OFF_SP: {
                    NAME: "V11#OFF_SP",
                  },
                  ON_SP: {
                    NAME: "V11#ON_SP",
                  },
                  EB: {
                    NAME: "V11#EB",
                  },
                  AM: {
                    NAME: "V11#AM",
                  },
                  FAULT: {
                    NAME: "V11#FAULT",
                  },
                  NAME: "阀门#11",
                  TYPE: "D0A30",
                  ID: "2VlqwFEAYJnBnecsQdflri",
                  NO: 11,
                  VALVES: [],
                },
                {
                  ONOFF_SP: {
                    NAME: "V12#ONOFF_SP",
                  },
                  ONOFF: {
                    NAME: "V12#ONOFF",
                  },
                  OFF: {
                    NAME: "V12#OFF",
                  },
                  ON: {
                    NAME: "V12#ON",
                  },
                  OFF_SP: {
                    NAME: "V12#OFF_SP",
                  },
                  ON_SP: {
                    NAME: "V12#ON_SP",
                  },
                  EB: {
                    NAME: "V12#EB",
                  },
                  AM: {
                    NAME: "V12#AM",
                  },
                  FAULT: {
                    NAME: "V12#FAULT",
                  },
                  NAME: "阀门#12",
                  TYPE: "D0A30",
                  ID: "DoXn8Av4ib3OVZ5mJX7fOJ",
                  NO: 12,
                  VALVES: [],
                },
              ],
              OTHERS: {},
              CAP_NUM: 0,
            },
            {
              ONOFF_SP: {
                NAME: "CT3#ONOFF_SP",
              },
              ONOFF: {
                NAME: "CT3#ONOFF",
              },
              ON: {
                NAME: "CT3#ON",
              },
              OFF: {
                NAME: "CT3#OFF",
              },
              ON_SP: {
                NAME: "CT3#ON_SP",
              },
              OFF_SP: {
                NAME: "CT3#OFF_SP",
              },
              AM: {
                NAME: "CT3#AM",
              },
              EB: {
                NAME: "CT3#EB",
              },
              FAULT: {
                NAME: "CT3#FAULT",
              },
              FAULT_CODE: {
                NAME: "CT3#FAULT_CODE",
              },
              FAULT_RESET: {
                NAME: "CT3#FAULT_RESET",
              },
              RANK: {
                NAME: "CT3#RANK",
              },
              HRS_TOTAL: {
                NAME: "CT3#HRS_TOTAL",
              },
              HRS: {
                NAME: "CT3#HRS",
              },
              P: {
                NAME: "CT3#P",
              },
              W: {
                NAME: "CT3#W",
              },
              ELEC: {
                NAME: "CT3#ELEC",
              },
              COP: {
                NAME: "CT3#COP",
              },
              ONOFF_VFD_SP: {
                NAME: "CT3#ONOFF_VFD_SP",
              },
              ONOFF_VFD: {
                NAME: "CT3#ONOFF_VFD",
              },
              FREQ: {
                NAME: "CT3#FREQ",
              },
              FREQ_SP: {
                NAME: "CT3#FREQ_SP",
              },
              FAULT_VFD: {
                NAME: "CT3#FAULT_VFD",
              },
              P_VFD: {
                NAME: "CT3#P_VFD",
              },
              FLOW_RATED: {
                NAME: "CT3#FLOW_RATED",
              },
              P_RATED: {
                NAME: "CT3#P_RATED",
              },
              COP_RATED: {
                NAME: "CT3#COP_RATED",
              },
              ID: "5Bv3pNiaQ0Oe_yrJJuyP2I",
              NO: 3,
              NAME: "冷却塔#3",
              TYPE: "D0A1D",
              STATION_ID: "2OE6LBhoeLCw3X4Ki5mEhY",
              STATION_PREFIX_ORG: "HVC1#",
              DEVICE_PREFIX: "CT3#",
              SUITE_IDS: [
                "ljGfRmBXdRUwXdsC7jg8A4",
                "wI0YvzukuL3V12o1yiyLLV",
                "XGQuRqZBt69EtGurDNoVV7",
                "mdyi12W8izM2MILT2FRZ3Q",
              ],
              VALVES: [
                {
                  ONOFF_SP: {
                    NAME: "V13#ONOFF_SP",
                  },
                  ONOFF: {
                    NAME: "V13#ONOFF",
                  },
                  OFF: {
                    NAME: "V13#OFF",
                  },
                  ON: {
                    NAME: "V13#ON",
                  },
                  OFF_SP: {
                    NAME: "V13#OFF_SP",
                  },
                  ON_SP: {
                    NAME: "V13#ON_SP",
                  },
                  EB: {
                    NAME: "V13#EB",
                  },
                  AM: {
                    NAME: "V13#AM",
                  },
                  FAULT: {
                    NAME: "V13#FAULT",
                  },
                  NAME: "阀门#13",
                  TYPE: "D0A30",
                  ID: "BP8J7wISsJ4nmRCxV2pufp",
                  NO: 13,
                  VALVES: [],
                },
                {
                  ONOFF_SP: {
                    NAME: "V14#ONOFF_SP",
                  },
                  ONOFF: {
                    NAME: "V14#ONOFF",
                  },
                  OFF: {
                    NAME: "V14#OFF",
                  },
                  ON: {
                    NAME: "V14#ON",
                  },
                  OFF_SP: {
                    NAME: "V14#OFF_SP",
                  },
                  ON_SP: {
                    NAME: "V14#ON_SP",
                  },
                  EB: {
                    NAME: "V14#EB",
                  },
                  AM: {
                    NAME: "V14#AM",
                  },
                  FAULT: {
                    NAME: "V14#FAULT",
                  },
                  NAME: "阀门#14",
                  TYPE: "D0A30",
                  ID: "gHmtkUbK799frcw29TFRnl",
                  NO: 14,
                  VALVES: [],
                },
              ],
              OTHERS: {},
              CAP_NUM: 0,
            },
            {
              ONOFF_SP: {
                NAME: "CT4#ONOFF_SP",
              },
              ONOFF: {
                NAME: "CT4#ONOFF",
              },
              ON: {
                NAME: "CT4#ON",
              },
              OFF: {
                NAME: "CT4#OFF",
              },
              ON_SP: {
                NAME: "CT4#ON_SP",
              },
              OFF_SP: {
                NAME: "CT4#OFF_SP",
              },
              AM: {
                NAME: "CT4#AM",
              },
              EB: {
                NAME: "CT4#EB",
              },
              FAULT: {
                NAME: "CT4#FAULT",
              },
              FAULT_CODE: {
                NAME: "CT4#FAULT_CODE",
              },
              FAULT_RESET: {
                NAME: "CT4#FAULT_RESET",
              },
              RANK: {
                NAME: "CT4#RANK",
              },
              HRS_TOTAL: {
                NAME: "CT4#HRS_TOTAL",
              },
              HRS: {
                NAME: "CT4#HRS",
              },
              P: {
                NAME: "CT4#P",
              },
              W: {
                NAME: "CT4#W",
              },
              ELEC: {
                NAME: "CT4#ELEC",
              },
              COP: {
                NAME: "CT4#COP",
              },
              ONOFF_VFD_SP: {
                NAME: "CT4#ONOFF_VFD_SP",
              },
              ONOFF_VFD: {
                NAME: "CT4#ONOFF_VFD",
              },
              FREQ: {
                NAME: "CT4#FREQ",
              },
              FREQ_SP: {
                NAME: "CT4#FREQ_SP",
              },
              FAULT_VFD: {
                NAME: "CT4#FAULT_VFD",
              },
              P_VFD: {
                NAME: "CT4#P_VFD",
              },
              FLOW_RATED: {
                NAME: "CT4#FLOW_RATED",
              },
              P_RATED: {
                NAME: "CT4#P_RATED",
              },
              COP_RATED: {
                NAME: "CT4#COP_RATED",
              },
              ID: "RE8J3ykpC6RUtGSfiOigU3",
              NO: 4,
              NAME: "冷却塔#4",
              TYPE: "D0A1D",
              STATION_ID: "2OE6LBhoeLCw3X4Ki5mEhY",
              STATION_PREFIX_ORG: "HVC1#",
              DEVICE_PREFIX: "CT4#",
              SUITE_IDS: [
                "ljGfRmBXdRUwXdsC7jg8A4",
                "wI0YvzukuL3V12o1yiyLLV",
                "XGQuRqZBt69EtGurDNoVV7",
                "mdyi12W8izM2MILT2FRZ3Q",
              ],
              VALVES: [
                {
                  ONOFF_SP: {
                    NAME: "V16#ONOFF_SP",
                  },
                  ONOFF: {
                    NAME: "V16#ONOFF",
                  },
                  OFF: {
                    NAME: "V16#OFF",
                  },
                  ON: {
                    NAME: "V16#ON",
                  },
                  OFF_SP: {
                    NAME: "V16#OFF_SP",
                  },
                  ON_SP: {
                    NAME: "V16#ON_SP",
                  },
                  EB: {
                    NAME: "V16#EB",
                  },
                  AM: {
                    NAME: "V16#AM",
                  },
                  FAULT: {
                    NAME: "V16#FAULT",
                  },
                  NAME: "阀门#16",
                  TYPE: "D0A30",
                  ID: "t8js1U79E6Bf2tH7qb46hA",
                  NO: 16,
                  VALVES: [],
                },
                {
                  ONOFF_SP: {
                    NAME: "V15#ONOFF_SP",
                  },
                  ONOFF: {
                    NAME: "V15#ONOFF",
                  },
                  OFF: {
                    NAME: "V15#OFF",
                  },
                  ON: {
                    NAME: "V15#ON",
                  },
                  OFF_SP: {
                    NAME: "V15#OFF_SP",
                  },
                  ON_SP: {
                    NAME: "V15#ON_SP",
                  },
                  EB: {
                    NAME: "V15#EB",
                  },
                  AM: {
                    NAME: "V15#AM",
                  },
                  FAULT: {
                    NAME: "V15#FAULT",
                  },
                  NAME: "阀门#15",
                  TYPE: "D0A30",
                  ID: "Ma11HQ6JfGVjfYgG4brjnK",
                  NO: 15,
                  VALVES: [],
                },
              ],
              OTHERS: {},
              CAP_NUM: 0,
            },
          ],
          ID: "XGQuRqZBt69EtGurDNoVV7",
          NO: 3,
          NAME: "制冷机#3",
          TYPE: "D0A1A",
          STATION_ID: "2OE6LBhoeLCw3X4Ki5mEhY",
          STATION_PREFIX_ORG: "HVC1#",
          DEVICE_PREFIX: "CH3#",
          SUITE_IDS: [],
          VALVES: [
            {
              ONOFF_SP: {
                NAME: "V5#ONOFF_SP",
              },
              ONOFF: {
                NAME: "V5#ONOFF",
              },
              OFF: {
                NAME: "V5#OFF",
              },
              ON: {
                NAME: "V5#ON",
              },
              OFF_SP: {
                NAME: "V5#OFF_SP",
              },
              ON_SP: {
                NAME: "V5#ON_SP",
              },
              EB: {
                NAME: "V5#EB",
              },
              AM: {
                NAME: "V5#AM",
              },
              FAULT: {
                NAME: "V5#FAULT",
              },
              NAME: "阀门#5",
              TYPE: "D0A30",
              ID: "dlgGILGmUWZO3zUpzuIvGw",
              NO: 5,
              VALVES: [],
            },
            {
              ONOFF_SP: {
                NAME: "V6#ONOFF_SP",
              },
              ONOFF: {
                NAME: "V6#ONOFF",
              },
              OFF: {
                NAME: "V6#OFF",
              },
              ON: {
                NAME: "V6#ON",
              },
              OFF_SP: {
                NAME: "V6#OFF_SP",
              },
              ON_SP: {
                NAME: "V6#ON_SP",
              },
              EB: {
                NAME: "V6#EB",
              },
              AM: {
                NAME: "V6#AM",
              },
              FAULT: {
                NAME: "V6#FAULT",
              },
              NAME: "阀门#6",
              TYPE: "D0A30",
              ID: "OnyTOZn1s72F3QJsREGQAq",
              NO: 6,
              VALVES: [],
            },
          ],
          OTHERS: {},
          CAP_NUM: 0,
        },
        mdyi12W8izM2MILT2FRZ3Q: {
          ONOFF_SP: {
            NAME: "CH4#ONOFF_SP",
          },
          AM: {
            NAME: "CH4#AM",
          },
          EB: {
            NAME: "CH4#EB",
          },
          ONOFF: {
            NAME: "CH4#ONOFF",
          },
          ON: {
            NAME: "CH4#ON",
          },
          OFF: {
            NAME: "CH4#OFF",
          },
          ON_SP: {
            NAME: "CH4#ON_SP",
          },
          OFF_SP: {
            NAME: "CH4#OFF_SP",
          },
          FAULT: {
            NAME: "CH4#FAULT",
          },
          FAULT_CODE: {
            NAME: "CH4#FAULT_CODE",
          },
          FAULT_RESET: {
            NAME: "CH4#FAULT_RESET",
          },
          T_CHW_S: {
            NAME: "CH4#T_CHW_S",
          },
          T_CHW_S_SP: {
            NAME: "CH4#T_CHW_S_SP",
          },
          HRS_TOTAL: {
            NAME: "CH4#HRS_TOTAL",
          },
          HRS: {
            NAME: "CH4#HRS",
          },
          I_PCT: {
            NAME: "CH4#I_PCT",
          },
          I_PCT_MAX_SP: {
            NAME: "CH4#I_PCT_MAX_SP",
          },
          T_EXHT: {
            NAME: "CH4#T_EXHT",
          },
          T_EVAP_ENT: {
            NAME: "CH4#T_EVAP_ENT",
          },
          T_EVAP_LEV: {
            NAME: "CH4#T_EVAP_LEV",
          },
          T_EVAP: {
            NAME: "CH4#T_EVAP",
          },
          PR_EVAP: {
            NAME: "CH4#PR_EVAP",
          },
          T_COND_ENT: {
            NAME: "CH4#T_COND_ENT",
          },
          T_COND_LEV: {
            NAME: "CH4#T_COND_LEV",
          },
          T_COND: {
            NAME: "CH4#T_COND",
          },
          PR_COND: {
            NAME: "CH4#PR_COND",
          },
          T_OIL: {
            NAME: "CH4#T_OIL",
          },
          DPR_OIL: {
            NAME: "CH4#DPR_OIL",
          },
          COUNT_SS: {
            NAME: "CH4#COUNT_SS",
          },
          RANK: {
            NAME: "CH4#RANK",
          },
          P: {
            NAME: "CH4#P",
          },
          W: {
            NAME: "CH4#W",
          },
          ELEC: {
            NAME: "CH4#ELEC",
          },
          I: {
            NAME: "CH4#I",
          },
          COP: {
            NAME: "CH4#COP",
          },
          MODE: {
            NAME: "CH4#MODE",
          },
          T_COND_PROTECT: {
            NAME: "CH4#T_COND_PROTECT",
          },
          PR_EXHT_PROTECT: {
            NAME: "CH4#PR_EXHT_PROTECT",
          },
          P_RATED: {
            NAME: "CH4#P_RATED",
          },
          LOAD_RATED: {
            NAME: "CH4#LOAD_RATED",
            VALUE: "2000",
            VALUE_O: 2000,
          },
          COP_RATED: {
            NAME: "CH4#COP_RATED",
          },
          FLOW_CHW_RATED: {
            NAME: "CH4#FLOW_CHW_RATED",
          },
          FLOW_CW_RATED: {
            NAME: "CH4#FLOW_CW_RATED",
          },
          PLR: {
            NAME: "CH4#PLR",
          },
          LOAD: {
            NAME: "CH4#LOAD",
          },
          FLOW_CHW: {
            NAME: "CH4#FLOW_CHW",
          },
          FLOW_CW: {
            NAME: "CH4#FLOW_CW",
          },
          FLOW_CHW_SWITCH: {
            NAME: "CH4#FLOW_CHW_SWITCH",
          },
          FLOW_CW_SWITCH: {
            NAME: "CH4#FLOW_CW_SWITCH",
          },
          T_CW_R: {
            NAME: "CH4#T_CW_R",
          },
          ONECLICK_START: {
            NAME: "CH4#ONECLICK_START",
          },
          ONECLICK_STOP: {
            NAME: "CH4#ONECLICK_STOP",
          },
          CHWPS: [
            {
              ELEC: {
                NAME: "CHWP1#ELEC",
              },
              ONOFF_SP: {
                NAME: "CHWP1#ONOFF_SP",
              },
              ONOFF: {
                NAME: "CHWP1#ONOFF",
              },
              ON: {
                NAME: "CHWP1#ON",
              },
              OFF: {
                NAME: "CHWP1#OFF",
              },
              ON_SP: {
                NAME: "CHWP1#ON_SP",
              },
              OFF_SP: {
                NAME: "CHWP1#OFF_SP",
              },
              AM: {
                NAME: "CHWP1#AM",
              },
              EB: {
                NAME: "CHWP1#EB",
              },
              FAULT: {
                NAME: "CHWP1#FAULT",
              },
              FAULT_CODE: {
                NAME: "CHWP1#FAULT_CODE",
              },
              FAULT_RESET: {
                NAME: "CHWP1#FAULT_RESET",
              },
              RANK: {
                NAME: "CHWP1#RANK",
              },
              PR_INLET: {
                NAME: "CHWP1#PR_INLET",
              },
              PR_OUTLET: {
                NAME: "CHWP1#PR_OUTLET",
              },
              HRS_TOTAL: {
                NAME: "CHWP1#HRS_TOTAL",
              },
              HRS: {
                NAME: "CHWP1#HRS",
              },
              P: {
                NAME: "CHWP1#P",
              },
              W: {
                NAME: "CHWP1#W",
              },
              COP: {
                NAME: "CHWP1#COP",
              },
              ONOFF_VFD_SP: {
                NAME: "CHWP1#ONOFF_VFD_SP",
              },
              ONOFF_VFD: {
                NAME: "CHWP1#ONOFF_VFD",
              },
              FREQ: {
                NAME: "CHWP1#FREQ",
              },
              FREQ_SP: {
                NAME: "CHWP1#FREQ_SP",
              },
              FAULT_VFD: {
                NAME: "CHWP1#FAULT_VFD",
              },
              P_VFD: {
                NAME: "CHWP1#P_VFD",
              },
              FLOW_RATED: {
                NAME: "CHWP1#FLOW_RATED",
              },
              P_RATED: {
                NAME: "CHWP1#P_RATED",
              },
              COP_RATED: {
                NAME: "CHWP1#COP_RATED",
              },
              ID: "dvuy_JIQf2YuXBtzOFkDLY",
              NO: 1,
              NAME: "冷冻水泵#1",
              TYPE: "D0A1B",
              STATION_ID: "2OE6LBhoeLCw3X4Ki5mEhY",
              STATION_PREFIX_ORG: "HVC1#",
              DEVICE_PREFIX: "CHWP1#",
              SUITE_IDS: [
                "ljGfRmBXdRUwXdsC7jg8A4",
                "wI0YvzukuL3V12o1yiyLLV",
                "XGQuRqZBt69EtGurDNoVV7",
                "mdyi12W8izM2MILT2FRZ3Q",
              ],
              VALVES: [],
              OTHERS: {},
              CAP_NUM: 0,
            },
            {
              ELEC: {
                NAME: "CHWP2#ELEC",
              },
              ONOFF_SP: {
                NAME: "CHWP2#ONOFF_SP",
              },
              ONOFF: {
                NAME: "CHWP2#ONOFF",
              },
              ON: {
                NAME: "CHWP2#ON",
              },
              OFF: {
                NAME: "CHWP2#OFF",
              },
              ON_SP: {
                NAME: "CHWP2#ON_SP",
              },
              OFF_SP: {
                NAME: "CHWP2#OFF_SP",
              },
              AM: {
                NAME: "CHWP2#AM",
              },
              EB: {
                NAME: "CHWP2#EB",
              },
              FAULT: {
                NAME: "CHWP2#FAULT",
              },
              FAULT_CODE: {
                NAME: "CHWP2#FAULT_CODE",
              },
              FAULT_RESET: {
                NAME: "CHWP2#FAULT_RESET",
              },
              RANK: {
                NAME: "CHWP2#RANK",
              },
              PR_INLET: {
                NAME: "CHWP2#PR_INLET",
              },
              PR_OUTLET: {
                NAME: "CHWP2#PR_OUTLET",
              },
              HRS_TOTAL: {
                NAME: "CHWP2#HRS_TOTAL",
              },
              HRS: {
                NAME: "CHWP2#HRS",
              },
              P: {
                NAME: "CHWP2#P",
              },
              W: {
                NAME: "CHWP2#W",
              },
              COP: {
                NAME: "CHWP2#COP",
              },
              ONOFF_VFD_SP: {
                NAME: "CHWP2#ONOFF_VFD_SP",
              },
              ONOFF_VFD: {
                NAME: "CHWP2#ONOFF_VFD",
              },
              FREQ: {
                NAME: "CHWP2#FREQ",
              },
              FREQ_SP: {
                NAME: "CHWP2#FREQ_SP",
              },
              FAULT_VFD: {
                NAME: "CHWP2#FAULT_VFD",
              },
              P_VFD: {
                NAME: "CHWP2#P_VFD",
              },
              FLOW_RATED: {
                NAME: "CHWP2#FLOW_RATED",
              },
              P_RATED: {
                NAME: "CHWP2#P_RATED",
              },
              COP_RATED: {
                NAME: "CHWP2#COP_RATED",
              },
              ID: "m1RJZR4AJCnQkycGfkkyV6",
              NO: 2,
              NAME: "冷冻水泵#2",
              TYPE: "D0A1B",
              STATION_ID: "2OE6LBhoeLCw3X4Ki5mEhY",
              STATION_PREFIX_ORG: "HVC1#",
              DEVICE_PREFIX: "CHWP2#",
              SUITE_IDS: [
                "ljGfRmBXdRUwXdsC7jg8A4",
                "wI0YvzukuL3V12o1yiyLLV",
                "XGQuRqZBt69EtGurDNoVV7",
                "mdyi12W8izM2MILT2FRZ3Q",
              ],
              VALVES: [],
              OTHERS: {},
              CAP_NUM: 0,
            },
            {
              ELEC: {
                NAME: "CHWP3#ELEC",
              },
              ONOFF_SP: {
                NAME: "CHWP3#ONOFF_SP",
              },
              ONOFF: {
                NAME: "CHWP3#ONOFF",
              },
              ON: {
                NAME: "CHWP3#ON",
              },
              OFF: {
                NAME: "CHWP3#OFF",
              },
              ON_SP: {
                NAME: "CHWP3#ON_SP",
              },
              OFF_SP: {
                NAME: "CHWP3#OFF_SP",
              },
              AM: {
                NAME: "CHWP3#AM",
              },
              EB: {
                NAME: "CHWP3#EB",
              },
              FAULT: {
                NAME: "CHWP3#FAULT",
              },
              FAULT_CODE: {
                NAME: "CHWP3#FAULT_CODE",
              },
              FAULT_RESET: {
                NAME: "CHWP3#FAULT_RESET",
              },
              RANK: {
                NAME: "CHWP3#RANK",
              },
              PR_INLET: {
                NAME: "CHWP3#PR_INLET",
              },
              PR_OUTLET: {
                NAME: "CHWP3#PR_OUTLET",
              },
              HRS_TOTAL: {
                NAME: "CHWP3#HRS_TOTAL",
              },
              HRS: {
                NAME: "CHWP3#HRS",
              },
              P: {
                NAME: "CHWP3#P",
              },
              W: {
                NAME: "CHWP3#W",
              },
              COP: {
                NAME: "CHWP3#COP",
              },
              ONOFF_VFD_SP: {
                NAME: "CHWP3#ONOFF_VFD_SP",
              },
              ONOFF_VFD: {
                NAME: "CHWP3#ONOFF_VFD",
              },
              FREQ: {
                NAME: "CHWP3#FREQ",
              },
              FREQ_SP: {
                NAME: "CHWP3#FREQ_SP",
              },
              FAULT_VFD: {
                NAME: "CHWP3#FAULT_VFD",
              },
              P_VFD: {
                NAME: "CHWP3#P_VFD",
              },
              FLOW_RATED: {
                NAME: "CHWP3#FLOW_RATED",
              },
              P_RATED: {
                NAME: "CHWP3#P_RATED",
              },
              COP_RATED: {
                NAME: "CHWP3#COP_RATED",
              },
              ID: "fJdoIuCK4NFTETY8K_MWQG",
              NO: 3,
              NAME: "冷冻水泵#3",
              TYPE: "D0A1B",
              STATION_ID: "2OE6LBhoeLCw3X4Ki5mEhY",
              STATION_PREFIX_ORG: "HVC1#",
              DEVICE_PREFIX: "CHWP3#",
              SUITE_IDS: [
                "ljGfRmBXdRUwXdsC7jg8A4",
                "wI0YvzukuL3V12o1yiyLLV",
                "XGQuRqZBt69EtGurDNoVV7",
                "mdyi12W8izM2MILT2FRZ3Q",
              ],
              VALVES: [],
              OTHERS: {},
              CAP_NUM: 0,
            },
            {
              ELEC: {
                NAME: "CHWP4#ELEC",
              },
              ONOFF_SP: {
                NAME: "CHWP4#ONOFF_SP",
              },
              ONOFF: {
                NAME: "CHWP4#ONOFF",
              },
              ON: {
                NAME: "CHWP4#ON",
              },
              OFF: {
                NAME: "CHWP4#OFF",
              },
              ON_SP: {
                NAME: "CHWP4#ON_SP",
              },
              OFF_SP: {
                NAME: "CHWP4#OFF_SP",
              },
              AM: {
                NAME: "CHWP4#AM",
              },
              EB: {
                NAME: "CHWP4#EB",
              },
              FAULT: {
                NAME: "CHWP4#FAULT",
              },
              FAULT_CODE: {
                NAME: "CHWP4#FAULT_CODE",
              },
              FAULT_RESET: {
                NAME: "CHWP4#FAULT_RESET",
              },
              RANK: {
                NAME: "CHWP4#RANK",
              },
              PR_INLET: {
                NAME: "CHWP4#PR_INLET",
              },
              PR_OUTLET: {
                NAME: "CHWP4#PR_OUTLET",
              },
              HRS_TOTAL: {
                NAME: "CHWP4#HRS_TOTAL",
              },
              HRS: {
                NAME: "CHWP4#HRS",
              },
              P: {
                NAME: "CHWP4#P",
              },
              W: {
                NAME: "CHWP4#W",
              },
              COP: {
                NAME: "CHWP4#COP",
              },
              ONOFF_VFD_SP: {
                NAME: "CHWP4#ONOFF_VFD_SP",
              },
              ONOFF_VFD: {
                NAME: "CHWP4#ONOFF_VFD",
              },
              FREQ: {
                NAME: "CHWP4#FREQ",
              },
              FREQ_SP: {
                NAME: "CHWP4#FREQ_SP",
              },
              FAULT_VFD: {
                NAME: "CHWP4#FAULT_VFD",
              },
              P_VFD: {
                NAME: "CHWP4#P_VFD",
              },
              FLOW_RATED: {
                NAME: "CHWP4#FLOW_RATED",
              },
              P_RATED: {
                NAME: "CHWP4#P_RATED",
              },
              COP_RATED: {
                NAME: "CHWP4#COP_RATED",
              },
              ID: "TW9AcYLFTrOecDLa_KrLnv",
              NO: 4,
              NAME: "冷冻水泵#4",
              TYPE: "D0A1B",
              STATION_ID: "2OE6LBhoeLCw3X4Ki5mEhY",
              STATION_PREFIX_ORG: "HVC1#",
              DEVICE_PREFIX: "CHWP4#",
              SUITE_IDS: [
                "ljGfRmBXdRUwXdsC7jg8A4",
                "wI0YvzukuL3V12o1yiyLLV",
                "XGQuRqZBt69EtGurDNoVV7",
                "mdyi12W8izM2MILT2FRZ3Q",
              ],
              VALVES: [],
              OTHERS: {},
              CAP_NUM: 0,
            },
          ],
          SCHWPS: [],
          CWPS: [
            {
              ELEC: {
                NAME: "CWP1#ELEC",
              },
              ONOFF_SP: {
                NAME: "CWP1#ONOFF_SP",
              },
              ONOFF: {
                NAME: "CWP1#ONOFF",
              },
              ON: {
                NAME: "CWP1#ON",
              },
              OFF: {
                NAME: "CWP1#OFF",
              },
              ON_SP: {
                NAME: "CWP1#ON_SP",
              },
              OFF_SP: {
                NAME: "CWP1#OFF_SP",
              },
              AM: {
                NAME: "CWP1#AM",
              },
              EB: {
                NAME: "CWP1#EB",
              },
              FAULT: {
                NAME: "CWP1#FAULT",
              },
              FAULT_CODE: {
                NAME: "CWP1#FAULT_CODE",
              },
              FAULT_RESET: {
                NAME: "CWP1#FAULT_RESET",
              },
              RANK: {
                NAME: "CWP1#RANK",
              },
              PR_INLET: {
                NAME: "CWP1#PR_INLET",
              },
              PR_OUTLET: {
                NAME: "CWP1#PR_OUTLET",
              },
              HRS_TOTAL: {
                NAME: "CWP1#HRS_TOTAL",
              },
              HRS: {
                NAME: "CWP1#HRS",
              },
              P: {
                NAME: "CWP1#P",
              },
              W: {
                NAME: "CWP1#W",
              },
              COP: {
                NAME: "CWP1#COP",
              },
              ONOFF_VFD_SP: {
                NAME: "CWP1#ONOFF_VFD_SP",
              },
              ONOFF_VFD: {
                NAME: "CWP1#ONOFF_VFD",
              },
              FREQ: {
                NAME: "CWP1#FREQ",
              },
              FREQ_SP: {
                NAME: "CWP1#FREQ_SP",
              },
              FAULT_VFD: {
                NAME: "CWP1#FAULT_VFD",
              },
              P_VFD: {
                NAME: "CWP1#P_VFD",
              },
              FLOW_RATED: {
                NAME: "CWP1#FLOW_RATED",
              },
              P_RATED: {
                NAME: "CWP1#P_RATED",
              },
              COP_RATED: {
                NAME: "CWP1#COP_RATED",
              },
              ID: "c8uzkkrC4l9Ui0IWyEVG45",
              NO: 1,
              NAME: "冷却水泵#1",
              TYPE: "D0A1C",
              STATION_ID: "2OE6LBhoeLCw3X4Ki5mEhY",
              STATION_PREFIX_ORG: "HVC1#",
              DEVICE_PREFIX: "CWP1#",
              SUITE_IDS: [
                "ljGfRmBXdRUwXdsC7jg8A4",
                "wI0YvzukuL3V12o1yiyLLV",
                "XGQuRqZBt69EtGurDNoVV7",
                "mdyi12W8izM2MILT2FRZ3Q",
              ],
              VALVES: [],
              OTHERS: {},
              CAP_NUM: 0,
            },
            {
              ELEC: {
                NAME: "CWP2#ELEC",
              },
              ONOFF_SP: {
                NAME: "CWP2#ONOFF_SP",
              },
              ONOFF: {
                NAME: "CWP2#ONOFF",
              },
              ON: {
                NAME: "CWP2#ON",
              },
              OFF: {
                NAME: "CWP2#OFF",
              },
              ON_SP: {
                NAME: "CWP2#ON_SP",
              },
              OFF_SP: {
                NAME: "CWP2#OFF_SP",
              },
              AM: {
                NAME: "CWP2#AM",
              },
              EB: {
                NAME: "CWP2#EB",
              },
              FAULT: {
                NAME: "CWP2#FAULT",
              },
              FAULT_CODE: {
                NAME: "CWP2#FAULT_CODE",
              },
              FAULT_RESET: {
                NAME: "CWP2#FAULT_RESET",
              },
              RANK: {
                NAME: "CWP2#RANK",
              },
              PR_INLET: {
                NAME: "CWP2#PR_INLET",
              },
              PR_OUTLET: {
                NAME: "CWP2#PR_OUTLET",
              },
              HRS_TOTAL: {
                NAME: "CWP2#HRS_TOTAL",
              },
              HRS: {
                NAME: "CWP2#HRS",
              },
              P: {
                NAME: "CWP2#P",
              },
              W: {
                NAME: "CWP2#W",
              },
              COP: {
                NAME: "CWP2#COP",
              },
              ONOFF_VFD_SP: {
                NAME: "CWP2#ONOFF_VFD_SP",
              },
              ONOFF_VFD: {
                NAME: "CWP2#ONOFF_VFD",
              },
              FREQ: {
                NAME: "CWP2#FREQ",
              },
              FREQ_SP: {
                NAME: "CWP2#FREQ_SP",
              },
              FAULT_VFD: {
                NAME: "CWP2#FAULT_VFD",
              },
              P_VFD: {
                NAME: "CWP2#P_VFD",
              },
              FLOW_RATED: {
                NAME: "CWP2#FLOW_RATED",
              },
              P_RATED: {
                NAME: "CWP2#P_RATED",
              },
              COP_RATED: {
                NAME: "CWP2#COP_RATED",
              },
              ID: "3cikHzRIya50UMs8LsC3zg",
              NO: 2,
              NAME: "冷却水泵#2",
              TYPE: "D0A1C",
              STATION_ID: "2OE6LBhoeLCw3X4Ki5mEhY",
              STATION_PREFIX_ORG: "HVC1#",
              DEVICE_PREFIX: "CWP2#",
              SUITE_IDS: [
                "ljGfRmBXdRUwXdsC7jg8A4",
                "wI0YvzukuL3V12o1yiyLLV",
                "XGQuRqZBt69EtGurDNoVV7",
                "mdyi12W8izM2MILT2FRZ3Q",
              ],
              VALVES: [],
              OTHERS: {},
              CAP_NUM: 0,
            },
            {
              ELEC: {
                NAME: "CWP3#ELEC",
              },
              ONOFF_SP: {
                NAME: "CWP3#ONOFF_SP",
              },
              ONOFF: {
                NAME: "CWP3#ONOFF",
              },
              ON: {
                NAME: "CWP3#ON",
              },
              OFF: {
                NAME: "CWP3#OFF",
              },
              ON_SP: {
                NAME: "CWP3#ON_SP",
              },
              OFF_SP: {
                NAME: "CWP3#OFF_SP",
              },
              AM: {
                NAME: "CWP3#AM",
              },
              EB: {
                NAME: "CWP3#EB",
              },
              FAULT: {
                NAME: "CWP3#FAULT",
              },
              FAULT_CODE: {
                NAME: "CWP3#FAULT_CODE",
              },
              FAULT_RESET: {
                NAME: "CWP3#FAULT_RESET",
              },
              RANK: {
                NAME: "CWP3#RANK",
              },
              PR_INLET: {
                NAME: "CWP3#PR_INLET",
              },
              PR_OUTLET: {
                NAME: "CWP3#PR_OUTLET",
              },
              HRS_TOTAL: {
                NAME: "CWP3#HRS_TOTAL",
              },
              HRS: {
                NAME: "CWP3#HRS",
              },
              P: {
                NAME: "CWP3#P",
              },
              W: {
                NAME: "CWP3#W",
              },
              COP: {
                NAME: "CWP3#COP",
              },
              ONOFF_VFD_SP: {
                NAME: "CWP3#ONOFF_VFD_SP",
              },
              ONOFF_VFD: {
                NAME: "CWP3#ONOFF_VFD",
              },
              FREQ: {
                NAME: "CWP3#FREQ",
              },
              FREQ_SP: {
                NAME: "CWP3#FREQ_SP",
              },
              FAULT_VFD: {
                NAME: "CWP3#FAULT_VFD",
              },
              P_VFD: {
                NAME: "CWP3#P_VFD",
              },
              FLOW_RATED: {
                NAME: "CWP3#FLOW_RATED",
              },
              P_RATED: {
                NAME: "CWP3#P_RATED",
              },
              COP_RATED: {
                NAME: "CWP3#COP_RATED",
              },
              ID: "QDfEG9ORVEUlXT3Q0D9z8L",
              NO: 3,
              NAME: "冷却水泵#3",
              TYPE: "D0A1C",
              STATION_ID: "2OE6LBhoeLCw3X4Ki5mEhY",
              STATION_PREFIX_ORG: "HVC1#",
              DEVICE_PREFIX: "CWP3#",
              SUITE_IDS: [
                "ljGfRmBXdRUwXdsC7jg8A4",
                "wI0YvzukuL3V12o1yiyLLV",
                "XGQuRqZBt69EtGurDNoVV7",
                "mdyi12W8izM2MILT2FRZ3Q",
              ],
              VALVES: [],
              OTHERS: {},
              CAP_NUM: 0,
            },
            {
              ELEC: {
                NAME: "CWP4#ELEC",
              },
              ONOFF_SP: {
                NAME: "CWP4#ONOFF_SP",
              },
              ONOFF: {
                NAME: "CWP4#ONOFF",
              },
              ON: {
                NAME: "CWP4#ON",
              },
              OFF: {
                NAME: "CWP4#OFF",
              },
              ON_SP: {
                NAME: "CWP4#ON_SP",
              },
              OFF_SP: {
                NAME: "CWP4#OFF_SP",
              },
              AM: {
                NAME: "CWP4#AM",
              },
              EB: {
                NAME: "CWP4#EB",
              },
              FAULT: {
                NAME: "CWP4#FAULT",
              },
              FAULT_CODE: {
                NAME: "CWP4#FAULT_CODE",
              },
              FAULT_RESET: {
                NAME: "CWP4#FAULT_RESET",
              },
              RANK: {
                NAME: "CWP4#RANK",
              },
              PR_INLET: {
                NAME: "CWP4#PR_INLET",
              },
              PR_OUTLET: {
                NAME: "CWP4#PR_OUTLET",
              },
              HRS_TOTAL: {
                NAME: "CWP4#HRS_TOTAL",
              },
              HRS: {
                NAME: "CWP4#HRS",
              },
              P: {
                NAME: "CWP4#P",
              },
              W: {
                NAME: "CWP4#W",
              },
              COP: {
                NAME: "CWP4#COP",
              },
              ONOFF_VFD_SP: {
                NAME: "CWP4#ONOFF_VFD_SP",
              },
              ONOFF_VFD: {
                NAME: "CWP4#ONOFF_VFD",
              },
              FREQ: {
                NAME: "CWP4#FREQ",
              },
              FREQ_SP: {
                NAME: "CWP4#FREQ_SP",
              },
              FAULT_VFD: {
                NAME: "CWP4#FAULT_VFD",
              },
              P_VFD: {
                NAME: "CWP4#P_VFD",
              },
              FLOW_RATED: {
                NAME: "CWP4#FLOW_RATED",
              },
              P_RATED: {
                NAME: "CWP4#P_RATED",
              },
              COP_RATED: {
                NAME: "CWP4#COP_RATED",
              },
              ID: "E9F8NArlUYGJFZwZbxW3Z7",
              NO: 4,
              NAME: "冷却水泵#4",
              TYPE: "D0A1C",
              STATION_ID: "2OE6LBhoeLCw3X4Ki5mEhY",
              STATION_PREFIX_ORG: "HVC1#",
              DEVICE_PREFIX: "CWP4#",
              SUITE_IDS: [
                "ljGfRmBXdRUwXdsC7jg8A4",
                "wI0YvzukuL3V12o1yiyLLV",
                "XGQuRqZBt69EtGurDNoVV7",
                "mdyi12W8izM2MILT2FRZ3Q",
              ],
              VALVES: [],
              OTHERS: {},
              CAP_NUM: 0,
            },
          ],
          CTS: [
            {
              ONOFF_SP: {
                NAME: "CT1#ONOFF_SP",
              },
              ONOFF: {
                NAME: "CT1#ONOFF",
              },
              ON: {
                NAME: "CT1#ON",
              },
              OFF: {
                NAME: "CT1#OFF",
              },
              ON_SP: {
                NAME: "CT1#ON_SP",
              },
              OFF_SP: {
                NAME: "CT1#OFF_SP",
              },
              AM: {
                NAME: "CT1#AM",
              },
              EB: {
                NAME: "CT1#EB",
              },
              FAULT: {
                NAME: "CT1#FAULT",
              },
              FAULT_CODE: {
                NAME: "CT1#FAULT_CODE",
              },
              FAULT_RESET: {
                NAME: "CT1#FAULT_RESET",
              },
              RANK: {
                NAME: "CT1#RANK",
              },
              HRS_TOTAL: {
                NAME: "CT1#HRS_TOTAL",
              },
              HRS: {
                NAME: "CT1#HRS",
              },
              P: {
                NAME: "CT1#P",
              },
              W: {
                NAME: "CT1#W",
              },
              ELEC: {
                NAME: "CT1#ELEC",
              },
              COP: {
                NAME: "CT1#COP",
              },
              ONOFF_VFD_SP: {
                NAME: "CT1#ONOFF_VFD_SP",
              },
              ONOFF_VFD: {
                NAME: "CT1#ONOFF_VFD",
              },
              FREQ: {
                NAME: "CT1#FREQ",
              },
              FREQ_SP: {
                NAME: "CT1#FREQ_SP",
              },
              FAULT_VFD: {
                NAME: "CT1#FAULT_VFD",
              },
              P_VFD: {
                NAME: "CT1#P_VFD",
              },
              FLOW_RATED: {
                NAME: "CT1#FLOW_RATED",
              },
              P_RATED: {
                NAME: "CT1#P_RATED",
              },
              COP_RATED: {
                NAME: "CT1#COP_RATED",
              },
              ID: "ee4ofIjLr4WRjIQFPVro58",
              NO: 1,
              NAME: "冷却塔#1",
              TYPE: "D0A1D",
              STATION_ID: "2OE6LBhoeLCw3X4Ki5mEhY",
              STATION_PREFIX_ORG: "HVC1#",
              DEVICE_PREFIX: "CT1#",
              SUITE_IDS: [
                "ljGfRmBXdRUwXdsC7jg8A4",
                "wI0YvzukuL3V12o1yiyLLV",
                "XGQuRqZBt69EtGurDNoVV7",
                "mdyi12W8izM2MILT2FRZ3Q",
              ],
              VALVES: [
                {
                  ONOFF_SP: {
                    NAME: "V9#ONOFF_SP",
                  },
                  ONOFF: {
                    NAME: "V9#ONOFF",
                  },
                  OFF: {
                    NAME: "V9#OFF",
                  },
                  ON: {
                    NAME: "V9#ON",
                  },
                  OFF_SP: {
                    NAME: "V9#OFF_SP",
                  },
                  ON_SP: {
                    NAME: "V9#ON_SP",
                  },
                  EB: {
                    NAME: "V9#EB",
                  },
                  AM: {
                    NAME: "V9#AM",
                  },
                  FAULT: {
                    NAME: "V9#FAULT",
                  },
                  NAME: "阀门#9",
                  TYPE: "D0A30",
                  ID: "bi2S1oBhLeKE6TIl37vdDB",
                  NO: 9,
                  VALVES: [],
                },
                {
                  ONOFF_SP: {
                    NAME: "V10#ONOFF_SP",
                  },
                  ONOFF: {
                    NAME: "V10#ONOFF",
                  },
                  OFF: {
                    NAME: "V10#OFF",
                  },
                  ON: {
                    NAME: "V10#ON",
                  },
                  OFF_SP: {
                    NAME: "V10#OFF_SP",
                  },
                  ON_SP: {
                    NAME: "V10#ON_SP",
                  },
                  EB: {
                    NAME: "V10#EB",
                  },
                  AM: {
                    NAME: "V10#AM",
                  },
                  FAULT: {
                    NAME: "V10#FAULT",
                  },
                  NAME: "阀门#10",
                  TYPE: "D0A30",
                  ID: "YtPHM3z8XmC3x37VMNfrG0",
                  NO: 10,
                  VALVES: [],
                },
              ],
              OTHERS: {},
              CAP_NUM: 0,
            },
            {
              ONOFF_SP: {
                NAME: "CT2#ONOFF_SP",
              },
              ONOFF: {
                NAME: "CT2#ONOFF",
              },
              ON: {
                NAME: "CT2#ON",
              },
              OFF: {
                NAME: "CT2#OFF",
              },
              ON_SP: {
                NAME: "CT2#ON_SP",
              },
              OFF_SP: {
                NAME: "CT2#OFF_SP",
              },
              AM: {
                NAME: "CT2#AM",
              },
              EB: {
                NAME: "CT2#EB",
              },
              FAULT: {
                NAME: "CT2#FAULT",
              },
              FAULT_CODE: {
                NAME: "CT2#FAULT_CODE",
              },
              FAULT_RESET: {
                NAME: "CT2#FAULT_RESET",
              },
              RANK: {
                NAME: "CT2#RANK",
              },
              HRS_TOTAL: {
                NAME: "CT2#HRS_TOTAL",
              },
              HRS: {
                NAME: "CT2#HRS",
              },
              P: {
                NAME: "CT2#P",
              },
              W: {
                NAME: "CT2#W",
              },
              ELEC: {
                NAME: "CT2#ELEC",
              },
              COP: {
                NAME: "CT2#COP",
              },
              ONOFF_VFD_SP: {
                NAME: "CT2#ONOFF_VFD_SP",
              },
              ONOFF_VFD: {
                NAME: "CT2#ONOFF_VFD",
              },
              FREQ: {
                NAME: "CT2#FREQ",
              },
              FREQ_SP: {
                NAME: "CT2#FREQ_SP",
              },
              FAULT_VFD: {
                NAME: "CT2#FAULT_VFD",
              },
              P_VFD: {
                NAME: "CT2#P_VFD",
              },
              FLOW_RATED: {
                NAME: "CT2#FLOW_RATED",
              },
              P_RATED: {
                NAME: "CT2#P_RATED",
              },
              COP_RATED: {
                NAME: "CT2#COP_RATED",
              },
              ID: "cSvhfgynIwK7_iDzbHIZ7I",
              NO: 2,
              NAME: "冷却塔#2",
              TYPE: "D0A1D",
              STATION_ID: "2OE6LBhoeLCw3X4Ki5mEhY",
              STATION_PREFIX_ORG: "HVC1#",
              DEVICE_PREFIX: "CT2#",
              SUITE_IDS: [
                "ljGfRmBXdRUwXdsC7jg8A4",
                "wI0YvzukuL3V12o1yiyLLV",
                "XGQuRqZBt69EtGurDNoVV7",
                "mdyi12W8izM2MILT2FRZ3Q",
              ],
              VALVES: [
                {
                  ONOFF_SP: {
                    NAME: "V11#ONOFF_SP",
                  },
                  ONOFF: {
                    NAME: "V11#ONOFF",
                  },
                  OFF: {
                    NAME: "V11#OFF",
                  },
                  ON: {
                    NAME: "V11#ON",
                  },
                  OFF_SP: {
                    NAME: "V11#OFF_SP",
                  },
                  ON_SP: {
                    NAME: "V11#ON_SP",
                  },
                  EB: {
                    NAME: "V11#EB",
                  },
                  AM: {
                    NAME: "V11#AM",
                  },
                  FAULT: {
                    NAME: "V11#FAULT",
                  },
                  NAME: "阀门#11",
                  TYPE: "D0A30",
                  ID: "2VlqwFEAYJnBnecsQdflri",
                  NO: 11,
                  VALVES: [],
                },
                {
                  ONOFF_SP: {
                    NAME: "V12#ONOFF_SP",
                  },
                  ONOFF: {
                    NAME: "V12#ONOFF",
                  },
                  OFF: {
                    NAME: "V12#OFF",
                  },
                  ON: {
                    NAME: "V12#ON",
                  },
                  OFF_SP: {
                    NAME: "V12#OFF_SP",
                  },
                  ON_SP: {
                    NAME: "V12#ON_SP",
                  },
                  EB: {
                    NAME: "V12#EB",
                  },
                  AM: {
                    NAME: "V12#AM",
                  },
                  FAULT: {
                    NAME: "V12#FAULT",
                  },
                  NAME: "阀门#12",
                  TYPE: "D0A30",
                  ID: "DoXn8Av4ib3OVZ5mJX7fOJ",
                  NO: 12,
                  VALVES: [],
                },
              ],
              OTHERS: {},
              CAP_NUM: 0,
            },
            {
              ONOFF_SP: {
                NAME: "CT3#ONOFF_SP",
              },
              ONOFF: {
                NAME: "CT3#ONOFF",
              },
              ON: {
                NAME: "CT3#ON",
              },
              OFF: {
                NAME: "CT3#OFF",
              },
              ON_SP: {
                NAME: "CT3#ON_SP",
              },
              OFF_SP: {
                NAME: "CT3#OFF_SP",
              },
              AM: {
                NAME: "CT3#AM",
              },
              EB: {
                NAME: "CT3#EB",
              },
              FAULT: {
                NAME: "CT3#FAULT",
              },
              FAULT_CODE: {
                NAME: "CT3#FAULT_CODE",
              },
              FAULT_RESET: {
                NAME: "CT3#FAULT_RESET",
              },
              RANK: {
                NAME: "CT3#RANK",
              },
              HRS_TOTAL: {
                NAME: "CT3#HRS_TOTAL",
              },
              HRS: {
                NAME: "CT3#HRS",
              },
              P: {
                NAME: "CT3#P",
              },
              W: {
                NAME: "CT3#W",
              },
              ELEC: {
                NAME: "CT3#ELEC",
              },
              COP: {
                NAME: "CT3#COP",
              },
              ONOFF_VFD_SP: {
                NAME: "CT3#ONOFF_VFD_SP",
              },
              ONOFF_VFD: {
                NAME: "CT3#ONOFF_VFD",
              },
              FREQ: {
                NAME: "CT3#FREQ",
              },
              FREQ_SP: {
                NAME: "CT3#FREQ_SP",
              },
              FAULT_VFD: {
                NAME: "CT3#FAULT_VFD",
              },
              P_VFD: {
                NAME: "CT3#P_VFD",
              },
              FLOW_RATED: {
                NAME: "CT3#FLOW_RATED",
              },
              P_RATED: {
                NAME: "CT3#P_RATED",
              },
              COP_RATED: {
                NAME: "CT3#COP_RATED",
              },
              ID: "5Bv3pNiaQ0Oe_yrJJuyP2I",
              NO: 3,
              NAME: "冷却塔#3",
              TYPE: "D0A1D",
              STATION_ID: "2OE6LBhoeLCw3X4Ki5mEhY",
              STATION_PREFIX_ORG: "HVC1#",
              DEVICE_PREFIX: "CT3#",
              SUITE_IDS: [
                "ljGfRmBXdRUwXdsC7jg8A4",
                "wI0YvzukuL3V12o1yiyLLV",
                "XGQuRqZBt69EtGurDNoVV7",
                "mdyi12W8izM2MILT2FRZ3Q",
              ],
              VALVES: [
                {
                  ONOFF_SP: {
                    NAME: "V13#ONOFF_SP",
                  },
                  ONOFF: {
                    NAME: "V13#ONOFF",
                  },
                  OFF: {
                    NAME: "V13#OFF",
                  },
                  ON: {
                    NAME: "V13#ON",
                  },
                  OFF_SP: {
                    NAME: "V13#OFF_SP",
                  },
                  ON_SP: {
                    NAME: "V13#ON_SP",
                  },
                  EB: {
                    NAME: "V13#EB",
                  },
                  AM: {
                    NAME: "V13#AM",
                  },
                  FAULT: {
                    NAME: "V13#FAULT",
                  },
                  NAME: "阀门#13",
                  TYPE: "D0A30",
                  ID: "BP8J7wISsJ4nmRCxV2pufp",
                  NO: 13,
                  VALVES: [],
                },
                {
                  ONOFF_SP: {
                    NAME: "V14#ONOFF_SP",
                  },
                  ONOFF: {
                    NAME: "V14#ONOFF",
                  },
                  OFF: {
                    NAME: "V14#OFF",
                  },
                  ON: {
                    NAME: "V14#ON",
                  },
                  OFF_SP: {
                    NAME: "V14#OFF_SP",
                  },
                  ON_SP: {
                    NAME: "V14#ON_SP",
                  },
                  EB: {
                    NAME: "V14#EB",
                  },
                  AM: {
                    NAME: "V14#AM",
                  },
                  FAULT: {
                    NAME: "V14#FAULT",
                  },
                  NAME: "阀门#14",
                  TYPE: "D0A30",
                  ID: "gHmtkUbK799frcw29TFRnl",
                  NO: 14,
                  VALVES: [],
                },
              ],
              OTHERS: {},
              CAP_NUM: 0,
            },
            {
              ONOFF_SP: {
                NAME: "CT4#ONOFF_SP",
              },
              ONOFF: {
                NAME: "CT4#ONOFF",
              },
              ON: {
                NAME: "CT4#ON",
              },
              OFF: {
                NAME: "CT4#OFF",
              },
              ON_SP: {
                NAME: "CT4#ON_SP",
              },
              OFF_SP: {
                NAME: "CT4#OFF_SP",
              },
              AM: {
                NAME: "CT4#AM",
              },
              EB: {
                NAME: "CT4#EB",
              },
              FAULT: {
                NAME: "CT4#FAULT",
              },
              FAULT_CODE: {
                NAME: "CT4#FAULT_CODE",
              },
              FAULT_RESET: {
                NAME: "CT4#FAULT_RESET",
              },
              RANK: {
                NAME: "CT4#RANK",
              },
              HRS_TOTAL: {
                NAME: "CT4#HRS_TOTAL",
              },
              HRS: {
                NAME: "CT4#HRS",
              },
              P: {
                NAME: "CT4#P",
              },
              W: {
                NAME: "CT4#W",
              },
              ELEC: {
                NAME: "CT4#ELEC",
              },
              COP: {
                NAME: "CT4#COP",
              },
              ONOFF_VFD_SP: {
                NAME: "CT4#ONOFF_VFD_SP",
              },
              ONOFF_VFD: {
                NAME: "CT4#ONOFF_VFD",
              },
              FREQ: {
                NAME: "CT4#FREQ",
              },
              FREQ_SP: {
                NAME: "CT4#FREQ_SP",
              },
              FAULT_VFD: {
                NAME: "CT4#FAULT_VFD",
              },
              P_VFD: {
                NAME: "CT4#P_VFD",
              },
              FLOW_RATED: {
                NAME: "CT4#FLOW_RATED",
              },
              P_RATED: {
                NAME: "CT4#P_RATED",
              },
              COP_RATED: {
                NAME: "CT4#COP_RATED",
              },
              ID: "RE8J3ykpC6RUtGSfiOigU3",
              NO: 4,
              NAME: "冷却塔#4",
              TYPE: "D0A1D",
              STATION_ID: "2OE6LBhoeLCw3X4Ki5mEhY",
              STATION_PREFIX_ORG: "HVC1#",
              DEVICE_PREFIX: "CT4#",
              SUITE_IDS: [
                "ljGfRmBXdRUwXdsC7jg8A4",
                "wI0YvzukuL3V12o1yiyLLV",
                "XGQuRqZBt69EtGurDNoVV7",
                "mdyi12W8izM2MILT2FRZ3Q",
              ],
              VALVES: [
                {
                  ONOFF_SP: {
                    NAME: "V16#ONOFF_SP",
                  },
                  ONOFF: {
                    NAME: "V16#ONOFF",
                  },
                  OFF: {
                    NAME: "V16#OFF",
                  },
                  ON: {
                    NAME: "V16#ON",
                  },
                  OFF_SP: {
                    NAME: "V16#OFF_SP",
                  },
                  ON_SP: {
                    NAME: "V16#ON_SP",
                  },
                  EB: {
                    NAME: "V16#EB",
                  },
                  AM: {
                    NAME: "V16#AM",
                  },
                  FAULT: {
                    NAME: "V16#FAULT",
                  },
                  NAME: "阀门#16",
                  TYPE: "D0A30",
                  ID: "t8js1U79E6Bf2tH7qb46hA",
                  NO: 16,
                  VALVES: [],
                },
                {
                  ONOFF_SP: {
                    NAME: "V15#ONOFF_SP",
                  },
                  ONOFF: {
                    NAME: "V15#ONOFF",
                  },
                  OFF: {
                    NAME: "V15#OFF",
                  },
                  ON: {
                    NAME: "V15#ON",
                  },
                  OFF_SP: {
                    NAME: "V15#OFF_SP",
                  },
                  ON_SP: {
                    NAME: "V15#ON_SP",
                  },
                  EB: {
                    NAME: "V15#EB",
                  },
                  AM: {
                    NAME: "V15#AM",
                  },
                  FAULT: {
                    NAME: "V15#FAULT",
                  },
                  NAME: "阀门#15",
                  TYPE: "D0A30",
                  ID: "Ma11HQ6JfGVjfYgG4brjnK",
                  NO: 15,
                  VALVES: [],
                },
              ],
              OTHERS: {},
              CAP_NUM: 0,
            },
          ],
          ID: "mdyi12W8izM2MILT2FRZ3Q",
          NO: 4,
          NAME: "制冷机#4",
          TYPE: "D0A1A",
          STATION_ID: "2OE6LBhoeLCw3X4Ki5mEhY",
          STATION_PREFIX_ORG: "HVC1#",
          DEVICE_PREFIX: "CH4#",
          SUITE_IDS: [],
          VALVES: [
            {
              ONOFF_SP: {
                NAME: "V7#ONOFF_SP",
              },
              ONOFF: {
                NAME: "V7#ONOFF",
              },
              OFF: {
                NAME: "V7#OFF",
              },
              ON: {
                NAME: "V7#ON",
              },
              OFF_SP: {
                NAME: "V7#OFF_SP",
              },
              ON_SP: {
                NAME: "V7#ON_SP",
              },
              EB: {
                NAME: "V7#EB",
              },
              AM: {
                NAME: "V7#AM",
              },
              FAULT: {
                NAME: "V7#FAULT",
              },
              NAME: "阀门#7",
              TYPE: "D0A30",
              ID: "3oyHQYohtfD6CTI5UUDopY",
              NO: 7,
              VALVES: [],
            },
            {
              ONOFF_SP: {
                NAME: "V8#ONOFF_SP",
              },
              ONOFF: {
                NAME: "V8#ONOFF",
              },
              OFF: {
                NAME: "V8#OFF",
              },
              ON: {
                NAME: "V8#ON",
              },
              OFF_SP: {
                NAME: "V8#OFF_SP",
              },
              ON_SP: {
                NAME: "V8#ON_SP",
              },
              EB: {
                NAME: "V8#EB",
              },
              AM: {
                NAME: "V8#AM",
              },
              FAULT: {
                NAME: "V8#FAULT",
              },
              NAME: "阀门#8",
              TYPE: "D0A30",
              ID: "CadsrgiGPVWFucf_Laf8J6",
              NO: 8,
              VALVES: [],
            },
          ],
          OTHERS: {},
          CAP_NUM: 0,
        },
      },
      CHWPS: {
        dvuy_JIQf2YuXBtzOFkDLY: {
          ELEC: {
            NAME: "CHWP1#ELEC",
          },
          ONOFF_SP: {
            NAME: "CHWP1#ONOFF_SP",
          },
          ONOFF: {
            NAME: "CHWP1#ONOFF",
          },
          ON: {
            NAME: "CHWP1#ON",
          },
          OFF: {
            NAME: "CHWP1#OFF",
          },
          ON_SP: {
            NAME: "CHWP1#ON_SP",
          },
          OFF_SP: {
            NAME: "CHWP1#OFF_SP",
          },
          AM: {
            NAME: "CHWP1#AM",
          },
          EB: {
            NAME: "CHWP1#EB",
          },
          FAULT: {
            NAME: "CHWP1#FAULT",
          },
          FAULT_CODE: {
            NAME: "CHWP1#FAULT_CODE",
          },
          FAULT_RESET: {
            NAME: "CHWP1#FAULT_RESET",
          },
          RANK: {
            NAME: "CHWP1#RANK",
          },
          PR_INLET: {
            NAME: "CHWP1#PR_INLET",
          },
          PR_OUTLET: {
            NAME: "CHWP1#PR_OUTLET",
          },
          HRS_TOTAL: {
            NAME: "CHWP1#HRS_TOTAL",
          },
          HRS: {
            NAME: "CHWP1#HRS",
          },
          P: {
            NAME: "CHWP1#P",
          },
          W: {
            NAME: "CHWP1#W",
          },
          COP: {
            NAME: "CHWP1#COP",
          },
          ONOFF_VFD_SP: {
            NAME: "CHWP1#ONOFF_VFD_SP",
          },
          ONOFF_VFD: {
            NAME: "CHWP1#ONOFF_VFD",
          },
          FREQ: {
            NAME: "CHWP1#FREQ",
          },
          FREQ_SP: {
            NAME: "CHWP1#FREQ_SP",
          },
          FAULT_VFD: {
            NAME: "CHWP1#FAULT_VFD",
          },
          P_VFD: {
            NAME: "CHWP1#P_VFD",
          },
          FLOW_RATED: {
            NAME: "CHWP1#FLOW_RATED",
          },
          P_RATED: {
            NAME: "CHWP1#P_RATED",
          },
          COP_RATED: {
            NAME: "CHWP1#COP_RATED",
          },
          ID: "dvuy_JIQf2YuXBtzOFkDLY",
          NO: 1,
          NAME: "冷冻水泵#1",
          TYPE: "D0A1B",
          STATION_ID: "2OE6LBhoeLCw3X4Ki5mEhY",
          STATION_PREFIX_ORG: "HVC1#",
          DEVICE_PREFIX: "CHWP1#",
          SUITE_IDS: [
            "ljGfRmBXdRUwXdsC7jg8A4",
            "wI0YvzukuL3V12o1yiyLLV",
            "XGQuRqZBt69EtGurDNoVV7",
            "mdyi12W8izM2MILT2FRZ3Q",
          ],
          VALVES: [],
          OTHERS: {},
          CAP_NUM: 0,
        },
        m1RJZR4AJCnQkycGfkkyV6: {
          ELEC: {
            NAME: "CHWP2#ELEC",
          },
          ONOFF_SP: {
            NAME: "CHWP2#ONOFF_SP",
          },
          ONOFF: {
            NAME: "CHWP2#ONOFF",
          },
          ON: {
            NAME: "CHWP2#ON",
          },
          OFF: {
            NAME: "CHWP2#OFF",
          },
          ON_SP: {
            NAME: "CHWP2#ON_SP",
          },
          OFF_SP: {
            NAME: "CHWP2#OFF_SP",
          },
          AM: {
            NAME: "CHWP2#AM",
          },
          EB: {
            NAME: "CHWP2#EB",
          },
          FAULT: {
            NAME: "CHWP2#FAULT",
          },
          FAULT_CODE: {
            NAME: "CHWP2#FAULT_CODE",
          },
          FAULT_RESET: {
            NAME: "CHWP2#FAULT_RESET",
          },
          RANK: {
            NAME: "CHWP2#RANK",
          },
          PR_INLET: {
            NAME: "CHWP2#PR_INLET",
          },
          PR_OUTLET: {
            NAME: "CHWP2#PR_OUTLET",
          },
          HRS_TOTAL: {
            NAME: "CHWP2#HRS_TOTAL",
          },
          HRS: {
            NAME: "CHWP2#HRS",
          },
          P: {
            NAME: "CHWP2#P",
          },
          W: {
            NAME: "CHWP2#W",
          },
          COP: {
            NAME: "CHWP2#COP",
          },
          ONOFF_VFD_SP: {
            NAME: "CHWP2#ONOFF_VFD_SP",
          },
          ONOFF_VFD: {
            NAME: "CHWP2#ONOFF_VFD",
          },
          FREQ: {
            NAME: "CHWP2#FREQ",
          },
          FREQ_SP: {
            NAME: "CHWP2#FREQ_SP",
          },
          FAULT_VFD: {
            NAME: "CHWP2#FAULT_VFD",
          },
          P_VFD: {
            NAME: "CHWP2#P_VFD",
          },
          FLOW_RATED: {
            NAME: "CHWP2#FLOW_RATED",
          },
          P_RATED: {
            NAME: "CHWP2#P_RATED",
          },
          COP_RATED: {
            NAME: "CHWP2#COP_RATED",
          },
          ID: "m1RJZR4AJCnQkycGfkkyV6",
          NO: 2,
          NAME: "冷冻水泵#2",
          TYPE: "D0A1B",
          STATION_ID: "2OE6LBhoeLCw3X4Ki5mEhY",
          STATION_PREFIX_ORG: "HVC1#",
          DEVICE_PREFIX: "CHWP2#",
          SUITE_IDS: [
            "ljGfRmBXdRUwXdsC7jg8A4",
            "wI0YvzukuL3V12o1yiyLLV",
            "XGQuRqZBt69EtGurDNoVV7",
            "mdyi12W8izM2MILT2FRZ3Q",
          ],
          VALVES: [],
          OTHERS: {},
          CAP_NUM: 0,
        },
        fJdoIuCK4NFTETY8K_MWQG: {
          ELEC: {
            NAME: "CHWP3#ELEC",
          },
          ONOFF_SP: {
            NAME: "CHWP3#ONOFF_SP",
          },
          ONOFF: {
            NAME: "CHWP3#ONOFF",
          },
          ON: {
            NAME: "CHWP3#ON",
          },
          OFF: {
            NAME: "CHWP3#OFF",
          },
          ON_SP: {
            NAME: "CHWP3#ON_SP",
          },
          OFF_SP: {
            NAME: "CHWP3#OFF_SP",
          },
          AM: {
            NAME: "CHWP3#AM",
          },
          EB: {
            NAME: "CHWP3#EB",
          },
          FAULT: {
            NAME: "CHWP3#FAULT",
          },
          FAULT_CODE: {
            NAME: "CHWP3#FAULT_CODE",
          },
          FAULT_RESET: {
            NAME: "CHWP3#FAULT_RESET",
          },
          RANK: {
            NAME: "CHWP3#RANK",
          },
          PR_INLET: {
            NAME: "CHWP3#PR_INLET",
          },
          PR_OUTLET: {
            NAME: "CHWP3#PR_OUTLET",
          },
          HRS_TOTAL: {
            NAME: "CHWP3#HRS_TOTAL",
          },
          HRS: {
            NAME: "CHWP3#HRS",
          },
          P: {
            NAME: "CHWP3#P",
          },
          W: {
            NAME: "CHWP3#W",
          },
          COP: {
            NAME: "CHWP3#COP",
          },
          ONOFF_VFD_SP: {
            NAME: "CHWP3#ONOFF_VFD_SP",
          },
          ONOFF_VFD: {
            NAME: "CHWP3#ONOFF_VFD",
          },
          FREQ: {
            NAME: "CHWP3#FREQ",
          },
          FREQ_SP: {
            NAME: "CHWP3#FREQ_SP",
          },
          FAULT_VFD: {
            NAME: "CHWP3#FAULT_VFD",
          },
          P_VFD: {
            NAME: "CHWP3#P_VFD",
          },
          FLOW_RATED: {
            NAME: "CHWP3#FLOW_RATED",
          },
          P_RATED: {
            NAME: "CHWP3#P_RATED",
          },
          COP_RATED: {
            NAME: "CHWP3#COP_RATED",
          },
          ID: "fJdoIuCK4NFTETY8K_MWQG",
          NO: 3,
          NAME: "冷冻水泵#3",
          TYPE: "D0A1B",
          STATION_ID: "2OE6LBhoeLCw3X4Ki5mEhY",
          STATION_PREFIX_ORG: "HVC1#",
          DEVICE_PREFIX: "CHWP3#",
          SUITE_IDS: [
            "ljGfRmBXdRUwXdsC7jg8A4",
            "wI0YvzukuL3V12o1yiyLLV",
            "XGQuRqZBt69EtGurDNoVV7",
            "mdyi12W8izM2MILT2FRZ3Q",
          ],
          VALVES: [],
          OTHERS: {},
          CAP_NUM: 0,
        },
        TW9AcYLFTrOecDLa_KrLnv: {
          ELEC: {
            NAME: "CHWP4#ELEC",
          },
          ONOFF_SP: {
            NAME: "CHWP4#ONOFF_SP",
          },
          ONOFF: {
            NAME: "CHWP4#ONOFF",
          },
          ON: {
            NAME: "CHWP4#ON",
          },
          OFF: {
            NAME: "CHWP4#OFF",
          },
          ON_SP: {
            NAME: "CHWP4#ON_SP",
          },
          OFF_SP: {
            NAME: "CHWP4#OFF_SP",
          },
          AM: {
            NAME: "CHWP4#AM",
          },
          EB: {
            NAME: "CHWP4#EB",
          },
          FAULT: {
            NAME: "CHWP4#FAULT",
          },
          FAULT_CODE: {
            NAME: "CHWP4#FAULT_CODE",
          },
          FAULT_RESET: {
            NAME: "CHWP4#FAULT_RESET",
          },
          RANK: {
            NAME: "CHWP4#RANK",
          },
          PR_INLET: {
            NAME: "CHWP4#PR_INLET",
          },
          PR_OUTLET: {
            NAME: "CHWP4#PR_OUTLET",
          },
          HRS_TOTAL: {
            NAME: "CHWP4#HRS_TOTAL",
          },
          HRS: {
            NAME: "CHWP4#HRS",
          },
          P: {
            NAME: "CHWP4#P",
          },
          W: {
            NAME: "CHWP4#W",
          },
          COP: {
            NAME: "CHWP4#COP",
          },
          ONOFF_VFD_SP: {
            NAME: "CHWP4#ONOFF_VFD_SP",
          },
          ONOFF_VFD: {
            NAME: "CHWP4#ONOFF_VFD",
          },
          FREQ: {
            NAME: "CHWP4#FREQ",
          },
          FREQ_SP: {
            NAME: "CHWP4#FREQ_SP",
          },
          FAULT_VFD: {
            NAME: "CHWP4#FAULT_VFD",
          },
          P_VFD: {
            NAME: "CHWP4#P_VFD",
          },
          FLOW_RATED: {
            NAME: "CHWP4#FLOW_RATED",
          },
          P_RATED: {
            NAME: "CHWP4#P_RATED",
          },
          COP_RATED: {
            NAME: "CHWP4#COP_RATED",
          },
          ID: "TW9AcYLFTrOecDLa_KrLnv",
          NO: 4,
          NAME: "冷冻水泵#4",
          TYPE: "D0A1B",
          STATION_ID: "2OE6LBhoeLCw3X4Ki5mEhY",
          STATION_PREFIX_ORG: "HVC1#",
          DEVICE_PREFIX: "CHWP4#",
          SUITE_IDS: [
            "ljGfRmBXdRUwXdsC7jg8A4",
            "wI0YvzukuL3V12o1yiyLLV",
            "XGQuRqZBt69EtGurDNoVV7",
            "mdyi12W8izM2MILT2FRZ3Q",
          ],
          VALVES: [],
          OTHERS: {},
          CAP_NUM: 0,
        },
      },
      CWPS: {
        c8uzkkrC4l9Ui0IWyEVG45: {
          ELEC: {
            NAME: "CWP1#ELEC",
          },
          ONOFF_SP: {
            NAME: "CWP1#ONOFF_SP",
          },
          ONOFF: {
            NAME: "CWP1#ONOFF",
          },
          ON: {
            NAME: "CWP1#ON",
          },
          OFF: {
            NAME: "CWP1#OFF",
          },
          ON_SP: {
            NAME: "CWP1#ON_SP",
          },
          OFF_SP: {
            NAME: "CWP1#OFF_SP",
          },
          AM: {
            NAME: "CWP1#AM",
          },
          EB: {
            NAME: "CWP1#EB",
          },
          FAULT: {
            NAME: "CWP1#FAULT",
          },
          FAULT_CODE: {
            NAME: "CWP1#FAULT_CODE",
          },
          FAULT_RESET: {
            NAME: "CWP1#FAULT_RESET",
          },
          RANK: {
            NAME: "CWP1#RANK",
          },
          PR_INLET: {
            NAME: "CWP1#PR_INLET",
          },
          PR_OUTLET: {
            NAME: "CWP1#PR_OUTLET",
          },
          HRS_TOTAL: {
            NAME: "CWP1#HRS_TOTAL",
          },
          HRS: {
            NAME: "CWP1#HRS",
          },
          P: {
            NAME: "CWP1#P",
          },
          W: {
            NAME: "CWP1#W",
          },
          COP: {
            NAME: "CWP1#COP",
          },
          ONOFF_VFD_SP: {
            NAME: "CWP1#ONOFF_VFD_SP",
          },
          ONOFF_VFD: {
            NAME: "CWP1#ONOFF_VFD",
          },
          FREQ: {
            NAME: "CWP1#FREQ",
          },
          FREQ_SP: {
            NAME: "CWP1#FREQ_SP",
          },
          FAULT_VFD: {
            NAME: "CWP1#FAULT_VFD",
          },
          P_VFD: {
            NAME: "CWP1#P_VFD",
          },
          FLOW_RATED: {
            NAME: "CWP1#FLOW_RATED",
          },
          P_RATED: {
            NAME: "CWP1#P_RATED",
          },
          COP_RATED: {
            NAME: "CWP1#COP_RATED",
          },
          ID: "c8uzkkrC4l9Ui0IWyEVG45",
          NO: 1,
          NAME: "冷却水泵#1",
          TYPE: "D0A1C",
          STATION_ID: "2OE6LBhoeLCw3X4Ki5mEhY",
          STATION_PREFIX_ORG: "HVC1#",
          DEVICE_PREFIX: "CWP1#",
          SUITE_IDS: [
            "ljGfRmBXdRUwXdsC7jg8A4",
            "wI0YvzukuL3V12o1yiyLLV",
            "XGQuRqZBt69EtGurDNoVV7",
            "mdyi12W8izM2MILT2FRZ3Q",
          ],
          VALVES: [],
          OTHERS: {},
          CAP_NUM: 0,
        },
        "3cikHzRIya50UMs8LsC3zg": {
          ELEC: {
            NAME: "CWP2#ELEC",
          },
          ONOFF_SP: {
            NAME: "CWP2#ONOFF_SP",
          },
          ONOFF: {
            NAME: "CWP2#ONOFF",
          },
          ON: {
            NAME: "CWP2#ON",
          },
          OFF: {
            NAME: "CWP2#OFF",
          },
          ON_SP: {
            NAME: "CWP2#ON_SP",
          },
          OFF_SP: {
            NAME: "CWP2#OFF_SP",
          },
          AM: {
            NAME: "CWP2#AM",
          },
          EB: {
            NAME: "CWP2#EB",
          },
          FAULT: {
            NAME: "CWP2#FAULT",
          },
          FAULT_CODE: {
            NAME: "CWP2#FAULT_CODE",
          },
          FAULT_RESET: {
            NAME: "CWP2#FAULT_RESET",
          },
          RANK: {
            NAME: "CWP2#RANK",
          },
          PR_INLET: {
            NAME: "CWP2#PR_INLET",
          },
          PR_OUTLET: {
            NAME: "CWP2#PR_OUTLET",
          },
          HRS_TOTAL: {
            NAME: "CWP2#HRS_TOTAL",
          },
          HRS: {
            NAME: "CWP2#HRS",
          },
          P: {
            NAME: "CWP2#P",
          },
          W: {
            NAME: "CWP2#W",
          },
          COP: {
            NAME: "CWP2#COP",
          },
          ONOFF_VFD_SP: {
            NAME: "CWP2#ONOFF_VFD_SP",
          },
          ONOFF_VFD: {
            NAME: "CWP2#ONOFF_VFD",
          },
          FREQ: {
            NAME: "CWP2#FREQ",
          },
          FREQ_SP: {
            NAME: "CWP2#FREQ_SP",
          },
          FAULT_VFD: {
            NAME: "CWP2#FAULT_VFD",
          },
          P_VFD: {
            NAME: "CWP2#P_VFD",
          },
          FLOW_RATED: {
            NAME: "CWP2#FLOW_RATED",
          },
          P_RATED: {
            NAME: "CWP2#P_RATED",
          },
          COP_RATED: {
            NAME: "CWP2#COP_RATED",
          },
          ID: "3cikHzRIya50UMs8LsC3zg",
          NO: 2,
          NAME: "冷却水泵#2",
          TYPE: "D0A1C",
          STATION_ID: "2OE6LBhoeLCw3X4Ki5mEhY",
          STATION_PREFIX_ORG: "HVC1#",
          DEVICE_PREFIX: "CWP2#",
          SUITE_IDS: [
            "ljGfRmBXdRUwXdsC7jg8A4",
            "wI0YvzukuL3V12o1yiyLLV",
            "XGQuRqZBt69EtGurDNoVV7",
            "mdyi12W8izM2MILT2FRZ3Q",
          ],
          VALVES: [],
          OTHERS: {},
          CAP_NUM: 0,
        },
        QDfEG9ORVEUlXT3Q0D9z8L: {
          ELEC: {
            NAME: "CWP3#ELEC",
          },
          ONOFF_SP: {
            NAME: "CWP3#ONOFF_SP",
          },
          ONOFF: {
            NAME: "CWP3#ONOFF",
          },
          ON: {
            NAME: "CWP3#ON",
          },
          OFF: {
            NAME: "CWP3#OFF",
          },
          ON_SP: {
            NAME: "CWP3#ON_SP",
          },
          OFF_SP: {
            NAME: "CWP3#OFF_SP",
          },
          AM: {
            NAME: "CWP3#AM",
          },
          EB: {
            NAME: "CWP3#EB",
          },
          FAULT: {
            NAME: "CWP3#FAULT",
          },
          FAULT_CODE: {
            NAME: "CWP3#FAULT_CODE",
          },
          FAULT_RESET: {
            NAME: "CWP3#FAULT_RESET",
          },
          RANK: {
            NAME: "CWP3#RANK",
          },
          PR_INLET: {
            NAME: "CWP3#PR_INLET",
          },
          PR_OUTLET: {
            NAME: "CWP3#PR_OUTLET",
          },
          HRS_TOTAL: {
            NAME: "CWP3#HRS_TOTAL",
          },
          HRS: {
            NAME: "CWP3#HRS",
          },
          P: {
            NAME: "CWP3#P",
          },
          W: {
            NAME: "CWP3#W",
          },
          COP: {
            NAME: "CWP3#COP",
          },
          ONOFF_VFD_SP: {
            NAME: "CWP3#ONOFF_VFD_SP",
          },
          ONOFF_VFD: {
            NAME: "CWP3#ONOFF_VFD",
          },
          FREQ: {
            NAME: "CWP3#FREQ",
          },
          FREQ_SP: {
            NAME: "CWP3#FREQ_SP",
          },
          FAULT_VFD: {
            NAME: "CWP3#FAULT_VFD",
          },
          P_VFD: {
            NAME: "CWP3#P_VFD",
          },
          FLOW_RATED: {
            NAME: "CWP3#FLOW_RATED",
          },
          P_RATED: {
            NAME: "CWP3#P_RATED",
          },
          COP_RATED: {
            NAME: "CWP3#COP_RATED",
          },
          ID: "QDfEG9ORVEUlXT3Q0D9z8L",
          NO: 3,
          NAME: "冷却水泵#3",
          TYPE: "D0A1C",
          STATION_ID: "2OE6LBhoeLCw3X4Ki5mEhY",
          STATION_PREFIX_ORG: "HVC1#",
          DEVICE_PREFIX: "CWP3#",
          SUITE_IDS: [
            "ljGfRmBXdRUwXdsC7jg8A4",
            "wI0YvzukuL3V12o1yiyLLV",
            "XGQuRqZBt69EtGurDNoVV7",
            "mdyi12W8izM2MILT2FRZ3Q",
          ],
          VALVES: [],
          OTHERS: {},
          CAP_NUM: 0,
        },
        E9F8NArlUYGJFZwZbxW3Z7: {
          ELEC: {
            NAME: "CWP4#ELEC",
          },
          ONOFF_SP: {
            NAME: "CWP4#ONOFF_SP",
          },
          ONOFF: {
            NAME: "CWP4#ONOFF",
          },
          ON: {
            NAME: "CWP4#ON",
          },
          OFF: {
            NAME: "CWP4#OFF",
          },
          ON_SP: {
            NAME: "CWP4#ON_SP",
          },
          OFF_SP: {
            NAME: "CWP4#OFF_SP",
          },
          AM: {
            NAME: "CWP4#AM",
          },
          EB: {
            NAME: "CWP4#EB",
          },
          FAULT: {
            NAME: "CWP4#FAULT",
          },
          FAULT_CODE: {
            NAME: "CWP4#FAULT_CODE",
          },
          FAULT_RESET: {
            NAME: "CWP4#FAULT_RESET",
          },
          RANK: {
            NAME: "CWP4#RANK",
          },
          PR_INLET: {
            NAME: "CWP4#PR_INLET",
          },
          PR_OUTLET: {
            NAME: "CWP4#PR_OUTLET",
          },
          HRS_TOTAL: {
            NAME: "CWP4#HRS_TOTAL",
          },
          HRS: {
            NAME: "CWP4#HRS",
          },
          P: {
            NAME: "CWP4#P",
          },
          W: {
            NAME: "CWP4#W",
          },
          COP: {
            NAME: "CWP4#COP",
          },
          ONOFF_VFD_SP: {
            NAME: "CWP4#ONOFF_VFD_SP",
          },
          ONOFF_VFD: {
            NAME: "CWP4#ONOFF_VFD",
          },
          FREQ: {
            NAME: "CWP4#FREQ",
          },
          FREQ_SP: {
            NAME: "CWP4#FREQ_SP",
          },
          FAULT_VFD: {
            NAME: "CWP4#FAULT_VFD",
          },
          P_VFD: {
            NAME: "CWP4#P_VFD",
          },
          FLOW_RATED: {
            NAME: "CWP4#FLOW_RATED",
          },
          P_RATED: {
            NAME: "CWP4#P_RATED",
          },
          COP_RATED: {
            NAME: "CWP4#COP_RATED",
          },
          ID: "E9F8NArlUYGJFZwZbxW3Z7",
          NO: 4,
          NAME: "冷却水泵#4",
          TYPE: "D0A1C",
          STATION_ID: "2OE6LBhoeLCw3X4Ki5mEhY",
          STATION_PREFIX_ORG: "HVC1#",
          DEVICE_PREFIX: "CWP4#",
          SUITE_IDS: [
            "ljGfRmBXdRUwXdsC7jg8A4",
            "wI0YvzukuL3V12o1yiyLLV",
            "XGQuRqZBt69EtGurDNoVV7",
            "mdyi12W8izM2MILT2FRZ3Q",
          ],
          VALVES: [],
          OTHERS: {},
          CAP_NUM: 0,
        },
      },
      CTS: {
        ee4ofIjLr4WRjIQFPVro58: {
          ONOFF_SP: {
            NAME: "CT1#ONOFF_SP",
          },
          ONOFF: {
            NAME: "CT1#ONOFF",
          },
          ON: {
            NAME: "CT1#ON",
          },
          OFF: {
            NAME: "CT1#OFF",
          },
          ON_SP: {
            NAME: "CT1#ON_SP",
          },
          OFF_SP: {
            NAME: "CT1#OFF_SP",
          },
          AM: {
            NAME: "CT1#AM",
          },
          EB: {
            NAME: "CT1#EB",
          },
          FAULT: {
            NAME: "CT1#FAULT",
          },
          FAULT_CODE: {
            NAME: "CT1#FAULT_CODE",
          },
          FAULT_RESET: {
            NAME: "CT1#FAULT_RESET",
          },
          RANK: {
            NAME: "CT1#RANK",
          },
          HRS_TOTAL: {
            NAME: "CT1#HRS_TOTAL",
          },
          HRS: {
            NAME: "CT1#HRS",
          },
          P: {
            NAME: "CT1#P",
          },
          W: {
            NAME: "CT1#W",
          },
          ELEC: {
            NAME: "CT1#ELEC",
          },
          COP: {
            NAME: "CT1#COP",
          },
          ONOFF_VFD_SP: {
            NAME: "CT1#ONOFF_VFD_SP",
          },
          ONOFF_VFD: {
            NAME: "CT1#ONOFF_VFD",
          },
          FREQ: {
            NAME: "CT1#FREQ",
          },
          FREQ_SP: {
            NAME: "CT1#FREQ_SP",
          },
          FAULT_VFD: {
            NAME: "CT1#FAULT_VFD",
          },
          P_VFD: {
            NAME: "CT1#P_VFD",
          },
          FLOW_RATED: {
            NAME: "CT1#FLOW_RATED",
          },
          P_RATED: {
            NAME: "CT1#P_RATED",
          },
          COP_RATED: {
            NAME: "CT1#COP_RATED",
          },
          ID: "ee4ofIjLr4WRjIQFPVro58",
          NO: 1,
          NAME: "冷却塔#1",
          TYPE: "D0A1D",
          STATION_ID: "2OE6LBhoeLCw3X4Ki5mEhY",
          STATION_PREFIX_ORG: "HVC1#",
          DEVICE_PREFIX: "CT1#",
          SUITE_IDS: [
            "ljGfRmBXdRUwXdsC7jg8A4",
            "wI0YvzukuL3V12o1yiyLLV",
            "XGQuRqZBt69EtGurDNoVV7",
            "mdyi12W8izM2MILT2FRZ3Q",
          ],
          VALVES: [
            {
              ONOFF_SP: {
                NAME: "V9#ONOFF_SP",
              },
              ONOFF: {
                NAME: "V9#ONOFF",
              },
              OFF: {
                NAME: "V9#OFF",
              },
              ON: {
                NAME: "V9#ON",
              },
              OFF_SP: {
                NAME: "V9#OFF_SP",
              },
              ON_SP: {
                NAME: "V9#ON_SP",
              },
              EB: {
                NAME: "V9#EB",
              },
              AM: {
                NAME: "V9#AM",
              },
              FAULT: {
                NAME: "V9#FAULT",
              },
              NAME: "阀门#9",
              TYPE: "D0A30",
              ID: "bi2S1oBhLeKE6TIl37vdDB",
              NO: 9,
              VALVES: [],
            },
            {
              ONOFF_SP: {
                NAME: "V10#ONOFF_SP",
              },
              ONOFF: {
                NAME: "V10#ONOFF",
              },
              OFF: {
                NAME: "V10#OFF",
              },
              ON: {
                NAME: "V10#ON",
              },
              OFF_SP: {
                NAME: "V10#OFF_SP",
              },
              ON_SP: {
                NAME: "V10#ON_SP",
              },
              EB: {
                NAME: "V10#EB",
              },
              AM: {
                NAME: "V10#AM",
              },
              FAULT: {
                NAME: "V10#FAULT",
              },
              NAME: "阀门#10",
              TYPE: "D0A30",
              ID: "YtPHM3z8XmC3x37VMNfrG0",
              NO: 10,
              VALVES: [],
            },
          ],
          OTHERS: {},
          CAP_NUM: 0,
        },
        cSvhfgynIwK7_iDzbHIZ7I: {
          ONOFF_SP: {
            NAME: "CT2#ONOFF_SP",
          },
          ONOFF: {
            NAME: "CT2#ONOFF",
          },
          ON: {
            NAME: "CT2#ON",
          },
          OFF: {
            NAME: "CT2#OFF",
          },
          ON_SP: {
            NAME: "CT2#ON_SP",
          },
          OFF_SP: {
            NAME: "CT2#OFF_SP",
          },
          AM: {
            NAME: "CT2#AM",
          },
          EB: {
            NAME: "CT2#EB",
          },
          FAULT: {
            NAME: "CT2#FAULT",
          },
          FAULT_CODE: {
            NAME: "CT2#FAULT_CODE",
          },
          FAULT_RESET: {
            NAME: "CT2#FAULT_RESET",
          },
          RANK: {
            NAME: "CT2#RANK",
          },
          HRS_TOTAL: {
            NAME: "CT2#HRS_TOTAL",
          },
          HRS: {
            NAME: "CT2#HRS",
          },
          P: {
            NAME: "CT2#P",
          },
          W: {
            NAME: "CT2#W",
          },
          ELEC: {
            NAME: "CT2#ELEC",
          },
          COP: {
            NAME: "CT2#COP",
          },
          ONOFF_VFD_SP: {
            NAME: "CT2#ONOFF_VFD_SP",
          },
          ONOFF_VFD: {
            NAME: "CT2#ONOFF_VFD",
          },
          FREQ: {
            NAME: "CT2#FREQ",
          },
          FREQ_SP: {
            NAME: "CT2#FREQ_SP",
          },
          FAULT_VFD: {
            NAME: "CT2#FAULT_VFD",
          },
          P_VFD: {
            NAME: "CT2#P_VFD",
          },
          FLOW_RATED: {
            NAME: "CT2#FLOW_RATED",
          },
          P_RATED: {
            NAME: "CT2#P_RATED",
          },
          COP_RATED: {
            NAME: "CT2#COP_RATED",
          },
          ID: "cSvhfgynIwK7_iDzbHIZ7I",
          NO: 2,
          NAME: "冷却塔#2",
          TYPE: "D0A1D",
          STATION_ID: "2OE6LBhoeLCw3X4Ki5mEhY",
          STATION_PREFIX_ORG: "HVC1#",
          DEVICE_PREFIX: "CT2#",
          SUITE_IDS: [
            "ljGfRmBXdRUwXdsC7jg8A4",
            "wI0YvzukuL3V12o1yiyLLV",
            "XGQuRqZBt69EtGurDNoVV7",
            "mdyi12W8izM2MILT2FRZ3Q",
          ],
          VALVES: [
            {
              ONOFF_SP: {
                NAME: "V11#ONOFF_SP",
              },
              ONOFF: {
                NAME: "V11#ONOFF",
              },
              OFF: {
                NAME: "V11#OFF",
              },
              ON: {
                NAME: "V11#ON",
              },
              OFF_SP: {
                NAME: "V11#OFF_SP",
              },
              ON_SP: {
                NAME: "V11#ON_SP",
              },
              EB: {
                NAME: "V11#EB",
              },
              AM: {
                NAME: "V11#AM",
              },
              FAULT: {
                NAME: "V11#FAULT",
              },
              NAME: "阀门#11",
              TYPE: "D0A30",
              ID: "2VlqwFEAYJnBnecsQdflri",
              NO: 11,
              VALVES: [],
            },
            {
              ONOFF_SP: {
                NAME: "V12#ONOFF_SP",
              },
              ONOFF: {
                NAME: "V12#ONOFF",
              },
              OFF: {
                NAME: "V12#OFF",
              },
              ON: {
                NAME: "V12#ON",
              },
              OFF_SP: {
                NAME: "V12#OFF_SP",
              },
              ON_SP: {
                NAME: "V12#ON_SP",
              },
              EB: {
                NAME: "V12#EB",
              },
              AM: {
                NAME: "V12#AM",
              },
              FAULT: {
                NAME: "V12#FAULT",
              },
              NAME: "阀门#12",
              TYPE: "D0A30",
              ID: "DoXn8Av4ib3OVZ5mJX7fOJ",
              NO: 12,
              VALVES: [],
            },
          ],
          OTHERS: {},
          CAP_NUM: 0,
        },
        "5Bv3pNiaQ0Oe_yrJJuyP2I": {
          ONOFF_SP: {
            NAME: "CT3#ONOFF_SP",
          },
          ONOFF: {
            NAME: "CT3#ONOFF",
          },
          ON: {
            NAME: "CT3#ON",
          },
          OFF: {
            NAME: "CT3#OFF",
          },
          ON_SP: {
            NAME: "CT3#ON_SP",
          },
          OFF_SP: {
            NAME: "CT3#OFF_SP",
          },
          AM: {
            NAME: "CT3#AM",
          },
          EB: {
            NAME: "CT3#EB",
          },
          FAULT: {
            NAME: "CT3#FAULT",
          },
          FAULT_CODE: {
            NAME: "CT3#FAULT_CODE",
          },
          FAULT_RESET: {
            NAME: "CT3#FAULT_RESET",
          },
          RANK: {
            NAME: "CT3#RANK",
          },
          HRS_TOTAL: {
            NAME: "CT3#HRS_TOTAL",
          },
          HRS: {
            NAME: "CT3#HRS",
          },
          P: {
            NAME: "CT3#P",
          },
          W: {
            NAME: "CT3#W",
          },
          ELEC: {
            NAME: "CT3#ELEC",
          },
          COP: {
            NAME: "CT3#COP",
          },
          ONOFF_VFD_SP: {
            NAME: "CT3#ONOFF_VFD_SP",
          },
          ONOFF_VFD: {
            NAME: "CT3#ONOFF_VFD",
          },
          FREQ: {
            NAME: "CT3#FREQ",
          },
          FREQ_SP: {
            NAME: "CT3#FREQ_SP",
          },
          FAULT_VFD: {
            NAME: "CT3#FAULT_VFD",
          },
          P_VFD: {
            NAME: "CT3#P_VFD",
          },
          FLOW_RATED: {
            NAME: "CT3#FLOW_RATED",
          },
          P_RATED: {
            NAME: "CT3#P_RATED",
          },
          COP_RATED: {
            NAME: "CT3#COP_RATED",
          },
          ID: "5Bv3pNiaQ0Oe_yrJJuyP2I",
          NO: 3,
          NAME: "冷却塔#3",
          TYPE: "D0A1D",
          STATION_ID: "2OE6LBhoeLCw3X4Ki5mEhY",
          STATION_PREFIX_ORG: "HVC1#",
          DEVICE_PREFIX: "CT3#",
          SUITE_IDS: [
            "ljGfRmBXdRUwXdsC7jg8A4",
            "wI0YvzukuL3V12o1yiyLLV",
            "XGQuRqZBt69EtGurDNoVV7",
            "mdyi12W8izM2MILT2FRZ3Q",
          ],
          VALVES: [
            {
              ONOFF_SP: {
                NAME: "V13#ONOFF_SP",
              },
              ONOFF: {
                NAME: "V13#ONOFF",
              },
              OFF: {
                NAME: "V13#OFF",
              },
              ON: {
                NAME: "V13#ON",
              },
              OFF_SP: {
                NAME: "V13#OFF_SP",
              },
              ON_SP: {
                NAME: "V13#ON_SP",
              },
              EB: {
                NAME: "V13#EB",
              },
              AM: {
                NAME: "V13#AM",
              },
              FAULT: {
                NAME: "V13#FAULT",
              },
              NAME: "阀门#13",
              TYPE: "D0A30",
              ID: "BP8J7wISsJ4nmRCxV2pufp",
              NO: 13,
              VALVES: [],
            },
            {
              ONOFF_SP: {
                NAME: "V14#ONOFF_SP",
              },
              ONOFF: {
                NAME: "V14#ONOFF",
              },
              OFF: {
                NAME: "V14#OFF",
              },
              ON: {
                NAME: "V14#ON",
              },
              OFF_SP: {
                NAME: "V14#OFF_SP",
              },
              ON_SP: {
                NAME: "V14#ON_SP",
              },
              EB: {
                NAME: "V14#EB",
              },
              AM: {
                NAME: "V14#AM",
              },
              FAULT: {
                NAME: "V14#FAULT",
              },
              NAME: "阀门#14",
              TYPE: "D0A30",
              ID: "gHmtkUbK799frcw29TFRnl",
              NO: 14,
              VALVES: [],
            },
          ],
          OTHERS: {},
          CAP_NUM: 0,
        },
        RE8J3ykpC6RUtGSfiOigU3: {
          ONOFF_SP: {
            NAME: "CT4#ONOFF_SP",
          },
          ONOFF: {
            NAME: "CT4#ONOFF",
          },
          ON: {
            NAME: "CT4#ON",
          },
          OFF: {
            NAME: "CT4#OFF",
          },
          ON_SP: {
            NAME: "CT4#ON_SP",
          },
          OFF_SP: {
            NAME: "CT4#OFF_SP",
          },
          AM: {
            NAME: "CT4#AM",
          },
          EB: {
            NAME: "CT4#EB",
          },
          FAULT: {
            NAME: "CT4#FAULT",
          },
          FAULT_CODE: {
            NAME: "CT4#FAULT_CODE",
          },
          FAULT_RESET: {
            NAME: "CT4#FAULT_RESET",
          },
          RANK: {
            NAME: "CT4#RANK",
          },
          HRS_TOTAL: {
            NAME: "CT4#HRS_TOTAL",
          },
          HRS: {
            NAME: "CT4#HRS",
          },
          P: {
            NAME: "CT4#P",
          },
          W: {
            NAME: "CT4#W",
          },
          ELEC: {
            NAME: "CT4#ELEC",
          },
          COP: {
            NAME: "CT4#COP",
          },
          ONOFF_VFD_SP: {
            NAME: "CT4#ONOFF_VFD_SP",
          },
          ONOFF_VFD: {
            NAME: "CT4#ONOFF_VFD",
          },
          FREQ: {
            NAME: "CT4#FREQ",
          },
          FREQ_SP: {
            NAME: "CT4#FREQ_SP",
          },
          FAULT_VFD: {
            NAME: "CT4#FAULT_VFD",
          },
          P_VFD: {
            NAME: "CT4#P_VFD",
          },
          FLOW_RATED: {
            NAME: "CT4#FLOW_RATED",
          },
          P_RATED: {
            NAME: "CT4#P_RATED",
          },
          COP_RATED: {
            NAME: "CT4#COP_RATED",
          },
          ID: "RE8J3ykpC6RUtGSfiOigU3",
          NO: 4,
          NAME: "冷却塔#4",
          TYPE: "D0A1D",
          STATION_ID: "2OE6LBhoeLCw3X4Ki5mEhY",
          STATION_PREFIX_ORG: "HVC1#",
          DEVICE_PREFIX: "CT4#",
          SUITE_IDS: [
            "ljGfRmBXdRUwXdsC7jg8A4",
            "wI0YvzukuL3V12o1yiyLLV",
            "XGQuRqZBt69EtGurDNoVV7",
            "mdyi12W8izM2MILT2FRZ3Q",
          ],
          VALVES: [
            {
              ONOFF_SP: {
                NAME: "V16#ONOFF_SP",
              },
              ONOFF: {
                NAME: "V16#ONOFF",
              },
              OFF: {
                NAME: "V16#OFF",
              },
              ON: {
                NAME: "V16#ON",
              },
              OFF_SP: {
                NAME: "V16#OFF_SP",
              },
              ON_SP: {
                NAME: "V16#ON_SP",
              },
              EB: {
                NAME: "V16#EB",
              },
              AM: {
                NAME: "V16#AM",
              },
              FAULT: {
                NAME: "V16#FAULT",
              },
              NAME: "阀门#16",
              TYPE: "D0A30",
              ID: "t8js1U79E6Bf2tH7qb46hA",
              NO: 16,
              VALVES: [],
            },
            {
              ONOFF_SP: {
                NAME: "V15#ONOFF_SP",
              },
              ONOFF: {
                NAME: "V15#ONOFF",
              },
              OFF: {
                NAME: "V15#OFF",
              },
              ON: {
                NAME: "V15#ON",
              },
              OFF_SP: {
                NAME: "V15#OFF_SP",
              },
              ON_SP: {
                NAME: "V15#ON_SP",
              },
              EB: {
                NAME: "V15#EB",
              },
              AM: {
                NAME: "V15#AM",
              },
              FAULT: {
                NAME: "V15#FAULT",
              },
              NAME: "阀门#15",
              TYPE: "D0A30",
              ID: "Ma11HQ6JfGVjfYgG4brjnK",
              NO: 15,
              VALVES: [],
            },
          ],
          OTHERS: {},
          CAP_NUM: 0,
        },
      },
      DVS: {
        swREBwEISj3djv1BMnUJXz: {
          ONOFF_SP: {
            NAME: "V1#ONOFF_SP",
          },
          ONOFF: {
            NAME: "V1#ONOFF",
          },
          ON: {
            NAME: "V1#ON",
          },
          OFF: {
            NAME: "V1#OFF",
          },
          ON_SP: {
            NAME: "V1#ON_SP",
          },
          OFF_SP: {
            NAME: "V1#OFF_SP",
          },
          POS_SP: {
            NAME: "V1#POS_SP",
          },
          POS: {
            NAME: "V1#POS",
          },
          AM: {
            NAME: "V1#AM",
          },
          EB: {
            NAME: "V1#EB",
          },
          FAULT: {
            NAME: "V1#FAULT",
          },
          RANK: {
            NAME: "V1#RANK",
          },
          ID: "swREBwEISj3djv1BMnUJXz",
          NO: 1,
          NAME: "阀门#1",
          TYPE: "D0A30",
          STATION_ID: "2OE6LBhoeLCw3X4Ki5mEhY",
          STATION_PREFIX_ORG: "HVC1#",
          DEVICE_PREFIX: "V1#",
          SUITE_IDS: [],
          VALVES: [],
          OTHERS: {},
          CAP_NUM: 0,
        },
        jXfEKV3ID_sOVUyr4gN8CS: {
          ONOFF_SP: {
            NAME: "V2#ONOFF_SP",
          },
          ONOFF: {
            NAME: "V2#ONOFF",
          },
          ON: {
            NAME: "V2#ON",
          },
          OFF: {
            NAME: "V2#OFF",
          },
          ON_SP: {
            NAME: "V2#ON_SP",
          },
          OFF_SP: {
            NAME: "V2#OFF_SP",
          },
          POS_SP: {
            NAME: "V2#POS_SP",
          },
          POS: {
            NAME: "V2#POS",
          },
          AM: {
            NAME: "V2#AM",
          },
          EB: {
            NAME: "V2#EB",
          },
          FAULT: {
            NAME: "V2#FAULT",
          },
          RANK: {
            NAME: "V2#RANK",
          },
          ID: "jXfEKV3ID_sOVUyr4gN8CS",
          NO: 2,
          NAME: "阀门#2",
          TYPE: "D0A30",
          STATION_ID: "2OE6LBhoeLCw3X4Ki5mEhY",
          STATION_PREFIX_ORG: "HVC1#",
          DEVICE_PREFIX: "V2#",
          SUITE_IDS: [],
          VALVES: [],
          OTHERS: {},
          CAP_NUM: 0,
        },
        d8zCeQ8Kne2UISnETWo9IA: {
          ONOFF_SP: {
            NAME: "V3#ONOFF_SP",
          },
          ONOFF: {
            NAME: "V3#ONOFF",
          },
          ON: {
            NAME: "V3#ON",
          },
          OFF: {
            NAME: "V3#OFF",
          },
          ON_SP: {
            NAME: "V3#ON_SP",
          },
          OFF_SP: {
            NAME: "V3#OFF_SP",
          },
          POS_SP: {
            NAME: "V3#POS_SP",
          },
          POS: {
            NAME: "V3#POS",
          },
          AM: {
            NAME: "V3#AM",
          },
          EB: {
            NAME: "V3#EB",
          },
          FAULT: {
            NAME: "V3#FAULT",
          },
          RANK: {
            NAME: "V3#RANK",
          },
          ID: "d8zCeQ8Kne2UISnETWo9IA",
          NO: 3,
          NAME: "阀门#3",
          TYPE: "D0A30",
          STATION_ID: "2OE6LBhoeLCw3X4Ki5mEhY",
          STATION_PREFIX_ORG: "HVC1#",
          DEVICE_PREFIX: "V3#",
          SUITE_IDS: [],
          VALVES: [],
          OTHERS: {},
          CAP_NUM: 0,
        },
        MO_FS_a3KRM2M1Pu6W3Wu1: {
          ONOFF_SP: {
            NAME: "V4#ONOFF_SP",
          },
          ONOFF: {
            NAME: "V4#ONOFF",
          },
          ON: {
            NAME: "V4#ON",
          },
          OFF: {
            NAME: "V4#OFF",
          },
          ON_SP: {
            NAME: "V4#ON_SP",
          },
          OFF_SP: {
            NAME: "V4#OFF_SP",
          },
          POS_SP: {
            NAME: "V4#POS_SP",
          },
          POS: {
            NAME: "V4#POS",
          },
          AM: {
            NAME: "V4#AM",
          },
          EB: {
            NAME: "V4#EB",
          },
          FAULT: {
            NAME: "V4#FAULT",
          },
          RANK: {
            NAME: "V4#RANK",
          },
          ID: "MO_FS_a3KRM2M1Pu6W3Wu1",
          NO: 4,
          NAME: "阀门#4",
          TYPE: "D0A30",
          STATION_ID: "2OE6LBhoeLCw3X4Ki5mEhY",
          STATION_PREFIX_ORG: "HVC1#",
          DEVICE_PREFIX: "V4#",
          SUITE_IDS: [],
          VALVES: [],
          OTHERS: {},
          CAP_NUM: 0,
        },
        dlgGILGmUWZO3zUpzuIvGw: {
          ONOFF_SP: {
            NAME: "V5#ONOFF_SP",
          },
          ONOFF: {
            NAME: "V5#ONOFF",
          },
          ON: {
            NAME: "V5#ON",
          },
          OFF: {
            NAME: "V5#OFF",
          },
          ON_SP: {
            NAME: "V5#ON_SP",
          },
          OFF_SP: {
            NAME: "V5#OFF_SP",
          },
          POS_SP: {
            NAME: "V5#POS_SP",
          },
          POS: {
            NAME: "V5#POS",
          },
          AM: {
            NAME: "V5#AM",
          },
          EB: {
            NAME: "V5#EB",
          },
          FAULT: {
            NAME: "V5#FAULT",
          },
          RANK: {
            NAME: "V5#RANK",
          },
          ID: "dlgGILGmUWZO3zUpzuIvGw",
          NO: 5,
          NAME: "阀门#5",
          TYPE: "D0A30",
          STATION_ID: "2OE6LBhoeLCw3X4Ki5mEhY",
          STATION_PREFIX_ORG: "HVC1#",
          DEVICE_PREFIX: "V5#",
          SUITE_IDS: [],
          VALVES: [],
          OTHERS: {},
          CAP_NUM: 0,
        },
        OnyTOZn1s72F3QJsREGQAq: {
          ONOFF_SP: {
            NAME: "V6#ONOFF_SP",
          },
          ONOFF: {
            NAME: "V6#ONOFF",
          },
          ON: {
            NAME: "V6#ON",
          },
          OFF: {
            NAME: "V6#OFF",
          },
          ON_SP: {
            NAME: "V6#ON_SP",
          },
          OFF_SP: {
            NAME: "V6#OFF_SP",
          },
          POS_SP: {
            NAME: "V6#POS_SP",
          },
          POS: {
            NAME: "V6#POS",
          },
          AM: {
            NAME: "V6#AM",
          },
          EB: {
            NAME: "V6#EB",
          },
          FAULT: {
            NAME: "V6#FAULT",
          },
          RANK: {
            NAME: "V6#RANK",
          },
          ID: "OnyTOZn1s72F3QJsREGQAq",
          NO: 6,
          NAME: "阀门#6",
          TYPE: "D0A30",
          STATION_ID: "2OE6LBhoeLCw3X4Ki5mEhY",
          STATION_PREFIX_ORG: "HVC1#",
          DEVICE_PREFIX: "V6#",
          SUITE_IDS: [],
          VALVES: [],
          OTHERS: {},
          CAP_NUM: 0,
        },
        "3oyHQYohtfD6CTI5UUDopY": {
          ONOFF_SP: {
            NAME: "V7#ONOFF_SP",
          },
          ONOFF: {
            NAME: "V7#ONOFF",
          },
          ON: {
            NAME: "V7#ON",
          },
          OFF: {
            NAME: "V7#OFF",
          },
          ON_SP: {
            NAME: "V7#ON_SP",
          },
          OFF_SP: {
            NAME: "V7#OFF_SP",
          },
          POS_SP: {
            NAME: "V7#POS_SP",
          },
          POS: {
            NAME: "V7#POS",
          },
          AM: {
            NAME: "V7#AM",
          },
          EB: {
            NAME: "V7#EB",
          },
          FAULT: {
            NAME: "V7#FAULT",
          },
          RANK: {
            NAME: "V7#RANK",
          },
          ID: "3oyHQYohtfD6CTI5UUDopY",
          NO: 7,
          NAME: "阀门#7",
          TYPE: "D0A30",
          STATION_ID: "2OE6LBhoeLCw3X4Ki5mEhY",
          STATION_PREFIX_ORG: "HVC1#",
          DEVICE_PREFIX: "V7#",
          SUITE_IDS: [],
          VALVES: [],
          OTHERS: {},
          CAP_NUM: 0,
        },
        CadsrgiGPVWFucf_Laf8J6: {
          ONOFF_SP: {
            NAME: "V8#ONOFF_SP",
          },
          ONOFF: {
            NAME: "V8#ONOFF",
          },
          ON: {
            NAME: "V8#ON",
          },
          OFF: {
            NAME: "V8#OFF",
          },
          ON_SP: {
            NAME: "V8#ON_SP",
          },
          OFF_SP: {
            NAME: "V8#OFF_SP",
          },
          POS_SP: {
            NAME: "V8#POS_SP",
          },
          POS: {
            NAME: "V8#POS",
          },
          AM: {
            NAME: "V8#AM",
          },
          EB: {
            NAME: "V8#EB",
          },
          FAULT: {
            NAME: "V8#FAULT",
          },
          RANK: {
            NAME: "V8#RANK",
          },
          ID: "CadsrgiGPVWFucf_Laf8J6",
          NO: 8,
          NAME: "阀门#8",
          TYPE: "D0A30",
          STATION_ID: "2OE6LBhoeLCw3X4Ki5mEhY",
          STATION_PREFIX_ORG: "HVC1#",
          DEVICE_PREFIX: "V8#",
          SUITE_IDS: [],
          VALVES: [],
          OTHERS: {},
          CAP_NUM: 0,
        },
        bi2S1oBhLeKE6TIl37vdDB: {
          ONOFF_SP: {
            NAME: "V9#ONOFF_SP",
          },
          ONOFF: {
            NAME: "V9#ONOFF",
          },
          ON: {
            NAME: "V9#ON",
          },
          OFF: {
            NAME: "V9#OFF",
          },
          ON_SP: {
            NAME: "V9#ON_SP",
          },
          OFF_SP: {
            NAME: "V9#OFF_SP",
          },
          POS_SP: {
            NAME: "V9#POS_SP",
          },
          POS: {
            NAME: "V9#POS",
          },
          AM: {
            NAME: "V9#AM",
          },
          EB: {
            NAME: "V9#EB",
          },
          FAULT: {
            NAME: "V9#FAULT",
          },
          RANK: {
            NAME: "V9#RANK",
          },
          ID: "bi2S1oBhLeKE6TIl37vdDB",
          NO: 9,
          NAME: "阀门#9",
          TYPE: "D0A30",
          STATION_ID: "2OE6LBhoeLCw3X4Ki5mEhY",
          STATION_PREFIX_ORG: "HVC1#",
          DEVICE_PREFIX: "V9#",
          SUITE_IDS: [],
          VALVES: [],
          OTHERS: {},
          CAP_NUM: 0,
        },
        YtPHM3z8XmC3x37VMNfrG0: {
          ONOFF_SP: {
            NAME: "V10#ONOFF_SP",
          },
          ONOFF: {
            NAME: "V10#ONOFF",
          },
          ON: {
            NAME: "V10#ON",
          },
          OFF: {
            NAME: "V10#OFF",
          },
          ON_SP: {
            NAME: "V10#ON_SP",
          },
          OFF_SP: {
            NAME: "V10#OFF_SP",
          },
          POS_SP: {
            NAME: "V10#POS_SP",
          },
          POS: {
            NAME: "V10#POS",
          },
          AM: {
            NAME: "V10#AM",
          },
          EB: {
            NAME: "V10#EB",
          },
          FAULT: {
            NAME: "V10#FAULT",
          },
          RANK: {
            NAME: "V10#RANK",
          },
          ID: "YtPHM3z8XmC3x37VMNfrG0",
          NO: 10,
          NAME: "阀门#10",
          TYPE: "D0A30",
          STATION_ID: "2OE6LBhoeLCw3X4Ki5mEhY",
          STATION_PREFIX_ORG: "HVC1#",
          DEVICE_PREFIX: "V10#",
          SUITE_IDS: [],
          VALVES: [],
          OTHERS: {},
          CAP_NUM: 0,
        },
        "2VlqwFEAYJnBnecsQdflri": {
          ONOFF_SP: {
            NAME: "V11#ONOFF_SP",
          },
          ONOFF: {
            NAME: "V11#ONOFF",
          },
          ON: {
            NAME: "V11#ON",
          },
          OFF: {
            NAME: "V11#OFF",
          },
          ON_SP: {
            NAME: "V11#ON_SP",
          },
          OFF_SP: {
            NAME: "V11#OFF_SP",
          },
          POS_SP: {
            NAME: "V11#POS_SP",
          },
          POS: {
            NAME: "V11#POS",
          },
          AM: {
            NAME: "V11#AM",
          },
          EB: {
            NAME: "V11#EB",
          },
          FAULT: {
            NAME: "V11#FAULT",
          },
          RANK: {
            NAME: "V11#RANK",
          },
          ID: "2VlqwFEAYJnBnecsQdflri",
          NO: 11,
          NAME: "阀门#11",
          TYPE: "D0A30",
          STATION_ID: "2OE6LBhoeLCw3X4Ki5mEhY",
          STATION_PREFIX_ORG: "HVC1#",
          DEVICE_PREFIX: "V11#",
          SUITE_IDS: [],
          VALVES: [],
          OTHERS: {},
          CAP_NUM: 0,
        },
        DoXn8Av4ib3OVZ5mJX7fOJ: {
          ONOFF_SP: {
            NAME: "V12#ONOFF_SP",
          },
          ONOFF: {
            NAME: "V12#ONOFF",
          },
          ON: {
            NAME: "V12#ON",
          },
          OFF: {
            NAME: "V12#OFF",
          },
          ON_SP: {
            NAME: "V12#ON_SP",
          },
          OFF_SP: {
            NAME: "V12#OFF_SP",
          },
          POS_SP: {
            NAME: "V12#POS_SP",
          },
          POS: {
            NAME: "V12#POS",
          },
          AM: {
            NAME: "V12#AM",
          },
          EB: {
            NAME: "V12#EB",
          },
          FAULT: {
            NAME: "V12#FAULT",
          },
          RANK: {
            NAME: "V12#RANK",
          },
          ID: "DoXn8Av4ib3OVZ5mJX7fOJ",
          NO: 12,
          NAME: "阀门#12",
          TYPE: "D0A30",
          STATION_ID: "2OE6LBhoeLCw3X4Ki5mEhY",
          STATION_PREFIX_ORG: "HVC1#",
          DEVICE_PREFIX: "V12#",
          SUITE_IDS: [],
          VALVES: [],
          OTHERS: {},
          CAP_NUM: 0,
        },
        BP8J7wISsJ4nmRCxV2pufp: {
          ONOFF_SP: {
            NAME: "V13#ONOFF_SP",
          },
          ONOFF: {
            NAME: "V13#ONOFF",
          },
          ON: {
            NAME: "V13#ON",
          },
          OFF: {
            NAME: "V13#OFF",
          },
          ON_SP: {
            NAME: "V13#ON_SP",
          },
          OFF_SP: {
            NAME: "V13#OFF_SP",
          },
          POS_SP: {
            NAME: "V13#POS_SP",
          },
          POS: {
            NAME: "V13#POS",
          },
          AM: {
            NAME: "V13#AM",
          },
          EB: {
            NAME: "V13#EB",
          },
          FAULT: {
            NAME: "V13#FAULT",
          },
          RANK: {
            NAME: "V13#RANK",
          },
          ID: "BP8J7wISsJ4nmRCxV2pufp",
          NO: 13,
          NAME: "阀门#13",
          TYPE: "D0A30",
          STATION_ID: "2OE6LBhoeLCw3X4Ki5mEhY",
          STATION_PREFIX_ORG: "HVC1#",
          DEVICE_PREFIX: "V13#",
          SUITE_IDS: [],
          VALVES: [],
          OTHERS: {},
          CAP_NUM: 0,
        },
        gHmtkUbK799frcw29TFRnl: {
          ONOFF_SP: {
            NAME: "V14#ONOFF_SP",
          },
          ONOFF: {
            NAME: "V14#ONOFF",
          },
          ON: {
            NAME: "V14#ON",
          },
          OFF: {
            NAME: "V14#OFF",
          },
          ON_SP: {
            NAME: "V14#ON_SP",
          },
          OFF_SP: {
            NAME: "V14#OFF_SP",
          },
          POS_SP: {
            NAME: "V14#POS_SP",
          },
          POS: {
            NAME: "V14#POS",
          },
          AM: {
            NAME: "V14#AM",
          },
          EB: {
            NAME: "V14#EB",
          },
          FAULT: {
            NAME: "V14#FAULT",
          },
          RANK: {
            NAME: "V14#RANK",
          },
          ID: "gHmtkUbK799frcw29TFRnl",
          NO: 14,
          NAME: "阀门#14",
          TYPE: "D0A30",
          STATION_ID: "2OE6LBhoeLCw3X4Ki5mEhY",
          STATION_PREFIX_ORG: "HVC1#",
          DEVICE_PREFIX: "V14#",
          SUITE_IDS: [],
          VALVES: [],
          OTHERS: {},
          CAP_NUM: 0,
        },
        Ma11HQ6JfGVjfYgG4brjnK: {
          ONOFF_SP: {
            NAME: "V15#ONOFF_SP",
          },
          ONOFF: {
            NAME: "V15#ONOFF",
          },
          ON: {
            NAME: "V15#ON",
          },
          OFF: {
            NAME: "V15#OFF",
          },
          ON_SP: {
            NAME: "V15#ON_SP",
          },
          OFF_SP: {
            NAME: "V15#OFF_SP",
          },
          POS_SP: {
            NAME: "V15#POS_SP",
          },
          POS: {
            NAME: "V15#POS",
          },
          AM: {
            NAME: "V15#AM",
          },
          EB: {
            NAME: "V15#EB",
          },
          FAULT: {
            NAME: "V15#FAULT",
          },
          RANK: {
            NAME: "V15#RANK",
          },
          ID: "Ma11HQ6JfGVjfYgG4brjnK",
          NO: 15,
          NAME: "阀门#15",
          TYPE: "D0A30",
          STATION_ID: "2OE6LBhoeLCw3X4Ki5mEhY",
          STATION_PREFIX_ORG: "HVC1#",
          DEVICE_PREFIX: "V15#",
          SUITE_IDS: [],
          VALVES: [],
          OTHERS: {},
          CAP_NUM: 0,
        },
        t8js1U79E6Bf2tH7qb46hA: {
          ONOFF_SP: {
            NAME: "V16#ONOFF_SP",
          },
          ONOFF: {
            NAME: "V16#ONOFF",
          },
          ON: {
            NAME: "V16#ON",
          },
          OFF: {
            NAME: "V16#OFF",
          },
          ON_SP: {
            NAME: "V16#ON_SP",
          },
          OFF_SP: {
            NAME: "V16#OFF_SP",
          },
          POS_SP: {
            NAME: "V16#POS_SP",
          },
          POS: {
            NAME: "V16#POS",
          },
          AM: {
            NAME: "V16#AM",
          },
          EB: {
            NAME: "V16#EB",
          },
          FAULT: {
            NAME: "V16#FAULT",
          },
          RANK: {
            NAME: "V16#RANK",
          },
          ID: "t8js1U79E6Bf2tH7qb46hA",
          NO: 16,
          NAME: "阀门#16",
          TYPE: "D0A30",
          STATION_ID: "2OE6LBhoeLCw3X4Ki5mEhY",
          STATION_PREFIX_ORG: "HVC1#",
          DEVICE_PREFIX: "V16#",
          SUITE_IDS: [],
          VALVES: [],
          OTHERS: {},
          CAP_NUM: 0,
        },
      },
      AHUS: {},
      FAUS: {},
      FCUS: {},
      OAFS: {},
      SAFS: {},
      REAFS: {},
      SCHWPS: {},
      NUM_CH: {
        NAME: "NUM_CH",
      },
      NUM_CWP: {
        NAME: "NUM_CWP",
      },
      NUM_CHWP: {
        NAME: "NUM_CHWP",
      },
      NUM_CT: {
        NAME: "NUM_CT",
      },
      DT_CW_APP: {
        NAME: "DT_CW_APP",
      },
      HINT: {
        NAME: "HINT",
      },
      T_INDOOR: {
        NAME: "T_INDOOR",
      },
      RH_INDOOR: {
        NAME: "RH_INDOOR",
      },
      TW_INDOOR: {
        NAME: "TW_INDOOR",
      },
      H_INDOOR: {
        NAME: "H_INDOOR",
      },
      TD_INDOOR: {
        NAME: "TD_INDOOR",
      },
      CO2_INDOOR: {
        NAME: "CO2_INDOOR",
      },
      ID: "2OE6LBhoeLCw3X4Ki5mEhY",
      NO: 1,
      NAME: "暖通空调1",
      TYPE: "D0A10",
      STATION_ID: "2OE6LBhoeLCw3X4Ki5mEhY",
      STATION_PREFIX_ORG: "HVC1#",
      STATION_PREFIX_SET: "HVC1",
      OTHERS: {
        "CH1#AM": {
          NAME: "CH1#AM",
        },
        "CH1#COP": {
          NAME: "CH1#COP",
        },
        "CH1#COP_RATED": {
          NAME: "CH1#COP_RATED",
        },
        "CH1#COUNT_SS": {
          NAME: "CH1#COUNT_SS",
        },
        "CH1#DPR_OIL": {
          NAME: "CH1#DPR_OIL",
        },
        "CH1#EB": {
          NAME: "CH1#EB",
        },
        "CH1#ELEC": {
          NAME: "CH1#ELEC",
        },
        "CH1#FAULT": {
          NAME: "CH1#FAULT",
        },
        "CH1#FAULT_CODE": {
          NAME: "CH1#FAULT_CODE",
        },
        "CH1#FAULT_RESET": {
          NAME: "CH1#FAULT_RESET",
        },
        "CH1#FLOW_CHW": {
          NAME: "CH1#FLOW_CHW",
        },
        "CH1#FLOW_CHW_RATED": {
          NAME: "CH1#FLOW_CHW_RATED",
        },
        "CH1#FLOW_CHW_SWITCH": {
          NAME: "CH1#FLOW_CHW_SWITCH",
        },
        "CH1#FLOW_CW": {
          NAME: "CH1#FLOW_CW",
        },
        "CH1#FLOW_CW_RATED": {
          NAME: "CH1#FLOW_CW_RATED",
        },
        "CH1#FLOW_CW_SWITCH": {
          NAME: "CH1#FLOW_CW_SWITCH",
        },
        "CH1#HRS": {
          NAME: "CH1#HRS",
        },
        "CH1#HRS_TOTAL": {
          NAME: "CH1#HRS_TOTAL",
        },
        "CH1#I": {
          NAME: "CH1#I",
        },
        "CH1#I_PCT": {
          NAME: "CH1#I_PCT",
        },
        "CH1#I_PCT_MAX_SP": {
          NAME: "CH1#I_PCT_MAX_SP",
        },
        "CH1#LOAD": {
          NAME: "CH1#LOAD",
        },
        "CH1#LOAD_RATED": {
          NAME: "CH1#LOAD_RATED",
          VALUE: "2000",
          VALUE_O: 2000,
        },
        "CH1#MODE": {
          NAME: "CH1#MODE",
        },
        "CH1#OFF": {
          NAME: "CH1#OFF",
        },
        "CH1#OFF_SP": {
          NAME: "CH1#OFF_SP",
        },
        "CH1#ON": {
          NAME: "CH1#ON",
        },
        "CH1#ONECLICK_START": {
          NAME: "CH1#ONECLICK_START",
        },
        "CH1#ONECLICK_STOP": {
          NAME: "CH1#ONECLICK_STOP",
        },
        "CH1#ONOFF": {
          NAME: "CH1#ONOFF",
        },
        "CH1#ONOFF_SP": {
          NAME: "CH1#ONOFF_SP",
        },
        "CH1#ON_SP": {
          NAME: "CH1#ON_SP",
        },
        "CH1#P": {
          NAME: "CH1#P",
        },
        "CH1#PLR": {
          NAME: "CH1#PLR",
        },
        "CH1#P_RATED": {
          NAME: "CH1#P_RATED",
        },
        "CH1#PR_COND": {
          NAME: "CH1#PR_COND",
        },
        "CH1#PR_EVAP": {
          NAME: "CH1#PR_EVAP",
        },
        "CH1#PR_EXHT_PROTECT": {
          NAME: "CH1#PR_EXHT_PROTECT",
        },
        "CH1#RANK": {
          NAME: "CH1#RANK",
        },
        "CH1#T_CHW_S": {
          NAME: "CH1#T_CHW_S",
        },
        "CH1#T_CHW_S_SP": {
          NAME: "CH1#T_CHW_S_SP",
        },
        "CH1#T_COND": {
          NAME: "CH1#T_COND",
        },
        "CH1#T_COND_ENT": {
          NAME: "CH1#T_COND_ENT",
        },
        "CH1#T_COND_LEV": {
          NAME: "CH1#T_COND_LEV",
        },
        "CH1#T_COND_PROTECT": {
          NAME: "CH1#T_COND_PROTECT",
        },
        "CH1#T_CW_R": {
          NAME: "CH1#T_CW_R",
        },
        "CH1#T_EVAP": {
          NAME: "CH1#T_EVAP",
        },
        "CH1#T_EVAP_ENT": {
          NAME: "CH1#T_EVAP_ENT",
        },
        "CH1#T_EVAP_LEV": {
          NAME: "CH1#T_EVAP_LEV",
        },
        "CH1#T_EXHT": {
          NAME: "CH1#T_EXHT",
        },
        "CH1#T_OIL": {
          NAME: "CH1#T_OIL",
        },
        "CH1#W": {
          NAME: "CH1#W",
        },
        "CH2#AM": {
          NAME: "CH2#AM",
        },
        "CH2#COP": {
          NAME: "CH2#COP",
        },
        "CH2#COP_RATED": {
          NAME: "CH2#COP_RATED",
        },
        "CH2#COUNT_SS": {
          NAME: "CH2#COUNT_SS",
        },
        "CH2#DPR_OIL": {
          NAME: "CH2#DPR_OIL",
        },
        "CH2#EB": {
          NAME: "CH2#EB",
        },
        "CH2#ELEC": {
          NAME: "CH2#ELEC",
        },
        "CH2#FAULT": {
          NAME: "CH2#FAULT",
        },
        "CH2#FAULT_CODE": {
          NAME: "CH2#FAULT_CODE",
        },
        "CH2#FAULT_RESET": {
          NAME: "CH2#FAULT_RESET",
        },
        "CH2#FLOW_CHW": {
          NAME: "CH2#FLOW_CHW",
        },
        "CH2#FLOW_CHW_RATED": {
          NAME: "CH2#FLOW_CHW_RATED",
        },
        "CH2#FLOW_CHW_SWITCH": {
          NAME: "CH2#FLOW_CHW_SWITCH",
        },
        "CH2#FLOW_CW": {
          NAME: "CH2#FLOW_CW",
        },
        "CH2#FLOW_CW_RATED": {
          NAME: "CH2#FLOW_CW_RATED",
        },
        "CH2#FLOW_CW_SWITCH": {
          NAME: "CH2#FLOW_CW_SWITCH",
        },
        "CH2#HRS": {
          NAME: "CH2#HRS",
        },
        "CH2#HRS_TOTAL": {
          NAME: "CH2#HRS_TOTAL",
        },
        "CH2#I": {
          NAME: "CH2#I",
        },
        "CH2#I_PCT": {
          NAME: "CH2#I_PCT",
        },
        "CH2#I_PCT_MAX_SP": {
          NAME: "CH2#I_PCT_MAX_SP",
        },
        "CH2#LOAD": {
          NAME: "CH2#LOAD",
        },
        "CH2#LOAD_RATED": {
          NAME: "CH2#LOAD_RATED",
          VALUE: "2000",
          VALUE_O: 2000,
        },
        "CH2#MODE": {
          NAME: "CH2#MODE",
        },
        "CH2#OFF": {
          NAME: "CH2#OFF",
        },
        "CH2#OFF_SP": {
          NAME: "CH2#OFF_SP",
        },
        "CH2#ON": {
          NAME: "CH2#ON",
        },
        "CH2#ONECLICK_START": {
          NAME: "CH2#ONECLICK_START",
        },
        "CH2#ONECLICK_STOP": {
          NAME: "CH2#ONECLICK_STOP",
        },
        "CH2#ONOFF": {
          NAME: "CH2#ONOFF",
        },
        "CH2#ONOFF_SP": {
          NAME: "CH2#ONOFF_SP",
        },
        "CH2#ON_SP": {
          NAME: "CH2#ON_SP",
        },
        "CH2#P": {
          NAME: "CH2#P",
        },
        "CH2#PLR": {
          NAME: "CH2#PLR",
        },
        "CH2#P_RATED": {
          NAME: "CH2#P_RATED",
        },
        "CH2#PR_COND": {
          NAME: "CH2#PR_COND",
        },
        "CH2#PR_EVAP": {
          NAME: "CH2#PR_EVAP",
        },
        "CH2#PR_EXHT_PROTECT": {
          NAME: "CH2#PR_EXHT_PROTECT",
        },
        "CH2#RANK": {
          NAME: "CH2#RANK",
        },
        "CH2#T_CHW_S": {
          NAME: "CH2#T_CHW_S",
        },
        "CH2#T_CHW_S_SP": {
          NAME: "CH2#T_CHW_S_SP",
        },
        "CH2#T_COND": {
          NAME: "CH2#T_COND",
        },
        "CH2#T_COND_ENT": {
          NAME: "CH2#T_COND_ENT",
        },
        "CH2#T_COND_LEV": {
          NAME: "CH2#T_COND_LEV",
        },
        "CH2#T_COND_PROTECT": {
          NAME: "CH2#T_COND_PROTECT",
        },
        "CH2#T_CW_R": {
          NAME: "CH2#T_CW_R",
        },
        "CH2#T_EVAP": {
          NAME: "CH2#T_EVAP",
        },
        "CH2#T_EVAP_ENT": {
          NAME: "CH2#T_EVAP_ENT",
        },
        "CH2#T_EVAP_LEV": {
          NAME: "CH2#T_EVAP_LEV",
        },
        "CH2#T_EXHT": {
          NAME: "CH2#T_EXHT",
        },
        "CH2#T_OIL": {
          NAME: "CH2#T_OIL",
        },
        "CH2#W": {
          NAME: "CH2#W",
        },
        "CH3#AM": {
          NAME: "CH3#AM",
        },
        "CH3#COP": {
          NAME: "CH3#COP",
        },
        "CH3#COP_RATED": {
          NAME: "CH3#COP_RATED",
        },
        "CH3#COUNT_SS": {
          NAME: "CH3#COUNT_SS",
        },
        "CH3#DPR_OIL": {
          NAME: "CH3#DPR_OIL",
        },
        "CH3#EB": {
          NAME: "CH3#EB",
        },
        "CH3#ELEC": {
          NAME: "CH3#ELEC",
        },
        "CH3#FAULT": {
          NAME: "CH3#FAULT",
        },
        "CH3#FAULT_CODE": {
          NAME: "CH3#FAULT_CODE",
        },
        "CH3#FAULT_RESET": {
          NAME: "CH3#FAULT_RESET",
        },
        "CH3#FLOW_CHW": {
          NAME: "CH3#FLOW_CHW",
        },
        "CH3#FLOW_CHW_RATED": {
          NAME: "CH3#FLOW_CHW_RATED",
        },
        "CH3#FLOW_CHW_SWITCH": {
          NAME: "CH3#FLOW_CHW_SWITCH",
        },
        "CH3#FLOW_CW": {
          NAME: "CH3#FLOW_CW",
        },
        "CH3#FLOW_CW_RATED": {
          NAME: "CH3#FLOW_CW_RATED",
        },
        "CH3#FLOW_CW_SWITCH": {
          NAME: "CH3#FLOW_CW_SWITCH",
        },
        "CH3#HRS": {
          NAME: "CH3#HRS",
        },
        "CH3#HRS_TOTAL": {
          NAME: "CH3#HRS_TOTAL",
        },
        "CH3#I": {
          NAME: "CH3#I",
        },
        "CH3#I_PCT": {
          NAME: "CH3#I_PCT",
        },
        "CH3#I_PCT_MAX_SP": {
          NAME: "CH3#I_PCT_MAX_SP",
        },
        "CH3#LOAD": {
          NAME: "CH3#LOAD",
        },
        "CH3#LOAD_RATED": {
          NAME: "CH3#LOAD_RATED",
          VALUE: "2000",
          VALUE_O: 2000,
        },
        "CH3#MODE": {
          NAME: "CH3#MODE",
        },
        "CH3#OFF": {
          NAME: "CH3#OFF",
        },
        "CH3#OFF_SP": {
          NAME: "CH3#OFF_SP",
        },
        "CH3#ON": {
          NAME: "CH3#ON",
        },
        "CH3#ONECLICK_START": {
          NAME: "CH3#ONECLICK_START",
        },
        "CH3#ONECLICK_STOP": {
          NAME: "CH3#ONECLICK_STOP",
        },
        "CH3#ONOFF": {
          NAME: "CH3#ONOFF",
        },
        "CH3#ONOFF_SP": {
          NAME: "CH3#ONOFF_SP",
        },
        "CH3#ON_SP": {
          NAME: "CH3#ON_SP",
        },
        "CH3#P": {
          NAME: "CH3#P",
        },
        "CH3#PLR": {
          NAME: "CH3#PLR",
        },
        "CH3#P_RATED": {
          NAME: "CH3#P_RATED",
        },
        "CH3#PR_COND": {
          NAME: "CH3#PR_COND",
        },
        "CH3#PR_EVAP": {
          NAME: "CH3#PR_EVAP",
        },
        "CH3#PR_EXHT_PROTECT": {
          NAME: "CH3#PR_EXHT_PROTECT",
        },
        "CH3#RANK": {
          NAME: "CH3#RANK",
        },
        "CH3#T_CHW_S": {
          NAME: "CH3#T_CHW_S",
        },
        "CH3#T_CHW_S_SP": {
          NAME: "CH3#T_CHW_S_SP",
        },
        "CH3#T_COND": {
          NAME: "CH3#T_COND",
        },
        "CH3#T_COND_ENT": {
          NAME: "CH3#T_COND_ENT",
        },
        "CH3#T_COND_LEV": {
          NAME: "CH3#T_COND_LEV",
        },
        "CH3#T_COND_PROTECT": {
          NAME: "CH3#T_COND_PROTECT",
        },
        "CH3#T_CW_R": {
          NAME: "CH3#T_CW_R",
        },
        "CH3#T_EVAP": {
          NAME: "CH3#T_EVAP",
        },
        "CH3#T_EVAP_ENT": {
          NAME: "CH3#T_EVAP_ENT",
        },
        "CH3#T_EVAP_LEV": {
          NAME: "CH3#T_EVAP_LEV",
        },
        "CH3#T_EXHT": {
          NAME: "CH3#T_EXHT",
        },
        "CH3#T_OIL": {
          NAME: "CH3#T_OIL",
        },
        "CH3#W": {
          NAME: "CH3#W",
        },
        "CH4#AM": {
          NAME: "CH4#AM",
        },
        "CH4#COP": {
          NAME: "CH4#COP",
        },
        "CH4#COP_RATED": {
          NAME: "CH4#COP_RATED",
        },
        "CH4#COUNT_SS": {
          NAME: "CH4#COUNT_SS",
        },
        "CH4#DPR_OIL": {
          NAME: "CH4#DPR_OIL",
        },
        "CH4#EB": {
          NAME: "CH4#EB",
        },
        "CH4#ELEC": {
          NAME: "CH4#ELEC",
        },
        "CH4#FAULT": {
          NAME: "CH4#FAULT",
        },
        "CH4#FAULT_CODE": {
          NAME: "CH4#FAULT_CODE",
        },
        "CH4#FAULT_RESET": {
          NAME: "CH4#FAULT_RESET",
        },
        "CH4#FLOW_CHW": {
          NAME: "CH4#FLOW_CHW",
        },
        "CH4#FLOW_CHW_RATED": {
          NAME: "CH4#FLOW_CHW_RATED",
        },
        "CH4#FLOW_CHW_SWITCH": {
          NAME: "CH4#FLOW_CHW_SWITCH",
        },
        "CH4#FLOW_CW": {
          NAME: "CH4#FLOW_CW",
        },
        "CH4#FLOW_CW_RATED": {
          NAME: "CH4#FLOW_CW_RATED",
        },
        "CH4#FLOW_CW_SWITCH": {
          NAME: "CH4#FLOW_CW_SWITCH",
        },
        "CH4#HRS": {
          NAME: "CH4#HRS",
        },
        "CH4#HRS_TOTAL": {
          NAME: "CH4#HRS_TOTAL",
        },
        "CH4#I": {
          NAME: "CH4#I",
        },
        "CH4#I_PCT": {
          NAME: "CH4#I_PCT",
        },
        "CH4#I_PCT_MAX_SP": {
          NAME: "CH4#I_PCT_MAX_SP",
        },
        "CH4#LOAD": {
          NAME: "CH4#LOAD",
        },
        "CH4#LOAD_RATED": {
          NAME: "CH4#LOAD_RATED",
          VALUE: "2000",
          VALUE_O: 2000,
        },
        "CH4#MODE": {
          NAME: "CH4#MODE",
        },
        "CH4#OFF": {
          NAME: "CH4#OFF",
        },
        "CH4#OFF_SP": {
          NAME: "CH4#OFF_SP",
        },
        "CH4#ON": {
          NAME: "CH4#ON",
        },
        "CH4#ONECLICK_START": {
          NAME: "CH4#ONECLICK_START",
        },
        "CH4#ONECLICK_STOP": {
          NAME: "CH4#ONECLICK_STOP",
        },
        "CH4#ONOFF": {
          NAME: "CH4#ONOFF",
        },
        "CH4#ONOFF_SP": {
          NAME: "CH4#ONOFF_SP",
        },
        "CH4#ON_SP": {
          NAME: "CH4#ON_SP",
        },
        "CH4#P": {
          NAME: "CH4#P",
        },
        "CH4#PLR": {
          NAME: "CH4#PLR",
        },
        "CH4#P_RATED": {
          NAME: "CH4#P_RATED",
        },
        "CH4#PR_COND": {
          NAME: "CH4#PR_COND",
        },
        "CH4#PR_EVAP": {
          NAME: "CH4#PR_EVAP",
        },
        "CH4#PR_EXHT_PROTECT": {
          NAME: "CH4#PR_EXHT_PROTECT",
        },
        "CH4#RANK": {
          NAME: "CH4#RANK",
        },
        "CH4#T_CHW_S": {
          NAME: "CH4#T_CHW_S",
        },
        "CH4#T_CHW_S_SP": {
          NAME: "CH4#T_CHW_S_SP",
        },
        "CH4#T_COND": {
          NAME: "CH4#T_COND",
        },
        "CH4#T_COND_ENT": {
          NAME: "CH4#T_COND_ENT",
        },
        "CH4#T_COND_LEV": {
          NAME: "CH4#T_COND_LEV",
        },
        "CH4#T_COND_PROTECT": {
          NAME: "CH4#T_COND_PROTECT",
        },
        "CH4#T_CW_R": {
          NAME: "CH4#T_CW_R",
        },
        "CH4#T_EVAP": {
          NAME: "CH4#T_EVAP",
        },
        "CH4#T_EVAP_ENT": {
          NAME: "CH4#T_EVAP_ENT",
        },
        "CH4#T_EVAP_LEV": {
          NAME: "CH4#T_EVAP_LEV",
        },
        "CH4#T_EXHT": {
          NAME: "CH4#T_EXHT",
        },
        "CH4#T_OIL": {
          NAME: "CH4#T_OIL",
        },
        "CH4#W": {
          NAME: "CH4#W",
        },
        "CHWP1#AM": {
          NAME: "CHWP1#AM",
        },
        "CHWP1#COP": {
          NAME: "CHWP1#COP",
        },
        "CHWP1#COP_RATED": {
          NAME: "CHWP1#COP_RATED",
        },
        "CHWP1#EB": {
          NAME: "CHWP1#EB",
        },
        "CHWP1#ELEC": {
          NAME: "CHWP1#ELEC",
        },
        "CHWP1#FAULT": {
          NAME: "CHWP1#FAULT",
        },
        "CHWP1#FAULT_CODE": {
          NAME: "CHWP1#FAULT_CODE",
        },
        "CHWP1#FAULT_RESET": {
          NAME: "CHWP1#FAULT_RESET",
        },
        "CHWP1#FAULT_VFD": {
          NAME: "CHWP1#FAULT_VFD",
        },
        "CHWP1#FLOW_RATED": {
          NAME: "CHWP1#FLOW_RATED",
        },
        "CHWP1#FREQ": {
          NAME: "CHWP1#FREQ",
        },
        "CHWP1#FREQ_SP": {
          NAME: "CHWP1#FREQ_SP",
        },
        "CHWP1#HRS": {
          NAME: "CHWP1#HRS",
        },
        "CHWP1#HRS_TOTAL": {
          NAME: "CHWP1#HRS_TOTAL",
        },
        "CHWP1#OFF": {
          NAME: "CHWP1#OFF",
        },
        "CHWP1#OFF_SP": {
          NAME: "CHWP1#OFF_SP",
        },
        "CHWP1#ON": {
          NAME: "CHWP1#ON",
        },
        "CHWP1#ONOFF": {
          NAME: "CHWP1#ONOFF",
        },
        "CHWP1#ONOFF_SP": {
          NAME: "CHWP1#ONOFF_SP",
        },
        "CHWP1#ONOFF_VFD": {
          NAME: "CHWP1#ONOFF_VFD",
        },
        "CHWP1#ONOFF_VFD_SP": {
          NAME: "CHWP1#ONOFF_VFD_SP",
        },
        "CHWP1#ON_SP": {
          NAME: "CHWP1#ON_SP",
        },
        "CHWP1#P": {
          NAME: "CHWP1#P",
        },
        "CHWP1#P_RATED": {
          NAME: "CHWP1#P_RATED",
        },
        "CHWP1#PR_INLET": {
          NAME: "CHWP1#PR_INLET",
        },
        "CHWP1#PR_OUTLET": {
          NAME: "CHWP1#PR_OUTLET",
        },
        "CHWP1#P_VFD": {
          NAME: "CHWP1#P_VFD",
        },
        "CHWP1#RANK": {
          NAME: "CHWP1#RANK",
        },
        "CHWP1#W": {
          NAME: "CHWP1#W",
        },
        "CHWP2#AM": {
          NAME: "CHWP2#AM",
        },
        "CHWP2#COP": {
          NAME: "CHWP2#COP",
        },
        "CHWP2#COP_RATED": {
          NAME: "CHWP2#COP_RATED",
        },
        "CHWP2#EB": {
          NAME: "CHWP2#EB",
        },
        "CHWP2#ELEC": {
          NAME: "CHWP2#ELEC",
        },
        "CHWP2#FAULT": {
          NAME: "CHWP2#FAULT",
        },
        "CHWP2#FAULT_CODE": {
          NAME: "CHWP2#FAULT_CODE",
        },
        "CHWP2#FAULT_RESET": {
          NAME: "CHWP2#FAULT_RESET",
        },
        "CHWP2#FAULT_VFD": {
          NAME: "CHWP2#FAULT_VFD",
        },
        "CHWP2#FLOW_RATED": {
          NAME: "CHWP2#FLOW_RATED",
        },
        "CHWP2#FREQ": {
          NAME: "CHWP2#FREQ",
        },
        "CHWP2#FREQ_SP": {
          NAME: "CHWP2#FREQ_SP",
        },
        "CHWP2#HRS": {
          NAME: "CHWP2#HRS",
        },
        "CHWP2#HRS_TOTAL": {
          NAME: "CHWP2#HRS_TOTAL",
        },
        "CHWP2#OFF": {
          NAME: "CHWP2#OFF",
        },
        "CHWP2#OFF_SP": {
          NAME: "CHWP2#OFF_SP",
        },
        "CHWP2#ON": {
          NAME: "CHWP2#ON",
        },
        "CHWP2#ONOFF": {
          NAME: "CHWP2#ONOFF",
        },
        "CHWP2#ONOFF_SP": {
          NAME: "CHWP2#ONOFF_SP",
        },
        "CHWP2#ONOFF_VFD": {
          NAME: "CHWP2#ONOFF_VFD",
        },
        "CHWP2#ONOFF_VFD_SP": {
          NAME: "CHWP2#ONOFF_VFD_SP",
        },
        "CHWP2#ON_SP": {
          NAME: "CHWP2#ON_SP",
        },
        "CHWP2#P": {
          NAME: "CHWP2#P",
        },
        "CHWP2#P_RATED": {
          NAME: "CHWP2#P_RATED",
        },
        "CHWP2#PR_INLET": {
          NAME: "CHWP2#PR_INLET",
        },
        "CHWP2#PR_OUTLET": {
          NAME: "CHWP2#PR_OUTLET",
        },
        "CHWP2#P_VFD": {
          NAME: "CHWP2#P_VFD",
        },
        "CHWP2#RANK": {
          NAME: "CHWP2#RANK",
        },
        "CHWP2#W": {
          NAME: "CHWP2#W",
        },
        "CHWP3#AM": {
          NAME: "CHWP3#AM",
        },
        "CHWP3#COP": {
          NAME: "CHWP3#COP",
        },
        "CHWP3#COP_RATED": {
          NAME: "CHWP3#COP_RATED",
        },
        "CHWP3#EB": {
          NAME: "CHWP3#EB",
        },
        "CHWP3#ELEC": {
          NAME: "CHWP3#ELEC",
        },
        "CHWP3#FAULT": {
          NAME: "CHWP3#FAULT",
        },
        "CHWP3#FAULT_CODE": {
          NAME: "CHWP3#FAULT_CODE",
        },
        "CHWP3#FAULT_RESET": {
          NAME: "CHWP3#FAULT_RESET",
        },
        "CHWP3#FAULT_VFD": {
          NAME: "CHWP3#FAULT_VFD",
        },
        "CHWP3#FLOW_RATED": {
          NAME: "CHWP3#FLOW_RATED",
        },
        "CHWP3#FREQ": {
          NAME: "CHWP3#FREQ",
        },
        "CHWP3#FREQ_SP": {
          NAME: "CHWP3#FREQ_SP",
        },
        "CHWP3#HRS": {
          NAME: "CHWP3#HRS",
        },
        "CHWP3#HRS_TOTAL": {
          NAME: "CHWP3#HRS_TOTAL",
        },
        "CHWP3#OFF": {
          NAME: "CHWP3#OFF",
        },
        "CHWP3#OFF_SP": {
          NAME: "CHWP3#OFF_SP",
        },
        "CHWP3#ON": {
          NAME: "CHWP3#ON",
        },
        "CHWP3#ONOFF": {
          NAME: "CHWP3#ONOFF",
        },
        "CHWP3#ONOFF_SP": {
          NAME: "CHWP3#ONOFF_SP",
        },
        "CHWP3#ONOFF_VFD": {
          NAME: "CHWP3#ONOFF_VFD",
        },
        "CHWP3#ONOFF_VFD_SP": {
          NAME: "CHWP3#ONOFF_VFD_SP",
        },
        "CHWP3#ON_SP": {
          NAME: "CHWP3#ON_SP",
        },
        "CHWP3#P": {
          NAME: "CHWP3#P",
        },
        "CHWP3#P_RATED": {
          NAME: "CHWP3#P_RATED",
        },
        "CHWP3#PR_INLET": {
          NAME: "CHWP3#PR_INLET",
        },
        "CHWP3#PR_OUTLET": {
          NAME: "CHWP3#PR_OUTLET",
        },
        "CHWP3#P_VFD": {
          NAME: "CHWP3#P_VFD",
        },
        "CHWP3#RANK": {
          NAME: "CHWP3#RANK",
        },
        "CHWP3#W": {
          NAME: "CHWP3#W",
        },
        "CHWP4#AM": {
          NAME: "CHWP4#AM",
        },
        "CHWP4#COP": {
          NAME: "CHWP4#COP",
        },
        "CHWP4#COP_RATED": {
          NAME: "CHWP4#COP_RATED",
        },
        "CHWP4#EB": {
          NAME: "CHWP4#EB",
        },
        "CHWP4#ELEC": {
          NAME: "CHWP4#ELEC",
        },
        "CHWP4#FAULT": {
          NAME: "CHWP4#FAULT",
        },
        "CHWP4#FAULT_CODE": {
          NAME: "CHWP4#FAULT_CODE",
        },
        "CHWP4#FAULT_RESET": {
          NAME: "CHWP4#FAULT_RESET",
        },
        "CHWP4#FAULT_VFD": {
          NAME: "CHWP4#FAULT_VFD",
        },
        "CHWP4#FLOW_RATED": {
          NAME: "CHWP4#FLOW_RATED",
        },
        "CHWP4#FREQ": {
          NAME: "CHWP4#FREQ",
        },
        "CHWP4#FREQ_SP": {
          NAME: "CHWP4#FREQ_SP",
        },
        "CHWP4#HRS": {
          NAME: "CHWP4#HRS",
        },
        "CHWP4#HRS_TOTAL": {
          NAME: "CHWP4#HRS_TOTAL",
        },
        "CHWP4#OFF": {
          NAME: "CHWP4#OFF",
        },
        "CHWP4#OFF_SP": {
          NAME: "CHWP4#OFF_SP",
        },
        "CHWP4#ON": {
          NAME: "CHWP4#ON",
        },
        "CHWP4#ONOFF": {
          NAME: "CHWP4#ONOFF",
        },
        "CHWP4#ONOFF_SP": {
          NAME: "CHWP4#ONOFF_SP",
        },
        "CHWP4#ONOFF_VFD": {
          NAME: "CHWP4#ONOFF_VFD",
        },
        "CHWP4#ONOFF_VFD_SP": {
          NAME: "CHWP4#ONOFF_VFD_SP",
        },
        "CHWP4#ON_SP": {
          NAME: "CHWP4#ON_SP",
        },
        "CHWP4#P": {
          NAME: "CHWP4#P",
        },
        "CHWP4#P_RATED": {
          NAME: "CHWP4#P_RATED",
        },
        "CHWP4#PR_INLET": {
          NAME: "CHWP4#PR_INLET",
        },
        "CHWP4#PR_OUTLET": {
          NAME: "CHWP4#PR_OUTLET",
        },
        "CHWP4#P_VFD": {
          NAME: "CHWP4#P_VFD",
        },
        "CHWP4#RANK": {
          NAME: "CHWP4#RANK",
        },
        "CHWP4#W": {
          NAME: "CHWP4#W",
        },
        "CWP1#AM": {
          NAME: "CWP1#AM",
        },
        "CWP1#COP": {
          NAME: "CWP1#COP",
        },
        "CWP1#COP_RATED": {
          NAME: "CWP1#COP_RATED",
        },
        "CWP1#EB": {
          NAME: "CWP1#EB",
        },
        "CWP1#ELEC": {
          NAME: "CWP1#ELEC",
        },
        "CWP1#FAULT": {
          NAME: "CWP1#FAULT",
        },
        "CWP1#FAULT_CODE": {
          NAME: "CWP1#FAULT_CODE",
        },
        "CWP1#FAULT_RESET": {
          NAME: "CWP1#FAULT_RESET",
        },
        "CWP1#FAULT_VFD": {
          NAME: "CWP1#FAULT_VFD",
        },
        "CWP1#FLOW_RATED": {
          NAME: "CWP1#FLOW_RATED",
        },
        "CWP1#FREQ": {
          NAME: "CWP1#FREQ",
        },
        "CWP1#FREQ_SP": {
          NAME: "CWP1#FREQ_SP",
        },
        "CWP1#HRS": {
          NAME: "CWP1#HRS",
        },
        "CWP1#HRS_TOTAL": {
          NAME: "CWP1#HRS_TOTAL",
        },
        "CWP1#OFF": {
          NAME: "CWP1#OFF",
        },
        "CWP1#OFF_SP": {
          NAME: "CWP1#OFF_SP",
        },
        "CWP1#ON": {
          NAME: "CWP1#ON",
        },
        "CWP1#ONOFF": {
          NAME: "CWP1#ONOFF",
        },
        "CWP1#ONOFF_SP": {
          NAME: "CWP1#ONOFF_SP",
        },
        "CWP1#ONOFF_VFD": {
          NAME: "CWP1#ONOFF_VFD",
        },
        "CWP1#ONOFF_VFD_SP": {
          NAME: "CWP1#ONOFF_VFD_SP",
        },
        "CWP1#ON_SP": {
          NAME: "CWP1#ON_SP",
        },
        "CWP1#P": {
          NAME: "CWP1#P",
        },
        "CWP1#P_RATED": {
          NAME: "CWP1#P_RATED",
        },
        "CWP1#PR_INLET": {
          NAME: "CWP1#PR_INLET",
        },
        "CWP1#PR_OUTLET": {
          NAME: "CWP1#PR_OUTLET",
        },
        "CWP1#P_VFD": {
          NAME: "CWP1#P_VFD",
        },
        "CWP1#RANK": {
          NAME: "CWP1#RANK",
        },
        "CWP1#W": {
          NAME: "CWP1#W",
        },
        "CWP2#AM": {
          NAME: "CWP2#AM",
        },
        "CWP2#COP": {
          NAME: "CWP2#COP",
        },
        "CWP2#COP_RATED": {
          NAME: "CWP2#COP_RATED",
        },
        "CWP2#EB": {
          NAME: "CWP2#EB",
        },
        "CWP2#ELEC": {
          NAME: "CWP2#ELEC",
        },
        "CWP2#FAULT": {
          NAME: "CWP2#FAULT",
        },
        "CWP2#FAULT_CODE": {
          NAME: "CWP2#FAULT_CODE",
        },
        "CWP2#FAULT_RESET": {
          NAME: "CWP2#FAULT_RESET",
        },
        "CWP2#FAULT_VFD": {
          NAME: "CWP2#FAULT_VFD",
        },
        "CWP2#FLOW_RATED": {
          NAME: "CWP2#FLOW_RATED",
        },
        "CWP2#FREQ": {
          NAME: "CWP2#FREQ",
        },
        "CWP2#FREQ_SP": {
          NAME: "CWP2#FREQ_SP",
        },
        "CWP2#HRS": {
          NAME: "CWP2#HRS",
        },
        "CWP2#HRS_TOTAL": {
          NAME: "CWP2#HRS_TOTAL",
        },
        "CWP2#OFF": {
          NAME: "CWP2#OFF",
        },
        "CWP2#OFF_SP": {
          NAME: "CWP2#OFF_SP",
        },
        "CWP2#ON": {
          NAME: "CWP2#ON",
        },
        "CWP2#ONOFF": {
          NAME: "CWP2#ONOFF",
        },
        "CWP2#ONOFF_SP": {
          NAME: "CWP2#ONOFF_SP",
        },
        "CWP2#ONOFF_VFD": {
          NAME: "CWP2#ONOFF_VFD",
        },
        "CWP2#ONOFF_VFD_SP": {
          NAME: "CWP2#ONOFF_VFD_SP",
        },
        "CWP2#ON_SP": {
          NAME: "CWP2#ON_SP",
        },
        "CWP2#P": {
          NAME: "CWP2#P",
        },
        "CWP2#P_RATED": {
          NAME: "CWP2#P_RATED",
        },
        "CWP2#PR_INLET": {
          NAME: "CWP2#PR_INLET",
        },
        "CWP2#PR_OUTLET": {
          NAME: "CWP2#PR_OUTLET",
        },
        "CWP2#P_VFD": {
          NAME: "CWP2#P_VFD",
        },
        "CWP2#RANK": {
          NAME: "CWP2#RANK",
        },
        "CWP2#W": {
          NAME: "CWP2#W",
        },
        "CWP3#AM": {
          NAME: "CWP3#AM",
        },
        "CWP3#COP": {
          NAME: "CWP3#COP",
        },
        "CWP3#COP_RATED": {
          NAME: "CWP3#COP_RATED",
        },
        "CWP3#EB": {
          NAME: "CWP3#EB",
        },
        "CWP3#ELEC": {
          NAME: "CWP3#ELEC",
        },
        "CWP3#FAULT": {
          NAME: "CWP3#FAULT",
        },
        "CWP3#FAULT_CODE": {
          NAME: "CWP3#FAULT_CODE",
        },
        "CWP3#FAULT_RESET": {
          NAME: "CWP3#FAULT_RESET",
        },
        "CWP3#FAULT_VFD": {
          NAME: "CWP3#FAULT_VFD",
        },
        "CWP3#FLOW_RATED": {
          NAME: "CWP3#FLOW_RATED",
        },
        "CWP3#FREQ": {
          NAME: "CWP3#FREQ",
        },
        "CWP3#FREQ_SP": {
          NAME: "CWP3#FREQ_SP",
        },
        "CWP3#HRS": {
          NAME: "CWP3#HRS",
        },
        "CWP3#HRS_TOTAL": {
          NAME: "CWP3#HRS_TOTAL",
        },
        "CWP3#OFF": {
          NAME: "CWP3#OFF",
        },
        "CWP3#OFF_SP": {
          NAME: "CWP3#OFF_SP",
        },
        "CWP3#ON": {
          NAME: "CWP3#ON",
        },
        "CWP3#ONOFF": {
          NAME: "CWP3#ONOFF",
        },
        "CWP3#ONOFF_SP": {
          NAME: "CWP3#ONOFF_SP",
        },
        "CWP3#ONOFF_VFD": {
          NAME: "CWP3#ONOFF_VFD",
        },
        "CWP3#ONOFF_VFD_SP": {
          NAME: "CWP3#ONOFF_VFD_SP",
        },
        "CWP3#ON_SP": {
          NAME: "CWP3#ON_SP",
        },
        "CWP3#P": {
          NAME: "CWP3#P",
        },
        "CWP3#P_RATED": {
          NAME: "CWP3#P_RATED",
        },
        "CWP3#PR_INLET": {
          NAME: "CWP3#PR_INLET",
        },
        "CWP3#PR_OUTLET": {
          NAME: "CWP3#PR_OUTLET",
        },
        "CWP3#P_VFD": {
          NAME: "CWP3#P_VFD",
        },
        "CWP3#RANK": {
          NAME: "CWP3#RANK",
        },
        "CWP3#W": {
          NAME: "CWP3#W",
        },
        "CWP4#AM": {
          NAME: "CWP4#AM",
        },
        "CWP4#COP": {
          NAME: "CWP4#COP",
        },
        "CWP4#COP_RATED": {
          NAME: "CWP4#COP_RATED",
        },
        "CWP4#EB": {
          NAME: "CWP4#EB",
        },
        "CWP4#ELEC": {
          NAME: "CWP4#ELEC",
        },
        "CWP4#FAULT": {
          NAME: "CWP4#FAULT",
        },
        "CWP4#FAULT_CODE": {
          NAME: "CWP4#FAULT_CODE",
        },
        "CWP4#FAULT_RESET": {
          NAME: "CWP4#FAULT_RESET",
        },
        "CWP4#FAULT_VFD": {
          NAME: "CWP4#FAULT_VFD",
        },
        "CWP4#FLOW_RATED": {
          NAME: "CWP4#FLOW_RATED",
        },
        "CWP4#FREQ": {
          NAME: "CWP4#FREQ",
        },
        "CWP4#FREQ_SP": {
          NAME: "CWP4#FREQ_SP",
        },
        "CWP4#HRS": {
          NAME: "CWP4#HRS",
        },
        "CWP4#HRS_TOTAL": {
          NAME: "CWP4#HRS_TOTAL",
        },
        "CWP4#OFF": {
          NAME: "CWP4#OFF",
        },
        "CWP4#OFF_SP": {
          NAME: "CWP4#OFF_SP",
        },
        "CWP4#ON": {
          NAME: "CWP4#ON",
        },
        "CWP4#ONOFF": {
          NAME: "CWP4#ONOFF",
        },
        "CWP4#ONOFF_SP": {
          NAME: "CWP4#ONOFF_SP",
        },
        "CWP4#ONOFF_VFD": {
          NAME: "CWP4#ONOFF_VFD",
        },
        "CWP4#ONOFF_VFD_SP": {
          NAME: "CWP4#ONOFF_VFD_SP",
        },
        "CWP4#ON_SP": {
          NAME: "CWP4#ON_SP",
        },
        "CWP4#P": {
          NAME: "CWP4#P",
        },
        "CWP4#P_RATED": {
          NAME: "CWP4#P_RATED",
        },
        "CWP4#PR_INLET": {
          NAME: "CWP4#PR_INLET",
        },
        "CWP4#PR_OUTLET": {
          NAME: "CWP4#PR_OUTLET",
        },
        "CWP4#P_VFD": {
          NAME: "CWP4#P_VFD",
        },
        "CWP4#RANK": {
          NAME: "CWP4#RANK",
        },
        "CWP4#W": {
          NAME: "CWP4#W",
        },
        "CT1#AM": {
          NAME: "CT1#AM",
        },
        "CT1#COP": {
          NAME: "CT1#COP",
        },
        "CT1#COP_RATED": {
          NAME: "CT1#COP_RATED",
        },
        "CT1#EB": {
          NAME: "CT1#EB",
        },
        "CT1#ELEC": {
          NAME: "CT1#ELEC",
        },
        "CT1#FAULT": {
          NAME: "CT1#FAULT",
        },
        "CT1#FAULT_CODE": {
          NAME: "CT1#FAULT_CODE",
        },
        "CT1#FAULT_RESET": {
          NAME: "CT1#FAULT_RESET",
        },
        "CT1#FAULT_VFD": {
          NAME: "CT1#FAULT_VFD",
        },
        "CT1#FLOW_RATED": {
          NAME: "CT1#FLOW_RATED",
        },
        "CT1#FREQ": {
          NAME: "CT1#FREQ",
        },
        "CT1#FREQ_SP": {
          NAME: "CT1#FREQ_SP",
        },
        "CT1#HRS": {
          NAME: "CT1#HRS",
        },
        "CT1#HRS_TOTAL": {
          NAME: "CT1#HRS_TOTAL",
        },
        "CT1#OFF": {
          NAME: "CT1#OFF",
        },
        "CT1#OFF_SP": {
          NAME: "CT1#OFF_SP",
        },
        "CT1#ON": {
          NAME: "CT1#ON",
        },
        "CT1#ONOFF": {
          NAME: "CT1#ONOFF",
        },
        "CT1#ONOFF_SP": {
          NAME: "CT1#ONOFF_SP",
        },
        "CT1#ONOFF_VFD": {
          NAME: "CT1#ONOFF_VFD",
        },
        "CT1#ONOFF_VFD_SP": {
          NAME: "CT1#ONOFF_VFD_SP",
        },
        "CT1#ON_SP": {
          NAME: "CT1#ON_SP",
        },
        "CT1#P": {
          NAME: "CT1#P",
        },
        "CT1#P_RATED": {
          NAME: "CT1#P_RATED",
        },
        "CT1#P_VFD": {
          NAME: "CT1#P_VFD",
        },
        "CT1#RANK": {
          NAME: "CT1#RANK",
        },
        "CT1#W": {
          NAME: "CT1#W",
        },
        "CT2#AM": {
          NAME: "CT2#AM",
        },
        "CT2#COP": {
          NAME: "CT2#COP",
        },
        "CT2#COP_RATED": {
          NAME: "CT2#COP_RATED",
        },
        "CT2#EB": {
          NAME: "CT2#EB",
        },
        "CT2#ELEC": {
          NAME: "CT2#ELEC",
        },
        "CT2#FAULT": {
          NAME: "CT2#FAULT",
        },
        "CT2#FAULT_CODE": {
          NAME: "CT2#FAULT_CODE",
        },
        "CT2#FAULT_RESET": {
          NAME: "CT2#FAULT_RESET",
        },
        "CT2#FAULT_VFD": {
          NAME: "CT2#FAULT_VFD",
        },
        "CT2#FLOW_RATED": {
          NAME: "CT2#FLOW_RATED",
        },
        "CT2#FREQ": {
          NAME: "CT2#FREQ",
        },
        "CT2#FREQ_SP": {
          NAME: "CT2#FREQ_SP",
        },
        "CT2#HRS": {
          NAME: "CT2#HRS",
        },
        "CT2#HRS_TOTAL": {
          NAME: "CT2#HRS_TOTAL",
        },
        "CT2#OFF": {
          NAME: "CT2#OFF",
        },
        "CT2#OFF_SP": {
          NAME: "CT2#OFF_SP",
        },
        "CT2#ON": {
          NAME: "CT2#ON",
        },
        "CT2#ONOFF": {
          NAME: "CT2#ONOFF",
        },
        "CT2#ONOFF_SP": {
          NAME: "CT2#ONOFF_SP",
        },
        "CT2#ONOFF_VFD": {
          NAME: "CT2#ONOFF_VFD",
        },
        "CT2#ONOFF_VFD_SP": {
          NAME: "CT2#ONOFF_VFD_SP",
        },
        "CT2#ON_SP": {
          NAME: "CT2#ON_SP",
        },
        "CT2#P": {
          NAME: "CT2#P",
        },
        "CT2#P_RATED": {
          NAME: "CT2#P_RATED",
        },
        "CT2#P_VFD": {
          NAME: "CT2#P_VFD",
        },
        "CT2#RANK": {
          NAME: "CT2#RANK",
        },
        "CT2#W": {
          NAME: "CT2#W",
        },
        "CT3#AM": {
          NAME: "CT3#AM",
        },
        "CT3#COP": {
          NAME: "CT3#COP",
        },
        "CT3#COP_RATED": {
          NAME: "CT3#COP_RATED",
        },
        "CT3#EB": {
          NAME: "CT3#EB",
        },
        "CT3#ELEC": {
          NAME: "CT3#ELEC",
        },
        "CT3#FAULT": {
          NAME: "CT3#FAULT",
        },
        "CT3#FAULT_CODE": {
          NAME: "CT3#FAULT_CODE",
        },
        "CT3#FAULT_RESET": {
          NAME: "CT3#FAULT_RESET",
        },
        "CT3#FAULT_VFD": {
          NAME: "CT3#FAULT_VFD",
        },
        "CT3#FLOW_RATED": {
          NAME: "CT3#FLOW_RATED",
        },
        "CT3#FREQ": {
          NAME: "CT3#FREQ",
        },
        "CT3#FREQ_SP": {
          NAME: "CT3#FREQ_SP",
        },
        "CT3#HRS": {
          NAME: "CT3#HRS",
        },
        "CT3#HRS_TOTAL": {
          NAME: "CT3#HRS_TOTAL",
        },
        "CT3#OFF": {
          NAME: "CT3#OFF",
        },
        "CT3#OFF_SP": {
          NAME: "CT3#OFF_SP",
        },
        "CT3#ON": {
          NAME: "CT3#ON",
        },
        "CT3#ONOFF": {
          NAME: "CT3#ONOFF",
        },
        "CT3#ONOFF_SP": {
          NAME: "CT3#ONOFF_SP",
        },
        "CT3#ONOFF_VFD": {
          NAME: "CT3#ONOFF_VFD",
        },
        "CT3#ONOFF_VFD_SP": {
          NAME: "CT3#ONOFF_VFD_SP",
        },
        "CT3#ON_SP": {
          NAME: "CT3#ON_SP",
        },
        "CT3#P": {
          NAME: "CT3#P",
        },
        "CT3#P_RATED": {
          NAME: "CT3#P_RATED",
        },
        "CT3#P_VFD": {
          NAME: "CT3#P_VFD",
        },
        "CT3#RANK": {
          NAME: "CT3#RANK",
        },
        "CT3#W": {
          NAME: "CT3#W",
        },
        "CT4#AM": {
          NAME: "CT4#AM",
        },
        "CT4#COP": {
          NAME: "CT4#COP",
        },
        "CT4#COP_RATED": {
          NAME: "CT4#COP_RATED",
        },
        "CT4#EB": {
          NAME: "CT4#EB",
        },
        "CT4#ELEC": {
          NAME: "CT4#ELEC",
        },
        "CT4#FAULT": {
          NAME: "CT4#FAULT",
        },
        "CT4#FAULT_CODE": {
          NAME: "CT4#FAULT_CODE",
        },
        "CT4#FAULT_RESET": {
          NAME: "CT4#FAULT_RESET",
        },
        "CT4#FAULT_VFD": {
          NAME: "CT4#FAULT_VFD",
        },
        "CT4#FLOW_RATED": {
          NAME: "CT4#FLOW_RATED",
        },
        "CT4#FREQ": {
          NAME: "CT4#FREQ",
        },
        "CT4#FREQ_SP": {
          NAME: "CT4#FREQ_SP",
        },
        "CT4#HRS": {
          NAME: "CT4#HRS",
        },
        "CT4#HRS_TOTAL": {
          NAME: "CT4#HRS_TOTAL",
        },
        "CT4#OFF": {
          NAME: "CT4#OFF",
        },
        "CT4#OFF_SP": {
          NAME: "CT4#OFF_SP",
        },
        "CT4#ON": {
          NAME: "CT4#ON",
        },
        "CT4#ONOFF": {
          NAME: "CT4#ONOFF",
        },
        "CT4#ONOFF_SP": {
          NAME: "CT4#ONOFF_SP",
        },
        "CT4#ONOFF_VFD": {
          NAME: "CT4#ONOFF_VFD",
        },
        "CT4#ONOFF_VFD_SP": {
          NAME: "CT4#ONOFF_VFD_SP",
        },
        "CT4#ON_SP": {
          NAME: "CT4#ON_SP",
        },
        "CT4#P": {
          NAME: "CT4#P",
        },
        "CT4#P_RATED": {
          NAME: "CT4#P_RATED",
        },
        "CT4#P_VFD": {
          NAME: "CT4#P_VFD",
        },
        "CT4#RANK": {
          NAME: "CT4#RANK",
        },
        "CT4#W": {
          NAME: "CT4#W",
        },
        "V1#AM": {
          NAME: "V1#AM",
        },
        "V1#EB": {
          NAME: "V1#EB",
        },
        "V1#FAULT": {
          NAME: "V1#FAULT",
        },
        "V1#OFF": {
          NAME: "V1#OFF",
        },
        "V1#OFF_SP": {
          NAME: "V1#OFF_SP",
        },
        "V1#ON": {
          NAME: "V1#ON",
        },
        "V1#ONOFF": {
          NAME: "V1#ONOFF",
        },
        "V1#ONOFF_SP": {
          NAME: "V1#ONOFF_SP",
        },
        "V1#ON_SP": {
          NAME: "V1#ON_SP",
        },
        "V1#POS": {
          NAME: "V1#POS",
        },
        "V1#POS_SP": {
          NAME: "V1#POS_SP",
        },
        "V1#RANK": {
          NAME: "V1#RANK",
        },
        "V2#AM": {
          NAME: "V2#AM",
        },
        "V2#EB": {
          NAME: "V2#EB",
        },
        "V2#FAULT": {
          NAME: "V2#FAULT",
        },
        "V2#OFF": {
          NAME: "V2#OFF",
        },
        "V2#OFF_SP": {
          NAME: "V2#OFF_SP",
        },
        "V2#ON": {
          NAME: "V2#ON",
        },
        "V2#ONOFF": {
          NAME: "V2#ONOFF",
        },
        "V2#ONOFF_SP": {
          NAME: "V2#ONOFF_SP",
        },
        "V2#ON_SP": {
          NAME: "V2#ON_SP",
        },
        "V2#POS": {
          NAME: "V2#POS",
        },
        "V2#POS_SP": {
          NAME: "V2#POS_SP",
        },
        "V2#RANK": {
          NAME: "V2#RANK",
        },
        "V3#AM": {
          NAME: "V3#AM",
        },
        "V3#EB": {
          NAME: "V3#EB",
        },
        "V3#FAULT": {
          NAME: "V3#FAULT",
        },
        "V3#OFF": {
          NAME: "V3#OFF",
        },
        "V3#OFF_SP": {
          NAME: "V3#OFF_SP",
        },
        "V3#ON": {
          NAME: "V3#ON",
        },
        "V3#ONOFF": {
          NAME: "V3#ONOFF",
        },
        "V3#ONOFF_SP": {
          NAME: "V3#ONOFF_SP",
        },
        "V3#ON_SP": {
          NAME: "V3#ON_SP",
        },
        "V3#POS": {
          NAME: "V3#POS",
        },
        "V3#POS_SP": {
          NAME: "V3#POS_SP",
        },
        "V3#RANK": {
          NAME: "V3#RANK",
        },
        "V4#AM": {
          NAME: "V4#AM",
        },
        "V4#EB": {
          NAME: "V4#EB",
        },
        "V4#FAULT": {
          NAME: "V4#FAULT",
        },
        "V4#OFF": {
          NAME: "V4#OFF",
        },
        "V4#OFF_SP": {
          NAME: "V4#OFF_SP",
        },
        "V4#ON": {
          NAME: "V4#ON",
        },
        "V4#ONOFF": {
          NAME: "V4#ONOFF",
        },
        "V4#ONOFF_SP": {
          NAME: "V4#ONOFF_SP",
        },
        "V4#ON_SP": {
          NAME: "V4#ON_SP",
        },
        "V4#POS": {
          NAME: "V4#POS",
        },
        "V4#POS_SP": {
          NAME: "V4#POS_SP",
        },
        "V4#RANK": {
          NAME: "V4#RANK",
        },
        "V5#AM": {
          NAME: "V5#AM",
        },
        "V5#EB": {
          NAME: "V5#EB",
        },
        "V5#FAULT": {
          NAME: "V5#FAULT",
        },
        "V5#OFF": {
          NAME: "V5#OFF",
        },
        "V5#OFF_SP": {
          NAME: "V5#OFF_SP",
        },
        "V5#ON": {
          NAME: "V5#ON",
        },
        "V5#ONOFF": {
          NAME: "V5#ONOFF",
        },
        "V5#ONOFF_SP": {
          NAME: "V5#ONOFF_SP",
        },
        "V5#ON_SP": {
          NAME: "V5#ON_SP",
        },
        "V5#POS": {
          NAME: "V5#POS",
        },
        "V5#POS_SP": {
          NAME: "V5#POS_SP",
        },
        "V5#RANK": {
          NAME: "V5#RANK",
        },
        "V6#AM": {
          NAME: "V6#AM",
        },
        "V6#EB": {
          NAME: "V6#EB",
        },
        "V6#FAULT": {
          NAME: "V6#FAULT",
        },
        "V6#OFF": {
          NAME: "V6#OFF",
        },
        "V6#OFF_SP": {
          NAME: "V6#OFF_SP",
        },
        "V6#ON": {
          NAME: "V6#ON",
        },
        "V6#ONOFF": {
          NAME: "V6#ONOFF",
        },
        "V6#ONOFF_SP": {
          NAME: "V6#ONOFF_SP",
        },
        "V6#ON_SP": {
          NAME: "V6#ON_SP",
        },
        "V6#POS": {
          NAME: "V6#POS",
        },
        "V6#POS_SP": {
          NAME: "V6#POS_SP",
        },
        "V6#RANK": {
          NAME: "V6#RANK",
        },
        "V7#AM": {
          NAME: "V7#AM",
        },
        "V7#EB": {
          NAME: "V7#EB",
        },
        "V7#FAULT": {
          NAME: "V7#FAULT",
        },
        "V7#OFF": {
          NAME: "V7#OFF",
        },
        "V7#OFF_SP": {
          NAME: "V7#OFF_SP",
        },
        "V7#ON": {
          NAME: "V7#ON",
        },
        "V7#ONOFF": {
          NAME: "V7#ONOFF",
        },
        "V7#ONOFF_SP": {
          NAME: "V7#ONOFF_SP",
        },
        "V7#ON_SP": {
          NAME: "V7#ON_SP",
        },
        "V7#POS": {
          NAME: "V7#POS",
        },
        "V7#POS_SP": {
          NAME: "V7#POS_SP",
        },
        "V7#RANK": {
          NAME: "V7#RANK",
        },
        "V8#AM": {
          NAME: "V8#AM",
        },
        "V8#EB": {
          NAME: "V8#EB",
        },
        "V8#FAULT": {
          NAME: "V8#FAULT",
        },
        "V8#OFF": {
          NAME: "V8#OFF",
        },
        "V8#OFF_SP": {
          NAME: "V8#OFF_SP",
        },
        "V8#ON": {
          NAME: "V8#ON",
        },
        "V8#ONOFF": {
          NAME: "V8#ONOFF",
        },
        "V8#ONOFF_SP": {
          NAME: "V8#ONOFF_SP",
        },
        "V8#ON_SP": {
          NAME: "V8#ON_SP",
        },
        "V8#POS": {
          NAME: "V8#POS",
        },
        "V8#POS_SP": {
          NAME: "V8#POS_SP",
        },
        "V8#RANK": {
          NAME: "V8#RANK",
        },
        "V9#AM": {
          NAME: "V9#AM",
        },
        "V9#EB": {
          NAME: "V9#EB",
        },
        "V9#FAULT": {
          NAME: "V9#FAULT",
        },
        "V9#OFF": {
          NAME: "V9#OFF",
        },
        "V9#OFF_SP": {
          NAME: "V9#OFF_SP",
        },
        "V9#ON": {
          NAME: "V9#ON",
        },
        "V9#ONOFF": {
          NAME: "V9#ONOFF",
        },
        "V9#ONOFF_SP": {
          NAME: "V9#ONOFF_SP",
        },
        "V9#ON_SP": {
          NAME: "V9#ON_SP",
        },
        "V9#POS": {
          NAME: "V9#POS",
        },
        "V9#POS_SP": {
          NAME: "V9#POS_SP",
        },
        "V9#RANK": {
          NAME: "V9#RANK",
        },
        "V10#AM": {
          NAME: "V10#AM",
        },
        "V10#EB": {
          NAME: "V10#EB",
        },
        "V10#FAULT": {
          NAME: "V10#FAULT",
        },
        "V10#OFF": {
          NAME: "V10#OFF",
        },
        "V10#OFF_SP": {
          NAME: "V10#OFF_SP",
        },
        "V10#ON": {
          NAME: "V10#ON",
        },
        "V10#ONOFF": {
          NAME: "V10#ONOFF",
        },
        "V10#ONOFF_SP": {
          NAME: "V10#ONOFF_SP",
        },
        "V10#ON_SP": {
          NAME: "V10#ON_SP",
        },
        "V10#POS": {
          NAME: "V10#POS",
        },
        "V10#POS_SP": {
          NAME: "V10#POS_SP",
        },
        "V10#RANK": {
          NAME: "V10#RANK",
        },
        "V11#AM": {
          NAME: "V11#AM",
        },
        "V11#EB": {
          NAME: "V11#EB",
        },
        "V11#FAULT": {
          NAME: "V11#FAULT",
        },
        "V11#OFF": {
          NAME: "V11#OFF",
        },
        "V11#OFF_SP": {
          NAME: "V11#OFF_SP",
        },
        "V11#ON": {
          NAME: "V11#ON",
        },
        "V11#ONOFF": {
          NAME: "V11#ONOFF",
        },
        "V11#ONOFF_SP": {
          NAME: "V11#ONOFF_SP",
        },
        "V11#ON_SP": {
          NAME: "V11#ON_SP",
        },
        "V11#POS": {
          NAME: "V11#POS",
        },
        "V11#POS_SP": {
          NAME: "V11#POS_SP",
        },
        "V11#RANK": {
          NAME: "V11#RANK",
        },
        "V12#AM": {
          NAME: "V12#AM",
        },
        "V12#EB": {
          NAME: "V12#EB",
        },
        "V12#FAULT": {
          NAME: "V12#FAULT",
        },
        "V12#OFF": {
          NAME: "V12#OFF",
        },
        "V12#OFF_SP": {
          NAME: "V12#OFF_SP",
        },
        "V12#ON": {
          NAME: "V12#ON",
        },
        "V12#ONOFF": {
          NAME: "V12#ONOFF",
        },
        "V12#ONOFF_SP": {
          NAME: "V12#ONOFF_SP",
        },
        "V12#ON_SP": {
          NAME: "V12#ON_SP",
        },
        "V12#POS": {
          NAME: "V12#POS",
        },
        "V12#POS_SP": {
          NAME: "V12#POS_SP",
        },
        "V12#RANK": {
          NAME: "V12#RANK",
        },
        "V13#AM": {
          NAME: "V13#AM",
        },
        "V13#EB": {
          NAME: "V13#EB",
        },
        "V13#FAULT": {
          NAME: "V13#FAULT",
        },
        "V13#OFF": {
          NAME: "V13#OFF",
        },
        "V13#OFF_SP": {
          NAME: "V13#OFF_SP",
        },
        "V13#ON": {
          NAME: "V13#ON",
        },
        "V13#ONOFF": {
          NAME: "V13#ONOFF",
        },
        "V13#ONOFF_SP": {
          NAME: "V13#ONOFF_SP",
        },
        "V13#ON_SP": {
          NAME: "V13#ON_SP",
        },
        "V13#POS": {
          NAME: "V13#POS",
        },
        "V13#POS_SP": {
          NAME: "V13#POS_SP",
        },
        "V13#RANK": {
          NAME: "V13#RANK",
        },
        "V14#AM": {
          NAME: "V14#AM",
        },
        "V14#EB": {
          NAME: "V14#EB",
        },
        "V14#FAULT": {
          NAME: "V14#FAULT",
        },
        "V14#OFF": {
          NAME: "V14#OFF",
        },
        "V14#OFF_SP": {
          NAME: "V14#OFF_SP",
        },
        "V14#ON": {
          NAME: "V14#ON",
        },
        "V14#ONOFF": {
          NAME: "V14#ONOFF",
        },
        "V14#ONOFF_SP": {
          NAME: "V14#ONOFF_SP",
        },
        "V14#ON_SP": {
          NAME: "V14#ON_SP",
        },
        "V14#POS": {
          NAME: "V14#POS",
        },
        "V14#POS_SP": {
          NAME: "V14#POS_SP",
        },
        "V14#RANK": {
          NAME: "V14#RANK",
        },
        "V15#AM": {
          NAME: "V15#AM",
        },
        "V15#EB": {
          NAME: "V15#EB",
        },
        "V15#FAULT": {
          NAME: "V15#FAULT",
        },
        "V15#OFF": {
          NAME: "V15#OFF",
        },
        "V15#OFF_SP": {
          NAME: "V15#OFF_SP",
        },
        "V15#ON": {
          NAME: "V15#ON",
        },
        "V15#ONOFF": {
          NAME: "V15#ONOFF",
        },
        "V15#ONOFF_SP": {
          NAME: "V15#ONOFF_SP",
        },
        "V15#ON_SP": {
          NAME: "V15#ON_SP",
        },
        "V15#POS": {
          NAME: "V15#POS",
        },
        "V15#POS_SP": {
          NAME: "V15#POS_SP",
        },
        "V15#RANK": {
          NAME: "V15#RANK",
        },
        "V16#AM": {
          NAME: "V16#AM",
        },
        "V16#EB": {
          NAME: "V16#EB",
        },
        "V16#FAULT": {
          NAME: "V16#FAULT",
        },
        "V16#OFF": {
          NAME: "V16#OFF",
        },
        "V16#OFF_SP": {
          NAME: "V16#OFF_SP",
        },
        "V16#ON": {
          NAME: "V16#ON",
        },
        "V16#ONOFF": {
          NAME: "V16#ONOFF",
        },
        "V16#ONOFF_SP": {
          NAME: "V16#ONOFF_SP",
        },
        "V16#ON_SP": {
          NAME: "V16#ON_SP",
        },
        "V16#POS": {
          NAME: "V16#POS",
        },
        "V16#POS_SP": {
          NAME: "V16#POS_SP",
        },
        "V16#RANK": {
          NAME: "V16#RANK",
        },
      },
      CAP_NUM: 0,
    },
  },
  CAS_PLANTS: {},
  NO: 0,
  TYPE: "D0000",
  OTHERS: {},
  CAP_NUM: 0,
}

const projId = "123"

const { HVAC_PLANTS } = re || {}

const item = Object.keys(re.HVAC_PLANTS)?.[0]

// console.log("item==========>re.HVAC_PLANTS[item]", re.HVAC_PLANTS[item])

if (HVAC_PLANTS && !!Object.keys(HVAC_PLANTS)?.length) {
  const item = Object.keys(re.HVAC_PLANTS)?.[0]
  // 生成设备弹窗文件夹
  const modelid = "设备文件夹"
  // 设备弹窗
  const deviceModelMap = {} // 相当于给每个设备生成一个随机的id {CHLS: {…}, CHWPS: {…}, CWPS: {…}, CTS: {…}, DVS: {…}, …}
  const deviceNameMao = ["CHLS", "CHWPS", "CWPS", "CTS", "DVS"]
  const deviceName = ["制冷机", "冷冻泵", "冷却泵", "冷却塔", "阀门"]
  const deviceArr = []
  // item0是所有设备的key
  for (const item0 in re.HVAC_PLANTS[item]) {
    const n = deviceNameMao.indexOf(item0) // 将["CHLS", "CHWPS", "CWPS", "CTS", "DVS"] 过滤出来
    // 此时 item0 假设是CHLS 那此时的item0下面的例子
    // {"CHLS": {XGQuRqZBt69EtGurDNoVV7: {ONOFF_SP: {…}, AM: {…}, EB: {…}, ONOFF: {…}, ON: {…}, …}}}
    if (n > -1) {
      deviceModelMap[item0] = {}
      for (
        let i = 0;
        i < Object.keys(re.HVAC_PLANTS[item][item0]).length; // 有多台item0的设备(这里以CHLS为例子,说明有多台CHLS设备)
        i++
      ) {
        const t = Object.keys(re.HVAC_PLANTS[item][item0])[i]
        // 这里的t就是下面的值 t表示的是一台item0的设备的id
        // {XGQuRqZBt69EtGurDNoVV7: {ONOFF_SP: {…}, AM: {…}, EB: {…}, ONOFF: {…}, ON: {…}, …}}
        // console.log("t------>", t, Object.keys(re.HVAC_PLANTS[item][item0]))
        const sour = re.HVAC_PLANTS[item][item0][t] // 一台item0(例如chls)的设备的值 这里的值是当前设备下面的所有属性
        const result =
          item0 == "CHLS"
            ? chiller(sour)
            : item0 == "CHWPS" || item0 == "CWPS"
            ? pump(sour)
            : item0 == "CTS"
            ? tower(sour)
            : valves(sour)
        const id = nanoid(22)
        deviceArr.push({
          F_P_ID: projId,
          F_PT_ID: modelid,
          F_PAGE_ID: id,
          F_TITLE: deviceName[n] + (i + 1) + "页面",
          F_CONTENT: lz.encodeBase64(lz.compress(JSON.stringify(result))),
        })
        // console.log(deviceName[n] + (i + 1) + "页面" + "result: ", result)
        const mapname = item0 == "DVS" ? "VALVES" : item0
        // console.log("mapname====>", mapname, "item===>", item0, t, id)
        deviceModelMap[mapname] = { ...deviceModelMap[mapname], [t]: id }  // id是随机生成的一个id
      }
    }
  }

  // console.log("deviceModelMap=============>", deviceModelMap, deviceArr)
}

let source = {
  MODE_SYS: {
    NAME: "MODE_SYS",
  },
  ONECLICK_START: {
    NAME: "ONECLICK_START",
  },
  ONECLICK_STOP: {
    NAME: "ONECLICK_STOP",
  },
  ONECLICK_CANCEL: {
    NAME: "ONECLICK_CANCEL",
  },
  I_PCT_SP: {
    NAME: "I_PCT_SP",
  },
  I_PCT_BIG_SP: {
    NAME: "I_PCT_BIG_SP",
  },
  T_CHW_S_SP: {
    NAME: "T_CHW_S_SP",
  },
  DPR_CHW_SP: {
    NAME: "DPR_CHW_SP",
  },
  DT_CHW_SP: {
    NAME: "DT_CHW_SP",
  },
  T_CW_R_SP: {
    NAME: "T_CW_R_SP",
  },
  DT_CW_SP: {
    NAME: "DT_CW_SP",
  },
  FREQ_CHWP_SP: {
    NAME: "FREQ_CHWP_SP",
  },
  FREQ_CWP_SP: {
    NAME: "FREQ_CWP_SP",
  },
  FREQ_CT_SP: {
    NAME: "FREQ_CT_SP",
  },
  T_AHU_SA_SP: {
    NAME: "T_AHU_SA_SP",
  },
  FREQ_AHU_SAF_SP: {
    NAME: "FREQ_AHU_SAF_SP",
  },
  LOAD: {
    NAME: "LOAD",
  },
  LOAD_PRE: {
    NAME: "LOAD_PRE",
  },
  P_HVAC: {
    NAME: "P_HVAC",
  },
  P_PLANT: {
    NAME: "P_PLANT",
  },
  P_CH_GROUP: {
    NAME: "P_CH_GROUP",
  },
  P_CHWP_GROUP: {
    NAME: "P_CHWP_GROUP",
  },
  P_CWP_GROUP: {
    NAME: "P_CWP_GROUP",
  },
  P_CT_GROUP: {
    NAME: "P_CT_GROUP",
  },
  P_TERMINAL_GROUP: {
    NAME: "P_TERMINAL_GROUP",
  },
  ELEC_HVAC: {
    NAME: "ELEC_HVAC",
  },
  ELEC_PLANT: {
    NAME: "ELEC_PLANT",
  },
  ELEC_CH_GROUP: {
    NAME: "ELEC_CH_GROUP",
  },
  ELEC_CHWP_GROUP: {
    NAME: "ELEC_CHWP_GROUP",
  },
  ELEC_CWP_GROUP: {
    NAME: "ELEC_CWP_GROUP",
  },
  ELEC_CT_GROUP: {
    NAME: "ELEC_CT_GROUP",
  },
  ELEC_TERMINAL_GROUP: {
    NAME: "ELEC_TERMINAL_GROUP",
  },
  COP_HVAC: {
    NAME: "COP_HVAC",
  },
  COP_PLANT: {
    NAME: "COP_PLANT",
  },
  COP_CH_GROUP: {
    NAME: "COP_CH_GROUP",
  },
  COP_CHWP_GROUP: {
    NAME: "COP_CHWP_GROUP",
  },
  COP_CWP_GROUP: {
    NAME: "COP_CWP_GROUP",
  },
  COP_CT_GROUP: {
    NAME: "COP_CT_GROUP",
  },
  COP_TERMINAL_GROUP: {
    NAME: "COP_TERMINAL_GROUP",
  },
  I_PCT: {
    NAME: "I_PCT",
  },
  I_PCT_BIG: {
    NAME: "I_PCT_BIG",
  },
  T_CHW_S: {
    NAME: "T_CHW_S",
  },
  T_CHW_R: {
    NAME: "T_CHW_R",
  },
  DPR_CHW: {
    NAME: "DPR_CHW",
  },
  DT_CHW: {
    NAME: "DT_CHW",
  },
  T_CW_R: {
    NAME: "T_CW_R",
  },
  T_CW_S: {
    NAME: "T_CW_S",
  },
  FLOW_CHW: {
    NAME: "FLOW_CHW",
  },
  FLOW_CW: {
    NAME: "FLOW_CW",
  },
  DT_CW: {
    NAME: "DT_CW",
  },
  FREQ_CHWP: {
    NAME: "FREQ_CHWP",
  },
  FREQ_CWP: {
    NAME: "FREQ_CWP",
  },
  FREQ_CT: {
    NAME: "FREQ_CT",
  },
  T_AHU_SA: {
    NAME: "T_AHU_SA",
  },
  FREQ_AHU_SAF: {
    NAME: "FREQ_AHU_SAF",
  },
  PR_CHW_R: {
    NAME: "PR_CHW_R",
  },
  PR_CHW_S: {
    NAME: "PR_CHW_S",
  },
  LOAD_MAX: {
    NAME: "LOAD_MAX",
  },
  LOAD_MIN: {
    NAME: "LOAD_MIN",
  },
  FLOW_CHW_MAX: {
    NAME: "FLOW_CHW_MAX",
  },
  FLOW_CHW_MIX: {
    NAME: "FLOW_CHW_MIX",
  },
  FLOW_CW_MAX: {
    NAME: "FLOW_CW_MAX",
  },
  FLOW_CW_MIN: {
    NAME: "FLOW_CW_MIN",
  },
  DT_CW_APP_MAX: {
    NAME: "DT_CW_APP_MAX",
  },
  DT_CW_APP_MIN: {
    NAME: "DT_CW_APP_MIN",
  },
  T_CHW_S_MAX: {
    NAME: "T_CHW_S_MAX",
  },
  T_CHW_S_MIN: {
    NAME: "T_CHW_S_MIN",
  },
  T_CHW_S_STARTUP_MAX: {
    NAME: "T_CHW_S_STARTUP_MAX",
  },
  T_CHW_S_STARTUP_MIN: {
    NAME: "T_CHW_S_STARTUP_MIN",
  },
  DT_CHW_MAX: {
    NAME: "DT_CHW_MAX",
  },
  DT_CHW_MIN: {
    NAME: "DT_CHW_MIN",
  },
  DPR_CHW_MAX: {
    NAME: "DPR_CHW_MAX",
  },
  DPR_CHW_MIN: {
    NAME: "DPR_CHW_MIN",
  },
  T_CW_R_MAX: {
    NAME: "T_CW_R_MAX",
  },
  T_CW_R_MIN: {
    NAME: "T_CW_R_MIN",
  },
  DT_CW_MAX: {
    NAME: "DT_CW_MAX",
  },
  DT_CW_MIN: {
    NAME: "DT_CW_MIN",
  },
  I_PCT_MAX: {
    NAME: "I_PCT_MAX",
  },
  I_PCT_MIN: {
    NAME: "I_PCT_MIN",
  },
  I_PCT_STARTUP_MAX: {
    NAME: "I_PCT_STARTUP_MAX",
  },
  I_PCT_STARTUP_MIN: {
    NAME: "I_PCT_STARTUP_MIN",
  },
  I_PCT_BIG_MAX: {
    NAME: "I_PCT_BIG_MAX",
  },
  I_PCT_BIG_MIN: {
    NAME: "I_PCT_BIG_MIN",
  },
  I_PCT_BIG_STARTUP_MAX: {
    NAME: "I_PCT_BIG_STARTUP_MAX",
  },
  I_PCT_BIG_STARTUP_MIN: {
    NAME: "I_PCT_BIG_STARTUP_MIN",
  },
  FREQ_CHWP_MAX: {
    NAME: "FREQ_CHWP_MAX",
  },
  FREQ_CHWP_MIN: {
    NAME: "FREQ_CHWP_MIN",
  },
  FREQ_CHWP_STARTUP_MAX: {
    NAME: "FREQ_CHWP_STARTUP_MAX",
  },
  FREQ_CHWP_STARTUP_MIN: {
    NAME: "FREQ_CHWP_STARTUP_MIN",
  },
  FREQ_CWP_MAX: {
    NAME: "FREQ_CWP_MAX",
  },
  FREQ_CWP_MIN: {
    NAME: "FREQ_CWP_MIN",
  },
  FREQ_CWP_STARTUP_MAX: {
    NAME: "FREQ_CWP_STARTUP_MAX",
  },
  FREQ_CWP_STARTUP_MIN: {
    NAME: "FREQ_CWP_STARTUP_MIN",
  },
  FREQ_CT_MAX: {
    NAME: "FREQ_CT_MAX",
  },
  FREQ_CT_MIN: {
    NAME: "FREQ_CT_MIN",
  },
  FREQ_CT_STARTUP_MAX: {
    NAME: "FREQ_CT_STARTUP_MAX",
  },
  FREQ_CT_STARTUP_MIN: {
    NAME: "FREQ_CT_STARTUP_MIN",
  },
  T_AHU_SA_MAX: {
    NAME: "T_AHU_SA_MAX",
  },
  T_AHU_SA_MIN: {
    NAME: "T_AHU_SA_MIN",
  },
  T_AHU_SA_STARTUP_MAX: {
    NAME: "T_AHU_SA_STARTUP_MAX",
  },
  T_AHU_SA_STARTUP_MIN: {
    NAME: "T_AHU_SA_STARTUP_MIN",
  },
  FREQ_AHU_MAX: {
    NAME: "FREQ_AHU_MAX",
  },
  FREQ_AHU_MIN: {
    NAME: "FREQ_AHU_MIN",
  },
  FREQ_AHU_STARTUP_MAX: {
    NAME: "FREQ_AHU_STARTUP_MAX",
  },
  FREQ_AHU_STARTUP_MIN: {
    NAME: "FREQ_AHU_STARTUP_MIN",
  },
  FLOW_PUMP_MAX: {
    NAME: "FLOW_PUMP_MAX",
  },
  FLOW_PUMP_MIX: {
    NAME: "FLOW_PUMP_MIX",
  },
  TW_MAX: {
    NAME: "TW_MAX",
  },
  TW_MIN: {
    NAME: "TW_MIN",
  },
  SCHEDULE_AUTO: {
    NAME: "SCHEDULE_AUTO",
  },
  TIME_START_AUTO: {
    NAME: "TIME_START_AUTO",
  },
  TIME_STOP_AUTO: {
    NAME: "TIME_STOP_AUTO",
  },
  STARTUP_DELAY: {
    NAME: "STARTUP_DELAY",
  },
  STOP_DELAY: {
    NAME: "STOP_DELAY",
  },
  STEP_T: {
    NAME: "STEP_T",
  },
  STEP_FREQ: {
    NAME: "STEP_FREQ",
  },
  STEP_PR: {
    NAME: "STEP_PR",
  },
  T_RATE_ADD_CH: {
    NAME: "T_RATE_ADD_CH",
  },
  T_BIAS_ADD_CH_MIN: {
    NAME: "T_BIAS_ADD_CH_MIN",
  },
  I_PCT_ADD_CH_MIN: {
    NAME: "I_PCT_ADD_CH_MIN",
  },
  TIME_KEEP_ADD_CH: {
    NAME: "TIME_KEEP_ADD_CH",
  },
  T_BIAS_SUB_CH_MAX: {
    NAME: "T_BIAS_SUB_CH_MAX",
  },
  I_PCT_SUB_CH_SURPLUS: {
    NAME: "I_PCT_SUB_CH_SURPLUS",
  },
  TIME_KEEP_SUB_CH: {
    NAME: "TIME_KEEP_SUB_CH",
  },
  T_RATE_STEADY: {
    NAME: "T_RATE_STEADY",
  },
  P_RATE_STEADY: {
    NAME: "P_RATE_STEADY",
  },
  LOAD_RATE_STEADY: {
    NAME: "LOAD_RATE_STEADY",
  },
  FREQ_RATE_STEADY: {
    NAME: "FREQ_RATE_STEADY",
  },
  T_CHW_S_OPT_EB: {
    NAME: "T_CHW_S_OPT_EB",
  },
  DT_CHW_OPT_EB: {
    NAME: "DT_CHW_OPT_EB",
  },
  DPR_CHW_OPT_EB: {
    NAME: "DPR_CHW_OPT_EB",
  },
  FREQ_CHWP_OPT_EB: {
    NAME: "FREQ_CHWP_OPT_EB",
  },
  FREQ_CWP_OPT_EB: {
    NAME: "FREQ_CWP_OPT_EB",
  },
  FREQ_CT_OPT_EB: {
    NAME: "FREQ_CT_OPT_EB",
  },
  ADDSUB_CH_OPT_EB: {
    NAME: "ADDSUB_CH_OPT_EB",
  },
  ADDSUB_CT_OPT_EB: {
    NAME: "ADDSUB_CT_OPT_EB",
  },
  AHU_OPT_EB: {
    NAME: "AHU_OPT_EB",
  },
  DT_CW_OPT_EB: {
    NAME: "DT_CW_OPT_EB",
  },
  T_CW_R_OPT_EB: {
    NAME: "T_CW_R_OPT_EB",
  },
  T_AHU_SA_OPT_TYPE: {
    NAME: "T_AHU_SA_OPT_TYPE",
  },
  T_AHU_SA_OPT_EB: {
    NAME: "T_AHU_SA_OPT_EB",
  },
  MODE_AHU: {
    NAME: "MODE_AHU",
  },
  MODE_AHU_SP: {
    NAME: "MODE_AHU_SP",
  },
  MODE_AHU_OPT_EB: {
    NAME: "MODE_AHU_OPT_EB",
  },
  FREQ_AHU_OPT_EB: {
    NAME: "FREQ_AHU_OPT_EB",
  },
  V_AHU_OPT_EB: {
    NAME: "V_AHU_OPT_EB",
  },
  CHLS: {
    oM6qEMxe50PY3Jv1JGxGVi: {
      ONOFF_SP: {
        NAME: "CH1#ONOFF_SP",
      },
      AM: {
        NAME: "CH1#AM",
      },
      EB: {
        NAME: "CH1#EB",
      },
      ONOFF: {
        NAME: "CH1#ONOFF",
      },
      ON: {
        NAME: "CH1#ON",
      },
      OFF: {
        NAME: "CH1#OFF",
      },
      ON_SP: {
        NAME: "CH1#ON_SP",
      },
      OFF_SP: {
        NAME: "CH1#OFF_SP",
      },
      FAULT: {
        NAME: "CH1#FAULT",
      },
      FAULT_CODE: {
        NAME: "CH1#FAULT_CODE",
      },
      FAULT_RESET: {
        NAME: "CH1#FAULT_RESET",
      },
      T_CHW_S: {
        NAME: "CH1#T_CHW_S",
      },
      T_CHW_S_SP: {
        NAME: "CH1#T_CHW_S_SP",
      },
      HRS_TOTAL: {
        NAME: "CH1#HRS_TOTAL",
      },
      HRS: {
        NAME: "CH1#HRS",
      },
      I_PCT: {
        NAME: "CH1#I_PCT",
      },
      I_PCT_MAX_SP: {
        NAME: "CH1#I_PCT_MAX_SP",
      },
      T_EXHT: {
        NAME: "CH1#T_EXHT",
      },
      T_EVAP_ENT: {
        NAME: "CH1#T_EVAP_ENT",
      },
      T_EVAP_LEV: {
        NAME: "CH1#T_EVAP_LEV",
      },
      T_EVAP: {
        NAME: "CH1#T_EVAP",
      },
      PR_EVAP: {
        NAME: "CH1#PR_EVAP",
      },
      T_COND_ENT: {
        NAME: "CH1#T_COND_ENT",
      },
      T_COND_LEV: {
        NAME: "CH1#T_COND_LEV",
      },
      T_COND: {
        NAME: "CH1#T_COND",
      },
      PR_COND: {
        NAME: "CH1#PR_COND",
      },
      T_OIL: {
        NAME: "CH1#T_OIL",
      },
      DPR_OIL: {
        NAME: "CH1#DPR_OIL",
      },
      COUNT_SS: {
        NAME: "CH1#COUNT_SS",
      },
      RANK: {
        NAME: "CH1#RANK",
      },
      P: {
        NAME: "CH1#P",
      },
      W: {
        NAME: "CH1#W",
      },
      ELEC: {
        NAME: "CH1#ELEC",
      },
      I: {
        NAME: "CH1#I",
      },
      COP: {
        NAME: "CH1#COP",
      },
      MODE: {
        NAME: "CH1#MODE",
      },
      T_COND_PROTECT: {
        NAME: "CH1#T_COND_PROTECT",
      },
      PR_EXHT_PROTECT: {
        NAME: "CH1#PR_EXHT_PROTECT",
      },
      P_RATED: {
        NAME: "CH1#P_RATED",
      },
      LOAD_RATED: {
        NAME: "CH1#LOAD_RATED",
        VALUE: "2000",
        VALUE_O: 2000,
      },
      COP_RATED: {
        NAME: "CH1#COP_RATED",
      },
      FLOW_CHW_RATED: {
        NAME: "CH1#FLOW_CHW_RATED",
      },
      FLOW_CW_RATED: {
        NAME: "CH1#FLOW_CW_RATED",
      },
      PLR: {
        NAME: "CH1#PLR",
      },
      LOAD: {
        NAME: "CH1#LOAD",
      },
      FLOW_CHW: {
        NAME: "CH1#FLOW_CHW",
      },
      FLOW_CW: {
        NAME: "CH1#FLOW_CW",
      },
      FLOW_CHW_SWITCH: {
        NAME: "CH1#FLOW_CHW_SWITCH",
      },
      FLOW_CW_SWITCH: {
        NAME: "CH1#FLOW_CW_SWITCH",
      },
      T_CW_R: {
        NAME: "CH1#T_CW_R",
      },
      ONECLICK_START: {
        NAME: "CH1#ONECLICK_START",
      },
      ONECLICK_STOP: {
        NAME: "CH1#ONECLICK_STOP",
      },
      CHWPS: [
        {
          ELEC: {
            NAME: "CHWP1#ELEC",
          },
          ONOFF_SP: {
            NAME: "CHWP1#ONOFF_SP",
          },
          ONOFF: {
            NAME: "CHWP1#ONOFF",
          },
          ON: {
            NAME: "CHWP1#ON",
          },
          OFF: {
            NAME: "CHWP1#OFF",
          },
          ON_SP: {
            NAME: "CHWP1#ON_SP",
          },
          OFF_SP: {
            NAME: "CHWP1#OFF_SP",
          },
          AM: {
            NAME: "CHWP1#AM",
          },
          EB: {
            NAME: "CHWP1#EB",
          },
          FAULT: {
            NAME: "CHWP1#FAULT",
          },
          FAULT_CODE: {
            NAME: "CHWP1#FAULT_CODE",
          },
          FAULT_RESET: {
            NAME: "CHWP1#FAULT_RESET",
          },
          RANK: {
            NAME: "CHWP1#RANK",
          },
          PR_INLET: {
            NAME: "CHWP1#PR_INLET",
          },
          PR_OUTLET: {
            NAME: "CHWP1#PR_OUTLET",
          },
          HRS_TOTAL: {
            NAME: "CHWP1#HRS_TOTAL",
          },
          HRS: {
            NAME: "CHWP1#HRS",
          },
          P: {
            NAME: "CHWP1#P",
          },
          W: {
            NAME: "CHWP1#W",
          },
          COP: {
            NAME: "CHWP1#COP",
          },
          ONOFF_VFD_SP: {
            NAME: "CHWP1#ONOFF_VFD_SP",
          },
          ONOFF_VFD: {
            NAME: "CHWP1#ONOFF_VFD",
          },
          FREQ: {
            NAME: "CHWP1#FREQ",
          },
          FREQ_SP: {
            NAME: "CHWP1#FREQ_SP",
          },
          FAULT_VFD: {
            NAME: "CHWP1#FAULT_VFD",
          },
          P_VFD: {
            NAME: "CHWP1#P_VFD",
          },
          FLOW_RATED: {
            NAME: "CHWP1#FLOW_RATED",
          },
          P_RATED: {
            NAME: "CHWP1#P_RATED",
          },
          COP_RATED: {
            NAME: "CHWP1#COP_RATED",
          },
          ID: "SUbrIvPCme75m1DiOk5Qkm",
          NO: 1,
          NAME: "冷冻水泵#1",
          TYPE: "D0A1B",
          STATION_ID: "aKA0GGZa0NIQHgzurqjJIC",
          STATION_PREFIX_ORG: "HVC1#",
          DEVICE_PREFIX: "CHWP1#",
          SUITE_IDS: [
            "oM6qEMxe50PY3Jv1JGxGVi",
            "jXGJPr5bbu8Pm1azp1qVLz",
            "3T4PM4a_xeb9HSfb6CA2vP",
            "yxOjIyO9w9FfhRDEZmKWZC",
          ],
          VALVES: [],
          OTHERS: {},
          CAP_NUM: 0,
        },
        {
          ELEC: {
            NAME: "CHWP2#ELEC",
          },
          ONOFF_SP: {
            NAME: "CHWP2#ONOFF_SP",
          },
          ONOFF: {
            NAME: "CHWP2#ONOFF",
          },
          ON: {
            NAME: "CHWP2#ON",
          },
          OFF: {
            NAME: "CHWP2#OFF",
          },
          ON_SP: {
            NAME: "CHWP2#ON_SP",
          },
          OFF_SP: {
            NAME: "CHWP2#OFF_SP",
          },
          AM: {
            NAME: "CHWP2#AM",
          },
          EB: {
            NAME: "CHWP2#EB",
          },
          FAULT: {
            NAME: "CHWP2#FAULT",
          },
          FAULT_CODE: {
            NAME: "CHWP2#FAULT_CODE",
          },
          FAULT_RESET: {
            NAME: "CHWP2#FAULT_RESET",
          },
          RANK: {
            NAME: "CHWP2#RANK",
          },
          PR_INLET: {
            NAME: "CHWP2#PR_INLET",
          },
          PR_OUTLET: {
            NAME: "CHWP2#PR_OUTLET",
          },
          HRS_TOTAL: {
            NAME: "CHWP2#HRS_TOTAL",
          },
          HRS: {
            NAME: "CHWP2#HRS",
          },
          P: {
            NAME: "CHWP2#P",
          },
          W: {
            NAME: "CHWP2#W",
          },
          COP: {
            NAME: "CHWP2#COP",
          },
          ONOFF_VFD_SP: {
            NAME: "CHWP2#ONOFF_VFD_SP",
          },
          ONOFF_VFD: {
            NAME: "CHWP2#ONOFF_VFD",
          },
          FREQ: {
            NAME: "CHWP2#FREQ",
          },
          FREQ_SP: {
            NAME: "CHWP2#FREQ_SP",
          },
          FAULT_VFD: {
            NAME: "CHWP2#FAULT_VFD",
          },
          P_VFD: {
            NAME: "CHWP2#P_VFD",
          },
          FLOW_RATED: {
            NAME: "CHWP2#FLOW_RATED",
          },
          P_RATED: {
            NAME: "CHWP2#P_RATED",
          },
          COP_RATED: {
            NAME: "CHWP2#COP_RATED",
          },
          ID: "KJ7AxiKb6OCoOTfqVWkE12",
          NO: 2,
          NAME: "冷冻水泵#2",
          TYPE: "D0A1B",
          STATION_ID: "aKA0GGZa0NIQHgzurqjJIC",
          STATION_PREFIX_ORG: "HVC1#",
          DEVICE_PREFIX: "CHWP2#",
          SUITE_IDS: [
            "oM6qEMxe50PY3Jv1JGxGVi",
            "jXGJPr5bbu8Pm1azp1qVLz",
            "3T4PM4a_xeb9HSfb6CA2vP",
            "yxOjIyO9w9FfhRDEZmKWZC",
          ],
          VALVES: [],
          OTHERS: {},
          CAP_NUM: 0,
        },
        {
          ELEC: {
            NAME: "CHWP3#ELEC",
          },
          ONOFF_SP: {
            NAME: "CHWP3#ONOFF_SP",
          },
          ONOFF: {
            NAME: "CHWP3#ONOFF",
          },
          ON: {
            NAME: "CHWP3#ON",
          },
          OFF: {
            NAME: "CHWP3#OFF",
          },
          ON_SP: {
            NAME: "CHWP3#ON_SP",
          },
          OFF_SP: {
            NAME: "CHWP3#OFF_SP",
          },
          AM: {
            NAME: "CHWP3#AM",
          },
          EB: {
            NAME: "CHWP3#EB",
          },
          FAULT: {
            NAME: "CHWP3#FAULT",
          },
          FAULT_CODE: {
            NAME: "CHWP3#FAULT_CODE",
          },
          FAULT_RESET: {
            NAME: "CHWP3#FAULT_RESET",
          },
          RANK: {
            NAME: "CHWP3#RANK",
          },
          PR_INLET: {
            NAME: "CHWP3#PR_INLET",
          },
          PR_OUTLET: {
            NAME: "CHWP3#PR_OUTLET",
          },
          HRS_TOTAL: {
            NAME: "CHWP3#HRS_TOTAL",
          },
          HRS: {
            NAME: "CHWP3#HRS",
          },
          P: {
            NAME: "CHWP3#P",
          },
          W: {
            NAME: "CHWP3#W",
          },
          COP: {
            NAME: "CHWP3#COP",
          },
          ONOFF_VFD_SP: {
            NAME: "CHWP3#ONOFF_VFD_SP",
          },
          ONOFF_VFD: {
            NAME: "CHWP3#ONOFF_VFD",
          },
          FREQ: {
            NAME: "CHWP3#FREQ",
          },
          FREQ_SP: {
            NAME: "CHWP3#FREQ_SP",
          },
          FAULT_VFD: {
            NAME: "CHWP3#FAULT_VFD",
          },
          P_VFD: {
            NAME: "CHWP3#P_VFD",
          },
          FLOW_RATED: {
            NAME: "CHWP3#FLOW_RATED",
          },
          P_RATED: {
            NAME: "CHWP3#P_RATED",
          },
          COP_RATED: {
            NAME: "CHWP3#COP_RATED",
          },
          ID: "3JNiytZOf9Yvj9cFu76TrD",
          NO: 3,
          NAME: "冷冻水泵#3",
          TYPE: "D0A1B",
          STATION_ID: "aKA0GGZa0NIQHgzurqjJIC",
          STATION_PREFIX_ORG: "HVC1#",
          DEVICE_PREFIX: "CHWP3#",
          SUITE_IDS: [
            "oM6qEMxe50PY3Jv1JGxGVi",
            "jXGJPr5bbu8Pm1azp1qVLz",
            "3T4PM4a_xeb9HSfb6CA2vP",
            "yxOjIyO9w9FfhRDEZmKWZC",
          ],
          VALVES: [],
          OTHERS: {},
          CAP_NUM: 0,
        },
        {
          ELEC: {
            NAME: "CHWP4#ELEC",
          },
          ONOFF_SP: {
            NAME: "CHWP4#ONOFF_SP",
          },
          ONOFF: {
            NAME: "CHWP4#ONOFF",
          },
          ON: {
            NAME: "CHWP4#ON",
          },
          OFF: {
            NAME: "CHWP4#OFF",
          },
          ON_SP: {
            NAME: "CHWP4#ON_SP",
          },
          OFF_SP: {
            NAME: "CHWP4#OFF_SP",
          },
          AM: {
            NAME: "CHWP4#AM",
          },
          EB: {
            NAME: "CHWP4#EB",
          },
          FAULT: {
            NAME: "CHWP4#FAULT",
          },
          FAULT_CODE: {
            NAME: "CHWP4#FAULT_CODE",
          },
          FAULT_RESET: {
            NAME: "CHWP4#FAULT_RESET",
          },
          RANK: {
            NAME: "CHWP4#RANK",
          },
          PR_INLET: {
            NAME: "CHWP4#PR_INLET",
          },
          PR_OUTLET: {
            NAME: "CHWP4#PR_OUTLET",
          },
          HRS_TOTAL: {
            NAME: "CHWP4#HRS_TOTAL",
          },
          HRS: {
            NAME: "CHWP4#HRS",
          },
          P: {
            NAME: "CHWP4#P",
          },
          W: {
            NAME: "CHWP4#W",
          },
          COP: {
            NAME: "CHWP4#COP",
          },
          ONOFF_VFD_SP: {
            NAME: "CHWP4#ONOFF_VFD_SP",
          },
          ONOFF_VFD: {
            NAME: "CHWP4#ONOFF_VFD",
          },
          FREQ: {
            NAME: "CHWP4#FREQ",
          },
          FREQ_SP: {
            NAME: "CHWP4#FREQ_SP",
          },
          FAULT_VFD: {
            NAME: "CHWP4#FAULT_VFD",
          },
          P_VFD: {
            NAME: "CHWP4#P_VFD",
          },
          FLOW_RATED: {
            NAME: "CHWP4#FLOW_RATED",
          },
          P_RATED: {
            NAME: "CHWP4#P_RATED",
          },
          COP_RATED: {
            NAME: "CHWP4#COP_RATED",
          },
          ID: "OuSSIIufxo_z3LBn4vucpo",
          NO: 4,
          NAME: "冷冻水泵#4",
          TYPE: "D0A1B",
          STATION_ID: "aKA0GGZa0NIQHgzurqjJIC",
          STATION_PREFIX_ORG: "HVC1#",
          DEVICE_PREFIX: "CHWP4#",
          SUITE_IDS: [
            "oM6qEMxe50PY3Jv1JGxGVi",
            "jXGJPr5bbu8Pm1azp1qVLz",
            "3T4PM4a_xeb9HSfb6CA2vP",
            "yxOjIyO9w9FfhRDEZmKWZC",
          ],
          VALVES: [],
          OTHERS: {},
          CAP_NUM: 0,
        },
      ],
      SCHWPS: [],
      CWPS: [
        {
          ELEC: {
            NAME: "CWP1#ELEC",
          },
          ONOFF_SP: {
            NAME: "CWP1#ONOFF_SP",
          },
          ONOFF: {
            NAME: "CWP1#ONOFF",
          },
          ON: {
            NAME: "CWP1#ON",
          },
          OFF: {
            NAME: "CWP1#OFF",
          },
          ON_SP: {
            NAME: "CWP1#ON_SP",
          },
          OFF_SP: {
            NAME: "CWP1#OFF_SP",
          },
          AM: {
            NAME: "CWP1#AM",
          },
          EB: {
            NAME: "CWP1#EB",
          },
          FAULT: {
            NAME: "CWP1#FAULT",
          },
          FAULT_CODE: {
            NAME: "CWP1#FAULT_CODE",
          },
          FAULT_RESET: {
            NAME: "CWP1#FAULT_RESET",
          },
          RANK: {
            NAME: "CWP1#RANK",
          },
          PR_INLET: {
            NAME: "CWP1#PR_INLET",
          },
          PR_OUTLET: {
            NAME: "CWP1#PR_OUTLET",
          },
          HRS_TOTAL: {
            NAME: "CWP1#HRS_TOTAL",
          },
          HRS: {
            NAME: "CWP1#HRS",
          },
          P: {
            NAME: "CWP1#P",
          },
          W: {
            NAME: "CWP1#W",
          },
          COP: {
            NAME: "CWP1#COP",
          },
          ONOFF_VFD_SP: {
            NAME: "CWP1#ONOFF_VFD_SP",
          },
          ONOFF_VFD: {
            NAME: "CWP1#ONOFF_VFD",
          },
          FREQ: {
            NAME: "CWP1#FREQ",
          },
          FREQ_SP: {
            NAME: "CWP1#FREQ_SP",
          },
          FAULT_VFD: {
            NAME: "CWP1#FAULT_VFD",
          },
          P_VFD: {
            NAME: "CWP1#P_VFD",
          },
          FLOW_RATED: {
            NAME: "CWP1#FLOW_RATED",
          },
          P_RATED: {
            NAME: "CWP1#P_RATED",
          },
          COP_RATED: {
            NAME: "CWP1#COP_RATED",
          },
          ID: "iluAkpqnSdWRIN2YShuMOG",
          NO: 1,
          NAME: "冷却水泵#1",
          TYPE: "D0A1C",
          STATION_ID: "aKA0GGZa0NIQHgzurqjJIC",
          STATION_PREFIX_ORG: "HVC1#",
          DEVICE_PREFIX: "CWP1#",
          SUITE_IDS: [
            "oM6qEMxe50PY3Jv1JGxGVi",
            "jXGJPr5bbu8Pm1azp1qVLz",
            "3T4PM4a_xeb9HSfb6CA2vP",
            "yxOjIyO9w9FfhRDEZmKWZC",
          ],
          VALVES: [],
          OTHERS: {},
          CAP_NUM: 0,
        },
        {
          ELEC: {
            NAME: "CWP2#ELEC",
          },
          ONOFF_SP: {
            NAME: "CWP2#ONOFF_SP",
          },
          ONOFF: {
            NAME: "CWP2#ONOFF",
          },
          ON: {
            NAME: "CWP2#ON",
          },
          OFF: {
            NAME: "CWP2#OFF",
          },
          ON_SP: {
            NAME: "CWP2#ON_SP",
          },
          OFF_SP: {
            NAME: "CWP2#OFF_SP",
          },
          AM: {
            NAME: "CWP2#AM",
          },
          EB: {
            NAME: "CWP2#EB",
          },
          FAULT: {
            NAME: "CWP2#FAULT",
          },
          FAULT_CODE: {
            NAME: "CWP2#FAULT_CODE",
          },
          FAULT_RESET: {
            NAME: "CWP2#FAULT_RESET",
          },
          RANK: {
            NAME: "CWP2#RANK",
          },
          PR_INLET: {
            NAME: "CWP2#PR_INLET",
          },
          PR_OUTLET: {
            NAME: "CWP2#PR_OUTLET",
          },
          HRS_TOTAL: {
            NAME: "CWP2#HRS_TOTAL",
          },
          HRS: {
            NAME: "CWP2#HRS",
          },
          P: {
            NAME: "CWP2#P",
          },
          W: {
            NAME: "CWP2#W",
          },
          COP: {
            NAME: "CWP2#COP",
          },
          ONOFF_VFD_SP: {
            NAME: "CWP2#ONOFF_VFD_SP",
          },
          ONOFF_VFD: {
            NAME: "CWP2#ONOFF_VFD",
          },
          FREQ: {
            NAME: "CWP2#FREQ",
          },
          FREQ_SP: {
            NAME: "CWP2#FREQ_SP",
          },
          FAULT_VFD: {
            NAME: "CWP2#FAULT_VFD",
          },
          P_VFD: {
            NAME: "CWP2#P_VFD",
          },
          FLOW_RATED: {
            NAME: "CWP2#FLOW_RATED",
          },
          P_RATED: {
            NAME: "CWP2#P_RATED",
          },
          COP_RATED: {
            NAME: "CWP2#COP_RATED",
          },
          ID: "odiOJxe6bSWpNTswmoRilj",
          NO: 2,
          NAME: "冷却水泵#2",
          TYPE: "D0A1C",
          STATION_ID: "aKA0GGZa0NIQHgzurqjJIC",
          STATION_PREFIX_ORG: "HVC1#",
          DEVICE_PREFIX: "CWP2#",
          SUITE_IDS: [
            "oM6qEMxe50PY3Jv1JGxGVi",
            "jXGJPr5bbu8Pm1azp1qVLz",
            "3T4PM4a_xeb9HSfb6CA2vP",
            "yxOjIyO9w9FfhRDEZmKWZC",
          ],
          VALVES: [],
          OTHERS: {},
          CAP_NUM: 0,
        },
        {
          ELEC: {
            NAME: "CWP3#ELEC",
          },
          ONOFF_SP: {
            NAME: "CWP3#ONOFF_SP",
          },
          ONOFF: {
            NAME: "CWP3#ONOFF",
          },
          ON: {
            NAME: "CWP3#ON",
          },
          OFF: {
            NAME: "CWP3#OFF",
          },
          ON_SP: {
            NAME: "CWP3#ON_SP",
          },
          OFF_SP: {
            NAME: "CWP3#OFF_SP",
          },
          AM: {
            NAME: "CWP3#AM",
          },
          EB: {
            NAME: "CWP3#EB",
          },
          FAULT: {
            NAME: "CWP3#FAULT",
          },
          FAULT_CODE: {
            NAME: "CWP3#FAULT_CODE",
          },
          FAULT_RESET: {
            NAME: "CWP3#FAULT_RESET",
          },
          RANK: {
            NAME: "CWP3#RANK",
          },
          PR_INLET: {
            NAME: "CWP3#PR_INLET",
          },
          PR_OUTLET: {
            NAME: "CWP3#PR_OUTLET",
          },
          HRS_TOTAL: {
            NAME: "CWP3#HRS_TOTAL",
          },
          HRS: {
            NAME: "CWP3#HRS",
          },
          P: {
            NAME: "CWP3#P",
          },
          W: {
            NAME: "CWP3#W",
          },
          COP: {
            NAME: "CWP3#COP",
          },
          ONOFF_VFD_SP: {
            NAME: "CWP3#ONOFF_VFD_SP",
          },
          ONOFF_VFD: {
            NAME: "CWP3#ONOFF_VFD",
          },
          FREQ: {
            NAME: "CWP3#FREQ",
          },
          FREQ_SP: {
            NAME: "CWP3#FREQ_SP",
          },
          FAULT_VFD: {
            NAME: "CWP3#FAULT_VFD",
          },
          P_VFD: {
            NAME: "CWP3#P_VFD",
          },
          FLOW_RATED: {
            NAME: "CWP3#FLOW_RATED",
          },
          P_RATED: {
            NAME: "CWP3#P_RATED",
          },
          COP_RATED: {
            NAME: "CWP3#COP_RATED",
          },
          ID: "MHzDc8b58PDR6Cfqar9hr2",
          NO: 3,
          NAME: "冷却水泵#3",
          TYPE: "D0A1C",
          STATION_ID: "aKA0GGZa0NIQHgzurqjJIC",
          STATION_PREFIX_ORG: "HVC1#",
          DEVICE_PREFIX: "CWP3#",
          SUITE_IDS: [
            "oM6qEMxe50PY3Jv1JGxGVi",
            "jXGJPr5bbu8Pm1azp1qVLz",
            "3T4PM4a_xeb9HSfb6CA2vP",
            "yxOjIyO9w9FfhRDEZmKWZC",
          ],
          VALVES: [],
          OTHERS: {},
          CAP_NUM: 0,
        },
        {
          ELEC: {
            NAME: "CWP4#ELEC",
          },
          ONOFF_SP: {
            NAME: "CWP4#ONOFF_SP",
          },
          ONOFF: {
            NAME: "CWP4#ONOFF",
          },
          ON: {
            NAME: "CWP4#ON",
          },
          OFF: {
            NAME: "CWP4#OFF",
          },
          ON_SP: {
            NAME: "CWP4#ON_SP",
          },
          OFF_SP: {
            NAME: "CWP4#OFF_SP",
          },
          AM: {
            NAME: "CWP4#AM",
          },
          EB: {
            NAME: "CWP4#EB",
          },
          FAULT: {
            NAME: "CWP4#FAULT",
          },
          FAULT_CODE: {
            NAME: "CWP4#FAULT_CODE",
          },
          FAULT_RESET: {
            NAME: "CWP4#FAULT_RESET",
          },
          RANK: {
            NAME: "CWP4#RANK",
          },
          PR_INLET: {
            NAME: "CWP4#PR_INLET",
          },
          PR_OUTLET: {
            NAME: "CWP4#PR_OUTLET",
          },
          HRS_TOTAL: {
            NAME: "CWP4#HRS_TOTAL",
          },
          HRS: {
            NAME: "CWP4#HRS",
          },
          P: {
            NAME: "CWP4#P",
          },
          W: {
            NAME: "CWP4#W",
          },
          COP: {
            NAME: "CWP4#COP",
          },
          ONOFF_VFD_SP: {
            NAME: "CWP4#ONOFF_VFD_SP",
          },
          ONOFF_VFD: {
            NAME: "CWP4#ONOFF_VFD",
          },
          FREQ: {
            NAME: "CWP4#FREQ",
          },
          FREQ_SP: {
            NAME: "CWP4#FREQ_SP",
          },
          FAULT_VFD: {
            NAME: "CWP4#FAULT_VFD",
          },
          P_VFD: {
            NAME: "CWP4#P_VFD",
          },
          FLOW_RATED: {
            NAME: "CWP4#FLOW_RATED",
          },
          P_RATED: {
            NAME: "CWP4#P_RATED",
          },
          COP_RATED: {
            NAME: "CWP4#COP_RATED",
          },
          ID: "FFA5D3hZrwi9XXCRG0VP4J",
          NO: 4,
          NAME: "冷却水泵#4",
          TYPE: "D0A1C",
          STATION_ID: "aKA0GGZa0NIQHgzurqjJIC",
          STATION_PREFIX_ORG: "HVC1#",
          DEVICE_PREFIX: "CWP4#",
          SUITE_IDS: [
            "oM6qEMxe50PY3Jv1JGxGVi",
            "jXGJPr5bbu8Pm1azp1qVLz",
            "3T4PM4a_xeb9HSfb6CA2vP",
            "yxOjIyO9w9FfhRDEZmKWZC",
          ],
          VALVES: [],
          OTHERS: {},
          CAP_NUM: 0,
        },
      ],
      CTS: [
        {
          ONOFF_SP: {
            NAME: "CT1#ONOFF_SP",
          },
          ONOFF: {
            NAME: "CT1#ONOFF",
          },
          ON: {
            NAME: "CT1#ON",
          },
          OFF: {
            NAME: "CT1#OFF",
          },
          ON_SP: {
            NAME: "CT1#ON_SP",
          },
          OFF_SP: {
            NAME: "CT1#OFF_SP",
          },
          AM: {
            NAME: "CT1#AM",
          },
          EB: {
            NAME: "CT1#EB",
          },
          FAULT: {
            NAME: "CT1#FAULT",
          },
          FAULT_CODE: {
            NAME: "CT1#FAULT_CODE",
          },
          FAULT_RESET: {
            NAME: "CT1#FAULT_RESET",
          },
          RANK: {
            NAME: "CT1#RANK",
          },
          HRS_TOTAL: {
            NAME: "CT1#HRS_TOTAL",
          },
          HRS: {
            NAME: "CT1#HRS",
          },
          P: {
            NAME: "CT1#P",
          },
          W: {
            NAME: "CT1#W",
          },
          ELEC: {
            NAME: "CT1#ELEC",
          },
          COP: {
            NAME: "CT1#COP",
          },
          ONOFF_VFD_SP: {
            NAME: "CT1#ONOFF_VFD_SP",
          },
          ONOFF_VFD: {
            NAME: "CT1#ONOFF_VFD",
          },
          FREQ: {
            NAME: "CT1#FREQ",
          },
          FREQ_SP: {
            NAME: "CT1#FREQ_SP",
          },
          FAULT_VFD: {
            NAME: "CT1#FAULT_VFD",
          },
          P_VFD: {
            NAME: "CT1#P_VFD",
          },
          FLOW_RATED: {
            NAME: "CT1#FLOW_RATED",
          },
          P_RATED: {
            NAME: "CT1#P_RATED",
          },
          COP_RATED: {
            NAME: "CT1#COP_RATED",
          },
          ID: "ye5MqHy0TbtrtErh0XmZCn",
          NO: 1,
          NAME: "冷却塔#1",
          TYPE: "D0A1D",
          STATION_ID: "aKA0GGZa0NIQHgzurqjJIC",
          STATION_PREFIX_ORG: "HVC1#",
          DEVICE_PREFIX: "CT1#",
          SUITE_IDS: [
            "oM6qEMxe50PY3Jv1JGxGVi",
            "jXGJPr5bbu8Pm1azp1qVLz",
            "3T4PM4a_xeb9HSfb6CA2vP",
            "yxOjIyO9w9FfhRDEZmKWZC",
          ],
          VALVES: [
            {
              ONOFF_SP: {
                NAME: "V9#ONOFF_SP",
              },
              ONOFF: {
                NAME: "V9#ONOFF",
              },
              OFF: {
                NAME: "V9#OFF",
              },
              ON: {
                NAME: "V9#ON",
              },
              OFF_SP: {
                NAME: "V9#OFF_SP",
              },
              ON_SP: {
                NAME: "V9#ON_SP",
              },
              EB: {
                NAME: "V9#EB",
              },
              AM: {
                NAME: "V9#AM",
              },
              FAULT: {
                NAME: "V9#FAULT",
              },
              NAME: "阀门#9",
              TYPE: "D0A30",
              ID: "iQ9nVLl2uBpstp2iKCzqI3",
              NO: 9,
              VALVES: [],
            },
            {
              ONOFF_SP: {
                NAME: "V10#ONOFF_SP",
              },
              ONOFF: {
                NAME: "V10#ONOFF",
              },
              OFF: {
                NAME: "V10#OFF",
              },
              ON: {
                NAME: "V10#ON",
              },
              OFF_SP: {
                NAME: "V10#OFF_SP",
              },
              ON_SP: {
                NAME: "V10#ON_SP",
              },
              EB: {
                NAME: "V10#EB",
              },
              AM: {
                NAME: "V10#AM",
              },
              FAULT: {
                NAME: "V10#FAULT",
              },
              NAME: "阀门#10",
              TYPE: "D0A30",
              ID: "iUppCA_gPRCe2Lka2gUt8m",
              NO: 10,
              VALVES: [],
            },
          ],
          OTHERS: {},
          CAP_NUM: 0,
        },
        {
          ONOFF_SP: {
            NAME: "CT2#ONOFF_SP",
          },
          ONOFF: {
            NAME: "CT2#ONOFF",
          },
          ON: {
            NAME: "CT2#ON",
          },
          OFF: {
            NAME: "CT2#OFF",
          },
          ON_SP: {
            NAME: "CT2#ON_SP",
          },
          OFF_SP: {
            NAME: "CT2#OFF_SP",
          },
          AM: {
            NAME: "CT2#AM",
          },
          EB: {
            NAME: "CT2#EB",
          },
          FAULT: {
            NAME: "CT2#FAULT",
          },
          FAULT_CODE: {
            NAME: "CT2#FAULT_CODE",
          },
          FAULT_RESET: {
            NAME: "CT2#FAULT_RESET",
          },
          RANK: {
            NAME: "CT2#RANK",
          },
          HRS_TOTAL: {
            NAME: "CT2#HRS_TOTAL",
          },
          HRS: {
            NAME: "CT2#HRS",
          },
          P: {
            NAME: "CT2#P",
          },
          W: {
            NAME: "CT2#W",
          },
          ELEC: {
            NAME: "CT2#ELEC",
          },
          COP: {
            NAME: "CT2#COP",
          },
          ONOFF_VFD_SP: {
            NAME: "CT2#ONOFF_VFD_SP",
          },
          ONOFF_VFD: {
            NAME: "CT2#ONOFF_VFD",
          },
          FREQ: {
            NAME: "CT2#FREQ",
          },
          FREQ_SP: {
            NAME: "CT2#FREQ_SP",
          },
          FAULT_VFD: {
            NAME: "CT2#FAULT_VFD",
          },
          P_VFD: {
            NAME: "CT2#P_VFD",
          },
          FLOW_RATED: {
            NAME: "CT2#FLOW_RATED",
          },
          P_RATED: {
            NAME: "CT2#P_RATED",
          },
          COP_RATED: {
            NAME: "CT2#COP_RATED",
          },
          ID: "qfwQBrtCEQjwZREDhh8ovp",
          NO: 2,
          NAME: "冷却塔#2",
          TYPE: "D0A1D",
          STATION_ID: "aKA0GGZa0NIQHgzurqjJIC",
          STATION_PREFIX_ORG: "HVC1#",
          DEVICE_PREFIX: "CT2#",
          SUITE_IDS: [
            "oM6qEMxe50PY3Jv1JGxGVi",
            "jXGJPr5bbu8Pm1azp1qVLz",
            "3T4PM4a_xeb9HSfb6CA2vP",
            "yxOjIyO9w9FfhRDEZmKWZC",
          ],
          VALVES: [
            {
              ONOFF_SP: {
                NAME: "V11#ONOFF_SP",
              },
              ONOFF: {
                NAME: "V11#ONOFF",
              },
              OFF: {
                NAME: "V11#OFF",
              },
              ON: {
                NAME: "V11#ON",
              },
              OFF_SP: {
                NAME: "V11#OFF_SP",
              },
              ON_SP: {
                NAME: "V11#ON_SP",
              },
              EB: {
                NAME: "V11#EB",
              },
              AM: {
                NAME: "V11#AM",
              },
              FAULT: {
                NAME: "V11#FAULT",
              },
              NAME: "阀门#11",
              TYPE: "D0A30",
              ID: "jvibORBfgRlq_5PkBOTiIr",
              NO: 11,
              VALVES: [],
            },
            {
              ONOFF_SP: {
                NAME: "V12#ONOFF_SP",
              },
              ONOFF: {
                NAME: "V12#ONOFF",
              },
              OFF: {
                NAME: "V12#OFF",
              },
              ON: {
                NAME: "V12#ON",
              },
              OFF_SP: {
                NAME: "V12#OFF_SP",
              },
              ON_SP: {
                NAME: "V12#ON_SP",
              },
              EB: {
                NAME: "V12#EB",
              },
              AM: {
                NAME: "V12#AM",
              },
              FAULT: {
                NAME: "V12#FAULT",
              },
              NAME: "阀门#12",
              TYPE: "D0A30",
              ID: "Euiwh8PYCXq_7ozW8gXO2t",
              NO: 12,
              VALVES: [],
            },
          ],
          OTHERS: {},
          CAP_NUM: 0,
        },
        {
          ONOFF_SP: {
            NAME: "CT3#ONOFF_SP",
          },
          ONOFF: {
            NAME: "CT3#ONOFF",
          },
          ON: {
            NAME: "CT3#ON",
          },
          OFF: {
            NAME: "CT3#OFF",
          },
          ON_SP: {
            NAME: "CT3#ON_SP",
          },
          OFF_SP: {
            NAME: "CT3#OFF_SP",
          },
          AM: {
            NAME: "CT3#AM",
          },
          EB: {
            NAME: "CT3#EB",
          },
          FAULT: {
            NAME: "CT3#FAULT",
          },
          FAULT_CODE: {
            NAME: "CT3#FAULT_CODE",
          },
          FAULT_RESET: {
            NAME: "CT3#FAULT_RESET",
          },
          RANK: {
            NAME: "CT3#RANK",
          },
          HRS_TOTAL: {
            NAME: "CT3#HRS_TOTAL",
          },
          HRS: {
            NAME: "CT3#HRS",
          },
          P: {
            NAME: "CT3#P",
          },
          W: {
            NAME: "CT3#W",
          },
          ELEC: {
            NAME: "CT3#ELEC",
          },
          COP: {
            NAME: "CT3#COP",
          },
          ONOFF_VFD_SP: {
            NAME: "CT3#ONOFF_VFD_SP",
          },
          ONOFF_VFD: {
            NAME: "CT3#ONOFF_VFD",
          },
          FREQ: {
            NAME: "CT3#FREQ",
          },
          FREQ_SP: {
            NAME: "CT3#FREQ_SP",
          },
          FAULT_VFD: {
            NAME: "CT3#FAULT_VFD",
          },
          P_VFD: {
            NAME: "CT3#P_VFD",
          },
          FLOW_RATED: {
            NAME: "CT3#FLOW_RATED",
          },
          P_RATED: {
            NAME: "CT3#P_RATED",
          },
          COP_RATED: {
            NAME: "CT3#COP_RATED",
          },
          ID: "z9kNrWKwhokZokO49Joila",
          NO: 3,
          NAME: "冷却塔#3",
          TYPE: "D0A1D",
          STATION_ID: "aKA0GGZa0NIQHgzurqjJIC",
          STATION_PREFIX_ORG: "HVC1#",
          DEVICE_PREFIX: "CT3#",
          SUITE_IDS: [
            "oM6qEMxe50PY3Jv1JGxGVi",
            "jXGJPr5bbu8Pm1azp1qVLz",
            "3T4PM4a_xeb9HSfb6CA2vP",
            "yxOjIyO9w9FfhRDEZmKWZC",
          ],
          VALVES: [
            {
              ONOFF_SP: {
                NAME: "V13#ONOFF_SP",
              },
              ONOFF: {
                NAME: "V13#ONOFF",
              },
              OFF: {
                NAME: "V13#OFF",
              },
              ON: {
                NAME: "V13#ON",
              },
              OFF_SP: {
                NAME: "V13#OFF_SP",
              },
              ON_SP: {
                NAME: "V13#ON_SP",
              },
              EB: {
                NAME: "V13#EB",
              },
              AM: {
                NAME: "V13#AM",
              },
              FAULT: {
                NAME: "V13#FAULT",
              },
              NAME: "阀门#13",
              TYPE: "D0A30",
              ID: "e9_W9b6otoLOnFZrFJXLRi",
              NO: 13,
              VALVES: [],
            },
            {
              ONOFF_SP: {
                NAME: "V14#ONOFF_SP",
              },
              ONOFF: {
                NAME: "V14#ONOFF",
              },
              OFF: {
                NAME: "V14#OFF",
              },
              ON: {
                NAME: "V14#ON",
              },
              OFF_SP: {
                NAME: "V14#OFF_SP",
              },
              ON_SP: {
                NAME: "V14#ON_SP",
              },
              EB: {
                NAME: "V14#EB",
              },
              AM: {
                NAME: "V14#AM",
              },
              FAULT: {
                NAME: "V14#FAULT",
              },
              NAME: "阀门#14",
              TYPE: "D0A30",
              ID: "0hULtajjeOLqMtTyQWPxWA",
              NO: 14,
              VALVES: [],
            },
          ],
          OTHERS: {},
          CAP_NUM: 0,
        },
        {
          ONOFF_SP: {
            NAME: "CT4#ONOFF_SP",
          },
          ONOFF: {
            NAME: "CT4#ONOFF",
          },
          ON: {
            NAME: "CT4#ON",
          },
          OFF: {
            NAME: "CT4#OFF",
          },
          ON_SP: {
            NAME: "CT4#ON_SP",
          },
          OFF_SP: {
            NAME: "CT4#OFF_SP",
          },
          AM: {
            NAME: "CT4#AM",
          },
          EB: {
            NAME: "CT4#EB",
          },
          FAULT: {
            NAME: "CT4#FAULT",
          },
          FAULT_CODE: {
            NAME: "CT4#FAULT_CODE",
          },
          FAULT_RESET: {
            NAME: "CT4#FAULT_RESET",
          },
          RANK: {
            NAME: "CT4#RANK",
          },
          HRS_TOTAL: {
            NAME: "CT4#HRS_TOTAL",
          },
          HRS: {
            NAME: "CT4#HRS",
          },
          P: {
            NAME: "CT4#P",
          },
          W: {
            NAME: "CT4#W",
          },
          ELEC: {
            NAME: "CT4#ELEC",
          },
          COP: {
            NAME: "CT4#COP",
          },
          ONOFF_VFD_SP: {
            NAME: "CT4#ONOFF_VFD_SP",
          },
          ONOFF_VFD: {
            NAME: "CT4#ONOFF_VFD",
          },
          FREQ: {
            NAME: "CT4#FREQ",
          },
          FREQ_SP: {
            NAME: "CT4#FREQ_SP",
          },
          FAULT_VFD: {
            NAME: "CT4#FAULT_VFD",
          },
          P_VFD: {
            NAME: "CT4#P_VFD",
          },
          FLOW_RATED: {
            NAME: "CT4#FLOW_RATED",
          },
          P_RATED: {
            NAME: "CT4#P_RATED",
          },
          COP_RATED: {
            NAME: "CT4#COP_RATED",
          },
          ID: "fKkvAEuijqotichFttlIKF",
          NO: 4,
          NAME: "冷却塔#4",
          TYPE: "D0A1D",
          STATION_ID: "aKA0GGZa0NIQHgzurqjJIC",
          STATION_PREFIX_ORG: "HVC1#",
          DEVICE_PREFIX: "CT4#",
          SUITE_IDS: [
            "oM6qEMxe50PY3Jv1JGxGVi",
            "jXGJPr5bbu8Pm1azp1qVLz",
            "3T4PM4a_xeb9HSfb6CA2vP",
            "yxOjIyO9w9FfhRDEZmKWZC",
          ],
          VALVES: [
            {
              ONOFF_SP: {
                NAME: "V15#ONOFF_SP",
              },
              ONOFF: {
                NAME: "V15#ONOFF",
              },
              OFF: {
                NAME: "V15#OFF",
              },
              ON: {
                NAME: "V15#ON",
              },
              OFF_SP: {
                NAME: "V15#OFF_SP",
              },
              ON_SP: {
                NAME: "V15#ON_SP",
              },
              EB: {
                NAME: "V15#EB",
              },
              AM: {
                NAME: "V15#AM",
              },
              FAULT: {
                NAME: "V15#FAULT",
              },
              NAME: "阀门#15",
              TYPE: "D0A30",
              ID: "eoRbD025SCKNBCvpFs1btn",
              NO: 15,
              VALVES: [],
            },
            {
              ONOFF_SP: {
                NAME: "V16#ONOFF_SP",
              },
              ONOFF: {
                NAME: "V16#ONOFF",
              },
              OFF: {
                NAME: "V16#OFF",
              },
              ON: {
                NAME: "V16#ON",
              },
              OFF_SP: {
                NAME: "V16#OFF_SP",
              },
              ON_SP: {
                NAME: "V16#ON_SP",
              },
              EB: {
                NAME: "V16#EB",
              },
              AM: {
                NAME: "V16#AM",
              },
              FAULT: {
                NAME: "V16#FAULT",
              },
              NAME: "阀门#16",
              TYPE: "D0A30",
              ID: "wggnS6uBEo1qHuOEoT0atb",
              NO: 16,
              VALVES: [],
            },
          ],
          OTHERS: {},
          CAP_NUM: 0,
        },
      ],
      ID: "oM6qEMxe50PY3Jv1JGxGVi",
      NO: 1,
      NAME: "制冷机#1",
      TYPE: "D0A1A",
      STATION_ID: "aKA0GGZa0NIQHgzurqjJIC",
      STATION_PREFIX_ORG: "HVC1#",
      DEVICE_PREFIX: "CH1#",
      SUITE_IDS: [],
      VALVES: [
        {
          ONOFF_SP: {
            NAME: "V1#ONOFF_SP",
          },
          ONOFF: {
            NAME: "V1#ONOFF",
          },
          OFF: {
            NAME: "V1#OFF",
          },
          ON: {
            NAME: "V1#ON",
          },
          OFF_SP: {
            NAME: "V1#OFF_SP",
          },
          ON_SP: {
            NAME: "V1#ON_SP",
          },
          EB: {
            NAME: "V1#EB",
          },
          AM: {
            NAME: "V1#AM",
          },
          FAULT: {
            NAME: "V1#FAULT",
          },
          NAME: "阀门#1",
          TYPE: "D0A30",
          ID: "8HzAnyOaoKKlVfgBK60j8x",
          NO: 1,
          VALVES: [],
        },
        {
          ONOFF_SP: {
            NAME: "V2#ONOFF_SP",
          },
          ONOFF: {
            NAME: "V2#ONOFF",
          },
          OFF: {
            NAME: "V2#OFF",
          },
          ON: {
            NAME: "V2#ON",
          },
          OFF_SP: {
            NAME: "V2#OFF_SP",
          },
          ON_SP: {
            NAME: "V2#ON_SP",
          },
          EB: {
            NAME: "V2#EB",
          },
          AM: {
            NAME: "V2#AM",
          },
          FAULT: {
            NAME: "V2#FAULT",
          },
          NAME: "阀门#2",
          TYPE: "D0A30",
          ID: "vagdLWwY59_vOksKgsos34",
          NO: 2,
          VALVES: [],
        },
      ],
      OTHERS: {},
      CAP_NUM: 0,
    },
    jXGJPr5bbu8Pm1azp1qVLz: {
      ONOFF_SP: {
        NAME: "CH2#ONOFF_SP",
      },
      AM: {
        NAME: "CH2#AM",
      },
      EB: {
        NAME: "CH2#EB",
      },
      ONOFF: {
        NAME: "CH2#ONOFF",
      },
      ON: {
        NAME: "CH2#ON",
      },
      OFF: {
        NAME: "CH2#OFF",
      },
      ON_SP: {
        NAME: "CH2#ON_SP",
      },
      OFF_SP: {
        NAME: "CH2#OFF_SP",
      },
      FAULT: {
        NAME: "CH2#FAULT",
      },
      FAULT_CODE: {
        NAME: "CH2#FAULT_CODE",
      },
      FAULT_RESET: {
        NAME: "CH2#FAULT_RESET",
      },
      T_CHW_S: {
        NAME: "CH2#T_CHW_S",
      },
      T_CHW_S_SP: {
        NAME: "CH2#T_CHW_S_SP",
      },
      HRS_TOTAL: {
        NAME: "CH2#HRS_TOTAL",
      },
      HRS: {
        NAME: "CH2#HRS",
      },
      I_PCT: {
        NAME: "CH2#I_PCT",
      },
      I_PCT_MAX_SP: {
        NAME: "CH2#I_PCT_MAX_SP",
      },
      T_EXHT: {
        NAME: "CH2#T_EXHT",
      },
      T_EVAP_ENT: {
        NAME: "CH2#T_EVAP_ENT",
      },
      T_EVAP_LEV: {
        NAME: "CH2#T_EVAP_LEV",
      },
      T_EVAP: {
        NAME: "CH2#T_EVAP",
      },
      PR_EVAP: {
        NAME: "CH2#PR_EVAP",
      },
      T_COND_ENT: {
        NAME: "CH2#T_COND_ENT",
      },
      T_COND_LEV: {
        NAME: "CH2#T_COND_LEV",
      },
      T_COND: {
        NAME: "CH2#T_COND",
      },
      PR_COND: {
        NAME: "CH2#PR_COND",
      },
      T_OIL: {
        NAME: "CH2#T_OIL",
      },
      DPR_OIL: {
        NAME: "CH2#DPR_OIL",
      },
      COUNT_SS: {
        NAME: "CH2#COUNT_SS",
      },
      RANK: {
        NAME: "CH2#RANK",
      },
      P: {
        NAME: "CH2#P",
      },
      W: {
        NAME: "CH2#W",
      },
      ELEC: {
        NAME: "CH2#ELEC",
      },
      I: {
        NAME: "CH2#I",
      },
      COP: {
        NAME: "CH2#COP",
      },
      MODE: {
        NAME: "CH2#MODE",
      },
      T_COND_PROTECT: {
        NAME: "CH2#T_COND_PROTECT",
      },
      PR_EXHT_PROTECT: {
        NAME: "CH2#PR_EXHT_PROTECT",
      },
      P_RATED: {
        NAME: "CH2#P_RATED",
      },
      LOAD_RATED: {
        NAME: "CH2#LOAD_RATED",
        VALUE: "2000",
        VALUE_O: 2000,
      },
      COP_RATED: {
        NAME: "CH2#COP_RATED",
      },
      FLOW_CHW_RATED: {
        NAME: "CH2#FLOW_CHW_RATED",
      },
      FLOW_CW_RATED: {
        NAME: "CH2#FLOW_CW_RATED",
      },
      PLR: {
        NAME: "CH2#PLR",
      },
      LOAD: {
        NAME: "CH2#LOAD",
      },
      FLOW_CHW: {
        NAME: "CH2#FLOW_CHW",
      },
      FLOW_CW: {
        NAME: "CH2#FLOW_CW",
      },
      FLOW_CHW_SWITCH: {
        NAME: "CH2#FLOW_CHW_SWITCH",
      },
      FLOW_CW_SWITCH: {
        NAME: "CH2#FLOW_CW_SWITCH",
      },
      T_CW_R: {
        NAME: "CH2#T_CW_R",
      },
      ONECLICK_START: {
        NAME: "CH2#ONECLICK_START",
      },
      ONECLICK_STOP: {
        NAME: "CH2#ONECLICK_STOP",
      },
      CHWPS: [
        {
          ELEC: {
            NAME: "CHWP1#ELEC",
          },
          ONOFF_SP: {
            NAME: "CHWP1#ONOFF_SP",
          },
          ONOFF: {
            NAME: "CHWP1#ONOFF",
          },
          ON: {
            NAME: "CHWP1#ON",
          },
          OFF: {
            NAME: "CHWP1#OFF",
          },
          ON_SP: {
            NAME: "CHWP1#ON_SP",
          },
          OFF_SP: {
            NAME: "CHWP1#OFF_SP",
          },
          AM: {
            NAME: "CHWP1#AM",
          },
          EB: {
            NAME: "CHWP1#EB",
          },
          FAULT: {
            NAME: "CHWP1#FAULT",
          },
          FAULT_CODE: {
            NAME: "CHWP1#FAULT_CODE",
          },
          FAULT_RESET: {
            NAME: "CHWP1#FAULT_RESET",
          },
          RANK: {
            NAME: "CHWP1#RANK",
          },
          PR_INLET: {
            NAME: "CHWP1#PR_INLET",
          },
          PR_OUTLET: {
            NAME: "CHWP1#PR_OUTLET",
          },
          HRS_TOTAL: {
            NAME: "CHWP1#HRS_TOTAL",
          },
          HRS: {
            NAME: "CHWP1#HRS",
          },
          P: {
            NAME: "CHWP1#P",
          },
          W: {
            NAME: "CHWP1#W",
          },
          COP: {
            NAME: "CHWP1#COP",
          },
          ONOFF_VFD_SP: {
            NAME: "CHWP1#ONOFF_VFD_SP",
          },
          ONOFF_VFD: {
            NAME: "CHWP1#ONOFF_VFD",
          },
          FREQ: {
            NAME: "CHWP1#FREQ",
          },
          FREQ_SP: {
            NAME: "CHWP1#FREQ_SP",
          },
          FAULT_VFD: {
            NAME: "CHWP1#FAULT_VFD",
          },
          P_VFD: {
            NAME: "CHWP1#P_VFD",
          },
          FLOW_RATED: {
            NAME: "CHWP1#FLOW_RATED",
          },
          P_RATED: {
            NAME: "CHWP1#P_RATED",
          },
          COP_RATED: {
            NAME: "CHWP1#COP_RATED",
          },
          ID: "SUbrIvPCme75m1DiOk5Qkm",
          NO: 1,
          NAME: "冷冻水泵#1",
          TYPE: "D0A1B",
          STATION_ID: "aKA0GGZa0NIQHgzurqjJIC",
          STATION_PREFIX_ORG: "HVC1#",
          DEVICE_PREFIX: "CHWP1#",
          SUITE_IDS: [
            "oM6qEMxe50PY3Jv1JGxGVi",
            "jXGJPr5bbu8Pm1azp1qVLz",
            "3T4PM4a_xeb9HSfb6CA2vP",
            "yxOjIyO9w9FfhRDEZmKWZC",
          ],
          VALVES: [],
          OTHERS: {},
          CAP_NUM: 0,
        },
        {
          ELEC: {
            NAME: "CHWP2#ELEC",
          },
          ONOFF_SP: {
            NAME: "CHWP2#ONOFF_SP",
          },
          ONOFF: {
            NAME: "CHWP2#ONOFF",
          },
          ON: {
            NAME: "CHWP2#ON",
          },
          OFF: {
            NAME: "CHWP2#OFF",
          },
          ON_SP: {
            NAME: "CHWP2#ON_SP",
          },
          OFF_SP: {
            NAME: "CHWP2#OFF_SP",
          },
          AM: {
            NAME: "CHWP2#AM",
          },
          EB: {
            NAME: "CHWP2#EB",
          },
          FAULT: {
            NAME: "CHWP2#FAULT",
          },
          FAULT_CODE: {
            NAME: "CHWP2#FAULT_CODE",
          },
          FAULT_RESET: {
            NAME: "CHWP2#FAULT_RESET",
          },
          RANK: {
            NAME: "CHWP2#RANK",
          },
          PR_INLET: {
            NAME: "CHWP2#PR_INLET",
          },
          PR_OUTLET: {
            NAME: "CHWP2#PR_OUTLET",
          },
          HRS_TOTAL: {
            NAME: "CHWP2#HRS_TOTAL",
          },
          HRS: {
            NAME: "CHWP2#HRS",
          },
          P: {
            NAME: "CHWP2#P",
          },
          W: {
            NAME: "CHWP2#W",
          },
          COP: {
            NAME: "CHWP2#COP",
          },
          ONOFF_VFD_SP: {
            NAME: "CHWP2#ONOFF_VFD_SP",
          },
          ONOFF_VFD: {
            NAME: "CHWP2#ONOFF_VFD",
          },
          FREQ: {
            NAME: "CHWP2#FREQ",
          },
          FREQ_SP: {
            NAME: "CHWP2#FREQ_SP",
          },
          FAULT_VFD: {
            NAME: "CHWP2#FAULT_VFD",
          },
          P_VFD: {
            NAME: "CHWP2#P_VFD",
          },
          FLOW_RATED: {
            NAME: "CHWP2#FLOW_RATED",
          },
          P_RATED: {
            NAME: "CHWP2#P_RATED",
          },
          COP_RATED: {
            NAME: "CHWP2#COP_RATED",
          },
          ID: "KJ7AxiKb6OCoOTfqVWkE12",
          NO: 2,
          NAME: "冷冻水泵#2",
          TYPE: "D0A1B",
          STATION_ID: "aKA0GGZa0NIQHgzurqjJIC",
          STATION_PREFIX_ORG: "HVC1#",
          DEVICE_PREFIX: "CHWP2#",
          SUITE_IDS: [
            "oM6qEMxe50PY3Jv1JGxGVi",
            "jXGJPr5bbu8Pm1azp1qVLz",
            "3T4PM4a_xeb9HSfb6CA2vP",
            "yxOjIyO9w9FfhRDEZmKWZC",
          ],
          VALVES: [],
          OTHERS: {},
          CAP_NUM: 0,
        },
        {
          ELEC: {
            NAME: "CHWP3#ELEC",
          },
          ONOFF_SP: {
            NAME: "CHWP3#ONOFF_SP",
          },
          ONOFF: {
            NAME: "CHWP3#ONOFF",
          },
          ON: {
            NAME: "CHWP3#ON",
          },
          OFF: {
            NAME: "CHWP3#OFF",
          },
          ON_SP: {
            NAME: "CHWP3#ON_SP",
          },
          OFF_SP: {
            NAME: "CHWP3#OFF_SP",
          },
          AM: {
            NAME: "CHWP3#AM",
          },
          EB: {
            NAME: "CHWP3#EB",
          },
          FAULT: {
            NAME: "CHWP3#FAULT",
          },
          FAULT_CODE: {
            NAME: "CHWP3#FAULT_CODE",
          },
          FAULT_RESET: {
            NAME: "CHWP3#FAULT_RESET",
          },
          RANK: {
            NAME: "CHWP3#RANK",
          },
          PR_INLET: {
            NAME: "CHWP3#PR_INLET",
          },
          PR_OUTLET: {
            NAME: "CHWP3#PR_OUTLET",
          },
          HRS_TOTAL: {
            NAME: "CHWP3#HRS_TOTAL",
          },
          HRS: {
            NAME: "CHWP3#HRS",
          },
          P: {
            NAME: "CHWP3#P",
          },
          W: {
            NAME: "CHWP3#W",
          },
          COP: {
            NAME: "CHWP3#COP",
          },
          ONOFF_VFD_SP: {
            NAME: "CHWP3#ONOFF_VFD_SP",
          },
          ONOFF_VFD: {
            NAME: "CHWP3#ONOFF_VFD",
          },
          FREQ: {
            NAME: "CHWP3#FREQ",
          },
          FREQ_SP: {
            NAME: "CHWP3#FREQ_SP",
          },
          FAULT_VFD: {
            NAME: "CHWP3#FAULT_VFD",
          },
          P_VFD: {
            NAME: "CHWP3#P_VFD",
          },
          FLOW_RATED: {
            NAME: "CHWP3#FLOW_RATED",
          },
          P_RATED: {
            NAME: "CHWP3#P_RATED",
          },
          COP_RATED: {
            NAME: "CHWP3#COP_RATED",
          },
          ID: "3JNiytZOf9Yvj9cFu76TrD",
          NO: 3,
          NAME: "冷冻水泵#3",
          TYPE: "D0A1B",
          STATION_ID: "aKA0GGZa0NIQHgzurqjJIC",
          STATION_PREFIX_ORG: "HVC1#",
          DEVICE_PREFIX: "CHWP3#",
          SUITE_IDS: [
            "oM6qEMxe50PY3Jv1JGxGVi",
            "jXGJPr5bbu8Pm1azp1qVLz",
            "3T4PM4a_xeb9HSfb6CA2vP",
            "yxOjIyO9w9FfhRDEZmKWZC",
          ],
          VALVES: [],
          OTHERS: {},
          CAP_NUM: 0,
        },
        {
          ELEC: {
            NAME: "CHWP4#ELEC",
          },
          ONOFF_SP: {
            NAME: "CHWP4#ONOFF_SP",
          },
          ONOFF: {
            NAME: "CHWP4#ONOFF",
          },
          ON: {
            NAME: "CHWP4#ON",
          },
          OFF: {
            NAME: "CHWP4#OFF",
          },
          ON_SP: {
            NAME: "CHWP4#ON_SP",
          },
          OFF_SP: {
            NAME: "CHWP4#OFF_SP",
          },
          AM: {
            NAME: "CHWP4#AM",
          },
          EB: {
            NAME: "CHWP4#EB",
          },
          FAULT: {
            NAME: "CHWP4#FAULT",
          },
          FAULT_CODE: {
            NAME: "CHWP4#FAULT_CODE",
          },
          FAULT_RESET: {
            NAME: "CHWP4#FAULT_RESET",
          },
          RANK: {
            NAME: "CHWP4#RANK",
          },
          PR_INLET: {
            NAME: "CHWP4#PR_INLET",
          },
          PR_OUTLET: {
            NAME: "CHWP4#PR_OUTLET",
          },
          HRS_TOTAL: {
            NAME: "CHWP4#HRS_TOTAL",
          },
          HRS: {
            NAME: "CHWP4#HRS",
          },
          P: {
            NAME: "CHWP4#P",
          },
          W: {
            NAME: "CHWP4#W",
          },
          COP: {
            NAME: "CHWP4#COP",
          },
          ONOFF_VFD_SP: {
            NAME: "CHWP4#ONOFF_VFD_SP",
          },
          ONOFF_VFD: {
            NAME: "CHWP4#ONOFF_VFD",
          },
          FREQ: {
            NAME: "CHWP4#FREQ",
          },
          FREQ_SP: {
            NAME: "CHWP4#FREQ_SP",
          },
          FAULT_VFD: {
            NAME: "CHWP4#FAULT_VFD",
          },
          P_VFD: {
            NAME: "CHWP4#P_VFD",
          },
          FLOW_RATED: {
            NAME: "CHWP4#FLOW_RATED",
          },
          P_RATED: {
            NAME: "CHWP4#P_RATED",
          },
          COP_RATED: {
            NAME: "CHWP4#COP_RATED",
          },
          ID: "OuSSIIufxo_z3LBn4vucpo",
          NO: 4,
          NAME: "冷冻水泵#4",
          TYPE: "D0A1B",
          STATION_ID: "aKA0GGZa0NIQHgzurqjJIC",
          STATION_PREFIX_ORG: "HVC1#",
          DEVICE_PREFIX: "CHWP4#",
          SUITE_IDS: [
            "oM6qEMxe50PY3Jv1JGxGVi",
            "jXGJPr5bbu8Pm1azp1qVLz",
            "3T4PM4a_xeb9HSfb6CA2vP",
            "yxOjIyO9w9FfhRDEZmKWZC",
          ],
          VALVES: [],
          OTHERS: {},
          CAP_NUM: 0,
        },
      ],
      SCHWPS: [],
      CWPS: [
        {
          ELEC: {
            NAME: "CWP1#ELEC",
          },
          ONOFF_SP: {
            NAME: "CWP1#ONOFF_SP",
          },
          ONOFF: {
            NAME: "CWP1#ONOFF",
          },
          ON: {
            NAME: "CWP1#ON",
          },
          OFF: {
            NAME: "CWP1#OFF",
          },
          ON_SP: {
            NAME: "CWP1#ON_SP",
          },
          OFF_SP: {
            NAME: "CWP1#OFF_SP",
          },
          AM: {
            NAME: "CWP1#AM",
          },
          EB: {
            NAME: "CWP1#EB",
          },
          FAULT: {
            NAME: "CWP1#FAULT",
          },
          FAULT_CODE: {
            NAME: "CWP1#FAULT_CODE",
          },
          FAULT_RESET: {
            NAME: "CWP1#FAULT_RESET",
          },
          RANK: {
            NAME: "CWP1#RANK",
          },
          PR_INLET: {
            NAME: "CWP1#PR_INLET",
          },
          PR_OUTLET: {
            NAME: "CWP1#PR_OUTLET",
          },
          HRS_TOTAL: {
            NAME: "CWP1#HRS_TOTAL",
          },
          HRS: {
            NAME: "CWP1#HRS",
          },
          P: {
            NAME: "CWP1#P",
          },
          W: {
            NAME: "CWP1#W",
          },
          COP: {
            NAME: "CWP1#COP",
          },
          ONOFF_VFD_SP: {
            NAME: "CWP1#ONOFF_VFD_SP",
          },
          ONOFF_VFD: {
            NAME: "CWP1#ONOFF_VFD",
          },
          FREQ: {
            NAME: "CWP1#FREQ",
          },
          FREQ_SP: {
            NAME: "CWP1#FREQ_SP",
          },
          FAULT_VFD: {
            NAME: "CWP1#FAULT_VFD",
          },
          P_VFD: {
            NAME: "CWP1#P_VFD",
          },
          FLOW_RATED: {
            NAME: "CWP1#FLOW_RATED",
          },
          P_RATED: {
            NAME: "CWP1#P_RATED",
          },
          COP_RATED: {
            NAME: "CWP1#COP_RATED",
          },
          ID: "iluAkpqnSdWRIN2YShuMOG",
          NO: 1,
          NAME: "冷却水泵#1",
          TYPE: "D0A1C",
          STATION_ID: "aKA0GGZa0NIQHgzurqjJIC",
          STATION_PREFIX_ORG: "HVC1#",
          DEVICE_PREFIX: "CWP1#",
          SUITE_IDS: [
            "oM6qEMxe50PY3Jv1JGxGVi",
            "jXGJPr5bbu8Pm1azp1qVLz",
            "3T4PM4a_xeb9HSfb6CA2vP",
            "yxOjIyO9w9FfhRDEZmKWZC",
          ],
          VALVES: [],
          OTHERS: {},
          CAP_NUM: 0,
        },
        {
          ELEC: {
            NAME: "CWP2#ELEC",
          },
          ONOFF_SP: {
            NAME: "CWP2#ONOFF_SP",
          },
          ONOFF: {
            NAME: "CWP2#ONOFF",
          },
          ON: {
            NAME: "CWP2#ON",
          },
          OFF: {
            NAME: "CWP2#OFF",
          },
          ON_SP: {
            NAME: "CWP2#ON_SP",
          },
          OFF_SP: {
            NAME: "CWP2#OFF_SP",
          },
          AM: {
            NAME: "CWP2#AM",
          },
          EB: {
            NAME: "CWP2#EB",
          },
          FAULT: {
            NAME: "CWP2#FAULT",
          },
          FAULT_CODE: {
            NAME: "CWP2#FAULT_CODE",
          },
          FAULT_RESET: {
            NAME: "CWP2#FAULT_RESET",
          },
          RANK: {
            NAME: "CWP2#RANK",
          },
          PR_INLET: {
            NAME: "CWP2#PR_INLET",
          },
          PR_OUTLET: {
            NAME: "CWP2#PR_OUTLET",
          },
          HRS_TOTAL: {
            NAME: "CWP2#HRS_TOTAL",
          },
          HRS: {
            NAME: "CWP2#HRS",
          },
          P: {
            NAME: "CWP2#P",
          },
          W: {
            NAME: "CWP2#W",
          },
          COP: {
            NAME: "CWP2#COP",
          },
          ONOFF_VFD_SP: {
            NAME: "CWP2#ONOFF_VFD_SP",
          },
          ONOFF_VFD: {
            NAME: "CWP2#ONOFF_VFD",
          },
          FREQ: {
            NAME: "CWP2#FREQ",
          },
          FREQ_SP: {
            NAME: "CWP2#FREQ_SP",
          },
          FAULT_VFD: {
            NAME: "CWP2#FAULT_VFD",
          },
          P_VFD: {
            NAME: "CWP2#P_VFD",
          },
          FLOW_RATED: {
            NAME: "CWP2#FLOW_RATED",
          },
          P_RATED: {
            NAME: "CWP2#P_RATED",
          },
          COP_RATED: {
            NAME: "CWP2#COP_RATED",
          },
          ID: "odiOJxe6bSWpNTswmoRilj",
          NO: 2,
          NAME: "冷却水泵#2",
          TYPE: "D0A1C",
          STATION_ID: "aKA0GGZa0NIQHgzurqjJIC",
          STATION_PREFIX_ORG: "HVC1#",
          DEVICE_PREFIX: "CWP2#",
          SUITE_IDS: [
            "oM6qEMxe50PY3Jv1JGxGVi",
            "jXGJPr5bbu8Pm1azp1qVLz",
            "3T4PM4a_xeb9HSfb6CA2vP",
            "yxOjIyO9w9FfhRDEZmKWZC",
          ],
          VALVES: [],
          OTHERS: {},
          CAP_NUM: 0,
        },
        {
          ELEC: {
            NAME: "CWP3#ELEC",
          },
          ONOFF_SP: {
            NAME: "CWP3#ONOFF_SP",
          },
          ONOFF: {
            NAME: "CWP3#ONOFF",
          },
          ON: {
            NAME: "CWP3#ON",
          },
          OFF: {
            NAME: "CWP3#OFF",
          },
          ON_SP: {
            NAME: "CWP3#ON_SP",
          },
          OFF_SP: {
            NAME: "CWP3#OFF_SP",
          },
          AM: {
            NAME: "CWP3#AM",
          },
          EB: {
            NAME: "CWP3#EB",
          },
          FAULT: {
            NAME: "CWP3#FAULT",
          },
          FAULT_CODE: {
            NAME: "CWP3#FAULT_CODE",
          },
          FAULT_RESET: {
            NAME: "CWP3#FAULT_RESET",
          },
          RANK: {
            NAME: "CWP3#RANK",
          },
          PR_INLET: {
            NAME: "CWP3#PR_INLET",
          },
          PR_OUTLET: {
            NAME: "CWP3#PR_OUTLET",
          },
          HRS_TOTAL: {
            NAME: "CWP3#HRS_TOTAL",
          },
          HRS: {
            NAME: "CWP3#HRS",
          },
          P: {
            NAME: "CWP3#P",
          },
          W: {
            NAME: "CWP3#W",
          },
          COP: {
            NAME: "CWP3#COP",
          },
          ONOFF_VFD_SP: {
            NAME: "CWP3#ONOFF_VFD_SP",
          },
          ONOFF_VFD: {
            NAME: "CWP3#ONOFF_VFD",
          },
          FREQ: {
            NAME: "CWP3#FREQ",
          },
          FREQ_SP: {
            NAME: "CWP3#FREQ_SP",
          },
          FAULT_VFD: {
            NAME: "CWP3#FAULT_VFD",
          },
          P_VFD: {
            NAME: "CWP3#P_VFD",
          },
          FLOW_RATED: {
            NAME: "CWP3#FLOW_RATED",
          },
          P_RATED: {
            NAME: "CWP3#P_RATED",
          },
          COP_RATED: {
            NAME: "CWP3#COP_RATED",
          },
          ID: "MHzDc8b58PDR6Cfqar9hr2",
          NO: 3,
          NAME: "冷却水泵#3",
          TYPE: "D0A1C",
          STATION_ID: "aKA0GGZa0NIQHgzurqjJIC",
          STATION_PREFIX_ORG: "HVC1#",
          DEVICE_PREFIX: "CWP3#",
          SUITE_IDS: [
            "oM6qEMxe50PY3Jv1JGxGVi",
            "jXGJPr5bbu8Pm1azp1qVLz",
            "3T4PM4a_xeb9HSfb6CA2vP",
            "yxOjIyO9w9FfhRDEZmKWZC",
          ],
          VALVES: [],
          OTHERS: {},
          CAP_NUM: 0,
        },
        {
          ELEC: {
            NAME: "CWP4#ELEC",
          },
          ONOFF_SP: {
            NAME: "CWP4#ONOFF_SP",
          },
          ONOFF: {
            NAME: "CWP4#ONOFF",
          },
          ON: {
            NAME: "CWP4#ON",
          },
          OFF: {
            NAME: "CWP4#OFF",
          },
          ON_SP: {
            NAME: "CWP4#ON_SP",
          },
          OFF_SP: {
            NAME: "CWP4#OFF_SP",
          },
          AM: {
            NAME: "CWP4#AM",
          },
          EB: {
            NAME: "CWP4#EB",
          },
          FAULT: {
            NAME: "CWP4#FAULT",
          },
          FAULT_CODE: {
            NAME: "CWP4#FAULT_CODE",
          },
          FAULT_RESET: {
            NAME: "CWP4#FAULT_RESET",
          },
          RANK: {
            NAME: "CWP4#RANK",
          },
          PR_INLET: {
            NAME: "CWP4#PR_INLET",
          },
          PR_OUTLET: {
            NAME: "CWP4#PR_OUTLET",
          },
          HRS_TOTAL: {
            NAME: "CWP4#HRS_TOTAL",
          },
          HRS: {
            NAME: "CWP4#HRS",
          },
          P: {
            NAME: "CWP4#P",
          },
          W: {
            NAME: "CWP4#W",
          },
          COP: {
            NAME: "CWP4#COP",
          },
          ONOFF_VFD_SP: {
            NAME: "CWP4#ONOFF_VFD_SP",
          },
          ONOFF_VFD: {
            NAME: "CWP4#ONOFF_VFD",
          },
          FREQ: {
            NAME: "CWP4#FREQ",
          },
          FREQ_SP: {
            NAME: "CWP4#FREQ_SP",
          },
          FAULT_VFD: {
            NAME: "CWP4#FAULT_VFD",
          },
          P_VFD: {
            NAME: "CWP4#P_VFD",
          },
          FLOW_RATED: {
            NAME: "CWP4#FLOW_RATED",
          },
          P_RATED: {
            NAME: "CWP4#P_RATED",
          },
          COP_RATED: {
            NAME: "CWP4#COP_RATED",
          },
          ID: "FFA5D3hZrwi9XXCRG0VP4J",
          NO: 4,
          NAME: "冷却水泵#4",
          TYPE: "D0A1C",
          STATION_ID: "aKA0GGZa0NIQHgzurqjJIC",
          STATION_PREFIX_ORG: "HVC1#",
          DEVICE_PREFIX: "CWP4#",
          SUITE_IDS: [
            "oM6qEMxe50PY3Jv1JGxGVi",
            "jXGJPr5bbu8Pm1azp1qVLz",
            "3T4PM4a_xeb9HSfb6CA2vP",
            "yxOjIyO9w9FfhRDEZmKWZC",
          ],
          VALVES: [],
          OTHERS: {},
          CAP_NUM: 0,
        },
      ],
      CTS: [
        {
          ONOFF_SP: {
            NAME: "CT1#ONOFF_SP",
          },
          ONOFF: {
            NAME: "CT1#ONOFF",
          },
          ON: {
            NAME: "CT1#ON",
          },
          OFF: {
            NAME: "CT1#OFF",
          },
          ON_SP: {
            NAME: "CT1#ON_SP",
          },
          OFF_SP: {
            NAME: "CT1#OFF_SP",
          },
          AM: {
            NAME: "CT1#AM",
          },
          EB: {
            NAME: "CT1#EB",
          },
          FAULT: {
            NAME: "CT1#FAULT",
          },
          FAULT_CODE: {
            NAME: "CT1#FAULT_CODE",
          },
          FAULT_RESET: {
            NAME: "CT1#FAULT_RESET",
          },
          RANK: {
            NAME: "CT1#RANK",
          },
          HRS_TOTAL: {
            NAME: "CT1#HRS_TOTAL",
          },
          HRS: {
            NAME: "CT1#HRS",
          },
          P: {
            NAME: "CT1#P",
          },
          W: {
            NAME: "CT1#W",
          },
          ELEC: {
            NAME: "CT1#ELEC",
          },
          COP: {
            NAME: "CT1#COP",
          },
          ONOFF_VFD_SP: {
            NAME: "CT1#ONOFF_VFD_SP",
          },
          ONOFF_VFD: {
            NAME: "CT1#ONOFF_VFD",
          },
          FREQ: {
            NAME: "CT1#FREQ",
          },
          FREQ_SP: {
            NAME: "CT1#FREQ_SP",
          },
          FAULT_VFD: {
            NAME: "CT1#FAULT_VFD",
          },
          P_VFD: {
            NAME: "CT1#P_VFD",
          },
          FLOW_RATED: {
            NAME: "CT1#FLOW_RATED",
          },
          P_RATED: {
            NAME: "CT1#P_RATED",
          },
          COP_RATED: {
            NAME: "CT1#COP_RATED",
          },
          ID: "ye5MqHy0TbtrtErh0XmZCn",
          NO: 1,
          NAME: "冷却塔#1",
          TYPE: "D0A1D",
          STATION_ID: "aKA0GGZa0NIQHgzurqjJIC",
          STATION_PREFIX_ORG: "HVC1#",
          DEVICE_PREFIX: "CT1#",
          SUITE_IDS: [
            "oM6qEMxe50PY3Jv1JGxGVi",
            "jXGJPr5bbu8Pm1azp1qVLz",
            "3T4PM4a_xeb9HSfb6CA2vP",
            "yxOjIyO9w9FfhRDEZmKWZC",
          ],
          VALVES: [
            {
              ONOFF_SP: {
                NAME: "V9#ONOFF_SP",
              },
              ONOFF: {
                NAME: "V9#ONOFF",
              },
              OFF: {
                NAME: "V9#OFF",
              },
              ON: {
                NAME: "V9#ON",
              },
              OFF_SP: {
                NAME: "V9#OFF_SP",
              },
              ON_SP: {
                NAME: "V9#ON_SP",
              },
              EB: {
                NAME: "V9#EB",
              },
              AM: {
                NAME: "V9#AM",
              },
              FAULT: {
                NAME: "V9#FAULT",
              },
              NAME: "阀门#9",
              TYPE: "D0A30",
              ID: "iQ9nVLl2uBpstp2iKCzqI3",
              NO: 9,
              VALVES: [],
            },
            {
              ONOFF_SP: {
                NAME: "V10#ONOFF_SP",
              },
              ONOFF: {
                NAME: "V10#ONOFF",
              },
              OFF: {
                NAME: "V10#OFF",
              },
              ON: {
                NAME: "V10#ON",
              },
              OFF_SP: {
                NAME: "V10#OFF_SP",
              },
              ON_SP: {
                NAME: "V10#ON_SP",
              },
              EB: {
                NAME: "V10#EB",
              },
              AM: {
                NAME: "V10#AM",
              },
              FAULT: {
                NAME: "V10#FAULT",
              },
              NAME: "阀门#10",
              TYPE: "D0A30",
              ID: "iUppCA_gPRCe2Lka2gUt8m",
              NO: 10,
              VALVES: [],
            },
          ],
          OTHERS: {},
          CAP_NUM: 0,
        },
        {
          ONOFF_SP: {
            NAME: "CT2#ONOFF_SP",
          },
          ONOFF: {
            NAME: "CT2#ONOFF",
          },
          ON: {
            NAME: "CT2#ON",
          },
          OFF: {
            NAME: "CT2#OFF",
          },
          ON_SP: {
            NAME: "CT2#ON_SP",
          },
          OFF_SP: {
            NAME: "CT2#OFF_SP",
          },
          AM: {
            NAME: "CT2#AM",
          },
          EB: {
            NAME: "CT2#EB",
          },
          FAULT: {
            NAME: "CT2#FAULT",
          },
          FAULT_CODE: {
            NAME: "CT2#FAULT_CODE",
          },
          FAULT_RESET: {
            NAME: "CT2#FAULT_RESET",
          },
          RANK: {
            NAME: "CT2#RANK",
          },
          HRS_TOTAL: {
            NAME: "CT2#HRS_TOTAL",
          },
          HRS: {
            NAME: "CT2#HRS",
          },
          P: {
            NAME: "CT2#P",
          },
          W: {
            NAME: "CT2#W",
          },
          ELEC: {
            NAME: "CT2#ELEC",
          },
          COP: {
            NAME: "CT2#COP",
          },
          ONOFF_VFD_SP: {
            NAME: "CT2#ONOFF_VFD_SP",
          },
          ONOFF_VFD: {
            NAME: "CT2#ONOFF_VFD",
          },
          FREQ: {
            NAME: "CT2#FREQ",
          },
          FREQ_SP: {
            NAME: "CT2#FREQ_SP",
          },
          FAULT_VFD: {
            NAME: "CT2#FAULT_VFD",
          },
          P_VFD: {
            NAME: "CT2#P_VFD",
          },
          FLOW_RATED: {
            NAME: "CT2#FLOW_RATED",
          },
          P_RATED: {
            NAME: "CT2#P_RATED",
          },
          COP_RATED: {
            NAME: "CT2#COP_RATED",
          },
          ID: "qfwQBrtCEQjwZREDhh8ovp",
          NO: 2,
          NAME: "冷却塔#2",
          TYPE: "D0A1D",
          STATION_ID: "aKA0GGZa0NIQHgzurqjJIC",
          STATION_PREFIX_ORG: "HVC1#",
          DEVICE_PREFIX: "CT2#",
          SUITE_IDS: [
            "oM6qEMxe50PY3Jv1JGxGVi",
            "jXGJPr5bbu8Pm1azp1qVLz",
            "3T4PM4a_xeb9HSfb6CA2vP",
            "yxOjIyO9w9FfhRDEZmKWZC",
          ],
          VALVES: [
            {
              ONOFF_SP: {
                NAME: "V11#ONOFF_SP",
              },
              ONOFF: {
                NAME: "V11#ONOFF",
              },
              OFF: {
                NAME: "V11#OFF",
              },
              ON: {
                NAME: "V11#ON",
              },
              OFF_SP: {
                NAME: "V11#OFF_SP",
              },
              ON_SP: {
                NAME: "V11#ON_SP",
              },
              EB: {
                NAME: "V11#EB",
              },
              AM: {
                NAME: "V11#AM",
              },
              FAULT: {
                NAME: "V11#FAULT",
              },
              NAME: "阀门#11",
              TYPE: "D0A30",
              ID: "jvibORBfgRlq_5PkBOTiIr",
              NO: 11,
              VALVES: [],
            },
            {
              ONOFF_SP: {
                NAME: "V12#ONOFF_SP",
              },
              ONOFF: {
                NAME: "V12#ONOFF",
              },
              OFF: {
                NAME: "V12#OFF",
              },
              ON: {
                NAME: "V12#ON",
              },
              OFF_SP: {
                NAME: "V12#OFF_SP",
              },
              ON_SP: {
                NAME: "V12#ON_SP",
              },
              EB: {
                NAME: "V12#EB",
              },
              AM: {
                NAME: "V12#AM",
              },
              FAULT: {
                NAME: "V12#FAULT",
              },
              NAME: "阀门#12",
              TYPE: "D0A30",
              ID: "Euiwh8PYCXq_7ozW8gXO2t",
              NO: 12,
              VALVES: [],
            },
          ],
          OTHERS: {},
          CAP_NUM: 0,
        },
        {
          ONOFF_SP: {
            NAME: "CT3#ONOFF_SP",
          },
          ONOFF: {
            NAME: "CT3#ONOFF",
          },
          ON: {
            NAME: "CT3#ON",
          },
          OFF: {
            NAME: "CT3#OFF",
          },
          ON_SP: {
            NAME: "CT3#ON_SP",
          },
          OFF_SP: {
            NAME: "CT3#OFF_SP",
          },
          AM: {
            NAME: "CT3#AM",
          },
          EB: {
            NAME: "CT3#EB",
          },
          FAULT: {
            NAME: "CT3#FAULT",
          },
          FAULT_CODE: {
            NAME: "CT3#FAULT_CODE",
          },
          FAULT_RESET: {
            NAME: "CT3#FAULT_RESET",
          },
          RANK: {
            NAME: "CT3#RANK",
          },
          HRS_TOTAL: {
            NAME: "CT3#HRS_TOTAL",
          },
          HRS: {
            NAME: "CT3#HRS",
          },
          P: {
            NAME: "CT3#P",
          },
          W: {
            NAME: "CT3#W",
          },
          ELEC: {
            NAME: "CT3#ELEC",
          },
          COP: {
            NAME: "CT3#COP",
          },
          ONOFF_VFD_SP: {
            NAME: "CT3#ONOFF_VFD_SP",
          },
          ONOFF_VFD: {
            NAME: "CT3#ONOFF_VFD",
          },
          FREQ: {
            NAME: "CT3#FREQ",
          },
          FREQ_SP: {
            NAME: "CT3#FREQ_SP",
          },
          FAULT_VFD: {
            NAME: "CT3#FAULT_VFD",
          },
          P_VFD: {
            NAME: "CT3#P_VFD",
          },
          FLOW_RATED: {
            NAME: "CT3#FLOW_RATED",
          },
          P_RATED: {
            NAME: "CT3#P_RATED",
          },
          COP_RATED: {
            NAME: "CT3#COP_RATED",
          },
          ID: "z9kNrWKwhokZokO49Joila",
          NO: 3,
          NAME: "冷却塔#3",
          TYPE: "D0A1D",
          STATION_ID: "aKA0GGZa0NIQHgzurqjJIC",
          STATION_PREFIX_ORG: "HVC1#",
          DEVICE_PREFIX: "CT3#",
          SUITE_IDS: [
            "oM6qEMxe50PY3Jv1JGxGVi",
            "jXGJPr5bbu8Pm1azp1qVLz",
            "3T4PM4a_xeb9HSfb6CA2vP",
            "yxOjIyO9w9FfhRDEZmKWZC",
          ],
          VALVES: [
            {
              ONOFF_SP: {
                NAME: "V13#ONOFF_SP",
              },
              ONOFF: {
                NAME: "V13#ONOFF",
              },
              OFF: {
                NAME: "V13#OFF",
              },
              ON: {
                NAME: "V13#ON",
              },
              OFF_SP: {
                NAME: "V13#OFF_SP",
              },
              ON_SP: {
                NAME: "V13#ON_SP",
              },
              EB: {
                NAME: "V13#EB",
              },
              AM: {
                NAME: "V13#AM",
              },
              FAULT: {
                NAME: "V13#FAULT",
              },
              NAME: "阀门#13",
              TYPE: "D0A30",
              ID: "e9_W9b6otoLOnFZrFJXLRi",
              NO: 13,
              VALVES: [],
            },
            {
              ONOFF_SP: {
                NAME: "V14#ONOFF_SP",
              },
              ONOFF: {
                NAME: "V14#ONOFF",
              },
              OFF: {
                NAME: "V14#OFF",
              },
              ON: {
                NAME: "V14#ON",
              },
              OFF_SP: {
                NAME: "V14#OFF_SP",
              },
              ON_SP: {
                NAME: "V14#ON_SP",
              },
              EB: {
                NAME: "V14#EB",
              },
              AM: {
                NAME: "V14#AM",
              },
              FAULT: {
                NAME: "V14#FAULT",
              },
              NAME: "阀门#14",
              TYPE: "D0A30",
              ID: "0hULtajjeOLqMtTyQWPxWA",
              NO: 14,
              VALVES: [],
            },
          ],
          OTHERS: {},
          CAP_NUM: 0,
        },
        {
          ONOFF_SP: {
            NAME: "CT4#ONOFF_SP",
          },
          ONOFF: {
            NAME: "CT4#ONOFF",
          },
          ON: {
            NAME: "CT4#ON",
          },
          OFF: {
            NAME: "CT4#OFF",
          },
          ON_SP: {
            NAME: "CT4#ON_SP",
          },
          OFF_SP: {
            NAME: "CT4#OFF_SP",
          },
          AM: {
            NAME: "CT4#AM",
          },
          EB: {
            NAME: "CT4#EB",
          },
          FAULT: {
            NAME: "CT4#FAULT",
          },
          FAULT_CODE: {
            NAME: "CT4#FAULT_CODE",
          },
          FAULT_RESET: {
            NAME: "CT4#FAULT_RESET",
          },
          RANK: {
            NAME: "CT4#RANK",
          },
          HRS_TOTAL: {
            NAME: "CT4#HRS_TOTAL",
          },
          HRS: {
            NAME: "CT4#HRS",
          },
          P: {
            NAME: "CT4#P",
          },
          W: {
            NAME: "CT4#W",
          },
          ELEC: {
            NAME: "CT4#ELEC",
          },
          COP: {
            NAME: "CT4#COP",
          },
          ONOFF_VFD_SP: {
            NAME: "CT4#ONOFF_VFD_SP",
          },
          ONOFF_VFD: {
            NAME: "CT4#ONOFF_VFD",
          },
          FREQ: {
            NAME: "CT4#FREQ",
          },
          FREQ_SP: {
            NAME: "CT4#FREQ_SP",
          },
          FAULT_VFD: {
            NAME: "CT4#FAULT_VFD",
          },
          P_VFD: {
            NAME: "CT4#P_VFD",
          },
          FLOW_RATED: {
            NAME: "CT4#FLOW_RATED",
          },
          P_RATED: {
            NAME: "CT4#P_RATED",
          },
          COP_RATED: {
            NAME: "CT4#COP_RATED",
          },
          ID: "fKkvAEuijqotichFttlIKF",
          NO: 4,
          NAME: "冷却塔#4",
          TYPE: "D0A1D",
          STATION_ID: "aKA0GGZa0NIQHgzurqjJIC",
          STATION_PREFIX_ORG: "HVC1#",
          DEVICE_PREFIX: "CT4#",
          SUITE_IDS: [
            "oM6qEMxe50PY3Jv1JGxGVi",
            "jXGJPr5bbu8Pm1azp1qVLz",
            "3T4PM4a_xeb9HSfb6CA2vP",
            "yxOjIyO9w9FfhRDEZmKWZC",
          ],
          VALVES: [
            {
              ONOFF_SP: {
                NAME: "V15#ONOFF_SP",
              },
              ONOFF: {
                NAME: "V15#ONOFF",
              },
              OFF: {
                NAME: "V15#OFF",
              },
              ON: {
                NAME: "V15#ON",
              },
              OFF_SP: {
                NAME: "V15#OFF_SP",
              },
              ON_SP: {
                NAME: "V15#ON_SP",
              },
              EB: {
                NAME: "V15#EB",
              },
              AM: {
                NAME: "V15#AM",
              },
              FAULT: {
                NAME: "V15#FAULT",
              },
              NAME: "阀门#15",
              TYPE: "D0A30",
              ID: "eoRbD025SCKNBCvpFs1btn",
              NO: 15,
              VALVES: [],
            },
            {
              ONOFF_SP: {
                NAME: "V16#ONOFF_SP",
              },
              ONOFF: {
                NAME: "V16#ONOFF",
              },
              OFF: {
                NAME: "V16#OFF",
              },
              ON: {
                NAME: "V16#ON",
              },
              OFF_SP: {
                NAME: "V16#OFF_SP",
              },
              ON_SP: {
                NAME: "V16#ON_SP",
              },
              EB: {
                NAME: "V16#EB",
              },
              AM: {
                NAME: "V16#AM",
              },
              FAULT: {
                NAME: "V16#FAULT",
              },
              NAME: "阀门#16",
              TYPE: "D0A30",
              ID: "wggnS6uBEo1qHuOEoT0atb",
              NO: 16,
              VALVES: [],
            },
          ],
          OTHERS: {},
          CAP_NUM: 0,
        },
      ],
      ID: "jXGJPr5bbu8Pm1azp1qVLz",
      NO: 2,
      NAME: "制冷机#2",
      TYPE: "D0A1A",
      STATION_ID: "aKA0GGZa0NIQHgzurqjJIC",
      STATION_PREFIX_ORG: "HVC1#",
      DEVICE_PREFIX: "CH2#",
      SUITE_IDS: [],
      VALVES: [
        {
          ONOFF_SP: {
            NAME: "V3#ONOFF_SP",
          },
          ONOFF: {
            NAME: "V3#ONOFF",
          },
          OFF: {
            NAME: "V3#OFF",
          },
          ON: {
            NAME: "V3#ON",
          },
          OFF_SP: {
            NAME: "V3#OFF_SP",
          },
          ON_SP: {
            NAME: "V3#ON_SP",
          },
          EB: {
            NAME: "V3#EB",
          },
          AM: {
            NAME: "V3#AM",
          },
          FAULT: {
            NAME: "V3#FAULT",
          },
          NAME: "阀门#3",
          TYPE: "D0A30",
          ID: "ZBzUT4_IjkewlhCq7yhz5h",
          NO: 3,
          VALVES: [],
        },
        {
          ONOFF_SP: {
            NAME: "V4#ONOFF_SP",
          },
          ONOFF: {
            NAME: "V4#ONOFF",
          },
          OFF: {
            NAME: "V4#OFF",
          },
          ON: {
            NAME: "V4#ON",
          },
          OFF_SP: {
            NAME: "V4#OFF_SP",
          },
          ON_SP: {
            NAME: "V4#ON_SP",
          },
          EB: {
            NAME: "V4#EB",
          },
          AM: {
            NAME: "V4#AM",
          },
          FAULT: {
            NAME: "V4#FAULT",
          },
          NAME: "阀门#4",
          TYPE: "D0A30",
          ID: "jX0yZxlK3supakYcAAlPYS",
          NO: 4,
          VALVES: [],
        },
      ],
      OTHERS: {},
      CAP_NUM: 0,
    },
    "3T4PM4a_xeb9HSfb6CA2vP": {
      ONOFF_SP: {
        NAME: "CH3#ONOFF_SP",
      },
      AM: {
        NAME: "CH3#AM",
      },
      EB: {
        NAME: "CH3#EB",
      },
      ONOFF: {
        NAME: "CH3#ONOFF",
      },
      ON: {
        NAME: "CH3#ON",
      },
      OFF: {
        NAME: "CH3#OFF",
      },
      ON_SP: {
        NAME: "CH3#ON_SP",
      },
      OFF_SP: {
        NAME: "CH3#OFF_SP",
      },
      FAULT: {
        NAME: "CH3#FAULT",
      },
      FAULT_CODE: {
        NAME: "CH3#FAULT_CODE",
      },
      FAULT_RESET: {
        NAME: "CH3#FAULT_RESET",
      },
      T_CHW_S: {
        NAME: "CH3#T_CHW_S",
      },
      T_CHW_S_SP: {
        NAME: "CH3#T_CHW_S_SP",
      },
      HRS_TOTAL: {
        NAME: "CH3#HRS_TOTAL",
      },
      HRS: {
        NAME: "CH3#HRS",
      },
      I_PCT: {
        NAME: "CH3#I_PCT",
      },
      I_PCT_MAX_SP: {
        NAME: "CH3#I_PCT_MAX_SP",
      },
      T_EXHT: {
        NAME: "CH3#T_EXHT",
      },
      T_EVAP_ENT: {
        NAME: "CH3#T_EVAP_ENT",
      },
      T_EVAP_LEV: {
        NAME: "CH3#T_EVAP_LEV",
      },
      T_EVAP: {
        NAME: "CH3#T_EVAP",
      },
      PR_EVAP: {
        NAME: "CH3#PR_EVAP",
      },
      T_COND_ENT: {
        NAME: "CH3#T_COND_ENT",
      },
      T_COND_LEV: {
        NAME: "CH3#T_COND_LEV",
      },
      T_COND: {
        NAME: "CH3#T_COND",
      },
      PR_COND: {
        NAME: "CH3#PR_COND",
      },
      T_OIL: {
        NAME: "CH3#T_OIL",
      },
      DPR_OIL: {
        NAME: "CH3#DPR_OIL",
      },
      COUNT_SS: {
        NAME: "CH3#COUNT_SS",
      },
      RANK: {
        NAME: "CH3#RANK",
      },
      P: {
        NAME: "CH3#P",
      },
      W: {
        NAME: "CH3#W",
      },
      ELEC: {
        NAME: "CH3#ELEC",
      },
      I: {
        NAME: "CH3#I",
      },
      COP: {
        NAME: "CH3#COP",
      },
      MODE: {
        NAME: "CH3#MODE",
      },
      T_COND_PROTECT: {
        NAME: "CH3#T_COND_PROTECT",
      },
      PR_EXHT_PROTECT: {
        NAME: "CH3#PR_EXHT_PROTECT",
      },
      P_RATED: {
        NAME: "CH3#P_RATED",
      },
      LOAD_RATED: {
        NAME: "CH3#LOAD_RATED",
        VALUE: "2000",
        VALUE_O: 2000,
      },
      COP_RATED: {
        NAME: "CH3#COP_RATED",
      },
      FLOW_CHW_RATED: {
        NAME: "CH3#FLOW_CHW_RATED",
      },
      FLOW_CW_RATED: {
        NAME: "CH3#FLOW_CW_RATED",
      },
      PLR: {
        NAME: "CH3#PLR",
      },
      LOAD: {
        NAME: "CH3#LOAD",
      },
      FLOW_CHW: {
        NAME: "CH3#FLOW_CHW",
      },
      FLOW_CW: {
        NAME: "CH3#FLOW_CW",
      },
      FLOW_CHW_SWITCH: {
        NAME: "CH3#FLOW_CHW_SWITCH",
      },
      FLOW_CW_SWITCH: {
        NAME: "CH3#FLOW_CW_SWITCH",
      },
      T_CW_R: {
        NAME: "CH3#T_CW_R",
      },
      ONECLICK_START: {
        NAME: "CH3#ONECLICK_START",
      },
      ONECLICK_STOP: {
        NAME: "CH3#ONECLICK_STOP",
      },
      CHWPS: [
        {
          ELEC: {
            NAME: "CHWP1#ELEC",
          },
          ONOFF_SP: {
            NAME: "CHWP1#ONOFF_SP",
          },
          ONOFF: {
            NAME: "CHWP1#ONOFF",
          },
          ON: {
            NAME: "CHWP1#ON",
          },
          OFF: {
            NAME: "CHWP1#OFF",
          },
          ON_SP: {
            NAME: "CHWP1#ON_SP",
          },
          OFF_SP: {
            NAME: "CHWP1#OFF_SP",
          },
          AM: {
            NAME: "CHWP1#AM",
          },
          EB: {
            NAME: "CHWP1#EB",
          },
          FAULT: {
            NAME: "CHWP1#FAULT",
          },
          FAULT_CODE: {
            NAME: "CHWP1#FAULT_CODE",
          },
          FAULT_RESET: {
            NAME: "CHWP1#FAULT_RESET",
          },
          RANK: {
            NAME: "CHWP1#RANK",
          },
          PR_INLET: {
            NAME: "CHWP1#PR_INLET",
          },
          PR_OUTLET: {
            NAME: "CHWP1#PR_OUTLET",
          },
          HRS_TOTAL: {
            NAME: "CHWP1#HRS_TOTAL",
          },
          HRS: {
            NAME: "CHWP1#HRS",
          },
          P: {
            NAME: "CHWP1#P",
          },
          W: {
            NAME: "CHWP1#W",
          },
          COP: {
            NAME: "CHWP1#COP",
          },
          ONOFF_VFD_SP: {
            NAME: "CHWP1#ONOFF_VFD_SP",
          },
          ONOFF_VFD: {
            NAME: "CHWP1#ONOFF_VFD",
          },
          FREQ: {
            NAME: "CHWP1#FREQ",
          },
          FREQ_SP: {
            NAME: "CHWP1#FREQ_SP",
          },
          FAULT_VFD: {
            NAME: "CHWP1#FAULT_VFD",
          },
          P_VFD: {
            NAME: "CHWP1#P_VFD",
          },
          FLOW_RATED: {
            NAME: "CHWP1#FLOW_RATED",
          },
          P_RATED: {
            NAME: "CHWP1#P_RATED",
          },
          COP_RATED: {
            NAME: "CHWP1#COP_RATED",
          },
          ID: "SUbrIvPCme75m1DiOk5Qkm",
          NO: 1,
          NAME: "冷冻水泵#1",
          TYPE: "D0A1B",
          STATION_ID: "aKA0GGZa0NIQHgzurqjJIC",
          STATION_PREFIX_ORG: "HVC1#",
          DEVICE_PREFIX: "CHWP1#",
          SUITE_IDS: [
            "oM6qEMxe50PY3Jv1JGxGVi",
            "jXGJPr5bbu8Pm1azp1qVLz",
            "3T4PM4a_xeb9HSfb6CA2vP",
            "yxOjIyO9w9FfhRDEZmKWZC",
          ],
          VALVES: [],
          OTHERS: {},
          CAP_NUM: 0,
        },
        {
          ELEC: {
            NAME: "CHWP2#ELEC",
          },
          ONOFF_SP: {
            NAME: "CHWP2#ONOFF_SP",
          },
          ONOFF: {
            NAME: "CHWP2#ONOFF",
          },
          ON: {
            NAME: "CHWP2#ON",
          },
          OFF: {
            NAME: "CHWP2#OFF",
          },
          ON_SP: {
            NAME: "CHWP2#ON_SP",
          },
          OFF_SP: {
            NAME: "CHWP2#OFF_SP",
          },
          AM: {
            NAME: "CHWP2#AM",
          },
          EB: {
            NAME: "CHWP2#EB",
          },
          FAULT: {
            NAME: "CHWP2#FAULT",
          },
          FAULT_CODE: {
            NAME: "CHWP2#FAULT_CODE",
          },
          FAULT_RESET: {
            NAME: "CHWP2#FAULT_RESET",
          },
          RANK: {
            NAME: "CHWP2#RANK",
          },
          PR_INLET: {
            NAME: "CHWP2#PR_INLET",
          },
          PR_OUTLET: {
            NAME: "CHWP2#PR_OUTLET",
          },
          HRS_TOTAL: {
            NAME: "CHWP2#HRS_TOTAL",
          },
          HRS: {
            NAME: "CHWP2#HRS",
          },
          P: {
            NAME: "CHWP2#P",
          },
          W: {
            NAME: "CHWP2#W",
          },
          COP: {
            NAME: "CHWP2#COP",
          },
          ONOFF_VFD_SP: {
            NAME: "CHWP2#ONOFF_VFD_SP",
          },
          ONOFF_VFD: {
            NAME: "CHWP2#ONOFF_VFD",
          },
          FREQ: {
            NAME: "CHWP2#FREQ",
          },
          FREQ_SP: {
            NAME: "CHWP2#FREQ_SP",
          },
          FAULT_VFD: {
            NAME: "CHWP2#FAULT_VFD",
          },
          P_VFD: {
            NAME: "CHWP2#P_VFD",
          },
          FLOW_RATED: {
            NAME: "CHWP2#FLOW_RATED",
          },
          P_RATED: {
            NAME: "CHWP2#P_RATED",
          },
          COP_RATED: {
            NAME: "CHWP2#COP_RATED",
          },
          ID: "KJ7AxiKb6OCoOTfqVWkE12",
          NO: 2,
          NAME: "冷冻水泵#2",
          TYPE: "D0A1B",
          STATION_ID: "aKA0GGZa0NIQHgzurqjJIC",
          STATION_PREFIX_ORG: "HVC1#",
          DEVICE_PREFIX: "CHWP2#",
          SUITE_IDS: [
            "oM6qEMxe50PY3Jv1JGxGVi",
            "jXGJPr5bbu8Pm1azp1qVLz",
            "3T4PM4a_xeb9HSfb6CA2vP",
            "yxOjIyO9w9FfhRDEZmKWZC",
          ],
          VALVES: [],
          OTHERS: {},
          CAP_NUM: 0,
        },
        {
          ELEC: {
            NAME: "CHWP3#ELEC",
          },
          ONOFF_SP: {
            NAME: "CHWP3#ONOFF_SP",
          },
          ONOFF: {
            NAME: "CHWP3#ONOFF",
          },
          ON: {
            NAME: "CHWP3#ON",
          },
          OFF: {
            NAME: "CHWP3#OFF",
          },
          ON_SP: {
            NAME: "CHWP3#ON_SP",
          },
          OFF_SP: {
            NAME: "CHWP3#OFF_SP",
          },
          AM: {
            NAME: "CHWP3#AM",
          },
          EB: {
            NAME: "CHWP3#EB",
          },
          FAULT: {
            NAME: "CHWP3#FAULT",
          },
          FAULT_CODE: {
            NAME: "CHWP3#FAULT_CODE",
          },
          FAULT_RESET: {
            NAME: "CHWP3#FAULT_RESET",
          },
          RANK: {
            NAME: "CHWP3#RANK",
          },
          PR_INLET: {
            NAME: "CHWP3#PR_INLET",
          },
          PR_OUTLET: {
            NAME: "CHWP3#PR_OUTLET",
          },
          HRS_TOTAL: {
            NAME: "CHWP3#HRS_TOTAL",
          },
          HRS: {
            NAME: "CHWP3#HRS",
          },
          P: {
            NAME: "CHWP3#P",
          },
          W: {
            NAME: "CHWP3#W",
          },
          COP: {
            NAME: "CHWP3#COP",
          },
          ONOFF_VFD_SP: {
            NAME: "CHWP3#ONOFF_VFD_SP",
          },
          ONOFF_VFD: {
            NAME: "CHWP3#ONOFF_VFD",
          },
          FREQ: {
            NAME: "CHWP3#FREQ",
          },
          FREQ_SP: {
            NAME: "CHWP3#FREQ_SP",
          },
          FAULT_VFD: {
            NAME: "CHWP3#FAULT_VFD",
          },
          P_VFD: {
            NAME: "CHWP3#P_VFD",
          },
          FLOW_RATED: {
            NAME: "CHWP3#FLOW_RATED",
          },
          P_RATED: {
            NAME: "CHWP3#P_RATED",
          },
          COP_RATED: {
            NAME: "CHWP3#COP_RATED",
          },
          ID: "3JNiytZOf9Yvj9cFu76TrD",
          NO: 3,
          NAME: "冷冻水泵#3",
          TYPE: "D0A1B",
          STATION_ID: "aKA0GGZa0NIQHgzurqjJIC",
          STATION_PREFIX_ORG: "HVC1#",
          DEVICE_PREFIX: "CHWP3#",
          SUITE_IDS: [
            "oM6qEMxe50PY3Jv1JGxGVi",
            "jXGJPr5bbu8Pm1azp1qVLz",
            "3T4PM4a_xeb9HSfb6CA2vP",
            "yxOjIyO9w9FfhRDEZmKWZC",
          ],
          VALVES: [],
          OTHERS: {},
          CAP_NUM: 0,
        },
        {
          ELEC: {
            NAME: "CHWP4#ELEC",
          },
          ONOFF_SP: {
            NAME: "CHWP4#ONOFF_SP",
          },
          ONOFF: {
            NAME: "CHWP4#ONOFF",
          },
          ON: {
            NAME: "CHWP4#ON",
          },
          OFF: {
            NAME: "CHWP4#OFF",
          },
          ON_SP: {
            NAME: "CHWP4#ON_SP",
          },
          OFF_SP: {
            NAME: "CHWP4#OFF_SP",
          },
          AM: {
            NAME: "CHWP4#AM",
          },
          EB: {
            NAME: "CHWP4#EB",
          },
          FAULT: {
            NAME: "CHWP4#FAULT",
          },
          FAULT_CODE: {
            NAME: "CHWP4#FAULT_CODE",
          },
          FAULT_RESET: {
            NAME: "CHWP4#FAULT_RESET",
          },
          RANK: {
            NAME: "CHWP4#RANK",
          },
          PR_INLET: {
            NAME: "CHWP4#PR_INLET",
          },
          PR_OUTLET: {
            NAME: "CHWP4#PR_OUTLET",
          },
          HRS_TOTAL: {
            NAME: "CHWP4#HRS_TOTAL",
          },
          HRS: {
            NAME: "CHWP4#HRS",
          },
          P: {
            NAME: "CHWP4#P",
          },
          W: {
            NAME: "CHWP4#W",
          },
          COP: {
            NAME: "CHWP4#COP",
          },
          ONOFF_VFD_SP: {
            NAME: "CHWP4#ONOFF_VFD_SP",
          },
          ONOFF_VFD: {
            NAME: "CHWP4#ONOFF_VFD",
          },
          FREQ: {
            NAME: "CHWP4#FREQ",
          },
          FREQ_SP: {
            NAME: "CHWP4#FREQ_SP",
          },
          FAULT_VFD: {
            NAME: "CHWP4#FAULT_VFD",
          },
          P_VFD: {
            NAME: "CHWP4#P_VFD",
          },
          FLOW_RATED: {
            NAME: "CHWP4#FLOW_RATED",
          },
          P_RATED: {
            NAME: "CHWP4#P_RATED",
          },
          COP_RATED: {
            NAME: "CHWP4#COP_RATED",
          },
          ID: "OuSSIIufxo_z3LBn4vucpo",
          NO: 4,
          NAME: "冷冻水泵#4",
          TYPE: "D0A1B",
          STATION_ID: "aKA0GGZa0NIQHgzurqjJIC",
          STATION_PREFIX_ORG: "HVC1#",
          DEVICE_PREFIX: "CHWP4#",
          SUITE_IDS: [
            "oM6qEMxe50PY3Jv1JGxGVi",
            "jXGJPr5bbu8Pm1azp1qVLz",
            "3T4PM4a_xeb9HSfb6CA2vP",
            "yxOjIyO9w9FfhRDEZmKWZC",
          ],
          VALVES: [],
          OTHERS: {},
          CAP_NUM: 0,
        },
      ],
      SCHWPS: [],
      CWPS: [
        {
          ELEC: {
            NAME: "CWP1#ELEC",
          },
          ONOFF_SP: {
            NAME: "CWP1#ONOFF_SP",
          },
          ONOFF: {
            NAME: "CWP1#ONOFF",
          },
          ON: {
            NAME: "CWP1#ON",
          },
          OFF: {
            NAME: "CWP1#OFF",
          },
          ON_SP: {
            NAME: "CWP1#ON_SP",
          },
          OFF_SP: {
            NAME: "CWP1#OFF_SP",
          },
          AM: {
            NAME: "CWP1#AM",
          },
          EB: {
            NAME: "CWP1#EB",
          },
          FAULT: {
            NAME: "CWP1#FAULT",
          },
          FAULT_CODE: {
            NAME: "CWP1#FAULT_CODE",
          },
          FAULT_RESET: {
            NAME: "CWP1#FAULT_RESET",
          },
          RANK: {
            NAME: "CWP1#RANK",
          },
          PR_INLET: {
            NAME: "CWP1#PR_INLET",
          },
          PR_OUTLET: {
            NAME: "CWP1#PR_OUTLET",
          },
          HRS_TOTAL: {
            NAME: "CWP1#HRS_TOTAL",
          },
          HRS: {
            NAME: "CWP1#HRS",
          },
          P: {
            NAME: "CWP1#P",
          },
          W: {
            NAME: "CWP1#W",
          },
          COP: {
            NAME: "CWP1#COP",
          },
          ONOFF_VFD_SP: {
            NAME: "CWP1#ONOFF_VFD_SP",
          },
          ONOFF_VFD: {
            NAME: "CWP1#ONOFF_VFD",
          },
          FREQ: {
            NAME: "CWP1#FREQ",
          },
          FREQ_SP: {
            NAME: "CWP1#FREQ_SP",
          },
          FAULT_VFD: {
            NAME: "CWP1#FAULT_VFD",
          },
          P_VFD: {
            NAME: "CWP1#P_VFD",
          },
          FLOW_RATED: {
            NAME: "CWP1#FLOW_RATED",
          },
          P_RATED: {
            NAME: "CWP1#P_RATED",
          },
          COP_RATED: {
            NAME: "CWP1#COP_RATED",
          },
          ID: "iluAkpqnSdWRIN2YShuMOG",
          NO: 1,
          NAME: "冷却水泵#1",
          TYPE: "D0A1C",
          STATION_ID: "aKA0GGZa0NIQHgzurqjJIC",
          STATION_PREFIX_ORG: "HVC1#",
          DEVICE_PREFIX: "CWP1#",
          SUITE_IDS: [
            "oM6qEMxe50PY3Jv1JGxGVi",
            "jXGJPr5bbu8Pm1azp1qVLz",
            "3T4PM4a_xeb9HSfb6CA2vP",
            "yxOjIyO9w9FfhRDEZmKWZC",
          ],
          VALVES: [],
          OTHERS: {},
          CAP_NUM: 0,
        },
        {
          ELEC: {
            NAME: "CWP2#ELEC",
          },
          ONOFF_SP: {
            NAME: "CWP2#ONOFF_SP",
          },
          ONOFF: {
            NAME: "CWP2#ONOFF",
          },
          ON: {
            NAME: "CWP2#ON",
          },
          OFF: {
            NAME: "CWP2#OFF",
          },
          ON_SP: {
            NAME: "CWP2#ON_SP",
          },
          OFF_SP: {
            NAME: "CWP2#OFF_SP",
          },
          AM: {
            NAME: "CWP2#AM",
          },
          EB: {
            NAME: "CWP2#EB",
          },
          FAULT: {
            NAME: "CWP2#FAULT",
          },
          FAULT_CODE: {
            NAME: "CWP2#FAULT_CODE",
          },
          FAULT_RESET: {
            NAME: "CWP2#FAULT_RESET",
          },
          RANK: {
            NAME: "CWP2#RANK",
          },
          PR_INLET: {
            NAME: "CWP2#PR_INLET",
          },
          PR_OUTLET: {
            NAME: "CWP2#PR_OUTLET",
          },
          HRS_TOTAL: {
            NAME: "CWP2#HRS_TOTAL",
          },
          HRS: {
            NAME: "CWP2#HRS",
          },
          P: {
            NAME: "CWP2#P",
          },
          W: {
            NAME: "CWP2#W",
          },
          COP: {
            NAME: "CWP2#COP",
          },
          ONOFF_VFD_SP: {
            NAME: "CWP2#ONOFF_VFD_SP",
          },
          ONOFF_VFD: {
            NAME: "CWP2#ONOFF_VFD",
          },
          FREQ: {
            NAME: "CWP2#FREQ",
          },
          FREQ_SP: {
            NAME: "CWP2#FREQ_SP",
          },
          FAULT_VFD: {
            NAME: "CWP2#FAULT_VFD",
          },
          P_VFD: {
            NAME: "CWP2#P_VFD",
          },
          FLOW_RATED: {
            NAME: "CWP2#FLOW_RATED",
          },
          P_RATED: {
            NAME: "CWP2#P_RATED",
          },
          COP_RATED: {
            NAME: "CWP2#COP_RATED",
          },
          ID: "odiOJxe6bSWpNTswmoRilj",
          NO: 2,
          NAME: "冷却水泵#2",
          TYPE: "D0A1C",
          STATION_ID: "aKA0GGZa0NIQHgzurqjJIC",
          STATION_PREFIX_ORG: "HVC1#",
          DEVICE_PREFIX: "CWP2#",
          SUITE_IDS: [
            "oM6qEMxe50PY3Jv1JGxGVi",
            "jXGJPr5bbu8Pm1azp1qVLz",
            "3T4PM4a_xeb9HSfb6CA2vP",
            "yxOjIyO9w9FfhRDEZmKWZC",
          ],
          VALVES: [],
          OTHERS: {},
          CAP_NUM: 0,
        },
        {
          ELEC: {
            NAME: "CWP3#ELEC",
          },
          ONOFF_SP: {
            NAME: "CWP3#ONOFF_SP",
          },
          ONOFF: {
            NAME: "CWP3#ONOFF",
          },
          ON: {
            NAME: "CWP3#ON",
          },
          OFF: {
            NAME: "CWP3#OFF",
          },
          ON_SP: {
            NAME: "CWP3#ON_SP",
          },
          OFF_SP: {
            NAME: "CWP3#OFF_SP",
          },
          AM: {
            NAME: "CWP3#AM",
          },
          EB: {
            NAME: "CWP3#EB",
          },
          FAULT: {
            NAME: "CWP3#FAULT",
          },
          FAULT_CODE: {
            NAME: "CWP3#FAULT_CODE",
          },
          FAULT_RESET: {
            NAME: "CWP3#FAULT_RESET",
          },
          RANK: {
            NAME: "CWP3#RANK",
          },
          PR_INLET: {
            NAME: "CWP3#PR_INLET",
          },
          PR_OUTLET: {
            NAME: "CWP3#PR_OUTLET",
          },
          HRS_TOTAL: {
            NAME: "CWP3#HRS_TOTAL",
          },
          HRS: {
            NAME: "CWP3#HRS",
          },
          P: {
            NAME: "CWP3#P",
          },
          W: {
            NAME: "CWP3#W",
          },
          COP: {
            NAME: "CWP3#COP",
          },
          ONOFF_VFD_SP: {
            NAME: "CWP3#ONOFF_VFD_SP",
          },
          ONOFF_VFD: {
            NAME: "CWP3#ONOFF_VFD",
          },
          FREQ: {
            NAME: "CWP3#FREQ",
          },
          FREQ_SP: {
            NAME: "CWP3#FREQ_SP",
          },
          FAULT_VFD: {
            NAME: "CWP3#FAULT_VFD",
          },
          P_VFD: {
            NAME: "CWP3#P_VFD",
          },
          FLOW_RATED: {
            NAME: "CWP3#FLOW_RATED",
          },
          P_RATED: {
            NAME: "CWP3#P_RATED",
          },
          COP_RATED: {
            NAME: "CWP3#COP_RATED",
          },
          ID: "MHzDc8b58PDR6Cfqar9hr2",
          NO: 3,
          NAME: "冷却水泵#3",
          TYPE: "D0A1C",
          STATION_ID: "aKA0GGZa0NIQHgzurqjJIC",
          STATION_PREFIX_ORG: "HVC1#",
          DEVICE_PREFIX: "CWP3#",
          SUITE_IDS: [
            "oM6qEMxe50PY3Jv1JGxGVi",
            "jXGJPr5bbu8Pm1azp1qVLz",
            "3T4PM4a_xeb9HSfb6CA2vP",
            "yxOjIyO9w9FfhRDEZmKWZC",
          ],
          VALVES: [],
          OTHERS: {},
          CAP_NUM: 0,
        },
        {
          ELEC: {
            NAME: "CWP4#ELEC",
          },
          ONOFF_SP: {
            NAME: "CWP4#ONOFF_SP",
          },
          ONOFF: {
            NAME: "CWP4#ONOFF",
          },
          ON: {
            NAME: "CWP4#ON",
          },
          OFF: {
            NAME: "CWP4#OFF",
          },
          ON_SP: {
            NAME: "CWP4#ON_SP",
          },
          OFF_SP: {
            NAME: "CWP4#OFF_SP",
          },
          AM: {
            NAME: "CWP4#AM",
          },
          EB: {
            NAME: "CWP4#EB",
          },
          FAULT: {
            NAME: "CWP4#FAULT",
          },
          FAULT_CODE: {
            NAME: "CWP4#FAULT_CODE",
          },
          FAULT_RESET: {
            NAME: "CWP4#FAULT_RESET",
          },
          RANK: {
            NAME: "CWP4#RANK",
          },
          PR_INLET: {
            NAME: "CWP4#PR_INLET",
          },
          PR_OUTLET: {
            NAME: "CWP4#PR_OUTLET",
          },
          HRS_TOTAL: {
            NAME: "CWP4#HRS_TOTAL",
          },
          HRS: {
            NAME: "CWP4#HRS",
          },
          P: {
            NAME: "CWP4#P",
          },
          W: {
            NAME: "CWP4#W",
          },
          COP: {
            NAME: "CWP4#COP",
          },
          ONOFF_VFD_SP: {
            NAME: "CWP4#ONOFF_VFD_SP",
          },
          ONOFF_VFD: {
            NAME: "CWP4#ONOFF_VFD",
          },
          FREQ: {
            NAME: "CWP4#FREQ",
          },
          FREQ_SP: {
            NAME: "CWP4#FREQ_SP",
          },
          FAULT_VFD: {
            NAME: "CWP4#FAULT_VFD",
          },
          P_VFD: {
            NAME: "CWP4#P_VFD",
          },
          FLOW_RATED: {
            NAME: "CWP4#FLOW_RATED",
          },
          P_RATED: {
            NAME: "CWP4#P_RATED",
          },
          COP_RATED: {
            NAME: "CWP4#COP_RATED",
          },
          ID: "FFA5D3hZrwi9XXCRG0VP4J",
          NO: 4,
          NAME: "冷却水泵#4",
          TYPE: "D0A1C",
          STATION_ID: "aKA0GGZa0NIQHgzurqjJIC",
          STATION_PREFIX_ORG: "HVC1#",
          DEVICE_PREFIX: "CWP4#",
          SUITE_IDS: [
            "oM6qEMxe50PY3Jv1JGxGVi",
            "jXGJPr5bbu8Pm1azp1qVLz",
            "3T4PM4a_xeb9HSfb6CA2vP",
            "yxOjIyO9w9FfhRDEZmKWZC",
          ],
          VALVES: [],
          OTHERS: {},
          CAP_NUM: 0,
        },
      ],
      CTS: [
        {
          ONOFF_SP: {
            NAME: "CT1#ONOFF_SP",
          },
          ONOFF: {
            NAME: "CT1#ONOFF",
          },
          ON: {
            NAME: "CT1#ON",
          },
          OFF: {
            NAME: "CT1#OFF",
          },
          ON_SP: {
            NAME: "CT1#ON_SP",
          },
          OFF_SP: {
            NAME: "CT1#OFF_SP",
          },
          AM: {
            NAME: "CT1#AM",
          },
          EB: {
            NAME: "CT1#EB",
          },
          FAULT: {
            NAME: "CT1#FAULT",
          },
          FAULT_CODE: {
            NAME: "CT1#FAULT_CODE",
          },
          FAULT_RESET: {
            NAME: "CT1#FAULT_RESET",
          },
          RANK: {
            NAME: "CT1#RANK",
          },
          HRS_TOTAL: {
            NAME: "CT1#HRS_TOTAL",
          },
          HRS: {
            NAME: "CT1#HRS",
          },
          P: {
            NAME: "CT1#P",
          },
          W: {
            NAME: "CT1#W",
          },
          ELEC: {
            NAME: "CT1#ELEC",
          },
          COP: {
            NAME: "CT1#COP",
          },
          ONOFF_VFD_SP: {
            NAME: "CT1#ONOFF_VFD_SP",
          },
          ONOFF_VFD: {
            NAME: "CT1#ONOFF_VFD",
          },
          FREQ: {
            NAME: "CT1#FREQ",
          },
          FREQ_SP: {
            NAME: "CT1#FREQ_SP",
          },
          FAULT_VFD: {
            NAME: "CT1#FAULT_VFD",
          },
          P_VFD: {
            NAME: "CT1#P_VFD",
          },
          FLOW_RATED: {
            NAME: "CT1#FLOW_RATED",
          },
          P_RATED: {
            NAME: "CT1#P_RATED",
          },
          COP_RATED: {
            NAME: "CT1#COP_RATED",
          },
          ID: "ye5MqHy0TbtrtErh0XmZCn",
          NO: 1,
          NAME: "冷却塔#1",
          TYPE: "D0A1D",
          STATION_ID: "aKA0GGZa0NIQHgzurqjJIC",
          STATION_PREFIX_ORG: "HVC1#",
          DEVICE_PREFIX: "CT1#",
          SUITE_IDS: [
            "oM6qEMxe50PY3Jv1JGxGVi",
            "jXGJPr5bbu8Pm1azp1qVLz",
            "3T4PM4a_xeb9HSfb6CA2vP",
            "yxOjIyO9w9FfhRDEZmKWZC",
          ],
          VALVES: [
            {
              ONOFF_SP: {
                NAME: "V9#ONOFF_SP",
              },
              ONOFF: {
                NAME: "V9#ONOFF",
              },
              OFF: {
                NAME: "V9#OFF",
              },
              ON: {
                NAME: "V9#ON",
              },
              OFF_SP: {
                NAME: "V9#OFF_SP",
              },
              ON_SP: {
                NAME: "V9#ON_SP",
              },
              EB: {
                NAME: "V9#EB",
              },
              AM: {
                NAME: "V9#AM",
              },
              FAULT: {
                NAME: "V9#FAULT",
              },
              NAME: "阀门#9",
              TYPE: "D0A30",
              ID: "iQ9nVLl2uBpstp2iKCzqI3",
              NO: 9,
              VALVES: [],
            },
            {
              ONOFF_SP: {
                NAME: "V10#ONOFF_SP",
              },
              ONOFF: {
                NAME: "V10#ONOFF",
              },
              OFF: {
                NAME: "V10#OFF",
              },
              ON: {
                NAME: "V10#ON",
              },
              OFF_SP: {
                NAME: "V10#OFF_SP",
              },
              ON_SP: {
                NAME: "V10#ON_SP",
              },
              EB: {
                NAME: "V10#EB",
              },
              AM: {
                NAME: "V10#AM",
              },
              FAULT: {
                NAME: "V10#FAULT",
              },
              NAME: "阀门#10",
              TYPE: "D0A30",
              ID: "iUppCA_gPRCe2Lka2gUt8m",
              NO: 10,
              VALVES: [],
            },
          ],
          OTHERS: {},
          CAP_NUM: 0,
        },
        {
          ONOFF_SP: {
            NAME: "CT2#ONOFF_SP",
          },
          ONOFF: {
            NAME: "CT2#ONOFF",
          },
          ON: {
            NAME: "CT2#ON",
          },
          OFF: {
            NAME: "CT2#OFF",
          },
          ON_SP: {
            NAME: "CT2#ON_SP",
          },
          OFF_SP: {
            NAME: "CT2#OFF_SP",
          },
          AM: {
            NAME: "CT2#AM",
          },
          EB: {
            NAME: "CT2#EB",
          },
          FAULT: {
            NAME: "CT2#FAULT",
          },
          FAULT_CODE: {
            NAME: "CT2#FAULT_CODE",
          },
          FAULT_RESET: {
            NAME: "CT2#FAULT_RESET",
          },
          RANK: {
            NAME: "CT2#RANK",
          },
          HRS_TOTAL: {
            NAME: "CT2#HRS_TOTAL",
          },
          HRS: {
            NAME: "CT2#HRS",
          },
          P: {
            NAME: "CT2#P",
          },
          W: {
            NAME: "CT2#W",
          },
          ELEC: {
            NAME: "CT2#ELEC",
          },
          COP: {
            NAME: "CT2#COP",
          },
          ONOFF_VFD_SP: {
            NAME: "CT2#ONOFF_VFD_SP",
          },
          ONOFF_VFD: {
            NAME: "CT2#ONOFF_VFD",
          },
          FREQ: {
            NAME: "CT2#FREQ",
          },
          FREQ_SP: {
            NAME: "CT2#FREQ_SP",
          },
          FAULT_VFD: {
            NAME: "CT2#FAULT_VFD",
          },
          P_VFD: {
            NAME: "CT2#P_VFD",
          },
          FLOW_RATED: {
            NAME: "CT2#FLOW_RATED",
          },
          P_RATED: {
            NAME: "CT2#P_RATED",
          },
          COP_RATED: {
            NAME: "CT2#COP_RATED",
          },
          ID: "qfwQBrtCEQjwZREDhh8ovp",
          NO: 2,
          NAME: "冷却塔#2",
          TYPE: "D0A1D",
          STATION_ID: "aKA0GGZa0NIQHgzurqjJIC",
          STATION_PREFIX_ORG: "HVC1#",
          DEVICE_PREFIX: "CT2#",
          SUITE_IDS: [
            "oM6qEMxe50PY3Jv1JGxGVi",
            "jXGJPr5bbu8Pm1azp1qVLz",
            "3T4PM4a_xeb9HSfb6CA2vP",
            "yxOjIyO9w9FfhRDEZmKWZC",
          ],
          VALVES: [
            {
              ONOFF_SP: {
                NAME: "V11#ONOFF_SP",
              },
              ONOFF: {
                NAME: "V11#ONOFF",
              },
              OFF: {
                NAME: "V11#OFF",
              },
              ON: {
                NAME: "V11#ON",
              },
              OFF_SP: {
                NAME: "V11#OFF_SP",
              },
              ON_SP: {
                NAME: "V11#ON_SP",
              },
              EB: {
                NAME: "V11#EB",
              },
              AM: {
                NAME: "V11#AM",
              },
              FAULT: {
                NAME: "V11#FAULT",
              },
              NAME: "阀门#11",
              TYPE: "D0A30",
              ID: "jvibORBfgRlq_5PkBOTiIr",
              NO: 11,
              VALVES: [],
            },
            {
              ONOFF_SP: {
                NAME: "V12#ONOFF_SP",
              },
              ONOFF: {
                NAME: "V12#ONOFF",
              },
              OFF: {
                NAME: "V12#OFF",
              },
              ON: {
                NAME: "V12#ON",
              },
              OFF_SP: {
                NAME: "V12#OFF_SP",
              },
              ON_SP: {
                NAME: "V12#ON_SP",
              },
              EB: {
                NAME: "V12#EB",
              },
              AM: {
                NAME: "V12#AM",
              },
              FAULT: {
                NAME: "V12#FAULT",
              },
              NAME: "阀门#12",
              TYPE: "D0A30",
              ID: "Euiwh8PYCXq_7ozW8gXO2t",
              NO: 12,
              VALVES: [],
            },
          ],
          OTHERS: {},
          CAP_NUM: 0,
        },
        {
          ONOFF_SP: {
            NAME: "CT3#ONOFF_SP",
          },
          ONOFF: {
            NAME: "CT3#ONOFF",
          },
          ON: {
            NAME: "CT3#ON",
          },
          OFF: {
            NAME: "CT3#OFF",
          },
          ON_SP: {
            NAME: "CT3#ON_SP",
          },
          OFF_SP: {
            NAME: "CT3#OFF_SP",
          },
          AM: {
            NAME: "CT3#AM",
          },
          EB: {
            NAME: "CT3#EB",
          },
          FAULT: {
            NAME: "CT3#FAULT",
          },
          FAULT_CODE: {
            NAME: "CT3#FAULT_CODE",
          },
          FAULT_RESET: {
            NAME: "CT3#FAULT_RESET",
          },
          RANK: {
            NAME: "CT3#RANK",
          },
          HRS_TOTAL: {
            NAME: "CT3#HRS_TOTAL",
          },
          HRS: {
            NAME: "CT3#HRS",
          },
          P: {
            NAME: "CT3#P",
          },
          W: {
            NAME: "CT3#W",
          },
          ELEC: {
            NAME: "CT3#ELEC",
          },
          COP: {
            NAME: "CT3#COP",
          },
          ONOFF_VFD_SP: {
            NAME: "CT3#ONOFF_VFD_SP",
          },
          ONOFF_VFD: {
            NAME: "CT3#ONOFF_VFD",
          },
          FREQ: {
            NAME: "CT3#FREQ",
          },
          FREQ_SP: {
            NAME: "CT3#FREQ_SP",
          },
          FAULT_VFD: {
            NAME: "CT3#FAULT_VFD",
          },
          P_VFD: {
            NAME: "CT3#P_VFD",
          },
          FLOW_RATED: {
            NAME: "CT3#FLOW_RATED",
          },
          P_RATED: {
            NAME: "CT3#P_RATED",
          },
          COP_RATED: {
            NAME: "CT3#COP_RATED",
          },
          ID: "z9kNrWKwhokZokO49Joila",
          NO: 3,
          NAME: "冷却塔#3",
          TYPE: "D0A1D",
          STATION_ID: "aKA0GGZa0NIQHgzurqjJIC",
          STATION_PREFIX_ORG: "HVC1#",
          DEVICE_PREFIX: "CT3#",
          SUITE_IDS: [
            "oM6qEMxe50PY3Jv1JGxGVi",
            "jXGJPr5bbu8Pm1azp1qVLz",
            "3T4PM4a_xeb9HSfb6CA2vP",
            "yxOjIyO9w9FfhRDEZmKWZC",
          ],
          VALVES: [
            {
              ONOFF_SP: {
                NAME: "V13#ONOFF_SP",
              },
              ONOFF: {
                NAME: "V13#ONOFF",
              },
              OFF: {
                NAME: "V13#OFF",
              },
              ON: {
                NAME: "V13#ON",
              },
              OFF_SP: {
                NAME: "V13#OFF_SP",
              },
              ON_SP: {
                NAME: "V13#ON_SP",
              },
              EB: {
                NAME: "V13#EB",
              },
              AM: {
                NAME: "V13#AM",
              },
              FAULT: {
                NAME: "V13#FAULT",
              },
              NAME: "阀门#13",
              TYPE: "D0A30",
              ID: "e9_W9b6otoLOnFZrFJXLRi",
              NO: 13,
              VALVES: [],
            },
            {
              ONOFF_SP: {
                NAME: "V14#ONOFF_SP",
              },
              ONOFF: {
                NAME: "V14#ONOFF",
              },
              OFF: {
                NAME: "V14#OFF",
              },
              ON: {
                NAME: "V14#ON",
              },
              OFF_SP: {
                NAME: "V14#OFF_SP",
              },
              ON_SP: {
                NAME: "V14#ON_SP",
              },
              EB: {
                NAME: "V14#EB",
              },
              AM: {
                NAME: "V14#AM",
              },
              FAULT: {
                NAME: "V14#FAULT",
              },
              NAME: "阀门#14",
              TYPE: "D0A30",
              ID: "0hULtajjeOLqMtTyQWPxWA",
              NO: 14,
              VALVES: [],
            },
          ],
          OTHERS: {},
          CAP_NUM: 0,
        },
        {
          ONOFF_SP: {
            NAME: "CT4#ONOFF_SP",
          },
          ONOFF: {
            NAME: "CT4#ONOFF",
          },
          ON: {
            NAME: "CT4#ON",
          },
          OFF: {
            NAME: "CT4#OFF",
          },
          ON_SP: {
            NAME: "CT4#ON_SP",
          },
          OFF_SP: {
            NAME: "CT4#OFF_SP",
          },
          AM: {
            NAME: "CT4#AM",
          },
          EB: {
            NAME: "CT4#EB",
          },
          FAULT: {
            NAME: "CT4#FAULT",
          },
          FAULT_CODE: {
            NAME: "CT4#FAULT_CODE",
          },
          FAULT_RESET: {
            NAME: "CT4#FAULT_RESET",
          },
          RANK: {
            NAME: "CT4#RANK",
          },
          HRS_TOTAL: {
            NAME: "CT4#HRS_TOTAL",
          },
          HRS: {
            NAME: "CT4#HRS",
          },
          P: {
            NAME: "CT4#P",
          },
          W: {
            NAME: "CT4#W",
          },
          ELEC: {
            NAME: "CT4#ELEC",
          },
          COP: {
            NAME: "CT4#COP",
          },
          ONOFF_VFD_SP: {
            NAME: "CT4#ONOFF_VFD_SP",
          },
          ONOFF_VFD: {
            NAME: "CT4#ONOFF_VFD",
          },
          FREQ: {
            NAME: "CT4#FREQ",
          },
          FREQ_SP: {
            NAME: "CT4#FREQ_SP",
          },
          FAULT_VFD: {
            NAME: "CT4#FAULT_VFD",
          },
          P_VFD: {
            NAME: "CT4#P_VFD",
          },
          FLOW_RATED: {
            NAME: "CT4#FLOW_RATED",
          },
          P_RATED: {
            NAME: "CT4#P_RATED",
          },
          COP_RATED: {
            NAME: "CT4#COP_RATED",
          },
          ID: "fKkvAEuijqotichFttlIKF",
          NO: 4,
          NAME: "冷却塔#4",
          TYPE: "D0A1D",
          STATION_ID: "aKA0GGZa0NIQHgzurqjJIC",
          STATION_PREFIX_ORG: "HVC1#",
          DEVICE_PREFIX: "CT4#",
          SUITE_IDS: [
            "oM6qEMxe50PY3Jv1JGxGVi",
            "jXGJPr5bbu8Pm1azp1qVLz",
            "3T4PM4a_xeb9HSfb6CA2vP",
            "yxOjIyO9w9FfhRDEZmKWZC",
          ],
          VALVES: [
            {
              ONOFF_SP: {
                NAME: "V15#ONOFF_SP",
              },
              ONOFF: {
                NAME: "V15#ONOFF",
              },
              OFF: {
                NAME: "V15#OFF",
              },
              ON: {
                NAME: "V15#ON",
              },
              OFF_SP: {
                NAME: "V15#OFF_SP",
              },
              ON_SP: {
                NAME: "V15#ON_SP",
              },
              EB: {
                NAME: "V15#EB",
              },
              AM: {
                NAME: "V15#AM",
              },
              FAULT: {
                NAME: "V15#FAULT",
              },
              NAME: "阀门#15",
              TYPE: "D0A30",
              ID: "eoRbD025SCKNBCvpFs1btn",
              NO: 15,
              VALVES: [],
            },
            {
              ONOFF_SP: {
                NAME: "V16#ONOFF_SP",
              },
              ONOFF: {
                NAME: "V16#ONOFF",
              },
              OFF: {
                NAME: "V16#OFF",
              },
              ON: {
                NAME: "V16#ON",
              },
              OFF_SP: {
                NAME: "V16#OFF_SP",
              },
              ON_SP: {
                NAME: "V16#ON_SP",
              },
              EB: {
                NAME: "V16#EB",
              },
              AM: {
                NAME: "V16#AM",
              },
              FAULT: {
                NAME: "V16#FAULT",
              },
              NAME: "阀门#16",
              TYPE: "D0A30",
              ID: "wggnS6uBEo1qHuOEoT0atb",
              NO: 16,
              VALVES: [],
            },
          ],
          OTHERS: {},
          CAP_NUM: 0,
        },
      ],
      ID: "3T4PM4a_xeb9HSfb6CA2vP",
      NO: 3,
      NAME: "制冷机#3",
      TYPE: "D0A1A",
      STATION_ID: "aKA0GGZa0NIQHgzurqjJIC",
      STATION_PREFIX_ORG: "HVC1#",
      DEVICE_PREFIX: "CH3#",
      SUITE_IDS: [],
      VALVES: [
        {
          ONOFF_SP: {
            NAME: "V5#ONOFF_SP",
          },
          ONOFF: {
            NAME: "V5#ONOFF",
          },
          OFF: {
            NAME: "V5#OFF",
          },
          ON: {
            NAME: "V5#ON",
          },
          OFF_SP: {
            NAME: "V5#OFF_SP",
          },
          ON_SP: {
            NAME: "V5#ON_SP",
          },
          EB: {
            NAME: "V5#EB",
          },
          AM: {
            NAME: "V5#AM",
          },
          FAULT: {
            NAME: "V5#FAULT",
          },
          NAME: "阀门#5",
          TYPE: "D0A30",
          ID: "6LeVs0tVP9MJJS_R2cAcyB",
          NO: 5,
          VALVES: [],
        },
        {
          ONOFF_SP: {
            NAME: "V6#ONOFF_SP",
          },
          ONOFF: {
            NAME: "V6#ONOFF",
          },
          OFF: {
            NAME: "V6#OFF",
          },
          ON: {
            NAME: "V6#ON",
          },
          OFF_SP: {
            NAME: "V6#OFF_SP",
          },
          ON_SP: {
            NAME: "V6#ON_SP",
          },
          EB: {
            NAME: "V6#EB",
          },
          AM: {
            NAME: "V6#AM",
          },
          FAULT: {
            NAME: "V6#FAULT",
          },
          NAME: "阀门#6",
          TYPE: "D0A30",
          ID: "DmNdg3yWNH7EoaHtgdCjY6",
          NO: 6,
          VALVES: [],
        },
      ],
      OTHERS: {},
      CAP_NUM: 0,
    },
    yxOjIyO9w9FfhRDEZmKWZC: {
      ONOFF_SP: {
        NAME: "CH4#ONOFF_SP",
      },
      AM: {
        NAME: "CH4#AM",
      },
      EB: {
        NAME: "CH4#EB",
      },
      ONOFF: {
        NAME: "CH4#ONOFF",
      },
      ON: {
        NAME: "CH4#ON",
      },
      OFF: {
        NAME: "CH4#OFF",
      },
      ON_SP: {
        NAME: "CH4#ON_SP",
      },
      OFF_SP: {
        NAME: "CH4#OFF_SP",
      },
      FAULT: {
        NAME: "CH4#FAULT",
      },
      FAULT_CODE: {
        NAME: "CH4#FAULT_CODE",
      },
      FAULT_RESET: {
        NAME: "CH4#FAULT_RESET",
      },
      T_CHW_S: {
        NAME: "CH4#T_CHW_S",
      },
      T_CHW_S_SP: {
        NAME: "CH4#T_CHW_S_SP",
      },
      HRS_TOTAL: {
        NAME: "CH4#HRS_TOTAL",
      },
      HRS: {
        NAME: "CH4#HRS",
      },
      I_PCT: {
        NAME: "CH4#I_PCT",
      },
      I_PCT_MAX_SP: {
        NAME: "CH4#I_PCT_MAX_SP",
      },
      T_EXHT: {
        NAME: "CH4#T_EXHT",
      },
      T_EVAP_ENT: {
        NAME: "CH4#T_EVAP_ENT",
      },
      T_EVAP_LEV: {
        NAME: "CH4#T_EVAP_LEV",
      },
      T_EVAP: {
        NAME: "CH4#T_EVAP",
      },
      PR_EVAP: {
        NAME: "CH4#PR_EVAP",
      },
      T_COND_ENT: {
        NAME: "CH4#T_COND_ENT",
      },
      T_COND_LEV: {
        NAME: "CH4#T_COND_LEV",
      },
      T_COND: {
        NAME: "CH4#T_COND",
      },
      PR_COND: {
        NAME: "CH4#PR_COND",
      },
      T_OIL: {
        NAME: "CH4#T_OIL",
      },
      DPR_OIL: {
        NAME: "CH4#DPR_OIL",
      },
      COUNT_SS: {
        NAME: "CH4#COUNT_SS",
      },
      RANK: {
        NAME: "CH4#RANK",
      },
      P: {
        NAME: "CH4#P",
      },
      W: {
        NAME: "CH4#W",
      },
      ELEC: {
        NAME: "CH4#ELEC",
      },
      I: {
        NAME: "CH4#I",
      },
      COP: {
        NAME: "CH4#COP",
      },
      MODE: {
        NAME: "CH4#MODE",
      },
      T_COND_PROTECT: {
        NAME: "CH4#T_COND_PROTECT",
      },
      PR_EXHT_PROTECT: {
        NAME: "CH4#PR_EXHT_PROTECT",
      },
      P_RATED: {
        NAME: "CH4#P_RATED",
      },
      LOAD_RATED: {
        NAME: "CH4#LOAD_RATED",
        VALUE: "2000",
        VALUE_O: 2000,
      },
      COP_RATED: {
        NAME: "CH4#COP_RATED",
      },
      FLOW_CHW_RATED: {
        NAME: "CH4#FLOW_CHW_RATED",
      },
      FLOW_CW_RATED: {
        NAME: "CH4#FLOW_CW_RATED",
      },
      PLR: {
        NAME: "CH4#PLR",
      },
      LOAD: {
        NAME: "CH4#LOAD",
      },
      FLOW_CHW: {
        NAME: "CH4#FLOW_CHW",
      },
      FLOW_CW: {
        NAME: "CH4#FLOW_CW",
      },
      FLOW_CHW_SWITCH: {
        NAME: "CH4#FLOW_CHW_SWITCH",
      },
      FLOW_CW_SWITCH: {
        NAME: "CH4#FLOW_CW_SWITCH",
      },
      T_CW_R: {
        NAME: "CH4#T_CW_R",
      },
      ONECLICK_START: {
        NAME: "CH4#ONECLICK_START",
      },
      ONECLICK_STOP: {
        NAME: "CH4#ONECLICK_STOP",
      },
      CHWPS: [
        {
          ELEC: {
            NAME: "CHWP1#ELEC",
          },
          ONOFF_SP: {
            NAME: "CHWP1#ONOFF_SP",
          },
          ONOFF: {
            NAME: "CHWP1#ONOFF",
          },
          ON: {
            NAME: "CHWP1#ON",
          },
          OFF: {
            NAME: "CHWP1#OFF",
          },
          ON_SP: {
            NAME: "CHWP1#ON_SP",
          },
          OFF_SP: {
            NAME: "CHWP1#OFF_SP",
          },
          AM: {
            NAME: "CHWP1#AM",
          },
          EB: {
            NAME: "CHWP1#EB",
          },
          FAULT: {
            NAME: "CHWP1#FAULT",
          },
          FAULT_CODE: {
            NAME: "CHWP1#FAULT_CODE",
          },
          FAULT_RESET: {
            NAME: "CHWP1#FAULT_RESET",
          },
          RANK: {
            NAME: "CHWP1#RANK",
          },
          PR_INLET: {
            NAME: "CHWP1#PR_INLET",
          },
          PR_OUTLET: {
            NAME: "CHWP1#PR_OUTLET",
          },
          HRS_TOTAL: {
            NAME: "CHWP1#HRS_TOTAL",
          },
          HRS: {
            NAME: "CHWP1#HRS",
          },
          P: {
            NAME: "CHWP1#P",
          },
          W: {
            NAME: "CHWP1#W",
          },
          COP: {
            NAME: "CHWP1#COP",
          },
          ONOFF_VFD_SP: {
            NAME: "CHWP1#ONOFF_VFD_SP",
          },
          ONOFF_VFD: {
            NAME: "CHWP1#ONOFF_VFD",
          },
          FREQ: {
            NAME: "CHWP1#FREQ",
          },
          FREQ_SP: {
            NAME: "CHWP1#FREQ_SP",
          },
          FAULT_VFD: {
            NAME: "CHWP1#FAULT_VFD",
          },
          P_VFD: {
            NAME: "CHWP1#P_VFD",
          },
          FLOW_RATED: {
            NAME: "CHWP1#FLOW_RATED",
          },
          P_RATED: {
            NAME: "CHWP1#P_RATED",
          },
          COP_RATED: {
            NAME: "CHWP1#COP_RATED",
          },
          ID: "SUbrIvPCme75m1DiOk5Qkm",
          NO: 1,
          NAME: "冷冻水泵#1",
          TYPE: "D0A1B",
          STATION_ID: "aKA0GGZa0NIQHgzurqjJIC",
          STATION_PREFIX_ORG: "HVC1#",
          DEVICE_PREFIX: "CHWP1#",
          SUITE_IDS: [
            "oM6qEMxe50PY3Jv1JGxGVi",
            "jXGJPr5bbu8Pm1azp1qVLz",
            "3T4PM4a_xeb9HSfb6CA2vP",
            "yxOjIyO9w9FfhRDEZmKWZC",
          ],
          VALVES: [],
          OTHERS: {},
          CAP_NUM: 0,
        },
        {
          ELEC: {
            NAME: "CHWP2#ELEC",
          },
          ONOFF_SP: {
            NAME: "CHWP2#ONOFF_SP",
          },
          ONOFF: {
            NAME: "CHWP2#ONOFF",
          },
          ON: {
            NAME: "CHWP2#ON",
          },
          OFF: {
            NAME: "CHWP2#OFF",
          },
          ON_SP: {
            NAME: "CHWP2#ON_SP",
          },
          OFF_SP: {
            NAME: "CHWP2#OFF_SP",
          },
          AM: {
            NAME: "CHWP2#AM",
          },
          EB: {
            NAME: "CHWP2#EB",
          },
          FAULT: {
            NAME: "CHWP2#FAULT",
          },
          FAULT_CODE: {
            NAME: "CHWP2#FAULT_CODE",
          },
          FAULT_RESET: {
            NAME: "CHWP2#FAULT_RESET",
          },
          RANK: {
            NAME: "CHWP2#RANK",
          },
          PR_INLET: {
            NAME: "CHWP2#PR_INLET",
          },
          PR_OUTLET: {
            NAME: "CHWP2#PR_OUTLET",
          },
          HRS_TOTAL: {
            NAME: "CHWP2#HRS_TOTAL",
          },
          HRS: {
            NAME: "CHWP2#HRS",
          },
          P: {
            NAME: "CHWP2#P",
          },
          W: {
            NAME: "CHWP2#W",
          },
          COP: {
            NAME: "CHWP2#COP",
          },
          ONOFF_VFD_SP: {
            NAME: "CHWP2#ONOFF_VFD_SP",
          },
          ONOFF_VFD: {
            NAME: "CHWP2#ONOFF_VFD",
          },
          FREQ: {
            NAME: "CHWP2#FREQ",
          },
          FREQ_SP: {
            NAME: "CHWP2#FREQ_SP",
          },
          FAULT_VFD: {
            NAME: "CHWP2#FAULT_VFD",
          },
          P_VFD: {
            NAME: "CHWP2#P_VFD",
          },
          FLOW_RATED: {
            NAME: "CHWP2#FLOW_RATED",
          },
          P_RATED: {
            NAME: "CHWP2#P_RATED",
          },
          COP_RATED: {
            NAME: "CHWP2#COP_RATED",
          },
          ID: "KJ7AxiKb6OCoOTfqVWkE12",
          NO: 2,
          NAME: "冷冻水泵#2",
          TYPE: "D0A1B",
          STATION_ID: "aKA0GGZa0NIQHgzurqjJIC",
          STATION_PREFIX_ORG: "HVC1#",
          DEVICE_PREFIX: "CHWP2#",
          SUITE_IDS: [
            "oM6qEMxe50PY3Jv1JGxGVi",
            "jXGJPr5bbu8Pm1azp1qVLz",
            "3T4PM4a_xeb9HSfb6CA2vP",
            "yxOjIyO9w9FfhRDEZmKWZC",
          ],
          VALVES: [],
          OTHERS: {},
          CAP_NUM: 0,
        },
        {
          ELEC: {
            NAME: "CHWP3#ELEC",
          },
          ONOFF_SP: {
            NAME: "CHWP3#ONOFF_SP",
          },
          ONOFF: {
            NAME: "CHWP3#ONOFF",
          },
          ON: {
            NAME: "CHWP3#ON",
          },
          OFF: {
            NAME: "CHWP3#OFF",
          },
          ON_SP: {
            NAME: "CHWP3#ON_SP",
          },
          OFF_SP: {
            NAME: "CHWP3#OFF_SP",
          },
          AM: {
            NAME: "CHWP3#AM",
          },
          EB: {
            NAME: "CHWP3#EB",
          },
          FAULT: {
            NAME: "CHWP3#FAULT",
          },
          FAULT_CODE: {
            NAME: "CHWP3#FAULT_CODE",
          },
          FAULT_RESET: {
            NAME: "CHWP3#FAULT_RESET",
          },
          RANK: {
            NAME: "CHWP3#RANK",
          },
          PR_INLET: {
            NAME: "CHWP3#PR_INLET",
          },
          PR_OUTLET: {
            NAME: "CHWP3#PR_OUTLET",
          },
          HRS_TOTAL: {
            NAME: "CHWP3#HRS_TOTAL",
          },
          HRS: {
            NAME: "CHWP3#HRS",
          },
          P: {
            NAME: "CHWP3#P",
          },
          W: {
            NAME: "CHWP3#W",
          },
          COP: {
            NAME: "CHWP3#COP",
          },
          ONOFF_VFD_SP: {
            NAME: "CHWP3#ONOFF_VFD_SP",
          },
          ONOFF_VFD: {
            NAME: "CHWP3#ONOFF_VFD",
          },
          FREQ: {
            NAME: "CHWP3#FREQ",
          },
          FREQ_SP: {
            NAME: "CHWP3#FREQ_SP",
          },
          FAULT_VFD: {
            NAME: "CHWP3#FAULT_VFD",
          },
          P_VFD: {
            NAME: "CHWP3#P_VFD",
          },
          FLOW_RATED: {
            NAME: "CHWP3#FLOW_RATED",
          },
          P_RATED: {
            NAME: "CHWP3#P_RATED",
          },
          COP_RATED: {
            NAME: "CHWP3#COP_RATED",
          },
          ID: "3JNiytZOf9Yvj9cFu76TrD",
          NO: 3,
          NAME: "冷冻水泵#3",
          TYPE: "D0A1B",
          STATION_ID: "aKA0GGZa0NIQHgzurqjJIC",
          STATION_PREFIX_ORG: "HVC1#",
          DEVICE_PREFIX: "CHWP3#",
          SUITE_IDS: [
            "oM6qEMxe50PY3Jv1JGxGVi",
            "jXGJPr5bbu8Pm1azp1qVLz",
            "3T4PM4a_xeb9HSfb6CA2vP",
            "yxOjIyO9w9FfhRDEZmKWZC",
          ],
          VALVES: [],
          OTHERS: {},
          CAP_NUM: 0,
        },
        {
          ELEC: {
            NAME: "CHWP4#ELEC",
          },
          ONOFF_SP: {
            NAME: "CHWP4#ONOFF_SP",
          },
          ONOFF: {
            NAME: "CHWP4#ONOFF",
          },
          ON: {
            NAME: "CHWP4#ON",
          },
          OFF: {
            NAME: "CHWP4#OFF",
          },
          ON_SP: {
            NAME: "CHWP4#ON_SP",
          },
          OFF_SP: {
            NAME: "CHWP4#OFF_SP",
          },
          AM: {
            NAME: "CHWP4#AM",
          },
          EB: {
            NAME: "CHWP4#EB",
          },
          FAULT: {
            NAME: "CHWP4#FAULT",
          },
          FAULT_CODE: {
            NAME: "CHWP4#FAULT_CODE",
          },
          FAULT_RESET: {
            NAME: "CHWP4#FAULT_RESET",
          },
          RANK: {
            NAME: "CHWP4#RANK",
          },
          PR_INLET: {
            NAME: "CHWP4#PR_INLET",
          },
          PR_OUTLET: {
            NAME: "CHWP4#PR_OUTLET",
          },
          HRS_TOTAL: {
            NAME: "CHWP4#HRS_TOTAL",
          },
          HRS: {
            NAME: "CHWP4#HRS",
          },
          P: {
            NAME: "CHWP4#P",
          },
          W: {
            NAME: "CHWP4#W",
          },
          COP: {
            NAME: "CHWP4#COP",
          },
          ONOFF_VFD_SP: {
            NAME: "CHWP4#ONOFF_VFD_SP",
          },
          ONOFF_VFD: {
            NAME: "CHWP4#ONOFF_VFD",
          },
          FREQ: {
            NAME: "CHWP4#FREQ",
          },
          FREQ_SP: {
            NAME: "CHWP4#FREQ_SP",
          },
          FAULT_VFD: {
            NAME: "CHWP4#FAULT_VFD",
          },
          P_VFD: {
            NAME: "CHWP4#P_VFD",
          },
          FLOW_RATED: {
            NAME: "CHWP4#FLOW_RATED",
          },
          P_RATED: {
            NAME: "CHWP4#P_RATED",
          },
          COP_RATED: {
            NAME: "CHWP4#COP_RATED",
          },
          ID: "OuSSIIufxo_z3LBn4vucpo",
          NO: 4,
          NAME: "冷冻水泵#4",
          TYPE: "D0A1B",
          STATION_ID: "aKA0GGZa0NIQHgzurqjJIC",
          STATION_PREFIX_ORG: "HVC1#",
          DEVICE_PREFIX: "CHWP4#",
          SUITE_IDS: [
            "oM6qEMxe50PY3Jv1JGxGVi",
            "jXGJPr5bbu8Pm1azp1qVLz",
            "3T4PM4a_xeb9HSfb6CA2vP",
            "yxOjIyO9w9FfhRDEZmKWZC",
          ],
          VALVES: [],
          OTHERS: {},
          CAP_NUM: 0,
        },
      ],
      SCHWPS: [],
      CWPS: [
        {
          ELEC: {
            NAME: "CWP1#ELEC",
          },
          ONOFF_SP: {
            NAME: "CWP1#ONOFF_SP",
          },
          ONOFF: {
            NAME: "CWP1#ONOFF",
          },
          ON: {
            NAME: "CWP1#ON",
          },
          OFF: {
            NAME: "CWP1#OFF",
          },
          ON_SP: {
            NAME: "CWP1#ON_SP",
          },
          OFF_SP: {
            NAME: "CWP1#OFF_SP",
          },
          AM: {
            NAME: "CWP1#AM",
          },
          EB: {
            NAME: "CWP1#EB",
          },
          FAULT: {
            NAME: "CWP1#FAULT",
          },
          FAULT_CODE: {
            NAME: "CWP1#FAULT_CODE",
          },
          FAULT_RESET: {
            NAME: "CWP1#FAULT_RESET",
          },
          RANK: {
            NAME: "CWP1#RANK",
          },
          PR_INLET: {
            NAME: "CWP1#PR_INLET",
          },
          PR_OUTLET: {
            NAME: "CWP1#PR_OUTLET",
          },
          HRS_TOTAL: {
            NAME: "CWP1#HRS_TOTAL",
          },
          HRS: {
            NAME: "CWP1#HRS",
          },
          P: {
            NAME: "CWP1#P",
          },
          W: {
            NAME: "CWP1#W",
          },
          COP: {
            NAME: "CWP1#COP",
          },
          ONOFF_VFD_SP: {
            NAME: "CWP1#ONOFF_VFD_SP",
          },
          ONOFF_VFD: {
            NAME: "CWP1#ONOFF_VFD",
          },
          FREQ: {
            NAME: "CWP1#FREQ",
          },
          FREQ_SP: {
            NAME: "CWP1#FREQ_SP",
          },
          FAULT_VFD: {
            NAME: "CWP1#FAULT_VFD",
          },
          P_VFD: {
            NAME: "CWP1#P_VFD",
          },
          FLOW_RATED: {
            NAME: "CWP1#FLOW_RATED",
          },
          P_RATED: {
            NAME: "CWP1#P_RATED",
          },
          COP_RATED: {
            NAME: "CWP1#COP_RATED",
          },
          ID: "iluAkpqnSdWRIN2YShuMOG",
          NO: 1,
          NAME: "冷却水泵#1",
          TYPE: "D0A1C",
          STATION_ID: "aKA0GGZa0NIQHgzurqjJIC",
          STATION_PREFIX_ORG: "HVC1#",
          DEVICE_PREFIX: "CWP1#",
          SUITE_IDS: [
            "oM6qEMxe50PY3Jv1JGxGVi",
            "jXGJPr5bbu8Pm1azp1qVLz",
            "3T4PM4a_xeb9HSfb6CA2vP",
            "yxOjIyO9w9FfhRDEZmKWZC",
          ],
          VALVES: [],
          OTHERS: {},
          CAP_NUM: 0,
        },
        {
          ELEC: {
            NAME: "CWP2#ELEC",
          },
          ONOFF_SP: {
            NAME: "CWP2#ONOFF_SP",
          },
          ONOFF: {
            NAME: "CWP2#ONOFF",
          },
          ON: {
            NAME: "CWP2#ON",
          },
          OFF: {
            NAME: "CWP2#OFF",
          },
          ON_SP: {
            NAME: "CWP2#ON_SP",
          },
          OFF_SP: {
            NAME: "CWP2#OFF_SP",
          },
          AM: {
            NAME: "CWP2#AM",
          },
          EB: {
            NAME: "CWP2#EB",
          },
          FAULT: {
            NAME: "CWP2#FAULT",
          },
          FAULT_CODE: {
            NAME: "CWP2#FAULT_CODE",
          },
          FAULT_RESET: {
            NAME: "CWP2#FAULT_RESET",
          },
          RANK: {
            NAME: "CWP2#RANK",
          },
          PR_INLET: {
            NAME: "CWP2#PR_INLET",
          },
          PR_OUTLET: {
            NAME: "CWP2#PR_OUTLET",
          },
          HRS_TOTAL: {
            NAME: "CWP2#HRS_TOTAL",
          },
          HRS: {
            NAME: "CWP2#HRS",
          },
          P: {
            NAME: "CWP2#P",
          },
          W: {
            NAME: "CWP2#W",
          },
          COP: {
            NAME: "CWP2#COP",
          },
          ONOFF_VFD_SP: {
            NAME: "CWP2#ONOFF_VFD_SP",
          },
          ONOFF_VFD: {
            NAME: "CWP2#ONOFF_VFD",
          },
          FREQ: {
            NAME: "CWP2#FREQ",
          },
          FREQ_SP: {
            NAME: "CWP2#FREQ_SP",
          },
          FAULT_VFD: {
            NAME: "CWP2#FAULT_VFD",
          },
          P_VFD: {
            NAME: "CWP2#P_VFD",
          },
          FLOW_RATED: {
            NAME: "CWP2#FLOW_RATED",
          },
          P_RATED: {
            NAME: "CWP2#P_RATED",
          },
          COP_RATED: {
            NAME: "CWP2#COP_RATED",
          },
          ID: "odiOJxe6bSWpNTswmoRilj",
          NO: 2,
          NAME: "冷却水泵#2",
          TYPE: "D0A1C",
          STATION_ID: "aKA0GGZa0NIQHgzurqjJIC",
          STATION_PREFIX_ORG: "HVC1#",
          DEVICE_PREFIX: "CWP2#",
          SUITE_IDS: [
            "oM6qEMxe50PY3Jv1JGxGVi",
            "jXGJPr5bbu8Pm1azp1qVLz",
            "3T4PM4a_xeb9HSfb6CA2vP",
            "yxOjIyO9w9FfhRDEZmKWZC",
          ],
          VALVES: [],
          OTHERS: {},
          CAP_NUM: 0,
        },
        {
          ELEC: {
            NAME: "CWP3#ELEC",
          },
          ONOFF_SP: {
            NAME: "CWP3#ONOFF_SP",
          },
          ONOFF: {
            NAME: "CWP3#ONOFF",
          },
          ON: {
            NAME: "CWP3#ON",
          },
          OFF: {
            NAME: "CWP3#OFF",
          },
          ON_SP: {
            NAME: "CWP3#ON_SP",
          },
          OFF_SP: {
            NAME: "CWP3#OFF_SP",
          },
          AM: {
            NAME: "CWP3#AM",
          },
          EB: {
            NAME: "CWP3#EB",
          },
          FAULT: {
            NAME: "CWP3#FAULT",
          },
          FAULT_CODE: {
            NAME: "CWP3#FAULT_CODE",
          },
          FAULT_RESET: {
            NAME: "CWP3#FAULT_RESET",
          },
          RANK: {
            NAME: "CWP3#RANK",
          },
          PR_INLET: {
            NAME: "CWP3#PR_INLET",
          },
          PR_OUTLET: {
            NAME: "CWP3#PR_OUTLET",
          },
          HRS_TOTAL: {
            NAME: "CWP3#HRS_TOTAL",
          },
          HRS: {
            NAME: "CWP3#HRS",
          },
          P: {
            NAME: "CWP3#P",
          },
          W: {
            NAME: "CWP3#W",
          },
          COP: {
            NAME: "CWP3#COP",
          },
          ONOFF_VFD_SP: {
            NAME: "CWP3#ONOFF_VFD_SP",
          },
          ONOFF_VFD: {
            NAME: "CWP3#ONOFF_VFD",
          },
          FREQ: {
            NAME: "CWP3#FREQ",
          },
          FREQ_SP: {
            NAME: "CWP3#FREQ_SP",
          },
          FAULT_VFD: {
            NAME: "CWP3#FAULT_VFD",
          },
          P_VFD: {
            NAME: "CWP3#P_VFD",
          },
          FLOW_RATED: {
            NAME: "CWP3#FLOW_RATED",
          },
          P_RATED: {
            NAME: "CWP3#P_RATED",
          },
          COP_RATED: {
            NAME: "CWP3#COP_RATED",
          },
          ID: "MHzDc8b58PDR6Cfqar9hr2",
          NO: 3,
          NAME: "冷却水泵#3",
          TYPE: "D0A1C",
          STATION_ID: "aKA0GGZa0NIQHgzurqjJIC",
          STATION_PREFIX_ORG: "HVC1#",
          DEVICE_PREFIX: "CWP3#",
          SUITE_IDS: [
            "oM6qEMxe50PY3Jv1JGxGVi",
            "jXGJPr5bbu8Pm1azp1qVLz",
            "3T4PM4a_xeb9HSfb6CA2vP",
            "yxOjIyO9w9FfhRDEZmKWZC",
          ],
          VALVES: [],
          OTHERS: {},
          CAP_NUM: 0,
        },
        {
          ELEC: {
            NAME: "CWP4#ELEC",
          },
          ONOFF_SP: {
            NAME: "CWP4#ONOFF_SP",
          },
          ONOFF: {
            NAME: "CWP4#ONOFF",
          },
          ON: {
            NAME: "CWP4#ON",
          },
          OFF: {
            NAME: "CWP4#OFF",
          },
          ON_SP: {
            NAME: "CWP4#ON_SP",
          },
          OFF_SP: {
            NAME: "CWP4#OFF_SP",
          },
          AM: {
            NAME: "CWP4#AM",
          },
          EB: {
            NAME: "CWP4#EB",
          },
          FAULT: {
            NAME: "CWP4#FAULT",
          },
          FAULT_CODE: {
            NAME: "CWP4#FAULT_CODE",
          },
          FAULT_RESET: {
            NAME: "CWP4#FAULT_RESET",
          },
          RANK: {
            NAME: "CWP4#RANK",
          },
          PR_INLET: {
            NAME: "CWP4#PR_INLET",
          },
          PR_OUTLET: {
            NAME: "CWP4#PR_OUTLET",
          },
          HRS_TOTAL: {
            NAME: "CWP4#HRS_TOTAL",
          },
          HRS: {
            NAME: "CWP4#HRS",
          },
          P: {
            NAME: "CWP4#P",
          },
          W: {
            NAME: "CWP4#W",
          },
          COP: {
            NAME: "CWP4#COP",
          },
          ONOFF_VFD_SP: {
            NAME: "CWP4#ONOFF_VFD_SP",
          },
          ONOFF_VFD: {
            NAME: "CWP4#ONOFF_VFD",
          },
          FREQ: {
            NAME: "CWP4#FREQ",
          },
          FREQ_SP: {
            NAME: "CWP4#FREQ_SP",
          },
          FAULT_VFD: {
            NAME: "CWP4#FAULT_VFD",
          },
          P_VFD: {
            NAME: "CWP4#P_VFD",
          },
          FLOW_RATED: {
            NAME: "CWP4#FLOW_RATED",
          },
          P_RATED: {
            NAME: "CWP4#P_RATED",
          },
          COP_RATED: {
            NAME: "CWP4#COP_RATED",
          },
          ID: "FFA5D3hZrwi9XXCRG0VP4J",
          NO: 4,
          NAME: "冷却水泵#4",
          TYPE: "D0A1C",
          STATION_ID: "aKA0GGZa0NIQHgzurqjJIC",
          STATION_PREFIX_ORG: "HVC1#",
          DEVICE_PREFIX: "CWP4#",
          SUITE_IDS: [
            "oM6qEMxe50PY3Jv1JGxGVi",
            "jXGJPr5bbu8Pm1azp1qVLz",
            "3T4PM4a_xeb9HSfb6CA2vP",
            "yxOjIyO9w9FfhRDEZmKWZC",
          ],
          VALVES: [],
          OTHERS: {},
          CAP_NUM: 0,
        },
      ],
      CTS: [
        {
          ONOFF_SP: {
            NAME: "CT1#ONOFF_SP",
          },
          ONOFF: {
            NAME: "CT1#ONOFF",
          },
          ON: {
            NAME: "CT1#ON",
          },
          OFF: {
            NAME: "CT1#OFF",
          },
          ON_SP: {
            NAME: "CT1#ON_SP",
          },
          OFF_SP: {
            NAME: "CT1#OFF_SP",
          },
          AM: {
            NAME: "CT1#AM",
          },
          EB: {
            NAME: "CT1#EB",
          },
          FAULT: {
            NAME: "CT1#FAULT",
          },
          FAULT_CODE: {
            NAME: "CT1#FAULT_CODE",
          },
          FAULT_RESET: {
            NAME: "CT1#FAULT_RESET",
          },
          RANK: {
            NAME: "CT1#RANK",
          },
          HRS_TOTAL: {
            NAME: "CT1#HRS_TOTAL",
          },
          HRS: {
            NAME: "CT1#HRS",
          },
          P: {
            NAME: "CT1#P",
          },
          W: {
            NAME: "CT1#W",
          },
          ELEC: {
            NAME: "CT1#ELEC",
          },
          COP: {
            NAME: "CT1#COP",
          },
          ONOFF_VFD_SP: {
            NAME: "CT1#ONOFF_VFD_SP",
          },
          ONOFF_VFD: {
            NAME: "CT1#ONOFF_VFD",
          },
          FREQ: {
            NAME: "CT1#FREQ",
          },
          FREQ_SP: {
            NAME: "CT1#FREQ_SP",
          },
          FAULT_VFD: {
            NAME: "CT1#FAULT_VFD",
          },
          P_VFD: {
            NAME: "CT1#P_VFD",
          },
          FLOW_RATED: {
            NAME: "CT1#FLOW_RATED",
          },
          P_RATED: {
            NAME: "CT1#P_RATED",
          },
          COP_RATED: {
            NAME: "CT1#COP_RATED",
          },
          ID: "ye5MqHy0TbtrtErh0XmZCn",
          NO: 1,
          NAME: "冷却塔#1",
          TYPE: "D0A1D",
          STATION_ID: "aKA0GGZa0NIQHgzurqjJIC",
          STATION_PREFIX_ORG: "HVC1#",
          DEVICE_PREFIX: "CT1#",
          SUITE_IDS: [
            "oM6qEMxe50PY3Jv1JGxGVi",
            "jXGJPr5bbu8Pm1azp1qVLz",
            "3T4PM4a_xeb9HSfb6CA2vP",
            "yxOjIyO9w9FfhRDEZmKWZC",
          ],
          VALVES: [
            {
              ONOFF_SP: {
                NAME: "V9#ONOFF_SP",
              },
              ONOFF: {
                NAME: "V9#ONOFF",
              },
              OFF: {
                NAME: "V9#OFF",
              },
              ON: {
                NAME: "V9#ON",
              },
              OFF_SP: {
                NAME: "V9#OFF_SP",
              },
              ON_SP: {
                NAME: "V9#ON_SP",
              },
              EB: {
                NAME: "V9#EB",
              },
              AM: {
                NAME: "V9#AM",
              },
              FAULT: {
                NAME: "V9#FAULT",
              },
              NAME: "阀门#9",
              TYPE: "D0A30",
              ID: "iQ9nVLl2uBpstp2iKCzqI3",
              NO: 9,
              VALVES: [],
            },
            {
              ONOFF_SP: {
                NAME: "V10#ONOFF_SP",
              },
              ONOFF: {
                NAME: "V10#ONOFF",
              },
              OFF: {
                NAME: "V10#OFF",
              },
              ON: {
                NAME: "V10#ON",
              },
              OFF_SP: {
                NAME: "V10#OFF_SP",
              },
              ON_SP: {
                NAME: "V10#ON_SP",
              },
              EB: {
                NAME: "V10#EB",
              },
              AM: {
                NAME: "V10#AM",
              },
              FAULT: {
                NAME: "V10#FAULT",
              },
              NAME: "阀门#10",
              TYPE: "D0A30",
              ID: "iUppCA_gPRCe2Lka2gUt8m",
              NO: 10,
              VALVES: [],
            },
          ],
          OTHERS: {},
          CAP_NUM: 0,
        },
        {
          ONOFF_SP: {
            NAME: "CT2#ONOFF_SP",
          },
          ONOFF: {
            NAME: "CT2#ONOFF",
          },
          ON: {
            NAME: "CT2#ON",
          },
          OFF: {
            NAME: "CT2#OFF",
          },
          ON_SP: {
            NAME: "CT2#ON_SP",
          },
          OFF_SP: {
            NAME: "CT2#OFF_SP",
          },
          AM: {
            NAME: "CT2#AM",
          },
          EB: {
            NAME: "CT2#EB",
          },
          FAULT: {
            NAME: "CT2#FAULT",
          },
          FAULT_CODE: {
            NAME: "CT2#FAULT_CODE",
          },
          FAULT_RESET: {
            NAME: "CT2#FAULT_RESET",
          },
          RANK: {
            NAME: "CT2#RANK",
          },
          HRS_TOTAL: {
            NAME: "CT2#HRS_TOTAL",
          },
          HRS: {
            NAME: "CT2#HRS",
          },
          P: {
            NAME: "CT2#P",
          },
          W: {
            NAME: "CT2#W",
          },
          ELEC: {
            NAME: "CT2#ELEC",
          },
          COP: {
            NAME: "CT2#COP",
          },
          ONOFF_VFD_SP: {
            NAME: "CT2#ONOFF_VFD_SP",
          },
          ONOFF_VFD: {
            NAME: "CT2#ONOFF_VFD",
          },
          FREQ: {
            NAME: "CT2#FREQ",
          },
          FREQ_SP: {
            NAME: "CT2#FREQ_SP",
          },
          FAULT_VFD: {
            NAME: "CT2#FAULT_VFD",
          },
          P_VFD: {
            NAME: "CT2#P_VFD",
          },
          FLOW_RATED: {
            NAME: "CT2#FLOW_RATED",
          },
          P_RATED: {
            NAME: "CT2#P_RATED",
          },
          COP_RATED: {
            NAME: "CT2#COP_RATED",
          },
          ID: "qfwQBrtCEQjwZREDhh8ovp",
          NO: 2,
          NAME: "冷却塔#2",
          TYPE: "D0A1D",
          STATION_ID: "aKA0GGZa0NIQHgzurqjJIC",
          STATION_PREFIX_ORG: "HVC1#",
          DEVICE_PREFIX: "CT2#",
          SUITE_IDS: [
            "oM6qEMxe50PY3Jv1JGxGVi",
            "jXGJPr5bbu8Pm1azp1qVLz",
            "3T4PM4a_xeb9HSfb6CA2vP",
            "yxOjIyO9w9FfhRDEZmKWZC",
          ],
          VALVES: [
            {
              ONOFF_SP: {
                NAME: "V11#ONOFF_SP",
              },
              ONOFF: {
                NAME: "V11#ONOFF",
              },
              OFF: {
                NAME: "V11#OFF",
              },
              ON: {
                NAME: "V11#ON",
              },
              OFF_SP: {
                NAME: "V11#OFF_SP",
              },
              ON_SP: {
                NAME: "V11#ON_SP",
              },
              EB: {
                NAME: "V11#EB",
              },
              AM: {
                NAME: "V11#AM",
              },
              FAULT: {
                NAME: "V11#FAULT",
              },
              NAME: "阀门#11",
              TYPE: "D0A30",
              ID: "jvibORBfgRlq_5PkBOTiIr",
              NO: 11,
              VALVES: [],
            },
            {
              ONOFF_SP: {
                NAME: "V12#ONOFF_SP",
              },
              ONOFF: {
                NAME: "V12#ONOFF",
              },
              OFF: {
                NAME: "V12#OFF",
              },
              ON: {
                NAME: "V12#ON",
              },
              OFF_SP: {
                NAME: "V12#OFF_SP",
              },
              ON_SP: {
                NAME: "V12#ON_SP",
              },
              EB: {
                NAME: "V12#EB",
              },
              AM: {
                NAME: "V12#AM",
              },
              FAULT: {
                NAME: "V12#FAULT",
              },
              NAME: "阀门#12",
              TYPE: "D0A30",
              ID: "Euiwh8PYCXq_7ozW8gXO2t",
              NO: 12,
              VALVES: [],
            },
          ],
          OTHERS: {},
          CAP_NUM: 0,
        },
        {
          ONOFF_SP: {
            NAME: "CT3#ONOFF_SP",
          },
          ONOFF: {
            NAME: "CT3#ONOFF",
          },
          ON: {
            NAME: "CT3#ON",
          },
          OFF: {
            NAME: "CT3#OFF",
          },
          ON_SP: {
            NAME: "CT3#ON_SP",
          },
          OFF_SP: {
            NAME: "CT3#OFF_SP",
          },
          AM: {
            NAME: "CT3#AM",
          },
          EB: {
            NAME: "CT3#EB",
          },
          FAULT: {
            NAME: "CT3#FAULT",
          },
          FAULT_CODE: {
            NAME: "CT3#FAULT_CODE",
          },
          FAULT_RESET: {
            NAME: "CT3#FAULT_RESET",
          },
          RANK: {
            NAME: "CT3#RANK",
          },
          HRS_TOTAL: {
            NAME: "CT3#HRS_TOTAL",
          },
          HRS: {
            NAME: "CT3#HRS",
          },
          P: {
            NAME: "CT3#P",
          },
          W: {
            NAME: "CT3#W",
          },
          ELEC: {
            NAME: "CT3#ELEC",
          },
          COP: {
            NAME: "CT3#COP",
          },
          ONOFF_VFD_SP: {
            NAME: "CT3#ONOFF_VFD_SP",
          },
          ONOFF_VFD: {
            NAME: "CT3#ONOFF_VFD",
          },
          FREQ: {
            NAME: "CT3#FREQ",
          },
          FREQ_SP: {
            NAME: "CT3#FREQ_SP",
          },
          FAULT_VFD: {
            NAME: "CT3#FAULT_VFD",
          },
          P_VFD: {
            NAME: "CT3#P_VFD",
          },
          FLOW_RATED: {
            NAME: "CT3#FLOW_RATED",
          },
          P_RATED: {
            NAME: "CT3#P_RATED",
          },
          COP_RATED: {
            NAME: "CT3#COP_RATED",
          },
          ID: "z9kNrWKwhokZokO49Joila",
          NO: 3,
          NAME: "冷却塔#3",
          TYPE: "D0A1D",
          STATION_ID: "aKA0GGZa0NIQHgzurqjJIC",
          STATION_PREFIX_ORG: "HVC1#",
          DEVICE_PREFIX: "CT3#",
          SUITE_IDS: [
            "oM6qEMxe50PY3Jv1JGxGVi",
            "jXGJPr5bbu8Pm1azp1qVLz",
            "3T4PM4a_xeb9HSfb6CA2vP",
            "yxOjIyO9w9FfhRDEZmKWZC",
          ],
          VALVES: [
            {
              ONOFF_SP: {
                NAME: "V13#ONOFF_SP",
              },
              ONOFF: {
                NAME: "V13#ONOFF",
              },
              OFF: {
                NAME: "V13#OFF",
              },
              ON: {
                NAME: "V13#ON",
              },
              OFF_SP: {
                NAME: "V13#OFF_SP",
              },
              ON_SP: {
                NAME: "V13#ON_SP",
              },
              EB: {
                NAME: "V13#EB",
              },
              AM: {
                NAME: "V13#AM",
              },
              FAULT: {
                NAME: "V13#FAULT",
              },
              NAME: "阀门#13",
              TYPE: "D0A30",
              ID: "e9_W9b6otoLOnFZrFJXLRi",
              NO: 13,
              VALVES: [],
            },
            {
              ONOFF_SP: {
                NAME: "V14#ONOFF_SP",
              },
              ONOFF: {
                NAME: "V14#ONOFF",
              },
              OFF: {
                NAME: "V14#OFF",
              },
              ON: {
                NAME: "V14#ON",
              },
              OFF_SP: {
                NAME: "V14#OFF_SP",
              },
              ON_SP: {
                NAME: "V14#ON_SP",
              },
              EB: {
                NAME: "V14#EB",
              },
              AM: {
                NAME: "V14#AM",
              },
              FAULT: {
                NAME: "V14#FAULT",
              },
              NAME: "阀门#14",
              TYPE: "D0A30",
              ID: "0hULtajjeOLqMtTyQWPxWA",
              NO: 14,
              VALVES: [],
            },
          ],
          OTHERS: {},
          CAP_NUM: 0,
        },
        {
          ONOFF_SP: {
            NAME: "CT4#ONOFF_SP",
          },
          ONOFF: {
            NAME: "CT4#ONOFF",
          },
          ON: {
            NAME: "CT4#ON",
          },
          OFF: {
            NAME: "CT4#OFF",
          },
          ON_SP: {
            NAME: "CT4#ON_SP",
          },
          OFF_SP: {
            NAME: "CT4#OFF_SP",
          },
          AM: {
            NAME: "CT4#AM",
          },
          EB: {
            NAME: "CT4#EB",
          },
          FAULT: {
            NAME: "CT4#FAULT",
          },
          FAULT_CODE: {
            NAME: "CT4#FAULT_CODE",
          },
          FAULT_RESET: {
            NAME: "CT4#FAULT_RESET",
          },
          RANK: {
            NAME: "CT4#RANK",
          },
          HRS_TOTAL: {
            NAME: "CT4#HRS_TOTAL",
          },
          HRS: {
            NAME: "CT4#HRS",
          },
          P: {
            NAME: "CT4#P",
          },
          W: {
            NAME: "CT4#W",
          },
          ELEC: {
            NAME: "CT4#ELEC",
          },
          COP: {
            NAME: "CT4#COP",
          },
          ONOFF_VFD_SP: {
            NAME: "CT4#ONOFF_VFD_SP",
          },
          ONOFF_VFD: {
            NAME: "CT4#ONOFF_VFD",
          },
          FREQ: {
            NAME: "CT4#FREQ",
          },
          FREQ_SP: {
            NAME: "CT4#FREQ_SP",
          },
          FAULT_VFD: {
            NAME: "CT4#FAULT_VFD",
          },
          P_VFD: {
            NAME: "CT4#P_VFD",
          },
          FLOW_RATED: {
            NAME: "CT4#FLOW_RATED",
          },
          P_RATED: {
            NAME: "CT4#P_RATED",
          },
          COP_RATED: {
            NAME: "CT4#COP_RATED",
          },
          ID: "fKkvAEuijqotichFttlIKF",
          NO: 4,
          NAME: "冷却塔#4",
          TYPE: "D0A1D",
          STATION_ID: "aKA0GGZa0NIQHgzurqjJIC",
          STATION_PREFIX_ORG: "HVC1#",
          DEVICE_PREFIX: "CT4#",
          SUITE_IDS: [
            "oM6qEMxe50PY3Jv1JGxGVi",
            "jXGJPr5bbu8Pm1azp1qVLz",
            "3T4PM4a_xeb9HSfb6CA2vP",
            "yxOjIyO9w9FfhRDEZmKWZC",
          ],
          VALVES: [
            {
              ONOFF_SP: {
                NAME: "V15#ONOFF_SP",
              },
              ONOFF: {
                NAME: "V15#ONOFF",
              },
              OFF: {
                NAME: "V15#OFF",
              },
              ON: {
                NAME: "V15#ON",
              },
              OFF_SP: {
                NAME: "V15#OFF_SP",
              },
              ON_SP: {
                NAME: "V15#ON_SP",
              },
              EB: {
                NAME: "V15#EB",
              },
              AM: {
                NAME: "V15#AM",
              },
              FAULT: {
                NAME: "V15#FAULT",
              },
              NAME: "阀门#15",
              TYPE: "D0A30",
              ID: "eoRbD025SCKNBCvpFs1btn",
              NO: 15,
              VALVES: [],
            },
            {
              ONOFF_SP: {
                NAME: "V16#ONOFF_SP",
              },
              ONOFF: {
                NAME: "V16#ONOFF",
              },
              OFF: {
                NAME: "V16#OFF",
              },
              ON: {
                NAME: "V16#ON",
              },
              OFF_SP: {
                NAME: "V16#OFF_SP",
              },
              ON_SP: {
                NAME: "V16#ON_SP",
              },
              EB: {
                NAME: "V16#EB",
              },
              AM: {
                NAME: "V16#AM",
              },
              FAULT: {
                NAME: "V16#FAULT",
              },
              NAME: "阀门#16",
              TYPE: "D0A30",
              ID: "wggnS6uBEo1qHuOEoT0atb",
              NO: 16,
              VALVES: [],
            },
          ],
          OTHERS: {},
          CAP_NUM: 0,
        },
      ],
      ID: "yxOjIyO9w9FfhRDEZmKWZC",
      NO: 4,
      NAME: "制冷机#4",
      TYPE: "D0A1A",
      STATION_ID: "aKA0GGZa0NIQHgzurqjJIC",
      STATION_PREFIX_ORG: "HVC1#",
      DEVICE_PREFIX: "CH4#",
      SUITE_IDS: [],
      VALVES: [
        {
          ONOFF_SP: {
            NAME: "V7#ONOFF_SP",
          },
          ONOFF: {
            NAME: "V7#ONOFF",
          },
          OFF: {
            NAME: "V7#OFF",
          },
          ON: {
            NAME: "V7#ON",
          },
          OFF_SP: {
            NAME: "V7#OFF_SP",
          },
          ON_SP: {
            NAME: "V7#ON_SP",
          },
          EB: {
            NAME: "V7#EB",
          },
          AM: {
            NAME: "V7#AM",
          },
          FAULT: {
            NAME: "V7#FAULT",
          },
          NAME: "阀门#7",
          TYPE: "D0A30",
          ID: "udzjui5InXHvRPB2z4pSMn",
          NO: 7,
          VALVES: [],
        },
        {
          ONOFF_SP: {
            NAME: "V8#ONOFF_SP",
          },
          ONOFF: {
            NAME: "V8#ONOFF",
          },
          OFF: {
            NAME: "V8#OFF",
          },
          ON: {
            NAME: "V8#ON",
          },
          OFF_SP: {
            NAME: "V8#OFF_SP",
          },
          ON_SP: {
            NAME: "V8#ON_SP",
          },
          EB: {
            NAME: "V8#EB",
          },
          AM: {
            NAME: "V8#AM",
          },
          FAULT: {
            NAME: "V8#FAULT",
          },
          NAME: "阀门#8",
          TYPE: "D0A30",
          ID: "OZYcnMrfHWNevKrbab7iQk",
          NO: 8,
          VALVES: [],
        },
      ],
      OTHERS: {},
      CAP_NUM: 0,
    },
  },
  CHWPS: {
    SUbrIvPCme75m1DiOk5Qkm: {
      ELEC: {
        NAME: "CHWP1#ELEC",
      },
      ONOFF_SP: {
        NAME: "CHWP1#ONOFF_SP",
      },
      ONOFF: {
        NAME: "CHWP1#ONOFF",
      },
      ON: {
        NAME: "CHWP1#ON",
      },
      OFF: {
        NAME: "CHWP1#OFF",
      },
      ON_SP: {
        NAME: "CHWP1#ON_SP",
      },
      OFF_SP: {
        NAME: "CHWP1#OFF_SP",
      },
      AM: {
        NAME: "CHWP1#AM",
      },
      EB: {
        NAME: "CHWP1#EB",
      },
      FAULT: {
        NAME: "CHWP1#FAULT",
      },
      FAULT_CODE: {
        NAME: "CHWP1#FAULT_CODE",
      },
      FAULT_RESET: {
        NAME: "CHWP1#FAULT_RESET",
      },
      RANK: {
        NAME: "CHWP1#RANK",
      },
      PR_INLET: {
        NAME: "CHWP1#PR_INLET",
      },
      PR_OUTLET: {
        NAME: "CHWP1#PR_OUTLET",
      },
      HRS_TOTAL: {
        NAME: "CHWP1#HRS_TOTAL",
      },
      HRS: {
        NAME: "CHWP1#HRS",
      },
      P: {
        NAME: "CHWP1#P",
      },
      W: {
        NAME: "CHWP1#W",
      },
      COP: {
        NAME: "CHWP1#COP",
      },
      ONOFF_VFD_SP: {
        NAME: "CHWP1#ONOFF_VFD_SP",
      },
      ONOFF_VFD: {
        NAME: "CHWP1#ONOFF_VFD",
      },
      FREQ: {
        NAME: "CHWP1#FREQ",
      },
      FREQ_SP: {
        NAME: "CHWP1#FREQ_SP",
      },
      FAULT_VFD: {
        NAME: "CHWP1#FAULT_VFD",
      },
      P_VFD: {
        NAME: "CHWP1#P_VFD",
      },
      FLOW_RATED: {
        NAME: "CHWP1#FLOW_RATED",
      },
      P_RATED: {
        NAME: "CHWP1#P_RATED",
      },
      COP_RATED: {
        NAME: "CHWP1#COP_RATED",
      },
      ID: "SUbrIvPCme75m1DiOk5Qkm",
      NO: 1,
      NAME: "冷冻水泵#1",
      TYPE: "D0A1B",
      STATION_ID: "aKA0GGZa0NIQHgzurqjJIC",
      STATION_PREFIX_ORG: "HVC1#",
      DEVICE_PREFIX: "CHWP1#",
      SUITE_IDS: [
        "oM6qEMxe50PY3Jv1JGxGVi",
        "jXGJPr5bbu8Pm1azp1qVLz",
        "3T4PM4a_xeb9HSfb6CA2vP",
        "yxOjIyO9w9FfhRDEZmKWZC",
      ],
      VALVES: [],
      OTHERS: {},
      CAP_NUM: 0,
    },
    KJ7AxiKb6OCoOTfqVWkE12: {
      ELEC: {
        NAME: "CHWP2#ELEC",
      },
      ONOFF_SP: {
        NAME: "CHWP2#ONOFF_SP",
      },
      ONOFF: {
        NAME: "CHWP2#ONOFF",
      },
      ON: {
        NAME: "CHWP2#ON",
      },
      OFF: {
        NAME: "CHWP2#OFF",
      },
      ON_SP: {
        NAME: "CHWP2#ON_SP",
      },
      OFF_SP: {
        NAME: "CHWP2#OFF_SP",
      },
      AM: {
        NAME: "CHWP2#AM",
      },
      EB: {
        NAME: "CHWP2#EB",
      },
      FAULT: {
        NAME: "CHWP2#FAULT",
      },
      FAULT_CODE: {
        NAME: "CHWP2#FAULT_CODE",
      },
      FAULT_RESET: {
        NAME: "CHWP2#FAULT_RESET",
      },
      RANK: {
        NAME: "CHWP2#RANK",
      },
      PR_INLET: {
        NAME: "CHWP2#PR_INLET",
      },
      PR_OUTLET: {
        NAME: "CHWP2#PR_OUTLET",
      },
      HRS_TOTAL: {
        NAME: "CHWP2#HRS_TOTAL",
      },
      HRS: {
        NAME: "CHWP2#HRS",
      },
      P: {
        NAME: "CHWP2#P",
      },
      W: {
        NAME: "CHWP2#W",
      },
      COP: {
        NAME: "CHWP2#COP",
      },
      ONOFF_VFD_SP: {
        NAME: "CHWP2#ONOFF_VFD_SP",
      },
      ONOFF_VFD: {
        NAME: "CHWP2#ONOFF_VFD",
      },
      FREQ: {
        NAME: "CHWP2#FREQ",
      },
      FREQ_SP: {
        NAME: "CHWP2#FREQ_SP",
      },
      FAULT_VFD: {
        NAME: "CHWP2#FAULT_VFD",
      },
      P_VFD: {
        NAME: "CHWP2#P_VFD",
      },
      FLOW_RATED: {
        NAME: "CHWP2#FLOW_RATED",
      },
      P_RATED: {
        NAME: "CHWP2#P_RATED",
      },
      COP_RATED: {
        NAME: "CHWP2#COP_RATED",
      },
      ID: "KJ7AxiKb6OCoOTfqVWkE12",
      NO: 2,
      NAME: "冷冻水泵#2",
      TYPE: "D0A1B",
      STATION_ID: "aKA0GGZa0NIQHgzurqjJIC",
      STATION_PREFIX_ORG: "HVC1#",
      DEVICE_PREFIX: "CHWP2#",
      SUITE_IDS: [
        "oM6qEMxe50PY3Jv1JGxGVi",
        "jXGJPr5bbu8Pm1azp1qVLz",
        "3T4PM4a_xeb9HSfb6CA2vP",
        "yxOjIyO9w9FfhRDEZmKWZC",
      ],
      VALVES: [],
      OTHERS: {},
      CAP_NUM: 0,
    },
    "3JNiytZOf9Yvj9cFu76TrD": {
      ELEC: {
        NAME: "CHWP3#ELEC",
      },
      ONOFF_SP: {
        NAME: "CHWP3#ONOFF_SP",
      },
      ONOFF: {
        NAME: "CHWP3#ONOFF",
      },
      ON: {
        NAME: "CHWP3#ON",
      },
      OFF: {
        NAME: "CHWP3#OFF",
      },
      ON_SP: {
        NAME: "CHWP3#ON_SP",
      },
      OFF_SP: {
        NAME: "CHWP3#OFF_SP",
      },
      AM: {
        NAME: "CHWP3#AM",
      },
      EB: {
        NAME: "CHWP3#EB",
      },
      FAULT: {
        NAME: "CHWP3#FAULT",
      },
      FAULT_CODE: {
        NAME: "CHWP3#FAULT_CODE",
      },
      FAULT_RESET: {
        NAME: "CHWP3#FAULT_RESET",
      },
      RANK: {
        NAME: "CHWP3#RANK",
      },
      PR_INLET: {
        NAME: "CHWP3#PR_INLET",
      },
      PR_OUTLET: {
        NAME: "CHWP3#PR_OUTLET",
      },
      HRS_TOTAL: {
        NAME: "CHWP3#HRS_TOTAL",
      },
      HRS: {
        NAME: "CHWP3#HRS",
      },
      P: {
        NAME: "CHWP3#P",
      },
      W: {
        NAME: "CHWP3#W",
      },
      COP: {
        NAME: "CHWP3#COP",
      },
      ONOFF_VFD_SP: {
        NAME: "CHWP3#ONOFF_VFD_SP",
      },
      ONOFF_VFD: {
        NAME: "CHWP3#ONOFF_VFD",
      },
      FREQ: {
        NAME: "CHWP3#FREQ",
      },
      FREQ_SP: {
        NAME: "CHWP3#FREQ_SP",
      },
      FAULT_VFD: {
        NAME: "CHWP3#FAULT_VFD",
      },
      P_VFD: {
        NAME: "CHWP3#P_VFD",
      },
      FLOW_RATED: {
        NAME: "CHWP3#FLOW_RATED",
      },
      P_RATED: {
        NAME: "CHWP3#P_RATED",
      },
      COP_RATED: {
        NAME: "CHWP3#COP_RATED",
      },
      ID: "3JNiytZOf9Yvj9cFu76TrD",
      NO: 3,
      NAME: "冷冻水泵#3",
      TYPE: "D0A1B",
      STATION_ID: "aKA0GGZa0NIQHgzurqjJIC",
      STATION_PREFIX_ORG: "HVC1#",
      DEVICE_PREFIX: "CHWP3#",
      SUITE_IDS: [
        "oM6qEMxe50PY3Jv1JGxGVi",
        "jXGJPr5bbu8Pm1azp1qVLz",
        "3T4PM4a_xeb9HSfb6CA2vP",
        "yxOjIyO9w9FfhRDEZmKWZC",
      ],
      VALVES: [],
      OTHERS: {},
      CAP_NUM: 0,
    },
    OuSSIIufxo_z3LBn4vucpo: {
      ELEC: {
        NAME: "CHWP4#ELEC",
      },
      ONOFF_SP: {
        NAME: "CHWP4#ONOFF_SP",
      },
      ONOFF: {
        NAME: "CHWP4#ONOFF",
      },
      ON: {
        NAME: "CHWP4#ON",
      },
      OFF: {
        NAME: "CHWP4#OFF",
      },
      ON_SP: {
        NAME: "CHWP4#ON_SP",
      },
      OFF_SP: {
        NAME: "CHWP4#OFF_SP",
      },
      AM: {
        NAME: "CHWP4#AM",
      },
      EB: {
        NAME: "CHWP4#EB",
      },
      FAULT: {
        NAME: "CHWP4#FAULT",
      },
      FAULT_CODE: {
        NAME: "CHWP4#FAULT_CODE",
      },
      FAULT_RESET: {
        NAME: "CHWP4#FAULT_RESET",
      },
      RANK: {
        NAME: "CHWP4#RANK",
      },
      PR_INLET: {
        NAME: "CHWP4#PR_INLET",
      },
      PR_OUTLET: {
        NAME: "CHWP4#PR_OUTLET",
      },
      HRS_TOTAL: {
        NAME: "CHWP4#HRS_TOTAL",
      },
      HRS: {
        NAME: "CHWP4#HRS",
      },
      P: {
        NAME: "CHWP4#P",
      },
      W: {
        NAME: "CHWP4#W",
      },
      COP: {
        NAME: "CHWP4#COP",
      },
      ONOFF_VFD_SP: {
        NAME: "CHWP4#ONOFF_VFD_SP",
      },
      ONOFF_VFD: {
        NAME: "CHWP4#ONOFF_VFD",
      },
      FREQ: {
        NAME: "CHWP4#FREQ",
      },
      FREQ_SP: {
        NAME: "CHWP4#FREQ_SP",
      },
      FAULT_VFD: {
        NAME: "CHWP4#FAULT_VFD",
      },
      P_VFD: {
        NAME: "CHWP4#P_VFD",
      },
      FLOW_RATED: {
        NAME: "CHWP4#FLOW_RATED",
      },
      P_RATED: {
        NAME: "CHWP4#P_RATED",
      },
      COP_RATED: {
        NAME: "CHWP4#COP_RATED",
      },
      ID: "OuSSIIufxo_z3LBn4vucpo",
      NO: 4,
      NAME: "冷冻水泵#4",
      TYPE: "D0A1B",
      STATION_ID: "aKA0GGZa0NIQHgzurqjJIC",
      STATION_PREFIX_ORG: "HVC1#",
      DEVICE_PREFIX: "CHWP4#",
      SUITE_IDS: [
        "oM6qEMxe50PY3Jv1JGxGVi",
        "jXGJPr5bbu8Pm1azp1qVLz",
        "3T4PM4a_xeb9HSfb6CA2vP",
        "yxOjIyO9w9FfhRDEZmKWZC",
      ],
      VALVES: [],
      OTHERS: {},
      CAP_NUM: 0,
    },
  },
  CWPS: {
    iluAkpqnSdWRIN2YShuMOG: {
      ELEC: {
        NAME: "CWP1#ELEC",
      },
      ONOFF_SP: {
        NAME: "CWP1#ONOFF_SP",
      },
      ONOFF: {
        NAME: "CWP1#ONOFF",
      },
      ON: {
        NAME: "CWP1#ON",
      },
      OFF: {
        NAME: "CWP1#OFF",
      },
      ON_SP: {
        NAME: "CWP1#ON_SP",
      },
      OFF_SP: {
        NAME: "CWP1#OFF_SP",
      },
      AM: {
        NAME: "CWP1#AM",
      },
      EB: {
        NAME: "CWP1#EB",
      },
      FAULT: {
        NAME: "CWP1#FAULT",
      },
      FAULT_CODE: {
        NAME: "CWP1#FAULT_CODE",
      },
      FAULT_RESET: {
        NAME: "CWP1#FAULT_RESET",
      },
      RANK: {
        NAME: "CWP1#RANK",
      },
      PR_INLET: {
        NAME: "CWP1#PR_INLET",
      },
      PR_OUTLET: {
        NAME: "CWP1#PR_OUTLET",
      },
      HRS_TOTAL: {
        NAME: "CWP1#HRS_TOTAL",
      },
      HRS: {
        NAME: "CWP1#HRS",
      },
      P: {
        NAME: "CWP1#P",
      },
      W: {
        NAME: "CWP1#W",
      },
      COP: {
        NAME: "CWP1#COP",
      },
      ONOFF_VFD_SP: {
        NAME: "CWP1#ONOFF_VFD_SP",
      },
      ONOFF_VFD: {
        NAME: "CWP1#ONOFF_VFD",
      },
      FREQ: {
        NAME: "CWP1#FREQ",
      },
      FREQ_SP: {
        NAME: "CWP1#FREQ_SP",
      },
      FAULT_VFD: {
        NAME: "CWP1#FAULT_VFD",
      },
      P_VFD: {
        NAME: "CWP1#P_VFD",
      },
      FLOW_RATED: {
        NAME: "CWP1#FLOW_RATED",
      },
      P_RATED: {
        NAME: "CWP1#P_RATED",
      },
      COP_RATED: {
        NAME: "CWP1#COP_RATED",
      },
      ID: "iluAkpqnSdWRIN2YShuMOG",
      NO: 1,
      NAME: "冷却水泵#1",
      TYPE: "D0A1C",
      STATION_ID: "aKA0GGZa0NIQHgzurqjJIC",
      STATION_PREFIX_ORG: "HVC1#",
      DEVICE_PREFIX: "CWP1#",
      SUITE_IDS: [
        "oM6qEMxe50PY3Jv1JGxGVi",
        "jXGJPr5bbu8Pm1azp1qVLz",
        "3T4PM4a_xeb9HSfb6CA2vP",
        "yxOjIyO9w9FfhRDEZmKWZC",
      ],
      VALVES: [],
      OTHERS: {},
      CAP_NUM: 0,
    },
    odiOJxe6bSWpNTswmoRilj: {
      ELEC: {
        NAME: "CWP2#ELEC",
      },
      ONOFF_SP: {
        NAME: "CWP2#ONOFF_SP",
      },
      ONOFF: {
        NAME: "CWP2#ONOFF",
      },
      ON: {
        NAME: "CWP2#ON",
      },
      OFF: {
        NAME: "CWP2#OFF",
      },
      ON_SP: {
        NAME: "CWP2#ON_SP",
      },
      OFF_SP: {
        NAME: "CWP2#OFF_SP",
      },
      AM: {
        NAME: "CWP2#AM",
      },
      EB: {
        NAME: "CWP2#EB",
      },
      FAULT: {
        NAME: "CWP2#FAULT",
      },
      FAULT_CODE: {
        NAME: "CWP2#FAULT_CODE",
      },
      FAULT_RESET: {
        NAME: "CWP2#FAULT_RESET",
      },
      RANK: {
        NAME: "CWP2#RANK",
      },
      PR_INLET: {
        NAME: "CWP2#PR_INLET",
      },
      PR_OUTLET: {
        NAME: "CWP2#PR_OUTLET",
      },
      HRS_TOTAL: {
        NAME: "CWP2#HRS_TOTAL",
      },
      HRS: {
        NAME: "CWP2#HRS",
      },
      P: {
        NAME: "CWP2#P",
      },
      W: {
        NAME: "CWP2#W",
      },
      COP: {
        NAME: "CWP2#COP",
      },
      ONOFF_VFD_SP: {
        NAME: "CWP2#ONOFF_VFD_SP",
      },
      ONOFF_VFD: {
        NAME: "CWP2#ONOFF_VFD",
      },
      FREQ: {
        NAME: "CWP2#FREQ",
      },
      FREQ_SP: {
        NAME: "CWP2#FREQ_SP",
      },
      FAULT_VFD: {
        NAME: "CWP2#FAULT_VFD",
      },
      P_VFD: {
        NAME: "CWP2#P_VFD",
      },
      FLOW_RATED: {
        NAME: "CWP2#FLOW_RATED",
      },
      P_RATED: {
        NAME: "CWP2#P_RATED",
      },
      COP_RATED: {
        NAME: "CWP2#COP_RATED",
      },
      ID: "odiOJxe6bSWpNTswmoRilj",
      NO: 2,
      NAME: "冷却水泵#2",
      TYPE: "D0A1C",
      STATION_ID: "aKA0GGZa0NIQHgzurqjJIC",
      STATION_PREFIX_ORG: "HVC1#",
      DEVICE_PREFIX: "CWP2#",
      SUITE_IDS: [
        "oM6qEMxe50PY3Jv1JGxGVi",
        "jXGJPr5bbu8Pm1azp1qVLz",
        "3T4PM4a_xeb9HSfb6CA2vP",
        "yxOjIyO9w9FfhRDEZmKWZC",
      ],
      VALVES: [],
      OTHERS: {},
      CAP_NUM: 0,
    },
    MHzDc8b58PDR6Cfqar9hr2: {
      ELEC: {
        NAME: "CWP3#ELEC",
      },
      ONOFF_SP: {
        NAME: "CWP3#ONOFF_SP",
      },
      ONOFF: {
        NAME: "CWP3#ONOFF",
      },
      ON: {
        NAME: "CWP3#ON",
      },
      OFF: {
        NAME: "CWP3#OFF",
      },
      ON_SP: {
        NAME: "CWP3#ON_SP",
      },
      OFF_SP: {
        NAME: "CWP3#OFF_SP",
      },
      AM: {
        NAME: "CWP3#AM",
      },
      EB: {
        NAME: "CWP3#EB",
      },
      FAULT: {
        NAME: "CWP3#FAULT",
      },
      FAULT_CODE: {
        NAME: "CWP3#FAULT_CODE",
      },
      FAULT_RESET: {
        NAME: "CWP3#FAULT_RESET",
      },
      RANK: {
        NAME: "CWP3#RANK",
      },
      PR_INLET: {
        NAME: "CWP3#PR_INLET",
      },
      PR_OUTLET: {
        NAME: "CWP3#PR_OUTLET",
      },
      HRS_TOTAL: {
        NAME: "CWP3#HRS_TOTAL",
      },
      HRS: {
        NAME: "CWP3#HRS",
      },
      P: {
        NAME: "CWP3#P",
      },
      W: {
        NAME: "CWP3#W",
      },
      COP: {
        NAME: "CWP3#COP",
      },
      ONOFF_VFD_SP: {
        NAME: "CWP3#ONOFF_VFD_SP",
      },
      ONOFF_VFD: {
        NAME: "CWP3#ONOFF_VFD",
      },
      FREQ: {
        NAME: "CWP3#FREQ",
      },
      FREQ_SP: {
        NAME: "CWP3#FREQ_SP",
      },
      FAULT_VFD: {
        NAME: "CWP3#FAULT_VFD",
      },
      P_VFD: {
        NAME: "CWP3#P_VFD",
      },
      FLOW_RATED: {
        NAME: "CWP3#FLOW_RATED",
      },
      P_RATED: {
        NAME: "CWP3#P_RATED",
      },
      COP_RATED: {
        NAME: "CWP3#COP_RATED",
      },
      ID: "MHzDc8b58PDR6Cfqar9hr2",
      NO: 3,
      NAME: "冷却水泵#3",
      TYPE: "D0A1C",
      STATION_ID: "aKA0GGZa0NIQHgzurqjJIC",
      STATION_PREFIX_ORG: "HVC1#",
      DEVICE_PREFIX: "CWP3#",
      SUITE_IDS: [
        "oM6qEMxe50PY3Jv1JGxGVi",
        "jXGJPr5bbu8Pm1azp1qVLz",
        "3T4PM4a_xeb9HSfb6CA2vP",
        "yxOjIyO9w9FfhRDEZmKWZC",
      ],
      VALVES: [],
      OTHERS: {},
      CAP_NUM: 0,
    },
    FFA5D3hZrwi9XXCRG0VP4J: {
      ELEC: {
        NAME: "CWP4#ELEC",
      },
      ONOFF_SP: {
        NAME: "CWP4#ONOFF_SP",
      },
      ONOFF: {
        NAME: "CWP4#ONOFF",
      },
      ON: {
        NAME: "CWP4#ON",
      },
      OFF: {
        NAME: "CWP4#OFF",
      },
      ON_SP: {
        NAME: "CWP4#ON_SP",
      },
      OFF_SP: {
        NAME: "CWP4#OFF_SP",
      },
      AM: {
        NAME: "CWP4#AM",
      },
      EB: {
        NAME: "CWP4#EB",
      },
      FAULT: {
        NAME: "CWP4#FAULT",
      },
      FAULT_CODE: {
        NAME: "CWP4#FAULT_CODE",
      },
      FAULT_RESET: {
        NAME: "CWP4#FAULT_RESET",
      },
      RANK: {
        NAME: "CWP4#RANK",
      },
      PR_INLET: {
        NAME: "CWP4#PR_INLET",
      },
      PR_OUTLET: {
        NAME: "CWP4#PR_OUTLET",
      },
      HRS_TOTAL: {
        NAME: "CWP4#HRS_TOTAL",
      },
      HRS: {
        NAME: "CWP4#HRS",
      },
      P: {
        NAME: "CWP4#P",
      },
      W: {
        NAME: "CWP4#W",
      },
      COP: {
        NAME: "CWP4#COP",
      },
      ONOFF_VFD_SP: {
        NAME: "CWP4#ONOFF_VFD_SP",
      },
      ONOFF_VFD: {
        NAME: "CWP4#ONOFF_VFD",
      },
      FREQ: {
        NAME: "CWP4#FREQ",
      },
      FREQ_SP: {
        NAME: "CWP4#FREQ_SP",
      },
      FAULT_VFD: {
        NAME: "CWP4#FAULT_VFD",
      },
      P_VFD: {
        NAME: "CWP4#P_VFD",
      },
      FLOW_RATED: {
        NAME: "CWP4#FLOW_RATED",
      },
      P_RATED: {
        NAME: "CWP4#P_RATED",
      },
      COP_RATED: {
        NAME: "CWP4#COP_RATED",
      },
      ID: "FFA5D3hZrwi9XXCRG0VP4J",
      NO: 4,
      NAME: "冷却水泵#4",
      TYPE: "D0A1C",
      STATION_ID: "aKA0GGZa0NIQHgzurqjJIC",
      STATION_PREFIX_ORG: "HVC1#",
      DEVICE_PREFIX: "CWP4#",
      SUITE_IDS: [
        "oM6qEMxe50PY3Jv1JGxGVi",
        "jXGJPr5bbu8Pm1azp1qVLz",
        "3T4PM4a_xeb9HSfb6CA2vP",
        "yxOjIyO9w9FfhRDEZmKWZC",
      ],
      VALVES: [],
      OTHERS: {},
      CAP_NUM: 0,
    },
  },
  CTS: {
    ye5MqHy0TbtrtErh0XmZCn: {
      ONOFF_SP: {
        NAME: "CT1#ONOFF_SP",
      },
      ONOFF: {
        NAME: "CT1#ONOFF",
      },
      ON: {
        NAME: "CT1#ON",
      },
      OFF: {
        NAME: "CT1#OFF",
      },
      ON_SP: {
        NAME: "CT1#ON_SP",
      },
      OFF_SP: {
        NAME: "CT1#OFF_SP",
      },
      AM: {
        NAME: "CT1#AM",
      },
      EB: {
        NAME: "CT1#EB",
      },
      FAULT: {
        NAME: "CT1#FAULT",
      },
      FAULT_CODE: {
        NAME: "CT1#FAULT_CODE",
      },
      FAULT_RESET: {
        NAME: "CT1#FAULT_RESET",
      },
      RANK: {
        NAME: "CT1#RANK",
      },
      HRS_TOTAL: {
        NAME: "CT1#HRS_TOTAL",
      },
      HRS: {
        NAME: "CT1#HRS",
      },
      P: {
        NAME: "CT1#P",
      },
      W: {
        NAME: "CT1#W",
      },
      ELEC: {
        NAME: "CT1#ELEC",
      },
      COP: {
        NAME: "CT1#COP",
      },
      ONOFF_VFD_SP: {
        NAME: "CT1#ONOFF_VFD_SP",
      },
      ONOFF_VFD: {
        NAME: "CT1#ONOFF_VFD",
      },
      FREQ: {
        NAME: "CT1#FREQ",
      },
      FREQ_SP: {
        NAME: "CT1#FREQ_SP",
      },
      FAULT_VFD: {
        NAME: "CT1#FAULT_VFD",
      },
      P_VFD: {
        NAME: "CT1#P_VFD",
      },
      FLOW_RATED: {
        NAME: "CT1#FLOW_RATED",
      },
      P_RATED: {
        NAME: "CT1#P_RATED",
      },
      COP_RATED: {
        NAME: "CT1#COP_RATED",
      },
      ID: "ye5MqHy0TbtrtErh0XmZCn",
      NO: 1,
      NAME: "冷却塔#1",
      TYPE: "D0A1D",
      STATION_ID: "aKA0GGZa0NIQHgzurqjJIC",
      STATION_PREFIX_ORG: "HVC1#",
      DEVICE_PREFIX: "CT1#",
      SUITE_IDS: [
        "oM6qEMxe50PY3Jv1JGxGVi",
        "jXGJPr5bbu8Pm1azp1qVLz",
        "3T4PM4a_xeb9HSfb6CA2vP",
        "yxOjIyO9w9FfhRDEZmKWZC",
      ],
      VALVES: [
        {
          ONOFF_SP: {
            NAME: "V9#ONOFF_SP",
          },
          ONOFF: {
            NAME: "V9#ONOFF",
          },
          OFF: {
            NAME: "V9#OFF",
          },
          ON: {
            NAME: "V9#ON",
          },
          OFF_SP: {
            NAME: "V9#OFF_SP",
          },
          ON_SP: {
            NAME: "V9#ON_SP",
          },
          EB: {
            NAME: "V9#EB",
          },
          AM: {
            NAME: "V9#AM",
          },
          FAULT: {
            NAME: "V9#FAULT",
          },
          NAME: "阀门#9",
          TYPE: "D0A30",
          ID: "iQ9nVLl2uBpstp2iKCzqI3",
          NO: 9,
          VALVES: [],
        },
        {
          ONOFF_SP: {
            NAME: "V10#ONOFF_SP",
          },
          ONOFF: {
            NAME: "V10#ONOFF",
          },
          OFF: {
            NAME: "V10#OFF",
          },
          ON: {
            NAME: "V10#ON",
          },
          OFF_SP: {
            NAME: "V10#OFF_SP",
          },
          ON_SP: {
            NAME: "V10#ON_SP",
          },
          EB: {
            NAME: "V10#EB",
          },
          AM: {
            NAME: "V10#AM",
          },
          FAULT: {
            NAME: "V10#FAULT",
          },
          NAME: "阀门#10",
          TYPE: "D0A30",
          ID: "iUppCA_gPRCe2Lka2gUt8m",
          NO: 10,
          VALVES: [],
        },
      ],
      OTHERS: {},
      CAP_NUM: 0,
    },
    qfwQBrtCEQjwZREDhh8ovp: {
      ONOFF_SP: {
        NAME: "CT2#ONOFF_SP",
      },
      ONOFF: {
        NAME: "CT2#ONOFF",
      },
      ON: {
        NAME: "CT2#ON",
      },
      OFF: {
        NAME: "CT2#OFF",
      },
      ON_SP: {
        NAME: "CT2#ON_SP",
      },
      OFF_SP: {
        NAME: "CT2#OFF_SP",
      },
      AM: {
        NAME: "CT2#AM",
      },
      EB: {
        NAME: "CT2#EB",
      },
      FAULT: {
        NAME: "CT2#FAULT",
      },
      FAULT_CODE: {
        NAME: "CT2#FAULT_CODE",
      },
      FAULT_RESET: {
        NAME: "CT2#FAULT_RESET",
      },
      RANK: {
        NAME: "CT2#RANK",
      },
      HRS_TOTAL: {
        NAME: "CT2#HRS_TOTAL",
      },
      HRS: {
        NAME: "CT2#HRS",
      },
      P: {
        NAME: "CT2#P",
      },
      W: {
        NAME: "CT2#W",
      },
      ELEC: {
        NAME: "CT2#ELEC",
      },
      COP: {
        NAME: "CT2#COP",
      },
      ONOFF_VFD_SP: {
        NAME: "CT2#ONOFF_VFD_SP",
      },
      ONOFF_VFD: {
        NAME: "CT2#ONOFF_VFD",
      },
      FREQ: {
        NAME: "CT2#FREQ",
      },
      FREQ_SP: {
        NAME: "CT2#FREQ_SP",
      },
      FAULT_VFD: {
        NAME: "CT2#FAULT_VFD",
      },
      P_VFD: {
        NAME: "CT2#P_VFD",
      },
      FLOW_RATED: {
        NAME: "CT2#FLOW_RATED",
      },
      P_RATED: {
        NAME: "CT2#P_RATED",
      },
      COP_RATED: {
        NAME: "CT2#COP_RATED",
      },
      ID: "qfwQBrtCEQjwZREDhh8ovp",
      NO: 2,
      NAME: "冷却塔#2",
      TYPE: "D0A1D",
      STATION_ID: "aKA0GGZa0NIQHgzurqjJIC",
      STATION_PREFIX_ORG: "HVC1#",
      DEVICE_PREFIX: "CT2#",
      SUITE_IDS: [
        "oM6qEMxe50PY3Jv1JGxGVi",
        "jXGJPr5bbu8Pm1azp1qVLz",
        "3T4PM4a_xeb9HSfb6CA2vP",
        "yxOjIyO9w9FfhRDEZmKWZC",
      ],
      VALVES: [
        {
          ONOFF_SP: {
            NAME: "V11#ONOFF_SP",
          },
          ONOFF: {
            NAME: "V11#ONOFF",
          },
          OFF: {
            NAME: "V11#OFF",
          },
          ON: {
            NAME: "V11#ON",
          },
          OFF_SP: {
            NAME: "V11#OFF_SP",
          },
          ON_SP: {
            NAME: "V11#ON_SP",
          },
          EB: {
            NAME: "V11#EB",
          },
          AM: {
            NAME: "V11#AM",
          },
          FAULT: {
            NAME: "V11#FAULT",
          },
          NAME: "阀门#11",
          TYPE: "D0A30",
          ID: "jvibORBfgRlq_5PkBOTiIr",
          NO: 11,
          VALVES: [],
        },
        {
          ONOFF_SP: {
            NAME: "V12#ONOFF_SP",
          },
          ONOFF: {
            NAME: "V12#ONOFF",
          },
          OFF: {
            NAME: "V12#OFF",
          },
          ON: {
            NAME: "V12#ON",
          },
          OFF_SP: {
            NAME: "V12#OFF_SP",
          },
          ON_SP: {
            NAME: "V12#ON_SP",
          },
          EB: {
            NAME: "V12#EB",
          },
          AM: {
            NAME: "V12#AM",
          },
          FAULT: {
            NAME: "V12#FAULT",
          },
          NAME: "阀门#12",
          TYPE: "D0A30",
          ID: "Euiwh8PYCXq_7ozW8gXO2t",
          NO: 12,
          VALVES: [],
        },
      ],
      OTHERS: {},
      CAP_NUM: 0,
    },
    z9kNrWKwhokZokO49Joila: {
      ONOFF_SP: {
        NAME: "CT3#ONOFF_SP",
      },
      ONOFF: {
        NAME: "CT3#ONOFF",
      },
      ON: {
        NAME: "CT3#ON",
      },
      OFF: {
        NAME: "CT3#OFF",
      },
      ON_SP: {
        NAME: "CT3#ON_SP",
      },
      OFF_SP: {
        NAME: "CT3#OFF_SP",
      },
      AM: {
        NAME: "CT3#AM",
      },
      EB: {
        NAME: "CT3#EB",
      },
      FAULT: {
        NAME: "CT3#FAULT",
      },
      FAULT_CODE: {
        NAME: "CT3#FAULT_CODE",
      },
      FAULT_RESET: {
        NAME: "CT3#FAULT_RESET",
      },
      RANK: {
        NAME: "CT3#RANK",
      },
      HRS_TOTAL: {
        NAME: "CT3#HRS_TOTAL",
      },
      HRS: {
        NAME: "CT3#HRS",
      },
      P: {
        NAME: "CT3#P",
      },
      W: {
        NAME: "CT3#W",
      },
      ELEC: {
        NAME: "CT3#ELEC",
      },
      COP: {
        NAME: "CT3#COP",
      },
      ONOFF_VFD_SP: {
        NAME: "CT3#ONOFF_VFD_SP",
      },
      ONOFF_VFD: {
        NAME: "CT3#ONOFF_VFD",
      },
      FREQ: {
        NAME: "CT3#FREQ",
      },
      FREQ_SP: {
        NAME: "CT3#FREQ_SP",
      },
      FAULT_VFD: {
        NAME: "CT3#FAULT_VFD",
      },
      P_VFD: {
        NAME: "CT3#P_VFD",
      },
      FLOW_RATED: {
        NAME: "CT3#FLOW_RATED",
      },
      P_RATED: {
        NAME: "CT3#P_RATED",
      },
      COP_RATED: {
        NAME: "CT3#COP_RATED",
      },
      ID: "z9kNrWKwhokZokO49Joila",
      NO: 3,
      NAME: "冷却塔#3",
      TYPE: "D0A1D",
      STATION_ID: "aKA0GGZa0NIQHgzurqjJIC",
      STATION_PREFIX_ORG: "HVC1#",
      DEVICE_PREFIX: "CT3#",
      SUITE_IDS: [
        "oM6qEMxe50PY3Jv1JGxGVi",
        "jXGJPr5bbu8Pm1azp1qVLz",
        "3T4PM4a_xeb9HSfb6CA2vP",
        "yxOjIyO9w9FfhRDEZmKWZC",
      ],
      VALVES: [
        {
          ONOFF_SP: {
            NAME: "V13#ONOFF_SP",
          },
          ONOFF: {
            NAME: "V13#ONOFF",
          },
          OFF: {
            NAME: "V13#OFF",
          },
          ON: {
            NAME: "V13#ON",
          },
          OFF_SP: {
            NAME: "V13#OFF_SP",
          },
          ON_SP: {
            NAME: "V13#ON_SP",
          },
          EB: {
            NAME: "V13#EB",
          },
          AM: {
            NAME: "V13#AM",
          },
          FAULT: {
            NAME: "V13#FAULT",
          },
          NAME: "阀门#13",
          TYPE: "D0A30",
          ID: "e9_W9b6otoLOnFZrFJXLRi",
          NO: 13,
          VALVES: [],
        },
        {
          ONOFF_SP: {
            NAME: "V14#ONOFF_SP",
          },
          ONOFF: {
            NAME: "V14#ONOFF",
          },
          OFF: {
            NAME: "V14#OFF",
          },
          ON: {
            NAME: "V14#ON",
          },
          OFF_SP: {
            NAME: "V14#OFF_SP",
          },
          ON_SP: {
            NAME: "V14#ON_SP",
          },
          EB: {
            NAME: "V14#EB",
          },
          AM: {
            NAME: "V14#AM",
          },
          FAULT: {
            NAME: "V14#FAULT",
          },
          NAME: "阀门#14",
          TYPE: "D0A30",
          ID: "0hULtajjeOLqMtTyQWPxWA",
          NO: 14,
          VALVES: [],
        },
      ],
      OTHERS: {},
      CAP_NUM: 0,
    },
    fKkvAEuijqotichFttlIKF: {
      ONOFF_SP: {
        NAME: "CT4#ONOFF_SP",
      },
      ONOFF: {
        NAME: "CT4#ONOFF",
      },
      ON: {
        NAME: "CT4#ON",
      },
      OFF: {
        NAME: "CT4#OFF",
      },
      ON_SP: {
        NAME: "CT4#ON_SP",
      },
      OFF_SP: {
        NAME: "CT4#OFF_SP",
      },
      AM: {
        NAME: "CT4#AM",
      },
      EB: {
        NAME: "CT4#EB",
      },
      FAULT: {
        NAME: "CT4#FAULT",
      },
      FAULT_CODE: {
        NAME: "CT4#FAULT_CODE",
      },
      FAULT_RESET: {
        NAME: "CT4#FAULT_RESET",
      },
      RANK: {
        NAME: "CT4#RANK",
      },
      HRS_TOTAL: {
        NAME: "CT4#HRS_TOTAL",
      },
      HRS: {
        NAME: "CT4#HRS",
      },
      P: {
        NAME: "CT4#P",
      },
      W: {
        NAME: "CT4#W",
      },
      ELEC: {
        NAME: "CT4#ELEC",
      },
      COP: {
        NAME: "CT4#COP",
      },
      ONOFF_VFD_SP: {
        NAME: "CT4#ONOFF_VFD_SP",
      },
      ONOFF_VFD: {
        NAME: "CT4#ONOFF_VFD",
      },
      FREQ: {
        NAME: "CT4#FREQ",
      },
      FREQ_SP: {
        NAME: "CT4#FREQ_SP",
      },
      FAULT_VFD: {
        NAME: "CT4#FAULT_VFD",
      },
      P_VFD: {
        NAME: "CT4#P_VFD",
      },
      FLOW_RATED: {
        NAME: "CT4#FLOW_RATED",
      },
      P_RATED: {
        NAME: "CT4#P_RATED",
      },
      COP_RATED: {
        NAME: "CT4#COP_RATED",
      },
      ID: "fKkvAEuijqotichFttlIKF",
      NO: 4,
      NAME: "冷却塔#4",
      TYPE: "D0A1D",
      STATION_ID: "aKA0GGZa0NIQHgzurqjJIC",
      STATION_PREFIX_ORG: "HVC1#",
      DEVICE_PREFIX: "CT4#",
      SUITE_IDS: [
        "oM6qEMxe50PY3Jv1JGxGVi",
        "jXGJPr5bbu8Pm1azp1qVLz",
        "3T4PM4a_xeb9HSfb6CA2vP",
        "yxOjIyO9w9FfhRDEZmKWZC",
      ],
      VALVES: [
        {
          ONOFF_SP: {
            NAME: "V15#ONOFF_SP",
          },
          ONOFF: {
            NAME: "V15#ONOFF",
          },
          OFF: {
            NAME: "V15#OFF",
          },
          ON: {
            NAME: "V15#ON",
          },
          OFF_SP: {
            NAME: "V15#OFF_SP",
          },
          ON_SP: {
            NAME: "V15#ON_SP",
          },
          EB: {
            NAME: "V15#EB",
          },
          AM: {
            NAME: "V15#AM",
          },
          FAULT: {
            NAME: "V15#FAULT",
          },
          NAME: "阀门#15",
          TYPE: "D0A30",
          ID: "eoRbD025SCKNBCvpFs1btn",
          NO: 15,
          VALVES: [],
        },
        {
          ONOFF_SP: {
            NAME: "V16#ONOFF_SP",
          },
          ONOFF: {
            NAME: "V16#ONOFF",
          },
          OFF: {
            NAME: "V16#OFF",
          },
          ON: {
            NAME: "V16#ON",
          },
          OFF_SP: {
            NAME: "V16#OFF_SP",
          },
          ON_SP: {
            NAME: "V16#ON_SP",
          },
          EB: {
            NAME: "V16#EB",
          },
          AM: {
            NAME: "V16#AM",
          },
          FAULT: {
            NAME: "V16#FAULT",
          },
          NAME: "阀门#16",
          TYPE: "D0A30",
          ID: "wggnS6uBEo1qHuOEoT0atb",
          NO: 16,
          VALVES: [],
        },
      ],
      OTHERS: {},
      CAP_NUM: 0,
    },
  },
  DVS: {
    "8HzAnyOaoKKlVfgBK60j8x": {
      ONOFF_SP: {
        NAME: "V1#ONOFF_SP",
      },
      ONOFF: {
        NAME: "V1#ONOFF",
      },
      ON: {
        NAME: "V1#ON",
      },
      OFF: {
        NAME: "V1#OFF",
      },
      ON_SP: {
        NAME: "V1#ON_SP",
      },
      OFF_SP: {
        NAME: "V1#OFF_SP",
      },
      POS_SP: {
        NAME: "V1#POS_SP",
      },
      POS: {
        NAME: "V1#POS",
      },
      AM: {
        NAME: "V1#AM",
      },
      EB: {
        NAME: "V1#EB",
      },
      FAULT: {
        NAME: "V1#FAULT",
      },
      RANK: {
        NAME: "V1#RANK",
      },
      ID: "8HzAnyOaoKKlVfgBK60j8x",
      NO: 1,
      NAME: "阀门#1",
      TYPE: "D0A30",
      STATION_ID: "aKA0GGZa0NIQHgzurqjJIC",
      STATION_PREFIX_ORG: "HVC1#",
      DEVICE_PREFIX: "V1#",
      SUITE_IDS: [],
      VALVES: [],
      OTHERS: {},
      CAP_NUM: 0,
    },
    vagdLWwY59_vOksKgsos34: {
      ONOFF_SP: {
        NAME: "V2#ONOFF_SP",
      },
      ONOFF: {
        NAME: "V2#ONOFF",
      },
      ON: {
        NAME: "V2#ON",
      },
      OFF: {
        NAME: "V2#OFF",
      },
      ON_SP: {
        NAME: "V2#ON_SP",
      },
      OFF_SP: {
        NAME: "V2#OFF_SP",
      },
      POS_SP: {
        NAME: "V2#POS_SP",
      },
      POS: {
        NAME: "V2#POS",
      },
      AM: {
        NAME: "V2#AM",
      },
      EB: {
        NAME: "V2#EB",
      },
      FAULT: {
        NAME: "V2#FAULT",
      },
      RANK: {
        NAME: "V2#RANK",
      },
      ID: "vagdLWwY59_vOksKgsos34",
      NO: 2,
      NAME: "阀门#2",
      TYPE: "D0A30",
      STATION_ID: "aKA0GGZa0NIQHgzurqjJIC",
      STATION_PREFIX_ORG: "HVC1#",
      DEVICE_PREFIX: "V2#",
      SUITE_IDS: [],
      VALVES: [],
      OTHERS: {},
      CAP_NUM: 0,
    },
    ZBzUT4_IjkewlhCq7yhz5h: {
      ONOFF_SP: {
        NAME: "V3#ONOFF_SP",
      },
      ONOFF: {
        NAME: "V3#ONOFF",
      },
      ON: {
        NAME: "V3#ON",
      },
      OFF: {
        NAME: "V3#OFF",
      },
      ON_SP: {
        NAME: "V3#ON_SP",
      },
      OFF_SP: {
        NAME: "V3#OFF_SP",
      },
      POS_SP: {
        NAME: "V3#POS_SP",
      },
      POS: {
        NAME: "V3#POS",
      },
      AM: {
        NAME: "V3#AM",
      },
      EB: {
        NAME: "V3#EB",
      },
      FAULT: {
        NAME: "V3#FAULT",
      },
      RANK: {
        NAME: "V3#RANK",
      },
      ID: "ZBzUT4_IjkewlhCq7yhz5h",
      NO: 3,
      NAME: "阀门#3",
      TYPE: "D0A30",
      STATION_ID: "aKA0GGZa0NIQHgzurqjJIC",
      STATION_PREFIX_ORG: "HVC1#",
      DEVICE_PREFIX: "V3#",
      SUITE_IDS: [],
      VALVES: [],
      OTHERS: {},
      CAP_NUM: 0,
    },
    jX0yZxlK3supakYcAAlPYS: {
      ONOFF_SP: {
        NAME: "V4#ONOFF_SP",
      },
      ONOFF: {
        NAME: "V4#ONOFF",
      },
      ON: {
        NAME: "V4#ON",
      },
      OFF: {
        NAME: "V4#OFF",
      },
      ON_SP: {
        NAME: "V4#ON_SP",
      },
      OFF_SP: {
        NAME: "V4#OFF_SP",
      },
      POS_SP: {
        NAME: "V4#POS_SP",
      },
      POS: {
        NAME: "V4#POS",
      },
      AM: {
        NAME: "V4#AM",
      },
      EB: {
        NAME: "V4#EB",
      },
      FAULT: {
        NAME: "V4#FAULT",
      },
      RANK: {
        NAME: "V4#RANK",
      },
      ID: "jX0yZxlK3supakYcAAlPYS",
      NO: 4,
      NAME: "阀门#4",
      TYPE: "D0A30",
      STATION_ID: "aKA0GGZa0NIQHgzurqjJIC",
      STATION_PREFIX_ORG: "HVC1#",
      DEVICE_PREFIX: "V4#",
      SUITE_IDS: [],
      VALVES: [],
      OTHERS: {},
      CAP_NUM: 0,
    },
    "6LeVs0tVP9MJJS_R2cAcyB": {
      ONOFF_SP: {
        NAME: "V5#ONOFF_SP",
      },
      ONOFF: {
        NAME: "V5#ONOFF",
      },
      ON: {
        NAME: "V5#ON",
      },
      OFF: {
        NAME: "V5#OFF",
      },
      ON_SP: {
        NAME: "V5#ON_SP",
      },
      OFF_SP: {
        NAME: "V5#OFF_SP",
      },
      POS_SP: {
        NAME: "V5#POS_SP",
      },
      POS: {
        NAME: "V5#POS",
      },
      AM: {
        NAME: "V5#AM",
      },
      EB: {
        NAME: "V5#EB",
      },
      FAULT: {
        NAME: "V5#FAULT",
      },
      RANK: {
        NAME: "V5#RANK",
      },
      ID: "6LeVs0tVP9MJJS_R2cAcyB",
      NO: 5,
      NAME: "阀门#5",
      TYPE: "D0A30",
      STATION_ID: "aKA0GGZa0NIQHgzurqjJIC",
      STATION_PREFIX_ORG: "HVC1#",
      DEVICE_PREFIX: "V5#",
      SUITE_IDS: [],
      VALVES: [],
      OTHERS: {},
      CAP_NUM: 0,
    },
    DmNdg3yWNH7EoaHtgdCjY6: {
      ONOFF_SP: {
        NAME: "V6#ONOFF_SP",
      },
      ONOFF: {
        NAME: "V6#ONOFF",
      },
      ON: {
        NAME: "V6#ON",
      },
      OFF: {
        NAME: "V6#OFF",
      },
      ON_SP: {
        NAME: "V6#ON_SP",
      },
      OFF_SP: {
        NAME: "V6#OFF_SP",
      },
      POS_SP: {
        NAME: "V6#POS_SP",
      },
      POS: {
        NAME: "V6#POS",
      },
      AM: {
        NAME: "V6#AM",
      },
      EB: {
        NAME: "V6#EB",
      },
      FAULT: {
        NAME: "V6#FAULT",
      },
      RANK: {
        NAME: "V6#RANK",
      },
      ID: "DmNdg3yWNH7EoaHtgdCjY6",
      NO: 6,
      NAME: "阀门#6",
      TYPE: "D0A30",
      STATION_ID: "aKA0GGZa0NIQHgzurqjJIC",
      STATION_PREFIX_ORG: "HVC1#",
      DEVICE_PREFIX: "V6#",
      SUITE_IDS: [],
      VALVES: [],
      OTHERS: {},
      CAP_NUM: 0,
    },
    udzjui5InXHvRPB2z4pSMn: {
      ONOFF_SP: {
        NAME: "V7#ONOFF_SP",
      },
      ONOFF: {
        NAME: "V7#ONOFF",
      },
      ON: {
        NAME: "V7#ON",
      },
      OFF: {
        NAME: "V7#OFF",
      },
      ON_SP: {
        NAME: "V7#ON_SP",
      },
      OFF_SP: {
        NAME: "V7#OFF_SP",
      },
      POS_SP: {
        NAME: "V7#POS_SP",
      },
      POS: {
        NAME: "V7#POS",
      },
      AM: {
        NAME: "V7#AM",
      },
      EB: {
        NAME: "V7#EB",
      },
      FAULT: {
        NAME: "V7#FAULT",
      },
      RANK: {
        NAME: "V7#RANK",
      },
      ID: "udzjui5InXHvRPB2z4pSMn",
      NO: 7,
      NAME: "阀门#7",
      TYPE: "D0A30",
      STATION_ID: "aKA0GGZa0NIQHgzurqjJIC",
      STATION_PREFIX_ORG: "HVC1#",
      DEVICE_PREFIX: "V7#",
      SUITE_IDS: [],
      VALVES: [],
      OTHERS: {},
      CAP_NUM: 0,
    },
    OZYcnMrfHWNevKrbab7iQk: {
      ONOFF_SP: {
        NAME: "V8#ONOFF_SP",
      },
      ONOFF: {
        NAME: "V8#ONOFF",
      },
      ON: {
        NAME: "V8#ON",
      },
      OFF: {
        NAME: "V8#OFF",
      },
      ON_SP: {
        NAME: "V8#ON_SP",
      },
      OFF_SP: {
        NAME: "V8#OFF_SP",
      },
      POS_SP: {
        NAME: "V8#POS_SP",
      },
      POS: {
        NAME: "V8#POS",
      },
      AM: {
        NAME: "V8#AM",
      },
      EB: {
        NAME: "V8#EB",
      },
      FAULT: {
        NAME: "V8#FAULT",
      },
      RANK: {
        NAME: "V8#RANK",
      },
      ID: "OZYcnMrfHWNevKrbab7iQk",
      NO: 8,
      NAME: "阀门#8",
      TYPE: "D0A30",
      STATION_ID: "aKA0GGZa0NIQHgzurqjJIC",
      STATION_PREFIX_ORG: "HVC1#",
      DEVICE_PREFIX: "V8#",
      SUITE_IDS: [],
      VALVES: [],
      OTHERS: {},
      CAP_NUM: 0,
    },
    iQ9nVLl2uBpstp2iKCzqI3: {
      ONOFF_SP: {
        NAME: "V9#ONOFF_SP",
      },
      ONOFF: {
        NAME: "V9#ONOFF",
      },
      ON: {
        NAME: "V9#ON",
      },
      OFF: {
        NAME: "V9#OFF",
      },
      ON_SP: {
        NAME: "V9#ON_SP",
      },
      OFF_SP: {
        NAME: "V9#OFF_SP",
      },
      POS_SP: {
        NAME: "V9#POS_SP",
      },
      POS: {
        NAME: "V9#POS",
      },
      AM: {
        NAME: "V9#AM",
      },
      EB: {
        NAME: "V9#EB",
      },
      FAULT: {
        NAME: "V9#FAULT",
      },
      RANK: {
        NAME: "V9#RANK",
      },
      ID: "iQ9nVLl2uBpstp2iKCzqI3",
      NO: 9,
      NAME: "阀门#9",
      TYPE: "D0A30",
      STATION_ID: "aKA0GGZa0NIQHgzurqjJIC",
      STATION_PREFIX_ORG: "HVC1#",
      DEVICE_PREFIX: "V9#",
      SUITE_IDS: [],
      VALVES: [],
      OTHERS: {},
      CAP_NUM: 0,
    },
    iUppCA_gPRCe2Lka2gUt8m: {
      ONOFF_SP: {
        NAME: "V10#ONOFF_SP",
      },
      ONOFF: {
        NAME: "V10#ONOFF",
      },
      ON: {
        NAME: "V10#ON",
      },
      OFF: {
        NAME: "V10#OFF",
      },
      ON_SP: {
        NAME: "V10#ON_SP",
      },
      OFF_SP: {
        NAME: "V10#OFF_SP",
      },
      POS_SP: {
        NAME: "V10#POS_SP",
      },
      POS: {
        NAME: "V10#POS",
      },
      AM: {
        NAME: "V10#AM",
      },
      EB: {
        NAME: "V10#EB",
      },
      FAULT: {
        NAME: "V10#FAULT",
      },
      RANK: {
        NAME: "V10#RANK",
      },
      ID: "iUppCA_gPRCe2Lka2gUt8m",
      NO: 10,
      NAME: "阀门#10",
      TYPE: "D0A30",
      STATION_ID: "aKA0GGZa0NIQHgzurqjJIC",
      STATION_PREFIX_ORG: "HVC1#",
      DEVICE_PREFIX: "V10#",
      SUITE_IDS: [],
      VALVES: [],
      OTHERS: {},
      CAP_NUM: 0,
    },
    jvibORBfgRlq_5PkBOTiIr: {
      ONOFF_SP: {
        NAME: "V11#ONOFF_SP",
      },
      ONOFF: {
        NAME: "V11#ONOFF",
      },
      ON: {
        NAME: "V11#ON",
      },
      OFF: {
        NAME: "V11#OFF",
      },
      ON_SP: {
        NAME: "V11#ON_SP",
      },
      OFF_SP: {
        NAME: "V11#OFF_SP",
      },
      POS_SP: {
        NAME: "V11#POS_SP",
      },
      POS: {
        NAME: "V11#POS",
      },
      AM: {
        NAME: "V11#AM",
      },
      EB: {
        NAME: "V11#EB",
      },
      FAULT: {
        NAME: "V11#FAULT",
      },
      RANK: {
        NAME: "V11#RANK",
      },
      ID: "jvibORBfgRlq_5PkBOTiIr",
      NO: 11,
      NAME: "阀门#11",
      TYPE: "D0A30",
      STATION_ID: "aKA0GGZa0NIQHgzurqjJIC",
      STATION_PREFIX_ORG: "HVC1#",
      DEVICE_PREFIX: "V11#",
      SUITE_IDS: [],
      VALVES: [],
      OTHERS: {},
      CAP_NUM: 0,
    },
    Euiwh8PYCXq_7ozW8gXO2t: {
      ONOFF_SP: {
        NAME: "V12#ONOFF_SP",
      },
      ONOFF: {
        NAME: "V12#ONOFF",
      },
      ON: {
        NAME: "V12#ON",
      },
      OFF: {
        NAME: "V12#OFF",
      },
      ON_SP: {
        NAME: "V12#ON_SP",
      },
      OFF_SP: {
        NAME: "V12#OFF_SP",
      },
      POS_SP: {
        NAME: "V12#POS_SP",
      },
      POS: {
        NAME: "V12#POS",
      },
      AM: {
        NAME: "V12#AM",
      },
      EB: {
        NAME: "V12#EB",
      },
      FAULT: {
        NAME: "V12#FAULT",
      },
      RANK: {
        NAME: "V12#RANK",
      },
      ID: "Euiwh8PYCXq_7ozW8gXO2t",
      NO: 12,
      NAME: "阀门#12",
      TYPE: "D0A30",
      STATION_ID: "aKA0GGZa0NIQHgzurqjJIC",
      STATION_PREFIX_ORG: "HVC1#",
      DEVICE_PREFIX: "V12#",
      SUITE_IDS: [],
      VALVES: [],
      OTHERS: {},
      CAP_NUM: 0,
    },
    e9_W9b6otoLOnFZrFJXLRi: {
      ONOFF_SP: {
        NAME: "V13#ONOFF_SP",
      },
      ONOFF: {
        NAME: "V13#ONOFF",
      },
      ON: {
        NAME: "V13#ON",
      },
      OFF: {
        NAME: "V13#OFF",
      },
      ON_SP: {
        NAME: "V13#ON_SP",
      },
      OFF_SP: {
        NAME: "V13#OFF_SP",
      },
      POS_SP: {
        NAME: "V13#POS_SP",
      },
      POS: {
        NAME: "V13#POS",
      },
      AM: {
        NAME: "V13#AM",
      },
      EB: {
        NAME: "V13#EB",
      },
      FAULT: {
        NAME: "V13#FAULT",
      },
      RANK: {
        NAME: "V13#RANK",
      },
      ID: "e9_W9b6otoLOnFZrFJXLRi",
      NO: 13,
      NAME: "阀门#13",
      TYPE: "D0A30",
      STATION_ID: "aKA0GGZa0NIQHgzurqjJIC",
      STATION_PREFIX_ORG: "HVC1#",
      DEVICE_PREFIX: "V13#",
      SUITE_IDS: [],
      VALVES: [],
      OTHERS: {},
      CAP_NUM: 0,
    },
    "0hULtajjeOLqMtTyQWPxWA": {
      ONOFF_SP: {
        NAME: "V14#ONOFF_SP",
      },
      ONOFF: {
        NAME: "V14#ONOFF",
      },
      ON: {
        NAME: "V14#ON",
      },
      OFF: {
        NAME: "V14#OFF",
      },
      ON_SP: {
        NAME: "V14#ON_SP",
      },
      OFF_SP: {
        NAME: "V14#OFF_SP",
      },
      POS_SP: {
        NAME: "V14#POS_SP",
      },
      POS: {
        NAME: "V14#POS",
      },
      AM: {
        NAME: "V14#AM",
      },
      EB: {
        NAME: "V14#EB",
      },
      FAULT: {
        NAME: "V14#FAULT",
      },
      RANK: {
        NAME: "V14#RANK",
      },
      ID: "0hULtajjeOLqMtTyQWPxWA",
      NO: 14,
      NAME: "阀门#14",
      TYPE: "D0A30",
      STATION_ID: "aKA0GGZa0NIQHgzurqjJIC",
      STATION_PREFIX_ORG: "HVC1#",
      DEVICE_PREFIX: "V14#",
      SUITE_IDS: [],
      VALVES: [],
      OTHERS: {},
      CAP_NUM: 0,
    },
    eoRbD025SCKNBCvpFs1btn: {
      ONOFF_SP: {
        NAME: "V15#ONOFF_SP",
      },
      ONOFF: {
        NAME: "V15#ONOFF",
      },
      ON: {
        NAME: "V15#ON",
      },
      OFF: {
        NAME: "V15#OFF",
      },
      ON_SP: {
        NAME: "V15#ON_SP",
      },
      OFF_SP: {
        NAME: "V15#OFF_SP",
      },
      POS_SP: {
        NAME: "V15#POS_SP",
      },
      POS: {
        NAME: "V15#POS",
      },
      AM: {
        NAME: "V15#AM",
      },
      EB: {
        NAME: "V15#EB",
      },
      FAULT: {
        NAME: "V15#FAULT",
      },
      RANK: {
        NAME: "V15#RANK",
      },
      ID: "eoRbD025SCKNBCvpFs1btn",
      NO: 15,
      NAME: "阀门#15",
      TYPE: "D0A30",
      STATION_ID: "aKA0GGZa0NIQHgzurqjJIC",
      STATION_PREFIX_ORG: "HVC1#",
      DEVICE_PREFIX: "V15#",
      SUITE_IDS: [],
      VALVES: [],
      OTHERS: {},
      CAP_NUM: 0,
    },
    wggnS6uBEo1qHuOEoT0atb: {
      ONOFF_SP: {
        NAME: "V16#ONOFF_SP",
      },
      ONOFF: {
        NAME: "V16#ONOFF",
      },
      ON: {
        NAME: "V16#ON",
      },
      OFF: {
        NAME: "V16#OFF",
      },
      ON_SP: {
        NAME: "V16#ON_SP",
      },
      OFF_SP: {
        NAME: "V16#OFF_SP",
      },
      POS_SP: {
        NAME: "V16#POS_SP",
      },
      POS: {
        NAME: "V16#POS",
      },
      AM: {
        NAME: "V16#AM",
      },
      EB: {
        NAME: "V16#EB",
      },
      FAULT: {
        NAME: "V16#FAULT",
      },
      RANK: {
        NAME: "V16#RANK",
      },
      ID: "wggnS6uBEo1qHuOEoT0atb",
      NO: 16,
      NAME: "阀门#16",
      TYPE: "D0A30",
      STATION_ID: "aKA0GGZa0NIQHgzurqjJIC",
      STATION_PREFIX_ORG: "HVC1#",
      DEVICE_PREFIX: "V16#",
      SUITE_IDS: [],
      VALVES: [],
      OTHERS: {},
      CAP_NUM: 0,
    },
  },
  AHUS: {},
  FAUS: {},
  FCUS: {},
  OAFS: {},
  SAFS: {},
  REAFS: {},
  SCHWPS: {},
  NUM_CH: {
    NAME: "NUM_CH",
  },
  NUM_CWP: {
    NAME: "NUM_CWP",
  },
  NUM_CHWP: {
    NAME: "NUM_CHWP",
  },
  NUM_CT: {
    NAME: "NUM_CT",
  },
  DT_CW_APP: {
    NAME: "DT_CW_APP",
  },
  HINT: {
    NAME: "HINT",
  },
  T_INDOOR: {
    NAME: "T_INDOOR",
  },
  RH_INDOOR: {
    NAME: "RH_INDOOR",
  },
  TW_INDOOR: {
    NAME: "TW_INDOOR",
  },
  H_INDOOR: {
    NAME: "H_INDOOR",
  },
  TD_INDOOR: {
    NAME: "TD_INDOOR",
  },
  CO2_INDOOR: {
    NAME: "CO2_INDOOR",
  },
  ID: "aKA0GGZa0NIQHgzurqjJIC",
  NO: 1,
  NAME: "暖通空调1",
  TYPE: "D0A10",
  STATION_ID: "aKA0GGZa0NIQHgzurqjJIC",
  STATION_PREFIX_ORG: "HVC1#",
  STATION_PREFIX_SET: "HVC1",
  OTHERS: {
    "CH1#AM": {
      NAME: "CH1#AM",
    },
    "CH1#COP": {
      NAME: "CH1#COP",
    },
    "CH1#COP_RATED": {
      NAME: "CH1#COP_RATED",
    },
    "CH1#COUNT_SS": {
      NAME: "CH1#COUNT_SS",
    },
    "CH1#DPR_OIL": {
      NAME: "CH1#DPR_OIL",
    },
    "CH1#EB": {
      NAME: "CH1#EB",
    },
    "CH1#ELEC": {
      NAME: "CH1#ELEC",
    },
    "CH1#FAULT": {
      NAME: "CH1#FAULT",
    },
    "CH1#FAULT_CODE": {
      NAME: "CH1#FAULT_CODE",
    },
    "CH1#FAULT_RESET": {
      NAME: "CH1#FAULT_RESET",
    },
    "CH1#FLOW_CHW": {
      NAME: "CH1#FLOW_CHW",
    },
    "CH1#FLOW_CHW_RATED": {
      NAME: "CH1#FLOW_CHW_RATED",
    },
    "CH1#FLOW_CHW_SWITCH": {
      NAME: "CH1#FLOW_CHW_SWITCH",
    },
    "CH1#FLOW_CW": {
      NAME: "CH1#FLOW_CW",
    },
    "CH1#FLOW_CW_RATED": {
      NAME: "CH1#FLOW_CW_RATED",
    },
    "CH1#FLOW_CW_SWITCH": {
      NAME: "CH1#FLOW_CW_SWITCH",
    },
    "CH1#HRS": {
      NAME: "CH1#HRS",
    },
    "CH1#HRS_TOTAL": {
      NAME: "CH1#HRS_TOTAL",
    },
    "CH1#I": {
      NAME: "CH1#I",
    },
    "CH1#I_PCT": {
      NAME: "CH1#I_PCT",
    },
    "CH1#I_PCT_MAX_SP": {
      NAME: "CH1#I_PCT_MAX_SP",
    },
    "CH1#LOAD": {
      NAME: "CH1#LOAD",
    },
    "CH1#LOAD_RATED": {
      NAME: "CH1#LOAD_RATED",
      VALUE: "2000",
      VALUE_O: 2000,
    },
    "CH1#MODE": {
      NAME: "CH1#MODE",
    },
    "CH1#OFF": {
      NAME: "CH1#OFF",
    },
    "CH1#OFF_SP": {
      NAME: "CH1#OFF_SP",
    },
    "CH1#ON": {
      NAME: "CH1#ON",
    },
    "CH1#ONECLICK_START": {
      NAME: "CH1#ONECLICK_START",
    },
    "CH1#ONECLICK_STOP": {
      NAME: "CH1#ONECLICK_STOP",
    },
    "CH1#ONOFF": {
      NAME: "CH1#ONOFF",
    },
    "CH1#ONOFF_SP": {
      NAME: "CH1#ONOFF_SP",
    },
    "CH1#ON_SP": {
      NAME: "CH1#ON_SP",
    },
    "CH1#P": {
      NAME: "CH1#P",
    },
    "CH1#PLR": {
      NAME: "CH1#PLR",
    },
    "CH1#P_RATED": {
      NAME: "CH1#P_RATED",
    },
    "CH1#PR_COND": {
      NAME: "CH1#PR_COND",
    },
    "CH1#PR_EVAP": {
      NAME: "CH1#PR_EVAP",
    },
    "CH1#PR_EXHT_PROTECT": {
      NAME: "CH1#PR_EXHT_PROTECT",
    },
    "CH1#RANK": {
      NAME: "CH1#RANK",
    },
    "CH1#T_CHW_S": {
      NAME: "CH1#T_CHW_S",
    },
    "CH1#T_CHW_S_SP": {
      NAME: "CH1#T_CHW_S_SP",
    },
    "CH1#T_COND": {
      NAME: "CH1#T_COND",
    },
    "CH1#T_COND_ENT": {
      NAME: "CH1#T_COND_ENT",
    },
    "CH1#T_COND_LEV": {
      NAME: "CH1#T_COND_LEV",
    },
    "CH1#T_COND_PROTECT": {
      NAME: "CH1#T_COND_PROTECT",
    },
    "CH1#T_CW_R": {
      NAME: "CH1#T_CW_R",
    },
    "CH1#T_EVAP": {
      NAME: "CH1#T_EVAP",
    },
    "CH1#T_EVAP_ENT": {
      NAME: "CH1#T_EVAP_ENT",
    },
    "CH1#T_EVAP_LEV": {
      NAME: "CH1#T_EVAP_LEV",
    },
    "CH1#T_EXHT": {
      NAME: "CH1#T_EXHT",
    },
    "CH1#T_OIL": {
      NAME: "CH1#T_OIL",
    },
    "CH1#W": {
      NAME: "CH1#W",
    },
    "CH2#AM": {
      NAME: "CH2#AM",
    },
    "CH2#COP": {
      NAME: "CH2#COP",
    },
    "CH2#COP_RATED": {
      NAME: "CH2#COP_RATED",
    },
    "CH2#COUNT_SS": {
      NAME: "CH2#COUNT_SS",
    },
    "CH2#DPR_OIL": {
      NAME: "CH2#DPR_OIL",
    },
    "CH2#EB": {
      NAME: "CH2#EB",
    },
    "CH2#ELEC": {
      NAME: "CH2#ELEC",
    },
    "CH2#FAULT": {
      NAME: "CH2#FAULT",
    },
    "CH2#FAULT_CODE": {
      NAME: "CH2#FAULT_CODE",
    },
    "CH2#FAULT_RESET": {
      NAME: "CH2#FAULT_RESET",
    },
    "CH2#FLOW_CHW": {
      NAME: "CH2#FLOW_CHW",
    },
    "CH2#FLOW_CHW_RATED": {
      NAME: "CH2#FLOW_CHW_RATED",
    },
    "CH2#FLOW_CHW_SWITCH": {
      NAME: "CH2#FLOW_CHW_SWITCH",
    },
    "CH2#FLOW_CW": {
      NAME: "CH2#FLOW_CW",
    },
    "CH2#FLOW_CW_RATED": {
      NAME: "CH2#FLOW_CW_RATED",
    },
    "CH2#FLOW_CW_SWITCH": {
      NAME: "CH2#FLOW_CW_SWITCH",
    },
    "CH2#HRS": {
      NAME: "CH2#HRS",
    },
    "CH2#HRS_TOTAL": {
      NAME: "CH2#HRS_TOTAL",
    },
    "CH2#I": {
      NAME: "CH2#I",
    },
    "CH2#I_PCT": {
      NAME: "CH2#I_PCT",
    },
    "CH2#I_PCT_MAX_SP": {
      NAME: "CH2#I_PCT_MAX_SP",
    },
    "CH2#LOAD": {
      NAME: "CH2#LOAD",
    },
    "CH2#LOAD_RATED": {
      NAME: "CH2#LOAD_RATED",
      VALUE: "2000",
      VALUE_O: 2000,
    },
    "CH2#MODE": {
      NAME: "CH2#MODE",
    },
    "CH2#OFF": {
      NAME: "CH2#OFF",
    },
    "CH2#OFF_SP": {
      NAME: "CH2#OFF_SP",
    },
    "CH2#ON": {
      NAME: "CH2#ON",
    },
    "CH2#ONECLICK_START": {
      NAME: "CH2#ONECLICK_START",
    },
    "CH2#ONECLICK_STOP": {
      NAME: "CH2#ONECLICK_STOP",
    },
    "CH2#ONOFF": {
      NAME: "CH2#ONOFF",
    },
    "CH2#ONOFF_SP": {
      NAME: "CH2#ONOFF_SP",
    },
    "CH2#ON_SP": {
      NAME: "CH2#ON_SP",
    },
    "CH2#P": {
      NAME: "CH2#P",
    },
    "CH2#PLR": {
      NAME: "CH2#PLR",
    },
    "CH2#P_RATED": {
      NAME: "CH2#P_RATED",
    },
    "CH2#PR_COND": {
      NAME: "CH2#PR_COND",
    },
    "CH2#PR_EVAP": {
      NAME: "CH2#PR_EVAP",
    },
    "CH2#PR_EXHT_PROTECT": {
      NAME: "CH2#PR_EXHT_PROTECT",
    },
    "CH2#RANK": {
      NAME: "CH2#RANK",
    },
    "CH2#T_CHW_S": {
      NAME: "CH2#T_CHW_S",
    },
    "CH2#T_CHW_S_SP": {
      NAME: "CH2#T_CHW_S_SP",
    },
    "CH2#T_COND": {
      NAME: "CH2#T_COND",
    },
    "CH2#T_COND_ENT": {
      NAME: "CH2#T_COND_ENT",
    },
    "CH2#T_COND_LEV": {
      NAME: "CH2#T_COND_LEV",
    },
    "CH2#T_COND_PROTECT": {
      NAME: "CH2#T_COND_PROTECT",
    },
    "CH2#T_CW_R": {
      NAME: "CH2#T_CW_R",
    },
    "CH2#T_EVAP": {
      NAME: "CH2#T_EVAP",
    },
    "CH2#T_EVAP_ENT": {
      NAME: "CH2#T_EVAP_ENT",
    },
    "CH2#T_EVAP_LEV": {
      NAME: "CH2#T_EVAP_LEV",
    },
    "CH2#T_EXHT": {
      NAME: "CH2#T_EXHT",
    },
    "CH2#T_OIL": {
      NAME: "CH2#T_OIL",
    },
    "CH2#W": {
      NAME: "CH2#W",
    },
    "CH3#AM": {
      NAME: "CH3#AM",
    },
    "CH3#COP": {
      NAME: "CH3#COP",
    },
    "CH3#COP_RATED": {
      NAME: "CH3#COP_RATED",
    },
    "CH3#COUNT_SS": {
      NAME: "CH3#COUNT_SS",
    },
    "CH3#DPR_OIL": {
      NAME: "CH3#DPR_OIL",
    },
    "CH3#EB": {
      NAME: "CH3#EB",
    },
    "CH3#ELEC": {
      NAME: "CH3#ELEC",
    },
    "CH3#FAULT": {
      NAME: "CH3#FAULT",
    },
    "CH3#FAULT_CODE": {
      NAME: "CH3#FAULT_CODE",
    },
    "CH3#FAULT_RESET": {
      NAME: "CH3#FAULT_RESET",
    },
    "CH3#FLOW_CHW": {
      NAME: "CH3#FLOW_CHW",
    },
    "CH3#FLOW_CHW_RATED": {
      NAME: "CH3#FLOW_CHW_RATED",
    },
    "CH3#FLOW_CHW_SWITCH": {
      NAME: "CH3#FLOW_CHW_SWITCH",
    },
    "CH3#FLOW_CW": {
      NAME: "CH3#FLOW_CW",
    },
    "CH3#FLOW_CW_RATED": {
      NAME: "CH3#FLOW_CW_RATED",
    },
    "CH3#FLOW_CW_SWITCH": {
      NAME: "CH3#FLOW_CW_SWITCH",
    },
    "CH3#HRS": {
      NAME: "CH3#HRS",
    },
    "CH3#HRS_TOTAL": {
      NAME: "CH3#HRS_TOTAL",
    },
    "CH3#I": {
      NAME: "CH3#I",
    },
    "CH3#I_PCT": {
      NAME: "CH3#I_PCT",
    },
    "CH3#I_PCT_MAX_SP": {
      NAME: "CH3#I_PCT_MAX_SP",
    },
    "CH3#LOAD": {
      NAME: "CH3#LOAD",
    },
    "CH3#LOAD_RATED": {
      NAME: "CH3#LOAD_RATED",
      VALUE: "2000",
      VALUE_O: 2000,
    },
    "CH3#MODE": {
      NAME: "CH3#MODE",
    },
    "CH3#OFF": {
      NAME: "CH3#OFF",
    },
    "CH3#OFF_SP": {
      NAME: "CH3#OFF_SP",
    },
    "CH3#ON": {
      NAME: "CH3#ON",
    },
    "CH3#ONECLICK_START": {
      NAME: "CH3#ONECLICK_START",
    },
    "CH3#ONECLICK_STOP": {
      NAME: "CH3#ONECLICK_STOP",
    },
    "CH3#ONOFF": {
      NAME: "CH3#ONOFF",
    },
    "CH3#ONOFF_SP": {
      NAME: "CH3#ONOFF_SP",
    },
    "CH3#ON_SP": {
      NAME: "CH3#ON_SP",
    },
    "CH3#P": {
      NAME: "CH3#P",
    },
    "CH3#PLR": {
      NAME: "CH3#PLR",
    },
    "CH3#P_RATED": {
      NAME: "CH3#P_RATED",
    },
    "CH3#PR_COND": {
      NAME: "CH3#PR_COND",
    },
    "CH3#PR_EVAP": {
      NAME: "CH3#PR_EVAP",
    },
    "CH3#PR_EXHT_PROTECT": {
      NAME: "CH3#PR_EXHT_PROTECT",
    },
    "CH3#RANK": {
      NAME: "CH3#RANK",
    },
    "CH3#T_CHW_S": {
      NAME: "CH3#T_CHW_S",
    },
    "CH3#T_CHW_S_SP": {
      NAME: "CH3#T_CHW_S_SP",
    },
    "CH3#T_COND": {
      NAME: "CH3#T_COND",
    },
    "CH3#T_COND_ENT": {
      NAME: "CH3#T_COND_ENT",
    },
    "CH3#T_COND_LEV": {
      NAME: "CH3#T_COND_LEV",
    },
    "CH3#T_COND_PROTECT": {
      NAME: "CH3#T_COND_PROTECT",
    },
    "CH3#T_CW_R": {
      NAME: "CH3#T_CW_R",
    },
    "CH3#T_EVAP": {
      NAME: "CH3#T_EVAP",
    },
    "CH3#T_EVAP_ENT": {
      NAME: "CH3#T_EVAP_ENT",
    },
    "CH3#T_EVAP_LEV": {
      NAME: "CH3#T_EVAP_LEV",
    },
    "CH3#T_EXHT": {
      NAME: "CH3#T_EXHT",
    },
    "CH3#T_OIL": {
      NAME: "CH3#T_OIL",
    },
    "CH3#W": {
      NAME: "CH3#W",
    },
    "CH4#AM": {
      NAME: "CH4#AM",
    },
    "CH4#COP": {
      NAME: "CH4#COP",
    },
    "CH4#COP_RATED": {
      NAME: "CH4#COP_RATED",
    },
    "CH4#COUNT_SS": {
      NAME: "CH4#COUNT_SS",
    },
    "CH4#DPR_OIL": {
      NAME: "CH4#DPR_OIL",
    },
    "CH4#EB": {
      NAME: "CH4#EB",
    },
    "CH4#ELEC": {
      NAME: "CH4#ELEC",
    },
    "CH4#FAULT": {
      NAME: "CH4#FAULT",
    },
    "CH4#FAULT_CODE": {
      NAME: "CH4#FAULT_CODE",
    },
    "CH4#FAULT_RESET": {
      NAME: "CH4#FAULT_RESET",
    },
    "CH4#FLOW_CHW": {
      NAME: "CH4#FLOW_CHW",
    },
    "CH4#FLOW_CHW_RATED": {
      NAME: "CH4#FLOW_CHW_RATED",
    },
    "CH4#FLOW_CHW_SWITCH": {
      NAME: "CH4#FLOW_CHW_SWITCH",
    },
    "CH4#FLOW_CW": {
      NAME: "CH4#FLOW_CW",
    },
    "CH4#FLOW_CW_RATED": {
      NAME: "CH4#FLOW_CW_RATED",
    },
    "CH4#FLOW_CW_SWITCH": {
      NAME: "CH4#FLOW_CW_SWITCH",
    },
    "CH4#HRS": {
      NAME: "CH4#HRS",
    },
    "CH4#HRS_TOTAL": {
      NAME: "CH4#HRS_TOTAL",
    },
    "CH4#I": {
      NAME: "CH4#I",
    },
    "CH4#I_PCT": {
      NAME: "CH4#I_PCT",
    },
    "CH4#I_PCT_MAX_SP": {
      NAME: "CH4#I_PCT_MAX_SP",
    },
    "CH4#LOAD": {
      NAME: "CH4#LOAD",
    },
    "CH4#LOAD_RATED": {
      NAME: "CH4#LOAD_RATED",
      VALUE: "2000",
      VALUE_O: 2000,
    },
    "CH4#MODE": {
      NAME: "CH4#MODE",
    },
    "CH4#OFF": {
      NAME: "CH4#OFF",
    },
    "CH4#OFF_SP": {
      NAME: "CH4#OFF_SP",
    },
    "CH4#ON": {
      NAME: "CH4#ON",
    },
    "CH4#ONECLICK_START": {
      NAME: "CH4#ONECLICK_START",
    },
    "CH4#ONECLICK_STOP": {
      NAME: "CH4#ONECLICK_STOP",
    },
    "CH4#ONOFF": {
      NAME: "CH4#ONOFF",
    },
    "CH4#ONOFF_SP": {
      NAME: "CH4#ONOFF_SP",
    },
    "CH4#ON_SP": {
      NAME: "CH4#ON_SP",
    },
    "CH4#P": {
      NAME: "CH4#P",
    },
    "CH4#PLR": {
      NAME: "CH4#PLR",
    },
    "CH4#P_RATED": {
      NAME: "CH4#P_RATED",
    },
    "CH4#PR_COND": {
      NAME: "CH4#PR_COND",
    },
    "CH4#PR_EVAP": {
      NAME: "CH4#PR_EVAP",
    },
    "CH4#PR_EXHT_PROTECT": {
      NAME: "CH4#PR_EXHT_PROTECT",
    },
    "CH4#RANK": {
      NAME: "CH4#RANK",
    },
    "CH4#T_CHW_S": {
      NAME: "CH4#T_CHW_S",
    },
    "CH4#T_CHW_S_SP": {
      NAME: "CH4#T_CHW_S_SP",
    },
    "CH4#T_COND": {
      NAME: "CH4#T_COND",
    },
    "CH4#T_COND_ENT": {
      NAME: "CH4#T_COND_ENT",
    },
    "CH4#T_COND_LEV": {
      NAME: "CH4#T_COND_LEV",
    },
    "CH4#T_COND_PROTECT": {
      NAME: "CH4#T_COND_PROTECT",
    },
    "CH4#T_CW_R": {
      NAME: "CH4#T_CW_R",
    },
    "CH4#T_EVAP": {
      NAME: "CH4#T_EVAP",
    },
    "CH4#T_EVAP_ENT": {
      NAME: "CH4#T_EVAP_ENT",
    },
    "CH4#T_EVAP_LEV": {
      NAME: "CH4#T_EVAP_LEV",
    },
    "CH4#T_EXHT": {
      NAME: "CH4#T_EXHT",
    },
    "CH4#T_OIL": {
      NAME: "CH4#T_OIL",
    },
    "CH4#W": {
      NAME: "CH4#W",
    },
    "CHWP1#AM": {
      NAME: "CHWP1#AM",
    },
    "CHWP1#COP": {
      NAME: "CHWP1#COP",
    },
    "CHWP1#COP_RATED": {
      NAME: "CHWP1#COP_RATED",
    },
    "CHWP1#EB": {
      NAME: "CHWP1#EB",
    },
    "CHWP1#ELEC": {
      NAME: "CHWP1#ELEC",
    },
    "CHWP1#FAULT": {
      NAME: "CHWP1#FAULT",
    },
    "CHWP1#FAULT_CODE": {
      NAME: "CHWP1#FAULT_CODE",
    },
    "CHWP1#FAULT_RESET": {
      NAME: "CHWP1#FAULT_RESET",
    },
    "CHWP1#FAULT_VFD": {
      NAME: "CHWP1#FAULT_VFD",
    },
    "CHWP1#FLOW_RATED": {
      NAME: "CHWP1#FLOW_RATED",
    },
    "CHWP1#FREQ": {
      NAME: "CHWP1#FREQ",
    },
    "CHWP1#FREQ_SP": {
      NAME: "CHWP1#FREQ_SP",
    },
    "CHWP1#HRS": {
      NAME: "CHWP1#HRS",
    },
    "CHWP1#HRS_TOTAL": {
      NAME: "CHWP1#HRS_TOTAL",
    },
    "CHWP1#OFF": {
      NAME: "CHWP1#OFF",
    },
    "CHWP1#OFF_SP": {
      NAME: "CHWP1#OFF_SP",
    },
    "CHWP1#ON": {
      NAME: "CHWP1#ON",
    },
    "CHWP1#ONOFF": {
      NAME: "CHWP1#ONOFF",
    },
    "CHWP1#ONOFF_SP": {
      NAME: "CHWP1#ONOFF_SP",
    },
    "CHWP1#ONOFF_VFD": {
      NAME: "CHWP1#ONOFF_VFD",
    },
    "CHWP1#ONOFF_VFD_SP": {
      NAME: "CHWP1#ONOFF_VFD_SP",
    },
    "CHWP1#ON_SP": {
      NAME: "CHWP1#ON_SP",
    },
    "CHWP1#P": {
      NAME: "CHWP1#P",
    },
    "CHWP1#P_RATED": {
      NAME: "CHWP1#P_RATED",
    },
    "CHWP1#PR_INLET": {
      NAME: "CHWP1#PR_INLET",
    },
    "CHWP1#PR_OUTLET": {
      NAME: "CHWP1#PR_OUTLET",
    },
    "CHWP1#P_VFD": {
      NAME: "CHWP1#P_VFD",
    },
    "CHWP1#RANK": {
      NAME: "CHWP1#RANK",
    },
    "CHWP1#W": {
      NAME: "CHWP1#W",
    },
    "CHWP2#AM": {
      NAME: "CHWP2#AM",
    },
    "CHWP2#COP": {
      NAME: "CHWP2#COP",
    },
    "CHWP2#COP_RATED": {
      NAME: "CHWP2#COP_RATED",
    },
    "CHWP2#EB": {
      NAME: "CHWP2#EB",
    },
    "CHWP2#ELEC": {
      NAME: "CHWP2#ELEC",
    },
    "CHWP2#FAULT": {
      NAME: "CHWP2#FAULT",
    },
    "CHWP2#FAULT_CODE": {
      NAME: "CHWP2#FAULT_CODE",
    },
    "CHWP2#FAULT_RESET": {
      NAME: "CHWP2#FAULT_RESET",
    },
    "CHWP2#FAULT_VFD": {
      NAME: "CHWP2#FAULT_VFD",
    },
    "CHWP2#FLOW_RATED": {
      NAME: "CHWP2#FLOW_RATED",
    },
    "CHWP2#FREQ": {
      NAME: "CHWP2#FREQ",
    },
    "CHWP2#FREQ_SP": {
      NAME: "CHWP2#FREQ_SP",
    },
    "CHWP2#HRS": {
      NAME: "CHWP2#HRS",
    },
    "CHWP2#HRS_TOTAL": {
      NAME: "CHWP2#HRS_TOTAL",
    },
    "CHWP2#OFF": {
      NAME: "CHWP2#OFF",
    },
    "CHWP2#OFF_SP": {
      NAME: "CHWP2#OFF_SP",
    },
    "CHWP2#ON": {
      NAME: "CHWP2#ON",
    },
    "CHWP2#ONOFF": {
      NAME: "CHWP2#ONOFF",
    },
    "CHWP2#ONOFF_SP": {
      NAME: "CHWP2#ONOFF_SP",
    },
    "CHWP2#ONOFF_VFD": {
      NAME: "CHWP2#ONOFF_VFD",
    },
    "CHWP2#ONOFF_VFD_SP": {
      NAME: "CHWP2#ONOFF_VFD_SP",
    },
    "CHWP2#ON_SP": {
      NAME: "CHWP2#ON_SP",
    },
    "CHWP2#P": {
      NAME: "CHWP2#P",
    },
    "CHWP2#P_RATED": {
      NAME: "CHWP2#P_RATED",
    },
    "CHWP2#PR_INLET": {
      NAME: "CHWP2#PR_INLET",
    },
    "CHWP2#PR_OUTLET": {
      NAME: "CHWP2#PR_OUTLET",
    },
    "CHWP2#P_VFD": {
      NAME: "CHWP2#P_VFD",
    },
    "CHWP2#RANK": {
      NAME: "CHWP2#RANK",
    },
    "CHWP2#W": {
      NAME: "CHWP2#W",
    },
    "CHWP3#AM": {
      NAME: "CHWP3#AM",
    },
    "CHWP3#COP": {
      NAME: "CHWP3#COP",
    },
    "CHWP3#COP_RATED": {
      NAME: "CHWP3#COP_RATED",
    },
    "CHWP3#EB": {
      NAME: "CHWP3#EB",
    },
    "CHWP3#ELEC": {
      NAME: "CHWP3#ELEC",
    },
    "CHWP3#FAULT": {
      NAME: "CHWP3#FAULT",
    },
    "CHWP3#FAULT_CODE": {
      NAME: "CHWP3#FAULT_CODE",
    },
    "CHWP3#FAULT_RESET": {
      NAME: "CHWP3#FAULT_RESET",
    },
    "CHWP3#FAULT_VFD": {
      NAME: "CHWP3#FAULT_VFD",
    },
    "CHWP3#FLOW_RATED": {
      NAME: "CHWP3#FLOW_RATED",
    },
    "CHWP3#FREQ": {
      NAME: "CHWP3#FREQ",
    },
    "CHWP3#FREQ_SP": {
      NAME: "CHWP3#FREQ_SP",
    },
    "CHWP3#HRS": {
      NAME: "CHWP3#HRS",
    },
    "CHWP3#HRS_TOTAL": {
      NAME: "CHWP3#HRS_TOTAL",
    },
    "CHWP3#OFF": {
      NAME: "CHWP3#OFF",
    },
    "CHWP3#OFF_SP": {
      NAME: "CHWP3#OFF_SP",
    },
    "CHWP3#ON": {
      NAME: "CHWP3#ON",
    },
    "CHWP3#ONOFF": {
      NAME: "CHWP3#ONOFF",
    },
    "CHWP3#ONOFF_SP": {
      NAME: "CHWP3#ONOFF_SP",
    },
    "CHWP3#ONOFF_VFD": {
      NAME: "CHWP3#ONOFF_VFD",
    },
    "CHWP3#ONOFF_VFD_SP": {
      NAME: "CHWP3#ONOFF_VFD_SP",
    },
    "CHWP3#ON_SP": {
      NAME: "CHWP3#ON_SP",
    },
    "CHWP3#P": {
      NAME: "CHWP3#P",
    },
    "CHWP3#P_RATED": {
      NAME: "CHWP3#P_RATED",
    },
    "CHWP3#PR_INLET": {
      NAME: "CHWP3#PR_INLET",
    },
    "CHWP3#PR_OUTLET": {
      NAME: "CHWP3#PR_OUTLET",
    },
    "CHWP3#P_VFD": {
      NAME: "CHWP3#P_VFD",
    },
    "CHWP3#RANK": {
      NAME: "CHWP3#RANK",
    },
    "CHWP3#W": {
      NAME: "CHWP3#W",
    },
    "CHWP4#AM": {
      NAME: "CHWP4#AM",
    },
    "CHWP4#COP": {
      NAME: "CHWP4#COP",
    },
    "CHWP4#COP_RATED": {
      NAME: "CHWP4#COP_RATED",
    },
    "CHWP4#EB": {
      NAME: "CHWP4#EB",
    },
    "CHWP4#ELEC": {
      NAME: "CHWP4#ELEC",
    },
    "CHWP4#FAULT": {
      NAME: "CHWP4#FAULT",
    },
    "CHWP4#FAULT_CODE": {
      NAME: "CHWP4#FAULT_CODE",
    },
    "CHWP4#FAULT_RESET": {
      NAME: "CHWP4#FAULT_RESET",
    },
    "CHWP4#FAULT_VFD": {
      NAME: "CHWP4#FAULT_VFD",
    },
    "CHWP4#FLOW_RATED": {
      NAME: "CHWP4#FLOW_RATED",
    },
    "CHWP4#FREQ": {
      NAME: "CHWP4#FREQ",
    },
    "CHWP4#FREQ_SP": {
      NAME: "CHWP4#FREQ_SP",
    },
    "CHWP4#HRS": {
      NAME: "CHWP4#HRS",
    },
    "CHWP4#HRS_TOTAL": {
      NAME: "CHWP4#HRS_TOTAL",
    },
    "CHWP4#OFF": {
      NAME: "CHWP4#OFF",
    },
    "CHWP4#OFF_SP": {
      NAME: "CHWP4#OFF_SP",
    },
    "CHWP4#ON": {
      NAME: "CHWP4#ON",
    },
    "CHWP4#ONOFF": {
      NAME: "CHWP4#ONOFF",
    },
    "CHWP4#ONOFF_SP": {
      NAME: "CHWP4#ONOFF_SP",
    },
    "CHWP4#ONOFF_VFD": {
      NAME: "CHWP4#ONOFF_VFD",
    },
    "CHWP4#ONOFF_VFD_SP": {
      NAME: "CHWP4#ONOFF_VFD_SP",
    },
    "CHWP4#ON_SP": {
      NAME: "CHWP4#ON_SP",
    },
    "CHWP4#P": {
      NAME: "CHWP4#P",
    },
    "CHWP4#P_RATED": {
      NAME: "CHWP4#P_RATED",
    },
    "CHWP4#PR_INLET": {
      NAME: "CHWP4#PR_INLET",
    },
    "CHWP4#PR_OUTLET": {
      NAME: "CHWP4#PR_OUTLET",
    },
    "CHWP4#P_VFD": {
      NAME: "CHWP4#P_VFD",
    },
    "CHWP4#RANK": {
      NAME: "CHWP4#RANK",
    },
    "CHWP4#W": {
      NAME: "CHWP4#W",
    },
    "CWP1#AM": {
      NAME: "CWP1#AM",
    },
    "CWP1#COP": {
      NAME: "CWP1#COP",
    },
    "CWP1#COP_RATED": {
      NAME: "CWP1#COP_RATED",
    },
    "CWP1#EB": {
      NAME: "CWP1#EB",
    },
    "CWP1#ELEC": {
      NAME: "CWP1#ELEC",
    },
    "CWP1#FAULT": {
      NAME: "CWP1#FAULT",
    },
    "CWP1#FAULT_CODE": {
      NAME: "CWP1#FAULT_CODE",
    },
    "CWP1#FAULT_RESET": {
      NAME: "CWP1#FAULT_RESET",
    },
    "CWP1#FAULT_VFD": {
      NAME: "CWP1#FAULT_VFD",
    },
    "CWP1#FLOW_RATED": {
      NAME: "CWP1#FLOW_RATED",
    },
    "CWP1#FREQ": {
      NAME: "CWP1#FREQ",
    },
    "CWP1#FREQ_SP": {
      NAME: "CWP1#FREQ_SP",
    },
    "CWP1#HRS": {
      NAME: "CWP1#HRS",
    },
    "CWP1#HRS_TOTAL": {
      NAME: "CWP1#HRS_TOTAL",
    },
    "CWP1#OFF": {
      NAME: "CWP1#OFF",
    },
    "CWP1#OFF_SP": {
      NAME: "CWP1#OFF_SP",
    },
    "CWP1#ON": {
      NAME: "CWP1#ON",
    },
    "CWP1#ONOFF": {
      NAME: "CWP1#ONOFF",
    },
    "CWP1#ONOFF_SP": {
      NAME: "CWP1#ONOFF_SP",
    },
    "CWP1#ONOFF_VFD": {
      NAME: "CWP1#ONOFF_VFD",
    },
    "CWP1#ONOFF_VFD_SP": {
      NAME: "CWP1#ONOFF_VFD_SP",
    },
    "CWP1#ON_SP": {
      NAME: "CWP1#ON_SP",
    },
    "CWP1#P": {
      NAME: "CWP1#P",
    },
    "CWP1#P_RATED": {
      NAME: "CWP1#P_RATED",
    },
    "CWP1#PR_INLET": {
      NAME: "CWP1#PR_INLET",
    },
    "CWP1#PR_OUTLET": {
      NAME: "CWP1#PR_OUTLET",
    },
    "CWP1#P_VFD": {
      NAME: "CWP1#P_VFD",
    },
    "CWP1#RANK": {
      NAME: "CWP1#RANK",
    },
    "CWP1#W": {
      NAME: "CWP1#W",
    },
    "CWP2#AM": {
      NAME: "CWP2#AM",
    },
    "CWP2#COP": {
      NAME: "CWP2#COP",
    },
    "CWP2#COP_RATED": {
      NAME: "CWP2#COP_RATED",
    },
    "CWP2#EB": {
      NAME: "CWP2#EB",
    },
    "CWP2#ELEC": {
      NAME: "CWP2#ELEC",
    },
    "CWP2#FAULT": {
      NAME: "CWP2#FAULT",
    },
    "CWP2#FAULT_CODE": {
      NAME: "CWP2#FAULT_CODE",
    },
    "CWP2#FAULT_RESET": {
      NAME: "CWP2#FAULT_RESET",
    },
    "CWP2#FAULT_VFD": {
      NAME: "CWP2#FAULT_VFD",
    },
    "CWP2#FLOW_RATED": {
      NAME: "CWP2#FLOW_RATED",
    },
    "CWP2#FREQ": {
      NAME: "CWP2#FREQ",
    },
    "CWP2#FREQ_SP": {
      NAME: "CWP2#FREQ_SP",
    },
    "CWP2#HRS": {
      NAME: "CWP2#HRS",
    },
    "CWP2#HRS_TOTAL": {
      NAME: "CWP2#HRS_TOTAL",
    },
    "CWP2#OFF": {
      NAME: "CWP2#OFF",
    },
    "CWP2#OFF_SP": {
      NAME: "CWP2#OFF_SP",
    },
    "CWP2#ON": {
      NAME: "CWP2#ON",
    },
    "CWP2#ONOFF": {
      NAME: "CWP2#ONOFF",
    },
    "CWP2#ONOFF_SP": {
      NAME: "CWP2#ONOFF_SP",
    },
    "CWP2#ONOFF_VFD": {
      NAME: "CWP2#ONOFF_VFD",
    },
    "CWP2#ONOFF_VFD_SP": {
      NAME: "CWP2#ONOFF_VFD_SP",
    },
    "CWP2#ON_SP": {
      NAME: "CWP2#ON_SP",
    },
    "CWP2#P": {
      NAME: "CWP2#P",
    },
    "CWP2#P_RATED": {
      NAME: "CWP2#P_RATED",
    },
    "CWP2#PR_INLET": {
      NAME: "CWP2#PR_INLET",
    },
    "CWP2#PR_OUTLET": {
      NAME: "CWP2#PR_OUTLET",
    },
    "CWP2#P_VFD": {
      NAME: "CWP2#P_VFD",
    },
    "CWP2#RANK": {
      NAME: "CWP2#RANK",
    },
    "CWP2#W": {
      NAME: "CWP2#W",
    },
    "CWP3#AM": {
      NAME: "CWP3#AM",
    },
    "CWP3#COP": {
      NAME: "CWP3#COP",
    },
    "CWP3#COP_RATED": {
      NAME: "CWP3#COP_RATED",
    },
    "CWP3#EB": {
      NAME: "CWP3#EB",
    },
    "CWP3#ELEC": {
      NAME: "CWP3#ELEC",
    },
    "CWP3#FAULT": {
      NAME: "CWP3#FAULT",
    },
    "CWP3#FAULT_CODE": {
      NAME: "CWP3#FAULT_CODE",
    },
    "CWP3#FAULT_RESET": {
      NAME: "CWP3#FAULT_RESET",
    },
    "CWP3#FAULT_VFD": {
      NAME: "CWP3#FAULT_VFD",
    },
    "CWP3#FLOW_RATED": {
      NAME: "CWP3#FLOW_RATED",
    },
    "CWP3#FREQ": {
      NAME: "CWP3#FREQ",
    },
    "CWP3#FREQ_SP": {
      NAME: "CWP3#FREQ_SP",
    },
    "CWP3#HRS": {
      NAME: "CWP3#HRS",
    },
    "CWP3#HRS_TOTAL": {
      NAME: "CWP3#HRS_TOTAL",
    },
    "CWP3#OFF": {
      NAME: "CWP3#OFF",
    },
    "CWP3#OFF_SP": {
      NAME: "CWP3#OFF_SP",
    },
    "CWP3#ON": {
      NAME: "CWP3#ON",
    },
    "CWP3#ONOFF": {
      NAME: "CWP3#ONOFF",
    },
    "CWP3#ONOFF_SP": {
      NAME: "CWP3#ONOFF_SP",
    },
    "CWP3#ONOFF_VFD": {
      NAME: "CWP3#ONOFF_VFD",
    },
    "CWP3#ONOFF_VFD_SP": {
      NAME: "CWP3#ONOFF_VFD_SP",
    },
    "CWP3#ON_SP": {
      NAME: "CWP3#ON_SP",
    },
    "CWP3#P": {
      NAME: "CWP3#P",
    },
    "CWP3#P_RATED": {
      NAME: "CWP3#P_RATED",
    },
    "CWP3#PR_INLET": {
      NAME: "CWP3#PR_INLET",
    },
    "CWP3#PR_OUTLET": {
      NAME: "CWP3#PR_OUTLET",
    },
    "CWP3#P_VFD": {
      NAME: "CWP3#P_VFD",
    },
    "CWP3#RANK": {
      NAME: "CWP3#RANK",
    },
    "CWP3#W": {
      NAME: "CWP3#W",
    },
    "CWP4#AM": {
      NAME: "CWP4#AM",
    },
    "CWP4#COP": {
      NAME: "CWP4#COP",
    },
    "CWP4#COP_RATED": {
      NAME: "CWP4#COP_RATED",
    },
    "CWP4#EB": {
      NAME: "CWP4#EB",
    },
    "CWP4#ELEC": {
      NAME: "CWP4#ELEC",
    },
    "CWP4#FAULT": {
      NAME: "CWP4#FAULT",
    },
    "CWP4#FAULT_CODE": {
      NAME: "CWP4#FAULT_CODE",
    },
    "CWP4#FAULT_RESET": {
      NAME: "CWP4#FAULT_RESET",
    },
    "CWP4#FAULT_VFD": {
      NAME: "CWP4#FAULT_VFD",
    },
    "CWP4#FLOW_RATED": {
      NAME: "CWP4#FLOW_RATED",
    },
    "CWP4#FREQ": {
      NAME: "CWP4#FREQ",
    },
    "CWP4#FREQ_SP": {
      NAME: "CWP4#FREQ_SP",
    },
    "CWP4#HRS": {
      NAME: "CWP4#HRS",
    },
    "CWP4#HRS_TOTAL": {
      NAME: "CWP4#HRS_TOTAL",
    },
    "CWP4#OFF": {
      NAME: "CWP4#OFF",
    },
    "CWP4#OFF_SP": {
      NAME: "CWP4#OFF_SP",
    },
    "CWP4#ON": {
      NAME: "CWP4#ON",
    },
    "CWP4#ONOFF": {
      NAME: "CWP4#ONOFF",
    },
    "CWP4#ONOFF_SP": {
      NAME: "CWP4#ONOFF_SP",
    },
    "CWP4#ONOFF_VFD": {
      NAME: "CWP4#ONOFF_VFD",
    },
    "CWP4#ONOFF_VFD_SP": {
      NAME: "CWP4#ONOFF_VFD_SP",
    },
    "CWP4#ON_SP": {
      NAME: "CWP4#ON_SP",
    },
    "CWP4#P": {
      NAME: "CWP4#P",
    },
    "CWP4#P_RATED": {
      NAME: "CWP4#P_RATED",
    },
    "CWP4#PR_INLET": {
      NAME: "CWP4#PR_INLET",
    },
    "CWP4#PR_OUTLET": {
      NAME: "CWP4#PR_OUTLET",
    },
    "CWP4#P_VFD": {
      NAME: "CWP4#P_VFD",
    },
    "CWP4#RANK": {
      NAME: "CWP4#RANK",
    },
    "CWP4#W": {
      NAME: "CWP4#W",
    },
    "CT1#AM": {
      NAME: "CT1#AM",
    },
    "CT1#COP": {
      NAME: "CT1#COP",
    },
    "CT1#COP_RATED": {
      NAME: "CT1#COP_RATED",
    },
    "CT1#EB": {
      NAME: "CT1#EB",
    },
    "CT1#ELEC": {
      NAME: "CT1#ELEC",
    },
    "CT1#FAULT": {
      NAME: "CT1#FAULT",
    },
    "CT1#FAULT_CODE": {
      NAME: "CT1#FAULT_CODE",
    },
    "CT1#FAULT_RESET": {
      NAME: "CT1#FAULT_RESET",
    },
    "CT1#FAULT_VFD": {
      NAME: "CT1#FAULT_VFD",
    },
    "CT1#FLOW_RATED": {
      NAME: "CT1#FLOW_RATED",
    },
    "CT1#FREQ": {
      NAME: "CT1#FREQ",
    },
    "CT1#FREQ_SP": {
      NAME: "CT1#FREQ_SP",
    },
    "CT1#HRS": {
      NAME: "CT1#HRS",
    },
    "CT1#HRS_TOTAL": {
      NAME: "CT1#HRS_TOTAL",
    },
    "CT1#OFF": {
      NAME: "CT1#OFF",
    },
    "CT1#OFF_SP": {
      NAME: "CT1#OFF_SP",
    },
    "CT1#ON": {
      NAME: "CT1#ON",
    },
    "CT1#ONOFF": {
      NAME: "CT1#ONOFF",
    },
    "CT1#ONOFF_SP": {
      NAME: "CT1#ONOFF_SP",
    },
    "CT1#ONOFF_VFD": {
      NAME: "CT1#ONOFF_VFD",
    },
    "CT1#ONOFF_VFD_SP": {
      NAME: "CT1#ONOFF_VFD_SP",
    },
    "CT1#ON_SP": {
      NAME: "CT1#ON_SP",
    },
    "CT1#P": {
      NAME: "CT1#P",
    },
    "CT1#P_RATED": {
      NAME: "CT1#P_RATED",
    },
    "CT1#P_VFD": {
      NAME: "CT1#P_VFD",
    },
    "CT1#RANK": {
      NAME: "CT1#RANK",
    },
    "CT1#W": {
      NAME: "CT1#W",
    },
    "CT2#AM": {
      NAME: "CT2#AM",
    },
    "CT2#COP": {
      NAME: "CT2#COP",
    },
    "CT2#COP_RATED": {
      NAME: "CT2#COP_RATED",
    },
    "CT2#EB": {
      NAME: "CT2#EB",
    },
    "CT2#ELEC": {
      NAME: "CT2#ELEC",
    },
    "CT2#FAULT": {
      NAME: "CT2#FAULT",
    },
    "CT2#FAULT_CODE": {
      NAME: "CT2#FAULT_CODE",
    },
    "CT2#FAULT_RESET": {
      NAME: "CT2#FAULT_RESET",
    },
    "CT2#FAULT_VFD": {
      NAME: "CT2#FAULT_VFD",
    },
    "CT2#FLOW_RATED": {
      NAME: "CT2#FLOW_RATED",
    },
    "CT2#FREQ": {
      NAME: "CT2#FREQ",
    },
    "CT2#FREQ_SP": {
      NAME: "CT2#FREQ_SP",
    },
    "CT2#HRS": {
      NAME: "CT2#HRS",
    },
    "CT2#HRS_TOTAL": {
      NAME: "CT2#HRS_TOTAL",
    },
    "CT2#OFF": {
      NAME: "CT2#OFF",
    },
    "CT2#OFF_SP": {
      NAME: "CT2#OFF_SP",
    },
    "CT2#ON": {
      NAME: "CT2#ON",
    },
    "CT2#ONOFF": {
      NAME: "CT2#ONOFF",
    },
    "CT2#ONOFF_SP": {
      NAME: "CT2#ONOFF_SP",
    },
    "CT2#ONOFF_VFD": {
      NAME: "CT2#ONOFF_VFD",
    },
    "CT2#ONOFF_VFD_SP": {
      NAME: "CT2#ONOFF_VFD_SP",
    },
    "CT2#ON_SP": {
      NAME: "CT2#ON_SP",
    },
    "CT2#P": {
      NAME: "CT2#P",
    },
    "CT2#P_RATED": {
      NAME: "CT2#P_RATED",
    },
    "CT2#P_VFD": {
      NAME: "CT2#P_VFD",
    },
    "CT2#RANK": {
      NAME: "CT2#RANK",
    },
    "CT2#W": {
      NAME: "CT2#W",
    },
    "CT3#AM": {
      NAME: "CT3#AM",
    },
    "CT3#COP": {
      NAME: "CT3#COP",
    },
    "CT3#COP_RATED": {
      NAME: "CT3#COP_RATED",
    },
    "CT3#EB": {
      NAME: "CT3#EB",
    },
    "CT3#ELEC": {
      NAME: "CT3#ELEC",
    },
    "CT3#FAULT": {
      NAME: "CT3#FAULT",
    },
    "CT3#FAULT_CODE": {
      NAME: "CT3#FAULT_CODE",
    },
    "CT3#FAULT_RESET": {
      NAME: "CT3#FAULT_RESET",
    },
    "CT3#FAULT_VFD": {
      NAME: "CT3#FAULT_VFD",
    },
    "CT3#FLOW_RATED": {
      NAME: "CT3#FLOW_RATED",
    },
    "CT3#FREQ": {
      NAME: "CT3#FREQ",
    },
    "CT3#FREQ_SP": {
      NAME: "CT3#FREQ_SP",
    },
    "CT3#HRS": {
      NAME: "CT3#HRS",
    },
    "CT3#HRS_TOTAL": {
      NAME: "CT3#HRS_TOTAL",
    },
    "CT3#OFF": {
      NAME: "CT3#OFF",
    },
    "CT3#OFF_SP": {
      NAME: "CT3#OFF_SP",
    },
    "CT3#ON": {
      NAME: "CT3#ON",
    },
    "CT3#ONOFF": {
      NAME: "CT3#ONOFF",
    },
    "CT3#ONOFF_SP": {
      NAME: "CT3#ONOFF_SP",
    },
    "CT3#ONOFF_VFD": {
      NAME: "CT3#ONOFF_VFD",
    },
    "CT3#ONOFF_VFD_SP": {
      NAME: "CT3#ONOFF_VFD_SP",
    },
    "CT3#ON_SP": {
      NAME: "CT3#ON_SP",
    },
    "CT3#P": {
      NAME: "CT3#P",
    },
    "CT3#P_RATED": {
      NAME: "CT3#P_RATED",
    },
    "CT3#P_VFD": {
      NAME: "CT3#P_VFD",
    },
    "CT3#RANK": {
      NAME: "CT3#RANK",
    },
    "CT3#W": {
      NAME: "CT3#W",
    },
    "CT4#AM": {
      NAME: "CT4#AM",
    },
    "CT4#COP": {
      NAME: "CT4#COP",
    },
    "CT4#COP_RATED": {
      NAME: "CT4#COP_RATED",
    },
    "CT4#EB": {
      NAME: "CT4#EB",
    },
    "CT4#ELEC": {
      NAME: "CT4#ELEC",
    },
    "CT4#FAULT": {
      NAME: "CT4#FAULT",
    },
    "CT4#FAULT_CODE": {
      NAME: "CT4#FAULT_CODE",
    },
    "CT4#FAULT_RESET": {
      NAME: "CT4#FAULT_RESET",
    },
    "CT4#FAULT_VFD": {
      NAME: "CT4#FAULT_VFD",
    },
    "CT4#FLOW_RATED": {
      NAME: "CT4#FLOW_RATED",
    },
    "CT4#FREQ": {
      NAME: "CT4#FREQ",
    },
    "CT4#FREQ_SP": {
      NAME: "CT4#FREQ_SP",
    },
    "CT4#HRS": {
      NAME: "CT4#HRS",
    },
    "CT4#HRS_TOTAL": {
      NAME: "CT4#HRS_TOTAL",
    },
    "CT4#OFF": {
      NAME: "CT4#OFF",
    },
    "CT4#OFF_SP": {
      NAME: "CT4#OFF_SP",
    },
    "CT4#ON": {
      NAME: "CT4#ON",
    },
    "CT4#ONOFF": {
      NAME: "CT4#ONOFF",
    },
    "CT4#ONOFF_SP": {
      NAME: "CT4#ONOFF_SP",
    },
    "CT4#ONOFF_VFD": {
      NAME: "CT4#ONOFF_VFD",
    },
    "CT4#ONOFF_VFD_SP": {
      NAME: "CT4#ONOFF_VFD_SP",
    },
    "CT4#ON_SP": {
      NAME: "CT4#ON_SP",
    },
    "CT4#P": {
      NAME: "CT4#P",
    },
    "CT4#P_RATED": {
      NAME: "CT4#P_RATED",
    },
    "CT4#P_VFD": {
      NAME: "CT4#P_VFD",
    },
    "CT4#RANK": {
      NAME: "CT4#RANK",
    },
    "CT4#W": {
      NAME: "CT4#W",
    },
    "V1#AM": {
      NAME: "V1#AM",
    },
    "V1#EB": {
      NAME: "V1#EB",
    },
    "V1#FAULT": {
      NAME: "V1#FAULT",
    },
    "V1#OFF": {
      NAME: "V1#OFF",
    },
    "V1#OFF_SP": {
      NAME: "V1#OFF_SP",
    },
    "V1#ON": {
      NAME: "V1#ON",
    },
    "V1#ONOFF": {
      NAME: "V1#ONOFF",
    },
    "V1#ONOFF_SP": {
      NAME: "V1#ONOFF_SP",
    },
    "V1#ON_SP": {
      NAME: "V1#ON_SP",
    },
    "V1#POS": {
      NAME: "V1#POS",
    },
    "V1#POS_SP": {
      NAME: "V1#POS_SP",
    },
    "V1#RANK": {
      NAME: "V1#RANK",
    },
    "V2#AM": {
      NAME: "V2#AM",
    },
    "V2#EB": {
      NAME: "V2#EB",
    },
    "V2#FAULT": {
      NAME: "V2#FAULT",
    },
    "V2#OFF": {
      NAME: "V2#OFF",
    },
    "V2#OFF_SP": {
      NAME: "V2#OFF_SP",
    },
    "V2#ON": {
      NAME: "V2#ON",
    },
    "V2#ONOFF": {
      NAME: "V2#ONOFF",
    },
    "V2#ONOFF_SP": {
      NAME: "V2#ONOFF_SP",
    },
    "V2#ON_SP": {
      NAME: "V2#ON_SP",
    },
    "V2#POS": {
      NAME: "V2#POS",
    },
    "V2#POS_SP": {
      NAME: "V2#POS_SP",
    },
    "V2#RANK": {
      NAME: "V2#RANK",
    },
    "V3#AM": {
      NAME: "V3#AM",
    },
    "V3#EB": {
      NAME: "V3#EB",
    },
    "V3#FAULT": {
      NAME: "V3#FAULT",
    },
    "V3#OFF": {
      NAME: "V3#OFF",
    },
    "V3#OFF_SP": {
      NAME: "V3#OFF_SP",
    },
    "V3#ON": {
      NAME: "V3#ON",
    },
    "V3#ONOFF": {
      NAME: "V3#ONOFF",
    },
    "V3#ONOFF_SP": {
      NAME: "V3#ONOFF_SP",
    },
    "V3#ON_SP": {
      NAME: "V3#ON_SP",
    },
    "V3#POS": {
      NAME: "V3#POS",
    },
    "V3#POS_SP": {
      NAME: "V3#POS_SP",
    },
    "V3#RANK": {
      NAME: "V3#RANK",
    },
    "V4#AM": {
      NAME: "V4#AM",
    },
    "V4#EB": {
      NAME: "V4#EB",
    },
    "V4#FAULT": {
      NAME: "V4#FAULT",
    },
    "V4#OFF": {
      NAME: "V4#OFF",
    },
    "V4#OFF_SP": {
      NAME: "V4#OFF_SP",
    },
    "V4#ON": {
      NAME: "V4#ON",
    },
    "V4#ONOFF": {
      NAME: "V4#ONOFF",
    },
    "V4#ONOFF_SP": {
      NAME: "V4#ONOFF_SP",
    },
    "V4#ON_SP": {
      NAME: "V4#ON_SP",
    },
    "V4#POS": {
      NAME: "V4#POS",
    },
    "V4#POS_SP": {
      NAME: "V4#POS_SP",
    },
    "V4#RANK": {
      NAME: "V4#RANK",
    },
    "V5#AM": {
      NAME: "V5#AM",
    },
    "V5#EB": {
      NAME: "V5#EB",
    },
    "V5#FAULT": {
      NAME: "V5#FAULT",
    },
    "V5#OFF": {
      NAME: "V5#OFF",
    },
    "V5#OFF_SP": {
      NAME: "V5#OFF_SP",
    },
    "V5#ON": {
      NAME: "V5#ON",
    },
    "V5#ONOFF": {
      NAME: "V5#ONOFF",
    },
    "V5#ONOFF_SP": {
      NAME: "V5#ONOFF_SP",
    },
    "V5#ON_SP": {
      NAME: "V5#ON_SP",
    },
    "V5#POS": {
      NAME: "V5#POS",
    },
    "V5#POS_SP": {
      NAME: "V5#POS_SP",
    },
    "V5#RANK": {
      NAME: "V5#RANK",
    },
    "V6#AM": {
      NAME: "V6#AM",
    },
    "V6#EB": {
      NAME: "V6#EB",
    },
    "V6#FAULT": {
      NAME: "V6#FAULT",
    },
    "V6#OFF": {
      NAME: "V6#OFF",
    },
    "V6#OFF_SP": {
      NAME: "V6#OFF_SP",
    },
    "V6#ON": {
      NAME: "V6#ON",
    },
    "V6#ONOFF": {
      NAME: "V6#ONOFF",
    },
    "V6#ONOFF_SP": {
      NAME: "V6#ONOFF_SP",
    },
    "V6#ON_SP": {
      NAME: "V6#ON_SP",
    },
    "V6#POS": {
      NAME: "V6#POS",
    },
    "V6#POS_SP": {
      NAME: "V6#POS_SP",
    },
    "V6#RANK": {
      NAME: "V6#RANK",
    },
    "V7#AM": {
      NAME: "V7#AM",
    },
    "V7#EB": {
      NAME: "V7#EB",
    },
    "V7#FAULT": {
      NAME: "V7#FAULT",
    },
    "V7#OFF": {
      NAME: "V7#OFF",
    },
    "V7#OFF_SP": {
      NAME: "V7#OFF_SP",
    },
    "V7#ON": {
      NAME: "V7#ON",
    },
    "V7#ONOFF": {
      NAME: "V7#ONOFF",
    },
    "V7#ONOFF_SP": {
      NAME: "V7#ONOFF_SP",
    },
    "V7#ON_SP": {
      NAME: "V7#ON_SP",
    },
    "V7#POS": {
      NAME: "V7#POS",
    },
    "V7#POS_SP": {
      NAME: "V7#POS_SP",
    },
    "V7#RANK": {
      NAME: "V7#RANK",
    },
    "V8#AM": {
      NAME: "V8#AM",
    },
    "V8#EB": {
      NAME: "V8#EB",
    },
    "V8#FAULT": {
      NAME: "V8#FAULT",
    },
    "V8#OFF": {
      NAME: "V8#OFF",
    },
    "V8#OFF_SP": {
      NAME: "V8#OFF_SP",
    },
    "V8#ON": {
      NAME: "V8#ON",
    },
    "V8#ONOFF": {
      NAME: "V8#ONOFF",
    },
    "V8#ONOFF_SP": {
      NAME: "V8#ONOFF_SP",
    },
    "V8#ON_SP": {
      NAME: "V8#ON_SP",
    },
    "V8#POS": {
      NAME: "V8#POS",
    },
    "V8#POS_SP": {
      NAME: "V8#POS_SP",
    },
    "V8#RANK": {
      NAME: "V8#RANK",
    },
    "V9#AM": {
      NAME: "V9#AM",
    },
    "V9#EB": {
      NAME: "V9#EB",
    },
    "V9#FAULT": {
      NAME: "V9#FAULT",
    },
    "V9#OFF": {
      NAME: "V9#OFF",
    },
    "V9#OFF_SP": {
      NAME: "V9#OFF_SP",
    },
    "V9#ON": {
      NAME: "V9#ON",
    },
    "V9#ONOFF": {
      NAME: "V9#ONOFF",
    },
    "V9#ONOFF_SP": {
      NAME: "V9#ONOFF_SP",
    },
    "V9#ON_SP": {
      NAME: "V9#ON_SP",
    },
    "V9#POS": {
      NAME: "V9#POS",
    },
    "V9#POS_SP": {
      NAME: "V9#POS_SP",
    },
    "V9#RANK": {
      NAME: "V9#RANK",
    },
    "V10#AM": {
      NAME: "V10#AM",
    },
    "V10#EB": {
      NAME: "V10#EB",
    },
    "V10#FAULT": {
      NAME: "V10#FAULT",
    },
    "V10#OFF": {
      NAME: "V10#OFF",
    },
    "V10#OFF_SP": {
      NAME: "V10#OFF_SP",
    },
    "V10#ON": {
      NAME: "V10#ON",
    },
    "V10#ONOFF": {
      NAME: "V10#ONOFF",
    },
    "V10#ONOFF_SP": {
      NAME: "V10#ONOFF_SP",
    },
    "V10#ON_SP": {
      NAME: "V10#ON_SP",
    },
    "V10#POS": {
      NAME: "V10#POS",
    },
    "V10#POS_SP": {
      NAME: "V10#POS_SP",
    },
    "V10#RANK": {
      NAME: "V10#RANK",
    },
    "V11#AM": {
      NAME: "V11#AM",
    },
    "V11#EB": {
      NAME: "V11#EB",
    },
    "V11#FAULT": {
      NAME: "V11#FAULT",
    },
    "V11#OFF": {
      NAME: "V11#OFF",
    },
    "V11#OFF_SP": {
      NAME: "V11#OFF_SP",
    },
    "V11#ON": {
      NAME: "V11#ON",
    },
    "V11#ONOFF": {
      NAME: "V11#ONOFF",
    },
    "V11#ONOFF_SP": {
      NAME: "V11#ONOFF_SP",
    },
    "V11#ON_SP": {
      NAME: "V11#ON_SP",
    },
    "V11#POS": {
      NAME: "V11#POS",
    },
    "V11#POS_SP": {
      NAME: "V11#POS_SP",
    },
    "V11#RANK": {
      NAME: "V11#RANK",
    },
    "V12#AM": {
      NAME: "V12#AM",
    },
    "V12#EB": {
      NAME: "V12#EB",
    },
    "V12#FAULT": {
      NAME: "V12#FAULT",
    },
    "V12#OFF": {
      NAME: "V12#OFF",
    },
    "V12#OFF_SP": {
      NAME: "V12#OFF_SP",
    },
    "V12#ON": {
      NAME: "V12#ON",
    },
    "V12#ONOFF": {
      NAME: "V12#ONOFF",
    },
    "V12#ONOFF_SP": {
      NAME: "V12#ONOFF_SP",
    },
    "V12#ON_SP": {
      NAME: "V12#ON_SP",
    },
    "V12#POS": {
      NAME: "V12#POS",
    },
    "V12#POS_SP": {
      NAME: "V12#POS_SP",
    },
    "V12#RANK": {
      NAME: "V12#RANK",
    },
    "V13#AM": {
      NAME: "V13#AM",
    },
    "V13#EB": {
      NAME: "V13#EB",
    },
    "V13#FAULT": {
      NAME: "V13#FAULT",
    },
    "V13#OFF": {
      NAME: "V13#OFF",
    },
    "V13#OFF_SP": {
      NAME: "V13#OFF_SP",
    },
    "V13#ON": {
      NAME: "V13#ON",
    },
    "V13#ONOFF": {
      NAME: "V13#ONOFF",
    },
    "V13#ONOFF_SP": {
      NAME: "V13#ONOFF_SP",
    },
    "V13#ON_SP": {
      NAME: "V13#ON_SP",
    },
    "V13#POS": {
      NAME: "V13#POS",
    },
    "V13#POS_SP": {
      NAME: "V13#POS_SP",
    },
    "V13#RANK": {
      NAME: "V13#RANK",
    },
    "V14#AM": {
      NAME: "V14#AM",
    },
    "V14#EB": {
      NAME: "V14#EB",
    },
    "V14#FAULT": {
      NAME: "V14#FAULT",
    },
    "V14#OFF": {
      NAME: "V14#OFF",
    },
    "V14#OFF_SP": {
      NAME: "V14#OFF_SP",
    },
    "V14#ON": {
      NAME: "V14#ON",
    },
    "V14#ONOFF": {
      NAME: "V14#ONOFF",
    },
    "V14#ONOFF_SP": {
      NAME: "V14#ONOFF_SP",
    },
    "V14#ON_SP": {
      NAME: "V14#ON_SP",
    },
    "V14#POS": {
      NAME: "V14#POS",
    },
    "V14#POS_SP": {
      NAME: "V14#POS_SP",
    },
    "V14#RANK": {
      NAME: "V14#RANK",
    },
    "V15#AM": {
      NAME: "V15#AM",
    },
    "V15#EB": {
      NAME: "V15#EB",
    },
    "V15#FAULT": {
      NAME: "V15#FAULT",
    },
    "V15#OFF": {
      NAME: "V15#OFF",
    },
    "V15#OFF_SP": {
      NAME: "V15#OFF_SP",
    },
    "V15#ON": {
      NAME: "V15#ON",
    },
    "V15#ONOFF": {
      NAME: "V15#ONOFF",
    },
    "V15#ONOFF_SP": {
      NAME: "V15#ONOFF_SP",
    },
    "V15#ON_SP": {
      NAME: "V15#ON_SP",
    },
    "V15#POS": {
      NAME: "V15#POS",
    },
    "V15#POS_SP": {
      NAME: "V15#POS_SP",
    },
    "V15#RANK": {
      NAME: "V15#RANK",
    },
    "V16#AM": {
      NAME: "V16#AM",
    },
    "V16#EB": {
      NAME: "V16#EB",
    },
    "V16#FAULT": {
      NAME: "V16#FAULT",
    },
    "V16#OFF": {
      NAME: "V16#OFF",
    },
    "V16#OFF_SP": {
      NAME: "V16#OFF_SP",
    },
    "V16#ON": {
      NAME: "V16#ON",
    },
    "V16#ONOFF": {
      NAME: "V16#ONOFF",
    },
    "V16#ONOFF_SP": {
      NAME: "V16#ONOFF_SP",
    },
    "V16#ON_SP": {
      NAME: "V16#ON_SP",
    },
    "V16#POS": {
      NAME: "V16#POS",
    },
    "V16#POS_SP": {
      NAME: "V16#POS_SP",
    },
    "V16#RANK": {
      NAME: "V16#RANK",
    },
  },
  CAP_NUM: 0,
}
// 将上面的列表设备["制冷机", "冷冻泵", "冷却泵", "冷却塔", "阀门"] 映射到 nanoid(22)
let deviceModelMap = {
  CHLS: {
    oM6qEMxe50PY3Jv1JGxGVi: "mORAu1041u_Y9pGp_HQXau",
    jXGJPr5bbu8Pm1azp1qVLz: "5hKl3U6PAwNQ6fzor5GGTQ",
    "3T4PM4a_xeb9HSfb6CA2vP": "DMgGznbhtykFZ4qkQ87l8H",
    yxOjIyO9w9FfhRDEZmKWZC: "59q9gHCv8UgNmWXJo6984J",
  },
  CHWPS: {
    SUbrIvPCme75m1DiOk5Qkm: "crJ6Jib-_8N8L_xdjsOgLs",
    KJ7AxiKb6OCoOTfqVWkE12: "SWnAbrp-yTyU50f6Nnqz0a",
    "3JNiytZOf9Yvj9cFu76TrD": "jMCZeIxwEiNwXzyvgDVbdc",
    OuSSIIufxo_z3LBn4vucpo: "2UNGKLbpUk6DBbI_TziCoz",
  },
  CWPS: {
    iluAkpqnSdWRIN2YShuMOG: "ToSOxTzxYviGHUXz830LAX",
    odiOJxe6bSWpNTswmoRilj: "4Ks-m5yv6Tn2DBfHAO9_iF",
    MHzDc8b58PDR6Cfqar9hr2: "S03cnDIanGKQT-de4AYUcj",
    FFA5D3hZrwi9XXCRG0VP4J: "dAqk-y4fccED-RLJmsCCZ8",
  },
  CTS: {
    ye5MqHy0TbtrtErh0XmZCn: "ZZf9DJnNAovlPx7YL_AdfV",
    qfwQBrtCEQjwZREDhh8ovp: "OzyDqNGBgonIeVjfzh_fmE",
    z9kNrWKwhokZokO49Joila: "945SbjyO4KJXZaOna4u50l",
    fKkvAEuijqotichFttlIKF: "JscHkLw0_WOzMqWPGLpdGU",
  },
  DVS: {},
  VALVES: {
    "8HzAnyOaoKKlVfgBK60j8x": "VYtLyUeFXH9CCjW0fZfKna",
    vagdLWwY59_vOksKgsos34: "pJUIBPxrdtem8EN5jJkr42",
    ZBzUT4_IjkewlhCq7yhz5h: "ORbJ94y3wVLPoUW3jojQCt",
    jX0yZxlK3supakYcAAlPYS: "IT89u1nBrKRS5FEbZYajO-",
    "6LeVs0tVP9MJJS_R2cAcyB": "F8FZ_E3GE-nYcfKj_Ut-Ri",
    DmNdg3yWNH7EoaHtgdCjY6: "itlp1K6VVuq0MqPsSuo2YI",
    udzjui5InXHvRPB2z4pSMn: "ZhnIBLHWI_9Ksay9ye7pYt",
    OZYcnMrfHWNevKrbab7iQk: "ly8WnI18JoJ9R7acZSS6zQ",
    iQ9nVLl2uBpstp2iKCzqI3: "kqk_X3AD6U9Uk2a0fSEVeJ",
    iUppCA_gPRCe2Lka2gUt8m: "pbbZCI-X8rwrJo1CQHFx2g",
    jvibORBfgRlq_5PkBOTiIr: "D_fQFB9hlZ5y1kH7rAZJrm",
    Euiwh8PYCXq_7ozW8gXO2t: "TJ2jzi57ywfbToGLhrOJlM",
    e9_W9b6otoLOnFZrFJXLRi: "PASYAdU-kF70BMMSgtD9H4",
    "0hULtajjeOLqMtTyQWPxWA": "t6hNFaPDnNdL8wSiuA-jHf",
    eoRbD025SCKNBCvpFs1btn: "hfUoEQYAcjHZspDobygExv",
    wggnS6uBEo1qHuOEoT0atb: "7M-dGGvEhQ-zfDetc3hWSX",
  },
}
//  随机22位nanoid 生成id
let links = [
  "Npr_twnsODaOEUswCPRpaX",
  "_79HCRtbqTZH9S0vF-nWGV",
  "QTEI84byfceDBH8OwpD1F4",
  "XWuMDSxXfu4gSCIYIpwEKQ",
  "2iQPdu52Wp8UEtX59SMUgg",
]
let global = {
  ProjectId: "yP7ThKRfRtzFRU9Xcj7bgx",
  ProjectName: "宁德项目4个冷机",
  ProjectImage: null,
  BuildingArea: 23333,
  DeviceNum: 32,
  TagNum: 906,
  LogicNum: 18,
  AlarmIndexNum: 44,
  AlarmNum: 0,
  Temp: "24",
  Hum: "89",
  Weather: "阴",
  Wind: "东风 3",
}

// console.log(
//   "source==>",
//   source,
//   " deviceModelMap==>",
//   deviceModelMap,
//   "links===>",
//   links,
//   "global===>",
//   global,
// )

let result = {
  ROOT: root,
  [parentbox]: pageDefault(parentbox, boxid, headid, footid),
  ...headDefault(headid, parentbox, source, null, footid),
  ...pageLayout(parentbox, source),
  [boxid]: box,
  ...footDefault(footid, parentbox, source),
}

  const CHLS = Object.values(source.CHLS)
  // const CHWPS = Object.values(source.CHWPS)
  // const CWPS = Object.values(source.CWPS)
  // const CTS = Object.values(source.CTS)
  // const DVS = Object.values(source.DVS)

  const pointsObject = { ...rootPointMap(source), ...drawpointmap(), MODE_SYS: 0, HINT: '' }; // 点表映射

  // 将chls下的CHWPS里面的SUITE_IDS属性放入到connectCHWMap中 键值对 {CHLS.ID: [...CHWPS.SUITE_IDS]}
  // {oM6qEMxe50PY3Jv1JGxGVi: ['oM6qEMxe50PY3Jv1JGxGVi', 'jXGJPr5bbu8Pm1azp1qVLz', '3T4PM4a_xeb9HSfb6CA2vP', 'yxOjIyO9w9FfhRDEZmKWZC']}
  const connectCHWMap = {}
  const connectCWMap = {}
  const chlsArr = []

  console.log("chls",CHLS)

  CHLS.forEach((item, index) => {
    const { ID, CHWPS, CWPS, VALVES } = item
    CHWPS.forEach((t) => {
      const ids = t.SUITE_IDS.find((t1) => connectCHWMap[t1]?.length > 1)
      console.log("ids====>", ids, ID)
      if (ids) {
        connectCHWMap[ids] = Array.from(
          new Set([...connectCHWMap[ids], ...t.SUITE_IDS]),
        )
      } else {
        connectCHWMap[ID] = Array.from(
          new Set([...(connectCHWMap[ID] || []), ...t.SUITE_IDS]),
        )
      }
    })

    console.log("connectCHWMap===>", connectCHWMap)
    CWPS.forEach((t) => {
      const ids = t.SUITE_IDS.find((t1) => connectCWMap[t1]?.length > 1)
      if (ids) {
        connectCWMap[ids] = Array.from(
          new Set([...connectCWMap[ids], ...t.SUITE_IDS]),
        )
      } else {
        connectCWMap[ID] = Array.from(
          new Set([...(connectCWMap[ID] || []), ...t.SUITE_IDS]),
        )
      }
    })

    //  处理 阀门映射  // 阀门id: nanoid(25)  and  // chls(冷机)的id :  chls(冷机)的 valves
    valuesMapsHandle(ID, VALVES, deviceModelMap?.VALVES)

    // 冷机的json
    const resultMap = device(
      "Chiller",
      item,
      pointsObject,
      deviceModelMap?.CHLS?.[item.ID],
    )
    deviceMapIdsTool(item.ID, resultMap.id, item)
    resultMap.props.style = {
      ...styleMap["CHLS"],
      ...deviceTranform(index, "CHLS", 0),
    }
    result[resultMap.id] = resultMap
    pointsObject[item.P.NAME] = 0
    pointsObject[item.I_PCT.NAME] = 0
    chlsArr.push(resultMap)
    generateText(result, resultMap, null, item.P, "kW", null, -30)
    generateText(result, resultMap, "right", item.I_PCT, null, true)
  })
  CHLS.forEach((item, index) => {
    /**chl -out */
    chl_Out(
      result,
      index,
      index == chlsArr.length - 1,
      chlsArr[index]?.props.style,
      item,
      CHLS,
    )
  })

console.log("pointsObject======>", pointsObject, "CHLS====>", CHLS, source)
