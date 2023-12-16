
<!-- Create Big Admin -->
 Base url: `/api/v1/big_admin`

<br>

**POST** `/`

```json
{
  "first_name":"bekh",
  "last_name":"bek",
  "phone":"12348888",
  "user_name":"swwesssss",
  "password":"12345678"
}
```



`Response`

```json
{
  "message": "Big Admin created",
  "Big Admin": {
    "id": 6,
    "password": "$2b$10$Jvj4fbhJFqyr9tWGDY/7F.gzslsceOCti00vBa40yZV9By/4LNThC",
    "phone": "12345678",
    "user_name": "swwesssss",
    "created_at": "2023-12-12T12:59:15.509Z",
    "first_name": "bekh",
    "last_name": "bek",
    "role": "big_admin",
    "updated_at": "2023-12-12T12:59:15.509Z"
  }
}
```
---
<!-- Update Admin -->

> Base url: `/api/v1/big_admin`

<br>

**PUT** `/:id`

```json
{
  "first_name":"asqar",
  "last_name":"bek",
  "phone":"12348888",
  "user_name":"swwesdvsd",
  "password":"12345678"
}
```



`Response`

```json
{
  "message": "Big Admin Updated",
  "Update Big Admin": {
    "id": 2,
    "password": "$2b$10$hLnZrbd3/ukQSeAZYTBKCeNxNhrnQrlQBoM8uKt6ve7LT/v2g8EmG",
    "phone": "12348888",
    "user_name": "swwesdvsd",
    "created_at": "2023-12-12T12:34:53.458Z",
    "first_name": "asqar",
    "last_name": "bek",
    "role": "admin",
    "updated_at": "2023-12-12T13:00:55.422Z"
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
  "message": "Big admin deleted",
  "rest": {
    "id": 4,
    "phone": "12345678",
    "user_name": "swwessss",
    "created_at": "2023-12-12T12:38:53.999Z",
    "first_name": "bekh",
    "last_name": "bek",
    "role": "big_admin",
    "updated_at": "2023-12-12T12:38:53.999Z"
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
  "message": "All Big Admins",
  "Big admins": [
    {
      "id": 3,
      "first_name": "bekh",
      "last_name": "bek",
      "user_name": "swwesss",
      "phone": "12345678",
      "role": "big_admin"
    },
    {
      "id": 4,
      "first_name": "bekh",
      "last_name": "bek",
      "user_name": "swwessss",
      "phone": "12345678",
      "role": "big_admin"
    }
  ]
}
```