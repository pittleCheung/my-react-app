import { colnoflex, contentpaddingstyle, contentstyle, statsuMap } from '../pageNodeDefault';
export default (source) => {
  return {
    ROOT: {
      type: {
        resolvedName: 'Page'
      },
      isCanvas: true,
      props: {
        title: '页面标题',
        theme: {
          algorithm: 'darkAlgorithm',
          token: {
            colorPrimary: '#1677ff'
          }
        },
        style: {
          position: 'relative',
          width: 828,
          height: 441,
          widthType: 'fixed',
          heightType: 'fixed',
          fontFamily: 'PingFang SC',
          fontSize: 14,
          fontWeight: 400,
          lineHeight: 1.5,
          textAlign: 'left',
          spacing: 0,
          paddingSide: 'side',
          padding: 18,
          marginSide: 'all',
          margin: 0,
          background: null,
          borderRadius: 0,
          backgroundList: [],
          widthUnit: 'px',
          heightUnit: 'px',
          display: 'grid',
          flexDirection: 'column',
          rowGap: 0,
          columnGap: 0,
          paddingTop: 18,
          paddingRight: 18,
          paddingLeft: 7,
          paddingBottom: 18,
          minHeight: '100%'
        },
        events: {
          onLoad: null
        },
        projId: '1I7XFiscDakwzvXr3VMJpK',
        points: {
          [source.P.NAME]: 0,
          [source.COP.NAME]: 0,
          [source.ONOFF.NAME]: 0,
          [source.FAULT.NAME]: 0,
          [source.AM.NAME]: 0,
          [source.FREQ.NAME]: 0,
          [source.EB.NAME]: 0,
          [source.ONOFF_SP.NAME]: 0,
          [source.FREQ_SP.NAME]: 0
        }
      },
      displayName: 'Page',
      custom: {},
      hidden: false,
      nodes: ['xxYw5l8gMx'],
      linkedNodes: {}
    },
    xxYw5l8gMx: {
      type: {
        resolvedName: 'Container'
      },
      isCanvas: true,
      props: {
        style: {
          ...contentstyle,
          height: 'auto',
          heightType: 'fit-content'
        },
        displayName: 'Container'
      },
      displayName: 'Container',
      custom: {},
      parent: 'ROOT',
      hidden: false,
      nodes: ['QLxSLykaOd', 'ZbXgZol9I0'],
      linkedNodes: {}
    },
    QLxSLykaOd: {
      type: {
        resolvedName: 'Col'
      },
      isCanvas: true,
      props: {
        type: 'span',
        span: 24,
        flex: '',
        style: {
          ...colnoflex,
          display: 'flex',
          flexDirection: 'row',
          columnGap: 6,
          height: 'auto',
          heightType: 'fit-content',
          paddingSide: 'side',
          paddingTop: 8,
          paddingRight: 8,
          paddingLeft: 0,
          paddingBottom: 8
        },
        displayName: 'Col'
      },
      displayName: 'Col',
      custom: {},
      parent: 'xxYw5l8gMx',
      hidden: false,
      nodes: ['DIfICqxGer', 'ELeyFREOys', 'UVbncEeGb_', 'Cpwe48U7q1'],
      linkedNodes: {}
    },
    ZbXgZol9I0: {
      type: {
        resolvedName: 'Col'
      },
      isCanvas: true,
      props: {
        type: 'span',
        span: 24,
        flex: '',
        style: {
          ...contentstyle,
          display: 'flex',
          flexDirection: 'row',
          paddingSide: 'side',
          padding: 8,
          columnGap: 6,
          paddingTop: 0,
          paddingRight: 3,
          paddingLeft: 0,
          paddingBottom: 8
        },
        displayName: 'Col'
      },
      displayName: 'Col',
      custom: {},
      parent: 'xxYw5l8gMx',
      hidden: false,
      nodes: ['sIQ95iOFyi', 'hSvKRbLFqf', 'FKA4e5oRfK'],
      linkedNodes: {}
    },
    DIfICqxGer: {
      type: {
        resolvedName: 'Col'
      },
      isCanvas: true,
      props: {
        type: 'span',
        span: 6,
        flex: '',
        style: {
          ...contentpaddingstyle,
          background: 'linear-gradient(rgba(44, 46, 70, 1), rgba(44, 46, 70, 1))',
          backgroundList: [
            {
              id: 'LtgS2rTj_L',
              type: 'color',
              key: 'LtgS2rTj_L',
              value: 'rgba(44, 46, 70, 1)',
              disabled: false
            }
          ],
          display: 'grid',
          flexDirection: 'column',
          padding: 14,
          rowGap: 10,
          columnGap: 0,
          key: 'centerCenter',
          justifyContent: 'center',
          alignItems: 'center'
        },
        displayName: 'Col'
      },
      displayName: 'Col',
      custom: {},
      parent: 'QLxSLykaOd',
      hidden: false,
      nodes: ['CXO98ty0IH', 'qR5quNTUUj'],
      linkedNodes: {}
    },
    Cpwe48U7q1: {
      type: {
        resolvedName: 'Col'
      },
      isCanvas: true,
      props: {
        type: 'span',
        span: 6,
        flex: '',
        style: {
          ...contentpaddingstyle,
          lineHeight: 1.5,
          textAlign: 'left',
          spacing: 0,
          paddingSide: 'all',
          padding: 14,
          marginSide: 'all',
          margin: 0,
          background: 'linear-gradient(rgba(44, 46, 70, 1), rgba(44, 46, 70, 1))',
          backgroundList: [
            {
              id: 'Zdk_plPUWW',
              type: 'color',
              key: 'Zdk_plPUWW',
              value: 'rgba(44, 46, 70, 1)',
              disabled: false
            }
          ],
          display: 'flex',
          flexDirection: 'column',
          key: 'centerCenter',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 14,
          rowGap: 10,
          columnGap: 0
        },
        displayName: 'Col'
      },
      displayName: 'Col',
      custom: {},
      parent: 'QLxSLykaOd',
      hidden: false,
      nodes: ['1THpHAdGEb', 'slkc64jQNb'],
      linkedNodes: {}
    },
    ELeyFREOys: {
      type: {
        resolvedName: 'Col'
      },
      isCanvas: true,
      props: {
        type: 'span',
        span: 6,
        flex: '',
        style: {
          ...contentpaddingstyle,
          background: 'linear-gradient(rgba(44, 46, 70, 1), rgba(44, 46, 70, 1))',
          backgroundList: [
            {
              id: 'E3A-fIO32U',
              type: 'color',
              key: 'E3A-fIO32U',
              value: 'rgba(44, 46, 70, 1)',
              disabled: false
            }
          ],
          display: 'grid',
          flexDirection: 'column',
          padding: 14,
          rowGap: 10,
          columnGap: 0,
          key: 'centerCenter',
          justifyContent: 'center',
          alignItems: 'center'
        },
        displayName: 'Col'
      },
      displayName: 'Col',
      custom: {},
      parent: 'QLxSLykaOd',
      hidden: false,
      nodes: ['qHzJCOyMkB', '-FuylO7csn'],
      linkedNodes: {}
    },
    UVbncEeGb_: {
      type: {
        resolvedName: 'Col'
      },
      isCanvas: true,
      props: {
        type: 'span',
        span: 6,
        flex: '',
        style: {
          ...contentpaddingstyle,
          background: 'linear-gradient(rgba(44, 46, 70, 1), rgba(44, 46, 70, 1))',
          backgroundList: [
            {
              id: 'xywehFofh_',
              type: 'color',
              key: 'xywehFofh_',
              value: 'rgba(44, 46, 70, 1)',
              disabled: false
            }
          ],
          display: 'grid',
          flexDirection: 'column',
          key: 'centerCenter',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 14,
          rowGap: 10,
          columnGap: 0
        },
        displayName: 'Col'
      },
      displayName: 'Col',
      custom: {},
      parent: 'QLxSLykaOd',
      hidden: false,
      nodes: ['4o2bF9todC', 'QgWssij-kL'],
      linkedNodes: {}
    },
    hSvKRbLFqf: {
      type: {
        resolvedName: 'Col'
      },
      isCanvas: true,
      props: {
        type: 'span',
        span: 8,
        flex: '',
        style: {
          ...contentpaddingstyle,
          background: 'linear-gradient(rgba(25, 25, 49, 1), rgba(25, 25, 49, 1))',
          backgroundList: [
            {
              id: 'h8GgRWH7Ga',
              type: 'color',
              key: 'h8GgRWH7Ga',
              value: 'rgba(25, 25, 49, 1)',
              disabled: false
            }
          ],
          display: 'flex',
          flexDirection: 'row',
          key: 'centerCenter',
          justifyContent: 'center',
          alignItems: 'center'
        },
        displayName: 'Col'
      },
      displayName: 'Col',
      custom: {},
      parent: 'ZbXgZol9I0',
      hidden: false,
      nodes: ['AN6DGvmP2e'],
      linkedNodes: {}
    },
    sIQ95iOFyi: {
      type: {
        resolvedName: 'Col'
      },
      isCanvas: true,
      props: {
        type: 'span',
        span: 8,
        flex: '',
        style: {
          ...contentpaddingstyle,
          background: 'linear-gradient(rgba(25, 25, 49, 1), rgba(25, 25, 49, 1))',
          backgroundList: [
            {
              id: '2CukbYxdbN',
              type: 'color',
              key: '2CukbYxdbN',
              value: 'rgba(25, 25, 49, 1)',
              disabled: false
            }
          ],
          display: 'grid',
          flexDirection: 'column',
          rowGap: 0,
          columnGap: 0,
          key: 'centerCenter',
          justifyContent: '',
          alignItems: '',
          alignContent: '',
          flexWrap: '',
          gap: '',
          justifyItems: ''
        },
        displayName: 'Col'
      },
      displayName: 'Col',
      custom: {},
      parent: 'ZbXgZol9I0',
      hidden: false,
      nodes: ['lV-EaFlA1v', 'fTOCrRK__X'],
      linkedNodes: {}
    },
    CXO98ty0IH: {
      type: {
        resolvedName: 'TypographyText'
      },
      isCanvas: false,
      props: {
        displayName: 'Typography.Text',
        value: '运行状态',
        status: statsuMap,
        events: {},
        style: {
          ...contentstyle,
          textAlign: 'center',
          fontSize: 12
        }
      },
      displayName: 'TypographyText',
      custom: {},
      parent: 'DIfICqxGer',
      hidden: false,
      nodes: [],
      linkedNodes: {}
    },
    qR5quNTUUj: {
      type: {
        resolvedName: 'TypographyText'
      },
      isCanvas: false,
      props: {
        displayName: 'Typography.Text',
        value: {
          bind: source.ONOFF.NAME,
          type: 'points'
        },
        status: [
          {
            label: '停止',
            value: '0',
            key: '1',
            color: '#8c8c8c',
            expression: {
              bind: source.ONOFF.NAME,
              type: 'points'
            }
          },
          {
            label: '运行',
            value: '1',
            key: '2',
            color: '#73d13d',
            expression: {
              bind: source.ONOFF.NAME,
              type: 'points'
            }
          }
        ],
        events: {},
        style: {
          ...contentstyle,
          fontSize: 16,
          lineHeight: 2.5,
          fontWeight: 'bold',
          color: 'rgba(0, 251, 40, 1)',
          textAlign: 'center'
        }
      },
      displayName: 'TypographyText',
      custom: {},
      parent: 'DIfICqxGer',
      hidden: false,
      nodes: [],
      linkedNodes: {}
    },
    qHzJCOyMkB: {
      type: {
        resolvedName: 'TypographyText'
      },
      isCanvas: false,
      props: {
        displayName: 'Typography.Text',
        value: '远程/就地',
        status: statsuMap,
        events: {},
        style: contentstyle
      },
      displayName: 'TypographyText',
      custom: {},
      parent: 'ELeyFREOys',
      hidden: false,
      nodes: [],
      linkedNodes: {}
    },
    '-FuylO7csn': {
      type: {
        resolvedName: 'TypographyText'
      },
      isCanvas: false,
      props: {
        displayName: 'Typography.Text',
        value: {
          bind: source.AM.NAME,
          type: 'points'
        },
        status: [
          {
            label: '远程',
            value: '1',
            key: '1',
            color: '#73d13d',
            expression: {
              bind: source.AM.NAME,
              type: 'points'
            }
          },
          {
            label: '就地',
            value: '0',
            key: '2',
            color: '#8c8c8c',
            expression: {
              bind: source.AM.NAME,
              type: 'points'
            }
          }
        ],
        events: {},
        style: {
          ...contentstyle,
          fontSize: 16,
          lineHeight: 2.5,
          fontWeight: 'bold',
          textAlign: 'center'
        }
      },
      displayName: 'TypographyText',
      custom: {},
      parent: 'ELeyFREOys',
      hidden: false,
      nodes: [],
      linkedNodes: {}
    },
    '4o2bF9todC': {
      type: {
        resolvedName: 'TypographyText'
      },
      isCanvas: false,
      props: {
        displayName: 'Typography.Text',
        value: '启用/禁用',
        status: statsuMap,
        events: {},
        style: {
          position: 'relative',
          width: '100%',
          height: 'auto',
          heightType: 'fit-content',
          widthType: 'relative',
          fontFamily: 'PingFang SC',
          fontSize: 12,
          fontWeight: 400,
          lineHeight: 2.5,
          textAlign: 'center',
          spacing: 0,
          paddingSide: 'all',
          padding: 0,
          marginSide: 'all',
          margin: 0
        }
      },
      displayName: 'TypographyText',
      custom: {},
      parent: 'UVbncEeGb_',
      hidden: false,
      nodes: [],
      linkedNodes: {}
    },
    'lV-EaFlA1v': {
      type: {
        resolvedName: 'Col'
      },
      isCanvas: true,
      props: {
        type: 'span',
        span: 24,
        flex: '',
        style: {
          ...contentpaddingstyle,
          padding: 0,
          height: '50px',
          heightType: 'fixed',
          background: 'linear-gradient(rgba(44, 46, 70, 1), rgba(44, 46, 70, 1))',
          backgroundList: [
            {
              id: 'rWV3wAkW2U',
              type: 'color',
              key: 'rWV3wAkW2U',
              value: 'rgba(44, 46, 70, 1)',
              disabled: false
            }
          ],
          heightUnit: 'px',
          display: 'flex',
          flexDirection: 'row',
          key: 'centerLeft',
          justifyContent: 'flex-start',
          alignItems: 'center'
        },
        displayName: 'Col'
      },
      displayName: 'Col',
      custom: {},
      parent: 'sIQ95iOFyi',
      hidden: false,
      nodes: ['7zOPQcmfWY'],
      linkedNodes: {}
    },
    fTOCrRK__X: {
      type: {
        resolvedName: 'Col'
      },
      isCanvas: true,
      props: {
        type: 'span',
        span: 24,
        flex: '',
        style: {
          position: 'relative',
          width: '100%',
          height: '153px',
          widthType: 'relative',
          heightType: 'fixed',
          fontFamily: 'PingFang SC',
          fontSize: 14,
          fontWeight: 400,
          lineHeight: 1.5,
          textAlign: 'left',
          spacing: 0,
          paddingSide: 'all',
          padding: 8,
          marginSide: 'all',
          margin: 0,
          background: null,
          backgroundList: [],
          display: '',
          flexDirection: '',
          rowGap: '',
          columnGap: '',
          key: 'centerCenter',
          justifyContent: '',
          alignItems: '',
          alignContent: '',
          flexWrap: '',
          gap: '',
          justifyItems: '',
          heightUnit: 'px'
        },
        displayName: 'Col'
      },
      displayName: 'Col',
      custom: {},
      parent: 'sIQ95iOFyi',
      hidden: false,
      nodes: ['U4ziX5-fxI', 'aZoDNjoTCB'],
      linkedNodes: {}
    },
    aZoDNjoTCB: {
      type: {
        resolvedName: 'Col'
      },
      isCanvas: true,
      props: {
        type: 'span',
        span: 24,
        flex: '',
        style: {
          ...contentpaddingstyle,
          display: 'flex',
          flexDirection: 'row',
          key: 'centerLeft',
          justifyContent: 'flex-start',
          alignItems: 'center',
          columnGap: 6,
          paddingTop: 8,
          paddingRight: 8,
          paddingLeft: 9,
          paddingBottom: 8
        },
        displayName: 'Col'
      },
      displayName: 'Col',
      custom: {},
      parent: 'fTOCrRK__X',
      hidden: false,
      nodes: ['e-sDYREIZP', 'd6JAurmFiW'],
      linkedNodes: {}
    },
    'e-sDYREIZP': {
      type: {
        resolvedName: 'TypographyText'
      },
      isCanvas: false,
      props: {
        displayName: 'Typography.Text',
        value: '频率设置（Hz）',
        status: statsuMap,
        events: {},
        style: {
          ...contentstyle,
          fontSize: 12
        }
      },
      displayName: 'TypographyText',
      custom: {},
      parent: 'aZoDNjoTCB',
      hidden: false,
      nodes: [],
      linkedNodes: {}
    },
    '7zOPQcmfWY': {
      type: {
        resolvedName: 'TypographyText'
      },
      isCanvas: false,
      props: {
        displayName: 'Typography.Text',
        value: '参数',
        status: statsuMap,
        events: {},
        style: {
          ...contentstyle,
          fontSize: 14,
          lineHeight: 2.5,
          fontWeight: 'bold',
          textAlign: 'center'
        }
      },
      displayName: 'TypographyText',
      custom: {},
      parent: 'lV-EaFlA1v',
      hidden: false,
      nodes: [],
      linkedNodes: {}
    },
    FKA4e5oRfK: {
      type: {
        resolvedName: 'Col'
      },
      isCanvas: true,
      props: {
        type: 'span',
        span: 8,
        flex: '',
        style: {
          ...contentstyle,
          background: 'linear-gradient(rgba(25, 25, 49, 1), rgba(25, 25, 49, 1))',
          backgroundList: [
            {
              id: 'J7f6I1yfde',
              type: 'color',
              key: 'J7f6I1yfde',
              value: 'rgba(25, 25, 49, 1)',
              disabled: false
            }
          ],
          display: 'flex',
          flexDirection: 'row',
          key: 'centerCenter',
          justifyContent: '',
          alignItems: '',
          alignContent: '',
          flexWrap: '',
          gap: '',
          rowGap: '',
          columnGap: '',
          justifyItems: ''
        },
        displayName: 'Col'
      },
      displayName: 'Col',
      custom: {},
      parent: 'ZbXgZol9I0',
      hidden: false,
      nodes: ['CPlzhMrA-a', 'yvWTXHyX6N'],
      linkedNodes: {}
    },
    'CPlzhMrA-a': {
      type: {
        resolvedName: 'Col'
      },
      isCanvas: true,
      props: {
        type: 'span',
        span: 12,
        flex: '',
        style: {
          ...contentstyle,
          display: 'grid',
          flexDirection: 'column',
          rowGap: 0,
          columnGap: 0,
          key: 'centerCenter',
          justifyContent: '',
          alignItems: '',
          alignContent: '',
          flexWrap: '',
          gap: '',
          justifyItems: ''
        },
        displayName: 'Col'
      },
      displayName: 'Col',
      custom: {},
      parent: 'FKA4e5oRfK',
      hidden: false,
      nodes: ['pCbOWVC0Pm', 'PDQuqywSeB'],
      linkedNodes: {}
    },
    yvWTXHyX6N: {
      type: {
        resolvedName: 'Col'
      },
      isCanvas: true,
      props: {
        type: 'span',
        span: 12,
        flex: '',
        style: {
          ...contentstyle,
          display: 'grid',
          flexDirection: 'row',
          rowGap: '',
          columnGap: '',
          key: 'bottomLeft',
          justifyContent: '',
          alignItems: '',
          alignContent: '',
          flexWrap: '',
          gap: '',
          justifyItems: ''
        },
        displayName: 'Col'
      },
      displayName: 'Col',
      custom: {},
      parent: 'FKA4e5oRfK',
      hidden: false,
      nodes: ['t6g0SK64BP', '2heSll_nrW'],
      linkedNodes: {}
    },
    PDQuqywSeB: {
      type: {
        resolvedName: 'Col'
      },
      isCanvas: true,
      props: {
        type: 'span',
        span: 24,
        flex: '',
        style: {
          ...contentstyle,
          height: '75px',
          heightType: 'fixed',
          heightUnit: 'px',
          display: 'flex',
          flexDirection: 'row',
          columnGap: 6,
          key: 'topCenter',
          justifyContent: 'center',
          alignItems: 'flex-start'
        },
        displayName: 'Col'
      },
      displayName: 'Col',
      custom: {},
      parent: 'CPlzhMrA-a',
      hidden: false,
      nodes: ['K5Tl1O4oZC'],
      linkedNodes: {}
    },
    pCbOWVC0Pm: {
      type: {
        resolvedName: 'Col'
      },
      isCanvas: true,
      props: {
        type: 'span',
        span: 24,
        flex: '',
        style: {
          ...contentstyle,
          display: 'grid',
          flexDirection: 'row',
          key: 'bottomCenter',
          justifyContent: 'center',
          alignItems: 'flex-end'
        },
        displayName: 'Col'
      },
      displayName: 'Col',
      custom: {},
      parent: 'CPlzhMrA-a',
      hidden: false,
      nodes: ['nganyKPSQA'],
      linkedNodes: {}
    },
    nganyKPSQA: {
      type: {
        resolvedName: 'TypographyText'
      },
      isCanvas: false,
      props: {
        displayName: 'Typography.Text',
        value: '功率',
        status: statsuMap,
        events: {},
        style: {
          ...contentstyle,
          fontSize: 14,
          fontWeight: 'normal'
        }
      },
      displayName: 'TypographyText',
      custom: {},
      parent: 'pCbOWVC0Pm',
      hidden: false,
      nodes: [],
      linkedNodes: {}
    },
    K5Tl1O4oZC: {
      type: {
        resolvedName: 'StateText'
      },
      isCanvas: false,
      props: {
        displayName: 'StateText',
        level: '5',
        size: '20px',
        decimalSeparator: 1,
        percent: false,
        value: {
          bind: source.P.NAME,
          type: 'points'
        },
        type: '',
        strong: true,
        italic: false,
        underline: false,
        mark: false,
        keyboard: false,
        code: false,
        isBefore: false,
        isAfter: true,
        before: {
          value: '前缀'
        },
        after: {
          value: 'kW',
          type: 'secondary'
        }
      },
      displayName: 'StateText',
      custom: {},
      parent: 'PDQuqywSeB',
      hidden: false,
      nodes: [],
      linkedNodes: {}
    },
    t6g0SK64BP: {
      type: {
        resolvedName: 'Col'
      },
      isCanvas: true,
      props: {
        type: 'span',
        span: 24,
        flex: '',
        style: {
          ...contentstyle,
          display: 'grid',
          flexDirection: 'row',
          key: 'bottomCenter',
          justifyContent: 'center',
          alignItems: 'flex-end'
        },
        displayName: 'Col'
      },
      displayName: 'Col',
      custom: {},
      parent: 'yvWTXHyX6N',
      hidden: false,
      nodes: ['IvPnJX-MOl'],
      linkedNodes: {}
    },
    '2heSll_nrW': {
      type: {
        resolvedName: 'Col'
      },
      isCanvas: true,
      props: {
        type: 'span',
        span: 24,
        flex: '',
        style: {
          ...contentstyle,
          height: '75px',
          heightType: 'fixed',
          heightUnit: 'px',
          display: 'flex',
          flexDirection: 'row',
          key: 'topCenter',
          justifyContent: 'center',
          alignItems: 'flex-start'
        },
        displayName: 'Col'
      },
      displayName: 'Col',
      custom: {},
      parent: 'yvWTXHyX6N',
      hidden: false,
      nodes: ['jDT6Z4vpza'],
      linkedNodes: {}
    },
    'IvPnJX-MOl': {
      type: {
        resolvedName: 'TypographyText'
      },
      isCanvas: false,
      props: {
        displayName: 'Typography.Text',
        value: '效率',
        status: statsuMap,
        events: {},
        style: {
          ...contentstyle,
          fontSize: 14,
          fontWeight: 'normal'
        }
      },
      displayName: 'TypographyText',
      custom: {},
      parent: 't6g0SK64BP',
      hidden: false,
      nodes: [],
      linkedNodes: {}
    },
    jDT6Z4vpza: {
      type: {
        resolvedName: 'TypographyText'
      },
      isCanvas: false,
      props: {
        displayName: 'Typography.Text',
        value: {
          bind: source.COP.NAME,
          type: 'points'
        },
        events: {},
        style: {
          ...contentstyle,
          fontSize: 20,
          fontWeight: '600',
          textAlign: 'center'
        }
      },
      displayName: 'TypographyText',
      custom: {},
      parent: '2heSll_nrW',
      hidden: false,
      nodes: [],
      linkedNodes: {}
    },
    'QgWssij-kL': {
      type: {
        resolvedName: 'Container'
      },
      isCanvas: true,
      props: {
        style: contentstyle,
        displayName: 'Container'
      },
      displayName: 'Container',
      custom: {},
      parent: 'UVbncEeGb_',
      hidden: false,
      nodes: ['LHkjS3ImU7'],
      linkedNodes: {}
    },
    LHkjS3ImU7: {
      type: {
        resolvedName: 'Select'
      },
      isCanvas: false,
      props: {
        placeholder: '请选择',
        size: 'middle',
        mode: {},
        optionType: 'default',
        disabled: false,
        allowClear: false,
        bordered: true,
        options: [
          {
            id: 'oUN7ebnELU',
            label: '启用',
            value: '1',
            name: '启用',
            title: '启用'
          },
          {
            id: 'POFnaWlLKZ',
            label: '禁用',
            value: '0',
            name: '禁用',
            title: '禁用'
          }
        ],
        events: {
          onChange: {
            action: 'pushData',
            link: {
              component: source.EB.NAME
            }
          }
        },
        displayName: 'Select'
      },
      displayName: 'Select',
      custom: {},
      parent: 'QgWssij-kL',
      hidden: false,
      nodes: [],
      linkedNodes: {}
    },
    d6JAurmFiW: {
      type: {
        resolvedName: 'Container'
      },
      isCanvas: true,
      props: {
        style: {
          position: 'relative',
          width: 82,
          height: 35,
          widthType: 'fixed',
          heightType: 'fixed',
          fontFamily: 'PingFang SC',
          fontSize: 14,
          fontWeight: 400,
          lineHeight: 1.5,
          textAlign: 'right',
          spacing: 0,
          paddingSide: 'all',
          padding: 0,
          marginSide: 'all',
          margin: 0,
          background: null,
          backgroundList: [],
          widthUnit: 'px',
          heightUnit: 'px',
          display: 'flex',
          flexDirection: 'row',
          key: 'centerRight',
          justifyContent: 'flex-end',
          alignItems: 'center'
        },
        displayName: 'Container'
      },
      displayName: 'Container',
      custom: {},
      parent: 'aZoDNjoTCB',
      hidden: false,
      nodes: ['AjjF-g0tkP'],
      linkedNodes: {}
    },
    'AjjF-g0tkP': {
      type: {
        resolvedName: 'Input'
      },
      isCanvas: false,
      props: {
        displayName: 'Input',
        size: 'middle',
        type: 'text',
        placeholder: '',
        disabled: false,
        allowClear: false,
        bordered: true,
        showCount: false,
        isPush: true,
        events: {
          onPressEnter: {
            action: 'pushData',
            link: {
              component: source.FREQ_SP.NAME
            }
          },
          onPush: {
            action: 'pushData',
            link: {
              component: source.FREQ_SP.NAME
            }
          }
        },
        value: {
          bind: source.FREQ_SP.NAME,
          type: 'points'
        }
      },
      displayName: 'Input',
      custom: {},
      parent: 'd6JAurmFiW',
      hidden: false,
      nodes: [],
      linkedNodes: {}
    },
    '1THpHAdGEb': {
      type: {
        resolvedName: 'Button'
      },
      isCanvas: false,
      props: {
        children: '启动',
        template: 'default',
        type: 'primary',
        shape: 'default',
        icon: '',
        htmlType: 'button',
        status: statsuMap,
        events: {
          onClick: {
            action: 'pushData',
            link: {
              component: source.ONOFF_SP.NAME,
              value: '1'
            }
          }
        },
        style: {
          ...contentstyle,
          fontSize: 14,
          fontWeight: 'bold',
          spacing: 0,
          paddingSide: 'side',
          padding: 4,
          marginSide: 'all',
          margin: 0,
          paddingTop: 4,
          paddingRight: 15,
          paddingBottom: 4,
          paddingLeft: 15
        },
        displayName: 'Button'
      },
      displayName: 'Button',
      custom: {},
      parent: 'Cpwe48U7q1',
      hidden: false,
      nodes: [],
      linkedNodes: {}
    },
    slkc64jQNb: {
      type: {
        resolvedName: 'Button'
      },
      isCanvas: false,
      props: {
        children: '停止',
        template: 'default',
        type: 'primary',
        shape: 'default',
        icon: '',
        htmlType: 'button',
        status: statsuMap,
        events: {
          onClick: {
            action: 'pushData',
            link: {
              component: source.ONOFF_SP.NAME,
              value: '0'
            }
          }
        },
        style: {
          ...contentstyle,
          fontSize: 14,
          fontWeight: 'bold',
          paddingSide: 'side',
          padding: 4,
          marginSide: 'all',
          margin: 0,
          paddingTop: 4,
          paddingRight: 15,
          paddingBottom: 4,
          paddingLeft: 15
        },
        displayName: 'Button'
      },
      displayName: 'Button',
      custom: {},
      parent: 'Cpwe48U7q1',
      hidden: false,
      nodes: [],
      linkedNodes: {}
    },
    AN6DGvmP2e: {
      type: {
        resolvedName: 'SvgMaterial'
      },
      isCanvas: false,
      props: {
        displayName: 'SvgMaterial',
        component:
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 2 31 61"><path d="M4 4h20v9h-20ZM6 15h16v17h-16ZM24 17h3v10h-3ZM7 34h14v4h-14v-4M4 39h20v2h-20v-2M5 42h18v9h-18v-9M3 53h22a11 16 0 012 8h-26a11 16 0 012-8Z"/><path d="M9 34H11V38H9V34M17 34H19V38H17V34M7 42H9V51H7V42M19 42H21V51H19V42Z" fill="white" fill-opacity="0.4"/><path d="M7 34h1v4h-1zM20 34h1v4h-1ZM5 42h1v9h-1ZM22 42h1v9h-1Z" fill="white" fill-opacity="0.3"/></svg>',
        style: {
          translateX: 0,
          translateY: 0,
          scale: 1,
          width: 100,
          height: 100,
          fill: 'rgba(89, 138, 186, 1)',
          opacity: 1,
          borderRadius: 0
        }
      },
      displayName: 'SvgMaterial',
      custom: {},
      parent: 'hSvKRbLFqf',
      hidden: false,
      nodes: [],
      linkedNodes: {}
    },
    'U4ziX5-fxI': {
      type: {
        resolvedName: 'Container'
      },
      isCanvas: true,
      props: {
        displayName: 'Container',
        style: contentstyle
      },
      displayName: 'Container',
      custom: {},
      parent: 'fTOCrRK__X',
      hidden: false,
      nodes: ['yZObn9vlVy'],
      linkedNodes: {}
    },
    yZObn9vlVy: {
      type: {
        resolvedName: 'Container'
      },
      isCanvas: true,
      props: {
        displayName: 'Container',
        style: {
          ...contentstyle,
          display: 'flex',
          flexDirection: 'row',
          key: 'centerLeft',
          justifyContent: 'flex-start',
          alignItems: 'center'
        }
      },
      displayName: 'Container',
      custom: {},
      parent: 'U4ziX5-fxI',
      hidden: false,
      nodes: ['SSuSTYnOMB', 'BinWRgVe7p'],
      linkedNodes: {}
    },
    BinWRgVe7p: {
      type: {
        resolvedName: 'Col'
      },
      isCanvas: true,
      props: {
        type: 'span',
        span: 12,
        flex: '',
        style: {
          ...contentpaddingstyle,
          display: 'flex',
          flexDirection: 'row',
          key: 'centerRight',
          justifyContent: 'flex-end',
          alignItems: 'center'
        },
        displayName: 'Col'
      },
      displayName: 'Col',
      custom: {},
      parent: 'yZObn9vlVy',
      hidden: false,
      nodes: ['FFy8MoYju5'],
      linkedNodes: {}
    },
    SSuSTYnOMB: {
      type: {
        resolvedName: 'Col'
      },
      isCanvas: true,
      props: {
        type: 'span',
        span: 12,
        flex: '',
        style: {
          ...contentpaddingstyle,
          display: 'flex',
          flexDirection: 'row',
          key: 'centerLeft',
          justifyContent: 'flex-start',
          alignItems: 'center'
        },
        displayName: 'Col'
      },
      displayName: 'Col',
      custom: {},
      parent: 'yZObn9vlVy',
      hidden: false,
      nodes: ['k6TOH3T2Wf'],
      linkedNodes: {}
    },
    k6TOH3T2Wf: {
      type: {
        resolvedName: 'TypographyText'
      },
      isCanvas: false,
      props: {
        displayName: 'Typography.Text',
        value: '频率（Hz）',
        status: statsuMap,
        events: {},
        style: {
          ...contentstyle,
          fontSize: 12
        }
      },
      displayName: 'TypographyText',
      custom: {},
      parent: 'SSuSTYnOMB',
      hidden: false,
      nodes: [],
      linkedNodes: {}
    },
    FFy8MoYju5: {
      type: {
        resolvedName: 'StateText'
      },
      isCanvas: false,
      props: {
        displayName: 'StateText',
        level: '5',
        size: '14px',
        decimalSeparator: 1,
        percent: false,
        value: {
          bind: source.FREQ.NAME,
          type: 'points'
        },
        type: '',
        strong: true,
        italic: false,
        underline: false,
        disabled: false,
        mark: false,
        keyboard: false,
        delete: false,
        code: false,
        isBefore: false,
        isAfter: false,
        before: {
          value: '前缀'
        },
        after: {
          value: '℃',
          type: 'secondary'
        }
      },
      displayName: 'StateText',
      custom: {},
      parent: 'BinWRgVe7p',
      hidden: false,
      nodes: [],
      linkedNodes: {}
    },
    // Ax4Ob_BxmJ: {
    //   type: {
    //     resolvedName: 'Container'
    //   },
    //   isCanvas: true,
    //   props: {
    //     displayName: 'Container',
    //     style: {
    //       ...contentstyle,
    //       display: 'flex',
    //       flexDirection: 'row',
    //       key: 'centerLeft',
    //       justifyContent: 'flex-start',
    //       alignItems: 'center'
    //     }
    //   },
    //   displayName: 'Container',
    //   custom: {},
    //   parent: 'fTOCrRK__X',
    //   hidden: false,
    //   nodes: [
    //     // "r1CMeYcKH-",
    //     // "WkcuwYuUXK"
    //   ],
    //   linkedNodes: {}
    // }
    // "r1CMeYcKH-": {
    //     "type": {
    //         "resolvedName": "Col"
    //     },
    //     "isCanvas": true,
    //     "props": {
    //         "type": "span",
    //         "span": 12,
    //         "flex": "",
    //         "style": {
    //             ...contentpaddingstyle,
    //             "display": "flex",
    //             "flexDirection": "row",
    //             "key": "centerLeft",
    //             "justifyContent": "flex-start",
    //             "alignItems": "center"
    //         },
    //         "displayName": "Col"
    //     },
    //     "displayName": "Col",
    //     "custom": {},
    //     "parent": "Ax4Ob_BxmJ",
    //     "hidden": false,
    //     "nodes": [
    //         "_HAZQV8i5p"
    //     ],
    //     "linkedNodes": {}
    // },
    // "_HAZQV8i5p": {
    //     "type": {
    //         "resolvedName": "TypographyText"
    //     },
    //     "isCanvas": false,
    //     "props": {
    //         "displayName": "Typography.Text",
    //         "value": "流量（m³/h）",
    //         "status": statsuMap,
    //         "events": {},
    //         "style": {
    //             ...contentstyle,
    //             "fontSize": 12,
    //         }
    //     },
    //     "displayName": "TypographyText",
    //     "custom": {},
    //     "parent": "r1CMeYcKH-",
    //     "hidden": false,
    //     "nodes": [],
    //     "linkedNodes": {}
    // },
    // "WkcuwYuUXK": {
    //     "type": {
    //         "resolvedName": "Col"
    //     },
    //     "isCanvas": true,
    //     "props": {
    //         "type": "span",
    //         "span": 12,
    //         "flex": "",
    //         "style": {
    //             ...contentpaddingstyle,
    //             "display": "flex",
    //             "flexDirection": "row",
    //             "key": "centerRight",
    //             "justifyContent": "flex-end",
    //             "alignItems": "center"
    //         },
    //         "displayName": "Col"
    //     },
    //     "displayName": "Col",
    //     "custom": {},
    //     "parent": "Ax4Ob_BxmJ",
    //     "hidden": false,
    //     "nodes": [
    //         "GwxjdKWSZC"
    //     ],
    //     "linkedNodes": {}
    // },
    // "GwxjdKWSZC": {
    //     "type": {
    //         "resolvedName": "StateText"
    //     },
    //     "isCanvas": false,
    //     "props": {
    //         "displayName": "StateText",
    //         "level": "5",
    //         "size": "14px",
    //         "decimalSeparator": 1,
    //         "percent": false,
    //         "value": "850",
    //         "type": "",
    //         "strong": true,
    //         "italic": false,
    //         "underline": false,
    //         "disabled": false,
    //         "mark": false,
    //         "keyboard": false,
    //         "delete": false,
    //         "code": false,
    //         "isBefore": false,
    //         "isAfter": false,
    //         "before": {
    //             "value": "前缀"
    //         },
    //         "after": {
    //             "value": "kPa",
    //             "type": "secondary"
    //         }
    //     },
    //     "displayName": "StateText",
    //     "custom": {},
    //     "parent": "WkcuwYuUXK",
    //     "hidden": false,
    //     "nodes": [],
    //     "linkedNodes": {}
    // }
  };
};
