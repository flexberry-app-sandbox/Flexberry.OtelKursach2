docker build --no-cache -f SQL\Dockerfile.PostgreSql -t otelkursach2-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t otelkursach2-java/app ../../..
