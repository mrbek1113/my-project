
<!-- Create Admin -->
 Base url: `/api/v1/admin`

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
{
  "message": "Admin created",
  "Mentor": {
    "id": 3,
    "password": "$2b$10$.o8WC3AY6B1LwyVfibnVne7YuMpta/JIFddM2lpFy9BTnWAhS6Ni.",
    "phone": "12345678",
    "user_name": "swwes",
    "created_at": "2023-12-12T12:50:30.630Z",
    "first_name": "bekh",
    "last_name": "bek",
    "role": "admin",
    "updated_at": "2023-12-12T12:50:30.630Z"
  }
}
}
```
---
<!-- Update Admin -->

> Base url: `/api/v1/admin`

<br>

**PUT** `/:id`

```json
{
  "first_name":"bekh",
  "last_name":"bek",
  "phone":"12348888",
  "user_name":"bek",
  "password":"12122121"
}
```



`Response`

```json
{
{
  "message": "Admin Updated",
  "UpdateAdmin": {
    "id": 3,
    "password": "$2b$10$.o8WC3AY6B1LwyVfibnVne7YuMpta/JIFddM2lpFy9BTnWAhS6Ni.",
    "phone": "12348888",
    "user_name": "bek",
    "created_at": "2023-12-12T12:50:30.630Z",
    "first_name": "bekh",
    "last_name": "bek",
    "role": "admin",
    "updated_at": "2023-12-12T12:52:39.224Z"
  }
}
}
```
---
<!-- Delete Admin -->

> Base url: `/api/v1/admin`

<br>

**DELETE** `/:id`

```json
{

}
```



`Response`

```json
{
{
  "message": "Admin deleted",
  "Deleted Admin": {
    "id": 3,
    "phone": "12348888",
    "user_name": "bek",
    "created_at": "2023-12-12T12:50:30.630Z",
    "first_name": "bekh",
    "last_name": "bek",
    "role": "admin",
    "updated_at": "2023-12-12T12:52:39.224Z"
  }
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
{
  "message": "All Admins",
  "Admins": [
    {
      "id": 4,
      "first_name": "bekh",
      "last_name": "bek",
      "user_name": "bekk",
      "phone": "12345678",
      "role": "admin"
    },
    {
      "id": 5,
      "first_name": "bekh",
      "last_name": "bek",
      "user_name": "nodir",
      "phone": "12345678",
      "role": "admin"
    }
  ]
}
}
```