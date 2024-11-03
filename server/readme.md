# API Specs

### Get Todos

<span style="background-color: green; padding: 4px; border-radius: 4px">GET</span> `/todos`

**Returns**

```json
{
  "data": [
    {
      "id": "5724394859",
      "title": "Buy milk",
      "completed": false
    },
    {
      "id": "58698248",
      "title": "Go to gym",
      "completed": true
    }
  ]
}
```

<span style="background-color: orange; color: black; padding: 4px; border-radius: 4px">POST</span> `/todos`

**Parameters**

```json
{
  "title": str
}
```

**Returns**

```json
{
  "data": {
    "id": 986234085237,
    "title": "Buy milk",
    "completed": false
  }
}
```

<span style="background-color: green; padding: 4px; border-radius: 4px">GET</span> `/todos/{todoId}`

**Returns**

```json
{
  "data": {
    "id": todoId,
    "title": "Buy milk",
    "body": "Buy milk from the store"
  }
}
```

<span style="background-color: orange; color: black; padding: 4px; border-radius: 4px">POST</span> `/todos/{todoId}`

**Parameters**

```json
{
  "body: "str
}
```

**Returns**

```json
{
  "data": {
    "id": todoId,
    "title": "Buy milk",
    "body": "Buy milk from the store"
  }
}
```
