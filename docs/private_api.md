Specification for the API between backend and frontend.

Feed
======

Websocket : "/feed"

```
{
    "text": <the text of the post>,
    "submitDate": <timestamp when the post was written in milliseconds>,
    "user": <user name>,
    "hostedOn": <service name>
}
```

Example: 

```json
{
    "text": "You can check the source code of mlabhk-site here : https://github.com/sebpiq/mlabhk-site",
    "submitDate": 1369564532780,
    "user": "Sébastien Piquemal",
    "hostedOn": "onni"
}
```
