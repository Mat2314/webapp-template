# The base image that we are going to use
FROM python:3.9

# Define default work directory
WORKDIR /code

# First, we copy requirements.txt into our container's /code directory
COPY api/requirements.txt /code/requirements.txt

# Install all the requirements
RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt

# Copy all of the api server source code
COPY ./api /code/

# Spin up the application by running this command
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]