docker build --no-cache -f SQL\Dockerfile.PostgreSql -t modulucheta-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t modulucheta-java/app ../../..
