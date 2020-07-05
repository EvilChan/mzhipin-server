# 码者直聘 - 接口文档

## 用户注册

1. 请求接口

   > http://localhost:4000/api/register

2. 请求方式

   > POST

3. 请求参数

   > <table>
   >     <tr>
   >     	<th>请求参数</th>
   >         <th>请求类型</th>
   >     </tr>
   >     <tr>
   >     	<td>username</td>
   >         <td>string</td>
   >     </tr>
   >     <tr>
   >         <td>password</td>
   >         <td>string</td>
   >     </tr>
   >     <tr>
   >     	<td>type</td>
   >         <td>string</td>
   >     </tr>
   > </table>

4. 请求数据格式

   > x-www-form-urlencoded

5. 响应数据格式

   > 请求成功
   >
   > ```json
   > {
   >     "code": "0",
   >     "data": {
   >         "_id": "5496064168",
   >         "username": "zhangsan",
   >         "type": "dashen"
   >     }
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
   >

## 用户登陆

1. 请求接口

   > http://localhost:4000/api/login

2. 请求方式

   > POST

3. 请求参数

   > <table>
   >  <tr>
   >  	<th>请求参数</th>
   >      <th>请求类型</th>
   >  </tr>
   >  <tr>
   >  	<td>username</td>
   >      <td>string</td>
   >  </tr>
   >  <tr>
   >      <td>password</td>
   >      <td>string</td>
   >  </tr>
   > </table>

4. 请求数据格式

   > x-www-form-urlencoded

5. 响应数据格式

   > 请求成功
   >
   > ```json
   > {
   >  "code": "0",
   >  "data": {
   >      "_id": "5496064168",
   >      "username": "zhangsan",
   >      "type": "dashen"
   >  }
   > }
   > ```
   >
   > 请求失败
   >
   > ```json
   > {
   >  "code": "1",
   >  "msg": "数据错误"
   > }
   > ```

