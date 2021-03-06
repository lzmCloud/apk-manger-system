import {
  verifyToken as chToken,
  createToken as crToken
} from "../utils/token"
import { codeObj } from  '../utils'
import chalk from 'chalk';
export default class BaseDao {
  /**
   * 子类构造传入对应的 Model 类
   *
   * @param Model
   */
  constructor(Model) {
    this.Model = Model;
    this.sendRes = this.sendRes.bind(this);
  }


  /**
   * 使用 Model 的 静态方法 create() 添加 doc
   *
   * @param obj 构造实体的对象
   * @returns {Promise}
   */
  create(obj) {
    return new Promise((resolve, reject) => {
      let entity = new this.Model(obj);
      this.Model.create(entity, (error, result) => {
        if (error) {
          console.log('create error--> ', error);
          reject(error);
        } else {
          console.log('create result--> ', result);
          resolve(result)
        }
      });
    });
  }


  /**
   * 使用 Model save() 添加 doc
   *
   * @param obj 构造实体的对象
   * @returns {Promise}
   */
  save(obj) {
    return new Promise((resolve, reject) => {
      let entity = new this.Model(obj);
      entity.save((error, result) => {
        if (error) {
          console.log('save error--> ', error);
          reject(error);
        } else {
          console.log('save result--> ', result);
          resolve(result)
        }
      });
    });
  }


  /**
   * 查询所有符合条件 docs
   *
   * @param condition 查找条件
   * @param constraints
   * @returns {Promise}
   */
  findAll(condition, constraints) {
    return new Promise((resolve, reject) => {
      this.Model.find(condition, constraints ? constraints : null, (error, results) => {
        if (error) {
          console.log('findAll error--> ', error);
          reject(error);
        } else {
          console.log('findAll results--> ', results);
          resolve(results);
        }
      });
    });
  }


  /**
   * 查找符合条件的第一条 doc
   *
   * @param condition
   * @param constraints
   * @returns {Promise}
   */
  findOne(condition, constraints) {
    return new Promise((resolve, reject) => {
      this.Model.findOne(condition, constraints ? constraints : null, (error, results) => {
        if (error) {
          console.log('findOne error--> ', error);
          reject(error);
        } else {
          console.log('findOne results--> ', results);
          resolve(results);
        }
      });
    });
  }


  /**
   * 查找排序之后的第一条
   *
   * @param condition
   * @param orderColumn
   * @param orderType
   * @returns {Promise}
   */
  findOneByOrder(condition, orderColumn, orderType) {
    return new Promise((resolve, reject) => {
      this.Model.findOne(condition)
        .sort({
          [orderColumn]: orderType
        })
        .exec(function (err, record) {
          console.log(record);
          if (err) {
            reject(err);
          } else {
            resolve(record);
          }
        });
    });
  }


  /**
   * 更新 docs
   *
   * @param condition 查找条件
   * @param updater 更新操作
   * @returns {Promise}
   */
  update(condition, updater) {
    return new Promise((resolve, reject) => {
      this.Model.update(condition, updater, (error, results) => {
        if (error) {
          console.log(chalk.red('update error--> ', error));
          reject(error);
        } else {
          console.log('update results--> ', results);
          resolve(results);
        }
      });
    });

    // this.model.findOneAndUpdate(condition, update, {new: true, upsert: true}, (err, record) => {
    //     if (err) {
    //         log.warn(`Failed updating database, condition: ${JSON.stringify(condition)}, update: ${JSON.stringify(update)}, error: ${err}`);
    //         reject(err);
    //     } else {
    //         log.info(`Database updated for ${JSON.stringify(condition)} with ${JSON.stringify(update)}`);
    //         resolve(record);
    //     }
    // });
  }


  /**
   * 移除 doc
   *
   * @param condition 查找条件
   * @returns {Promise}
   */
  remove(condition) {
    return new Promise((resolve, reject) => {
      this.Model.remove(condition, (error, result) => {
        if (error) {
          console.log('remove error--> ', error);
          reject(error);
        } else {
          console.log('remove result--> ', result);
          resolve(result);
        }
      });
    });
  }


  checkToken(token) {
    return chToken(token);
  }

  createToken(obj) {
    return crToken(obj);
  }


  sendRes(res, code, result = '') {
    if (code === 500) {
      console.log('--error--', res);
    }
    console.log(chalk.green(`请求返回: ${code}`))
    const obj = {
      code,
      msg: codeObj[code],
      res: result
    }
    res.status(code).send(JSON.stringify(obj))
  }
}