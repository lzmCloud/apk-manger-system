'use strict'

import mongoose from 'mongoose'
mongoose.set('useFindAndModify', false)
const Schema = mongoose.Schema
import { ObjectId } from 'mongodb'

const apkListSchema = new Schema({
  // createdAt: {type: Date, default: Date.now},
  userId: Number, //使用者
  userName: String,
  version: String, // 预约版本
  describe: String, // 描述
  createTime: {
    type: Date,
    default: Date.now
  }, // 预约创建时间
  fixTime: Date, // 修改时间
  overTime: Date, // 超期时间
  uploadTime: Date, // 文件上传时间
  checkTime: Date, // 审批时间
  finishTime: Date, // 完成时间
  orderStatus: Number, // 订单状态
  orderId: Number, // 订单id
  platformType: Number, // 平台
  url: String, // 文件路径
  checkerId: Number, // 审批人id
  checkerName: String, // 审批人
  buildName: String, // 版本名
  user_id: ObjectId, // 使用者id  对应 数据库_id
  checker_id: ObjectId,
  // createdAt: { // 自删除功能
  //   type: Date,
  //   index: {expires: 60*10}
  // }
})

apkListSchema.index({
  id: 1
});

const ApkListSchema = mongoose.model('apkListSchema', apkListSchema, 'apkList')

export default ApkListSchema