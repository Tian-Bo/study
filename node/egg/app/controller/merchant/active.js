'use strict'

const Controller = require('../../core/base_controller')
const check = require('../../public/js/check')

class ActiveModelController extends Controller {
    
    // 活动所有活动模型
    async info() {
        const { ctx } = this

        let active_id = ctx.request.query.active_id || ''
        let sql = { active_id: active_id }
        if (!active_id) {
            return ctx.body = this.fail('', '请求参数错误')
        }

        const result = await ctx.service.db.find('active', sql)

        if (result) {
            return ctx.body = this.success(result, '获取成功')
		} 
    }

}

module.exports = ActiveModelController