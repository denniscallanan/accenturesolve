
from app import app
import os


if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5052))
    app.run(host='172.20.10.11', port=port)
