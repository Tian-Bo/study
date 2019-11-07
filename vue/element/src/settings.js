module.exports = {
  title: 'xiaopaopao',

  /**
   * @type {boolean} true | false
   * @description 是否显示设置右面板
   */
  showSettings: true,

  /**
   * @type {boolean} true | false
   * @description 是否需要多标签
   */
  tagsView: false,

  /**
   * @type {boolean} true | false
   * @description 是否固定页眉
   */
  fixedHeader: false,

  /**
   * @type {boolean} true | false
   * @description 是否在侧边栏中显示徽标
   */
  sidebarLogo: false,

  /**
   * @type {string | array} 'production' | ['production', 'development']
   * @description 需要显示错误日志组件。
   * 默认值仅在生产环境中使用
   * 如果您还想在dev中使用它，可以通过[“production”，“development”]
   */
  errorLog: 'production'
}
