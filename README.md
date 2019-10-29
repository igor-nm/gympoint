# Gympoint - API
Gympoint is a RocketSeat’s back-end project that I need to do a full api, with database communication and many routes with treat. Also using middlewares, docker, postgres, debug on vscode and other things.
It is being used as a study project to improve my hard skills. This challenge is part of the course conclusion.

### Features:
  - Session;
  - Create user;
  - Update user;
  - Create student;
  - Update student;
  - Show all students;

### Routes:
| Method | Action          | Header              | Body      | Path                |
| ------ | ------          | ------              | ------    | ------              |
| POST   | session         | [ ]                 | [B1](#b1) | /sessions           |
| POST   | create-user     | [ "token" ]         | [B2](#b2) | /users              |
| PUT    | update-user     | [ "token" ]         | [B3](#b3) | /users              |
| POST   | create-student  | [ "token" ]         | [B4](#b4) | /students           |
| PUT    | update-student  | [ "token" ]         | [B5](#b5) | /students           |
| GET    | show-students   | [ "token" ]         |           | /students           |

###### B1
> Request body for `session`
```json
{
    "email": "turing@mail.com",
    "password": "123456"
}
```

###### B2
> Request body for `create-user`
```json
{
    "name": "Alan Turing",
    "email": "turing@mail.com",
    "password": "123456"
}
```

###### B3
> Only attributes that you wanna change. Request body for `update-user`
```json
{
    "name": "Alan Turing",
    "email": "turing@mail.com",
    "oldPassword": "123456",
    "password": "1234567",
    "confirmPassword": "1234567",
}
```

###### B4
> Request body for `create-student`
```json
{
    "name": "Alan Turing",
	"email": "turing@mail.com",
	"age": 107,
	"height": 1.75,
	"weight": 70.00
}
```

###### B5
> Only attributes that you wanna change. Request body for `update-student`
```json
{
    "name": "Alan Turing",
	"email": "turing@mail.com",
	"age": 107,
	"height": 1.75,
	"weight": 72.00
}
```
