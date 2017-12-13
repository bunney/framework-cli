const request = require('supertest');
const app =require('../../build/app.js').default;
describe('Nodeuii Service 自动化测试脚本',() => {
    describe('API 接口测试', () => {
        it('获取测试页面数据', (done) => {
            request(app.listen())
            .get('/test/index')
            .set('Accept', 'application/json')
            .expect(200)
            .end((err, res) => {
              if (err) return done(new Error(err));
              if(res.body.result == 'test'){
                  done()
              }else{
                  done(new Error('测试页面结果与预期不符'));
              }
            })
        })
    });
    describe('测试接口容错能力', () => {
        it('404容错测试脚本', (done) => {
            request(app.listen())
            .get('/test/abc')
            .expect(404,done());
        })
    })
})