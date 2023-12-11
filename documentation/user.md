> Base url: `/api/v1/user`

<br>

**POST** `/`

```json
{
    "first_name":"bek",
    "last_name":"bekov",
    "user_name":"bekov",
    "password":"bek04",
    "phone":"+998-99-999-99-99",
}
```



`Response`

```json
{
    "message": "User created",
    "user": {
        "id": 5,
        "first_name": "bek",
        "last_name": "bekov",
        "user_name": "bek04",
        "phone" : "+998-99-999-99-99"
    }
}
```
---

> Base url: `/api/v1/user`

<br>

**PUT** `/:id`

```json
{
    "first_name":"bek",
    "last_name":"bekov",
    "user_name":"bekov",
    "password":"bek04",
    "phone":"+998-99-999-99-99",
}
```



`Response`

```json
{
    "message": "User updated",
    "user": {
        "id": 5,
        "first_name": "bek",
        "last_name": "bekov",
        "user_name": "bek04",
        "phone" : "+998-99-999-99-99"
    }
}
```
---

> Base url: `/api/v1/user`

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
        "id": 5,
        "first_name": "bek",
        "last_name": "bekov",
        "user_name": "bek04",
        "phone" : "+998-99-999-99-99"
    }
}
```


> Base url: `/api/v1/user`

<br>

**GET** `/`

```json
{

}
```



`Response`

```json
{
    "message": "All user",
    "users": {
        "id": 5,
        "first_name": "bek",
        "last_name": "bekov",
        "user_name": "bek04",
        "phone" : "+998-99-999-99-99"
    },
     {
        "id": 6,
        "first_name": "bek",
        "last_name": "bekov",
        "user_name": "bek04",
        "phone" : "+998-99-999-99-99"
    },

     {
        "id": 7,
        "first_name": "bek",
        "last_name": "bekov",
        "user_name": "bek04",
        "phone" : "+998-99-999-99-99"
    }
}
```