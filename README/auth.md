> Base url: `/api/v1/auth`

<br>

**POST** `/login`

```json
{
    "user_name": "shashvarbek",
    "password": "password"
}
```



`Response`

```json
{
    "message": "Succesfuly login",
    "user": {
        "id": 5,
        "first_name": "Shashvarbek",
        "last_name": "Alibek",
        "phone" : [
            "+999-93-123-45-67"
        ],
        "user_name": "shashvarbek",
        "role": "user"
    }
}
```

