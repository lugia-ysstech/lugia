module.exports = param => {
  const {
    introduce,
    Alignment,
    Repeat,
    Proximity,
    Hierarchy,
    Feedback,
    Guide,
    Accessibility,
    Reduceskip,
    coreimg1,
    coreimg2,
    AlignmentImg,
    alignImg1,
    alignImg2,
    alignImg3,
    alignImg4,
    alignImg5,
    alignImg6,
    RepeatImg,
    repeatImg1,
    repeatImg2,
    repeatImg3,
    repeatImg4,
    proximityImg,
    proximityImg1,
    proximityImg2,
    proximityImg3,
    proximityImg4,
    proximityImg5,
    proximityImg6,
    hierarchyImg,
    hierarchyImg1,
    hierarchyImg2,
    hierarchyImg3,
    feedbackImg,
    feedbackImg1,
    feedbackImg2,
    feedbackImg3,
    feedbackImg4,
    feedbackImg5,
    feedbackImg6,
    feedbackImg7,
    feedbackImg8,
    guideImg,
    guideImg1,
    guideImg2,
    guideImg3,
    guideImg4,
    guideImg5,
    guideImg6,
    guideImg7,
    accessibilityImg,
    accessibilityImg1,
    accessibilityImg2,
    accessibilityImg3,
    accessibilityImg4,
    accessibilityImg5,
    accessibilityImg6,
    accessibilityImg7,
    accessibilityImg8,
    reduceskipImg,
    reduceskipImg1,
    reduceskipImg2,
    reduceskipImg3,
    reduceskipImg4,
    reduceskipImg5,
    reduceskipImg6,
    reduceskipImg7,
    reduceskipImg8,
    layoutImg,
    layoutImg1,
    layoutImg2,
    layoutImg3,
    layoutImg4,
    layoutImg5,
    patternImg,
    patternImg1,
    patternImg2,
    patternImg3,
    patternImg4,
    patternImg5,
    colorImg,
    imgAlice,
    imgThemeAlice,
    imgDream,
    imgThemeDream,
    imgBinghan,
    imgThemeBinghan,
    imgBingjing,
    imgThemeBingjing,
    imgBinghuo,
    imgThemeBinghuo,
    imgGuangxian,
    imgThemeGuangxian,
    imgHengxing,
    imgThemeHengxing,
    imgHuixing,
    imgThemeHuixing,
    imgHuorong,
    imgThemeHuorong,
    imgJiguang,
    imgThemeJiguang,
    imgKejilan,
    imgThemeKejilan,
    imgScience,
    imgThemeScience,
    imgRongxue,
    imgThemeRongxue,
    imgTaixian,
    imgThemeTaixian,
    imgWarm,
    imgThemeWarm,
    imgLucky,
    imgThemeLucky,
    imgYinyun,
    imgThemeYinyun,
    imgManor,
    imgThemeManor,
    imgViolet,
    imgThemeViolet,
    imgNature,
    imgThemeNature,
    imgZhaoxia,
    imgThemeZhaoxia,
    fontImg,
    fontImg1,
    fontImg2,
    fontImg3,
    fontImg4,
    fontImg5,
    fontImg6,
    iconImg,
    iconImg1,
    iconImg2,
    iconImg3,
    iconImg4,
    iconImg5,
    welcome,
    component,
    routewelcome
  } = param;
  const DesignDocument = {
    introduce: {
      title: 'Lugia Design',
      content: [],
      children: [
        {
          img: [{ url: introduce }],
          imgPosition: 'left',
        },
        {
          content: [
            { text: 'Lugia Design 是一套适合于中后台前端应用使用的设计语言。' },
            { text: '其实我们认为页面的形式并不需要将重点放在：”色彩单一，线条应用，分割等等这些单一视觉方面。“', margin: '20px  0 0' },
            { text: '因为对于设计来讲，页面的重点应该在形式上的优美和科学上的简洁，在解决用户需求行为时要大胆，敢于创新，敢于解决当今软件市场上的刚性需求点。而在实际用户应用时要化繁为简，让用户不需学习，就可直接上手应用。' },
            { text: '因此在Lugia Design是从视觉交互和体验交互两方面分别总结出四个设计原则：', margin: '20px 0 30px' },
          ],

        },
        {
          title: '视觉交互',
          card: [
            { text: '对齐原则', desc: 'Alignment', url: Alignment ,link:'/design/alignment'},
            { text: '重复原则', desc: 'Repeat', url: Repeat,link:'/design/repeat' },
            { text: '组织性原则', desc: 'Proximity', url: Proximity,link:'/design/proximity' },
            { text: '层级性原则', desc: 'Hierarchy', url: Hierarchy,link:'/design/hierarchy' }
          ]
        },
        {
          title: '体验交互',
          card: [
            { text: '反馈原则', desc: 'Feedback', url: Feedback ,link:'/design/feedback'},
            { text: '引导原则', desc: 'Guide', url: Guide ,link:'/design/guide'},
            { text: '易用性原则', desc: 'Accessibility', url: Accessibility ,link:'/design/accessibility'},
            { text: '减少跳转原则', desc: 'Reduce skip', url: Reduceskip ,link:'/design/reduceskip'}
          ]
        },

      ]
    },
    core: {
      title: '知性',
      content: [{ text: '知性一词，原本是德国古典哲学常用的术语。康德认为知性是介于感性和理性之间的一种认知能力。对于设计来说，知性可以同时定义为“形式上的优美和极致”和“科学上的精确和简洁”，我们相信知性的设计，实现了二者的完美契合。', margin: '0 0 30px 0' }],
      children: [
        {
          title: '形式上的优美和极致',
          content: [{text:'优秀设计的经典要素之一是形式的简约，以简驭繁。'}, {text:'Lugia对于界面设计，就是用最少的屏幕与器件来完成任务。与此同时我们把简约适用于行为，在视觉设计中给予用户最简单的工具，即运用最少的视觉区别明确传达想要表达的意思。'}, {text:'优秀的设计让人感觉是一个整体，各部分平衡和谐。Lugia设计形式上遵循自然，利用人类对自然的感知，提炼自然界中的客观规律并运用到界面设计中，从而创造出有层次、有艺术感的设计语言。', margin: '0 0 40px'}],
          img: [{ url: coreimg1 }],
          imgPosition: 'top',
        },
        {
          title: '科学上的精确和简洁',
          content: [{text:'用户可能会因为悦目而又兴趣尝试使用，但是使用的体验如果不好，他一样会离开。 lugia解决了产品的可用性、易用性问题，让用户在使用这些产品的过程中感觉更加方便容易，有效完成任务，达成预期目标。因此Lugia致力于消除阻碍用户使用的障碍，如歧义的文字，迷惑性的按钮，出错的页面，违背用户习惯的操作。'}, {text:'Lugia对用户群体有清晰的了解和划分，能做到业务使用的共同感。我们把一个复杂信息架构产品，分角色，划场景，可以让用户对产品目的了解更深刻，全局把握更强，精简页面层级，提升用户的使用效率和舒适度。', margin: '0 0 30px'}],
          img: [{ url: coreimg2 }],
          imgPosition: 'top',
        }
      ]
    },
    alignment: {
      title: '对齐',
      desc: 'Alignment',
      img: [{ url: AlignmentImg }],
      imgPosition: 'left',
      content: [
        { text: '人类发展历史中，整齐是人类的心理的一种信号。例如生活中：把到处都是的衣服挂好，把书桌整理好，把桌椅对齐摆好。这事我们通过视觉感受反馈给人脑的一种信号，生活如此，荧幕上也亦如此。' },
        {
          text: '在人类知觉过程中人们往往倾向于使知觉对象的直线继续成为直线，使曲线继续成为曲线。在页面设计中，将原件进行整齐对齐，既符合用户的认知特性，也能引导视觉流向。让用户更流畅地接收信息。',
          size: '12px',
          color: '#92939e',
          margin: '10px 0 0 '
        },
        {
          text: '———摘自：“格式塔学派”中的连续性（law of Contunuity）',
          size: '12px',
          color: '#92939e',
          margin: '10px 0 0 '
        },
      ],
      children: [
        {
          title: '段落对齐',
          content: [{ text: '在文章段落遇到较短、较散时，需要确定一个统一的视觉起点。在整段文字保持左、中、右三个对齐原则。' }],
          img: [{ url: alignImg1, desc: '段落对齐示例' }],
          imgPosition: 'right',
        },
        {
          title: '布局形状对齐',
          content: [{ text: '为了统一整体布局摆放，增强布局可视性，在整个数据表中，所有布局形块保持左、右对齐方式。' }],
          img: [{ url: alignImg2, desc: '布局形状对齐示例' }],
          imgPosition: 'right',
        },
        {
          title: '层级关系对齐',
          content: [{ text: '在操作列表数据时候，会出现很多的层级关系，为了避免层级混乱，要在层级级别以退字符并左对齐形式，进行区分。' }],
          img: [{ url: alignImg3, desc: '层级关系对齐示例' }],
          imgPosition: 'right',
        },
        {
          title: '表单类对齐',
          content: [
            { text: '1.在表单类，保持语句一致，字体在左侧以“冒号”统一右对齐。' },
            { text: '2.数据表内文案，可根据数据需求，进行左、中、右对齐。' },
            { text: '3.input框根据实际需求，保持左、右对齐。' },
            { text: '顶对齐：', size: '12px', color: '#525466', weight: '600', margin: '20px 0 0' },
            { text: '适用于简易表单，让用户快速预览完成。', size: '12px', color: '#92939e' },
            { text: '左对齐：', size: '12px', color: '#525466', weight: '600' },
            { text: '适用于填写布局复杂、有陌生数据、需谨填写。', size: '12px', color: '#92939e' },
            { text: '右对齐：', size: '12px', color: '#525466', weight: '600' },
            { text: '适用于稍复杂的表单。网页高度有限的情况。', size: '12px', color: '#92939e' },
          ],
          img: [{ url: alignImg4, desc: '表单类对齐' }],
          imgPosition: 'right',
        },
        {
          title: '数据类对齐',
          content: [
            { text: '在后台数据系统中：', weight: '600' },
            { text: '数据时最直观反应页面概况的方式。所以在数据设计中，要遵循信息明确，易查看，易适用原则。' },
            { text: '文字类：', weight: '600' },
            { text: '采用文字左对齐；数字用右对齐；表头遵循数字对齐的原则。且不能用居中对齐。' },
          ],
          img: [{ url: alignImg5, desc: '文字类对齐示例' }],
          imgPosition: 'right',
        },
        {
          content: [
            { text: '数字类：', weight: '600' },
            { text: '采用无衬线等高表列数字（高度一样，垂直对齐）。' },
          ],
          img: [{ url: alignImg6, desc: '数字类对齐示例' }],
          imgPosition: 'right',
        },

      ]
    },
    repeat: {
      title: '重复',
      content: [{ text: '在页面规划中，不免有很多（功能、级别、种类）相同的元素，在这些相同元素中采用重复的设计原理，减少用户的学习时间。让用户单次记忆即可知道这些元素的使用环境。' }],
      desc: 'Repeat',
      img: [{ url: RepeatImg }],
      imgPosition: 'left',
      children: [
        {
          title: '图表重复',
          content: [{ text: '相同级别的图表类型，采用形状重复的原则，保持数据可查看性。' }],
          img: [{ url: repeatImg1, desc: '在需要数据对照时候，第一个使用饼图，则其他同级别数据也使用饼图' }],
          imgPosition: 'right',
        },
        {
          title: 'ICONS重复',
          content: [{ text: '在相同的数据下，icons元素保持统一。' }],
          img: [{ url: repeatImg2, desc: '例如：使用搜索icons时，无论当前页面成为几级页面，搜索icons保持统一' }],
          imgPosition: 'right',
        },
        {
          title: '文案格式重复',
          content: [{ text: '为了方便阅读，同级别文案段落，以重复形式展示。' }],
          img: [{ url: repeatImg3, desc: '文案格式重复示例' }],
          imgPosition: 'right',
        },
        {
          title: '形状重复',
          content: [{ text: '同级显示区域，保持同级元素位置重复，让用户方便阅读信息。' }],
          img: [{ url: repeatImg4, desc: '形状重复示例' }],
          imgPosition: 'right',
        }
      ]
    },
    proximity: {
      title: '组织性',
      content: [{ text: '根据格式塔（Gestalt）心理学：当对象离得太近的时候，意识会认为它们是相关的。因此物体之间的相对距离会影响我们感知它们是否以及如何在一起。' }],
      desc: 'Proximity',
      img: [{ url: proximityImg }],
      imgPosition: 'left',
      children: [
        {
          title: '间距组织',
          content: [{
            text: '【布局】',
            weight: 600
          }, { text: '纵向上通过8px（小型间距）、16px（中型间距）、24px（大型间距）三种规格来划分信息层次，在三种规格不适用的情况下，可以通过加减8px的倍数来拉开信息层次。' }, { text: '横向上为了适用不同尺寸的屏幕，采用栅格布局来排布组件，从而保证布局的灵活性。' }],
          img: [{ url: proximityImg1 }],
          imgPosition: 'right',
        },
        {
          content: [{ text: '【组件】', weight: 600 }, { text: '在各个组件内部，元素的横纵向间距也应该有所区分。' }],
          img: [{ url: proximityImg5, desc: '复选框排列' }],
          imgPosition: 'right',
        },
        {
          title: '形式组织',
          content: [{ text: '【形状】', weight: 600 }, { text: '如果其它因素相同，那么相似的物体看起来归属于一组。因此在同一组织的信息中，文字以及图标大小都应统一。' }],
          img: [{ url: proximityImg2, desc: '形式组织示例' }],
          imgPosition: 'right',
        },
        {
          content: [{ text: '【颜色】', weight: 600 }, { text: '在形状大小相同时，颜色的统一也会影响信息的组织性，并且颜色权重大于形状。' }],
          img: [{ url: proximityImg3, desc: '颜色组织示例' }],
          imgPosition: 'right',
        },
        {
          title: '视觉分割',
          content: [{ text: '【元素】', weight: 600 }, { text: '增加元素来拉开信息层次。' }],
          img: [{ url: proximityImg4, desc: '元素分割示例' }],
          imgPosition: 'right',
        },
        {
          content: [{ text: '【卡片式】', weight: 600 }, { text: '信息卡片化，卡片边界就是天然的分割线。' }],
          img: [{ url: proximityImg6, desc: '卡片式示例' }],
          imgPosition: 'right',
        },
        {
          content: [
            { text: '【留白】', weight: 600 },
            { text: '使界面更吸引人、更简洁。更有呼吸感，让内容主体更突出。', margin: '0 0 20px' },
            { text: '【颜色界定】', weight: 600 },
            { text: '利用颜色的不同来界定界面范围。' }
          ],

        },

      ]
    },
    hierarchy: {
      title: '层级性',
      content: [{ text: '在不同元素之间建立一种层次结构，可以帮助用户更好的理解接受界面信息，这种层次性可以通过增强元素之间的对比来实现。' }],
      desc: 'Hierarchy',
      img: [{ url: hierarchyImg }],
      imgPosition: 'left',
      children: [
        {
          title: '大小区分',
          content: [{ text: '通过调整区块和元素排版、大小等方式来突出层次感，提高页面的易读性和节奏感。' }],
          img: [{ url: hierarchyImg1, desc: '在整体布局中，通过卡片大小的变化，来区分信息传达的重点' }],
          imgPosition: 'right',
        },
        {
          title: '加强对比',
          content: [{ text: '加强对比效果，强化重点项或者弱化其他项，让用户能在操作上快速判断出重要信息。' }, {
            text: '注：在一些需要用户慎重决策的场景中，也可以通过适当加入对比，使得用户可以第一时间接收分辨信息。',
            size: '12px',
            color: '#92939e',
            margin: '10px 0 0 '
          }],
          img: [{ url: hierarchyImg2, desc: '例如，表格筛选时，筛选选中项就要区分其他选项' }],
          imgPosition: 'right',
        },
        {
          title: '状态区分',
          content: [
            { text: '下拉状态，示意用户下步操作。' },
            { text: '【静态区分】', weight: 600 },
            { text: '通过对元素形状、颜色的改变等方法来实现状态层级的区分。' },
            { text: '【动态区分】', margin: '10px 0 0', weight: 600 },
            { text: '可以通过加入动效效果，以便用户更好的了解自己处于何种状态。' }
          ],
          img: [{ url: hierarchyImg3, desc: '静态下，用不同颜色点区分信息状态；光标悬停时，该项出现' }],
          imgPosition: 'right',
        },

      ]
    },
    feedback: {
      title: '反馈',
      content: [{ text: '在用户与界面发生交互行为时，页面要给予用户及时的反馈。避免让使用者进行没有必要的思考，并且让使用者有明确的方向感。' },
        {
          text: '方向感：让用户无须思考就能得到一下信息：“我在页面的什么位置，这个页面上的重要信息是什么。我可以随时找回刚才的数据，我明确下一步要做什么。”',
          size: '12px',
          color: '#92939e',
          margin: '10px 0 0 '
        }
      ],
      desc: 'Feedback',
      img: [{ url: feedbackImg }],
      imgPosition: 'left',
      children: [
        {
          title: 'Button',
          content: [
            { text: '1.如果某个操作非常重要，就应该把它放在界面中，并实时可见。' },
            { text: '2.当用户与Button发生交互行为，button要给予相应的反馈。' },
            { text: '3.每个页面仅使用一种主要按钮。不能同时使用多个，除非有一个很好的理由。比如：强调某一种功能。' },
            { text: '常规状态：设计要点，常规状态下的按钮，务必要看起来也像个按钮。', size: '12px', color: '#92939e', margin: '10px 0 0 ' },
            {
              text: '焦点状态：提供一个感觉良好的视觉反馈。可以尝试一些视觉愉悦的状态切换动效。',
              size: '12px',
              color: '#92939e'
            },
            {
              text: '按下状态：可以加一些有实质用途的动效，同时达到令人愉悦的效果。',
              size: '12px',
              color: '#92939e'
            },
            { text: '不激活状态：分两种直接隐藏，或以不可点形式展示。各有利弊，按需选择。', size: '12px', color: '#92939e' },
          ],
          img: [{ url: feedbackImg1 }],
          imgPosition: 'right',
        },
        {
          title: '弹窗',
          content: [
            { text: '1.当用户与软件发生行为时，部分可视区域可用弹窗形式给予反馈，在需要弹窗提示交互行为时候，应在设计上减轻弹窗比例。如果页面内容多到需要滚动，则建议改为跳转。' },
            { text: '2.弹窗的关闭方式应该是多元的，而不仅仅是右上角的关闭。比如：点击任意弹窗外空间，都可进行关闭。' },
            { text: '3.弹窗里不可有链接，不可进行页面跳转。' }
          ],
          img: [{ url: feedbackImg2, desc: '点击任意弹窗外空间，都可进行关闭' }],
          imgPosition: 'right',
        },
        {
          title: '可视区域 ≠ 可点击区域',
          content: [
            { text: '在使用Table时，文字链的点击范围受到文字长短影响，可以设置整个单元格为热区，以便用户触发。' },
            { text: '当需要增强按钮的响应性时，可以通过增加用户点击热区的范围，而不是增大按钮形状，从而增强响应性，又不缺失美感。' },
          ],
          img: [{ url: feedbackImg3, desc: '增加热区示例' }],
          imgPosition: 'right',
        },
        {
          title: 'Tooltip（文字提示）',
          content: [
            { text: '提示文字很少时。如果一个按钮、标签、icon没什么必要为其写上说明文字，只需要简短说明一下即可。那么tooltip合适。' },
            { text: '只用于提供辅助文字。不可用于必要文字、主要任务。如果该段文字是必须要有的，那直接写上去，别让用户可哪找。' },
            { text: '谨慎使用在极少使用的功能上。为了不打断主要用户操作流程。也以防用的频率太少了，用户会忘记咋回事。' },
          ],
          img: [{ url: feedbackImg4 }],
          imgPosition: 'right',
        },
        {
          title: '表格反馈',
          content: [
            { text: '增加对象：在列表/表格中，新增了一个对象。在新增对象后，有几秒的高亮提示，告知用户这是新增项。' },
            { text: '新增一条对象时，该字段“高亮”告知用户该新增项，几秒后高亮消失。', size: '12px', color: '#92939e', margin: '10px 0 0' },
          ],
          img: [{ url: feedbackImg5, desc: '对象添加示例' }],
          imgPosition: 'right',
        },
        {
          content: [
            { text: '删除对象：在列表/表格中，删除对象同时有几秒的过渡效果，给用户接受信息删除的反馈时间。' },
            { text: '删除一条对象，以从左到右擦出动画删除该字段。', size: '12px', color: '#92939e', margin: '10px 0 0' },
          ],
          img: [{ url: feedbackImg6, desc: '对象删除示例' }],
          imgPosition: 'right',
        },
        {
          content: [
            { text: '更改对象：在列表/表格中，更改了一个对象的同时出现了高亮提示，表明该对象发生了修改。' },
            {
              text: '在用户点击更改字段时，该字段给予显示框提示，更改完成后，给予数据几秒钟高亮显示，点击任意地点可确认更改项。',
              size: '12px',
              color: '#92939e',
              margin: '10px 0 0'
            },
          ],
          img: [{ url: feedbackImg7, desc: '对象更改示例' }],
          imgPosition: 'right',
        },
        {
          content: [
            { text: '呼出对象：点击页面中元素，呼出一个新对象。' },
            { text: '呼出地方多以弹窗样式展示。', size: '12px', color: '#92939e', margin: '10px 0 0' },
          ],
          img: [{ url: feedbackImg8, desc: '呼出对象示例' }],
          imgPosition: 'right',
        },

      ]
    },
    guide: {
      title: '引导',
      content: [{ text: '引导就是用户进入下一个交互层次的提醒和暗示，利用这些提示方式可以使用户在短时间内理解计算机可进行的交互性行为，使人机交互过程更佳自然、顺畅。' },
        {
          text: '当用户对界面进行交互行为时，会有很多的功能不易于发现（或不易于适用），所以利用界面引导来解决交互功能布局问题。',
          size: '12px',
          color: '#92939e',
          margin: '10px 0 0 '
        }
      ],
      desc: 'Guide',
      img: [{ url: guideImg }],
      imgPosition: 'left',
      children: [
        {
          title: '静态引导',
          content: [
            { text: '指通过可视化技术在页面上提供引导交互的邀请。' },
            { text: '文字引导，告知用户接下来要做的事情。' },
          ],
          img: [{ url: guideImg1, desc: '文本引导示例' }],
          imgPosition: 'right',
        },
        {

          content: [
            { text: '利用图片引导，让用户感知接下来要进行的行为。' },
          ],
          img: [{ url: guideImg2, desc: '图片类示例' }],
          imgPosition: 'right',
        },
        {
          content: [
            { text: '当录入信息时，给予与信息的引导提醒，避免反馈。' },
          ],
          img: [{ url: guideImg3, desc: '信息提示性引导示例' }],
          imgPosition: 'right',
        },
        {

          content: [
            { text: '利用录入框的尺寸，让用户感知自己所录入信息的数量。' },
          ],
          img: [{ url: guideImg4, desc: '窗口引导示例' }],
          imgPosition: 'right',
        },
        {
          title: '动态引导',
          content: [
            { text: '指通过可视化技术在页面上提供引导交互的邀请。' },
            { text: '鼠标悬停提示，让用户感知到计算机能读懂你所发生的行为。' },
          ],
          img: [{ url: guideImg5, desc: '鼠标悬停示例' }],
          imgPosition: 'right',
        },
        {
          content: [
            { text: '用户与计算机产生交互动作时，计算机需要判断用户接下来的行为。常用于登陆注册引导性' },
          ],
          img: [{ url: guideImg6, desc: '预见性引导示例' }],
          imgPosition: 'right',
        },
        {
          content: [
            { text: '当用户停留到当前页面，如果有后续页面，用户有需要知道的权利。' },
          ],
          img: [{ url: guideImg7, desc: '后续内容引导示例' }],
          imgPosition: 'right',
        },

      ]
    },
    accessibility: {
      title: '易用性',
      content: [{ text: '“不用思考，因为我都帮你想好了”这是lugia设计原则的重要原则之一。尽可能事先排除一切不必要的干扰和噪声，让用户能够专注、有效率地达成他们使用产品的目的，进而得到一个愉快的使用体验。' }
      ],
      desc: 'Accessibility',
      img: [{ url: accessibilityImg }],
      imgPosition: 'left',
      children: [
        {
          title: '减少肢体性',
          content: [
            { text: '【热键操作】', weight: 600 },
            { text: '让使用者以最少的按钮操作，就能快速找到需要的信息。' },
            { text: '【减少距离】', weight: 600 },
            { text: '尽量把相关的选项放在接近的位置，以减少光标移动的距离。' },
          ],
          img: [{ url: accessibilityImg1, desc: '减少距离示例' }],
          imgPosition: 'right',
        },
        {

          content: [
            { text: '【减少操作情况】', weight: 600 },
            { text: '减少可能出现的操作情况。' },
            { text: '副选单维持开放的条件：', margin: '10px 0 0 ' },
            { text: '其一是使用者的游标，必须朝着副选单的方向行进。', size: '12px', color: '#92939e' },
            { text: '其二是游标速度，必须维持在特定的最低限速之上。', size: '12px', color: '#92939e' },
          ],
          img: [{ url: accessibilityImg2 }],
          imgPosition: 'right',
        },
        {
          title: '提高理解性',
          content: [
            { text: '【文案理解】', weight: 600 },
            { text: '尽量选择熟悉的词汇，避免让用户做没必要的思考。' },
          ],
          img: [{ url: accessibilityImg3, desc: '文案理解示例' }],
          imgPosition: 'right',
        },
        {
          content: [
            { text: '【折叠窗口】', weight: 600 },
            { text: '在视图切换时，有助于保持信息的连贯性，同时也能拓展虚拟空间。' },
          ],
          img: [{ url: accessibilityImg4, desc: '折叠窗口示例' }],
          imgPosition: 'right',
        },
        {
          content: [
            { text: '【形成组块】', weight: 600 },
            { text: '“形成组块”是一种提升短期和长期记忆效能的技巧，也就是把一长串的资讯分成小组，借此方便使用者辨识与记忆，对页面结构和信息层次一目了然。' },
          ],
          img: [{ url: accessibilityImg5, desc: '形成组块示例' }],
          imgPosition: 'right',
        },
        {
          title: '直接拖放',
          content: [
            { text: '【制定常用功能】', weight: 600 },
            { text: '板块顺序是可以根据自身喜好自定义的，包括定义常用的应用、排序、删除、新增等等；这样用户可以根据自己的习惯定制自己适合的板块分布方式。' },
            { text: '注：此功能在区块之间、区块内部组件之间可以拖放，区块组件内部与区块组件内部之间不可调换位置。', size: '12px', color: '#92939e', margin: '10px 0 0' },
          ],
          img: [{ url: accessibilityImg6, desc: '移动版块示例' }],
          imgPosition: 'right',
        },
        {
          content: [
            { text: '【组件内部拖放】', weight: 600 },
            { text: '列表拖放，限一个维度（上/下或者左/右）进行拖放。' },
          ],
          img: [{ url: accessibilityImg7, desc: '组件内部拖放示例' }],
          imgPosition: 'right',
        },
        {
          content: [
            { text: '【拖拽与button结合】', weight: 600 },
            { text: '常用于空间较少，页面设计简洁，但重点相对较弱的时候。' },
          ],
          img: [{ url: accessibilityImg8, desc: '拖拽与button结合示例' }],
          imgPosition: 'right',
        },

      ]
    },
    reduceskip: {
      title: '减少跳转',
      content: [{ text: '当页面跳转时候，容易打断用户注意力，引起视觉盲视，因此能在一个页面上解决的问题，就在一个页面上面解决，从而减少页面跳转的频率。' }
      ],
      desc: 'Reduce skip',
      img: [{ url: reduceskipImg }],
      imgPosition: 'left',
      children: [
        {
          title: '防呆装置',
          content: [
            { text: '防呆装置（Fool-proofing）是一种预防矫正的行为约束手段，运用避免产生错误的限制方法。' },
            { text: '【撤销/重做】', weight: 600, margin: '10px 0 0' },
            { text: '允许用户犯错，采用悬浮层方式避免打断用户心流。' },
          ],
          img: [{ url: reduceskipImg1, desc: '撤销示例' }],
          imgPosition: 'right',
        },
        {
          content: [
            { text: '【再次确认】', weight: 600, margin: '20px 0 0' },
            { text: '在无法实现撤销操作时，增加操作步骤，减少失误发生的可能性。' },
            { text: '注意悬浮层错开需要删除的选项，使上下文连贯。', size: '12px', color: '#92939e', margin: '10px 0 0' },
          ],
          img: [{ url: reduceskipImg2, desc: '再次确认示例' }],
          imgPosition: 'right',
        },

        {
          title: '补充说明',
          content: [
            { text: '【详情悬浮态】', weight: 600 },
            { text: '一般在列表中，通过用户『悬停』/『点击』某个区块，在当前页加载该条列表项的更多详情信息。' },
          ],
          img: [{ url: reduceskipImg3, desc: '详情悬浮示例' }],
          imgPosition: 'right',
        },
        {
          content: [
            { text: '【列表下拉态】', weight: 600 },
            { text: '在列表中，显示某条列表项的详情信息，保持上下文不中断。' },
          ],
          img: [{ url: reduceskipImg4, desc: '列表下拉示例' }],
          imgPosition: 'right',
        },
        {
          title: '输入编辑',
          content: [
            { text: '【单字段行内编辑】', weight: 600 },
            { text: '当『读取』远比『编辑』重要时，可以使用『单击编辑』。' },
          ],
          img: [{ url: reduceskipImg5, desc: '单击编辑示例' }],
          imgPosition: 'right',
        },
        {
          content: [
            { text: '当『读取』为主，同时又要突出『编辑』操作时，可使用『文字链/图标编辑』。' },
          ],
          img: [{ url: reduceskipImg6, desc: '文字链/图标示例' }],
          imgPosition: 'right',
        },
        {
          title: '输入编辑',
          content: [
            { text: '【多字段行内编辑】', weight: 600 },
            { text: '扩大空间来进行多行编辑。' },
          ],
          img: [{ url: reduceskipImg7, desc: '多字段行内示例' }],
          imgPosition: 'right',
        },
        {
          content: [
            { text: '【输入覆盖层】', weight: 600 },
            { text: '在覆盖层上，让用户直接进行少量字段的输入。' },
          ],
          img: [{ url: reduceskipImg8, desc: '输入覆盖层示例' }],
          imgPosition: 'right',
        },

      ]
    },
    layout: {
      title: '布局',
      content: [{ text: '空间布局是体系化视觉设计的起点和传统的平面设计不同之处在于UI界面的布局空间要基于“动态、体系化”的角度出发展开。' },
        { text: 'Lugia受到建筑界大师柯布西耶的模度思想的启发，基于“秩序之美”的原则，探索UI设计中的动态空间秩序，形成了Lugia的界面布局方式，为设计者构筑具备理性之美的布局空间创造了条件。' }
      ],
      desc: 'Layout',
      img: [{ url: layoutImg }],
      imgPosition: 'left',
      children: [
        {
          title: '左右布局的适配',
          content: [
            { text: '左右布局用于导航架构信息逻辑强的设计方案中，常见的做法是将左边的导航栏固定，对右边的工作区域进行动态缩放。' },
          ],
          img: [{ url: layoutImg1 }],
          imgPosition: 'right',
        },
        {
          title: '上下布局的适配',
          content: [
            { text: '上下布局常用于页面出现多个图表信息，需要以图表为主要目标查看时，做法是将左边导航栏固定，对右边的工作区域进行动态缩放。' },
          ],
          img: [{ url: layoutImg2 }],
          imgPosition: 'right',
        },

        {
          title: '左中右布局的适配方案',
          content: [
            { text: '左中右布局常用于多个功能栏状态时布局。做法是将左、右两边的导航栏固定，对中间的工作区域进行动态缩放' },
          ],
          img: [{ url: layoutImg3 }],
          imgPosition: 'right',
        },
        {
          title: '分屏布局适配方案',
          content: [
            { text: '分屏布局常用于对主要信息页面进行对比查看分析时，做法是将顶部导航栏进行固定，对中间两个工作区域进行动态缩放。' },
          ],
          img: [{ url: layoutImg4 }],
          imgPosition: 'right',
        },
        {
          title: '关于栅格',
          content: [
            { text: '依据中后台业务信息量大、信息分组较多、单个盒子内信息体积较小的中后台页面设计特点；Lugia采用24栅格体系，相对12栅格系统，24栅格系统变化更加灵活，更适合内容比较多样复杂的场景。' },
          ],
          img: [{ url: layoutImg5 }],
          imgPosition: 'bottom',
        },
        {
          title: '可以被8整除',
          content: [
            { text: '对于目前市场桌面设备屏幕而言，4是整除率最高的一个原子，接下来依次是8、10、6、12。但4作为基本原子实在过于小了，太小的步进单位将导致决策成本的增加，因为将元素间距增加4px或者减小4px视觉感受到的差异并不明显， 而在剩下的6、8、10、12四个单位中，8的整除率最高（80%），以8像素作为一个步进单位的变化，视觉上也可以感受到较为明显的差异，因此Lugia选取整除率最高的8做为栅格系统的原子单位。' },
          ],

        },

      ]
    },
    pattern: {
      title: '样式',
      content: [{ text: '样式决定了页面的品质。' },
        { text: '要达到视觉性的精致，重点在于编辑样式，也就是在设计的过程中，要不断地挑战每一个视觉元素的正常性和必要性。lugia在视觉上制定了一套统一的样式规范。', margin: '20px 0 0' }
      ],
      desc: 'Pattern',
      img: [{ url: patternImg }],
      imgPosition: 'left',
      children: [
        {
          title: '色彩规律',
          content: [
            { text: 'Lugia的设计团队倾向于采用 HSB 色彩模型进行统一色彩规律的制定。' },
            { text: '注：主题色建议选取“S”值和“B”均大于等于20%的颜色。', size: '12px', color: '#92939e', margin: '20px 0 0' },
          ],
          img: [{ url: patternImg1 }],
          imgPosition: 'right',
        },
        {
          title: '色彩类别',
          content: [
            { text: 'Lugia选取一种主题色，其他为辅色，功能上建议划分为5种颜色：' },
            { text: '·Primary Color(主题色)', size: '12px', color: '#92939e', margin: '20px 0 0' },
            { text: '·Success Color(成功色)', size: '12px', color: '#92939e' },
            { text: '·Warning Color(警示色)', size: '12px', color: '#92939e' },
            { text: '·Danger Color(危险色)', size: '12px', color: '#92939e' },
            { text: '·Black Color(黑色)', size: '12px', color: '#92939e' },
          ],
          img: [{ url: patternImg2 }],
          imgPosition: 'right',
        },
        {
          title: '中性色',
          content: [
            { text: '基于页面颜色丰富程度的同时，还需要增加中性色的体现。因为合理的选择中性色能够令页面信息具备良好的主次关系，助力阅读体验。Lugia为用户设定的中性色效果体验如下：' },
            { text: '·背景灰：用作底色背景。', size: '12px', color: '#92939e', margin: '20px 0 0' },
            { text: '·辅助灰：用作分割线/边界线/斜线等。', size: '12px', color: '#92939e' },
            { text: '·浅灰：用作辅助性文字、阴影。', size: '12px', color: '#92939e' },
            { text: '·中灰：用作次标题、正文。', size: '12px', color: '#92939e' },
            { text: '·深灰：用作主标题、深色背景。', size: '12px', color: '#92939e' },
          ],
          img: [{ url: patternImg3 }],
          imgPosition: 'right',
        },
        {
          title: '阴影',
          content: [
            { text: 'Lugia遵循半扁平化风格，统一模块化阴影效果。在阴影上设计效果如下：' },
            { text: '·微弱：表示一些交互组件Z轴升高，增加可用性。', size: '12px', color: '#92939e', margin: '20px 0 0' },
            { text: '·明显：表示组件的hover状态。', size: '12px', color: '#92939e' },
            { text: '·远处阴影：用于弹窗。', size: '12px', color: '#92939e' },
          ],
          img: [{ url: patternImg4 }],
          imgPosition: 'right',
        },
        {
          title: '圆角',
          content: [
            { text: '基于人类视网膜对大自然形体的认知。巴罗（Barrow）神经学研究所完成的关于“角（corners）“的科学研究发现。”角的突显性感知与角的度数的线性变化，锐角比顿角产生更强的虚幻的突显性”。' },
            { text: 'Lugia基于人类的生态特征，将圆角的规整运用到模块中。', margin: '20px 0 0' },
            { text: '·4px：通用组件中。', size: '12px', color: '#92939e', margin: '20px 0 0' },
            { text: '·全圆角：特殊组件情况。', size: '12px', color: '#92939e' },
          ],
          img: [{ url: patternImg5 }],
          imgPosition: 'right',
        },


      ]
    },
    color: {
      title: '色彩',
      content: [{ text: 'Lugia色彩上相对于其他的组件风格，为了让用户能够最直观的感受颜色变化，使用者可以直接选取模块进行操作。' },
        { text: '而在配色方案中，我们追求自然的美，将自然界中变化运用到组件的配色中。', margin: '20px 0 0' },
      ],
      desc: 'Color',
      img: [{ url: colorImg }],
      imgPosition: 'left',
      children: [
        {
          colorTheme: [
            {
              name: '爱丽丝',
              pantone: imgAlice,
              theme: imgThemeAlice
            },
            {
              name: '白日梦',
              pantone: imgDream,
              theme: imgThemeDream
            },
            {
              name: '冰寒',
              pantone: imgBinghan,
              theme: imgThemeBinghan
            },
            {
              name: '冰晶',
              pantone: imgBingjing,
              theme: imgThemeBingjing
            },
            {
              name: '冰与火',
              pantone: imgBinghuo,
              theme: imgThemeBinghuo
            },
            {
              name: '光纤',
              pantone: imgGuangxian,
              theme: imgThemeGuangxian
            },
            {
              name: '朝霞',
              pantone: imgZhaoxia,
              theme: imgThemeZhaoxia
            },
            {
              name: '恒星',
              pantone: imgHengxing,
              theme: imgThemeHengxing
            },
            {
              name: '彗星',
              pantone: imgHuixing,
              theme: imgThemeHuixing
            },
            {
              name: '火绒',
              pantone: imgHuorong,
              theme: imgThemeHuorong
            },
            {
              name: '极光',
              pantone: imgJiguang,
              theme: imgThemeJiguang
            },
            {
              name: '科技蓝',
              pantone: imgKejilan,
              theme: imgThemeKejilan
            },
            {
              name: '科学',
              pantone: imgScience,
              theme: imgThemeScience
            },
            {
              name: '融雪',
              pantone: imgRongxue,
              theme: imgThemeRongxue
            },
            {
              name: '苔藓',
              pantone: imgTaixian,
              theme: imgThemeTaixian
            },
            {
              name: '温暖',
              pantone: imgWarm,
              theme: imgThemeWarm
            },
            {
              name: '幸运红',
              pantone: imgLucky,
              theme: imgThemeLucky
            },
            {
              name: '氤氲',
              pantone: imgYinyun,
              theme: imgThemeYinyun
            },
            {
              name: '庄园',
              pantone: imgManor,
              theme: imgThemeManor
            },
            {
              name: '紫罗兰',
              pantone: imgViolet,
              theme: imgThemeViolet
            },
            {
              name: '自然',
              pantone: imgNature,
              theme: imgThemeNature
            },

          ],
        },

      ]
    },
    font: {
      title: '字体',
      content: [{ text: '字体是界面设计中最基本的构成元素之一。Lugia字体方案，是根据人眼阅读习惯，清晰页面的视觉层次，我们建议所选字体要满足以下三个方面：' },
        { text: '·合理的使用不同的字重、字号和颜色；' },
        { text: '·尽量使用统一字体；' },
        { text: '·遵循 WCAG 2.0 标准，字体在使用时与背景颜色的对比值满足无障碍阅读的最低标准。' },
      ],
      desc: 'Font',
      img: [{ url: fontImg }],
      imgPosition: 'left',
      children: [
        {
          title: '字体使用建议',
          content: [
            { text: '中文字体优先级：PingFang SC、Hiragino Sans GB 、Microsoft YaHei' },
          ],
          img: [{ url: fontImg4 }],
          imgPosition: 'bottom',
        },
        {
          content: [
            { text: '英文字体优先级：Helvetica Neue、Helvetica、Arial', margin: '20px 0 0' },
          ],
          img: [{ url: fontImg5}],
          imgPosition: 'bottom',
        },
        {
          title: '字号',
          content: [
            { text: '文字的大小规范，关系着整个界面的统一性、协调性。在Lugia的视觉体系中，我们建议的主要字号为14px。其余的字号的选择可根据具体情况进行自由的定义。建议在一个系统设计中（展示型页面除外），字阶的选择尽量控制在 3-5 种之间。' },
          ],
          img: [{ url: fontImg1 }],
          imgPosition: 'bottom',
        },
        {
          title: '行高',
          content: [
            { text: '行高也是影响用户阅读体验的重要因素之一，查阅资料得知西文的基本行高通常是字号的 1.2em 左右，而中文因为字符复杂，所以中文行高需要更大。现在公认1.5em 至 1.8em 之间会有一个比较好的视觉阅读效果，考虑一些场景数据信息量过大的情景，lugia选择了1.5em行距' },
            { text: 'LUGIA行高计算公式：行高值=字号 x 1.5。例如：12 号字体的行高为 18px，14 号字体的行高为 22px。' },

          ],
          img: [{ url: fontImg2, desc: '注：因适配开发的原因，字号和行高只能定为偶数。' }],
          imgPosition: 'bottom',
        },
        {
          title: '字重',
          content: [
            { text: '字重的选择同样基于易读、稳定、克制的原则。多数情况下，只出现 regular 以及 medium 的两种字体重量，分别对应代码中的 300 和 500。' },
            { text: '在英文字体加粗的情况下会采用 semibold 的字体重量，对应代码中的 600。', margin: '20px 0 0' },
          ],
          img: [{ url: fontImg6}],
          imgPosition: 'bottom',

        },
        {
          title: '颜色比例',
          content: [
            { text: '文本颜色如果和背景颜色太接近就会难以阅读。考虑到无障碍设计的需求，我们参考   遵循 WCAG 2.0 标准（标准详情见 https://www.w3.org/Translations/WCAG20-zh/#visual-audio-contrast），将正文文本、标题和背景色之间保持在了 7:1 以上的 AAA 级对比度。' },
          ],
          img: [{ url: fontImg3 }],
          imgPosition: 'bottom',
        },

      ]
    },
    icon: {
      title: '图标',
      content: [{ text: '图标是一种抽象的、跨语言的符号，随着信息传播速度和载体的快速增长，图标代替或辅助文字信息向用户更一致、高效、具象地理解信息。' },
        { text: 'Lugia的图标在设计和使用时遵循以下三个原则点：' },
        { text: '表意清晰;', margin: '0 0 0 10px' },
        { text: '一致性强;', margin: '0 0 0 10px' },
        { text: '易于扩展。', margin: '0 0 0 10px' },
      ],
      desc: 'Icon',
      img: [{ url: iconImg }],
      imgPosition: 'left',
      children: [
        {
          title: '表意清晰',
          content: [
            { text: '在设计图标时，不仅要针对单个图标思考，更要把图标作为界面中的一部分，结合当前场景进行考虑，在当前场景/界面中，图标是否满足清晰表义的要求。' },
            { text: '特殊的情景下，图标可能还需要结合文字，作为一种辅助信息，目的都是帮助信息更清晰地传达给用户。' },
          ],
          img: [{ url: iconImg1, desc: '不同的颜色对图标含义的影响' }],
          imgPosition: 'right',
        },
        {
          title: '一致性强',
          content: [
            { text: '界面中的图标一般是成系列的设计，除了视觉风格和特征保持一致以外，在同一产品内，同样的功能和信息图标应也保持一致的形态，避免用户产生疑惑。' },
          ],
          img: [{ url: iconImg2, desc: 'Lugia方向图标' }],
          imgPosition: 'right',
        },
        {
          title: '易于扩展',
          content: [
            {
              text: '随着业务和功能的变化，在产品发展过程中很可能需要扩展图标库，这就要求我们在最初设计图标时应定义好视觉特征与延展规则，让图标易于在原有设计上进行扩展，使得设计可延续。',
              margin: '0 0 26px '
            },

          ],
        },
        {

          content: [
            { text: '·制定尺寸规范', weight: 600 },
            {
              text: '这套参考线是根据1024*1024尺寸绘制。方形和圆形采用同样的尺寸，由于方形的面积比圆形大，在视觉上，方形会比圆形显大，为了达到视觉上的统一，相对缩小图标方形尺寸的面积。',
              url: iconImg3,
              margin: '0 0 26px'
            },
          ],
          img: [{ url: iconImg4, desc: '网格和关键轮廓线' }],
          imgPosition: 'right',
        },
        {

          content: [
            { text: '·统一粗细/圆角', weight: 600, margin: '26px 0 0' },
            { text: 'Lugia采用统一的标准，线条粗细为72px。外轮廓线统一半径为 72px 的圆角，icon 内部空间的边角保持直角，笔画的终端为圆角。' },
          ],
          img: [{ url: iconImg5, desc: '统一粗细/圆角' }],
          imgPosition: 'right',
        },

      ]
    },
    lugia:{
      type:'document',
      title: 'Lugia Web of React',
      content: [{ text: '一套基于 Lugia Design 的高品质 React 组件库，满足中后台业务高性能组件的需求，适用于 Web 端。', margin: '0 0 30px'}],
      children: [
        {
          img: [{ url: introduce }],
          imgPosition: 'left',

        },
        {
          title:'特性',
          content: [
            { text: '多端统一' },
            { text: '整体开发风格统一', margin: '12px 20px' },
            { text: 'API接口设计统一' , margin: '12px 20px'},
            { text: '多端统一的样式语法，放弃CSS标准', margin: '12px 20px' },
            { text: '轻量化数据处理' , margin: '12px 0' },
            { text: '开箱即用，使用方便' , margin: '12px 0'},
            { text: '性能稳定，功能强大，测试覆盖率高达90%' , margin: '12px 0 30px'},
          ],

        },
        {
          title: '支持环境',
          content: [
            { text: '现代浏览器和 IE10 及以上' },
            { text: '支持服务端渲染', margin: '12px 0 30px'},
          ]
        },
        {
          title: '版本',
          content: [
            { text: '稳定版：', margin: '12px 0 0', inline:true },
            { text: `[1.1.2]` ,link:'https://www.npmjs.com/package/@lugia/lugia-web', inline:true, margin: '0 0 30px' },
          ]
        },
        {
          title: '安装',
          content: [
            { text: '我们推荐使用 npm 或 yarn 来进行安装，不仅方便，也可放心在生产环境打包部署。' },
            { text: '安装之前，你需要安装 ', inline:true },
            { text: `[nrm]` ,link:'https://www.npmjs.com/package/nrm', inline:true },
            { text: '来管理你的 `npm` 源信息。',  inline:true },
            {text:'安装\n' +
              '  $ npm install -g nrm\n' +
              '查看版本\n' +
              '  $ nrm -V',bash:true, margin: '0 0 30px',javascript:true},
            { text: '安装成功后，你需要配置 `lugia` 私服：' },
            {text:'  $ nrm add lugia http://192.168.102.79:5001/\n' +
              '  $ nrm use lugia\n' +
              '  $ nrm ls',bash:true, margin: '0 0 30px',javascript:true},
            { text: '运行完命令后，你会看到，`npm` 源指向了 `lugia`。' },
            {text:'  npm ---- https://registry.npmjs.org/\n' +
              '  cnpm --- http://r.cnpmjs.org/\n' +
              '  taobao - https://registry.npm.taobao.org/\n' +
              '  nj ----- https://registry.nodejitsu.com/\n' +
              '  rednpm - http://registry.mirror.cqupt.edu.cn/\n' +
              '  npmMirror  https://skimdb.npmjs.com/registry/\n' +
              '  edunpm - http://registry.enpmjs.org/\n' +
              '* lugia -- http://192.168.102.79:5001/',bash:true, margin: '0 0 30px',javascript:true},
            { text: '这样，你就可以尽情享用 `lugia-web` 了。' },
            {text:'  $ npm install @lugia/lugia-web --save\n' +
              '  $ yarn add @lugia/lugia-web\n',bash:true, margin: '0 0 30px',javascript:true},
          ]
        },
        {
          title: '示例',
          content: [
            {text:'  import { DatePicker } from \'@lugia/lugia-web\';\n' +
              '  ReactDOM.render(<DatePicker />, root);\n',bash:true, margin: '0 0 30px',javascript:true},
          ]
        },


      ]
    },
    'quick-start':{
      type:'document',
      baseUrl:'/component',
      title: '快速上手',
      content: [{ text: 'Lugia Web 旨在降低开发成本，提升开发质量，为前端开发人员赋能，让用户体验知性。', margin: '0 0 30px' }],
      children: [
        {
          title:'说在前面',
          content: [
            // { text: `在开始之前，我们推荐先学习[React](http://facebook.github.io/react/) 和 [ES2015](https://babeljs.io/docs/en/learn),并且配置了 [Node.js](https://nodejs.org/en/) v8 版本及以上。\n' +
            //   '如果你刚开始学习前端或者 React，将 UI 框架作为你的第一步可能不是最好的主意。` },
            { text: `在开始之前，我们推荐先学习`, inline:true},
            { text: `[React]` ,link:'http://facebook.github.io/react/', inline:true},
            { text: `和` , inline:true},
            { text: `[ES2015]` ,link:'https://babeljs.io/docs/en/learn', inline:true},
            { text: `并且配置了` , inline:true},
            { text: `[Node.js]` , link:'https://nodejs.org/en/', inline:true},
            { text: ` v8 版本及以上。` , inline:true},
            { text: `如果你刚开始学习前端或者 React，将 UI 框架作为你的第一步可能不是最好的主意。` , margin: '0 0 30px', inline:true},
          ],
        },
        {
          title: '创建一个本地实例',
          content: [
            { text: '项目开发过程中，你会需要对 ES2015 和 jsx 的代码的构建、调试、打包部署等一系列需求。我们为此提供了 lugia-mega(一个基于前端物料库体系的可视化开发工具)，\n' +
              '下面我们用实例来进行说明。', margin: '0 0 30px'},
          ]
        },
        {
          title: '1.安装脚手架工具',
          content: [
            {text:'安装\n' +
              '$ yarn global add @lugia/mega\n' +
              '\n' +
              '查看版本\n' +
              '$ mega -V\n' +
              '1.0.3\n' +
              '\n' +
              '帮助\n' +
              '$ mega -h',bash:true, margin: '0 0 30px',javascript:true}
          ]
        },
        {
          title: '2.创建一个项目',
          content: [
            {text:'初始化一个 react app\n' +
              '$ mega create <app-name> [scaffolding]\n' +
              '\n' +
              'Scaffolding\n' +
              '空值时会下载默认脚手架项目\n' +
              '\n' +
              ' lugiax\n' +
              'Use @lugia/lugiax、@lugia/lugia-web、@lugia/lugiax-router\n' +
              '\n' +
              ' dva\n' +
              'Use <a href="https://github.com/dvajs/dva">[dva]</a>\n' +
              '\n' +
              ' cra\n' +
              'create-react-app',bash:true, margin: '0 0 30px',javascript:true,renderHtml:true},

          ]
        },

        {
          title: '下面我们来安装脚手架',
          content: [
            { text: '安装', bash:true,weight: 600},
            { text: '$ yarn global add @lugia/mega', bash:true,javascript:true},
            { text: '安装成功后，运行', bash:true,weight: 600},
            { text: 'mega create lugia-web-demo lugiax', bash:true,javascript:true},
            { text: '![安装成功](./img/create-app.png)', bash:true},
            { text: '到这里，一个了不起的项目已经安装成功了。', margin: '0 0 30px' ,bash:true},
          ]
        },
        {
          title: '3.使用组件',
          content: [
            { text: '脚手架会生成一个应用实例，我们可以先不使用它，先来试用我们的组件吧：' },
            { text: '可以用下面代码替换掉 `src/index.js` 的内容。', margin: '0 0 30px' },
            { text: 'import React from \'react\';\n' +
              'import ReactDOM from \'react-dom\';\n' +
              'import \'@lugia/lugia-web/dist/css/global.css\';\n' +
              'import { Button } from \'@lugia/lugia-web\';\n' +
              '\n' +
              'class App extends React.Component {\n' +
              '    render(){\n' +
              '        return (\n' +
              '            <div>\n' +
              '                <Button type="success">Success</Button>\n' +
              '            </div>\n' +
              '        );\n' +
              '    }\n' +
              '}\n' +
              '\n' +
              'ReactDOM.render(<App />, document.getElementById(\'root\'));', margin: '0 0 30px' ,bash:true,javascript:true},
            { text: '可以在组件库中试用更多组件。', margin: '0 0 30px' },
          ]
        },
        {
          title: '4.开发调试',
          content: [
            { text: '$ yarn start', bash:true,javascript:true},
            { text: '运行命令，在浏览器查看效果和调试。', margin: '0 0 30px' ,bash:true},
          ]
        },
        {
          title: '5.构建和部署',
          content: [
            { text: '$ yarn build',bash:true,javascript:true},
            { text: '打包后的文件会构建到 `dist` 目录中，可以自由部署到不同环境中。', margin: '0 0 30px' ,bash:true},
          ]
        },

      ]
    },
    'start-project':{
      type:'document',
      baseUrl:'/component',
      title: '项目实战',
      content: [{ text: '在复杂的项目中，你可能会用到 Redux 或者 dva 这样的数据流方案，同样，我们也推出了自己的状态管理工具 lugiax 来与 lugia-web 组件库\n' +
        '搭配使用，同样，我们也推荐你在项目使用 lugiax。',margin: '0 0 30px' }],
      children: [
        {
          title:'创建一个新应用',
          content: [
            {text: '让我们创建一个新目录来开始新的项目：' },
            {text: '首先，创建一个新目录，' , margin: '0 0 30px'},
            {text:'$ mkdir my-project\n' +
              '$ cd my-project',bash:true, margin: '0 0 30px',javascript:true},
            {text: '然后，使用 lugia-mega 来安装一个空的脚手架，' , margin: '0 0 30px'},
            {text:'$ mega create lugiax',bash:true, margin: '0 0 30px',javascript:true},
            {text: '安装完成后，你会看到如下代码，' , margin: '0 0 30px'},
            {text:'Success! Created lugiax at D:\\Work\\my-project\\lugiax\n' +
              'Inside that directory, you can run several commands:\n' +
              '\n' +
              '  yarn start\n' +
              '    Starts the development server.\n' +
              '\n' +
              '  yarn build\n' +
              '    Bundles the app into static files for production.\n' +
              '\n' +
              '  yarn test\n' +
              '    Starts the test runner.\n' +
              '\n' +
              'We suggest that you begin by typing:\n' +
              '\n' +
              '  cd D:\\Work\\my-project\\lugiax\n' +
              '  yarn start\n' +
              '\n' +
              'Happy hacking!',bash:true, margin: '0 0 30px',javascript:true},
            {text: '一个简单的脚手架，已经安装成功了！' },
            {text: '启动项目：' , margin: '0 0 30px'},
            {text:'## 运行\n' +
              '$ yarn start',bash:true, margin: '0 0 30px',javascript:true},
            {text: '在浏览器的 ' , inline:true },
            { text: `[http://localhost:8000]` ,link:'http://localhost:8000', inline:true },
            { text: '你会看到 mega 的欢迎界面。',  inline:true , margin: '0 0 30px'},
          ],
          img: [{ url: welcome }],
          imgPosition: 'bottom',
        },
        {
          title: '使用 lugia-web',
          content: [
            {text: '在使用 lugia-web 组件库之前，需要配置 `lugia.config.js`，来处理 lugia-web 的按需加载，配置如下：', margin: '0 0 30px'},
            {text:'export default {\n' +
              '  disableCSSModules: true,\n' +
              '  cssModulesWithAffix: true,\n' +
              '  publicPath: \'/\',\n' +
              '  extraBabelPlugins: [\n' +
              '    [\n' +
              '      \'import\',\n' +
              '      {\n' +
              '        libraryName: \'@lugia/lugia-web\',\n' +
              '        libraryDirectory: \'dist\'\n' +
              '      }\n' +
              '    ]\n' +
              '  ],\n' +
              '  applyWebpack(webpackConfig, { webpack, mega }) {\n' +
              '    return webpackConfig;\n' +
              '  }\n' +
              '};',bash:true, margin: '0 0 30px',javascript:true},
            {text: '由于，我们创建的是一个空的脚手架，所以配置完成后，需要安装 `babel-plugin-import` `lugia-web` `lugiax` `lugiax-router`，', margin: '0 0 30px'},
            {text:'$ yarn add babel-plugin-import\n' +
              '$ yarn add @lugia/lugia-web\n' +
              '$ yarn add @lugia/lugiax\n' +
              '$ yarn add @lugia/lugiax-router',bash:true, margin: '0 0 30px',javascript:true},

          ]
        },
        {
          title: '编写 Component',
          content: [
            {text: '我们先在 `src` 文件夹下创建 `component` 文件夹，并创建如下文件：', margin: '0 0 30px'},
          ],
          img: [{ url: component }],
          imgPosition: 'bottom',
        },
        {

          content: [
            {text: '代码为：'},
            {text: '##  nav-menu/index.js :', margin: '0 0 30px'},
            {text:'import React from \'react\';\n' +
              'import {Link} from \'@lugia/lugiax-router\';\n' +
              'import {Button} from \'@lugia/lugia-web\';\n' +
              '\n' +
              'export default class Header extends React.Component {\n' +
              '  render(){\n' +
              '    return (\n' +
              '      <div>\n' +
              '        <Link to="/home"><Button type="primary">Home 首页</Button></Link>\n' +
              '        <Link to="/list"><Button type="primary">List 列表</Button></Link>\n' +
              '      </div>\n' +
              '    )\n' +
              '  }\n' +
              '}\n',bash:true, margin: '0 0 30px',javascript:true},
            {text: '##  home/index.js :', margin: '0 0 30px'},
            {text:'import React from \'react\';\n' +
              '\n' +
              'export default class Home extends React.Component {\n' +
              '  render(){\n' +
              '    return (\n' +
              '      <div>\n' +
              '        Home\n' +
              '      </div>\n' +
              '    )\n' +
              '  }\n' +
              '}\n',bash:true, margin: '0 0 30px',javascript:true},
            {text: '##  list/index.js :', margin: '0 0 30px'},
            {text:'import React from \'react\';\n' +
              '\n' +
              'export default class List extends React.Component {\n' +
              '  render(){\n' +
              '    return (\n' +
              '      <div>\n' +
              '        List\n' +
              '      </div>\n' +
              '    )\n' +
              '  }\n' +
              '}',bash:true, margin: '0 0 30px',javascript:true},

          ],

        },
        {
          title: '2.创建路由',
          content: [
            {text: '修改 `src/App/APP.jsx` 和 `src/index.js` 文件代码如下：'},
            {text: '##  APP.jsx', margin: '0 0 30px'},
            {text:'import React, { Component } from \'react\';\n' +
              'import reactLogo from \'../assets/react.logo.svg\';\n' +
              'import megaLogo from \'../assets/logo.png\';\n' +
              'import \'./App.css\';\n' +
              'import { createRoute} from \'@lugia/lugiax-router\';\n' +
              'import NavMenu from \'../component/nav-menu\';\n' +
              '\n' +
              'const route = {\n' +
              '  \'/\': {\n' +
              '    render: async () => import(\'../component/home\'),\n' +
              '    exact: true,\n' +
              '  },\n' +
              '  \'/home\': {\n' +
              '    render: async () => import(\'../component/home\')\n' +
              '  },\n' +
              '  \'/list\': {\n' +
              '    render: async () => import(\'../component/list\')\n' +
              '  },\n' +
              '};\n' +
              '\n' +
              'class App extends Component {\n' +
              '  render() {\n' +
              '    return (\n' +
              '      <div className="App">\n' +
              '        <header className="App-header">\n' +
              '          <img src={megaLogo} alt="mega-logo" />\n' +
              '          <span className="App-plus">+</span>\n' +
              '          <img src={reactLogo} className="App-logo" alt="react-logo" />\n' +
              '        </header>\n' +
              '        <h1 className="App-title">Lugia Mega of React</h1>\n' +
              '        <p className="App-intro">\n' +
              '          <code>React 实现</code> 标准、高效、开箱即用的前端可视化开发工具\n' +
              '        </p>\n' +
              '        <NavMenu />\n' +
              '        {createRoute(route)}\n' +
              '      </div>\n' +
              '    );\n' +
              '  }\n' +
              '}\n' +
              '\n' +
              'export default App;',bash:true, margin: '0 0 30px',javascript:true},
            {text: '##  index.js', margin: '0 0 30px'},
            {text:'import React from \'react\';\n' +
              'import { createBrowserHistory } from "history";\n' +
              'import { createApp, go, render } from "@lugia/lugiax-router";\n' +
              'import \'./index.css\';\n' +
              'import "@lugia/lugia-web/dist/css/global.css";\n' +
              'import Main from "./App";\n' +
              '\n' +
              'const history = createBrowserHistory();\n' +
              'const App = createApp(\n' +
              '  {\n' +
              '    "/": {\n' +
              '      component: Main\n' +
              '    }\n' +
              '  },\n' +
              '  history,\n' +
              '  {\n' +
              '    async onBeforeGo({ url }) {\n' +
              '      if (url === "/nowPower") {\n' +
              '        await go({ url: "/404" });\n' +
              '        return false;\n' +
              '      }\n' +
              '      return url !== "/not";\n' +
              '    }\n' +
              '  }\n' +
              ');\n' +
              '\n' +
              'render(() => {\n' +
              '  return <App />;\n' +
              '}, "root");\n',bash:true, margin: '0 0 30px',javascript:true},
            {text: '修改完后，再重新启动项目，看到如下界面：', margin: '0 0 30px',url: routewelcome},
            {text: '这样，一个简单的路由就搭建完成了，你也可以根据你的爱好配置不同样式。', margin: '0 0 30px'},

          ],
        },

        {
          title: '创建 model',
          content: [
            {text: '在 `list` 目录下创建 `models/todo.js`;', margin: '0 0 30px'},
            {text:'import lugiax from "@lugia/lugiax";\n' +
              '\n' +
              'const model = "todo";\n' +
              'const state = {\n' +
              '  formData: {\n' +
              '    task: ""\n' +
              '  },\n' +
              '  tasks: ["hello"]\n' +
              '};\n' +
              'export default lugiax.register({\n' +
              '  model,\n' +
              '  state,\n' +
              '  mutations: {\n' +
              '    sync: {\n' +
              '      addTask(state, inParam, { mutations }) {\n' +
              '        const task = state.getIn(["formData", "task"]);\n' +
              '        if (!task) {\n' +
              '          return state;\n' +
              '        }\n' +
              '        let tasks = state.get("tasks");\n' +
              '        tasks = tasks.push(task);\n' +
              '        state = mutations.cleanTaksInput();\n' +
              '        return state.set("tasks", tasks);\n' +
              '      },\n' +
              '\n' +
              '      delTask(state, inParam) {\n' +
              '        let tasks = state.get("tasks");\n' +
              '        tasks = tasks.delete(tasks.findIndex(title => title === inParam.title));\n' +
              '        return state.set("tasks", tasks);\n' +
              '      },\n' +
              '\n' +
              '      cleanTaksInput(state) {\n' +
              '        return state.setIn(["formData", "task"], "");\n' +
              '      }\n' +
              '    }\n' +
              '  }\n' +
              '});\n',bash:true, margin: '0 0 30px',javascript:true},

            {text: '## Component 与 model connect 起来'},
            {text: '在 `list` 文件夹下创建 `components` 文件夹，内容如下：'},
            {text: '## components/InputTask.js :', margin: '0 0 30px'},
            {text:'import React, { Component } from "react";\n' +
              'import { Input } from "@lugia/lugia-web";\n' +
              '\n' +
              'export default class InputTask extends Component {\n' +
              '  render() {\n' +
              '    return (\n' +
              '      <Input\n' +
              '        onChange={this.onChange}\n' +
              '        onKeyDown={this.onKeyDown}\n' +
              '        value={this.props.value}\n' +
              '      />\n' +
              '    );\n' +
              '  }\n' +
              '\n' +
              '  onChange = (e) => {\n' +
              '    const { onChange } = this.props;\n' +
              '    onChange && onChange(e.newValue);\n' +
              '  };\n' +
              '\n' +
              '  onKeyDown = (e) => {\n' +
              '    if (e.keyCode === 13) {\n' +
              '      const { onEnter } = this.props;\n' +
              '      onEnter && onEnter();\n' +
              '    }\n' +
              '  };\n' +
              '}',bash:true, margin: '0 0 30px',javascript:true},

            {text: '## components/List.js :', margin: '0 0 30px'},
            {text:'\n' +
              'import React, { Component } from "react";\n' +
              'import styled from "styled-components";\n' +
              'const hoverColor = "red";\n' +
              'const Item = styled.li`\n' +
              '  user-select: none;\n' +
              '  cursor: pointer;\n' +
              '  &:hover {\n' +
              '    color: ${hoverColor};\n' +
              '  }\n' +
              '`;\n' +
              '\n' +
              'const CloseIcon = styled.span`\n' +
              '  user-select: none;\n' +
              '  cursor: pointer;\n' +
              '  ${Item}:hover {\n' +
              '    color: ${hoverColor};\n' +
              '  }\n' +
              '  &:hover {\n' +
              '    color: ${hoverColor};\n' +
              '  }\n' +
              '`;\n' +
              '\n' +
              'export default class List extends Component {\n' +
              '  render() {\n' +
              '    return <ul>{this.renderList()}</ul>;\n' +
              '  }\n' +
              '\n' +
              '  delItem = (title) => () => {\n' +
              '    const { delItem } = this.props;\n' +
              '    delItem && delItem({ title });\n' +
              '  };\n' +
              '\n' +
              '  renderList() {\n' +
              '    const { data = [] } = this.props;\n' +
              '    return data.map(title => {\n' +
              '      const del = this.delItem(title);\n' +
              '      return (\n' +
              '        <Item onClick={del}>\n' +
              '          {title} <CloseIcon onClick={del}>x</CloseIcon>\n' +
              '        </Item>\n' +
              '      );\n' +
              '    });\n' +
              '  }\n' +
              '}\n',bash:true, margin: '0 0 30px',javascript:true},

            {text: '现在我们创建完成了 Component 和 model，下面我们把他们关联起来：'},
            {text: '## list/index.js', margin: '0 0 30px'},
            {text:'import React, { Component } from "react";\n' +
              'import InputTask from "./components/InputTask";\n' +
              'import List from "./components/List";\n' +
              'import { bindTo, connect } from "@lugia/lugiax";\n' +
              'import todo from "./models/todo";\n' +
              '\n' +
              'const TodoList = connect(\n' +
              '  todo,\n' +
              '  state => {\n' +
              '    return { data: state.todo.get("tasks") };\n' +
              '  },\n' +
              '  mutations => {\n' +
              '    const { todo } = mutations;\n' +
              '    return { delItem: todo.delTask };\n' +
              '  }\n' +
              ')(List);\n' +
              '\n' +
              'const fieldPath = ["formData", "task"];\n' +
              'const fieldName = fieldPath.join(".");\n' +
              '\n' +
              'const TodoInput = bindTo(\n' +
              '  todo,\n' +
              '  {\n' +
              '    [fieldName]: "value"\n' +
              '  },\n' +
              '  {\n' +
              '    onChange: {\n' +
              '      [fieldName](v) {\n' +
              '        return v;\n' +
              '      }\n' +
              '    }\n' +
              '  },\n' +
              '  {\n' +
              '    onEnter() {\n' +
              '      todo.mutations.addTask();\n' +
              '    }\n' +
              '  }\n' +
              ')(InputTask);\n' +
              '\n' +
              'export default () => {\n' +
              '  return (\n' +
              '    <div>\n' +
              '      <h1>To Do List</h1>\n' +
              '      <TodoInput />\n' +
              '      <TodoList />\n' +
              '    </div>\n' +
              '  );\n' +
              '};',bash:true, margin: '0 0 30px',javascript:true},

            {text: '这样，TodoInput 和 TodoList 组件就和 model 关联起来了，这里用到了 `connect` 和 `bindTo` ， lugiax 共提供了\n' +
              '`connect` 、`bindTo` 、`bind` 三种绑定方法，关于更多请参考lugiax', margin: '0 0 30px'},



          ]
        },
        {
          title: '构建应用',
          content: [
            {text: '开发完成后，运行', margin: '0 0 30px'},
            {text:'$ yarn build',bash:true, margin: '0 0 30px',javascript:true},

            {text: '几秒后输出：', margin: '0 0 30px'},
            {text:'yarn run v1.7.0\n' +
              '$ lugia-scripts build\n' +
              'Build completed in 10.78s\n' +
              '\n' +
              'Compiled successfully.\n' +
              '\n' +
              'File sizes after gzip:\n' +
              '\n' +
              '  135.61 KB  dist\\index.f327bddb.js\n' +
              '  22.46 KB   dist\\1.03dbcdbf.async.js\n' +
              '  4.28 KB    dist\\index.5771692d.css\n' +
              '  729 B      dist\\0.e5277a87.async.js\n' +
              '\n' +
              'Done in 16.34s.',bash:true, margin: '0 0 30px',javascript:true},

            {text: 'build 命令会将项目进行打包，可在 `dist` 目录下查看打包后的文件。', margin: '0 0 30px'},
          ]
        },


      ]
    },
    lugiax:{
      type:'document',
      baseUrl:'/component',
      title: 'Lugiax',
      content: [{ text: '一个基于 Redux 的前端状态管理工具。提供简单高效的全局状态管理方案、 基于 async/await 的异步操作、快捷的双向绑定。LugiaX 内置路由库，对 react-router 做了轻量封装，使用起来更加简单明了。',margin: '0 0 30px' }],
      children: [
        {
          title:'设计思想',
          content: [
            {text: '基于`redux` + `redux-saga` 封装出更加简单的状态管理工具。我们引入了 `mutation` 的概念（`mutation` + `state`）， 简化了 `redux`。' , inline:true},
            {text: 'lugiax 的 state 是 不可变类型的数据， 可参看' , inline:true},
            { text: ` [Immutable] ` ,link:'https://facebook.github.io/immutable-js/docs/#/', inline:true },
            { text: ' ；Immutable数据一旦创建，就不能更改。',  inline:true },
            { text: '而 `mutation` 就是修改 `state` 的唯一途径。state 被修改后， 并不会通知全局来进行更新，而是通知所绑定的对应的 Component 来进行更新。',  margin: '0 0 30px'},
            {text: 'state',weight:600, margin: '0 0 5px'},
            {text: '`state` 是单独的，每个 model 都有自己的 `state`，并且是不可变类型的',margin: '0 0 5px'},
            {text: 'mutation',weight:600, margin: '0 0 10px'},
            {text: '`mutation` 是一个标准函数，是唯一修改 `state` 的途径，修改方式是通过返回一个新的 state ，然后通过 state.set 来修改 state。并且 `mutation` 只能修改自己域下面的 `state`。`mutation` 提供了 async 和 sync 两种不同的操作方式。',margin: '0 0 30px'},
            {text: 'mutation 进阶',weight:600, margin: '0 0 5px'},
            {text: '可以通过 `wait` 等待一个mutation结束，然后处理返回新的 state'},
            {text: '可以通过 `lugiax.on` 进行全局监听，被监听状态改变后，会执行 `lugiax.on`'},
            {text: '可以通过 `lugiax.getState` 获取其他 model 状态',margin: '0 0 30px'},
            {text: 'wait:',weight:600, margin: '0 0 5px'},
            {text:'const mutation = {\n' +
              '  async: {\n' +
              '    async changePwd(data, inParam, { mutations,  }) {\n' +
              '      return data.set(\'pwd\', inParam.pwd);\n' +
              '    },\n' +
              '    async changeName(data, inParam, { mutations, }) {\n' +
              '      return data.set(\'name\', inParam.name);\n' +
              '    },\n' +
              '    async start(data, inParam, { mutations, wait,}) {          \n' +
              '      await wait(asyncChangeName);\n' +
              '      state.set(\'pwd\',\'333\')\n' +
              '    }\n' +
              '  }\n' +
              '};\n' +
              'lugiax.register({model:\'user\',state:{name: \'li\',pwd: \'12345\'},mutation});',bash:true, margin: '0 0 30px',javascript:true},

            {text: 'lugiax.on:',weight:600, margin: '0 0 5px'},
            {text:'const getAsyncResult = new Promise((resolve,reject) => {\n' +
              '  const asyncResult = [];\n' +
              '  lugiax.on(async (mutation, params, { mutations, wait, }) => {\n' +
              '    if(true){ // 做一些判断\n' +
              '      asyncResult.push(params)\n' +
              '    }\n' +
              '    if(asyncResult.length === 2){ // mutation 全部响应后放回\n' +
              '      resolve(asyncResult);\n' +
              '    }\n' +
              '  })\n' +
              '})',bash:true, margin: '0 0 30px',javascript:true},

            {text: 'lugiax.getState:',weight:600, margin: '0 0 5px'},
            {text:'import lugiax from "@lugia/lugiax";\n' +
              'const userModel = lugiax.register({\n' +
              '  model: \'user\',\n' +
              '  state: {name: \'userName\'},\n' +
              '  mutations: {}\n' +
              '});\n' +
              'const loginModel = lugiax.register({\n' +
              '  model: \'login\',\n' +
              '  state: {login: \'login\'},\n' +
              '  mutations: {}\n' +
              '});\n' +
              '\n' +
              'userModel.getState().get(\'user\').get(\'name\'); // userName\n' +
              'loginModel.getState().get(\'login\').get(\'login\'); // login',bash:true, margin: '0 0 30px',javascript:true},
          ],
        },
        {
          title: 'lugiax API',
          content: [
            {text: 'lugiax.register',weight:600},
            {text:'{\n' +
              '  model: \'\', // string 模块名称（必填），值必须唯一否则将会报错；\n' +
              '  state: {}, //组件的初始状态 类型为非 null & 非 undefined即可\n' +
              '  mutations:{ // 本模型对外提供的一系列业务操作\n' +
              '    sync: {\n' +
              '      doSomethings() { // 一个同步操作} // Function\n' +
              '    },\n' +
              '    async: {\n' +
              '      login() { // 一个异步业务操作}  // Function\n' +
              '    } \n' +
              '  }\n' +
              '}',bash:true, margin: '0 0 30px',javascript:true},
            {text: 'mutations:', margin: '0 0 5px'},
            {text:'{\n' +
              '  mutations:{ //供React组件或其它Model的Action进行调用的触发更新 state 的方法。 \n' +
              '    doSomethings,  // Function\n' +
              '    asyncLogin // Function 异步操作会返回 async 开头的方法名： login -> asyncLogin\n' +
              '  }\n' +
              '}  ',bash:true, margin: '0 0 30px',javascript:true},
            {text: 'lugiax.connect',weight:600, margin: '0 0 5px'},
            {text:'lugiax.connect(\n' +
              '  todo, // 模块名称（必填）\n' +
              '  state => {\n' +
              '    return { data: state.data, };\n' +
              '  },\n' +
              '  mutations => {\n' +
              '    return { delItem: mutations.delTask, };\n' +
              '  }\n' +
              ')(List);\n',bash:true, margin: '0 0 30px',javascript:true},
            {text: 'connect 多个model:', margin: '0 0 5px'},
            {text:'lugiax.connect(\n' +
              '  [todo,user], // 模块名称（必填）\n' +
              '  state => {\n' +
              '    const [todo, user] = state\n' +
              '    return { data: todo.get(\'data\'),name: user.get(\'name\') };\n' +
              '  },\n' +
              '  mutations => {\n' +
              '    const [todo, user] = mutations;\n' +
              '    return { delItem: todo.delTask, addName: user.addName };\n' +
              '  }\n' +
              ')(Component);',bash:true, margin: '0 0 30px',javascript:true},
            {text: '操作 model State 中具体某个属性值:', margin: '0 0 5px'},
            {text:'{\n' +
              '  model: \'user\', \n' +
              '  state: {\n' +
              '    user: {\n' +
              '      guo: {age: 18}\n' +
              '    }\n' +
              '  },\n' +
              '  mutations:{\n' +
              '    addUser(states, params){\n' +
              '      const {name, age} = params;\n' +
              '      return state.setIn([\'user\',name,\'age\'],age)\n' +
              '    },\n' +
              '    deleteUser(states, params){\n' +
              '      const {name} = params;\n' +
              '      return state.deleteIn([\'user\',name])\n' +
              '    }\n' +
              '  }\n' +
              '};\n' +
              '  \n' +
              'lugiax.connect(\n' +
              '  user, // 模块名称（必填）\n' +
              '  state => {\n' +
              '    const name = \'guo\';\n' +
              '    return { age: state.getIn([\'user\',name,\'age\']) };\n' +
              '  },\n' +
              '  mutations => {}\n' +
              ')(Component);',bash:true, margin: '0 0 30px',javascript:true},
            {text: '通过setIn 、getIn 、deleteIn 等api来操作state中深层嵌套的值。',margin: '0 0 5px'},
            {text: '小提示：',margin: '0 0 5px'},
            {text: '向 深层次的state 中setIn 某个属性的时候，如果该属性为一个对象，比如给 user 设置一个 name 为 li 的\n' +
              'age，你可能会这样设置(此处为mutations部分的代码)：',margin: '0 0 5px'},
            {text:'mutations:{\n' +
              '      addUser(states, params){\n' +
              '          const {name, age} = params;\n' +
              '          const theAge = {age};\n' +
              '          return state.setIn([\'user\',name],theAge)\n' +
              '      }\n' +
              '  }',bash:true, margin: '0 0 30px',javascript:true},
            {text: '这样，你在后面操作 li 的age 的时候，会抛出 Immutable 的路径错误信息，' , inline:true},
            {text: '因为直接设置对象的话，Immutable 丢失了路径信息，' , inline:true},
            {text: '所以要向上面例子中，填写完整的path路径进行设置。' , inline:true},
            {text: '更多 API 请参照 ' , inline:true},
            { text: ` [Immutable]` ,link:'https://facebook.github.io/immutable-js/docs/#/', inline:true },
            {text: 'lugiax.bind',weight:600},
            {text: '双向绑定，需要指定 `mutation`，不能动态生成 `mutation` 。',margin: '0 0 5px'},
            {text:'const mutations = {\n' +
              '  sync: {\n' +
              '    changeName(data, inParam) {\n' +
              '      return data.set(\'name\', inParam.name);\n' +
              '    },\n' +
              '    changePwd(data, inParam) {\n' +
              '      return data.set(\'pwd\', inParam.pwd);\n' +
              '    },\n' +
              '  }\n' +
              '}\n' +
              'const userModel = lugiax.register({model:\'user\',state:{name: \'li\',pwd: \'12345\'},mutations})\n' +
              'lugiax.bind(\n' +
              '  userModel,\n' +
              '  model => {\n' +
              '    const result = { value: model.get(\'name\'), pwd: model.get(\'pwd\'), };\n' +
              '    return result;\n' +
              '  },\n' +
              '  {\n' +
              '    onChange: (mutations, e) => {\n' +
              '      return mutations.changeName({ name: e.target.value, });\n' +
              '    },\n' +
              '    onClick: (mutations, e) => {\n' +
              '      return mutations.changePwd({ pwd: newPwd, });\n' +
              '    },\n' +
              '  }\n' +
              ')(InputTask //Component 组件)',bash:true, margin: '0 0 30px',javascript:true},
            {text: 'lugiax.bindTo',weight:600},
            {text: '双向绑定，并且可以动态生成 `mutation`。',margin: '0 0 5px'},
            {text:'lugiax.bindTo(\n' +
              '  tomato, // 模块名称（必填）\n' +
              '  {\n' +
              '    taskName: \'value\', // string 绑定属性值（必填）\n' +
              '  },\n' +
              '  {\n' +
              '    onChange: {\n' +
              '      taskName(v) {\n' +
              '        return v;\n' +
              '      },\n' +
              '    },\n' +
              '  }\n' +
              ')(InputTask //Component 组件)',bash:true, margin: '0 0 30px',javascript:true},

            {text: 'lugiax.getState()',weight:600},
            {text: '某个 model 获取其他 model 的 state，使用之前要在该model 引入要获取 state 的 model。', margin: '0 0 5px'},
            {text:'lugiax.getState(modelName)',bash:true, margin: '0 0 30px',javascript:true},

            {text: 'lugiax.on()',weight:600},
            {text: '某个操作可能在多个 异步 `mutation` 执行完成后触发，这时候你可能用到 `lugiax.on` 来监听这些 `mutation`。',margin: '0 0 5px'},
            {text:'## example：\n' +
              'const getAsyncResult = new Promise((resolve,reject) => {\n' +
              '  const asyncResult = [];\n' +
              '  lugiax.on(async (mutation, params, { mutations, wait, }) => {\n' +
              '    if(true){ // 做一些判断\n' +
              '      asyncResult.push(params)\n' +
              '    }\n' +
              '    if(asyncResult.length === 2){ // mutation 全部响应后放回\n' +
              '      resolve(asyncResult);\n' +
              '    }\n' +
              '  })\n' +
              '})',bash:true, margin: '0 0 30px',javascript:true},

          ]
        },
        {
          title: 'lugiax-router 路由',
          content: [
            {text: 'lugiax 对 react-router 做了轻量的封装，createApp 和 createRoute 供你创建路由使用。'},

            {text: 'createRoute',weight:600},
            {text:'createRoute({\n' +
              '  [path: string]:{\n' +
              '     render?: Function,\n' +
              '     exact?: boolean, \n' +
              '     strict?: boolean,\n' +
              '     component?: Function,\n' +
              '     onPageLoad?: Function,\n' +
              '     onPageUnLoad?: ?Function\n' +
              '  }\n' +
              '})',bash:true, margin: '0 0 30px',javascript:true},

            {text: '除了 component 的静态打包外，还提供了 render 动态打包，用于代码分割。',margin: '0 0 30px'},
          ],
        },

        {
          title: '页面生命周期函数',
          content: [
            {text: 'onPageLoad 页面加载完成后执行', margin: '0 0 5px'},
            {text: 'onPageUnLoad 页面卸载时执行', margin: '0 0 30px'},

          ]
        },
        {
          title: 'createApp',
          content: [
            {text:'createApp({\n' +
              '  routerMap: RouterMap, // type: Object，通过 createRoute 创建后的route\n' +
              '  history: Object,\n' +
              '  param?: CreateAppParam = {}\n' +
              '})',bash:true, margin: '0 0 30px',javascript:true},

            {text: 'param 提供 loading 和 onBeforeGo 两个api；', margin: '0 0 5px'},
            {text: 'loading: 路由切换的加载页面，可配置 Component 组件', margin: '0 0 5px'},
            {text: 'onBeforeGo 跳转之前的回调，可做权限处理', margin: '0 0 5px'},
          ]
        },


      ]
    },
  };
  return DesignDocument;
};

