
<!-- Create Big Admin -->
 Base url: `/api/v1/mentor`

<br>

**POST** `/`

```json
{
  "first_name":"bekh",
  "last_name":"bek",
  "phone":"12348888",
  "user_name":"nnnnsew",
  "password":"12345678"
}
```



`Response`

```json
{
  "message": "User created",
  "user": {
    "id": 1,
    "password": "$2b$10$/PuPKiwkRB37sV0u22ZAUuY7dib3IijsGGLJEkJX1kUVVDhRdp16u",
    "phone": "12348888",
    "user_name": "nnnnsew",
    "created_at": "2023-12-13T13:31:39.240Z",
    "first_name": "bekh",
    "last_name": "bek",
    "role": "user",
    "updated_at": "2023-12-13T13:31:39.240Z"
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
  "user_name":"ismadbek",
  "password":"12345678"
}
```



`Response`

```json
{
  "message": "User updated",
  "user": {
    "id": 1,
    "password": "$2b$10$/PuPKiwkRB37sV0u22ZAUuY7dib3IijsGGLJEkJX1kUVVDhRdp16u",
    "phone": "12348888",
    "user_name": "ismadbek",
    "created_at": "2023-12-13T13:31:39.240Z",
    "first_name": "bekh",
    "last_name": "bek",
    "role": "user",
    "updated_at": "2023-12-13T13:33:02.280Z"
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
  "message": "User deleted",
  "user": {
    "id": 1,
    "password": "$2b$10$/PuPKiwkRB37sV0u22ZAUuY7dib3IijsGGLJEkJX1kUVVDhRdp16u",
    "phone": "12348888",
    "user_name": "ismadbek",
    "created_at": "2023-12-13T13:31:39.240Z",
    "first_name": "bekh",
    "last_name": "bek",
    "role": "user",
    "updated_at": "2023-12-13T13:33:02.280Z"
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
  "message": "All users",
  "user": [
    {
      "id": 1,
      "first_name": "bekh",
      "last_name": "bek",
      "user_name": "nnnnsew",
      "phone": "12348888",
      "role": "user"
    }
  ]
}
```