import { contentpaddingstyle, contentstyle, statsuMap } from '../pageNodeDefault';
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
        events: {
          onLoad: null
        },
        style: {
          position: 'relative',
          width: 952,
          height: 489,
          widthType: 'fixed',
          heightType: 'fixed',
          fontFamily: 'PingFang SC',
          fontSize: 14,
          fontWeight: 400,
          lineHeight: 1.5,
          textAlign: 'left',
          spacing: 0,
          paddingSide: 'all',
          padding: 16,
          marginSide: 'all',
          margin: 0,
          background: null,
          borderRadius: 0,
          backgroundList: [],
          widthUnit: 'px',
          heightUnit: 'px',
          minHeight: '100%'
        },
        projId: 'Mvux_IMiSQxgrLD4bImW4g',
        points: {
          [source.AM.NAME]: 0,
          [source.ONOFF.NAME]: 0,
          [source.POS.NAME]: 0,
          [source.ONOFF_SP.NAME]: 0,
          [source.ONOFF_SP.NAME]: 0,
          [source.POS_SP.NAME]: 0,
          [source.EB.NAME]: 0,
          [source.ONOFF_SP.NAME]: 0
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
          width: 'auto',
          widthType: 'fit-content',
          display: 'grid',
          flexDirection: 'column',
          rowGap: 0,
          columnGap: 0
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
          ...contentpaddingstyle,
          height: 'auto',
          heightType: 'fit-content',
          paddingSide: 'side',
          display: 'flex',
          flexDirection: 'row',
          columnGap: 6,
          marginTop: 0,
          marginRight: 0,
          marginLeft: 0,
          marginBottom: 0,
          paddingTop: 8,
          paddingRight: 20,
          paddingLeft: 0,
          paddingBottom: 8,
          heightUnit: 'px'
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
          ...contentpaddingstyle,
          display: 'flex',
          flexDirection: 'row',
          columnGap: 6,
          paddingTop: 0,
          paddingRight: 10,
          paddingLeft: 4,
          paddingBottom: 8
        },
        displayName: 'Col'
      },
      displayName: 'Col',
      custom: {},
      parent: 'xxYw5l8gMx',
      hidden: false,
      nodes: ['sIQ95iOFyi', 'hSvKRbLFqf'],
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
        span: 12,
        flex: '',
        style: {
          ...contentpaddingstyle,
          background: 'linear-gradient(rgba(25, 25, 49, 1), rgba(25, 25, 49, 1))',
          backgroundList: [
            {
              id: 'sr1jLnhvd1',
              type: 'color',
              key: 'sr1jLnhvd1',
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
      nodes: ['pZ3F_KJtH_'],
      linkedNodes: {}
    },
    sIQ95iOFyi: {
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
          fontSize: 12,
          lineHeight: 2.5
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
            label: '关闭',
            value: '0',
            key: '1',
            color: '#8c8c8c',
            expression: {
              bind: source.ONOFF.NAME,
              type: 'points'
            }
          },
          {
            label: '开启',
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
          textAlign: 'center',
          fontWeight: 'bold',
          color: 'rgba(0, 251, 40, 1)'
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
        style: {
          ...contentstyle,
          fontSize: 12,
          lineHeight: 2.5
        }
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
          ...contentstyle,
          fontSize: 12,
          lineHeight: 2.5,
          textAlign: 'center'
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
          padding: 8,
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
          heightUnit: 'px'
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
          ...contentpaddingstyle,
          display: 'grid',
          flexDirection: 'row',
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
      nodes: ['inQyzAYkaX', 'aZoDNjoTCB'],
      linkedNodes: {}
    },
    inQyzAYkaX: {
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
          columnGap: 6,
          key: 'centerCenter',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: 8,
          paddingRight: 28,
          paddingLeft: 28,
          paddingBottom: 8
        },
        displayName: 'Col'
      },
      displayName: 'Col',
      custom: {},
      parent: 'fTOCrRK__X',
      hidden: false,
      nodes: ['FF2myQvC58', 'XR2pIdv-Gu'],
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
          key: 'centerCenter',
          justifyContent: 'center',
          alignItems: 'center',
          columnGap: 6,
          paddingTop: 8,
          paddingRight: 28,
          paddingLeft: 28,
          paddingBottom: 8
        },
        displayName: 'Col'
      },
      displayName: 'Col',
      custom: {},
      parent: 'fTOCrRK__X',
      hidden: false,
      nodes: ['e-sDYREIZP', 'nLvpb5hVgZ'],
      linkedNodes: {}
    },
    FF2myQvC58: {
      type: {
        resolvedName: 'TypographyText'
      },
      isCanvas: false,
      props: {
        displayName: 'Typography.Text',
        value: '开度（%）',
        status: statsuMap,
        events: {},
        style: {
          ...contentstyle,
          fontSize: 12
        }
      },
      displayName: 'TypographyText',
      custom: {},
      parent: 'inQyzAYkaX',
      hidden: false,
      nodes: [],
      linkedNodes: {}
    },
    'e-sDYREIZP': {
      type: {
        resolvedName: 'TypographyText'
      },
      isCanvas: false,
      props: {
        displayName: 'Typography.Text',
        value: '开度设置（%）',
        status: statsuMap,
        events: {},
        style: {
          ...contentstyle,
          width: '80%',
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
    'XR2pIdv-Gu': {
      type: {
        resolvedName: 'TypographyText'
      },
      isCanvas: false,
      props: {
        displayName: 'Typography.Text',
        value: {
          bind: source.POS.NAME,
          type: 'points'
        },
        events: {},
        style: {
          ...contentstyle,
          textAlign: 'right'
        }
      },
      displayName: 'TypographyText',
      custom: {},
      parent: 'inQyzAYkaX',
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
    pZ3F_KJtH_: {
      type: {
        resolvedName: 'Container'
      },
      isCanvas: true,
      props: {
        style: {
          position: 'relative',
          width: 160,
          height: 133,
          widthType: 'fixed',
          heightType: 'fixed',
          fontFamily: 'PingFang SC',
          fontSize: 14,
          fontWeight: 400,
          lineHeight: 1.5,
          textAlign: 'left',
          spacing: 0,
          paddingSide: 'all',
          padding: 0,
          marginSide: 'all',
          margin: 0,
          background: null,
          backgroundList: [],
          display: 'flex',
          flexDirection: 'row',
          key: 'centerCenter',
          justifyContent: 'center',
          alignItems: 'center',
          widthUnit: 'px',
          heightUnit: 'px'
        },
        displayName: 'Container'
      },
      displayName: 'Container',
      custom: {},
      parent: 'hSvKRbLFqf',
      hidden: false,
      nodes: ['7c_W997kAo'],
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
    '1THpHAdGEb': {
      type: {
        resolvedName: 'Button'
      },
      isCanvas: false,
      props: {
        children: '开启',
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
        children: '关闭',
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
    nLvpb5hVgZ: {
      type: {
        resolvedName: 'Input'
      },
      isCanvas: false,
      props: {
        displayName: 'Input',
        size: 'small',
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
              component: source.POS_SP.NAME
            }
          },
          onPush: {
            action: 'pushData',
            link: {
              component: source.POS_SP.NAME
            }
          }
        },
        value: {
          bind: source.POS_SP.NAME,
          type: 'points'
        }
      },
      displayName: 'Input',
      custom: {},
      parent: 'aZoDNjoTCB',
      hidden: false,
      nodes: [],
      linkedNodes: {}
    },
    '7c_W997kAo': {
      type: {
        resolvedName: 'SvgMaterial'
      },
      isCanvas: false,
      props: {
        displayName: 'SvgMaterial',
        component:
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="17 0 37 52"><path d="M19 25H22V29H31V23H34V16H25V13H24V5H25V2H46V5H47V13H46V16H37V23H40V29H49V25H52V50H49V46H22V50H19Z"/><path d="M25 6V12H46V6Z" fill="black" fill-opacity="0.15"/><path d="M22 31H49V34H22Z" fill="white" fill-opacity="0.3"/><path d="M22 34V37H49V34Z" fill="white" fill-opacity="0.2"/></svg>',
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
      parent: 'pZ3F_KJtH_',
      hidden: false,
      nodes: [],
      linkedNodes: {}
    }
  };
};
