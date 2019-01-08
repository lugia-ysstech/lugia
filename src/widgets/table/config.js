module.exports =  {
    BasicDemo: {
        title: '基本用法',
        desc: '最简单的 Table 用法'
    },
    ExpandedRowRenderDemo: {
        title: '可展开的Table',
        desc: '展示内容过多时，需要折叠展示部分内容'
    },
    MergeDemo: {
        title: '可合并的Table',
        desc: '表头只支持列合并，使用 column 里的 colSpan 进行设置。 表格支持行/列合并，使用 render 里的单元格属性 colSpan 或者 rowSpan 设值为 0 时，设置的表格不会渲染。'
    },
    TreeDemo: {
          title: '展示树形数据的 Table，当数据中有 children 字段时会自动展示为树形表格',
          desc: 'Radio 不可用'
    }
};
