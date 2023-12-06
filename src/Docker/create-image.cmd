docker build --no-cache -f SQL\Dockerfile.PostgreSql -t otelkursach2/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t otelkursach2/app ../..
