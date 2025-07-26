FROM python:3.11-slim

# Upgrade system packages to patch vulnerabilities
RUN apt-get update && apt-get upgrade -y && apt-get clean

WORKDIR /app
COPY . .

RUN pip install --upgrade pip
RUN pip install -r requirements.txt

EXPOSE 5000

CMD ["python", "app.py"]
