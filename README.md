# Vite React with Python FastAPI Backend

Project to test react-query.
Check out [API Specs](server/readme.md)

### Usage

1. Setup python environment

> MacOS/Linux

```bash
python -m venv ./server/env && source ./server/env/bin/activate
```

> Windows

```bash
python -m venv ./server/env && source ./server/env/Scripts/activate
```

2. Install dependencies

```bash
npm install && pip install -r ./server/requirements.txt
```

3. Run the backend

```bash
fastapi dev ./server/main.py
```

> if it doesn't work, try `pip install "fastapi[standard]"`

or

```bash
uvicorn server.main:app --reload
```

4. Run the frontend

```bash
npm run dev
```
