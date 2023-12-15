
<!-- Create Big Admin -->
 Base url: `/api/v1/mentor`

<br>

**POST** `/`

```json
{
  "first_name":"bekh",
  "last_name":"bek",
  "phone":"12348888",
  "user_name":"javohir",
  "password":"12345678"
}
```



`Response`

```json
{
  "message": "Mentor created",
  "Mentor": {
    "id": 5,
    "password": "$2b$10$1j5j2So1VSoQ813pk3JEjOgCGQUup.lRiryNyj9tRv9ygNmohrWZu",
    "phone": "12345678",
    "user_name": "javohir",
    "created_at": "2023-12-13T12:45:41.168Z",
    "first_name": "bekh",
    "last_name": "bek",
    "role": "mentor",
    "updated_at": "2023-12-13T12:45:41.168Z"
  }
}
```
---
<!-- Update Admin -->

> Base url: `/api/v1/mentor`

<br>

**PUT** `/:id`

```json
{
  "first_name":"bekh",
  "last_name":"bek",
  "phone":"12348888",
  "user_name":"javohir1",
  "password":"12345678"
}
```



`Response`

```json
{
  "message": "Mentor Updated",
  "UpdateMentor": {
    "id": 4,
    "password": "12345678",
    "phone": "12348888",
    "user_name": "javohir1",
    "created_at": "2023-12-13T12:45:33.257Z",
    "first_name": "bekh",
    "last_name": "bek",
    "role": "mentor",
    "updated_at": "2023-12-13T12:52:05.340Z"
  }
}
```
---
<!-- Delete Admin -->

> Base url: `/api/v1/big_admin`

<br>

**DELETE** `/:id`

```json
{

}
```



`Response`

```json
{
  "message": "Mentor deleted",
  "rest": {
    "id": 4,
    "phone": "12348888",
    "user_name": "javohir1",
    "created_at": "2023-12-13T12:45:33.257Z",
    "first_name": "bekh",
    "last_name": "bek",
    "role": "mentor",
    "updated_at": "2023-12-13T12:52:05.340Z"
  }
}
```
<!-- Get All Admin -->

> Base url: `/api/v1/admin`

<br>

**GET** `/`

```json
{

}
```



`Response`

```json
{
  "message": "All Mentors",
  "Mentors": [
    {
      "id": 2,
      "password": "$2b$10$xjMpln0S2KA1WK2lU3Hxf.d4/Lxr.hpcK6IYEaN5bdRxvYVA.jM9G",
      "phone": "12345678",
      "user_name": "swwes",
      "created_at": "2023-12-11T14:26:34.337Z",
      "first_name": "bekh",
      "last_name": "bek",
      "role": "mentor",
      "updated_at": "2023-12-11T14:26:34.337Z"
    },
    {
      "id": 1,
      "password": "12345678",
      "phone": "12348888",
      "user_name": "bek",
      "created_at": "2023-12-11T14:25:40.408Z",
      "first_name": "bekh",
      "last_name": "bek",
      "role": "mentor",
      "updated_at": "2023-12-12T12:04:03.268Z"
    },
    {
      "id": 3,
      "password": "$2b$10$ntYseqMo/w70zkFK9G/hd.omOy7RwOrVU0Yf6Js2TBoyZYtWAc96K",
      "phone": "12345678",
      "user_name": "bekk",
      "created_at": "2023-12-13T12:45:25.242Z",
      "first_name": "bekh",
      "last_name": "bek",
      "role": "mentor",
      "updated_at": "2023-12-13T12:45:25.242Z"
    },
    {
      "id": 5,
      "password": "$2b$10$1j5j2So1VSoQ813pk3JEjOgCGQUup.lRiryNyj9tRv9ygNmohrWZu",
      "phone": "12345678",
      "user_name": "javohir",
      "created_at": "2023-12-13T12:45:41.168Z",
      "first_name": "bekh",
      "last_name": "bek",
      "role": "mentor",
      "updated_at": "2023-12-13T12:45:41.168Z"
    }
  ]
}
```