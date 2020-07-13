# 码者直聘 - 接口文档

## 用户注册

1. 请求接口

   > http://localhost:4000/register

2. 请求方式

   > POST

3. 请求参数

   > <table>
   >     <tr>
   >         <th>请求参数</th>
   >         <th>是否必选</th>
   >         <th>请求类型</th>
   >         <th>说明</th>
   >     </tr>
   >     <tr>
   >         <td>username</td>
   >         <td>Y</td>
   >         <td>string</td>
   >         <td>用户名</td>
   >     </tr>
   >     <tr>
   >         <td>password</td>
   >         <td>Y</td>
   >         <td>string</td>
   >         <td>密码</td>
   >     </tr>
   >     <tr>
   >         <td>type</td>
   >         <td>Y</td>
   >         <td>string</td>
   >         <td>用户类型</td>
   >     </tr>
   > </table>

4. 请求数据格式

   > x-www-form-urlencoded

5. 响应数据格式

   > 请求成功
   >
   > ```json
   > {
   >        "code": "0",
   >        "data": {
   >            "_id": "5496064168",
   >            "username": "zhangsan",
   >            "type": "dashen"
   >        }
   > }
   > ```
   >
   > 请求失败
   >
   > ```json
   > {
   >        "code": "1",
   >        "msg": "数据错误"
   > }
   > ```

## 用户登陆

1. 请求接口

   > http://localhost:4000/login

2. 请求方式

   > POST

3. 请求参数

   > <table>
   >     <tr>
   >         <th>请求参数</th>
   >         <th>是否必选</th>
   >         <th>请求类型</th>
   >         <th>说明</th>
   >     </tr>
   >     <tr>
   >         <td>username</td>
   >         <td>Y</td>
   >         <td>string</td>
   >         <td>用户名</td>
   >     </tr>
   >     <tr>
   >         <td>password</td>
   >         <td>Y</td>
   >         <td>string</td>
   >         <td>密码</td>
   >     </tr>
   > </table>

4. 请求数据格式

   > x-www-form-urlencoded

5. 响应数据格式

   > 请求成功
   >
   > ```json
   > {
   >       "code": "0",
   >       "data": {
   >            "_id": "5496064168",
   >            "username": "zhangsan",
   >            "type": "dashen"
   >       }
   > }
   > ```
   >
   > 请求失败
   >
   > ```json
   > {
   >       "code": "1",
   >       "msg": "数据错误"
   > }
   > ```

## 更新用户

1. 请求接口

   > http://localhost:4000/update

2. 请求方式

   > POST

3. 请求参数

   > <table>
   >     <tr>
   >         <th>请求参数</th>
   >         <th>是否必选</th>
   >         <th>请求类型</th>
   >         <th>说明</th>
   >     </tr>
   >     <tr>
   >         <td>header</td>
   >         <td>Y</td>
   >         <td>string</td>
   >         <td>头像名称</td>
   >     </tr>
   >     <tr>
   >         <td>info</td>
   >         <td>N</td>
   >         <td>string</td>
   >         <td>介绍</td>
   >     </tr>
   >     <tr>
   >         <td>post</td>
   >         <td>N</td>
   >         <td>string</td>
   >         <td>职位</td>
   >     </tr>
   > 	<tr>
   >     	<td>salary</td>
   >         <td>N</td>
   >         <td>string</td>
   >         <td>月薪</td>
   >     </tr>
   >     <tr>
   >     	<td>company</td>
   >         <td>N</td>
   >         <td>string</td>
   >         <td>公司</td>
   >     </tr>
   > </table>

4. 请求数据格式

   > x-www-form-urlencoded

5. 响应数据格式

   > 请求成功
   >
   > ```json
   > {
   >       "code": "0",
   >       "data": {
   >            "header": "5496064168",
   >            "info": "zhangsan",
   >            "post": "dashen",
   >            "company": "sad",
   >            "salary": "12K",
   >            "_id": "32rf3r2",
   >            "username": "laoban1",
   >            "type": "laoban"
   >       }
   > }
   > ```
   >
   > 请求失败
   >
   > ```json
   > {
   >       "code": "1",
   >       "msg": "数据错误"
   > }
   > ```

## 获取当前的 user（根据 cookie）

1. 请求接口

   > http://localhost:4000/user

2. 请求方式

   > GET

3. 请求参数

   > 无

4. 请求数据格式

   > 无

5. 响应格式

   > 请求成功
   >
   > ```json
   > {
   >       "code": "0",
   >       "data": {
   >            "header": "5496064168",
   >            "info": "zhangsan",
   >            "post": "dashen",
   >            "company": "sad",
   >            "salary": "12K",
   >            "_id": "32rf3r2",
   >            "username": "laoban1",
   >            "type": "laoban"
   >       }
   > }
   > ```
   >
   > 请求失败
   >
   > ```json
   > {
   >       "code": "1",
   >       "msg": "数据错误"
   > }
   > ```

## 获取用户列表

1. 请求接口

   > http://localhost:4000/userlist

2. 请求方式

   > GET

3. 请求参数

   > <table>
   >     <tr>
   >         <th>请求参数</th>
   >         <th>是否必选</th>
   >         <th>请求类型</th>
   >         <th>说明</th>
   >     </tr>
   >     <tr>
   >         <td>type</td>
   >         <td>Y</td>
   >         <td>string</td>
   >         <td>类型(dashen/laoban)</td>
   >     </tr>
   > </table>

4. 请求数据格式

   > query

5. 响应格式

   > 请求成功
   >
   > ```json
   > {
   >        "code": "0",
   >        "data": {
   >            "header": "5496064168",
   >            "info": "zhangsan",
   >            "post": "dashen",
   >            "company": "sad",
   >            "salary": "12K",
   >            "_id": "32rf3r2",
   >            "username": "laoban1",
   >            "type": "laoban"
   >        }
   > }
   > ```
   >
   > 请求失败
   >
   > ```json
   > {
   >     "code": "1",
   >     "msg": "数据错误"
   > }
   > ```

## 获取当前用户的聊天消息列表

1. 请求接口

   > http://localhost:4000/msglist

2. 请求方式

   > GET

3. 请求参数

   > 无

4. 请求数据格式

   > 无

5. 响应格式

   > 请求成功
   >
   > ```json
   > {
   >        "code": "0",
   >        "data": {
   >            "users": {
   >                "345125354123544": {
   >                    "username": "ds2"
   >                },
   >                "345135215412254": {
   >                    "username": "ds3"
   >                }
   >            },
   >            "chatMsgs": [
   >                {
   >                    "read": false,
   >                    "_id": "efgwstgwe",
   >                    "from": "ewfgvwetgfre",
   >                    "to": "etgwgrrge",
   >                    "content": "aa",
   >                    "create_time": 124312,
   >                    "__v": 0
   >                }
   >            ]
   >        }
   > }
   > ```
   >
   > 请求失败
   >
   > ```json
   > {
   >        "code": "1",
   >        "msg": "数据错误"
   > }
   > ```

## 修改指定消息为已读

1. 请求接口

   > http://localhost:4000/readmsg

2. 请求方式

   > POST

3. 请求参数

   > <table>
   >  <tr>
   >      <th>请求参数</th>
   >      <th>是否必选</th>
   >      <th>请求类型</th>
   >      <th>说明</th>
   >  </tr>
   >  <tr>
   >      <td>from</td>
   >      <td>Y</td>
   >      <td>string</td>
   >      <td>发送消息用户的id</td>
   >  </tr>
   > </table>

4. 请求数据格式

   > x-www-form-urlencoded

5. 响应格式

   > 请求成功
   >
   > ```json
   > {
   >        "code": 0,
   >        "data": 1
   > }
   > ```
   >
   > 请求失败
   >
   > ```json
   > {
   >        "code": "1",
   >        "msg": "数据错误"
   > }
   > ```
