
<!-- Create Big Admin -->
 Base url: `/api/v1/student`

<br>

**POST** `/`

```json
{
  "first_name":"bekh",
  "last_name":"bek",
  "phone":"12348888",
  "user_name":"swwes",
  "password":"12345678"
}
```



`Response`

```json
{
  "message": "Student created",
  "student": {
    "id": 2,
    "password": "[object Promise]",
    "phone": "12345678",
    "user_name": "swwes",
    "first_name": "bekh",
    "last_name": "bek",
    "role": "student",
    "created_at": "2023-12-13T13:27:28.096Z",
    "updated_at": "2023-12-13T13:27:28.096Z"
  }
}
```
---
<!-- Update Admin -->

> Base url: `/api/v1/student`

<br>

**PUT** `/:id`

```json
{
  "first_name":"bekh",
  "last_name":"bek",
  "phone":"12348888",
  "user_name":"bek",
  "password":"12345678"
}
```



`Response`

```json
{
  "message": "Student Updated",
  "UpdateStudent": {
    "id": 2,
    "password": "12345678",
    "phone": "12348888",
    "user_name": "bek",
    "first_name": "bekh",
    "last_name": "bek",
    "role": "student",
    "created_at": "2023-12-13T13:27:28.096Z",
    "updated_at": "2023-12-13T13:28:41.890Z"
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
  "message": "Student deleted",
  "rest": {
    "id": 2,
    "phone": "12348888",
    "user_name": "bek",
    "first_name": "bekh",
    "last_name": "bek",
    "role": "student",
    "created_at": "2023-12-13T13:27:28.096Z",
    "updated_at": "2023-12-13T13:28:41.890Z"
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
  "message": "All Student",
  "All students": [
    {
      "id": 1,
      "password": "[object Promise]",
      "phone": "12345678",
      "user_name": "swwe",
      "first_name": "bekh",
      "last_name": "bek",
      "role": "student",
      "created_at": "2023-12-11T14:24:58.458Z",
      "updated_at": "2023-12-11T14:24:58.458Z"
    },
    {
      "id": 2,
      "password": "12345678",
      "phone": "12348888",
      "user_name": "bek",
      "first_name": "bekh",
      "last_name": "bek",
      "role": "student",
      "created_at": "2023-12-13T13:27:28.096Z",
      "updated_at": "2023-12-13T13:28:41.890Z"
    }
  ]
}
```