
<!-- Create Big Admin -->
 Base url: `/api/v1/education`

<br>

**POST** `/`

```json
{
  "education_name":"Platina"
}
```



`Response`

```json
{
  "message": "Education created",
  "education": {
    "id": 1,
    "education_name": "Platina",
    "created_at": "2023-12-13T12:57:50.551Z",
    "updated_at": "2023-12-13T12:57:50.551Z"
  }
}
```
---
<!-- Update Admin -->

> Base url: `/api/v1/education`

<br>

**PUT** `/:id`

```json
{
  "education_name":"aligarx"
}
```



`Response`

```json
{
  "message": "Education updated",
  "education": {
    "id": 1,
    "education_name": "aligarx",
    "created_at": "2023-12-13T12:57:50.551Z",
    "updated_at": "2023-12-13T12:57:50.551Z"
  }
}
```
---
<!-- Delete Admin -->

> Base url: `/api/v1/education`

<br>

**DELETE** `/:id`

```json
{

}
```



`Response`

```json
{
  "message": "Education deleted",
  "education": {
    "id": 1,
    "education_name": "aligarx",
    "created_at": "2023-12-13T12:57:50.551Z",
    "updated_at": "2023-12-13T12:57:50.551Z"
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
  "message": "All education",
  "Educations": [
    {
      "id": 1,
      "education_name": "aligarx",
      "created_at": "2023-12-13T12:57:50.551Z",
      "updated_at": "2023-12-13T12:57:50.551Z"
    }
  ]
}
```